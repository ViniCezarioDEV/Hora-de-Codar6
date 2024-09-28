function inicio(){
    let choice = parseInt(prompt(`Selecione uma opção
    1. Cadastro de registro
    2. Registro < 1.5m
    3. Registro > 1.5m
    4. Registro > 1.5m < 2.0m
    5. Media das alturas
    6. Sair`));

    if (choice === 1){
        cadastro();
    } else if (choice === 2){
        registroDeAnao();
    } else if(choice === 3){
        registroDeNormal();
    } else if(choice === 4){
        registroDeGigante();
    } else if(choice === 5){
        mediaDasAlturas();
    } else if (choice === 6){
        ; //para sair
    } else {
        alert('Opção invalida');
        inicio();
    }
}

var registro_de_anao = [
    //{'nome':name, 'altura':altura}
];
var registro_normal = [];
var registro_de_gigante = [];

//cadastro (15 max)
function cadastro(){
    let nome = prompt('Insira seu nome');
    while(true){
        var altura = parseFloat(prompt('Insira sua altura'));
        if (isNaN(altura) || altura < 0){
            alert('Valor inválido'); //voltar pro while
        } else {
            break; //sair do while
        }
    }
    if (altura > 1.5 && altura < 2.0){
        registro_de_gigante.push({'nome':nome, 'altura':altura})
    } else if (altura > 1.5){
        registro_normal.push({'nome':name, 'altura':altura});
    } else if(altura < 1.5){
        registro_de_anao.push({'nome':name, 'altura':altura});
    }
}
//Registro <= 1.5m
function registroDeAnao(){
    alert(registro_de_anao);
}
//Registro > 1.5m
function registroDeNormal(){
    alert(registro_normal);
}
//Registro > 1.5m < 2.0m
function registroDeGigante(){
    alert(registro_de_gigante);
}
//Media das alturas
function mediaDasAlturas(){
    let listaAltura = [];
    let media = 0;
    for (i of registro_de_anao){
        listaAltura.push(i.altura);
    }
    for (i of registro_normal){
        listaAltura.push(i.altura);
    }
    for (i of registro_de_gigante){
        listaAltura.push(i.altura);
    }
    for (i of listaAltura){
        media += i;
    }
    alert(`A média de altura é: ${(media / listaAltura.length)}`);
}

inicio();