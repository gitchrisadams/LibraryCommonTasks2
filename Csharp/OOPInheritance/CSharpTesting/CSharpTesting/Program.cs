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
            A myAObj = new A();
            B myBObj = new B();
            C myCObj = new C();

            // B Can call Class A's do work method:
            myBObj.DoWork();

            // C can also call Class a's do work method:
            myCObj.DoWork();
        }
    }

    // The Base/Super class:
    public class A
    {
        public void DoWork()
        {
            Console.WriteLine("Doing some work!");
        }
    }

    // Class B inherites from class A:
    public class B : A
    {

    }

    // Class C inherites from class B so also inherits from Class A.
    public class C: B
    {

    }
}
