import React from 'react'
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataValues = props.data.map( data => data.value ); // recorro el array, y devuelve uno nuevo, pero solo con el value
    const maxValue = Math.max(...dataValues); //el metodo max necesita una lista de argumentos, no un array, por eso se usa el spread, extrae los 12 valores del array como argumentos

    return (
        <div className='chart'>
            { props.data.map( data => <ChartBar key={data.label} value={data.value} maxValue={maxValue} label={data.label}/> ) }
        </div>
    )
}

export default Chart