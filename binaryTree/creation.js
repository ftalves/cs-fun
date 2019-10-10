const createNode = data => ({
  data,
  left: null,
  right: null,
})

const sampleTree = () => {
  let root = createNode(1)
  root.left = createNode(2)
  root.left.left = createNode(3)
  root.left.right = createNode(4)
  root.left.right.right = createNode(5)
  root.left.right.right.left = createNode(6)
  root.right = createNode(7)
  root.right.left = createNode(8)
  root.right.right = createNode(9)

  return root
}

const logSampleTree = () => {
  console.log('           1       ');
  console.log('       /       \\    ');
  console.log('     2           7      ');
  console.log('   /   \\       /   \\');
  console.log('  3     4     8     9 ');
  console.log('         \\');
  console.log('           5');
  console.log('          /');
  console.log('         6');
}

module.exports = {
  createNode,
  sampleTree,
  logSampleTree,
}
