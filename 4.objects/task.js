function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let studentVasya = new Student('Вася', 'male', 20);
let studentVera = new Student('Вера', 'female', 19);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this) {
    for (let i of marks) {
        this.marks.push(i);
    }
  }
}

Student.prototype.getAverage = function () {
    if ('marks' in this && this.marks.length != -1) {
        return this.marks.reduce((acc, item)=> acc + item / this.marks.length, 0);
      } else {
        return 0;
      }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
