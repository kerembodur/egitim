import moment from "moment";
const { DateTime } = require("luxon");

export function sayHello() {
    console.log('Hello! I am imported.');
    msg1();
}


var msg1 = () => { 
    console.log("function invoked");
} 
