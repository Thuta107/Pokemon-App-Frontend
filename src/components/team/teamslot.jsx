import { IconButton, TextField, Divider, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import './team.css'

/**
 * Functional Component for Team Slot
 */
const TeamSlot = props => {

    const [value, setValue] = useState(props.value)

    const handleFilter = e => {
        setValue(e.target.value)
    }

    return (
        <>
            <div className='teamslot-grid'>
                <div> {props.title} </div>
                {!props.updateName ? <div> {props.value} </div> :
                <div> 
                    <TextField onChange={e => handleFilter(e)} value={value} sx={{width:'85%'}} size='small' disabled={!props.update}/>
                    <IconButton onClick={() => props.updateName(value, !props.update)}> 
                        {props.update ? <CheckIcon color='success'/> : <EditIcon/>}  
                    </IconButton>
                </div>}
            </div>
            <Divider />
        </>
    )
}

export default TeamSlot;