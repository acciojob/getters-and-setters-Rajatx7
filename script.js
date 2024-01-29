//complete this code
class Person {
	  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get(name) {
    return this._name;
  }
  set(value) {
    this._age = value;
  }
}

class Student extends Person {
	  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log("${this.name} is studying");
  }
}

class Teacher extends Person {
	 constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log("${this.name} is teaching");
  }
}

const student = new Student("John", 30);
const student = new Student("Alice", 30);
const teacher = new Teacher("John", 30);
const teacher = new Teacher("Alice", 30);

student.study(); // Output: Alice is studying
teacher.teach(); // Output: Mr. Smith is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
