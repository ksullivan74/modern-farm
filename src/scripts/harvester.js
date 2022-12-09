/*
In this module, define and export a harvestPlants function. -DONE
The harvestPlants function must accept the plants array as input. - DONE
The function will return an array of seed objects.
Iterate the array of growing plants. On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns. For example, 
if the current plant is a peanut object with an output of 2...
{
    type: "Peanut",
    height: 30,
    output: 2
}

Then the array that the function returns should have two identical objects added to it.
[
    {
        type: "Peanut",
        height: 30,
        output: 2
    },
    {
        type: "Peanut",
        height: 30,
        output: 2
    }
]
Again, the exception is corn. Half of your corn will be sold to cattle ranchers, 
so only half of the output of each corn plant will be added to the array that this function returns.
*/



export const harvestPlants = (plantsParam) =>
{
    const plantsArray = []
    for (const plant of plantsParam)
    {
    if (plant.type === "Corn")
        {
            for (let i = 0; i < plant.output/2; i++) {plantsArray.push(plant)}
        }
        else
            {
                for (let i = 0; i < plant.output; i++)
                {
                    plantsArray.push(plant)
                }
            }
    }
    return plantsArray
}

