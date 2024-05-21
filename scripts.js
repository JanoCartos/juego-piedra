
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");


function getComputerChoice(){
    let min = 0;
    let max = 2;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let valor;
    valor = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    let computerChoice;
    switch(valor){
        case 0: 
        computerChoice = "Piedra";
        break;

        case 1:
        computerChoice = "Papel";
        break;

        case 2: 
        computerChoice = "Tijeras";
        break;
    }

    return computerChoice;
}



function getHumanChoice(playerSelection){

    let humanChoice;

    switch(playerSelection){
        case 0: 
        humanChoice = "Piedra";
        break;

        case 1:
        humanChoice = "Papel";
        break;

        case 2: 
        humanChoice = "Tijeras";
        break;

    }

    return humanChoice;

}

function playRound(seleccionHumano, seleccionOrdenador){
    let resultado;

    const gameRules = {
    'Piedra': {'Tijeras': 'win', 'Papel': 'lose', 'Piedra': 'draw'},
    'Papel': {'Piedra': 'win', 'Tijeras': 'lose', 'Papel': 'draw'},
    'Tijeras': {'Papel': 'win', 'Piedra': 'lose', 'Tijeras': 'draw'}
    }

    const result = gameRules[seleccionHumano][seleccionOrdenador];

    if(result == 'win'){
        humanScore = humanScore + 1;
        resultado = `You win! ${seleccionHumano} beats ${seleccionOrdenador}`;
    }
    if(result == 'lose'){
        computerScore = computerScore + 1;
        resultado = `You lose! ${seleccionOrdenador} beats ${seleccionHumano}`;
    }
    if(result == 'draw'){
        resultado = `It's a draw`;
    }

    return resultado;

}

let puntuacion = document.createElement("div");
puntuacion.textContent = "La clasificación por puntos va tal que así: Tu: " + humanScore + " ; Ordenador: " + computerScore ;
container.appendChild(puntuacion);

const ganado = document.createElement("div");
ganado.textContent = "HAS GANADO :)";
const perdido = document.createElement("div");
perdido.textContent = "HAS PERDIDO :(";

console.log(humanScore);
console.log(computerScore);

function jugar(playerSelection){

    if((humanScore == 5)){
        console.log("HAS GANADO :)!");
        container.appendChild(ganado);
    }else if((computerScore == 5)){
        console.log("HAS PERDIDO :(")
        container.appendChild(perdido);
    }
    else{

    getHumanChoice(playerSelection);
    getComputerChoice();
    let seleccionHumano = getHumanChoice(playerSelection);
    let seleccionOrdenador = getComputerChoice();
    console.log(playRound(seleccionHumano, seleccionOrdenador));
    puntuacion.textContent = "La clasificación por puntos va tal que así: Tu: " + humanScore + " ; Ordenador: " + computerScore ;
    }

    }

const botonPiedra = document.querySelector('#piedra');
const botonPapel = document.querySelector('#papel');
const botonTijeras = document.querySelector('#tijeras');

botonPiedra.addEventListener("click", function(){
   
    playerSelection = 0;
    console.log(jugar(playerSelection)); 
});

botonPapel.addEventListener("click",function(){
    
    playerSelection = 1;
    console.log(jugar(playerSelection));
});

botonTijeras.addEventListener("click", function(){

    playerSelection = 2;
    console.log(jugar(playerSelection));
});






