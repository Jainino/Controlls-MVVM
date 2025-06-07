import { makeObservable, observable, action } from 'mobx';

class InputModel {
  value = '';

  constructor() {
    makeObservable(this, {
      value: observable,
      setValue: action,
    });
  }

  setValue(newValue: string) {
    this.value = newValue;
  }
}

export { InputModel };