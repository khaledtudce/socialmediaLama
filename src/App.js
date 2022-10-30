import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  console.log("hello");
  const loggedInUser = false;
  const isNewRegistered = false;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/register"
            element={loggedInUser ? <Navigate to="/" /> : <Register />}
          />

          <Route
            path="/login"
            element={
              loggedInUser || isNewRegistered ? <Navigate to="/" /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
