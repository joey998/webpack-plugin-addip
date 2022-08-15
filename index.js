let ip = require('ip').address();

module.exports =  class addIPWebpackPlugn {
  constructor () {

  }
  apply(compiler) {
    compiler.hooks.done.tap('addIPWebpackPlugn', () => {
      console.log(ip)
    })
  }
}