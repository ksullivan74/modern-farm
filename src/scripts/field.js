/*

1.) Define a variable in this module whose initial value is an empty array. - DONE
    a.) This array will store all of the plants that are growing in the field. Do not export the array. - DONE
2.) In the module, define and export a function named addPlant. - DONE
    a.)The addPlant function must accept a seed object as input. - DONE
    b.)The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?). - Done
3.) Define and export a function named usePlants that returns a copy of the array of plants. - DONE
Be aware that when planting corn, 
an array of objects will be provided instead of a single object like all the other type of seeds. 
Investigate the Array.isArray method to check if corn got passed in, or one of the others.
*/

const plantsInField = []

export const addPlant = (seedObject) => 
{
    if(Array.isArray(seedObject))
    {
        for (const corn of seedObject)
        {
            plantsInField.push(corn)
        }
    }
    else(plantsInField.push(seedObject))
}

export const usePlants = () => 
{
    //const obj = { ...array };
    return [...plantsInField]
}

/*
Write some temporary test code in the main module to check if your functions do their job correctly.
Create a seed object.
Invoke addPlant() and specify the seed object as the argument.
Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.
*/

/*
const corn = [{Type: "Corn", Height: 180, Output: 6 }, {Type: "Corn", Height: 180, Output: 6 }]
addPlant(corn)
//console.log(plantsInField)
usePlants(addPlant)
console.log(plantsInField)
*/