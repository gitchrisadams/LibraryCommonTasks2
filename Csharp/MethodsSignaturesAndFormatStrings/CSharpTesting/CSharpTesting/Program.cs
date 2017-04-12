using Microsoft.VisualStudio.TestTools.UnitTesting;
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
            // Create new TestMainProgram object:
            TestMainProgram myProg = new TestMainProgram();

            // Call method that is takes two params:
            myProg.MethodTesting("Chris", 50);

            // Call the overloaded method that takes a variable 
            // number of params, in this case we pass the string
            // and three numbers.
            myProg.MethodTesting("Sara", 33, 33, 44);
        }

    }

    public class TestMainProgram
    {
        public void MethodTesting(string description, int result)
        {
            Console.WriteLine("Description: " + description);
            Console.WriteLine("int: " + result + "\n");

        }

        public void MethodTesting(string description, params float[] result)
        {
            // With concatenation:
            Console.WriteLine("Description: " + description);

            // Example of using Format Strings:
            // {0} is place holder of where text will go. 
            // The colon c {1:C} formats the number with a $ dollar sign.
            foreach(float everyResult in result)
            {
                Console.WriteLine("Description: {0} Result: {1:C}", description, everyResult);
            }

            Console.WriteLine();

            // A different way of using Format Strings. 
            // Notice we can use name of variable but still use things like F2
            // to format it w/ two decimal places.
            Console.WriteLine($"{description}: {result[0]:F2}");
        }

    }
}
