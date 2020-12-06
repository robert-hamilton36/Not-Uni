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
      <div className='results-page'>

        <div className="left column"> 
          <div className='categories-table'>
            <div className='title'>
              <h2>Categories</h2>
            </div>

            <div className="categories">

              <Link to={'/categories/results/HTML'}>
                <div className='single-category'>
                  <img src='/images/icons/html.png'/>
                  <span> HTML</span> 
                </div>
              </Link>

              <Link to={'/categories/results/CSS'}>
                <div className='single-category'>
                  <img src='/images/icons/css.png'/>
                  <span> CSS</span> 
                </div>
              </Link>

              <Link to={'/categories/results/JavaScript'}>
                <div className='single-category'>
                  <img src='/images/icons/javascript.png'/>
                  <span> JavaScript</span> 
                </div>
              </Link>

              <Link to={'/categories/results/Ruby'}>
                <div className='single-category'>
                  <img src='/images/icons/ruby.png'/>
                  <span> Ruby</span> 
                </div>
              </Link>

              <Link to={'/categories/results/Python'}>
                <div className='single-category'>
                  <img src='/images/icons/python.png'/>
                  <span>Python</span>
                </div>
              </Link>

              <Link to={'/categories/results/Csharp'}>
                <div className='single-category'>
                  <img src='/images/icons/Csharp.png'/>
                  <span>C#</span>
                </div>
              </Link>

              <Link to={'/categories/results/C++'}>
                <div className='single-category'>
                  <img src='/images/icons/C++.png'/>
                  <span>C++</span>
                </div>
              </Link>

            </div>
            
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
