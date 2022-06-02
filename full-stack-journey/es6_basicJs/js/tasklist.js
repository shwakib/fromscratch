let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task');
let taskFilter = document.querySelector('#search_task');
let inputTask = document.querySelector('#newtask');

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
taskFilter.addEventListener("keyup", searchtask);
document.addEventListener('DOMContentLoaded', getTasks);

function addTask(e) { //From DOM
    if (inputTask.value === '') {
        alert('Add a task!');
    }
    else {
        let li = document.createElement('li');
        console.log(inputTask.value);
        li.appendChild(document.createTextNode(inputTask.value + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);

        taskList.appendChild(li);

        storeTaskInLocalStrorage(inputTask.value);

        inputTask.value = "";
    }
    e.preventDefault(); //https://www.w3schools.com/jsref/event_preventdefault.asp
}

function removeTask(e) { //From DOM
    if (e.target.hasAttribute('href')) {
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            // console.log(ele);
            removeFromLS(ele);
        }
    }
}

function clearTask(e) { //From DOM
    // taskList.innerHTML="";

    //Faster way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        console.clear();
    }
    localStorage.clear();
}

function searchtask(e) { //From DOM
    let text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('li').forEach(task => {
        // console.log(task.firstChild.textContent);
        let item = task.firstChild.textContent;
        // console.log(item);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    })
    // e.preventDefault();
}

function storeTaskInLocalStrorage(task) { //Push data in Local Storage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() { //View From Local Storage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        // console.log(inputTask.value);
        li.appendChild(document.createTextNode(task + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);

        taskList.appendChild(li);
    })
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}