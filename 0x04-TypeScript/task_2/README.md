# Task 2 - Advanced Types in TypeScript

This task explores advanced typing features in TypeScript including interfaces, classes, type guards, and string literal types. It builds on the previous tasks to introduce polymorphism and conditional logic using TypeScript's strong type system.

---

## 📁 Directory

`0x04-TypeScript/task_2/`

---

## 📌 Learning Objectives

By the end of this task, you should be able to:

- Define and implement interfaces with multiple methods
- Use classes to implement interfaces
- Apply conditional logic based on object type
- Use type predicates (`employee is Director`) to narrow types
- Define and use string literal types (`'Math' | 'History'`)

---

## 🧱 Features Implemented

### 1. Interfaces & Classes

- `DirectorInterface` with methods:
  - `workFromHome()`
  - `getCoffeeBreak()`
  - `workDirectorTasks()`

- `TeacherInterface` with methods:
  - `workFromHome()`
  - `getCoffeeBreak()`
  - `workTeacherTasks()`

- Classes `Director` and `Teacher` implement their respective interfaces.

---

### 2. Function: `createEmployee(salary)`

- Accepts a number or string.
- Returns a `Teacher` if salary is a number < 500.
- Otherwise, returns a `Director`.

### 3. Function: `isDirector(employee)`

- A type predicate to check if the employee is a `Director`.

### 4. Function: `executeWork(employee)`

- Executes the appropriate task method based on the employee's type:
  - `workDirectorTasks()` if Director
  - `workTeacherTasks()` if Teacher

---

### 5. Function: `teachClass(todayClass)`

- Uses a literal type `Subjects = 'Math' | 'History'`.
- Returns:
  - `"Teaching Math"` if `todayClass` is `"Math"`
  - `"Teaching History"` if `todayClass` is `"History"`

---

## ⚙️ How to Run

```bash
# Navigate to the task_2 directory
cd 0x04-TypeScript/task_2/

# Run Webpack to build the code
npm run build