import React from 'react';
import axios from 'axios';

import { Container} from 'semantic-ui-react'

import Menu from './Menu'
import FilmCard from './FilmCard'

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

export default App;
