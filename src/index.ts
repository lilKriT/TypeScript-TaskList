console.log("Starting");

const addTaskBtn: HTMLButtonElement = document.querySelector(
  "#addTask"
) as HTMLButtonElement;

const taskNameInput: HTMLInputElement = document.querySelector(
  "#taskName"
) as HTMLInputElement;

const tasksList: HTMLElement = document.querySelector(
  "#tasksList"
) as HTMLElement;

addTaskBtn?.addEventListener("click", (e) => addTask(e));

const addTask = (e: Event) => {
  e.preventDefault();

  const taskName: string = taskNameInput.value;

  console.log(`Current Value: ${taskName}`);

  const newTask: HTMLDivElement = document.createElement("div");
  newTask.classList.add("task");

  const taskTitle = document.createElement("h2");
  taskTitle.textContent = "Task";
  newTask.appendChild(taskTitle);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = "Longer text here";
  newTask.appendChild(taskDescription);

  const taskEditButton = document.createElement("button");
  taskEditButton.textContent = "Edit";
  newTask.appendChild(taskEditButton);

  const taskCompletedButton = document.createElement("button");
  taskCompletedButton.textContent = "Completed";
  newTask.appendChild(taskCompletedButton);

  tasksList.appendChild(newTask);
};

const completeTask = () => {};

export {};
