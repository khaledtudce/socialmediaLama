import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./chatOnline.css";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friend/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers?.includes(friend._id))
    );
  }, [onlineUsers, friends]);

  console.log(onlineUsers);

  const handleChatOnlineClick = async (onlineFriend) => {
    try {
      const res = await axios.get(
        "/conversations/find/" + currentId + "/" + onlineFriend._id
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div
          className="chatOnlineFriend"
          onClick={() => handleChatOnlineClick(o)}
        >
          <div className="chatOnlineImgContainer">
            <img
              src={
                PUBLIC_FOLDER + (o?.profilePicture || "person/noAvater.jpeg")
              }
              className="chatOnlineImg"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
