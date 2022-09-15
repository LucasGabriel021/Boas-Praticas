// Utilização de Generics

// Convensões de Generics
/**
 * E => Element
 * K => Key
 * S => state
 * T => Type
 * V => Value
 */

function useState<T extends string | number = number>() {
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
newState.set(021);
newState.set('Saravia');
