
// var User = function(firstName){
//     this.firstName = firstName;
//     this.lastName = args[0];
//     this.age = args[1];
// }

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


var myNew = function(className, firstName,lastName){
    return new className(firstName,lastName);
}

var person = new User("Rohit", "Prasad");
console.log(person);


// var admin =  myNew(User,"Abhishek","Jha");

// console.log(admin);
