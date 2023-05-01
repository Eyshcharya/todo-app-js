const form = document.querySelector('#form');
const input = document.querySelector('#newTaskInput');
const list = document.querySelector('#tasks');
const taskArray = localStorage.getItem('taskValue')
  ? JSON.parse(localStorage.getItem('taskValue'))
  : [];

form.addEventListener('submit', function anon(e) {
  e.preventDefault();
  const taskValue = input.value;
  if (taskValue) {
    console.log(`Added Task: ${taskValue}`);
  } else {
    alert(`Please add a task.`);
    preventDefault();
    // to prevent adding empty tasks
  }
  storeItem();
  function storeItem(newTask) {
    taskArray.push(input.value);
    localStorage.setItem('taskValue', JSON.stringify(taskArray));
  }
  console.log(taskArray);

  const task = document.createElement('div');
  task.classList.add('task');

  const content = document.createElement('div');
  content.classList.add('content');

  const taskInputText = document.createElement('input');
  taskInputText.value = taskValue;
  console.log(taskInputText.innerText);
  taskInputText.classList.add('text');
  taskInputText.setAttribute('readonly', 'readonly');

  content.appendChild(taskInputText);
  task.appendChild(content);
  list.appendChild(task);

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const edit = document.createElement('button');
  edit.classList.add('edit');
  edit.innerHTML = 'Edit';

  const dlt = document.createElement('button');
  dlt.classList.add('delete');
  dlt.innerHTML = 'Delete';

  actions.appendChild(edit);
  actions.appendChild(dlt);
  task.appendChild(actions);
  list.appendChild(task);

  // input.value = '';

  edit.addEventListener('click', function () {
    if (edit.innerText.toLowerCase() == 'edit') {
      taskInputText.removeAttribute('readonly', 'readonly');
      console.log('can edit');
      taskInputText.focus();
      edit.innerText = 'Save';
    } else {
      console.log('saved');
      taskInputText.setAttribute('readonly', 'readonly');
      edit.innerText = 'Edit';
    }
  });

  dlt.addEventListener('click', function () {
    list.removeChild(task);
  });
});
