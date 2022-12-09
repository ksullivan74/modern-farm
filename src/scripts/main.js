console.log("Welcome to the main module")
//import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)
import {plantSeeds} from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
plantSeeds(yearlyPlan)
const plants = usePlants()
const harvestedPlants = harvestPlants(plants)
const foodToSell = Catalog(harvestedPlants)
console.log(foodToSell)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = foodToSell


