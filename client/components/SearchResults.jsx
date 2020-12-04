import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchedModules } from '../actions'
import ModuleCard from './ModuleCard'
import Search from './Search'


class SearchResults extends React.Component {


  componentDidMount() {

    const q = this.props.match.params.q
    const filteredModules = this.props.modules.filter(module => {
      return (module.title.toLowerCase().includes(q.toLowerCase())
      )
    })
    this.props.dispatch(setSearchedModules(filteredModules))

  }



  componentDidUpdate(prevProps) {

    const q = this.props.match.params.q
    if (q !== prevProps.match.params.q) {
      const filteredModules = this.props.modules.filter(module => {
        return (module.title.toLowerCase().includes(q.toLowerCase())
        )
      })
      this.props.dispatch(setSearchedModules(filteredModules))
    }
  }




  render() {


    return (
      <>

        <div className='categories-table'>
          <h4>Categories</h4>
          <ul>
            <li><Link to={'/categories/results/HTML'}>HTML</Link></li>
            <li><Link to={'/categories/results/CSS'}>CSS</Link></li>
            <li><Link to={'/categories/results/JavaScript'}>JavaScript</Link></li>
            <li><Link to={'/categories/results/Ruby'}>Ruby</Link></li>
            <li><Link to={'/categories/results/Python'}>Python</Link></li>
          </ul>
        </div>

        <div className='search-results'>
          <ul>
            {this.props.searchModules.length === 0 ? <div><h5>Sorry, we couldn't find a module that matches your search</h5>
              <h5>Here are some other modules you might be interested in:</h5>

              {this.props.modules.map(module =>
                <ModuleCard key={module.id} module={module} />)}</div>


              : this.props.searchModules.map(module =>
                <ModuleCard key={module.id} module={module} />
              )}

          </ul>
        </div>
      </>
    )
  }


}

function mapStateToProps(globalState) {
  return {
    searchModules: globalState.searchModules,
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(SearchResults)
