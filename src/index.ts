console.log("Starting");

const addTaskBtn: HTMLButtonElement = document.querySelector(
  "#addTask"
) as HTMLButtonElement;

const taskNameInput: HTMLInputElement = document.querySelector(
  "#taskName"
) as HTMLInputElement;

addTaskBtn?.addEventListener("click", (e) => addTask(e));

const addTask = (e: Event) => {
  e.preventDefault();

  const taskName = taskNameInput.value;

  console.log(`Current Value: ${taskName}`);
};

export {};
