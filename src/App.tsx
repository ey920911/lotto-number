import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from '@material-ui/core';
import { LottoHeader, MainPage, LottoFooter } from 'component';

function App() {
  return (
    <>
      <LottoHeader />
      <MainPage />
    </>
  );
}

export default App;
