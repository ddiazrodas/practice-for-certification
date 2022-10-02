import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const saveYearData = (yearDataFilter) => {
        setFilteredYear(yearDataFilter)
    }

    const filteredExpenses = props.expenses.filter((e) => {
        //e.date es un objeto, entonces necesitamos obtener el año con, y pasarlo a string con metodo toString()
        return e.date.getFullYear().toString() === filteredYear;
    });

    // console.log(filteredExpenses)
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter yearState={saveYearData} selected={filteredYear} />
                {filteredExpenses.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} /> )}
                {/* {props.expenses.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)} */}
            </Card>
        </div>
    )
}

export default Expenses