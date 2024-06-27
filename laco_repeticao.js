const aluno = [
    {nome: 'igor', idade: 16, contato: '(42 95458-5885'},
    {nome: 'felipe', idade: 18, contato: '(42 95458-5885'},
    {nome: 'ana', idade: 30, contato: '(42 95458-5885'},
    {nome: 'pedro', idade: 42, contato: '(42 95458-5885'},
]

aluno.forEach(function(item, index, array){
    if(item.idade >= 18) {
        console.log("O aluno " + item.nome + " é maior de idade")
    } else {
    }

});

for(let i = 100; i >= 200; i++) {
    let result = i % 2;

    if(result != 0) {
        console.log(i)
    }
    
};

