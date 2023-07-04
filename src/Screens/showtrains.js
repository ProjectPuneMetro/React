import React from 'react';
import './CSS/ShowTrains.css'; // Import the CSS file for styling
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
function ShowTrains() {
  const history = useHistory();

  const ToBookSeat = () => {
    history.push('/book');
  }
  return (
    <>
      <div className="container ">
        <div className="row col-md-4">
          <div className="">
        
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
        </div>
        <div className="row col-md-4">
          <div className="col">
        
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
        </div>
        <div className="row col-md-4">
          <div className="col">
        
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h3 className="source-station">Source Station1</h3>
                  </td>
                  <td>
                    <h6 className="departure-time">12.30 pm</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="travel-time">30 min</h6>
                  </td>
                  <td>
                    <h6 className="platform">Platform no.1</h6>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="show-stations">Show Stations</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className="destination-station">Destination Station</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                    <button className='button-34' onClick={ToBookSeat}>Book</button>
                    </center>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
        </div>
      </div>
    </>
  );
}

export default ShowTrains;
