import React, { useState } from "react";
import usericon from "./Usericon.png";
import Backicon from "./back.png";

export const HomePage = (props) => {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [profile, setProfile] = useState(false);

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comments.length < 11){
      setComments([...comments, userComment]);
      setUserComment("");
    }
    else{
      comments.splice(0, 1);
      setComments([...comments, userComment]);
      setUserComment("");
    }
  };
/*
  const newLocal = <div className="userPROFILE">
    <text>User Profile: </text>
  </div>;*/
  return (
    
    <div className="HApp">
      
      {profile ? (
      <div className="ppage">
        <div className="backg2">
        <img src={Backicon} className="userProf2" onClick={() => setProfile((p) => !p)} />
        </div>
        <div className="div1">
        <button className="Logout2" onClick={props.logout}>
          Logout
        </button>
        <div className="Profcontent">
           <img src={usericon} className="insideProf" onClick={() => setProfile((p) => !p)} />
           <h2>Name: Michael Josol</h2>
           <h2>Email: josolmichael@gmail.com</h2>
        </div>
      </div>
      </div>):(
      <div>
      <div className="div1">
        <button className="Logout" onClick={props.logout}>
          Logout
        </button>
      </div>

    <div className="backg">
    <img src={usericon} className="userProf" onClick={() => setProfile((p) => !p)} />
    </div>

      <div className="comments" >
        <ul>
          {comments.map((comment, index) => (
            <p className="commentc" key={index}>{comment}</p>
          ))}
        </ul>
      </div>

      <div className="commentInput">
        <input
          type="text"
          value={userComment}
          onChange={handleCommentChange}
          className="inputc"
        />
        <button className="buttonc" onClick={handleCommentSubmit}>Post Comment</button>
      </div>
      </div>) }

    </div>
  );
};
