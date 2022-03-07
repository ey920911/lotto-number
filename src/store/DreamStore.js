import { observable, action, makeObservable } from 'mobx';
import { DREAM_WORDS } from 'component/theme/dream/dreamData';

export default new (class DreamStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  registeredWords = [];

  @observable
  wordsmatch = [];

  // genNumber = [];

  @action
  addItem = (item) => {
    this.registeredWords.push(item);
    const registeredWordsSet = new Set(this.registeredWords);
    this.registeredWords = [...registeredWordsSet];
  };

  @action
  deleteItem = (item) => {
    this.registeredWords = this.registeredWords.filter((word) => word !== item);
  };

  @action
  genNumber() {
    const keys = Object.keys(DREAM_WORDS);
    const matchNum = this.registeredWords.map((word) => {
      for (let i = 1; i < keys.length + 1; i++) {
        if (DREAM_WORDS[i].includes(word)) return i;
      }
    });
    this.wordsmatch = matchNum;
    return matchNum;
  }

  @action
  initWords() {
    this.registeredWords = [];
  }

  get words() {
    return this.registeredWords;
  }
})();
