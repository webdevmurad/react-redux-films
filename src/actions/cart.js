export const addToCart = obj => ({
    type: 'ADD_FILM',
    payload: obj
})

export const removeFromCart = id => ({
    type: 'REMOVE_FILM',
    payload: id
})