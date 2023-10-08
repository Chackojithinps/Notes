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


class Node{
    constructor(data){
       this.data = data; 
       this.next = null;
    }
}
class LinkedList{

    constructor(){
        this.head = null
        this.tail = null
        this.prev = null;
    }

    addData(data){
      const newNode = new Node(data)
      if(this.head==null){
         this.head = this.tail =  newNode
         return
      }
      this.tail.next = newNode;
      this.tail= newNode;      
      
    }

    removeDuplicates(){
         var temp = this.head;
         while(temp){
             let curr = temp.next
             let prev = temp;
             while(curr){
                if(curr.data == temp.data){
                    prev.next = prev.next.next;
                    curr=curr.next;
                }else{
                    curr=curr.next 
                    prev= prev.next;
                }
             }
             temp = temp.next

         }
    }

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
    reverse(node){
       if(node.next==null || node == null){
          this.head = node;
          return;
       }
       this.reverse(node.next)
       let curr = node.next;
       curr.next = node;
       node.next = null
    }

   reverseRecursive(){
     this.reverse(this.head)
   }
    display(){
        var temp = this.head;
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
        
    }
}
const linkedList = new LinkedList()
linkedList.addData(10)
linkedList.addData(10)
linkedList.addData(50)
linkedList.addData(20)
linkedList.addData(10)
linkedList.addData(30)
linkedList.addData(20)
linkedList.addData(50)
// linkedList.reverse()

linkedList.reverseRecursive()
// linkedList.removeDuplicates()
linkedList.display()