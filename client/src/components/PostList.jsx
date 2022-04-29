import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

let PostList = ({users, title}) => {
    if (!users.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Пользователи не найдены!
            </h1>
        )
    }
    return (
    <div>
        <h1 style={{textAlign: "center", color: "#574A99FF",}}>
            {title}
        </h1>
        <TransitionGroup>
            {users.map((user, index) =>
                <CSSTransition
                    key={user.id}
                    timeout={500}
                    classNames="post">
                    <PostItem number={index + 1} user={user} />
                </CSSTransition>
            )}
        </TransitionGroup>
    </div> 
)}

export default PostList;