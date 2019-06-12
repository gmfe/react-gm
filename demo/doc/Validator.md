---
imports:
    import {Validator} from '../../src/index';
---
## Validator

三个方法
- `register` 注册校验类型，内置有部分，具体看rules.js文件
- `validate` 校验。成功返回空字符串，校验不通过返回帮助信息
- `create` 创建校验函数，配合`FormItem`使用。 参数types 可以是具体的校验类型，或者校验类型集合

demo 见[Form](#/doc/Form)
