// class Node{
//     constructor(data){
//         this.data = data;
//         this.next=null
//     }
// }
// class LinkedList {
//     constructor(){
//        this.head= null;
//        this.tail = null;
//        this.prev = null;
//        this.head1 = null;
//        this.tail1 = null;
//     }

//     addElement=(data)=>{
//         const newNode = new Node(data)
//         if(this.head==null){
//             this.head=newNode
//         }else{
//             this.tail.next=newNode
//         }
//         this.tail=newNode
//     }

//     addElement2=(data)=>{
//         const newNode = new Node(data)
//         if(this.head1==null){
//             this.head1=newNode
//         }else{
//             this.tail1.next=newNode
//         }
//         this.tail1=newNode
//     }

//     deleteElement=(data)=>{
//         if(this.head==null){
//             return
//         }
//         var temp= this.head;

//         if(temp.data == data){
//             this.head = temp.next;
//             return
//         }
//         while(temp.next!=null){
//             if(temp.next.data === data){

//                 temp.next=temp.next.next
//                 return
//             }
//             temp=temp.next
//         }
        
//     }

//     InsertAfter = (nextTo,data) =>{
//         const newNode= new Node(data)
//          if(this.head==null){
//             return;
//          }
//          let temp= this.head;
//          while(temp!=null){

//              if(temp.data === nextTo){
                  
//                   newNode.next=temp.next;
//                   temp.next = newNode;
//                   return
//              }
//              temp=temp.next;
//          }
//     }
   
//     deleteDuplicate = () =>{
//         if(this.head == null){
//             return 
//         }
//         let temp = this.head;
//         while(temp!=null){
//             let current = temp.next;
//             let prev = temp;
//             while(current!=null){
//                 if(temp.data == current.data){
//                     prev.next = current.next
//                 }else{
//                     prev = prev.next
//                 }
//                 current = prev.next
//             }
//             temp = temp.next;
//         }
//     }

    // revereNode(){
    //     var curr=this.head;
    //     while(curr!=null){
    //        var temp=curr.next;
    //        curr.next=this.prev;
    //        this.prev=curr;
    //        curr=temp;
    //     }
    //     return this.prev;
    // }

//     revereNode(){
//         if(this.head == null){
//             return;
//         }
//         let temp = this.head;
//         while(temp.next!=null){
//             let curr = temp.next;
//             temp.next = this.prev;
//             this.prev = temp;
//             temp = curr;

//         }
//         return this.prev
//     }

//     deleteFromFirst(){
//         if(this.head == null){
//             return 
//         }
//         this.head = this.head.next;
//         return;
//     }

//     merge(){
//         let temp = this.head;
//         let curr = this.head1;
//         this.tail.next = curr;
//         return
//     }

//     display=()=>{
//         var temp = this.head;
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next;
//         }
//     }
// }

// const linkedList = new LinkedList()
// linkedList.addElement(10)
// linkedList.addElement(10)
// linkedList.addElement(30)
// linkedList.addElement(30)
// linkedList.addElement(30)
// linkedList.addElement(30)
// linkedList.addElement(50)
// linkedList.addElement(50)

// linkedList.addElement2(10)
// linkedList.addElement2(10)
// linkedList.addElement2(30)
// linkedList.addElement2(30)
// linkedList.addElement2(30)
// linkedList.addElement2(30)
// linkedList.addElement2(50)
// linkedList.addElement2(50)
// // linkedList.deleteElement(20)
// // linkedList.InsertAfter(30,100)
// // linkedList.deleteDuplicate()
// // const res = linkedList.revereNode()
// // linkedList.deleteFromFirst()
// linkedList.merge()
// linkedList.display()


// class Node{
//     constructor(data){
//        this.data = data; 
//        this.next = null;
//     }
// }
// class LinkedList{

//     constructor(){
//         this.head = null
//         this.tail = null
//         this.prev = null;
//     }

//     addData(data){
//       const newNode = new Node(data)
//       if(this.head==null){
//          this.head = this.tail =  newNode
//          return
//       }
//       this.tail.next = newNode;
//       this.tail= newNode;      
//     }

//     removeDuplicates(){
//          var temp = this.head;
//          while(temp){
//              let curr = temp.next
//              let prev = temp;
//              while(curr){
//                 if(curr.data == temp.data){
//                     prev.next = prev.next.next;
//                     curr=curr.next;
//                 }else{
//                     curr=curr.next 
//                     prev= prev.next;
//                 }
//              }
//              temp = temp.next

//          }
//     }

    // reverse(){
    //    var temp = this.head;
    //    while(temp){
    //       let curr = temp.next ;
    //       temp.next = this.prev;
    //       this.prev=temp;
    //       temp=curr;
    //    }
    //    return this.prev
    // }

    // -------------------------------------------reverse through recursion---------------------------
    // reverse(node){
    //    if(node==null || node.next ==null){
    //       this.head = node
    //       return;
    //    }

    //    this.reverse(node.next)
       
    //    let curr = node.next;
    //    curr.next = node;
    //    node.next = null;

    // }
    // reverseRecursive(){
    //     this.reverse(this.head)
    // }
// -----------------------------------------------------------------------------------------------------------

    // reverse(){
    //    if(this.head == null || this.head.next ==null){
    //      return
    //    }
    //    var temp = this.head
    //    while(temp){
    //       let curr = temp.next;
    //       temp.next = this.prev;
    //       this.prev = temp;
    //       temp = curr;
    //    }
    //    this.head = this.prev
    // }
//     reverse(node){
//        if(node.next==null || node == null){
//           this.head = node;
//           return;
//        }
//        this.reverse(node.next)
//        let curr = node.next;
//        curr.next = node;
//        node.next = null
//     }

  

//    reverseRecursive(){
//      this.reverse(this.head)
//    }
//     display(){
//         var temp = this.head;
//         while(temp){
//             console.log(temp.data);
//             temp = temp.next;
//         }
        
//     }
// }
// const list1 = new LinkedList()
// list1.addData(10)
// list1.addData(10)
// list1.addData(50)
// list1.addData(20)
// list1.addData(10)
// list1.addData(30)
// list1.addData(20)
// list1.addData(50)


// const list2 = new LinkedList()

// list2.addData(100)
// list2.addData(200)
// list2.addData(300)
// list2.addData(100)
// list2.addData(600)
// list2.addData(400)
// list2.addData(900)


// function merge(list1,list2){
//     let curr = list1.head;
//     let curr2 = list2.head;
//     const mergedList = new LinkedList()
//     while(curr){
//         mergedList.addData(curr.data)
//         curr= curr.next;
//     }
//     while(curr2){
//         mergedList.addData(curr2.data)
//         curr2 = curr2.next;
//     }

//     let temp = mergedList.head

//     while(temp){
//         console.log(temp.data)
//         temp=temp.next
//     }
// }
// merge(list1,list2)
// linkedList.reverse()

// linkedList.removeDuplicates()
// linkedList.display()

    class Node{
        constructor(data){
            this.data = data;
            this.right = null;
            this.left = null;
        }
    }
    class Bst{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null;
    }
    insert(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
       if(!root){
        return false
       } 
       if(root.data == value){
        return true
       }
       if(value<root.data){
         return this.search(root.left,value)
       }else{
        return this.search(root.right,value)
       }
    }

    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.data
        }else{
            return this.max(root.right)
        }
    }
    printAllLeaves(root){
        if(!root){
            return root
        }
        if(!root.right && !root.left){
           
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }
}


    const bst = new Bst()
    bst.insert(10)
    bst.insert(5)
    bst.insert(12)
    bst.insert(16)
    bst.insert(7)
    bst.inOrder(bst.root)
    // const res= bst.search(bst.root,142)
    // console.log(res)
    const res = bst.min(bst.root)
    console.log("min",res)
    const max = bst.max(bst.root)
    console.log("max",max)

