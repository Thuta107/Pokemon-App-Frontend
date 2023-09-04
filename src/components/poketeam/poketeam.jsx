import { useEffect, useState } from "react";
import { Paper, Backdrop, CircularProgress } from '@mui/material'

// Components
import TopBar from "../topbar/topbar";
import TypeSlot from "../cardslot/typeslot";
import { AddBtn } from "../team/buttons";
import { formatName } from "../../helper/format";
import { getTypeColor } from "../../helper/type";
import './poketeam.css'
import axios from "axios";


// const MoveSlot = props => {

//     const [move, setMove] = useState(props.currMove)
//     const [open, setOpen] = useState(false)

//     const handleBackDrop = () => {
//         setOpen(!open)
//     }

//     return (
//         <div>
//             {move ? (
//                 <Paper onClick={() => window.alert('Hello')} 
//                 sx={{minheight:50, padding:1, backgroundColor: getTypeColor(move.type), cursor: 'pointer'}}>
//                     <div style={{textAlign:'center'}}> <h3> {move.name} </h3> </div>
//                 </Paper>
//             ) : 
//             (<Paper sx={{minheight:50, padding:1}}>
//                 <AddBtn handleClick={handleBackDrop}/>
//             </Paper>)}
//             <Backdrop
//                 sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={open}
//                 onClick={handleBackDrop}
//             >
//                 <Paper> 
//                     <div> Hello World </div>
//                 </Paper>
//             </Backdrop>
//         </div>
//     )
// }


// const PokemonSlot = props => {

//     const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/'
//     const [data, setData] = useState(null)
//     const [moves, setMoves] = useState([{}, {}, {}, {}])

//     useEffect(() => {
//         const url = new URL(props.name,pokemonURL).toString()
//         console.log(url)
//         axios.get(url)
//         .then(response => {
//             setData({
//                 name: response.data.name,
//                 type: response.data.types.map(type => type.type.name),
//                 // image: response.data.sprites.other['official-artwork'].front_default,
//                 image: response.data.sprites.front_default,
//                 moves: response.data.moves.map(move => move.move)
//             })
//         })
//         .catch(error => console.log(error))
//     }, [])

//     return (
//         <div>
//             {!data ? 
//             (<Paper sx={{minHeight:350, display:'flex', justifyContent:'center'}}>
//                 <AddBtn text={'Add Pokemon'}/>
//             </Paper>) : 
//             (<Paper sx={{minHeight:300}}>
//                 <div style={{display:'flex', justifyContent:'center', backgroundColor:getTypeColor(data.type[0])}}>
//                     <img width='200px' height='200px' src={data.image}/>
//                 </div>
//                 <div style={{textAlign:'center'}}><h2>{formatName(data.name)}</h2></div>
//                 <div style={{display:'flex', justifyContent:'center', paddingBottom:'5%'}}>
//                     <TypeSlot types={data.type}/>
//                 </div>
//             </Paper>)}
//             <div className="poke-move-grid">
//                 {moves.map(element => <MoveSlot currMove={element.name?element:null} allMoves={data?.moves?data.moves:[]}/>)}
//             </div>
//         </div>
//     )
// }


// const PokeTeam = () => {

//     const [pokemon, setPokemon] = useState([{name: 'charizard'}, {name: 'blastoise'}, {name: 'venusaur'}, {name: 'togekiss'}, {}, {}])

//     return (
//         <>
//             <TopBar text={'Red Team'}/>
//             <div className="poke-team-grid">
//                 {pokemon.map(slot => <PokemonSlot name={slot?.name?slot.name:''}/>)}
//             </div>
//         </>
//     )
// }

// export default PokeTeam;