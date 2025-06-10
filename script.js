function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = function () {
    li.classList.toggle("done");
  };

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}