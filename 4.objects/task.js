function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if  (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...arghs) {
  if  (this.marks === undefined) {
    this.marks = [];
    arghs.map(element => this.marks.push(element));
  } else {
    arghs.map(element => this.marks.push(element));
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let avg = sum / this.marks.length; // как это еще можно сделать? подскажешь? есть идеи?
  return avg;
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;  
  
  this.excluded = reason;
};

let student = new Student("Vladimir", "male", 23);

student.addMark(5);
student.addMark(4);
student.addMarks(4,4,3,5,4,3,4);
student.getAverage();
student.exclude("never fade away");


console.log(student);
