

const length = document.getElementById('length');
const uppercase = document.getElementById('upcs');
const lowercase = document.getElementById('lwcs');
const number = document.getElementById('num');
const symbol = document.getElementById('symbol');
const input = document.getElementById('input'); 
const copy = document.getElementById('btn');
const generate = document.getElementById('sbt');


generate.addEventListener('click',() =>{
    if(length.value==0)
    {
        alert('Please enter a valid length');
    }

    let password = generatePassword(length,uppercase,lowercase,number,symbol);

    input.value = password;

    copy.addEventListener('click',() => {
        navigator.clipboard.writeText(input.value);
        copy.textContent = '👍';

        setTimeout(() => {
            copy.textContent = 'Copy';
        }, 2000);
        
    });

    
});


function generatePassword(length,uppercase,lowercase,number,symbol) {

    let password = "";
    const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercasestr = "abcdefghijklmnopqrstuvwxyz";
    const numberstr = "0123456789";
    const symbolstr = "!@#$%^&*";

    if(uppercase.checked)
    {
        password += uppercasestr;
    }
    if(lowercase.checked)
    {
        password += lowercasestr;
    }
    if(number.checked)
    {
        password += numberstr;
    }
    if(symbol.checked)
    {
        password += symbolstr;
    }

    let newPassword='';
    for (let i=0; i<length.value; i++)
    {
        
       newPassword += password.charAt(Math.floor(Math.random() * password.length));

    }
    return newPassword;
}


