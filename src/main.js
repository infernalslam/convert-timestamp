const timeStamp = require('./index.js')
console.log(timeStamp.diff(new Date().getTime(), new Date().getTime() + 30 * 60 * 1000))
