import React, { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [convertCurrency, setConvertCurrency] = useState("pkr");
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setRates(res[currency] || {});
      })
      .catch((err) => console.error("Error fetching data", err));
  }, [currency]);

  useEffect(() => {
    if (amount && rates[convertCurrency]) {
      const result = parseFloat(amount) * parseFloat(rates[convertCurrency]);
      setConvertedAmount(result.toFixed(2));
    } else {
      setConvertedAmount("");
    }
  }, [amount, convertCurrency, rates]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl w-full max-w-md p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-6"> Currency Converter</h1>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 rounded-md border border-white/30 bg-white/10 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        <div className="mb-4 flex justify-between gap-4">
          <div className="w-1/2">
            <label className="block mb-1 text-sm">From</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none"
            >
              {Object.keys(rates).map((key) => (
                <option value={key} key={key} className="text-black">
                  {key.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-sm">To</label>
            <select
              value={convertCurrency}
              onChange={(e) => setConvertCurrency(e.target.value)}
              className="w-full p-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none"
            >
              {Object.keys(rates).map((key) => (
                <option value={key} key={key} className="text-black">
                  {key.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Converted Amount:</p>
          <p className="text-2xl mt-2 text-yellow-300">
            {convertedAmount ? `${convertedAmount} ${convertCurrency.toUpperCase()}` : "—"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
