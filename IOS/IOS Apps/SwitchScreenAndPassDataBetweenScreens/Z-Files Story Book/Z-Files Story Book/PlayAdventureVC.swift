//
//  PlayAdventureVC.swift
//  Z-Files Story Book
//
//  Created by Christopher Adams on 8/27/17.
//  Copyright © 2017 ChristopherAdams.com. All rights reserved.
//

import UIKit

class PlayAdventureVC: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        view.backgroundColor = UIColor.blue
    }
    @IBAction func backBtnPressed(_ sender: Any) {
        // Dismiss so it goes back to previous screen.
        dismiss(animated: true, completion: nil)
    }
    
    // Send to another screen, sender is a value we can pass to other screen.
    @IBAction func loadAnotherScreenPressed(_ sender: Any) {
        // Store any value you want to use on next screen.
        let adventureTitle = "Moulders blunder adventure 1"
        
        // The view controller to send to along with variable/value to send.
        performSegue(withIdentifier: "AdventureVC", sender: adventureTitle)
    }
    
    // Send the value as selectedAdventure
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? AdventureVC {
                if let adventure = sender as? String {
                  destination.selectedAdventure = adventure
                }
        }
    }

}
