import React from 'react';
import { useHistory } from 'react-router-dom';

function IntroPage() {
  const history = useHistory();
  const handleStartClick = (event: any) => {
    history.push('/number');
  };
  return <button onClick={handleStartClick}> start </button>;
}
export default IntroPage;
