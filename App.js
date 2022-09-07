const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById("btn");
const btnAut = document.getElementById("btn-aut");
const btnPar = document.getElementById("btn-par");
const color = document.querySelector(".color");

var inter = null;

function getRandomNumber() 
{
    return Math.floor(Math.random() * colors.length);
};

function trocarCor() 
{
    // obtendo um número aleatório entre 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
};

function intervalo(flag, func, time) 
{
    if(flag)
    {
        inter = setInterval(func, time);
    }
    else
    {
        clearInterval(inter);
    }
};

function autoTroca()
{
    btnAut.disabled = true;
    intervalo(true, trocarCor, 500);
};

function parar() 
{
    btnAut.disabled = false;
    intervalo(false);
};

// Escutador do botão Trocar
btn.addEventListener('click', trocarCor);

// Escutador do botão Auto
btnAut.addEventListener('click', autoTroca);

// Escutador do botão parar
btnPar.addEventListener('click', parar);



