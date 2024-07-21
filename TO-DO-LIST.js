document.querySelector("#push").onclick = function () {
  if (
    !document.querySelector("#newtask input").value ||
    document.querySelector("#newtask input").value.trim().length === 0
  )
    alert("Please Enter a Task");
  else {
    document.querySelector("#tasks").insertAdjacentHTML(
      "beforeend",
      `
      <div class="task">
        <span id="taskname">
          ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      `
    );
    var current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var complete_tasks = document.querySelectorAll(".task");
    for (let i = 0; i < complete_tasks.length; i++) {
      complete_tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};
