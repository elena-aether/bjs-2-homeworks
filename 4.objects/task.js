function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark =  function(mark) {
  if (this.marks === undefined) {
    this.marks = [];
  } 
  this.marks.push(mark);
}

// ваш код для остальных методов

Student.prototype.addMarks =  function(...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }  this.marks.push(...mark);
} 

Student.prototype.getAverage =  function(marks) {
  let sum = 0;
  for(const item of this.marks) 
  sum += item;
  return sum / this.marks.length
}

Student.prototype.exclude =  function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}