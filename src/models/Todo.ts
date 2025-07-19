/**
 * @file Todo.ts
 *
 * This file defines the "Todo" interface that describes the shape of a todo item.
 * It provides the structure for the task, its completion status, priority,
 * and timestamps for creation and completion.
 */

/**
 * Defining Todo
 * @interface Todo
 */
export interface Todo {
  // @type {string}
  task: string; // required form field

  // @type {boolean}
  completed: boolean; // false as default

  // @type {number}
  priority: number; // Selectbox 1-High,2-Medium;3-low

  // @type {number}
  createdAt: number; // The timestamp when the todo was created.

  // @type {number | undefined}
  completedAt?: number; // The timestamp when the todo was completed -optional, if completed.
}
