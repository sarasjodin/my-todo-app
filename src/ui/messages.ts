/**
 * @file messages.ts
 *
 * This file contains functions for displaying messages to the user.
 * It includes functionality for showing error or success messages
 * based on the application's state and actions performed by the user.
 *
 * Responsibilities:
 * - Show success or error messages in the UI
 * - Automatically clear messages after a specified time
 */

/**
 * Displays an error or success message to the user.
 * The message is shown in the respective `<p>` element for either success or error.
 * Both messages are cleared before showing the new message.
 *
 * @param {('error' | 'success')} type - The type of message to display. Can be either 'error' or 'success'.
 * @param {string} message - The message to display to the user.
 */
export function showMessage(type: 'error' | 'success', message: string) {
  const errorMsg = document.getElementById('errorMsg') as HTMLParagraphElement;
  const successMsg = document.getElementById(
    'successMsg'
  ) as HTMLParagraphElement;

  // Clear both message areas before showing a new one
  errorMsg.textContent = '';
  successMsg.textContent = '';

  // Show one or the other
  if (type === 'error') {
    errorMsg.textContent = message;
  } else {
    successMsg.textContent = message;
  }

  // Clear message after 4 seconds
  setTimeout(() => {
    errorMsg.textContent = '';
    successMsg.textContent = '';
  }, 4000);
}

/**
 * Displays a success or error message based on the completion state of a todo item.
 * This function is specifically used to show feedback after a todo is marked as completed or unmarked.
 *
 * @param {boolean | undefined} completed - The state of the todo item:
 *   - `true` indicates the todo was marked completed
 *   - `false` indicates the todo was "unmarked".
 *   - `undefined` in case the todo could not be toggled.
 */
export function showToggleMessage(completed: boolean | undefined) {
  if (completed === true) {
    showMessage('success', 'Well done, item marked as done!');
  } else if (completed === false) {
    showMessage('success', 'Todo item unmarked');
  } else {
    showMessage('error', 'Could not toggle todo');
  }
}
