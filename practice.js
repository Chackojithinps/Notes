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
linkedList.addElement(20)
linkedList.addElement(30)
// linkedList.deleteElement(20)
linkedList.InsertAfter(30,100)
linkedList.display()