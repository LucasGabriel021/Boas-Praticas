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
