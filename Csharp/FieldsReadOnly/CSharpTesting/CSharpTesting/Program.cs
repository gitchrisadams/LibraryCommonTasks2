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
            TestMainProgram myProg = new TestMainProgram("Chris");

            // We can't access myProg.name, uncomment to see:
            //myProg.

            // But we can access the method that displays the name.
            myProg.displayName();

        }

    }

    public class TestMainProgram
    {
        // Private read only field:
        // This can only be set be the constructor.
        private readonly string _name;

        // Constructor:
        public TestMainProgram(string name)
        {
            _name = name;
        }

        // Method to display the name:
        public void displayName()
        {
            Console.WriteLine($"My name is {_name}." );
        }

    }
}
