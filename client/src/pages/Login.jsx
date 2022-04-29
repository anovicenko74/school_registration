import React, { useState, useContext } from 'react';
import { Context } from '../index'
import { observer } from "mobx-react-lite";
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components//UI/button/MyButton';
import MySelect from '../components//UI/select/MySelect';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    
    return (
        <div>
            <MyInput
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text" 
                placeholder="Email"
            />

            <MyInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password" 
                placeholder="Пароль"
            />
            <MyButton onClick={() => store.login(email, password)}>Логин</MyButton>
        </div>
    );
};

export default observer(LoginForm);