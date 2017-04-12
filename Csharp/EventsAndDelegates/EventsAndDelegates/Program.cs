using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsAndDelegates
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create objects:
            var video = new Video() { Title = "Video 1" };
            var videoEncoder = new VideoEncoder();  //publisher
            var mailservice = new MailService();    //subscriber
            var messageService = new MessageService();  // subscriber

            // Subscribe mailservice to OnVideoEncoded event.
            videoEncoder.VideoEncoded += mailservice.OnVideoEncoded;

            // Subsribe the text message service to the OnVideEncoded event.
            videoEncoder.VideoEncoded += messageService.OnVideoEncoded;

            // Call the encode method passing in the video:
            videoEncoder.Encode(video);
        }
    }

    /// <summary>
    /// Sends mail once video is finished being encoded.
    /// </summary>
    public class MailService
    {
        public void OnVideoEncoded(object source, VideoEventArgs e)
        {
            // Display that we are sending an email.
            // Use args to output the video title.
            Console.WriteLine("Mail Service: Sending an email... " + e.Video.Title);
        }
    }

    /// <summary>
    /// Sends text message once video is finished being encoded.
    /// </summary>
    public class MessageService
    {
        public void OnVideoEncoded(object source, VideoEventArgs args)
        {
            Console.WriteLine("MessageService: Sending a text message... " + args.Video.Title);
        }
    }
}
