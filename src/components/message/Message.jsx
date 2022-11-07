import "./message.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://i.ibb.co/DG69bQ4/2.png"
          alt=""
        ></img>
        <p className="messageText">
          Hello This is my messageHello This is my message Hello This is my
          message Hello This is my message Hello This is my message
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Message;
