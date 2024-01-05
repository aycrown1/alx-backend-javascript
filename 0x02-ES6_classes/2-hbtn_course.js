export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a String');
    }
    this._name = newName;
  }

  // getter and setter for length atrrribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a Number');
    }
    this._length = newLength;
  }

  // getter and setter for the students attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an Array');
    }
    this._students = newStudents;
  }
}
