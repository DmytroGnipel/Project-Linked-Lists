
class LinkedList {
    constructor(head = null) {//without passed node linked list will be empty, that is its head equals null
        this.head = head
    }
    //add a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value)
        if (!this.head) this.head = newNode//when the list is empty
        else {
            let node = this.head//when the list already contains at least one node
            while (node.nextNode) node = node.nextNode
            node.nextNode = newNode
        }
    }
    //add a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value)
        if  (!this.head) this.head = newNode//when list is empty
        else {
            newNode.nextNode = this.head //when the list already contains at least one node
            this.head = newNode
        }
    }
    //returns the total number of nodes in the list
    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.nextNode
        }
        return counter
    }
    //return the first node in the list
    header() {
        if (!this.head) return 'list is empty'//when list is empty
        return this.head//when there is at least one node
    }
    //return the last node in the list
    tail() {
        if  (!this.head) return 'list is empty'//when list is empty
        else {
            let node = this.head
            while (node.nextNode) node = node.nextNode
            return node
        }
    }
    //return the node at the given index
    at(index) {
        if (!this.head) return 'list is empty'//when list is empty
        if (typeof index !== 'number' || index < 0) return 'incorrect input'////when index is string or negative number
        let counter = 0
        const func1 = node => {
            if (index === counter) return node//when we find desirable node
            if (!node.nextNode) return 'there is no node with the given index'//when index exceed list length
                counter++
                return func1(node.nextNode)//recursion instead loop for fun
        }
        return func1(this.head)
    }
    //removes the last element from the list
    pop()  {
        if (!this.head) console.log('list is empty')//when list is empty
        else {
            const func = node => {
                if (node.nextNode.nextNode) func (node.nextNode)
                else node.nextNode = null//when we found last node
            }
        !this.head.nextNode ? this.head = null : func(this.head)//left half of line for when first node is last one simultaneously 
        }
    }
    //return true if the passed in value is in the list and otherwise returns false
    contains(data) {
        let node = this.head
        while (node && node.value !== data ) node = node.nextNode
        if (node) return true
        else return false
    }

    //return the index of the node containing value, or null if not found
    find(data) {
        let node = this.head
        let counter = 0
        while (node && node.value !== data ) {
            node = node.nextNode
            counter++
        }
        if (node) return counter
        else return false
    }
    //represent list objects as strings, so you can print them out and preview them in the console. 
    //Format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        if (!this.head) return 'list is empty'//when list is empty
        let node = this.head
        let counter = ''
        while(node) {
            counter += `( ${node.value} ) -> `
            node = node.nextNode
        }
        return counter += 'null'
    }
    //insert a new node with the provided value at the given index
    insertAt(value, index) {
        if (index < 0) {
            console.log('index can not be negative')
            return
        }
        const newNode = new Node(value)//create new node
        if (index === 0) {
            this.head = newNode//when index equals 0 we need to put new node in the begining of the list
            return
        }
        let counter = 1
        let node = this.head
        while (counter < index && node.nextNode) {
            node = node.nextNode
            counter++
        }
        if (counter === index) {//when right node have found
            newNode.nextNode = node.nextNode//insert right part of the list into the new node
            node.nextNode = newNode//insert new node into left part of the list
        }
        else console.log('value of the index is too big')//when index exceed index of the last element + 1
    }
    //remove the node at the given index
    removeAt(index) {
        //when index is negative number
        if (index < 0) {
            console.log('index can not be negative')
            return
        }
        if (!this.head) {
            console.log('list is empty')
            return
        }
        //when index points at the first element of the list
        if (index === 0) {
            this.head = this.head.nextNode
            return
        }
        //when index points at the second element, third element and so on
        let counter = 1
        let node = this.head
        while (counter !== index && node.nextNode.nextNode) {
            node = node.nextNode
            counter++
        }
        if (counter === index) {
            let tail = node.nextNode.nextNode
            node.nextNode = tail
        }
        //when index value exceed index of the last element 
        else console.log('list does not contain element with the given index')
    }
}

class Node {
    constructor(value = 0) {
        this.value = value
        this.nextNode = null
    }
}


//testing

/*
append(value)
const appendList = new LinkedList()
console.log(appendList)
appendList.append()
console.log(appendList)
appendList.append(1)
console.log(appendList)
appendList.append(2)
console.log(appendList)
*/

/*
prepend(value)
const prependList = new LinkedList()
console.log(prependList)
prependList.prepend()
console.log(prependList)
prependList.prepend(1)
console.log(prependList)
prependList.prepend(2)
console.log(prependList.head)
prependList.prepend
*/

/*
size()
const sizeList = new LinkedList()
console.log(sizeList.size())
sizeList.append()
console.log(sizeList.size())
sizeList.append(1)
console.log(sizeList.size())
sizeList.append(2)
console.log(sizeList.size())
*/

/*
header()
const headerList = new LinkedList()
console.log(headerList.header())
headerList.append()
console.log(headerList.header())
headerList.prepend(1)
console.log(headerList.header())
headerList.prepend(2)
console.log(headerList.header())
*/

/*
tail()
const tailList = new LinkedList()
console.log(tailList.tail())
tailList.append()
console.log(tailList.tail())
tailList.append(1)
console.log(tailList)
console.log(tailList.tail())
tailList.append(2)
console.log(tailList)
console.log(tailList.tail())
*/

/*
at(index)
const atList = new LinkedList()
console.log(atList.at(2))
atList.append()
atList.append(1)
atList.append(2)
console.log(atList.at('i am a string'))
console.log(atList.at(-3))
console.log(atList.at(0))
console.log(atList.at(1))
console.log(atList.at(2))
console.log(atList.at(3))//there is no node with the given index
*/

/*
pop()
const popList = new LinkedList()
popList.pop()
popList.append()
popList.append(1)
popList.append(2)
console.log(popList)
popList.pop()
console.log(popList)
popList.pop()
console.log(popList)
popList.pop()
console.log(popList)
popList.pop()//list is empty
*/

/*
contains(data)
const containsList = new LinkedList()
console.log(containsList.contains(2))
containsList.append()
containsList.append(1)
containsList.append(2)
console.log(containsList)
console.log(containsList.contains(0))//true
console.log(containsList.contains(1))//true
console.log(containsList.contains(2))//true
console.log(containsList.contains(3))//false
*/

/*
find(value)
const findList = new LinkedList()
console.log(findList.find(1))
findList.append(2)
findList.append(1)
findList.append(0)
console.log(findList)
console.log(findList.find(2))//0
console.log(findList.find(1))//1
console.log(findList.find(0))//2
console.log(findList.find(3))//false
*/

/*
toString()
const toStringList = new LinkedList()
console.log(toStringList.toString())
toStringList.append()
console.log(toStringList.toString())
toStringList.append(1)
console.log(toStringList.toString())
toStringList.append(2)
toStringList.append(3)
toStringList.append(4)
console.log(toStringList.toString())//( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null
*/

/*
insertAt(value, index)
const insertAtList = new LinkedList()
console.log(insertAtList)
insertAtList.insertAt('value1', 0)
console.log(insertAtList)
insertAtList.insertAt('value2', 1)
console.log(insertAtList)
insertAtList.insertAt('value3', 2)
console.log(insertAtList)
insertAtList.insertAt('value2.5', 2)
console.log(insertAtList)//value inserts on position 2 that is between value2 and value3
insertAtList.insertAt('value4', 4)
console.log(insertAtList)//add index in the end of the list
insertAtList.insertAt('value6', 6)//value of the index is too big
*/

/*
removeAt(index)
const removeAtList = new LinkedList()
console.log(removeAtList)
removeAtList.removeAt(0)
removeAtList.append()
removeAtList.append(1)
removeAtList.append(2)
removeAtList.append(3)
console.log(removeAtList)
removeAtList.removeAt(2)
console.log(removeAtList.head)
removeAtList.removeAt(0)
console.log(removeAtList)
removeAtList.removeAt(2)//list does not contain element with the given index
*/



