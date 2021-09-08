const identity = function (value) {
  return value;
};
/////////////////////////////////////////////////////
const first = function (array, n) {
  let n = [];
  if (array[1]) {
    return array[0]
  } else if (array && n) {
    array.push(n);
  }
  else if (n == 0) {
    return [];
  }else if (array.length < n);
  return array;
}
/////////////////////////////////////////////////////

const last = function (array, n) { 
  let n = []
  array.pop(n)
  if(n == 0){
    return [];
  }else if (array.length < n);
  return array;

};
//////////////////////////////////////////////////
const each = function (collection, callback) { 

};
const indexOf = function (array, target) { };
const map = function (collection, iterator) { };

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
