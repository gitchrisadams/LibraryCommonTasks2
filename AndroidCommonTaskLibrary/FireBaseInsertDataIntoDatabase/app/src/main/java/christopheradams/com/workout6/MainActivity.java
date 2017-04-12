package christopheradams.com.workout6;

import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    // Create UI element variables:
    private Button mFirebaseBtn;
    private EditText mNameField;
    private EditText mEmailField;

    // Create database instance for FireBase:
    private DatabaseReference mDatabase;
    private DatabaseReference mDatabaseChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect UI elements to our variables:
        mFirebaseBtn = (Button) findViewById(R.id.firebase_btn);
        mNameField = (EditText) findViewById(R.id.editText_name);
        mEmailField = (EditText) findViewById(R.id.editText_email);

        // Point FireBase to the root directory of our app:
        // https://workoutfirebase-a7d8f.firebaseio.com/ for example.
        mDatabase = FirebaseDatabase.getInstance().getReference();

        // You can also reference the child element of the root:
        // https://workoutfirebase-a7d8f.firebaseio.com/Name for example.
        mDatabaseChild = FirebaseDatabase.getInstance().getReference().child("Name");


        // Create onClick Listener to listen for button press:
        mFirebaseBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Get the text from the EditText UI element, store in String:
                String name = mNameField.getText().toString().trim();

                // Get the text from the Email UI element, store in String:
                String email = mEmailField.getText().toString().trim();

                // Create HashMap to store key value pairs:
                HashMap<String, String> dataMap = new HashMap<String, String>();

                // Store the name and email from EditText in the HashMap:
                dataMap.put("Name", name);
                dataMap.put("Email", email);

                // Create child in the root of firebase root object and set its value:
                // Push the HashMap so it sets the Name and the Email into the database:
                // The .addOnCompleListener part performs action when data is inserted
                // successfully. So a toast message will display.
                mDatabase.push().setValue(dataMap).addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        if(task.isSuccessful()) {
                            Toast.makeText(MainActivity.this, "Data stored successfully", Toast.LENGTH_LONG).show();
                        } else{
                            Toast.makeText(MainActivity.this, "Error storing data!", Toast.LENGTH_LONG).show();
                        }
                    }
                });

            }
        });
    }
}
