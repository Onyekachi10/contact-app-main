window.addEventListener("load", () => {
   
    "use strict"

    const firstName = document.querySelector("#fir")
    const LastName =document.querySelector("#last")
    const email = document.querySelector("#email")
    const message = document.querySelector("#comment")
    const check = document.querySelectorAll(".box")
    const submit = document.querySelector("#submit")

    submit.addEventListener("click", validate)

   function validate () {
      let reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;
      let reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;




 const nameError = document.querySelectorAll('.name-err')
 nameError.forEach(val => {
    val.innerHTML
 })
const emailError = document.querySelector('.email-err')
emailError.innerHTML="";
const messageError = document.querySelector('.comment-err')
messageError.innerHTML="";     
let counter = 0


if (!reName.test(firstName.value) & !reName.test(LastName.value) ) {
     nameError.forEach(val => {
        val.innerHTML = "This field is required"
     });
     counter ++
}

if (!reEmail.test(email.value) ) {
    emailError.innerHTML= "This field is required"
    counter++
}

if (message.value === "" ) {
    messageError.innerHTML="This field is required"
    counter++
}

const checkboxResponse = document.querySelector(".box2-err")
checkboxResponse.innerHTML = ""
  check.forEach( btn => {
    if (btn === false) {
        checkboxResponse.innerHTML = "Please select a query type"
        counter++ 
        console.log(btn)
    }
  })


if (counter > 0) {
    return false
}

else {
    alert(`Message Sent Thanks for completing the form. We'll be in touch soon!`)
    return true
}


    }
})