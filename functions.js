const identity = function (value) {
  return value;
};
/////////////////////////////////////////////////////
// const first = function (array, n) {
//   let x = array.length;
//   if (array[1]) {
//     return array[0]
//   } if (array && n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//       array.pop(result)
//     }; return result;
//   }
//   if (n == 0) {
//     return [];

//   } if (n > x);
//   return array;
// }
const first = function (array, n) {
  //answers first question
  if (n == undefined) {
    return array[0];
  }
  //ansewrs third question
  if (n == 0) {
    return [];
  }
  //answers 2nd and 4th questions
  if (n) {
    console.log(array.slice())
    return array.slice(0, n);

  }

}
/////////////////////////////////////////////////////

// const last = function (array, n) {
//   let x = array.length;
//   array.pop();
//   if (array && n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//       array.pop(result)
//     }; return result;
//   }
//   if (n == 0) {
//     return [];
//   } if (n > x);
//   return array;

// };

const last = function (array, n) {
  //answers first question
  if (n === undefined) {
    return array[array.length - 1];
  }
  // if(n){
  //   return array.splice(-1, n);
  // }

  //answers 3question
  if (n == 0) {
    return [];
  }
  //answers 4th question
  if (n) {
    return array.slice(math.max(0, array.length - n))

  }
};
//////////////////////////////////////////////////
const each = function (collection, altrefFunction) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection; i++) {
      altrefFunction(collection[i], i, collection);
    }
  } else {
    for (let prop in collection) {
      altrefFunction(collection[prop], prop, collection);
    }
  }
};
const indexOf = function (array, target) {
let result = 0;
for(let i = 0; i < array.length; i++){
  if(array[i]==40){
    array.push(result);
  }
}return result;


 };
const map = function (collection, iterator) { };

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
