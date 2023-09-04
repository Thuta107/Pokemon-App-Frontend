import TypeChip from './typechip';
import './display.css';
import PropTypes from 'prop-types';

const TypeFlex = props => {
    return (
        <div className='type-flex'>
            {props.types.map(type => <div key={type}><TypeChip type={type}/></div>)}
        </div>
    )
}

/** Prop Types **/
TypeFlex.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired
};

/** Default Props **/
TypeFlex.defaultProps = {
    types: ['water', 'ice']
};

export default TypeFlex;