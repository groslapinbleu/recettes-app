import React from 'react';

const Card = ({ details }) => {
    const ingredients = details.ingredients.split(',')
        .map(item => <li key={item}>{item}</li>)
    const instructions = details.instructions.split('\n')
        .map(item => <li key={item}>{item}</li>)

    // chargement de l'image avec traitement d'erreur
    const requiredImage = (path) => {
        try {
            return require(`../img/${path}`)
        }
        catch (err) {
            return require(`../img/default.jpeg`)
        }
    }

    return (
        <div className='card'>
            <div className="image">
                <img src={requiredImage(details.image)} alt={details.nom}></img>
            </div>
            <div className="recette">
                <h2>{details.nom}</h2>
            </div>
            <ul className="liste-ingredients">
                {ingredients}
            </ul>
            <ol className="liste-instructions">
                {instructions}
            </ol>
        </div>
    );

}

export default Card;