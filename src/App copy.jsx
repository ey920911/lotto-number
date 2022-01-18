import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from '@material-ui/core';
import LottoHeader from './LottoHeader';
import LottoFooter from './LottoFooter';
import MainPage from './MainPage';
import { forStatement } from '@babel/types';

function App() {
  return (
    <>
      <LottoHeader />
      <MainPage />
    </>
  );
}

export default App;
