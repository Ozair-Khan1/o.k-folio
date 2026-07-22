
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions || {};

/**
 * Behavior generated from Add Tilemap Collisions
 */
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions = class AddTilemapCollisions extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.LayerIndex = Number("0") || 0;
    this._behaviorData.FlipRotate = false;
    this._behaviorData.AutoAdd = behaviorData.AutoAdd !== undefined ? behaviorData.AutoAdd : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.LayerIndex !== undefined)
      this._behaviorData.LayerIndex = behaviorOverriding.LayerIndex;
    if (behaviorOverriding.FlipRotate !== undefined)
      this._behaviorData.FlipRotate = behaviorOverriding.FlipRotate;
    if (behaviorOverriding.AutoAdd !== undefined)
      this._behaviorData.AutoAdd = behaviorOverriding.AutoAdd;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    LayerIndex: this._behaviorData.LayerIndex,
    FlipRotate: this._behaviorData.FlipRotate,
    AutoAdd: this._behaviorData.AutoAdd,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.LayerIndex !== undefined)
      this._behaviorData.LayerIndex = networkSyncData.props.LayerIndex;
    if (networkSyncData.props.FlipRotate !== undefined)
      this._behaviorData.FlipRotate = networkSyncData.props.FlipRotate;
    if (networkSyncData.props.AutoAdd !== undefined)
      this._behaviorData.AutoAdd = networkSyncData.props.AutoAdd;
  }

  // Properties:
  
  _getLayerIndex() {
    return this._behaviorData.LayerIndex !== undefined ? this._behaviorData.LayerIndex : Number("0") || 0;
  }
  _setLayerIndex(newValue) {
    this._behaviorData.LayerIndex = newValue;
  }
  _getFlipRotate() {
    return this._behaviorData.FlipRotate !== undefined ? this._behaviorData.FlipRotate : false;
  }
  _setFlipRotate(newValue) {
    this._behaviorData.FlipRotate = newValue;
  }
  _toggleFlipRotate() {
    this._setFlipRotate(!this._getFlipRotate());
  }
  _getAutoAdd() {
    return this._behaviorData.AutoAdd !== undefined ? this._behaviorData.AutoAdd : true;
  }
  _setAutoAdd(newValue) {
    this._behaviorData.AutoAdd = newValue;
  }
  _toggleAutoAdd() {
    this._setAutoAdd(!this._getAutoAdd());
  }
}

/**
 * Shared data generated from Add Tilemap Collisions
 */
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.SharedData = class AddTilemapCollisionsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AddTilemapCollisionsExtension_AddTilemapCollisionsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AddTilemapCollisionsExtension_AddTilemapCollisionsSharedData = new gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.SharedData(
      initialData
    );
  }
  return instanceContainer._AddTilemapCollisionsExtension_AddTilemapCollisionsSharedData;
}

// Methods:
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.userFunc0x1e58838 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);
const DM = Ob.getDisplayMode();
const TmJF = Ob.getTilemapJsonFile();
const TsJF = Ob.getTilesetJsonFile();
const JM = runtimeScene.getGame().getJsonManager();
const ATMC = Be._AddTileMapCollision = {state:"load", map:[], tiles:{}, cMap:[], tw:32, th:32};
//
ATMC.getTileID = function(n) {
    if (n < 10000) {
        return [n, 0];
    } else if (n < 20000) {
        return [n - 10000, 1];
    } else if (n < 30000) {
        return [n - 20000, 2];
    } else if (n < 40000) {
        return [n - 30000, 3];
    } else if (n < 50000) {
        return [n - 40000, 4];
    } else if (n < 60000) {
        return [n - 50000, 5];
    } else if (n < 70000) {
        return [n - 60000, 6];
    } else if (n < 80000) {
        return [n - 70000, 7];
    } else if (n < 90000) {
        return [n - 80000, 8];
    }
    return [n, 0];
};
//
ATMC.checkCustomCollisionMask = function(N){
    const Obj = runtimeScene._objects.items[N];
    if (Obj) {
        if (Obj.type == "Sprite") {
            if (Obj.animations.length > 0) {
                if (Obj.animations[0].directions[0].sprites.length > 0) {
                    if (Obj.animations[0].directions[0].sprites[0].hasCustomCollisionMask) {
                        return false;
                    }
                }
            }
        }
    } else {
        console.warn(`The object named "${N}" does not exist.`);
    }
    return true;
};                   
// ---------------------------------------------------
JM.loadJson(TmJF,(err, cts) => {
    if (err) {
        console.warn("Json load error!");
        ATMC.state = "error";
        return;
    }
    if (cts["__header__"]){
        console.warn("LDtk file is not supported!");
        ATMC.state = "error";
        return;
    }
    if (cts.orientation != "orthogonal") {
        console.warn("That map type is not supported!");
        ATMC.state = "error";
        return;
    }
    if (cts.infinite) {
        console.warn("Infinite map size is not supported!");
        ATMC.state = "error";
        return;
    }
    if (cts.layers[0].compression) {
        // Compression or base64
        console.warn("Compression is not supported!");
        ATMC.state = "error";
        return;
    }
    if (cts.renderorder != "right-down") {
        console.warn("Values in that render order are not supported!");
        ATMC.state = "error";
        return;
    }
    // Tiles
    let Tiles = ATMC.tiles = {};
    if (TsJF == "") {
        cts.tilesets.forEach((v) => {
            let fId = v.firstgid;
            v.tiles.forEach((vv) => {
                if (vv.objectgroup) {
                    if (vv.objectgroup.objects[0].name != "") {
                        const vvName = vv.objectgroup.objects[0].name;
                        Tiles[fId + vv.id] = {name: vvName, bind: ATMC.checkCustomCollisionMask(vvName)};
                    }
                }
            });
        });
    } else {
        JM.loadJson(TsJF,(err2, cts2) => {
            if (err2) {
                console.warn("Json load error!");
                ATMC.state = "error";
                return;
            }
            let fId = 1;
            cts2.tiles.forEach((vv) => {
                if (vv.objectgroup) {
                    if (vv.objectgroup.objects[0].name != "") {
                        const vvName = vv.objectgroup.objects[0].name;
                        Tiles[fId + vv.id] = {name: vvName, bind: ATMC.checkCustomCollisionMask(vvName)};
                    }
                }
            });
        });
    }
    //
    // Layer and Map
    const LayerIDtoIndex = ATMC.layerIDtoIndex = {};
    ATMC.tw = cts.tilewidth;
    ATMC.th = cts.tileheight;
    const Mw = cts.width;
    const Mh = cts.height;
    // const FLIPPED_HORIZONTALLY_FLAG = 0b10000000000000000000000000000000;// -2147483648
    // const FLIPPED_VERTICALLY_FLAG   = 0b01000000000000000000000000000000;// 1073741824
    // const FLIPPED_DIAGONALLY_FLAG   = 0b00100000000000000000000000000000;// 536870912
    const FLIP_FLAG                 = 0b11100000000000000000000000000000;
    const CLEAR_FLAG                = 0b00001111111111111111111111111111;
    //
    let Map = ATMC.map = [];
    let LNum = 0;
    for (let li = 0; li < cts.layers.length; li++) {
        const lID = cts.layers[li].id;
        const lT = cts.layers[li].type;
        let lV = cts.layers[li].visible;
        if (DM == "all") {
            lV = true;
        } else if (DM == "index" && lID != Ob.getLayerIndex()) {
            lV = false;
        } else if (DM == "index" && lID == Ob.getLayerIndex()) {
            lV = true;
        }
        if (lT === "tilelayer" && lV) {
            const Ld = cts.layers[li].data;
            Map[LNum] = [];
            for (let i = 0; i < Mh; i++) {
                let l = [];
                for (let ii = 0; ii < Mw; ii++) {
                    let tID = Ld[(i*Mw)+ii] & CLEAR_FLAG;
                    const tBind = Tiles[tID] ? Tiles[tID].bind : true;
                    if (!tBind) {
                        const tF = Ld[(i*Mw)+ii] & FLIP_FLAG;
                        // ↑→↓←
                        // 0 -1610612736 -1073741824 1610612736
                        // H ↑→↓←
                        // -2147483648 -536870912 1073741824 536870912
                        // V ↑→↓←
                        // !1073741824 !536870912 !-2147483648 !-536870912
                        // HV↑→↓←
                        // !-1073741824 !1610612736 !0 !-1610612736
                        if (tF === 0) {
                            // ↑
                            tID += 10000;
                        } else if (tF === -1610612736) {
                            // →
                            tID += 20000;
                        } else if (tF === -1073741824) {
                            // ↓
                            tID += 30000;
                        } else if (tF === 1610612736) {
                            // ←
                            tID += 40000;
                        } else if (tF === -2147483648) {
                            // H↑
                            tID += 50000;
                        } else if (tF === -536870912) {
                            // H→
                            tID += 60000;
                        } else if (tF === 1073741824) {
                            // H↓
                            tID += 70000;
                        } else if (tF === 536870912) {
                            // H←
                            tID += 80000;
                        }
                        l.push(tID);
                    } else {
                        l.push(tID);
                    }
                }
                Map[LNum].push(l);
            }
            LayerIDtoIndex[lID] = LNum;
            LNum++;
        }
    }
    //
    // Binding
    const bMap = [];
    for (let li = 0; li < Map.length; li++) {
        for (let i = 0; i < Map[li].length; i++) {
            if (!Array.isArray(bMap[i])) {
                bMap[i] = [];
            }
            for (let ii = 0; ii < Map[li][i].length; ii++) {
                const [tID, tFR] = ATMC.getTileID(Map[li][i][ii]);
                if (bMap[i].length < Map[li][i].length) {
                    bMap[i][ii] = 0;
                }
                if (Tiles[tID]) {
                    bMap[i][ii] = Map[li][i][ii];
                }
            }
        }
    }
    //
    // search
    function searchStretchY(lv, t, x, y){
        let lvX = lv;
        lv++;
        skip:{
            while (lv < 100) {
                if (y + lv > Mh) {
                    break skip;
                }
                for (let i = 0; i < lvX; i++) {
                    const tName = Tiles[bMap[y + (lv - 1)][x + i]] ? Tiles[bMap[y + (lv - 1)][x + i]].name : null;
                    if (tName != t) break skip;
                }
                for (let i = 0; i < lvX; i++) {
                    bMap[y + (lv - 1)][x + i] = 0;
                }
                lv++;
            }
        }
        return lv - 1;
    }
    function searchStretchX(lv, t, x, y){
        let lvY = lv;
        lv++;
        skip:{
            while (lv < 100) {
                if (x + lv > Mw) {
                    break skip;
                }
                for (let i = 0; i < lvY; i++) {
                    const tName = Tiles[bMap[y + i][x + (lv - 1)]] ? Tiles[bMap[y + i][x + (lv - 1)]].name : null;
                    if (tName != t) break skip;
                }
                for (let i = 0; i < lvY; i++) {
                    bMap[y + i][x + (lv - 1)] = 0;
                }
                lv++;
            }
        }
        return lv - 1;
    }
    function searchBox(lv, t, x, y) {
        skip:{
            while (lv < 100) {
                if (x + lv > Mw || y + lv > Mh) {
                    break skip;
                }
                for (let i = 0; i < lv; i++) {
                    let res;
                    const tName1 = Tiles[bMap[y + i][x + (lv - 1)]] ? Tiles[bMap[y + i][x + (lv - 1)]].name : null;
                    const tName2 = Tiles[bMap[y + (lv - 1)][x + i]] ? Tiles[bMap[y + (lv - 1)][x + i]].name : null;
                    res = tName1 == t && tName2 == t;
                    if (!res) break skip;
                }
                for (let i = 0; i < lv; i++) {
                    bMap[y + i][x + (lv - 1)] = 0;
                    bMap[y + (lv - 1)][x + i] = 0;
                }
                lv++;
            }
        }
        return lv - 1;
    }
    //
    for (let i = 0; i < bMap.length; i++) {
        let l = [];
        for (let ii = 0; ii < bMap[i].length; ii++) {
            if (bMap[i][ii] === 0) {
                l.push(["", 1, 1, 0]);
            } else {
                const [tID, tFR] = ATMC.getTileID(bMap[i][ii]);
                const T = Tiles[tID];
                if (bMap[i][ii] >= 10000) {
                    l.push([T.name, 1, 1, tFR]);
                } else {
                    // マージ処理
                    let lv = searchBox(2, T.name, ii, i);
                    let lvX = searchStretchX(lv, T.name, ii, i);
                    let lvY = lv == lvX ? searchStretchY(lv, T.name, ii, i) : lv;
                    l.push([T.name, lvX, lvY, 0]);
                }
            }
        }
        ATMC.cMap.push(l);
    }
    //
    ATMC.state = "ready";
    // console.log(ATMC);
});


};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.userFunc0x1e58838(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isReady(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutoAdd() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AddCollisionObjects(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.userFunc0x1e52b98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);

eventsFunctionContext.returnValue = Be._AddTileMapCollision.state == "ready";
};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.userFunc0x1e52b98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReady = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isReadyContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.userFunc0x1e52788 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);

eventsFunctionContext.returnValue = Be._AddTileMapCollision.state == "done";
};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.userFunc0x1e52788(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDone = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.isDoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.userFunc0x1e527d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);
const ATMC = Be._AddTileMapCollision;
//
if (ATMC.state != "ready") {
    console.warn("Not yet ready to generate a collision!");
    ATMC.state = "error";
    return;
}
//
const Ox = Ob.getX();
const Oy = Ob.getY();
const Oz = Ob.getZOrder();
const Tw = ATMC.tw;
const Th = ATMC.th;
const cMap = ATMC.cMap;
//
cMap.forEach((v,i) => {
    v.forEach((vv,ii) => {
        if (vv[0] != "") {
            const CO = runtimeScene.createObject(vv[0]);
            if (CO) {
                CO.setX(Ox + (Tw * ii));
                CO.setY(Oy + (Th * i));
                CO.setZOrder(Oz + 1);
                CO.setWidth(Tw * vv[1]);
                CO.setHeight(Th * vv[2]);
                CO.hide(true);
                if (CO.type == "Sprite") {
                    if (vv[3] === 0) {
                        // ↑
                    } else if (vv[3] === 1) {
                        // ↑
                    } else if (vv[3] === 2) {
                        // →
                        CO.setAngle(90);
                    } else if (vv[3] === 3) {
                        // ↓
                        CO.setAngle(180);
                    } else if (vv[3] === 4) {
                        // ←
                        CO.setAngle(-90);
                    } else if (vv[3] === 5) {
                        // H↑
                        CO.flipX(true);
                    } else if (vv[3] === 6) {
                        // H→
                        CO.flipX(true);
                        CO.setAngle(90);
                    } else if (vv[3] === 7) {
                        // H↓
                        CO.flipX(true);
                        CO.setAngle(180);
                    } else if (vv[3] === 8) {
                        // H←
                        CO.flipX(true);
                        CO.setAngle(-90);
                    }
                }
            }
        }
    });
});
//
ATMC.state = "done";


};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.userFunc0x1e527d8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjects = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.AddCollisionObjectsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.userFunc0x1e2c410 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);
const ATMC = Be._AddTileMapCollision;
//
if (ATMC.state != "ready") {
    console.warn("Not yet ready to generate a collision!");
    ATMC.state = "error";
    return;
}
//
const Ox = Ob.getX();
const Oy = Ob.getY();
const Oz = Ob.getZOrder();
const Tw = ATMC.tw;
const Th = ATMC.th;
const cMap = ATMC.cMap;
//
cMap.forEach((v,i) => {
    v.forEach((vv,ii) => {
        if (vv[0] != "") {
            const CO = runtimeScene.createObject(vv[0]);
            if (CO) {
                CO.setX(Ox + (Tw * ii));
                CO.setY(Oy + (Th * i));
                CO.setZOrder(Oz + 1);
                CO.setWidth(Tw * vv[1]);
                CO.setHeight(Th * vv[2]);
                CO.hide(true);
                if (CO.type == "Sprite") {
                    if (vv[3] === 0) {
                        // ↑
                    } else if (vv[3] === 1) {
                        // ↑
                    } else if (vv[3] === 2) {
                        // →
                        CO.setAngle(90);
                    } else if (vv[3] === 3) {
                        // ↓
                        CO.setAngle(180);
                    } else if (vv[3] === 4) {
                        // ←
                        CO.setAngle(-90);
                    } else if (vv[3] === 5) {
                        // H↑
                        CO.flipX(true);
                    } else if (vv[3] === 6) {
                        // H→
                        CO.flipX(true);
                        CO.setAngle(90);
                    } else if (vv[3] === 7) {
                        // H↓
                        CO.flipX(true);
                        CO.setAngle(180);
                    } else if (vv[3] === 8) {
                        // H←
                        CO.flipX(true);
                        CO.setAngle(-90);
                    }
                }
            }
        }
    });
});
//
ATMC.state = "done";


};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.userFunc0x1e2c410(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollision = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.GenerateCollisionContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.userFunc0x1e58ab8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);
const ATMC = Be._AddTileMapCollision;
const X = eventsFunctionContext.getArgument("X") - Ob.getX();
const Y = eventsFunctionContext.getArgument("Y") - Ob.getY();
const Layer = eventsFunctionContext.getArgument("Layer") || 0;
const L = ATMC.layerIDtoIndex[Layer];
const TX = Math.floor(X / ATMC.tw);
const TY = Math.floor(Y / ATMC.th);

if (L === undefined) {
    console.warn(`Layer ID "${Layer}" not found.`);
    return;
}
if (TX < 0 || TX >= ATMC.map[L][0].length) {
    eventsFunctionContext.returnValue = "";
    return;
}
if (TY < 0 || TY >= ATMC.map[L].length) {
    eventsFunctionContext.returnValue = "";
    return;
}

const [tID, tFR] = ATMC.getTileID(ATMC.map[L][TY][TX]);
eventsFunctionContext.returnValue = ATMC.tiles[tID] ? ATMC.tiles[tID].name : "";


};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.userFunc0x1e58ab8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionName = function(Layer, X, Y, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileCollisionNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.GDObjectObjects1= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.userFunc0x1e2c428 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Ob = eventsFunctionContext.getObjects("Object")[0];
const BeN = eventsFunctionContext.getBehaviorName("Behavior");
const Be = Ob.getBehavior(BeN);
const ATMC = Be._AddTileMapCollision;
const X = eventsFunctionContext.getArgument("X") - Ob.getX();
const Y = eventsFunctionContext.getArgument("Y") - Ob.getY();
const Layer = eventsFunctionContext.getArgument("Layer") || 0;
const L = ATMC.layerIDtoIndex[Layer];
const TX = Math.floor(X / ATMC.tw);
const TY = Math.floor(Y / ATMC.th);

if (L === undefined) {
    console.warn(`Layer ID "${Layer}" not found.`);
    return;
}
if (TX < 0 || TX >= ATMC.map[L][0].length) {
    eventsFunctionContext.returnValue = -1;
    return;
}
if (TY < 0 || TY >= ATMC.map[L].length) {
    eventsFunctionContext.returnValue = -1;
    return;
}

const [tID, tFR] = ATMC.getTileID(ATMC.map[L][TY][TX]);
eventsFunctionContext.returnValue = tID - 1;


};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.userFunc0x1e2c428(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileID = function(Layer, X, Y, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.TileIDContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1= [];
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects2= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ("" + eventsFunctionContext.getArgument("Name") == (( gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TileCollisionName((Number(eventsFunctionContext.getArgument("Layer")) || 0), (Number(eventsFunctionContext.getArgument("X")) || 0), (Number(eventsFunctionContext.getArgument("Y")) || 0), eventsFunctionContext)));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionName = function(Layer, X, Y, Name, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileCollisionNameContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext = {};
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.idToCallbackMap = new Map();
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1= [];
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects2= [];


gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((Number(eventsFunctionContext.getArgument("Id")) || 0) == (( gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TileID((Number(eventsFunctionContext.getArgument("Layer")) || 0), (Number(eventsFunctionContext.getArgument("X")) || 0), (Number(eventsFunctionContext.getArgument("Y")) || 0), eventsFunctionContext)));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileID = function(Layer, X, Y, Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AddTilemapCollisionsExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AddTilemapCollisionsExtension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions.prototype.CheckTileIDContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("AddTilemapCollisionsExtension::AddTilemapCollisions", gdjs.evtsExt__AddTilemapCollisionsExtension__AddTilemapCollisions.AddTilemapCollisions);
