import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ fontFamily: '' }} >
      <div className="container-fluid">
        <strong><Link className="navbar-brand" to="/">{props.title}</Link></strong>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TryIt">{props.tryIt}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SpellChecker">Spell Checker</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li>
            {/* Other navigation items */}
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  tryIt: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Text_Friendly",
  About: "About Us",
  tryIt: "Try It"
};
