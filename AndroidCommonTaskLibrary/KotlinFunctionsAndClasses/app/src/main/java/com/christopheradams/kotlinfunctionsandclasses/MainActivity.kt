package com.christopheradams.kotlinfunctionsandclasses

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    // Make nullable with a ?
    var age: Int? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Call functions:
        test()

        println("**************************************** Functions w/ Params ***************")
        println(sum2(5, 9))
        println("**************************************** Functions w/ Params ***************")

        println("**************************************** Class Inheritence ***************")
        val op = Sum()
        println(op.sum(5, 3))

        // Has access to div func because Sum inherits from Div
        println(op.div(20, 4))
        println("**************************************** Class Inheritence ***************")
    }


    // Sum inherits from Div() so has access to Div functions.
    class Sum:Div() {
        fun sum(a: Int, b: Int): Int {
            return a + b
        }
    }

    open class Div {
        fun div(a: Int, b: Int): Int {
            return a / b
        }
    }

    // Functions:
    fun test() {
        println("**************************************** Functions ***************")
        val x = 5 * 4
        println(x)
        println("**************************************** Functions ***************")
    }

    // Function with params that returns an Int
    fun sum2(a: Int, b: Int): Int {
        return a + b
    }


    fun helloWorld(view: View) {
        // Change the textView when clicking the button
        textView.text = "Hello World"
    }

    fun makeSimpson(view: View) {
        // Make instance of a Simpson:
        val homer = Simpson("Homer Simpson", 50, "Nuclear Safety")
        homer.age = 51
        println("**************************************** Class example ***************")
        println("Homers age: " + homer.age)
        println("**************************************** Class example ***************")

        val name = nameText.text.toString()

        if (!ageText.text.toString().equals("")) {
            age = ageText.text.toString().toInt()
        }

        val job = jobText.text.toString()

        // Get input from user and pass it to our Simpson class:
        val simpson = Simpson(name, age, job)

        // Update textView UI to show user data has been updated.
        textView.text = "Name: " + simpson.name + " Age: " + simpson.age + " Job: " + simpson.job
    }
}
