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
