import React from 'react'
import { Route, Link } from 'react-router-dom'
import Search from './Search'



class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="top-nav">
          <div className = 'logo' >
          <Link to="/"> 
            <img src="/images/not_uni.png" />
          </Link>
          </div>

         {this.props.location.pathname === '/' ?  
           '': <div >
           <Route path = '/' component={Search}/>
         </div>
          }
          {/* if user is NOT signed in */}

         <div className='text' >
          <Link to="/register"> 
            <div className ='text'> 
              <span> Register </span> 
            </div>
          </Link>
          <Link to="/login"> 
            <div className ='text' > 
              <span> Login </span> 
            </div>
          </Link>

          {/* if user is signed in */}

          <Link to="/profile"> 
            <div className ='text' > 
              <span> Account </span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
          </Link>
         </div>
        </nav>
      </>
    )
  }
}

export default Nav
