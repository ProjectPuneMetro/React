// import 'F:/REACT/reactfirst/node_modules/bootstrap/dist/css/bootstrap.css';

function ContactUs() {
    return ( <>
               <div className="contact-form">
      <h1>Contact Us</h1>
      <input
        type="text"
        placeholder="Your name"
        className="form-control"
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        className="form-control"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        className="form-control"
        // onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" >Submit</button>
    </div>

            </> );
}

export default ContactUs;