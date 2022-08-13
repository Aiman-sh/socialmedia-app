import "./login.css";

export default function login() {
    return (
        <div className="login">

            <div className="loginWrapper">

                <div className="loginLeft">

                    <h3 className ="loginLogo"> Chit Chatter </h3>

                    <span className ="loginDesc ">
                        Lets chit chat with chit chatter!
                    </span>

                </div>

                <div className ="loginRight">

                    <div className = "loginBox">

                    <input placeholder="Eamil" className="loginInput"/>

                    <input placeholder="Password" className="loginInput"/>

                    <button className="loginButton">Log in</button>

                    <span className="loginForgot">Forgot password? </span>

                    <button className="loginRegisterButton">

                        Create a new account

                    </button>

                    </div>

                </div>

            </div>
            
        </div>
    );
}