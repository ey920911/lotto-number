import React from 'react';
import _ from 'lodash';
import { PresentNum } from 'component';
import { LOTTO_WEIGHT } from './lottoWeight';
import DreamStore from 'store/DreamStore';

/**
 * 로또 번호별 가중치를 두고 계산합니다.
 * generateNum 함수는 가중치 없는 일반 계산
 * generateWeightNum 함수는 LOTTO_WEIGHT를 이용한 가중치 계산입니다.
 **/
interface IProps {
  isDream?: boolean;
  number?: number[];
}

function GenRandomNum({ isDream = false }: IProps): JSX.Element {
  const data = new Array();
  for (let i = 0; i < 6; i++) {
    const genNum = generateWeightNum({ isDream });
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
export default React.memo(GenRandomNum);

// 가중치 없이 일반 계산
const generateNum = () => Math.floor(Math.random() * 44 + 1);

// 로또 번호별 가중치를 주고 계산, weightNumber 존재시 가중치 추가
const generateWeightNum = (props: IProps) => {
  let weight = LOTTO_WEIGHT;
  // 꿈으로 계산할 경우 getNumber로 단어를 숫자로 변환 후 가중치에 +100 을 한다.
  if (props.isDream) {
    const dreamNum = DreamStore.genNumber();
    weight = LOTTO_WEIGHT.map((num, index) =>
      dreamNum.includes(index + 1) ? num + 100 : num
    );
  }

  const max = _.sum(weight);
  const min = 1;
  let weightRandom = Math.floor(Math.random() * (max - min) + min);
  // weight 만큼 array 늘리고 그중에서 숫자 골라서 해당 숫자가 로또 번호로 어떤것인지 확인하기
  for (let i = 0; i <= weight.length; i++) {
    weightRandom -= weight[i];
    if (weightRandom <= 0) {
      return i + 1;
    }
  }
};
