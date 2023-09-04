import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import './box.css';

const RowGrid = props => {
    return (
        <>
            <div className='row-grid'>
                <div> {props.title} </div>
                {props.children}
            </div>
            <Divider />
        </>
    )
}

/** Prop Types **/
RowGrid.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

/** Default Props **/
RowGrid.defaultProps = {
    title: 'Testing',
    children: <div> This is a Sample Pokemon Data </div>
};

export default RowGrid;