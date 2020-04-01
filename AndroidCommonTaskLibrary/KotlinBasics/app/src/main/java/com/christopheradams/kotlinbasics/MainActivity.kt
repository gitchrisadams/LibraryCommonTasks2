package com.christopheradams.kotlinbasics

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Variables:
        println("**************************************** Variables ***************")
        var x = 5 // Mutable
        val y = 4   // Constant
        println (x * y)
        println("test test test")
        println("**************************************** Variables ***************")

        // Variable Types:
        println("**************************************** Variable Types ***************")
        val myInteger : Int = 5
        val myDouble : Double = 5.0
        val myName : String = "Chris"
        var isAlive : Boolean = true
        println("**************************************** Variable Types ***************")

        // Arrays:
        println("**************************************** Arrays ***************")
        // Array w/ a specified size:
        val myArray = arrayOfNulls<String>(4)
        myArray[0] = "James"
        myArray[1] = "Lars"
        myArray[2] = "Kirk"
        myArray[3] = "Rob"
        println("myArray 0: " + myArray[0])

        // Array without specifying size, just adding elements to it
        val myNumberArray = intArrayOf(10, 20, 30)
        println(myNumberArray.size)
        myNumberArray.set(0,40)
        println("el0 after set: " + myNumberArray.get(0))
        println("**************************************** Arrays ***************")

        // Lists, Array without having to define initial capacity
        println("**************************************** Lists ***************")
        val myMusician = ArrayList<String>()
        myMusician.add("James")
        myMusician.add("Lars")
        println(myMusician)
        myMusician.add(1, "Kirk")
        println(myMusician)
        println("**************************************** Lists ***************")

        // Sets, unique
        println("**************************************** Sets ***************")
        val mySet = HashSet<String>()
        mySet.add("Kirk")
        mySet.add("Kirk")
        println("mySet size: " + mySet.size)
        println("**************************************** Sets ***************")

        // Maps / Dictionaries
        println("**************************************** Maps ***************")
        val myHasMap = HashMap<String, String>()
        myHasMap.put("name", "James")
        myHasMap.put("instrument", "guitar")
        println(myHasMap["instrument"])
        println("**************************************** Maps ***************")


        // Conditionals:
        println("**************************************** Conditionals ***************")
        val m = 5
        val n = 6
        // If, if else, and else:
        if (m < n) {
            println("m is less than n")
        } else if (m > n) {
            println("No m is greater than n")
        } else {
            println("Hit else")
        }

        val day = 1
        var dayString = ""

        // Switch:
        when (day) {
            1 -> dayString = "Monday"
            2 -> dayString = "Tuesday"
            3 -> dayString = "Wednesday"
            else -> dayString = "Sunday"
        }

        // Template String:
        println("day $day is $dayString")
        println("**************************************** Conditionals ***************")

        // Loops:
        println("**************************************** Loops ***************")
        var myNumbers = intArrayOf(12, 15, 18, 21, 24)
        val q = myNumbers[0] / 3 * 5
        println("myNumbers result: " + q)

        // for loop:
        for (number in myNumbers) {
            val z = number / 3 * 5
            println("result z: " + z)
        }

        // for loop using indices:
        for (i in myNumbers.indices) {
            println("index: " + i)
            println("Value:" + myNumbers[i])
        }

        // for loop in range:
        for (a in 0..9) {
            println(a)
        }

        // While loops:
        var j = 0
        while (j < 10) {
            val x = j * 10
            println(x)
            j++
        }

        println("**************************************** Loops ***************")
    }
}
