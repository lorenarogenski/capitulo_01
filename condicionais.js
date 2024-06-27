// let cnh = "sim";

// process.stdout.write("Possui CNH? ")
// process.stdin.once('data', function (data) {
//     cnh = data.toString().trim().toLowerCase();

//     if(cnh == "sim") {
//         console.log("Você possui CNH. ")
//     } else {
//         console.log("Você não possui CNH. ")
//     }

//     process.exit();

// });

let idade = 0;

// process.stdout.write("Qual a sua idade? ");
// process.stdin.once('data', function (data) {
//     idade = Number(data.toString().trim());

//     if(idade >= 18) {
//         console.log("Você é maior de idade. ")
//     } else {
//         console.log("Você não é maior de idade. ")
//     }
    
//     process.exit();

// });

// let resposta = "";

// process.stdout.write("Você gosta de café? ");
// process.stdin.once('data', function (data) {
//     resposta = data.toString().trim().toLowerCase();

//     if (resposta == 'sim') {
//         console.log("Legal, eu também. ")
//     } else {
//         console.log("Que pena. ")
//     }

//     process.exit();

// });

let parOuImpar;

process.stdout.write('Digite um número: ');
process.stdin.once('data', function (data) {
    parOuImpar = Number(data.toString().trim());

    if(parOuImpar % 2 == 0) {
        console.log("O número " + parOuImpar + " é par. ")
    } else {
        console.log("O número " + parOuImpar + " é ímpar. ")
    }

    process.exit();
    
})