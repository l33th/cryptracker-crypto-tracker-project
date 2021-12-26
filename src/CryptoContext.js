import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CoinList } from './config/api';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'ZAR') setSymbol('R');
  }, [currency]);
  // useEffect(() => {
  // 	if (currency === 'ZAR') setSymbol('R');
  // 	else if (currency === 'USD') setSymbol('$');
  // }, [currency]);

  return (
    <Crypto.Provider
      value={{ currency, setCurrency, symbol, coins, loading, fetchCoins }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
