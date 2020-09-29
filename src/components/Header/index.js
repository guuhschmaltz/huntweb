import React from 'react';

import "./styles.css"; //Importando css da própria pasta header

//Exemplos de como pode ser feito:

//const Header = () => {
//    return ()
//}

//class Header extends Component{
//    render(){
//        return <h1>Hello</h1>
//    }
//}

//Encurtando: 

const Header = () => (
    <header id="main-header">JSHunt</header>
);

export default Header;

