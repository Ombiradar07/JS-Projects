document.addEventListener('DOMContentLoaded', () => {
    const pass = document.getElementById('password');
    const cnfPass = document.getElementById('confirm');
    const check = document.getElementById('btn');
    const massage = document.getElementById('message');
    

    check.addEventListener('click', () => {
        const password = pass.value;
        const specialChars = '!@#$%^&*()';

        if(password.length < 8) {
            massage.innerText = `Password must be at least 8 characters`;
            massage.style.color = 'red';
        } else if (!(/[A-Z]/.test(password))) {
            massage.innerText = `Password must contain at least one uppercase letter`;
            massage.style.color = 'red';
        } else if (!(/[0-9]/.test(password))) {
            massage.innerText = `Password must contain at least one number`;
            massage.style.color = 'red';
        } else if (!(/[a-z]/.test(password))) {
            massage.innerText = `Password must contain at least one lowercase letter`;
            massage.style.color = 'red';
        } else if (!(/[!@#$%^&*()]/.test(password))) {
            massage.innerText = `Password must contain at least one special character`;
            massage.style.color = 'red';
        } else if (!(password === cnfPass.value)) {
            massage.innerText = `Passwords do not match`;
            massage.style.color = 'red';
        } else {
            massage.innerText = `Strong password`;
            massage.style.color = 'green';

            pass.value = '';
            cnfPass.value = '';
        }
    });
});
