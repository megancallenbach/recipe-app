import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'
import Loading from './components/Loading'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Loading />
        <RecipesContainer />
      </div>
    )
  }
}

export default App;
