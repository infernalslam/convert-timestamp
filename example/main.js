const timeStamp = require('../src/index')
console.log(timeStamp.diff(new Date().getTime(), new Date().getTime() + 30 * 60 * 1000))
