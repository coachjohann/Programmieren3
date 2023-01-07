let obj = {
    //first_name, last_name ...
    first_name:"Johann",
    last_name:"Mühlbach",
    sayHello() {
        console.log(this.first_name);
    }
 }
 
 console.log(obj);
 console.log(obj.first_name);
 obj.sayHello();
 