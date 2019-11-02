const { promisify } = require('./promisify')

const createFirstName = new Promise(res => {
  setTimeout(() => res('João'), 500)
})

const createtLastName = new Promise(res => {
  setTimeout(() => res('Silva'), 500)
})

const nameGetter = () => promisify(function* () {
  const firstName = yield createFirstName
  const lastName = yield createtLastName

  return `${firstName} ${lastName}`
})

nameGetter().then(fullName => {
  console.log('Result using only generators and promises:')
  console.log(fullName)
})
