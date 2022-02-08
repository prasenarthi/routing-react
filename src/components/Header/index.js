import {Link} from 'react-router-dom'

import './index.css'

const imgUrl = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'

const Header = () => (
  <nav className="nav-container">
    <div className="main-container">
      <img src={imgUrl} alt="wave" className="logo" />
      <ul className="menu-container">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
