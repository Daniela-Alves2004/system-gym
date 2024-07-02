import Input from "../Input";
import './SignUp.css';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput, {isValidPhoneNumber} from 'react-phone-input-2'



function SignUp() {
  
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (value, country) => {
      setPhoneNumber(value);
      if (!isValidPhoneNumber(value, country.iso2)) {
        setError('Número de telefone inválido');
      } else {
        setError('');
      }
    };
  
  return (
    <div className="wrapper">
        <div className="conteiner1">
            <h1>ManaGym</h1>
            <p>Manage your gym network 
            in a simple and intuitive way.</p>
        </div>
        <div className="conteiner2">
            <h2>Sign up now</h2>
            <form>
                <Input type="text" name="firstName" id="firstName" label="First name"/>
                <Input type="text" name="lastName" id="lastName" label="Last name"/> 
                <Input type="email" name="emailAddress" id="emailAddress" label="Email address" />              
                <div className="phoneInput">
                  <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    onChange={(value, country) => handleChange(value, country)}
                />
                 {error && <p style={{ color: 'red' }}>{error}</p>}

                </div>
                
                
                <Input type="password" name="password" id="password" label="Password"/>         
            </form>
         </div>
    </div>
    
  );
 
}
export default SignUp;