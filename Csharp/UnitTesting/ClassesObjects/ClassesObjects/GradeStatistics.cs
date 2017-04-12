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
    public class GradeStatistics
    {
        /// <summary>
        /// Constructor:
        /// </summary>
        public GradeStatistics()
        {
            HighestGrade = 0;

            /// Set to Highest value a float can be set to to start.
            LowestGrade = float.MaxValue;
        }

        public float AverageGrade;
        public float HighestGrade;
        public float LowestGrade;
    }
}
