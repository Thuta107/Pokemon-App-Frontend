import PropTypes from 'prop-types'
import { Skeleton } from '@mui/material'
import { getStatColor, getStatWidth } from '../helper/stat';

const StatBar = props => {
    return (
        <Skeleton animation={false} sx={{
            width: `${getStatWidth(props.value)}%`, 
            backgroundColor: getStatColor(props.value)
        }}/>
    )
}

/** Prop Types **/
StatBar.propTypes = {
    value: PropTypes.number.isRequired
};

/** Default Props **/
StatBar.defaultProps = {
    value: 100
};

export default StatBar