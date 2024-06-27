let prova = [];

process.stdout.write("Insira a primeira nota: ");
process.stdin.once('data', function (data) {
    let prova1 = Number(data.toString().trim());
    prova.push(prova1);

    process.stdout.write("Insira a segunda nota: ");
    process.stdin.once('data', function (data) {
        let prova2 = Number(data.toString().trim());
        prova.push(prova2);

        process.stdout.write("Insira a terceira nota: ");
        process.stdin.once('data', function (data) {
            let prova3 = Number(data.toString().trim());
            prova.push(prova3);

            let media = [(prova[0] + prova[1] + prova[2]) / 3];

            console.log("A média final das provas é " + media);

            process.exit();

        });
    });
});