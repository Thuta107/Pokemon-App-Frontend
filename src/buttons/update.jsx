import PropTypes from 'prop-types';
import { Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'

const UpdateButton = props => {
    return (
        <Button sx={{marginRight:2}} 
            startIcon={<EditIcon/>}
            variant='contained'
            color='success'
            disabled={props.updating}
            onClick={() => props.handleClick()}
        > Update </Button>
    )
}

/** Prop Types **/
UpdateButton.propTypes = {
    updating: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
};

/** Default Props **/
UpdateButton.defaultProps = {
    updating: false,
    handleClick: () => window.alert("Hello! This is an Update Button.")
};

export default UpdateButton;