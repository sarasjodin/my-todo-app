/**
 * app.ts
 * This is the main application file that connects the logic from the
 * "TodoList" class (in todo.ts) with the DOM user interface
 *
 * Responsibilities:
 * - Creates an instance of "TodoList" and initializes the app
 * - Handles form input and user interactions
 * - Renders the current state of the todo list to the DOM
 * - Updates the UI when the list changes
 *
 * All DOM access and manipulation are handled here, keeping
 * logic and presentation clearly separated
 */

import type { Todo } from './todo'; // Imports the type Todo from todo.ts
import { TodoList } from './todo'; // Import the class with actual logic
import './style.css'; // Import global styles

// Create a new instance of TodoList, loads existing todos from LocalStorage
const todoList = new TodoList();

// DOM element references
const form = document.getElementById('todoForm') as HTMLFormElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const priorityInput = document.getElementById(
  'priorityInput'
) as HTMLSelectElement;
const todoUL = document.getElementById('todoList') as HTMLUListElement;
const errorMsg = document.getElementById('errorMsg') as HTMLParagraphElement;

/**
 * Renders the todo list items to the <ul> element in the DOM
 * Clears the list before rendering, loops through each todo,
 * and appends a <li> element with content and a "Mark as done" button (if not already completed)
 */
function renderTodos() {
  // Clear the existing list
  todoUL.innerHTML = '';

  // Get current todos from the class
  const todos = todoList.getTodos();

  // Loop through and render each todo
  todos.forEach((todo: Todo, index: number) => {
    console.log(todo.task);
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';

    // HTML content for the <li>
    li.innerHTML = `
    <strong>${todo.task}</strong> | Prio ${todo.priority}
    ${
      !todo.completed
        ? `<button class="mark-completed" data-index="${index}">Mark as done</button>`
        : ''
    }
    `;

    // Append the <li> to the <ul>
    todoUL.appendChild(li);
  });

  /**
   * Add event listeners to all "Mark as done" buttons
   * Extract the index from the button's data attribute,
   * mark the todo as completed, and re-render the list
   */
  document.querySelectorAll('.mark-completed').forEach((button) => {
    button.addEventListener('click', (e) => {
      const index = +(e.target as HTMLElement).getAttribute('data-index')!;
      todoList.markTodoCompleted(index);
      renderTodos();
    });
  });
}

/**
 * Handles form submission for adding a new todo
 * Validates input, shows error if needed,
 * and triggers list re-render if successful
 */
// Not really needed in this version, since Task = Required and Prio = Selectbox
// But if I will add other content to my to do list this is still very handy
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const priority = +priorityInput.value;

  const success = todoList.addTodo(task, priority);
  if (!success) {
    // Show error message if validation failed
    errorMsg.textContent = 'Error: Add a task and priority (1–3)';
  } else {
    // Clear error, reset input fields
    errorMsg.textContent = '';
    taskInput.value = '';
    priorityInput.value = '2'; // Default to medium, mainly due to "selected" in html: <option value="2" selected>Medium</option>
    renderTodos();
  }
});

// Initial rendering when page loads
renderTodos();
