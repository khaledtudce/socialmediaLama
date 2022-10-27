import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Kaynat Social</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Kaynat Social
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input className="registerInput" placeholder="username"></input>
            <input className="registerInput" placeholder="email"></input>
            <input className="registerInput" placeholder="password"></input>
            <input
              className="registerInput"
              placeholder="password again"
            ></input>
            <button className="registerButon">Sign Up</button>
            <button className="registerRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
