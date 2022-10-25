const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login');


loginBtn.addEventListener('click', (e)=> {
    if (password.value !== '' && password.value.length < 8) {
        alert('password must not be less than 8');
    }
    if (password.value !== '' && password.value.length > 20) {
        alert('password cannot be greater than 20');
    }

    e.preventDefault();
})

