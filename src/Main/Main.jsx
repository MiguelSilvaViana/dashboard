import React from 'react';
import { useContext } from 'react';
import Header from '../components/HeaderTemplate/Header';
import { ThemeContext } from '../ThemeContext';
import './Main.css';

const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && 'dark'}`}>
      <Header />
    </div>
  );
};

export default Main;
