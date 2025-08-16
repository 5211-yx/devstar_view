# devstar介绍文档

## 如何启动项目
```md
npm run docs:dev
```
## 如何打包项目
```md
npm run docs:build
```
## 如何预览项目
```md
npm run docs:preview
```
## 如何添加或修改侧边栏
在docs/.vitepress/config.mts中的sidebar进行修改，对于不同路径下的侧边栏，分别使用不同函数得到，text为侧边栏的描述内容，link为点击侧边栏后加载的内容的链接，如果有子目录，在items进行修改

link链接的内容既可以是网页链接，也可以是本地文档
## 如何自定义网站样式
在docs/.vitepress/theme/style.css中自定义网站样式

## 如何添加或修改导航栏
在docs/.vitepress/config.mts中的nav进行修改

