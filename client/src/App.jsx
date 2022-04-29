import LoginForm from "./components/LoginForm";
import React, {FC, useContext, useEffect, useState} from 'react'
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter";
import MainPublic from "./pages/MainPublic";
import Loader from './components/UI/Loader/Loader'

const App = () => {

  const {store} = useContext(Context)
  

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, []) 
  
  if (store.isLoading) {
    return <div style={{display: 'flex', alignItems: 'center', flexDirection: "row", }}>
              <Loader></Loader>
            </div>
  }

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    
  );
};

export default observer(App);
