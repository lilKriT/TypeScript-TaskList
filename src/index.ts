// Finding elements
const addTaskBtn: HTMLButtonElement = document.querySelector(
  "#addTask"
) as HTMLButtonElement;

const taskNameInput: HTMLInputElement = document.querySelector(
  "#taskName"
) as HTMLInputElement;

const taskDescriptionInput: HTMLTextAreaElement = document.querySelector(
  "#taskDescription"
) as HTMLTextAreaElement;

const tasksList: HTMLElement = document.querySelector(
  "#tasksList"
) as HTMLElement;
addTaskBtn?.addEventListener("click", (e) =>
  handleAddTask(e, taskNameInput.value, taskDescriptionInput.value)
);

// UI Functions
const handleAddTask = (e: Event, name: string, description: string): void => {
  e.preventDefault();

  addTask(name, description);
  taskNameInput.value = "";
};

const handleEditTask = () => {
  console.log(`Editing: ${this}`);
};

// Task Functions
const addTask = (taskName: string, taskDescription: string) => {
  const newTask = createTaskElement(taskName, taskDescription);

  tasksList.appendChild(newTask);
};

const createTaskElement = (title: string, description: string): HTMLElement => {
  // Task
  const newTask: HTMLDivElement = document.createElement("div");
  // newTask.classList.add("task", "flex", "flex-col", "gap-2");
  newTask.classList.add(...["task", "flex", "flex-col", "gap-2"]);

  // Task - dislpay
  const taskDisplayDiv = document.createElement("div");
  taskDisplayDiv.classList.add("taskDisplay", "flex", "gap-2");

  const taskTitle = document.createElement("h2");
  taskTitle.textContent = title;
  taskDisplayDiv.appendChild(taskTitle);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = "Longer text here";
  taskDisplayDiv.appendChild(taskDescription);

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
  taskEditDiv.classList.add("taskEdit", "flex", "gap-2");

  const taskTitleEdit = document.createElement("input");
  taskTitleEdit.textContent = "edit here";
  taskEditDiv.appendChild(taskTitleEdit);

  const editSaveButton = document.createElement("button");
  editSaveButton.textContent = "Save";
  taskEditDiv.appendChild(editSaveButton);

  const editCancelButton = document.createElement("button");
  editCancelButton.textContent = "Cancel";
  taskEditDiv.appendChild(editCancelButton);

  // Adding both rows
  newTask.appendChild(taskDisplayDiv);
  newTask.appendChild(taskEditDiv);

  return newTask;
};

const openEdit = (task: any) => {
  console.log(task);

  const taskTitle = task.querySelector("h2");
  const taskEdit = task.querySelector("input");

  taskTitle.classList.add("hidden");
  taskTitle.classList.remove("flex");
  taskEdit.classList.add("flex");
  taskEdit.classList.remove("hidden");
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
