function Promise(executor) {
  var self = this
  self.status = 'pending' // Promise当前的状态
  self.data = undefined  // Promise的值
  self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    // TODO
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for(var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    // TODO
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      for(var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try { // 考虑到执行executor的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错后以catch到的值reject掉这个Promise
    executor(resolve, reject) // 执行executor
  } catch(e) {
    reject(e)
  }
}
// then方法接收两个参数，onResolved，onRejected，分别为Promise成功或失败后的回调
Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promise2

  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function(value) {return value}
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {throw reason}

  if (self.status === 'resolved') {
    return promise2 = new Promise(function(resolve, reject) {
    	try {
        	var x = onResolved(self.data)
        	/*
        	if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
          		x.then(resolve, reject)
        	}
        	*/
        	resolve(x) // 否则，以它的返回值做为promise2的结果
      	} catch (e) {
        	reject(e) // 如果出错，以捕获到的错误做为promise2的结果
      	}
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function(resolve, reject) {
    	try {
        	var x = onRejected(self.data)
        	/*
        	if (x instanceof Promise) {
          	x.then(resolve, reject)
        	}
        	*/
      	} catch (e) {
        	reject(e)
      	}
    })
  }

  if (self.status === 'pending') {
    return promise2 = new Promise(function(resolve, reject) {
    	self.onResolvedCallback.push(function(value) {
        	try {
          		var x = onResolved(self.data)
          		console.log(x)
          		/*
          		if (x instanceof Promise) {
            		x.then(resolve, reject)
          		}
          		*/
        	} catch (e) {
          		reject(e)
        	}
      	})

      	self.onRejectedCallback.push(function(reason) {
        	try {
          		var x = onRejected(self.data)
          		/*
          		if (x instanceof Promise) {
            		x.then(resolve, reject)
          		}
          		*/
        	} catch (e) {
          		reject(e)
        	}
      	})
    })
  }
}
// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}


// Promise构造函数接收一个executor函数，executor函数执行完同步或异步操作后，调用它的两个参数resolve和reject
var promise = new Promise(function(resolve, reject) {
  /*
    如果操作成功，调用resolve并传入value
    如果操作失败，调用reject并传入reason
  */
  setTimeout(function(){
  	resolve(8)
  })
  
})	

var p1 = promise.then(function(value){
	console.log(value)
	return 20;
},function(err){
	console.log(err)
})
p1.then(function(value){
	console.log(value)
},function(err){
	console.log(err)
})
