/**
 * Function to filter out the G-Max & Totem Form
 * @param {string} name - Name or Form of the Pokemon
 * @returns {boolean} - False if G-Max or Totem and false otherwise
 */
const filterForm = name => {
    let nameArray = name.split('-');
    for(let i=0; i < nameArray.length; i++) {
        if(nameArray[i] === 'gmax' || nameArray[i] === 'totem') {
            return false
        }
    }
    return true 
} 

/**
 * Function to add effect chance to move description
 * @param {string} description - move description
 * @param {number} chance - effect chance of the move
 * @returns {string} - move desciption with effect chance added
 */
 const subEffect = (description, chance) => {

    if(!chance) return description;

    let paraArray = description.split(' ');
    let result;

    for(let i=0; i < paraArray.length; i++) {
        if(paraArray[i] === '$effect_chance%') {
            paraArray[i] = chance+'%'
        }
    }

    result = ''
    paraArray.forEach((element,index) => {
        if(index+1 === paraArray.length) {
            result = result + element
        } else {
            result = result + element + ' '
        }
    })
    return result
}

export { filterForm, subEffect }