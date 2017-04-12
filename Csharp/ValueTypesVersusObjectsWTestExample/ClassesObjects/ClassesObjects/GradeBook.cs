using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesObjects
{
    /// <summary>
    /// Make Class public so can be used outise of this project.
    /// </summary>
    public class GradeBook
    {
        /// <summary>
        /// Default Constructor:
        /// </summary>
        public GradeBook()
        {
            /// Initialize grades List:
            grades = new List<float>();
        }

        /// <summary>
        /// Computes the grade statistics. 
        /// </summary>
        /// <returns>The grade statistics.</returns>
        public GradeStatistics ComputeStatistics()
        {
            /// Create a new GradeStatistics object:
            GradeStatistics stats = new GradeStatistics();

            /// Variable to store grade total:
            float sum = 0;

            /// Loop through the grades:
            foreach(float grade in grades)
            {
                /// Find highest grade using Math.Max, 
                /// this will accept two values and return highest.
                stats.HighestGrade = Math.Max(grade, stats.HighestGrade);

                /// Do same as above for lowest grade:
                stats.LowestGrade = Math.Min(grade, stats.LowestGrade);

                /// Accumulate the grade:
                sum += grade;        
            }

            /// Calculate the average:
            stats.AverageGrade = sum / grades.Count;

            // Return grade statistic stats to the calling function:
            return stats;
        }

        /// Create a Method to calculate a grade:
        /// Takes in an float grade parameter.
        public void AddGrade(float grade)
        {
            /// Add the grade being passed in to this
            /// this method to the grades list.
            grades.Add(grade);
        }


        // Fields:

        // Storing name string:
        public string name;

        /// Create a List to hold the grades:
        /// Instead of initializing below, we will do 
        /// it in the Constructor above.
        List<float> grades;

        public static string myStaticVar = "Chris";


    }
}
