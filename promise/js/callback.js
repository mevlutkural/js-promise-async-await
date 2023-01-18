const todoList = [
  { title: "Todo 1", description: "task 1" },
  { title: "Todo 2", description: "task 2" },
  { title: "Todo 3", description: "task 3" },
];

let todoListEl = document.getElementById("todoList");

function getTodoList() {
  setTimeout(() => {
    let todoItems = "";
    todoList.forEach((item) => {
      todoItems += `
        <li>
            <b>${item.title}</b>
            <p>${item.description}</p>
        </li>`;
    });
    todoListEl.innerHTML = todoItems;
  }, 1000);
}

function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todoList.push(todo);
      const e = false;

      if (!e) {
        resolve(todoList);
      }
      {
        reject("Somethings went wrong...");
      }
    }, 2000);
  });
}

newTodo({
  title: new Date().getTime() + " task",
  description: Math.random().toString(36).slice(2, 7),
})
  .then((res) => {
    getTodoList();
  })
  .catch((e) => {
    console.log(e);
  });

getTodoList();
