import axios from "axios";
import { useState, useEffect } from "react";
import { formatName } from "../helper/format"
import MoveSheet from "../sheets/movesheet";
import { Divider, Paper } from "@mui/material";
import PropTypes from 'prop-types';

const MoveCard = props => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(props.url)
        .then(response => {
            let desc = response.data.effect_entries.filter(element => {
                if(element.language.name === 'en') {
                    return true
                }
                return false
            })
            setData({
                id: response.data.id,
                name: response.data.name,
                type: response.data.type.name,
                category: response.data.damage_class.name,
                damage: response.data.power ? response.data.power : '-',
                accuracy: response.data.accuracy ? response.data.accuracy : '-',
                priority: response.data.priority,
                description: desc.length > 0 ? desc[0].short_effect : '-',
                effectChance: response.data.effect_chance
            })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        !data ? <></> : 
        <Paper elevation={5} sx={{padding:'20px', maxWidth:300}}>
            <div style={{textAlign:'center'}}> 
                <h1> {formatName(data.name)} </h1>
            </div>
            <Divider />
            <MoveSheet data={data}/>
        </Paper>
    )
}

/** Prop Types **/
MoveCard.propTypes = {
    url: PropTypes.string.isRequired
};

/** Default Props **/
MoveCard.defaultProps = {
    url: 'https://pokeapi.co/api/v2/move/20/'
};

export default MoveCard;