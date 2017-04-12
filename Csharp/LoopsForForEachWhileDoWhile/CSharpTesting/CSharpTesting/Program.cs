using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpTesting
{
    public class Program
    {
        static void Main(string[] args)
        {
            /***** foreach loop example: *****/
            int[] ages = { 2, 21, 40, 72, 100 };

            // Loop through ages array, display each age.
            foreach(int age in ages)
            {
                Console.WriteLine($"You are {age} years old.");
            }

            /***** Normal for loop example *****/
            int myCurrentAge = 40;

            for(int i = 1; i <= myCurrentAge; i++)
            {
                Console.WriteLine($"Counting up to my age: {i}.");
            }
            
            /***** While Loop example *****/
            // Count down from current age to 1:
            while(myCurrentAge > 0)
            {
                Console.WriteLine(myCurrentAge);
                myCurrentAge -= 1;
            }

            /***** do while Loop example *****/
            // Count up as long as the age is less than 100.
            do
            {
                Console.WriteLine("Counting up again... " + myCurrentAge);
                myCurrentAge++;
            } while (myCurrentAge < 100);

        }

    }
}
