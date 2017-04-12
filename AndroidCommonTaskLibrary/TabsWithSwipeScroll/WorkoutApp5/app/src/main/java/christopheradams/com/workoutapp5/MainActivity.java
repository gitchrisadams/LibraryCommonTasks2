package christopheradams.com.workoutapp5;

import android.content.Context;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity
{
    // Make reference to our tabLayout and ViewPager elements:
    TabLayout tabLayout;
    ViewPager viewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect UI elements in XML to our code:
        viewPager = (ViewPager) findViewById(R.id.viewPager);
        tabLayout = (TabLayout) findViewById(R.id.tabLayout);

        // Set adapter for our ViewPager:
        viewPager.setAdapter(new CustomAdapter(getSupportFragmentManager(), getApplicationContext()));

        // Setup the view pager by passing it in:
        tabLayout.setupWithViewPager(viewPager);

        // To Display what tabe we are on:
        tabLayout.addOnTabSelectedListener(
            new TabLayout.OnTabSelectedListener(){
                @Override
                public void onTabSelected(TabLayout.Tab tab)
                {
                    // Set the current tab we are on:
                    viewPager.setCurrentItem(tab.getPosition());
                }

                @Override
                public void onTabUnselected(TabLayout.Tab tab)
                {
                    // Set the current tab we are on:
                    viewPager.setCurrentItem(tab.getPosition());
                }

                @Override
                public void onTabReselected(TabLayout.Tab tab)
                {
                    // Set the current tab we are on:
                    viewPager.setCurrentItem(tab.getPosition());
                }
            }

        );

    }

    /** Inner class for our custom ViewPager **/
    private class CustomAdapter extends FragmentPagerAdapter
    {
        // String array to hold names of the fragments:
        private String fragments [] = {"Fragment 1", "Fragment 2"};

        public CustomAdapter(FragmentManager supportFragmentManager, Context applicationContext)
        {
            // Call super class:
            super(supportFragmentManager);
        }

        /* Necessary methods for this CustomAdapter class: */
        @Override
        public Fragment getItem(int position)
        {
            // Get the fragments:
            switch(position){
                case 0:
                    return new Fragment1();
                case 1:
                    return new Fragment2();
                default:
                    return null;
            }
        }

        @Override
        public int getCount()
        {
            // Return the size of the fragments array:
            return fragments.length;
        }


        @Override
        public CharSequence getPageTitle(int position){
            // Return the position of the fragments:
            return fragments[position];
        }
    }
}
