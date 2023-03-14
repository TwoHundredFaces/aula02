let button = document.getElementById('botao');
let click = true;

button.addEventListener("click", function mudar_fundo() {
    if (click){
        document.body.style.background = '#35E6F3';
        click=false;
        button.style.backgroundColor = '#FFFFFF';
        button.style.color = '#35E6F3';
    
    }else{
    document.body.style.background = '#FFFFFF';
    click=true;
    button.style.backgroundColor = '#35E6F3';
    button.style.color = '#FFFFFF';

    }

});
