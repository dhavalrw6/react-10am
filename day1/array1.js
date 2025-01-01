
let obj = {
    "12345" : {
        "username":"Dhaval",
        "email":"dhaval@gmail.com",
        "password":"dhaval@123"
    },
    "12346":{
        
        "username": "raj",
        "email": "raj@gmail.com",
        "password": "raj@123"
    },
    "12347":{
        
        "username": "kunal",
        "email": "kunal@gmail.com",
        "password": "kunal@123"
    },
    "12348":{
        
        "username": "kajal",
        "email": "kajal@gmail.com",
        "password": "kajal@123"
    }
}

// map

// arr.map((val,idx)=>{
//     console.log(val.username +" "+val.password);  
// })

// for(let i=0;i< obj.length ; i++){
//     console.log(obj);    
// }

// let data = obj.keys()
// console.log(data);

let data = Object.keys(obj).map((key)=> ({ "id" : key, ...obj[key] }) )

console.log(data);

data.map((val)=>{
    console.log(val.username +" "+val.password);    
})


// arr.push(10);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.pop();
// arr.shift();

