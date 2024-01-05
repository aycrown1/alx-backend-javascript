export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error('Invalid input types');
    }
    this._size = size;
    this._location = location;
  }

  // Getter for size attribute.
  get size() {
    return this._size;
  }

  // Getter for location attribute
  get location() {
    return this._location;
  }

  // Cast to Number returns size
  valueOf() {
    return this._size;
  }

  // Cast to String returns location
  toString() {
    return this._location;
  }
}
