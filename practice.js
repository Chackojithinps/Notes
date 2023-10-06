class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }
}
class LinkedList {
    constructor(){
       this.head= null;
       this.tail = null;
       this.prev = null;
       this.head1 = null;
       this.tail1 = null;
    }

    addElement=(data)=>{
        const newNode = new Node(data)
        if(this.head==null){
            this.head=newNode
        }else{
            this.tail.next=newNode
        }
        this.tail=newNode
    }

    addElement2=(data)=>{
        const newNode = new Node(data)
        if(this.head1==null){
            this.head1=newNode
        }else{
            this.tail1.next=newNode
        }
        this.tail1=newNode
    }

    deleteElement=(data)=>{
        if(this.head==null){
            return
        }
        var temp= this.head;

        if(temp.data == data){
            this.head = temp.next;
            return
        }
        while(temp.next!=null){
            if(temp.next.data === data){

                temp.next=temp.next.next
                return
            }
            temp=temp.next
        }
        
    }

    InsertAfter = (nextTo,data) =>{
        const newNode= new Node(data)
         if(this.head==null){
            return;
         }
         let temp= this.head;
         while(temp!=null){

             if(temp.data === nextTo){
                  
                  newNode.next=temp.next;
                  temp.next = newNode;
                  return
             }
             temp=temp.next;
         }
    }
   
    deleteDuplicate = () =>{
        if(this.head == null){
            return 
        }
        let temp = this.head;
        while(temp!=null){
            let current = temp.next;
            let prev = temp;
            while(current!=null){
                if(temp.data == current.data){
                    prev.next = current.next
                }else{
                    prev = prev.next
                }
                current = prev.next
            }
            temp = temp.next;
        }
    }

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

    revereNode(){
        if(this.head == null){
            return;
        }
        let temp = this.head;
        while(temp.next!=null){
            let curr = temp.next;
            temp.next = this.prev;
            this.prev = temp;
            temp = curr;

        }
        return this.prev
    }

    deleteFromFirst(){
        if(this.head == null){
            return 
        }
        this.head = this.head.next;
        return;
    }

    merge(){
        let temp = this.head;
        let curr = this.head1;
        this.tail.next = curr;
        return
    }

    display=()=>{
        var temp = this.head;
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next;
        }
    }
}

const linkedList = new LinkedList()
linkedList.addElement(10)
linkedList.addElement(10)
linkedList.addElement(30)
linkedList.addElement(30)
linkedList.addElement(30)
linkedList.addElement(30)
linkedList.addElement(50)
linkedList.addElement(50)

linkedList.addElement2(10)
linkedList.addElement2(10)
linkedList.addElement2(30)
linkedList.addElement2(30)
linkedList.addElement2(30)
linkedList.addElement2(30)
linkedList.addElement2(50)
linkedList.addElement2(50)
// linkedList.deleteElement(20)
// linkedList.InsertAfter(30,100)
// linkedList.deleteDuplicate()
// const res = linkedList.revereNode()
// linkedList.deleteFromFirst()
linkedList.merge()
linkedList.display()