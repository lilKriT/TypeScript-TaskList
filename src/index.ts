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

  const taskName = taskNameInput.value;

  console.log(`Current Value: ${taskName}`);

  const newTask = document.createElement("div");
  const taskTitle = document.createElement("h2");
};

export {};
