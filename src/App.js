import React from 'react';
import {connect} from 'react-redux'
import {setFilms} from './actions/films'
import axios from 'axios';

import { Container} from 'semantic-ui-react'

import Menu from './components/Menu'
import FilmCard from './components/FilmCard'

class App extends React.Component {
  componentWillMount() {
    const {setFilms} = this.props
    axios.get('/films.json').then(({data}) => {
      setFilms(data)
    })

  }


  render() {
    const {films, isReady} = this.props

    return (
      <Container className="App">
        <Menu/>
        <FilmCard films={films} isReady={isReady}/>
      </Container>
    );
  }
}

const mapStateToProps = ({films}) => ({
  films: films.items,
  isReady: films.isReady
})

const mapDispatchToProps  = dispatch => ({
  setFilms: films => dispatch(setFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
