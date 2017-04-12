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
            /***** Exception Throwing example *****/
            int age = 21;
            int zero = 0;

            // This will cause an error since exception is not handled.
            //if (age == 21)
            //{
            //    throw new ArgumentException("21 is not a legal value");
            //}


            /**** Try Catch Handle Exceptions example *****/
            // We attempt to divide by zero but since we handled
            // the exception, our program does not crash.
            try
            {
                int divByZero = 21 / zero;
            }
            catch(DivideByZeroException ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
            }
            // Chain another catch block.
            // This is for null Reference exceptions.
            // More specific exeptions like this and above
            // have to before the more generic catches like below.
            catch (NullReferenceException ex)
            {
                Console.WriteLine(ex.Message);
            }

            // Chain on another catch block.
            // Exception is more generic of an exception.
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            // Finally runs if there is an exception or 
            // if there is NOT an exception.
            finally
            {
                Console.WriteLine("Finally ran");
            }

        }
    }
}
