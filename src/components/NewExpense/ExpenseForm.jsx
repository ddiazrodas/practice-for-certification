import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); 

    // const [userInput, setUserInput] = useState({ esto es una alternativa para almacenar la data
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler= (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        // setUserInput((prevState) => { otra alternativa, mejorque la anterior
        //     return { ...prevState, enteredTitle: e.target.value }
        // });
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData); //pasa como parametro lo que almacena la funcion submit, al padre
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <>
            <form onSubmit={submitHandler} >
                <div className='new-expense__controls'>
                    <div className='new-expense__controls'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm