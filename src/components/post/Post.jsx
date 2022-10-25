import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const user = Users.filter((user) => user.id === post.id);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img
              src={user[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBotttomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="heartIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">{post.like} people liked it</span>
          </div>
          <div className="postBotttomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
