import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends Component {
    render() {
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}/>

                <footer>
                    <button onClick={this.props.chargerExemples}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;