const binTreeHeight = (root, height = 0) => {
  if (!root) {
    return height
  }

  const leftHeight = binTreeHeight(root.left, height + 1)
  const rightHeight = binTreeHeight(root.right, height + 1)

  return leftHeight > rightHeight ? leftHeight : rightHeight
}

module.exports = {
  binTreeHeight,
}
