module.exports = function createDreamTeam(arr) {
  if (arr == [] || typeof(arr) !== 'object' || arr == null){return false}
  let x, y = [], z = []
  for (i=0;i<arr.length;i++){
    if (typeof (arr[i]) !== 'string'){continue}
      x = arr[i].toUpperCase()
      x = x.split('')
      y = []
      for(j=0;j<x.length;j++){
          if (y.length == 0){
              if (x[j].match(/[A-Z]/i)){y.push(x[j])}
      }
      }
      z.push(y[0])
  }
  z = z.sort().join('')
  return z
};
