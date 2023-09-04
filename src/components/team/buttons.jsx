import { Button, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import './team.css'

/**
 * Functional Component for Delete Button 
 */
const DeleteBtn = props => {
    return (
        <Button sx={{marginRight:2}} 
            startIcon={<DeleteIcon />}
            variant='outlined'
            color='error'
            disabled={props.update}
            onClick={() => props.handleDelete()}
        > 
            Delete 
        </Button>
    )
}

/**
 * Functional Component for Edit Button 
 */
 const EditBtn = props => {
    return (
        <Button sx={{marginRight:2}} 
            startIcon={<EditIcon/>}
            variant='outlined'
            color='success'
            disabled={props.update}
        > 
            Edit 
        </Button>
    )
}


/**
 * Functional Component for Add Team Button
 */
 const AddBtn = props => {
    return (
        <div className='add-button'>
            <div style={{textAlign: 'center'}}> 
                <IconButton size='large' aria-label="add" onClick={() => props.handleClick()}>
                    <AddIcon />
                </IconButton>
                {props.text ? <div style={{color:'gray'}}> {props.text} </div> : <></>}
            </div>
        </div>
    )
}

export { DeleteBtn, AddBtn, EditBtn };