import React from 'react';
import '../Screens/CSS/signup.css';

function SignUp() {
  const logoSrc = "https://drive.google.com/uc?id=1-K4qi7rN42OF0596nSWDv6WMv7XL-IB0";

  return (
    <div style={{ background:"grey",height:"88vh", backgroundSize: 'cover', backgroundPosition: 'center',marginTop:"-20px" }}>
      <a href="https://www.google.com/search?q=pune+metro&sxsrf=APwXEdeREmq8bVK_OOf_CrmWw43H0GEexg%3A1684334456129&ei=eOdkZNm9B_7x4-EP5-GciA8&ved=0ahUKEwjZ2cLnyvz-AhX--DgGHecwB_EQ4dUDCA8&uact=5&oq=pune+metro&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzINCAAQigUQsQMQgwEQQzIFCAAQgAQyCwgAEIoFEJECEIsDMhMIABCABBAUEIcCELEDEIMBEIsDMgsIABCKBRCRAhCLAzIICAAQgAQQiwMyCwgAEIoFEJECEIsDMg4IABCABBCxAxCDARCLAzIOCAAQgAQQsQMQgwEQiwM6DQgAEEcQ1gQQyQMQsAM6CggAEEcQ1gQQsAM6CwgAEIoFEJIDELADSgQIQRgAUMQFWMQFYP0JaAFw
          AXgAgAGLAYgBiwGSAQMwLjGYAQCgAQHIAQm4AQHAAQE&sclient=gws-wiz-serp" target="_blank">
        <img height="350px" className='imgClass' width="350px" src={logoSrc} alt="Pune Metro Logo" />
      </a>
      <form target="_blank">
        <div className="inClass" style={{ width:'500px', height:'500px' ,marginLeft:'800px'}}>
          <center>
            <h2 style={{ fontSize: '40px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold',color:"black" }} >SIGN UP</h2>
            <input className="inputClass" type="text" placeholder="Name" required />

            <input className="inputClass" type="text" placeholder="Address" required />

            <input className="inputClass" type="email" placeholder="Email" required />

            <input className="inputClass" type="password" placeholder="Password" required />

            <input className="inputClass" type="number" placeholder="Mobile" required />
            <br />

            <button className="button-6" style={{marginTop:"10px"}}>Register</button>
          </center>
        </div>
      </form>
    </div>
  );
}

export default SignUp;