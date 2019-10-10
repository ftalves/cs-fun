const { sampleTree, logSampleTree } = require('./creation')

const preOrder = node => {
  if (!node) { return }
  console.log(node.data)
  preOrder(node.left)
  preOrder(node.right)
}

const inOrder = node => {
  if (!node) { return }
  inOrder(node.left)
  console.log(node.data)
  inOrder(node.right)
}

const postOrder = node => {
  if (!node) { return }
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.data)
}

logSampleTree()

console.log('Pre Order, left first:')
preOrder(sampleTree())

console.log('In Order, left to right:')
inOrder(sampleTree())

console.log('Post Order, left to right, leaves first:')
postOrder(sampleTree())
