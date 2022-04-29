import React, { useState, useContext } from 'react';
import { Context } from '../index'
import { observer } from "mobx-react-lite";
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import MySelect from './UI/select/MySelect';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [schoolClass, SetSchoolClass] = useState(0)
    const {store} = useContext(Context);
    const classes = [
        {value: 1, name: '1 класс'},
        {value: 2, name: '2 класс'},
        {value: 3, name: '3 класс'},
        {value: 4, name: '4 класс'},
        {value: 5, name: '5 класс'},
        {value: 6, name: '6 класс'},
        {value: 7, name: '7 класс'},
        {value: 8, name: '8 класс'},
        {value: 9, name: '9 класс'},
        {value: 10, name: '10 класс'},
        {value: 11, name: '11 класс'},
    ]
    console.log(schoolClass)
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
            <MySelect options={classes} defaultValue={'Выберите класс'} value={schoolClass} onChange={selectedClass => SetSchoolClass(selectedClass)}/>
            <MyButton onClick={() => store.login(email, password, schoolClass)}>Логин</MyButton>
            <MyButton onClick={() => store.registration(email, password, schoolClass)}>Регистрация</MyButton>
        </div>
    );
};

export default observer(LoginForm);