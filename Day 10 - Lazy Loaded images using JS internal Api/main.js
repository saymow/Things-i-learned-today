const targets = document.querySelectorAll("img");

// Wrong way, too main calls

// window.addEventListener("scroll", (event) => {
//   targets.forEach(img => {
//     const rect = img.getBoundingClientRect().top;
//     console.log("poop");
//     if (rect <= window.innerHeight) {
//       const src = img.getAttribute("data-lazy");
//       img.setAttribute("src", src);
//       img.classList.add("fade");
//     }
//   })
// })

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.map(entry => {
      if (entry.isIntersecting) {
        console.log("good");
        const img = entry.target;
        
        const src = img.getAttribute("data-lazy");
        img.setAttribute("src", src);
        img.classList.add("fade");

        observer.disconnect();
      }
    })
  })

  io.observe(target);
}

targets.forEach(target => lazyLoad(target));