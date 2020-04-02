package com.christopheradams.kotlinintentsnavigatingtoactivity

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun changeActivity(view: View) {
        // Going to another activity
        val intent = Intent(applicationContext, Main2Activity::class.java)

        // Pass data to the other activity:
        intent.putExtra("input", editText2.text.toString())

        startActivity(intent)
    }
}
