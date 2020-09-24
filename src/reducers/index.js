import {combineReducers} from 'redux'
import films from './films'
import cart from './cart'

export default combineReducers({
    films,
    cart
})