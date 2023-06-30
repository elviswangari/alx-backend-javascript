class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  strDes() {
    return `[object ${this.code}]`;
  }
}
export default Airport;
