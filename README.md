# 原理篇
# 2023年4月13日
## 原理篇
### loader
1. 分类
   1. pre：前置
   2. normal：普通
   3. inline：内联
   4. post：后置
2. 优先级：pre>normal>inline>post，从下到上，从右到左
3. 使用loader的方式
   1. 配置方式：在webpack.config.js中指定loader
   2. 内联方式：
   用法 import xxx from 'style-loader!css-loader?modules!./styles.css'
   !：跳过normal，-!：跳过pre和normal，!!跳过三个
### 定义一个loader
1. 同步loader
2. 异步loader
### 写了一些自定义loader
1. clean-log：清理代码中的console.log()
2. banner：添加作者信息
3. babel：js代码兼容性处理
4. file：处理图片字体等资源
5. style；处理样式资源