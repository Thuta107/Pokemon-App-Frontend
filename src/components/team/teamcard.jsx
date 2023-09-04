import { Paper, Divider } from "@mui/material";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteBtn, EditBtn } from './buttons';
import axios from 'axios'
import TeamSlot from "./teamslot";
import './team.css'


const TeamOverview = props => {

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


/**
 * Functional Component for Team Card
 */
 const TeamCard = props => {

    const [name, setName] = useState(props.data.name)
    const [update, setUpdate] = useState(props.data.name ? false : true)
    const match = useRouteMatch()

    const updateName = (paraName, paraUpdate) => {
        if(paraName == '') {
            window.alert('Team Name cannot be an Empty String')
            return
        } 
        
        if(paraName == name) {
            console.log('Here 1')
            setUpdate(paraUpdate)
        } else {
            console.log('Here 2')
            let oldName = name
            let bool = props.updateName(oldName, paraName)
            if(bool) {
                setUpdate(paraUpdate)
                setName(paraName)
            } else {
                setUpdate(update)
                setName(name)
            }
        }
    }

    const handleDelete = () => {
        props.deleteTeam(name);
    }

    return (
        <div>
            <Paper elevation={5} sx={{padding:'20px'}}>
                <div className='team-title'> <h2> Team Information </h2> </div>
                <Divider />
                <TeamSlot title={'Name'} value={name} update={update} updateName={updateName}/>
                <TeamSlot title={'Pokemon'} value={props.data.pokemon.length} />
                <TeamSlot title={'Modified'} value={props.data.modified ? props.data.modified : '-'} />
                <div className='team-title'> <h2> Team Overview </h2> </div>
                {props.data.pokemon.length > 0 ? props.data.pokemon.map(element => <TeamOverview name={element.name}/>):
                <div style={{textAlign:'center', padding:'15px', color:'gray'}}>
                    <h4> No Pokemon Data is Available </h4>
                </div>}
                <Divider />
                <div style={{padding:'15px'}}>
                    <DeleteBtn handleDelete={handleDelete} update={update}/>
                    {update ? <EditBtn update={update}/> : 
                    <Link className='team-link' to={`${match.path}/${name}`}> <EditBtn update={update}/> </Link>}
                </div>
            </Paper>
        </div>
    )
}

export default TeamCard;