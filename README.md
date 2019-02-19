# ele

> A Vue.js project

##功能
* 点击分类目录滚动到相应商品模块
* 路由切换动画
* 购物车数量及商品变化实时计算价格
* 评论筛选（全部、推荐、吐槽、有无内容）
* localStorage实现收藏商家功能
* 评价星级根据数据动态变化

## 注意

```bash
# webpack 版本为 "webpack": "^3.6.0",
bulid文件下少了两个文件，分别是dev-sever.js和dev-client.js 

# vue自启浏览器设置
config/index.js 将 'autoOpenBrowser' 改为 true

# 接口设置问题
最新版本vue-cli的配置中浏览器服务都在webpack-dev-server 这个插件中.其插件API 有一个参数就是devServer.before 

var appData = require("../data.json");
var seller = appData.seller;
var goods = appData.goods;
before(app) {
      app.get("/api/seller",function(req,res){
        res.json({
          errno:0,
          data:seller
        });
      });
      app.get("/api/goods",function(req,res){
        res.json({
          errno:0,
          data:goods
        });
      });
}
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
