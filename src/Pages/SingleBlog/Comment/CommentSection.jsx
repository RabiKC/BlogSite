import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleComment from "./SingleComment";

const CommentSection = ({ postId }) => {
  const commentsUrl = "http://localhost:8000/comments";
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [message, setMessage] = useState("");

  const getComments = async () => {
    setLoading(true);
    const data = await axios.get(commentsUrl);

    setComments(data.data);
    console.log(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  const commentSubmit = (e) => {
    e.preventDefault();

    if (userComment) {
      setLoading(true);
      const name = "dfks gsdgnis gsonigs sdgnv";
      const email = "hello@gmail.com";
      const body = userComment;

      const data = { postId, name, email, body };

      fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setLoading(false);
      setMessage("Your comment has succesfully been posted");
      setUserComment("");
      e.target.reset();
      getComments();
    } else {
      setMessage("Please type something to post");
    }
  };

  const removeMessage = () => {
    setMessage(null);
  };

  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 4000);
  }
  const postComment = comments && comments.filter((p) => p.postId === postId);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <section className="comment-section">
          <div className="section-bg">
            <h1 className="comment-title">Comments</h1>
            <form onSubmit={commentSubmit} className="post-comment">
              {message && <span className="comment-message">{message}</span>}
              <textarea
                onClick={removeMessage}
                value={userComment}
                rows="5"
                placeholder="Write something..."
                onChange={(e) => setUserComment(e.target.value)}
              />
              <input type="submit" value={loading ? "loading..." : "Post"} />
            </form>
            <div className="comments">
              {postComment && postComment.length === 0 && (
                <h3 className="no-comments">No Comments on this post</h3>
              )}
              {postComment &&
                postComment
                  .reverse()
                  .map((c, i) => <SingleComment comment={c} key={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CommentSection;
