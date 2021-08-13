import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from './../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITES:
            const newFavorites = state.favorites.filter(item => (item.id !== action.payload))
            return {
                ...state,
                favorites: [newFavorites]
            }
        default:
            return state
    }
} 

export default reducer;