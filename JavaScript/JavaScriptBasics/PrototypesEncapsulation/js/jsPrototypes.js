/** Constructor */
function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
}

/** Using Prototypes and Encapsulation we can allow
every Message object created to have access to the
sendMessage and show methods. This combines the constructor
inside the prototype. */
Message.prototype = {
    constructor: Message,

    sendMessage: function(){
                    console.log('Sending message to ' + this.recipient);
                },

    show : function(){
                console.log('To:' + this.recipient + 'Subject: ' 
                    + this.subject + 'Message:'
                    + this.content);
            }
};

/** Create Message objects, passing in properties: */
var workMessage = new Message('Work complete', 'boss@mycorp.com', 'My work is done here');
var socialMessage = new Message('Time to go out', 'friend@gmail.com', 'Finished work now.');

/** Test out the methods: */
workMessage.sendMessage();
socialMessage.sendMessage();
workMessage.show();
socialMessage.show();