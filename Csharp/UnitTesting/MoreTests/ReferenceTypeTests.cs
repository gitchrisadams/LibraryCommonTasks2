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
        public void VariablesHoldAReference()
        {

            GradeBook g1 = new GradeBook();

            GradeBook g2 = g1;

            g1.name = "Scott's grade book";

            // Test g1 is equal to g2:
            Assert.AreEqual(g1.name, g2.name);
        }
    }
}
