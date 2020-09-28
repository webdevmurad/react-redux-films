import {connect} from 'react-redux'
import {setFilms} from '../actions/films'
import App from '../components/App'

const mapStateToProps = ({films}) => ({
    films: films.items,
    isReady: films.isReady
})
  
const mapDispatchToProps  = dispatch => ({
    setFilms: films => dispatch(setFilms(films))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);