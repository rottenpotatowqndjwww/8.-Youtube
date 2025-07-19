import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.svg'
import search_icon from '../../assets/search.png'
import microphone from '../../assets/microphone.png'
import upload_icon from '../../assets/upload.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'  // Import CSS styles

const Navbar = ({setSideBar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img 
          src={menu_icon} 
          onClick={() => {setSideBar(prev => !prev)}} 
          alt="" 
          className='menu-icon'
        />
        <div className="logo-container">
          <Link to={`/`} className="logo-container flex-div">
            <img src={logo} alt="" className='logo' />
            <span>YouTube<sup className="sup">NP</sup></span>
          </Link>
        </div>
      </div>
      
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="" />
        </div>
        <div className="mic">
          <img 
            src={microphone} 
            alt="" 
            className='mic-icon' 
            onClick={() => toast.info("Feature To Be Added Soon !!!")} 
          />
        </div>
      </div>
      
      <div className="nav-right flex-div">
        <img 
          src={upload_icon} 
          alt="" 
          className='upload-icon' 
          onClick={() => toast.info("Feature To Be Added Soon !!!")}
        />
        <img 
          src={notification_icon} 
          alt="" 
          className="notification-icon" 
          onClick={() => toast.info("Feature To Be Added Soon !!!")}
        />
        <img 
          src={profile_icon} 
          alt="" 
          className="userIcon" 
          onClick={() => toast.info("Feature To Be Added Soon !!!")}
        />
      </div>
      
      {/* Only one ToastContainer needed */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </nav>
  )
}

export default Navbar