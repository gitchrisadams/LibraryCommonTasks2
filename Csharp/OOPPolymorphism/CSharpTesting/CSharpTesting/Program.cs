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
            // Create Objects:
            A myAObj = new A();
            B myBObj = new B();

            // Call the DoWork off object A:
            myAObj.DoWork();

            // Call the DoWork() off object B:
            // This should use the overriden DoWork()
            // then call the base class.
            myBObj.DoWork();
        }
    }

    // The Base/Super class:
    public class A
    {
        public virtual void DoWork()
        {
            Console.WriteLine("Doing some work in class A!");
        }
    }

    // Class B inherites from class A:
    public class B : A
    {
        // Ovveride the DoWork() in the base class.
        // NOTE: Base class must be defined as virtual.
        public override void DoWork()
        {
            Console.WriteLine("Doing work in class B");

            // Call the base class:
            Console.WriteLine("Calling the base class now...");
            base.DoWork();

        }
    }

}
