//
//  ViewController.swift
//  Z-Files Story Book
//
//  Created by Christopher Adams on 8/27/17.
//  Copyright © 2017 ChristopherAdams.com. All rights reserved.
//

import UIKit

// For playing sounds.
import AVFoundation

class SplashScreenVC: UIViewController {
    // Optional var for playing sound.
    var player = AVAudioPlayer()
    
    @IBOutlet weak var soundOnOffBtn: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        do {
        player = try AVAudioPlayer(contentsOf: URL.init(fileURLWithPath:  Bundle.main.path(forResource: "xfiles", ofType: "mp3")!))
            player.prepareToPlay()
            player.numberOfLoops = -1
            player.play()
        } catch {
            print(error)
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func playXfilesTheme() {
        if player.isPlaying {
            player.stop()
            // Set Background color to green
            soundOnOffBtn.backgroundColor = UIColor.green
            soundOnOffBtn.setTitle("Sound On", for: .normal)
            soundOnOffBtn.setTitleColor(UIColor.black, for: .normal)
        } else {
            player.numberOfLoops = -1
            player.play()
            soundOnOffBtn.backgroundColor = UIColor.red
            soundOnOffBtn.setTitle("Sound Off", for: .normal)
            soundOnOffBtn.setTitleColor(UIColor.white, for: .normal)
        }
    }

    @IBAction func PlayXfiles(_ sender: Any) {
        playXfilesTheme()
    }

}

