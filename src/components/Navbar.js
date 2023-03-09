import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/home">NewsBlast</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to='/home'>Home </Link>
            <Link className="nav-item nav-link" to="/home">About</Link>
            <Link className='nav-item nav-link' to='/business'>Business</Link>
            <Link className='nav-item nav-link' to='/entertainment'>Entertainment</Link>
            <Link className='nav-item nav-link' to='/health'>Health</Link>
            <Link className='nav-item nav-link' to='/science'>Science</Link>
            <Link className='nav-item nav-link' to='/sports'>Sports</Link>
            <Link className='nav-item nav-link' to='/technology'>Technology</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
