import { Chip } from '@mui/material'
import PropTypes from 'prop-types';
import { getTypeColor } from '../helper/type'

const TypeChip = props => {
    return (
        <Chip label={props.type.toUpperCase()} sx={{
            backgroundColor: getTypeColor(props.type),
            fontWeight: 'bold',
            minWidth: 90,
            color: '#FFFFFF',
            letterSpacing: 0.5
        }}/> 
    )
}

/** Prop Types **/
TypeChip.propTypes = {
    type: PropTypes.string.isRequired
};

/** Default Props **/
TypeChip.defaultProps = {
    type: "fire"
};

export default TypeChip;