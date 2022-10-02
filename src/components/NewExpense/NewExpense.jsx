import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => { //recibe el parametro del hijo, y ejecuta el padre
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); //pasa como parametro lo que ejecuta la funcion, al padre
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense