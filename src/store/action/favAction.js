export const addToFavorites = (itemId) => ({
    type: 'ADD_TO_FAVORITES',
    payload: itemId,
  });
  
  export const removeFromFavorites = (itemId) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: itemId,
  });
  