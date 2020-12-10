//Create a form that lets you input the name of accomodation property (hotel or hoste),
//the number of rooms and select the type. Create a table of inputs. Create a button that
//colors hotel rows in blue and hostel rows in row and display a message stating how many
//of each there are.

let formContainer;
let nameInput;
let roomInput;
let selectList;
let addBtn;
let markBtn;
let table;
let tr, td1, td2, td3, th1, th2, th3;
let allBtns;
let allInputs;

const bindEvents = () => {
  addBtn.addEventListener("click", addItem);
  window.addEventListener("load", styleForm);
  window.addEventListener("load", clearInputs);
  markBtn.addEventListener("click", colorFields);
};

const cacheDom = () => {
  formContainer = document.querySelector(".form");
  nameInput = document.querySelector(".form__name-input");
  roomInput = document.querySelector(".form__room-input");
  selectList = document.querySelector(".form__select");
  addBtn = document.querySelector(".form__submit-btn");
  markBtn = document.querySelector(".form__mark-btn");
  allBtns = document.querySelectorAll("button");
  allInputs = document.querySelectorAll("input");
};

const styleForm = () => {
  allBtns.forEach((button) => {
    button.style.display = "inline";
    button.style.marginTop = ".5rem";
  });
  allInputs.forEach((input) => (input.style.marginBottom = ".5rem"));
};

const addItem = () => createTable();

const createTable = () => {
  let roomsNum = roomInput.value;
  let name = nameInput.value;
  let type = selectList.value;

  if (!table) {
    table = document.createElement("table");
    tr = document.createElement("tr");
    th1 = document.createElement("th");
    th1.innerHTML = "Name";
    th2 = document.createElement("th");
    th2.innerHTML = "Type of accomodation";
    th3 = document.createElement("th");
    th3.innerHTML = "Number of rooms";

    formContainer.appendChild(table);
    appendRow(tr, th1, th2, th3);
  }
  createRow(roomsNum, name, type);
};

const createRow = (room, name, type) => {
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td1.innerHTML = name;

  td2 = document.createElement("td");
  td2.innerHTML = room;

  td3 = document.createElement("td");
  td3.innerHTML = type;

  if (type == "Hotel") {
    td3.classList.add("hotel");
  } else {
    td3.classList.add("hostel");
  }
  appendRow(tr, td1, td2, td3);
};

const appendRow = (tr, tEl1, tEl2, tEl3) => {
  table.appendChild(tr);
  tr.appendChild(tEl1);
  tr.appendChild(tEl2);
  tr.appendChild(tEl3);
};

const colorFields = () => {
  let hostels = document.querySelectorAll(".hostel");
  let hotels = document.querySelectorAll(".hotel");

  hostels.forEach(
    (hostel) => (hostel.parentElement.style.background = "OrangeRed")
  );
  hotels.forEach(
    (hotel) => (hotel.parentElement.style.background = "RoyalBlue")
  );

  let hostelsNum = hostels.length;
  let hotelsNum = hotels.length;
  displayObjectsNum(hostelsNum, hotelsNum);
};

const displayObjectsNum = (hostelsNum, hotelsNum) => {
  let div = document.createElement("div");
  formContainer.appendChild(div);
  if (hotelsNum == 1 && hostelsNum == 1) {
    div.innerHTML = `The total is ${hotelsNum} hotel and ${hostelsNum} hostel.`;
  } else if (hotelsNum == 1 && hostelsNum > 1) {
    div.innerHTML = `The total is ${hotelsNum} hotel and ${hostelsNum} hostels.`;
  } else if (hotelsNum > 1 && hostelsNum == 1) {
    div.innerHTML = `The total is ${hotelsNum} hotels and ${hostelsNum} hostel.`;
  } else {
    div.innerHTML = `The total is ${hotelsNum} hotels and ${hostelsNum} hostels.`;
  }
};

const clearInputs = () => {
  allInputs.forEach((input) => (input.value = " "));
};

cacheDom();
bindEvents();
