gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.localVariables = [];
gdjs.LevelSelectCode.idToCallbackMap = new Map();
gdjs.LevelSelectCode.GDLevelSelectTextObjects1= [];
gdjs.LevelSelectCode.GDLevelSelectTextObjects2= [];
gdjs.LevelSelectCode.GDCoinIconObjects1= [];
gdjs.LevelSelectCode.GDCoinIconObjects2= [];
gdjs.LevelSelectCode.GDCoinObjects1= [];
gdjs.LevelSelectCode.GDCoinObjects2= [];
gdjs.LevelSelectCode.GDCarObjects1= [];
gdjs.LevelSelectCode.GDCarObjects2= [];
gdjs.LevelSelectCode.GDObstacleObjects1= [];
gdjs.LevelSelectCode.GDObstacleObjects2= [];
gdjs.LevelSelectCode.GDParkingLotObjects1= [];
gdjs.LevelSelectCode.GDParkingLotObjects2= [];
gdjs.LevelSelectCode.GDScore_9595TextObjects1= [];
gdjs.LevelSelectCode.GDScore_9595TextObjects2= [];
gdjs.LevelSelectCode.GDBlackOverlayObjects1= [];
gdjs.LevelSelectCode.GDBlackOverlayObjects2= [];
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects1= [];
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects2= [];
gdjs.LevelSelectCode.GDCollisionDustObjects1= [];
gdjs.LevelSelectCode.GDCollisionDustObjects2= [];
gdjs.LevelSelectCode.GDGoUpObjects1= [];
gdjs.LevelSelectCode.GDGoUpObjects2= [];
gdjs.LevelSelectCode.GDGoLeftObjects1= [];
gdjs.LevelSelectCode.GDGoLeftObjects2= [];
gdjs.LevelSelectCode.GDGoDownObjects1= [];
gdjs.LevelSelectCode.GDGoDownObjects2= [];
gdjs.LevelSelectCode.GDGoRightObjects1= [];
gdjs.LevelSelectCode.GDGoRightObjects2= [];
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects1= [];
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects2= [];
gdjs.LevelSelectCode.GDGrassObjects1= [];
gdjs.LevelSelectCode.GDGrassObjects2= [];
gdjs.LevelSelectCode.GDPauseButtonObjects1= [];
gdjs.LevelSelectCode.GDPauseButtonObjects2= [];
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects1= [];
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects2= [];
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects1= [];
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects2= [];
gdjs.LevelSelectCode.GDTrafficConeObjects1= [];
gdjs.LevelSelectCode.GDTrafficConeObjects2= [];
gdjs.LevelSelectCode.GDGameOverTextObjects1= [];
gdjs.LevelSelectCode.GDGameOverTextObjects2= [];
gdjs.LevelSelectCode.GDGameOverBtnObjects1= [];
gdjs.LevelSelectCode.GDGameOverBtnObjects2= [];
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects1= [];
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects2= [];
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects1= [];
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects2= [];
gdjs.LevelSelectCode.GDLvl_95951Objects1= [];
gdjs.LevelSelectCode.GDLvl_95951Objects2= [];
gdjs.LevelSelectCode.GDNextLevelBtnObjects1= [];
gdjs.LevelSelectCode.GDNextLevelBtnObjects2= [];


gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) <= runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(((gdjs.LevelSelectCode.GDLvl_95951Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectCode.GDLvl_95951Objects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


};gdjs.LevelSelectCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("LevelSave", "Level", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("VipPurchased", "Vip", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].SetLabelTextOp(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0).getAsString(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.LevelSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) == 12 ) {
        isConditionTrue_1 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) == 12 ) {
        isConditionTrue_1 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLvl_95951Objects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLvl_95951Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl_1"), gdjs.LevelSelectCode.GDLvl_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLvl_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLvl_95951Objects1[i].getVariables().getFromIndex(0)) == 11 ) {
        isConditionTrue_1 = true;
        gdjs.LevelSelectCode.GDLvl_95951Objects1[k] = gdjs.LevelSelectCode.GDLvl_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}
}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDLevelSelectTextObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelSelectTextObjects2.length = 0;
gdjs.LevelSelectCode.GDCoinIconObjects1.length = 0;
gdjs.LevelSelectCode.GDCoinIconObjects2.length = 0;
gdjs.LevelSelectCode.GDCoinObjects1.length = 0;
gdjs.LevelSelectCode.GDCoinObjects2.length = 0;
gdjs.LevelSelectCode.GDCarObjects1.length = 0;
gdjs.LevelSelectCode.GDCarObjects2.length = 0;
gdjs.LevelSelectCode.GDObstacleObjects1.length = 0;
gdjs.LevelSelectCode.GDObstacleObjects2.length = 0;
gdjs.LevelSelectCode.GDParkingLotObjects1.length = 0;
gdjs.LevelSelectCode.GDParkingLotObjects2.length = 0;
gdjs.LevelSelectCode.GDScore_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDScore_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDBlackOverlayObjects1.length = 0;
gdjs.LevelSelectCode.GDBlackOverlayObjects2.length = 0;
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDCollisionDustObjects1.length = 0;
gdjs.LevelSelectCode.GDCollisionDustObjects2.length = 0;
gdjs.LevelSelectCode.GDGoUpObjects1.length = 0;
gdjs.LevelSelectCode.GDGoUpObjects2.length = 0;
gdjs.LevelSelectCode.GDGoLeftObjects1.length = 0;
gdjs.LevelSelectCode.GDGoLeftObjects2.length = 0;
gdjs.LevelSelectCode.GDGoDownObjects1.length = 0;
gdjs.LevelSelectCode.GDGoDownObjects2.length = 0;
gdjs.LevelSelectCode.GDGoRightObjects1.length = 0;
gdjs.LevelSelectCode.GDGoRightObjects2.length = 0;
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDGrassObjects1.length = 0;
gdjs.LevelSelectCode.GDGrassObjects2.length = 0;
gdjs.LevelSelectCode.GDPauseButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDPauseButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDTrafficConeObjects1.length = 0;
gdjs.LevelSelectCode.GDTrafficConeObjects2.length = 0;
gdjs.LevelSelectCode.GDGameOverTextObjects1.length = 0;
gdjs.LevelSelectCode.GDGameOverTextObjects2.length = 0;
gdjs.LevelSelectCode.GDGameOverBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDGameOverBtnObjects2.length = 0;
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = 0;
gdjs.LevelSelectCode.GDLvl_95951Objects2.length = 0;
gdjs.LevelSelectCode.GDNextLevelBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDNextLevelBtnObjects2.length = 0;

gdjs.LevelSelectCode.eventsList1(runtimeScene);
gdjs.LevelSelectCode.GDLevelSelectTextObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelSelectTextObjects2.length = 0;
gdjs.LevelSelectCode.GDCoinIconObjects1.length = 0;
gdjs.LevelSelectCode.GDCoinIconObjects2.length = 0;
gdjs.LevelSelectCode.GDCoinObjects1.length = 0;
gdjs.LevelSelectCode.GDCoinObjects2.length = 0;
gdjs.LevelSelectCode.GDCarObjects1.length = 0;
gdjs.LevelSelectCode.GDCarObjects2.length = 0;
gdjs.LevelSelectCode.GDObstacleObjects1.length = 0;
gdjs.LevelSelectCode.GDObstacleObjects2.length = 0;
gdjs.LevelSelectCode.GDParkingLotObjects1.length = 0;
gdjs.LevelSelectCode.GDParkingLotObjects2.length = 0;
gdjs.LevelSelectCode.GDScore_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDScore_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDBlackOverlayObjects1.length = 0;
gdjs.LevelSelectCode.GDBlackOverlayObjects2.length = 0;
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDCollisionDustObjects1.length = 0;
gdjs.LevelSelectCode.GDCollisionDustObjects2.length = 0;
gdjs.LevelSelectCode.GDGoUpObjects1.length = 0;
gdjs.LevelSelectCode.GDGoUpObjects2.length = 0;
gdjs.LevelSelectCode.GDGoLeftObjects1.length = 0;
gdjs.LevelSelectCode.GDGoLeftObjects2.length = 0;
gdjs.LevelSelectCode.GDGoDownObjects1.length = 0;
gdjs.LevelSelectCode.GDGoDownObjects2.length = 0;
gdjs.LevelSelectCode.GDGoRightObjects1.length = 0;
gdjs.LevelSelectCode.GDGoRightObjects2.length = 0;
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.LevelSelectCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.LevelSelectCode.GDGrassObjects1.length = 0;
gdjs.LevelSelectCode.GDGrassObjects2.length = 0;
gdjs.LevelSelectCode.GDPauseButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDPauseButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDTrafficConeObjects1.length = 0;
gdjs.LevelSelectCode.GDTrafficConeObjects2.length = 0;
gdjs.LevelSelectCode.GDGameOverTextObjects1.length = 0;
gdjs.LevelSelectCode.GDGameOverTextObjects2.length = 0;
gdjs.LevelSelectCode.GDGameOverBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDGameOverBtnObjects2.length = 0;
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDLvl_95951Objects1.length = 0;
gdjs.LevelSelectCode.GDLvl_95951Objects2.length = 0;
gdjs.LevelSelectCode.GDNextLevelBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDNextLevelBtnObjects2.length = 0;


return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
