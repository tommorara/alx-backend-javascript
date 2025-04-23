0x04. TypeScript
📌 Project Overview
This project introduces the basics and intermediate concepts of TypeScript, a statically typed superset of JavaScript that compiles to plain JavaScript. Through a series of practical tasks, you'll explore key features such as interfaces, classes, namespaces, advanced types, and declaration merging, while applying TypeScript to real-world scenarios.

🧠 Learning Objectives
By the end of this project, you will be able to:

Use basic types in TypeScript (string, number, boolean, etc.)

Define and extend interfaces

Create and work with classes

Use functions and describe their shapes using interfaces

Manipulate the DOM using TypeScript

Use generics to write reusable components

Organize code with namespaces

Merge declarations for interfaces and namespaces

Work with ambient namespaces and external libraries

Apply nominal typing with interfaces

🛠️ Project Requirements
Use only these editors: vi, vim, emacs, Visual Studio Code

TypeScript compiler must emit no errors or warnings

Use .ts extension for TypeScript files

All configuration files (package.json, tsconfig.json, .eslintrc.js, webpack.config.js) must be correctly set up per task

All files must end with a new line

Testing is done using jest@24.9.*

📂 Project Structure
plaintext
Copy
Edit
0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
│   ├── js/
│   │   ├── interface.ts
│   │   ├── crud.d.ts
├── task_4/
│   └── js/subjects/
│       ├── Cpp.ts
│       ├── Java.ts
│       ├── React.ts
│       ├── Subject.ts
│       ├── Teacher.ts
├── task_5/
📘 Tasks Summary

Task	Description
0	Create a Student interface and render student data into a table using DOM
1	Define a Teacher interface with optional and arbitrary fields
2	Create a Directors interface that extends Teacher
3	Create and type a printTeacher function
4	Implement a StudentClass with methods using TypeScript interfaces
5	Build Director and Teacher classes with respective interfaces
6	Implement type predicates and conditional function execution
7	Use string literal types to control allowed values
8	Create ambient namespace declaration for a simulated database library
9	Use declaration merging to enhance Teacher interface; create subject classes
10	Instantiate and use Cpp, Java, and React subject classes
11	Apply nominal typing for MajorCredits and MinorCredits
✅ How to Build and Run
Each task directory is independent. From any task_X/ folder:

bash
Copy
Edit
# Install dependencies
npm install

# Compile TypeScript
npm run build
Make sure webpack, typescript, and other dependencies are correctly set in each package.json.

📚 Resources
TypeScript in 5 minutes

TypeScript Handbook

📦 Repository
GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
