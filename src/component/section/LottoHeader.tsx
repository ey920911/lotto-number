import React from 'react';
import lottoIcon from 'icon/lotto_icon.png';

function LottoHeader() {
  return (
    <div className="main-section">
      <img className="lotto-icon-16" src={lottoIcon} alt="lotto logo" />
      Lotto 자동 생성기
    </div>
  );
}
export default LottoHeader;
