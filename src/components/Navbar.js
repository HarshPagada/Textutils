import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

          const yellow = () => {
           document.body.style.backgroundColor = 'yellow';
         }

         const green = () => {
           document.body.style.backgroundColor = 'green';
         }

         const red = () => {
            document.body.style.backgroundColor = 'red';
         }

          const light = () => {
           document.body.style.backgroundColor = 'white';
         }

  return (
    <div className='flex'>
      <nav className={`navbar navbar-expand-lg Navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.About}</Link>
              </li>
            </ul>

            <button className="btn btn-warning mx-2 my-2" onClick={yellow}>Yellow</button>
            <button className="btn btn-success my-2 mx-2" onClick={green}>Green</button>
            <button className="btn btn-danger my-2 mx-2" onClick={red}>Red</button>
            <button className="btn btn-light mx-2 my-2" onClick={light}>Light</button>

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.protoType = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Set any Title',
  About: 'set any Name'
};


