function ho(ho) {
  return ho ? "Ho " + ho : "Ho!";
}

console.log(ho());
console.log(ho(ho()));
console.log(ho(ho(ho())));
