/* Importing the hello-message.js file from the messages folder. */
const hello = require("./messages/hello-message");

/* Importing the sayHelloTo function from the say-hello-to.js file. */
const { sayHelloTo } = require("./send-messages/say-hello-to");

/* Importing the giveMessageToMrsPotato function from the give-message-to-mrs-potato.js file. */
const { giveMessageToMrsPotato } = require("./send-messages/give-message-to-mrs-potato");

/* Importing the msg1, msg2, and msg3 variables from the index.js file in the messages folder. */
const { msg1, msg2, msg3 } = require("./messages/index");

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
