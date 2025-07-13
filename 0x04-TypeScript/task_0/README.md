# Task 0: Creating an Interface for a Student

This project demonstrates how to define a TypeScript interface and render its data dynamically in a simple HTML table using DOM manipulation.

## 📚 Learning Objectives

By the end of this task, you should be able to:

- Define and use interfaces in TypeScript
- Create and use strongly typed variables
- Manipulate the DOM using TypeScript
- Bundle a TypeScript project using Webpack

## 📁 Project Structure

task_0/
├── dist/ # Compiled bundle (generated after build)
├── js/
│ └── main.ts # TypeScript source code
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript compiler configuration
├── webpack.config.js # Webpack configuration
└── .eslintrc.js # Linting configuration


## 🧑‍💻 Interface Structure

```ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
👥 Students Rendered
Two students are created and added to an array. A table is generated dynamically to display their firstName and location.

🛠️ Installation
Make sure you have Node.js and npm installed.


cd task_0
npm install

🚀 How to Run
Build the project:

npm run build

Then open the generated dist/index.html in your browser.

You can also start a dev server (optional):

npm run start-dev

🧪 Example Output

First Name	Location
Guillaume	Kinshasa
John	    Goma

✍️ Author
ALX | Implemented by Roland lulando