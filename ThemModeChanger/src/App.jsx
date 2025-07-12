import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import { ContextThemProvider } from './Context/them';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  const [ThemColor, setThemColor] = useState('light');

  const lightThem = () => setThemColor('light');
  const darkThem = () => setThemColor('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(ThemColor);
  }, [ThemColor]);

  return (
    <ContextThemProvider value={{ ThemColor, lightThem, darkThem }}>
      <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-tr from-blue-100 via-white to-purple-100  transition-colors duration-500">
        
        <div className="w-full max-w-md bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-70 backdrop-blur-md rounded-3xl shadow-xl p-6 transition-all duration-300 ease-in-out">
          
          {/* Theme Toggle Button */}
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Product Card */}
          <Card />

        </div>
      </div>
    </ContextThemProvider>
  );
}

export default App;
