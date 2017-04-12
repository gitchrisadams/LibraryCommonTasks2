using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EventsAndDelegates
{
    /// <summary>
    /// This handles passing additional data to the
    /// VideoEncodedEventHandler and is derived from EventArgs class.
    /// </summary>
    public class VideoEventArgs : EventArgs
    {
        // Video property:
        public Video Video { get; set; }
    }

    /// <summary>
    /// Displays message that video was encoded after 3 sec wait.
    /// </summary>
    public class VideoEncoder
    {
        /**** Steps for making so when VideoEncoder is done encoding
             video, it notifies any class of that event. *****/
        // 1 - Define a delegate.
        // 2 - Define event based on that delegate.
        // 3 - Raise the event.

        /***** 1. Define a delegate: ******/
        // First arg should be the source of the event, second arg is any 
        // additional data we want to send to the event.
        public delegate void VideoEncodedEventHandler(object source, VideoEventArgs args);

        /***** 2. Define event based on the delegate. *****/
        public event VideoEncodedEventHandler VideoEncoded;

        // We could also do this and is exactly same as above:
        //public event EventHandler<VideoEventArgs> VideoEncoded;

        // Encode method that accepts a video:
        public void Encode(Video video)
        {
            // Display status message and wait 3 seconds:
            Console.WriteLine("Encoding Video...");
            Thread.Sleep(3000);

            // Call method when encoding is complete:
            // Pass video to the onVideoEncoded() method.
            OnVideoEncoded(video);
        }

        /***** 3. Method responsible for raising the event *****/
        // Convention is to set to protected virtual and have the
        // the name of the event handler prefaced by the world "On"
        protected virtual void OnVideoEncoded(Video video)
        {
            // Check if there are any subscribers to this event:
            if(VideoEncoded != null)
            {
                // Accepts the params (source, args)
                // Source of this event is this class.
                // We can use EventArgs.Empty if not sending additional
                // arguments.
                // In this case we are sending the video.
                VideoEncoded(this, new VideoEventArgs() { Video = video });
            }
        }
    }
}
