# 0x02. ES6 Classes

## Project Overview
This project focuses on mastering **Object-Oriented Programming (OOP)** concepts using **ES6 Classes** in **JavaScript**. You will define classes, extend them, implement static methods, and explore metaprogramming concepts like **Symbols**.

## Learning Objectives
By the end of this project, you should be able to:
- Define and implement classes in JavaScript
- Add instance and static methods to classes
- Understand and apply inheritance by extending classes
- Use getters and setters correctly
- Understand metaprogramming concepts including Symbols

## Project Requirements
- Ubuntu 18.04 LTS
- NodeJS v12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Files must end with a new line
- File extension: `.js`
- Use **ESLint** for linting
- Use **Jest** for testing
- All tasks must pass linting and testing (`npm run full-test`)

## Setup Instructions
1. **Install NodeJS 12.11.x**
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
2. **Verify Installation**
```bash
nodejs -v   # v12.11.1
npm -v      # 6.11.3
```
3. **Install Project Dependencies**
```bash
npm install
```
(This uses the provided `package.json`, `babel.config.js`, and `.eslintrc.js` files)

## Directory Structure
```
0x02-ES6_classes/
├── 0-classroom.js
├── 1-make_classrooms.js
├── 2-hbtn_course.js
├── 3-currency.js
├── 4-pricing.js
├── 5-building.js
├── 6-sky_high.js
├── 7-airport.js
├── 8-hbtn_class.js
├── 9-hoisting.js
├── 10-car.js
├── README.md
```

## Task Summaries

### 0. You used to attend a place like this at some point
- Create a `ClassRoom` class with a `maxStudentsSize` attribute.

### 1. Let's make some classrooms
- Implement `initializeRooms` function to create 3 `ClassRoom` objects.

### 2. A Course, Getters, and Setters
- Create `ALXCourse` class with proper type checking for `name`, `length`, and `students`.
- Add getters and setters.

### 3. Methods, static methods, computed methods names..... MONEY
- Create a `Currency` class.
- Add a `displayFullCurrency` method.

### 4. Pricing
- Create a `Pricing` class.
- Add a static method `convertPrice` to convert the amount.

### 5. A Building
- Create an abstract `Building` class.
- Enforce subclasses to implement `evacuationWarningMessage`.

### 6. Inheritance
- Create `SkyHighBuilding` class extending `Building`.
- Override `evacuationWarningMessage` method.

### 7. Airport
- Create an `Airport` class with custom `toString()` returning the code.

### 8. Primitive - ALX Class
- Create an `ALXClass` class.
- Customize number and string conversion using `Symbol.toPrimitive`.

### 9. Hoisting
- Fix hoisting issues in class definitions for `ALXClass` and `StudentALX`.

### 10. Vroom
- Create a `Car` class with a `cloneCar` method.
- Use Symbol to ensure cloning creates a distinct new object.

## Important Notes
- Run `npm run dev FILENAME.js` to execute specific files.
- Always verify your code using `npm run full-test` to ensure it passes lint and test checks.
- Strict attribute typing must be enforced using getters/setters.
- Utilize ES6+ best practices throughout the project.

## Resources
- [JavaScript Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

---

> 🎉 **Congratulations on pushing your OOP and ES6 skills to the next level!** 🎉

---

Copyright © 2025 ALX, All rights reserved.


