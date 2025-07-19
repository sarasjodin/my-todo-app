/**
 * @file todoEvents.ts
 *
 * This file contains event listeners for managing user interactions with the todo list.
 * It handles form submissions, click events for marking todos as completed,
 * deleting todos, and displaying appropriate messages to the user.
 *
 * Responsibilities:
 * - Adds event listeners to form and todo list container
 * - Handles adding, deleting, and toggling todos based on user input
 * - Displays success and error messages based on actions
 */

import { TodoList } from '../services/TodoList'; // Import the TodoList class for manipulating todos
import { renderTodos } from '../ui/renderTodos'; // Import the function to render todos in the UI
import { showMessage, showToggleMessage } from '../ui/messages'; // Import functions for displaying messages

/**
 * Initializes event listeners for form submission and interactions with the todo list.
 * - Handles form input for adding new todos.
 * - Handles clicks on todo items for deleting or toggling completion status.
 *
 * @param {TodoList} todoList - An instance of the TodoList class to manipulate todos.
 */
export function initEventListeners(todoList: TodoList) {
  const form = document.getElementById('todoForm') as HTMLFormElement;
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const priorityInput = document.getElementById(
    'priorityInput'
  ) as HTMLSelectElement;

  /**
   * Handles form submission for adding a new todo
   * Validates input, shows error if needed,
   * and triggers list re-render if successful
   */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = todoList.addTodo(taskInput.value, +priorityInput.value);

    // Show feedback message based on the result of adding the todo
    if (result === 'duplicate') {
      showMessage('error', 'Todo item already exists');
    } else if (result === 'invalid') {
      showMessage('error', 'Add a valid task and priority');
    } else {
      showMessage('success', 'Todo item has been added');
      taskInput.value = ''; // Clear input fields
      priorityInput.value = '2'; // Reset priority to default
      renderTodos(todoList); // Re-render the updated todo list
    }
  });

  // Add event listener to handle clicks on todo items
  document.querySelector('#todo-container')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const todoElement = target.closest('.todo-item') as HTMLElement;
    if (!todoElement) return;

    const createdAt = parseInt(todoElement.dataset.createdat!); // Get the unique ID of the todo

    // Delete todo item when delete button is clicked
    if (target.classList.contains('delete-todo')) {
      showMessage('success', 'Todo item has been deleted');
      todoList.deleteTodo(createdAt); // Delete the todo from the TodoList
      renderTodos(todoList); // Re-render the updated todo list
    }

    // Toggle completion status when checkbox is clicked
    if (target.classList.contains('toggle-completed')) {
      const isCompleted = todoList.toggleTodoCompleted(createdAt); // Toggle the completion status of the todo
      showToggleMessage(isCompleted); // Show success or error message based on the completion status
      renderTodos(todoList); // Re-render the updated todo list
    }
  });
}
