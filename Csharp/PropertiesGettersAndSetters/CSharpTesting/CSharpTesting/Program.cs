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
            // Create new object:
            TestMainProgram myProg = new TestMainProgram();

            // Set the name w/ the setter:
            myProg.Name = "George";

            // Display the name w/ the getter:
            Console.WriteLine(myProg.Name);

        }

    }

    public class TestMainProgram
    {
        private string _name;

        public string Name
        {
            // Getter:
            get { return _name; }

            // Setter:
            // value is used like a parameter whenever
            // an attempt is made to set _name.
            set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    _name = value;
                }
            }
        }

    }
}
