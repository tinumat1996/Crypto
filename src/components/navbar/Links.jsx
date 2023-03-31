import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/nav/style.css';

const Links = () => {
  return (
   <Fragment>
       <nav className='nav'>
           <div className='navbar'>
                 <div>
                   <Link className = "link_main" to="/">KRYPTO</Link>
                   </div>
                <ul>
                   
                    <li>
                        <Link className='link_home' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link_market' to="/market">Market</Link>
                    </li>
                    <li>
                        <Link className='link_learn' to="/learn">Learn</Link>
                    </li>
                    <li>
                        <Link className='link_whyUs' to="/whyus">Why Us</Link>
                    </li>
                    <li>
                        <Link className='link_about' to="/about">About</Link>
                    </li>
                    <li>
                        <Link className='link_careers' to="/careers">Careers</Link>
                    </li>
                </ul>
           </div>
       </nav>
   </Fragment>
  )
}

export default Links