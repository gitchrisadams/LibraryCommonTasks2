using ClassesObjects;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades.Test
{
    [TestClass]
    public class GradeBookTests
    {
        /// <summary>
        /// Tests the computation of the highest grade.
        /// </summary>
        [TestMethod]
        public void ComputesHighestGrade()
        {
            /// Create a new GradeBook object:
            GradeBook book = new GradeBook();

            /// Pass in some grades:
            book.AddGrade(10);
            book.AddGrade(90);

            /// Create GradeStatistics object and 
            /// compute the statistics. 
            GradeStatistics result = book.ComputeStatistics();

            /// Test w/ Assert that the highest grade is 90:
            Assert.AreEqual(90, result.HighestGrade);
        }

        /// <summary>
        /// Tests the computation of the lowest grade.
        /// </summary>
        [TestMethod]
        public void ComputesLowestGrade()
        {
            /// Create a new GradeBook object:
            GradeBook book = new GradeBook();

            /// Pass in some grades:
            book.AddGrade(10);
            book.AddGrade(90);

            /// Create GradeStatistics object and 
            /// compute the statistics. 
            GradeStatistics result = book.ComputeStatistics();

            /// Test w/ Assert that the lowest grade is 10:
            Assert.AreEqual(10, result.LowestGrade);
        }

        /// <summary>
        /// Tests the computation of the Average grade.
        /// </summary>
        [TestMethod]
        public void ComputesAverageGrade()
        {
            /// Create a new GradeBook object:
            GradeBook book = new GradeBook();

            /// Add grades:
            book.AddGrade(91);
            book.AddGrade(89.5f);
            book.AddGrade(75);

            /// Create GradeStatistics object and 
            /// compute the statistics. 
            GradeStatistics result = book.ComputeStatistics();

            /// Test w/ Assert that the Average grade is 90:
            /// Third arg is a delta value which says that 85.16
            /// must be close to result by 0.01. This enables us
            /// to more easily test floating point values.
            Assert.AreEqual(85.16, result.AverageGrade, 0.01);
        }
    }
}
