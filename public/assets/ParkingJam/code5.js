gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.GDBuyObjects1= [];
gdjs.ShopCode.GDBuyObjects2= [];
gdjs.ShopCode.GDCoinIconObjects1= [];
gdjs.ShopCode.GDCoinIconObjects2= [];
gdjs.ShopCode.GDCoinObjects1= [];
gdjs.ShopCode.GDCoinObjects2= [];
gdjs.ShopCode.GDCarObjects1= [];
gdjs.ShopCode.GDCarObjects2= [];
gdjs.ShopCode.GDObstacleObjects1= [];
gdjs.ShopCode.GDObstacleObjects2= [];
gdjs.ShopCode.GDParkingLotObjects1= [];
gdjs.ShopCode.GDParkingLotObjects2= [];
gdjs.ShopCode.GDScore_9595TextObjects1= [];
gdjs.ShopCode.GDScore_9595TextObjects2= [];
gdjs.ShopCode.GDBlackOverlayObjects1= [];
gdjs.ShopCode.GDBlackOverlayObjects2= [];
gdjs.ShopCode.GDCurrentLevel_9595TextObjects1= [];
gdjs.ShopCode.GDCurrentLevel_9595TextObjects2= [];
gdjs.ShopCode.GDCollisionDustObjects1= [];
gdjs.ShopCode.GDCollisionDustObjects2= [];
gdjs.ShopCode.GDGoUpObjects1= [];
gdjs.ShopCode.GDGoUpObjects2= [];
gdjs.ShopCode.GDGoLeftObjects1= [];
gdjs.ShopCode.GDGoLeftObjects2= [];
gdjs.ShopCode.GDGoDownObjects1= [];
gdjs.ShopCode.GDGoDownObjects2= [];
gdjs.ShopCode.GDGoRightObjects1= [];
gdjs.ShopCode.GDGoRightObjects2= [];
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects1= [];
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects2= [];
gdjs.ShopCode.GDGrassObjects1= [];
gdjs.ShopCode.GDGrassObjects2= [];
gdjs.ShopCode.GDPauseButtonObjects1= [];
gdjs.ShopCode.GDPauseButtonObjects2= [];
gdjs.ShopCode.GDStartOver_9595ButtonObjects1= [];
gdjs.ShopCode.GDStartOver_9595ButtonObjects2= [];
gdjs.ShopCode.GDNextLevel_9595ButtonObjects1= [];
gdjs.ShopCode.GDNextLevel_9595ButtonObjects2= [];
gdjs.ShopCode.GDTrafficConeObjects1= [];
gdjs.ShopCode.GDTrafficConeObjects2= [];
gdjs.ShopCode.GDGameOverTextObjects1= [];
gdjs.ShopCode.GDGameOverTextObjects2= [];
gdjs.ShopCode.GDGameOverBtnObjects1= [];
gdjs.ShopCode.GDGameOverBtnObjects2= [];
gdjs.ShopCode.GDMainMenu_9595ButtonObjects1= [];
gdjs.ShopCode.GDMainMenu_9595ButtonObjects2= [];
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects1= [];
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects2= [];
gdjs.ShopCode.GDLvl_95951Objects1= [];
gdjs.ShopCode.GDLvl_95951Objects2= [];
gdjs.ShopCode.GDNextLevelBtnObjects1= [];
gdjs.ShopCode.GDNextLevelBtnObjects2= [];


gdjs.ShopCode.asyncCallback29182924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ShopCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
gdjs.ShopCode.localVariables.length = 0;
}
gdjs.ShopCode.idToCallbackMap.set(29182924, gdjs.ShopCode.asyncCallback29182924);
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ShopCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.ShopCode.asyncCallback29182924(runtimeScene, asyncObjectsList)), 29182924, asyncObjectsList);
}
}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buy"), gdjs.ShopCode.GDBuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyObjects1[k] = gdjs.ShopCode.GDBuyObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("VipPurchased", "Vip", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}

{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDBuyObjects1.length = 0;
gdjs.ShopCode.GDBuyObjects2.length = 0;
gdjs.ShopCode.GDCoinIconObjects1.length = 0;
gdjs.ShopCode.GDCoinIconObjects2.length = 0;
gdjs.ShopCode.GDCoinObjects1.length = 0;
gdjs.ShopCode.GDCoinObjects2.length = 0;
gdjs.ShopCode.GDCarObjects1.length = 0;
gdjs.ShopCode.GDCarObjects2.length = 0;
gdjs.ShopCode.GDObstacleObjects1.length = 0;
gdjs.ShopCode.GDObstacleObjects2.length = 0;
gdjs.ShopCode.GDParkingLotObjects1.length = 0;
gdjs.ShopCode.GDParkingLotObjects2.length = 0;
gdjs.ShopCode.GDScore_9595TextObjects1.length = 0;
gdjs.ShopCode.GDScore_9595TextObjects2.length = 0;
gdjs.ShopCode.GDBlackOverlayObjects1.length = 0;
gdjs.ShopCode.GDBlackOverlayObjects2.length = 0;
gdjs.ShopCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.ShopCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.ShopCode.GDCollisionDustObjects1.length = 0;
gdjs.ShopCode.GDCollisionDustObjects2.length = 0;
gdjs.ShopCode.GDGoUpObjects1.length = 0;
gdjs.ShopCode.GDGoUpObjects2.length = 0;
gdjs.ShopCode.GDGoLeftObjects1.length = 0;
gdjs.ShopCode.GDGoLeftObjects2.length = 0;
gdjs.ShopCode.GDGoDownObjects1.length = 0;
gdjs.ShopCode.GDGoDownObjects2.length = 0;
gdjs.ShopCode.GDGoRightObjects1.length = 0;
gdjs.ShopCode.GDGoRightObjects2.length = 0;
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.ShopCode.GDGrassObjects1.length = 0;
gdjs.ShopCode.GDGrassObjects2.length = 0;
gdjs.ShopCode.GDPauseButtonObjects1.length = 0;
gdjs.ShopCode.GDPauseButtonObjects2.length = 0;
gdjs.ShopCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDTrafficConeObjects1.length = 0;
gdjs.ShopCode.GDTrafficConeObjects2.length = 0;
gdjs.ShopCode.GDGameOverTextObjects1.length = 0;
gdjs.ShopCode.GDGameOverTextObjects2.length = 0;
gdjs.ShopCode.GDGameOverBtnObjects1.length = 0;
gdjs.ShopCode.GDGameOverBtnObjects2.length = 0;
gdjs.ShopCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDLvl_95951Objects1.length = 0;
gdjs.ShopCode.GDLvl_95951Objects2.length = 0;
gdjs.ShopCode.GDNextLevelBtnObjects1.length = 0;
gdjs.ShopCode.GDNextLevelBtnObjects2.length = 0;

gdjs.ShopCode.eventsList1(runtimeScene);
gdjs.ShopCode.GDBuyObjects1.length = 0;
gdjs.ShopCode.GDBuyObjects2.length = 0;
gdjs.ShopCode.GDCoinIconObjects1.length = 0;
gdjs.ShopCode.GDCoinIconObjects2.length = 0;
gdjs.ShopCode.GDCoinObjects1.length = 0;
gdjs.ShopCode.GDCoinObjects2.length = 0;
gdjs.ShopCode.GDCarObjects1.length = 0;
gdjs.ShopCode.GDCarObjects2.length = 0;
gdjs.ShopCode.GDObstacleObjects1.length = 0;
gdjs.ShopCode.GDObstacleObjects2.length = 0;
gdjs.ShopCode.GDParkingLotObjects1.length = 0;
gdjs.ShopCode.GDParkingLotObjects2.length = 0;
gdjs.ShopCode.GDScore_9595TextObjects1.length = 0;
gdjs.ShopCode.GDScore_9595TextObjects2.length = 0;
gdjs.ShopCode.GDBlackOverlayObjects1.length = 0;
gdjs.ShopCode.GDBlackOverlayObjects2.length = 0;
gdjs.ShopCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.ShopCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.ShopCode.GDCollisionDustObjects1.length = 0;
gdjs.ShopCode.GDCollisionDustObjects2.length = 0;
gdjs.ShopCode.GDGoUpObjects1.length = 0;
gdjs.ShopCode.GDGoUpObjects2.length = 0;
gdjs.ShopCode.GDGoLeftObjects1.length = 0;
gdjs.ShopCode.GDGoLeftObjects2.length = 0;
gdjs.ShopCode.GDGoDownObjects1.length = 0;
gdjs.ShopCode.GDGoDownObjects2.length = 0;
gdjs.ShopCode.GDGoRightObjects1.length = 0;
gdjs.ShopCode.GDGoRightObjects2.length = 0;
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.ShopCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.ShopCode.GDGrassObjects1.length = 0;
gdjs.ShopCode.GDGrassObjects2.length = 0;
gdjs.ShopCode.GDPauseButtonObjects1.length = 0;
gdjs.ShopCode.GDPauseButtonObjects2.length = 0;
gdjs.ShopCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDTrafficConeObjects1.length = 0;
gdjs.ShopCode.GDTrafficConeObjects2.length = 0;
gdjs.ShopCode.GDGameOverTextObjects1.length = 0;
gdjs.ShopCode.GDGameOverTextObjects2.length = 0;
gdjs.ShopCode.GDGameOverBtnObjects1.length = 0;
gdjs.ShopCode.GDGameOverBtnObjects2.length = 0;
gdjs.ShopCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDLvl_95951Objects1.length = 0;
gdjs.ShopCode.GDLvl_95951Objects2.length = 0;
gdjs.ShopCode.GDNextLevelBtnObjects1.length = 0;
gdjs.ShopCode.GDNextLevelBtnObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
