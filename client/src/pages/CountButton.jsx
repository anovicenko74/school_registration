import React, {useContext, useEffect, useState, FC} from 'react';
import Counter from '../components/Counter';
import {Context} from '../index'
import { observer } from "mobx-react-lite";

const CountButton = (props) => {
    const {store} = useContext(Context)
   
    return (
        <div>
             <h1>{`Количество очков ${store.user.score}`}</h1>
            <Counter/>
        </div>
    );
};

export default observer(CountButton);