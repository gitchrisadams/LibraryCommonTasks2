using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            /// Create a new GradeBook Object:
            GradeBook book = new GradeBook();

            /// Add grades:
            book.AddGrade(91);
            book.AddGrade(89.5f);  

        }
    }
}
