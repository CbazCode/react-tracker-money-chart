
import Chartjs from 'chart.js'  
import React, { useEffect, useRef } from 'react'
import '../styles/ChartCoin.css';

export const Chart = ({coinId, coins}) => {


    const chartRef = useRef();
    const getCoinById = (coinId) => {
        const coinGetted = coins?.find((coin) => {
            return coin.id === coinId
        })
        
        return coinGetted;
    }

    const coin = getCoinById(coinId)
    
    

    const {name, sparkline_in_7d:{ price }} = coin;
    
    
    const priceFormated = price.map( (prc)=>{
        return prc.toFixed(4);
    })
        
    useEffect(() => {
        
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
        
    }, [priceFormated])
    return (
        <div className = "chart-container">
            <h2>Follow you currency {name}</h2>
            <canvas ref = {chartRef} id = "myChart" width = {500} height = {200} ></canvas>
        </div>
    )
}
