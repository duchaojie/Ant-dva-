#### npm 安装

> 请使用 npm 进行安装依赖，cnpm 安装的版本有别于 npm，造成 proxy 不可用

#### precommit

- 已删除该功能，如需要添加，则需要重新配置

> 请参考：commitId: c7532f59301bdc8e602d10c5c22b6353b204bd78，中的 package.json 的配置

#### 目录结构

```
|—— public
|	|—— favicon.png
|
|—— mock	// mockJS 数据
|
|—— src
|	|—— actions	  // 全局常量
|   	|—— index.js  // 系统常量，枚举等
|    	|—— [xxxManage.js] // 某功能目录下的常量
|	|—— common
|		|—— menu.js	// 菜单栏数据
|		|—— router.js		// 路由数据
|	|—— components // 公共组件
|	|—— layouts	  // 布局设置
|	|—— models	  // dva-models
|		|—— orgManage_add.js  // 命名规范：[xx管理/大目录]_[功能]，建议一个页面对应一个 modul
|	|—— routes	  // 对应页面，每个模块对应一个文件目录
|	|—— services	  // 接口
|    	|—— [xxxManage.js] // 某功能目录下的接口
|	|—— utils		  // 全局工具
|	|—— index.ejs	  // html 模板
|	|—— index.js	  // 入口
|	|—— router.js	  // 路由配置
|	|—— theme.js.  // 组件样式修改，如换皮肤等
|
|—— tests			  // 单元测试
|—— .roadhogrc.mock.js  // mock 接口数据入口，对应加载 mock 中的数据
|—— package.json	  // 包配置
```
#### Form 组件的 ref 使用

> 被 Form.create() 包装过的组件，在使用 ref 时，父组件无法调用到子组件的方法，需要使用 wrappedComponentRef 来实现，用法同 ref。内置组件为 rc-form。

#### npm安装依赖不成功
> 问题应该是npm版本的原因，为保险起见，尽量升级到node官网支持的稳定版本，npm也会相应升级