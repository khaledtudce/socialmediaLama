import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [userWhoPosted, setUserWhoPosted] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser, post.likes]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/users/" + post.userId);
      setUserWhoPosted(res.data);
    };
    fetchPost();
  }, [post]);

  const likeHandle = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <Link to={`/profile/${userWhoPosted.username}`}>
              <img
                src={
                  PUBLIC_FOLDER +
                  (userWhoPosted.profilePicture
                    ? userWhoPosted.profilePicture
                    : "person/noAvater.jpeg")
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{userWhoPosted.username}</span>
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
              onClick={() => likeHandle()}
            />
            <img
              className="heartIcon"
              src={PUBLIC_FOLDER + "heart.png"}
              alt=""
              onClick={() => likeHandle()}
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
