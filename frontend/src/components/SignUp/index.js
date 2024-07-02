import Input from "../Input";
import './SignUp.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />


function SignUp() {


  return (
    <div className="wrapper">
        <div className="conteiner1">
            <h1>Não precisa  de nome</h1>
            <p>Manage your gym network 
            in a simple and intuitive way.</p>
        </div>
        <div className="conteiner2">
            <h2>Sign up now</h2>
            <form>
                <Input type="text" name="firstName" id="firstName" label="First name"/>
                <Input type="text" name="lastName" id="lastName" label="Last name"/> 
                <Input type="email" name="emailAddress" id="emailAddress" label="Email address" />              
                <Input type="password" name="password" id="password" label="Password"/>         
            </form>
         </div>
    </div>
    
  );
 
}
export default SignUp;