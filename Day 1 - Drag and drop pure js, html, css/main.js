const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach(card => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

dropzones.forEach(dropzone => {
  dropzone.addEventListener("dragenter", dragenter)
  dropzone.addEventListener("dragover", dragover)
  dropzone.addEventListener("dragleave", dragleave)
  dropzone.addEventListener("drop", drop)
})

function dragstart() {
  dropzones.forEach(dropzone => {
    dropzone.classList.add("unselectedDropzone");
  })

  this.classList.add("isDraggin");
}

function drag() {
  dropzones.forEach(dropzone => {
    dropzone.classList.add("unselectedDropzone");
  })
}

function dragend() {
  dropzones.forEach(dropzone => {
    dropzone.classList.remove("unselectedDropzone")
  })
  
  this.classList.remove("isDraggin");
}

function dragenter() {
  
}

function dragover() {
  this.classList.remove("unselectedDropzone")
  this.classList.add("selectedDropzone")


  const card = document.querySelector(".isDraggin");
  this.append(card);
}

function dragleave() {
  this.classList.remove("selectedDropzone");
}

function drop(e) {
  this.classList.remove("selectedDropzone");
}
