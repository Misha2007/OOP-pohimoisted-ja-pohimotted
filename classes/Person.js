class Person {
  constructor(name, year) {
    this.name = name;
    this.year = 0;
    // this.description = description;
  }
  setDateOfBirth(year) {
    this.year = year;
  }
  getDateOfBirth() {
    return this.year;
  }
  age() {
    return 2024 - this.year;
  }
  getName() {
    return this.name;
  }
  description() {
    return this.description, this.name;
  }
}

module.exports = Person;
