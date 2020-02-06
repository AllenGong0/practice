1.优先从缓存中加载
2.带有路径标识的从本地加载；
3.核心模块会自动加载核心模块
4.第三方模块会先从所处目录的node_modules
    找到当前包的package.json的main属性
    即找到入口文件
    最重加载的还是这个文件

    如果package.json不存在，或者main为空，则自动找该文件下的
    index.js

    如果当前目录node_modules不存在就向上一级寻找，一直想上寻找，知道找到磁盘根目录，找不到就会报：Cannot find module '***'

    一个项目 有且只有一个node_modules 放在项目根目录