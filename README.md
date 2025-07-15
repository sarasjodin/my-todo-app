# my-todo-app

<a href="https://sarasjodin.github.io/my-todo-app/" target="_blank" rel="noopener noreferrer">
Open Live Demo
</a> <br><br>

![GitHub Pages](https://github.com/sarasjodin/my-todo-app/actions/workflows/pages/pages-build-deployment/badge.svg)

---

# About this app
A TypeScript-based todo app focusing on code structure, separation of concerns, and persistent data handling via LocalStorage.
Users can manage tasks with different priority levels and mark items as completed.

---

## Features

- ✅ Add new todos with priority
- ✅ Mark todos as completed
- 🔍 Focus on: **modularity**, **LocalStorage usage**, **object-oriented programming (OOP)**

---

## Tech Stack

- HTML / CSS / TypeScript
- Vite (development server & bundler)
- GitHub Pages (for deployment)

---

## Installation

```bash
npm install
npm run dev
```

---

## More about This Project
With this project I have gained practical experience in building a todo application using TypeScript and object-oriented programming principles.
I have learnt how to use interfaces, type systems, and LocalStorage.

### Core Functionality:
- Add new tasks with a description and priority (1–3)
- Mark tasks as completed
- Display a full list of todos
- Persist the list using LocalStorage between sessions

### TypeScript Structure:

A Todo interface with:
- task: string
- completed: boolean
- priority: number (1 = high, 3 = low)

A TodoList class that includes:
- todos: array of Todo
- addTodo(task: string, priority: number): boolean
- markTodoCompleted(index: number): void
- getTodos(): Todo[]
- saveToLocalStorage(): void
- loadFromLocalStorage(): void

Constructor initializes and loads todos from LocalStorage.
DOM rendering is handled separately (not inside the class). Class methods return values that can be used in the frontend.
All input validation is handled in the class. If invalid input is given, methods return false and the site handles the error messaging.

---

## Folder Structure

<img src="" alt="folder structure" width="150"/>

---

## Security

- ✅ Dependabot active
- ✅ Security policy configured
- ✅ Automatic CodeQL analysis

---

## License

MIT – see LICENSE.md for details.

---
