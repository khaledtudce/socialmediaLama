import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Kaynat Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Kaynat Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" placeholder="login"></input>
            <input className="loginInput" placeholder="password"></input>
            <button className="loginButon">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
