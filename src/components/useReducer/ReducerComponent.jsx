{/*

O useReducer é um hook no React 
que é usado para gerenciamento de estado. 
Ele é semelhante ao useState, mas é mais útil 
quando você tem uma lógica de estado complexa
que envolve múltiplos sub-valores ou quando o 
próximo estado depende do anterior.
Aqui está um exemplo simples de como usar o useReducer:

*/}



export const ReducerComponent = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return { count: state.count +1};
        case "DECREMENT": return { count: state.count -1};
        default: throw new Error();
    }
    
}

    


