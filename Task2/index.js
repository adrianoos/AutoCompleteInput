// 1. Please write a function that reverses a string
const sampleString = "Adrian"
const reversed = sampleString.split('').reverse().join('')
console.log(reversed)

// 2. Please write a function that filters out numbers from a list

const array = ['a', 3, 'b', 232, 'Mark', 11]
const numbersArr = array.filter(item => !isNaN(item))
console.log(numbersArr)

// 3. Please write a function that shows the usage of closures

const sampleFunc = () => {
    const array = [];
    const anotherFunc = () => {
      array.push("SampleText");
    };
    anotherFunc()
    return array
  };

  console.log(sampleFunc())

// 4. Please write a recursive function that flattens an list of items
const input = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];
const flattened = input.flat(Infinity);

console.log(flattened);


// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
const input1 = ['b', 3, 4, 76, 'c']
const input2 =  ['a', 'b', 4, 76, 21, 'e']

const findCommonElems = (array1, array2) => {
  const commonArray = []
  for (let item of array1) {
     for (let item1 of array2) {
        if (item === item1) {
          commonArray.push(item)
        }
    }
}
return commonArray;
}

console.log(findCommonElems(input1, input2))

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8];

let filtered1 = arr1.filter((item) => arr2.indexOf(item) === -1);
let filtered2 = arr2.filter((item) => arr1.indexOf(item) === -1);

const different = filtered1.concat(filtered2);

console.log(different);

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
const  input =  { color: 'Blue', id: '22', size: 'xl' }
const modified = Object.entries(input)

console.log(modified)

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
const input = [['color', 'blue'], ['id', '22'], ['size', 'xl']]
const modified = Object.fromEntries(input)
console.log(modified)

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
const input1 = [1, 2, 3];
const input2 = [4, 5, 6, 7];


const makeTuples = (array1, array2) => {
  let pairArr = []
  const tupleArr = []
  let index = 0
  let iterrationNum = ''
  if (array1.length > array2.length) {
    iterrationNum = array2.length
  } else { iterrationNum = array1.length}

for (let i=0 ; i < iterrationNum; i++) {
  pairArr.push(array1[index],array2[index])
  tupleArr.push(pairArr)
  pairArr = []
  index = index + 1
}
return tupleArr
};

console.log(makeTuples(input1, input2))

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
// To complicated :/

// 11. Please write compare function which compares 2 objects for equality.
const input1 = { a: "b", c: "d" };
const input2 = { c: "d", a: "b" };

const compare = (obj1, obj2) => {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};

console.log(compare(input1, input2));

// input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  //
// Above works also for that example

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
const input1 = ['color', 'size']
const input2 = { color: 'Blue', id: '22', size: 'xl' }


const removeItems = (array1, obj) => {
  const mod = Object.entries(obj)
  return mod.filter(item => item[0] !== array1[0] && item[0] !== input1[1])
}

console.log(removeItems(input1,input2))

// :)
