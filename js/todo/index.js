const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtn = document.querySelector(".create-task-btn");

function createTaskHandler(event) {
  console.dir(event.target);
}
// input: str, callback
// output: undefined
createBtn.addEventListener("click", createTaskHandler);

// const changeTaskStatus = (event) => {
//     const taskId = Number(event.target.dataset.id);
//     const currentTask = tasks.find((task) => task.id === taskId);
//     currentTask.done = !currentTask.done;
//     renderTasks(tasks);
//   };

//   listElem.addEventListener("click", changeTaskStatus);

//   const addTasks = () => {
//     const inputElem = document.querySelector(".task-input");
//     const obj = {};
//     const newInput = inputElem.value;

//     if (!newInput) {
//       return;
//     }

//     obj.text = newInput;
//     obj.done = false;
//     obj.id = tasks.length + 1;
//     tasks.unshift(obj);
//     inputElem.value = "";
//     renderTasks(tasks);
//   };

//   buttonELem.addEventListener("click", addTasks);

//   const changeTaskStatus = (event) => {
//     const taskId = Number(event.target.dataset.id);
//     const currentTask = tasks.find((task) => task.id === taskId);
//     currentTask.done = !currentTask.done;
//     renderTasks(tasks);
//   };

//   listElem.addEventListener("click", changeTaskStatus);
