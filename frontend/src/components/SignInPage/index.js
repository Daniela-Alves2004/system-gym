import Button from "../Button";
import iconStart from "../../assets/icons/Icon.png";
import "./SignInPage.css";
function SignInPage() {
    return (
        <div className="container">
            <div className="containerSignUp">
                <div className="titleSignUp">
                    <h1>Sign Up</h1>
                    <p>Let’s get you ready to start<br/>
                        using our services</p>
                </div>
                <div className="goSignUp">
                    <p className="textSignup ">Create your account in <span>three</span>  simple steps.</p>
                    <Button label="Start" className="primary" image={iconStart} />
                </div>
            </div>
            <div className="containerSignIn">
                <h1>
                    Is you already one <br/>
                     of our user?</h1>
                <Button label="Login" className="secondary"/>
                
            </div>
        </div>
    );
};
export default SignInPage;