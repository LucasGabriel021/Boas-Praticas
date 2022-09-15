// Parte sobre type assertions
type UserResponse = {
  id: number;
  name: string; 
  avatar: string;
}

// O padrão do userResponse deve estar de acordo com o type criado!
let userResponse = {} as UserResponse;
userResponse.name;
