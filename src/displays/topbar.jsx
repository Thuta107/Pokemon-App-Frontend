import { TextField, AppBar, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PropTypes from 'prop-types'
import './display.css'

const TopBarSearch = props => {
    return (
        <div className='topbar-search'>
            <TextField fullWidth 
                placeholder="Search"
                value={props.search}
                onChange={(e) => props.handleFilter(e)}
                sx={{ backgroundColor:'white' }}
            />
        </div>
    )
}

const TopBar = props => {
    return (
        <AppBar>
            {(props.handleBack || props.handleFilter) ?
            <div className='topbar-grid'>
                <div className='topbar-back'> 
                    <Button startIcon={<ArrowBackIcon/>} onClick={() => props.handleBack()} sx={{color:'white'}}> 
                        {props.text} 
                    </Button>
                </div>
                {props.handleFilter ? <TopBarSearch search={props.search} handleFilter={props.handleFilter}/> : <></>}
            </div> :
            <div className='topbar-title'>
                <div><h2>{props.text}</h2></div>
            </div>}
        </AppBar>
    )
}

/** Prop Types **/
TopBar.propTypes = {
    text: PropTypes.string.isRequired,
    handleBack: PropTypes.func,
    handleFilter: PropTypes.func,
    search: PropTypes.string
}

TopBarSearch.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired
}

/** Default Props **/
TopBar.defaultProps  = {
    text: "Sample Testing",
    handleBack: undefined,
    handleFilter: undefined,
    search: undefined
}

export default TopBar;