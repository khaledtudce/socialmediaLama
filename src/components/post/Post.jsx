import "./post.css";
import { MoreVert } from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Khaled Reza</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! it is my first post :)</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBotttomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="heartIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">32 people liked it</span>
          </div>
          <div className="postBotttomRight">
            <span className="postCommentText">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
