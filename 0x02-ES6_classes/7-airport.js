export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Invalid input types');
    }
    this._name = name;
    this._code = code;
  }

  // Default string description to return the airport code
  toString() {
    return `[${typeof this} ${this._code}]`;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }
}
