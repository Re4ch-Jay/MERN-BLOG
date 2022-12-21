import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <div className="registerTitle">Register</div>
        <form className="registerForm">

            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter your username' />

            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' />

            <button className='registerButton'>Register</button>
        </form>
        <div className="registerRegisterContainer">
            <p>Already have an account?</p>
            <button className='registerLogin'>
              <Link to='/login'>
                Login
              </Link>
            </button>
        </div>
    </div>
  )
}

export default Register