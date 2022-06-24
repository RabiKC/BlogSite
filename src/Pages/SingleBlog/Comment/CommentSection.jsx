import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleComment from "./SingleComment";

const CommentSection = ({ postId }) => {
  const commentsUrl = "http://localhost:8000/comments";
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [commentPics, setCommentPics] = useState(null)
  const [userComment, setUserComment] = useState(null)

  const getComments = async () => {
    setLoading(true);
    const data = await axios.get(commentsUrl);

    setComments(data.data);
    console.log(data.data);
    setLoading(false);
  };

  // const postComments = () => {

  //   const name = "dfks gsdgnis gsonigs sdgnv";
  //   const email = "hello@gmail.com"

  //   const data = {postId, userComment,name,email}

  // fetch("http://localhost:8000/comments",
  //   {
  //     method:"POST",
  //     header:{"Content-Type": "application/json"},
  //     body: JSON.stringify(data)
  //   })

    
  // }

  const onSubmit = (e) => {

    e.preventDefault()
    
    const name = "dfks gsdgnis gsonigs sdgnv";
    const email = "hello@gmail.com";
    const body = userComment;

    const data = {postId, name, email,body}

  fetch("http://localhost:8000/comments",
    {
      method:'POST',
      header:{ "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  }

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
            <form onSubmit={onSubmit} className="post-comment">
              <textarea name="comment" id="comment" rows="5" placeholder="Write something.." onChange={(e) => setUserComment(e.target.value)}/>
              <input type="submit" />
            </form>
            <div className="comments">
              {postComment && postComment.length === 0 && (
                <h3 className="no-comments">No Comments on this post</h3>
              )}
              {postComment &&
                postComment.map((c, i) => (
                  <SingleComment comment={c} key={i}/>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CommentSection;
