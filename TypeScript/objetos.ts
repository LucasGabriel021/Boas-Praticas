// Parte sobre type assertions
type UserResponse = {
  id: number;
  name: string; 
  avatar: string;
}


// O padrão do userResponse deve estar de acordo com o type criado!
let userResponse = {} as UserResponse;
userResponse.name;

// Type Object
type Crachar = {
    id: number,
    name: string,
    cpf: number,
    pet?: string
}

let preencher: Crachar = {
    id: 7,
    name: 'Reus',
    cpf: 62888282
}

console.log(preencher);


// União de types
type Time = {
    nome: string,
    cidade: string, 
    idade: number
}

type Seleca = {
    pais: string,
    mascote?: string
}

type Junta = Time & Seleca; // Operador & faz a junção
let res: Junta = {
    nome: "Liverpool",
    cidade: "Liverpool",
    idade: 77,
    pais: "Inglaterra"
};

console.log(res);


// Criar tipagem com interface
interface User {
    id: number, 
    name: string, 
}

function registerNewUser(newUser: User) {
    newUser.name;
}
