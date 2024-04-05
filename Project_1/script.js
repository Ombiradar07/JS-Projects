
        let bgColor = document.querySelectorAll(".buttons")

        bgColor.forEach(function (color) {
            color.addEventListener("click", function (e) {
                if(e.target.id){
                    document.body.style.backgroundColor = e.target.id;
                }
            });
        });
