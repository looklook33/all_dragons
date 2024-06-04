// Your code here 
const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require('./classes/evil-dragon');
const Dragon = require('./classes/dragon');

falkor = new FriendlyDragon('Falkor', 'white', ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], "Bastian")

smaug = new EvilDragon('Smaug', 'black', ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], 'Dwarf King')

allDragons = Dragon.getDragons(falkor, smaug)

console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.allDragons = allDragons;
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
