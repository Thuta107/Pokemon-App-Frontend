import RowGrid from "../box/rowgrid";
import { formatName } from "../helper/format"
import { subEffect } from "../helper/filter"
import TypeFlex from "../displays/typeflex";
import PropTypes from 'prop-types';

const MoveSheet = props => {
    return (
        <>
            <RowGrid title={'Typing'} children={<TypeFlex types={[props.data.type]}/>}/>
            <RowGrid title={'Category'} children={<div>{formatName(props.data.category)}</div>}/>
            <RowGrid title={'Damage'} children={<div>{props.data.damage}</div>}/>
            <RowGrid title={'Accuracy'} children={<div>{props.data.accuracy}</div>}/>
            <RowGrid title={'Priority'} children={<div>{props.data.priority}</div>}/>
            <RowGrid title={'Description'} children={<div>{subEffect(props.data.description, props.data.effectChance)}</div>}/>
        </>
    )
}

/** Prop Types **/
MoveSheet.propTypes = {
    data: PropTypes.object.isRequired
};

/** Default Props **/
MoveSheet.defaultProps = {
    data: {
        type: 'fire',
        category: 'physical',
        damage: '80',
        accuracy: '100',
        priority: '0',
        description: 'Hello World',
        effectChance: '-'
    }
};

export default MoveSheet;