function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/vhdl_approximate_tanh_design_fixpt_slcfg */
	this.urlHashMap["untitled:1"] = "untitled.vhd:54,55,56,57";
	/* <Root>/out1 */
	this.urlHashMap["untitled:3"] = "msg=rtwMsg_notTraceable&block=untitled:3";
	/* <S1>:1 */
	this.urlHashMap["untitled:1:1"] = "vhdl_approximate_tanh_design_fixpt_slcfg.vhd:143";
	/* <S1>:1:11 */
	this.urlHashMap["untitled:1:1:11"] = "vhdl_approximate_tanh_design_fixpt_slcfg.vhd:151,152,153,154,155,156,157,158,159,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,266,267,268";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/in1"] = {sid: "untitled:2"};
	this.sidHashMap["untitled:2"] = {rtwname: "<Root>/in1"};
	this.rtwnameHashMap["<Root>/vhdl_approximate_tanh_design_fixpt_slcfg"] = {sid: "untitled:1"};
	this.sidHashMap["untitled:1"] = {rtwname: "<Root>/vhdl_approximate_tanh_design_fixpt_slcfg"};
	this.rtwnameHashMap["<Root>/out1"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<Root>/out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "untitled:1:1"};
	this.sidHashMap["untitled:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:1:11"] = {sid: "untitled:1:1:11"};
	this.sidHashMap["untitled:1:1:11"] = {rtwname: "<S1>:1:11"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
