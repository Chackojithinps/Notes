// // // function func() {
// // // 	let a = 'Geeks';
	
// // // 	if (true) {
// // // 		 a = 'GeeksforGeeks'; // New value assigned
// // // 		console.log(a);
// // // 	}
	
// // // 	console.log(a);
// // // }
// // // func();

// // // -------------------------------------------------------------->

// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // const k = fruits.toString()
// // // console.log(k)

// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // const k = fruits.join()
// // // console.log(k)


// // // const numbers1 = [45, 4, 9, 17, 25];

// // // const num = numbers1.filter((val)=>val>10)
// // // console.log(num)

// // // const num2 = numbers1.reduce((val,total)=>{
// // //    return total+val
// // // },0)

// // // console.log(num2)


// // // var total = 0;
// // // const num3 = numbers1.map((val)=>{
    
// // //     total += val
// // //     return total
// // // })
// // // console.log("Num3:" , num3)

// // // const numbers = [45, 4, 9, 16, 25];
// // // let someOver18 = numbers.some(myFunction);

// // // function myFunction(value, index, array) {
// // //   return value > 44;
// // // }
// // // console.log("someover", someOver18)
// // // const num = numbers1.map((val,index,arr)=>{
// // //     return val*index
// // // })
// // // console.log(num)

// // // const num = numbers1.map((val)=>(
// // //     // val*2,
// // //     val*3
// // // )
    
// // // )
// // // console.log(num)

// // // const kiran={
// // //     first:["kiran","rahul"],
// // //     second:["java","js","mongodob"]
// // // }

// // // const k = kiran.second.map((val)=>{
// // //     if(val=="js"){
// // //         return "PYTHON"
// // //     }
// // //     if(val == "java"){
// // //        return "JAVA"
// // //     }
// // //     return val
// // // })
// // // console.log(k)

// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // fruits.splice(1,8,"kiran")
// // // console.log(fruits)

// // // const k ="jithin chacko"

// // // const l = k.slice(2,5)
// // // console.log(l)

// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // const k = fruits.slice(2,3)
// // // console.log(k)
// // // function sub(){
// // //     return "sub"
// // // }
// // // function add(newFun){
// // //     console.log("added")
// // //      return newFun()
// // // }
// // // var k = add(sub)
// // // console.log(k)

// // // setTimeout(()=>{
// // //     console.log("kiran")
// // // },1000)

// // // var i=1
// // // const intervel = setInterval(()=>{
    
// // //     console.log(i)
// // //     i++;
// // //     if(i==5){
// // //         clearInterval(intervel)
// // //     }
// // // },0)



// // // setTimeout(() => {
// // //   console.log("Hello")
// // // }, 1000);

// // // setTimeout(() => {
// // //     console.log("Kiran")
// // // }, 500);


// // // const arr1 = [2,4,5,6,7];
// // // const arr2 = [ 10,23,58,69,34,56,77];

// // // const arr3 = []
// // // var k=0; var j =0;
// // // var n= arr1.length + arr2.length
// // // for(var i=0;i<n;i++){
// // //    if(k>=arr1.length){
// // //       arr3[i]=arr2[j]
// // //       j++;
// // //    }else if(j>=arr2.length){
// // //      arr3[i]=arr1[k]
// // //      k++;
// // //    }
// // //    else if(i%2==0){
// // //       arr3[i]=arr1[k];
// // //       k++;
// // //    }else{
// // //      arr3[i]= arr2[j];
// // //      j++;
// // //    }
// // // }
// // // console.log(arr3)

// // // const word = "hello jithin"  


// // // const k = word.split("").reverse().join("").split(" ").reverse().join(" ")

// // // console.log(k)

// // // const arr= [1000,21,53,66,13,67,90,33,23]

// // // let sm=arr[0]
// // // let ssm= Infinity
// // // let lg= arr[0];
// // // let llg= 0;

// // // for(var i=1;i<arr.length;i++){
// // //    if(arr[i]>lg){
// // //      llg=lg
// // //      lg=arr[i];
     
// // //    }else if(arr[i]>llg){
// // //      llg=arr[i]
// // //    }
// // //    if(arr[i]<sm){
// // //      ssm=sm;
// // //      sm=arr[i];
// // //    }else if(arr[i]<ssm){
// // //      ssm=arr[i]
// // //    }
// // // }
// // // console.log("smallest",sm)
// // // console.log("largest",lg)
// // // console.log(ssm)
// // // console.log(llg)
// // // console.log(ssm+llg)

// // // Implicit Type Coercion: Number to String
// // // let num = 42;
// // // let str =  num+"";
// // // console.log(typeof(str))
// // // console.log(str); // Output: "The answer is: 42"


// // // const A=(callback)=>{
// // //    setTimeout(()=>{
    
// // //        callback(5)
// // //    },1000)
// // // }
// // // const B= (callback)=>{
// // //     setTimeout(() => {
       
// // //         callback(10)
// // //     }, 1000);
// // // }
// // // const c= (callback)=>{
// // //     setTimeout(() => {
// // //        callback(15) 
// // //     }, 1000);
// // // }

// // // A((value)=>{
// // //     B((value2)=>{
// // //         c((value3)=>{
// // //             console.log(value+value2+value3)
// // //         })
// // //     })
// // // })

// // // const add=(num1,num2)=>{
// // //     return Promise((res,rej)=>{
// // //         if(num1==0){
// // //             rej("error")
// // //         }
// // //         res(num1+num2);
// // //     })
// // // }
// // // add(10,20).then((sum)=>{
// // //    console.log(sum)
// // // })
// // // .catch((err)=>{
// // //     console.log("err")
// // // })


// // // const promise = new Promise((resolved, rejected)=>{
// // //     if(conditon==true){
// // //         resolved("")
// // //     }
// // //     rejected("")
// // // })
// // // promise.then((res)=>{
// // //     console.log(res)
// // // }).catch("djfds;flkd")

// // // const add=(num1,num2)=>{
// // //     return Promise((resolve,reject)=>{
// // //         if()
// // //     })
// // // }


// // // -----------------------------callback debug media -----------------------------------------

// // // console.log("jithin")
// // // const getData = ()=>{
// // //     setTimeout(()=>{
// // //         return "kiran"
// // //     },1000)
// // // }
// // // const name = getData()
// // // console.log(name)
// // // console.log("helllo")

// // // console.log("jithin")
// // // const getData = (cb)=>{
// // //     setTimeout(()=>{
// // //         cb("kiran")
// // //     },1000)
// // // }
// // // getData((value)=>{
// // //     console.log(value)
// // // })
// // // console.log("helllo")


// // // console.log("jithin")
// // // const getData = (cb)=>{
// // //     setTimeout(()=>{
// // //         cb(5)
// // //     },1000)
// // // }
// // // const getData2 = (cb)=>{
// // //     setTimeout(()=>{
// // //        cb(5)
// // //     },1000)
// // // }
// // // getData((value)=>{
// // //     console.log(value)
// // //     getData2((value1)=>{
// // //         console.log(value+value1)
// // //     })
// // // })
// // // console.log("helllo")


// // // let res = "jithin"
// // // let k = res.split(" ")
// // // console.log(k)
// // // console.log("jithin")

// // // const promise = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //        resolve(5)
// // //     },1000)
// // // })
// // // const promise1 = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //        resolve(10)
// // //     },1000)
// // // })
// // // promise.then((res)=>{
// // //     console.log(res)
// // //     return promise1()
// // // })
// // // console.log("helllo")

// // // const array= [2,4,5,6,7,7,78,8]
// // // let total=1;
// // // const b =array.map((item)=>{
// // //     return total+item
// // // })

// // // console.log(b)


// // // const arr = [10,30]
// // // const res = arr.reduce((total,value)=>{
// // //    return total+value
// // // },0)
// // // console.log(res)
// // // generator function ------------------------

// // // function* generator(){
// // //     let a=2
// // //     while(a<5){
// // //         yield ++a 
// // //     }
// // // }

// // // let generat=generator()
// // // console.log(generat.next().value)

// // // console.log('hello')
// // // console.log(generat.next().value)


// // // const arr = arr1.map((val)=>(
// // //      val*2
// // // ))

// // // const arr = arr1.reduce((total,item)=>(

// // //      total+item
// // // ),0)



// // // -----------------------shadowing=------

// // // const fun=()=>{
// // //    let k = 1;
// // //    {
// // //      let k = 100
// // //      console.log("inner",k)
// // //    }
// // //    console.log("outer ",k)
// // // }
// // // fun()



// // // ----------------------------------------binary search

// // // const arr = [10,20,30,50,60,70,80,90,100]

// // // const binarySearch =()=>{
// // //   var target = 10;
// // //   var start = 0;
// // //   var end = arr.length;
// // //   while(start<end){
// // //     var mid = Math.floor((start + end)/ 2);
// // //     if(arr[mid] == target){
// // //       console.log("index of target value  is ",mid+1)
// // //       break;
// // //     }
// // //     else if(target<arr[mid]){
// // //         end = mid-1;
// // //     }else{
// // //       start = mid+1;
// // //     }
// // //   }
// // // }

// // // binarySearch()




// // // const arr=[50,38,32,29,27,22,20,18,16,17,10,8,3,1]
// // // var start = 0;
// // // var end = arr.length - 1;
// // // var target = 8;

// // // const isAsc=arr[start]<arr[end]

// // // while (start <= end) {
// // //     var mid = Math.floor((start + end)/ 2);
// // //     console.log(mid)
// // //     if(target==arr[mid]){
// // //         console.log(`${target} found at index ${mid}`);
// // //         break;
// // //     }
// // //     if(isAsc){
// // //         if(target < arr[mid]) {
// // //             end = mid - 1;
// // //         }else{
// // //             start = mid + 1;
// // //         }
// // //     }else{
// // //         if(target < arr[mid]) {
// // //             start=mid+1;
// // //         }else{
// // //             end=mid-1
// // //         }
// // //     }
// // // } 

// // // if (start > end) {

// // //     console.log("Value not found");
// // // }

// // // findFib=(num)=>{
// // //    if(num<2){
// // //      return num;
// // //    }
// // //    return findFib(num-1)+findFib(num-2)
// // // }
// // // const res=findFib(6)
// // // console.log(res)

// // // const arr = [10,20,30,50,60,70,80,90,100]

// // // let start = 0;
// // // let end = arr.length-1
// // // let target  = 90
// // // const binarySearch = (start,end) =>{
// // //   var mid = Math.floor((start + end)/ 2);
// // //    if(arr[mid] == target ){
// // //      console.log("target value index is ",mid)
// // //    }else if(target<arr[mid]){
// // //       return binarySearch(start,mid-1)
// // //    }else {
// // //       return binarySearch(mid+1,end)
// // //    }
// // // }

// // // binarySearch(start,end)

// // // const factorial = (n) =>{
// // //    if(n==1){
// // //      return 1
// // //    }
// // //    return n*factorial(n-1)
// // // }
// // // let c = factorial(5)
// // // console.log(c)


// // // function generateArray(n) {
// // //     if (n === 1) {
// // //       return [1];  // Base case: return an array with only 1 when n is 1
// // //     }
  
// // //     // Recursively generate the array for n-1
// // //     const arr =  generateArray(n - 1);
// // //     arr.push(n);  // Add n to the end of the array
// // //     return arr
// // //   }
  
// // //   // Example usage

// // //   var result = generateArray(7);
// // //   console.log(result);
// // // let k = 0; 
// // // let c = 0;
// // // const sum = (n) =>{
// // //   if(n==1){
// // //     return 1;
// // //   }
// // //    c = sum(n-1)
// // //    k = n+c;
// // //   return k
// // // }
// // // const cm = sum(5);
// // // console.log(cm)

// // // let num = 12345;

// // // const findSum = (n) =>{
// // //     if(n<1){
// // //        return 0;
// // //     }
// // //     let sum = Math.floor(n%10) + findSum(n/10)
    
// // //     return sum;
// // // }
// // // console.log(findSum(num))


// // // ____________________________________________STACK

// // // class Node {
// // //     constructor(data){
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }
// // // class Stack{
// // //     constructor(){
// // //         this.top= null;
// // //     }
// // //     addData = (data) =>{
// // //        const newNode = new Node(data)
// // //        if(this.top==null){
// // //          this.top = newNode
// // //          return;
// // //        }
// // //        newNode.next = this.top;
// // //        this.top = newNode
// // //        return
// // //     }

// // //     removeData=()=>{
// // //         if(this.top == null){
// // //             return
// // //         }
// // //         this.top= this.top.next;
// // //         return
// // //     }

// // //     display(){
// // //         var temp = this.top;
// // //         while(temp!=null){
// // //             console.log(temp.data)
// // //             temp = temp.next
// // //         }
// // //     }
// // // }

// // // const stack = new Stack()
// // // stack.addData(10)
// // // stack.addData(20)
// // // stack.addData(30)
// // // stack.removeData()
// // // stack.removeData()
// // // stack.display()



// // // class Node {
// // //     constructor(data){
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }


// // // class Queue{
// // //     constructor(){
// // //         // this.first= null;
// // //         // this.rear
// // //          this.arr1=[]
// // //          this.arr2=[]
// // //     }

// // //     push(data){
// // //          this.arr1.push(data)
// // //     }

// // //     undo(){
// // //         this.arr2.push(this.arr1.pop())
// // //     }
// // //     redo(){
// // //         this.arr1.push(this.arr2.pop())
// // //     }
// // //     Enqueue = (data) =>{
// // //        const newNode = new Node(data)
// // //        if(this.first==null){
// // //          this.first = this.rear = newNode
// // //          return;
// // //        }

// // //        this.rear.next = newNode;
// // //        this.rear = newNode
// // //        return
// // //     }

// // //     Dequeue=()=>{
// // //         if(this.first == null){
// // //             return
// // //         }
// // //         this.first= this.first.next;
// // //         return
// // //     }

// // //     display(){
// // //         // var temp = this.first;
// // //         // while(temp!=null){
// // //         //     console.log(temp.data)
// // //         //     temp = temp.next
// // //         // }
// // //         for(var i=0;i<this.arr1.length;i++){
// // //             console.log(this.arr1[i])
// // //         }
// // //     }
// // // }

// // // const queue = new Queue()
// // // queue.push(10)
// // // queue.push(20)
// // // queue.push(30)
// // // queue.push(40)
// // // queue.push(50)
// // // queue.undo()
// // // queue.undo()
// // // queue.redo()
// // // queue.redo()
// // // queue.redo()
// // // // queue.Dequeue()
// // // // queue.Dequeue()
// // // queue.display()


// // // class Node {
// // //     constructor(data){
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }
// // // class Stack{
// // //    constructor(){
// // //      this.top=null;
// // //    }
// // //    push(data){
// // //     const newNode = new Node(data)
// // //      if(this.top == null){
// // //         this.top = newNode;
// // //         return
// // //      }
// // //      newNode.next = this.top
// // //      this.top = newNode;
// // //      return
// // //    }
// // //    display(){
// // //     var temp = this.top;
// // //     while(temp!=null){
// // //          console.log(temp.data)
// // //          temp=temp.next
// // //     }
// // //    }
// // // }
// // // const stack = new Stack()
// // // let str = "KERALA"
// // // for(var i=0;i<str.length;i++){
// // //     stack.push(str[i])
// // // }
// // // stack.display()

// // // class Node {
// // //     constructor(data){
// // //         this.data = data;
// // //         this.next = null
// // //     }
// // // }
// // // class Stack{
// // //     constructor(){
// // //         this.top = null;
// // //     }

// // //     push(data){
// // //         const newNode = new Node(data)
// // //         if(this.top==null){
// // //             this.top = newNode;
// // //             return 
// // //         }
// // //         newNode.next = this.top;
// // //         this.top = newNode;
// // //     }
    
// // //     pop(){
// // //         const val = this.top.data;
// // //         this.top = this.top.next
// // //         return val
// // //     }

// // //     queue(){
// // //         var temp = this.top
// // //         const stack1 = new Stack()

// // //         while(temp){
// // //             var k = stack.pop()
// // //             stack1.push(k)
// // //             temp= temp.next
// // //         }
// // //         stack1.display()
       
// // //     }

// // //     display(){   
// // //         var temp = this.top;
// // //         while(temp){
// // //             console.log(temp.data)
// // //             temp = temp.next
// // //         }
// // //     }
// // // }

// // // const stack = new Stack();
// // // stack.push(10)
// // // stack.push(20)
// // // stack.push(30)
// // // stack.push(40)
// // // stack.push(50)
// // // stack.push(60)
// // // // stack.pop()
// // // stack.queue();
// // // stack.display()



// // // const bubbleSort = (arr)=>{
// // //    for(var i=0;i<arr.length;i++){
// // //     for(var j=1;j<arr.length-i;j++){
// // //         if(arr[j-1]>arr[j]){
// // //             var temp = arr[j];
// // //             arr[j]= arr[j-1]
// // //             arr[j-1] = temp
// // //         }
// // //     }
// // //    }
// // //    return arr
// // // }
// // // const res = bubbleSort(arr)
// // // console.log(res)


// // // const insertionSort = (arr) =>{
// // //     for(var i=1;i<arr.length;i++){
// // //         j=i-1;
// // //         var key = arr[i]
// // //         while(j>=0 && arr[j] > key){
// // //            arr[j+1] = arr[j]
// // //            j=j-1
// // //         }
// // //         arr[j+1] = key;
// // //     }
// // //     return arr
// // // }
// // // const insertionSort=(arr)=>{
// // //     var n=arr.length;
// // //      for(var i=1;i<arr.length;i++){
// // //         var j=i-1;
// // //         var key=arr[i];
// // //         while(j>=0 && arr[j]>key){
// // //             arr[j+1]=arr[j]
// // //             j=j-1;
// // //         }
// // //         arr[j+1]=key;
// // //      }
// // //      return arr
// // // }
// // // const res = insertionSort(arr)
// // // console.log(res)


// // // const array1 = [1, 2, 3];
// // // const array2 = array1
// // // array2.push(10)
// // // console.log("array 1",array1)
// // // console.log("array 2",array2);


// // // function k(){
// // //     var a = 10;
// // //     {
// // //         let a = 100;
// // //         console.log(a)
// // //     } 
// // //     console.log(a)
// // // }
// // // k()
// // // function* iterateArray(arr) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //       yield arr[i];
// // //     }
// // //   }
  
// // //   const myArray = [10, 20, 30];
// // //   const arrayIterator = iterateArray(myArray);
  
// // //   for (const value of arrayIterator) {
// // //     console.log(value);
// // //   }
  

// // // class Node {
// // //   constructor(data){
// // //     this.data = data;
// // //     this.next = null
// // //   }
// // // }
 

// // // class Stack{
// // //   constructor(){
// // //     this.top = null;
// // //   }

// // //   push(data){
// // //     const newNode = new Node(data)
// // //       if(this.top ==null){
// // //           this.top = newNode
// // //           return;
// // //       }

// // //       newNode.next = this.top;
// // //       this.top = newNode;
// // //       return
// // //   }

// // //   pop(){
// // //     if(this.top==null){
// // //       return;
// // //     }
// // //     this.top = this.top.next;
// // //   }

// // //   undo(){
     
// // //   }
// // //   redo(){

// // //   }

// // //   display(){
// // //     var temp  =  this.top
// // //     while(temp){
// // //       console.log(temp.data)
// // //       temp = temp.next
// // //     }
// // //   }
// // // }

// // // const stack = new Stack()
// // // stack.push(10)
// // // stack.push(20)
// // // stack.push(30)
// // // stack.push(40)
// // // stack.push(50)
// // // // stack.pop()
// // // stack.display()

// // // var a = 10;
// // // var b = "a"
// // // var c = b+a
// // // console.log(c)
// // // console.log(typeof(c))

// // // function* generator(){
// // //   let a =1;
// // //   while(a<5){
// // //     yield ++a;
// // //   }
// // // }

// // // let iterator = generator()
// // // console.log(iterator.next().value)
// // // console.log("jithin")
// // // console.log(iterator.next().value)

// // let name = "jithin"
// // name = 9
// // console.log(typeof(name))

// class Maxheap{
//     constructor(){
//         this.heap=[]
//     }
//     heapifyUp(index){
//         var parentIndex = Math.floor((index-1)/2)
//         if(parentIndex>=0 && this.heap[parentIndex]<this.heap[index]){
//             [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]] 
//             this.heapifyUp(parentIndex)
//         }
//     }
//     insert(data){
//         this.heap.push(data)
//         let index = this.heap.length-1;
//         this.heapifyUp(index)
//     }
//     heapifyDown(index){
//         let largest = index
//         let leftIndex = 2*index+1
//         let rightIndex = 2*index+2
//         if(leftIndex<this.heap.length && this.heap[largest]<this.heap[leftIndex]){
//             largest= leftIndex
//         }
//         if(rightIndex<this.heap.length && this.heap[largest]<this.heap[rightIndex]){
//             largest= rightIndex
//         }
//         if(largest!==index){
//             [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
//             this.heapifyDown(largest)
//         }
//     }
//     removeMax(){
//         if(this.heap.length==0){
//             return null
//         }
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//     }
//     heapify(arr){
//        this.heap = arr;
//        let startIndex = Math.floor(arr.length/2-1);
//        for(var i=startIndex;i>=0;i--){
//         this.heapifyDown(i)
//        }
//     }
//     heapifyDown1(arr,n,index){
//         let largest = index
//         let leftIndex = 2*index+1
//         let rightIndex = 2*index+2
//         if(leftIndex<n && arr[largest]<arr[leftIndex]){
//             largest= leftIndex
//         }
//         if(rightIndex<n && arr[largest]<arr[rightIndex]){
//             largest= rightIndex
//         }
//         if(largest!==index){
//             [arr[largest],arr[index]] = [arr[index],arr[largest]]
//             this.heapifyDown(largest)
//         }
//     }

//     heapsort(arr){
//         let n = arr.length;
//         for(var startIndex = Math.floor((n/2)-1);startIndex>=0;startIndex--){
//             this.heapifyDown1(arr,n,startIndex)
//         }

//         for(var i=n-1;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapifyDown1(arr,i,0)
//         }
//         return arr;
//     }
// }

// const maxheap = new Maxheap()
// // maxheap.insert(45)
// // maxheap.insert(5)
// // maxheap.insert(57)
// // maxheap.insert(55)
// // maxheap.insert(85)
// // maxheap.insert(10)
// // maxheap.removeMax()
// // console.log(maxheap.heap)
// const arr = [45,5,57,55,85,10]
// // maxheap.heapify(arr)
// const arr1=maxheap.heapsort(arr)
// console.log(arr1)


class Graph{
    constructor(){
        this.map = new Map()
    }
    addVertex(vertex){
        this.map.set(vertex,[])
    }
    insert(vertex,edge,isBoolean=false){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.map.has(edge)){
            this.addVertex(edge)
        }
        this.map.get(vertex).push(edge)
        if(isBoolean){
            this.map.get(edge).push(vertex)
        }
    }
    display(){
        for(let vertex of this.map.keys()){
            if(this.map.get(vertex).length!==0){
                var temp = this.map.get(vertex)
                console.log(vertex,temp)
            }
        }
    }

    bfs(){
       const visited = new Set()
       for(let vertex of this.map.keys()){
         if(!visited.has(vertex)){
            visited.add(vertex)
            let queue = [vertex]

            while(queue.length!=0){
               let currentValue = queue.shift()
               console.log(currentValue)
               let edges = this.map.get(currentValue)
               for(let edge of edges){
                 if(!visited.has(edge)){
                    visited.add(edge)
                    queue.push(edge)
                 }
         }
       }
         }

}
    }

    dfs(){
        const visited = new Set()
        for(let vertex of this.map.keys()){
            if(!visited.has(vertex)){
               this.dfsTraversal(vertex,visited)
            }
        }
        
    }
    dfsTraversal(vertex,visited){
        visited.add(vertex)
        console.log(vertex)
        let edges = this.map.get(vertex)
        for(let edge of edges){
            if(!visited.has(edge)){
                this.dfsTraversal(edge,visited)
            }
        }
    }
    deleteVertex(target){
        this.map.delete(target)
        for(let [vertex,edges] of this.map){
            this.map.set(vertex,edges.filter((edge)=>edge!=target))
        }
    }
}
const graph = new Graph()
graph.insert("A",1);
graph.insert("A","B");
graph.insert("A","C");
graph.insert("B","D");
graph.insert("C","D")
graph.insert("C","B")
graph.insert("C",1,true)
graph.insert("K","L",true)
graph.display()
console.log("_______________")
graph.deleteVertex("B")
graph.display()

// graph.bfs()
// graph.dfs()