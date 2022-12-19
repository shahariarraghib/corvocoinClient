import React, { useEffect, useState } from 'react';
import { Button } from "../buttons/Button";
const Login = ({setIsCalledEffect, isCalledEffect}) => {

    const [register,setRegister] = useState(1)

    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    console.log(getEmail)
    console.log(getPassword)

const getImputFromButton = (e) =>{

    e.preventDefault();


    console.log(getEmail)
    console.log(getPassword)

    const inputvalue = {
        email: getEmail,
        password: getPassword,
        
      };

      const url = process.env.REACT_APP_API_URL;
      fetch(`${url}/api/login`, {
    
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(inputvalue),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("res",data.status);

          sessionStorage.setItem("corboCoin", data.status)
          localStorage.setItem("login", true)
          setIsCalledEffect(isCalledEffect+1)
          window.location.reload(false);
          
        }).catch((err) => {
            localStorage.setItem("login", false)
            setIsCalledEffect(isCalledEffect+1)


        });
}


useEffect(() => {}, [localStorage.getItem("login"), isCalledEffect])

    return (
        <>
       {register ?<div className="d-flex justify-content-center mt-5">
      <form  >
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              Value={getEmail}
              onChange= {(e) => setEmail(e.target.value) }
            />
            <br/>
          <input
              className="footer-input"
              name="password"
              type="password"
              placeholder="Your Password"
              Value={getPassword}
              onChange= {(e) => setPassword(e.target.value) }
            />
          <br/>
          <Button buttonStyle="btn--outline"  onClick={getImputFromButton}
            >Footer.js line 20</Button>
            <br/>
            
           {/* <p className='text-danger mt-4' onClick={setRegister(0)}>Not Register?</p> */}
          </form>
          

       </div>: <div className="d-flex justify-content-center mt-5">
      <form  >
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              Value={getEmail}
              onChange= {(e) => setEmail(e.target.value) }
            />
            <br/>
          <input
              className="footer-input"
              name="password"
              type="password"
              placeholder="Your Password"
              Value={getPassword}
              onChange= {(e) => setPassword(e.target.value) }
            />

           <input
              className="footer-input"
              name="confirmPassword"
              type="confirmPassword"
              placeholder="confirm Password"
              Value={getPassword}
              onChange= {(e) => setPassword(e.target.value) }
            />
          <br/>
          <Button buttonStyle="btn--outline"  onClick={getImputFromButton}
            >Footer.js line 20</Button>
            <br/>
            
           <p className='text-danger mt-4' onClick={setRegister(0)}>Not Register?</p>
          </form>
          

       </div>}
        </>
    );
};

export default Login;