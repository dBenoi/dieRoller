# dieRoller

# About
This application was created for those spur of the moment times when you really want to play DnD, but you realize you forgot your dice in your apartment... In your nightstand... Right on top of your character sheet. Good thing one of the most fun things about DnD is building characters!

In the JS file, all of the dice are called by their ID using element.querySelector() and their associated ID. Each die has an onclick listener that calls a function that "rolls" the die using Math.floor(Math.random()). The innerHTML of the "rolled" element is then updated to the latest roll of the selected die. 

It has been created with desktop and mobile in mind, to be inclusive to all players who just need to scratch the itch.
