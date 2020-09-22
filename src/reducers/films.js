const initialState = {
    films: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILMS":
            return {
                ...state,
                films: action.payload
            }
        case "ADD_FILMS":
            return {
                ...state,
                films: [
                    ...state.films,
                    action.payload
                ]
            }
        default:
            return state
    }
}