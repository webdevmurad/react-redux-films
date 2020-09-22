import React from 'react';
import {connect} from 'react-redux'
import {setFilms} from './actions/films'

class App extends React.Component {
  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps  = dispatch => ({
  setFilms: films => dispatch(setFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
