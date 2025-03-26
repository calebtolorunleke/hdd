// let user = {
//     firstname: 'John',
//     secondName: 'Doe',
//     age: 25,
//     isemployed: true
// }

// console.log(user)

// user.job = 'software engineer'


// console.log(user)

// let userprofile = {
//     username: "emmanuel123",
//     email: "emmanuel@example.com",
//     bio: "front-end developer",

//     updateBio: function (newBio) {
//         this.bio = newBio;

//         document.getElementById("bio").innerText = newBio
//     }
// }

// setTimeout(() => {
//     userprofile.updateBio("Backend Developer");
// }, 10000)

// // let newBio = 'aaa'

// console.log(userprofile)

// let colors = ['red', 'green', 'blue']

// let fruits = ['orange', 'apple', 'banana']

// console.log(fruits)

// fruits.push("grape")

// console.log(fruits)

// fruits.unshift("kiwi")

// fruits.pop()

// console.log(fruits)

// let a = 5
// a++
// console.log(a)

// let b = 5
// b--
// console.log(b)

let preX = 5
let postY = 5
function preDecrement(){
    document.getElementById("pre-decrement").innerText= ++preX
}

function preIncrement(){
    document.getElementById("pre-decrement").innerText= postY++
}

//Pre-Decrement: Decreases the value before displaying it
function postIncrement(){
    document.getElementById("post-decrement").innerText= --preX
}

//Post-Decrement: Displays the old value, then decrements
function postDecrement(){
    let element = document.getElementById("post-decrement")
    element.innerText= postY++
}