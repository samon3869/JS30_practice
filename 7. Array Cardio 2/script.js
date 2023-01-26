// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isOlderThan19 = element => (new Date().getFullYear() - element.year >= 19);
const someIsOlderThan19 = people.some(isOlderThan19);
console.log({someIsOlderThan19});

// Array.prototype.every() // is everyone 19 or older?
const everyIsOlderThan19 = people.every(isOlderThan19);
console.log({everyIsOlderThan19});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
function findCommentByID(array, ID) {
    return array.find(element => element.id === ID);
}
console.log(findCommentByID(comments, 823423));

// Array.prototype.findIndex()
function findIndexByID(array, ID) {
    return array.findIndex(element => element.id === ID);
}
console.log(findIndexByID(comments, 823423));

// Find the comment with this ID
console.log(findCommentByID(comments, 823423).text);

// delete the comment with the ID of 823423
function deleteElementByID(array, ID) {
    const index = findIndexByID(array, ID);
    const newArray = [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
    return newArray;
}
console.table(deleteElementByID(comments, 823423));
  