import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <h3 className='expense-item__price'>${props.amount}</h3>
            </div>
            <button onClick={ clickHandler }>Change Title</button>
        </Card>
    )
}

export default ExpenseItem