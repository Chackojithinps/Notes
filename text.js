// function func() {
// 	let a = 'Geeks';
	
// 	if (true) {
// 		 a = 'GeeksforGeeks'; // New value assigned
// 		console.log(a);
// 	}
	
// 	console.log(a);
// }
// func();

// -------------------------------------------------------------->

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const k = fruits.toString()
// console.log(k)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const k = fruits.join()
// console.log(k)


// const numbers1 = [45, 4, 9, 17, 25];

// const num = numbers1.filter((val)=>val>10)
// console.log(num)

// const num2 = numbers1.reduce((val,total)=>{
//    return total+val
// },0)

// console.log(num2)


// var total = 0;
// const num3 = numbers1.map((val)=>{
    
//     total += val
//     return total
// })
// console.log("Num3:" , num3)

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 44;
// }
// console.log("someover", someOver18)
// const num = numbers1.map((val,index,arr)=>{
//     return val*index
// })
// console.log(num)

// const num = numbers1.map((val)=>(
//     // val*2,
//     val*3
// )
    
// )
// console.log(num)

// const kiran={
//     first:["kiran","rahul"],
//     second:["java","js","mongodob"]
// }

// const k = kiran.second.map((val)=>{
//     if(val=="js"){
//         return "PYTHON"
//     }
//     if(val == "java"){
//        return "JAVA"
//     }
//     return val
// })
// console.log(k)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(1,8,"kiran")
// console.log(fruits)

// const k ="jithin chacko"

// const l = k.slice(2,5)
// console.log(l)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const k = fruits.slice(2,3)
// console.log(k)
// function sub(){
//     return "sub"
// }
// function add(newFun){
//     console.log("added")
//      return newFun()
// }
// var k = add(sub)
// console.log(k)

// setTimeout(()=>{
//     console.log("kiran")
// },1000)

// var i=1
// const intervel = setInterval(()=>{
    
//     console.log(i)
//     i++;
//     if(i==5){
//         clearInterval(intervel)
//     }
// },0)



// setTimeout(() => {
//   console.log("Hello")
// }, 1000);

// setTimeout(() => {
//     console.log("Kiran")
// }, 500);


// const arr1 = [2,4,5,6,7]
// const arr2 = [ 10,23,58,69,34,56,77]

// const arr3 = []
// var k=0; var j =0;
// var n= arr1.length + arr2.length
// for(var i=0;i<n;i++){
//    if(k>=arr1.length){
//       arr3[i]=arr2[j]
//       j++;
//    }else if(j>=arr2.length){
//      arr3[i]=arr1[k]
//      k++;
//    }
//    else if(i%2==0){
//       arr3[i]=arr1[k];
//       k++;
//    }else{
//      arr3[i]= arr2[j];
//      j++;
//    }
// }
// console.log(arr3)

// const word = "hello jithin"  


// const k = word.split("").reverse().join("").split(" ").reverse().join(" ")

// console.log(k)

// const arr= [1000,21,53,66,13,67,90,33,23]

// let sm=arr[0]
// let ssm= Infinity
// let lg= arr[0];
// let llg= 0;

// for(var i=1;i<arr.length;i++){
//    if(arr[i]>lg){
//      llg=lg
//      lg=arr[i];
     
//    }else if(arr[i]>llg){
//      llg=arr[i]
//    }
//    if(arr[i]<sm){
//      ssm=sm;
//      sm=arr[i];
//    }else if(arr[i]<ssm){
//      ssm=arr[i]
//    }
// }
// console.log("smallest",sm)
// console.log("largest",lg)
// console.log(ssm)
// console.log(llg)
// console.log(ssm+llg)

// Implicit Type Coercion: Number to String
// let num = 42;
// let str =  num+"";
// console.log(typeof(str))
// console.log(str); // Output: "The answer is: 42"


// const A=(callback)=>{
//    setTimeout(()=>{
    
//        callback(5)
//    },1000)
// }
// const B= (callback)=>{
//     setTimeout(() => {
       
//         callback(10)
//     }, 1000);
// }
// const c= (callback)=>{
//     setTimeout(() => {
//        callback(15) 
//     }, 1000);
// }

// A((value)=>{
//     B((value2)=>{
//         c((value3)=>{
//             console.log(value+value2+value3)
//         })
//     })
// })

// const add=(num1,num2)=>{
//     return Promise((res,rej)=>{
//         if(num1==0){
//             rej("error")
//         }
//         res(num1+num2);
//     })
// }
// add(10,20).then((sum)=>{
//    console.log(sum)
// })
// .catch((err)=>{
//     console.log("err")
// })


// const promise = new Promise((resolved, rejected)=>{
//     if(conditon==true){
//         resolved("")
//     }
//     rejected("")
// })
// promise.then((res)=>{
//     console.log(res)
// }).catch("djfds;flkd")

// const add=(num1,num2)=>{
//     return Promise((resolve,reject)=>{
//         if()
//     })
// }