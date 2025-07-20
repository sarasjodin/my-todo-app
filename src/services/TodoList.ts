/**
 * @class TodoList
 *
 * // Class that manages a list of todos
 *
 * Class responsibilities:
 * - addTodo(): Validates and adds a new todo
 * - deleteTodo(): Deletes a todo from the list (no confirmation this version)
 * - toggleTodoCompleted(): Toggles todo as completed/unmarked
 * - getTodos(): Returns the current list of todos
 * - saveToLocalStorage(): Saves todos to browser storage
 * - loadFromLocalStorage(): Loads todos from browser storage
 */

import type { Todo } from '../models/Todo';

export class TodoList {
  private todos: Todo[] = []; // Internal array storing all todo items

  /**
   * Load todos from LocalStorage when an instance is created
   */
  constructor() {
    this.loadFromLocalStorage();
  }

  /**
   * Attempts to add a new todo item to the list.
   * Validates input values and checks for duplicate tasks before adding.
   *
   * @param task - The task description
   * @param priority - A number from 1 to 3 (prio)
   * @returns
   *   - ok if the todo was added successfully
   *   - invalid if priority not met
   *   - duplicate if a todo with the same task already exists
   */
  addTodo(task: string, priority: number): 'ok' | 'invalid' | 'duplicate' {
    const trimmedTask = task.trim();
    if (!trimmedTask || priority < 1 || priority > 3) return 'invalid';

    // Check if task exists
    const exists = this.todos.some(
      (todo) => todo.task.toLowerCase() === trimmedTask.toLowerCase()
    );
    if (exists) return 'duplicate';

    // Create and add a new todo item with default completed = false
    this.todos.push({
      task: trimmedTask || 'Unnamed task',
      priority,
      completed: false,
      createdAt: Date.now() // Always ensure createdAt is set
    });

    // Whole list is being saved
    this.saveToLocalStorage();
    return 'ok';
  }

  /**
   * Deletes a todo from the list based on createdAt timestamp.
   *
   * @param {number} createdAt - The unique timestamp of the todo to delete
   */
  deleteTodo(createdAt: number): void {
    const index = this.todos.findIndex((todo) => todo.createdAt === createdAt);
    if (index !== -1) {
      this.todos.splice(index, 1); // Remove the todo from the list
      this.saveToLocalStorage(); // Save to LocalStorage
    }
  }

  /**
   * Toggles the completion state of a todo. If the todo is marked as completed,
   * the completedAt timestamp is set; otherwise, it is removed.
   *
   * @param {number} createdAt - The unique timestamp of the todo to toggle.
   * @returns {boolean | undefined} - Returns the updated completion state of the todo
   *                               true if marked completed, false if unmarked or undefined if the todo was not found.
   */
  toggleTodoCompleted(createdAt: number): boolean | undefined {
    const todo = this.todos.find((t) => t.createdAt === createdAt);
    if (todo) {
      todo.completed = !todo.completed;
      todo.completedAt = todo.completed ? Date.now() : undefined;
      // Whole list is being saved
      this.saveToLocalStorage();
      return todo.completed;
    }
    return undefined;
  }

  /**
   * Updates the task description of a specific todo.
   *
   * @param {number} index - The index of the todo to update in the list.
   * @param {string} newText - The new task description for the todo.
   */
  /*   updateTodoText(index: number, newText: string): void {
    if (this.todos[index]) {
      this.todos[index].task = newText;
      this.saveToLocalStorage();
    }
  } */

  /**
   * Returns the full list of todos
   * @returns An array of all todos
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Saves the current todo list to the browser's LocalStorage
   */
  private saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  /**
   * Loads todos from LocalStorage if available,
   * and replaces the current todo array
   */
  private loadFromLocalStorage(): void {
    const data = localStorage.getItem('todos');
    if (data) {
      // Parse the JSON string back into a todo array
      this.todos = JSON.parse(data);
    }
  }
}
