function hideCover(){
    
    var div = document.getElementById("cover");
    div.classList.add("oculto");
    
    var div2 = document.getElementById("container");
    div2.classList.remove("blur");
    div2.classList.add("unblur");
  setTimeout(function() {
    div2.classList.remove("unblur");
  }, 300);

    div.addEventListener('animationend', () => {
        div.style.visibility = 'hidden';
    })
}

const result = document.getElementById("result");
const calculation = document.getElementById("user");

function calculate(num){
    calculation.textContent += num;
    console.log(num);
    if(calculation.textContent==21091999){
        alert("FELICIDADES, ENCONTRASTE UN EASTER EGG");
    }
}

function erase(){
    let newString = calculation.textContent;
    calculation.textContent =  newString.slice(0,-1);
}

function negative(){
    let value = calculation.textContent;
    calculation.textContent = value*-1;
}

document.getElementById("clear").addEventListener("click", function(){
    calculation.textContent = "";
    result.textContent = 0;
});

document.getElementById("showResult").addEventListener("click", function () {
    var exp = calculation.textContent;
    result.textContent = eval(exp);
    calculation.textContent = "";
    if(result.textContent == NaN || result.textContent == Infinity){
        result.textContent = "Operación no válida"
        calculation.textContent = "Operación no válida"
    }
  });