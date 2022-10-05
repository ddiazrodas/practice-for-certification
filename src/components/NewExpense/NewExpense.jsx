import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => { //recibe el parametro del hijo, y ejecuta el padre
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); //pasa como parametro lo que ejecuta la funcion, al padre
    };

    const handlerClick = () => {
        setShowForm(true)
    }

    return (
        <div className='new-expense'>
            { showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowForm={setShowForm} /> : <button onClick={handlerClick}>Add new Expense</button>}
        </div>
    )
}

export default NewExpense