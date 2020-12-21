//Create a form that lets you input the name of accomodation property (hotel or hoste),
//the number of rooms and select the type. Create a table of inputs. Create a button that
//colors hotel rows in blue and hostel rows in row and display a message stating how many
//of each there are.
//Part 2
//Implement a button that writes the average rounded number of rooms per accomodation type
// and a button that colors the accomodation with the lowes number of rooms

let formContainer;
let nameInput;
let roomInput;
let selectList;
let addBtn;
let markBtn;
let avgBtn;
let lowestNumBtn;
let table;
let div;
let tr, td1, td2, td3, th1, th2, th3;
let allBtns;
let allInputs;

const cacheDom = () => {
  formContainer = document.querySelector(".form");
  nameInput = document.querySelector(".form__name-input");
  roomInput = document.querySelector(".form__room-input");
  selectList = document.querySelector(".form__select");
  addBtn = document.querySelector(".form__submit-btn");
  markBtn = document.querySelector(".form__mark-btn");
  avgBtn = document.querySelector(".form__room-num-btn");
  allBtns = document.querySelectorAll("button");
  allInputs = document.querySelectorAll("input");
  lowestNumBtn = document.querySelector(".form__lowest-num-btn");
};

const bindEvents = () => {
  addBtn.addEventListener("click", createTable);
  window.addEventListener("load", styleForm);
  window.addEventListener("load", clearInputs);
  markBtn.addEventListener("click", colorFields);
  avgBtn.addEventListener("click", calcRoomAvg);
  lowestNumBtn.addEventListener("click", getLowestRoomNum);
};

const styleForm = () => {
  allBtns.forEach((button) => {
    button.style.display = "inline";
    button.style.marginTop = ".5rem";
  });
  allInputs.forEach((input) => (input.style.marginBottom = ".5rem"));
};

const createTable = () => {
  let roomsNum = roomInput.value;
  let name = nameInput.value;
  let type = selectList.value;

  const validation = validateInputs(roomsNum, name);
  if (validation == true) {
    return;
  }

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
  addRow(name, type, roomsNum);
};

const validateInputs = (roomsNum, name) => {
  if (name == " " && Number(roomsNum) == 0) {
    alert("Name and number of rooms are required");
    return true;
  } else if (name == " ") {
    alert("Name is required");
    return true;
  } else if (Number(roomsNum) == 0) {
    alert("Must be a valid number above 0");
    return true;
  } else {
    return false;
  }
};

const addRow = (name, type, roomsNum) => {
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td1.innerHTML = name;

  td2 = document.createElement("td");
  td2.innerHTML = type;

  td3 = document.createElement("td");
  td3.innerHTML = roomsNum;
  td3.classList.add("num-of-rooms");

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
    (hostel) => (hostel.parentElement.style.background = "#B38552")
  );
  hotels.forEach((hotel) => (hotel.parentElement.style.background = "#516EA4"));

  let hostelsNum = hostels.length;
  let hotelsNum = hotels.length;
  getNumPerCategory(hostelsNum, hotelsNum);
};

const getNumPerCategory = (hostelsNum, hotelsNum) => {
  if (!div) {
    div = document.createElement("div");
  }

  div.innerHTML =
    hotelsNum == 1 && hostelsNum == 1
      ? `The total is ${hotelsNum || 0} hotel and ${hostelsNum || 0} hostel.`
      : hotelsNum == 1 && hostelsNum > 1
      ? `The total is ${hotelsNum || 0} hotel and ${hostelsNum || 0} hostels.`
      : hotelsNum > 1 && hostelsNum == 1
      ? `The total is ${hotelsNum || 0} hotels and ${hostelsNum || 0} hostel.`
      : `The total is ${hotelsNum || 0} hotels and ${hostelsNum || 0} hostels.`;

  formContainer.appendChild(div);
};

const calcRoomAvg = () => {
  if (!div) {
    div = document.createElement("div");
  }

  let hostelEls = document.querySelectorAll(".num-of-rooms.hostel");
  let hotelEls = document.querySelectorAll(".num-of-rooms.hotel");

  let hostelRoomArr = [];
  let hotelRoomArr = [];

  hostelEls.forEach((el) => hostelRoomArr.push(Number(el.innerHTML)));
  hotelEls.forEach((el) => hotelRoomArr.push(Number(el.innerHTML)));

  let hostels = getAvgNum(hostelRoomArr);
  let hotels = getAvgNum(hotelRoomArr);

  div.innerHTML = `The average number of hotel rooms is ${
    Math.round(hotels) || 0
  } and hostel rooms ${Math.round(hostels) || 0}.`;

  formContainer.appendChild(div);
};

const getAvgNum = (arr) => {
  const sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  return sum / arr.length;
};

const getLowestRoomNum = () => {
  let numOfRooms = document.querySelectorAll(".num-of-rooms");
  let min = Number(numOfRooms[0].innerHTML);
  let minRoomNum = null;
  numOfRooms.forEach((el) => {
    if (Number(el.innerHTML) < min) {
      min = Number(el.innerHTML);
      minRoomNum = el;
    }
  });

  minRoomNum.parentElement.style.background = "#F0EAE4";
};

const clearInputs = () => {
  allInputs.forEach((input) => (input.value = " "));
};

cacheDom();
bindEvents();
