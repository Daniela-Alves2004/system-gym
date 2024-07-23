import Button from "../Button";
import iconStart from "../../assets/icons/start.png";
function SignIn() {
    return (
        <div className="container">
            <div className="containerSignUp">
                <div className="titleSignUp">
                    <h1>Sign In</h1>
                    <p>Let’s get you ready to start
                        using our services</p>
                </div>
                <div className="goSignUp">
                    <p>Create your account in three simple steps.</p>
                    <Button img={iconStart} label="Start" className="btStart" />
                </div>
            </div>
            <div className="containerSignIn">
                <h1>Is you already one of our user?</h1>
                <Button label="Login" className="btLogin" />
            </div>
        </div>
    );
};
export default SignIn;