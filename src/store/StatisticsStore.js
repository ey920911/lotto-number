import { localStorageUtil } from 'custom_util';
import { observable, makeObservable, action, flow } from 'mobx';

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

  // TODO fix duplicated data
  @action
  setLottoData(data, genDateStr = '') {
    console.log('new data:', data);
    const prevData = localStorageUtil.get(LOTTO_DATA) ?? [];
    console.log('prevData2', prevData);
    const enhancedPrevData = prevData;

    console.log('enhancedPrevData', enhancedPrevData);
    const updatedData = [...enhancedPrevData, [...data, genDateStr]]; // prevData ? prevData.concat([data]) : [data];
    console.log('updatedData', updatedData);

    localStorageUtil.set(LOTTO_DATA, updatedData);
    console.log('updatedData2', localStorageUtil.get(LOTTO_DATA) ?? []);
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

  calculateInteractionNumber(arr1, arr2) {
    console.log(arr1, arr2, arr1.filter((ele) => arr2.includes(ele)).length);
    return arr1.filter((ele) => arr2.includes(ele)).length;
  }

  @action
  setWinStatistics(lottoNum = []) {
    const matchNumData = [];
    const filteredData = this.lottoData.filter((ele) => {
      const matchNum = this.calculateInteractionNumber(ele, lottoNum);
      if (matchNum < 2) return false;
      matchNumData.push(matchNum);
      return true;
    });
    const filteredMatchNumData = filteredData.map((ele, idx) => [
      ...ele,
      matchNumData[idx],
    ]);
    this.winStatistics = filteredMatchNumData;
  }

  get winStatistics() {
    return this.winStatistics;
  }

  get lottoData() {
    return localStorageUtil.get(LOTTO_DATA) ?? [];
  }

  get isServerMode() {
    return this.IS_SERVER_MODE;
  }
})();
