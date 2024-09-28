var empregados = [];

function inicio() {
    let choice = parseInt(prompt(`Selecione uma opção:
    1. Cadastrar os 20 empregados
    2. Pesquisar empregado por matrícula
    3. Apresentar empregados com salário acima de R$ 1.000,00
    4. Apresentar empregados com salário abaixo de R$ 1.000,00
    5. Apresentar empregados com salário igual a R$ 1.000,00
    6. Sair`));

    if (choice === 1) {
        cadastrarEmpregados();
    } else if (choice === 2) {
        pesquisarEmpregado();
    } else if (choice === 3) {
        mostrarEmpregadosSalarioMaiorQue1000();
    } else if (choice === 4) {
        mostrarEmpregadosSalarioMenorQue1000();
    } else if (choice === 5) {
        mostrarEmpregadosSalarioIgualA1000();
    } else if (choice === 6) {
        alert("Saindo do programa...");
    } else {
        alert("Opção inválida");
        inicio();
    }
}

// a) Cadastrar os 20 empregados e classificar os registros por número de matrícula.
function cadastrarEmpregados() {
    for (let i = 0; i < 20; i++) {
        let matricula = parseInt(prompt(`Insira a matrícula do empregado ${i + 1}`));
        let nome = prompt(`Insira o nome do empregado ${i + 1}`);
        let salario = parseFloat(prompt(`Insira o salário do empregado ${i + 1}`));

        empregados.push({ matricula: matricula, nome: nome, salario: salario });
    }

    // Classifica os empregados por matrícula (função de comparação tradicional)
    empregados.sort(function(a, b) {
        return a.matricula - b.matricula;
    });

    alert("Empregados cadastrados e ordenados por matrícula com sucesso!");
    inicio();
}

// b) Pesquisar um determinado empregado pelo número de matrícula.
function pesquisarEmpregado() {
    let matriculaPesquisa = parseInt(prompt("Insira a matrícula do empregado a ser pesquisado"));
    let empregadoEncontrado = false;

    // Loop para encontrar o empregado pela matrícula
    for (let i = 0; i < empregados.length; i++) {
        if (empregados[i].matricula === matriculaPesquisa) {
            alert(`Empregado encontrado:
            Matrícula: ${empregados[i].matricula}
            Nome: ${empregados[i].nome}
            Salário: R$ ${empregados[i].salario.toFixed(2)}`);
            empregadoEncontrado = true;
            break;
        }
    }

    if (!empregadoEncontrado) {
        alert(`Empregado com matrícula ${matriculaPesquisa} não encontrado.`);
    }

    inicio();
}

// c) Apresentar os empregados com salário acima de R$1.000,00.
function mostrarEmpregadosSalarioMaiorQue1000() {
    let encontrou = false;
    let mensagem = "Empregados com salário acima de R$1.000,00:\n\n";

    for (let i = 0; i < empregados.length; i++) {
        if (empregados[i].salario > 1000) {
            mensagem += `Matrícula: ${empregados[i].matricula} | Nome: ${empregados[i].nome} | Salário: R$ ${empregados[i].salario.toFixed(2)}\n`;
            encontrou = true;
        }
    }

    if (encontrou) {
        alert(mensagem);
    } else {
        alert("Nenhum empregado com salário acima de R$1.000,00.");
    }
    inicio();
}

// d) Apresentar os empregados com salário abaixo de R$1.000,00.
function mostrarEmpregadosSalarioMenorQue1000() {
    let encontrou = false;
    let mensagem = "Empregados com salário abaixo de R$1.000,00:\n\n";

    for (let i = 0; i < empregados.length; i++) {
        if (empregados[i].salario < 1000) {
            mensagem += `Matrícula: ${empregados[i].matricula} | Nome: ${empregados[i].nome} | Salário: R$ ${empregados[i].salario.toFixed(2)}\n`;
            encontrou = true;
        }
    }

    if (encontrou) {
        alert(mensagem);
    } else {
        alert("Nenhum empregado com salário abaixo de R$1.000,00.");
    }
    inicio();
}

// e) Apresentar os empregados com salário igual a R$1.000,00.
function mostrarEmpregadosSalarioIgualA1000() {
    let encontrou = false;
    let mensagem = "Empregados com salário igual a R$1.000,00:\n\n";

    for (let i = 0; i < empregados.length; i++) {
        if (empregados[i].salario === 1000) {
            mensagem += `Matrícula: ${empregados[i].matricula} | Nome: ${empregados[i].nome} | Salário: R$ ${empregados[i].salario.toFixed(2)}\n`;
            encontrou = true;
        }
    }

    if (encontrou) {
        alert(mensagem);
    } else {
        alert("Nenhum empregado com salário igual a R$1.000,00.");
    }
    inicio();
}

inicio();
