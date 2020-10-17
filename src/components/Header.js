import React from 'react';

function isVowel(x) {  return /[aeiouy]/i.test(x); }

const Header = ({pseudo}) => {
    const de = isVowel(pseudo[0]) ? `d'` : 'de '
    return (
        <header>
            <h1>La boîte à recette {de}{pseudo}</h1>
        </header>
    );
};

export default Header;