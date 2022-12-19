import React, { useState } from "react";
import "./Footer.css";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";


function Footer() {
  const [saveInputValue, setSaveInputValue] = useState("")


  const [userEmail, setUserEmail] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userPhone, setUserPhone] = useState(null)



  const [selectedItem, setSelectedItem] = useState('Email')
  console.log(saveInputValue)

const getInputValue = (e) =>{
  e.preventDefault();


  console.log(saveInputValue)
  const inputvalue = {
    email: userEmail,
    Name: userName,
    Phone: userPhone,
  };
console.log("inputvalue", inputvalue)

  // const values = {saveInputValue}

  const url = process.env.REACT_APP_API_URL;
  fetch(`${url}/api/inputValue`, {

    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(inputvalue),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("res",data);
     
    });
}

console.log("saveInputValue", saveInputValue)

const handleSubmit = (e) => {

    console.log(e.target.value)
    setSaveInputValue(e.target.value)

    selectedItem === "Email" &&  setUserEmail(e.target.value)
    selectedItem === "Name" &&  setUserName(e.target.value)
    selectedItem === "Phone Number" &&  setUserPhone(e.target.value)


  }


  return (
    <>
    <div className="footer-container">

      <section className="footer-subscription">
        <p className="footer-subscription-heading">Footer.js line 10</p>
        <p className="footer-subscription-text">Footer.js line 11</p>
        <div className="input-areas">

          <form className="d-flex flex-row">
            <input
              className="footer-input"
              name={selectedItem}
              type={selectedItem}
              placeholder={`your ${selectedItem}`}
              Value={saveInputValue}
              onChange= {(e) => handleSubmit(e) }
            />

{/* 
          <button  disabled={ userEmail === null || userName === null || userPhone === null  &&  true}>Disabled button</button> */}

          <Button  buttonStyle="btn--outline"  disabled = { userEmail === null || userName === null || userPhone === null  ?   true : false}  
         onClick={userEmail === null || userName === null || userPhone === null  ?   null : getInputValue}
            >Footer.js line 20</Button>

          <Dropdown className="mx-2 ">
                    <Dropdown.Toggle id="dropdown-basic" className="btn--outline">
                    {selectedItem}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item  onClick={(e) => setSelectedItem("Name")} >Name</Dropdown.Item>
                      <Dropdown.Item onClick={(e) => setSelectedItem("Email")}>Email</Dropdown.Item>
                      <Dropdown.Item onClick={(e) => setSelectedItem("Phone Number")}>Phone Number</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>


          </form>
          
        </div>
        
      </section>

      <div style={{  width:'80%' }}>
        <p>dihadf</p>

        <div className="footer">
          <div class="footer-link-items">
            <h2>Footer.js line 27</h2>
            <Link to="/">Footer.js line 28</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 33</h2>
            <Link to="/">Footer.js line 32</Link>
            <Link to="/">Footer.js line 33</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 38</h2>
            <Link to="/">Footer.js line 39</Link>
            <Link to="/">Footer.js line 40</Link>
            <Link to="/">Footer.js line 41</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 44</h2>
            <Link to="/">Footer.js line 45</Link>
            <Link to="/">Footer.js line 46</Link>
            <Link to="/">Footer.js line 47</Link>
            <Link to="/">Footer.js line 48</Link>
          </div>
        </div>
      </div>



      <div class="">
        {/* <div className="footer">
          <div class="footer-link-items">
            <h2>Footer.js line 27</h2>
            <Link to="/">Footer.js line 28</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 33</h2>
            <Link to="/">Footer.js line 32</Link>
            <Link to="/">Footer.js line 33</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 38</h2>
            <Link to="/">Footer.js line 39</Link>
            <Link to="/">Footer.js line 40</Link>
            <Link to="/">Footer.js line 41</Link>
          </div>
          <div class="footer-link-items">
            <h2>Footer.js line 44</h2>
            <Link to="/">Footer.js line 45</Link>
            <Link to="/">Footer.js line 46</Link>
            <Link to="/">Footer.js line 47</Link>
            <Link to="/">Footer.js line 48</Link>
          </div>
        </div> */}
   
      
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Footer.js line 56
              {/* <i class="fab fa-typo3" /> */}
              {/* LINE ABOVE = NAVBAR LOGO */}
            </Link>
          </div>
          <small class="website-rights">Footer.js line 60</small>
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>


    </>
  );
}

export default Footer;
