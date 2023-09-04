import { Button } from "@mui/material"
import PropTypes from 'prop-types';
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const BackButton = props => {
    return (
        <Button startIcon={<ArrowBackIcon/>} onClick={() => props.handleClick()}> 
            {props.text}
        </Button>
    )
}

/** Prop Types **/
BackButton.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

/** Default Props **/
BackButton.defaultProps = {
    text: "Go Back",
    handleClick: () => window.alert("Hello! This is a Back Button.")
};

export default BackButton