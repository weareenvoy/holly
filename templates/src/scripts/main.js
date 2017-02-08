/**
 * ./src/scripts.js
 * Main scripts file for <%= PROJECT_NAME =%>.
 * @author Keenan Staffieri
 */

class MyClass {
  constructor () {
    console.log('MyClass initialized!')
  }

  say (msg) {
    console.log(msg)
  }
}

const myClass = new MyClass('Hello, World')
myClass.say('Hello, World!')
