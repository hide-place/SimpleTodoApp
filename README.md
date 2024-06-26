## To-Do List App

This is a simple to-do list application written in JavaScript that utilizes HTML and CSS for the user interface.

### Features

* Add new tasks.
* View a list of existing tasks.
* Mark tasks as completed (visually, not functional in this version).
* Remove tasks.
* Persist tasks in local storage (tasks are saved even after refreshing the page).
* Basic input validation (prevents adding empty tasks).
* Error message for empty input.

### How to Use

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Enter your task in the input field and click the "Submit" button.
4. Click the trash icon next to a task to remove it.

### Dependencies

This code requires the Font Awesome library (v5.15.4) for the trash icon. You can include it in your project by adding the following line to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
```

**Note:** You can also download the Font Awesome library and include it locally in your project.

### Local Storage

This application uses the browser's local storage to save tasks. This allows tasks to persist even after refreshing the page.

## Development

This is a basic to-do list application and can be further extended with features like:

* Marking tasks as completed (functional).
* Filtering and sorting tasks.
* Due dates and priorities for tasks.
* Editing existing tasks.
* Cloud storage for tasks (using a service like Firebase).

Feel free to fork the repository and contribute your improvements!
