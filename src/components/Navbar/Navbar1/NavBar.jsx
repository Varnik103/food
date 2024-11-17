import { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoMenuSharp } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { GoArrowDown } from "react-icons/go";

import Login from '../../Auth/Login/Login';
import Signup from '../../Auth/Signup/Signup';
import './NavBar.css'

let NavBar = ({ toggleMenu, setToggleMenu, page }) => {
    let [menuDisplay, setMenuDisplay] = useState(false);
    let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || true);
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    return (
        <div className='navbar'>
            <IoMenuSharp className='menuBar' onClick={() => setToggleMenu(val => !val)}/>
        <div className='navbarInner'>
                <div className='leftSide'>
                    {/* <CiMobile2  className="img"/> */}
                {/* <Link to='/' className='appTxt'>Get The App</Link> */}
            </div>
            <div className='rightSide'>
                {page !== 'add-restaurant' ? <Link to='/add-restaurant' className='menuItem' >Add restaurant</Link> : ''}
                {loggedIn ? (<div className='menuItem'>
                    <div className='profile' onClick={() => setMenuDisplay(val => !val)}>
                        {/* <img src={profilePic} alt="profile pic" className={css.profilePic} /> */}
                            <div className='profileName'>Profile</div>
                            <GoArrowDown className="arrow"/>
                    </div>
                    <div className='menu' style={{display: menuDisplay ? "block" : ""}}>
                        <Link to='/user/ll/reviews' className='menuItemLinkTxt'>
                            <div className='menuItemLink'>
                                Profile
                            </div>
                        </Link>
                
                        <Link to='/user/ll/bookmarks' className='menuItemLinkTxt'>
                            <div className='menuItemLink'>
                                Bookmarks
                            </div>
                        </Link>
                        <Link to='/user/ll/reviews' className='menuItemLinkTxt'>
                            <div className='menuItemLink'>
                                Reviews
                            </div>
                        </Link>        
                        <div className='menuItemLinkTxt' onClick={logoutHandler}>
                            <div className='menuItemLink'>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>) : (<>
                    <div className='menuItem' onClick={() => setAuth({ closed: false, login: true, signup: false })}>Log in</div>
                    <div className='menuItem' onClick={() => setAuth({ closed: false, login: false, signup: true })}>Sign up</div>
                </>)}
            </div>
        </div>
        <div className='modals'>
            {auth?.login ? <Login setAuth={setAuth} setLoggedIn={setLoggedIn} /> : null}
            {auth?.signup ? <Signup setAuth={setAuth} /> : null}
        </div>
    </div>
    )
};

export default NavBar;
