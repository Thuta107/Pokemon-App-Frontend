import StatGrid from '../box/statgrid';
import PropTypes from 'prop-types'
import { formatName } from '../helper/format';
import { Divider } from "@mui/material";
import './sheet.css'

const StatSheet = props => {

    const calTotal = () => {
        let total = 0;
        props.stats.forEach(element => {
            total = total + element.baseStat
        })
        return total
    }

    return (
        <div>
            <h1 className='chart-header'> Base Stats </h1>
            <Divider />
            {props.stats.map(element => <StatGrid name={formatName(element.name)} value={element.baseStat}/>)}
            <StatGrid name={formatName('total')} value={calTotal()}/>
        </div>
    )
}

/** Prop Types **/
StatSheet.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};

/** Default Props **/
StatSheet.defaultProps = {
    stats: [{
        baseStat: 100,
        name: "hp"
    }, {
        baseStat: 100,
        name: "attack"
    }, {
        baseStat: 100,
        name: "defense"
    }, {
        baseStat: 100,
        name: "special-attack"
    }, {
        baseStat: 100,
        name: "special-defense"
    }, {
        baseStat: 100,
        name: "speed"
    }]
};

export default StatSheet;