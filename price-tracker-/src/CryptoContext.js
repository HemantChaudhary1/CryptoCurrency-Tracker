import React, { Children, createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => { 
   
  // there will be 2 states one for the currency and one for the symbol
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => { 
     if(currency ==="INR") setSymbol("₹")
     else if(currency ==="USD") setSymbol("$")
  },[currency])

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        setSymbol,
      }}
    >
      {children}
    </Crypto.Provider>
  );

  return <Crypto.Provider>{children}</Crypto.Provider>;
};

export default CryptoContext;

//To export our state to whole our app , we will use this useConext Hook
export const CryptoState = () => {
  return useContext(Crypto);
};
