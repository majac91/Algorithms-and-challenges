//Create an input form that displays in the student data, average score and highest score.
//Make adding students and updating the highest scoring list possible.

let table;
let div;
let table1;
let table2;
let btnAdd;
let btnAverageScore;
let btnHighScore;
let container;
let tables;

const university = new University("Filozofski fakultet", "Nis");

function cacheDOM() {
  container = document.querySelector(".container");
  tables = document.querySelector(".tables");

  btnAdd = document.getElementById("add-btn");
  btnAverageScore = document.getElementById("calc-btn");
  btnHighScore = document.getElementById("top-graded-btn");
}

function bindEvents() {
  btnAdd.addEventListener("click", getStudentData);
  btnAverageScore.addEventListener("click", calcScore);
  btnHighScore.addEventListener("click", displayHighScores);
}
function Student(name, lastName, index, score) {
  this.name = name;
  this.lastName = lastName;
  this.index = index;
  this.score = score;
}

function University(name, city) {
  this.name = name;
  this.city = city;
  this.students = [];
  this.addStudent = (student) => {
    this.students.push(student);
  };
  this.deleteStudent = (index) =>
    (this.students = this.students.filter(
      (student) => student["index"] !== index
    ));
}

function getStudentData() {
  const name = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const index = document.getElementById("index").value;
  const score = document.getElementById("score").value;
  const student = new Student(name, lastName, index, score);
  university.addStudent(student);
  tableId = "table1";
  drawTable(tableId, student);
}

const drawTable = (tableId, student) => {
  if (!table || tableId !== table.id) {
    table = document.createElement("table");
    const row = document.createElement("tr");

    //Headeri
    if (tableId == "table1" && table1 == null) {
      createTableEl(row, "th", "Name");
      createTableEl(row, "th", "Last name");
      createTableEl(row, "th", "Index");
      createTableEl(row, "th", "Score");
      table.appendChild(row);
      tables.appendChild(table);
    }
    if (tableId == "table2" && table2 == null) {
      createTableEl(row, "th", "Odlicni studenti");
      table.appendChild(row);
      tables.appendChild(table);
    }
  }

  table.id = tableId;

  table1 = document.querySelector("#table1");
  table2 = document.querySelector("#table2");

  const row = document.createElement("tr");
  createTableEl(row, "td", student.name);
  createTableEl(row, "td", student.lastName);
  createTableEl(row, "td", student.index);
  createTableEl(row, "td", `${student.score}%`);

  //Append the row to the correct table
  if (tableId == table1.id) {
    table1.appendChild(row);
  } else {
    table2.appendChild(row);
  }

  //Delete row
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  row.appendChild(btnDelete);

  btnDelete.addEventListener("click", (event) => {
    const current = event.target.parentNode;
    current.remove();

    const index = event.target.parentNode.childNodes[2].innerHTML;
    university.deleteStudent(index);
  });
};

const createTableEl = (row, el, data) => {
  el = document.createElement(el);
  el.textContent = data;
  row.appendChild(el);
};

function calcScore() {
  let sum = 0;
  for (let i = 0; i < university.students.length; i++) {
    sum += Number(university.students[i].score);
  }
  sum = sum / university.students.length;
  displayScore(sum);
}

const displayScore = (sum) => {
  if (!div) {
    div = document.createElement("div");
    tables.after(div);
  }
  div.innerHTML = `Average score is ${sum}.%`;
};

const highScoresArr = () => {
  const students = [];
  university.students.forEach((student) => {
    if (Number(student.score) >= 70) {
      students.push(student);
    }
  });
  return students;
};

function displayHighScores() {
  const students = highScoresArr();
  const tableId = "table2";

  if (!table2) {
    students.forEach((student) => {
      drawTable(tableId, student);
    });
  } else if (table2.childNodes.length == students.length) {
    drawTable(tableId, students[students.length - 1]);
  }
}

function init() {
  cacheDOM();
  bindEvents();
}

init();
