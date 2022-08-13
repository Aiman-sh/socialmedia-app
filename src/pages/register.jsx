import "./register.css";

export default function Register() {
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

                    <input placeholder="username" className="loginInput"/>

                    <input placeholder="Eamil" className="loginInput"/>

                    <input placeholder="password" className="loginInput"/>

                    <input placeholder="PasswordAgain" className="loginInput"/>

                    <button className="loginButton">sign Up</button>

                    <button className="loginRegisterButton">
                        Log into your Account
                    </button>

                    </div>

                </div>

            </div>
            
        </div>
    );
}