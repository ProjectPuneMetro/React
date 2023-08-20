import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Make sure to import useHistory if you haven't



function Admin() {
  
  const [trainid, setTrainid] = useState("");
  const [trainname, setTrainname] = useState("");
  const [sourcestation, setSourcestation] = useState("");
  const [destinationstation, setDestinationstation] = useState("");
  const [arrivaltime, setArrivaltime] = useState("");
  const [departuretime, setDeparturetime] = useState("");
  
  const history = useHistory();
  const [error, setError] = useState("");
  const trainData = {
    train_id:trainid,
    train_name:trainname,
    source_station:sourcestation,
    destination_station:destinationstation,
    arrival_time:arrivaltime,
    departure_time:departuretime
    
  };

  const handleTrainidChange = (e) => {
    setTrainid(e.target.value);
  };

  const handleTrainNameChange = (e) => {
    setTrainname(e.target.value);
  };

  const handleSourceStationChange = (e) => {
    setSourcestation(e.target.value);
  };

  const handleDestinstionStationChange = (e) => {
    setDestinationstation(e.target.value);
  };

  const handleSetArrivalTimeChange = (e) => {
    setArrivaltime(e.target.value);
  };

  const handleDepartureTimeChange = (e) => {
    setDeparturetime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setError("User added successfully");
          history.push("/Admin");
        } else {
          setError("Error adding user");
        }
      }
    };

    xhr.open("POST", "http://localhost:55955/api/Trains");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(trainData));
    console.log(trainData);
  };

  return (
<div className="wrapper"  style={{ fontFamily: 'Poppins, sans-serif' , marginTop:'-150px'}}>
    <form onSubmit={handleSubmit}>
      <div id="wizard">
        {/* SECTION 1 */}
        <div className="center-content">
            <h2>Add Train</h2>
          </div>
        <section center-content>
          <div className="form-row">
            <input
              type="text"
              className="form-control "
              placeholder="Train Id"
              value={trainid}
              onChange={handleTrainidChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Train Name"
              id="TrainName"
              value={trainname}
              onChange={ handleTrainNameChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Souce Station"
              id="Sourcestation"
              value={sourcestation}
              onChange={handleSourceStationChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Destination Station"
              id="Destinationstation"
              value={destinationstation}
              onChange={handleDestinstionStationChange}
              required
            />
            </div>


           <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Arrival Time"
              id="arrivaltime"
              value={arrivaltime}
              onChange={handleSetArrivalTimeChange}
              required
            />
            </div>

            <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Departural Time"
              id="Departuraltime"
              value={departuretime}
              onChange={handleDepartureTimeChange}
              required
            />
            </div>

         
          <button className="btn btn-outline-success" style={{ marginTop: '10px' }} type="submit">
            UPDATE
          </button>
          <button className="btn btn-outline-primary" style={{ marginTop: '10px' }} type="submit">
            EDIT
          </button>
        </section>
      </div>

      <div >
        <center> <h3>Show Train </h3></center>
         <input
              type="text"
              className="form-control"
              placeholder="Train"
              id="Train"
              
              required
            />
          <button className="btn btn-outline-primary" style={{ marginTop: '10px' }} type="submit">
            EDIT
          </button>
            <button className="btn btn-outline-success" style={{ marginTop: '10px' }} type="submit">
            DELETE
          </button>

        

        
          <center> <h3>Cancellation Request </h3></center>
         <input
              type="text"
              className="form-control"
              placeholder="Booking Id"
              id="cancelrequest"
              
              required
            />
          <button className="btn btn-outline-primary" style={{ marginTop: '10px' }} type="submit">
            Apprual
          </button>
            <button className="btn btn-outline-success" style={{ marginTop: '10px' }} type="submit">
            Reject
          </button>
     </div>

  </form>
 

    
  
    
</div>
  
  
);

}

export default Admin;


