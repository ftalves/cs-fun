/*
    Turns a generator into a promise. Can use *yield* inside the generator and
  it will have the same effect as *await*.
*/
const promisify = generator => new Promise((resolve, reject) => {
  const gen = generator()

  const step = value => {
    let item
    try {
        item = gen.next(value)
    } catch (e) {
      reject(e)
    }

    /*
        If it's the last item, resolve the promise with its value. Otherwise,
      pass in the step function to be recusvively called when done fecthing
      the next value.
    */
    return item.done ? resolve(item.value) : item.value.then(step)
  }

  return step()
})

module.exports = {
  promisify,
}
