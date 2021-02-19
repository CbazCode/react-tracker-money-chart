import React from 'react'
import { CoinContext } from './context/CoinContext'
import { useAxios } from './hooks/useAxios';
import AppRouter from './routers/AppRouter';

export const CoinApp = () => {
    const {loading , data:coins} = useAxios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h');

    return (
        <>
        <CoinContext.Provider value = {{
            loading,
            coins
        }}>
            <AppRouter/>

        </CoinContext.Provider >
            
        </>
    )
}
