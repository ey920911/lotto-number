import { CallToActionSharp } from '@material-ui/icons';
import { observable, action, makeObservable } from 'mobx';

export default new (class searchStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  registeredItems = [];

  @action
  addItem = (item) => {
    this.registeredItems.push(item);
  };
})();
