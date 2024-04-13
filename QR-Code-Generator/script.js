const input =document.getElementById('input');
const btn =  document.getElementById('btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    const value = input.value;
    if(!value){
        alert(`Plese enter a valid URL`);
    }
    else{
        img.innerHTML=img.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}"
        alt="" style="display:block; width: 50%; margin: 0 auto;">`;
       
    } 
    input.value = '';
});