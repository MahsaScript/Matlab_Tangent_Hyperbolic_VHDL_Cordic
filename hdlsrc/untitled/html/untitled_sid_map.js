function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["untitled:2"] = "untitled";
    this.sidParentMap["untitled:1"] = "untitled";
    this.sidParentMap["untitled:3"] = "untitled";
    this.sidParentMap["untitled:1:1"] = "untitled:1";
    this.sidParentMap["untitled:1:1:11"] = "untitled:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
