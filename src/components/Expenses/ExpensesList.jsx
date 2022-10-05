import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    //forma alternativa condicional para mostrar si hay gastos o no, y que la logica quede en el componente y no el codigo HTML con ternarios:

    let expenesesContent = <p>No se encontraron gastos en éste período</p>;

    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No se encontraron gastos</h2>
    }

  return (
    <ul className='expenses-list'>
    {props.expenses.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} /> )}
    </ul>
  )
}

export default ExpensesList