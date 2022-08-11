import { localStorageUtil } from 'custom_util';
import { observable, makeObservable, action, computed } from 'mobx';
import _ from 'lodash';

const LOTTO_DATA = '_lotto_data';

/**
 * 서버모드와, 브라우저 모드를 지원한다.
 * 브라우저 모드: 로또 데이터를 local storage에 저장한다.
 * TODO) 서버모드: 서버에서 통계성 데이터를 추출해 넘겨준다.
 */

export default new (class StatisticsStore {
  constructor() {
    makeObservable(this);
  }

  IS_SERVER_MODE = process.env.REACT_APP_MODE === 'server';

  // [1등,2등,3등,4등,5등] 당첨 횟수 통계 데이터
  @observable
  winStatistics = [];

  // 번호 매칭 퍼센트 통계 데이터
  @observable
  percentStatistics = 0;

  @observable
  lottoNumber = '';

  // TODO fix duplicated data
  @action
  setLottoData(num, genDateStr = '') {
    const prevData = localStorageUtil.get(LOTTO_DATA) ?? [];
    const enhancedPrevData = prevData;
    const updatedData = [...enhancedPrevData, [genDateStr, ...num]]; // prevData ? prevData.concat([data]) : [data];
    localStorageUtil.set(LOTTO_DATA, updatedData);
  }

  @action
  initWinStatistics() {
    this.winStatistics = [];
  }

  @action
  initPercentStatistics() {
    this.percentStatistics = 0;
  }

  @action
  setPercentStatistics() {
    const result = 2;
    this.percentStatistics = result;
  }

  @action
  setLottoNum(num) {
    this.setLottoNum(num);
  }

  get winStatistics() {
    return this.winStatistics;
  }

  get percentStatistics() {
    return this.percentStatistics;
  }

  get lottoData() {
    return localStorageUtil.get(LOTTO_DATA) ?? [];
  }

  get isServerMode() {
    return this.IS_SERVER_MODE;
  }

  calculateInteractionNumber(arr1, arr2) {
    console.log(arr1, arr2, arr1.filter((ele) => arr2.includes(ele)).length);
    return arr1.filter((ele) => arr2.includes(ele)).length;
  }

  calcPercentStatistics(lottoNum = []) {
    const [matchNumData, ...rest] = this.calcMatchNum(lottoNum);
    const matchPercent =
      (100 * _.sum(matchNumData)) / (this.lottoData.length * 6);

    return matchPercent;
  }

  calcWinStatistics(lottoNum = []) {
    const [matchNumData, filteredData] = this.calcMatchNum(lottoNum);
    const filteredMatchNumData = filteredData.map((ele, idx) => [
      matchNumData[idx],
      ...ele,
    ]);

    return this.sortData(filteredMatchNumData);
  }

  calcMatchNum(lottoNum = []) {
    const matchNumData = [];
    const filteredData = this.lottoData.filter((ele) => {
      const matchNum = this.calculateInteractionNumber(ele, lottoNum);
      if (matchNum < 3) return false;
      matchNumData.push(matchNum);
      return true;
    });
    return [matchNumData, filteredData];
  }

  sortData(data) {
    data.sort((a, b) => b[0] - a[0]);
    return data;
  }
})();
