import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import './CSS/selectTrain.css';

function EditProfile() {
    return ( <div >
        <div className='container conClass'  >
            <center>
        <h1 style={{color:'black',fontFamily:'fantacy'}}>Edit Profile</h1><br></br>
        
        <input type="text" name="Name" id="Name"  vlaue="Name" required="required" placeholder='Name'style={{height
            :'30px' ,width:'250px'}} ></input><br></br><br></br>
        
        
            <input type="text" name="Address" id="Address"  vlaue="Addresss" required="required" placeholder='Address' style={{height
            :'30px' ,width:'250px'}}></input><br></br><br></br>
        
        
            <input type="email" name="Email" id="Email"  vlaue="Email" required="required" placeholder='E-Mail' style={{height
            :'30px' ,width:'250px'}}></input><br></br><br></br>
        
        
            <input type="password" name="password" id="password"  vlaue="password" required="required" placeholder='Password' style={{height
            :'30px' ,width:'250px'}}></input><br></br><br></br>
        
        
            <input type="Number" name="Number" id="Number"  vlaue="Number" required="required" placeholder='Mobile No' style={{height
            :'30px' ,width:'250px'}}></input><br></br><br></br>
        
  
            <button type="submit" value="Submit" color="Black"  className='button-34' style={{width
            :'100px'}} >Submit</button>
            </center>

</div>
    </div>
 );
}

export default EditProfile;