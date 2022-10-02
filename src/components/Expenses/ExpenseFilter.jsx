import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    // const [yearSelected, setYearSelected] = useState('');
    const selectedYear = (e) => {
        // console.log(e.target.value)
        props.yearState(e.target.value)
        // setYearSelected(e.target.value);
    }
    // console.log(yearSelected)
    // const yearDataFilter = {
    //     year: yearSelected
    // }
    // props.yearState(yearDataFilter);

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedYear}>
          <option value='2022'  >2022</option>
          <option value='2021'  >2021</option>
          <option value='2020'  >2020</option>
          <option value='2019'  >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;