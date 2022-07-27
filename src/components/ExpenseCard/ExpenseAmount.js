import React from 'react';
import './ExpenseAmount.css';

const ExpenseAmount = (props) => {
    return (
        <div className="expense-amount">
            ${props.amount}
        </div>
    );
};

export default ExpenseAmount;