function QueueArray(capacity) {
  this.queue = new Array(capacity)
  this.front = this.rear = this.size = 0

  this.isEmpty = () => this.size == 0
  this.isFull =  () => this.size == capacity

  this.add = item => {
    if (this.isFull()) { throw `Can't add, queue is full`}

    this.queue[this.rear] = item
    /*
      MODULUS: this makes sure that, in case next rear reaches the end of
      the array, it becomes 0 instead (the queue circle around), e.g:
        item = 'x'
        queue before add = [null, null, 'y', null] (front = 3)
        queue after add = [null, null, 'y', 'x']   (front = 0)
    */
    this.rear = (this.rear + 1) % capacity
    this.size++
  }

  this.release = () => {
    if (this.isEmpty()) { throw `Can't release, queue is empty`}

    const removedItem = this.queue[this.front]
    this.queue[this.front] = undefined
    this.front = (this.front + 1) % capacity
    this.size--

    return removedItem
  }
}

function QueueLinkedList() {
  this.head = this.tail = undefined

  this.isEmpty = () => this.head == undefined

  this.add = item => {
    let createdNode = {
      data: item,
      next: undefined,
    }

    if (!this.isEmpty()) {
      //if list is not empty, first add item to the end of tail(next), then tail becomes the createdNode
      this.tail.next = createdNode
      this.tail = createdNode
    }
    else {
      //if list is empty, head and tail become the createdNode
      this.tail = this.head = createdNode
    }
  }

  this.release = () => {
    //keep reference for head node
    const removedNode = this.head
    if (removedNode == undefined) { throw `Can't release, queue is empty` }

    //head becomes the next node
    this.head = removedNode.next
    if (this.isEmpty()) {
      //if queue becomes empty after release, remove the reference on tail as well
      this.tail = undefined
    }
    return removedNode.data
  }
}

module.exports = {
  QueueArray,
  QueueLinkedList,
}
