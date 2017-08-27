//
//  AdventureVC.swift
//  Z-Files Story Book
//
//  Created by Christopher Adams on 8/27/17.
//  Copyright © 2017 ChristopherAdams.com. All rights reserved.
//

import UIKit

class AdventureVC: UIViewController {

    @IBOutlet weak var adventureTitleLbl: UILabel!
    
    
    @IBAction func backBtnPressed(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    // For the selected adventure passed to this screen.
    private var _selectAdventure:String!
    
    // Getter/Setter for private var we created above.
    var selectedAdventure : String {
        get {
            return _selectAdventure
        } set {
            _selectAdventure = newValue
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Set the selected label title to the selected adventure. Unwrapp it with !
        adventureTitleLbl.text = _selectAdventure!
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
