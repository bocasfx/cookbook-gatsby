import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Index } from 'elasticlunr'
import parse from 'url-parse'
import RecipeCard from '../components/recipe-card'
import styled from 'styled-components'

const SearchHeader = styled.div`
  display: flex;
  margin: 0 0 64px;
  justify-content: center;
  align-items: center;
`

const SearchLabel = styled.div`
  margin-right: 16px;
`

const SearchBox = styled.input`
  width: 40%;
  display: block;
  padding: 8px;
`

export default class Search extends Component {
  constructor (props) {
    super(props)
    const query = parse(props.location.search).query.split('=')[1]
    this.state = {
      query,
      results: []
    }
  }

  static propTypes = {
    data: PropTypes.object,
    location: PropTypes.object
  }

  componentWillMount () {
    if (this.state.query && this.state.query.length) {
      this.search()
    }
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : Index.load(this.props.data.siteSearchIndex.index)
  }

  search = (evt) => {
    const query = evt && evt.target ? evt.target.value : this.state.query
    const options = {
      fields: {
        title: {
          expand: true
        },
        category: {
          expand: true
        },
        description: {
          expand: true
        }
      }
    }
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, options)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    })
  }

  render () {
    return (
      <div>
        <SearchHeader>
          <SearchLabel>Search:</SearchLabel>
          <SearchBox type='text' value={this.state.query} onChange={this.search} placeholder='Search for anything' />
        </SearchHeader>
        {this.state.results.map((page, idx) => {
          const url = `/${page.category}/${page.uid}`
          const description = page.description.slice(0, 250) + '...'
          return (
            <RecipeCard
              key={idx}
              title={page.title}
              date={page.date}
              url={url}
              imageUrl={page.imageUrl}
              description={description}
            />
          )
        })}
      </div>
    )
  }
}

export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`
