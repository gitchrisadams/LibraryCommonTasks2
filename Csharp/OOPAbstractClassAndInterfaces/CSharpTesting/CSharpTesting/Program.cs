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
            // Social Network is abstract so can't do this:
            //SocialNetwork soc = new SocialNetwork();

            // Now that we have a Twitter class based off the
            // abstract SocialNetwork class, we can make a Twitter object.
            SocialNetwork soc = new Twitter();

            // Create byte array for passing in:
            byte[] mybyte = {1};

            // Call Methods in the Abstract class:
            soc.Login("chrismichaeladams@gmail.com");
            soc.Post("Posting a message");
            soc.Post(mybyte, "My byte");
            Console.WriteLine(soc.WhoAmI());

            // Create a new chat app based off IChatApp interface
            // which uses the SnapChat class.
            IChatApp mychatApp = new SnapChat();

            // Use the interface:
            mychatApp.Post("My message Post");
            mychatApp.Login("chrismichaeladams@gmail.com");
            Console.WriteLine(mychatApp.EmailAddress); 

        }
    }

    // Create abstract class:
    public abstract class SocialNetwork
    {
        // Properties:
        public virtual string EmailAddess { get; set; }


        public virtual int AllowedNumberOfCharacters
        {
            get
            {
                return 140;
            }
        }

        public virtual string WhoAmI()
        {
            return EmailAddess;
        }

        // Abstract properties:
        public abstract bool Login(string emailAddress);

        public abstract void Post(string message);

        public abstract void Post(byte[] photo, string message);
    }

    // Create a Twitter based off the Abstract class
    // SocialNetwork.
    // Since Twitter implements an abstract class,
    // it must implement:
    // Login and both Post methods.
    public class Twitter : SocialNetwork
    {
        // All required abstract methods are now implemented:
        public override bool Login(string emailAddress)
        {
            // Code to Login here.
            this.EmailAddess = emailAddress;

            Console.WriteLine($"{emailAddress} is logging in.");

            return true;
        }

        public override void Post(string message)
        {
            // Code to Post here.
            Console.WriteLine("Posting to Twitter");
        }

        public override void Post(byte[] photo, string message)
        {
            // Code to Post photo here.
            Console.WriteLine("Posting a photo...");
        }
    }

    // Make an IChatApp Interface:
    public interface IChatApp
    {
        string EmailAddress { get; set; }

        int AllowedNumberOfCharacters { get; }

        bool Login(string emailAddress);

        void Post(string message);

        void Post(byte[] photo, string message);
    }

    // Make a SnapChat App that inherits from Interface:
    public class SnapChat : IChatApp
    {
        // Implement the required methods of the Interface:
        public int AllowedNumberOfCharacters
        {
            get
            {
                return 140;
            }
        }

        public string EmailAddress
        {
            get
            {
                return "chrismichaeladams@gmail.com";
            }

            set
            {
                // Set email here.
            }
        }

        public bool Login(string emailAddress)
        {
            Console.WriteLine($"Logging in: {emailAddress}");
            return true;
        }

        public void Post(string message)
        {
            Console.WriteLine($"The Post message: {message}");
        }

        public void Post(byte[] photo, string message)
        {
            // Post photo code here.

        }
    }
}
