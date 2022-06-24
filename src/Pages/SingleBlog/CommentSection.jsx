import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleComment from "./SingleComment";

const CommentSection = ({ postId }) => {
  const commentsUrl = "http://localhost:8000/comments";
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const postComment = comments && comments.filter((p) => p.postId === postId);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <section className="comment-section">
          <div className="section-bg">
            <h1 className="comment-title">Comments</h1>
            <div className="comments">
              {postComment && postComment.length === 0 && (
                <h3 className="no-comments">No Comments on this post</h3>
              )}
              {postComment &&
                postComment.map((c, i) => (
                  <SingleComment key={i} comment={c} />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CommentSection;
