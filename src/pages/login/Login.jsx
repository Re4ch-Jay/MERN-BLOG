import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <div className="loginTitle">Login</div>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' />

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' />

            <button className='loginButton'>Login</button>
        </form>
        <div className="loginRegisterContainer">
            <p>Don't have account?</p>
            <button className='loginRegister'>
              <Link to='/register'>
                Register
              </Link>
            </button>
        </div>
    </div>
  )
}

export default Login