
function encrypting(){
    let text = document.getElementById("user-text").value;
    
    console.log(text.value);    
    var encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    
    let result = document.getElementById("resultText");
    result.textContent = encryptedText;

    let div1 = document.getElementById("nr");
    let div2 = document.getElementById("r");

    div1.style.visibility =  "hidden";
    div1.style.height =  "20%";
    div2.style.visibility =  "visible";
    div2.style.height =  "80%";


    return encryptedText;
}

function decrypting(){
    let text = document.getElementById("user-text").value;
    
    var encryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    
     let result = document.getElementById("resultText");
    result.textContent = encryptedText;

    let div1 = document.getElementById("nr");
    let div2 = document.getElementById("r");

    div1.style.visibility =  "hidden";
    div1.style.height =  "20%";
    div2.style.visibility =  "visible";
    div2.style.height =  "80%";

    return encryptedText;

}

function copying() {
    let text = document.getElementById("resultText").textContent;
  
    navigator.clipboard.writeText(text)
      .then(() => {
        // Cambiar el color de la sombra de "ra" durante un segundo
        document.getElementById("ra").style.boxShadow = "0 0 10px 10px rgba(118, 222, 155, 0.5)";
  
        // Restablecer el color de la sombra de "ra" después de un segundo
        setTimeout(() => {
          document.getElementById("ra").style.boxShadow = "";
        }, 1000);
      })
      .catch(err => alert("Error al copiar el texto: ", err));
  }
  
  

var fileInput = document.getElementById("txt-file");


fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {

        var reader = new FileReader();
        reader.addEventListener("load", (event) => {
            console.log(reader.result);
            console.log("reader");
            document.getElementById("user-text").value = reader.result;
        });
        reader.readAsText(fileInput.files[0]);
    }
});

/* function reading(reader,texto){
    console.log("caca")
    reader.addEventListener("load", (event) => {
        const areaText = event.target.result;
        texto.textContent = areaText;
        
      });
      reader.readAsText(fileInput.files[0]);
      
} */