const dropdown = document.querySelector(".search-dropdown");

const render = (users) => {
  dropdown.innerHTML = "";
  users.forEach((user) => {
    dropdown.appendChild(createListElement(user));
  });
};

const createListElement = (value) => {
  let li = document.createElement("li");
  li.innerHTML = value;

  return li;
};

const filterUsers = (value) =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then((data) => data.json())
    .then((response) => response.map((item) => item.name));

const debounceEvent = (fn, wait = 200, time) => (...args) =>
  clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

function handleKeyUp(event) {
  filterUsers(event.target.value).then((users) => {
    render(users);
  });
}

document
  .querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500));
