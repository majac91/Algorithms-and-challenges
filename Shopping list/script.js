let listContainer = document.querySelector(".shoplist");
let itemName = document.querySelector(".form__item-name");
let itemPrice = document.querySelector(".form__item-price");
let selectList = document.querySelector(".form__select");
let item;
let foodArr = [];
let otherArr = [];
let ul;
let li;
let foodListEls;
let otherListEls;
let currentList;
let addBtn = document.querySelector(".form__btns-add");
let foodBtn = document.querySelector(".form__btns-food");
let otherBtn = document.querySelector(".form__btns-other");
let deleteBtn;
let moveBtn;

addBtn.addEventListener("click", addItem);
itemName.addEventListener("keypress", addItemOnEnter);

foodBtn.addEventListener("click", () => {
  showList(foodArr);
});
otherBtn.addEventListener("click", () => {
  showList(otherArr);
});

function addItem() {
  item = `${itemName.value} - ${itemPrice.value} din`;

  if (selectList.value == "food") {
    foodArr.push(item);
    listClass = "food";
    currentList = foodArr;
    showList(foodArr);
    render();
    return;
  }

  otherArr.push(item);
  listClass = "other";
  currentList = otherArr;
  showList(otherArr);
  render();
}

function render() {
  if (!ul) {
    ul = document.createElement("ul");
    ul.classList.add("list");
  }

  li = document.createElement("li");
  li.innerHTML = item;
  li.setAttribute("value", item);
  li.classList.add(`list__${listClass}-item`);
  li.style.display = "list-item";

  deleteBtn = document.createElement("button");
  deleteBtn.classList.add("shoplist__delete-btn");
  deleteBtn.innerHTML = "Obrisi";

  moveBtn = document.createElement("button");
  moveBtn.classList.add("shoplist__move-btn");
  moveBtn.innerHTML = "Premesti";

  ul.appendChild(li);
  li.appendChild(deleteBtn);
  li.appendChild(moveBtn);
  listContainer.appendChild(ul);

  moveBtn.addEventListener("click", moveItem);
  deleteBtn.addEventListener("click", (e) => {
    deleteItem(e.currentTarget);
  });
}

function showList(list) {
  foodListEls = document.querySelectorAll(".list__food-item");
  otherListEls = document.querySelectorAll(".list__other-item");

  if (list == foodArr) {
    foodListEls.forEach((el) => {
      el.style.display = "list-item";
    });
    otherListEls.forEach((el) => {
      el.style.display = "none";
    });
    return;
  }

  foodListEls.forEach((el) => {
    el.style.display = "none";
  });
  otherListEls.forEach((el) => {
    el.style.display = "list-item";
  });
}

function deleteItem(currentItem) {
  currentEl = currentItem.parentElement.getAttribute("value");
  console.log(currentEl);
  itemIndex = currentList.indexOf(currentEl);
  currentList.splice(itemIndex, 1);
  console.log(currentList);
  showList(currentList);
}

function moveItem() {
  itemIndex = currentList.indexOf(item);

  if (currentList == foodArr) {
    foodArr.splice(itemIndex, 1);
    otherArr.push(item);
    return;
  }
  otherArr.splice(itemIndex, 1);
  foodArr.push(item);
  console.log(foodArr);
}

function addItemOnEnter(event) {
  console.log(event.key);
  if (event.key == "Enter") {
    addItem();
  }
}

const checked = () => {};
