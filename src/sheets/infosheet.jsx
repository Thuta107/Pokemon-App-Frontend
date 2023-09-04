import { useState, useEffect } from "react";
import axios from "axios";
import RowGrid from "../box/rowgrid";
import TypeFlex from "../displays/typeflex";
import PropTypes from 'prop-types'
import { formatName, padZero } from "../helper/format";
import { Divider } from "@mui/material";
import './sheet.css'

const Ability = props => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(props.url)
        .then(response => {
            const desc = response.data.effect_entries.filter(element => element.language.name === 'en')
            setData({
                name: response.data.name,
                description: desc[0].effect
            })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        !data ? <></> : 
        <RowGrid title={formatName(data.name)} children={<div>{data.description}</div>}/>
    )
}

const InfoSheet = props => {
    return (
        <div>
            <h1 className='chart-header'> Basic Information </h1>
            <Divider />
            {props.data.id < 900 ? <RowGrid title={'ID'} children={<div>{padZero(props.data.id)}</div>}/> : <></>}
            <RowGrid title={'Name'} children={<div>{formatName(props.data.name)}</div>}/>
            <RowGrid title={'Typing'} children={<TypeFlex types={props.data.typing}/>}/>
            {props.data.abilities.map(element => <Ability url={element.url}/>)}
        </div>
    )

}

/** Prop Types **/
InfoSheet.propTypes = {
    data: PropTypes.object.isRequired
};

Ability.propTypes = {
    url: PropTypes.string.isRequired
};

/** Default Props **/
InfoSheet.defaultProps = {
    data: {
        id: 6,
        name: "blastoise",
        typing: ["water"],
        abilities: [{
            name:"torrent",
            url:"https://pokeapi.co/api/v2/ability/67/"
        }, {
            name:"rain-dish",
            url:"https://pokeapi.co/api/v2/ability/44/"
        }]
    }
};

export default InfoSheet;