//filter method
const results = [28, 50, 150, 200, 30, 0, 28];

const getresults = results.filter(result =>{
    return result < 50;
});
console.log(getresults);


//map method
const names = ["ramadan", "ngozi", "felicia", "deola", "hauwa"]

const mainNames = names.map((name) =>{
    return name[3];

})
console.log(mainNames)

const numbers = [35, 46, 34, 22]
const numbers2 = new Array(22, 45, 0, 10)
const fruit = ['apple', 'gauva', 'mango']
const mixedValues = [45, 'hello', false, undefined, new Date(), null]
let value 
value = numbers.length
value = Array.isArray(numbers)

value = numbers[0]

numbers[2] = 100

value = numbers.indexOf(46)

numbers.push(39)
numbers.unshift(120)
numbers.reverse()
value = numbers.concat(numbers2)
value = fruit.sort()
console.log(numbers)
console.log(value) 
