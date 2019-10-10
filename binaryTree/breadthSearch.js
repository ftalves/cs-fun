const { sampleTree, logSampleTree } = require('./creation')
const { QueueLinkedList } = require('./../queue')

//noob solution, using recursion and a hash table
const noobBreadthFirst = (node, level = 0, levelStack = {}) => {
  if (!node) { return }

  //if level entry exists on the table
  if (levelStack[level]) {
    //find empty position on level to insert
    for (let i = 0; i < levelStack[level].length; i++ ) {
      if (levelStack[level][i] == undefined) {
        levelStack[level][i] = node.data
        break
      }
    }
  }
  else {
    //calculate max elements for the level
    const levelMaxSize = Math.pow(2, level)
    levelStack[level] = new Array(levelMaxSize)
    levelStack[level][0] = node.data
  }
  noobBreadthFirst(node.left, level + 1, levelStack)
  noobBreadthFirst(node.right, level + 1, levelStack)
  //only the fist call returns, others just update reference
  return levelStack
}

//queue solution
const queueBreadthFirst = root => {
  const queue = new QueueLinkedList()
  queue.add(root)

  while(!queue.isEmpty()) {
    const node = queue.release()
    if (node.left)  { queue.add(node.left) }
    if (node.right) { queue.add(node.right) }
    console.log(node.data)
  }
}

logSampleTree()

console.log('\n')

console.log('Noob solution (returns a hash table with each level, maybe some use case?):')
console.log('Runtime: when inserting on each level, must loop through all elements on level to find empty spot. Maybe use linked list instead of array?')
console.log(noobBreadthFirst(sampleTree()))

console.log('\n')

console.log('Using a queue (linked list):')
queueBreadthFirst(sampleTree())
