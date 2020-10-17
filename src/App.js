import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemples = () => {
    this.setState({ recettes: recettes })
  }

  render() {
    const cards = Object.keys(this.state.recettes)
      .map(card => {
        return <Card key={card} details={this.state.recettes[card]}></Card>
      })
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          {cards}
        </div>
        <Admin chargerExemples={this.chargerExemples}></Admin>
      </div>
    )
  }
}

export default App
