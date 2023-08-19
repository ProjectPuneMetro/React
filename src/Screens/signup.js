import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Make sure to import useHistory if you haven't

import '../Screens/CSS/signup.css';

function SignUp() {
  const logoSrc = "https://drive.google.com/uc?id=1-K4qi7rN42OF0596nSWDv6WMv7XL-IB0";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");
  const userData = {
    user_id:22,
    user_name: name,
    user_email: email,
    password: password,
    contact_number: mobile,
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setError("User added successfully");
          history.push("/login");
        } else {
          setError("Error adding user");
        }
      }
    };

    xhr.open("POST", "http://localhost:55955/api/Users");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(userData));
    console.log(userData);
  };

  return (
    <div className="wrapper"  style={{ fontFamily: 'Poppins, sans-serif' , marginTop:'-150px'}}>
    <form onSubmit={handleSubmit}>
      <div id="wizard">
        {/* SECTION 1 */}
        <div className="center-content">
            <h2>REGISTER</h2>
          </div>
        <section center-content>
          <div className="form-row">
            <input
              type="text"
              className="form-control "
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="confirmPassword"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
          </div>
          <button className="btn btn-outline-primary" style={{ marginTop: '10px' }} type="submit">
            REGISTER
          </button>
        </section>
      </div>
    </form>
  </div>
);

}

export default SignUp;
