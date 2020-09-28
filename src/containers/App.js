import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as filmActions from '../actions/films'
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books
        case 'price_high':
            return orderBy(books, 'price', 'desc')
        case 'price_low':
            return orderBy(books, 'price', 'asc')
        case 'producer':
            return orderBy(books, 'producer', 'asc')
        default: 
            return books;
    }
}


const mapStateToProps = ({films}) => ({
    films: sortBy(films.items, films.filterBy),
    isReady: films.isReady
})
  
const mapDispatchToProps  = dispatch => ({
    ...bindActionCreators(filmActions, dispatch)
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);


// setFilms: films => dispatch(setFilms(films))