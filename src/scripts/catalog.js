/*
Create a <main> element in your index.html file. Make sure the element has a class of container. - DONE
Create a scripts/catalog.js module. - DONE
Define and export a Catalog function. - DONE
The Catalog function should accept the harvested food array as input. - DONE
The Catalog function should iterate the array of food objects. - DONE
As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a 
food item. Use the following example for each food item.
<section class="plant">Corn</section>
The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
*/

import { harvestPlants } from "./harvester.js"

export const Catalog = (harvestedPlantsParam) => 
{
    const plants = harvestedPlantsParam
    let htmlString = ""
    for (const food of plants)
    {
        htmlString += `<section class="plant">${food.type}</section>`
    }
    return htmlString
}