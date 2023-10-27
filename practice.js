// // // // // // class Node{
// // // // // //     constructor(data){
// // // // // //         this.data = data;
// // // // // //         this.next=null
// // // // // //     }
// // // // // // }
// // // // // // class LinkedList {
// // // // // //     constructor(){
// // // // // //        this.head= null;
// // // // // //        this.tail = null;
// // // // // //        this.prev = null;
// // // // // //        this.head1 = null;
// // // // // //        this.tail1 = null;
// // // // // //     }

// // // // // //     addElement=(data)=>{
// // // // // //         const newNode = new Node(data)
// // // // // //         if(this.head==null){
// // // // // //             this.head=newNode
// // // // // //         }else{
// // // // // //             this.tail.next=newNode
// // // // // //         }
// // // // // //         this.tail=newNode
// // // // // //     }

// // // // // //     addElement2=(data)=>{
// // // // // //         const newNode = new Node(data)
// // // // // //         if(this.head1==null){
// // // // // //             this.head1=newNode
// // // // // //         }else{
// // // // // //             this.tail1.next=newNode
// // // // // //         }
// // // // // //         this.tail1=newNode
// // // // // //     }

// // // // // //     deleteElement=(data)=>{
// // // // // //         if(this.head==null){
// // // // // //             return
// // // // // //         }
// // // // // //         var temp= this.head;

// // // // // //         if(temp.data == data){
// // // // // //             this.head = temp.next;
// // // // // //             return
// // // // // //         }
// // // // // //         while(temp.next!=null){
// // // // // //             if(temp.next.data === data){

// // // // // //                 temp.next=temp.next.next
// // // // // //                 return
// // // // // //             }
// // // // // //             temp=temp.next
// // // // // //         }
        
// // // // // //     }

// // // // // //     InsertAfter = (nextTo,data) =>{
// // // // // //         const newNode= new Node(data)
// // // // // //          if(this.head==null){
// // // // // //             return;
// // // // // //          }
// // // // // //          let temp= this.head;
// // // // // //          while(temp!=null){

// // // // // //              if(temp.data === nextTo){
                  
// // // // // //                   newNode.next=temp.next;
// // // // // //                   temp.next = newNode;
// // // // // //                   return
// // // // // //              }
// // // // // //              temp=temp.next;
// // // // // //          }
// // // // // //     }
   
// // // // // //     deleteDuplicate = () =>{
// // // // // //         if(this.head == null){
// // // // // //             return 
// // // // // //         }
// // // // // //         let temp = this.head;
// // // // // //         while(temp!=null){
// // // // // //             let current = temp.next;
// // // // // //             let prev = temp;
// // // // // //             while(current!=null){
// // // // // //                 if(temp.data == current.data){
// // // // // //                     prev.next = current.next
// // // // // //                 }else{
// // // // // //                     prev = prev.next
// // // // // //                 }
// // // // // //                 current = prev.next
// // // // // //             }
// // // // // //             temp = temp.next;
// // // // // //         }
// // // // // //     }

// // // // //     // revereNode(){
// // // // //     //     var curr=this.head;
// // // // //     //     while(curr!=null){
// // // // //     //        var temp=curr.next;
// // // // //     //        curr.next=this.prev;
// // // // //     //        this.prev=curr;
// // // // //     //        curr=temp;
// // // // //     //     }
// // // // //     //     return this.prev;
// // // // //     // }

// // // // // //     revereNode(){
// // // // // //         if(this.head == null){
// // // // // //             return;
// // // // // //         }
// // // // // //         let temp = this.head;
// // // // // //         while(temp.next!=null){
// // // // // //             let curr = temp.next;
// // // // // //             temp.next = this.prev;
// // // // // //             this.prev = temp;
// // // // // //             temp = curr;

// // // // // //         }
// // // // // //         return this.prev
// // // // // //     }

// // // // // //     deleteFromFirst(){
// // // // // //         if(this.head == null){
// // // // // //             return 
// // // // // //         }
// // // // // //         this.head = this.head.next;
// // // // // //         return;
// // // // // //     }

// // // // // //     merge(){
// // // // // //         let temp = this.head;
// // // // // //         let curr = this.head1;
// // // // // //         this.tail.next = curr;
// // // // // //         return
// // // // // //     }

// // // // // //     display=()=>{
// // // // // //         var temp = this.head;
// // // // // //         while(temp!=null){
// // // // // //             console.log(temp.data)
// // // // // //             temp=temp.next;
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // const linkedList = new LinkedList()
// // // // // // linkedList.addElement(10)
// // // // // // linkedList.addElement(10)
// // // // // // linkedList.addElement(30)
// // // // // // linkedList.addElement(30)
// // // // // // linkedList.addElement(30)
// // // // // // linkedList.addElement(30)
// // // // // // linkedList.addElement(50)
// // // // // // linkedList.addElement(50)

// // // // // // linkedList.addElement2(10)
// // // // // // linkedList.addElement2(10)
// // // // // // linkedList.addElement2(30)
// // // // // // linkedList.addElement2(30)
// // // // // // linkedList.addElement2(30)
// // // // // // linkedList.addElement2(30)
// // // // // // linkedList.addElement2(50)
// // // // // // linkedList.addElement2(50)
// // // // // // // linkedList.deleteElement(20)
// // // // // // // linkedList.InsertAfter(30,100)
// // // // // // // linkedList.deleteDuplicate()
// // // // // // // const res = linkedList.revereNode()
// // // // // // // linkedList.deleteFromFirst()
// // // // // // linkedList.merge()
// // // // // // linkedList.display()


// // // // // // class Node{
// // // // // //     constructor(data){
// // // // // //        this.data = data; 
// // // // // //        this.next = null;
// // // // // //     }
// // // // // // }
// // // // // // class LinkedList{

// // // // // //     constructor(){
// // // // // //         this.head = null
// // // // // //         this.tail = null
// // // // // //         this.prev = null;
// // // // // //     }

// // // // // //     addData(data){
// // // // // //       const newNode = new Node(data)
// // // // // //       if(this.head==null){
// // // // // //          this.head = this.tail =  newNode
// // // // // //          return
// // // // // //       }
// // // // // //       this.tail.next = newNode;
// // // // // //       this.tail= newNode;      
// // // // // //     }

// // // // // //     removeDuplicates(){
// // // // // //          var temp = this.head;
// // // // // //          while(temp){
// // // // // //              let curr = temp.next
// // // // // //              let prev = temp;
// // // // // //              while(curr){
// // // // // //                 if(curr.data == temp.data){
// // // // // //                     prev.next = prev.next.next;
// // // // // //                     curr=curr.next;
// // // // // //                 }else{
// // // // // //                     curr=curr.next 
// // // // // //                     prev= prev.next;
// // // // // //                 }
// // // // // //              }
// // // // // //              temp = temp.next

// // // // // //          }
// // // // // //     }

// // // // //     // reverse(){
// // // // //     //    var temp = this.head;
// // // // //     //    while(temp){
// // // // //     //       let curr = temp.next ;
// // // // //     //       temp.next = this.prev;
// // // // //     //       this.prev=temp;
// // // // //     //       temp=curr;
// // // // //     //    }
// // // // //     //    return this.prev
// // // // //     // }

// // // // //     // -------------------------------------------reverse through recursion---------------------------
// // // // //     // reverse(node){
// // // // //     //    if(node==null || node.next ==null){
// // // // //     //       this.head = node
// // // // //     //       return;
// // // // //     //    }

// // // // //     //    this.reverse(node.next)
       
// // // // //     //    let curr = node.next;
// // // // //     //    curr.next = node;
// // // // //     //    node.next = null;

// // // // //     // }
// // // // //     // reverseRecursive(){
// // // // //     //     this.reverse(this.head)
// // // // //     // }
// // // // // // -----------------------------------------------------------------------------------------------------------

// // // // //     // reverse(){
// // // // //     //    if(this.head == null || this.head.next ==null){
// // // // //     //      return
// // // // //     //    }
// // // // //     //    var temp = this.head
// // // // //     //    while(temp){
// // // // //     //       let curr = temp.next;
// // // // //     //       temp.next = this.prev;
// // // // //     //       this.prev = temp;
// // // // //     //       temp = curr;
// // // // //     //    }
// // // // //     //    this.head = this.prev
// // // // //     // }
// // // // // //     reverse(node){
// // // // // //        if(node.next==null || node == null){
// // // // // //           this.head = node;
// // // // // //           return;
// // // // // //        }
// // // // // //        this.reverse(node.next)
// // // // // //        let curr = node.next;
// // // // // //        curr.next = node;
// // // // // //        node.next = null
// // // // // //     }

  

// // // // // //    reverseRecursive(){
// // // // // //      this.reverse(this.head)
// // // // // //    }
// // // // // //     display(){
// // // // // //         var temp = this.head;
// // // // // //         while(temp){
// // // // // //             console.log(temp.data);
// // // // // //             temp = temp.next;
// // // // // //         }
        
// // // // // //     }
// // // // // // }
// // // // // // const list1 = new LinkedList()
// // // // // // list1.addData(10)
// // // // // // list1.addData(10)
// // // // // // list1.addData(50)
// // // // // // list1.addData(20)
// // // // // // list1.addData(10)
// // // // // // list1.addData(30)
// // // // // // list1.addData(20)
// // // // // // list1.addData(50)


// // // // // // const list2 = new LinkedList()

// // // // // // list2.addData(100)
// // // // // // list2.addData(200)
// // // // // // list2.addData(300)
// // // // // // list2.addData(100)
// // // // // // list2.addData(600)
// // // // // // list2.addData(400)
// // // // // // list2.addData(900)


// // // // // // function merge(list1,list2){
// // // // // //     let curr = list1.head;
// // // // // //     let curr2 = list2.head;
// // // // // //     const mergedList = new LinkedList()
// // // // // //     while(curr){
// // // // // //         mergedList.addData(curr.data)
// // // // // //         curr= curr.next;
// // // // // //     }
// // // // // //     while(curr2){
// // // // // //         mergedList.addData(curr2.data)
// // // // // //         curr2 = curr2.next;
// // // // // //     }

// // // // // //     let temp = mergedList.head

// // // // // //     while(temp){
// // // // // //         console.log(temp.data)
// // // // // //         temp=temp.next
// // // // // //     }
// // // // // // }
// // // // // // merge(list1,list2)
// // // // // // linkedList.reverse()

// // // // // // linkedList.removeDuplicates()
// // // // // // linkedList.display()

// // // // // //     class Node{
// // // // // //         constructor(data){
// // // // // //             this.data = data;
// // // // // //             this.right = null;
// // // // // //             this.left = null;
// // // // // //         }
// // // // // //     }
// // // // // //     class Bst{
// // // // // //     constructor(){
// // // // // //         this.root = null
// // // // // //     }
// // // // // //     isEmpty(){
// // // // // //         return this.root == null;
// // // // // //     }
// // // // // //     insert(data){
// // // // // //         const newNode = new Node(data)
// // // // // //         if(this.isEmpty()){
// // // // // //             this.root = newNode;
// // // // // //         }else{
// // // // // //             this.insertNode(this.root,newNode)
// // // // // //         }
// // // // // //     }
// // // // // //     insertNode(root,newNode){
// // // // // //         if(newNode.data<root.data){
// // // // // //             if(root.left == null){
// // // // // //                 root.left = newNode;
// // // // // //             }else{
// // // // // //                 this.insertNode(root.left,newNode)
// // // // // //             }
// // // // // //         }else{
// // // // // //             if(root.right == null){
// // // // // //                 root.right = newNode;
// // // // // //             }else{
// // // // // //                 this.insertNode(root.right,newNode)
// // // // // //             }
// // // // // //         }
// // // // // //     }
// // // // // //     search(root,value){
// // // // // //        if(!root){
// // // // // //         return false
// // // // // //        } 
// // // // // //        if(root.data == value){
// // // // // //         return true
// // // // // //        }
// // // // // //        if(value<root.data){
// // // // // //          return this.search(root.left,value)
// // // // // //        }else{
// // // // // //         return this.search(root.right,value)
// // // // // //        }
// // // // // //     }

// // // // // //     min(root){
// // // // // //         if(!root.left){
// // // // // //             return root.data
// // // // // //         }else{
// // // // // //             return this.min(root.left)
// // // // // //         }
// // // // // //     }
// // // // // //     max(root){
// // // // // //         if(!root.right){
// // // // // //             return root.data
// // // // // //         }else{
// // // // // //             return this.max(root.right)
// // // // // //         }
// // // // // //     }

// // // // // //     printAllLeaves(root){
// // // // // //         if(!root){
// // // // // //             return root
// // // // // //         }
// // // // // //         if(!root.right && !root.left){
// // // // // //            console.log(root.data)
// // // // // //         }
// // // // // //         if(root.left){
// // // // // //             this.printAllLeaves(root.left)
// // // // // //         }
// // // // // //         if(root.right){
// // // // // //             this.printAllLeaves(root.right)
// // // // // //         }
// // // // // //     }

// // // // // //     preOrder(root){
// // // // // //         if(root){
// // // // // //             console.log(root.data)
// // // // // //             this.preOrder(root.left)
// // // // // //             this.preOrder(root.right)
// // // // // //         }
// // // // // //     }
// // // // // //     postOrder(root){
// // // // // //         if(root){
// // // // // //             this.postOrder(root.left)
// // // // // //             this.postOrder(root.right)
// // // // // //             console.log(root.data)
// // // // // //         }
// // // // // //     }
// // // // // //     inOrder(root){
// // // // // //         if(root){
// // // // // //             this.inOrder(root.left)
// // // // // //             console.log(root.data)
// // // // // //             this.inOrder(root.right)
// // // // // //         }
// // // // // //     }
// // // // // // }


// // // // //     // const bst = new Bst()
// // // // //     // bst.insert(10)
// // // // //     // bst.insert(5)
// // // // //     // bst.insert(3)
// // // // //     // bst.insert(3)
// // // // //     // bst.insert(12)
// // // // //     // bst.insert(16)
// // // // //     // bst.insert(7)
// // // // //     // bst.inOrder(bst.root)
// // // // //     // // const res= bst.search(bst.root,142)
// // // // //     // // console.log(res)
// // // // //     // const res = bst.min(bst.root)
// // // // //     // console.log("min",res)
// // // // //     // const max = bst.max(bst.root)
// // // // //     // console.log("max",max)
// // // // //     // bst.printAllLeaves(bst.root)
// // // // // // ----------------------------------------------------------
// // // // // //     function heapify(arr, n, i) {

// // // // // //         let largest = i;
// // // // // //         let leftChild = 2 * i + 1;
// // // // // //         let rightChild = 2 * i + 2;
      
// // // // // //         if (leftChild < n && arr[i] < arr[leftChild]) {
// // // // // //           largest = leftChild;
// // // // // //         }
      
// // // // // //         if (rightChild < n && arr[largest] < arr[rightChild]) {
// // // // // //           largest = rightChild;
// // // // // //         }
      
// // // // // //         if (largest !== i) {
// // // // // //           [arr[i], arr[largest]] = [arr[largest], arr[i]];
// // // // // //           heapify(arr, n, largest);
// // // // // //         }

// // // // // // }
    
// // // // // //       function heapSort(arr) {
// // // // // //         const n = arr.length;
      
// // // // // //         // Build max heap
// // // // // //         for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
// // // // // //           heapify(arr, n, i);
// // // // // //         }
      
// // // // // //         // Extract elements one by one
// // // // // //         for (let i = n - 1; i > 0; i--) {
// // // // // //           [arr[0], arr[i]] = [arr[i], arr[0]];
// // // // // //           heapify(arr, i, 0);
// // // // // //         }
// // // // // //         return arr;
// // // // // //       }
      
// // // // // //       // Example usage
// // // // // //       const arr = [12, 11, 13, 5, 6, 7];
// // // // // //       const sortedArr = heapSort(arr);
// // // // // //       console.log("Sorted array:");
// // // // // //       console.log(sortedArr);
      

// // // // // // const arr = []
// // // // // // function heapify(arr,n,i){
// // // // // //    let largest = i;
// // // // // //    let leftindex = 2*i+1;
// // // // // //    let rightIndex = 2*i+2;
// // // // // //    if(leftindex<n && arr[leftindex]>arr[largest]){
// // // // // //      largest= leftindex
// // // // // //    }
// // // // // //    if(rightIndex<n && arr[rightIndex]>arr[largest]){
// // // // // //     largest = rightIndex
// // // // // //    }
// // // // // //    if(largest!=i){
// // // // // //      [arr[i],arr[largest]]=[arr[largest],arr[i]]
// // // // // //      this.heapify(arr,n,largest)
// // // // // //    }
// // // // // // }
// // // // // // function heapSort(arr){
// // // // // //    var n = arr.length;
// // // // // //    for(var i=Math.floor(n/2)-1;i>=0;i--){
// // // // // //      heapify(arr,n,i)
// // // // // //    }
// // // // // // }
// // // // // // const arr = [12, 11, 13, 5, 6, 7];
// // // // // // const sortedArr = heapSort(arr);
// // // // // // console.log("sorted ARray : ",sortedArr)

// // // // // // const heapify = (arr,n,i) =>{
// // // // // //    let largest = i;
// // // // // //    let leftIndex = 2*i+1;
// // // // // //    let rightIndex = 2*i+2;
// // // // // //    if(leftIndex < n && arr[leftIndex]>arr[largest]){
// // // // // //     largest = leftIndex
// // // // // //    }
// // // // // //    if(rightIndex < n && arr[rightIndex] > arr[largest]){
// // // // // //      largest = rightIndex
// // // // // //    }

// // // // // //    if(largest!==i){
// // // // // //     [arr[largest],arr[i]] = [arr[i],arr[largest]]
// // // // // //     heapify(arr,n,largest)
// // // // // //    }
// // // // // // }
// // // // // // const heapSort=(arr,n,i)=>{
// // // // // //     var n= arr.length;
// // // // // //    for(var i=Math.floor(n/2)-1;i>=0;i--){
// // // // // //       heapify(arr,n,i)
// // // // // //    }

// // // // // //    for(var i = n-1;i>=0;i--){
// // // // // //      [arr[i],arr[0] ] = [arr[0],arr[i]]
// // // // // //      heapify(arr,i,0)
// // // // // //    }
// // // // // //    return arr
// // // // // // }

// // // // // // const arr = [12, 11, 13, 5, 6, 7,56];

// // // // // // const arr1 = heapSort(arr)
// // // // // // console.log(arr1)

// // // // // class Heap{
// // // // //     constructor(){
// // // // //         this.heap = []
// // // // //     }
// // // // //     heapifyUp(index){
// // // // //         let parentIndex = Math.floor(index-1)/2;
// // // // //         if(parentIndex>=0 && this.heap[parentIndex]<this.heap[index]){
// // // // //             [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[9]];
// // // // //             this.heapifyUp(parentIndex)
// // // // //         }
// // // // //     }
// // // // //     insert(value){
// // // // //         this.heap.push(value)
// // // // //         let index = this.heap.length-1;
// // // // //         this.heapifyUp(index)
// // // // //     }
// // // // //     display(){
// // // // //         for(var i=0;i<this.heap.length;i++){
// // // // //             console.log(this.heap[i])
// // // // //         }
// // // // //     }
// // // // // }

// // // // // const maxHeap = new Heap()
// // // // // maxHeap.insert(10)
// // // // // maxHeap.insert(50)
// // // // // maxHeap.insert(1)
// // // // // maxHeap.insert(7)
// // // // // maxHeap.insert(12)
// // // // // maxHeap.insert(30)
// // // // // maxHeap.display()
// // // // // // maxHeap.insert(10)
// // // // // // maxHeap.insert(10)
// // // // // // maxHeap.insert(10)
// // // // // // maxHeap.insert(10)


// // // // class Node{
// // // //     constructor(data){
// // // //         this.data = data ;
// // // //         this.left = null;
// // // //         this.right = null;
// // // //     }
// // // // }
// // // // class Bst{
// // // //    constructor(){
// // // //     this.root = null;
// // // //    }
// // // //    insert(data){
// // // //      const newNode = new Node(data)
// // // //      if(this.root == null){
// // // //         this.root = newNode
// // // //      }else{
// // // //         this.insertNode(this.root,newNode)
// // // //      }
// // // //    }
// // // //    insertNode(root,newNode){
// // // //     if(newNode.data<root.data){
// // // //         if(root.left == null){
// // // //             root.left =  newNode
// // // //         }else{
// // // //             this.insertNode(root.left,newNode)
// // // //         }
// // // //     }else{
// // // //         if(root.right== null){
// // // //             root.right = newNode
// // // //         }
// // // //         else{
// // // //             this.insertNode(root.right,newNode)
// // // //         }
// // // //     }
// // // //    }
// // // //    min(root){
// // // //     if(!root.left){
// // // //         console.log("min",root.data)
// // // //     }else{
// // // //         this.min(root.left)
// // // //     }
// // // //    }
// // // //    preOrder(root){
// // // //       if(root){
// // // //         console.log(root.data)
// // // //         this.preOrder(root.left)
// // // //         this.preOrder(root.right)
// // // //       }
// // // //    }
// // // //    getHeight(node){
// // // //       if(node == null){
// // // //         return -1;
// // // //       }
// // // //       const leftNode = this.getHeight(node.left)
// // // //       const rightNode = this.getHeight(node.right)
// // // //       return Math.max(leftNode,rightNode)+1
// // // //    }
// // // //    count(node){
// // // //      if(!node){
// // // //         return 0
// // // //      }
// // // //      const leftCount = this.count(node.left)
// // // //      const rightCount= this.count(node.right)
// // // //      return leftCount+rightCount+1
// // // //    }
// // // //    inorder(root){
// // // //     if(root){
// // // //         this.inorder(root.left)
// // // //         console.log(root.data)
// // // //         this.inorder(root.right)
// // // //     }
// // // //    }
// // // //    postOrder(root){
// // // //     if(root){
// // // //         this.postOrder(root.left)
// // // //         this.postOrder(root.right)
// // // //         console.log(root.data)
// // // //     }
// // // //    }
// // // // }
// // // // const bst = new Bst()
// // // // bst.insert(10)
// // // // bst.insert(5)
// // // // bst.insert(20)
// // // // bst.insert(7)
// // // // bst.insert(30)
// // // // bst.insert(40)
// // // // bst.postOrder(bst.root)
// // // // bst.min(bst.root)
// // // // const res = bst.getHeight(bst.root)
// // // // console.log("max heihgt : ",res)
// // // // const res1 = bst.count(bst.root)
// // // // console.log("count : ",res1)

// // // class maxHeap {
// // //     constructor() {
// // //         this.heap = []
// // //     }
// // //     heapifyUp(index){
// // //        var parentIndex = Math.floor((index-1)/2)
// // //        if(this.heap[parentIndex]<this.heap[index]){
// // //          var temp = this.heap[parentIndex]
// // //          this.heap[parentIndex] = this.heap[index]
// // //          this.heap[index] = temp
// // //          this.heapifyUp(parentIndex)
// // //        }
// // //     }
// // //     heapifyDown(index){
// // //         let largest = index
// // //         let left = 2*index+1
// // //         let right = 2*index+2
// // //         if(left<=this.heap.length-1 && this.heap[left]>this.heap[largest]){
// // //             largest = left
// // //         if(right<=this.heap.length && this.heap[right]>this.heap[largest]){
// // //             largest= right
// // //         }
// // //         if(largest!=index){
// // //             [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
// // //             this.heapifyDown(largest)
// // //         }
// // //     }
// // // }
// // //     removeMax(){
// // //         if(this.heap.length==null){
// // //                        return null;
// // //                     } 
// // //         if(this.heap.length==1){
// // //             this.heap.pop()
// // //         }
// // //         this.heap[0] = this.heap.pop()
// // //         this.heapifyDown(0)
// // //     }
// // //     display(){
// // //         for(var i=0;i<this.heap.length;i++){
// // //             console.log(this.heap[i])
// // //         }
// // //     }
// // //     insert(data){
// // //         this.heap.push(data)
// // //         var index = this.heap.length-1;
// // //         this.heapifyUp(index)
// // //     }
// // // }
// // // const heap = new maxHeap()
// // // heap.insert(10)
// // // heap.insert(5)
// // // heap.insert(2)
// // // heap.insert(25)
// // // // heap.display()
// // // heap.removeMax()
// // // heap.display()


// // class Graph{
// //     constructor(){
// //         this.map = new Map()
// //     }
// //     addVertex(vertex){
// //         this.map.set(vertex,[])
// //     }
// //     insert(vertex,edge,isBoolean=false){
// //        if(!this.map.has(vertex)){
// //         this.addVertex(vertex)
// //        }
// //        if(!this.map.has(edge)){
// //         this.addVertex(edge)
// //        }
// //        this.map.get(vertex).push(edge)
// //        if(isBoolean){
// //         this.map.get(edge).push(vertex)
// //        }
// //     }
// //     display(){
// //         for(let vertex of this.map.keys()){
// //             let temp = this.map.get(vertex)
// //             if(!temp.length==0){
// //                 console.log(vertex,temp)
// //             }
// //         }
// //     }

// //     bfs(){
// //         const visited = new Set()
// //         for(let vertex of this.map.keys()){
// //             if(!visited.has(vertex)){
// //                 visited.add(vertex)
// //                 const queue = [vertex]

// //                 while(queue.length !== 0 ){
// //                     let currentVal = queue.shift()
// //                     console.log(currentVal)

// //                     const edges = this.map.get(currentVal)
// //                     for(let edge of edges){
// //                         if(!visited.has(edge)){
// //                             visited.add(edge)
// //                             queue.push(edge)
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }

// //     dfs(){
// //         const visited = new Set()
// //         for( let vertex of this.map.keys()){
// //             if(!visited.has(vertex)){
// //                 this.dfsTraversal(vertex,visited)
// //             }
// //         }
// //     }

// //     dfsTraversal(vertex,visited){
// //         visited.add(vertex)
// //         console.log(vertex)
// //         const edges = this.map.get(vertex)
// //         for(let edge of edges){
// //             if(!visited.has(edge)){
// //                 this.dfsTraversal(edge,visited)
// //             }
// //         }
// //     }

// //     deleteVertex(target){
// //         this.map.delete(target)
// //         for(let [Vertex,edges] of this.map){
// //             this.map.set(Vertex,edges.filter((edge)=>edge!==target))
// //         }
// //     }

// //     // removeEdges(vertex1,vertex2){
// //     //     if(this.map.has(vertex1)){
// //     //         this.map.get(vertex1).splice(this.map.get(vertex1).indexOf(vertex2,1))
// //     //     }
// //     // }
// //     removeEdge = (vertex1, vertex2) => {
// //         if (this.map.has(vertex1)) {
// //           const edges = this.map.get(vertex1);
// //           const index = edges.indexOf(vertex2);
// //           if (index !== -1) {
// //             edges.splice(index, 1); // Remove vertex2 from the list associated with vertex1
// //           }
// //         }
// //       }
// // }

// // const graph = new Graph()
// // graph.insert("A",1)
// // graph.insert("A","B")
// // graph.insert("A","C")
// // graph.insert("B","D")
// // graph.insert("C","D")
// // graph.insert("C","L",true)
// // graph.insert("K","M",true)
// // // graph.display()
// // // graph.bfs()
// // // graph.deleteVertex("A")
// // // graph.display()
// // graph.removeEdge("A",1)
// // graph.display()

// // // graph.dfs()


// function commonElements(arr, root) {
//     const treeElements = [];
//     function inorder(node) {
//       if (node === null) {
//         return;
//       }
//       inorder(node.left);
//       treeElements.push(node.data);
//       inorder(node.right);
//     }
//     inorder(root);
  
//     // Sort both the array and the array of elements from the binary tree.
//     arr.sort();
//     treeElements.sort();
  
//     // Find the intersection of the two sorted arrays.
//     const commonElements = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr.length && j < treeElements.length) {
//       if (arr[i][0] < treeElements[j]) {
//         i++;
//       } else if (arr[i][0] > treeElements[j]) {
//         j++;
//       } else {
//         commonElements.push(arr[i][0]);
//         i++;
//         j++;
//       }
//     }
  
//     return commonElements;
//   }
  
//   // Example usage:
//   const arr = [[33, 34], [35, 26], [67, 89]];
//   const root = {
//     data: 33,
//     left: {
//       data: 35,
//       left: {
//         data: 26,
//       },
//       right: {
//         data: 89,
//       },
//     },
//     right: {
//       data: 67,
//     },
//   };
  
//   const commonElements = commonElements(arr, root);
//   console.log(commonElements);


const newArray = []

function commonElements(arr,root){
    function inorder(node){
        if(node){
           inorder(node.left)
           newArray.push(node.data)
           inorder(node.right)
        }
    }
    inorder(root)
}

class Node{
    constructor(data){
        this.data= data;
        this.left = null;
        this.right = null;
    }
}
class Bst{
    constructor(){
        this.root= null;
    }
    insert(data){
        const newNode = new Node(data)
       if(this.root==null){
         this.root= newNode
       }else{
         this.insertNode(this.root,newNode)
       }
    }
    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(!root.left){
               root.left= newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    
    inorder(root){
        if(root){
           this.inorder(root.left)
           newArr.push(root.data)
           this.inorder(root.right)
        }
    }
}
const bst = new Bst()
bst.insert(33)
bst.insert(35)
bst.insert(7)
bst.insert(18)
bst.insert(25)
bst.insert(65)
bst.insert(85)
bst.insert(45)
// bst.inorder(bst.root)
const arr=[[43,33],[25,65],[18,67]]
const newArr=[];
commonElements(arr,bst.root)
// console.log(newArray)

for(var i=0;i<arr.length;i++){
    let val= arr[i]
    for(var j=0;j<val.length;j++){
        if(newArray.includes(val[j])){
            newArr.push(val[j])
        }
    }
}
console.log(newArr)



class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (node.left === null) {
        node.left = newNode;
      } else if (node.right === null) {
        node.right = newNode;
      } else {
        // If both left and right nodes are occupied, we need to choose one branch to continue inserting.
        // You can define your own logic for choosing the branch.
        // For example, you might insert on the left if it is null, or follow some other rule based on your needs.
        this.insertNode(node.left, newNode);
      }
    }
  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(1);
  binaryTree.insert(2);
  binaryTree.insert(3);
  binaryTree.insert(4);
  binaryTree.insert(5);
  