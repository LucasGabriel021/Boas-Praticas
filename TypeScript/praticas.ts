// let info = {};
// info.id = 10;
// info.name = "Lucas";

let info:{id: number, name: string} = {
    id: 10,
    name: 'Lucas'
}


// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: 32,
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

let pessoa1: {nome: string, idade: number, profissao: string} = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa2: {nome: string, idade: number, profissao: string} = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
}

type Info = {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa3: Info = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
}

let pessoa4: Info = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
}
