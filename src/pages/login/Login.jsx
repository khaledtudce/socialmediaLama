import { useContext, useRef } from "react";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSumbit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
          <form className="loginBox" onSubmit={(e) => handleSumbit(e)}>
            <input
              className="loginInput"
              placeholder="Email"
              type="email"
              ref={email}
              required
            ></input>
            <input
              className="loginInput"
              placeholder="password"
              type="password"
              minLength="6"
              ref={password}
              required
            ></input>
            <button className="loginButon" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
