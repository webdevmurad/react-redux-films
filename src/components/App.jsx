import React from 'react';
import axios from 'axios';
import Loader from '../contentLoader/ContentLoader'

import { Container , CardGroup} from 'semantic-ui-react'

import FilmCard from '../containers/FilmCard'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'

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
        <Filter/>
        <CardGroup className="wrap-cards">
          {
            !isReady 
              ? <div className="content-loader">{Array(12).fill(0).map((_, index) => <Loader key={index}/>)}</div>
              : films.map((film, i) => <FilmCard key={i} {...film} />)
          }
        </CardGroup>
      </Container>
    );
  }
}

export default App;
