function inicio(){
    let choice = parseInt(prompt(`Selecione uma opção
        1. Cadastrar registros
        2. Pesquisar registros
        3. Mostrar registros
        4. Sair`));

    if (choice === 1){
        cadastro();
    } else if (choice === 2){
        pesquisa();
    } else if(choice === 3){
        mostrar_registros();
    } else if(choice === 4){
        ;
    } else {
        alert('Opção invalida');
        inicio();
    }
}

//cadastro
function cadastro(){
    var registros = [
        //{'nome_do_aluno':nomeAluno, 'nota':media, 'situacao':'aprovado'}
    ];
    if (registros.length > 20){
        alert('Número máximo de registros atingidos');
        inicio();
    } else {
        let nomeAluno = prompt('Insira o nome do aluno');
        while(true){
            let nota1 = parseInt(prompt('Insira a primeira nota'));
            let nota2 = parseInt(prompt('Insira a segunda nota'));

            if (isNaN(nota1) || isNaN(nota2) ){
                alert('Letras não são permitidas, apenas números');
            } else if (nota1 > 10 || nota2 > 10){
                alert('Notas acima de 10 não são permitidas');
            } else {
                break; //sai do while
            }
        }

        let media = (nota1 + nota2) / 2;
        if (media < 5){
            registros.push({'nome_do_aluno':nomeAluno, 'nota':media, 'situacao':'reprovado'});
        } else {
            registros.push({'nome_do_aluno':nomeAluno, 'nota':media, 'situacao':'aprovado'});
        }
    }
    classPorNome(); //para organizar os registros alfabeticamente
}

//pesquisa
function pesquisa(){
    if (registros.length > 0){
        let choice = prompt('Insira o nome a ser pesquisado');
        for (let people of registros){
            if (choice === people.nome_do_aluno){
                alert(`${people.nome_do_aluno}
                    ${people.nota}
                    ${people.situacao}`);
            }
        }
    } else {
        alert('Lista de registro vazia');
        inicio();
    }
    inicio();
}

//mostrar registros
function mostrar_registros(){
    alert(registros);
}

//organizar em ordem alfabetica
function classPorNome(){
    if (registros.length > 0){
        registros.sort(function(a, b) {
            // Compara o nome de duas pessoas para decidir quem vem primeiro
            return a.nomeAluno.localeCompare(b.nomeAluno);
        });
        alert('Lista de registro atualizada');
    } else {
        alert('Lista de registro vazia');
    }
    inicio();
}

inicio();