import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as filmActions from '../actions/films'
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const sortBy = (films, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(films, 'price', 'desc')
        case 'price_low':
            return orderBy(films, 'price', 'asc')
        case 'producer':
            return orderBy(films, 'producer', 'asc')
        default: 
            return films;
    }
}

const filterFilms = (films, searchQuery) =>
    films.filter(
        o => 
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.producer.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchFilms = (films, filterBy, searchQuery) => {
    return sortBy(filterFilms(films, searchQuery), filterBy)
}


const mapStateToProps = ({films, filter}) => ({
    films: films.items && searchFilms(films.items, filter.filterBy, filter.searchQuery),
    isReady: films.isReady
})
  
const mapDispatchToProps  = dispatch => ({
    ...bindActionCreators(filmActions, dispatch)
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
