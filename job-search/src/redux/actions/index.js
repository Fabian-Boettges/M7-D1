export const ADD_FAVORITES = 'ADD_FAVORITES'

export const addFavoritesAction = (company) => ({
    type: ADD_FAVORITES,
    payload: company,
})