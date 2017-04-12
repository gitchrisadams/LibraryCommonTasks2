/// Imports:
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            /// Prompt user for their name:
            Console.WriteLine("What is your name: ");

            /// Get input from user:
            string name = Console.ReadLine();

            /// Prompt user:
            Console.WriteLine("How many hours of sleep did you get last night?");
            
            /// Input from user: Convert String to an int.
            int hoursOfSleep = int.Parse(Console.ReadLine());
            
            if(hoursOfSleep > 8)
            {
                Console.WriteLine("You are well rested with " + hoursOfSleep);
            }
            else
            {
                Console.WriteLine("You only got " + hoursOfSleep + " you must be tired!");
            }

            /// Display the param passed into args array:
            Console.WriteLine("Hello " + args[0]);

            /// Display the name from the user input:
            Console.WriteLine("Hello " + name);


        }
    }
}
