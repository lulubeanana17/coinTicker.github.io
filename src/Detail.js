import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import './Detail.css';

function Detail() {
    const [amount, setAmount] = useState(0);
    const onChange = (event) => {
        event.preventDefault();
        setAmount(event.target.value);
    }
    const [coinPrice, setCoinPrice] = useState(0);
    const [coin, setCoin] = useState({});
    const { id } = useParams();

      useEffect(() => {
        fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
        .then((response) => response.json())
        .then((json) => {
            setCoin(json);
            setCoinPrice(json.quotes.USD.price);
        });
      }, [id]);
    
    return (
      <div className="coinBox">
        <h1 className="coinTitle">{coin.name}</h1>
        <h3 className="coinPrice">Current Price: ${coinPrice} USD</h3>
        <div className="coinExchange">
            <input onChange={onChange} type="number" placeholder="USD" />
            <h3>Exchanged: {amount / coinPrice} {coin.symbol}</h3>
        </div>
      </div>
    );
}

export default Detail;