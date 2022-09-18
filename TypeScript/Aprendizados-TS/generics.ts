// Utilização de Generics

// Convensões de Generics
/**
 * E => Element
 * K => Key
 * S => state
 * T => Type
 * V => Value
 */

function useState<T extends string | number = number>() { // Sinal Igual será caso não informado o tipo, o type number será prevalecido como padrão
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set };
}

let newState = useState<string>();
newState.get();
newState.set('Sam');
newState.set(021); // Erro
newState.set('Saravia');

// Teste 
function pressId<V>(id: V) {
    return id;
}

console.log(pressId<number>(3));

function identidade<T, V>(nome: T, idade: V) {
    return { nome, idade };
}

let resultado = identidade<string, number>('Lucas', 19)

console.log(`Seu nome é ${resultado.nome} e sua idade é ${resultado.idade}`);
