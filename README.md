# wrapperjs-loader

webpack的js文件加载工具


使用示例

```javascript


import loadEgret from '!wrapperjs-loader?egret!../lib/egret.min.js'
import loadEgretWeb from '!wrapperjs-loader?egret!../lib/egret.web.min.js'
import loadDragonBones from '!wrapperjs-loader?egret,dragonBones!../lib/dragonBones.min.js'
import loadRES from '!wrapperjs-loader?egret,RES!../lib/res/res.js'

const dragonBones = {};
const egret = {};
const RES = {};

loadEgret(egret);
loadEgretWeb(egret);
loadDragonBones(egret, dragonBones);
loadRES(egret, RES);


```