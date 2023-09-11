// Promise.retry()`的目的主要是为了解决同步调用失败重新尝试问题。
// 代码实现原理：手写一个随机数生成函数，判断结果是否大于或者小于某个阙值，如若在判断次数以内则依据返回结果，否则重新尝试执行随机数生成函数，超过判断次数则抛出异常
/**
 * 方式一
 * 请求失败后，加入失败重试功能，如果5次全部失败，则返回失败结果，只要5次尝试中有任意一次成功，则返回成功
 * @param fn 绑定函数
 * @param times 请求次数
 * @param delay 延迟时间
 */
Promise.retry = function (fn, times, delay) {
  return new Promise(function(resolve, reject) {
    const tFn = function () {
      fn().then(resolve).catch(e => {
        if (times-- > 0) {
          console.log(`还有${times}次机会`)
          setTimeout(tFn, delay)
        } else {
          reject(e)
        }
      })
    }
    return tFn()
  })
}

Promise.retry2 = function (fn, times, delay) {
  return new Promise((resolve, reject) => {
    function innerT() {
      return fn().then(resolve).catch(function (e) {
        console.log(`还有${times}次机会`)
        if (times === 0) {
          reject(e)
        } else {
          times--
          setTimeout(innerT, delay)
        }
      })
    }
    return innerT()
  })
}

// 测试用随机数生成函数，模拟请求失败的情况
function getUser() {
  return new Promise((resolve, reject) => {
    const result = Math.floor(Math.random() * 10)
    return result < 3 ? resolve({
      id: result,
      username: 'ming'
    }) : reject(new Error(`The ${result} is greater than 3`))
  })
}

// Promise.retry(getUser, 5, 1000).then(r => {
//   console.log(`The result is ${r.id}`)
// })
Promise.retry2(getUser, 5, 1000).then(r => {
    console.log(`The result is ${r.username}`)
})

