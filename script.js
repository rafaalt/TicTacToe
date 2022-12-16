const cells = document.querySelectorAll(".cell")
const vezAtual = document.getElementById("vezA")

var turnoP1 = true
var jogador1 = [];
var jogador2 = [];
var cellsPreenchidas;

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
for(let i = 0; i < cells.length; i++){
    cells[i].setAttribute("value", 0);
    cells[i].addEventListener('click', () => {
        jogar(i);
    })
}

function jogar(i){
    var value = cells[i].getAttribute("value");

    if(value == 0){
        if(turnoP1){//Vez do Jogador 1 (X)
            cells[i].setAttribute("value", 1);
            cells[i].innerHTML = "X";
            //alert(i);
            jogador1.push(i);
            cellsPreenchidas++;
            turnoP1 = false;
            vezAtual.innerText = "Vez do Jogador 2"
            verificaVencedor1();
        }
        else{//Vez do Jogador 2 (O)
            cells[i].setAttribute("value", 2);
            cells[i].innerHTML = "O";
            //alert(i);
            jogador2.push(i);
            cellsPreenchidas++;
            turnoP1 = true;
            vezAtual.innerText = "Vez do Jogador 1"
            verificaVencedor2();
        }
    }
}

function reiniciar(){
    turnoP1 = true;
    cellsPreenchidas = 0;
    jogador1 = [];
    jogador2 = [];
    vezAtual.innerText = "Vez do Jogador 1"
    for(let i = 0; i < cells.length; i++){
        cells[i].setAttribute("value", 0);
        cells[i].innerHTML = "";
    }
}

function verificaVencedor1(){
    var venceu = 0;
    for(let aux = 0;aux<combinacoes.length;aux++){
        venceu = 0;
        for(let aux2=0;aux2<3;aux2++){
            if(jogador1.includes(combinacoes[aux][aux2])){
                venceu++;
                //alert(`combinacoes[${aux}][${aux2}]${combinacoes[aux][aux2]}`)
            }
        }
        if(venceu == 3){
            alert("Jogador 1 Venceu!")
            reiniciar();
        } 
    }
    verificaVelha();
}

function verificaVencedor2(){
    var venceu2 = 0;
    for(let aux = 0;aux<combinacoes.length;aux++){
        venceu2 = 0;
        for(let aux2=0;aux2<3;aux2++){
            
            if(jogador2.includes(combinacoes[aux][aux2])){
                venceu2++;
                //alert(`combinacoes[${aux}][${aux2}]${combinacoes[aux][aux2]}`)
            }
        }
        if(venceu2 == 3){
            alert("Jogador 2 Venceu!")
            reiniciar();
        } 
    }
    verificaVelha();
}

function verificaVelha(){
    if(cellsPreenchidas == 9){
        alert("Deu velha.")
        reiniciar();
    }
}

