import React from 'react';
import './ExpenseBar.css';
import {useState} from 'react';
import ExpenseAmount from './ExpenseAmount';

const ExpenseBar = (props) => { 
    const [isMouseOver, setIsMouseOver] = useState(false);

    const mouseOverHandler = () => {
        setIsMouseOver(true);
    }
    const mouseOutHandler = () => {
        setIsMouseOver(false);
    }
    const today = new Date().getDay();
    const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return (
        <>
        {isMouseOver && <ExpenseAmount amount={props.amount}/>}
        <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} className={props.day === week[today] ? 'bar bar-today' : 'bar'} style={props.style}>
            {props.children}
        </div>
        </>
    );
};

export default ExpenseBar;