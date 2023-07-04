import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
function Ticket() {
    const history = useHistory();
    const ToCard = () => {
        history.push('/credit');
      };
    return ( 
    <center>
        <div style={{backgroundColor:'white',width:'50%',height:'100px'}}><br></br><br></br><br></br>
           
                <div style={{backgroundColor:'purple',height:'100px'}} >
                   <center> <h2 style={{color:'white',paddingTop:'30px',fontFamily:'fantacy'}}>Source -------------- Destination</h2></center>
            </div>
            
                <div style={{border:'2px solid purple'}} >
                  <table style={{textAlign:'center'}} >
                        <tr>
                            <td > <h4 style={{color:'black'}}>Train : Metro1</h4></td> 
                            <td style={{paddingLeft:'350px'}}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Train No : 12345</h4></td>
                        </tr>
                        <tr>
                            <td > <h4 style={{color:'black'}}>Ticket No : ASDDF12</h4></td> 
                            <td style={{paddingLeft:'350px'}}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Seats : A10,A11</h4></td>
                        </tr>
                        <tr>
                            <td > <h4 style={{color:'black'}}>Passanger 1 Name</h4></td> 
                            <td style={{paddingLeft:'350px'}}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Passanger 2 Name</h4></td>
                        </tr>
                        <tr>
                            <td > <h4 style={{color:'black'}}>Age : 12years</h4></td> 
                            <td style={{paddingLeft:'350px'}}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Age : 14years</h4></td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Arrival : 12/01/2023 :: 13.20</h4></td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Deeparture : 12/01/2023 ::  14.00</h4></td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <h4 style={{color:'black',fontFamily:'fantacy'}}>Amount : </h4></td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <h4 style={{color:'black'}}>* * * </h4></td>
                        </tr>
                  </table>
            </div>
            <div>
                <center>
                    <h2 style={{color:'purple',fontFamily:'fantacy'}}>Payment Methods</h2>
                    <table>
                        <tr>
                            <td><button >
                                    <img src='https://w7.pngwing.com/pngs/845/180/png-transparent-unified-payments-interface-bhim-national-payments-corporation-of-india-wallets-text-trademark-logo.png' style={{width:'100px',height:'60px'}}></img>
                                </button>
                            </td>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <td>
                                <button onClick={ToCard}>Card
                                </button></td>
                        </tr>
                    </table>
                </center>
            </div>
           
        </div>
            </center>  );
}

export default Ticket;