import {FiInstagram, FiGithub, FiLink} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './menu.css'

function Menu() {
  return <div className="menu">
      <a href="https://github.com/lucaswalder" target="_blank" className="social">
        <FiGithub size={24} color='#fff'/>
      </a>
      <a href="https://www.instagram.com/lucaswalder.dev/" target="_blank" className="social">
        <FiInstagram size={24} color='#fff' />
      </a>
      <Link to="/links">
      <button className='menu-item'>
          <FiLink size={24}/>
          My links
      </button>
      </Link>
  </div>;
}

export default Menu;
