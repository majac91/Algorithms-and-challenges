//Create a slider with functionality to add images and number of likes to arrays of images/likes.
// Also create a delete function that removes slide data from corresponding arrays.
// There should be a counter that updates automatically when a image is added/deleted.

//TODO - OOP refactor

let imagePaths;
let descriptionsList;
let numOfLikes;
let currentIndex;
let img;
let des;
let counter;
let prevBtn;
let nextBtn;
let likesEl;
let likeBtn;
let newImg;
let newDes;
let uploadBtn;
let deleteEl;
let deleteBtn;

function cacheDom() {
  imagePaths = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  descriptionsList = ["Elephant", "Lion", "Monkey", "Fox"];
  currentIndex = 0;
  numOfLikes = [0, 0, 0, 0];
  img = document.getElementById("image");
  des = document.getElementById("images__description");
  counter = document.getElementById("images__counter");
  likesEl = document.getElementById("like");
  likeBtn = document.getElementById("like-btn");
  newImg = document.getElementById("new-image");
  newDes = document.getElementById("new-description");
  uploadBtn = document.getElementById("upload-btn");
  deleteEl = document.getElementById("delete-image");
  deleteBtn = document.getElementById("delete-btn");
  prevBtn = document.getElementById("prev-btn");
  nextBtn = document.getElementById("next-btn");
}

function bindEvents() {
  uploadBtn.addEventListener("click", addSlide);
  prevBtn.addEventListener("click", () => {
    changeImage(-1);
  });
  nextBtn.addEventListener("click", () => {
    changeImage(1);
  });
  likeBtn.addEventListener("click", likeImage);
  deleteBtn.addEventListener("click", deleteSlide);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input").forEach((el) => (el.value = ""));
  });
}

function changeImage(index) {
  currentIndex += index;

  if (currentIndex > imagePaths.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imagePaths.length - 1;
  }
  render();
}

function render() {
  img.src = "Images/" + imagePaths[currentIndex];
  des.innerHTML = descriptionsList[currentIndex];
  counter.innerHTML = currentIndex + 1 + "/" + imagePaths.length;
  likesEl.innerHTML = numOfLikes[currentIndex] + " likes";
}

function likeImage() {
  numOfLikes[currentIndex] += 1;
  likesEl.innerHTML = numOfLikes[currentIndex] + " likes";
}

function addSlide() {
  imagePaths.push(newImg.value);
  descriptionsList.push(newDes.value);
  numOfLikes.push(0);
  counter.innerHTML = currentIndex + 1 + "/" + imagePaths.length;
}

function deleteSlide() {
  let deleteElIndex = descriptionsList.indexOf(deleteEl.value);
  imagePaths.splice(deleteElIndex, 1);
  descriptionsList.splice(deleteElIndex, 1);
  numOfLikes.splice(deleteElIndex, 1);
  counter.innerHTML = currentIndex + 1 + "/" + imagePaths.length;
}

function autoSlide() {
  changeImage(1);
}

function init() {
  setInterval(autoSlide, 2000);
  cacheDom();
  render();
  bindEvents();
}
init();
