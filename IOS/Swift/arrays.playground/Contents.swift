//: Playground - noun: a place where people can play

import UIKit

var randomDiceIndex1 : Int = 0
var randomDiceIndex2 : Int = 0

// Create array of dice.
let diceArray = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]

randomDiceIndex1 = Int(arc4random_uniform(6))
randomDiceIndex2 = Int(arc4random_uniform(6))

// Print out array element
print(diceArray[randomDiceIndex1])
print(diceArray[randomDiceIndex2])
