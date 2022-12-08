console.log("Welcome to the main module")
import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
//console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
//console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
//console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
//console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
//console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
//console.log(wheatSeed)

/*
Checking Your Logic
Write some temporary test code in the main module to check if your functions do their job correctly:
Create a seed object.
Invoke addPlant() and specify the seed object as the argument.
Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.
*/
import {plantSeeds} from "./tractor.js"
plantSeeds(yearlyPlan)
import { usePlants } from "./field.js"
let plants = usePlants()
//console.log(plants)
