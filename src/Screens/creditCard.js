import '../../node_modules/bootstrap/dist/css/bootstrap.css';
function CreditDetails() {
    return ( <>
     <center><br></br><br></br><br></br>
        <div className="credit-card-form" style={{width:'50%',height:'400px' ,border:'1px', boxShadow:' 0 0 10px rgba(129, 77, 205, 0.8)'}}>
        <h2 style={{paddingTop:'50px',fontFamily:'fantacy',color:'black'}}>Credit Card Information</h2><hr style={{color:'solid,black'}}></hr>
        <form>
          <label htmlFor="cardNumber" style={{fontFamily:'fantacy'}}>Card Number : </label>&nbsp;&nbsp;
          <input type="text" id="cardNumber" name="cardNumber" placeholder="Card number"  required /><br></br><br></br>

          <label htmlFor="cardHolder" style={{fontFamily:'fantacy'}} >Card Holder : </label>&nbsp;&nbsp;
          <input type="text" id="cardHolder" name="cardHolder" placeholder="Card holder name" required /><br></br><br></br>

          <label htmlFor="expiryDate" style={{fontFamily:'fantacy'}}>Expiry Date : </label>&nbsp;&nbsp;
          <input type="date" id="expiryDate" name="expiryDate" required /><br></br><br></br>

          <label htmlFor="cvv" style={{fontFamily:'fantacy'}}>CVV : </label> &nbsp;&nbsp;
          <input type="number" id="cvv" name="cvv" placeholder="CVV" required /><br></br><br></br>

          <input type="submit" value="Submit" className='button-34' />
        </form>
      </div>
        </center>
    </> );
}

export default CreditDetails;