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
            /***** break/continue example *****/
            int[] ages = { 40, 50, 60, 2, 60, 70, 21, 88, 99 };

            foreach(int age in ages)
            {
                if(age == 2)
                {
                    Console.WriteLine("Skipping command at end of foreach(continue)");
                    continue;
                }
                if(age == 21)
                {

                    Console.WriteLine("Breaking out of loop, done completely w/ loop.");
                    break;
                }

                // This will not be executed if age equals 2:
                Console.WriteLine("Got to end of foreach");
                Console.WriteLine($"Age is {age}.");
            }
            Console.WriteLine("****************************************************************");

            /***** goto example: *****/
            int[] ages2 = { 20, 30, 40, 70, 100 };

            foreach(int age2 in ages2)
            {
                if(age2 == 30)
                {
                    goto skip;
                }

                // If age is 30 then this line is skipped.
                // And execution goes directly to skip statement.
                Console.WriteLine($"Age is {age2}.");

                skip:
                    Console.WriteLine("Bottom of loop reached.");
            }

            // Test returning from a Loop method:
            ComputeAges();

         
        }

        /***** Returning out of a method from a loop *****/
        public static void ComputeAges()
        {
            int age = 21;
            //int age = 20;

            if (age == 21)
            {
                Console.WriteLine("Age is 21 so returning...");
                return;
            }

            // This won't be reached if age is 21:
            Console.WriteLine("Age is not 21");


        }

    }
}
