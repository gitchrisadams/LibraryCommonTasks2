function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
}

/** The Prototype has access to the functions properties
 even though it is not inside the message function. */
Message.prototype.show = function(){
    console.log('To: ' + this.recipient + 'Subject: ' + this.subject + 'Message: ' +
    this.content);
};

var myEmail = 
    new Message('Javascript is cool ', 'you@gmail.com ', 'Prototype is useful ');

myEmail.show();