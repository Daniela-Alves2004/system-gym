import Button from "../Button";
import iconStart from "../../assets/icons/start.png";
import "./SignInPage.css";
function SignInPage() {
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
                    <Button label="oi" className="secundario" image={iconStart} />
                </div>
            </div>
            <div className="containerSignIn">
                <h1>Is you already one of our user?</h1>
                <Button label="Login" className="primario" />
            </div>
        </div>
    );
};
export default SignInPage;