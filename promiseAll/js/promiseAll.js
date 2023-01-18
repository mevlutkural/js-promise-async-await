let getTodos = [];
for (let i = 0; i < 30; i++) {
  getTodos.push(fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()));
}
Promise.all(getTodos)
  .then((promises) => {
    console.log("promises", promises);
  })
  .catch((e) => {
    console.log("catch", e);
  });
