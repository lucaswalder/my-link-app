import './error.css'
import errorImg from '../../assets/notfound.svg'
import { Link } from 'react-router-dom';
import {FiChevronsLeft} from 'react-icons/fi'

function Error() {
  return <div className='container'>
      <img src={errorImg} alt="" className="error-img" />
      <h4 className="title-4">Page not found!</h4>
      <Link to="/" className='btn-back'>
      <FiChevronsLeft size={24} color='#2b2b2b'/>Back to home
      </Link>
  </div>;
}

export default Error;
