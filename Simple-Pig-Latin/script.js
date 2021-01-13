function pigIt(str) {
  let strArr = Array.from(str.split(" "));
  let newStr = "";
  strArr.forEach((str) => {
    newStr +=
      str[0] == "!" || str[0] == "?"
        ? Array.from(str).splice(1).join("") + str[0] + " "
        : Array.from(str).splice(1).join("") + str[0] + "ay" + " ";
  });
  return newStr.trim();
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
console.log(pigIt("What would a pig say ?"));
