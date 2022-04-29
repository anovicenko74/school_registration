import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {Context} from '../../../index'
import MyButton from "../button/MyButton"
import {observer} from 'mobx-react-lite'
const Navbar = () => {

  const {store} = useContext(Context)
  return (
    <div className="navbar">
      
      <MyButton onClick={() => store.logout()}> Выйти</MyButton>
      <div style={{marginLeft: '15px'}}> </div>
      <a style={{color: '#3EB5E9FF'}}>{store.user.email}</a>

      <div className="navbar__links">
        <Link to="/button"> <MyButton>Счётчик</MyButton></Link>
        <Link to="/posts"><MyButton>Список</MyButton></Link>
      </div>
    </div>
    );
};

export default observer(Navbar);