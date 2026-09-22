# 0x13. JavaScript - Objects, Scopes and Closures

## Description
This repository contains solutions for the 0x13. JavaScript - Objects, Scopes and Closures project. It covers core Object-Oriented Programming (OOP) concepts in JavaScript (Node.js v14.x), including class definitions, inheritance, variable scopes, closures, and semistandard code style compliance.

## Requirements
* All files are interpreted on Ubuntu 20.04 LTS using node (version 14.x).
* Code is compliant with `semistandard` rules (Standard JS rules + mandatory semicolons).
* All files start with `#!/usr/bin/node` and end with a new line.

## Tasks Overview

| File | Description |
| :--- | :--- |
| `0-rectangle.js` | Defines an empty `Rectangle` class using class notation. |
| `1-rectangle.js` | Defines `Rectangle` class with constructor initializing width `w` and height `h`. |
| `2-rectangle.js` | Adds constructor validation: creates empty object if `w` or `h` <= 0 or not an integer. |
| `3-rectangle.js` | Adds `print()` instance method to render the rectangle using `X`. |
| `4-rectangle.js` | Adds `rotate()` and `double()` instance methods. |
| `5-square.js` | Defines `Square` class inheriting from `Rectangle` (Task 4) using `extends` and `super()`. |
| `6-square.js` | Defines `Square` class inheriting from Task 5 with `charPrint(c)` instance method. |
