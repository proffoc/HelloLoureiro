let nomeUsuário = prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}


if(nomeUsuário == null){
    elemento.textContent = "discente.";
}else{
    elemento.textContent = nomeUsuário;
}