import axios from "axios"
import { useEffect, useState } from "react"
import { Paper } from '@mui/material'
import InfoSheet from '../sheets/infosheet';
import ResistanceSheet from '../sheets/resistancesheet';
import StatSheet from '../sheets/statsheet';
import PropTypes from 'prop-types';
import './card.css';

const DexCard = props => {
    
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        axios.get(props.url)
        .then(response => {
            setPokemon({
                id: response.data.id,
                name: response.data.name,
                image: response.data.sprites.other['official-artwork'].front_default,
                types: response.data.types.map(type => type.type),
                abilities: response.data.abilities.map(ability => ability.ability),
                stats: response.data.stats.map(element => {
                    return({
                        baseStat: element.base_stat,
                        name: element.stat.name
                    })
                })
            })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        !pokemon ? <></> : 
        <div style={{margin: "100px 5%"}}>
            <Paper elevation={5}>
                <div className='dex-grid'>
                    <div style={{placeSelf: 'center'}}>
                        <img className="art-image" src={pokemon.image}/>
                    </div>
                    <InfoSheet data = {{
                        id: pokemon.id,
                        name: pokemon.name,
                        typing: pokemon.types.map(element => element.name),
                        abilities: pokemon.abilities
                    }}/>
                    <StatSheet stats={pokemon.stats}/>
                    <ResistanceSheet types={pokemon.types}/>
                </div>
            </Paper>
        </div>
    )
}

/** Prop Types **/
DexCard.propTypes = {
    url: PropTypes.string.isRequired
};

/** Default Props **/
DexCard.defaultProps = {
    url: "https://pokeapi.co/api/v2/pokemon/blastoise/"
};

export default DexCard;