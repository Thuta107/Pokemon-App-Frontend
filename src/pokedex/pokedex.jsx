import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { filterForm } from '../helper/filter';
import DexCard from '../cards/dexcard';
import TopBar from '../displays/topbar';

const PokeDex = () => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/'
    const [forms, setForms] = useState([]);
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {
        const urlObj = new URL(params.pokemon, baseURL)
        console.log("Hello")
        axios.get(urlObj.toString())
        .then(response => {
            setForms(response.data.varieties.map(elem => elem.pokemon))
        })
        .catch(error => console.log(error))
    }, [])

    // Go Back to Pokemon Page
    const goPokemon = () => {
        history.push('/pokemon')
    }

    return(
        <>
            <TopBar text={'Back to Pokemon'} handleBack={goPokemon} />
            {forms.filter(form => filterForm(form.name)).map(form => <div key={form.name}> <DexCard url={form.url}/> </div>)}
        </>
    )
}

export default PokeDex;