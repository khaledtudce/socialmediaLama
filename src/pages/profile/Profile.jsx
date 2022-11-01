import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/users?username=" + username);
      setUser(res.data);
    };
    fetchPost();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={PUBLIC_FOLDER + (user.coverPicture || "person/6.jpeg")}
                alt=""
              />
              <img
                className="profileUserImg"
                src={PUBLIC_FOLDER + (user.profilePicture || "person/6.jpeg")}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
