const emailInput = document.getElementById('email-input');
const error = document.getElementById('error');
console.log(error);
const submitBtn = document.getElementById('btn');
console.log(submitBtn);


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(input){
    if(emailRegex.test(input.value)){
        console.log('this is true');
        error.style.display = "none";
    }else{
        console.log('this is false');
        error.style.display = "block";
    }
        
}
submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    validateEmail(emailInput);
    console.log('clicked');
})
