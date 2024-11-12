class School {
  constructor(school_name) {
    this.school_name = school_name;
    this.courses = [];
    this.students = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  addStudent(student) {
    if (!this.students.some((s) => s.name === student.name)) {
      this.students.push(student);
    }
  }

  addStudentGrade(student, course, grade) {
    const found_course = this.courses.find((c) => c === course);
    const found_student = this.students.find((s) => s === student);
    if (found_course && found_student) {
      found_course.addStudentGrade(found_student, grade);
      found_student.addStudentGrade(found_course, grade);
    } else {
      console.log("Course or Student not found.");
    }
  }

  getStudents() {
    return this.students;
  }

  getCourses() {
    return this.courses;
  }

  getStudentsOrderedByAverageGrade() {
    return this.students
      .map((student) => {
        const grades = student.getGrades(); // Assuming student has a method to get grades
        const average = grades.length
          ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length
          : 0;
        return { student, average };
      })
      .sort((a, b) => b.average - a.average) // Sort by average grade descending
      .map((item) => item.student);
  }
}

module.exports = School;
