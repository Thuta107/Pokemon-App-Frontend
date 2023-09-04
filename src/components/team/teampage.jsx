import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom'
import TopBar from '../topbar/topbar'
import { useEffect, useState } from "react";
import { AddBtn } from './buttons';
import TeamCard from './teamcard'
import './team.css'
import axios from 'axios';

const TeamPage = () => {

    const [team, setTeam] = useState([])
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        axios.get('/team')
        .then(response => {
            setTeam([...response.data])
        })
        .catch(error => console.log('GET Error', error))
        // setTeam([
        // {
        //     name: 'Blue Team',
        //     pokemon: ['alakazam', 'aerodactyl', 'arcanine', 'gyarados', 'machamp', 'exeggutor'],
        //     modified: new Date().toLocaleString(),
        // }, 
        // {
        //     name: 'Lance Team',
        //     pokemon: ['dragonite', 'garchomp', 'gyarados', 'salamence', 'altaria', 'charizard'],
        //     modified: null,
        // }])
    }, [])

    // Check Team Limit
    const checkLimit = () => {
        // Team Limit
        if(team.length+1 > 5) return false

        // Remove while new card is created but not saved
        let filter = team.filter(element => element.name == '') 
        if(filter.length > 0) return false
        
        return true
    }

    // Add New Team
    const addTeam = () => {
        let newTeam = {
            id: null,
            name: '',
            pokemon: [],
            modified: null,
        }
        setTeam([...team, newTeam])
    }

    /**
     * Function to update Team Name
     * @param {string} oldID - Old name or id of pokemon team 
     * @param {string} newID - New name or id of pokemon team
     */
    const updateName = (oldID, newID) => {
        console.log('Team Name is Updated', oldID, newID)

        // Ensure unique name or id
        newID = newID.trim()
        let filter = team.filter(element => element.name.toLowerCase() == newID.toLowerCase())
        if(filter.length > 0) {
            window.alert('You cannot have the team with Same Name')
            return false
        }

        if(oldID == '') {
            axios.post('/team', { name: newID })
            .then(response => {
                console.log('POST', response)
                team[team.length-1] = response.data
                setTeam([...team])
            })
            .catch(error => console.log('POST Error', error))
        } else {
            let i;
            for(i = 0; i < team.length; i++) {
                if(team[i].name == oldID) {
                    break
                }
            }
            console.log(team, team[i])
            axios.put('/team', { id: team[i].id, data: {name: newID} })
            .then(response => {
                console.log('PUT', response)
                team[i] = response.data
                setTeam([...team])
            })
            .catch(error => console.log('PUT Error', error))
        }
        return true
    }

    /**
     * Function to update Pokemon Team
     * @param {string} id - ID of pokemon team
     * @param {Object} data - Updated Pokemon Data 
     */
    const updateTeam = (id, data) => {
        console.log('Team Data is Updated', id, data)
    }

    /**
     * Function to delete Pokemon Team
     * @param {string} id - ID of pokemon team
     */
    const deleteTeam = id => {
        console.log('Team is Deleted', id)
    }

    const goHome = () => {
        history.push('/');
    }
    
    return (
        <Switch>
            <Route path={`${match.path}/:team`}>
                <div> This is a Specific Pokemon Team Page </div>
            </Route>
            <Route path={match.path}>
                <TopBar text={'Back to Home'} handleClick={goHome}/>
                <div className='team-grid'>
                    {team.map(element => <TeamCard data={element} updateName={updateName} deleteTeam={deleteTeam}/>)}
                    { checkLimit() ? <AddBtn handleClick={addTeam} text={'Add Team'} /> : <></> }
                </div>
            </Route>
        </Switch>
    )
}

export default TeamPage;