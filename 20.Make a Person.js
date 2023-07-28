const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.setFirstName = function(first) {
        firstName = first;
    };
    this.setLastName = function(last) {
        lastName = last;
    };
    this.setFullName = function(first, last) {
        firstName = first;
        lastName = last;
    }
  };

  
const bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell")
console.log(bob.getFullName());
bob.setLastName('Curry')
console.log(bob.getFullName());
bob.setFullName('Emily Martinez', 'de la Rosa')
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());