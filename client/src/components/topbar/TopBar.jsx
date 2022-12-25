import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';
function TopBar() {
  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <Link to='/'><li className='topListItem'>HOME</li></Link>
          <Link to='/about'><li className='topListItem'>ABOUT</li></Link>
          <Link to='/contact'><li className='topListItem'>CONTACT</li></Link>
          <Link to='/write'><li className='topListItem'>WRITE</li></Link>
          <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to='/settings'>
          {
            user ? (
              <img
                className="topImg"
                src={user.profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                alt="profile picture"
              />
            )
            : (
              <ul className='topList'>
                <Link to='/login'><li className='topListItem'>Login</li></Link>
                <Link to='/register'><li className='topListItem'>Register</li></Link>
              </ul>
            )
          } 
          
        </Link>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar