import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

function LottoFooter() {
  const history = useHistory();
  console.log(history);
  return <div className="main-section">copyright by eyKim</div>;
}
export default LottoFooter;
