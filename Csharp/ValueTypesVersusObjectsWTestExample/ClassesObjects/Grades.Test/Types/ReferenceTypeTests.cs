using ClassesObjects;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades.Test.Types
{
    [TestClass]
    public class ReferenceTypeTests
    {
        [TestMethod]
        public void IntVariablesHoldAValue()
        {
            // Create an int variable then assign x1 to x2:
            int x1 = 100;
            int x2 = x1;

            // Change value of x1:
            x1 = 4;

            // Test if x1 and x2 are still equal.(They shouldn't be)
            // Because value types like int are not like Objects.
            //Assert.AreEqual(x1, x2);

            // To get to pass, we could do areNotEqual:
            Assert.AreNotEqual(x1, x2);
        }

        [TestMethod]
        public void GradeBookVariablesHoldAReference()
        {
            GradeBook g1 = new GradeBook();
            GradeBook g2 = g1;
            g1.name = "Scott's grade book";

            // Test g1 is equal to g2:
            Assert.AreEqual(g1.name, g2.name);
        }
    }
}
