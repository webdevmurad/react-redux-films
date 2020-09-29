import {combineReducers} from 'redux'
import films from './films'
import cart from './cart'
import filter from './filter'

export default combineReducers({
    films,
    cart,
    filter
})