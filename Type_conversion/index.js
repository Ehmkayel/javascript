let value;

// converting number to string
value = String(6)

// converting boolean to a string
value = String(true)

// converting Date to String
value = String(new Date())

// converting Array to String
value = String([3, 6, 7])

// converting String to Number
value = Number('5')

// converting boolean to Number
value = Number(true)
value = Number(false)

// converting undefined to Number
value = Number(null)

value = parseInt('100')

console.log(value)
console.log(typeof value)
// console.log(value.length)
console.log(value.toFixed())


// Type Cohersion

const intialValue = String(5)
const laterValue = 10
const sum = intialValue + laterValue

console.log(sum)
console.log(typeof sum)

