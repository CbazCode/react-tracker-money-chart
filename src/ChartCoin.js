import React, { useContext, useEffect, useRef } from 'react'
import Chartjs from 'chart.js'   
import { CoinContext } from './context/CoinContext';
import './ChartCoin.css';
import { useParams } from 'react-router-dom';

export const ChartCoin = ({history}) => {
    const chartRef = useRef();
    const {coins} = useContext(CoinContext);;
    const {id:coinId} = useParams();
    

    const getCoinById = (coinId) => {
        const coinGetted = coins?.find((coin) => {
            return coin.id === coinId
        })
        
        // const {sparkline_in_7d} = encontrado
        // const {price} = sparkline_in_7d;
        // console.log(price);
        return coinGetted;
    }

    const {name, sparkline_in_7d:{ price }} = getCoinById(coinId)
    
    // TODO : usar useparams para obter el id
    // TODO : filtar la moneda por el id
    // TODO :obtener los valores para la tabla 
    const priceFormated = price.map( (prc)=>{
        return prc.toFixed(4);
    })



    
    useEffect(() => {
        
        console.log(priceFormated);
        if (chartRef.current && chartRef){
            const chartInstance =   new Chartjs (chartRef.current,{
                type: 'line',
                data: {
                    //Eje X
                    labels: priceFormated,
                    datasets: [{
                        label: 'Variability of the currency',
                        //Eje Y
                        data: priceFormated,
                        borderColor: 'orange',
                        backgroundColor: 'rgba(255,140,0, 0.2)',
                        borderWidth: 1
                    }]
                    
                },
                options: {
                    legend: {
                        labels: {
                          fontColor: 'white'
                        }
                      },
                    scales: {
                        xAxes: [{
                            mirror: false,
                            gridLines: {
                              display: false,
                            
                            },
                            
                            ticks:{
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false,
                              
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Price ($)",
                                fontColor: "white"
                            },
                            ticks: {
                                beginAtZero: false,
                                fontColor: "white"
                            }
                        }]
                    }
                }
            });
        }
        
    }, [])
    return (
        <div className = "chart">
            <div className = "chart-container">
                <h2>Follow you currency {name}</h2>
                <canvas ref = {chartRef} id = "myChart" width = {500} height = {200} ></canvas>
            </div>
        </div>
    )
}
