import { makeAutoObservable } from "mobx";

class InputButtonControlModel {
  value: string = "";

  constructor(initialValue?: string) {
    makeAutoObservable(this);
    if (initialValue) this.value = initialValue;
  }

  setValue = (value: string) => {
    this.value = value;
  };
}

export default InputButtonControlModel;