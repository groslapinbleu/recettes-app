import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';

class Admin extends Component {
    render() {
        const { recettes, ajouterRecette, majRecette, supprRecette,chargerExemples } = this.props
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                        .map(key =>
                            <AdminForm
                                key={key}
                                id={key}
                                recettes={recettes}
                                majRecette={majRecette}
                                supprRecette={supprRecette}>
                            </AdminForm>)
                }
                <footer>
                    <button onClick={chargerExemples}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;