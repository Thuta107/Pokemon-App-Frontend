import PropTypes from 'prop-types';
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton = props => {
    return (
        <Button sx={{marginRight:2}} 
            startIcon={<DeleteIcon />}
            variant='contained'
            color='error'
            disabled={props.updating}
            onClick={() => props.handleClick()}
        > Delete </Button>
    )
}


/** Prop Types **/
DeleteButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

/** Default Props **/
DeleteButton.defaultProps = {
    handleClick: () => window.alert("Hello! This is a Delete Button.")
};

export default DeleteButton