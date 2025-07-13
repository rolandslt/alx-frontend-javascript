# Task 3 - Ambient Namespaces and TypeScript Integration with JS Libraries

## Overview

This task demonstrates how to work with ambient namespaces and integrate TypeScript with a plain JavaScript library (`crud.js`) by using declaration files (`.d.ts`).

You will:

- Define types and interfaces for your data model.
- Create a JavaScript library simulating CRUD operations.
- Write an ambient declaration file to describe the library’s types to TypeScript.
- Use the types and library functions safely in your TypeScript code.

---

## File Structure

- `js/interface.ts`:  
  Contains the `RowID` type alias and the `RowElement` interface describing the shape of a data row.

- `js/crud.js`:  
  JavaScript file exporting three CRUD functions: `insertRow`, `updateRow`, and `deleteRow`.

- `js/crud.d.ts`:  
  Ambient declaration file that tells TypeScript the types and signatures of the functions inside `crud.js`.

- `js/main.ts`:  
  Main TypeScript file that imports the types and CRUD functions, creates and updates a row, and calls the CRUD methods.

---

## How It Works

1. **Data Types and Interface**:  
   The `RowID` is a simple alias for `number`.  
   The `RowElement` interface represents a data row with `firstName`, `lastName`, and optional `age`.

2. **CRUD Library**:  
   `crud.js` simulates database operations and logs actions to the console.

3. **Ambient Declarations**:  
   Since `crud.js` is plain JavaScript, TypeScript doesn’t know about the function signatures.  
   The `crud.d.ts` file provides this information, enabling type checking and IntelliSense.

4. **Usage**:  
   In `main.ts`, we import the types and CRUD functions, create a row object, insert it, update it by adding age, and then delete it.

---

## Running the Project

1. Run `npm install` (if not done already) in the `task_3` directory.

2. Run `npm run build` to compile the TypeScript files.

3. Run the resulting code (e.g., open `dist/index.html` in a browser) and check the console to see the CRUD logs.

---

## Expected Console Output

Insert row { firstName: "Guillaume", lastName: "Salva" }
Update row 123 { firstName: "Guillaume", lastName: "Salva", age: 23 }
Delete row id 123