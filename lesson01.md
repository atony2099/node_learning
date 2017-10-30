## JS 单线程的理解

同步：阻塞当前线程

异步：不阻塞当前线程

异步的过程

```javascript
function  asyncload(parm,callback){
  
  // do smothing in background
 	let  json  = excuteLoadbackground()
  	callback(json)
}
// 1. 注册异步消息 asyncload
// 2. 回调函数 callback 



asyncload(parm,callback(json){
  // 在当前线程刷新UI
  updateUI(json)
})
```

javascript是单线程的，是从语言层面来讲，程序员不能像其他语言一样开辟新线程，进行多线程的管理。

js的执行环境屏蔽了一些多线程管理的细节，程序员只需要跟一个线程打交道就okay了 。

他实现多线程是通过eventloop的机制。



####  Evenloop:

消息队列：放的是回调函数

1. 同步任务放在执行栈中
2. 异步任务执行完的时候，就会把消息放到任务队列里面等待处理。


1. 主线程执行完当前的同步代码后去消息队列里面取消息并处理 (poll for next messgage when stack empty )

2. 在主线完处理完相关同步代码后又去消息队列里取消息 如此反复。

   ​

[JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)

[The JavaScript Event Loop: Explained](The JavaScript Event Loop: Explained)

[Node.js 探秘：初识单线程的 Node.js](http://taobaofed.org/blog/2015/10/29/deep-into-node-1/)



```javascript
function init() {
  var link = document.getElementById("foo");

  link.addEventListener("click", function changeColor() {
    this.style.color = "burlywood";
  });
}

init();
```





![](http://ohbzayk4i.bkt.clouddn.com/17-10-30/13690720.jpg)





## node的回调地狱

![](http://ohbzayk4i.bkt.clouddn.com/17-10-30/69279635.jpg)

任何形式的代码块（大括号）超过三层会大幅降低代码可读性。









## nmp 

 node是 js的运行环境

npm：node package manager 是依赖包管理工具

> npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

packjson

> 定义了项目的各种信息，还有依赖(相当于podfile)