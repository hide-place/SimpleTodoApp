// Selecting elements
const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submitBtn');
const tasksList = document.getElementById('tasks-list');
const ereurMsg = document.getElementById('error-message')

function addTask() {
    var taskValue  = taskInput.value;
    taskValue = taskValue.trim()
    if (taskValue.length > 16){
        taskValue = taskValue.slice(0 , 15) + '...'
    }
    if (taskValue !== '') {
        ereurMsg.style.display = 'none'
        const newElement = document.createElement('li');
        newElement.innerHTML = `
            <li class="li">
                <input type="checkbox" aria-label="checkbox" class="checkbox" > 
                <label for="task">${taskValue}</label>
                <i class="fas fa-trash-alt"></i>
            </li>
        `;
        tasksList.appendChild(newElement);
        taskInput.value = '';
    }
    else {
        ereurMsg.style.display = 'block'
    }
}



function removeTask(event) {
    if (event.target.classList.contains('fa-trash-alt')) {              
        const taskItem = event.target.parentElement; 
        taskItem.remove();
    }
}




submitBtn.addEventListener('click', addTask);
tasksList.addEventListener('click', removeTask);



