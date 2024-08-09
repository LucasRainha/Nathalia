const carros =['Gol','Celta','Pálio','Fiesta'];

//Splice
carros.splice(1,0,'Cardo')
console.log(carros);

carros.splice(2,1,"Corsa")
console.log(carros)


carros.splice(3,1)
console.log(carros)

//map
const alunos = [
    {nome:'Lucas', idade : 17, nota : 7},
    {nome:'Alan', idade : 15, nota : 6},
    {nome:'Ricardo', idade : 18, nota : 4}
]

const nomeAluno = alunos.map(aluno => {return aluno.nome})

const listaAlunos = alunos.map((aluno,i) => `${i + 1}º aluno - ${aluno.nome}`)

console.log(nomeAluno);
console.log(listaAlunos);


//Filter

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6)
    .map(aluno => `O aluno ${aluno.nome} foi aprovado com a nota ${aluno.nota}`)

console.log(alunosAprovados)



//Reduce
const vendedores = [
    {nome: 'Janaina', idade: 21, vendas: 5},
    {nome: 'Vitoria', idade: 19, vendas: 7},
    {nome: 'Marcelo', idade: 23, vendas: 3},
]

const totalVendas = vendedores.reduce((acumulado,item) => acumulado + item.vendas, 0 )

console.log(totalVendas)


const dadosVendas = vendedores.reduce((acc,item) => {
    const maisNovo = acc.maisNovo > item.idade ? acc.maisNovo : item.idade
    const maisVelho = acc.maisVelho > item.idade ? acc.maisVelho : item.idade

    return{
        totalVendas : acc.totalVendas + item.vendas,
        maisNovo,
        maisVelho
    }

},{totalVendas : 0, maisNovo: undefined, maisVelho: undefined})

console.log(dadosVendas);


const filaBrinquedo = [
    {nome: 'Janaina', idade: 15, altura: 1.50},
        {nome: 'Vitoria', idade: 19, altura: 1.65},
        {nome: 'Marcelo', idade: 17, altura: 1.87},
]



const todaFilaPode = filaBrinquedo.every(pessoa => pessoa.altura > 1.60)

console.log(todaFilaPode ? "Vamos lá!" : "Nem todos podem!");

const verifIdade = filaBrinquedo.some(pessoa => pessoa.idade >= 18)

console.log(verifIdade ? "Podem iniciar a trilha" : "Não temos responsável")

const responsavel = filaBrinquedo.find(pessoa => pessoa.idade > 18)

console.log(responsavel);



const convidados = ['Luciana', 'Carlos', 'Miguel', 'prof Luis', 'Kleber', 'prof Guilherme']

const profConvidado = convidados.filter(conv => conv.includes('prof'))

console.log(profConvidado)


//Spread

const frutas = ['maça', 'banana', 'uva']
const verduras = ['couve','alface','agrião']

const feira = [...frutas, ...verduras, 'rucula']
console.log(feira)


let pessoa = {
    nome: 'André',
    idade: 21,
    altura: 1.80
}

pessoa = {...pessoa, idade: 25}

console.log(pessoa);