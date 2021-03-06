
import { useContext,  useState } from 'react';
import '../styles/Coins.css';
import { Coin } from './Coin';
import { CoinContext } from '../context/CoinContext';

function Coins() {
  // const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // const {loading , data:coins} = useAxios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h');
  const {loading , coins} = useContext(CoinContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const filteredCoins = coins?.filter(coin =>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  }
  );
  
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder = "Search" className = "coin-input" onChange = {handleChange}/>
        </form>
      </div>

      <div className="coin-label-container">
        <div className="coin-row-label">
          <p className = "coin-label-name">Name</p>
          <p className = "coin-label-symbol">Symbol</p>
          <p className = "coin-label-price">Price</p>
          <p className = "coin-label-volume">Volume</p>
          <p className = "coin-label-1h">1h</p>
          <p className = "coin-label-24h">24h</p>
          <p className = "coin-label-marketcap">Mkt cap</p>
         
        </div>
      </div>

      { (!loading) ?
          (filteredCoins.length > 0) ?
            (filteredCoins.map(coin => {
              return (
                <Coin
                  key={coin.id}
                  id = {coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange24h={coin.price_change_percentage_24h}
                  priceChange1h = {coin.price_change_percentage_1h_in_currency}
                  

                />
              );
            })) :
            (<p className = "not-found">Not found</p>)
          :
            <p style={{marginTop: '1rem'}}>Loading...</p>

      }

    </div>
  );
}

export default Coins;
