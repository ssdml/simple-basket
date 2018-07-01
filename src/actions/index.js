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

export default {
    addItem,
    removeItem,
}