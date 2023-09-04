import { useRouteMatch, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Paper } from '@mui/material'
import TypeFlex from "../displays/typeflex";
import { formatName } from "../helper/format";
import { getTypeColor } from "../helper/type";
import PropTypes from 'prop-types';
import './card.css'
import axios from "axios";


const PokeCard = props => {

    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/'
    const [data, setData] = useState(null)
    const match = useRouteMatch()

    useEffect(() => {
        const url = new URL(props.name, pokemonURL).toString()
        axios.get(url)
        .then(response => {
            setData({
                name: response.data.name,
                types: response.data.types.map(type => type.type.name),
                image: response.data.sprites.front_default,
                moves: response.data.moves.map(move => move.move)
            })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        !data ? <></> :
        <Paper sx={{minHeight:300, maxWidth:300}}>
            <Link className='poke-link' to={`${match.path}/${data.name}`}>
                <div className="flex-center" style={{backgroundColor:getTypeColor(data.types[0])}}>
                    <img className="sprite-image" src={data.image}/>
                </div>
                <div style={{textAlign:'center'}}>
                    <h2>{formatName(data.name)}</h2>
                </div>
                <div className="flex-center" style={{paddingBottom:'5%'}}>
                    <TypeFlex types={data.types}/>
                </div>
            </Link>
        </Paper>
    )
}

/** Prop Types **/
PokeCard.propTypes = {
    name: PropTypes.string.isRequired
};

/** Default Props **/
PokeCard.defaultProps = {
    name: "blastoise"
};

export default PokeCard;