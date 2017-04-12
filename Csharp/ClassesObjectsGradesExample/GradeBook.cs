using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesObjects
{
    class GradeBook
    {
        /// Create a Method to calculate a grade:
        /// Takes in an float grade parameter.
        public void AddGrade(float grade)
        {
            /// Add the grade being passed in to this
            /// this method to the grades list.
            grades.Add(grade);
        }

        /// Create a List to hold the grades:
        List<float> grades = new List<float>();


    }
}
