# 0x01-ES6 Promises

This repository contains solutions for the 0x01 ES6 Promises project as part of the ALX Front-end curriculum. You will learn how to create, chain, and manage JavaScript Promises, as well as error handling with try/catch and using async/await syntax.

## Project Structure

0x01-ES6_promise/
- 0-promise.js           Task 0: Return a resolved Promise
- 1-promise.js           Task 1: Conditional resolve/reject based on input
- 2-then.js              Task 2: Append .then(), .catch() handlers
- 3-all.js               Task 3: Handle multiple Promises with Promise.all
- 4-user-promise.js      Task 4: Create simple resolved Promise
- 5-photo-reject.js      Task 5: Return a rejecting Promise
- 6-final-user.js        Task 6: Aggregate settled Promises with Promise.allSettled
- 7-load_balancer.js     Task 7: Return fastest-resolving Promise with Promise.race
- 8-try.js               Task 8: Throw error on invalid divide
- 9-try.js               Task 9: Execute function with guardrail error handling
- 100-await.js           Task 10: Async/await wrapper around uploadPhoto & createUser
- utils.js               Provided utilities: uploadPhoto, createUser
- babel.config.js        Babel configuration
- .eslintrc.js           ESLint configuration
- package.json           Dependencies: Jest, Babel, ESLint, scripts
- README.md              Project documentation

## Learning Objectives

By the end of this project you will be able to:
- Explain what Promises are and why they’re useful
- Use .then(), .catch(), and .finally() on Promises
- Work with Promise.all, Promise.allSettled, and Promise.race
- Throw and catch errors with throw / try…catch
- Use the async/await syntax for cleaner asynchronous code

## Requirements

- All files end with a newline
- Use .js extension for code files
- Code runs on Ubuntu 18.04 LTS with Node.js 12.11.x
- Tests written with Jest: npm run test
- Linting via ESLint: npm run lint
- All functions must be exported

## Setup

Clone the repo:
```bash
git clone https://github.com/USERNAME/alx-backend-javascript.git
cd alx-backend-javascript/0x01-ES6_promise
```

Install Node.js 12 (if not already installed):
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash
sudo apt install -y nodejs
```

Install dependencies:
```bash
npm install
```

## Testing & Linting

Run tests:
```bash
npm run test
```

Check linting:
```bash
npm run lint
```

## Usage Examples

Task 0:
```bash
node 0-main.js
```

Task 1:
```bash
node 1-main.js true
```

Task 10:
```bash
node 100-main.js
```

## Author

Your Name – GitHub Profile: https://github.com/USERNAME

© 2025 ALX. All rights reserved.


