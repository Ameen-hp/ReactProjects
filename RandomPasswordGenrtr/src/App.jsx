import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [Length, SetLength] = useState(12);
  const [Password, SetPassword] = useState("");
  const [NumberAllowed, SetNumberAllowed] = useState(false);
  const [CharAllowed, SetCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*(){}[]?";
    const nums = "0123456789";

    if (NumberAllowed) str += nums;
    if (CharAllowed) str += symbols;

    for (let i = 0; i < Length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    SetPassword(pass);
  }, [Length, NumberAllowed, CharAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [Length, NumberAllowed, CharAllowed, passwordGenerator]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(Password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
  }, [Password]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center px-4">
      <div className="bg-blue-900/80 backdrop-blur border border-blue-600 rounded-xl p-6 shadow-2xl w-full max-w-xl">
        <h1 className="text-white text-3xl font-semibold mb-5 text-center tracking-wide">
           Password Generator
        </h1>

        <div className="flex mb-6 rounded overflow-hidden shadow-md">
          <input
            type="text"
            value={Password}
            ref={passwordRef}
            readOnly
            placeholder="Generated Password"
            className="flex-1 px-5 py-3 text-lg text-black bg-gray-200 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-4 py-3 text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2"
          >
             Copy
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="length" className="text-white text-sm block mb-1">
            Password Length: <span className="font-bold">{Length}</span>
          </label>
          <input
            type="range"
            id="length"
            min="4"
            max="30"
            value={Length}
            onChange={(e) => SetLength(parseInt(e.target.value))}
            className="w-full accent-blue-400"
          />
        </div>

        <div className="flex gap-6 mb-6 text-white text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              onChange={() => SetNumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              onChange={() => SetCharAllowed((prev) => !prev)}
            />
            Include Symbols
          </label>
        </div>

        <div className="text-center">
          <button
            onClick={passwordGenerator}
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-6 rounded-md shadow hover:scale-105 transition-transform font-semibold"
          >
             Generate New
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
