import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer/reducer'; 
import favoritesReducer from './reducer/FavReducer'; 

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer 
});

const store = createStore(rootReducer);

export default store;
