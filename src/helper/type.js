const typeColor = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
}


/**
 * Function to select Type Color
 * @param {string} type - name of the type
 * @returns {string} - Corresponding color code for the type
 */
const getTypeColor = type => {
    return typeColor[type]
}


/**
 * Function to group type effective from input type
 * @param {Object} weakness - Type with effectiveness in the format {type: effectiveness}
 * @returns - Weakness grouped by their effectiveness
 */
const getWeakness = weakness => {

    let result = [
        {name: '0x', types: []},
        {name: '0.25x', types: []},
        {name: '0.5x', types: []},
        {name: '2.0x', types: []},
        {name: '4.0x', types: []}
    ]

    for (const key in weakness) {
        if(weakness[key] === 0) { 
            result[0].types.push(key) 
        } else if (weakness[key] === 0.25) { 
            result[1].types.push(key) 
        } else if(weakness[key] === 0.5) { 
            result[2].types.push(key) 
        } else if(weakness[key] === 2) { 
            result[3].types.push(key) 
        } else { 
            result[4].types.push(key) 
        }
    }

    result = result.filter(element => {
        if (element.types.length > 0) {
            return true
        }
        return false
    })

    return result;
}

export { getWeakness, getTypeColor }