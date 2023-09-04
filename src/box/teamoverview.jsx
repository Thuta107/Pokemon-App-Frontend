import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './box.css';


const PokemonSprite = props => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
    const [sprite, setSprite] = useState(null)

    useEffect(() => {
        axios.get(new URL(props.name, baseURL).toString())
        .then(response => {
            setSprite(response.data.sprites.front_default)
        })
        .catch(error => console.log(error))
    }, [])

    return ( sprite ? <img src={sprite} alt={props.name}/> : <></> )
}


const TeamOverview = props => {
    return (
        <div> 
            {props.pokemon.map(element => <PokemonSprite name={element}/>)} 
            <Divider />
        </div>
    )
}

/** Prop Types **/
TeamOverview.propTypes = {
    pokemon: PropTypes.arrayOf(PropTypes.string)
};

PokemonSprite.propTypes = {
    name: PropTypes.string
};


/** Default Props **/
TeamOverview.defaultProps = {
    pokemon: ['charizard', 'blastoise', 'venusaur', 'gengar', 'dragonite', 'rhydon']
};

export default TeamOverview;