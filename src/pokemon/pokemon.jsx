import { useState, useEffect, useRef, useCallback } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { Divider } from '@mui/material';
import axios from 'axios';
import PokeCard from '../cards/pokecard';
import PokeDex from '../pokedex/pokedex';
import TopBar from '../displays/topbar';
import { formatName } from '../helper/format';
import './pokemon.css'

const Pokemon = () => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/?limit=1000';
    const [pokemon, setPokemon] = useState([])
    const [view, setView] = useState([])
    const [search, setSearch] = useState('')
    const currIndex = useRef(0)
    const match = useRouteMatch()
    const history = useHistory();
    
    // Setup Intersection Observer for Infinite Scrolling
	const observer = useRef();
    const prevObserver = useRef();
	const lastPokemon = useCallback((element) => {
			if (observer.current) observer.current.disconnect();
			let options = {
				root: null,
				rootMargin: '0px',
				threshold: 0.3,
			};

			// Add observer to the last element
			observer.current = new IntersectionObserver((entries) => {
				if(!entries[0].isIntersecting) return
                let start = currIndex.current ? currIndex.current : 0
                currIndex.current = currIndex.current + 5
                if(search === '') {
                    setView([...view, ...pokemon.slice(start, currIndex.current)])
                } else {
                    let filterArray = pokemon.filter(name => formatName(name).toLowerCase().startsWith(search.toLowerCase()))
                    setView([...view, ...filterArray.slice(start, currIndex.current)])
                }
			}, options);
			if (element && element !== prevObserver.current) {
                observer.current.observe(element);
                prevObserver.current = element
            }
		}, [view]
	);

    // Get all the Pokemon Species
    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            setPokemon([...response.data.results.map(elem => elem.name)])
            let start = currIndex.current
            currIndex.current = currIndex.current + 5
            setView([...view, ...response.data.results.map(elem => elem.name).slice(start,currIndex.current)])
        })
        .catch(error => console.log(error))
    }, [])

    // List all the Pokemon Cards
    const listCards = () => {
        return(view.map((element,index) => {
            if(view.length === index+1) {
                return <div ref={lastPokemon} key={element}> <PokeCard name={element} /> </div>
            } else {
                return <div key={element}> <PokeCard name={element} /> </div>
            }
        }))
    }

    // Handle Search Form Change
    const handleFilter = e => {
        let start = 0;
        currIndex.current = start + 5
        console.log(e.target.value)
        if(e.target.value == '') {
            setSearch(e.target.value)
            setView([...pokemon.slice(start, currIndex.current)])
        } else {
            let filterArray = pokemon.filter(name => formatName(name).toLowerCase().startsWith(e.target.value.toLowerCase()))
            setSearch(e.target.value)
            setView([...filterArray.slice(start, currIndex.current)])
        }
    }

    // Go back to Home
    const goHome = () => {
        history.push("/");
    }

    return(
        <Switch>
            <Route path={`${match.path}/:pokemon`}>
                <PokeDex />
            </Route>
            <Route path={match.path}>
                <TopBar text={'Back to Home'} handleBack={goHome} handleFilter={handleFilter} search={search}/>
                <Divider />
                <div className='pokecard-grid'> {listCards()} </div>
            </Route>
        </Switch>
    )
}

export default Pokemon;