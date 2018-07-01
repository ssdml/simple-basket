export const addItem = (itemId, itemName, itemPrice) => ({
    type: 'ADD_ITEM',
    id: itemId,
    name: itemName,
    price: itemPrice,
})

export const removeItem = (itemId, itemQuantity) => ({
    type: 'REMOVE_ITEM',
    id: itemId,
    quantity: itemQuantity,
})

export const redo = () => ({
    type: 'REDO'
})

export const undo = () => ({
    type: 'UNDO'
})


export default {
    addItem,
    removeItem,
    undo,
    redo,
}