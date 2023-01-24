// Finding elements
const addTaskBtn: HTMLButtonElement = document.querySelector(
  "#addTask"
) as HTMLButtonElement;

const taskNameInput: HTMLInputElement = document.querySelector(
  "#taskName"
) as HTMLInputElement;

const tasksList: HTMLElement = document.querySelector(
  "#tasksList"
) as HTMLElement;
addTaskBtn?.addEventListener("click", (e) =>
  handleAddTask(e, taskNameInput.value)
);

// UI Functions
const handleAddTask = (e: Event, name: string): void => {
  e.preventDefault();

  addTask(name);
  taskNameInput.value = "";
};

// Task Functions
const addTask = (taskName: string) => {
  const newTask = createTaskElement(taskName);

  tasksList.appendChild(newTask);
};

const createTaskElement = (title: string): HTMLElement => {
  // Task
  const newTask: HTMLLIElement = document.createElement("li");
  // newTask.classList.add("task", "flex", "flex-col", "gap-2");
  newTask.classList.add(...["task", "flex", "flex-col", "gap-2"]);
  newTask.setAttribute("draggable", "true");

  // Task - dislpay
  const taskDisplayDiv = document.createElement("div");
  taskDisplayDiv.classList.add("taskDisplay", "flex", "gap-2");

  const taskTitle = document.createElement("h2");
  taskTitle.textContent = title;
  taskDisplayDiv.appendChild(taskTitle);

  const taskEditButton = document.createElement("button");
  taskEditButton.textContent = "Edit";
  taskEditButton.addEventListener("click", () => openEdit(newTask));
  taskDisplayDiv.appendChild(taskEditButton);

  const taskCompletedButton = document.createElement("button");
  taskCompletedButton.textContent = "Completed";
  taskCompletedButton.addEventListener("click", () => completeTask(newTask));
  taskDisplayDiv.appendChild(taskCompletedButton);

  // Task - edit
  const taskEditDiv = document.createElement("div");
  taskEditDiv.classList.add("taskEdit", "gap-2", "hidden");

  const taskTitleEdit = document.createElement("input");
  taskTitleEdit.textContent = "edit here";
  taskEditDiv.appendChild(taskTitleEdit);

  const editSaveButton = document.createElement("button");
  editSaveButton.textContent = "Save";
  editSaveButton.addEventListener("click", () => saveEdit(newTask));
  taskEditDiv.appendChild(editSaveButton);

  const editCancelButton = document.createElement("button");
  editCancelButton.textContent = "Cancel";
  editCancelButton.addEventListener("click", () => cancelEdit(newTask));
  taskEditDiv.appendChild(editCancelButton);

  // Adding both rows
  newTask.appendChild(taskDisplayDiv);
  newTask.appendChild(taskEditDiv);

  newTask.addEventListener("dragstart", () => dragStart(newTask));
  newTask.addEventListener("dragenter", () => dragEnter(newTask));
  newTask.addEventListener("dragover", (e) => dragOver(e, newTask));
  newTask.addEventListener("dragleave", () => dragLeave(newTask));
  newTask.addEventListener("drop", () => dragDrop(newTask));

  return newTask;
};

// Drag and drop
let movedTask: HTMLElement;
const dragStart = (_task: any) => {
  movedTask = _task;
};

const dragEnter = (_task: any) => {
  _task.classList.add("bg-gray-400");
};

const dragOver = (e: Event, _task: any) => {
  e.preventDefault();
};

const dragLeave = (_task: any) => {
  _task.classList.remove("bg-gray-400");

  const test = document.createElement("p");
  test.textContent = "Added";
};

const dragDrop = (_task: HTMLElement) => {
  console.log(_task);

  _task.after(movedTask);
  _task.classList.remove("bg-gray-400");
};

// Task functions
const openEdit = (task: any) => {
  const taskDisplay = task.querySelector(".taskDisplay");
  const taskEdit = task.querySelector(".taskEdit");
  const currentTaskTitle = task.querySelector(".taskDisplay h2");
  const editInput = task.querySelector(".taskEdit input");

  taskDisplay.classList.add("hidden");
  taskDisplay.classList.remove("flex");
  taskEdit.classList.add("flex");
  taskEdit.classList.remove("hidden");

  editInput.value = currentTaskTitle.textContent;
};

const saveEdit = (task: any) => {
  const taskDisplay = task.querySelector(".taskDisplay");
  const taskEdit = task.querySelector(".taskEdit");
  const currentTaskTitle = task.querySelector(".taskDisplay h2");
  const editInput = task.querySelector(".taskEdit input");

  taskDisplay.classList.remove("hidden");
  taskDisplay.classList.add("flex");
  taskEdit.classList.remove("flex");
  taskEdit.classList.add("hidden");

  currentTaskTitle.textContent = editInput.value;
};

const cancelEdit = (task: any) => {
  const taskDisplay = task.querySelector(".taskDisplay");
  const taskEdit = task.querySelector(".taskEdit");

  taskDisplay.classList.remove("hidden");
  taskDisplay.classList.add("flex");
  taskEdit.classList.remove("flex");
  taskEdit.classList.add("hidden");
};

const completeTask = (task: any) => {
  task.remove();
};

const addExampleTasks = (): void => {
  addTask("Buy stuff", "def");
  addTask("Work out", "def");
  addTask("Be cool", "def");
};
addExampleTasks();

export {};
