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
addTaskBtn?.addEventListener("click", (e) => addTask(e, taskNameInput.value));

// Task Functions
const addTask = (e: Event, taskName: string) => {
  e.preventDefault();

  const newTask = createTask(taskName);
  taskNameInput.value = "";

  tasksList.appendChild(newTask);
};

const createTask = (title: string): HTMLElement => {
  const newTask: HTMLDivElement = document.createElement("div");
  newTask.classList.add("task", "flex", "gap-2");

  const taskTitle = document.createElement("h2");
  taskTitle.textContent = title;
  newTask.appendChild(taskTitle);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = "Longer text here";
  newTask.appendChild(taskDescription);

  const taskEditButton = document.createElement("button");
  taskEditButton.textContent = "Edit";
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

export {};
