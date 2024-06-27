class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  
const person1 = new Person('Bhuvanesh Metha', 20, 'ICANADA');
const person2 = new Person('Kowsik Raja', 22, 'DUBAI');
const person3 = new Person('Shanmuga Nathan',18 ,'KOREA');
const person4 = new Person('Karneesh Waran',21 ,'LONDON');
const person5 = new Person('Sugethan',20 ,'CHINA');
const person6 = new Person('Shakhul hammed',21 ,'DUBAI');
const person7 = new Person('Abhishek Raj',21 ,'AUSTRALIA');
const person8 = new Person('Bala Krishnan',21 ,'SINGAPORE');


console.log('client-1 :');
person1.displayDetails();
  
console.log('client-2 :');
person2.displayDetails();
  
console.log('client-3  : ');
person3.displayDetails();

console.log('client-4 :');
person4.displayDetails();
  
console.log('client-5 :');
person5.displayDetails();
  
console.log('client-6 :');
person6.displayDetails();
  
console.log('client-7 :');
person7.displayDetails();
  
console.log('client-8  :');
person8.displayDetails();
  


