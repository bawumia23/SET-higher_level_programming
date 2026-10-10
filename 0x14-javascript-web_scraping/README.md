# 0x14. JavaScript - Web scraping

## Description

This project covers reading and writing files with Node's `fs` module, making
HTTP requests with the `request` module, and parsing JSON API responses. The
scripts read and write files, fetch status codes, query the Star Wars API, save
web page content to disk, and aggregate data from the JSONPlaceholder API.

## Requirements

- All files are interpreted using Node.js (version 14.x)
- All files start with `#!/usr/bin/node` and end with a new line
- All files are executable
- Code follows `semistandard` style (Standard rules + semicolons)
- `var` is not used anywhere in this project
- The `request` module is installed and available (it is deprecated, but still
  widely used for practicing web scraping)

## Tasks

| File | Description |
| --- | --- |
| `0-readme.js` | Reads a file (utf-8) and prints its content, or prints the error object |
| `1-writeme.js` | Writes a string to a file (utf-8), or prints the error object |
| `2-statuscode.js` | Prints the status code of a GET request to a URL |
| `3-starwars_title.js` | Prints the title of the Star Wars film with a given id |
| `4-starwars_count.js` | Prints the number of films in which Wedge Antilles (character 18) appears |
| `5-request_store.js` | Stores the body of a web page response in a file (utf-8) |
| `6-completed_tasks.js` | Prints the number of completed tasks per user id |

## Usage examples

```
$ ./0-readme.js cisfun
$ ./1-writeme.js my_file.txt "Python is cool"
$ ./2-statuscode.js https://jsonplaceholder.typicode.com/todos
$ ./3-starwars_title.js 1
$ ./4-starwars_count.js https://swapi-api.alx-tools.com/api/films
$ ./5-request_store.js https://jsonplaceholder.typicode.com/todos/1 todo_test
$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
```

## AI usage

See `5-AI_Usage_Disclosure.md` in this folder.

## Author

Tajudeen
