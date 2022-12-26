import React, { useEffect, useState } from 'react'
import FacilizationLogo from '../../../assests/facilization-nav-logo.png';
import { AccountCircle } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import './style.css';
import { Link } from 'react-router-dom';
import { selectUser, logout } from '../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {

    const [openNav, setOpenNav] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const [clickZeroX, setClickZeroX] = useState(false);

    //modal
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    //Redux
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let navClass = document.getElementById("navT");
        let menuClass = document.getElementById("menu");

        if (openNav === true) {
            navClass.classList.add("active")
            menuClass.classList.add("open")

        }
        else {
            navClass.classList.remove("active")
            menuClass.classList.remove("open")
        }

    }, [openNav])

    useEffect(() => {
        let navClass = document.getElementById("navT");

        if (window.scrollY < 8 && clickZeroX) {
            navClass.classList.add("bg");
        }

        if (window.scrollY < 8 && !clickZeroX) {
            navClass.classList.remove("bg");

        }
    }, [clickZeroX])

    const changeBackground = () => {
        if (window.scrollY >= 8) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    //modal
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    }


    window.addEventListener('scroll', changeBackground)

    return (

        <section className="navigation__bar-section" id="nav-bar">

            <div className={navBar ? "navT bg" : "navT"} id="navT">
                <div className="icon" onClick={() => { setOpenNav(!openNav); setClickZeroX(!clickZeroX) }}></div>
                <Link to="/" style={{ margin: 'auto', height: '100%' }}><img src={FacilizationLogo} alt="logo" className="navigation__bar-section-logo" /></Link>
                <div className="profile-icon">
                    <IconButton
                        style={{ color: 'white', fontSize: '2.5rem' }}
                        aria-label="profile"
                        size="large"
                        onClick={(e) => setAnchorEl(e.currentTarget)}>
                        {user ? <p style={{ textTransform: "capitalize" }}>{user.name}</p> : ""}
                        <AccountCircle fontSize="inherit" />
                    </IconButton>
                </div>

                <div>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >

                        {user ? (
                            <>
                                <MenuItem>
                                    <Button component={Link} to="/preferences">
                                        <LoginIcon style={{ paddingRight: '1rem' }} /> Preferences
                                    </Button>
                                </MenuItem>

                                <MenuItem>
                                    <Button onClick={logoutUser}>
                                        <LoginIcon style={{ paddingRight: '1rem' }} /> Log Out
                                    </Button>
                                </MenuItem>
                            </>

                        )
                            :
                            (
                                <MenuItem>
                                    <Button size="large" component={Link} to="/login">
                                        <LoginIcon fontSize="large" style={{ paddingRight: '1rem' }} /> Login / SignUp
                                    </Button>
                                </MenuItem>
                            )
                        }

                    </Menu>
                </div>

            </div >

            <div id="menu">
                <ul>
                    <li><Link to="/about-us" style={{ color: 'white' }}>About Us</Link></li>
                    <li><Link to="/products" style={{ color: 'white' }}>Products</Link></li>
                    <li><Link to="/services" style={{ color: 'white' }}>Services</Link></li>
                    <li><Link to="/solutions" style={{ color: 'white' }}>Solutions</Link></li>
                    <li><Link to="/news" style={{ color: 'white' }}>News</Link></li>
                    <li><Link to="/" style={{ color: 'white' }}>Career</Link></li>
                    <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
                </ul>
            </div>
        </section >
    )
}

export default NavigationBar
