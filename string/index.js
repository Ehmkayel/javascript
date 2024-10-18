// strings can be created in three ways
// - single quote ('')
// - double quote ("")
// - template strings (``)

let profileName = 'Ramadan' //single quote
profileName = "Risqoh" //double quote
profileName = `Khayr` //template strings

//we have different string methods
let ramadan = "profile name"
console.log(ramadan.toUpperCase())
console.log(ramadan.length)
console.log(ramadan.slice(3, 7))
console.log(profileName.toLowerCase())

const firstName = 'Ramadan'
const lastName = 'Lamidi'
let value = firstName + lastName
value = firstName + ' ' + lastName

// Escaping
value = 'I can\'t Wait'

// Concat
value = firstName.concat(' ', lastName)

// Change casing
value = firstName.toLowerCase()
value = firstName.toUpperCase()

value = firstName.indexOf('d') 
value = firstName.lastIndexOf('m')

value = firstName.substring(0, 4)
value = firstName.slice(0, 4)

console.log(value)

// Template Literals
const name = 'Ramadan'
const age = 30
const job = 'Frontend Developer'
const location = 'Kaduna'
let html

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li> '+ job + '</li><li>City: '+ location + '</li></ul>'
// document.body.innerHTML = html 

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>Location: ${location}</li>
    
  </ul>
`
document.body.innerHTML = html 