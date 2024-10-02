import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'? 'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'? 'dark':'light'}`} to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" >Enable dark black mode </label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" >Enable dark red mode </label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" >Enable dark blue mode </label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string}; 
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};