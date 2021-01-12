class Store {
  constructor(name) {
    this.name = name;
    this.itemsList = [];
  }

  addItem(item) {
    this.itemsList.push(item);
  }
}

class Item {
  constructor(ref, name, price, amount) {
    this.ref = ref;
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.total = `$${this.price * this.amount}`;
  }
}

const store = new Store("Maxi");
const item1 = new Item(345142, "Milk", 0.9, 1);
const item2 = new Item(435423, "Chocolate", 1.3, 2);
const item3 = new Item(645645, "Eggs", 1.7, 3);

store.addItem(item1);
store.addItem(item2);
store.addItem(item3);

function createTable() {
  let container = document.querySelector(".container");
  let table = document.createElement("table");
  let tr = document.createElement("tr");

  createHeader(table, tr);
  createRows(table);
  container.appendChild(table);
}

function createHeader(table, tr) {
  let th;
  let item = new Item();

  Object.keys(item).forEach((i) => {
    th = document.createElement("th");
    th.innerHTML = `${i[0].toUpperCase() + i.slice(1)}`;
    tr.appendChild(th);

    //append an operator td as the last td of the row
    if (Object.keys(item).indexOf(i) + 1 == Object.keys(item).length) {
      th = document.createElement("th");
      th.innerHTML = "+/-";
      tr.appendChild(th);
    }

    table.appendChild(tr);
  });
}

function createRows(table) {
  let td;
  let tr;
  let btnAdd;
  let btnDelete;

  store.itemsList.forEach((listItem) => {
    tr = document.createElement("tr");

    const headers = [...Object.values(listItem), "changeAmount"];
    headers.forEach((i) => {
      //skip adding a btn to dable cells that are not 'changeAmount'
      if (i !== "changeAmount") {
        console.log(i);
        td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
      } else {
        btnAdd = document.createElement("button");
        btnAdd.classList.add("btn-add");
        btnDelete = document.createElement("button");
        btnDelete.classList.add("btn-delete");
        btnAdd.addEventListener("click", (e) => changeAmount(e, "+"));
        btnDelete.addEventListener("click", (e) => changeAmount(e, "-"));
        btnAdd.innerHTML = "+";
        btnDelete.innerHTML = "-";
        tr.appendChild(btnAdd);
        tr.appendChild(btnDelete);
      }

      table.appendChild(tr);
    });
  });
}

function changeAmount(e, op) {
  let ref = e.target.parentElement.children[0].innerHTML;

  store.itemsList.filter((item) => {
    if (item.ref == ref) {
      item.amount += op == "+" ? 1 : -1;
      e.target.parentElement.children[3].innerHTML = item.amount;
      //update and format the total price
      e.target.parentElement.children[4].innerHTML = `$${
        Number(item.total.slice(1)) * item.amount
      }`;
    }
  });
}

createTable();
