function Message (subject, recipient, content){
    //private property
    var privateKey = '11111';

    //private method
    function encryptMessage(content){
        return content || privateKey;
    }

    this.subject = subject;
    this.recipient = recipient;
    this.content = content;

    //expose the method
    this.showMessage = showMessage;

    function showMessage(){
        console.log('To: ' + recipient + ' Subject: ' + subject + ' Message:' + content);
    }

    this.sendMessage = sendMessage;

    //public method using a private method
    function sendMessage(){
        console.log(encryptMessage(this.content));
    }
}

/** Testing/Using the method. */
mymessage = new Message('subject', 'recipient', 'test');

mymessage.showMessage();
mymessage.sendMessage();

/** We can't do this below, encrypt is private.
We have to use, show and send message to access it.
This will produce an error if uncommented. */
//mymessage.encryptMessage('test');