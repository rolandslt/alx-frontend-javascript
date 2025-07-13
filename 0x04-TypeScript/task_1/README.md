# Task 1 - Advanced TypeScript Interfaces and Classes

This task focuses on mastering TypeScript interfaces, extending types, writing functions, and implementing classes.

## 📁 Files

- `js/main.ts`: Main TypeScript source file containing all the logic for interfaces, functions, and class implementations.
- `webpack.config.js`, `tsconfig.json`, `package.json`: Configuration files required to compile and run the TypeScript project.

## 📌 Objectives

- Define a flexible `Teacher` interface with optional and readonly properties.
- Extend interfaces with `Directors`.
- Write a function type and implementation for `printTeacher`.
- Create a `StudentClass` implementing an interface with method definitions.
- Ensure all TypeScript features compile without errors.

## 🧩 Features

### ✅ 1. Teacher Interface
- Has readonly `firstName` and `lastName`
- Required `fullTimeEmployee` and `location`
- Optional `yearsOfExperience`
- Supports dynamic attributes like `contract`

### ✅ 2. Directors Interface
- Extends `Teacher`
- Adds required `numberOfReports`

### ✅ 3. printTeacher Function
- Accepts first and last name
- Returns a formatted string (e.g., `J. Doe`)

### ✅ 4. StudentClass
- Implements `StudentInterface`
- Accepts `firstName` and `lastName`
- Methods: `workOnHomework()` and `displayName()`

## 🛠️ Build Instructions

From the root of the project or inside `task_1/` (if dependencies are local), run:

```bash
npm run build 

👨‍💻 Author
Rolandslt - ALX Frontend Specialization