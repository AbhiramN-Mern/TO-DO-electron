//  Select elements
const input = document.getElementById("personInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");
const uncompleteBtn = document.getElementById("uncompleteAllBtn");

//  Add new person
addBtn.addEventListener("click", addPerson);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") addPerson();
});

function addPerson() {
  const name = input.value.trim();
  if (!name) return;

  const li = createListItem(name, false);
  todoList.appendChild(li);
  input.value = "";
  saveData();
}

//  Create a list item
function createListItem(name, completed) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${name}</span>
    <input type="checkbox" ${completed ? "checked" : ""}>
  `;

  const checkbox = li.querySelector("input");
  checkbox.addEventListener("change", () => toggleStatus(li, checkbox.checked));

  if (completed) li.classList.add("completed");
  return li;
}

//  Toggle between todo and completed
function toggleStatus(li, completed) {
  li.remove();
  if (completed) {
    li.classList.add("completed");
    doneList.appendChild(li);
  } else {
    li.classList.remove("completed");
    todoList.appendChild(li);
  }
  saveData();
}

//  Uncomplete all
uncompleteBtn.addEventListener("click", () => {
  const completedItems = [...doneList.querySelectorAll("li")];
  completedItems.forEach(li => toggleStatus(li, false));
});

//  Save to localStorage
function saveData() {
  const data = {
    todo: [...todoList.querySelectorAll("li span")].map(e => e.textContent),
    done: [...doneList.querySelectorAll("li span")].map(e => e.textContent)
  };
  localStorage.setItem("peopleTasks", JSON.stringify(data));
}

//  Load from localStorage
function loadData() {
  const data = JSON.parse(localStorage.getItem("peopleTasks")) || { todo: [], done: [] };
  data.todo.forEach(name => todoList.appendChild(createListItem(name, false)));
  data.done.forEach(name => doneList.appendChild(createListItem(name, true)));
}

loadData();
