import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import {Context} from "../../context/Context"
import { useNavigate } from 'react-router-dom'

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  
  const {user, dispatch} = useContext(Context)
  const navigate = useNavigate()

  const handleDelete = async () => {
    const res = await axios.delete(`/user/${user._id}`, {data: {userId: user._id}});
    if(res) {
      setDeleteModal(false)
      dispatch({type: "LOGOUT"})
      navigate('/')
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/user/${user._id}`, {userId: user._id, username, email, password})
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/user/${user._id}`)
        console.log(res.data)
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle" onClick={() => setDeleteModal(true)}>Delete Account</span>
        </div>
        <form className='settingForm'>
          <label>Profile Picture</label>
          <div className="settingProfilePicture">
            <img
                className='settingImg'
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput"><i className="settingProfilePictureIcon fa-solid fa-user"></i></label>
              <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='John Doe' value={username} onChange={e => setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder='johndoe@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className='settingSubmit' type='submit' onClick={handleUpdate}>Update Profile</button>
        </form>
      </div>
      {deleteModal && (
        <div className="modal">
          <div className="modalTextTitle">
            Do you want to delete your account?
          </div>
          <div className="modalOption">
            <button className="modalYes" onClick={handleDelete}>
              Yes
            </button>
            <button className="modalNo" onClick={() => setDeleteModal(false)}>
              No
            </button>
          </div>
        </div>
      )}
      
      <Sidebar />
    </div>
  )
}

export default Settings