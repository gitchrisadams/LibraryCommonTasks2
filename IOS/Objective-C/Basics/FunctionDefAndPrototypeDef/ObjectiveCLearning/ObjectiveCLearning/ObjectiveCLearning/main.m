//
//  main.m
//  ObjectiveCLearning
//
//  Created by Christopher Adams on 9/10/17.
//  Copyright © 2017 ChristopherAdams.com. All rights reserved.
//

#import <Foundation/Foundation.h>

// Function prototype is necessary if the function is declared after is is called.
void myFunction();

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Function called before it is declared below, see prototype above.
        myFunction();
        
    }
    return 0;
}

void myFunction() {
    // Output to display.
    NSLog(@"Hello, World!");
    
    // Store int vars:
    int minutes = 60;
    int hours = 24;
    int days = 365;
    int minutesInAYear = minutes * hours * days;
    
    
    // Output: var is injected into %i placeholder.
    // @ sign is necessary when outputing a string literal.
    NSLog(@"There are %i minutes in a year", minutesInAYear);
}
