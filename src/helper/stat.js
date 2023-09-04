const statRange = {
    low: 50,
    average: 100,
    max: 200,
}

const statColor = {
    low: '#FA8128',
	average: '#F7D02C',
	high: '#8CC43C'
}


/**
 * Function to select Stat Bar Color
 * @param {number} stat - Stat value
 * @returns {string} - Corresponding color for the stat bar
 */
const getStatColor = stat => {
    if(stat < statRange.low) {
        return statColor.low;
    } else if (stat < statRange.average) {
        return statColor.average;
    } else {
        return statColor.high;
    }
}


/**
 * Function to select Stat Bar Width
 * @param {number} stat - Stat value
 * @returns {number} - Corresponding width for the stat bar
 */
const getStatWidth = stat => {
    if(stat * (100/statRange.max) < 100) {
        return stat * (100/statRange.max)
    }
    return 100;
}

export { getStatColor, getStatWidth }