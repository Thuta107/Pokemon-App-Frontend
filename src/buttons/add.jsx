import { IconButton } from "@mui/material"
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add'

const AddButton = props => {
    return (
        <IconButton size="large" aria-label="Add" onClick={() => props.handleClick()}>
            <AddIcon />
        </IconButton>
    )
}

/** Prop Types **/
AddButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

/** Default Props **/
AddButton.defaultProps = {
    handleClick: () => window.alert("Hello! This is an Add Button.")
};

export default AddButton