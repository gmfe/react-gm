开发
===

# 准备

`npm install`

# 开发

lib 是源代码，通过webpack打包到dist

`npm start` 启动服务开发。

# 发布

`npm run deploy`

# 发布到npm

记得修改 package.json 的 version

`npm login`

`npm publish`

更新版本发布重复以上操作

**but**

目前关联了账号，只能找liyatang发布。o(╯□╰)o

# 发布到bower

和npm不一样，bower通过更新Tag来达到版本更新。

`git tag -a 1.3.0`

`git push --tags`