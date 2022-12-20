import React, { useEffect, useState } from 'react';
import { Alert, Col, Form, Row, Toast } from 'react-bootstrap';
import { Button } from "../buttons/Button";
const Login = ({setIsCalledEffect, isCalledEffect}) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [passworOrEmailWrong, setPasswordOrEmailWrong] = useState(false)

    const [register,setRegister] = useState(1)

    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')

    const [getEmailRegister, setEmailRegister] = useState('')
    const [getPasswordRegister, setPasswordRegister] = useState('')
    const [getconfirmPasswordRegister, setconfirmPasswordRegister] = useState('')

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
          
          {data?.status == "error" ? setPasswordOrEmailWrong(true) : <></>}

           if(data?.status == "success"){
           sessionStorage.setItem("corboCoin", data.status)
           localStorage.setItem("login", true)
           setIsCalledEffect(isCalledEffect+1)
           window.location.reload(false);
           }
        
          
        }).catch((err) => {
            localStorage.setItem("login", false)
            setIsCalledEffect(isCalledEffect+1)


        });
}

const getImputFromButton1 = (e) =>{

  e.preventDefault();




  const inputvalue = {
      email: getEmailRegister,
      password: getPasswordRegister,
      confirmPassword: getconfirmPasswordRegister 
      
    };

    const url = process.env.REACT_APP_API_URL;
    fetch(`${url}/api/signup`, {
  
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputvalue),
    }).then((resp) => resp.json())
      .then((data) => {
        console.log("res",data);
       
     {data?.status == "error" ? setShow(true) : setShow1(true)}
        
       
        // sessionStorage.setItem("corboCoin", data.status)
        // localStorage.setItem("login", true)
        // setIsCalledEffect(isCalledEffect+1)
        // window.location.reload(false);
        
      }).catch((err) => {
          // localStorage.setItem("login", false)
          // setIsCalledEffect(isCalledEffect+1)
         console.log(err)

      });
}


useEffect(() => {}, [localStorage.getItem("login"), isCalledEffect])

    return (
        <>
        
       {register ? <div className="d-flex justify-content-center ">
       
      <form onSubmit={getImputFromButton} className='mt-5'>

          <div className="position-fixed bottom-0 start-0 p-3" >
        <Toast  onClose={() => setPasswordOrEmailWrong(false)} show={passworOrEmailWrong} delay={3000} autohide className='bg-danger'>
          <Toast.Body className='d-flex justify-content-center font-weight-bold'>Email or password is incorrect</Toast.Body>
        </Toast>
         </div>

            <input
              required  
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              Value={getEmail}
              onChange= {(e) => setEmail(e.target.value) }
            />
            <br/>
          <input
             required  
              className="footer-input"
              name="password"
              type="password"
              placeholder="Your Password"
              Value={getPassword}
              onChange= {(e) => setPassword(e.target.value) }
            />
          <br/>

          <input type="submit" value="Footer.js line 20" className="btn-signin" />
          {/* <Button buttonStyle="btn--outline"  onClick={getImputFromButton}
            >Footer.js line 20</Button> */}
            <br/>
            
            <Form.Group className="mb-3 mt-3 text-danger" controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="Please Register" onClick={() => setRegister(0)}/>
           </Form.Group>
           {/* <p className='text-danger mt-4' onClick={setRegister(0)}>Not Register?</p> */}
          </form>
          

       </div>: <div className="d-flex justify-content-center mt-5">
      <form onSubmit={getImputFromButton1}>
            <input         
              required         
              oninvalid="this.setCustomValidity('Witinnovation')"  
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              Value={getEmailRegister}
              onChange= {(e) => setEmailRegister(e.target.value) }
              
            />
        
            
            <br/>
          <input
              required  
              className="footer-input"
              name="password"
              type="password"
              placeholder="Your Password"
              Value={getPasswordRegister}
              onChange= {(e) => setPasswordRegister(e.target.value) }
            />
         <br/>
           <input
              required  
              className="footer-input"
              name="confirmPassword"
              type="Password"
              placeholder="confirm Password"
              Value={getconfirmPasswordRegister}
              onChange= {(e) => setconfirmPasswordRegister(e.target.value) }
            />
          <br/>
          
          <input type="submit" value="Footer.js line 20" className="btn-signin"/>
          
          {/* <Button buttonStyle="btn--outline" onClick={getImputFromButton1}
            >Footer.js line 20</Button>
            <br/> */}
            
                   
            <Form.Group className="mb-3 mt-3 text-danger" controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="Already Register" onClick={() => setRegister(1)}/>
           </Form.Group>
          </form>
          

       </div>}

      
         <div className="position-fixed bottom-0 start-0 p-3" >
        <Toast  onClose={() => setShow(false)} show={show} delay={3000} autohide className='bg-danger'>
          <Toast.Body className='d-flex justify-content-center font-weight-bold'>Registration unsuccessful</Toast.Body>
        </Toast>
        </div>

        <div className="position-fixed bottom-0 start-0 p-3" >
        <Toast  onClose={() => setShow1(false)} show={show1} delay={3000} autohide className='bg-success'>
          <Toast.Body className='d-flex justify-content-center font-weight-bold'>Registration successful</Toast.Body>
        </Toast>
        </div>
        
    
        </>
    );
};

export default Login;