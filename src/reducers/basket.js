export const basket = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItemReducer(state, action)

        case 'REMOVE_ITEM':
            return removeItemReducer(state, action)
        default:
            return state
    }
}

const addItemReducer = (state, action) => {
    let changeFlag = false;
    let newState = state.map((item) => {
        if (item.id === action.id) {
            item.quantity++;
            changeFlag = true;
        }
        return item
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
    let newState2 = state.map((item) => {
        if (item.id === action.id) {
            item.quantity -= action.quantity
        }
        return item
    })
    return newState2.filter(item => item.quantity > 0)
}