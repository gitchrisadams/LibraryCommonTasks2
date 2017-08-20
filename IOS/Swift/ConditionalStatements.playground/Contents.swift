//: Playground - noun: a place where people can play

import UIKit

// Accepts strings and returns a String.
func loveCalculator(yourName : String, theirName : String) -> String {
    // Create random num.
    let loveScore = Int(arc4random_uniform(101))
    
    if loveScore > 81 {
        return "You maxed out the love meter at \(loveScore)!"
    } else if loveScore > 40 && loveScore >= 80 {
        return "Not a bad score at \(loveScore) but Come on Romeo!"
    } else {
        return "Do you even love? Your sucky score is \(loveScore)"
    }
    
}

let myLoveScore = loveCalculator(yourName: "Chris", theirName: "Ann-Marie")

print(myLoveScore)


