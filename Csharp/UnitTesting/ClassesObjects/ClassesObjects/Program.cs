﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Speech.Synthesis;
using System.Text;
using System.Threading.Tasks;

namespace ClassesObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            /// Use System.Speech Assembly/Lib to speak a String:
            /// Note: We had to add this in Object Browser.
            SpeechSynthesizer synth = new SpeechSynthesizer();

            /// Speak text sent as a String:
            synth.Speak("This Grayd book is ill, gangstah");

            /// Create a new GradeBook Object:
            GradeBook book = new GradeBook();

            /// Add grades:
            book.AddGrade(91);
            book.AddGrade(89.5f);
            book.AddGrade(75);

            /// Create a new GradeStatistics Object
            /// and assign the grade statistics returned
            /// from the ComputeStatistics method.
            GradeStatistics stats = book.ComputeStatistics();

            /// Output the Grade stats:
            Console.WriteLine(stats.AverageGrade);
            Console.WriteLine(stats.HighestGrade);
            Console.WriteLine(stats.LowestGrade);

            /// Output example of a static variable:
            Console.WriteLine("Static variable: " + GradeBook.myStaticVar);

        }
    }
}
