import React from 'react';

const AdminForm = ({id, recettes, majRecette, supprRecette}) => {
    const recette = recettes[id]
    const handleChange = (e, id) => {
        const {name, value} = e.target
        const recette = recettes[id]
        recette[name] = value
        majRecette(id, recette)
    }
    return (
        <div className='card'>
            <h2>Modifier recette</h2>
            <form className='admin-form' >
                <input onChange={(e) => handleChange(e, id)} value={recette.nom} name='nom' type='text' placeholder='Nom de la recette' />
                <input onChange={(e) => handleChange(e, id)} value={recette.image} name='image' type='text' placeholder="Nom de l'image" />
                <textarea onChange={(e) => handleChange(e, id)} value={recette.ingredients} name='ingredients' row='3' placeholder='ingredients'></textarea>
                <textarea onChange={(e) => handleChange(e, id)} value={recette.instructions} name='instructions' row='15' placeholder='instructions'></textarea>
            </form>
            <button type='submit' onClick={() => supprRecette(id)}>Supprimer</button>
        </div>
    );
};

export default AdminForm;