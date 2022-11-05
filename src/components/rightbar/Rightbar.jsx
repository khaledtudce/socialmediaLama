import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const Rightbar = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    const fetchFriend = async () => {
      try {
        const res = await axios.get("/users/friend/" + user?._id);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriend();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src={PUBLIC_FOLDER + "gift.png"}
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Folster</b> and <b>3 friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbarAd" src={PUBLIC_FOLDER + "ad.png"} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const handleFollowButton = async (e, userId) => {
      e.preventDefault();
      try {
        if (followed)
          await axios.put("/users/" + userId + "/unfollow", {
            userId: currentUser._id,
          });
        else
          await axios.put("/users/" + userId + "/follow", {
            userId: currentUser._id,
          });
      } catch (error) {
        console.log(error);
      }
      setFollowed(!followed);
    };
    return (
      <>
        {currentUser.username !== user.username && (
          <button
            className="followButtonStyle"
            onClick={(e) => handleFollowButton(e, user._id)}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User Informarmation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
              key={friend._id}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    PUBLIC_FOLDER +
                    (friend.profilePicture
                      ? friend.profilePicture
                      : "person/noAvater.jpeg")
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
