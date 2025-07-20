/**
 * @file renderTodos.ts
 *
 * This file contains the function responsible for rendering the todo items
 * to the DOM. It takes care of sorting the todo list, displaying todos,
 * and managing the layout of the list in the user interface.
 *
 * Responsibilities:
 * - Retrieves todos from the TodoList instance
 * - Sorts todos based on their completion status, priority, and creation time
 * - Renders each todo item to the DOM, including options to mark as completed or delete
 * - Displays an error message if no todos are available
 */

import { TodoList } from '../services/TodoList'; // Import the TodoList class to fetch the todos
import { showMessage } from './messages'; // Import the function to display messages to the user

/**
 * Renders the current todos from the TodoList instance to the DOM.
 *
 * @param {TodoList} todoList - The instance of TodoList from which todos are fetched.
 * @function renderTodos
 */
export function renderTodos(todoList: TodoList) {
  // Get the container where todos will be rendered
  const container = document.querySelector('#todo-container') as HTMLElement;
  // Clear the existing list
  container.innerHTML = '';

  // Get current todos from the class
  const todos = todoList.getTodos();

  // Show error message if no todos are found
  if (todos.length === 0) {
    showMessage('error', 'No items found yet');
    return;
  }

  // Sort todos by completion status, priority, and creation date
  const sortedTodos = todos.slice().sort((a, b) => {
    // Sort by completion status (completed items at the bottom)
    if (a.completed !== b.completed) return a.completed ? 1 : -1;

    // Sort by priority priority 1, then 2, then 3)
    if (a.priority !== b.priority) return a.priority - b.priority;

    // Sort by creation date (newest first)
    return a.createdAt - b.createdAt;
  });

  // Iterate over each sorted todo and render it to the DOM
  sortedTodos.forEach((todo) => {
    const item = document.createElement('div'); // Create a new div element for each todo
    item.className = 'todo-item'; // Assign a class to the item for styling
    item.dataset.createdat =
      todo.createdAt?.toString() || Date.now().toString(); // Set the createdAt as a data attribute for identification

    // Set the HTML content for each todo item
    item.innerHTML = `
      <input type="checkbox" class="toggle-completed" ${
        todo.completed ? 'checked' : ''
      }>
    <span class="task-text">${todo.task}</span>
    <span class="dots"></span>
    <span class="priority">| Prio ${todo.priority}</span>
    <button class="delete-todo">X</button>
  `;

    // Append the todo item to the "todo-container"
    container.appendChild(item);
  });
}
