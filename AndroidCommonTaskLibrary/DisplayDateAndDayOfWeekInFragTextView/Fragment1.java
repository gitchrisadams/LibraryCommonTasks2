package christopheradams.com.workoutapp5;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Calendar;


/**
 * Created by Christopher on 2/8/2017.
 */
public class Fragment1 extends Fragment
{
    private TextView todayDate;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState)
    {
        View v = inflater.inflate(R.layout.frag1,container,false);

        // Get the current data as a String:
        String todaysDate = getTheDateAsString();

        // Get the current day of the week:
        String todayDayName = getTheDateDayOfWeek();

        // Set the text to the current date:
        setTextTodaysDate(todaysDate, todayDayName, v);

        return v;
    }

    /**
     * getTheDateAsString() method gets the current date as a String.
     * @return The current data as a String.
     */
    public String getTheDateAsString(){
        // Create the dateFormat object:
        DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
        Date date = new Date();

        // Store the current date and return it:
        String currentDate = dateFormat.format(date);
        return currentDate;
    }

    public String getTheDateDayOfWeek(){
        // Create new Calendar instance:
        Calendar now = Calendar.getInstance();

        // Create an array of the days of the week names:
        String[] strDays = new String[]
                { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

        // Return the array index minus 1 since array starts at 0, days start at 1:
        return strDays[now.get(Calendar.DAY_OF_WEEK) - 1];
    }


    public void setTextTodaysDate(String dateToSet, String todayDayName, View theView){
        todayDate = (TextView)theView.findViewById(R.id.textView_today);

        todayDate.setText(dateToSet + " - " + todayDayName);
    }
}
