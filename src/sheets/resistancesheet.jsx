import { useEffect, useState } from "react"
import axios from "axios"
import { Divider } from "@mui/material"
import { getWeakness } from "../helper/type"
import RowGrid from "../box/rowgrid"
import TypeFlex from "../displays/typeflex"
import PropTypes from 'prop-types'
import './sheet.css'

const ResistanceSheet = props => {

    const [weakness, setWeakness] = useState(null);

    useEffect(() => {
        let typeWeakness = {};
        axios.get(props.types[0].url).then(response => {
            response.data.damage_relations.half_damage_from.forEach(type => { typeWeakness[type.name] = 0.5; });
            response.data.damage_relations.double_damage_from.forEach(type => { typeWeakness[type.name] = 2; });
            response.data.damage_relations.no_damage_from.forEach(type => { typeWeakness[type.name] = 0; });

            if (props.types.length > 1) {
                axios.get(props.types[1].url).then(response => {
                    response.data.damage_relations.half_damage_from.forEach(type => {
                        if(type.name in typeWeakness) {
                            let result = typeWeakness[type.name] * 0.5
                            result == 1 ? delete typeWeakness[type.name] : typeWeakness[type.name] = result
                        } else {
                            typeWeakness[type.name] = 0.5;
                        }
                    });
                    response.data.damage_relations.double_damage_from.forEach(type => {
                        if(type.name in typeWeakness) {
                            let result = typeWeakness[type.name] * 2
                            result == 1 ? delete typeWeakness[type.name] : typeWeakness[type.name] = result
                        } else {
                            typeWeakness[type.name] = 2;
                        }
                    });
                    response.data.damage_relations.no_damage_from.forEach(type => {
                        typeWeakness[type.name] = 0;
                    });
                    setWeakness(typeWeakness);
                })
                .catch(error =>  console.error('Secondary Type', error))
            } else { setWeakness(typeWeakness) }
        })
        .catch(error =>  console.error('Primary Type', error))
    }, [])

    return (
        !weakness ? <></> : 
        <div>
            <h1 className='chart-header'> Type Effectiveness </h1>
            <Divider />
            {getWeakness(weakness).map(element => {
            return (
                <div key={element.name}>
                    <RowGrid title={element.name} children={<TypeFlex types={element.types}/>}/>
                    <Divider />
                </div>
            )})} 
        </div>
    )
}

/** Prop Types **/
ResistanceSheet.propTypes = {
    types: PropTypes.arrayOf(PropTypes.object).isRequired
};

/** Default Props **/
ResistanceSheet.defaultProps = {
    types: [{url: 'https://pokeapi.co/api/v2/type/water'}, {url: 'https://pokeapi.co/api/v2/type/fire'}]
};

export default ResistanceSheet;