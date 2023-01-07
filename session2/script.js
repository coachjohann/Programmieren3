let obj = {
    //first_name, last_name ...
    first_name: "sabine",
    last_name: "co",
    sayHello() {
        console.log("Hello", this.first_name, this.last_name);
    }
 }
 
 console.log(obj);
 console.log(obj.first_name);
 obj.sayHello();

//  let test = JSON.stringify(obj);
//  console.log("JSON: ", test.first_name);
//  let jsObj = JSON.parse(test);
//  console.log("JS Objekt: ", jsObj.first_name);