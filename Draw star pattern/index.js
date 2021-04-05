//*
//**
//***
//****
//*****

//1.
for (let i = 0; i < 1; i++) {
  let astr = "";
  for (let j = 0; j < 5; j++) {
    console.log((astr += "*"));
  }
}

//2.
let ast = "*";
for (let j = 1; j <= 5; j++) {
  console.log(ast.repeat(j));
}
