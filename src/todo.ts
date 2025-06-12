/**
 * todo.ts
 * This file defines the "Todo" interface and the "TodoList" class,
 * which handles the core logic for managing todo items:
 * creating, storing, updating, and retrieving them.
 *
 * The class is purely focused on data and business logic, it performs
 * no DOM manipulation. This separation makes the class reusable and
 * easier to test independently of the UI.
 *
 * Class responsibilities:
 * - addTodo(): Validates and adds a new todo
 * - markTodoCompleted(): Marks a specific todo as completed
 * - getTodos(): Returns the current list of todos
 * - saveToLocalStorage(): Saves todos to browser storage
 * - loadFromLocalStorage(): Loads todos from browser storage on init
 */

// Defining Todo
export interface Todo {
  task: string; // required form field
  completed: boolean; // false as default
  priority: number; // Selectbox 1-High,2-Medium;3-low
}

// Class that manages a list of todos
export class TodoList {
  private todos: Todo[] = []; // Internal array storing all todo items

  constructor() {
    // Load todos from LocalStorage when an instance is created
    this.loadFromLocalStorage();
  }

  /**
   * Adds a new todo to the list if inputs are valid
   * @param task - The task description
   * @param priority - A number from 1 to 3 (prio)
   * @returns true if added successfully, false if input was invalid
   */
  addTodo(task: string, priority: number): boolean {
    // Validate inputs where task must not be empty priority must be between 1 and 3
    if (!task.trim() || priority < 1 || priority > 3) {
      return false;
    }

    // Create a new todo item with default completed = false
    const newTodo: Todo = {
      task,
      completed: false,
      priority
    };

    // Add the new todo to the internal array
    this.todos.push(newTodo);
    // Whole list is being saved
    this.saveToLocalStorage();
    return true;
  }

  /**
   * Marks a todo as completed by its index
   * @param index - Position of the todo in the list
   */
  markTodoCompleted(index: number): void {
    // Only mark as completed if index is valid
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = true;
      // Whole list is being saved
      this.saveToLocalStorage();
    }
  }

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
  saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // As key-value pair
  // Key: "todos"
  // Value: array of todo objects /JSON string
  // [
  //   {
  //     task: 'Study';
  //     completed: false;
  //     priority: 1;
  //   }
  // ];

  /**
   * Loads todos from LocalStorage if available,
   * and replaces the current todo array
   */
  loadFromLocalStorage(): void {
    const saved = localStorage.getItem('todos');
    if (saved) {
      // Parse the JSON string back into a todo array
      this.todos = JSON.parse(saved);
    }
  }
}
