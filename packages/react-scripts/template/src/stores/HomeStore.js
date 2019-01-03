import { observable } from 'mobx';

class HomeStore {
  constructor () {
    this.initialize();
  }

  initialize () {
    this._homeData = observable.box('Atomic React App')
  }

  get homeData () { return this._homeData.get(); }
  set homeData (value) { this._homeData.set(value); }
}

const store = new HomeStore();
export default store;