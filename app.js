//  This a simple Class "Actor" 

class Actor {
  constructor(name) {
    this.name = name;
  }

  Act() {
    console.log("\nMy name is "+ this.name +". I am an Actor");
  }
}

let actor = new Actor("ryan reynolds");
actor.Act();


//extending the above  Actor class:inheritance

class action extends Actor {
  constructor(name) {
    super(name); 
  }

  Act() {
    super.Act();
    console.log("action");
   
  }
}
   

let actor2 = new action("ryan reynolds");
actor2.Act();
actor2.purpose

//  polymorphism extension of the class

class client extends Actor {
        constructor (name, client) {
          super(name);
          this._client = client;
        }
        
     Act() {
    super.Act();
    console.log("I Act for "+ this._client);
  }
  }
  
let actor3 = new client("ryan reynolds","marvel comics");
actor3.Act();
  
  // Encapsulation : like protecting a function or class from outside interference
  
  class movieRoles {
    constructor(movieRoles, number) {
        Object.assign(this, {
            total() {
                
                if (number >= 7) {
                    number();
                }
              
            }
        });
    }
}
  
 let totalRoles = new movieRoles(10, () => console.log('i feature in more than 7 movieRoles per season'));
totalRoles.total();
  
  
  
  