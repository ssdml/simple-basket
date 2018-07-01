export const basket = (state = {past: [], current: [], future: []}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                past: [...state.past, state.current],
                current: addItemReducer(state.current, action),
                future: [],
            }

        case 'REMOVE_ITEM':
            return {
                past: [...state.past, state.current],
                current: removeItemReducer(state.current, action),
                future: [],
            }
        case 'REDO':
            if (state.future.length < 1) {
                return state
            }
            return {
                past: [...state.past, state.current],
                current: state.future[state.future.length - 1],
                future: state.future.slice(0, -1),
            }
        case 'UNDO':
            if (state.past.length < 1) {
                return state
            }
            return {
                past: state.past.slice(0, -1),
                current: state.past[state.past.length - 1],
                future: [...state.future, state.current],
            }
        default:
            return state
    }
}

const addItemReducer = (state, action) => {
    let changeFlag = false;
    let newState = state.map((item) => {
        let newItem = Object.assign({}, item)
        if (newItem.id === action.id) {
            newItem.quantity++;
            changeFlag = true;
        }
        return newItem
    });
    if (changeFlag) {
        return newState
    }
    return [
        ...state,
        {
            id: action.id,
            name: action.name,
            price: action.price,
            quantity: 1,
        }
    ]
}

const removeItemReducer = (state, action) => {
    let newState = state.map((item) => {
        let newItem = Object.assign({}, item)
        if (newItem.id === action.id) {
            newItem.quantity -= action.quantity
        }
        return newItem
    })
    return newState.filter(item => item.quantity > 0)
}