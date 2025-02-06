class Evangelion {
  _power = 0;

  set power(value) {
    if (value < 0) {
      value = 0;
    }
    this._power = value;
  }

  get power() {
    return this._power;
  }

  constructor(model) {
    this._model = model;
  }

  get model() {
    return this._model;
  }
}

let eva2 = new Evangelion(2);
eva2.power = -10;
console.log(eva2.power);
console.log(eva2.model);
eva2.model = 1; //will have no effect
