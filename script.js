// Selecting elements
const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submitBtn');
const tasksList = document.getElementById('tasks-list');
const ereurMsg = document.getElementById('error-message');

// Function to get tasks from local storage (replace with your implementation)
function getTasksFromLocalStorage() {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    if (serializedTasks === null) {
      return [];  // Return empty array if no tasks exist
    }
    return JSON.parse(serializedTasks);
  } catch (error) {
    console.error("Error getting tasks from local storage:", error);
    return [];  // Return empty array on error
  }
}

// Function to save tasks to local storage (replace with your implementation)
function saveTaskToLocalStorage(task) {
  try {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (error) {
    console.error("Error saving task to local storage:", error);
  }
}

// Function to remove task from local storage (replace with your implementation)
function removeTaskFromLocalStorage(taskText) {
  try {
    const tasks = getTasksFromLocalStorage();
    const taskIndex = tasks.indexOf(taskText);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (error) {
    console.error("Error removing task from local storage:", error);
  }
}

// Update task list
function updateTaskList() {
  const tasks = getTasksFromLocalStorage();
  if (tasks) {
    tasksList.innerHTML = '';  // Clear existing tasks before adding new ones
    for (var task of tasks) {
      const newElement = document.createElement('li');
      newElement.innerHTML = `
        <li class="li">
          <input type="checkbox" aria-label="checkbox" class="checkbox"> 
          <label for="task">${task}</label>
          <i class="fas fa-trash-alt"></i>
        </li>
      `;
      tasksList.appendChild(newElement);
    }
  } else {
    console.error("Failed to load tasks from local storage");
  }
}

// Add a task
function addTask() {
  var taskValue = taskInput.value.trim();
  if (taskValue.length > 16) {
    taskValue = taskValue.slice(0, 15) + '...';
  }
  if (taskValue !== '') {
    ereurMsg.style.display = 'none';
    const newElement = document.createElement('li');
    newElement.innerHTML = `
      <li class="li">
        <input type="checkbox" aria-label="checkbox" class="checkbox"> 
        <label for="task">${taskValue}</label>
        <i class="fas fa-trash-alt"></i>
      </li>
    `;
    tasksList.appendChild(newElement);
    taskInput.value = '';
    saveTaskToLocalStorage(taskValue);
  } else {
    ereurMsg.style.display = 'block';
  }
}

// Remove task (using event delegation)
tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash-alt')) {
    const taskItem = event.target.parentElement;  // Get the parent `li` element
    taskItem.remove();
    removeTaskFromLocalStorage(taskItem.textContent.trim());  // Remove leading/trailing whitespace
  }
});

// Call updateTaskList on page load (or when needed)
updateTaskList();

submitBtn.addEventListener('click', addTask);
