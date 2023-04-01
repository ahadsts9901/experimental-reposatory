let my = 'AHAD'

console.log(my.toLowerCase())

console.log(my.toUpperCase())

console.log(my.length)

console.log(my.slice(2,4))  //2 not included    4 included

console.log(my.slice(-3))  //last word

console.log(my.indexOf('H')) //index of H

console.log(my.charAt(0))// character at index 0

console.log(my.replace('A','F',))// replace first character by second character

console.log(my.replaceAll('A','B'))// replace all characters in first value with second value



let num = 156.7489

let x = 0

let y = 5

console.log(Number.isFinite(num/4)) //if infinite return false otherwise true

console.log(Number.isInteger(y/x))  //if variable value is infinite return false otherwise true

console.log(isNaN("string")) // if NaN condition will be true 

console.log(Number.isNaN("string")) //NaN false condition

console.log(Number.parseInt(num)) //parse value before point

console.log(num.toString() + 2) //parse number in string

console.log(num.toFixed(2)) //parse two numbers after point



console.log(Math.round(num))//round off number

console.log(Math.random()*100)// parse a random number between 0 and 1


//........................................................................................

//ternary operators

let isOpen = true

let isLocked = true

let result = ""

result = `gate is ${(isOpen)? 'Open' : 'Close'} and it is ${(isLocked)? 'Unlocked' : 'Locked'}`

console.log(result)


//...........................................................................................

//array.map

let arr = [1,2,3,4,5,6,7,8,9,10]

let value = 3

let newarr = arr.map((eachItem,i) => {

    console.log( eachItem * value )

})