import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dataExpenses = [
  {
    id: "e1",
    title: "Papel higienico",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Nueva TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Seguro del auto",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Nuevo escritorio (madera)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  
  const [expenses, setExpenses] = useState(dataExpenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
