let listContainer = document.querySelector(".shoplist");
let itemName = document.querySelector(".form__item-name");
let itemPrice = document.querySelector(".form__item-price");
let selectList = document.querySelector(".form__select");
let item;
let foodArr = [];
let otherArr = [];
let currentList;
let ul;
let li;
let foodListEls;
let otherListEls;
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
    showList(foodArr);
    render();
    return;
  }

  otherArr.push(item);
  listClass = "other";
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

  deleteBtn.addEventListener("click", (e) => {
    deleteItem(e.currentTarget);
  });
  moveBtn.addEventListener("click", (e) => {
    moveItem(e.currentTarget);
  });
}

function showList(list) {
  currentList = list;
  console.log(currentList);

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
  } else if (list == otherArr) {
    foodListEls.forEach((el) => {
      el.style.display = "none";
    });
    otherListEls.forEach((el) => {
      el.style.display = "list-item";
    });
  }
}

function deleteItem(currentItem) {
  currentEl = currentItem.parentElement.getAttribute("value");
  itemIndex = currentList.indexOf(currentEl);
  currentList.splice(itemIndex, 1);
  render();
}

function moveItem(currentItem) {
  currentEl = currentItem.parentElement.getAttribute("value");
  itemIndex = currentList.indexOf(currentItem);
  console.log(currentList);

  if (foodArr.includes(currentEl)) {
    foodArr.splice(itemIndex, 1);
    otherArr.push(item);
    showList(otherArr);
    return;
  }
  otherArr.splice(itemIndex, 1);
  foodArr.push(item);
}

function addItemOnEnter(event) {
  if (event.key == "Enter") {
    addItem();
  }
}

const checked = () => {};
