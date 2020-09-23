import React from 'react';
import {connect} from 'react-redux'
import {setFilms} from './actions/films'
import axios from 'axios';

class App extends React.Component {
  componentWillMount() {
    const {setFilms} = this.props
    axios.get('/films.json').then(({data}) => {
      console.log(data)
      setFilms(data)
    })

  }


  render() {
    const {films} = this.props
    console.log(films)
    return (
      <div className="App">
  
      </div>
    );
  }
}

const mapStateToProps = ({films}) => ({
  films: films.items
})

const mapDispatchToProps  = dispatch => ({
  setFilms: films => dispatch(setFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
