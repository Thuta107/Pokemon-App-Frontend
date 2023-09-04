import { useState, useRef, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MoveCard from "../cards/movecard";
import TopBar from "../displays/topbar";
import { formatName } from "../helper/format";
import './move.css';


const Move = () => {
    const baseURL = 'https://pokeapi.co/api/v2/move?limit=900'
    const [move, setMove] = useState([])
    const [view, setView] = useState([])
    const [search, setSearch] = useState('')
    const currIndex = useRef(0)
    const history = useHistory();

    // Setup Intersection Observer for Infinite Scrolling
	const observer = useRef();
    const prevObserver = useRef();
	const lastCard = useCallback((element) => {
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
                    setView([...view, ...move.slice(start, currIndex.current)])
                } else {
                    let filterArray = move.filter(element => formatName(element.name).toLowerCase().startsWith(search.toLowerCase()))
                    setView([...view, ...filterArray.slice(start, currIndex.current)])
                }
			}, options);
			if (element && element !== prevObserver.current) {
                observer.current.observe(element);
                prevObserver.current = element
            }
		}, [view]
	);

    // Get all the Pokemon Moves
    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            setMove([...response.data.results])
            let start = currIndex.current
            currIndex.current = currIndex.current + 5
            setView([...view, ...response.data.results.slice(start, currIndex.current)])
        })
        .catch(error => console.log(error))
    }, [])

    // List all the Move Cards
    const listCards = () => {
        return(view.map((element, index) => {
            if(view.length === index+1) {
                return <div ref={lastCard} key={element.name}> <MoveCard url={element.url}/> </div>
            } else {
                return <div key={element.name}> <MoveCard url={element.url}/> </div>
            }
        }))
    }

    // Handle Search Form Change
    const handleFilter = e => {
        let start = 0;
        currIndex.current = start + 5
        if(e.target.value == '') {
            setSearch(e.target.value)
            setView([...move.slice(start, currIndex.current)])
        } else {
            let filterArray = move.filter(element => formatName(element.name).toLowerCase().startsWith(e.target.value.toLowerCase()))
            setSearch(e.target.value)
            setView([...filterArray.slice(start, currIndex.current)])
        }
    }

    // Go back to Home Page
    const goHome = () => {
        history.push("/");
    }

    return (
        <div>
            <TopBar text={'Back to Home'} handleBack={goHome} handleFilter={handleFilter} search={search}/>
            <div className='move-grid'> {listCards()} </div>
        </div>
    )
}

export default Move;