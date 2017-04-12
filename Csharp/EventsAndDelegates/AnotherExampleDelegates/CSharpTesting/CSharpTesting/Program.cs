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
            // Create a new Delegate:
            // OnNameChanged is the method that will run when 
            // myChanger passes in params and is invoked.
            NameChangeDelegate myChanger = OnNameChanged;

            // Invoke the delegate:
            myChanger("Chris", "Sara");

            
        }

        // Method used by the Delegate:
        static void OnNameChanged(string existingName, string newName)
        {
            Console.WriteLine($"Grade book changing name from {existingName} to {newName}");
        }

    }

    
    // Define a new delegate:
    public delegate void NameChangeDelegate(string existingName, string newName);


}
