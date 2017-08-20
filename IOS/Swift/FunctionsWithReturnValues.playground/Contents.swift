//: Playground - noun: a place where people can play

import UIKit

// The -> is what tells swift we want to return something.
func getMilk(howManyCartons : Int, usedCartons : Int) -> Int {
    print(howManyCartons)
    
    return howManyCartons - usedCartons
}

print(getMilk(howManyCartons: 4, usedCartons: 2))


