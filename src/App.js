import {useState, useEffect} from "react";
import "./App.css";
import { Link } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
 
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setCoins(json.slice(0, 100));
          setLoading(false);
        });
    }, [])
  return (
    <div className="body">
      <h1 className="bodyTitle">Live Ticker</h1>
      <h3 className="bodyLoading">{loading ? "loading.." : null}</h3>
      <ul>
        {coins.map((coin) => (
          <li className="box" key={coin.id}>
            <div className="box-title">{coin.name} ({coin.symbol})</div>
            <div className="box-price">${coin.quotes.USD.price} USD</div>
            <Link to={process.env.PUBLIC_URL + `/coin/${coin.id}`
            }><button className="box-button">Exchange</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;