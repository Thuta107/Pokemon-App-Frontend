import PropTypes from 'prop-types';
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check';

const EditButton = props => {
    return (
        <IconButton onClick={() => props.handleClick()}> 
            {props.updating ? <CheckIcon color='success'/> : <EditIcon/>}  
        </IconButton>
    )
}

/** Prop Types **/
EditButton.propTypes = {
    updating: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
};

/** Default Props **/
EditButton.defaultProps = {
    updating: false,
    handleClick: () => window.alert("Hello! This is a Delete Button.")
};

export default EditButton;