let txt = document.querySelector("#txt");
let result = document.querySelector(".result");

txt.addEventListener("input", function(){

    let character = txt.value.length;
    if(character > 10){
     
        txt.style.color = "red";

    }
    result.innerText = character;
})


