(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.globalErrorHandling":"off"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"."},"qx":{"resourceUri":".","sourceUri":".","version":"1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:qooxdoo-1.2.js"]],
  urisBefore : [],
  packageHashes : {"0":"2106df42cacc"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['2106df42cacc']={"locales":{},"resources":{},"translations":{}};
(function(){var bf="toString",be=".",bd="default",bc="Object",bb='"',ba="Array",Y="()",X="String",W="Function",V=".prototype",bE="function",bD="Boolean",bC="Error",bB="constructor",bA="warn",bz="hasOwnProperty",by="string",bx="toLocaleString",bw="RegExp",bv='\", "',bm="info",bn="BROKEN_IE",bk="isPrototypeOf",bl="Date",bi="",bj="qx.Bootstrap",bg="]",bh="Class",bo="error",bp="[Class ",br="valueOf",bq="Number",bt="count",bs="debug",bu="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bp+this.classname+bg;
},createNamespace:function(name,H){var J=name.split(be);
var parent=window;
var I=J[0];

for(var i=0,K=J.length-1;i<K;i++,I=J[i]){if(!parent[I]){parent=parent[I]={};
}else{parent=parent[I];
}}parent[I]=H;
return I;
},setDisplayName:function(cf,cg,name){cf.displayName=cg+be+name+Y;
},setDisplayNames:function(bS,bT){for(var name in bS){var bU=bS[name];

if(bU instanceof Function){bU.displayName=bT+be+name+Y;
}}},define:function(name,bG){if(!bG){var bG={statics:{}};
}var bL;
var bJ=null;
qx.Bootstrap.setDisplayNames(bG.statics,name);

if(bG.members||bG.extend){qx.Bootstrap.setDisplayNames(bG.members,name+V);
bL=bG.construct||new Function;

if(bG.extend){this.extendClass(bL,bL,bG.extend,name,bK);
}var bH=bG.statics||{};
for(var i=0,bM=qx.Bootstrap.getKeys(bH),l=bM.length;i<l;i++){var bN=bM[i];
bL[bN]=bH[bN];
}bJ=bL.prototype;
var bI=bG.members||{};
for(var i=0,bM=qx.Bootstrap.getKeys(bI),l=bM.length;i<l;i++){var bN=bM[i];
bJ[bN]=bI[bN];
}}else{bL=bG.statics||{};
}var bK=this.createNamespace(name,bL);
bL.name=bL.classname=name;
bL.basename=bK;
bL.$$type=bh;
if(!bL.hasOwnProperty(bf)){bL.toString=this.genericToString;
}if(bG.defer){bG.defer(bL,bJ);
}qx.Bootstrap.$$registry[name]=bG.statics;
return bL;
}};
qx.Bootstrap.define(bj,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(f,g,h,name,j){var n=h.prototype;
var m=new Function;
m.prototype=n;
var k=new m;
f.prototype=k;
k.name=k.classname=name;
k.basename=j;
g.base=f.superclass=h;
g.self=f.constructor=k.constructor=f;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(F){return F.__count__;
},"default":function(d){var length=0;

for(var e in d){length++;
}return length;
}})[(({}).__count__==0)?bt:bd],objectMergeWith:function(Q,R,S){if(S===undefined){S=true;
}
for(var T in R){if(S||Q[T]===undefined){Q[T]=R[T];
}}return Q;
},__a:[bk,bz,bx,bf,br,bB],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(A){var B=[];
var D=Object.prototype.hasOwnProperty;

for(var E in A){if(D.call(A,E)){B.push(E);
}}var C=qx.Bootstrap.__a;

for(var i=0,a=C,l=a.length;i<l;i++){if(D.call(A,a[i])){B.push(a[i]);
}}return B;
},"default":function(q){var r=[];
var s=Object.prototype.hasOwnProperty;

for(var t in q){if(s.call(q,t)){r.push(t);
}}return r;
}})[typeof (Object.keys)==
bE?bu:
(function(){for(var G in {toString:1}){return G;
}})()!==bf?bn:bd],getKeysAsString:function(N){var O=qx.Bootstrap.getKeys(N);

if(O.length==0){return bi;
}return bb+O.join(bv)+bb;
},__b:{"[object String]":X,"[object Array]":ba,"[object Object]":bc,"[object RegExp]":bw,"[object Number]":bq,"[object Boolean]":bD,"[object Date]":bl,"[object Function]":W,"[object Error]":bC},bind:function(bO,self,bP){var bQ=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bV=Array.prototype.slice.call(arguments,0,arguments.length);
return bO.apply(self,bQ.concat(bV));
};
},firstUp:function(bF){return bF.charAt(0).toUpperCase()+bF.substr(1);
},firstLow:function(w){return w.charAt(0).toLowerCase()+w.substr(1);
},getClass:function(cd){var ce=Object.prototype.toString.call(cd);
return (qx.Bootstrap.__b[ce]||ce.slice(8,-1));
},isString:function(cc){return (cc!==null&&(typeof cc===by||qx.Bootstrap.getClass(cc)==X||cc instanceof String||(!!cc&&!!cc.$$isString)));
},isArray:function(P){return (P!==null&&(P instanceof Array||(P&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(P.constructor,qx.data.IListData))||qx.Bootstrap.getClass(P)==ba||(!!P&&!!P.$$isArray)));
},isObject:function(b){return (b!==undefined&&b!==null&&qx.Bootstrap.getClass(b)==bc);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==W;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(c,name){while(c){if(c.$$properties&&c.$$properties[name]){return c.$$properties[name];
}c=c.superclass;
}return null;
},hasProperty:function(ci,name){return !!qx.Bootstrap.getPropertyDefinition(ci,name);
},getEventType:function(ch,name){var ch=ch.constructor;

while(ch.superclass){if(ch.$$events&&ch.$$events[name]!==undefined){return ch.$$events[name];
}ch=ch.superclass;
}return null;
},supportsEvent:function(x,name){return !!qx.Bootstrap.getEventType(x,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(bW,bX){return !!qx.Bootstrap.getByInterface(bW,bX);
},getMixins:function(y){var z=[];

while(y){if(y.$$includes){z.push.apply(z,y.$$flatIncludes);
}y=y.superclass;
}return z;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bs,arguments]);
},info:function(L,M){qx.Bootstrap.$$logs.push([bm,arguments]);
},warn:function(o,p){qx.Bootstrap.$$logs.push([bA,arguments]);
},error:function(u,v){qx.Bootstrap.$$logs.push([bo,arguments]);
},trace:function(U){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__c:{},define:function(k,l){if(l===undefined){throw new Error('Default value of setting "'+k+'" must be defined!');
}
if(!this.__c[k]){this.__c[k]={};
}else if(this.__c[k].defaultValue!==undefined){throw new Error('Setting "'+k+'" is already defined!');
}this.__c[k].defaultValue=l;
},get:function(q){var r=this.__c[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(s,t){if((s.split(a)).length<2){throw new Error('Malformed settings key "'+s+'". Must be following the schema "namespace.key".');
}
if(!this.__c[s]){this.__c[s]={};
}this.__c[s].value=t;
},__d:function(){if(window.qxsettings){for(var p in window.qxsettings){this.set(p,window.qxsettings[p]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(o){}this.__e();
}},__e:function(){if(this.get(h)!=true){return;
}var n=document.location.search.slice(1).split(g);

for(var i=0;i<n.length;i++){var m=n[i].split(b);

if(m.length!=3||m[0]!=c){continue;
}this.set(m[1],decodeURIComponent(m[2]));
}}},defer:function(j){j.define(h,false);
j.define(e,false);
j.define(d,0);
j.__d();
}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,K){if(K){if(K.extend&&!(K.extend instanceof Array)){K.extend=[K.extend];
}{};
var L=K.statics?K.statics:{};
if(K.extend){L.$$extends=K.extend;
}
if(K.properties){L.$$properties=K.properties;
}
if(K.members){L.$$members=K.members;
}
if(K.events){L.$$events=K.events;
}}else{var L={};
}L.$$type=j;
L.name=name;
L.toString=this.genericToString;
L.basename=qx.Bootstrap.createNamespace(name,L);
qx.Interface.$$registry[name]=L;
return L;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(M){if(!M){return [];
}var N=M.concat();

for(var i=0,l=M.length;i<l;i++){if(M[i].$$extends){N.push.apply(N,this.flatten(M[i].$$extends));
}}return N;
},__f:function(q,r,s,t){var x=s.$$members;

if(x){for(var w in x){if(qx.Bootstrap.isFunction(x[w])){var v=this.__g(r,w);
var u=v||qx.Bootstrap.isFunction(q[w]);

if(!u){throw new Error('Implementation of method "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}var y=t===true&&!v&&!qx.Bootstrap.hasInterface(r,s);

if(y){q[w]=this.__j(s,q[w],w,x[w]);
}}else{if(typeof q[w]===undefined){if(typeof q[w]!==p){throw new Error('Implementation of member "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}}}}}},__g:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==o;
}return true;
},__h:function(z,A){if(A.$$properties){for(var B in A.$$properties){if(!qx.Bootstrap.getPropertyDefinition(z,B)){throw new Error('The property "'+B+'" is not supported by Class "'+z.classname+'"!');
}}}},__i:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(G,H){var J=G.constructor;
this.__f(G,J,H,false);
this.__h(J,H);
this.__i(J,H);
var I=H.$$extends;

if(I){for(var i=0,l=I.length;i<l;i++){this.assertObject(G,I[i]);
}}},assert:function(C,D,E){this.__f(C.prototype,C,D,E);
this.__h(C,D);
this.__i(C,D);
var F=D.$$extends;

if(F){for(var i=0,l=F.length;i<l;i++){this.assert(C,F[i],E);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(h){var m=this.flatten(h);
var n=m.length;

if(n<2){return true;
}var q={};
var p={};
var o={};
var k;

for(var i=0;i<n;i++){k=m[i];

for(var j in k.events){if(o[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+o[j]+'" in member "'+j+'"!');
}o[j]=k.name;
}
for(var j in k.properties){if(q[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+q[j]+'" in property "'+j+'"!');
}q[j]=k.name;
}
for(var j in k.members){if(p[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+p[j]+'" in member "'+j+'"!');
}p[j]=k.name;
}}return true;
},isCompatible:function(r,s){var t=qx.Bootstrap.getMixins(s);
t.push(r);
return qx.Mixin.checkCompatibility(t);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var de=';',dd='return this.',dc="string",db="boolean",da="",cY="setThemed",cX='!==undefined)',cW="this.",cV="set",cU="resetThemed",cJ="setRuntime",cI="init",cH='else if(this.',cG="resetRuntime",cF="reset",cE="();",cD='else ',cC='if(this.',cB="return this.",cA="get",dl=";",dm="(a[",dj=' of an instance of ',dk="refresh",dh=' is not (yet) ready!");',di="]);",df='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dg='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dn='value !== null && value.nodeType === 9 && value.documentElement',dp='value !== null && value.$$type === "Mixin"',cN='return init;',cM='var init=this.',cP='value !== null && value.nodeType === 1 && value.attributes',cO="var parent = this.getLayoutParent();",cR="Error in property ",cQ='qx.core.Assert.assertInstance(value, Date, msg) || true',cT="if (!parent) return;",cS=" in method ",cL='qx.core.Assert.assertInstance(value, Error, msg) || true',cK='Undefined value is not allowed!',bE="inherit",bF='Is invalid!',bG="MSIE 6.0",bH="': ",bI=" of class ",bJ='value !== null && value.nodeType !== undefined',bK='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bL='qx.core.Assert.assertPositiveInteger(value, msg) || true',bM='if(init==qx.core.Property.$$inherit)init=null;',bN='value !== null && value.$$type === "Interface"',dt='var inherit=prop.$$inherit;',ds="var value = parent.",dr="$$useinit_",dq="(value);",dx='Requires exactly one argument!',dw="$$runtime_",dv="$$user_",du='qx.core.Assert.assertArray(value, msg) || true',dz='qx.core.Assert.assertPositiveNumber(value, msg) || true',dy=".prototype",ck="Boolean",cl='return value;',ci='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cj='Does not allow any arguments!',co="()",cp="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cm='value !== null && value.$$type === "Theme"',cn="())",cg='return null;',ch='qx.core.Assert.assertObject(value, msg) || true',bV='qx.core.Assert.assertString(value, msg) || true',bU="if (value===undefined) value = parent.",bX='value !== null && value.$$type === "Class"',bW='qx.core.Assert.assertFunction(value, msg) || true',bR="object",bQ="$$init_",bT="$$theme_",bS='qx.core.Assert.assertMap(value, msg) || true',bP='qx.core.Assert.assertNumber(value, msg) || true',bO='Null value is not allowed!',cu='qx.core.Assert.assertInteger(value, msg) || true',cv="value",cw="rv:1.8.1",cx="shorthand",cq='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cr='value !== null && value.type !== undefined',cs='value !== null && value.document',ct='throw new Error("Property ',cy="(!this.",cz='qx.core.Assert.assertBoolean(value, msg) || true',cf="toggle",ce="$$inherit_",cd=" with incoming value '",cc="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cb="qx.core.Property",ca="is",bY='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cb,{statics:{__o:{"Boolean":cz,"String":bV,"Number":bP,"Integer":cu,"PositiveNumber":dz,"PositiveInteger":bL,"Error":cL,"RegExp":cq,"Object":ch,"Array":du,"Map":bS,"Function":bW,"Date":cQ,"Node":bJ,"Element":cP,"Document":dn,"Window":cs,"Event":cr,"Class":bX,"Mixin":dp,"Interface":bN,"Theme":cm,"Color":df,"Decorator":bK,"Font":dg},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bE,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:dc,dereference:db,inheritable:db,nullable:db,themeable:db,refine:db,init:null,apply:dc,event:dc,check:null,transform:dc,deferredInit:db,validate:null},$$allowedGroupKeys:{name:dc,group:bR,mode:dc,themeable:db},$$inheritable:{},__q:function(p){var q=this.__r(p);

if(!q.length){var r=qx.lang.Function.empty;
}else{r=this.__s(q);
}p.prototype.$$refreshInheritables=r;
},__r:function(bn){var bp=[];

while(bn){var bo=bn.$$properties;

if(bo){for(var name in this.$$inheritable){if(bo[name]&&bo[name].inheritable){bp.push(name);
}}}bn=bn.superclass;
}return bp;
},__s:function(bi){var bm=this.$$store.inherit;
var bl=this.$$store.init;
var bk=this.$$method.refresh;
var bj=[cO,cT];

for(var i=0,l=bi.length;i<l;i++){var name=bi[i];
bj.push(ds,bm[name],dl,bU,bl[name],dl,cW,bk[name],dq);
}return new Function(bj.join(da));
},attachRefreshInheritables:function(dS){dS.prototype.$$refreshInheritables=function(){qx.core.Property.__q(dS);
return this.$$refreshInheritables();
};
},attachMethods:function(bc,name,bd){bd.group?this.__t(bc,bd,name):this.__u(bc,bd,name);
},__t:function(L,M,name){var T=qx.Bootstrap.firstUp(name);
var S=L.prototype;
var U=M.themeable===true;
{};
var V=[];
var P=[];

if(U){var N=[];
var R=[];
}var Q=cp;
V.push(Q);

if(U){N.push(Q);
}
if(M.mode==cx){var O=cc;
V.push(O);

if(U){N.push(O);
}}
for(var i=0,a=M.group,l=a.length;i<l;i++){{};
V.push(cW,this.$$method.set[a[i]],dm,i,di);
P.push(cW,this.$$method.reset[a[i]],cE);

if(U){{};
N.push(cW,this.$$method.setThemed[a[i]],dm,i,di);
R.push(cW,this.$$method.resetThemed[a[i]],cE);
}}this.$$method.set[name]=cV+T;
S[this.$$method.set[name]]=new Function(V.join(da));
this.$$method.reset[name]=cF+T;
S[this.$$method.reset[name]]=new Function(P.join(da));

if(U){this.$$method.setThemed[name]=cY+T;
S[this.$$method.setThemed[name]]=new Function(N.join(da));
this.$$method.resetThemed[name]=cU+T;
S[this.$$method.resetThemed[name]]=new Function(R.join(da));
}},__u:function(v,w,name){var y=qx.Bootstrap.firstUp(name);
var A=v.prototype;
{};
if(w.dereference===undefined&&typeof w.check===dc){w.dereference=this.__v(w.check);
}var z=this.$$method;
var x=this.$$store;
x.runtime[name]=dw+name;
x.user[name]=dv+name;
x.theme[name]=bT+name;
x.init[name]=bQ+name;
x.inherit[name]=ce+name;
x.useinit[name]=dr+name;
z.get[name]=cA+y;
A[z.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,v,name,cA);
};
z.set[name]=cV+y;
A[z.set[name]]=function(s){return qx.core.Property.executeOptimizedSetter(this,v,name,cV,arguments);
};
z.reset[name]=cF+y;
A[z.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,v,name,cF);
};

if(w.inheritable||w.apply||w.event||w.deferredInit){z.init[name]=cI+y;
A[z.init[name]]=function(by){return qx.core.Property.executeOptimizedSetter(this,v,name,cI,arguments);
};
}
if(w.inheritable){z.refresh[name]=dk+y;
A[z.refresh[name]]=function(dR){return qx.core.Property.executeOptimizedSetter(this,v,name,dk,arguments);
};
}z.setRuntime[name]=cJ+y;
A[z.setRuntime[name]]=function(be){return qx.core.Property.executeOptimizedSetter(this,v,name,cJ,arguments);
};
z.resetRuntime[name]=cG+y;
A[z.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,v,name,cG);
};

if(w.themeable){z.setThemed[name]=cY+y;
A[z.setThemed[name]]=function(dQ){return qx.core.Property.executeOptimizedSetter(this,v,name,cY,arguments);
};
z.resetThemed[name]=cU+y;
A[z.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,v,name,cU);
};
}
if(w.check===ck){A[cf+y]=new Function(cB+z.set[name]+cy+z.get[name]+cn);
A[ca+y]=new Function(cB+z.get[name]+co);
}},__v:function(bz){return !!this.__p[bz];
},__w:function(n){return this.__p[n]||qx.Bootstrap.classIsDefined(n)||(qx.Interface&&qx.Interface.isDefined(n));
},__x:{0:bY,1:dx,2:cK,3:cj,4:bO,5:bF},error:function(e,f,g,h,j){var k=e.constructor.classname;
var m=cR+g+bI+k+cS+this.$$method[h][g]+cd+j+bH;
throw new Error(m+(this.__x[f]||"Unknown reason: "+f));
},__y:function(dH,dI,name,dJ,dK,dL){var dM=this.$$method[dJ][name];
{dI[dM]=new Function(cv,dK.join(da));
};
{};
qx.Bootstrap.setDisplayName(dI[dM],dH.classname+dy,dM);
if(dL===undefined){return dH[dM]();
}else{return dH[dM](dL[0]);
}},executeOptimizedGetter:function(dA,dB,name,dC){var dE=dB.$$properties[name];
var dG=dB.prototype;
var dD=[];
var dF=this.$$store;
dD.push(cC,dF.runtime[name],cX);
dD.push(dd,dF.runtime[name],de);

if(dE.inheritable){dD.push(cH,dF.inherit[name],cX);
dD.push(dd,dF.inherit[name],de);
dD.push(cD);
}dD.push(cC,dF.user[name],cX);
dD.push(dd,dF.user[name],de);

if(dE.themeable){dD.push(cH,dF.theme[name],cX);
dD.push(dd,dF.theme[name],de);
}
if(dE.deferredInit&&dE.init===undefined){dD.push(cH,dF.init[name],cX);
dD.push(dd,dF.init[name],de);
}dD.push(cD);

if(dE.init!==undefined){if(dE.inheritable){dD.push(cM,dF.init[name],de);

if(dE.nullable){dD.push(bM);
}else if(dE.init!==undefined){dD.push(dd,dF.init[name],de);
}else{dD.push(ci,name,dj,dB.classname,dh);
}dD.push(cN);
}else{dD.push(dd,dF.init[name],de);
}}else if(dE.inheritable||dE.nullable){dD.push(cg);
}else{dD.push(ct,name,dj,dB.classname,dh);
}return this.__y(dA,dG,name,dC,dD);
},executeOptimizedSetter:function(B,C,name,D,E){var J=C.$$properties[name];
var I=C.prototype;
var G=[];
var F=D===cV||D===cY||D===cJ||(D===cI&&J.init===undefined);
var H=J.apply||J.event||J.inheritable;
var K=this.__z(D,name);
this.__A(G,J,name,D,F);

if(F){this.__B(G,C,J,name);
}
if(H){this.__C(G,F,K,D);
}
if(J.inheritable){G.push(dt);
}{};

if(!H){this.__E(G,name,D,F);
}else{this.__F(G,J,name,D,F);
}
if(J.inheritable){this.__G(G,J,name,D);
}else if(H){this.__H(G,J,name,D);
}
if(H){this.__I(G,J,name);
if(J.inheritable&&I._getChildren){this.__J(G,name);
}}if(F){G.push(cl);
}return this.__y(B,I,name,D,G,E);
},__z:function(t,name){if(t===cJ||t===cG){var u=this.$$store.runtime[name];
}else if(t===cY||t===cU){u=this.$$store.theme[name];
}else if(t===cI){u=this.$$store.init[name];
}else{u=this.$$store.user[name];
}return u;
},__A:function(bA,bB,name,bC,bD){{if(!bB.nullable||bB.check||bB.inheritable){bA.push('var prop=qx.core.Property;');
}if(bC==="set"){bA.push('if(value===undefined)prop.error(this,2,"',name,'","',bC,'",value);');
}};
},__B:function(dN,dO,dP,name){if(dP.transform){dN.push('value=this.',dP.transform,'(value);');
}if(dP.validate){if(typeof dP.validate==="string"){dN.push('this.',dP.validate,'(value);');
}else if(dP.validate instanceof Function){dN.push(dO.classname,'.$$properties.',name);
dN.push('.validate.call(this, value);');
}}},__C:function(bt,bu,bv,bw){var bx=(bw==="reset"||bw==="resetThemed"||bw==="resetRuntime");

if(bu){bt.push('if(this.',bv,'===value)return value;');
}else if(bx){bt.push('if(this.',bv,'===undefined)return;');
}},__D:undefined,__E:function(bq,name,br,bs){if(br==="setRuntime"){bq.push('this.',this.$$store.runtime[name],'=value;');
}else if(br==="resetRuntime"){bq.push('if(this.',this.$$store.runtime[name],'!==undefined)');
bq.push('delete this.',this.$$store.runtime[name],';');
}else if(br==="set"){bq.push('this.',this.$$store.user[name],'=value;');
}else if(br==="reset"){bq.push('if(this.',this.$$store.user[name],'!==undefined)');
bq.push('delete this.',this.$$store.user[name],';');
}else if(br==="setThemed"){bq.push('this.',this.$$store.theme[name],'=value;');
}else if(br==="resetThemed"){bq.push('if(this.',this.$$store.theme[name],'!==undefined)');
bq.push('delete this.',this.$$store.theme[name],';');
}else if(br==="init"&&bs){bq.push('this.',this.$$store.init[name],'=value;');
}},__F:function(dT,dU,name,dV,dW){if(dU.inheritable){dT.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dT.push('var computed, old;');
}dT.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dV==="setRuntime"){dT.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dV==="resetRuntime"){dT.push('delete this.',this.$$store.runtime[name],';');
dT.push('if(this.',this.$$store.user[name],'!==undefined)');
dT.push('computed=this.',this.$$store.user[name],';');
dT.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dT.push('computed=this.',this.$$store.theme[name],';');
dT.push('else if(this.',this.$$store.init[name],'!==undefined){');
dT.push('computed=this.',this.$$store.init[name],';');
dT.push('this.',this.$$store.useinit[name],'=true;');
dT.push('}');
}else{dT.push('old=computed=this.',this.$$store.runtime[name],';');
if(dV==="set"){dT.push('this.',this.$$store.user[name],'=value;');
}else if(dV==="reset"){dT.push('delete this.',this.$$store.user[name],';');
}else if(dV==="setThemed"){dT.push('this.',this.$$store.theme[name],'=value;');
}else if(dV==="resetThemed"){dT.push('delete this.',this.$$store.theme[name],';');
}else if(dV==="init"&&dW){dT.push('this.',this.$$store.init[name],'=value;');
}}dT.push('}');
dT.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dV==="set"){if(!dU.inheritable){dT.push('old=this.',this.$$store.user[name],';');
}dT.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dV==="reset"){if(!dU.inheritable){dT.push('old=this.',this.$$store.user[name],';');
}dT.push('delete this.',this.$$store.user[name],';');
dT.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dT.push('computed=this.',this.$$store.runtime[name],';');
dT.push('if(this.',this.$$store.theme[name],'!==undefined)');
dT.push('computed=this.',this.$$store.theme[name],';');
dT.push('else if(this.',this.$$store.init[name],'!==undefined){');
dT.push('computed=this.',this.$$store.init[name],';');
dT.push('this.',this.$$store.useinit[name],'=true;');
dT.push('}');
}else{if(dV==="setRuntime"){dT.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU.inheritable){dT.push('computed=this.',this.$$store.user[name],';');
}else{dT.push('old=computed=this.',this.$$store.user[name],';');
}if(dV==="setThemed"){dT.push('this.',this.$$store.theme[name],'=value;');
}else if(dV==="resetThemed"){dT.push('delete this.',this.$$store.theme[name],';');
}else if(dV==="init"&&dW){dT.push('this.',this.$$store.init[name],'=value;');
}}dT.push('}');
if(dU.themeable){dT.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dU.inheritable){dT.push('old=this.',this.$$store.theme[name],';');
}
if(dV==="setRuntime"){dT.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dV==="set"){dT.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dV==="setThemed"){dT.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dV==="resetThemed"){dT.push('delete this.',this.$$store.theme[name],';');
dT.push('if(this.',this.$$store.init[name],'!==undefined){');
dT.push('computed=this.',this.$$store.init[name],';');
dT.push('this.',this.$$store.useinit[name],'=true;');
dT.push('}');
}else if(dV==="init"){if(dW){dT.push('this.',this.$$store.init[name],'=value;');
}dT.push('computed=this.',this.$$store.theme[name],';');
}else if(dV==="refresh"){dT.push('computed=this.',this.$$store.theme[name],';');
}dT.push('}');
}dT.push('else if(this.',this.$$store.useinit[name],'){');

if(!dU.inheritable){dT.push('old=this.',this.$$store.init[name],';');
}
if(dV==="init"){if(dW){dT.push('computed=this.',this.$$store.init[name],'=value;');
}else{dT.push('computed=this.',this.$$store.init[name],';');
}}else if(dV==="set"||dV==="setRuntime"||dV==="setThemed"||dV==="refresh"){dT.push('delete this.',this.$$store.useinit[name],';');

if(dV==="setRuntime"){dT.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dV==="set"){dT.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dV==="setThemed"){dT.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dV==="refresh"){dT.push('computed=this.',this.$$store.init[name],';');
}}dT.push('}');
if(dV==="set"||dV==="setRuntime"||dV==="setThemed"||dV==="init"){dT.push('else{');

if(dV==="setRuntime"){dT.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dV==="set"){dT.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dV==="setThemed"){dT.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dV==="init"){if(dW){dT.push('computed=this.',this.$$store.init[name],'=value;');
}else{dT.push('computed=this.',this.$$store.init[name],';');
}dT.push('this.',this.$$store.useinit[name],'=true;');
}dT.push('}');
}},__G:function(W,X,name,Y){W.push('if(computed===undefined||computed===inherit){');

if(Y==="refresh"){W.push('computed=value;');
}else{W.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}W.push('if((computed===undefined||computed===inherit)&&');
W.push('this.',this.$$store.init[name],'!==undefined&&');
W.push('this.',this.$$store.init[name],'!==inherit){');
W.push('computed=this.',this.$$store.init[name],';');
W.push('this.',this.$$store.useinit[name],'=true;');
W.push('}else{');
W.push('delete this.',this.$$store.useinit[name],';}');
W.push('}');
W.push('if(old===computed)return value;');
W.push('if(computed===inherit){');
W.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
W.push('}');
W.push('else if(computed===undefined)');
W.push('delete this.',this.$$store.inherit[name],';');
W.push('else this.',this.$$store.inherit[name],'=computed;');
W.push('var backup=computed;');
if(X.init!==undefined&&Y!=="init"){W.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{W.push('if(old===undefined)old=null;');
}W.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(bf,bg,name,bh){if(bh!=="set"&&bh!=="setRuntime"&&bh!=="setThemed"){bf.push('if(computed===undefined)computed=null;');
}bf.push('if(old===computed)return value;');
if(bg.init!==undefined&&bh!=="init"){bf.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{bf.push('if(old===undefined)old=null;');
}},__I:function(ba,bb,name){if(bb.apply){ba.push('this.',bb.apply,'(computed, old, "',name,'");');
}if(bb.event){ba.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",bb.event,"')){","reg.fireEvent(this, '",bb.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(o,name){o.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
o.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
o.push('}');
}},defer:function(b){var d=navigator.userAgent.indexOf(bG)!=-1;
var c=navigator.userAgent.indexOf(cw)!=-1;
if(d||c){b.__v=b.__w;
}}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Bootstrap.define(g,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==d)?k:j],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}[Array.prototype.indexOf?j:k],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(u,v){if(v==null){v=this.length-1;
}else if(v<0){v=Math.max(0,this.length+v);
}
for(var i=v;i>=0;i--){if(this[i]===u){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?j:k],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){a.call(b||window,c,i,this);
}}}}[Array.prototype.forEach?j:k],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?j:k],arrayMap:{"native":Array.prototype.map,"emulated":function(m,n){var o=[];
var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){o[i]=m.call(n||window,p,i,this);
}}return o;
}}[Array.prototype.map?j:k],arraySome:{"native":Array.prototype.some,"emulated":function(w,x){var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(w.call(x||window,y,i,this)){return true;
}}}return false;
}}[Array.prototype.some?j:k],arrayEvery:{"native":Array.prototype.every,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(!z.call(A||window,B,i,this)){return false;
}}}return true;
}}[Array.prototype.every?j:k],stringQuote:{"native":String.prototype.quote,"emulated":function(){return h+this.replace(/\\/g,f).replace(/\"/g,e)+h;
}}[String.prototype.quote?j:k]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var n="[Class ",m="]",k="extend",j="qx.Class",h=".",g="static";
qx.Bootstrap.define(j,{statics:{define:function(name,bO){if(!bO){var bO={};
}if(bO.include&&!(bO.include instanceof Array)){bO.include=[bO.include];
}if(bO.implement&&!(bO.implement instanceof Array)){bO.implement=[bO.implement];
}var bP=false;

if(!bO.hasOwnProperty(k)&&!bO.type){bO.type=g;
bP=true;
}{};
var bQ=this.__O(name,bO.type,bO.extend,bO.statics,bO.construct,bO.destruct,bO.include);
if(bO.extend){if(bO.properties){this.__Q(bQ,bO.properties,true);
}if(bO.members){this.__S(bQ,bO.members,true,true,false);
}if(bO.events){this.__P(bQ,bO.events,true);
}if(bO.include){for(var i=0,l=bO.include.length;i<l;i++){this.__W(bQ,bO.include[i],false);
}}}if(bO.settings){for(var bR in bO.settings){qx.core.Setting.define(bR,bO.settings[bR]);
}}if(bO.variants){for(var bR in bO.variants){qx.core.Variant.define(bR,bO.variants[bR].allowedValues,bO.variants[bR].defaultValue);
}}if(bO.implement){for(var i=0,l=bO.implement.length;i<l;i++){this.__U(bQ,bO.implement[i]);
}}{};
if(bO.defer){bO.defer.self=bQ;
bO.defer(bQ,bQ.prototype,{add:function(name,e){var f={};
f[name]=e;
qx.Class.__Q(bQ,f,true);
}});
}return bQ;
},undefine:function(name){delete this.$$registry[name];
var bY=name.split(h);
var cb=[window];

for(var i=0;i<bY.length;i++){cb.push(cb[i][bY[i]]);
}for(var i=cb.length-1;i>=1;i--){var ca=cb[i];
var parent=cb[i-1];

if(qx.Bootstrap.isFunction(ca)||qx.Bootstrap.objectGetLength(ca)===0){delete parent[bY[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(c,d){{};
qx.Class.__W(c,d,false);
},patch:function(K,L){{};
qx.Class.__W(K,L,true);
},isSubClassOf:function(B,C){if(!B){return false;
}
if(B==C){return true;
}
if(B.prototype instanceof C){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bJ){var bK=[];

while(bJ){if(bJ.$$properties){bK.push.apply(bK,qx.Bootstrap.getKeys(bJ.$$properties));
}bJ=bJ.superclass;
}return bK;
},getByProperty:function(bN,name){while(bN){if(bN.$$properties&&bN.$$properties[name]){return bN;
}bN=bN.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bH,bI){return bH.$$includes&&bH.$$includes.indexOf(bI)!==-1;
},getByMixin:function(R,S){var T,i,l;

while(R){if(R.$$includes){T=R.$$flatIncludes;

for(i=0,l=T.length;i<l;i++){if(T[i]===S){return R;
}}}R=R.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(br,bs){return !!this.getByMixin(br,bs);
},hasOwnInterface:function(o,p){return o.$$implements&&o.$$implements.indexOf(p)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bm){var bn=[];

while(bm){if(bm.$$implements){bn.push.apply(bn,bm.$$flatImplements);
}bm=bm.superclass;
}return bn;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bo,bp){var bq=bo.constructor;

if(this.hasInterface(bq,bp)){return true;
}
try{qx.Interface.assertObject(bo,bp);
return true;
}catch(M){}
try{qx.Interface.assert(bq,bp,false);
return true;
}catch(b){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return n+this.classname+m;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,bc,bd,be,bf,bg,bh){var bk;

if(!bd&&true){bk=be||{};
qx.Bootstrap.setDisplayNames(bk,name);
}else{var bk={};

if(bd){if(!bf){bf=this.__X();
}
if(this.__ba(bd,bh)){bk=this.__bb(bf,name,bc);
}else{bk=bf;
}if(bc==="singleton"){bk.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bf,name,"constructor");
}if(be){qx.Bootstrap.setDisplayNames(be,name);
var bl;

for(var i=0,a=qx.Bootstrap.getKeys(be),l=a.length;i<l;i++){bl=a[i];
var bi=be[bl];
{bk[bl]=bi;
};
}}}var bj=qx.Bootstrap.createNamespace(name,bk);
bk.name=bk.classname=name;
bk.basename=bj;
bk.$$type="Class";

if(bc){bk.$$classtype=bc;
}if(!bk.hasOwnProperty("toString")){bk.toString=this.genericToString;
}
if(bd){qx.Bootstrap.extendClass(bk,bf,bd,name,bj);
if(bg){{};
bk.$$destructor=bg;
qx.Bootstrap.setDisplayName(bg,name,"destruct");
}}this.$$registry[name]=bk;
return bk;
},__P:function(G,H,I){var J,J;
{};

if(G.$$events){for(var J in H){G.$$events[J]=H[J];
}}else{G.$$events=H;
}},__Q:function(q,r,s){var t;

if(s===undefined){s=false;
}var u=q.prototype;

for(var name in r){t=r[name];
{};
t.name=name;
if(!t.refine){if(q.$$properties===undefined){q.$$properties={};
}q.$$properties[name]=t;
}if(t.init!==undefined){q.prototype["$$init_"+name]=t.init;
}if(t.event!==undefined){var event={};
event[t.event]="qx.event.type.Data";
this.__P(q,event,s);
}if(t.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!u.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(q);
}}
if(!t.refine){qx.core.Property.attachMethods(q,name,t);
}}},__R:null,__S:function(bz,bA,bB,bC,bD){var bE=bz.prototype;
var bG,bF;
qx.Bootstrap.setDisplayNames(bA,bz.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bA),l=a.length;i<l;i++){bG=a[i];
bF=bA[bG];
{};
if(bC!==false&&bF instanceof Function&&bF.$$type==null){if(bD==true){bF=this.__T(bF,bE[bG]);
}else{if(bE[bG]){bF.base=bE[bG];
}bF.self=bz;
}{};
}bE[bG]=bF;
}},__T:function(bL,bM){if(bM){return function(){var W=bL.base;
bL.base=bM;
var V=bL.apply(this,arguments);
bL.base=W;
return V;
};
}else{return bL;
}},__U:function(y,z){{};
var A=qx.Interface.flatten([z]);

if(y.$$implements){y.$$implements.push(z);
y.$$flatImplements.push.apply(y.$$flatImplements,A);
}else{y.$$implements=[z];
y.$$flatImplements=A;
}},__V:function(bt){var name=bt.classname;
var bu=this.__bb(bt,name,bt.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bt),l=a.length;i<l;i++){bv=a[i];
bu[bv]=bt[bv];
}bu.prototype=bt.prototype;
var bx=bt.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bv=a[i];
var by=bx[bv];
if(by&&by.self==bt){by.self=bu;
}}for(var bv in this.$$registry){var bw=this.$$registry[bv];

if(!bw){continue;
}
if(bw.base==bt){bw.base=bu;
}
if(bw.superclass==bt){bw.superclass=bu;
}
if(bw.$$original){if(bw.$$original.base==bt){bw.$$original.base=bu;
}
if(bw.$$original.superclass==bt){bw.$$original.superclass=bu;
}}}qx.Bootstrap.createNamespace(name,bu);
this.$$registry[name]=bu;
return bu;
},__W:function(bS,bT,bU){{};

if(this.hasMixin(bS,bT)){return;
}var bX=bS.$$original;

if(bT.$$constructor&&!bX){bS=this.__V(bS);
}var bW=qx.Mixin.flatten([bT]);
var bV;

for(var i=0,l=bW.length;i<l;i++){bV=bW[i];
if(bV.$$events){this.__P(bS,bV.$$events,bU);
}if(bV.$$properties){this.__Q(bS,bV.$$properties,bU);
}if(bV.$$members){this.__S(bS,bV.$$members,bU,bU,bU);
}}if(bS.$$includes){bS.$$includes.push(bT);
bS.$$flatIncludes.push.apply(bS.$$flatIncludes,bW);
}else{bS.$$includes=[bT];
bS.$$flatIncludes=bW;
}},__X:function(){function U(){U.base.apply(this,arguments);
}return U;
},__Y:function(){return function(){};
},__ba:function(X,Y){{};
if(X&&X.$$includes){var ba=X.$$flatIncludes;

for(var i=0,l=ba.length;i<l;i++){if(ba[i].$$constructor){return true;
}}}if(Y){var bb=qx.Mixin.flatten(Y);

for(var i=0,l=bb.length;i<l;i++){if(bb[i].$$constructor){return true;
}}}return false;
},__bb:function(N,name,O){var P;
var Q=function(){var F=Q;
{};
var E=F.$$original.apply(this,arguments);
if(F.$$includes){var D=F.$$flatIncludes;

for(var i=0,l=D.length;i<l;i++){if(D[i].$$constructor){D[i].$$constructor.apply(this,arguments);
}}}{};
return E;
};
{};
Q.$$original=N;
N.wrapper=Q;
return Q;
}},defer:function(){var v,w,x;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bc:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__bc();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__bd:{},__be:{},compilerIsSet:function(){return true;
},define:function(L,M,N){{};

if(!this.__bd[L]){this.__bd[L]={};
}else{}this.__bd[L].allowedValues=M;
this.__bd[L].defaultValue=N;
},get:function(J){var K=this.__bd[J];
{};

if(K.value!==undefined){return K.value;
}return K.defaultValue;
},__bf:function(){if(window.qxvariants){for(var I in qxvariants){{};

if(!this.__bd[I]){this.__bd[I]={};
}this.__bd[I].value=qxvariants[I];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(w){}this.__bg(this.__bd);
}},__bg:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__bd[Q]){this.__bd[Q]={};
}this.__bd[Q].value=decodeURIComponent(P[2]);
}},select:function(D,E){{};

for(var F in E){if(this.isSet(D,F)){return E[F];
}}
if(E[r]!==undefined){return E[r];
}{};
},isSet:function(y,z){var A=y+n+z;

if(this.__be[A]!==undefined){return this.__be[A];
}var C=false;
if(z.indexOf(s)<0){C=this.get(y)===z;
}else{var B=z.split(s);

for(var i=0,l=B.length;i<l;i++){if(this.get(y)===B[i]){C=true;
break;
}}}this.__be[A]=C;
return C;
},__bh:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__bi:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__bj:function(G,H){for(var i=0,l=G.length;i<l;i++){if(G[i]==H){return true;
}}return false;
}},defer:function(x){x.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
x.define(k,[u,t],u);
x.define(o,[u,t],t);
x.define(j,[u,t],u);
x.__bf();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(l,m,n){l.attachEvent(h+m,n);
},"default":function(s,t,u){s.addEventListener(t,u,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(z,A,B){try{z.detachEvent(h+A,B);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(y){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(C){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(v,w){if(document.createEventObject){var x=document.createEventObject();
return v.fireEvent(h+w,x);
}else{var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(j,k){return j.hasOwnProperty(h+k);
},"default":function(o,p){var q=h+p;
var r=(q in o);

if(!r){r=typeof o[q]==g;

if(!r&&o.setAttribute){o.setAttribute(q,c);
r=typeof o[q]==g;
o.removeAttribute(q);
}}return r;
}})}});
})();
(function(){var G="|bubble",F="|capture",E="|",D="",C="_",B="unload",A="UNKNOWN_",z="c",y="DOM_",x="WIN_",u="__bo",w="capture",v="qx.event.Manager",t="__bp",s="QX_";
qx.Class.define(v,{extend:Object,construct:function(cv,cw){this.__bk=cv;
this.__bl=qx.core.ObjectRegistry.toHashCode(cv);
this.__bm=cw;
if(cv.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cv,B,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cv,B,arguments.callee);
self.dispose();
}));
}this.__bn={};
this.__bo={};
this.__bp={};
this.__bq={};
},statics:{__br:0,getNextUniqueId:function(){return (this.__br++)+D;
}},members:{__bm:null,__bn:null,__bp:null,__bs:null,__bo:null,__bq:null,__bk:null,__bl:null,getWindow:function(){return this.__bk;
},getWindowId:function(){return this.__bl;
},getHandler:function(q){var r=this.__bo[q.classname];

if(r){return r;
}return this.__bo[q.classname]=new q(this);
},getDispatcher:function(bQ){var bR=this.__bp[bQ.classname];

if(bR){return bR;
}return this.__bp[bQ.classname]=new bQ(this,this.__bm);
},getListeners:function(h,j,k){var m=h.$$hash||qx.core.ObjectRegistry.toHashCode(h);
var o=this.__bn[m];

if(!o){return null;
}var p=j+(k?F:G);
var n=o[p];
return n?n.concat():null;
},serializeListeners:function(H){var O=H.$$hash||qx.core.ObjectRegistry.toHashCode(H);
var Q=this.__bn[O];
var M=[];

if(Q){var K,P,I,L,N;

for(var J in Q){K=J.indexOf(E);
P=J.substring(0,K);
I=J.charAt(K+1)==z;
L=Q[J];

for(var i=0,l=L.length;i<l;i++){N=L[i];
M.push({self:N.context,handler:N.handler,type:P,capture:I});
}}}return M;
},toggleAttachedEvents:function(bH,bI){var bN=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bP=this.__bn[bN];

if(bP){var bK,bO,bJ,bL;

for(var bM in bP){bK=bM.indexOf(E);
bO=bM.substring(0,bK);
bJ=bM.charCodeAt(bK+1)===99;
bL=bP[bM];

if(bI){this.__bt(bH,bO,bJ);
}else{this.__bu(bH,bO,bJ);
}}}},hasListener:function(bw,bx,by){{};
var bz=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bB=this.__bn[bz];

if(!bB){return false;
}var bC=bx+(by?F:G);
var bA=bB[bC];
return bA&&bA.length>0;
},importListeners:function(cx,cy){{};
var cE=cx.$$hash||qx.core.ObjectRegistry.toHashCode(cx);
var cF=this.__bn[cE]={};
var cB=qx.event.Manager;

for(var cz in cy){var cC=cy[cz];
var cD=cC.type+(cC.capture?F:G);
var cA=cF[cD];

if(!cA){cA=cF[cD]=[];
this.__bt(cx,cC.type,cC.capture);
}cA.push({handler:cC.listener,context:cC.self,unique:cC.unique||(cB.__br++)+D});
}},addListener:function(bl,bm,bn,self,bo){var bs;
{};
var bt=bl.$$hash||qx.core.ObjectRegistry.toHashCode(bl);
var bv=this.__bn[bt];

if(!bv){bv=this.__bn[bt]={};
}var br=bm+(bo?F:G);
var bq=bv[br];

if(!bq){bq=bv[br]=[];
}if(bq.length===0){this.__bt(bl,bm,bo);
}var bu=(qx.event.Manager.__br++)+D;
var bp={handler:bn,context:self,unique:bu};
bq.push(bp);
return br+E+bu;
},findHandler:function(ci,cj){var ct=false,cm=false,cu=false;
var cs;

if(ci.nodeType===1){ct=true;
cs=y+ci.tagName.toLowerCase()+C+cj;
}else if(ci==this.__bk){cm=true;
cs=x+cj;
}else if(ci.classname){cu=true;
cs=s+ci.classname+C+cj;
}else{cs=A+ci+C+cj;
}var co=this.__bq;

if(co[cs]){return co[cs];
}var cr=this.__bm.getHandlers();
var cn=qx.event.IEventHandler;
var cp,cq,cl,ck;

for(var i=0,l=cr.length;i<l;i++){cp=cr[i];
cl=cp.SUPPORTED_TYPES;

if(cl&&!cl[cj]){continue;
}ck=cp.TARGET_CHECK;

if(ck){if(!ct&&ck===cn.TARGET_DOMNODE){continue;
}else if(!cm&&ck===cn.TARGET_WINDOW){continue;
}else if(!cu&&ck===cn.TARGET_OBJECT){continue;
}}cq=this.getHandler(cr[i]);

if(cp.IGNORE_CAN_HANDLE||cq.canHandleEvent(ci,cj)){co[cs]=cq;
return cq;
}}return null;
},__bt:function(bD,bE,bF){var bG=this.findHandler(bD,bE);

if(bG){bG.registerEvent(bD,bE,bF);
return;
}{};
},removeListener:function(bX,bY,ca,self,cb){var cf;
{};
var cg=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var ch=this.__bn[cg];

if(!ch){return false;
}var cc=bY+(cb?F:G);
var cd=ch[cc];

if(!cd){return false;
}var ce;

for(var i=0,l=cd.length;i<l;i++){ce=cd[i];

if(ce.handler===ca&&ce.context===self){qx.lang.Array.removeAt(cd,i);

if(cd.length==0){this.__bu(bX,bY,cb);
}return true;
}}return false;
},removeListenerById:function(R,S){var Y;
{};
var W=S.split(E);
var bc=W[0];
var T=W[1].charCodeAt(0)==99;
var bb=W[2];
var ba=R.$$hash||qx.core.ObjectRegistry.toHashCode(R);
var bd=this.__bn[ba];

if(!bd){return false;
}var X=bc+(T?F:G);
var V=bd[X];

if(!V){return false;
}var U;

for(var i=0,l=V.length;i<l;i++){U=V[i];

if(U.unique===bb){qx.lang.Array.removeAt(V,i);

if(V.length==0){this.__bu(R,bc,T);
}return true;
}}return false;
},removeAllListeners:function(a){var e=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var g=this.__bn[e];

if(!g){return false;
}var c,f,b;

for(var d in g){if(g[d].length>0){c=d.split(E);
f=c[0];
b=c[1]===w;
this.__bu(a,f,b);
}}delete this.__bn[e];
return true;
},deleteAllListeners:function(bS){delete this.__bn[bS];
},__bu:function(bT,bU,bV){var bW=this.findHandler(bT,bU);

if(bW){bW.unregisterEvent(bT,bU,bV);
return;
}{};
},dispatchEvent:function(be,event){var bj;
{};
var bk=event.getType();

if(!event.getBubbles()&&!this.hasListener(be,bk)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(be);
}var bi=this.__bm.getDispatchers();
var bh;
var bg=false;

for(var i=0,l=bi.length;i<l;i++){bh=this.getDispatcher(bi[i]);
if(bh.canDispatchEvent(be,event,bk)){bh.dispatchEvent(be,event,bk);
bg=true;
break;
}}
if(!bg){{};
return true;
}var bf=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bf;
},dispose:function(){this.__bm.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,u);
qx.util.DisposeUtil.disposeMap(this,t);
this.__bn=this.__bk=this.__bs=null;
this.__bm=this.__bq=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(s){return s.nodeType===
this.DOCUMENT?s:
s.ownerDocument||s.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(t){if(t.nodeType==null){return t;
}if(t.nodeType!==this.DOCUMENT){t=t.ownerDocument;
}return t.parentWindow;
},"default":function(q){if(q.nodeType==null){return q;
}if(q.nodeType!==this.DOCUMENT){q=q.ownerDocument;
}return q.defaultView;
}}),getDocumentElement:function(j){return this.getDocument(j).documentElement;
},getBodyElement:function(f){return this.getDocument(f).body;
},isNode:function(m){return !!(m&&m.nodeType!=null);
},isElement:function(r){return !!(r&&r.nodeType===this.ELEMENT);
},isDocument:function(b){return !!(b&&b.nodeType===this.DOCUMENT);
},isText:function(k){return !!(k&&k.nodeType===this.TEXT);
},isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);
},isNodeName:function(g,h){if(!h||!g||!g.nodeName){return false;
}return h.toLowerCase()==qx.dom.Node.getName(g);
},getName:function(l){if(!l||!l.nodeName){return null;
}return l.nodeName.toLowerCase();
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(c);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var g="mshtml",f="qx.client",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(s,t){return this.cast(s,Array,t);
},cast:function(F,G,H){if(F.constructor===G){return F;
}
if(qx.Class.hasInterface(F,qx.data.IListData)){var F=F.toArray();
}var I=new G;
if(qx.core.Variant.isSet(f,g)){if(F.item){for(var i=H||0,l=F.length;i<l;i++){I.push(F[i]);
}return I;
}}if(Object.prototype.toString.call(F)===e&&H==null){I.push.apply(I,F);
}else{I.push.apply(I,Array.prototype.slice.call(F,H||0));
}return I;
},fromArguments:function(K,L){return Array.prototype.slice.call(K,L||0);
},fromCollection:function(u){if(qx.core.Variant.isSet(f,g)){if(u.item){var v=[];

for(var i=0,l=u.length;i<l;i++){v[i]=u[i];
}return v;
}}return Array.prototype.slice.call(u,0);
},fromShortHand:function(bj){var bl=bj.length;
var bk=qx.lang.Array.clone(bj);
switch(bl){case 1:bk[1]=bk[2]=bk[3]=bk[0];
break;
case 2:bk[2]=bk[0];
case 3:bk[3]=bk[1];
}return bk;
},clone:function(J){return J.concat();
},insertAt:function(bg,bh,i){bg.splice(i,0,bh);
return bg;
},insertBefore:function(C,D,E){var i=C.indexOf(E);

if(i==-1){C.push(D);
}else{C.splice(i,0,D);
}return C;
},insertAfter:function(z,A,B){var i=z.indexOf(B);

if(i==-1||i==(z.length-1)){z.push(A);
}else{z.splice(i+1,0,A);
}return z;
},removeAt:function(O,i){return O.splice(i,1)[0];
},removeAll:function(w){w.length=0;
return this;
},append:function(bp,bq){{};
Array.prototype.push.apply(bp,bq);
return bp;
},exclude:function(o,p){{};

for(var i=0,r=p.length,q;i<r;i++){q=o.indexOf(p[i]);

if(q!=-1){o.splice(q,1);
}}return o;
},remove:function(M,N){var i=M.indexOf(N);

if(i!=-1){M.splice(i,1);
return N;
}},contains:function(x,y){return x.indexOf(y)!==-1;
},equals:function(bm,bn){var length=bm.length;

if(length!==bn.length){return false;
}
for(var i=0;i<length;i++){if(bm[i]!==bn[i]){return false;
}}return true;
},sum:function(h){var j=0;

for(var i=0,l=h.length;i<l;i++){j+=h[i];
}return j;
},max:function(bd){{};
var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]>be){be=bd[i];
}}return be===undefined?null:be;
},min:function(k){{};
var i,n=k.length,m=k[0];

for(i=1;i<n;i++){if(k[i]<m){m=k[i];
}}return m===undefined?null:m;
},unique:function(P){var ba=[],R={},U={},W={};
var V,Q=0;
var bb=c+qx.lang.Date.now();
var S=false,Y=false,bc=false;
for(var i=0,X=P.length;i<X;i++){V=P[i];
if(V===null){if(!S){S=true;
ba.push(V);
}}else if(V===undefined){}else if(V===false){if(!Y){Y=true;
ba.push(V);
}}else if(V===true){if(!bc){bc=true;
ba.push(V);
}}else if(typeof V===a){if(!R[V]){R[V]=1;
ba.push(V);
}}else if(typeof V===b){if(!U[V]){U[V]=1;
ba.push(V);
}}else{T=V[bb];

if(T==null){T=V[bb]=Q++;
}
if(!W[T]){W[T]=V;
ba.push(V);
}}}for(var T in W){try{delete W[T][bb];
}catch(bo){try{W[T][bb]=null;
}catch(bi){throw new Error("Cannot clean-up map entry doneObjects["+T+"]["+bb+"]");
}}}return ba;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(t){if(t.displayName){return t.displayName;
}
if(t.$$original||t.wrapper||t.classname){return t.classname+a;
}
if(t.$$mixin){for(var v in t.$$mixin.$$members){if(t.$$mixin.$$members[v]==t){return t.$$mixin.name+d+v+f;
}}for(var v in t.$$mixin){if(t.$$mixin[v]==t){return t.$$mixin.name+e+v+f;
}}}
if(t.self){var w=t.self.constructor;

if(w){for(var v in w.prototype){if(w.prototype[v]==t){return w.classname+d+v+f;
}}for(var v in w){if(w[v]==t){return w.classname+e+v+f;
}}}}var u=t.toString().match(/function\s*(\w*)\s*\(.*/);

if(u&&u.length>=1&&u[1]){return u[1]+f;
}return c;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(F,G){{};
if(!G){return F;
}if(!(G.self||G.args||G.delay!=null||G.periodical!=null||G.attempt)){return F;
}return function(event){{};
var r=qx.lang.Array.fromArguments(arguments);
if(G.args){r=G.args.concat(r);
}
if(G.delay||G.periodical){var q=qx.event.GlobalError.observeMethod(function(){return F.apply(G.self||this,r);
});

if(G.delay){return window.setTimeout(q,G.delay);
}
if(G.periodical){return window.setInterval(q,G.periodical);
}}else if(G.attempt){var s=false;

try{s=F.apply(G.self||this,r);
}catch(g){}return s;
}else{return F.apply(G.self||this,r);
}};
},bind:function(k,self,l){return this.create(k,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(x,y){return this.create(x,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(z,self,A){if(arguments.length<3){return function(event){return z.call(self||this,event||window.event);
};
}else{var B=qx.lang.Array.fromArguments(arguments,2);
return function(event){var h=[event||window.event];
h.push.apply(h,B);
z.apply(self||this,h);
};
}},attempt:function(i,self,j){return this.create(i,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(m,n,self,o){return this.create(m,{delay:n,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(C,D,self,E){return this.create(C,{periodical:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bv:{},getManager:function(d){if(d==null){{};
d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bv[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bv[f]=e;
}return e;
},removeManager:function(w){var x=w.getWindowId();
delete this.__bv[x];
},addListener:function(h,i,j,self,k){return this.getManager(h).addListener(h,i,j,self,k);
},removeListener:function(M,N,O,self,P){return this.getManager(M).removeListener(M,N,O,self,P);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(m){return this.getManager(m).removeAllListeners(m);
},deleteAllListeners:function(u){var v=u.$$hash;

if(v){this.getManager(u).deleteAllListeners(v);
}},hasListener:function(Q,R,S){return this.getManager(Q).hasListener(Q,R,S);
},serializeListeners:function(t){return this.getManager(t).serializeListeners(t);
},createEvent:function(I,J,K){{};
if(J==null){J=qx.event.type.Event;
}var L=qx.event.Pool.getInstance().getObject(J);
K?L.init.apply(L,K):L.init();
if(I){L.setType(I);
}return L;
},dispatchEvent:function(l,event){return this.getManager(l).dispatchEvent(l,event);
},fireEvent:function(n,o,p,q){var r;
{};
var s=this.createEvent(o,p||null,q);
return this.getManager(n).dispatchEvent(n,s);
},fireNonBubblingEvent:function(A,B,C,D){{};
var E=this.getManager(A);

if(!E.hasListener(A,B,false)){return true;
}var F=this.createEvent(B,C||null,D);
return E.dispatchEvent(A,F);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bw:[],addHandler:function(g){{};
this.__bw.push(g);
this.__bw.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bw;
},__bx:[],addDispatcher:function(y,z){{};
this.__bx.push(y);
this.__bx.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bx;
}}});
})();
(function(){var f="$$hash",e="",d="qx.core.ObjectRegistry";
qx.Class.define(d,{statics:{inShutDown:false,__by:{},__bz:0,__bA:[],register:function(x){var A=this.__by;

if(!A){return;
}var z=x.$$hash;

if(z==null){var y=this.__bA;

if(y.length>0){z=y.pop();
}else{z=(this.__bz++)+e;
}x.$$hash=z;
}{};
A[z]=x;
},unregister:function(u){var v=u.$$hash;

if(v==null){return;
}var w=this.__by;

if(w&&w[v]){delete w[v];
this.__bA.push(v);
}try{delete u.$$hash;
}catch(c){if(u.removeAttribute){u.removeAttribute(f);
}}},toHashCode:function(q){{};
var s=q.$$hash;

if(s!=null){return s;
}var r=this.__bA;

if(r.length>0){s=r.pop();
}else{s=(this.__bz++)+e;
}return q.$$hash=s;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__bA.push(j);
try{delete h.$$hash;
}catch(k){if(h.removeAttribute){h.removeAttribute(f);
}}}},fromHashCode:function(g){return this.__by[g]||null;
},shutdown:function(){this.inShutDown=true;
var n=this.__by;
var p=[];

for(var o in n){p.push(o);
}p.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var m,i=0,l=p.length;

while(true){try{for(;i<l;i++){o=p[i];
m=n[o];

if(m&&m.dispose){m.dispose();
}}}catch(t){qx.Bootstrap.error(this,"Could not dispose object "+m.toString()+": "+t);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__by;
},getRegistry:function(){return this.__by;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q=":",p="qx.client",o="anonymous",n="...",m="qx.dev.StackTrace",l="",k="\n",j="/source/class/",h=".";
qx.Class.define(m,{statics:{getStackTrace:qx.core.Variant.select(p,{"gecko":function(){try{throw new Error();
}catch(V){var P=this.getStackTraceFromError(V);
qx.lang.Array.removeAt(P,0);
var N=this.getStackTraceFromCaller(arguments);
var L=N.length>P.length?N:P;

for(var i=0;i<Math.min(N.length,P.length);i++){var M=N[i];

if(M.indexOf(o)>=0){continue;
}var T=M.split(q);

if(T.length!=2){continue;
}var R=T[0];
var K=T[1];
var J=P[i];
var U=J.split(q);
var Q=U[0];
var I=U[1];

if(qx.Class.getByName(Q)){var O=Q;
}else{O=R;
}var S=O+q;

if(K){S+=K+q;
}S+=I;
L[i]=S;
}return L;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var v;

try{v.bar();
}catch(u){var w=this.getStackTraceFromError(u);
qx.lang.Array.removeAt(w,0);
return w;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(s){return [];
},"default":function(W){var bc=[];
var bb=qx.lang.Function.getCaller(W);
var X={};

while(bb){var Y=qx.lang.Function.getName(bb);
bc.push(Y);

try{bb=bb.caller;
}catch(r){break;
}
if(!bb){break;
}var ba=qx.core.ObjectRegistry.toHashCode(bb);

if(X[ba]){bc.push(n);
break;
}X[ba]=bb;
}return bc;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(x){if(!x.stack){return [];
}var D=/@(.+):(\d+)$/gm;
var y;
var z=[];

while((y=D.exec(x.stack))!=null){var A=y[1];
var C=y[2];
var B=this.__bB(A);
z.push(B+q+C);
}return z;
},"webkit":function(t){if(t.sourceURL&&t.line){return [this.__bB(t.sourceURL)+q+t.line];
}else{return [];
}},"opera":function(a){if(a.message.indexOf("Backtrace:")<0){return [];
}var c=[];
var d=qx.lang.String.trim(a.message.split("Backtrace:")[1]);
var e=d.split(k);

for(var i=0;i<e.length;i++){var b=e[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(b&&b.length>=2){var g=b[1];
var f=this.__bB(b[2]);
c.push(f+q+g);
}}return c;
},"default":function(){return [];
}}),__bB:function(E){var H=j;
var F=E.indexOf(H);
var G=(F==-1)?E:E.substring(F+H.length).replace(/\//g,h).replace(/\.js$/,l);
return G;
}}});
})();
(function(){var f="qx.lang.RingBuffer";
qx.Class.define(f,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__bC:0,__bD:0,__bE:false,__bF:0,__bG:null,__bH:null,setMaxEntries:function(i){this.__bH=i;
this.clear();
},getMaxEntries:function(){return this.__bH;
},addEntry:function(g){this.__bG[this.__bC]=g;
this.__bC=this.__bI(this.__bC,1);
var h=this.getMaxEntries();

if(this.__bD<h){this.__bD++;
}if(this.__bE&&(this.__bF<h)){this.__bF++;
}},mark:function(){this.__bE=true;
this.__bF=0;
},clearMark:function(){this.__bE=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(a,b){if(a>this.__bD){a=this.__bD;
}if(b&&this.__bE&&(a>this.__bF)){a=this.__bF;
}
if(a>0){var d=this.__bI(this.__bC,-1);
var c=this.__bI(d,-a+1);
var e;

if(c<=d){e=this.__bG.slice(c,d+1);
}else{e=this.__bG.slice(c,this.__bD).concat(this.__bG.slice(0,d+1));
}}else{e=[];
}return e;
},clear:function(){this.__bG=new Array(this.getMaxEntries());
this.__bD=0;
this.__bF=0;
this.__bC=0;
},__bI:function(j,k){var l=this.getMaxEntries();
var m=(j+k)%l;
if(m<0){m+=l;
}return m;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(f){this.setMaxMessages(f||50);
},members:{setMaxMessages:function(b){this.setMaxEntries(b);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(e){this.addEntry(e);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(c,d){return this.getEntries(c,d);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bc="node",bb="error",ba="...(+",Y="array",X=")",W="info",V="instance",U="string",T="null",S="class",bx="number",bw="stringify",bv="]",bu="unknown",bt="function",bs="boolean",br="debug",bq="map",bp="undefined",bo="qx.log.Logger",bj=")}",bk="#",bh="warn",bi="document",bf="{...(",bg="[",bd="text[",be="[...(",bl="\n",bm=")]",bn="object";
qx.Class.define(bo,{statics:{__bJ:br,setLevel:function(bP){this.__bJ=bP;
},getLevel:function(){return this.__bJ;
},setTreshold:function(bK){this.__bM.setMaxMessages(bK);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(N){if(N.$$id){return;
}var O=this.__bL++;
this.__bK[O]=N;
N.$$id=O;
var P=this.__bM.getAllLogEvents();

for(var i=0,l=P.length;i<l;i++){N.process(P[i]);
}},unregister:function(E){var F=E.$$id;

if(F==null){return;
}delete this.__bK[F];
delete E.$$id;
},debug:function(Q,R){qx.log.Logger.__bO(br,arguments);
},info:function(bB,bC){qx.log.Logger.__bO(W,arguments);
},warn:function(G,H){qx.log.Logger.__bO(bh,arguments);
},error:function(h,j){qx.log.Logger.__bO(bb,arguments);
},trace:function(a){qx.log.Logger.__bO(W,[a,qx.dev.StackTrace.getStackTrace().join(bl)]);
},deprecatedMethodWarning:function(b,c){var d;
{};
},deprecatedClassWarning:function(e,f){var g;
{};
},deprecatedEventWarning:function(by,event,bz){var bA;
{};
},deprecatedMixinWarning:function(I,J){var K;
{};
},deprecatedConstantWarning:function(bL,bM,bN){var self,bO;
{};
},deprecateMethodOverriding:function(bF,bG,bH,bI){var bJ;
{};
},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(u,v){var A=this.__bN;

if(A[u]<A[this.__bJ]){return;
}var x=v.length<2?null:v[0];
var z=x?1:0;
var w=[];

for(var i=z,l=v.length;i<l;i++){w.push(this.__bQ(v[i],true));
}var B=new Date;
var C={time:B,offset:B-qx.Bootstrap.LOADSTART,level:u,items:w,win:window};
if(x){if(x instanceof qx.core.Object){C.object=x.$$hash;
}else if(x.$$type){C.clazz=x;
}}this.__bM.process(C);
var D=this.__bK;

for(var y in D){D[y].process(C);
}},__bP:function(L){if(L===undefined){return bp;
}else if(L===null){return T;
}
if(L.$$type){return S;
}var M=typeof L;

if(M===bt||M==U||M===bx||M===bs){return M;
}else if(M===bn){if(L.nodeType){return bc;
}else if(L.classname){return V;
}else if(L instanceof Array){return Y;
}else if(L instanceof Error){return bb;
}else{return bq;
}}
if(L.toString){return bw;
}return bu;
},__bQ:function(k,m){var t=this.__bP(k);
var p=bu;
var o=[];

switch(t){case T:case bp:p=t;
break;
case U:case bx:case bs:p=k;
break;
case bc:if(k.nodeType===9){p=bi;
}else if(k.nodeType===3){p=bd+k.nodeValue+bv;
}else if(k.nodeType===1){p=k.nodeName.toLowerCase();

if(k.id){p+=bk+k.id;
}}else{p=bc;
}break;
case bt:p=qx.lang.Function.getName(k)||t;
break;
case V:p=k.basename+bg+k.$$hash+bv;
break;
case S:case bw:p=k.toString();
break;
case bb:o=qx.dev.StackTrace.getStackTraceFromError(k);
p=k.toString();
break;
case Y:if(m){p=[];

for(var i=0,l=k.length;i<l;i++){if(p.length>20){p.push(ba+(l-i)+X);
break;
}p.push(this.__bQ(k[i],false));
}}else{p=be+k.length+bm;
}break;
case bq:if(m){var n;
var s=[];

for(var r in k){s.push(r);
}s.sort();
p=[];

for(var i=0,l=s.length;i<l;i++){if(p.length>20){p.push(ba+(l-i)+X);
break;
}r=s[i];
n=this.__bQ(k[r],false);
n.key=r;
p.push(n);
}}else{var q=0;

for(var r in k){q++;
}p=bf+q+bj;
}break;
}return {type:t,text:p,trace:o};
}},defer:function(bD){var bE=qx.Bootstrap.$$logs;

for(var i=0;i<bE.length;i++){bD.__bO(bE[i][0],bE[i][1]);
}qx.Bootstrap.debug=bD.debug;
qx.Bootstrap.info=bD.info;
qx.Bootstrap.warn=bD.warn;
qx.Bootstrap.error=bD.error;
qx.Bootstrap.trace=bD.trace;
}});
})();
(function(){var x="set",w="get",v="reset",u="MSIE 6.0",t="qx.core.Object",s="]",r="rv:1.8.1",q="[",p="$$user_",o="Object";
qx.Class.define(t,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:o},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+q+this.$$hash+s;
},base:function(be,bf){{};

if(arguments.length===1){return be.callee.base.call(this);
}else{return be.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){var ba=this.constructor;
var Y=new ba;
var bc=qx.Class.getProperties(ba);
var bb=qx.core.Property.$$store.user;
var bd=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bc.length;i<l;i++){name=bc[i];

if(this.hasOwnProperty(bb[name])){Y[bd[name]](this[bb[name]]);
}}return Y;
},set:function(bm,bn){var bp=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bm)){if(!this[bp[bm]]){if(this[x+qx.Bootstrap.firstUp(bm)]!=undefined){this[x+qx.Bootstrap.firstUp(bm)](bn);
return this;
}{};
}return this[bp[bm]](bn);
}else{for(var bo in bm){if(!this[bp[bo]]){if(this[x+qx.Bootstrap.firstUp(bo)]!=undefined){this[x+qx.Bootstrap.firstUp(bo)](bm[bo]);
continue;
}{};
}this[bp[bo]](bm[bo]);
}return this;
}},get:function(b){var c=qx.core.Property.$$method.get;

if(!this[c[b]]){if(this[w+qx.Bootstrap.firstUp(b)]!=undefined){return this[w+qx.Bootstrap.firstUp(b)]();
}{};
}return this[c[b]]();
},reset:function(bx){var by=qx.core.Property.$$method.reset;

if(!this[by[bx]]){if(this[v+qx.Bootstrap.firstUp(bx)]!=undefined){this[v+qx.Bootstrap.firstUp(bx)]();
return;
}{};
}this[by[bx]]();
},__bR:qx.event.Registration,addListener:function(bh,bi,self,bj){if(!this.$$disposed){return this.__bR.addListener(this,bh,bi,self,bj);
}return null;
},addListenerOnce:function(bt,bu,self,bv){var bw=function(e){bu.call(self||this,e);
this.removeListener(bt,bw,this,bv);
};
return this.addListener(bt,bw,this,bv);
},removeListener:function(K,L,self,M){if(!this.$$disposed){return this.__bR.removeListener(this,K,L,self,M);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__bR.removeListenerById(this,y);
}return false;
},hasListener:function(br,bs){return this.__bR.hasListener(this,br,bs);
},dispatchEvent:function(bl){if(!this.$$disposed){return this.__bR.dispatchEvent(this,bl);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__bR.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(z,A,B){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,z,A,B);
}return true;
},fireDataEvent:function(N,O,P,Q){if(!this.$$disposed){if(P===undefined){P=null;
}return this.__bR.fireNonBubblingEvent(this,N,qx.event.type.Data,[O,P,!!Q]);
}return true;
},__bS:null,setUserData:function(bB,bC){if(!this.__bS){this.__bS={};
}this.__bS[bB]=bC;
},getUserData:function(T){if(!this.__bS){return null;
}var U=this.__bS[T];
return U===undefined?null:U;
},__bT:qx.log.Logger,debug:function(R){this.__bT.debug(this,R);
},info:function(m){this.__bT.info(this,m);
},warn:function(bA){this.__bT.warn(this,bA);
},error:function(bz){this.__bT.error(this,bz);
},trace:function(){this.__bT.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var j,g,f,k;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var h=this.constructor;
var d;

while(h.superclass){if(h.$$destructor){h.$$destructor.call(this);
}if(h.$$includes){d=h.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$destructor){d[i].$$destructor.call(this);
}}}h=h.superclass;
}if(this.__bV){this.__bV();
}{};
},__bV:null,__bW:function(){var bk=qx.Class.getProperties(this.constructor);

for(var i=0,l=bk.length;i<l;i++){delete this[p+bk[i]];
}},_disposeObjects:function(a){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(S){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bq){qx.util.DisposeUtil.disposeArray(this,bq);
},_disposeMap:function(bg){qx.util.DisposeUtil.disposeMap(this,bg);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bD,bE){{};
var bG=navigator.userAgent.indexOf(u)!=-1;
var bF=navigator.userAgent.indexOf(r)!=-1;
if(bG||bF){bE.__bV=bE.__bW;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
var E=this.constructor;
var I;
var J=qx.core.Property.$$store;
var G=J.user;
var H=J.theme;
var C=J.inherit;
var F=J.useinit;
var D=J.init;

while(E){I=E.$$properties;

if(I){for(var name in I){if(I[name].dereference){this[G[name]]=this[H[name]]=this[C[name]]=this[F[name]]=this[D[name]]=undefined;
}}}E=E.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(i,j){this.__bX=i||null;
this.__bY=j||window;

if(qx.core.Setting.get(c)===b){if(i&&window.onerror){var k=qx.Bootstrap.bind(this.__cb,this);

if(this.__ca==null){this.__ca=window.onerror;
}var self=this;
window.onerror=function(e){self.__ca(e);
k(e);
};
}
if(i&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__cb,this);
}if(this.__bX==null){if(this.__ca!=null){window.onerror=this.__ca;
this.__ca=null;
}else{window.onerror=null;
}}}},__cb:function(f,g,h){if(this.__bX){this.handleError(new qx.core.WindowError(f,g,h));
return true;
}},observeMethod:function(l){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__bX){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(d){self.handleError(new qx.core.GlobalError(d,arguments));
}};
}else{return l;
}},handleError:function(m){if(this.__bX){this.__bX.call(this.__bY,m);
}}},defer:function(n){qx.core.Setting.define(c,b);
n.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__cc=false;
this.__cd=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__cg();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(x,y,z){},unregisterEvent:function(o,p,q){},__ce:null,__cc:null,__cd:null,__cf:null,__cg:function(){if(!this.__ce&&this.__cc&&qx.$$loader.scriptLoaded){try{var w=qx.core.Setting.get(f);

if(!qx.Class.getByName(w)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__ce=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ce=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ce;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__cc=true;
this.__cg();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var s=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(t){window.setTimeout(s,100);
}};
s();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cc=true;
this.__cg();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cf){this.__cf=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var b="qx.event.type.Event";
qx.Class.define(b,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(k){if(k){var l=k;
}else{var l=qx.event.Pool.getInstance().getObject(this.constructor);
}l._type=this._type;
l._target=this._target;
l._currentTarget=this._currentTarget;
l._relatedTarget=this._relatedTarget;
l._originalTarget=this._originalTarget;
l._stopPropagation=this._stopPropagation;
l._bubbles=this._bubbles;
l._preventDefault=this._preventDefault;
l._cancelable=this._cancelable;
return l;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(m){this._type=m;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(f){this._eventPhase=f;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(j){this._currentTarget=j;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ch:null,__ci:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__ch=b;
this.__ci=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__ch=this.__ch;
f.__ci=this.__ci;
return f;
},getData:function(){return this.__ch;
},getOldData:function(){return this.__ci;
}},destruct:function(){this.__ch=this.__ci=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(h,i,j){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__cm=b+(c&&c.message?c.message:c);
Error.call(this,this.__cm);
this.__cn=d;
this.__co=c;
},members:{__co:null,__cn:null,__cm:null,toString:function(){return this.__cm;
},getArguments:function(){return this.__cn;
},getSourceException:function(){return this.__co;
}},destruct:function(){this.__co=null;
this.__cn=null;
this.__cm=null;
}});
})();
(function(){var n="",m="g",l="0",k='\\$1',j="%",h='-',g="qx.lang.String",f=' ',e='\n',d="undefined";
qx.Class.define(g,{statics:{camelCase:function(A){return A.replace(/\-([a-z])/g,function(K,L){return L.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(p){return (h+p.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(o){return o.toUpperCase();
});
},clean:function(a){return this.trim(a.replace(/\s+/g,f));
},trimLeft:function(v){return v.replace(/^\s+/,n);
},trimRight:function(b){return b.replace(/\s+$/,n);
},trim:function(P){return P.replace(/^\s+|\s+$/g,n);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(t,u){return t.substring(t.length-u.length,t.length)===u;
},repeat:function(x,y){return x.length>0?new Array(y+1).join(x):n;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===d){r=l;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(I,J){return I.indexOf(J)!=-1;
},format:function(M,N){var O=M;

for(var i=0;i<N.length;i++){O=O.replace(new RegExp(j+(i+1),m),N[i]+n);
}return O;
},escapeRegexpChars:function(w){return w.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(B){return B.replace(/<\/?[^>]+>/gi,n);
},stripScripts:function(C,D){var F=n;
var E=C.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){F+=arguments[1]+e;
return n;
});

if(D===true){qx.lang.Function.globalEval(F);
}return E;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var b="qx.event.dispatch.Direct";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(c,d,e){var name;

for(var i=0,l=d.length;i<l;i++){name=d[i];

if(c[name]==null||!c.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(c[name].dispose){if(!e&&c[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{c[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}c[name]=null;
}},disposeArray:function(g,h){var k=g[h];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){g[h]=null;
return;
}try{var j;

for(var i=k.length-1;i>=0;i--){j=k[i];

if(j){j.dispose();
}}}catch(f){throw new Error("The array field: "+h+" of object: "+g+" has non disposable entries: "+f);
}k.length=0;
g[h]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(b){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+b);
}m[n]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.__cp={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:a,init:Infinity}},members:{__cp:null,getObject:function(f){if(this.$$disposed){return new f;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__cp[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(j){if(!this.__cp){return;
}var k=j.classname;
var m=this.__cp[k];

if(j.$$pooled){throw new Error("Object is already pooled: "+j);
}
if(!m){this.__cp[k]=m=[];
}if(m.length>this.getSize()){if(j.destroy){j.destroy();
}else{j.dispose();
}return;
}j.$$pooled=true;
m.push(j);
}},destruct:function(){var e=this.__cp;
var c,d,i,l;

for(c in e){d=e[c];

for(i=0,l=d.length;i<l;i++){d[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cq:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cr:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cs:function(){var M=qx.lang.Generics.__cq;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__cr(O,P);
}}}}},defer:function(L){L.__cs();
}});
})();
(function(){var U="qx.bom.Selector";
qx.Class.define(U,{statics:{query:null,matches:null}});
(function(){var cy=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,cF=0,cB=Object.prototype.toString,cz=false,cH=true;
[0,0].sort(function(){cH=false;
return 0;
});
var cv=function(u,v,w,x){w=w||[];
v=v||document;
var G=v;

if(v.nodeType!==1&&v.nodeType!==9){return [];
}
if(!u||typeof u!=="string"){return w;
}var D=[],m,A,y,C,B=true,z=cv.isXML(v),F=u,E,I,H,i;
do{cy.exec("");
m=cy.exec(F);

if(m){F=m[3];
D.push(m[1]);

if(m[2]){C=m[3];
break;
}}}while(m);

if(D.length>1&&cA.exec(u)){if(D.length===2&&cx.relative[D[0]]){A=cw(D[0]+D[1],v);
}else{A=cx.relative[D[0]]?[v]:cv(D.shift(),v);

while(D.length){u=D.shift();

if(cx.relative[u]){u+=D.shift();
}A=cw(u,A);
}}}else{if(!x&&D.length>1&&v.nodeType===9&&!z&&cx.match.ID.test(D[0])&&!cx.match.ID.test(D[D.length-1])){E=cv.find(D.shift(),v,z);
v=E.expr?cv.filter(E.expr,E.set)[0]:E.set[0];
}
if(v){E=x?
{expr:D.pop(),set:cu(x)}:cv.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&v.parentNode?v.parentNode:v,z);
A=E.expr?cv.filter(E.expr,E.set):E.set;

if(D.length>0){y=cu(A);
}else{B=false;
}
while(D.length){I=D.pop();
H=I;

if(!cx.relative[I]){I="";
}else{H=D.pop();
}
if(H==null){H=v;
}cx.relative[I](y,H,z);
}}else{y=D=[];
}}
if(!y){y=A;
}
if(!y){cv.error(I||u);
}
if(cB.call(y)==="[object Array]"){if(!B){w.push.apply(w,y);
}else if(v&&v.nodeType===1){for(i=0;y[i]!=null;i++){if(y[i]&&(y[i]===true||y[i].nodeType===1&&cv.contains(v,y[i]))){w.push(A[i]);
}}}else{for(i=0;y[i]!=null;i++){if(y[i]&&y[i].nodeType===1){w.push(A[i]);
}}}}else{cu(y,w);
}
if(C){cv(C,G,w,x);
cv.uniqueSort(w);
}return w;
};
cv.uniqueSort=function(bI){if(cC){cz=cH;
bI.sort(cC);

if(cz){for(var i=1;i<bI.length;i++){if(bI[i]===bI[i-1]){bI.splice(i--,1);
}}}}return bI;
};
cv.matches=function(eP,eQ){return cv(eP,null,null,eQ);
};
cv.find=function(er,es,et){var eu;

if(!er){return [];
}
for(var i=0,l=cx.order.length;i<l;i++){var ev=cx.order[i],ew;

if((ew=cx.leftMatch[ev].exec(er))){var ex=ew[1];
ew.splice(1,1);

if(ex.substr(ex.length-1)!=="\\"){ew[1]=(ew[1]||"").replace(/\\/g,"");
eu=cx.find[ev](ew,es,et);

if(eu!=null){er=er.replace(cx.match[ev],"");
break;
}}}}
if(!eu){eu=es.getElementsByTagName("*");
}return {set:eu,expr:er};
};
cv.filter=function(ds,dt,du,dv){var dw=ds,dB=[],dx=dt,dG,dF,dy=dt&&dt[0]&&cv.isXML(dt[0]);

while(ds&&dt.length){for(var dE in cx.filter){if((dG=cx.leftMatch[dE].exec(ds))!=null&&dG[2]){var dz=cx.filter[dE],dD,dA,dH=dG[1];
dF=false;
dG.splice(1,1);

if(dH.substr(dH.length-1)==="\\"){continue;
}
if(dx===dB){dB=[];
}
if(cx.preFilter[dE]){dG=cx.preFilter[dE](dG,dx,du,dB,dv,dy);

if(!dG){dF=dD=true;
}else if(dG===true){continue;
}}
if(dG){for(var i=0;(dA=dx[i])!=null;i++){if(dA){dD=dz(dA,dG,i,dx);
var dC=dv^!!dD;

if(du&&dD!=null){if(dC){dF=true;
}else{dx[i]=false;
}}else if(dC){dB.push(dA);
dF=true;
}}}}
if(dD!==undefined){if(!du){dx=dB;
}ds=ds.replace(cx.match[dE],"");

if(!dF){return [];
}break;
}}}if(ds===dw){if(dF==null){cv.error(ds);
}else{break;
}}dw=ds;
}return dx;
};
cv.error=function(cU){throw "Syntax error, unrecognized expression: "+cU;
};
var cx=cv.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(ey){return ey.getAttribute("href");
}},relative:{"+":function(f,g){var h=typeof g==="string",n=h&&!/\W/.test(g),o=h&&!n;

if(n){g=g.toLowerCase();
}
for(var i=0,l=f.length,k;i<l;i++){if((k=f[i])){while((k=k.previousSibling)&&k.nodeType!==1){}f[i]=o||k&&k.nodeName.toLowerCase()===g?k||false:k===g;
}}
if(o){cv.filter(g,f,true);
}},">":function(by,bz){var bA=typeof bz==="string",bB,i=0,l=by.length;

if(bA&&!/\W/.test(bz)){bz=bz.toLowerCase();

for(;i<l;i++){bB=by[i];

if(bB){var parent=bB.parentNode;
by[i]=parent.nodeName.toLowerCase()===bz?parent:false;
}}}else{for(;i<l;i++){bB=by[i];

if(bB){by[i]=bA?bB.parentNode:bB.parentNode===bz;
}}
if(bA){cv.filter(bz,by,true);
}}},"":function(ea,eb,ec){var ed=cF++,ee=cG,ef;

if(typeof eb==="string"&&!/\W/.test(eb)){eb=eb.toLowerCase();
ef=eb;
ee=cI;
}ee("parentNode",eb,ed,ea,ef,ec);
},"~":function(O,P,Q){var R=cF++,S=cG,T;

if(typeof P==="string"&&!/\W/.test(P)){P=P.toLowerCase();
T=P;
S=cI;
}S("previousSibling",P,R,O,T,Q);
}},find:{ID:function(dI,dJ,dK){if(typeof dJ.getElementById!=="undefined"&&!dK){var m=dJ.getElementById(dI[1]);
return m?[m]:[];
}},NAME:function(dc,dd){if(typeof dd.getElementsByName!=="undefined"){var df=[],de=dd.getElementsByName(dc[1]);

for(var i=0,l=de.length;i<l;i++){if(de[i].getAttribute("name")===dc[1]){df.push(de[i]);
}}return df.length===0?null:df;
}},TAG:function(dg,dh){return dh.getElementsByTagName(dg[1]);
}},preFilter:{CLASS:function(bO,bP,bQ,bR,bS,bT){bO=" "+bO[1].replace(/\\/g,"")+" ";

if(bT){return bO;
}
for(var i=0,bU;(bU=bP[i])!=null;i++){if(bU){if(bS^(bU.className&&(" "+bU.className+" ").replace(/[\t\n]/g," ").indexOf(bO)>=0)){if(!bQ){bR.push(bU);
}}else if(bQ){bP[i]=false;
}}}return false;
},ID:function(bg){return bg[1].replace(/\\/g,"");
},TAG:function(eg,eh){return eg[1].toLowerCase();
},CHILD:function(M){if(M[1]==="nth"){var N=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(M[2]==="even"&&"2n"||M[2]==="odd"&&"2n+1"||!/\D/.test(M[2])&&"0n+"+M[2]||M[2]);
M[2]=(N[1]+(N[2]||1))-0;
M[3]=N[3]-0;
}M[0]=cF++;
return M;
},ATTR:function(eI,eJ,eK,eL,eM,eN){var name=eI[1].replace(/\\/g,"");

if(!eN&&cx.attrMap[name]){eI[1]=cx.attrMap[name];
}
if(eI[2]==="~="){eI[4]=" "+eI[4]+" ";
}return eI;
},PSEUDO:function(dl,dm,dn,dp,dq){if(dl[1]==="not"){if((cy.exec(dl[3])||"").length>1||/^\w/.test(dl[3])){dl[3]=cv(dl[3],null,null,dm);
}else{var dr=cv.filter(dl[3],dm,dn,true^dq);

if(!dn){dp.push.apply(dp,dr);
}return false;
}}else if(cx.match.POS.test(dl[0])||cx.match.CHILD.test(dl[0])){return true;
}return dl;
},POS:function(dV){dV.unshift(true);
return dV;
}},filters:{enabled:function(bh){return bh.disabled===false&&bh.type!=="hidden";
},disabled:function(Y){return Y.disabled===true;
},checked:function(eH){return eH.checked===true;
},selected:function(fa){fa.parentNode.selectedIndex;
return fa.selected===true;
},parent:function(dL){return !!dL.firstChild;
},empty:function(V){return !V.firstChild;
},has:function(be,i,bf){return !!cv(bf[3],be).length;
},header:function(bw){return (/h\d/i).test(bw.nodeName);
},text:function(ei){return "text"===ei.type;
},radio:function(r){return "radio"===r.type;
},checkbox:function(dU){return "checkbox"===dU.type;
},file:function(bK){return "file"===bK.type;
},password:function(bx){return "password"===bx.type;
},submit:function(eO){return "submit"===eO.type;
},image:function(dO){return "image"===dO.type;
},reset:function(c){return "reset"===c.type;
},button:function(eA){return "button"===eA.type||eA.nodeName.toLowerCase()==="button";
},input:function(d){return (/input|select|textarea|button/i).test(d.nodeName);
}},setFilters:{first:function(di,i){return i===0;
},last:function(eo,i,ep,eq){return i===eq.length-1;
},even:function(en,i){return i%2===0;
},odd:function(cY,i){return i%2===1;
},lt:function(W,i,X){return i<X[3]-0;
},gt:function(da,i,db){return i>db[3]-0;
},nth:function(p,i,q){return q[3]-0===i;
},eq:function(eB,i,eC){return eC[3]-0===i;
}},filter:{PSEUDO:function(cL,cM,i,cN){var name=cM[1],cO=cx.filters[name];

if(cO){return cO(cL,i,cM,cN);
}else if(name==="contains"){return (cL.textContent||cL.innerText||cv.getText([cL])||"").indexOf(cM[3])>=0;
}else if(name==="not"){var cP=cM[3];

for(var j=0,l=cP.length;j<l;j++){if(cP[j]===cL){return false;
}}return true;
}else{cv.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(ce,cf){var cl=cf[1],cg=ce;

switch(cl){case 'only':case 'first':while((cg=cg.previousSibling)){if(cg.nodeType===1){return false;
}}
if(cl==="first"){return true;
}cg=ce;
case 'last':while((cg=cg.nextSibling)){if(cg.nodeType===1){return false;
}}return true;
case 'nth':var cm=cf[2],ci=cf[3];

if(cm===1&&ci===0){return true;
}var ck=cf[0],parent=ce.parentNode;

if(parent&&(parent.sizcache!==ck||!ce.nodeIndex)){var ch=0;

for(cg=parent.firstChild;cg;cg=cg.nextSibling){if(cg.nodeType===1){cg.nodeIndex=++ch;
}}parent.sizcache=ck;
}var cj=ce.nodeIndex-ci;

if(cm===0){return cj===0;
}else{return (cj%cm===0&&cj/cm>=0);
}}},ID:function(dP,dQ){return dP.nodeType===1&&dP.getAttribute("id")===dQ;
},TAG:function(dM,dN){return (dN==="*"&&dM.nodeType===1)||dM.nodeName.toLowerCase()===dN;
},CLASS:function(bo,bp){return (" "+(bo.className||bo.getAttribute("class"))+" ").indexOf(bp)>-1;
},ATTR:function(bi,bj){var name=bj[1],bn=cx.attrHandle[name]?cx.attrHandle[name](bi):bi[name]!=null?bi[name]:bi.getAttribute(name),bm=bn+"",bl=bj[2],bk=bj[4];
return bn==null?bl==="!=":bl==="="?bm===bk:bl==="*="?bm.indexOf(bk)>=0:bl==="~="?(" "+bm+" ").indexOf(bk)>=0:!bk?bm&&bn!==false:bl==="!="?bm!==bk:bl==="^="?bm.indexOf(bk)===0:bl==="$="?bm.substr(bm.length-bk.length)===bk:bl==="|="?bm===bk||bm.substr(0,bk.length+1)===bk+"-":false;
},POS:function(cQ,cR,i,cS){var name=cR[2],cT=cx.setFilters[name];

if(cT){return cT(cQ,i,cR,cS);
}}}};
var cA=cx.match.POS,ct=function(bM,bN){return "\\"+(bN-0+1);
};

for(var cE in cx.match){cx.match[cE]=new RegExp(cx.match[cE].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
cx.leftMatch[cE]=new RegExp(/(^(?:.|\r|\n)*?)/.source+cx.match[cE].source.replace(/\\(\d+)/g,ct));
}var cu=function(dj,dk){dj=Array.prototype.slice.call(dj,0);

if(dk){dk.push.apply(dk,dj);
return dk;
}return dj;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){cu=function(dR,dS){var dT=dS||[],i=0;

if(cB.call(dR)==="[object Array]"){Array.prototype.push.apply(dT,dR);
}else{if(typeof dR.length==="number"){for(var l=dR.length;i<l;i++){dT.push(dR[i]);
}}else{for(;dR[i];i++){dT.push(dR[i]);
}}}return dT;
};
}var cC;

if(document.documentElement.compareDocumentPosition){cC=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){cz=true;
}return a.compareDocumentPosition?-1:1;
}var em=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(em===0){cz=true;
}return em;
};
}else if("sourceIndex" in document.documentElement){cC=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){cz=true;
}return a.sourceIndex?-1:1;
}var bJ=a.sourceIndex-b.sourceIndex;

if(bJ===0){cz=true;
}return bJ;
};
}else if(document.createRange){cC=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){cz=true;
}return a.ownerDocument?-1:1;
}var dX=a.ownerDocument.createRange(),dY=b.ownerDocument.createRange();
dX.setStart(a,0);
dX.setEnd(a,0);
dY.setStart(b,0);
dY.setEnd(b,0);
var dW=dX.compareBoundaryPoints(Range.START_TO_END,dY);

if(dW===0){cz=true;
}return dW;
};
}cv.getText=function(cq){var cs="",cr;

for(var i=0;cq[i];i++){cr=cq[i];
if(cr.nodeType===3||cr.nodeType===4){cs+=cr.nodeValue;
}else if(cr.nodeType!==8){cs+=cv.getText(cr.childNodes);
}}return cs;
};
(function(){var cp=document.createElement("div"),co="script"+(new Date()).getTime();
cp.innerHTML="<a name='"+co+"'/>";
var cn=document.documentElement;
cn.insertBefore(cp,cn.firstChild);
if(document.getElementById(co)){cx.find.ID=function(ej,ek,el){if(typeof ek.getElementById!=="undefined"&&!el){var m=ek.getElementById(ej[1]);
return m?m.id===ej[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===ej[1]?[m]:undefined:[];
}};
cx.filter.ID=function(J,K){var L=typeof J.getAttributeNode!=="undefined"&&J.getAttributeNode("id");
return J.nodeType===1&&L&&L.nodeValue===K;
};
}cn.removeChild(cp);
cn=cp=null;
})();
(function(){var cX=document.createElement("div");
cX.appendChild(document.createComment(""));
if(cX.getElementsByTagName("*").length>0){cx.find.TAG=function(ba,bb){var bd=bb.getElementsByTagName(ba[1]);
if(ba[1]==="*"){var bc=[];

for(var i=0;bd[i];i++){if(bd[i].nodeType===1){bc.push(bd[i]);
}}bd=bc;
}return bd;
};
}cX.innerHTML="<a href='#'></a>";

if(cX.firstChild&&typeof cX.firstChild.getAttribute!=="undefined"&&cX.firstChild.getAttribute("href")!=="#"){cx.attrHandle.href=function(ez){return ez.getAttribute("href",2);
};
}cX=null;
})();

if(document.querySelectorAll){(function(){var bu=cv,bt=document.createElement("div");
bt.innerHTML="<p class='TEST'></p>";
if(bt.querySelectorAll&&bt.querySelectorAll(".TEST").length===0){return;
}cv=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&eE.nodeType===9&&!cv.isXML(eE)){try{return cu(eE.querySelectorAll(eD),eF);
}catch(e){}}return bu(eD,eE,eF,eG);
};

for(var bv in bu){cv[bv]=bu[bv];
}bt=null;
})();
}(function(){var bL=document.createElement("div");
bL.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!bL.getElementsByClassName||bL.getElementsByClassName("e").length===0){return;
}bL.lastChild.className="e";

if(bL.getElementsByClassName("e").length===1){return;
}cx.order.splice(1,0,"CLASS");
cx.find.CLASS=function(bq,br,bs){if(typeof br.getElementsByClassName!=="undefined"&&!bs){return br.getElementsByClassName(bq[1]);
}};
bL=null;
})();
function cI(eR,eS,eT,eU,eV,eW){for(var i=0,l=eU.length;i<l;i++){var eY=eU[i];

if(eY){eY=eY[eR];
var eX=false;

while(eY){if(eY.sizcache===eT){eX=eU[eY.sizset];
break;
}
if(eY.nodeType===1&&!eW){eY.sizcache=eT;
eY.sizset=i;
}
if(eY.nodeName.toLowerCase()===eS){eX=eY;
break;
}eY=eY[eR];
}eU[i]=eX;
}}}function cG(bV,bW,bX,bY,ca,cb){for(var i=0,l=bY.length;i<l;i++){var cd=bY[i];

if(cd){cd=cd[bV];
var cc=false;

while(cd){if(cd.sizcache===bX){cc=bY[cd.sizset];
break;
}
if(cd.nodeType===1){if(!cb){cd.sizcache=bX;
cd.sizset=i;
}
if(typeof bW!=="string"){if(cd===bW){cc=true;
break;
}}else if(cv.filter(bW,[cd]).length>0){cc=cd;
break;
}}cd=cd[bV];
}bY[i]=cc;
}}}cv.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
cv.isXML=function(s){var t=(s?s.ownerDocument||s:0).documentElement;
return t?t.nodeName!=="HTML":false;
};
var cw=function(bC,bD){var bF=[],bE="",bH,bG=bD.nodeType?[bD]:bD;
while((bH=cx.match.PSEUDO.exec(bC))){bE+=bH[0];
bC=bC.replace(cx.match.PSEUDO,"");
}bC=cx.relative[bC]?bC+"*":bC;

for(var i=0,l=bG.length;i<l;i++){cv(bC,bG[i],bF);
}return cv.filter(bE,bF);
};
var cD=qx.bom.Selector;
cD.query=function(cV,cW){return cv(cV,cW);
};
cD.matches=function(cJ,cK){return cv(cJ,null,null,cK);
};
})();
})();
(function(){var j="qx.client",i="gecko",h="Content-Type",g="",f="mshtml",e="application/xml",d="qx.bom.Request",c="file:",b="parsererror";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){this.__ct={};
this.__cu=this.__cE();
},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{__cv:null,__cw:null,__cu:null,__cx:null,__cy:null,__cz:null,__cA:null,__ct:null,readyState:0,responseText:g,responseXML:null,status:0,statusText:g,timeout:0,onreadystatechange:function(){},ontimeout:function(){},onload:function(){},onerror:function(){},onabort:function(){},open:function(r,s,t,u,v){if(t==null){t=true;
}this.__cv=t;
this.__cw=qx.lang.Function.bind(this.__cB,this);
this.__cx=qx.lang.Function.bind(this.__cC,this);
this.__cu.onreadystatechange=this.__cw;
if(arguments.length>4){this.__cu.open(r,s,t,u,v);
}else if(arguments.length>3){this.__cu.open(r,s,t,u);
}else{this.__cu.open(r,s,t);
}if(qx.core.Variant.isSet(j,i)){if(!t){this.readyState=qx.bom.Request.OPENED;
this.__cF();
}}},send:function(l){var m=this.__ct;
if(l&&l.nodeType){l=window.XMLSerializer?new XMLSerializer().serializeToString(l):l.xml;

if(!m[h]){m[h]=e;
}}for(var n in m){this.__cu.setRequestHeader(n,m[n]);
}if(this.timeout!=null&&this.timeout>0){this.__cy=window.setTimeout(this.__cx,this.timeout);
}this.__cu.send(l);
if(qx.core.Variant.isSet(j,i)){if(!this.__cv){this.readyState=qx.bom.Request.OPENED;
this.__cH(this);
while(this.readyState<qx.bom.Request.DONE){this.readyState++;
this.__cF();
if(this.__cz){return;
}}}}},isSuccessful:function(){var status=this.status;
return status===304||(status>=200&&status<300);
},abort:function(){if(this.__cy){window.clearTimeout(this.__cy);
}this.__cD();
this.onabort();
this.dispose();
},__cB:qx.event.GlobalError.observeMethod(function(){if(qx.core.Variant.isSet(j,i)){if(!this.__cv){return;
}}this.readyState=this.__cu.readyState;
this.__cH();
if(this.__cz){this.readyState=qx.bom.Request.UNSENT;
return ;
}if(this.readyState==qx.bom.Request.DONE&&this.__cy){window.clearTimeout(this.__cy);
}this.__cF();
if(this.readyState==qx.bom.Request.DONE){this.dispose();
}}),__cC:qx.event.GlobalError.observeMethod(function(){this.__cD();
this.ontimeout();
this.dispose();
}),getAllResponseHeaders:function(){try{return this.__cu.getAllResponseHeaders();
}catch(k){return null;
}},getResponseHeader:function(a){try{return this.__cu.getResponseHeader(a);
}catch(p){return null;
}},setRequestHeader:function(A,B){if(B==null){delete this.__ct[A];
}else{this.__ct[A]=B;
}},removeRequestHeader:function(C,D){delete this.__ct[C];
},getRequestHeader:function(y){return this.__ct[y]||null;
},__cD:function(){this.__cH();
if(this.readyState>qx.bom.Request.UNSENT){this.__cz=true;
}this.__cu.abort();
},__cE:qx.core.Variant.select(j,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),__cF:function(){if(this.__cA===this.readyState){return;
}this.onreadystatechange();
this.__cA=this.readyState;
if(this.readyState===4){if(this.isSuccessful()){this.onload();
}else{this.onerror();
}}},__cG:function(){var w=this.__cu.responseXML;

if(qx.core.Variant.isSet(j,f)){if(w&&!w.documentElement&&this.__cu.getResponseHeader(h).match(/[^\/]+\/[^\+]+\+xml/)){w=new ActiveXObject(qx.xml.Document.DOMDOC);
w.loadXML(this.__cu.responseText);
}if(w&&w.parseError!=0){return null;
}}else if(!w.documentElement||w.documentElement.tagName==b){return null;
}return w;
},__cH:function(){var z=this.__cu;

try{this.responseText=z.responseText;
}catch(o){}
try{this.responseXML=this.__cG();
}catch(x){}
try{this.status=z.status;
}catch(q){}
try{this.statusText=z.statusText;
}catch(E){}if(qx.core.Variant.isSet(j,f)){if(this.status===1223){this.status=204;
}}if(!this.status&&location.protocol===c){this.status=204;
}}},destruct:function(){if(this.__cy){window.clearTimeout(this.__cy);
this.__cy=null;
}if(this.__cu){this.__cu.onreadystatechange=qx.lang.Function.empty;
this.__cu=null;
}this.onreadystatechange=this.onload=this.onerror=this.onabort=null;
this.__cw=null;
this.__ct=null;
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==f;
}else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(p,d);

if(y){var A=k;
A+=y;

if(x){A+=h+x+q;
}A+=n;
z.loadXML(A);
}return z;
},"default":function(E,F){return document.implementation.createDocument(E||s,F||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(v){var w=qx.xml.Document.create();
w.loadXML(v);
return w;
},"default":function(a){var b=new DOMParser();
return b.parseFromString(a,g);
}})},defer:function(B){if(qx.core.Variant.isSet(t,r)){var C=[c,m];
var D=[e,j];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(G){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var g="mshtml",f="pop.push.reverse.shift.sort.splice.unshift.join.slice",e="number",d="qx.type.BaseArray",c="qx.client",b=".";
qx.Class.define(d,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(m){if(qx.core.Variant.isSet(c,g)){j.prototype={length:0,$$isArray:true};
var p=f.split(b);

for(var length=p.length;length;){j.prototype[p[--length]]=Array.prototype[p[length]];
}}var q=Array.prototype.slice;
j.prototype.concat=function(){var t=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var s;

if(arguments[i] instanceof j){s=q.call(arguments[i],0);
}else if(arguments[i] instanceof Array){s=arguments[i];
}else{s=[arguments[i]];
}t.push.apply(t,s);
}return t;
};
j.prototype.toString=function(){return q.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return q.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var n=qx.lang.Core.arrayFilter;
var o=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var r=new this.constructor;
r.push.apply(r,n.apply(this,arguments));
return r;
};
j.prototype.map=function(){var a=new this.constructor;
a.push.apply(a,o.apply(this,arguments));
return a;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var l=new this.constructor;
l.push.apply(l,Array.prototype.splice.apply(this,arguments));
return l;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===e){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(q){if(qx.bom.client.Engine.VERSION>=8){return (q||window).document.documentMode===5;
}else{return (q||window).document.compatMode!==g;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(b);
l.style.cssText=f;
return l.style.width===d?true:false;
}else{return (k||window).document.compatMode!==g;
}},"default":function(a){return (a||window).document.compatMode!==g;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getWidth(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollWidth:i.body.scrollWidth;
return Math.max(scroll,j);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(e,event,f){var parent=e;
var q=this._manager;
var n,u;
var l;
var p,s;
var r;
var t=[];
n=q.getListeners(e,f,true);
u=q.getListeners(e,f,false);

if(n){t.push(n);
}
if(u){t.push(u);
}var parent=this._getParent(e);
var h=[];
var g=[];
var k=[];
var o=[];
while(parent!=null){n=q.getListeners(parent,f,true);

if(n){k.push(n);
o.push(parent);
}u=q.getListeners(parent,f,false);

if(u){h.push(u);
g.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=k.length-1;i>=0;i--){r=o[i];
event.setCurrentTarget(r);
l=k[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(e);

for(var i=0,v=t.length;i<v;i++){l=t[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||e;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,v=h.length;i<v;i++){r=g[i];
event.setCurrentTarget(r);
l=h[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__cI=a;
this.__cJ=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__cI:null,__cJ:null,canHandleEvent:function(j,k){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__cI=this.__cJ=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cK:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__cK();
}});
})();
(function(){var v="keydown",u="qx.client",t="keypress",s="NumLock",r="keyup",q="Enter",p="0",o="9",n="-",m="PageUp",bD="+",bC="PrintScreen",bB="gecko",bA="A",bz="Z",by="Left",bx="F5",bw="Down",bv="Up",bu="F11",C="F6",D="useraction",A="F3",B="keyinput",y="Insert",z="F8",w="End",x="/",K="Delete",L="*",X="cmd",T="F1",bg="F4",bb="Home",bq="F2",bl="F12",P="PageDown",bt="F7",bs="Win",br="F9",O="F10",R="Right",S="text",V="Escape",Y="webkit",bc="5",bi="3",bn="Meta",E="7",F="CapsLock",Q="input",bf="Control",be="Space",bd="Tab",bk="Shift",bj="Pause",ba="Unidentified",bh="qx.event.handler.Keyboard",j="mshtml|webkit",bm="6",G="off",H="Apps",U="4",k="Alt",l="mshtml",N="2",I="Scroll",J="1",M="8",W="autoComplete",bp=",",bo="Backspace";
qx.Class.define(bh,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bW){qx.core.Object.call(this);
this.__cL=bW;
this.__cM=bW.getWindow();
if(qx.core.Variant.isSet(u,bB)){this.__cN=this.__cM;
}else{this.__cN=this.__cM.document.documentElement;
}this.__cO={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(ch){if(this._identifierToKeyCodeMap[ch]){return true;
}
if(ch.length!=1){return false;
}
if(ch>=p&&ch<=o){return true;
}
if(ch>=bA&&ch<=bz){return true;
}
switch(ch){case bD:case n:case L:case x:return true;
default:return false;
}}},members:{__cP:null,__cL:null,__cM:null,__cN:null,__cO:null,__cQ:null,__cR:null,__cS:null,canHandleEvent:function(bM,bN){},registerEvent:function(cD,cE,cF){},unregisterEvent:function(co,cp,cq){},_fireInputEvent:function(bR,bS){var bT=this.__cT();
if(bT&&bT.offsetWidth!=0){var event=qx.event.Registration.createEvent(B,qx.event.type.KeyInput,[bR,bT,bS]);
this.__cL.dispatchEvent(bT,event);
}if(this.__cM){qx.event.Registration.fireEvent(this.__cM,D,qx.event.type.Data,[B]);
}},_fireSequenceEvent:function(cy,cz,cA){var cB=this.__cT();
var cC=cy.keyCode;
var event=qx.event.Registration.createEvent(cz,qx.event.type.KeySequence,[cy,cB,cA]);
this.__cL.dispatchEvent(cB,event);
if(qx.core.Variant.isSet(u,j)){if(cz==v&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cC)&&!this._emulateKeyPress[cC]){this._fireSequenceEvent(cy,t,cA);
}}}if(this.__cM){qx.event.Registration.fireEvent(this.__cM,D,qx.event.type.Data,[cz]);
}},__cT:function(){var bU=this.__cL.getHandler(qx.event.handler.Focus);
var bV=bU.getActive();
if(!bV||bV.offsetWidth==0){bV=bU.getFocus();
}if(!bV||bV.offsetWidth==0){bV=this.__cL.getWindow().document.body;
}return bV;
},_initKeyObserver:function(){this.__cP=qx.lang.Function.listener(this.__cU,this);
this.__cS=qx.lang.Function.listener(this.__cW,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,r,this.__cP);
Event.addNativeListener(this.__cN,v,this.__cP);
Event.addNativeListener(this.__cN,t,this.__cS);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,r,this.__cP);
Event.removeNativeListener(this.__cN,v,this.__cP);
Event.removeNativeListener(this.__cN,t,this.__cS);

for(var b in (this.__cR||{})){var a=this.__cR[b];
Event.removeNativeListener(a.target,t,a.callback);
}delete (this.__cR);
},__cU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml":function(bX){bX=window.event||bX;
var cb=bX.keyCode;
var bY=0;
var ca=bX.type;
if(!(this.__cO[cb]==v&&ca==v)){this._idealKeyHandler(cb,bY,ca,bX);
}if(ca==v){if(this._isNonPrintableKeyCode(cb)||this._emulateKeyPress[cb]){this._idealKeyHandler(cb,bY,t,bX);
}}this.__cO[cb]=ca;
},"gecko":function(e){var i=this._keyCodeFix[e.keyCode]||e.keyCode;
var g=0;
var h=e.type;
if(qx.bom.client.Platform.WIN){var f=i?this._keyCodeToIdentifier(i):this._charCodeToIdentifier(g);

if(!(this.__cO[f]==v&&h==v)){this._idealKeyHandler(i,g,h,e);
}this.__cO[f]=h;
}else{this._idealKeyHandler(i,g,h,e);
}this.__cV(e.target,h,i);
},"webkit":function(cc){var cf=0;
var cd=0;
var ce=cc.type;
if(qx.bom.client.Engine.VERSION<525.13){if(ce==r||ce==v){cf=this._charCode2KeyCode[cc.charCode]||cc.keyCode;
}else{if(this._charCode2KeyCode[cc.charCode]){cf=this._charCode2KeyCode[cc.charCode];
}else{cd=cc.charCode;
}}this._idealKeyHandler(cf,cd,ce,cc);
}else{cf=cc.keyCode;
this._idealKeyHandler(cf,cd,ce,cc);
if(ce==v){if(this._isNonPrintableKeyCode(cf)||this._emulateKeyPress[cf]){this._idealKeyHandler(cf,cd,t,cc);
}}this.__cO[cf]=ce;
}},"opera":function(cr){this.__cQ=cr.keyCode;
this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}})),__cV:qx.core.Variant.select(u,{"gecko":function(ct,cu,cv){if(cu===v&&(cv==33||cv==34||cv==38||cv==40)&&ct.type==S&&ct.tagName.toLowerCase()===Q&&ct.getAttribute(W)!==G){if(!this.__cR){this.__cR={};
}var cx=qx.core.ObjectRegistry.toHashCode(ct);

if(this.__cR[cx]){return;
}var self=this;
this.__cR[cx]={target:ct,callback:function(bH){qx.bom.Event.stopPropagation(bH);
self.__cW(bH);
}};
var cw=qx.event.GlobalError.observeMethod(this.__cR[cx].callback);
qx.bom.Event.addNativeListener(ct,t,cw);
}},"default":null}),__cW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml":function(cm){cm=window.event||cm;

if(this._charCode2KeyCode[cm.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cm.keyCode],0,cm.type,cm);
}else{this._idealKeyHandler(0,cm.keyCode,cm.type,cm);
}},"gecko":function(ci){var cl=this._keyCodeFix[ci.keyCode]||ci.keyCode;
var cj=ci.charCode;
var ck=ci.type;
this._idealKeyHandler(cl,cj,ck,ci);
},"webkit":function(bI){if(qx.bom.client.Engine.VERSION<525.13){var bL=0;
var bJ=0;
var bK=bI.type;

if(bK==r||bK==v){bL=this._charCode2KeyCode[bI.charCode]||bI.keyCode;
}else{if(this._charCode2KeyCode[bI.charCode]){bL=this._charCode2KeyCode[bI.charCode];
}else{bJ=bI.charCode;
}}this._idealKeyHandler(bL,bJ,bK,bI);
}else{if(this._charCode2KeyCode[bI.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bI.keyCode],0,bI.type,bI);
}else{this._idealKeyHandler(0,bI.keyCode,bI.type,bI);
}}},"opera":function(bO){var bQ=bO.keyCode;
var bP=bO.type;
if(bQ!=this.__cQ){this._idealKeyHandler(0,this.__cQ,bP,bO);
}else{if(this._keyCodeToIdentifierMap[bO.keyCode]){this._idealKeyHandler(bO.keyCode,0,bO.type,bO);
}else{this._idealKeyHandler(0,bO.keyCode,bO.type,bO);
}}}})),_idealKeyHandler:function(cH,cI,cJ,cK){var cL;
if(cH||(!cH&&!cI)){cL=this._keyCodeToIdentifier(cH);
this._fireSequenceEvent(cK,cJ,cL);
}else{cL=this._charCodeToIdentifier(cI);
this._fireSequenceEvent(cK,t,cL);
this._fireInputEvent(cK,cI);
}},_specialCharCodeMap:{8:bo,9:bd,13:q,27:V,32:be},_emulateKeyPress:qx.core.Variant.select(u,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bk,17:bf,18:k,20:F,224:bn,37:by,38:bv,39:R,40:bw,33:m,34:P,35:w,36:bb,45:y,46:K,112:T,113:bq,114:A,115:bg,116:bx,117:C,118:bt,119:z,120:br,121:O,122:bu,123:bl,144:s,44:bC,145:I,19:bj,91:qx.bom.client.Platform.MAC?X:bs,92:bs,93:qx.bom.client.Platform.MAC?X:H},_numpadToCharCode:{96:p.charCodeAt(0),97:J.charCodeAt(0),98:N.charCodeAt(0),99:bi.charCodeAt(0),100:U.charCodeAt(0),101:bc.charCodeAt(0),102:bm.charCodeAt(0),103:E.charCodeAt(0),104:M.charCodeAt(0),105:o.charCodeAt(0),106:L.charCodeAt(0),107:bD.charCodeAt(0),109:n.charCodeAt(0),110:bp.charCodeAt(0),111:x.charCodeAt(0)},_charCodeA:bA.charCodeAt(0),_charCodeZ:bz.charCodeAt(0),_charCode0:p.charCodeAt(0),_charCode9:o.charCodeAt(0),_isNonPrintableKeyCode:function(cs){return this._keyCodeToIdentifierMap[cs]?true:false;
},_isIdentifiableKeyCode:function(cn){if(cn>=this._charCodeA&&cn<=this._charCodeZ){return true;
}if(cn>=this._charCode0&&cn<=this._charCode9){return true;
}if(this._specialCharCodeMap[cn]){return true;
}if(this._numpadToCharCode[cn]){return true;
}if(this._isNonPrintableKeyCode(cn)){return true;
}return false;
},_keyCodeToIdentifier:function(c){if(this._isIdentifiableKeyCode(c)){var d=this._numpadToCharCode[c];

if(d){return String.fromCharCode(d);
}return (this._keyCodeToIdentifierMap[c]||this._specialCharCodeMap[c]||String.fromCharCode(c));
}else{return ba;
}},_charCodeToIdentifier:function(cG){return this._specialCharCodeMap[cG]||String.fromCharCode(cG).toUpperCase();
},_identifierToKeyCode:function(cg){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cg]||cg.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__cQ=this.__cL=this.__cM=this.__cN=this.__cO=null;
},defer:function(bE,bF){qx.event.Registration.addHandler(bE);
if(!bE._identifierToKeyCodeMap){bE._identifierToKeyCodeMap={};

for(var bG in bF._keyCodeToIdentifierMap){bE._identifierToKeyCodeMap[bF._keyCodeToIdentifierMap[bG]]=parseInt(bG,10);
}
for(var bG in bF._specialCharCodeMap){bE._identifierToKeyCodeMap[bF._specialCharCodeMap[bG]]=parseInt(bG,10);
}}
if(qx.core.Variant.isSet(u,l)){bF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(u,bB)){bF._keyCodeFix={12:bF._identifierToKeyCode(s)};
}else if(qx.core.Variant.isSet(u,Y)){if(qx.bom.client.Engine.VERSION<525.13){bF._charCode2KeyCode={63289:bF._identifierToKeyCode(s),63276:bF._identifierToKeyCode(m),63277:bF._identifierToKeyCode(P),63275:bF._identifierToKeyCode(w),63273:bF._identifierToKeyCode(bb),63234:bF._identifierToKeyCode(by),63232:bF._identifierToKeyCode(bv),63235:bF._identifierToKeyCode(R),63233:bF._identifierToKeyCode(bw),63272:bF._identifierToKeyCode(K),63302:bF._identifierToKeyCode(y),63236:bF._identifierToKeyCode(T),63237:bF._identifierToKeyCode(bq),63238:bF._identifierToKeyCode(A),63239:bF._identifierToKeyCode(bg),63240:bF._identifierToKeyCode(bx),63241:bF._identifierToKeyCode(C),63242:bF._identifierToKeyCode(bt),63243:bF._identifierToKeyCode(z),63244:bF._identifierToKeyCode(br),63245:bF._identifierToKeyCode(O),63246:bF._identifierToKeyCode(bu),63247:bF._identifierToKeyCode(bl),63248:bF._identifierToKeyCode(bC),3:bF._identifierToKeyCode(q),12:bF._identifierToKeyCode(s),13:bF._identifierToKeyCode(q)};
}else{bF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__du:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dv:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__du){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__du[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__dv();
}});
})();
(function(){var M="qx.client",L="mouseup",K="click",J="mousedown",I="contextmenu",H="mousewheel",G="dblclick",F="mshtml",E="mouseover",D="mouseout",y="DOMMouseScroll",C="mousemove",B="on",x="mshtml|webkit|opera",w="useraction",A="gecko|webkit",z="qx.event.handler.Mouse";
qx.Class.define(z,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__dw=a;
this.__dx=a.getWindow();
this.__dy=this.__dx.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dz:null,__dA:null,__dB:null,__dC:null,__dD:null,__dw:null,__dx:null,__dy:null,canHandleEvent:function(c,d){},registerEvent:qx.bom.client.System.IPHONE?
function(R,S,T){R[B+S]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(U,V,W){U[B+V]=undefined;
}:qx.lang.Function.returnNull,__dE:function(h,i,j){if(!j){j=h.target||h.srcElement;
}if(j&&j.nodeType){qx.event.Registration.fireEvent(j,i||h.type,i==H?qx.event.type.MouseWheel:qx.event.type.Mouse,[h,j,null,true,true]);
}qx.event.Registration.fireEvent(this.__dx,w,qx.event.type.Data,[i||h.type]);
},_initButtonObserver:function(){this.__dz=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dy,J,this.__dz);
Event.addNativeListener(this.__dy,L,this.__dz);
Event.addNativeListener(this.__dy,K,this.__dz);
Event.addNativeListener(this.__dy,G,this.__dz);
Event.addNativeListener(this.__dy,I,this.__dz);
},_initMoveObserver:function(){this.__dA=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dy,C,this.__dA);
Event.addNativeListener(this.__dy,E,this.__dA);
Event.addNativeListener(this.__dy,D,this.__dA);
},_initWheelObserver:function(){this.__dB=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var f=qx.core.Variant.isSet(M,x)?H:y;
var g=qx.core.Variant.isSet(M,F)?this.__dy:this.__dx;
Event.addNativeListener(g,f,this.__dB);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dy,J,this.__dz);
Event.removeNativeListener(this.__dy,L,this.__dz);
Event.removeNativeListener(this.__dy,K,this.__dz);
Event.removeNativeListener(this.__dy,G,this.__dz);
Event.removeNativeListener(this.__dy,I,this.__dz);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dy,C,this.__dA);
Event.removeNativeListener(this.__dy,E,this.__dA);
Event.removeNativeListener(this.__dy,D,this.__dA);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var q=qx.core.Variant.isSet(M,x)?H:y;
var r=qx.core.Variant.isSet(M,F)?this.__dy:this.__dx;
Event.removeNativeListener(r,q,this.__dB);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(e){this.__dE(e);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(M,A)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__dF){this.__dF(X,Y,ba);
}
if(this.__dH){this.__dH(X,Y,ba);
}this.__dE(X,Y,ba);

if(this.__dG){this.__dG(X,Y,ba);
}
if(this.__dI){this.__dI(X,Y,ba);
}this.__dC=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__dE(Q,H);
}),__dF:qx.core.Variant.select(M,{"webkit":function(k,l,m){if(qx.bom.client.Engine.VERSION<530){if(l==I){this.__dE(k,L,m);
}}},"default":null}),__dG:qx.core.Variant.select(M,{"opera":function(N,O,P){if(O==L&&N.button==2){this.__dE(N,I,P);
}},"default":null}),__dH:qx.core.Variant.select(M,{"mshtml":function(n,o,p){if(o==L&&this.__dC==K){this.__dE(n,J,p);
}else if(o==G){this.__dE(n,K,p);
}},"default":null}),__dI:qx.core.Variant.select(M,{"mshtml":null,"default":function(s,t,u){switch(t){case J:this.__dD=u;
break;
case L:if(u!==this.__dD){var v=qx.dom.Hierarchy.getCommonParent(u,this.__dD);
this.__dE(s,K,v);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dw=this.__dx=this.__dy=this.__dD=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){qx.core.Object.call(this);
this._manager=z;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(k,l,m){var p=qx.core.ObjectRegistry.toHashCode(k);
var n=p+b+l;
var o=qx.lang.Function.listener(this._onNative,this,n);
qx.bom.Event.addNativeListener(k,l,o);
this._registeredEvents[n]={element:k,type:l,listener:o};
},unregisterEvent:function(c,d,e){var h=this._registeredEvents;

if(!h){return;
}var i=qx.core.ObjectRegistry.toHashCode(c);
var f=i+b+d;
var g=this._registeredEvents[f];

if(g){qx.bom.Event.removeNativeListener(c,d,g.listener);
}delete this._registeredEvents[f];
},_onNative:qx.event.GlobalError.observeMethod(function(v,w){var y=this._registeredEvents;

if(!y){return;
}var x=y[w];
qx.event.Registration.fireNonBubblingEvent(x.element,x.type,qx.event.type.Native,[v]);
})},destruct:function(){var s;
var t=this._registeredEvents;

for(var u in t){s=t[u];
qx.bom.Event.removeNativeListener(s.element,s.type,s.listener);
}this._manager=this._registeredEvents=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this.__dJ=s;
this.__dK={};
qx.event.handler.Appear.__dL[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__dL:{},refresh:function(){var d=this.__dL;

for(var e in d){d[e].refresh();
}}},members:{__dJ:null,__dK:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__dK;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__dK;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var q=this.__dK;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?a:b);
this.__dJ.dispatchEvent(r,o);
}}}},destruct:function(){this.__dJ=this.__dK=null;
delete qx.event.handler.Appear.__dL[this.$$hash];
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var p="mshtml",o="",n="qx.client",m=">",k=" ",h="<",g="='",f="none",e="qx.bom.Element",d="' ",b="div",c="></";
qx.Class.define(e,{statics:{__dM:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__dN:{},getHelperElement:function(B){if(!B){B=window;
}var D=B.location.href;

if(!qx.bom.Element.__dN[D]){var C=qx.bom.Element.__dN[D]=B.document.createElement(b);
if(qx.bom.client.Engine.WEBKIT){C.style.display=f;
B.document.body.appendChild(C);
}}return qx.bom.Element.__dN[D];
},create:function(name,H,I){if(!I){I=window;
}
if(!name){throw new Error("The tag name is missing!");
}var K=this.__dM;
var J=o;

for(var M in H){if(K[M]){J+=M+g+H[M]+d;
}}var N;
if(J!=o){if(qx.bom.client.Engine.MSHTML){N=I.document.createElement(h+name+k+J+m);
}else{var L=qx.bom.Element.getHelperElement(I);
L.innerHTML=h+name+k+J+c+name+m;
N=L.firstChild;
}}else{N=I.document.createElement(name);
}
for(var M in H){if(!K[M]){qx.bom.element.Attribute.set(N,M,H[M]);
}}return N;
},empty:function(q){return q.innerHTML=o;
},addListener:function(w,x,y,self,z){return qx.event.Registration.addListener(w,x,y,self,z);
},removeListener:function(r,s,t,self,u){return qx.event.Registration.removeListener(r,s,t,self,u);
},removeListenerById:function(bd,be){return qx.event.Registration.removeListenerById(bd,be);
},hasListener:function(E,F,G){return qx.event.Registration.hasListener(E,F,G);
},focus:function(bf){qx.event.Registration.getManager(bf).getHandler(qx.event.handler.Focus).focus(bf);
},blur:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).blur(a);
},activate:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).activate(bg);
},deactivate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).deactivate(v);
},capture:function(O,P){qx.event.Registration.getManager(O).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(O,P);
},releaseCapture:function(A){qx.event.Registration.getManager(A).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(A);
},clone:function(Q,R){var U;

if(R||(qx.core.Variant.isSet(n,p)&&!qx.xml.Document.isXmlDocument(Q))){var Y=qx.event.Registration.getManager(Q);
var S=qx.dom.Hierarchy.getDescendants(Q);
S.push(Q);
}if(qx.core.Variant.isSet(n,p)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],false);
}}var U=Q.cloneNode(true);
if(qx.core.Variant.isSet(n,p)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],true);
}}if(R===true){var bc=qx.dom.Hierarchy.getDescendants(U);
bc.push(U);
var T,W,bb,V;

for(var i=0,ba=S.length;i<ba;i++){bb=S[i];
T=Y.serializeListeners(bb);

if(T.length>0){W=bc[i];

for(var j=0,X=T.length;j<X;j++){V=T[j];
Y.addListener(W,V.type,V.handler,V.self,V.capture);
}}}}return U;
}}});
})();
(function(){var T="change",S="input",R="qx.client",Q="text",P="password",O="checkbox",N="radio",M="textarea",L="keypress",K="opera",E="propertychange",J="blur",H="keydown",D="keyup",C="select-multiple",G="checked",F="value",I="select",B="qx.event.handler.Input";
qx.Class.define(B,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(R,K)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__dP:false,__dQ:null,__dR:null,canHandleEvent:function(c,d){var f=c.tagName.toLowerCase();

if(d===S&&(f===S||f===M)){return true;
}
if(d===T&&(f===S||f===M||f===I)){return true;
}return false;
},registerEvent:qx.core.Variant.select(R,{"mshtml":function(bb,bc,bd){if(!bb.__dS){var be=bb.tagName.toLowerCase();
var bf=bb.type;

if(bf===Q||bf===P||be===M||bf===O||bf===N){qx.bom.Event.addNativeListener(bb,E,this._onPropertyWrapper);
}
if(bf!==O&&bf!==N){qx.bom.Event.addNativeListener(bb,T,this._onChangeValueWrapper);
}
if(bf===Q||bf===P){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,bb);
qx.bom.Event.addNativeListener(bb,L,this._onKeyPressWrapped);
}bb.__dS=true;
}},"default":function(y,z,A){if(z===S){this.__dT(y);
}else if(z===T){if(y.type===N||y.type===O){qx.bom.Event.addNativeListener(y,T,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(y,T,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(R,K)){if(y.type===Q||y.type===P){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,L,this._onKeyPressWrapped);
}}}}}),__dT:qx.core.Variant.select(R,{"mshtml":null,"webkit":function(W){var X=W.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&X==M){qx.bom.Event.addNativeListener(W,L,this._onInputWrapper);
}qx.bom.Event.addNativeListener(W,S,this._onInputWrapper);
},"opera":function(r){qx.bom.Event.addNativeListener(r,D,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(r,H,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(r,J,this._onBlurWrapper);
qx.bom.Event.addNativeListener(r,S,this._onInputWrapper);
},"default":function(b){qx.bom.Event.addNativeListener(b,S,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(R,{"mshtml":function(t,u){if(t.__dS){var v=t.tagName.toLowerCase();
var w=t.type;

if(w===Q||w===P||v===M||w===O||w===N){qx.bom.Event.removeNativeListener(t,E,this._onPropertyWrapper);
}
if(w!==O&&w!==N){qx.bom.Event.removeNativeListener(t,T,this._onChangeValueWrapper);
}
if(w===Q||w===P){qx.bom.Event.removeNativeListener(t,L,this._onKeyPressWrapped);
}
try{delete t.__dS;
}catch(m){t.__dS=null;
}}},"default":function(U,V){if(V===S){this.__dT(U);
}else if(V===T){if(U.type===N||U.type===O){qx.bom.Event.removeNativeListener(U,T,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(U,T,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(R,K)){if(U.type===Q||U.type===P){qx.bom.Event.removeNativeListener(U,L,this._onKeyPressWrapped);
}}}}),__dU:qx.core.Variant.select(R,{"mshtml":null,"webkit":function(n){var p=n.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&p==M){qx.bom.Event.removeNativeListener(n,L,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(n,S,this._onInputWrapper);
},"opera":function(x){qx.bom.Event.removeNativeListener(x,D,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(x,H,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(x,J,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(x,S,this._onInputWrapper);
},"default":function(q){qx.bom.Event.removeNativeListener(q,S,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(R,{"mshtml|opera":function(e,k){if(e.keyCode===13){if(k.value!==this.__dR){this.__dR=k.value;
qx.event.Registration.fireEvent(k,T,qx.event.type.Data,[k.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(R,{"opera":function(e){if(e.keyCode===13){this.__dP=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(R,{"opera":function(e){if(e.keyCode===13){this.__dP=false;
}},"default":null}),_onBlur:qx.core.Variant.select(R,{"opera":function(e){if(this.__dQ){window.clearTimeout(this.__dQ);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var s=e.target;
if(!this.__dP){if(qx.core.Variant.isSet(R,K)){this.__dQ=window.setTimeout(function(){qx.event.Registration.fireEvent(s,S,qx.event.type.Data,[s.value]);
},0);
}else{qx.event.Registration.fireEvent(s,S,qx.event.type.Data,[s.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var h=e.target||e.srcElement;
var g=h.value;

if(h.type===C){var g=[];

for(var i=0,o=h.options,l=o.length;i<l;i++){if(o[i].selected){g.push(o[i].value);
}}}qx.event.Registration.fireEvent(h,T,qx.event.type.Data,[g]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var j=e.target;

if(j.type===N){if(j.checked){qx.event.Registration.fireEvent(j,T,qx.event.type.Data,[j.value]);
}}else{qx.event.Registration.fireEvent(j,T,qx.event.type.Data,[j.checked]);
}}),_onProperty:qx.core.Variant.select(R,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Y=e.target||e.srcElement;
var ba=e.propertyName;

if(ba===F&&(Y.type===Q||Y.type===P||Y.tagName.toLowerCase()===M)){if(!Y.$$inValueSet){qx.event.Registration.fireEvent(Y,S,qx.event.type.Data,[Y.value]);
}}else if(ba===G){if(Y.type===O){qx.event.Registration.fireEvent(Y,T,qx.event.type.Data,[Y.checked]);
}else if(Y.checked){qx.event.Registration.fireEvent(Y,T,qx.event.type.Data,[Y.value]);
}}}),"default":function(){}})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var F="",E="select",D="soft",C="off",B="qx.client",A="wrap",z="text",y="mshtml",x="number",w="checkbox",p="select-one",v="input",s="option",o="value",n="radio",r="qx.bom.Input",q="nowrap",t="textarea",m="auto",u="normal";
qx.Class.define(r,{statics:{__dV:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(X,Y,ba){{};
var Y=Y?qx.lang.Object.clone(Y):{};
var bb;

if(X===t||X===E){bb=X;
}else{bb=v;
Y.type=X;
}return qx.bom.Element.create(bb,Y,ba);
},setValue:function(G,H){var M=G.nodeName.toLowerCase();
var J=G.type;
var Array=qx.lang.Array;
var N=qx.lang.Type;

if(typeof H===x){H+=F;
}
if((J===w||J===n)){if(N.isArray(H)){G.checked=Array.contains(H,G.value);
}else{G.checked=G.value==H;
}}else if(M===E){var I=N.isArray(H);
var O=G.options;
var K,L;

for(var i=0,l=O.length;i<l;i++){K=O[i];
L=K.getAttribute(o);

if(L==null){L=K.text;
}K.selected=I?Array.contains(H,L):H==L;
}
if(I&&H.length==0){G.selectedIndex=-1;
}}else if(J===z&&qx.core.Variant.isSet(B,y)){G.$$inValueSet=true;
G.value=H;
G.$$inValueSet=null;
}else{G.value=H;
}},getValue:function(a){var g=a.nodeName.toLowerCase();

if(g===s){return (a.attributes.value||{}).specified?a.value:a.text;
}
if(g===E){var b=a.selectedIndex;
if(b<0){return null;
}var h=[];
var k=a.options;
var j=a.type==p;
var f=qx.bom.Input;
var e;
for(var i=j?b:0,d=j?b+1:k.length;i<d;i++){var c=k[i];

if(c.selected){e=f.getValue(c);
if(j){return e;
}h.push(e);
}}return h;
}else{return (a.value||F).replace(/\r/g,F);
}},setWrap:qx.core.Variant.select(B,{"mshtml":function(R,S){R.wrap=S?D:C;
},"gecko|webkit":function(T,U){var W=U?D:C;
var V=U?F:m;
T.setAttribute(A,W);
T.style.overflow=V;
},"default":function(P,Q){P.style.whiteSpace=Q?u:q;
}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(n){if(qx.bom.client.Engine.VERSION<9.5){return (n||window).document.body.clientWidth;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(f){var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"webkit":function(h){if(qx.bom.client.Engine.VERSION<523.15){return (h||window).innerHeight;
}else{var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientHeight:q.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollLeft||m.body.scrollLeft;
},"default":function(e){return (e||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(r){return (r||window).pageYOffset;
}})}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__dW:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(G){var H=[];
var J=this.__dW.runtime;

for(var I in G){if(!J[I]){H.push(I,t,G[I],y);
}}return H.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__dW;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(z,name){var B=this.__dW;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(K,name,L){var M=this.__dW;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==i){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(C,name){this.set(C,name,null);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__cX:function(){this.QUIRKS_MODE=this.__cY();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cY:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cX();
}});
})();
(function(){var c="qx.lang.Object";
qx.Class.define(c,{statics:{empty:function(f){{};

for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(E){{};
return E.__count__===0;
}:
function(z){{};

for(var A in z){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(F,G){{};
return F.__count__>=G;
}:
function(B,C){{};

if(C<=0){return true;
}var length=0;

for(var D in B){if((++length)>=C){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){{};
var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(x,y){{};
return qx.lang.Object.mergeWith(x,y,false);
},merge:function(m,n){{};
var o=arguments.length;

for(var i=1;i<o;i++){qx.lang.Object.mergeWith(m,arguments[i]);
}return m;
},clone:function(u){{};
var v={};

for(var w in u){v[w]=u[w];
}return v;
},invert:function(h){{};
var j={};

for(var k in h){j[h[k].toString()]=k;
}return j;
},getKeyFromValue:function(H,I){{};

for(var J in H){if(H.hasOwnProperty(J)&&H[J]===I){return J;
}}return null;
},contains:function(d,e){{};
return this.getKeyFromValue(d,e)!==null;
},select:function(p,q){{};
return q[p];
},fromArray:function(a){{};
var b={};

for(var i=0,l=a.length;i<l;i++){{};
b[a[i].toString()]=true;
}return b;
}}});
})();
(function(){var m="default",k="native",j="",h=" ",g="\\b",f="(\\s|$)",e="(^|\\s)",d="g",c="qx.bom.element.Class",b="$2",a="\\b|\\b";
qx.Class.define(c,{statics:{__dX:/\s+/g,__dY:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(n,name){n.classList.add(name);
return name;
},"default":function(z,name){if(!this.has(z,name)){z.className+=(z.className?h:j)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(E,F){for(var i=0;i<F.length;i++){E.classList.add(F[i]);
}return E.className;
},"default":function(J,K){var L={};
var N;
var M=J.className;

if(M){N=M.split(this.__dX);

for(var i=0,l=N.length;i<l;i++){L[N[i]]=true;
}
for(var i=0,l=K.length;i<l;i++){if(!L[K[i]]){N.push(K[i]);
}}}else{N=K;
}return J.className=N.join(h);
}}),get:function(O){return O.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(r,name){return r.classList.contains(name);
},"default":function(s,name){var t=new RegExp(e+name+f);
return t.test(s.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(o,name){o.classList.remove(name);
return name;
},"default":function(C,name){var D=new RegExp(e+name+f);
C.className=C.className.replace(D,b);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(A,B){for(var i=0;i<B.length;i++){A.classList.remove(B[i]);
}return A.className;
},"default":function(u,v){var w=new RegExp(g+v.join(a)+g,d);
return u.className=u.className.replace(w,j).replace(this.__dY,j).replace(this.__dX,h);
}}),replace:function(G,H,I){this.remove(G,H);
return this.add(G,I);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(x,name,y){if(y===undefined){x.classList.toggle(name);
}else{y?this.add(x,name):this.remove(x,name);
}return name;
},"default":function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}})}});
})();
(function(){var bo="borderTopWidth",bn="borderLeftWidth",bm="marginTop",bl="marginLeft",bk="scroll",bj="qx.client",bi="border-box",bh="borderBottomWidth",bg="borderRightWidth",bf="auto",bD="padding",bC="qx.bom.element.Location",bB="paddingLeft",bA="static",bz="marginBottom",by="visible",bx="BODY",bw="paddingBottom",bv="paddingTop",bu="marginRight",bs="position",bt="margin",bq="overflow",br="paddingRight",bp="border";
qx.Class.define(bC,{statics:{__ea:function(a,b){return qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false);
},__eb:function(e,f){return parseInt(qx.bom.element.Style.get(e,f,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ec:function(bM){var bP=0,top=0;
if(bM.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bO=qx.dom.Node.getWindow(bM);
bP-=qx.bom.Viewport.getScrollLeft(bO);
top-=qx.bom.Viewport.getScrollTop(bO);
}else{var bN=qx.dom.Node.getDocument(bM).body;
bM=bM.parentNode;
while(bM&&bM!=bN){bP+=bM.scrollLeft;
top+=bM.scrollTop;
bM=bM.parentNode;
}}return {left:bP,top:top};
},__ed:qx.core.Variant.select(bj,{"mshtml":function(G){var I=qx.dom.Node.getDocument(G);
var H=I.body;
var J=0;
var top=0;
J-=H.clientLeft+I.documentElement.clientLeft;
top-=H.clientTop+I.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){J+=this.__eb(H,bn);
top+=this.__eb(H,bo);
}return {left:J,top:top};
},"webkit":function(bE){var bG=qx.dom.Node.getDocument(bE);
var bF=bG.body;
var bH=bF.offsetLeft;
var top=bF.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bH+=this.__eb(bF,bn);
top+=this.__eb(bF,bo);
}return {left:bH,top:top};
},"gecko":function(bI){var bJ=qx.dom.Node.getDocument(bI).body;
var bK=bJ.offsetLeft;
var top=bJ.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bK+=this.__eb(bJ,bl);
top+=this.__eb(bJ,bm);
}if(qx.bom.element.BoxSizing.get(bJ)!==bi){bK+=this.__eb(bJ,bn);
top+=this.__eb(bJ,bo);
}return {left:bK,top:top};
},"default":function(P){var Q=qx.dom.Node.getDocument(P).body;
var R=Q.offsetLeft;
var top=Q.offsetTop;
return {left:R,top:top};
}}),__ee:qx.core.Variant.select(bj,{"mshtml|webkit":function(B){var D=qx.dom.Node.getDocument(B);
if(B.getBoundingClientRect){var E=B.getBoundingClientRect();
var F=E.left;
var top=E.top;
}else{var F=B.offsetLeft;
var top=B.offsetTop;
B=B.offsetParent;
var C=D.body;
while(B&&B!=C){F+=B.offsetLeft;
top+=B.offsetTop;
F+=this.__eb(B,bn);
top+=this.__eb(B,bo);
B=B.offsetParent;
}}return {left:F,top:top};
},"gecko":function(U){if(U.getBoundingClientRect){var X=U.getBoundingClientRect();
var Y=Math.round(X.left);
var top=Math.round(X.top);
}else{var Y=0;
var top=0;
var V=qx.dom.Node.getDocument(U).body;
var W=qx.bom.element.BoxSizing;

if(W.get(U)!==bi){Y-=this.__eb(U,bn);
top-=this.__eb(U,bo);
}
while(U&&U!==V){Y+=U.offsetLeft;
top+=U.offsetTop;
if(W.get(U)!==bi){Y+=this.__eb(U,bn);
top+=this.__eb(U,bo);
}if(U.parentNode&&this.__ea(U.parentNode,bq)!=by){Y+=this.__eb(U.parentNode,bn);
top+=this.__eb(U.parentNode,bo);
}U=U.offsetParent;
}}return {left:Y,top:top};
},"default":function(bc){var be=0;
var top=0;
var bd=qx.dom.Node.getDocument(bc).body;
while(bc&&bc!==bd){be+=bc.offsetLeft;
top+=bc.offsetTop;
bc=bc.offsetParent;
}return {left:be,top:top};
}}),get:function(g,h){if(g.tagName==bx){var location=this.__ef(g);
var o=location.left;
var top=location.top;
}else{var i=this.__ed(g);
var n=this.__ee(g);
var scroll=this.__ec(g);
var o=n.left+i.left-scroll.left;
var top=n.top+i.top-scroll.top;
}var j=o+g.offsetWidth;
var k=top+g.offsetHeight;

if(h){if(h==bD||h==bk){var l=qx.bom.element.Overflow.getX(g);

if(l==bk||l==bf){j+=g.scrollWidth-g.offsetWidth+this.__eb(g,bn)+this.__eb(g,bg);
}var m=qx.bom.element.Overflow.getY(g);

if(m==bk||m==bf){k+=g.scrollHeight-g.offsetHeight+this.__eb(g,bo)+this.__eb(g,bh);
}}
switch(h){case bD:o+=this.__eb(g,bB);
top+=this.__eb(g,bv);
j-=this.__eb(g,br);
k-=this.__eb(g,bw);
case bk:o-=g.scrollLeft;
top-=g.scrollTop;
j-=g.scrollLeft;
k-=g.scrollTop;
case bp:o+=this.__eb(g,bn);
top+=this.__eb(g,bo);
j-=this.__eb(g,bg);
k-=this.__eb(g,bh);
break;
case bt:o-=this.__eb(g,bl);
top-=this.__eb(g,bm);
j+=this.__eb(g,bu);
k+=this.__eb(g,bz);
break;
}}return {left:o,top:top,right:j,bottom:k};
},__ef:qx.core.Variant.select(bj,{"default":function(K){var top=K.offsetTop+this.__eb(K,bm);
var L=K.offsetLeft+this.__eb(K,bl);
return {left:L,top:top};
},"mshtml":function(S){var top=S.offsetTop;
var T=S.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__eb(S,bm);
T+=this.__eb(S,bl);
}return {left:T,top:top};
},"gecko":function(ba){var top=ba.offsetTop+this.__eb(ba,bm)+this.__eb(ba,bn);
var bb=ba.offsetLeft+this.__eb(ba,bl)+this.__eb(ba,bo);
return {left:bb,top:top};
}}),getLeft:function(r,s){return this.get(r,s).left;
},getTop:function(t,u){return this.get(t,u).top;
},getRight:function(p,q){return this.get(p,q).right;
},getBottom:function(c,d){return this.get(c,d).bottom;
},getRelative:function(v,w,x,y){var A=this.get(v,x);
var z=this.get(w,y);
return {left:A.left-z.left,top:A.top-z.top,right:A.right-z.right,bottom:A.bottom-z.bottom};
},getPosition:function(bL){return this.getRelative(bL,this.getOffsetParent(bL));
},getOffsetParent:function(M){var O=M.offsetParent||document.body;
var N=qx.bom.element.Style;

while(O&&(!/^body|html$/i.test(O.tagName)&&N.get(O,bs)===bA)){O=O.offsetParent;
}return O;
}}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(F){if(!F){return t;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?w:J+v);
K=w;
}else{G=(J==null?w:K+J+v);
K=K+v;
}
if(top==null){H=(I==null?w:I+v);
top=w;
}else{H=(I==null?w:top+I+v);
top=top+v;
}return m+top+u+G+u+H+u+K+r;
},get:function(a,b){var d=qx.bom.element.Style.get(a,l,b,false);
var i,top,g,f;
var c,e;

if(typeof d===n&&d!==w&&d!==q){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(u);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===w){i=null;
}
if(top===w){top=null;
}
if(c===w){c=null;
}
if(e===w){e=null;
}if(top!=null){top=parseInt(top,10);
}
if(c!=null){c=parseInt(c,10);
}
if(e!=null){e=parseInt(e,10);
}
if(i!=null){i=parseInt(i,10);
}if(c!=null&&i!=null){g=c-i;
}else if(c!=null){g=c;
}
if(e!=null&&top!=null){f=e-top;
}else if(e!=null){f=e;
}}else{throw new Error("Could not parse clip string: "+d);
}}return {left:i||null,top:top||null,width:g||null,height:f||null};
},set:function(x,y){if(!y){x.style.clip=j;
return;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?w:C+v);
D=w;
}else{z=(C==null?w:D+C+v);
D=D+v;
}
if(top==null){A=(B==null?w:B+v);
top=w;
}else{A=(B==null?w:top+B+v);
top=top+v;
}x.style.clip=s+top+u+z+u+A+u+D+p;
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eg:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__eg[a]||a)+e;
},get:function(m,n){return qx.bom.element.Style.get(m,c,n,false);
},set:function(p,q){p.style.cursor=this.__eg[q]||q;
},reset:function(o){o.style.cursor=h;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(v){if(v>=1){return q;
}
if(v<0.00001){v=0;
}return h+(v*100)+j;
},"gecko":function(u){if(u==1){u=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+u+o;
}else{return m+u+o;
}},"default":function(H){if(H==1){return q;
}return m+H+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(E,F){var G=qx.bom.element.Style.get(E,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(F>=1){E.style.filter=G.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(F<0.00001){F=0;
}if(!E.currentStyle||!E.currentStyle.hasLayout){E.style.zoom=1;
}E.style.filter=G.replace(/alpha\([^\)]*\)/gi,q)+g+F*100+i;
},"gecko":function(B,C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){B.style.MozOpacity=C;
}else{B.style.opacity=C;
}},"default":function(w,x){if(x==1){x=q;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(y){var z=qx.bom.element.Style.get(y,n,qx.bom.element.Style.COMPUTED_MODE,false);
y.style.filter=z.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(A){if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=q;
}else{A.style.opacity=q;
}},"default":function(D){D.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,n,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?k:l,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(r,s){var t=qx.bom.element.Style.get(r,l,s,false);

if(t!=null){return parseFloat(t);
}return 1.0;
}})}});
})();
(function(){var s="qx.client",r="",q="boxSizing",p="box-sizing",o=":",n="border-box",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="-moz-box-sizing",h="WebkitBoxSizing",e=";",g="-khtml-box-sizing",f="content-box",d="-webkit-box-sizing",c="MozBoxSizing";
qx.Class.define(m,{statics:{__eh:qx.core.Variant.select(s,{"mshtml":null,"webkit":[q,k,h],"gecko":[c],"opera":[q]}),__ei:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,g,d],"gecko":[j],"opera":[p]}),__ej:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ek:function(a){var b=this.__ej;
return b.tags[a.tagName.toLowerCase()]||b.types[a.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(G){{};
},"default":function(D){var F=this.__ei;
var E=r;

if(F){for(var i=0,l=F.length;i<l;i++){E+=F[i]+o+D+e;
}}return E;
}}),get:qx.core.Variant.select(s,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__ek(C)){return f;
}}return n;
},"default":function(z){var B=this.__eh;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==r){return A;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(t,u){{};
},"default":function(w,x){var y=this.__eh;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(v){this.set(v,r);
}}});
})();
(function(){var u="",r="qx.client",q="hidden",p="-moz-scrollbars-none",o="overflow",n=";",m="overflowY",l=":",k="overflowX",j="overflow:",G="none",F="scroll",E="borderLeftStyle",D="borderRightStyle",C="div",B="borderRightWidth",A="overflow-y",z="borderLeftWidth",y="-moz-scrollbars-vertical",x="100px",v="qx.bom.element.Overflow",w="overflow-x";
qx.Class.define(v,{statics:{__el:null,getScrollbarWidth:function(){if(this.__el!==null){return this.__el;
}var bS=qx.bom.element.Style;
var bU=function(U,V){return parseInt(bS.get(U,V))||0;
};
var bV=function(bL){return (bS.get(bL,D)==G?0:bU(bL,B));
};
var bT=function(bf){return (bS.get(bf,E)==G?0:bU(bf,z));
};
var bX=qx.core.Variant.select(r,{"mshtml":function(br){if(bS.get(br,m)==q||br.clientWidth==0){return bV(br);
}return Math.max(0,br.offsetWidth-br.clientLeft-br.clientWidth);
},"default":function(W){if(W.clientWidth==0){var X=bS.get(W,o);
var Y=(X==F||X==y?16:0);
return Math.max(0,bV(W)+Y);
}return Math.max(0,(W.offsetWidth-W.clientWidth-bT(W)));
}});
var bW=function(i){return bX(i)-bV(i);
};
var t=document.createElement(C);
var s=t.style;
s.height=s.width=x;
s.overflow=F;
document.body.appendChild(t);
var c=bW(t);
this.__el=c?c:16;
document.body.removeChild(t);
return this.__el;
},_compile:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(d,e){if(e==q){e=p;
}return j+e+n;
}:
function(bA,bB){return bA+l+bB+n;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){return j+by+n;
}:
function(bu,bv){return bu+l+bv+n;
},"default":function(bi,bj){return bi+l+bj+n;
}}),compileX:function(h){return this._compile(w,h);
},compileY:function(bE){return this._compile(A,bE);
},getX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){var T=qx.bom.element.Style.get(R,o,S,false);

if(T===p){T=q;
}return T;
}:
function(bp,bq){return qx.bom.element.Style.get(bp,k,bq,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bH,bI){return qx.bom.element.Style.get(bH,o,bI,false);
}:
function(N,O){return qx.bom.element.Style.get(N,k,O,false);
},"default":function(bC,bD){return qx.bom.element.Style.get(bC,k,bD,false);
}}),setX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk,bl){if(bl==q){bl=p;
}bk.style.overflow=bl;
}:
function(bs,bt){bs.style.overflowX=bt;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bO,bP){bO.style.overflow=bP;
}:
function(bM,bN){bM.style.overflowX=bN;
},"default":function(bg,bh){bg.style.overflowX=bh;
}}),resetX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bw){bw.style.overflow=u;
}:
function(P){P.style.overflowX=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bY,ca){bY.style.overflow=u;
}:
function(f,g){f.style.overflowX=u;
},"default":function(be){be.style.overflowX=u;
}}),getY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cd,ce){var cf=qx.bom.element.Style.get(cd,o,ce,false);

if(cf===p){cf=q;
}return cf;
}:
function(bQ,bR){return qx.bom.element.Style.get(bQ,m,bR,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(J,K){return qx.bom.element.Style.get(J,o,K,false);
}:
function(bF,bG){return qx.bom.element.Style.get(bF,m,bG,false);
},"default":function(bJ,bK){return qx.bom.element.Style.get(bJ,m,bK,false);
}}),setY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){if(cc===q){cc=p;
}cb.style.overflow=cc;
}:
function(H,I){H.style.overflowY=I;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(L,M){L.style.overflow=M;
}:
function(a,b){a.style.overflowY=b;
},"default":function(bm,bn){bm.style.overflowY=bn;
}}),resetY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bo){bo.style.overflow=u;
}:
function(Q){Q.style.overflowY=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){bc.style.overflow=u;
}:
function(ba,bb){ba.style.overflowY=u;
},"default":function(bz){bz.style.overflowY=u;
}})}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__em:function(){var bb=[a,h,q,c];
var bf={};
var bc=document.documentElement.style;
var bg=[u,o,x,z,E];

for(var i=0,l=bb.length;i<l;i++){var bh=bb[i];
var bd=bh;

if(bc[bh]){bf[bd]=bh;
continue;
}bh=qx.lang.String.firstUp(bh);

for(var j=0,bi=bg.length;j<bi;j++){var be=bg[j]+bh;

if(typeof bc[be]==w){bf[bd]=be;
break;
}}}this.__en=bf;
this.__en[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__eo={};

for(var bd in bf){this.__eo[bd]=this.__es(bf[bd]);
}this.__en[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__ep:{width:r,height:F,left:A,right:t,top:B,bottom:s},__eq:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(G){var I=[];
var K=this.__eq;
var J=this.__eo;
var name,H;

for(name in G){H=G[name];

if(H==null){continue;
}name=J[name]||name;
if(K[name]){I.push(K[name].compile(H));
}else{I.push(this.__es(name),D,H,p);
}}return I.join(m);
},__er:{},__es:function(bm){var bn=this.__er;
var bo=bn[bm];

if(!bo){bo=bn[bm]=qx.lang.String.hyphenate(bm);
}return bo;
},setCss:qx.core.Variant.select(k,{"mshtml":function(L,M){L.style.cssText=M;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bp){return bp.style.cssText.toLowerCase();
},"default":function(bl){return bl.getAttribute(g);
}}),isPropertySupported:function(by){return (this.__eq[by]||this.__en[by]||by in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(V,name,W,X){{};
name=this.__en[name]||name;
if(X!==false&&this.__eq[name]){return this.__eq[name].set(V,W);
}else{V.style[name]=W!==null?W:m;
}},setStyles:function(N,O,P){{};
var S=this.__en;
var U=this.__eq;
var Q=N.style;

for(var T in O){var R=O[T];
var name=S[T]||T;

if(R===undefined){if(P!==false&&U[name]){U[name].reset(N);
}else{Q[name]=m;
}}else{if(P!==false&&U[name]){U[name].set(N,R);
}else{Q[name]=R!==null?R:m;
}}}},reset:function(bj,name,bk){name=this.__en[name]||name;
if(bk!==false&&this.__eq[name]){return this.__eq[name].reset(bj);
}else{bj.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(br,name,bs,bt){name=this.__en[name]||name;
if(bt!==false&&this.__eq[name]){return this.__eq[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__ep[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(bz,name,bA,bB){name=this.__en[name]||name;
if(bB!==false&&this.__eq[name]){return this.__eq[name].get(bz,bA);
}switch(bA){case this.LOCAL_MODE:return bz.style[name]||m;
case this.CASCADED_MODE:if(bz.currentStyle){return bz.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bC=qx.dom.Node.getDocument(bz);
var bD=bC.defaultView.getComputedStyle(bz,null);
return bD?bD[name]:m;
}}})},defer:function(bq){bq.__em();
}});
})();
(function(){var cz="get",cy="set",cx="reset",cw=":not(",cv="getValue",cu="append",ct=")",cs="getPreviousSiblings",cr="#",cq="qx.bom.Collection",cX="setValue",cW="prepend",cV="string",cU="getAncestors",cT="getOffsetParent",cS="remove",cR=">*",cQ="add",cP="*",cO="",cG="addListener",cH="has",cE="toggle",cF="getSiblings",cC="replace",cD="after",cA="replaceWith",cB="setCss",cI="setStyles",cJ="before",cL="getNextSiblings",cK="getPosition",cN="getCss",cM="removeListener";
(function(){var E=function(ds,dt){return function(bn,bo,bp,bq,br,bs){var length=this.length;

if(length>0){var bt=ds[dt];

for(var i=0;i<length;i++){if(this[i].nodeType===1){bt.call(ds,this[i],bn,bo,bp,bq,br,bs);
}}}return this;
};
};
var D=function(cj,ck){return function(dc,dd,de,df,dg,dh){if(this.length>0){var di=this[0].nodeType===1?cj[ck](this[0],dc,dd,de,df,dg,dh):null;

if(di&&di.nodeType){return this.__ex([di]);
}else{return di;
}}return null;
};
};
qx.Class.define(cq,{extend:qx.type.BaseArray,statics:{query:function(k,m){var n=qx.bom.Selector.query(k,m);
return qx.lang.Array.cast(n,qx.bom.Collection);
},id:function(q){var r=document.getElementById(q);
if(r&&r.id!=q){return qx.bom.Collection.query(cr+q);
}if(r){return new qx.bom.Collection(r);
}else{return new qx.bom.Collection();
}},html:function(bv,bw){var bx=qx.bom.Html.clean([bv],bw);
return qx.lang.Array.cast(bx,qx.bom.Collection);
},__et:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(dl,dm){var dp=qx.bom.Collection;
if(dl.nodeType){return new dp(dl);
}else if(typeof dl===cV){var dn=dp.__et.exec(dl);

if(dn){return dn[1]?dp.html(dn[1],dm):dp.id(dn[3].substring(1));
}else{return dp.query(dl,dm);
}}else{return qx.lang.Array.cast(dl,qx.bom.Collection);
}}},members:{__eu:null,setAttribute:E(qx.bom.element.Attribute,cy),resetAttribute:E(qx.bom.element.Attribute,cx),getAttribute:D(qx.bom.element.Attribute,cz),addClass:E(qx.bom.element.Class,cQ),getClass:D(qx.bom.element.Class,cz),hasClass:D(qx.bom.element.Class,cH),removeClass:E(qx.bom.element.Class,cS),replaceClass:E(qx.bom.element.Class,cC),toggleClass:E(qx.bom.element.Class,cE),setValue:E(qx.bom.Input,cX),getValue:D(qx.bom.Input,cv),setStyle:E(qx.bom.element.Style,cy),setStyles:E(qx.bom.element.Style,cI),resetStyle:E(qx.bom.element.Style,cx),getStyle:D(qx.bom.element.Style,cz),setCss:E(qx.bom.element.Style,cB),getCss:E(qx.bom.element.Style,cN),getOffset:D(qx.bom.element.Location,cz),getPosition:D(qx.bom.element.Location,cK),getOffsetParent:D(qx.bom.element.Location,cT),setScrollLeft:function(dj){var Node=qx.dom.Node;

for(var i=0,l=this.length,dk;i<l;i++){dk=this[i];

if(Node.isElement(dk)){dk.scrollLeft=dj;
}else if(Node.isWindow(dk)){dk.scrollTo(dj,this.getScrollTop(dk));
}else if(Node.isDocument(dk)){Node.getWindow(dk).scrollTo(dj,this.getScrollTop(dk));
}}return this;
},setScrollTop:function(s){var Node=qx.dom.Node;

for(var i=0,l=this.length,t;i<l;i++){t=this[i];

if(Node.isElement(t)){t.scrollTop=s;
}else if(Node.isWindow(t)){t.scrollTo(this.getScrollLeft(t),s);
}else if(Node.isDocument(t)){Node.getWindow(t).scrollTo(this.getScrollLeft(t),s);
}}return this;
},getScrollLeft:function(){var cl=this[0];

if(!cl){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cl)||Node.isDocument(cl)){return qx.bom.Viewport.getScrollLeft();
}return cl.scrollLeft;
},getScrollTop:function(){var cY=this[0];

if(!cY){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cY)||Node.isDocument(cY)){return qx.bom.Viewport.getScrollTop();
}return cY.scrollTop;
},getWidth:function(){var I=this[0];
var Node=qx.dom.Node;

if(I){if(Node.isElement(I)){return qx.bom.element.Dimension.getWidth(I);
}else if(Node.isDocument(I)){return qx.bom.Document.getWidth(Node.getWindow(I));
}else if(Node.isWindow(I)){return qx.bom.Viewport.getWidth(I);
}}return null;
},getContentWidth:function(){var da=this[0];

if(qx.dom.Node.isElement(da)){return qx.bom.element.Dimension.getContentWidth(da);
}return null;
},getHeight:function(){var bz=this[0];
var Node=qx.dom.Node;

if(bz){if(Node.isElement(bz)){return qx.bom.element.Dimension.getHeight(bz);
}else if(Node.isDocument(bz)){return qx.bom.Document.getHeight(Node.getWindow(bz));
}else if(Node.isWindow(bz)){return qx.bom.Viewport.getHeight(bz);
}}return null;
},getContentHeight:function(){var A=this[0];

if(qx.dom.Node.isElement(A)){return qx.bom.element.Dimension.getContentHeight(A);
}return null;
},addListener:E(qx.bom.Element,cG),removeListener:E(qx.bom.Element,cM),eq:function(be){return this.slice(be,+be+1);
},filter:function(bT,bU){var bV;

if(qx.lang.Type.isFunction(bT)){bV=qx.type.BaseArray.prototype.filter.call(this,bT,bU);
}else{bV=qx.bom.Selector.matches(bT,this);
}return this.__ex(bV);
},is:function(J){return !!J&&qx.bom.Selector.matches(J,this).length>0;
},__ev:/^.[^:#\[\.,]*$/,not:function(ca){if(this.__ev.test(ca)){var cb=qx.bom.Selector.matches(cw+ca+ct,this);
return this.__ex(cb);
}var cb=qx.bom.Selector.matches(ca,this);
return this.filter(function(bL){return cb.indexOf(bL)===-1;
});
},add:function(bC,bD){var bE=qx.bom.Selector.query(bC,bD);
var bF=qx.lang.Array.unique(this.concat(bE));
return this.__ex(bF);
},children:function(K){var L=[];

for(var i=0,l=this.length;i<l;i++){L.push.apply(L,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(K){L=qx.bom.Selector.matches(K,L);
}return this.__ex(L);
},closest:function(du){var dv=new qx.bom.Collection(1);
var dx=qx.bom.Selector;
var dw=this.map(function(bG){while(bG&&bG.ownerDocument){dv[0]=bG;

if(dx.matches(du,dv).length>0){return bG;
}bG=bG.parentNode;
}});
return this.__ex(qx.lang.Array.unique(dw));
},contents:function(){var bN=[];
var bM=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bN.push.apply(bN,bM.fromCollection(this[i].childNodes));
}return this.__ex(bN);
},find:function(ba){var bc=qx.bom.Selector;
if(this.length===1){return this.__ex(bc.query(ba,this[0]));
}else{var bb=[];

for(var i=0,l=this.length;i<l;i++){bb.push.apply(bb,bc.query(ba,this[i]));
}return this.__ex(qx.lang.Array.unique(bb));
}},next:function(cg){var ch=qx.dom.Hierarchy;
var ci=this.map(ch.getNextElementSibling,ch);
if(cg){ci=qx.bom.Selector.matches(cg,ci);
}return this.__ex(ci);
},nextAll:function(dq){return this.__ew(cL,dq);
},prev:function(F){var G=qx.dom.Hierarchy;
var H=this.map(G.getPreviousElementSibling,G);
if(F){H=qx.bom.Selector.matches(F,H);
}return this.__ex(H);
},prevAll:function(bJ){return this.__ew(cs,bJ);
},parent:function(bW){var Element=qx.dom.Element;
var bX=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bW){bX=qx.bom.Selector.matches(bW,bX);
}return this.__ex(bX);
},parents:function(bK){return this.__ew(cU,bK);
},siblings:function(bh){return this.__ew(cF,bh);
},__ew:function(bO,bP){var bR=[];
var bQ=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bR.push.apply(bR,bQ[bO](this[i]));
}var bS=qx.lang.Array.unique(bR);
if(bP){bS=qx.bom.Selector.matches(bP,bS);
}return this.__ex(bS);
},__ex:function(bA){var bB=new qx.bom.Collection;
bB.__eu=this;
bA=Array.prototype.slice.call(bA,0);
bB.push.apply(bB,bA);
return bB;
},andSelf:function(){return this.add(this.__eu);
},end:function(){return this.__eu||new qx.bom.Collection();
},__ey:function(O,P){var U=this[0];
var T=U.ownerDocument||U;
var S=T.createDocumentFragment();
var W=qx.bom.Html.clean(O,T,S);
var Y=S.firstChild;
if(Y){var Q=this.length-1;

for(var i=0,l=Q;i<l;i++){P.call(this,this[i],S.cloneNode(true));
}P.call(this,this[Q],S);
}if(W){var R;
var X=qx.io.ScriptLoader;
var V=qx.lang.Function;

for(var i=0,l=W.length;i<l;i++){R=W[i];
if(R.src){X.get().load(R.src);
}else{V.globalEval(R.text||R.textContent||R.innerHTML||cO);
}if(R.parentNode){R.parentNode.removeChild(R);
}}}return this;
},__ez:function(u,v){var x=qx.bom.Selector;
var w=qx.lang.Array;
var z=[];

for(var i=0,l=u.length;i<l;i++){{};
z.push.apply(z,x.query(u[i]));
}z=w.cast(w.unique(z),qx.bom.Collection);
for(var i=0,y=this.length;i<y;i++){z[v](this[i]);
}return this;
},append:function(db){return this.__ey(arguments,this.__eA);
},prepend:function(bH){return this.__ey(arguments,this.__eB);
},__eA:function(bf,bg){bf.appendChild(bg);
},__eB:function(B,C){B.insertBefore(C,B.firstChild);
},appendTo:function(cm){return this.__ez(arguments,cu);
},prependTo:function(bY){return this.__ez(arguments,cW);
},before:function(p){return this.__ey(arguments,this.__eC);
},after:function(N){return this.__ey(arguments,this.__eD);
},__eC:function(bj,bk){bj.parentNode.insertBefore(bk,bj);
},__eD:function(co,cp){co.parentNode.insertBefore(cp,co.nextSibling);
},insertBefore:function(bd){return this.__ez(arguments,cJ);
},insertAfter:function(dr){return this.__ez(arguments,cD);
},wrapAll:function(content){var bm=this[0];

if(bm){var bl=qx.bom.Collection.create(content,bm.ownerDocument).clone();
if(bm.parentNode){bm.parentNode.insertBefore(bl[0],bm);
}bl.map(this.__eE).append(this);
}return this;
},__eE:function(bi){while(bi.firstChild){bi=bi.firstChild;
}return bi;
},wrapInner:function(content){var a=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){a[0]=this[i];
a.contents().wrapAll(content);
}return this;
},wrap:function(content){var o=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){o[0]=this[i];
o.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(by){return this.__ez(arguments,cA);
},remove:function(cc){var ce=this;

if(cc){ce=this.filter(cc);

if(ce.length==0){return this;
}}for(var i=0,cf=ce.length,cd;i<cf;i++){cd=ce[i];

if(cd.parentNode){cd.parentNode.removeChild(cd);
}}return ce;
},destroy:function(b){if(this.length==0){return this;
}var d=qx.bom.Selector;
var g=this;

if(b){g=this.filter(b);

if(g.length==0){return this;
}}var f=qx.event.Registration.getManager(this[0]);

for(var i=0,l=g.length,e,h;i<l;i++){e=g[i];
f.removeAllListeners(e);
h=d.query(cP,e);

for(var j=0,c=h.length;j<c;j++){f.removeAllListeners(h[j]);
}if(e.parentNode){e.parentNode.removeChild(e);
}}if(b){g.end();
qx.lang.Array.exclude(this,g);
}else{this.length=0;
}return this;
},empty:function(){var bI=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){bI.query(cR,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(bu){var Element=qx.bom.Element;
return bu?
this.map(function(cn){return Element.clone(cn,true);
}):this.map(Element.clone,Element);
}},defer:function(M){if(window.$==null){window.$=M.create;
}}});
})();
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(h){var i=qx.event.type.Event.prototype.clone.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=qx.event.type.Native.prototype._cloneNativeEvent.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var Y="qx.client",X="blur",W="focus",V="mousedown",U="on",T="mouseup",S="DOMFocusOut",R="DOMFocusIn",Q="selectstart",P="onmousedown",bt="onfocusout",bs="onfocusin",br="onmouseup",bq="onselectstart",bp="draggesture",bo="qx.event.handler.Focus",bn="_applyFocus",bm="deactivate",bl="textarea",bk="_applyActive",bg="input",bh="focusin",be="qxSelectable",bf="tabIndex",bc="off",bd="activate",ba="mshtml",bb="focusout",bi="qxKeepFocus",bj="qxKeepActive";
qx.Class.define(bo,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bv){qx.core.Object.call(this);
this._manager=bv;
this._window=bv.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bk,nullable:true},focus:{apply:bn,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eF:null,__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,canHandleEvent:function(C,D){},registerEvent:function(bx,by,bz){},unregisterEvent:function(x,y,z){},focus:function(F){if(qx.core.Variant.isSet(Y,ba)){window.setTimeout(function(){try{F.focus();
}catch(E){}},0);
}else{try{F.focus();
}catch(r){}}this.setFocus(F);
this.setActive(F);
},activate:function(bu){this.setActive(bu);
},blur:function(bG){try{bG.blur();
}catch(a){}
if(this.getActive()===bG){this.resetActive();
}
if(this.getFocus()===bG){this.resetFocus();
}},deactivate:function(A){if(this.getActive()===A){this.resetActive();
}},tryActivate:function(p){var q=this.__fe(p);

if(q){this.setActive(q);
}},__eP:function(J,K,L,M){var O=qx.event.Registration;
var N=O.createEvent(L,qx.event.type.Focus,[J,K,M]);
O.dispatchEvent(J,N);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__eP(this._window,null,X,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__eP(this._window,null,W,false);
}},_initObserver:qx.core.Variant.select(Y,{"gecko":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eH=qx.lang.Function.listener(this.__eW,this);
this.__eI=qx.lang.Function.listener(this.__eV,this);
this.__eJ=qx.lang.Function.listener(this.__eS,this);
this._document.addEventListener(V,this.__eF,true);
this._document.addEventListener(T,this.__eG,true);
this._window.addEventListener(W,this.__eH,true);
this._window.addEventListener(X,this.__eI,true);
this._window.addEventListener(bp,this.__eJ,true);
},"mshtml":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eL=qx.lang.Function.listener(this.__eT,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this.__eK=qx.lang.Function.listener(this.__fb,this);
this._document.attachEvent(P,this.__eF);
this._document.attachEvent(br,this.__eG);
this._document.attachEvent(bs,this.__eL);
this._document.attachEvent(bt,this.__eM);
this._document.attachEvent(bq,this.__eK);
},"webkit":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this.__eH=qx.lang.Function.listener(this.__eW,this);
this.__eI=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__fb,this);
this._document.addEventListener(V,this.__eF,true);
this._document.addEventListener(T,this.__eG,true);
this._document.addEventListener(Q,this.__eK,false);
this._window.addEventListener(S,this.__eM,true);
this._window.addEventListener(W,this.__eH,true);
this._window.addEventListener(X,this.__eI,true);
},"opera":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eL=qx.lang.Function.listener(this.__eT,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this._document.addEventListener(V,this.__eF,true);
this._document.addEventListener(T,this.__eG,true);
this._window.addEventListener(R,this.__eL,true);
this._window.addEventListener(S,this.__eM,true);
}}),_stopObserver:qx.core.Variant.select(Y,{"gecko":function(){this._document.removeEventListener(V,this.__eF,true);
this._document.removeEventListener(T,this.__eG,true);
this._window.removeEventListener(W,this.__eH,true);
this._window.removeEventListener(X,this.__eI,true);
this._window.removeEventListener(bp,this.__eJ,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,P,this.__eF);
qx.bom.Event.removeNativeListener(this._document,br,this.__eG);
qx.bom.Event.removeNativeListener(this._document,bs,this.__eL);
qx.bom.Event.removeNativeListener(this._document,bt,this.__eM);
qx.bom.Event.removeNativeListener(this._document,bq,this.__eK);
},"webkit":function(){this._document.removeEventListener(V,this.__eF,true);
this._document.removeEventListener(Q,this.__eK,false);
this._window.removeEventListener(R,this.__eL,true);
this._window.removeEventListener(S,this.__eM,true);
this._window.removeEventListener(W,this.__eH,true);
this._window.removeEventListener(X,this.__eI,true);
},"opera":function(){this._document.removeEventListener(V,this.__eF,true);
this._window.removeEventListener(R,this.__eL,true);
this._window.removeEventListener(S,this.__eM,true);
this._window.removeEventListener(W,this.__eH,true);
this._window.removeEventListener(X,this.__eI,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"gecko":function(e){if(!this.__ff(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"mshtml":function(e){this.__eR();
var k=e.srcElement;
var j=this.__fd(k);

if(j){this.setFocus(j);
}this.tryActivate(k);
},"opera":function(e){var bN=e.target;

if(bN==this._document||bN==this._window){this.__eR();

if(this.__eN){this.setFocus(this.__eN);
delete this.__eN;
}
if(this.__eO){this.setActive(this.__eO);
delete this.__eO;
}}else{this.setFocus(bN);
this.tryActivate(bN);
if(!this.__ff(bN)){bN.selectionStart=0;
bN.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"mshtml":function(e){if(!e.toElement){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var u=e.target;

if(u===this.getFocus()){this.resetFocus();
}
if(u===this.getActive()){this.resetActive();
}},"opera":function(e){var bw=e.target;

if(bw==this._document){this.__eQ();
this.__eN=this.getFocus();
this.__eO=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bw===this.getFocus()){this.resetFocus();
}
if(bw===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__eQ();
this.__eN=this.getFocus();
this.__eO=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"gecko":function(e){var o=e.target;

if(o===this._window||o===this._document){this.__eR();
o=this._body;
}this.setFocus(o);
this.tryActivate(o);
},"webkit":function(e){var bM=e.target;

if(bM===this._window||bM===this._document){this.__eR();

if(this.__eN){this.setFocus(this.__eN);
delete this.__eN;
}
if(this.__eO){this.setActive(this.__eO);
delete this.__eO;
}}else{this.setFocus(bM);
this.tryActivate(bM);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"gecko":function(e){var i=this.__fd(e.target);

if(!i){qx.bom.Event.preventDefault(e);
}else if(i===this._body){this.setFocus(i);
}},"mshtml":function(e){var bF=e.srcElement;
var bE=this.__fd(bF);

if(bE){if(!this.__ff(bF)){bF.unselectable=U;
try{document.selection.empty();
}catch(e){}try{bE.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__ff(bF)){bF.unselectable=U;
}}},"webkit":function(e){var bI=e.target;
var bH=this.__fd(bI);

if(bH){this.setFocus(bH);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bL=e.target;
var bJ=this.__fd(bL);

if(!this.__ff(bL)){qx.bom.Event.preventDefault(e);
if(bJ){var bK=this.getFocus();

if(bK&&bK.selectionEnd){bK.selectionStart=0;
bK.selectionEnd=0;
bK.blur();
}if(bJ){this.setFocus(bJ);
}}}else if(bJ){this.setFocus(bJ);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"mshtml":function(e){var bD=e.srcElement;

if(bD.unselectable){bD.unselectable=bc;
}this.tryActivate(this.__fa(bD));
},"gecko":function(e){var b=e.target;

while(b&&b.offsetWidth===undefined){b=b.parentNode;
}
if(b){this.tryActivate(b);
}},"webkit|opera":function(e){this.tryActivate(this.__fa(e.target));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"mshtml|webkit":function(s){var t=this.getFocus();

if(t&&s!=t&&(t.nodeName.toLowerCase()===bg||t.nodeName.toLowerCase()===bl)){s=t;
}return s;
},"default":function(l){return l;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Variant.select(Y,{"mshtml|webkit":function(e){var B=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__ff(B)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fc:function(bA){var bB=qx.bom.element.Attribute.get(bA,bf);

if(bB>=1){return true;
}var bC=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bB>=0&&bC[bA.tagName]){return true;
}return false;
},__fd:function(I){while(I&&I.nodeType===1){if(I.getAttribute(bi)==U){return null;
}
if(this.__fc(I)){return I;
}I=I.parentNode;
}return this._body;
},__fe:function(c){var d=c;

while(c&&c.nodeType===1){if(c.getAttribute(bj)==U){return null;
}c=c.parentNode;
}return d;
},__ff:function(v){while(v&&v.nodeType===1){var w=v.getAttribute(be);

if(w!=null){return w===U;
}v=v.parentNode;
}return true;
},_applyActive:function(G,H){if(H){this.__eP(H,G,bm,true);
}
if(G){this.__eP(G,H,bd,true);
}},_applyFocus:function(m,n){if(n){this.__eP(n,m,bb,true);
}
if(m){this.__eP(m,n,bh,true);
}if(n){this.__eP(n,m,X,false);
}
if(m){this.__eP(m,n,W,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
},defer:function(f){qx.event.Registration.addHandler(f);
var g=f.FOCUSABLE_ELEMENTS;

for(var h in g){g[h.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(n,o,p,q,r){qx.event.type.Dom.prototype.init.call(this,n,o,p,q,r);

if(!p){this._relatedTarget=qx.bom.Event.getRelatedTarget(n);
}return this;
},_cloneNativeEvent:function(l,m){var m=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,l,m);
m.button=l.button;
m.clientX=l.clientX;
m.clientY=l.clientY;
m.pageX=l.pageX;
m.pageY=l.pageY;
m.screenX=l.screenX;
m.screenY=l.screenY;
m.wheelDelta=l.wheelDelta;
m.detail=l.detail;
m.srcElement=l.srcElement;
return m;
},__fk:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__fk[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fm:function(A){var B=navigator.userAgent;
var D=new RegExp(t+A+e);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(B.indexOf(b)!==-1||B.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
C=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(G){G.__fm(p);
},"gecko":function(a){a.__fm(l);
},"mshtml":function(z){z.__fm(w);
},"opera":function(F){F.__fm(q);
}})});
})();
(function(){var F="qx.client",E="qx.dom.Hierarchy",D="previousSibling",C="*",B="nextSibling",A="parentNode";
qx.Class.define(E,{statics:{getNodeIndex:function(n){var o=0;

while(n&&(n=n.previousSibling)){o++;
}return o;
},getElementIndex:function(G){var H=0;
var I=qx.dom.Node.ELEMENT;

while(G&&(G=G.previousSibling)){if(G.nodeType==I){H++;
}}return H;
},getNextElementSibling:function(J){while(J&&(J=J.nextSibling)&&!qx.dom.Node.isElement(J)){continue;
}return J||null;
},getPreviousElementSibling:function(b){while(b&&(b=b.previousSibling)&&!qx.dom.Node.isElement(b)){continue;
}return b||null;
},contains:qx.core.Variant.select(F,{"webkit|mshtml|opera":function(w,x){if(qx.dom.Node.isDocument(w)){var y=qx.dom.Node.getDocument(x);
return w&&y==w;
}else if(qx.dom.Node.isDocument(x)){return false;
}else{return w.contains(x);
}},"gecko":function(u,v){return !!(u.compareDocumentPosition(v)&16);
},"default":function(c,d){while(d){if(c==d){return true;
}d=d.parentNode;
}return false;
}}),isRendered:function(k){if(!k.parentNode||!k.offsetParent){return false;
}var l=k.ownerDocument||k.document;
if(l.body.contains){return l.body.contains(k);
}if(l.compareDocumentPosition){return !!(l.compareDocumentPosition(k)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(s,t){return this.contains(t,s);
},getCommonParent:qx.core.Variant.select(F,{"mshtml|opera":function(U,V){if(U===V){return U;
}
while(U&&qx.dom.Node.isElement(U)){if(U.contains(V)){return U;
}U=U.parentNode;
}return null;
},"default":function(M,N){if(M===N){return M;
}var O={};
var R=qx.core.ObjectRegistry;
var Q,P;

while(M||N){if(M){Q=R.toHashCode(M);

if(O[Q]){return O[Q];
}O[Q]=M;
M=M.parentNode;
}
if(N){P=R.toHashCode(N);

if(O[P]){return O[P];
}O[P]=N;
N=N.parentNode;
}}return null;
}}),getAncestors:function(a){return this._recursivelyCollect(a,A);
},getChildElements:function(p){p=p.firstChild;

if(!p){return [];
}var q=this.getNextSiblings(p);

if(p.nodeType===1){q.unshift(p);
}return q;
},getDescendants:function(m){return qx.lang.Array.fromCollection(m.getElementsByTagName(C));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(S){S=S.lastChild;

while(S&&S.nodeType!=1){S=S.previousSibling;
}return S;
},getPreviousSiblings:function(z){return this._recursivelyCollect(z,D);
},getNextSiblings:function(L){return this._recursivelyCollect(L,B);
},_recursivelyCollect:function(h,i){var j=[];

while(h=h[i]){if(h.nodeType==1){j.push(h);
}}return j;
},getSiblings:function(T){return this.getPreviousSiblings(T).reverse().concat(this.getNextSiblings(T));
},isEmpty:function(r){r=r.firstChild;

while(r){if(r.nodeType===qx.dom.Node.ELEMENT||r.nodeType===qx.dom.Node.TEXT){return false;
}r=r.nextSibling;
}return true;
},cleanWhitespace:function(e){var f=e.firstChild;

while(f){var g=f.nextSibling;

if(f.nodeType==3&&!/\S/.test(f.nodeValue)){e.removeChild(f);
}f=g;
}}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(m,n){qx.event.dispatch.AbstractBubbling.call(this,m);
this.__fn=m.getWindow();
this.__fo=n;
m.addListener(this.__fn,f,this.releaseCapture,this);
m.addListener(this.__fn,e,this.releaseCapture,this);
m.addListener(this.__fn,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fo:null,__fp:null,__fq:true,__fn:null,_getParent:function(q){return q.parentNode;
},canDispatchEvent:function(o,event,p){return (this.__fp&&this.__fr[p]);
},dispatchEvent:function(r,event,s){if(s==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fq||!qx.dom.Hierarchy.contains(this.__fp,r)){r=this.__fp;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,r,event,s);
},__fr:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(i,j){var j=j!==false;

if(this.__fp===i&&this.__fq==j){return;
}
if(this.__fp){this.releaseCapture();
}this.nativeSetCapture(i,j);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(i,h,function(){qx.bom.Event.removeNativeListener(i,h,arguments.callee);
self.releaseCapture();
});
}this.__fq=j;
this.__fp=i;
this.__fo.fireEvent(i,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fp;
},releaseCapture:function(){var t=this.__fp;

if(!t){return;
}this.__fp=null;
this.__fo.fireEvent(t,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(t);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(u,v){u.setCapture(v!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(l){l.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fp=this.__fn=this.__fo=null;
},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);
this._manager=p;
this._window=p.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(k,l,m){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var g=qx.event.handler.Window.SUPPORTED_TYPES;

for(var f in g){qx.bom.Event.addNativeListener(this._window,f,this._onNativeWrapper);
}},_stopWindowObserver:function(){var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.removeNativeListener(this._window,a,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__fv:function(U,V,W){return W.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+z+W+H;
},__fw:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__fx:function(X,Y){var bf=Y.createElement(J);
X=X.replace(/(<(\w+)[^>]*?)\/>/g,this.__fv);
var bb=X.replace(/^\s+/,t).substring(0,5).toLowerCase();
var be,ba=this.__fw;

if(!bb.indexOf(B)){be=ba.opt;
}else if(!bb.indexOf(o)){be=ba.leg;
}else if(bb.match(/^<(thead|tbody|tfoot|colg|cap)/)){be=ba.table;
}else if(!bb.indexOf(w)){be=ba.tr;
}else if(!bb.indexOf(D)||!bb.indexOf(F)){be=ba.td;
}else if(!bb.indexOf(a)){be=ba.col;
}else{be=ba.def;
}if(be){bf.innerHTML=be[1]+X+be[2];
var bd=be[0];

while(bd--){bf=bf.lastChild;
}}else{bf.innerHTML=X;
}if(qx.core.Variant.isSet(m,q)){var bg=/<tbody/i.test(X);
var bc=!bb.indexOf(p)&&!bg?bf.firstChild&&bf.firstChild.childNodes:be[1]==g&&!bg?bf.childNodes:[];

for(var j=bc.length-1;j>=0;--j){if(bc[j].tagName.toLowerCase()===v&&!bc[j].childNodes.length){bc[j].parentNode.removeChild(bc[j]);
}}if(/^\s/.test(X)){bf.insertBefore(Y.createTextNode(X.match(/^\s*/)[0]),bf.firstChild);
}}return qx.lang.Array.fromCollection(bf.childNodes);
},clean:function(K,L,M){L=L||document;
if(typeof L.createElement===x){L=L.ownerDocument||L[0]&&L[0].ownerDocument||document;
}if(!M&&K.length===1&&typeof K[0]===k){var T=/^<(\w+)\s*\/?>$/.exec(K[0]);

if(T){return [L.createElement(T[1])];
}}var N,P=[];

for(var i=0,l=K.length;i<l;i++){N=K[i];
if(typeof N===k){N=this.__fx(N,L);
}if(N.nodeType){P.push(N);
}else if(N instanceof qx.type.BaseArray){P.push.apply(P,Array.prototype.slice.call(N,0));
}else if(N.toElement){P.push(N.toElement());
}else{P.push.apply(P,N);
}}if(M){var S=[],R=qx.lang.Array,Q,O;

for(var i=0;P[i];i++){Q=P[i];

if(Q.nodeType==1&&Q.tagName.toLowerCase()===h&&(!Q.type||Q.type.toLowerCase()===A)){if(Q.parentNode){Q.parentNode.removeChild(P[i]);
}S.push(Q);
}else{if(Q.nodeType===1){O=R.fromCollection(Q.getElementsByTagName(h));
P.splice.apply(P,[i+1,0].concat(O));
}M.appendChild(Q);
}}return S;
}return P;
}}});
})();
(function(){var o="0px",n="mshtml",m="qx.client",l="qx.bom.element.Dimension",k="paddingRight",j="paddingLeft",i="paddingTop",h="paddingBottom";
qx.Class.define(l,{statics:{getWidth:qx.core.Variant.select(m,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.right)-Math.round(C.left);
}else{return B.offsetWidth;
}},"default":function(y){return y.offsetWidth;
}}),getHeight:qx.core.Variant.select(m,{"gecko":function(p){if(p.getBoundingClientRect){var q=p.getBoundingClientRect();
return Math.round(q.bottom)-Math.round(q.top);
}else{return p.offsetHeight;
}},"default":function(A){return A.offsetHeight;
}}),getSize:function(z){return {width:this.getWidth(z),height:this.getHeight(z)};
},__fy:{visible:true,hidden:true},getContentWidth:function(r){var t=qx.bom.element.Style;
var u=qx.bom.element.Overflow.getX(r);
var v=parseInt(t.get(r,j)||o,10);
var x=parseInt(t.get(r,k)||o,10);

if(this.__fy[u]){return r.clientWidth-v-x;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-v-x;
}else{var w=r.scrollWidth-v;
var s=qx.bom.client.Engine;

if(s.NAME===n&&s.VERSION==6){w-=x;
}return w;
}}},getContentHeight:function(a){var c=qx.bom.element.Style;
var e=qx.bom.element.Overflow.getY(a);
var f=parseInt(c.get(a,i)||o,10);
var d=parseInt(c.get(a,h)||o,10);

if(this.__fy[e]){return a.clientHeight-f-d;
}else{if(a.clientHeight>=a.scrollHeight){return Math.max(a.clientHeight,a.scrollHeight)-f-d;
}else{var g=a.scrollHeight-f;
var b=qx.bom.client.Engine;

if(b.NAME===n&&b.VERSION==6){g-=d;
}return g;
}}},getContentSize:function(D){return {width:this.getContentWidth(D),height:this.getContentHeight(D)};
}}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,y){return y.parentNode===parent;
},hasChildren:function(v){return !!v.firstChild;
},hasChildElements:function(B){B=B.firstChild;

while(B){if(B.nodeType===1){return true;
}B=B.nextSibling;
}return false;
},getParentElement:function(h){return h.parentNode;
},isInDom:function(n,o){if(!o){o=window;
}var p=o.document.getElementsByTagName(n.nodeName);

for(var i=0,l=p.length;i<l;i++){if(p[i]===n){return true;
}}return false;
},insertAt:function(e,parent,f){var g=parent.childNodes[f];

if(g){parent.insertBefore(e,g);
}else{parent.appendChild(e);
}return true;
},insertBegin:function(r,parent){if(parent.firstChild){this.insertBefore(r,parent.firstChild);
}else{parent.appendChild(r);
}},insertEnd:function(a,parent){parent.appendChild(a);
},insertBefore:function(j,k){k.parentNode.insertBefore(j,k);
return true;
},insertAfter:function(c,d){var parent=d.parentNode;

if(d==parent.lastChild){parent.appendChild(c);
}else{return this.insertBefore(c,d.nextSibling);
}return true;
},remove:function(m){if(!m.parentNode){return false;
}m.parentNode.removeChild(m);
return true;
},removeChild:function(q,parent){if(q.parentNode!==parent){return false;
}parent.removeChild(q);
return true;
},removeChildAt:function(w,parent){var x=parent.childNodes[w];

if(!x){return false;
}parent.removeChild(x);
return true;
},replaceChild:function(z,A){if(!A.parentNode){return false;
}A.parentNode.replaceChild(z,A);
return true;
},replaceAt:function(s,t,parent){var u=parent.childNodes[t];

if(!u){return false;
}parent.replaceChild(s,u);
return true;
}}});
})();
(function(){var q="success",p="complete",o="error",n="load",m="fail",l="qx.client",k="loaded",j="readystatechange",i="head",h="qx.io.ScriptLoader",d="mshtml|webkit",g="script",f="text/javascript",c="abort";
qx.Bootstrap.define(h,{construct:function(){this.__fz=qx.Bootstrap.bind(this.__fE,this);
this.__fA=document.createElement(g);
},members:{__fB:null,__fC:null,__fD:null,__fz:null,__fA:null,load:function(r,s,t){if(this.__fB){throw new Error("Another request is still running!");
}this.__fB=true;
var u=document.getElementsByTagName(i)[0];
var v=this.__fA;
this.__fC=s||null;
this.__fD=t||window;
v.type=f;
v.onerror=v.onload=v.onreadystatechange=this.__fz;
v.src=r;
setTimeout(function(){u.appendChild(v);
},0);
},abort:function(){if(this.__fB){this.dispose(c);
}},dispose:function(status){if(this._disposed){return;
}this._disposed=true;
var b=this.__fA;
b.onerror=b.onload=b.onreadystatechange=null;
var a=b.parentNode;

if(a){a.removeChild(b);
}delete this.__fB;
if(this.__fC){if(qx.core.Variant.isSet(l,d)){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__fC.call(self.__fD,status);
delete self.__fC;
}),0);
}else{this.__fC.call(this.__fD,status);
delete this.__fC;
}}},__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){var w=this.__fA.readyState;

if(w==k){this.dispose(q);
}else if(w==p){this.dispose(q);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===o){return this.dispose(m);
}else if(e.type===n){return this.dispose(q);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===o){this.dispose(m);
}else if(e.type===n){this.dispose(q);
}else if(e.type===j&&(e.target.readyState===p||e.target.readyState===k)){this.dispose(q);
}else{return;
}}}))}});
})();


qx.$$loader.init();

