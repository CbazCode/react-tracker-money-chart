import React, { useContext } from 'react'   
import { CoinContext } from '../context/CoinContext';
import '../styles/ChartCoin.css';
import { useParams } from 'react-router-dom';
import {Chart} from './Chart'

export const ChartCoin = () => {

    const {loading,coins} = useContext(CoinContext);
    
    const {id:coinId} = useParams();
    

    return (
        <div className = "chart">
            { (loading)
                ? <p>Loading...</p>
                :
                <Chart coins = {coins} coinId = {coinId}/>

            }
        </div>
    )
}
