/**
 * Function to convert input string to Title Case
 * @param {string} name - Input string 
 * @returns {string} - Input string as title case
 */
const titleCase = name => {
    return name[0].toUpperCase() + name.substr(1)
}


/**
 * Function to pad infront of the string
 * @param {number} id - Original numeric ID
 * @returns {string} - String with 0 padding
 */
const padZero = (id, size=3)=> {
    return id.toString().padStart(size,'0')
}


/**
 * Function to convert input string to desired format
 * @param {string} name - Input string
 * @returns {string} - Formatted string from Input String
 */
const formatName = name => {

    let nameArray = name.split('-');
    let result;

    for(let i = 0; i < nameArray.length; i++) {

        // Check for Mega Forms
        if(nameArray[i] === 'mega') {
            if (i !== 0) {
                result = nameArray[i]
                nameArray[1] = nameArray[0]
                nameArray[0] = result
            }
            break
        }

        // Check for Alola Froms
        if(nameArray[i] === 'alola') {
            nameArray[1] = nameArray[0]
            nameArray[0] = 'alolan'
            break
        }

        // Check for Alola Froms
        if(nameArray[i] === 'galar') {
            nameArray[1] = nameArray[0]
            nameArray[0] = 'galarian'
            break
        }

        // Check for Male Nidoran
        if(nameArray[i] === 'm') {
            nameArray[i] = '(Male)'
            break
        }

        // Check for Female Nidoran
        if(nameArray[i] === 'f') {
            nameArray[i] = '(Female)'
            break
        }

        // Format Special Attack & Defense
        if(nameArray[i] === 'special') {
            if(nameArray[i+1]) {
                nameArray[i] = 'sp.'
                nameArray[i+1] = nameArray[i+1] === 'attack' ? 'atk' : 'def'
            }
            break
        }

        // Format HP
        if(nameArray[i] === 'hp') {
            nameArray[i] = nameArray[i].toUpperCase()
            break
        }
    }

    // Convert to UpperCase and Add Spacing
    result = ''
    nameArray.forEach((name,index) => {
        if (name !== '') {
            if (index+1 === nameArray.length) {
                result = result + titleCase(name)
            } else {
                result = result + titleCase(name) + ' '
            }
        }
    })

    return result
}

export { titleCase, formatName, padZero }