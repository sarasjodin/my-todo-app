/**
 * app.ts
 * This is the main application file that initializes the TodoList class and sets up
 * the necessary event listeners for user interactions with the todo list.
 *
 * Responsibilities:
 * - Initializes the TodoList instance
 * - Renders the current state of the todo list to the DOM
 * - Sets up event listeners for user input and interactions
 *
 * This file handles app initialization and connects logic with the UI.
 */

import { TodoList } from './services/TodoList'; // Import the class with actual logic
import { renderTodos } from './ui/renderTodos'; // Renders the todo list items
import { initEventListeners } from './events/todoEvents'; // Initializes event listeners for form
import './style.css'; // Import global styles

// Initialize the todo list
const todoList = new TodoList();

// Render todos and initialize event listeners
renderTodos(todoList); // Initial rendering when page loads
initEventListeners(todoList); // Initialize event listeners for user interactions
