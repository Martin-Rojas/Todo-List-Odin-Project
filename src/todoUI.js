export default function createTodoUI(todoData) {
  /** <div class="to-do-item">
            <p>Write logic</p>
            <p>6-26-2025</p>
            <p>Hard</p>
            <div class="to-do-item-action">
              <span>view</span> <i class="fa-solid fa-trash"></i
              ><i class="fa-solid fa-pen"></i>
            </div>
        </div> */
  const todosContiners = document.getElementById(`todos-containers`);
  console.log(todosContiners);
  const todoItem = document.createElement(`div`);
  todoItem.className = `to-do-item`;
  todosContiners.appendChild(todoItem);

  const todoTitle = document.createElement(`p`);
  todoTitle.innerHTML = "Clean code";
  todoItem.appendChild(todoTitle);
}
