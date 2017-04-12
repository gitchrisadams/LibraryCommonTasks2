using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpTesting
{
    class Program
    {
        static void Main(string[] args)
        {
            // Display that Friday is day 5 using the enum:
            Console.WriteLine(Days.Fri);
        }

        // Create an Enum:
        public enum Days { Sat, Sun, Mon, Tue, Wed, Thu, Fri = 5 };
    }
}
