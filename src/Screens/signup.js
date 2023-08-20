import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import '../Screens/CSS/signup.css';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [CPassword, setCPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState("");
  const userData = {
    user_id: 28,
    user_name: name,
    user_email: email,
    password: password,
    contact_number: mobile,
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === CPassword) {
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

      xhr.open("POST", "http://localhost:52693/api/Users");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(userData));
      console.log(userData);
    } else {
      setError("Your password and confirm password do not match");
    }
  };

  return (
    <div className="wrapper" style={{ fontFamily: 'Poppins, sans-serif', marginTop: '-150px' }}>
      <form onSubmit={handleSubmit}>
        <div id="wizard">
          <div className="text-center">
            <h2>REGISTER</h2>
          </div>
          <section className="text-center">
            <div className="form-row">
              <input
                type="text"
                className="form-control"
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
                value={CPassword}
                onChange={handleCPasswordChange}
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
      <br />
      <hr />
      <div className='mytable alert alert-warning'>
        <h1> {error}</h1>
      </div>
      <hr />
    </div>
  );
}

export default SignUp;
