export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('must contain a number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
