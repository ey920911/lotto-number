import React from 'react';
import { useHistory } from 'react-router-dom';

function IntroPage() {
  const history = useHistory();
  const handleClick = (event: any) => {
    const { id } = event.target;
    history.push(`/${id}`);
  };
  return (
    <>
      <button id="lotto_number" onClick={handleClick}>
        시작
      </button>
      <button id="place" onClick={handleClick}>
        로또 명당
      </button>
    </>
  );
}
export default IntroPage;
