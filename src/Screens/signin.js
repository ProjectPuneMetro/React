import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Screens/CSS/signin.css';
import { useHistory } from 'react-router-dom';




function SignIn() {
    const history = useHistory();
    const ToSignup = () => {
        history.push('/signup');
      };
  return (
    <div className="back" style={{ textAlign: 'center' , marginTop: '-5vh'}}>
      <div className="in">
        <center>
          <h1  style={{ fontSize: '40px',paddingTop:'40px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Sign In</h1>

          <input className="input" type="email" placeholder="Email" required />

          <input className="input" type="password" placeholder="Password" required />
          <br />

          <button className="button">Submit</button>
          <br />
          <br />
          <center>
            <a href="" onClick={ToSignup} style={{ color: 'white' }}>
              Create account
            </a>
          </center>
        </center>
      </div>
    </div>
  );
}

export default SignIn;
