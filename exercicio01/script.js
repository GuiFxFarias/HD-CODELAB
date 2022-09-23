let botao = document.getElementById('trocaCor');
let tagh2 = document.querySelector('h2')



let funcao = function clicar(){
    tagh2.style.color = 'red'
}

botao.addEventListener('click', funcao)