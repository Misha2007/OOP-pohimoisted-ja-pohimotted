const Person = require("./Person");
class Student extends Person {
  constructor(name, age) {
    super(name, age);
    this.grades = [];
    this.id = null;
  }
  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
  getGrades() {
    return this.grades;
  }
  addStudentGrade(course, grade) {
    var dict_grades = {};
    dict_grades[course] = grade;
    this.grades.push(dict_grades);
  }
  getAverageGrade() {
    let total_number = 0;

    for (let index = 0; index < this.grades.length; index++) {
      total_number += Number(Object.values(this.grades[index]));
    }

    return total_number / this.grades.length;
  }
  description() {
    return this.name;
  }
}

module.exports = Student;
