module.exports = function countCats(arr) {
  let x = 0
  arr = arr.flat()
  for (i = 0; i < arr.length; i++){
      if (arr[i] == "^^") {x++}
  }
  return x
};
