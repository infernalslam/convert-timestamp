const timer = require('./index.js')
console.log(timer.diff(new Date().getTime(), new Date().getTime() + 30 * 60 * 1000))
