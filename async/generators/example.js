const { promisify } = require('./promisify')

const createFirstName = new Promise(res => {
  setTimeout(() => res('João'), 500)
})

const createtLastName = new Promise(res => {
  setTimeout(() => res('Silva'), 500)
})

const withAsync = async () => {
  const firstName = await createFirstName
  const lastName = await createtLastName

  return `${firstName} ${lastName}`
}

const withGenerator = promisify(function* () {
  const firstName = yield createFirstName
  const lastName = yield createtLastName

  return `${firstName} ${lastName}`
})

withAsync().then(fullName => {
  console.log('Response using async / await:')
  console.log(fullName)
})
withGenerator().then(fullName => {
  console.log('Response using only generators and promises:')
  console.log(fullName)
})
