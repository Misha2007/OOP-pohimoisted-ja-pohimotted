// const Person = require("./Person");
class Course {
  constructor(name) {
    // super(name, age);
    this.name = name;
    this.grades = [];
  }
  addStudentGrade(student, grade) {
    var dict_grades = {};
    dict_grades[student] = grade;
    this.grades.push(dict_grades);
  }

  getGrades() {
    return this.grades;
  }
  getCourses() {
    return this.courses;
  }
  getAverageGrade() {
    let total_number = 0;

    for (let index = 0; index < this.grades.length; index++) {
      total_number += Number(Object.values(this.grades[index]));
    }

    return total_number / this.grades.length;
  }
  getStudentsOrderedByAverageGrade() {}
}

module.exports = Course;
