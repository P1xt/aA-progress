# Practice: Basic Class Syntax

In this exercise, you will be creating a class by creating a constructor and
defining static and instance methods.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run ```npm install``` to install any dependencies.

## Directions

Implement the following in the __classes/person.js__ file.

Create a class `Person` that has the following:

1. instance variables that include `firstName`, `lastName`, and `age`
2. an instance method called `introduce` that will introduce the person by using
   `console.log` with a string saying, "Hi, I'm `<firstName>` `<lastName>`, and
   I'm `<age>` years old.".
3. a static method called `introducePeople` that will take in an array of
   `Person` instances. 
   
   Have `introducePeople` throw an Error with a message of
   "introducePeople only takes an array as an argument." if the argument is not
   of type `Array`.
   
   Have `introducePeople` throw an Error with a message of
   "All items in array must be Person class instances." if any of the items in
   the array are not instances of the `Person` class.
   
   If no Errors are thrown then `introducePeople` should call `introduce` on 
   each of the `People` instances in the input array.

>Tip: We'll dive into `Errors` in more detail later. For now, just know that
 an `Error` is also a `Class`, and when you throw a new error the
 first argument will be that error's message. 
 Use MDN's [Error Examples][errExp] and [Error Constructor][errCon] 
 to help you out if you're stuck.
 
Run the test specs in the __test/person-spec.js__ file to test that you
have created the `Person` class correctly:

```shell
npm test
```

[errExp]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#examples
[errCon]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error