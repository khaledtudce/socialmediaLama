import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/users/" + post.userId);
      setUser(res.data);
    };
    fetchPost();
  }, [post]);

  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={PUBLIC_FOLDER + user.profilePicture}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PUBLIC_FOLDER + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBotttomLeft">
            <img
              className="likeIcon"
              src={PUBLIC_FOLDER + "like.png"}
              alt=""
              onClick={() => handleClick()}
            />
            <img
              className="heartIcon"
              src={PUBLIC_FOLDER + "heart.png"}
              alt=""
              onClick={() => handleClick()}
            />
            <span className="likeCounter">{like} people liked it</span>
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
