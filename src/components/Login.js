import React from 'react';

const Login = ({authenticate}) => {
    return (
        <div className='login'>
            <h2>Connecte-toi pour créer tes propres recettes !</h2>
            <button className='facebook-button' onClick={authenticate}>
                Connection avec Facebook
            </button>
        </div>
    );
};

export default Login;