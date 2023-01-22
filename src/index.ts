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
  console.log("Edit");
};

const handleSaveEdit = () => {
  console.log("Changes saved");
};

// Task Functions
const addTask = (taskName: string, taskDescription: string) => {
  const newTask = createTaskElement(taskName, taskDescription);

  tasksList.appendChild(newTask);
};

const createTaskElement = (title: string, description: string): HTMLElement => {
  const newTask: HTMLDivElement = document.createElement("div");
  newTask.classList.add("task", "flex", "gap-2");

  const taskTitle = document.createElement("h2");
  taskTitle.textContent = title;
  newTask.appendChild(taskTitle);

  const taskTitleEdit = document.createElement("input");
  taskTitleEdit.textContent = "edit here";
  newTask.appendChild(taskTitleEdit);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = "Longer text here";
  newTask.appendChild(taskDescription);

  const taskEditButton = document.createElement("button");
  taskEditButton.textContent = "Edit";
  taskEditButton.addEventListener("click", () => handleEditTask());
  newTask.appendChild(taskEditButton);

  const taskCompletedButton = document.createElement("button");
  taskCompletedButton.textContent = "Completed";
  taskCompletedButton.addEventListener("click", () => completeTask(newTask));
  newTask.appendChild(taskCompletedButton);

  return newTask;
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
