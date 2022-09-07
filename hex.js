const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btnAut = document.getElementById("btn-aut");
const btnPar = document.getElementById("btn-par");
const color = document.querySelector(".color");

var inter = null;

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

function intervalo(bool, func) 
{
    if(bool)
    {
        inter = setInterval(func, 200);
    }
    else
    {
        clearInterval(inter);
    }
};

function trocarCor() 
{
    // obtendo números hexadecimais aleatorios
    let hexColor = '#';
    for(let i = 0; i < 6; i++) 
    {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
};

function autoTroca()
{
    btnAut.disabled = true;
    intervalo(true, trocarCor);
    console.log("autoTroca")
};

function parar() 
{
    btnAut.disabled = false;
    intervalo(false);
    console.log("Parar")
};

btn.addEventListener('click', trocarCor);
btnAut.addEventListener('click', autoTroca);
btnPar.addEventListener('click', parar);