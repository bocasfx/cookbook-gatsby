import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Index } from 'elasticlunr'
import Link from 'gatsby-link'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ``,
      results: []
    }
  }

  static propTypes = {
    data: PropTypes.object
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map((page, idx) => {
            const url = `/${page.category}/${page.title.toLowerCase()}`
            return (
              <li key={idx}>
                <Link to={url}>{page.title}</Link>
              </li>)
          })}
        </ul>
      </div>
    )
  }

  getOrCreateIndex = () => {
    return this.index ? this.index : Index.load(this.props.data.siteSearchIndex.index)
  }

  search = (evt) => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
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
