import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

function Settings() {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className='settingForm'>
          <label>Profile Picture</label>
          <div className="settingProfilePicture">
            <img
                className='settingImg'
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput"><i class="settingProfilePictureIcon fa-solid fa-user"></i></label>
              <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='John Doe' />
          <label>Username</label>
          <input type="email" placeholder='johndoe@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingSubmit'>Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings