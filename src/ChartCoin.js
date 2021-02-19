import React, { useContext, useEffect, useRef } from 'react'
import Chartjs from 'chart.js'   
import { CoinContext } from './context/CoinContext';

export const ChartCoin = ({history}) => {
    const chartRef = useRef();
    const {coins} = useContext(CoinContext);
    console.log(coins);
    // TODO : usar useparams para obter el id
    // TODO : filtar la moneda por el id
    // TODO :obtener los valores para la tabla 
    useEffect(() => {
        if (chartRef.current && chartRef){
            const chartInstance =   new Chartjs (chartRef.current,{
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
        
    }, [])
    return (
        <div>
            <canvas ref = {chartRef} id = "myChart" width = {250} height = {250} ></canvas>
        </div>
    )
}
