import React, { Component } from 'react';

class AjouterRecette extends Component {
    state = {
        nom: 'Nouvelle recette',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleSubmit = (e) => {
        console.log('handleSubmit')
        e.preventDefault();
        const recette = {...this.state}
        this.props.ajouterRecette(recette)
        // remise à zero du formulaire
        this.setState({
            nom: 'Nouvelle recette',
            image: '',
            ingredients: '',
            instructions: ''
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target

        console.log(`handleChange: champ = ${name} valeur = ${value}`)

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='card'>
                <h2>Ajouter recette</h2>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
                    <input name='nom' type='text' onChange={this.handleChange} placeholder='Nom de la recette' value={this.state.nom} />
                    <input name='image' type='text'  onChange={this.handleChange} value={this.state.image} placeholder="Nom de l'image"/>
                    <textarea name='ingredients' onChange={this.handleChange} value={this.state.ingredients}  row='3' placeholder='ingredients'></textarea>
                    <textarea name='instructions' onChange={this.handleChange} value={this.state.instructions}  row='15' placeholder='instructions'></textarea>
                    <button type='submit'>Ajouter</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;