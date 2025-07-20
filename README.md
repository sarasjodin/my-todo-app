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
- ✅ Delete todos
- 🔍 Focus on: **modularity**, **LocalStorage usage**, **object-oriented programming (OOP)**

---

<img width="auto" height="auto" alt="Part of my ToDo app" src="https://github.com/user-attachments/assets/3902fbe8-d0cc-418f-9ca5-18c28d095289" />

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
- Delete tasks
- Display a full list of todos
- Persist the list using LocalStorage between sessions

### TypeScript Structure:

- An "app.ts" file serves as the main application entry point.
It integrates all components, managing the application's state
and user interactions while delegating specific tasks to the appropriate modules.

A Todo interface with:
- task: string
- completed: boolean
- priority: number (1 = high, 3 = low)
- createdAt: number
- completedAt?: number

A TodoList class that includes:
- todos: array of Todo
- addTodo(task: string, priority: number): boolean
- deleteTodo(createdAt: number): void
- toggleTodoCompleted(createdAt: number): boolean | undefined
- getTodos(): Todo[]
- saveToLocalStorage(): void
- loadFromLocalStorage(): void

- A "todoEvents" includes all eventhandlers
- A "ui/messages" that handles the messages for the user
- A "ui/renderTodos" that handles the rendering of the todo items to the DOM

Constructor initializes and loads todos from LocalStorage.
DOM rendering is handled separately by the renderTodos module.
Methods in the TodoList class handle all todo operations like
adding, deleting, and toggling completion.
The class also performs input validation, returning false
if invalid input is given, while error and success messages
are handled by the messages module.

---

## Folder Structure

<img width="150" height="auto" alt="folder structure" src="https://github.com/user-attachments/assets/d82073ce-f1b8-41d6-a92e-4eecfa14ad7a" />

---

## Security

- ✅ Dependabot active
- ✅ Security policy configured
- ✅ Automatic CodeQL analysis

---

## License

MIT – see LICENSE.md for details.

---
