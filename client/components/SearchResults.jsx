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
    this.props.dispatch(setSearchedModules(filteredModules)) }

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
      <div className='results-page'>

        <div className='categories-table'>
          <div className='title'>
           <h4>Categories</h4>
          </div>
       
            <div className='category'>
              <Link to={'/categories/results/HTML'}> <img src='/images/icons/html.png'/>HTML</Link>
            </div>
            <div className='category'>
              <Link to={'/categories/results/CSS'}><img src='/images/icons/css.png'/>CSS</Link>
            </div>
            <div className='category'>
              <Link to={'/categories/results/JavaScript'}><img src='/images/icons/javascript.png'/>JavaScript</Link>
            </div>
            <div className='category'>
              <Link to={'/categories/results/Ruby'}><img src='/images/icons/ruby.png'/>Ruby</Link>
            </div>
            <div className='category'>
              <Link to={'/categories/results/Python'}><img src='/images/icons/python.png'/><span>Python</span></Link>
            </div>
        </div>

        <div className='search-results'>
          
            {this.props.searchModules.length === 0 ? 
              <>
                <div className='no-matches-message'>
                  <h5>Sorry, we couldn't find a module that matches your search</h5>
                  <h5>Here are some other modules you might be interested in:</h5>
                </div>
                {this.props.modules.map(module =>
                  <ModuleCard key={module.id} module={module} />)}
              </>
              : this.props.searchModules.map(module =>
                <ModuleCard key={module.id} module={module} />
              )}  
        </div>
      </div>
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
