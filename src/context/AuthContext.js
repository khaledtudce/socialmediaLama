import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "635d145c40d834fe796fcf87",
    username: "khaledtudce",
    email: "khaledreza@gmail.com",
    password: "$2b$10$CEF5icPIHzdwBgFB2Uv2eeIpCn3hQ6nRbbIlhGQg485GImSrleHwS",
    profilePicture: "person/2.jpeg",
    coverPicture: "person/1.jpeg",
    followers: [],
    followings: [1, 2, 3],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
