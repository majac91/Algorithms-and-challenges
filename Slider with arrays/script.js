//Create a slider with functionality to add images and number of likes to arrays of images/likes.
// Also create a delete function that removes slide data from corresponding arrays and a favorite button
// that displays the image with the highest number of likes.
// There should be a counter that updates automatically when an image is added/deleted.
// Slider pauses on image hover
//TODO - OOP refactor

const slider = (function () {
  let imagePaths;
  let descriptionsList;
  let numOfLikes;
  let numOfViews;
  let currentIndex;
  let imgContainer;
  let img;
  let des;
  let counter;
  let prevBtn;
  let nextBtn;
  let likesEl;
  let likeBtn;
  let viewEl;
  let newImg;
  let newDes;
  let uploadBtn;
  let deleteEl;
  let deleteBtn;
  let currentDes;
  let editedDes;
  let inputs;

  function cacheDom() {
    imagePaths = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
    descriptionsList = ["Elephant", "Lion", "Monkey", "Fox"];
    currentIndex = 0;
    numOfLikes = [0, 0, 0, 0];
    numOfViews = [0, 0, 0, 0];
    imgContainer = document.querySelector(".images");
    img = null;
    des = null;
    counter = document.querySelector(".slide-controlls__counter");
    prevBtn = document.querySelector(".slide-controlls__prev-btn");
    nextBtn = document.querySelector(".slide-controlls__next-btn");
    viewEl = document.querySelector(".likes__views-num");
    likesEl = document.querySelector(".likes__likes-num");
    likeBtn = document.querySelector(".likes__like-btn");
    favBtn = document.querySelector(".likes__favorite-btn");
    newImg = document.querySelector(".add__new-image");
    newDes = document.querySelector(".add__new-description");
    uploadBtn = document.querySelector(".add__btn");
    deleteEl = document.querySelector(".delete__image");
    deleteBtn = document.querySelector(".delete__btn");
    currentDes = document.querySelector(".edit__current-description");
    editedDes = document.querySelector(".edit__new-description");
    editBtn = document.querySelector(".edit__btn");
    inputs = document.querySelectorAll("input");
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
    editBtn.addEventListener("click", editCaption);
    favBtn.addEventListener("click", getFavoriteImage);
    document.addEventListener("DOMContentLoaded", clearInputs);
    imgContainer.addEventListener("mouseenter", pauseSlide);
    imgContainer.addEventListener("mouseleave", continueSlide);
  }

  function changeImage(index) {
    currentIndex = index == 1 || index == -1 ? currentIndex + index : index;

    if (currentIndex > imagePaths.length - 1) {
      currentIndex = 0;
    }

    if (currentIndex < 0) {
      currentIndex = imagePaths.length - 1;
    }

    numOfViews[currentIndex]++;
    render();
    updateCounters();
  }

  function autoSlide() {
    changeImage(1);
  }

  let interval = setInterval(autoSlide, 2000);

  const pauseSlide = () => clearInterval(interval);

  const continueSlide = () => (interval = setInterval(autoSlide, 2000));

  const clearInputs = () => inputs.forEach((input) => (input.value = ""));

  function render() {
    if (img == null && des == null) {
      img = document.createElement("img");
      des = document.createElement("div");
    }

    img.src = "Images/" + imagePaths[currentIndex];
    img.alt = descriptionsList[currentIndex];
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.cursor = "pointer";
    des.innerHTML = descriptionsList[currentIndex];

    imgContainer.append(img);
    imgContainer.append(des);
  }

  function updateCounters() {
    counter.innerHTML = currentIndex + 1 + "/" + imagePaths.length;
    viewEl.innerHTML = numOfViews[currentIndex] + " views";
    likesEl.innerHTML = numOfLikes[currentIndex] + " likes";
  }

  function likeImage() {
    numOfLikes[currentIndex] += 1;
    likesEl.innerHTML = numOfLikes[currentIndex] + " likes";
  }

  function getFavoriteImage() {
    let max = 0;
    numOfLikes.forEach((el) => {
      if (el > max) {
        max = el;
      }
    });
    let index = numOfLikes.indexOf(max);
    changeImage(index);
  }

  function addSlide() {
    imagePaths.push(newImg.value);
    descriptionsList.push(newDes.value);
    numOfLikes.push(0);
    numOfViews.push(0);
    render();
    updateCounters();
  }

  function deleteSlide() {
    let index = descriptionsList.indexOf(deleteEl.value);
    imagePaths.splice(index, 1);
    descriptionsList.splice(index, 1);
    numOfLikes.splice(index, 1);
    numOfViews.splice(index, 1);
    render();
    updateCounters();
  }

  function editCaption() {
    let index = descriptionsList.indexOf(currentDes.value);
    descriptionsList.splice(index, 1, editedDes.value);
    render();
  }

  cacheDom();
  bindEvents();
  render();
  updateCounters();
})();
