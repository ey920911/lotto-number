import React from 'react';
import { useHistory } from 'react-router-dom';
import { NAV_MENU } from 'data/constants/Constants';

function IntroPage() {
  const history = useHistory();

  const handleClick = (event: any) => {
    const { id } = event.target;
    history.push(`/${id}`);
  };

  return (
    <>
      {Object.entries(NAV_MENU).map((item) => (
        <button id={item[0]} onClick={handleClick}>
          {item[1]}
        </button>
      ))}
    </>
  );
}
export default IntroPage;
