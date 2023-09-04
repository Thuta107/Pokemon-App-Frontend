import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { getTypeColor } from "../helper/type";
import battleImage from "./img/battle.png"
import './home.css';

const Home = () => {

    return(
        <div className='nav-grid'>
            <Link className='nav-item' to='/pokemon'>
                <Paper elevation={5} sx={{padding:5, backgroundColor:getTypeColor('grass'), color:"white"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img className='nav-img' src={battleImage}/>
                    </div>
                    <div className='nav-header'> Pokemon </div>
                </Paper>
            </Link>
            <Link className='nav-item' to='/move'>
                <Paper elevation={5} sx={{padding:5, backgroundColor:getTypeColor('dragon'), color:"white"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img className='nav-img' src={battleImage}/>
                    </div>
                    <div className='nav-header'> Moves </div>
                </Paper>
            </Link>
            <Link className='nav-item' to='/team'>
                <Paper elevation={5} sx={{padding:5, backgroundColor:getTypeColor('fire'), color:"white"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img className='nav-img' src={battleImage}/>
                    </div>
                    <div className='nav-header'> Team </div>
                </Paper>
            </Link>
            <Link className='nav-item' to='/battle'>
                <Paper elevation={5} sx={{padding:5, backgroundColor:getTypeColor('poison'), color:"white"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img className='nav-img' src={battleImage}/>
                    </div>
                    <div className='nav-header'> Battle </div>
                </Paper>
            </Link>
        </div>
    )
}

export default Home;