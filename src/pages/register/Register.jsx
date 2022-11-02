import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity(
        "Password did not match. Please correct it"
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <form className="registerBox" onSubmit={(e) => handleRegister(e)}>
            <input
              className="registerInput"
              placeholder="username"
              ref={username}
              minLength="4"
              maxLength="20"
              required
            ></input>
            <input
              className="registerInput"
              placeholder="email"
              type="email"
              required
              ref={email}
            ></input>
            <input
              className="registerInput"
              placeholder="password"
              type="password"
              required
              ref={password}
              minLength="6"
            ></input>
            <input
              className="registerInput"
              placeholder="password again"
              type="password"
              required
              ref={passwordAgain}
              minLength="6"
            ></input>
            <button className="registerButon" type="submit">
              Sign Up
            </button>
            <button className="registerRegisterButton">Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
