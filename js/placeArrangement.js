let student = [];
let number = [];
let specialDesk = [4,6,7,8,10]
const btnEl = document.querySelector("#btn-el")

// create a student desk array
for (let i=1; i<=12; i++) {
    student.push(document.querySelector("#seat-"+ i +""))
    console.log(i)
    console.log(student)
}

/* student.push(document.querySelector("#seat-1"))
student.push(document.querySelector("#seat-2"))
student.push(document.querySelector("#seat-3"))
student.push(document.querySelector("#seat-4"))
student.push(document.querySelector("#seat-5"))
student.push(document.querySelector("#seat-6"))
student.push(document.querySelector("#seat-7"))
student.push(document.querySelector("#seat-8"))
student.push(document.querySelector("#seat-9"))
student.push(document.querySelector("#seat-10"))
student.push(document.querySelector("#seat-11"))
student.push(document.querySelector("#seat-12")) */

// button click event
btnEl.addEventListener("click", generate)

// generate students array
function generate() {
    clear()
    for(let i=1; i<=29; i++) {
        number.push(i)
    }
    console.log(number)

    // pick a random number that wont repeat and pick students
    student.forEach(element => {
            for (let i=1; i<=2; i++) {
                let r = Math.floor(Math.random() * number.length) //random
                element.textContent += number[r] + "        "
                const removed = number.splice(r, 1) // remove specific index in the array
                console.log(number)
            }
    });

    // pick the remain student to the special desks that contain 3 student
    for (let i=0; i<=4; i++) {
        let r = Math.floor(Math.random() * number.length) //random
                student[specialDesk[i]].textContent += number[r]
                const removed = number.splice(r, 1) // remove specific index in the array
    } 
}

// clear and reset the desk before generate students
function clear () {
    student.forEach(element => {
        element.textContent = " "
})}
