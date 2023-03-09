import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect } from "react-redux";//conecta nuestro componente con redux.
import { removeCharacterAction } from "../../redux/charsDuck";

function Home({ chars, removeCharacterAction }) {

    function renderCharacter() {
        let char = chars[0];
        return (
            <Card leftClick={nexCharacter} { ...char } />
        )
    };

    function nexCharacter(){
        removeCharacterAction();
    };

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    );
};

function mapState(state){
    return {
        chars: state.characters.array
    }
}

//connect se usas de 2 formas 

//1:pedir datos que ya tiene el reducer / store (sacarle datos a redux)
export default connect(mapState, { removeCharacterAction })(Home)

//2:despacha acciones para que como props las podamos usar.