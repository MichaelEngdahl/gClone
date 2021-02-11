import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
import "./style/Header.css"
import { IconButton, Avatar } from "@material-ui/core/"
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

function Header () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon /> 
        </IconButton>
        <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail logo" />
      </div> 
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  )
}

export default Header 