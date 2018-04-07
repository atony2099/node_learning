
## 理解中间件



![](https://segmentfault.com/img/bVUsEI?w=687&h=460)

```
const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);
```

```
one = (ctx, next) => {
  console.log('>> one');
   next();----------------> two = (ctx, next) => {
                              console.log('>> two');
                              next();------------------> three = (ctx, next) => {
                                                           console.log('>> three');
                                                           next();--------------------|
                                                           console.log('<< three');<--|
                                                         }
                              console.log('<< two');
                            }

  console.log('<< one');
}      
```


# koa-router
> 匹配原因：可以理解为一个switch语句，根据不同的path匹配不同请求；



movie == 可以理解为
switch 语句， 根据
