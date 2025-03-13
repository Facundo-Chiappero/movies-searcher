import React, { useState, useEffect } from 'react';
import moonIcon from '../../assets/moon.svg';
import sunIcon from '../../assets/sun.svg';
import './themeChangerStyles.css';

function ThemeChanger({ defaultTheme = 'light' }) {
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleThemeChange}
        id="theme-toggle-checkbox"
        className="theme-toggle-checkbox"
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
        <img
          src={isDarkMode ? moonIcon : sunIcon}
          alt="theme icon"
          className={`theme-toggle-icon ${isDarkMode ? 'moon' : 'sun'}`}
        />
      </label>
    </div>
  );
}

export default ThemeChanger;
