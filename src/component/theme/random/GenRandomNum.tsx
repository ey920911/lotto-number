import React from 'react';
import { PresentNum } from 'component';
import _ from 'lodash';

/**
 * 로또 번호별 가중치를 두고 계산합니다.
 * generateNum 함수는 가중치 없는 일반 계산
 * generateWeightNum 함수는 LOTTO_WEIGHT를 이용한 가중치 계산입니다.
 **/

const LOTTO_WEIGHT = [
  172, 164, 157, 167, 150, 154, 157, 151, 129, 162, 155, 165, 170, 162, 153,
  156, 169, 163, 151, 164, 156, 128, 138, 161, 146, 160, 171, 142, 136, 148,
  158, 140, 167, 171, 152, 153, 159, 160, 166, 160, 38, 154, 180, 152, 155,
];

export default function EachRandomNumber(): JSX.Element {
  const data = new Array();

  for (let i = 0; i < 6; i++) {
    const genNum = generateWeightNum();
    data.push(genNum);
    for (let j = 0; j < i; j++) {
      if (data[j] === genNum) {
        data.pop();
        i--;
      }
    }
  }
  return <PresentNum num={data} />;
}

// 가중치 없이 일반 계산
const generateNum = () => Math.floor(Math.random() * 44 + 1);

// 로또 번호별 가중치를 주고 계산
const generateWeightNum = () => {
  const max = _.sum(LOTTO_WEIGHT);
  const min = 1;
  let weightRandom = Math.floor(Math.random() * (max - min) + min);

  for (let i = 0; i <= LOTTO_WEIGHT.length; i++) {
    weightRandom -= LOTTO_WEIGHT[i];
    if (weightRandom <= 0) {
      return i + 1;
    }
  }
};
