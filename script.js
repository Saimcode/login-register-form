const signinBtn = document.querySelector('.signinbtn');
const signupBtn = document.querySelector('.signupbtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');



signupBtn.onclick = function(){
    formBx.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick = function(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}