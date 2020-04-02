package com.christopheradams.kotlinsimplecalculator

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun sum(view: View) {
        val a = number1.text.toString().toInt()
        val b = number2.text.toString().toInt()
        val result = a + b
        resultText.text = "Result: $result"
    }

    fun sub(view: View) {5
        val a = number1.text.toString().toInt()
        val b = number2.text.toString().toInt()
        val result = a - b
        resultText.text = "Result: $result"
    }

    fun mult(view: View) {
        val a = number1.text.toString().toInt()
        val b = number2.text.toString().toInt()
        val result = a * b
        resultText.text = "Result: $result"
    }

    fun div(view: View) {
        val a = number1.text.toString().toInt()
        val b = number2.text.toString().toInt()
        val result = a / b
        resultText.text = "Result: $result"
    }

}
