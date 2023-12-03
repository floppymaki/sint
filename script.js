const code = "AAAAAAAAAAAAAAAAAAA";

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

function checkCode(){
    var code_guess = "";
    const inputs = document.querySelectorAll('input');
    var div = document.getElementById("code-input");

    inputs.forEach(input => {
        code_guess += input.value.toUpperCase();
    });

    console.log(code_guess);

    h1 = document.createElement("h1");
    h1.id = "result";

    if(code_guess === code) {
        h1.innerHTML = "🎉 Je hebt de code gevonden 🎉";
    } else {    
        h1.innerHTML = "Probeer het nog eens...";
    }

    if(document.getElementById("result")){
        document.getElementById("result").remove();
    }
    
    div.appendChild(h1);
}