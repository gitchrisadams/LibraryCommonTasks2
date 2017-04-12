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
            // If Example:
            int age = 21;

            if(age <= 5 && age >= 3)
            {
                Console.WriteLine("You're a toddler");
            }
            else if(age < 2)
            {
                Console.WriteLine("You're a baby");
            }
            else
            {
                Console.WriteLine("You're an alien");
            }


            // Conditional operator / Ternary operator example:
            string pass = age >= 21 ? "pass" : "nopass";

            Console.WriteLine("Condition status: " + pass);

            // Switch example:
            string personStatus = "";

            switch (age)
            {
                case 13:
                    personStatus = "Just became a teenager";
                    break;
                case 21:
                    personStatus = "Drinkin age!";
                    break;
                case 30:
                    personStatus = "youngish adult";
                    break;
                case 40:
                    personStatus = "Getting old!";
                    break;
                case 50:
                    personStatus = "Getting close to retirement";
                    break;
                case 100:
                    personStatus = "Probably dead!";
                    break;
                case 200:
                    personStatus = "Are you from Highlander?";
                    break;
                default:
                    personStatus = "Just your average joe!";
                    break;
            }

            Console.WriteLine($"Your person status is: {personStatus}");
            
        }

    }
}
