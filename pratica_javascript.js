// let nome = "Lorena";
// let sobrenome = "Rogenski ";

// console.log("Hello World! " + nome + " " + sobrenome);

// let nomeUsuario = "";

// process.stdout.write("Insira o seu nome: ")
// process.stdin.once('data', function (data) {
//     nomeUsuario = data.toString().trim().toLowerCase();

//     console.log('Conectado com sucesso! ' + nomeUsuario);

//     process.exit();
    
// });

//

let idade = 0;

const ano = 2024;

process.stdout.write("Qual a sua idade? ")
process.stdin.once('data', function (data) {
    idade = Number(data.toString().trim());

    let nascimento = ano - idade;

    console.log("Olá! Você nasceu no ano de " + nascimento);

    process.exit();
    
});