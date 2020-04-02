package com.christopheradams.kotlinintentsnavigatingtoactivity

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_main2.*

class Main2Activity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main2)

        // Receive extra data from other activity:
        val intent = intent
        val received: String = intent.getStringExtra("input")

        // Put that text into textView 2 element:
        textView.text = received

    }

    fun goBack(view: View) {
        // Going to another activity
        val intent = Intent(applicationContext, MainActivity::class.java)
        startActivity(intent)
    }
}
