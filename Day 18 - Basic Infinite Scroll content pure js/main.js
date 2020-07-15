const loaderElement = document.querySelector(".loader");
const containerElement = document.querySelector("#container");
const qntdPerLoad = 5;
let currentPage = 1;

const observer = new IntersectionObserver(() => {
  loadElements();
});

observer.observe(loaderElement);

async function loadElements() {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${qntdPerLoad}&_page=${currentPage}`
  ).then((response) => response.json());

  setTimeout(() => {
    data.forEach((post) => {
      const div = createElement(post.title, post.body);
      containerElement.appendChild(div);
    });
    currentPage++;
  }, 1000);
}

function createElement(title, body) {
  const div = document.createElement("div");
  div.classList.add("post");

  const h1 = document.createElement("h1");
  h1.innerHTML = title;

  const p = document.createElement("p");
  p.innerHTML = body;

  div.appendChild(h1);
  div.appendChild(p);

  return div;
}
