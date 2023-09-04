import { Divider } from '@mui/material';
import StatBar from '../displays/statbar';
import PropTypes from 'prop-types';
import './box.css';

const StatGrid = props => {
    return (
        <>
            <div className='stat-grid'>
                <div> {props.name} </div>
                <div className='stat-value'> {props.value} </div>
                <div> {props.name.toLowerCase() === 'total' ? <></> : <StatBar value={props.value}/>} </div>
            </div>
            <Divider />
        </>
    )
}

/** Prop Types **/
StatGrid.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

/** Default Props **/
StatGrid.defaultProps = {
    name: 'Attack',
    value: 80
};

export default StatGrid;