import React from 'react'
import '../styles/Forget.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';

import 'react-circular-progressbar/dist/styles.css';

import forget from '../assets/images/Forgot-Password-icon.svg'

import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function NewDeviceLogin() {
  
    const percentage = 18;
    return (

        // <Navigation />
        <div className='container-fluid my-Container'>
        <Navigation />

        {/* newLogin-main */}
<div className='main-big '>
<br></br>
<div className='mt-5'></div>

    <Col  className="border-box single-container ">
<div className='container containerBox'>
    
    <Form>

                        <div className="thankyou-logo img-responsive">
                            <img src={forget} alt="Cobolt-logo" style={{width:"20%"}} />
                        </div>

                        <div className='thankyou-LoginForm'>
<h3>   Forgot Password?</h3>
</div>



<div class='thankyou-content  mt-3'>
    <p>
    Enter the email address associated with your account and we will send you a link to reset your password.  </p>
</div>

          
<br />
  <Button variant="primary mt-5 pt-3 pb-3" className='gotham-btn'  block>
    REQUEST PASSWORD RESET
  </Button>  
  

  

 

</Form>
    </div>

    </Col>


</div>


            
        </div>
    )
}

export default NewDeviceLogin
