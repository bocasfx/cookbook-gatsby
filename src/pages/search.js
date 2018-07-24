import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Index } from 'elasticlunr'
import Link from 'gatsby-link'
import qs from 'query-string'

export default class Search extends Component {
  constructor(props) {
    super(props)
    const query = qs.parse(props.location.search).term
    this.state = {
      query,
      results: []
    }
  }

  static propTypes = {
    data: PropTypes.object,
    location: PropTypes.object
  }

  componentWillMount() {
    if (this.state.query && this.state.query.length) {
      this.search()
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map((page, idx) => {
            const url = `/${page.category}/${page.title.toLowerCase()}`
            return (
              <li key={idx}>
                <Link to={url}>{page.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : Index.load(this.props.data.siteSearchIndex.index)
  }

  search = evt => {
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
}

export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`
