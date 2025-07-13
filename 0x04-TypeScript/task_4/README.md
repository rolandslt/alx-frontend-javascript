# Task 4 - Namespace & Declaration Merging

This task focuses on **TypeScript namespaces**, **declaration merging**, and **object-oriented programming** using `interface`, `class`, and `namespace` features.

## 📁 Structure

```bash
task_4/
├── js/
│   ├── main.ts
│   └── subjects/
│       ├── Teacher.ts
│       ├── Subject.ts
│       ├── Cpp.ts
│       ├── Java.ts
│       └── React.ts
├── package.json
└── tsconfig.json
🧠 Concepts Covered
Namespaces for logical grouping of interfaces and classes.

Declaration Merging to extend interfaces across multiple files.

Subject Classes like Cpp, Java, and React extending a base Subject.

Dynamic interface extension for experience properties.

TypeScript strict typing and modular code organization.

📘 Interfaces
ts
Copy
Edit
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingJava?: number;
    experienceTeachingReact?: number;
  }
}
📗 Classes
Each subject (Cpp, Java, React) has:

getRequirements() → returns the subject requirements

getAvailableTeacher() → returns the teacher name if qualified, else a fallback message

📂 main.ts Behavior
Instantiates classes for each subject

Assigns one teacher object

Logs output of methods:


C++
Here is the list of requirements for Cpp
Available Teacher: John

Java
Here is the list of requirements for Java
No available teacher

React
Here is the list of requirements for React
No available teacher
▶️ Running the Code
Make sure TypeScript is installed:


tsc
Then run the compiled JS (e.g., dist/main.js) in the browser console or with Node:


node dist/js/main.js
✅ Requirements Met
 Used namespace and declaration merging

 Extended interfaces dynamically

 Used strong typing and modular structure

 No TypeScript build errors

rolandslt, roland lulando