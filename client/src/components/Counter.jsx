import React, {useContext, useState} from "react";
import MyButton from "./UI/button/MyButton";
import {observer} from "mobx-react-lite"
import {Context} from '../index'
const Counter = function() {

    const {store} = useContext(Context)
  console.log(store.user.email);
    function increment() {
        store.user.score += 1
      }
    
      function decrement() {
        store.user.score -= 1
      }
    return (
        <div>
            <MyButton onClick = {decrement}> - </MyButton>
            <MyButton onClick = {increment}> + </MyButton>
            <MyButton onClick={() => store.setScore(store.user.score)}>Сохранить результат</MyButton>
        </div>
    )
}

export default observer(Counter);