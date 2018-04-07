## 与其他数据库对比
## 与其他数据库对比
![](https://images2017.cnblogs.com/blog/1108319/201712/1108319-20171219230026490-756534167.jpg)


## mongo 是什么

- 文档型数据库

- 如何安装
[mac下安装和配置mongodb的步骤详解](http://www.jb51.net/article/119781.htm)

- 使用
- mongod 启动 数据库
- mongo 连接数据库


[Mac新手从入门到放弃MongoDB](https://www.cnblogs.com/lewiscutey/p/8052968.html)

## 操作的对象 = document
![](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-insertOne.bakedsvg.svg)






## 常用命令

```
show databases    　　　　　　　　　　 //  show  查看有哪些数据库，也可show dbs
use demo           　　　　　　　　　　//  use  创建数据库（如果数据库不存在，则创建数据库，否则切换到指定数据库）
show collections   　　　　　　　　　　//  查看有哪些集合（collections相当于SQL中的一个个表）
db.createCollection('movie')        //  创建集合（相当于创建表

```
## 增删改查

增加：
```
 db.demo01.insertOne({name:'jim',location:'fuzhou'})
```
删除：
```
db.demo01.deleteOne()
```
改：
```
db.demo01.updateOne({name:'jon'},{$set:{location:'qinghai'}})
```


查找：
```
db.demo01.find()
```



## mongoose
[Mongoose介绍和入门](http://www.cnblogs.com/zhongweiv/p/mongoose.html#mg_connstr)



### data-type
- String
- Number
- Date
- Buffer
- Boolean
- Mixed: AnyType
- Objectid :other object
- Array

相关属性：
unique:唯一约束，声明改字段是唯一的

### 数据的增删该查

#### 查询参数 query
- 满足任一条件：{$or:[]};
- 大于: {field: {$gt: value} }
- 是否存在: { field: { $exists: <boolean> } }

##### 排序
sort  {field:1} // 1 升序 2，降序












## 错误处理

Address already in use for socket: 0.0.0.0:27017
 端口被占用：没有正确关闭数据库导致；

1. ps wuax | grep mongo
2. kill xxxx
