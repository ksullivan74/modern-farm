/*
1.) Create a scripts/tractor.js module. - DONE
2.) In this module, define and export a plantSeeds function. - DONE
3.) The function must accept the year's planting plan as input (i.e. it must define a parameter). - Done
    a.) invoked on main.js
The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
Figure out how to iterate both the parent array and the child arrays.

// Example growing plan. Actual plan is bigger.
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
As you iterate the row of food types to be planted, invoke the corresponding factory function 
(e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
Take that seed and add it to the array of plants in the field module.

*/

import { addPlant } from "./field.js"
import { createPotato } from "./seeds/potato.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


export const plantSeeds = (yearlyPlanParam) => 
{
    for (const plan of yearlyPlanParam)
    {
        for (const foodType of plan)
        {
            if (foodType === "Potato") {addPlant(createPotato())}
            if (foodType === "Asparagus"){addPlant(createAsparagus())}
            if (foodType === "Corn"){addPlant(createCorn())}
            if (foodType === "Soybean"){addPlant(createSoybean())}
            if (foodType === "Sunflower"){addPlant(createSunflower())}
            if (foodType === "Wheat"){addPlant(createWheat())}
        }
    }
}
