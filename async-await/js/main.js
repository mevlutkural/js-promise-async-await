async function asyncExample() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

asyncExample().then((data) => {
  data.forEach((item) => {
    console.log(item);
  });
});
