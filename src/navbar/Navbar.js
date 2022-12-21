import React, { useState, useEffect } from "react";
import { Button } from "../buttons/Button";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({isCalledEffect}) {
  const [loginOrNot, setLoginOrNot] = useState('')
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("login"));

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [isCalledEffect]);

  window.addEventListener("resize", showButton);

          useEffect(() => {
      var loginSuccessOrerror = sessionStorage.getItem("corboCoin");
      setLoginOrNot(loginSuccessOrerror)
      console.log(loginSuccessOrerror)

              }, [])


    useEffect(() => {}, [localStorage.getItem("login"),isLogin])

  return (
    <>
     

      <nav className="navBar">

       <div className="navBarLeft">
       <div className="homeLogo">
        <NavLink  to="/"   className="navbar-logo"  
              onClick={closeMobileMenu}>
            Home
            {/* <i class="fab fa-typo3" /> */}
            {/* LINE ABOVE = NAVBAR LOGO */}
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

        </div>
        
        <div>
           <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="">
              <NavLink to="/about"  className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links"  
            }   onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            
            <li className="">
              <NavLink to="/media"  className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links"  } onClick={closeMobileMenu}>
                Media
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/shop" className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links" }  onClick={closeMobileMenu}>
                Shop
              </NavLink>
            </li>

            <li className="">
              <NavLink to="/mediahighlight" className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links" }  onClick={closeMobileMenu}>
                MediaHighlight
              </NavLink>
            </li>
            
            {isLogin && <li className="">
              <NavLink to="/devPage" className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links" }  onClick={closeMobileMenu}>
                Dev Page
              </NavLink>
            </li>}


            {/* {loginOrNot === "success" ?<li className="nav-item">
              <NavLink to="/mediahighlight" className={({ isActive }) =>
              isActive ? "active_nav" : "nav-links" }  onClick={closeMobileMenu}>
                M
              </NavLink>
            </li> : <></>} */}
             

            
          </ul>
          </div>
       </div>

          <div className="loginbtn">
          <NavLink
                to="/login"
               
              >
                 {button && <Button buttonStyle="btn--outline">Login</Button>}
              </NavLink>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
