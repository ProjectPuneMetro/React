import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'typeface-poppins';
import '../Screens/CSS/book.css';
import { useHistory } from 'react-router-dom';
function BookTicket() {
    const history = useHistory();

    const ToTicket = () => {
        history.push('/ticket');
    };
  
    return (<>
        <div className="header">
          <div>Train ID:65464664</div>
          <div>
            Available Couch:
            <button className="btn btn-outline-primary">A1</button>
            <button className="btn btn-outline-primary">B1</button>
            <button className="btn btn-outline-primary">C3</button>
          </div>
        </div>
        <div className="mainDiv">
          <div className="conClass1">
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
          </div>
          <div className="conClass1">
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
          </div>
          <div className="conClass1">
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
          </div>
          <div className="conClass1">
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
            <div className="btnn">
              <button className="btn btn-outline-primary btnn1">A1</button>
              <button className="btn btn-outline-primary btnn1">A1</button>
            </div>
          </div>
          
        </div>
        <div>
           <center>
           <button className="button-34 btnn1" onClick={ToTicket}>Book</button></center> </div>
      ;</> );
}

export default BookTicket;