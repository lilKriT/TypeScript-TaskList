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
  const taskTitle = document.createElement("h2");
  taskTitle.textContent = "bla bla";
  newTask.appendChild(taskTitle);

  tasksList.appendChild(newTask);
};

export {};
