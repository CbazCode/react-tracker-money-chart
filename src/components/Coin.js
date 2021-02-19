import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/Coin.css';

export const Coin = ({ id, name, image, symbol, price, volume, priceChange1h,  priceChange24h, marketcap}) => {
    
    return (
        <Link className = "coin-container" to = {`./chart/${id}`} >
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className = "coin-volume">${volume.toLocaleString()}</p>

                    { priceChange1h < 0 ? 
                        (
                            <p className="coin-percent red">{priceChange1h.toFixed(2)}%</p>
                        ) :
                        (
                            <p className="coin-percent green">      {priceChange1h.toFixed(2)}%</p>
                        )
                    }
                    
                    { priceChange24h < 0 ? 
                        (
                            <p className="coin-percent red">{priceChange24h.toFixed(2)}%</p>
                        ) :
                        (
                            <p className="coin-percent green">      {priceChange24h.toFixed(2)}%</p>
                        )
                    }

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>

            </div>
        </Link>
    )
}
