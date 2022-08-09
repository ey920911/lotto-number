import { get, set, remove } from 'util/localStorageUtil';
import { observable, makeObservable, action, flow } from 'mobx';
import { CallToActionSharp } from '@material-ui/icons';

const lottoData = 'lotto_data';
export default new (class StatisticsStore {
  constructor() {
    makeObservable(this);
  }

  // [1등,2등,3등,4등,5등] 당첨 횟수 통계 데이터
  @observable
  winStaticts = [];

  // 번호 매칭 퍼센트 통계 데이터
  @observable
  matchPercentStaticts = [];

  @action
  setLottoData(data) {
    const prevData = lottoData();
    const currData = prevData.concat(data);
    set(lottoData, currData);
  }

  get lottoData() {
    return get(lottoData) ?? [];
  }
})();
