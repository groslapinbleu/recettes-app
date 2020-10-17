import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemples = () => {
    this.setState({ recettes: recettes })
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,
      {
        context: this,
        state: 'recettes'
      })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref) // ceci est nécessaire pour éviter de se mélanger entre les pseudos
  }

  ajouterRecette = (recette) => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes: recettes })
  }

  majRecette = (key, nouvelleRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = nouvelleRecette
    this.setState({ recettes: recettes })
  }

  supprRecette = (key) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
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
        <Admin
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprRecette={this.supprRecette}
          chargerExemples={this.chargerExemples}>
        </Admin>
      </div>
    )
  }
}

export default App
