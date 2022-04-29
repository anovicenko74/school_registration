import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate();
    
    return (
        <div className="post">
        <div className="post__content">
          <strong> {props.user.email}. {props.user.title} </strong>
          <div>
            {props.user.score}
          </div>
        </div> 
      </div>
    );
};

export default PostItem