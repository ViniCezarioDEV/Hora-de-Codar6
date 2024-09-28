var agenda = [
    //{'Nome':name, 'Endereco':address, 'Telefone':number}
];

function inicio(){
    let choice = parseInt(prompt(`Selecione uma opção
    1. Cadastro de registro
    2. Pesquisa de registro
    3. Classificar por ordem alfabetica
    4. Mostrar todos os registros
    5. Sair`));

    if (choice === 1){
        cadastro();
    } else if (choice === 2){
        pesquisa();
    } else if(choice === 3){
        organizar();
    } else if(choice === 4){
        mostrar_registros();
    } else if(choice === 5){
        ;
    } else {
        alert('Opção invalida');
        inicio();
    }
}

// cadastro
function cadastro(){

    if (agenda.length > 10){
        alert('Quantidade de registros no máximo');
        inicio();
    } else {
        while(true){
            var name = prompt('Insira o nome');
            var address = prompt('Insira o endereço');
            var number = parseInt(prompt('Insira o número de telefone (APENAS NÚMEROS)'));
            while(true){
                if (isNaN(number)){
                    ; //volta pro while
                } else{
                    break;
                }
            }
            agenda.push({'Nome':name, 'Endereco':address, 'Telefone':number});
            alert('SUCESSO');
            break;
        }
    }
    inicio();
}

// pesquisa de cadastro por nome
function pesquisa(){
    if (agenda.length > 0){
        let choice = prompt('Insira o nome a ser pesquisado');
        let namesList = [];
        for (let people of agenda){
            namesList.push(people.Nome);
        }
        if (namesList.includes(choice)){
            alert('Pessoa encontrada');
        } else {
            alert(`Nome: ${choice}. Não encontrado`);
        }
        
    } else {
        alert('Lista de registro vazia');
        inicio();
    }
    inicio();
}
// classificar nomes de A a Z
function organizar(){
    if (agenda.length > 0){
        agenda.sort(function(a, b) {
            // Compara o nome de duas pessoas para decidir quem vem primeiro
            return a.Nome.localeCompare(b.Nome);
        });
        alert('Lista de registro atualizada');
    } else {
        alert('Lista de registro vazia');
    }
    inicio();
}
// mostrar cadastros
function mostrar_registros(){
    for (let people of agenda){
        alert(people);
        
    }
    inicio();
}

inicio();