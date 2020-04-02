package com.christopheradams.kotlinstoringdata

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Shared preferences for storing data:
        val sharedPreferences = this.getSharedPreferences(
            "com.christopheradams.kotlinstoringdata",
            android.content.Context.MODE_PRIVATE
        )

        var age = 30

        // Store in shared preferences:
        //sharedPreferences.edit().putInt("userAge", age).apply()

        // Retrieve from shared prefernces:
        val storedAge = sharedPreferences.getInt("userAge", 0)
        println("StoredAge: $storedAge")

        // Removing an item from shared storage:
        sharedPreferences.edit().remove("userAge").apply()
        println("StoredAge: $storedAge")
    }
}
