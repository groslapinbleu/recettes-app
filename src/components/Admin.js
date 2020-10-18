import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login';

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log('la méthode flèche positionnée dans onAuthStateChanged est appelée')
            if (user) { // si l'utilisateur Facebook est connecté
                console.log('et il y a un user')
                this.handleAuthDataInState({ user })
            }
        })
    }

    handleAuthDataInState = async (authData) => {
        const box = await base.fetch(this.props.pseudo, { context: this })
        if (!box.chef) { // si l'entrée chef n'existe pas en base
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebaseApp.auth().signInWithPopup(provider)
            .then(this.handleAuthDataInState)
    }

    logout = async () => {
        console.log('logout')
        await firebaseApp.auth().signOut()
        this.setState({ uid: null })
    }

    render() {

        const logout = <button onClick={this.logout}>Déconnnexion</button>
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}></Login>
        }

        if (this.state.uid !== this.state.chef)
            return (
                <div>
                    <h2>Vous n'êtes pas propriétaire de cette page.</h2>
                    {logout}
                </div>
            )

        const { recettes, ajouterRecette, majRecette, supprRecette, chargerExemples } = this.props
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
                    {logout}
                </footer>
            </div>
        );
    }
}

export default Admin;