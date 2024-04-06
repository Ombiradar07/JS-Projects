let calculate =document.querySelector(".btn");

calculate.addEventListener("click", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height ==="" || height < 0 ||isNaN(height)){
        result.innerHTML =`Plese enter a valid height ${height}`;
    }
    else if(weight ==="" || weight <0 ||isNaN(weight)){
        result.innerHTML =`Plese enter a valid height ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category;
        if(bmi<18.6)
        {
            category ="Under Weight";
        }
        else if(bmi>18.6 && bmi<24.9)
        {
            category =" in Normal Range";
        }
        else{
            category ="Over Weight";
        }
        result.innerHTML = `<span>Your BMI is : ${bmi} and its  ${category}
        </span>`;
    }

})
