
if (typeof gdjs.evtsExt__Draw2Physics__CreateAndWledObjects !== "undefined") {
  gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Draw2Physics__CreateAndWledObjects = {};
gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.idToCallbackMap = new Map();


gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.userFunc0x1e516c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// 0) Read your gdjs.Variable parameters directly
const storedXPointsVar = eventsFunctionContext.getArgument("Param_StoredXPoints");
const storedYPointsVar = eventsFunctionContext.getArgument("Param_StoredYPoints");
const rawBrushSize     = eventsFunctionContext.getArgument("Param_BrushSize");
const brushSize        = Number(rawBrushSize);
const hitBoxName       = eventsFunctionContext.getArgument("Param_HitBoxName");

// 1) Read & clear your stroke points
const xs = Object.values(storedXPointsVar.toJSObject());
const ys = Object.values(storedYPointsVar.toJSObject());
storedXPointsVar.clearChildren();
storedYPointsVar.clearChildren();

// Need at least two points for a wall segment
if (xs.length < 2) return;

// 2) Build a list of points
const pts = xs.map((x, i) => ({ x, y: ys[i] }));

// 3) Wall thickness = your BrushSize variable
const halfThickness = ((brushSize * 1.5)/ 1.5);

// 4) Auto-interpolate long segments to prevent gaps
const MAX_SEGMENT_LENGTH = 15;
const smoothPts = [];
for (let i = 0; i < pts.length - 1; i++) {
  const p1 = pts[i];
  const p2 = pts[i + 1];
  smoothPts.push(p1);

  const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
  const steps = Math.floor(dist / MAX_SEGMENT_LENGTH);
  for (let j = 1; j < steps; j++) {
    const t = j / steps;
    smoothPts.push({
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t,
    });
  }
}
smoothPts.push(pts[pts.length - 1]); // add final point

// 5) Generate physical pieces from smooth points
let prevObj = null, prevPhys = null;

for (let i = 0; i < smoothPts.length - 1; i++) {
  const p1 = smoothPts[i], p2 = smoothPts[i + 1];

  // Direction & perpendicular
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const px = -uy, py = ux;

  // Four corners of the quad
  const v1 = [p1.x + px * halfThickness, p1.y + py * halfThickness];
  const v2 = [p1.x - px * halfThickness, p1.y - py * halfThickness];
  const v3 = [p2.x - px * halfThickness, p2.y - py * halfThickness];
  const v4 = [p2.x + px * halfThickness, p2.y + py * halfThickness];

  // Two triangles per quad
  const tris = [
    [v1, v2, v3],
    [v1, v3, v4],
  ];

  for (const tri of tris) {
    // Centroid for object position
    const cx = (tri[0][0] + tri[1][0] + tri[2][0]) / 3;
    const cy = (tri[0][1] + tri[1][1] + tri[2][1]) / 3;

    // Create the physics piece
    const hb = runtimeScene.createObject(hitBoxName);
    hb.setX(cx - 8);
    hb.setY(cy);

    // Set angle to face from p1 to p2
    hb.setAngle(Math.atan2(dy, dx) * (180 / Math.PI));

    // —— UPDATED SCALING: cover the true segment length & brush thickness —— 
    const segmentLength = Math.hypot(dx, dy);
    const spriteW = hb.getWidth()  || 1;
    const spriteH = hb.getHeight() || 1;
    const extraScale = 1.1;

    // Scale X along the segment to its full length:
    hb.setScaleX((segmentLength * extraScale) / spriteW);
    // Scale Y to your brush thickness:
    hb.setScaleY((brushSize     * extraScale) / spriteH);
    // ——————————————————————————————————————————————————————————————

    // Configure Physics2 behavior
    const phys = hb.getBehavior("Physics2");


    // Define custom polygon
    phys.polygon.vertices = tri.map(p => [p[0] - cx, p[1] - cy]);
    phys.recreateShape();

    // Weld this triangle to the previous one for rigid body
    if (prevObj && prevPhys) {
      prevPhys.addWeldJoint(
        prevObj.getCenterX(), prevObj.getCenterY(),
        hb,
        hb.getCenterX(), hb.getCenterY(),
        0,         // angle
        100000,    // frequency: very stiff
        0.01,      // damping
        false,
        hb.getVariables().get("Joint")
      );
    }

    prevObj  = hb;
    prevPhys = phys;
  }
}

};
gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.userFunc0x1e516c0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.func = function(runtimeScene, Param_StoredXPoints, Param_StoredYPoints, Param_BrushSize, Param_HitBoxName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Draw2Physics"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Draw2Physics"),
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
if (argName === "Param_StoredXPoints") return Param_StoredXPoints;
if (argName === "Param_StoredYPoints") return Param_StoredYPoints;
if (argName === "Param_BrushSize") return Param_BrushSize;
if (argName === "Param_HitBoxName") return Param_HitBoxName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Draw2Physics__CreateAndWledObjects.registeredGdjsCallbacks = [];