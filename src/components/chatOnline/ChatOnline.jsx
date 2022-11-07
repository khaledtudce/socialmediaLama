import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            className="chatOnlineImg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">john doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
