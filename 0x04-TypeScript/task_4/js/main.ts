// <reference path="./subjects/Cpp.ts" />
// <reference path="./subjects/Java.ts" />
// <reference path="./subjects/React.ts" />

namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
  };
}

// Log Cpp subject info
console.log('C++');
Subjects.cpp.teacher = Subjects.cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// Log Java subject info
console.log('Java');
Subjects.java.teacher = Subjects.cTeacher;
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// Log React subject info
console.log('React');
Subjects.react.teacher = Subjects.cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());