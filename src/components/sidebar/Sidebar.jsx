import './sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <div className="sidebarTitle">ABOUT ME</div>
            <img
                src="https://images.unsplash.com/photo-1671533602071-7ed368cb01ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt=""
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sapiente ipsum veniam sunt dolorem modi assumenda ipsam quod numquam, !</p>
        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">CATEGORIES</div>
            <div className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </div>
        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">FOLLOW US</div>
            <div className="sidebarSocial">
                <i className="sideBarIcon fa-brands fa-square-facebook"></i>
                <i className="sideBarIcon fa-brands fa-square-twitter"></i>
                <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                <i className="sideBarIcon fa-brands fa-square-github"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar