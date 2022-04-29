import React from 'react';
import {Link} from "react-router-dom";
import MyButton from '../components/UI/button/MyButton';

const MainPublic = () => {
    return (
        <div>
        <h1>Привет, зарегистрируйся или залогинься на сайте ;)</h1>

        <div style={{marginTop: '30px'}}></div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to="/registration"> <MyButton> Зарегистрироваться</MyButton> </Link>
        <div></div>
        <Link to="/login"><MyButton> Логин </MyButton> </Link> 
        </div>
         
        </div>
    );
};

export default MainPublic;