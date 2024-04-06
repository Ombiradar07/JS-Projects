const dateTime = document.getElementById('td');
//const dateTime = document.querySelector('.td');


setInterval(function () {

    let date = new Date();
    dateTime.innerHTML = date.toLocaleTimeString();

    
  }, 1000);

  setInterval(function () {

    let date = new Date();
    dateTime.innerHTML = date.toLocaleDateString();

    
  }, 5000);