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

  console.log(todoData);
  const todosContiners = document.getElementById(`todos-containers`);

  const todoItem = document.createElement(`div`);
  todoItem.className = `to-do-item`;
  todosContiners.appendChild(todoItem);

  const todoTitle = document.createElement(`p`);
  todoTitle.innerHTML = `${todoData.title}`;
  todoItem.appendChild(todoTitle);
}
