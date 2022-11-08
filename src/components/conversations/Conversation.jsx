import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={PUBLIC_FOLDER + (user?.profilePicture || "person/noAvater.jpeg")}
        alt=""
      ></img>
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
