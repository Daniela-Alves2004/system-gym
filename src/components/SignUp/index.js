import Input from "../Input";
import './SignUp.css';


function SignUp() {

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
          <div className="names">
            <div className="input-container">

              <label className="label1">First name</label>
              <Input className='names1' type="text" name="firstName" id="firstName" />
            </div>
            <div className="input-container">
              <label className="label2" >Last name</label>
              <Input className='names2' type="text" name="lastName" id="lastName" />
            </div>
          </div>
          <Input type="email" name="emailAddress" id="emailAddress" label="Email address" />
          <Input type="tel" name="phoneNumber" id="phoneNumber" label="Phone number" />
          <Input type="password" name="password" id="password" label="Password" />
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" name="checkbox1" id="checkbox1" />
              <span>By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="checkbox2" id="checkbox2" />
              <span>By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.</span>
            </label>
          </div>

          <button type="submit">Sign up</button>
          <p>Already have an account? <a href=".\login\index.js"> Log in  </a></p>

        </form>
      </div>
    </div>

  );

}
export default SignUp;