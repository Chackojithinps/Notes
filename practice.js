// const getApi=(callback)=>{
//   setTimeout(()=>{
//     callback(5)
//   },1000)
// }

// const getApi1=(callback)=>{
//    setTimeout(()=>{
//      callback(10)
//    },1000)
//  }

//  const getApi2=(callback)=>{
//    setTimeout(()=>{
//      callback(15)
//    },1000)
//  }

// //  getApi((value)=>{
// //     console.log(value)
// //     getApi1((value)=>{
// //       console.log(value)
// //       getApi2((value)=>{
// //          console.log(value)
// //       })
// //     })
// //  })


// const getData1 = () =>{
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve("hello")
//       },1000)
//    })
// }

// const getData2 = () =>{
//    return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//           resolve("haaiii")
//        }, 2000);
//    })
// }

// getData1().then((res)=>{
//    console.log(res)
//    return getData2()
// }).then((res)=>{
//    console.log(res)
// })


// const promise1=new Promise((res,rej)=>{
//    rej("rejected w1")
// })
// const promise2 = new Promise((res,rej)=>{
//    rej("rejected 1")
// })
// let promiseall = Promise.race([promise1,promise2])
// promiseall.then((res)=>{
//    console.log(res)
// }).catch((err)=>{
//    console.log(err)
// })



// const person = {
//    firstName:"John",
//    lastName: "Doe",
//    fullName: function () {
//      return this.firstName + " " + this.lastName;
//    }
//  }
 
//  const member = {
//    firstName:"Hege",
//    lastName: "Nilsen",
//  }

// let k = person.fullName.bind(member)
// console.log(k())

// // const getFun()
// // getFun(10,20,30)
// const getFun=(num)=>{
//     return function(num1){
//          return function(num2){
//             return num+num1+num2
//          }
//     }
// }
// const addOne = getFun(3)
// const addTwo = addOne(5)
// const result = addTwo(10)
// console.log(result)

// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5];

// console.log(array1);


// const orginalCopy = {
//    name:"jithin",
//    lname :"ps",
//    subjects:["maths","english"]
// }
// deepcopy = JSON.parse(JSON.stringify(orginalCopy))

// console.log(orginalCopy)
// console.log(deepcopy)

// deepcopy.subjects.push("Biology")
// console.log("-------------")
// console.log(orginalCopy)
// console.log(deepcopy)

// const set =  new Set()

// set.add(1)
// set.add(2)
// set.add(3)

// console.log(set.has(5))
// for(let val of set){
//    console.log(val)
// }

// let arr = [10,19,49,50]
// for(var value in arr){
//    console.log(value)
// }

// const person = {
//    name: "John",
//    age: 30,
//    job: "Developer",
// };

// for(let value in person){
//    console.log(value,person[value])
// }

function* generator(){
   let a=1;
   while(a<5){
      yield ++a;
   }
}

const generate = generator()
console.log(generate.next().value)
console.log("Hello")
console.log(generate.next().value)
console.log(generate.next().value)