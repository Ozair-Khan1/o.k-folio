gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDCoinIconObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinIconObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDCarObjects1= [];
gdjs.Untitled_32sceneCode.GDCarObjects2= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects1= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects2= [];
gdjs.Untitled_32sceneCode.GDParkingLotObjects1= [];
gdjs.Untitled_32sceneCode.GDParkingLotObjects2= [];
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects1= [];
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects2= [];
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects1= [];
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects2= [];
gdjs.Untitled_32sceneCode.GDCollisionDustObjects1= [];
gdjs.Untitled_32sceneCode.GDCollisionDustObjects2= [];
gdjs.Untitled_32sceneCode.GDGoUpObjects1= [];
gdjs.Untitled_32sceneCode.GDGoUpObjects2= [];
gdjs.Untitled_32sceneCode.GDGoLeftObjects1= [];
gdjs.Untitled_32sceneCode.GDGoLeftObjects2= [];
gdjs.Untitled_32sceneCode.GDGoDownObjects1= [];
gdjs.Untitled_32sceneCode.GDGoDownObjects2= [];
gdjs.Untitled_32sceneCode.GDGoRightObjects1= [];
gdjs.Untitled_32sceneCode.GDGoRightObjects2= [];
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects1= [];
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDPauseButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDPauseButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDTrafficConeObjects1= [];
gdjs.Untitled_32sceneCode.GDTrafficConeObjects2= [];
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1= [];
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2= [];
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects1= [];
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects2= [];
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDLvl_95951Objects1= [];
gdjs.Untitled_32sceneCode.GDLvl_95951Objects2= [];
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects1= [];
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.clearJSONFile("LevelSave");
}
{gdjs.evtTools.storage.clearJSONFile("VipPurchased");
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDCoinIconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinIconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDParkingLotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDParkingLotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionDustObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionDustObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoLeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoLeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoDownObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoDownObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoRightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoRightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPauseButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPauseButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLvl_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLvl_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDCoinIconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinIconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDParkingLotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDParkingLotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackOverlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionDustObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionDustObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoLeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoLeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoDownObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoDownObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoRightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoRightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPauseButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPauseButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartOver_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevel_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverBtnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMainMenu_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSelectLevel_9595ButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLvl_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLvl_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNextLevelBtnObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
