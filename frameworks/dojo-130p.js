/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

(function(){
var _1=null;
if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){
var _2="",_3="",_4="",_5={},_6={};
_1=_1||djConfig.scopeMap;
for(var i=0;i<_1.length;i++){
var _7=_1[i];
_2+="var "+_7[0]+" = {}; "+_7[1]+" = "+_7[0]+";"+_7[1]+"._scopeName = '"+_7[1]+"';";
_3+=(i==0?"":",")+_7[0];
_4+=(i==0?"":",")+_7[1];
_5[_7[0]]=_7[1];
_6[_7[1]]=_7[0];
}
eval(_2+"dojo._scopeArgs = ["+_4+"];");
dojo._scopePrefixArgs=_3;
dojo._scopePrefix="(function("+_3+"){";
dojo._scopeSuffix="})("+_4+")";
dojo._scopeMap=_5;
dojo._scopeMapRev=_6;
}
(function(){
if(typeof this["loadFirebugConsole"]=="function"){
this["loadFirebugConsole"]();
}else{
this.console=this.console||{};
var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
var i=0,tn;
while((tn=cn[i++])){
if(!console[tn]){
(function(){
var _8=tn+"";
console[_8]=("log" in console)?function(){
var a=Array.apply({},arguments);
a.unshift(_8+":");
console["log"](a.join(" "));
}:function(){
};
})();
}
}
}
if(typeof dojo=="undefined"){
this.dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};
}
var d=dojo;
if(typeof dijit=="undefined"){
this.dijit={_scopeName:"dijit"};
}
if(typeof dojox=="undefined"){
this.dojox={_scopeName:"dojox"};
}
if(!d._scopeArgs){
d._scopeArgs=[dojo,dijit,dojox];
}
d.global=this;
d.config={isDebug:false,debugAtAllCosts:false};
if(typeof djConfig!="undefined"){
for(var _9 in djConfig){
d.config[_9]=djConfig[_9];
}
}
dojo.locale=d.config.locale;
var _a="$Rev: 16807 $".match(/\d+/);
dojo.version={major:1,minor:3,patch:0,flag:"-p",revision:_a?+_a[0]:NaN,toString:function(){
with(d.version){
return major+"."+minor+"."+patch+flag+" ("+revision+")";
}
}};
if(typeof OpenAjax!="undefined"){
OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());
}
var _b={};
dojo._mixin=function(_c,_d){
for(var x in _d){
if(_b[x]===undefined||_b[x]!=_d[x]){
_c[x]=_d[x];
}
}
if(d.isIE&&_d){
var p=_d.toString;
if(typeof p=="function"&&p!=_c.toString&&p!=_b.toString&&p!="\nfunction toString() {\n    [native code]\n}\n"){
_c.toString=_d.toString;
}
}
return _c;
};
dojo.mixin=function(_e,_f){
if(!_e){
_e={};
}
for(var i=1,l=arguments.length;i<l;i++){
d._mixin(_e,arguments[i]);
}
return _e;
};
dojo._getProp=function(_10,_11,_12){
var obj=_12||d.global;
for(var i=0,p;obj&&(p=_10[i]);i++){
if(i==0&&this._scopeMap[p]){
p=this._scopeMap[p];
}
obj=(p in obj?obj[p]:(_11?obj[p]={}:undefined));
}
return obj;
};
dojo.setObject=function(_13,_14,_15){
var _16=_13.split("."),p=_16.pop(),obj=d._getProp(_16,true,_15);
return obj&&p?(obj[p]=_14):undefined;
};
dojo.getObject=function(_17,_18,_19){
return d._getProp(_17.split("."),_18,_19);
};
dojo.exists=function(_1a,obj){
return !!d.getObject(_1a,false,obj);
};
dojo["eval"]=function(_1b){
return d.global.eval?d.global.eval(_1b):eval(_1b);
};
d.deprecated=d.experimental=function(){
};
})();
(function(){
var d=dojo;
d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_1c){
var mp=this._modulePrefixes;
return !!(mp[_1c]&&mp[_1c].value);
},_getModulePrefix:function(_1d){
var mp=this._modulePrefixes;
if(this._moduleHasPrefix(_1d)){
return mp[_1d].value;
}
return _1d;
},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});
dojo._loadPath=function(_1e,_1f,cb){
var uri=((_1e.charAt(0)=="/"||_1e.match(/^\w+:/))?"":this.baseUrl)+_1e;
try{
return !_1f?this._loadUri(uri,cb):this._loadUriAndCheck(uri,_1f,cb);
}
catch(e){
console.error(e);
return false;
}
};
dojo._loadUri=function(uri,cb){
if(this._loadedUrls[uri]){
return true;
}
var _20=this._getText(uri,true);
if(!_20){
return false;
}
this._loadedUrls[uri]=true;
this._loadedUrls.push(uri);
if(cb){
_20="("+_20+")";
}else{
_20=this._scopePrefix+_20+this._scopeSuffix;
}
if(d.isMoz){
_20+="\r\n//@ sourceURL="+uri;
}
var _21=d["eval"](_20);
if(cb){
cb(_21);
}
return true;
};
dojo._loadUriAndCheck=function(uri,_22,cb){
var ok=false;
try{
ok=this._loadUri(uri,cb);
}
catch(e){
console.error("failed loading "+uri+" with error: "+e);
}
return !!(ok&&this._loadedModules[_22]);
};
dojo.loaded=function(){
this._loadNotifying=true;
this._postLoad=true;
var mll=d._loaders;
this._loaders=[];
for(var x=0;x<mll.length;x++){
mll[x]();
}
this._loadNotifying=false;
if(d._postLoad&&d._inFlightCount==0&&mll.length){
d._callLoaded();
}
};
dojo.unloaded=function(){
var mll=d._unloaders;
while(mll.length){
(mll.pop())();
}
};
d._onto=function(arr,obj,fn){
if(!fn){
arr.push(obj);
}else{
if(fn){
var _23=(typeof fn=="string")?obj[fn]:fn;
arr.push(function(){
_23.call(obj);
});
}
}
};
dojo.addOnLoad=function(obj,_24){
d._onto(d._loaders,obj,_24);
if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){
d._callLoaded();
}
};
var dca=d.config.addOnLoad;
if(dca){
d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);
}
dojo._modulesLoaded=function(){
if(d._postLoad){
return;
}
if(d._inFlightCount>0){
console.warn("files still in flight!");
return;
}
d._callLoaded();
};
dojo._callLoaded=function(){
if(typeof setTimeout=="object"||(dojo.config.useXDomain&&d.isOpera)){
if(dojo.isAIR){
setTimeout(function(){
dojo.loaded();
},0);
}else{
setTimeout(dojo._scopeName+".loaded();",0);
}
}else{
d.loaded();
}
};
dojo._getModuleSymbols=function(_25){
var _26=_25.split(".");
for(var i=_26.length;i>0;i--){
var _27=_26.slice(0,i).join(".");
if((i==1)&&!this._moduleHasPrefix(_27)){
_26[0]="../"+_26[0];
}else{
var _28=this._getModulePrefix(_27);
if(_28!=_27){
_26.splice(0,i,_28);
break;
}
}
}
return _26;
};
dojo._global_omit_module_check=false;
dojo.loadInit=function(_29){
_29();
};
dojo._loadModule=dojo.require=function(_2a,_2b){
_2b=this._global_omit_module_check||_2b;
var _2c=this._loadedModules[_2a];
if(_2c){
return _2c;
}
var _2d=this._getModuleSymbols(_2a).join("/")+".js";
var _2e=(!_2b)?_2a:null;
var ok=this._loadPath(_2d,_2e);
if(!ok&&!_2b){
throw new Error("Could not load '"+_2a+"'; last tried '"+_2d+"'");
}
if(!_2b&&!this._isXDomain){
_2c=this._loadedModules[_2a];
if(!_2c){
throw new Error("symbol '"+_2a+"' is not defined after loading '"+_2d+"'");
}
}
return _2c;
};
dojo.provide=function(_2f){
_2f=_2f+"";
return (d._loadedModules[_2f]=d.getObject(_2f,true));
};
dojo.platformRequire=function(_30){
var _31=_30.common||[];
var _32=_31.concat(_30[d._name]||_30["default"]||[]);
for(var x=0;x<_32.length;x++){
var _33=_32[x];
if(_33.constructor==Array){
d._loadModule.apply(d,_33);
}else{
d._loadModule(_33);
}
}
};
dojo.requireIf=function(_34,_35){
if(_34===true){
var _36=[];
for(var i=1;i<arguments.length;i++){
_36.push(arguments[i]);
}
d.require.apply(d,_36);
}
};
dojo.requireAfterIf=d.requireIf;
dojo.registerModulePath=function(_37,_38){
d._modulePrefixes[_37]={name:_37,value:_38};
};
dojo.requireLocalization=function(_39,_3a,_3b,_3c){
d.require("dojo.i18n");
d.i18n._requireLocalization.apply(d.hostenv,arguments);
};
var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$");
var ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");
dojo._Url=function(){
var n=null;
var _a=arguments;
var uri=[_a[0]];
for(var i=1;i<_a.length;i++){
if(!_a[i]){
continue;
}
var _3d=new d._Url(_a[i]+"");
var _3e=new d._Url(uri[0]+"");
if(_3d.path==""&&!_3d.scheme&&!_3d.authority&&!_3d.query){
if(_3d.fragment!=n){
_3e.fragment=_3d.fragment;
}
_3d=_3e;
}else{
if(!_3d.scheme){
_3d.scheme=_3e.scheme;
if(!_3d.authority){
_3d.authority=_3e.authority;
if(_3d.path.charAt(0)!="/"){
var _3f=_3e.path.substring(0,_3e.path.lastIndexOf("/")+1)+_3d.path;
var _40=_3f.split("/");
for(var j=0;j<_40.length;j++){
if(_40[j]=="."){
if(j==_40.length-1){
_40[j]="";
}else{
_40.splice(j,1);
j--;
}
}else{
if(j>0&&!(j==1&&_40[0]=="")&&_40[j]==".."&&_40[j-1]!=".."){
if(j==(_40.length-1)){
_40.splice(j,1);
_40[j-1]="";
}else{
_40.splice(j-1,2);
j-=2;
}
}
}
}
_3d.path=_40.join("/");
}
}
}
}
uri=[];
if(_3d.scheme){
uri.push(_3d.scheme,":");
}
if(_3d.authority){
uri.push("//",_3d.authority);
}
uri.push(_3d.path);
if(_3d.query){
uri.push("?",_3d.query);
}
if(_3d.fragment){
uri.push("#",_3d.fragment);
}
}
this.uri=uri.join("");
var r=this.uri.match(ore);
this.scheme=r[2]||(r[1]?"":n);
this.authority=r[4]||(r[3]?"":n);
this.path=r[5];
this.query=r[7]||(r[6]?"":n);
this.fragment=r[9]||(r[8]?"":n);
if(this.authority!=n){
r=this.authority.match(ire);
this.user=r[3]||n;
this.password=r[4]||n;
this.host=r[6]||r[7];
this.port=r[9]||n;
}
};
dojo._Url.prototype.toString=function(){
return this.uri;
};
dojo.moduleUrl=function(_41,url){
var loc=d._getModuleSymbols(_41).join("/");
if(!loc){
return null;
}
if(loc.lastIndexOf("/")!=loc.length-1){
loc+="/";
}
var _42=loc.indexOf(":");
if(loc.charAt(0)!="/"&&(_42==-1||_42>loc.indexOf("/"))){
loc=d.baseUrl+loc;
}
return new d._Url(loc,url);
};
})();
if(typeof window!="undefined"){
dojo.isBrowser=true;
dojo._name="browser";
(function(){
var d=dojo;
if(document&&document.getElementsByTagName){
var _43=document.getElementsByTagName("script");
var _44=/dojo(\.xd)?\.js(\W|$)/i;
for(var i=0;i<_43.length;i++){
var src=_43[i].getAttribute("src");
if(!src){
continue;
}
var m=src.match(_44);
if(m){
if(!d.config.baseUrl){
d.config.baseUrl=src.substring(0,m.index);
}
var cfg=_43[i].getAttribute("djConfig");
if(cfg){
var _45=eval("({ "+cfg+" })");
for(var x in _45){
dojo.config[x]=_45[x];
}
}
break;
}
}
}
d.baseUrl=d.config.baseUrl;
var n=navigator;
var dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);
if(dua.indexOf("Opera")>=0){
d.isOpera=tv;
}
if(dua.indexOf("AdobeAIR")>=0){
d.isAIR=1;
}
d.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:0;
d.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;
d.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;
var _46=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);
if(_46&&!dojo.isChrome){
d.isSafari=parseFloat(dav.split("Version/")[1]);
if(!d.isSafari||parseFloat(dav.substr(_46+7))<=419.3){
d.isSafari=2;
}
}
if(dua.indexOf("Gecko")>=0&&!d.isKhtml&&!d.isWebKit){
d.isMozilla=d.isMoz=tv;
}
if(d.isMoz){
d.isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1]||dua.split("Shiretoko/")[1])||undefined;
}
if(document.all&&!d.isOpera){
d.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;
if(d.isIE>=8&&document.documentMode!=5){
d.isIE=document.documentMode;
}
}
if(dojo.isIE&&window.location.protocol==="file:"){
dojo.config.ieForceActiveXXhr=true;
}
var cm=document.compatMode;
d.isQuirks=cm=="BackCompat"||cm=="QuirksMode"||d.isIE<6;
d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();
d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];
d._xhrObj=function(){
var _47,_48;
if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){
try{
_47=new XMLHttpRequest();
}
catch(e){
}
}
if(!_47){
for(var i=0;i<3;++i){
var _49=d._XMLHTTP_PROGIDS[i];
try{
_47=new ActiveXObject(_49);
}
catch(e){
_48=e;
}
if(_47){
d._XMLHTTP_PROGIDS=[_49];
break;
}
}
}
if(!_47){
throw new Error("XMLHTTP not available: "+_48);
}
return _47;
};
d._isDocumentOk=function(_4a){
var _4b=_4a.status||0;
return (_4b>=200&&_4b<300)||_4b==304||_4b==1223||(!_4b&&(location.protocol=="file:"||location.protocol=="chrome:"));
};
var _4c=window.location+"";
var _4d=document.getElementsByTagName("base");
var _4e=(_4d&&_4d.length>0);
d._getText=function(uri,_4f){
var _50=this._xhrObj();
if(!_4e&&dojo._Url){
uri=(new dojo._Url(_4c,uri)).toString();
}
if(d.config.cacheBust){
uri+="";
uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");
}
_50.open("GET",uri,false);
try{
_50.send(null);
if(!d._isDocumentOk(_50)){
var err=Error("Unable to load "+uri+" status:"+_50.status);
err.status=_50.status;
err.responseText=_50.responseText;
throw err;
}
}
catch(e){
if(_4f){
return null;
}
throw e;
}
return _50.responseText;
};
var _w=window;
var _51=function(_52,fp){
var _53=_w[_52]||function(){
};
_w[_52]=function(){
fp.apply(_w,arguments);
_53.apply(_w,arguments);
};
};
d._windowUnloaders=[];
d.windowUnloaded=function(){
var mll=d._windowUnloaders;
while(mll.length){
(mll.pop())();
}
};
var _54=0;
d.addOnWindowUnload=function(obj,_55){
d._onto(d._windowUnloaders,obj,_55);
if(!_54){
_54=1;
_51("onunload",d.windowUnloaded);
}
};
var _56=0;
d.addOnUnload=function(obj,_57){
d._onto(d._unloaders,obj,_57);
if(!_56){
_56=1;
_51("onbeforeunload",dojo.unloaded);
}
};
})();
dojo._initFired=false;
dojo._loadInit=function(e){
dojo._initFired=true;
var _58=e&&e.type?e.type.toLowerCase():"load";
if(arguments.callee.initialized||(_58!="domcontentloaded"&&_58!="load")){
return;
}
arguments.callee.initialized=true;
if("_khtmlTimer" in dojo){
clearInterval(dojo._khtmlTimer);
delete dojo._khtmlTimer;
}
if(dojo._inFlightCount==0){
dojo._modulesLoaded();
}
};
if(!dojo.config.afterOnLoad){
if(document.addEventListener){
if(dojo.isWebKit>525||dojo.isOpera||dojo.isFF>=3||(dojo.isMoz&&dojo.config.enableMozDomContentLoaded===true)){
document.addEventListener("DOMContentLoaded",dojo._loadInit,null);
}
window.addEventListener("load",dojo._loadInit,null);
}
if(dojo.isAIR){
window.addEventListener("load",dojo._loadInit,null);
}else{
if((dojo.isWebKit<525)||dojo.isKhtml){
dojo._khtmlTimer=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
dojo._loadInit();
}
},10);
}
}
}
if(dojo.isIE){
if(!dojo.config.afterOnLoad){
document.write("<scr"+"ipt defer src=\"//:\" "+"onreadystatechange=\"if(this.readyState=='complete'){"+dojo._scopeName+"._loadInit();}\">"+"</scr"+"ipt>");
}
try{
document.namespaces.add("v","urn:schemas-microsoft-com:vml");
document.createStyleSheet().addRule("v\\:*","behavior:url(#default#VML);  display:inline-block");
}
catch(e){
}
}
}
(function(){
var mp=dojo.config["modulePaths"];
if(mp){
for(var _59 in mp){
dojo.registerModulePath(_59,mp[_59]);
}
}
})();
if(dojo.config.isDebug){
dojo.require("dojo._firebug.firebug");
}
if(dojo.config.debugAtAllCosts){
dojo.config.useXDomain=true;
dojo.require("dojo._base._loader.loader_xd");
dojo.require("dojo._base._loader.loader_debug");
dojo.require("dojo.i18n");
}
if(!dojo._hasResource["dojo._base.lang"]){
dojo._hasResource["dojo._base.lang"]=true;
dojo.provide("dojo._base.lang");
dojo.isString=function(it){
return !!arguments.length&&it!=null&&(typeof it=="string"||it instanceof String);
};
dojo.isArray=function(it){
return it&&(it instanceof Array||typeof it=="array");
};
dojo.isFunction=(function(){
var _5a=function(it){
var t=typeof it;
return it&&(t=="function"||it instanceof Function);
};
return dojo.isSafari?function(it){
if(typeof it=="function"&&it=="[object NodeList]"){
return false;
}
return _5a(it);
}:_5a;
})();
dojo.isObject=function(it){
return it!==undefined&&(it===null||typeof it=="object"||dojo.isArray(it)||dojo.isFunction(it));
};
dojo.isArrayLike=function(it){
var d=dojo;
return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));
};
dojo.isAlien=function(it){
return it&&!dojo.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
};
dojo.extend=function(_5b,_5c){
for(var i=1,l=arguments.length;i<l;i++){
dojo._mixin(_5b.prototype,arguments[i]);
}
return _5b;
};
dojo._hitchArgs=function(_5d,_5e){
var pre=dojo._toArray(arguments,2);
var _5f=dojo.isString(_5e);
return function(){
var _60=dojo._toArray(arguments);
var f=_5f?(_5d||dojo.global)[_5e]:_5e;
return f&&f.apply(_5d||this,pre.concat(_60));
};
};
dojo.hitch=function(_61,_62){
if(arguments.length>2){
return dojo._hitchArgs.apply(dojo,arguments);
}
if(!_62){
_62=_61;
_61=null;
}
if(dojo.isString(_62)){
_61=_61||dojo.global;
if(!_61[_62]){
throw (["dojo.hitch: scope[\"",_62,"\"] is null (scope=\"",_61,"\")"].join(""));
}
return function(){
return _61[_62].apply(_61,arguments||[]);
};
}
return !_61?_62:function(){
return _62.apply(_61,arguments||[]);
};
};
dojo.delegate=dojo._delegate=(function(){
function TMP(){
};
return function(obj,_63){
TMP.prototype=obj;
var tmp=new TMP();
if(_63){
dojo._mixin(tmp,_63);
}
return tmp;
};
})();
(function(){
var _64=function(obj,_65,_66){
return (_66||[]).concat(Array.prototype.slice.call(obj,_65||0));
};
var _67=function(obj,_68,_69){
var arr=_69||[];
for(var x=_68||0;x<obj.length;x++){
arr.push(obj[x]);
}
return arr;
};
dojo._toArray=dojo.isIE?function(obj){
return ((obj.item)?_67:_64).apply(this,arguments);
}:_64;
})();
dojo.partial=function(_6a){
var arr=[null];
return dojo.hitch.apply(dojo,arr.concat(dojo._toArray(arguments)));
};
dojo.clone=function(o){
if(!o){
return o;
}
if(dojo.isArray(o)){
var r=[];
for(var i=0;i<o.length;++i){
r.push(dojo.clone(o[i]));
}
return r;
}
if(!dojo.isObject(o)){
return o;
}
if(o.nodeType&&o.cloneNode){
return o.cloneNode(true);
}
if(o instanceof Date){
return new Date(o.getTime());
}
r=new o.constructor();
for(i in o){
if(!(i in r)||r[i]!=o[i]){
r[i]=dojo.clone(o[i]);
}
}
return r;
};
dojo.trim=String.prototype.trim?function(str){
return str.trim();
}:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
};
}
if(!dojo._hasResource["dojo._base.declare"]){
dojo._hasResource["dojo._base.declare"]=true;
dojo.provide("dojo._base.declare");
dojo.declare=function(_6b,_6c,_6d){
var dd=arguments.callee,_6e;
if(dojo.isArray(_6c)){
_6e=_6c;
_6c=_6e.shift();
}
if(_6e){
dojo.forEach(_6e,function(m,i){
if(!m){
throw (_6b+": mixin #"+i+" is null");
}
_6c=dd._delegate(_6c,m);
});
}
var _6f=dd._delegate(_6c);
_6d=_6d||{};
_6f.extend(_6d);
dojo.extend(_6f,{declaredClass:_6b,_constructor:_6d.constructor});
_6f.prototype.constructor=_6f;
return dojo.setObject(_6b,_6f);
};
dojo.mixin(dojo.declare,{_delegate:function(_70,_71){
var bp=(_70||0).prototype,mp=(_71||0).prototype,dd=dojo.declare;
var _72=dd._makeCtor();
dojo.mixin(_72,{superclass:bp,mixin:mp,extend:dd._extend});
if(_70){
_72.prototype=dojo._delegate(bp);
}
dojo.extend(_72,dd._core,mp||0,{_constructor:null,preamble:null});
_72.prototype.constructor=_72;
_72.prototype.declaredClass=(bp||0).declaredClass+"_"+(mp||0).declaredClass;
return _72;
},_extend:function(_73){
var i,fn;
for(i in _73){
if(dojo.isFunction(fn=_73[i])&&!0[i]){
fn.nom=i;
fn.ctor=this;
}
}
dojo.extend(this,_73);
},_makeCtor:function(){
return function(){
this._construct(arguments);
};
},_core:{_construct:function(_74){
var c=_74.callee,s=c.superclass,ct=s&&s.constructor,m=c.mixin,mct=m&&m.constructor,a=_74,ii,fn;
if(a[0]){
if(((fn=a[0].preamble))){
a=fn.apply(this,a)||a;
}
}
if((fn=c.prototype.preamble)){
a=fn.apply(this,a)||a;
}
if(ct&&ct.apply){
ct.apply(this,a);
}
if(mct&&mct.apply){
mct.apply(this,a);
}
if((ii=c.prototype._constructor)){
ii.apply(this,_74);
}
if(this.constructor.prototype==c.prototype&&(ct=this.postscript)){
ct.apply(this,_74);
}
},_findMixin:function(_75){
var c=this.constructor,p,m;
while(c){
p=c.superclass;
m=c.mixin;
if(m==_75||(m instanceof _75.constructor)){
return p;
}
if(m&&m._findMixin&&(m=m._findMixin(_75))){
return m;
}
c=p&&p.constructor;
}
},_findMethod:function(_76,_77,_78,has){
var p=_78,c,m,f;
do{
c=p.constructor;
m=c.mixin;
if(m&&(m=this._findMethod(_76,_77,m,has))){
return m;
}
if((f=p[_76])&&(has==(f==_77))){
return p;
}
p=c.superclass;
}while(p);
return !has&&(p=this._findMixin(_78))&&this._findMethod(_76,_77,p,has);
},inherited:function(_79,_7a,_7b){
var a=arguments;
if(!dojo.isString(a[0])){
_7b=_7a;
_7a=_79;
_79=_7a.callee.nom;
}
a=_7b||_7a;
var c=_7a.callee,p=this.constructor.prototype,fn,mp;
if(this[_79]!=c||p[_79]==c){
mp=(c.ctor||0).superclass||this._findMethod(_79,c,p,true);
if(!mp){
throw (this.declaredClass+": inherited method \""+_79+"\" mismatch");
}
p=this._findMethod(_79,c,mp,false);
}
fn=p&&p[_79];
if(!fn){
throw (mp.declaredClass+": inherited method \""+_79+"\" not found");
}
return fn.apply(this,a);
}}});
}
if(!dojo._hasResource["dojo._base.connect"]){
dojo._hasResource["dojo._base.connect"]=true;
dojo.provide("dojo._base.connect");
dojo._listener={getDispatcher:function(){
return function(){
var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target;
var r=t&&t.apply(this,arguments);
var lls;
lls=[].concat(ls);
for(var i in lls){
if(!(i in ap)){
lls[i].apply(this,arguments);
}
}
return r;
};
},add:function(_7c,_7d,_7e){
_7c=_7c||dojo.global;
var f=_7c[_7d];
if(!f||!f._listeners){
var d=dojo._listener.getDispatcher();
d.target=f;
d._listeners=[];
f=_7c[_7d]=d;
}
return f._listeners.push(_7e);
},remove:function(_7f,_80,_81){
var f=(_7f||dojo.global)[_80];
if(f&&f._listeners&&_81--){
delete f._listeners[_81];
}
}};
dojo.connect=function(obj,_82,_83,_84,_85){
var a=arguments,_86=[],i=0;
_86.push(dojo.isString(a[0])?null:a[i++],a[i++]);
var a1=a[i+1];
_86.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);
for(var l=a.length;i<l;i++){
_86.push(a[i]);
}
return dojo._connect.apply(this,_86);
};
dojo._connect=function(obj,_87,_88,_89){
var l=dojo._listener,h=l.add(obj,_87,dojo.hitch(_88,_89));
return [obj,_87,h,l];
};
dojo.disconnect=function(_8a){
if(_8a&&_8a[0]!==undefined){
dojo._disconnect.apply(this,_8a);
delete _8a[0];
}
};
dojo._disconnect=function(obj,_8b,_8c,_8d){
_8d.remove(obj,_8b,_8c);
};
dojo._topics={};
dojo.subscribe=function(_8e,_8f,_90){
return [_8e,dojo._listener.add(dojo._topics,_8e,dojo.hitch(_8f,_90))];
};
dojo.unsubscribe=function(_91){
if(_91){
dojo._listener.remove(dojo._topics,_91[0],_91[1]);
}
};
dojo.publish=function(_92,_93){
var f=dojo._topics[_92];
if(f){
f.apply(this,_93||[]);
}
};
dojo.connectPublisher=function(_94,obj,_95){
var pf=function(){
dojo.publish(_94,arguments);
};
return (_95)?dojo.connect(obj,_95,pf):dojo.connect(obj,pf);
};
}
if(!dojo._hasResource["dojo._base.Deferred"]){
dojo._hasResource["dojo._base.Deferred"]=true;
dojo.provide("dojo._base.Deferred");
dojo.Deferred=function(_96){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_96;
this.silentlyCancelled=false;
};
dojo.extend(dojo.Deferred,{_nextId:(function(){
var n=1;
return function(){
return n++;
};
})(),cancel:function(){
var err;
if(this.fired==-1){
if(this.canceller){
err=this.canceller(this);
}else{
this.silentlyCancelled=true;
}
if(this.fired==-1){
if(!(err instanceof Error)){
var res=err;
var msg="Deferred Cancelled";
if(err&&err.toString){
msg+=": "+err.toString();
}
err=new Error(msg);
err.dojoType="cancel";
err.cancelResult=res;
}
this.errback(err);
}
}else{
if((this.fired==0)&&(this.results[0] instanceof dojo.Deferred)){
this.results[0].cancel();
}
}
},_resback:function(res){
this.fired=((res instanceof Error)?1:0);
this.results[this.fired]=res;
this._fire();
},_check:function(){
if(this.fired!=-1){
if(!this.silentlyCancelled){
throw new Error("already called!");
}
this.silentlyCancelled=false;
return;
}
},callback:function(res){
this._check();
this._resback(res);
},errback:function(res){
this._check();
if(!(res instanceof Error)){
res=new Error(res);
}
this._resback(res);
},addBoth:function(cb,_97){
var _98=dojo.hitch.apply(dojo,arguments);
return this.addCallbacks(_98,_98);
},addCallback:function(cb,_99){
return this.addCallbacks(dojo.hitch.apply(dojo,arguments));
},addErrback:function(cb,_9a){
return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));
},addCallbacks:function(cb,eb){
this.chain.push([cb,eb]);
if(this.fired>=0){
this._fire();
}
return this;
},_fire:function(){
var _9b=this.chain;
var _9c=this.fired;
var res=this.results[_9c];
var _9d=this;
var cb=null;
while((_9b.length>0)&&(this.paused==0)){
var f=_9b.shift()[_9c];
if(!f){
continue;
}
var _9e=function(){
var ret=f(res);
if(typeof ret!="undefined"){
res=ret;
}
_9c=((res instanceof Error)?1:0);
if(res instanceof dojo.Deferred){
cb=function(res){
_9d._resback(res);
_9d.paused--;
if((_9d.paused==0)&&(_9d.fired>=0)){
_9d._fire();
}
};
this.paused++;
}
};
if(dojo.config.debugAtAllCosts){
_9e.call(this);
}else{
try{
_9e.call(this);
}
catch(err){
_9c=1;
res=err;
}
}
}
this.fired=_9c;
this.results[_9c]=res;
if((cb)&&(this.paused)){
res.addBoth(cb);
}
}});
}
if(!dojo._hasResource["dojo._base.json"]){
dojo._hasResource["dojo._base.json"]=true;
dojo.provide("dojo._base.json");
dojo.fromJson=function(_9f){
return eval("("+_9f+")");
};
dojo._escapeString=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
dojo.toJsonIndentStr="\t";
dojo.toJson=function(it,_a0,_a1){
if(it===undefined){
return "undefined";
}
var _a2=typeof it;
if(_a2=="number"||_a2=="boolean"){
return it+"";
}
if(it===null){
return "null";
}
if(dojo.isString(it)){
return dojo._escapeString(it);
}
var _a3=arguments.callee;
var _a4;
_a1=_a1||"";
var _a5=_a0?_a1+dojo.toJsonIndentStr:"";
var tf=it.__json__||it.json;
if(dojo.isFunction(tf)){
_a4=tf.call(it);
if(it!==_a4){
return _a3(_a4,_a0,_a5);
}
}
if(it.nodeType&&it.cloneNode){
throw new Error("Can't serialize DOM nodes");
}
var sep=_a0?" ":"";
var _a6=_a0?"\n":"";
if(dojo.isArray(it)){
var res=dojo.map(it,function(obj){
var val=_a3(obj,_a0,_a5);
if(typeof val!="string"){
val="undefined";
}
return _a6+_a5+val;
});
return "["+res.join(","+sep)+_a6+_a1+"]";
}
if(_a2=="function"){
return null;
}
var _a7=[],key;
for(key in it){
var _a8,val;
if(typeof key=="number"){
_a8="\""+key+"\"";
}else{
if(typeof key=="string"){
_a8=dojo._escapeString(key);
}else{
continue;
}
}
val=_a3(it[key],_a0,_a5);
if(typeof val!="string"){
continue;
}
_a7.push(_a6+_a5+_a8+":"+sep+val);
}
return "{"+_a7.join(","+sep)+_a6+_a1+"}";
};
}
if(!dojo._hasResource["dojo._base.array"]){
dojo._hasResource["dojo._base.array"]=true;
dojo.provide("dojo._base.array");
(function(){
var _a9=function(arr,obj,cb){
return [dojo.isString(arr)?arr.split(""):arr,obj||dojo.global,dojo.isString(cb)?new Function("item","index","array",cb):cb];
};
dojo.mixin(dojo,{indexOf:function(_aa,_ab,_ac,_ad){
var _ae=1,end=_aa.length||0,i=0;
if(_ad){
i=end-1;
_ae=end=-1;
}
if(_ac!=undefined){
i=_ac;
}
if((_ad&&i>end)||i<end){
for(;i!=end;i+=_ae){
if(_aa[i]==_ab){
return i;
}
}
}
return -1;
},lastIndexOf:function(_af,_b0,_b1){
return dojo.indexOf(_af,_b0,_b1,true);
},forEach:function(arr,_b2,_b3){
if(!arr||!arr.length){
return;
}
var _p=_a9(arr,_b3,_b2);
arr=_p[0];
for(var i=0,l=arr.length;i<l;++i){
_p[2].call(_p[1],arr[i],i,arr);
}
},_everyOrSome:function(_b4,arr,_b5,_b6){
var _p=_a9(arr,_b6,_b5);
arr=_p[0];
for(var i=0,l=arr.length;i<l;++i){
var _b7=!!_p[2].call(_p[1],arr[i],i,arr);
if(_b4^_b7){
return _b7;
}
}
return _b4;
},every:function(arr,_b8,_b9){
return this._everyOrSome(true,arr,_b8,_b9);
},some:function(arr,_ba,_bb){
return this._everyOrSome(false,arr,_ba,_bb);
},map:function(arr,_bc,_bd){
var _p=_a9(arr,_bd,_bc);
arr=_p[0];
var _be=(arguments[3]?(new arguments[3]()):[]);
for(var i=0,l=arr.length;i<l;++i){
_be.push(_p[2].call(_p[1],arr[i],i,arr));
}
return _be;
},filter:function(arr,_bf,_c0){
var _p=_a9(arr,_c0,_bf);
arr=_p[0];
var _c1=[];
for(var i=0,l=arr.length;i<l;++i){
if(_p[2].call(_p[1],arr[i],i,arr)){
_c1.push(arr[i]);
}
}
return _c1;
}});
})();
}
if(!dojo._hasResource["dojo._base.Color"]){
dojo._hasResource["dojo._base.Color"]=true;
dojo.provide("dojo._base.Color");
(function(){
var d=dojo;
dojo.Color=function(_c2){
if(_c2){
this.setColor(_c2);
}
};
dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]};
dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){
var t=this;
t.r=r;
t.g=g;
t.b=b;
t.a=a;
},setColor:function(_c3){
if(d.isString(_c3)){
d.colorFromString(_c3,this);
}else{
if(d.isArray(_c3)){
d.colorFromArray(_c3,this);
}else{
this._set(_c3.r,_c3.g,_c3.b,_c3.a);
if(!(_c3 instanceof d.Color)){
this.sanitize();
}
}
}
return this;
},sanitize:function(){
return this;
},toRgb:function(){
var t=this;
return [t.r,t.g,t.b];
},toRgba:function(){
var t=this;
return [t.r,t.g,t.b,t.a];
},toHex:function(){
var arr=d.map(["r","g","b"],function(x){
var s=this[x].toString(16);
return s.length<2?"0"+s:s;
},this);
return "#"+arr.join("");
},toCss:function(_c4){
var t=this,rgb=t.r+", "+t.g+", "+t.b;
return (_c4?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";
},toString:function(){
return this.toCss(true);
}});
dojo.blendColors=function(_c5,end,_c6,obj){
var t=obj||new d.Color();
d.forEach(["r","g","b","a"],function(x){
t[x]=_c5[x]+(end[x]-_c5[x])*_c6;
if(x!="a"){
t[x]=Math.round(t[x]);
}
});
return t.sanitize();
};
dojo.colorFromRgb=function(_c7,obj){
var m=_c7.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
return m&&dojo.colorFromArray(m[1].split(/\s*,\s*/),obj);
};
dojo.colorFromHex=function(_c8,obj){
var t=obj||new d.Color(),_c9=(_c8.length==4)?4:8,_ca=(1<<_c9)-1;
_c8=Number("0x"+_c8.substr(1));
if(isNaN(_c8)){
return null;
}
d.forEach(["b","g","r"],function(x){
var c=_c8&_ca;
_c8>>=_c9;
t[x]=_c9==4?17*c:c;
});
t.a=1;
return t;
};
dojo.colorFromArray=function(a,obj){
var t=obj||new d.Color();
t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));
if(isNaN(t.a)){
t.a=1;
}
return t.sanitize();
};
dojo.colorFromString=function(str,obj){
var a=d.Color.named[str];
return a&&d.colorFromArray(a,obj)||d.colorFromRgb(str,obj)||d.colorFromHex(str,obj);
};
})();
}
if(!dojo._hasResource["dojo._base"]){
dojo._hasResource["dojo._base"]=true;
dojo.provide("dojo._base");
}
if(!dojo._hasResource["dojo._base.window"]){
dojo._hasResource["dojo._base.window"]=true;
dojo.provide("dojo._base.window");
dojo.doc=window["document"]||null;
dojo.body=function(){
return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];
};
dojo.setContext=function(_cb,_cc){
dojo.global=_cb;
dojo.doc=_cc;
};
dojo.withGlobal=function(_cd,_ce,_cf,_d0){
var _d1=dojo.global;
try{
dojo.global=_cd;
return dojo.withDoc.call(null,_cd.document,_ce,_cf,_d0);
}
finally{
dojo.global=_d1;
}
};
dojo.withDoc=function(_d2,_d3,_d4,_d5){
var _d6=dojo.doc,_d7=dojo._bodyLtr;
try{
dojo.doc=_d2;
delete dojo._bodyLtr;
if(_d4&&dojo.isString(_d3)){
_d3=_d4[_d3];
}
return _d3.apply(_d4,_d5||[]);
}
finally{
dojo.doc=_d6;
if(_d7!==undefined){
dojo._bodyLtr=_d7;
}
}
};
}
if(!dojo._hasResource["dojo._base.event"]){
dojo._hasResource["dojo._base.event"]=true;
dojo.provide("dojo._base.event");
(function(){
var del=(dojo._event_listener={add:function(_d8,_d9,fp){
if(!_d8){
return;
}
_d9=del._normalizeEventName(_d9);
fp=del._fixCallback(_d9,fp);
var _da=_d9;
if(!dojo.isIE&&(_d9=="mouseenter"||_d9=="mouseleave")){
var ofp=fp;
_d9=(_d9=="mouseenter")?"mouseover":"mouseout";
fp=function(e){
if(dojo.isFF<=2){
try{
e.relatedTarget.tagName;
}
catch(e2){
return;
}
}
if(!dojo.isDescendant(e.relatedTarget,_d8)){
return ofp.call(this,e);
}
};
}
_d8.addEventListener(_d9,fp,false);
return fp;
},remove:function(_db,_dc,_dd){
if(_db){
_dc=del._normalizeEventName(_dc);
if(!dojo.isIE&&(_dc=="mouseenter"||_dc=="mouseleave")){
_dc=(_dc=="mouseenter")?"mouseover":"mouseout";
}
_db.removeEventListener(_dc,_dd,false);
}
},_normalizeEventName:function(_de){
return _de.slice(0,2)=="on"?_de.slice(2):_de;
},_fixCallback:function(_df,fp){
return _df!="keypress"?fp:function(e){
return fp.call(this,del._fixEvent(e,this));
};
},_fixEvent:function(evt,_e0){
switch(evt.type){
case "keypress":
del._setKeyChar(evt);
break;
}
return evt;
},_setKeyChar:function(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39}});
dojo.fixEvent=function(evt,_e1){
return del._fixEvent(evt,_e1);
};
dojo.stopEvent=function(evt){
evt.preventDefault();
evt.stopPropagation();
};
var _e2=dojo._listener;
dojo._connect=function(obj,_e3,_e4,_e5,_e6){
var _e7=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);
var lid=_e7?(_e6?2:1):0,l=[dojo._listener,del,_e2][lid];
var h=l.add(obj,_e3,dojo.hitch(_e4,_e5));
return [obj,_e3,h,lid];
};
dojo._disconnect=function(obj,_e8,_e9,_ea){
([dojo._listener,del,_e2][_ea]).remove(obj,_e8,_e9);
};
dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145};
if(dojo.isIE){
var _eb=function(e,_ec){
try{
return (e.keyCode=_ec);
}
catch(e){
return 0;
}
};
var iel=dojo._listener;
var _ed=(dojo._ieListenersName="_"+dojo._scopeName+"_listeners");
if(!dojo.config._allow_leaks){
_e2=iel=dojo._ie_listener={handlers:[],add:function(_ee,_ef,_f0){
_ee=_ee||dojo.global;
var f=_ee[_ef];
if(!f||!f[_ed]){
var d=dojo._getIeDispatcher();
d.target=f&&(ieh.push(f)-1);
d[_ed]=[];
f=_ee[_ef]=d;
}
return f[_ed].push(ieh.push(_f0)-1);
},remove:function(_f1,_f2,_f3){
var f=(_f1||dojo.global)[_f2],l=f&&f[_ed];
if(f&&l&&_f3--){
delete ieh[l[_f3]];
delete l[_f3];
}
}};
var ieh=iel.handlers;
}
dojo.mixin(del,{add:function(_f4,_f5,fp){
if(!_f4){
return;
}
_f5=del._normalizeEventName(_f5);
if(_f5=="onkeypress"){
var kd=_f4.onkeydown;
if(!kd||!kd[_ed]||!kd._stealthKeydownHandle){
var h=del.add(_f4,"onkeydown",del._stealthKeyDown);
kd=_f4.onkeydown;
kd._stealthKeydownHandle=h;
kd._stealthKeydownRefs=1;
}else{
kd._stealthKeydownRefs++;
}
}
return iel.add(_f4,_f5,del._fixCallback(fp));
},remove:function(_f6,_f7,_f8){
_f7=del._normalizeEventName(_f7);
iel.remove(_f6,_f7,_f8);
if(_f7=="onkeypress"){
var kd=_f6.onkeydown;
if(--kd._stealthKeydownRefs<=0){
iel.remove(_f6,"onkeydown",kd._stealthKeydownHandle);
delete kd._stealthKeydownHandle;
}
}
},_normalizeEventName:function(_f9){
return _f9.slice(0,2)!="on"?"on"+_f9:_f9;
},_nop:function(){
},_fixEvent:function(evt,_fa){
if(!evt){
var w=_fa&&(_fa.ownerDocument||_fa.document||_fa).parentWindow||window;
evt=w.event;
}
if(!evt){
return (evt);
}
evt.target=evt.srcElement;
evt.currentTarget=(_fa||evt.srcElement);
evt.layerX=evt.offsetX;
evt.layerY=evt.offsetY;
var se=evt.srcElement,doc=(se&&se.ownerDocument)||document;
var _fb=((dojo.isIE<6)||(doc["compatMode"]=="BackCompat"))?doc.body:doc.documentElement;
var _fc=dojo._getIeDocumentElementOffset();
evt.pageX=evt.clientX+dojo._fixIeBiDiScrollLeft(_fb.scrollLeft||0)-_fc.x;
evt.pageY=evt.clientY+(_fb.scrollTop||0)-_fc.y;
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
evt.stopPropagation=del._stopPropagation;
evt.preventDefault=del._preventDefault;
return del._fixKeys(evt);
},_fixKeys:function(evt){
switch(evt.type){
case "keypress":
var c=("charCode" in evt?evt.charCode:evt.keyCode);
if(c==10){
c=0;
evt.keyCode=13;
}else{
if(c==13||c==27){
c=0;
}else{
if(c==3){
c=99;
}
}
}
evt.charCode=c;
del._setKeyChar(evt);
break;
}
return evt;
},_stealthKeyDown:function(evt){
var kp=evt.currentTarget.onkeypress;
if(!kp||!kp[_ed]){
return;
}
var k=evt.keyCode;
var _fd=k!=13&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);
if(_fd||evt.ctrlKey){
var c=_fd?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return;
}else{
if(c>95&&c<106){
c-=48;
}else{
if((!evt.shiftKey)&&(c>=65&&c<=90)){
c+=32;
}else{
c=del._punctMap[c]||c;
}
}
}
}
var _fe=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});
kp.call(evt.currentTarget,_fe);
evt.cancelBubble=_fe.cancelBubble;
evt.returnValue=_fe.returnValue;
_eb(evt,_fe.keyCode);
}
},_stopPropagation:function(){
this.cancelBubble=true;
},_preventDefault:function(){
this.bubbledKeyCode=this.keyCode;
if(this.ctrlKey){
_eb(this,0);
}
this.returnValue=false;
}});
dojo.stopEvent=function(evt){
evt=evt||window.event;
del._stopPropagation.call(evt);
del._preventDefault.call(evt);
};
}
del._synthesizeEvent=function(evt,_ff){
var faux=dojo.mixin({},evt,_ff);
del._setKeyChar(faux);
faux.preventDefault=function(){
evt.preventDefault();
};
faux.stopPropagation=function(){
evt.stopPropagation();
};
return faux;
};
if(dojo.isOpera){
dojo.mixin(del,{_fixEvent:function(evt,_100){
switch(evt.type){
case "keypress":
var c=evt.which;
if(c==3){
c=99;
}
c=c<41&&!evt.shiftKey?0:c;
if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}
return del._synthesizeEvent(evt,{charCode:c});
}
return evt;
}});
}
if(dojo.isWebKit){
del._add=del.add;
del._remove=del.remove;
dojo.mixin(del,{add:function(node,_101,fp){
if(!node){
return;
}
var _102=del._add(node,_101,fp);
if(del._normalizeEventName(_101)=="keypress"){
_102._stealthKeyDownHandle=del._add(node,"keydown",function(evt){
var k=evt.keyCode;
var _103=k!=13&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);
if(_103||evt.ctrlKey){
var c=_103?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return;
}else{
if(c>95&&c<106){
c-=48;
}else{
if(!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}else{
c=del._punctMap[c]||c;
}
}
}
}
var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});
fp.call(evt.currentTarget,faux);
}
});
}
return _102;
},remove:function(node,_104,_105){
if(node){
if(_105._stealthKeyDownHandle){
del._remove(node,"keydown",_105._stealthKeyDownHandle);
}
del._remove(node,_104,_105);
}
},_fixEvent:function(evt,_106){
switch(evt.type){
case "keypress":
if(evt.faux){
return evt;
}
var c=evt.charCode;
c=c>=32?c:0;
return del._synthesizeEvent(evt,{charCode:c,faux:true});
}
return evt;
}});
}
})();
if(dojo.isIE){
dojo._ieDispatcher=function(args,_107){
var ap=Array.prototype,h=dojo._ie_listener.handlers,c=args.callee,ls=c[dojo._ieListenersName],t=h[c.target];
var r=t&&t.apply(_107,args);
var lls=[].concat(ls);
for(var i in lls){
if(!(i in ap)){
h[lls[i]].apply(_107,args);
}
}
return r;
};
dojo._getIeDispatcher=function(){
return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)");
};
dojo._event_listener._fixCallback=function(fp){
var f=dojo._event_listener._fixEvent;
return function(e){
return fp.call(this,f(e,this));
};
};
}
}
if(!dojo._hasResource["dojo._base.html"]){
dojo._hasResource["dojo._base.html"]=true;
dojo.provide("dojo._base.html");
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
if(dojo.isIE||dojo.isOpera){
dojo.byId=function(id,doc){
if(dojo.isString(id)){
var _d=doc||dojo.doc;
var te=_d.getElementById(id);
if(te&&(te.attributes.id.value==id||te.id==id)){
return te;
}else{
var eles=_d.all[id];
if(!eles||eles.nodeName){
eles=[eles];
}
var i=0;
while((te=eles[i++])){
if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){
return te;
}
}
}
}else{
return id;
}
};
}else{
dojo.byId=function(id,doc){
return dojo.isString(id)?(doc||dojo.doc).getElementById(id):id;
};
}
(function(){
var d=dojo;
var _108=null;
d.addOnWindowUnload(function(){
_108=null;
});
dojo._destroyElement=dojo.destroy=function(node){
node=d.byId(node);
try{
if(!_108||_108.ownerDocument!=node.ownerDocument){
_108=node.ownerDocument.createElement("div");
}
_108.appendChild(node.parentNode?node.parentNode.removeChild(node):node);
_108.innerHTML="";
}
catch(e){
}
};
dojo.isDescendant=function(node,_109){
try{
node=d.byId(node);
_109=d.byId(_109);
while(node){
if(node===_109){
return true;
}
node=node.parentNode;
}
}
catch(e){
}
return false;
};
dojo.setSelectable=function(node,_10a){
node=d.byId(node);
if(d.isMozilla){
node.style.MozUserSelect=_10a?"":"none";
}else{
if(d.isKhtml||d.isWebKit){
node.style.KhtmlUserSelect=_10a?"auto":"none";
}else{
if(d.isIE){
var v=(node.unselectable=_10a?"":"on");
d.query("*",node).forEach("item.unselectable = '"+v+"'");
}
}
}
};
var _10b=function(node,ref){
var _10c=ref.parentNode;
if(_10c){
_10c.insertBefore(node,ref);
}
};
var _10d=function(node,ref){
var _10e=ref.parentNode;
if(_10e){
if(_10e.lastChild==ref){
_10e.appendChild(node);
}else{
_10e.insertBefore(node,ref.nextSibling);
}
}
};
dojo.place=function(node,_10f,_110){
_10f=d.byId(_10f);
if(d.isString(node)){
node=node.charAt(0)=="<"?d._toDom(node,_10f.ownerDocument):d.byId(node);
}
if(typeof _110=="number"){
var cn=_10f.childNodes;
if(!cn.length||cn.length<=_110){
_10f.appendChild(node);
}else{
_10b(node,cn[_110<0?0:_110]);
}
}else{
switch(_110){
case "before":
_10b(node,_10f);
break;
case "after":
_10d(node,_10f);
break;
case "replace":
_10f.parentNode.replaceChild(node,_10f);
break;
case "only":
d.empty(_10f);
_10f.appendChild(node);
break;
case "first":
if(_10f.firstChild){
_10b(node,_10f.firstChild);
break;
}
default:
_10f.appendChild(node);
}
}
return node;
};
dojo.boxModel="content-box";
if(d.isIE){
var _dcm=document.compatMode;
d.boxModel=_dcm=="BackCompat"||_dcm=="QuirksMode"||d.isIE<6?"border-box":"content-box";
}
var gcs;
if(d.isWebKit){
gcs=function(node){
var s;
if(node instanceof HTMLElement){
var dv=node.ownerDocument.defaultView;
s=dv.getComputedStyle(node,null);
if(!s&&node.style){
node.style.display="";
s=dv.getComputedStyle(node,null);
}
}
return s||{};
};
}else{
if(d.isIE){
gcs=function(node){
return node.nodeType==1?node.currentStyle:{};
};
}else{
gcs=function(node){
return node instanceof HTMLElement?node.ownerDocument.defaultView.getComputedStyle(node,null):{};
};
}
}
dojo.getComputedStyle=gcs;
if(!d.isIE){
d._toPixelValue=function(_111,_112){
return parseFloat(_112)||0;
};
}else{
d._toPixelValue=function(_113,_114){
if(!_114){
return 0;
}
if(_114=="medium"){
return 4;
}
if(_114.slice&&_114.slice(-2)=="px"){
return parseFloat(_114);
}
with(_113){
var _115=style.left;
var _116=runtimeStyle.left;
runtimeStyle.left=currentStyle.left;
try{
style.left=_114;
_114=style.pixelLeft;
}
catch(e){
_114=0;
}
style.left=_115;
runtimeStyle.left=_116;
}
return _114;
};
}
var px=d._toPixelValue;
var astr="DXImageTransform.Microsoft.Alpha";
var af=function(n,f){
try{
return n.filters.item(astr);
}
catch(e){
return f?{}:null;
}
};
dojo._getOpacity=d.isIE?function(node){
try{
return af(node).Opacity/100;
}
catch(e){
return 1;
}
}:function(node){
return gcs(node).opacity;
};
dojo._setOpacity=d.isIE?function(node,_117){
var ov=_117*100;
node.style.zoom=1;
af(node,1).Enabled=!(_117==1);
if(!af(node)){
node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";
}else{
af(node,1).Opacity=ov;
}
if(node.nodeName.toLowerCase()=="tr"){
d.query("> td",node).forEach(function(i){
d._setOpacity(i,_117);
});
}
return _117;
}:function(node,_118){
return node.style.opacity=_118;
};
var _119={left:true,top:true};
var _11a=/margin|padding|width|height|max|min|offset/;
var _11b=function(node,type,_11c){
type=type.toLowerCase();
if(d.isIE){
if(_11c=="auto"){
if(type=="height"){
return node.offsetHeight;
}
if(type=="width"){
return node.offsetWidth;
}
}
if(type=="fontweight"){
switch(_11c){
case 700:
return "bold";
case 400:
default:
return "normal";
}
}
}
if(!(type in _119)){
_119[type]=_11a.test(type);
}
return _119[type]?px(node,_11c):_11c;
};
var _11d=d.isIE?"styleFloat":"cssFloat",_11e={"cssFloat":_11d,"styleFloat":_11d,"float":_11d};
dojo.style=function(node,_11f,_120){
var n=d.byId(node),args=arguments.length,op=(_11f=="opacity");
_11f=_11e[_11f]||_11f;
if(args==3){
return op?d._setOpacity(n,_120):n.style[_11f]=_120;
}
if(args==2&&op){
return d._getOpacity(n);
}
var s=gcs(n);
if(args==2&&!d.isString(_11f)){
for(var x in _11f){
d.style(node,x,_11f[x]);
}
return s;
}
return (args==1)?s:_11b(n,_11f,s[_11f]||n.style[_11f]);
};
dojo._getPadExtents=function(n,_121){
var s=_121||gcs(n),l=px(n,s.paddingLeft),t=px(n,s.paddingTop);
return {l:l,t:t,w:l+px(n,s.paddingRight),h:t+px(n,s.paddingBottom)};
};
dojo._getBorderExtents=function(n,_122){
var ne="none",s=_122||gcs(n),bl=(s.borderLeftStyle!=ne?px(n,s.borderLeftWidth):0),bt=(s.borderTopStyle!=ne?px(n,s.borderTopWidth):0);
return {l:bl,t:bt,w:bl+(s.borderRightStyle!=ne?px(n,s.borderRightWidth):0),h:bt+(s.borderBottomStyle!=ne?px(n,s.borderBottomWidth):0)};
};
dojo._getPadBorderExtents=function(n,_123){
var s=_123||gcs(n),p=d._getPadExtents(n,s),b=d._getBorderExtents(n,s);
return {l:p.l+b.l,t:p.t+b.t,w:p.w+b.w,h:p.h+b.h};
};
dojo._getMarginExtents=function(n,_124){
var s=_124||gcs(n),l=px(n,s.marginLeft),t=px(n,s.marginTop),r=px(n,s.marginRight),b=px(n,s.marginBottom);
if(d.isWebKit&&(s.position!="absolute")){
r=l;
}
return {l:l,t:t,w:l+r,h:t+b};
};
dojo._getMarginBox=function(node,_125){
var s=_125||gcs(node),me=d._getMarginExtents(node,s);
var l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode;
if(d.isMoz){
var sl=parseFloat(s.left),st=parseFloat(s.top);
if(!isNaN(sl)&&!isNaN(st)){
l=sl,t=st;
}else{
if(p&&p.style){
var pcs=gcs(p);
if(pcs.overflow!="visible"){
var be=d._getBorderExtents(p,pcs);
l+=be.l,t+=be.t;
}
}
}
}else{
if(d.isOpera||(d.isIE>7&&!d.isQuirks)){
if(p){
be=d._getBorderExtents(p);
l-=be.l;
t-=be.t;
}
}
}
return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};
};
dojo._getContentBox=function(node,_126){
var s=_126||gcs(node),pe=d._getPadExtents(node,s),be=d._getBorderExtents(node,s),w=node.clientWidth,h;
if(!w){
w=node.offsetWidth,h=node.offsetHeight;
}else{
h=node.clientHeight,be.w=be.h=0;
}
if(d.isOpera){
pe.l+=be.l;
pe.t+=be.t;
}
return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};
};
dojo._getBorderBox=function(node,_127){
var s=_127||gcs(node),pe=d._getPadExtents(node,s),cb=d._getContentBox(node,s);
return {l:cb.l-pe.l,t:cb.t-pe.t,w:cb.w+pe.w,h:cb.h+pe.h};
};
dojo._setBox=function(node,l,t,w,h,u){
u=u||"px";
var s=node.style;
if(!isNaN(l)){
s.left=l+u;
}
if(!isNaN(t)){
s.top=t+u;
}
if(w>=0){
s.width=w+u;
}
if(h>=0){
s.height=h+u;
}
};
dojo._isButtonTag=function(node){
return node.tagName=="BUTTON"||node.tagName=="INPUT"&&node.getAttribute("type").toUpperCase()=="BUTTON";
};
dojo._usesBorderBox=function(node){
var n=node.tagName;
return d.boxModel=="border-box"||n=="TABLE"||d._isButtonTag(node);
};
dojo._setContentSize=function(node,_128,_129,_12a){
if(d._usesBorderBox(node)){
var pb=d._getPadBorderExtents(node,_12a);
if(_128>=0){
_128+=pb.w;
}
if(_129>=0){
_129+=pb.h;
}
}
d._setBox(node,NaN,NaN,_128,_129);
};
dojo._setMarginBox=function(node,_12b,_12c,_12d,_12e,_12f){
var s=_12f||gcs(node),bb=d._usesBorderBox(node),pb=bb?_130:d._getPadBorderExtents(node,s);
if(d.isWebKit){
if(d._isButtonTag(node)){
var ns=node.style;
if(_12d>=0&&!ns.width){
ns.width="4px";
}
if(_12e>=0&&!ns.height){
ns.height="4px";
}
}
}
var mb=d._getMarginExtents(node,s);
if(_12d>=0){
_12d=Math.max(_12d-pb.w-mb.w,0);
}
if(_12e>=0){
_12e=Math.max(_12e-pb.h-mb.h,0);
}
d._setBox(node,_12b,_12c,_12d,_12e);
};
var _130={l:0,t:0,w:0,h:0};
dojo.marginBox=function(node,box){
var n=d.byId(node),s=gcs(n),b=box;
return !b?d._getMarginBox(n,s):d._setMarginBox(n,b.l,b.t,b.w,b.h,s);
};
dojo.contentBox=function(node,box){
var n=d.byId(node),s=gcs(n),b=box;
return !b?d._getContentBox(n,s):d._setContentSize(n,b.w,b.h,s);
};
var _131=function(node,prop){
if(!(node=(node||0).parentNode)){
return 0;
}
var val,_132=0,_b=d.body();
while(node&&node.style){
if(gcs(node).position=="fixed"){
return 0;
}
val=node[prop];
if(val){
_132+=val-0;
if(node==_b){
break;
}
}
node=node.parentNode;
}
return _132;
};
dojo._docScroll=function(){
var _b=d.body(),_w=d.global,de=d.doc.documentElement;
return {y:(_w.pageYOffset||de.scrollTop||_b.scrollTop||0),x:(_w.pageXOffset||d._fixIeBiDiScrollLeft(de.scrollLeft)||_b.scrollLeft||0)};
};
dojo._isBodyLtr=function(){
return ("_bodyLtr" in d)?d._bodyLtr:d._bodyLtr=gcs(d.body()).direction=="ltr";
};
dojo._getIeDocumentElementOffset=function(){
var de=d.doc.documentElement;
if(d.isIE<7){
return {x:d._isBodyLtr()||window.parent==window?de.clientLeft:de.offsetWidth-de.clientWidth-de.clientLeft,y:de.clientTop};
}else{
if(d.isIE<8){
return {x:de.getBoundingClientRect().left,y:de.getBoundingClientRect().top};
}else{
return {x:0,y:0};
}
}
};
dojo._fixIeBiDiScrollLeft=function(_133){
var dd=d.doc;
if(d.isIE<8&&!d._isBodyLtr()){
var de=dd.compatMode=="BackCompat"?dd.body:dd.documentElement;
return _133+de.clientWidth-de.scrollWidth;
}
return _133;
};
dojo._abs=function(node,_134){
var db=d.body(),dh=d.body().parentNode,ret;
if(node["getBoundingClientRect"]){
var _135=node.getBoundingClientRect();
ret={x:_135.left,y:_135.top};
if(d.isFF>=3){
var cs=gcs(dh);
ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);
ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);
}
if(d.isIE){
var _136=d._getIeDocumentElementOffset();
ret.x-=_136.x+(d.isQuirks?db.clientLeft:0);
ret.y-=_136.y+(d.isQuirks?db.clientTop:0);
}
}else{
ret={x:0,y:0};
if(node["offsetParent"]){
ret.x-=_131(node,"scrollLeft");
ret.y-=_131(node,"scrollTop");
var _137=node;
do{
var n=_137.offsetLeft,t=_137.offsetTop;
ret.x+=isNaN(n)?0:n;
ret.y+=isNaN(t)?0:t;
cs=gcs(_137);
if(_137!=node){
if(d.isFF){
ret.x+=2*px(_137,cs.borderLeftWidth);
ret.y+=2*px(_137,cs.borderTopWidth);
}else{
ret.x+=px(_137,cs.borderLeftWidth);
ret.y+=px(_137,cs.borderTopWidth);
}
}
if(d.isFF&&cs.position=="static"){
var _138=_137.parentNode;
while(_138!=_137.offsetParent){
var pcs=gcs(_138);
if(pcs.position=="static"){
ret.x+=px(_137,pcs.borderLeftWidth);
ret.y+=px(_137,pcs.borderTopWidth);
}
_138=_138.parentNode;
}
}
_137=_137.offsetParent;
}while((_137!=dh)&&_137);
}else{
if(node.x&&node.y){
ret.x+=isNaN(node.x)?0:node.x;
ret.y+=isNaN(node.y)?0:node.y;
}
}
}
if(_134){
var _139=d._docScroll();
ret.x+=_139.x;
ret.y+=_139.y;
}
return ret;
};
dojo.coords=function(node,_13a){
var n=d.byId(node),s=gcs(n),mb=d._getMarginBox(n,s);
var abs=d._abs(n,_13a);
mb.x=abs.x;
mb.y=abs.y;
return mb;
};
var _13b=d.isIE<8;
var _13c=function(name){
switch(name.toLowerCase()){
case "tabindex":
return _13b?"tabIndex":"tabindex";
case "readonly":
return "readOnly";
case "class":
return "className";
case "for":
case "htmlfor":
return _13b?"htmlFor":"for";
default:
return name;
}
};
var _13d={colspan:"colSpan",enctype:"enctype",frameborder:"frameborder",method:"method",rowspan:"rowSpan",scrolling:"scrolling",shape:"shape",span:"span",type:"type",valuetype:"valueType",classname:"className",innerhtml:"innerHTML"};
dojo.hasAttr=function(node,name){
node=d.byId(node);
var _13e=_13c(name);
_13e=_13e=="htmlFor"?"for":_13e;
var attr=node.getAttributeNode&&node.getAttributeNode(_13e);
return attr?attr.specified:false;
};
var _13f={},_ctr=0,_140=dojo._scopeName+"attrid",_141={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};
dojo.attr=function(node,name,_142){
node=d.byId(node);
var args=arguments.length;
if(args==2&&!d.isString(name)){
for(var x in name){
d.attr(node,x,name[x]);
}
return;
}
name=_13c(name);
if(args==3){
if(d.isFunction(_142)){
var _143=d.attr(node,_140);
if(!_143){
_143=_ctr++;
d.attr(node,_140,_143);
}
if(!_13f[_143]){
_13f[_143]={};
}
var h=_13f[_143][name];
if(h){
d.disconnect(h);
}else{
try{
delete node[name];
}
catch(e){
}
}
_13f[_143][name]=d.connect(node,name,_142);
}else{
if(typeof _142=="boolean"){
node[name]=_142;
}else{
if(name==="style"&&!d.isString(_142)){
d.style(node,_142);
}else{
if(name=="className"){
node.className=_142;
}else{
if(name==="innerHTML"){
if(d.isIE&&node.tagName.toLowerCase() in _141){
d.empty(node);
node.appendChild(d._toDom(_142,node.ownerDocument));
}else{
node[name]=_142;
}
}else{
node.setAttribute(name,_142);
}
}
}
}
}
}else{
var prop=_13d[name.toLowerCase()];
if(prop){
return node[prop];
}
var _144=node[name];
return (typeof _144=="boolean"||typeof _144=="function")?_144:(d.hasAttr(node,name)?node.getAttribute(name):null);
}
};
dojo.removeAttr=function(node,name){
d.byId(node).removeAttribute(_13c(name));
};
dojo.create=function(tag,_145,_146,pos){
var doc=d.doc;
if(_146){
_146=d.byId(_146);
doc=_146.ownerDocument;
}
if(d.isString(tag)){
tag=doc.createElement(tag);
}
if(_145){
d.attr(tag,_145);
}
if(_146){
d.place(tag,_146,pos);
}
return tag;
};
d.empty=d.isIE?function(node){
node=d.byId(node);
for(var c;c=node.lastChild;){
d.destroy(c);
}
}:function(node){
d.byId(node).innerHTML="";
};
var _147={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_148=/<\s*([\w\:]+)/,_149={},_14a=0,_14b="__"+d._scopeName+"ToDomId";
for(var _14c in _147){
var tw=_147[_14c];
tw.pre=_14c=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";
tw.post="</"+tw.reverse().join("></")+">";
}
d._toDom=function(frag,doc){
doc=doc||d.doc;
var _14d=doc[_14b];
if(!_14d){
doc[_14b]=_14d=++_14a+"";
_149[_14d]=doc.createElement("div");
}
frag+="";
var _14e=frag.match(_148),tag=_14e?_14e[1].toLowerCase():"",_14f=_149[_14d],wrap,i,fc,df;
if(_14e&&_147[tag]){
wrap=_147[tag];
_14f.innerHTML=wrap.pre+frag+wrap.post;
for(i=wrap.length;i;--i){
_14f=_14f.firstChild;
}
}else{
_14f.innerHTML=frag;
}
if(_14f.childNodes.length==1){
return _14f.removeChild(_14f.firstChild);
}
df=doc.createDocumentFragment();
while(fc=_14f.firstChild){
df.appendChild(fc);
}
return df;
};
var _150="className";
dojo.hasClass=function(node,_151){
return ((" "+d.byId(node)[_150]+" ").indexOf(" "+_151+" ")>=0);
};
dojo.addClass=function(node,_152){
node=d.byId(node);
var cls=node[_150];
if((" "+cls+" ").indexOf(" "+_152+" ")<0){
node[_150]=cls+(cls?" ":"")+_152;
}
};
dojo.removeClass=function(node,_153){
node=d.byId(node);
var t=d.trim((" "+node[_150]+" ").replace(" "+_153+" "," "));
if(node[_150]!=t){
node[_150]=t;
}
};
dojo.toggleClass=function(node,_154,_155){
if(_155===undefined){
_155=!d.hasClass(node,_154);
}
d[_155?"addClass":"removeClass"](node,_154);
};
})();
}
if(!dojo._hasResource["dojo._base.NodeList"]){
dojo._hasResource["dojo._base.NodeList"]=true;
dojo.provide("dojo._base.NodeList");
(function(){
var d=dojo;
var ap=Array.prototype,aps=ap.slice,apc=ap.concat;
var tnl=function(a){
a.constructor=d.NodeList;
dojo._mixin(a,d.NodeList.prototype);
return a;
};
var _156=function(f,a,o){
a=[0].concat(aps.call(a,0));
o=o||d.global;
return function(node){
a[0]=node;
return f.apply(o,a);
};
};
var _157=function(f,o){
return function(){
this.forEach(_156(f,arguments,o));
return this;
};
};
var _158=function(f,o){
return function(){
return this.map(_156(f,arguments,o));
};
};
var _159=function(f,o){
return function(){
return this.filter(_156(f,arguments,o));
};
};
var _15a=function(f,g,o){
return function(){
var a=arguments,body=_156(f,a,o);
if(g.call(o||d.global,a)){
return this.map(body);
}
this.forEach(body);
return this;
};
};
var _15b=function(a){
return a.length==1&&d.isString(a[0]);
};
var _15c=function(node){
var p=node.parentNode;
if(p){
p.removeChild(node);
}
};
dojo.NodeList=function(){
return tnl(Array.apply(null,arguments));
};
var nl=d.NodeList,nlp=nl.prototype;
nl._wrap=tnl;
nl._adaptAsMap=_158;
nl._adaptAsForEach=_157;
nl._adaptAsFilter=_159;
nl._adaptWithCondition=_15a;
d.forEach(["slice","splice"],function(name){
var f=ap[name];
nlp[name]=function(){
return tnl(f.apply(this,arguments));
};
});
d.forEach(["indexOf","lastIndexOf","every","some"],function(name){
var f=d[name];
nlp[name]=function(){
return f.apply(d,[this].concat(aps.call(arguments,0)));
};
});
d.forEach(["attr","style"],function(name){
nlp[name]=_15a(d[name],_15b);
});
d.forEach(["connect","addClass","removeClass","toggleClass","empty"],function(name){
nlp[name]=_157(d[name]);
});
dojo.extend(dojo.NodeList,{concat:function(item){
var t=d.isArray(this)?this:aps.call(this,0),m=d.map(arguments,function(a){
return a&&!d.isArray(a)&&(a.constructor===NodeList||a.constructor==nl)?aps.call(a,0):a;
});
return tnl(apc.apply(t,m));
},map:function(func,obj){
return tnl(d.map(this,func,obj));
},forEach:function(_15d,_15e){
d.forEach(this,_15d,_15e);
return this;
},coords:_158(d.coords),place:function(_15f,_160){
var item=d.query(_15f)[0];
return this.forEach(function(node){
d.place(node,item,_160);
});
},orphan:function(_161){
return (_161?d._filterQueryResult(this,_161):this).forEach(_15c);
},adopt:function(_162,_163){
return d.query(_162).place(item[0],_163);
},query:function(_164){
if(!_164){
return this;
}
var ret=this.map(function(node){
return d.query(_164,node).filter(function(_165){
return _165!==undefined;
});
});
return tnl(apc.apply([],ret));
},filter:function(_166){
var a=arguments,_167=this,_168=0;
if(d.isString(_166)){
_167=d._filterQueryResult(this,a[0]);
if(a.length==1){
return _167;
}
_168=1;
}
return tnl(d.filter(_167,a[_168],a[_168+1]));
},addContent:function(_169,_16a){
var c=d.isString(_169)?d._toDom(_169,this[0]&&this[0].ownerDocument):_169,i,l=this.length-1;
for(i=0;i<l;++i){
d.place(c.cloneNode(true),this[i],_16a);
}
if(l>=0){
d.place(c,this[l],_16a);
}
return this;
},instantiate:function(_16b,_16c){
var c=d.isFunction(_16b)?_16b:d.getObject(_16b);
_16c=_16c||{};
return this.forEach(function(node){
new c(_16c,node);
});
},at:function(){
var t=new dojo.NodeList();
d.forEach(arguments,function(i){
if(this[i]){
t.push(this[i]);
}
},this);
return t;
}});
d.forEach(["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"],function(evt){
var _oe="on"+evt;
nlp[_oe]=function(a,b){
return this.connect(_oe,a,b);
};
});
})();
}
if(!dojo._hasResource["dojo._base.query"]){
dojo._hasResource["dojo._base.query"]=true;
if(typeof dojo!="undefined"){
dojo.provide("dojo._base.query");
}
(function(d){
var trim=d.trim;
var each=d.forEach;
var qlc=d._queryListCtor=d.NodeList;
var _16d=d.isString;
var _16e=function(){
return d.doc;
};
var _16f=(d.isWebKit&&((_16e().compatMode)=="BackCompat"));
var _170=!!_16e().firstChild["children"]?"children":"childNodes";
var _171=">~+";
var _172=false;
var _173=function(){
return true;
};
var _174=function(_175){
if(_171.indexOf(_175.slice(-1))>=0){
_175+=" * ";
}else{
_175+=" ";
}
var ts=function(s,e){
return trim(_175.slice(s,e));
};
var _176=[];
var _177=-1,_178=-1,_179=-1,_17a=-1,_17b=-1,inId=-1,_17c=-1,lc="",cc="",_17d;
var x=0,ql=_175.length,_17e=null,_cp=null;
var _17f=function(){
if(_17c>=0){
var tv=(_17c==x)?null:ts(_17c,x);
_17e[(_171.indexOf(tv)<0)?"tag":"oper"]=tv;
_17c=-1;
}
};
var _180=function(){
if(inId>=0){
_17e.id=ts(inId,x).replace(/\\/g,"");
inId=-1;
}
};
var _181=function(){
if(_17b>=0){
_17e.classes.push(ts(_17b+1,x).replace(/\\/g,""));
_17b=-1;
}
};
var _182=function(){
_180();
_17f();
_181();
};
var _183=function(){
_182();
if(_17a>=0){
_17e.pseudos.push({name:ts(_17a+1,x)});
}
_17e.loops=(_17e.pseudos.length||_17e.attrs.length||_17e.classes.length);
_17e.oquery=_17e.query=ts(_17d,x);
_17e.otag=_17e.tag=(_17e["oper"])?null:(_17e.tag||"*");
if(_17e.tag){
_17e.tag=_17e.tag.toUpperCase();
}
if(_176.length&&(_176[_176.length-1].oper)){
_17e.infixOper=_176.pop();
_17e.query=_17e.infixOper.query+" "+_17e.query;
}
_176.push(_17e);
_17e=null;
};
for(;lc=cc,cc=_175.charAt(x),x<ql;x++){
if(lc=="\\"){
continue;
}
if(!_17e){
_17d=x;
_17e={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){
return (_172)?this.otag:this.tag;
}};
_17c=x;
}
if(_177>=0){
if(cc=="]"){
if(!_cp.attr){
_cp.attr=ts(_177+1,x);
}else{
_cp.matchFor=ts((_179||_177+1),x);
}
var cmf=_cp.matchFor;
if(cmf){
if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){
_cp.matchFor=cmf.slice(1,-1);
}
}
_17e.attrs.push(_cp);
_cp=null;
_177=_179=-1;
}else{
if(cc=="="){
var _184=("|~^$*".indexOf(lc)>=0)?lc:"";
_cp.type=_184+cc;
_cp.attr=ts(_177+1,x-_184.length);
_179=x+1;
}
}
}else{
if(_178>=0){
if(cc==")"){
if(_17a>=0){
_cp.value=ts(_178+1,x);
}
_17a=_178=-1;
}
}else{
if(cc=="#"){
_182();
inId=x+1;
}else{
if(cc=="."){
_182();
_17b=x;
}else{
if(cc==":"){
_182();
_17a=x;
}else{
if(cc=="["){
_182();
_177=x;
_cp={};
}else{
if(cc=="("){
if(_17a>=0){
_cp={name:ts(_17a+1,x),value:null};
_17e.pseudos.push(_cp);
}
_178=x;
}else{
if((cc==" ")&&(lc!=cc)){
_183();
}
}
}
}
}
}
}
}
}
return _176;
};
var _185=function(_186,_187){
if(!_186){
return _187;
}
if(!_187){
return _186;
}
return function(){
return _186.apply(window,arguments)&&_187.apply(window,arguments);
};
};
var _188=function(i,arr){
var r=arr||[];
if(i){
r.push(i);
}
return r;
};
var _189=function(n){
return (1==n.nodeType);
};
var _18a="";
var _18b=function(elem,attr){
if(!elem){
return _18a;
}
if(attr=="class"){
return elem.className||_18a;
}
if(attr=="for"){
return elem.htmlFor||_18a;
}
if(attr=="style"){
return elem.style.cssText||_18a;
}
return (_172?elem.getAttribute(attr):elem.getAttribute(attr,2))||_18a;
};
var _18c={"*=":function(attr,_18d){
return function(elem){
return (_18b(elem,attr).indexOf(_18d)>=0);
};
},"^=":function(attr,_18e){
return function(elem){
return (_18b(elem,attr).indexOf(_18e)==0);
};
},"$=":function(attr,_18f){
var tval=" "+_18f;
return function(elem){
var ea=" "+_18b(elem,attr);
return (ea.lastIndexOf(_18f)==(ea.length-_18f.length));
};
},"~=":function(attr,_190){
var tval=" "+_190+" ";
return function(elem){
var ea=" "+_18b(elem,attr)+" ";
return (ea.indexOf(tval)>=0);
};
},"|=":function(attr,_191){
var _192=" "+_191+"-";
return function(elem){
var ea=" "+_18b(elem,attr);
return ((ea==_191)||(ea.indexOf(_192)==0));
};
},"=":function(attr,_193){
return function(elem){
return (_18b(elem,attr)==_193);
};
}};
var _194=(typeof _16e().firstChild.nextElementSibling=="undefined");
var _ns=!_194?"nextElementSibling":"nextSibling";
var _ps=!_194?"previousElementSibling":"previousSibling";
var _195=(_194?_189:_173);
var _196=function(node){
while(node=node[_ps]){
if(_195(node)){
return false;
}
}
return true;
};
var _197=function(node){
while(node=node[_ns]){
if(_195(node)){
return false;
}
}
return true;
};
var _198=function(node){
var root=node.parentNode;
var i=0,tret=root[_170],ci=(node["_i"]||-1),cl=(root["_l"]||-1);
if(!tret){
return -1;
}
var l=tret.length;
if(cl==l&&ci>=0&&cl>=0){
return ci;
}
root["_l"]=l;
ci=-1;
for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_ns]){
if(_195(te)){
te["_i"]=++i;
if(node===te){
ci=i;
}
}
}
return ci;
};
var _199=function(elem){
return !((_198(elem))%2);
};
var _19a=function(elem){
return ((_198(elem))%2);
};
var _19b={"checked":function(name,_19c){
return function(elem){
return !!d.attr(elem,"checked");
};
},"first-child":function(){
return _196;
},"last-child":function(){
return _197;
},"only-child":function(name,_19d){
return function(node){
if(!_196(node)){
return false;
}
if(!_197(node)){
return false;
}
return true;
};
},"empty":function(name,_19e){
return function(elem){
var cn=elem.childNodes;
var cnl=elem.childNodes.length;
for(var x=cnl-1;x>=0;x--){
var nt=cn[x].nodeType;
if((nt===1)||(nt==3)){
return false;
}
}
return true;
};
},"contains":function(name,_19f){
var cz=_19f.charAt(0);
if(cz=="\""||cz=="'"){
_19f=_19f.slice(1,-1);
}
return function(elem){
return (elem.innerHTML.indexOf(_19f)>=0);
};
},"not":function(name,_1a0){
var p=_174(_1a0)[0];
var _1a1={el:1};
if(p.tag!="*"){
_1a1.tag=1;
}
if(!p.classes.length){
_1a1.classes=1;
}
var ntf=_1a2(p,_1a1);
return function(elem){
return (!ntf(elem));
};
},"nth-child":function(name,_1a3){
var pi=parseInt;
if(_1a3=="odd"){
return _19a;
}else{
if(_1a3=="even"){
return _199;
}
}
if(_1a3.indexOf("n")!=-1){
var _1a4=_1a3.split("n",2);
var pred=_1a4[0]?((_1a4[0]=="-")?-1:pi(_1a4[0])):1;
var idx=_1a4[1]?pi(_1a4[1]):0;
var lb=0,ub=-1;
if(pred>0){
if(idx<0){
idx=(idx%pred)&&(pred+(idx%pred));
}else{
if(idx>0){
if(idx>=pred){
lb=idx-idx%pred;
}
idx=idx%pred;
}
}
}else{
if(pred<0){
pred*=-1;
if(idx>0){
ub=idx;
idx=idx%pred;
}
}
}
if(pred>0){
return function(elem){
var i=_198(elem);
return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);
};
}else{
_1a3=idx;
}
}
var _1a5=pi(_1a3);
return function(elem){
return (_198(elem)==_1a5);
};
}};
var _1a6=(d.isIE)?function(cond){
var clc=cond.toLowerCase();
if(clc=="class"){
cond="className";
}
return function(elem){
return (_172?elem.getAttribute(cond):elem[cond]||elem[clc]);
};
}:function(cond){
return function(elem){
return (elem&&elem.getAttribute&&elem.hasAttribute(cond));
};
};
var _1a2=function(_1a7,_1a8){
if(!_1a7){
return _173;
}
_1a8=_1a8||{};
var ff=null;
if(!("el" in _1a8)){
ff=_185(ff,_189);
}
if(!("tag" in _1a8)){
if(_1a7.tag!="*"){
ff=_185(ff,function(elem){
return (elem&&(elem.tagName==_1a7.getTag()));
});
}
}
if(!("classes" in _1a8)){
each(_1a7.classes,function(_1a9,idx,arr){
var re=new RegExp("(?:^|\\s)"+_1a9+"(?:\\s|$)");
ff=_185(ff,function(elem){
return re.test(elem.className);
});
ff.count=idx;
});
}
if(!("pseudos" in _1a8)){
each(_1a7.pseudos,function(_1aa){
var pn=_1aa.name;
if(_19b[pn]){
ff=_185(ff,_19b[pn](pn,_1aa.value));
}
});
}
if(!("attrs" in _1a8)){
each(_1a7.attrs,function(attr){
var _1ab;
var a=attr.attr;
if(attr.type&&_18c[attr.type]){
_1ab=_18c[attr.type](a,attr.matchFor);
}else{
if(a.length){
_1ab=_1a6(a);
}
}
if(_1ab){
ff=_185(ff,_1ab);
}
});
}
if(!("id" in _1a8)){
if(_1a7.id){
ff=_185(ff,function(elem){
return (!!elem&&(elem.id==_1a7.id));
});
}
}
if(!ff){
if(!("default" in _1a8)){
ff=_173;
}
}
return ff;
};
var _1ac=function(_1ad){
return function(node,ret,bag){
while(node=node[_ns]){
if(_194&&(!_189(node))){
continue;
}
if((!bag||_1ae(node,bag))&&_1ad(node)){
ret.push(node);
}
break;
}
return ret;
};
};
var _1af=function(_1b0){
return function(root,ret,bag){
var te=root[_ns];
while(te){
if(_195(te)){
if(bag&&!_1ae(te,bag)){
break;
}
if(_1b0(te)){
ret.push(te);
}
}
te=te[_ns];
}
return ret;
};
};
var _1b1=function(_1b2){
_1b2=_1b2||_173;
return function(root,ret,bag){
var te,x=0,tret=root[_170];
while(te=tret[x++]){
if(_195(te)&&(!bag||_1ae(te,bag))&&(_1b2(te,x))){
ret.push(te);
}
}
return ret;
};
};
var _1b3=function(node,root){
var pn=node.parentNode;
while(pn){
if(pn==root){
break;
}
pn=pn.parentNode;
}
return !!pn;
};
var _1b4={};
var _1b5=function(_1b6){
var _1b7=_1b4[_1b6.query];
if(_1b7){
return _1b7;
}
var io=_1b6.infixOper;
var oper=(io?io.oper:"");
var _1b8=_1a2(_1b6,{el:1});
var qt=_1b6.tag;
var _1b9=("*"==qt);
var ecs=_16e()["getElementsByClassName"];
if(!oper){
if(_1b6.id){
_1b8=(!_1b6.loops&&_1b9)?_173:_1a2(_1b6,{el:1,id:1});
_1b7=function(root,arr){
var te=d.byId(_1b6.id,(root.ownerDocument||root));
if(!te||!_1b8(te)){
return;
}
if(9==root.nodeType){
return _188(te,arr);
}else{
if(_1b3(te,root)){
return _188(te,arr);
}
}
};
}else{
if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_1b6.classes.length&&!_16f){
_1b8=_1a2(_1b6,{el:1,classes:1,id:1});
var _1ba=_1b6.classes.join(" ");
_1b7=function(root,arr){
var ret=_188(0,arr),te,x=0;
var tret=root.getElementsByClassName(_1ba);
while((te=tret[x++])){
if(_1b8(te,root)){
ret.push(te);
}
}
return ret;
};
}else{
if(!_1b9&&!_1b6.loops){
_1b7=function(root,arr){
var ret=_188(0,arr),te,x=0;
var tret=root.getElementsByTagName(_1b6.getTag());
while((te=tret[x++])){
ret.push(te);
}
return ret;
};
}else{
_1b8=_1a2(_1b6,{el:1,tag:1,id:1});
_1b7=function(root,arr){
var ret=_188(0,arr),te,x=0;
var tret=root.getElementsByTagName(_1b6.getTag());
while((te=tret[x++])){
if(_1b8(te,root)){
ret.push(te);
}
}
return ret;
};
}
}
}
}else{
var _1bb={el:1};
if(_1b9){
_1bb.tag=1;
}
_1b8=_1a2(_1b6,_1bb);
if("+"==oper){
_1b7=_1ac(_1b8);
}else{
if("~"==oper){
_1b7=_1af(_1b8);
}else{
if(">"==oper){
_1b7=_1b1(_1b8);
}
}
}
}
return _1b4[_1b6.query]=_1b7;
};
var _1bc=function(root,_1bd){
var _1be=_188(root),qp,x,te,qpl=_1bd.length,bag,ret;
for(var i=0;i<qpl;i++){
ret=[];
qp=_1bd[i];
x=_1be.length-1;
if(x>0){
bag={};
ret.nozip=true;
}
var gef=_1b5(qp);
while(te=_1be[x--]){
gef(te,ret,bag);
}
if(!ret.length){
break;
}
_1be=ret;
}
return ret;
};
var _1bf={},_1c0={};
var _1c1=function(_1c2){
var _1c3=_174(trim(_1c2));
if(_1c3.length==1){
var tef=_1b5(_1c3[0]);
return function(root){
var r=tef(root,new qlc());
if(r){
r.nozip=true;
}
return r;
};
}
return function(root){
return _1bc(root,_1c3);
};
};
var nua=navigator.userAgent;
var wk="WebKit/";
var _1c4=(d.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));
var _1c5=d.isIE?"commentStrip":"nozip";
var qsa="querySelectorAll";
var _1c6=(!!_16e()[qsa]&&(!d.isSafari||(d.isSafari>3.1)||_1c4));
var _1c7=function(_1c8,_1c9){
if(_1c6){
var _1ca=_1c0[_1c8];
if(_1ca&&!_1c9){
return _1ca;
}
}
var _1cb=_1bf[_1c8];
if(_1cb){
return _1cb;
}
var qcz=_1c8.charAt(0);
var _1cc=(-1==_1c8.indexOf(" "));
if((_1c8.indexOf("#")>=0)&&(_1cc)){
_1c9=true;
}
var _1cd=(_1c6&&(!_1c9)&&(_171.indexOf(qcz)==-1)&&(!d.isIE||(_1c8.indexOf(":")==-1))&&(!(_16f&&(_1c8.indexOf(".")>=0)))&&(_1c8.indexOf(":contains")==-1)&&(_1c8.indexOf("|=")==-1));
if(_1cd){
var tq=(_171.indexOf(_1c8.charAt(_1c8.length-1))>=0)?(_1c8+" *"):_1c8;
return _1c0[_1c8]=function(root){
try{
if(!((9==root.nodeType)||_1cc)){
throw "";
}
var r=root[qsa](tq);
r[_1c5]=true;
return r;
}
catch(e){
return _1c7(_1c8,true)(root);
}
};
}else{
var _1ce=_1c8.split(/\s*,\s*/);
return _1bf[_1c8]=((_1ce.length<2)?_1c1(_1c8):function(root){
var _1cf=0,ret=[],tp;
while((tp=_1ce[_1cf++])){
ret=ret.concat(_1c1(tp)(root));
}
return ret;
});
}
};
var _1d0=0;
var _1d1=d.isIE?function(node){
if(_172){
return (node.getAttribute("_uid")||node.setAttribute("_uid",++_1d0)||_1d0);
}else{
return node.uniqueID;
}
}:function(node){
return (node._uid||(node._uid=++_1d0));
};
var _1ae=function(node,bag){
if(!bag){
return 1;
}
var id=_1d1(node);
if(!bag[id]){
return bag[id]=1;
}
return 0;
};
var _1d2="_zipIdx";
var _zip=function(arr){
if(arr&&arr.nozip){
return (qlc._wrap)?qlc._wrap(arr):arr;
}
var ret=new qlc();
if(!arr||!arr.length){
return ret;
}
if(arr[0]){
ret.push(arr[0]);
}
if(arr.length<2){
return ret;
}
_1d0++;
if(d.isIE&&_172){
var _1d3=_1d0+"";
arr[0].setAttribute(_1d2,_1d3);
for(var x=1,te;te=arr[x];x++){
if(arr[x].getAttribute(_1d2)!=_1d3){
ret.push(te);
}
te.setAttribute(_1d2,_1d3);
}
}else{
if(d.isIE&&arr.commentStrip){
try{
for(var x=1,te;te=arr[x];x++){
if(_189(te)){
ret.push(te);
}
}
}
catch(e){
}
}else{
if(arr[0]){
arr[0][_1d2]=_1d0;
}
for(var x=1,te;te=arr[x];x++){
if(arr[x][_1d2]!=_1d0){
ret.push(te);
}
te[_1d2]=_1d0;
}
}
}
return ret;
};
d.query=function(_1d4,root){
qlc=d._queryListCtor;
if(!_1d4){
return new qlc();
}
if(_1d4.constructor==qlc){
return _1d4;
}
if(!_16d(_1d4)){
return new qlc(_1d4);
}
if(_16d(root)){
root=d.byId(root);
if(!root){
return new qlc();
}
}
root=root||_16e();
var od=root.ownerDocument||root.documentElement;
_172=(root.contentType&&root.contentType=="application/xml")||(d.isOpera&&(root.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(d.isIE?od.xml:(root.xmlVersion||od.xmlVersion));
var r=_1c7(_1d4)(root);
if(r&&r.nozip&&!qlc._wrap){
return r;
}
return _zip(r);
};
d.query.pseudos=_19b;
d._filterQueryResult=function(_1d5,_1d6){
var _1d7=new d._queryListCtor();
var _1d8=_1a2(_174(_1d6)[0]);
for(var x=0,te;te=_1d5[x];x++){
if(_1d8(te)){
_1d7.push(te);
}
}
return _1d7;
};
})(this["queryPortability"]||this["acme"]||dojo);
}
if(!dojo._hasResource["dojo._base.xhr"]){
dojo._hasResource["dojo._base.xhr"]=true;
dojo.provide("dojo._base.xhr");
(function(){
var _d=dojo;
function _1d9(obj,name,_1da){
var val=obj[name];
if(_d.isString(val)){
obj[name]=[val,_1da];
}else{
if(_d.isArray(val)){
val.push(_1da);
}else{
obj[name]=_1da;
}
}
};
dojo.formToObject=function(_1db){
var ret={};
var _1dc="file|submit|image|reset|button|";
_d.forEach(dojo.byId(_1db).elements,function(item){
var _in=item.name;
var type=(item.type||"").toLowerCase();
if(_in&&type&&_1dc.indexOf(type)==-1&&!item.disabled){
if(type=="radio"||type=="checkbox"){
if(item.checked){
_1d9(ret,_in,item.value);
}
}else{
if(item.multiple){
ret[_in]=[];
_d.query("option",item).forEach(function(opt){
if(opt.selected){
_1d9(ret,_in,opt.value);
}
});
}else{
_1d9(ret,_in,item.value);
if(type=="image"){
ret[_in+".x"]=ret[_in+".y"]=ret[_in].x=ret[_in].y=0;
}
}
}
}
});
return ret;
};
dojo.objectToQuery=function(map){
var enc=encodeURIComponent;
var _1dd=[];
var _1de={};
for(var name in map){
var _1df=map[name];
if(_1df!=_1de[name]){
var _1e0=enc(name)+"=";
if(_d.isArray(_1df)){
for(var i=0;i<_1df.length;i++){
_1dd.push(_1e0+enc(_1df[i]));
}
}else{
_1dd.push(_1e0+enc(_1df));
}
}
}
return _1dd.join("&");
};
dojo.formToQuery=function(_1e1){
return _d.objectToQuery(_d.formToObject(_1e1));
};
dojo.formToJson=function(_1e2,_1e3){
return _d.toJson(_d.formToObject(_1e2),_1e3);
};
dojo.queryToObject=function(str){
var ret={};
var qp=str.split("&");
var dec=decodeURIComponent;
_d.forEach(qp,function(item){
if(item.length){
var _1e4=item.split("=");
var name=dec(_1e4.shift());
var val=dec(_1e4.join("="));
if(_d.isString(ret[name])){
ret[name]=[ret[name]];
}
if(_d.isArray(ret[name])){
ret[name].push(val);
}else{
ret[name]=val;
}
}
});
return ret;
};
dojo._blockAsync=false;
dojo._contentHandlers={text:function(xhr){
return xhr.responseText;
},json:function(xhr){
return _d.fromJson(xhr.responseText||null);
},"json-comment-filtered":function(xhr){
if(!dojo.config.useCommentedJson){
console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");
}
var _1e5=xhr.responseText;
var _1e6=_1e5.indexOf("/*");
var _1e7=_1e5.lastIndexOf("*/");
if(_1e6==-1||_1e7==-1){
throw new Error("JSON was not comment filtered");
}
return _d.fromJson(_1e5.substring(_1e6+2,_1e7));
},javascript:function(xhr){
return _d.eval(xhr.responseText);
},xml:function(xhr){
var _1e8=xhr.responseXML;
if(_d.isIE&&(!_1e8||!_1e8.documentElement)){
var ms=function(n){
return "MSXML"+n+".DOMDocument";
};
var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];
_d.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(xhr.responseText);
_1e8=dom;
}
catch(e){
return false;
}
return true;
});
}
return _1e8;
}};
dojo._contentHandlers["json-comment-optional"]=function(xhr){
var _1e9=_d._contentHandlers;
if(xhr.responseText&&xhr.responseText.indexOf("/*")!=-1){
return _1e9["json-comment-filtered"](xhr);
}else{
return _1e9["json"](xhr);
}
};
dojo._ioSetArgs=function(args,_1ea,_1eb,_1ec){
var _1ed={args:args,url:args.url};
var _1ee=null;
if(args.form){
var form=_d.byId(args.form);
var _1ef=form.getAttributeNode("action");
_1ed.url=_1ed.url||(_1ef?_1ef.value:null);
_1ee=_d.formToObject(form);
}
var _1f0=[{}];
if(_1ee){
_1f0.push(_1ee);
}
if(args.content){
_1f0.push(args.content);
}
if(args.preventCache){
_1f0.push({"dojo.preventCache":new Date().valueOf()});
}
_1ed.query=_d.objectToQuery(_d.mixin.apply(null,_1f0));
_1ed.handleAs=args.handleAs||"text";
var d=new _d.Deferred(_1ea);
d.addCallbacks(_1eb,function(_1f1){
return _1ec(_1f1,d);
});
var ld=args.load;
if(ld&&_d.isFunction(ld)){
d.addCallback(function(_1f2){
return ld.call(args,_1f2,_1ed);
});
}
var err=args.error;
if(err&&_d.isFunction(err)){
d.addErrback(function(_1f3){
return err.call(args,_1f3,_1ed);
});
}
var _1f4=args.handle;
if(_1f4&&_d.isFunction(_1f4)){
d.addBoth(function(_1f5){
return _1f4.call(args,_1f5,_1ed);
});
}
d.ioArgs=_1ed;
return d;
};
var _1f6=function(dfd){
dfd.canceled=true;
var xhr=dfd.ioArgs.xhr;
var _at=typeof xhr.abort;
if(_at=="function"||_at=="object"||_at=="unknown"){
xhr.abort();
}
var err=dfd.ioArgs.error;
if(!err){
err=new Error("xhr cancelled");
err.dojoType="cancel";
}
return err;
};
var _1f7=function(dfd){
var ret=_d._contentHandlers[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
return ret===undefined?null:ret;
};
var _1f8=function(_1f9,dfd){
console.error(_1f9);
return _1f9;
};
var _1fa=null;
var _1fb=[];
var _1fc=function(){
var now=(new Date()).getTime();
if(!_d._blockAsync){
for(var i=0,tif;i<_1fb.length&&(tif=_1fb[i]);i++){
var dfd=tif.dfd;
var func=function(){
if(!dfd||dfd.canceled||!tif.validCheck(dfd)){
_1fb.splice(i--,1);
}else{
if(tif.ioCheck(dfd)){
_1fb.splice(i--,1);
tif.resHandle(dfd);
}else{
if(dfd.startTime){
if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){
_1fb.splice(i--,1);
var err=new Error("timeout exceeded");
err.dojoType="timeout";
dfd.errback(err);
dfd.cancel();
}
}
}
}
};
if(dojo.config.debugAtAllCosts){
func.call(this);
}else{
try{
func.call(this);
}
catch(e){
dfd.errback(e);
}
}
}
}
if(!_1fb.length){
clearInterval(_1fa);
_1fa=null;
return;
}
};
dojo._ioCancelAll=function(){
try{
_d.forEach(_1fb,function(i){
try{
i.dfd.cancel();
}
catch(e){
}
});
}
catch(e){
}
};
if(_d.isIE){
_d.addOnWindowUnload(_d._ioCancelAll);
}
_d._ioWatch=function(dfd,_1fd,_1fe,_1ff){
var args=dfd.ioArgs.args;
if(args.timeout){
dfd.startTime=(new Date()).getTime();
}
_1fb.push({dfd:dfd,validCheck:_1fd,ioCheck:_1fe,resHandle:_1ff});
if(!_1fa){
_1fa=setInterval(_1fc,50);
}
if(args.sync){
_1fc();
}
};
var _200="application/x-www-form-urlencoded";
var _201=function(dfd){
return dfd.ioArgs.xhr.readyState;
};
var _202=function(dfd){
return 4==dfd.ioArgs.xhr.readyState;
};
var _203=function(dfd){
var xhr=dfd.ioArgs.xhr;
if(_d._isDocumentOk(xhr)){
dfd.callback(dfd);
}else{
var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);
err.status=xhr.status;
err.responseText=xhr.responseText;
dfd.errback(err);
}
};
dojo._ioAddQueryToUrl=function(_204){
if(_204.query.length){
_204.url+=(_204.url.indexOf("?")==-1?"?":"&")+_204.query;
_204.query=null;
}
};
dojo.xhr=function(_205,args,_206){
var dfd=_d._ioSetArgs(args,_1f6,_1f7,_1f8);
dfd.ioArgs.xhr=_d._xhrObj(dfd.ioArgs.args);
if(_206){
if("postData" in args){
dfd.ioArgs.query=args.postData;
}else{
if("putData" in args){
dfd.ioArgs.query=args.putData;
}
}
}else{
_d._ioAddQueryToUrl(dfd.ioArgs);
}
var _207=dfd.ioArgs;
var xhr=_207.xhr;
xhr.open(_205,_207.url,args.sync!==true,args.user||undefined,args.password||undefined);
if(args.headers){
for(var hdr in args.headers){
if(hdr.toLowerCase()==="content-type"&&!args.contentType){
args.contentType=args.headers[hdr];
}else{
xhr.setRequestHeader(hdr,args.headers[hdr]);
}
}
}
xhr.setRequestHeader("Content-Type",args.contentType||_200);
if(!args.headers||!args.headers["X-Requested-With"]){
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
if(dojo.config.debugAtAllCosts){
xhr.send(_207.query);
}else{
try{
xhr.send(_207.query);
}
catch(e){
dfd.ioArgs.error=e;
dfd.cancel();
}
}
_d._ioWatch(dfd,_201,_202,_203);
xhr=null;
return dfd;
};
dojo.xhrGet=function(args){
return _d.xhr("GET",args);
};
dojo.rawXhrPost=dojo.xhrPost=function(args){
return _d.xhr("POST",args,true);
};
dojo.rawXhrPut=dojo.xhrPut=function(args){
return _d.xhr("PUT",args,true);
};
dojo.xhrDelete=function(args){
return _d.xhr("DELETE",args);
};
})();
}
if(!dojo._hasResource["dojo._base.fx"]){
dojo._hasResource["dojo._base.fx"]=true;
dojo.provide("dojo._base.fx");
(function(){
var d=dojo;
var _208=d.mixin;
dojo._Line=function(_209,end){
this.start=_209;
this.end=end;
};
dojo._Line.prototype.getValue=function(n){
return ((this.end-this.start)*n)+this.start;
};
d.declare("dojo._Animation",null,{constructor:function(args){
_208(this,args);
if(d.isArray(this.curve)){
this.curve=new d._Line(this.curve[0],this.curve[1]);
}
},duration:350,repeat:0,rate:10,_percent:0,_startRepeatCount:0,_fire:function(evt,args){
if(this[evt]){
if(dojo.config.debugAtAllCosts){
this[evt].apply(this,args||[]);
}else{
try{
this[evt].apply(this,args||[]);
}
catch(e){
console.error("exception in animation handler for:",evt);
console.error(e);
}
}
}
return this;
},play:function(_20a,_20b){
var _t=this;
if(_t._delayTimer){
_t._clearTimer();
}
if(_20b){
_t._stopTimer();
_t._active=_t._paused=false;
_t._percent=0;
}else{
if(_t._active&&!_t._paused){
return _t;
}
}
_t._fire("beforeBegin");
var de=_20a||_t.delay,_p=dojo.hitch(_t,"_play",_20b);
if(de>0){
_t._delayTimer=setTimeout(_p,de);
return _t;
}
_p();
return _t;
},_play:function(_20c){
var _t=this;
if(_t._delayTimer){
_t._clearTimer();
}
_t._startTime=new Date().valueOf();
if(_t._paused){
_t._startTime-=_t.duration*_t._percent;
}
_t._endTime=_t._startTime+_t.duration;
_t._active=true;
_t._paused=false;
var _20d=_t.curve.getValue(_t._percent);
if(!_t._percent){
if(!_t._startRepeatCount){
_t._startRepeatCount=_t.repeat;
}
_t._fire("onBegin",[_20d]);
}
_t._fire("onPlay",[_20d]);
_t._cycle();
return _t;
},pause:function(){
var _t=this;
if(_t._delayTimer){
_t._clearTimer();
}
_t._stopTimer();
if(!_t._active){
return _t;
}
_t._paused=true;
_t._fire("onPause",[_t.curve.getValue(_t._percent)]);
return _t;
},gotoPercent:function(_20e,_20f){
var _t=this;
_t._stopTimer();
_t._active=_t._paused=true;
_t._percent=_20e;
if(_20f){
_t.play();
}
return _t;
},stop:function(_210){
var _t=this;
if(_t._delayTimer){
_t._clearTimer();
}
if(!_t._timer){
return _t;
}
_t._stopTimer();
if(_210){
_t._percent=1;
}
_t._fire("onStop",[_t.curve.getValue(_t._percent)]);
_t._active=_t._paused=false;
return _t;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}
return "stopped";
},_cycle:function(){
var _t=this;
if(_t._active){
var curr=new Date().valueOf();
var step=(curr-_t._startTime)/(_t._endTime-_t._startTime);
if(step>=1){
step=1;
}
_t._percent=step;
if(_t.easing){
step=_t.easing(step);
}
_t._fire("onAnimate",[_t.curve.getValue(step)]);
if(_t._percent<1){
_t._startTimer();
}else{
_t._active=false;
if(_t.repeat>0){
_t.repeat--;
_t.play(null,true);
}else{
if(_t.repeat==-1){
_t.play(null,true);
}else{
if(_t._startRepeatCount){
_t.repeat=_t._startRepeatCount;
_t._startRepeatCount=0;
}
}
}
_t._percent=0;
_t._fire("onEnd");
_t._stopTimer();
}
}
return _t;
},_clearTimer:function(){
clearTimeout(this._delayTimer);
delete this._delayTimer;
}});
var ctr=0,_211=[],_212=null,_213={run:function(){
}};
dojo._Animation.prototype._startTimer=function(){
if(!this._timer){
this._timer=d.connect(_213,"run",this,"_cycle");
ctr++;
}
if(!_212){
_212=setInterval(d.hitch(_213,"run"),this.rate);
}
};
dojo._Animation.prototype._stopTimer=function(){
if(this._timer){
d.disconnect(this._timer);
this._timer=null;
ctr--;
}
if(ctr<=0){
clearInterval(_212);
_212=null;
ctr=0;
}
};
var _214=d.isIE?function(node){
var ns=node.style;
if(!ns.width.length&&d.style(node,"width")=="auto"){
ns.width="auto";
}
}:function(){
};
dojo._fade=function(args){
args.node=d.byId(args.node);
var _215=_208({properties:{}},args),_216=(_215.properties.opacity={});
_216.start=!("start" in _215)?function(){
return +d.style(_215.node,"opacity")||0;
}:_215.start;
_216.end=_215.end;
var anim=d.animateProperty(_215);
d.connect(anim,"beforeBegin",d.partial(_214,_215.node));
return anim;
};
dojo.fadeIn=function(args){
return d._fade(_208({end:1},args));
};
dojo.fadeOut=function(args){
return d._fade(_208({end:0},args));
};
dojo._defaultEasing=function(n){
return 0.5+((Math.sin((n+1.5)*Math.PI))/2);
};
var _217=function(_218){
this._properties=_218;
for(var p in _218){
var prop=_218[p];
if(prop.start instanceof d.Color){
prop.tempColor=new d.Color();
}
}
};
_217.prototype.getValue=function(r){
var ret={};
for(var p in this._properties){
var prop=this._properties[p],_219=prop.start;
if(_219 instanceof d.Color){
ret[p]=d.blendColors(_219,prop.end,r,prop.tempColor).toCss();
}else{
if(!d.isArray(_219)){
ret[p]=((prop.end-_219)*r)+_219+(p!="opacity"?prop.units||"px":0);
}
}
}
return ret;
};
dojo.animateProperty=function(args){
args.node=d.byId(args.node);
if(!args.easing){
args.easing=d._defaultEasing;
}
var anim=new d._Animation(args);
d.connect(anim,"beforeBegin",anim,function(){
var pm={};
for(var p in this.properties){
if(p=="width"||p=="height"){
this.node.display="block";
}
var prop=this.properties[p];
prop=pm[p]=_208({},(d.isObject(prop)?prop:{end:prop}));
if(d.isFunction(prop.start)){
prop.start=prop.start();
}
if(d.isFunction(prop.end)){
prop.end=prop.end();
}
var _21a=(p.toLowerCase().indexOf("color")>=0);
function _21b(node,p){
var v={height:node.offsetHeight,width:node.offsetWidth}[p];
if(v!==undefined){
return v;
}
v=d.style(node,p);
return (p=="opacity")?+v:(_21a?v:parseFloat(v));
};
if(!("end" in prop)){
prop.end=_21b(this.node,p);
}else{
if(!("start" in prop)){
prop.start=_21b(this.node,p);
}
}
if(_21a){
prop.start=new d.Color(prop.start);
prop.end=new d.Color(prop.end);
}else{
prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);
}
}
this.curve=new _217(pm);
});
d.connect(anim,"onAnimate",d.hitch(d,"style",anim.node));
return anim;
};
dojo.anim=function(node,_21c,_21d,_21e,_21f,_220){
return d.animateProperty({node:node,duration:_21d||d._Animation.prototype.duration,properties:_21c,easing:_21e,onEnd:_21f}).play(_220||0);
};
})();
}
if(!dojo._hasResource["dojo._base.browser"]){
dojo._hasResource["dojo._base.browser"]=true;
dojo.provide("dojo._base.browser");
dojo.forEach(dojo.config.require,function(i){
dojo["require"](i);
});
}
if(!dojo._hasResource["plugd.base"]){
dojo._hasResource["plugd.base"]=true;
dojo.provide("plugd.base");
(function(d){
var _221=d.place,_222=d.style,_223="display",_224="visibility",_225={"slow":1800,"fast":420,"mild":900},_226=d.config.keepLayout||false,_227=_226?_224:_223,_228=_226?"hidden":"none",_229=_226?"visible":(d.config.useBlock?"block":""),_22a=function(arg){
return (arg in _225)?_225[arg]:_225.fast;
},_22b=d.NodeList,_22c=_22b.prototype,_22d=_22b._adaptAsForEach,_22e,_22f=0,_230="mouse"+(d.isIE?"enter":"over");
d.unique=function(_231,b){
do{
_22e=(b||"djid_")+(++_22f);
}while(_231(_22e));
return _22e;
};
d.generateId=function(b){
return d.unique(d.byId,b);
};
d.load=function(){
var a=d._toArray(arguments),l=a.length,f=l&&!d.isString(a[l-1])?a.pop():null;
d.forEach(a,d.require,d);
f&&d.addOnLoad(f);
};
d.show=function(n,arg){
if(!arg){
_222(n,_227,_229);
}else{
if(d.isString(arg)){
_222(n,"opacity",0);
d.show(n);
d.anim(n,{opacity:1},_22a(arg));
}
}
};
d.hide=function(n,arg){
if(!arg){
_222(n,_227,_228);
}else{
if(d.isString(arg)){
_222(n,"opacity",1);
d.anim(n,{opacity:0},_22a(arg),null,d.hitch(d,"hide",n));
}
}
};
d.wrap=function(n,_232){
var _233=d.create(_232);
_221(_233,n,"before");
_221(n,_233,"first");
return _233;
};
d.toggle=function(n,_234){
n=d.byId(n);
d[(n.style[_227]==_228?"show":"hide")](n,_234);
};
d.qw=function(str){
return str?d.map(str.split(/\ +/),d.trim):[];
};
d.create=function(_235,_236,_237,pos){
var n=_235.charAt(0)=="<"?d._toDom(_235):d.doc.createElement(_235);
if(_236){
d.attr(n,_236);
}
if(_237){
_221(n,_237,pos);
}
return n;
};
d.sub=d.subscribe;
d.pub=function(){
var a=d._toArray(arguments);
d.publish(a.shift(),a);
};
d.extend(_22b,{show:_22d(d.show),hide:_22d(d.hide),toggle:_22d(d.toggle),destroy:_22d(d.destroy),create:function(_238){
return this._stash(this.map(function(){
return d.create(_238);
}));
},clone:function(){
return this._stash(this.map(function(n){
return d.clone(n);
}));
},animate:function(_239,_23a,_23b,_23c){
return this.forEach(function(n,i,a){
var anim=d.anim(n,_239,_23a,_23b);
if(_23c&&i==a.length-1){
d.connect(anim,"onEnd",_23c);
}
});
},wrap:function(_23d,_23e){
var nl=new _22b();
this.forEach(function(n){
nl.push(d.wrap(n,_23d));
});
return !_23e?this:this._stash(nl);
},appendTo:function(_23f){
var _240=d.query(_23f);
return _240.length?this.forEach(function(n){
_221(n,_240[0]);
}):this;
},append:function(_241,_242){
var _243=d.query(_241);
if(_243.length){
_243=_243[0];
this.forEach(function(n){
_221((_242?d.clone(_243):_243),n);
});
}
return this;
},val:function(_244){
var v,a="value";
if(_244){
return this.attr(a,_244);
}else{
v=this.attr(a);
return v.length===1?v[0]:v;
}
},hover:function(over,out){
return this.onmouseenter(over).onmouseleave(out||over);
},hoverClass:function(_245){
return this.hover(function(e){
d[(e.type==_230?"addClass":"removeClass")](e.target,_245);
});
},_stash:function(nl){
nl.__last=this;
return nl;
},end:function(){
return this.__last||this;
}});
var _246=d.query;
d.query=function(_247,_248){
var c=d.isString(_247)&&_247.charAt(0)=="<";
return _246(c?d.create(_247):_247,_248);
};
d.conflict=function(){
$=d.mixin(function(){
return d.mixin(d.query.apply(this,arguments),$.fn);
},{fn:{}});
$.fn.ready=d.addOnLoad;
d.config.conflict=true;
};
if(d.config.conflict){
d.conflict();
}
})(dojo);
}
if(dojo.config.afterOnLoad&&dojo.isBrowser){
window.setTimeout(dojo._loadInit,1000);
}
})();
