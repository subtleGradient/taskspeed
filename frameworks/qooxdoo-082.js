if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": ".", "version": "trunk", "sourceUri": "."}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_abbreviated_sat": "Sat", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "quotationStart": "“", "cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_month_wide_10": "October", "cldr_day_wide_mon": "Monday", "cldr_day_wide_sat": "Saturday", "cldr_day_abbreviated_mon": "Mon", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_month_narrow_3": "M", "cldr_day_narrow_sun": "S", "cldr_day_narrow_fri": "F", "quotationEnd": "”", "cldr_day_narrow_sat": "S", "cldr_date_time_format_Md": "M/d", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_abbreviated_sun": "Sun", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_format_medium": "MMM d, yyyy", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_narrow_tue": "T", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_yQ": "Q yyyy", "cldr_day_narrow_wed": "W", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_day_wide_sun": "Sunday", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_narrow_5": "M", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_month_narrow_9": "S", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_month_wide_4": "April", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["./qooxdoo-082-0.js"]],
  boot : "boot"
};  

(function(){var f="[Class ",e="toString",d="qx.Bootstrap",c="]",b="Class",a=".";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+c;
},createNamespace:function(name,g){var j=name.split(a);
var parent=window;
var h=j[0];

for(var i=0,k=j.length-1;i<k;i++,h=j[i]){if(!parent[h]){parent=parent[h]={};
}else{parent=parent[h];
}}parent[h]=g;
return h;
},define:function(name,l){if(!l){var l={statics:{}};
}var q;
var o=null;

if(l.members){q=l.construct||new Function;
var m=l.statics;

for(var n in m){q[n]=m[n];
}o=q.prototype;
var r=l.members;

for(var n in r){o[n]=r[n];
}}else{q=l.statics||{};
}var p=this.createNamespace(name,q);
q.name=q.classname=name;
q.basename=p;
q.$$type=b;
if(!q.hasOwnProperty(e)){q.toString=this.genericToString;
}if(l.defer){l.defer(q,o);
}qx.Bootstrap.$$registry[name]=l.statics;
}};
qx.Bootstrap.define(d,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var q="qx.allowUrlSettings",p="&",o="qx.core.Setting",n="qx.allowUrlVariants",m="qxsetting",l=":",k=".";
qx.Bootstrap.define(o,{statics:{__a:{},define:function(c,d){if(d===undefined){throw new Error('Default value of setting "'+c+'" must be defined!');
}
if(!this.__a[c]){this.__a[c]={};
}else if(this.__a[c].defaultValue!==undefined){throw new Error('Setting "'+c+'" is already defined!');
}this.__a[c].defaultValue=d;
},get:function(a){var b=this.__a[a];

if(b===undefined){throw new Error('Setting "'+a+'" is not defined.');
}
if(b.value!==undefined){return b.value;
}return b.defaultValue;
},__b:function(){if(window.qxsettings){for(var e in qxsettings){if((e.split(k)).length<2){throw new Error('Malformed settings key "'+e+'". Must be following the schema "namespace.key".');
}
if(!this.__a[e]){this.__a[e]={};
}this.__a[e].value=qxsettings[e];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(f){}this.__c();
}},__c:function(){if(this.get(q)!=true){return;
}var j=document.location.search.slice(1).split(p);

for(var i=0;i<j.length;i++){var g=j[i].split(l);

if(g.length!=3||g[0]!=m){continue;
}var h=g[1];

if(!this.__a[h]){this.__a[h]={};
}this.__a[h].value=decodeURIComponent(g[2]);
}}},defer:function(r){r.define(q,false);
r.define(n,false);
r.__b();
}});
})();
(function(){var q="gecko",p="1.9.0.0",o=".",n="function",m="[^\\.0-9]",l="525.26",k="",j="mshtml",i="AppleWebKit/",h="unknown",c="9.6.0",g="Gecko",f="7.0",b="opera",a="webkit",e="0.0.0",d="qx.bom.client.Engine";
qx.Bootstrap.define(d,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,__d:function(){var r=h;
var v=e;
var u=navigator.userAgent;
var x=false;
var t=false;

if(window.opera){r=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(u)){v=RegExp.$1+o+RegExp.$2;

if(RegExp.$3!=k){v+=o+RegExp.$3;
}}else{t=true;
v=c;
}}else if(navigator.userAgent.indexOf(i)!=-1){r=a;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(u)){v=RegExp.$1;
var w=RegExp(m).exec(v);

if(w){v=v.slice(0,w.index);
}}else{t=true;
v=l;
}}else if(window.controllers&&navigator.product===g){r=q;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(u)){v=RegExp.$1;
}else{t=true;
v=p;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(u)){r=j;
v=RegExp.$1;
if(v>=8&&document.documentMode<8){v=f;
}this.MSHTML=true;
}else{var s=window.qxFail;

if(s&&typeof s===n){var r=s();

if(r.NAME&&r.FULLVERSION){r=r.NAME;
this[r.toUpperCase()]=true;
v=r.FULLVERSION;
}}else{x=true;
t=true;
v=p;
r=q;
this.GECKO=true;
alert("Unsupported client: "+u+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=x;
this.UNKNOWN_VERSION=t;
this.NAME=r;
this.FULLVERSION=v;
this.VERSION=parseFloat(v);
}},defer:function(y){y.__d();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(G,H,I){{};

if(!this.__e[G]){this.__e[G]={};
}else{}this.__e[G].allowedValues=H;
this.__e[G].defaultValue=I;
},get:function(E){var F=this.__e[E];
{};

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__g:function(){if(window.qxvariants){for(var M in qxvariants){{};

if(!this.__e[M]){this.__e[M]={};
}this.__e[M].value=qxvariants[M];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(J){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__e[Q]){this.__e[Q]={};
}this.__e[Q].value=decodeURIComponent(P[2]);
}},select:function(B,C){{};

for(var D in C){if(this.isSet(B,D)){return C[D];
}}
if(C[r]!==undefined){return C[r];
}{};
},isSet:function(w,x){var y=w+n+x;

if(this.__f[y]!==undefined){return this.__f[y];
}var A=false;
if(x.indexOf(s)<0){A=this.get(w)===x;
}else{var z=x.split(s);

for(var i=0,l=z.length;i<l;i++){if(this.get(w)===z[i]){A=true;
break;
}}}this.__f[y]=A;
return A;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(K,L){for(var i=0,l=K.length;i<l;i++){if(K[i]==L){return true;
}}return false;
}},defer:function(N){N.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
N.define(k,[u,t],u);
N.define(o,[u,t],t);
N.define(j,[u,t],u);
N.__g();
}});
})();
(function(){var p="qx.client",o="on",n="qx.bom.Event",m="mousedown",l="mouseover";
qx.Bootstrap.define(n,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(d,f,g){d.attachEvent(o+f,g);
},"default":function(a,b,c){a.addEventListener(b,c,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(h,i,j){h.detachEvent(o+i,j);
},"default":function(q,r,s){q.removeEventListener(r,s,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(p,{"mshtml":function(e){if(e.type===l){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(p,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==m&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(t){}},"mshtml":function(e){try{e.keyCode=0;
}catch(k){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var J="|bubble",I="|capture",H="|",G="_",F="unload",E="UNKNOWN_",D="DOM_",C="c",B="WIN_",A="capture",y="qx.event.Manager",z="QX_";
qx.Bootstrap.define(y,{construct:function(k){this.__l=k;
if(k.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(k,F,function(){qx.bom.Event.removeNativeListener(k,F,arguments.callee);
self.dispose();
});
}this.__m={};
this.__n={};
this.__o={};
this.__p={};
},statics:{__q:0,getNextUniqueId:function(){return (this.__q++).toString(36);
}},members:{__m:null,__o:null,__r:null,__n:null,__p:null,__l:null,getWindow:function(){return this.__l;
},getHandler:function(K){var L=this.__n[K.classname];

if(L){return L;
}return this.__n[K.classname]=new K(this);
},getDispatcher:function(M){var N=this.__o[M.classname];

if(N){return N;
}return this.__o[M.classname]=new M(this);
},getListeners:function(ce,cf,cg){var ch=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cj=this.__m[ch];

if(!cj){return null;
}var ck=cf+(cg?I:J);
var ci=cj[ck];
return ci?ci.concat():null;
},serializeListeners:function(bT){var cb=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__m[cb];
var bY=[];

if(cd){var bW,cc,bU,bX,ca;

for(var bV in cd){bW=bV.indexOf(H);
cc=bV.substring(0,bW);
bU=bV.charAt(bW+1)==C;
bX=cd[bV];

for(var i=0,l=bX.length;i<l;i++){ca=bX[i];
bY.push({self:ca.context,handler:ca.handler,type:cc,capture:bU});
}}}return bY;
},toggleAttachedEvents:function(cs,ct){var cy=cs.$$hash||qx.core.ObjectRegistry.toHashCode(cs);
var cA=this.__m[cy];

if(cA){var cv,cz,cu,cw;

for(var cx in cA){cv=cx.indexOf(H);
cz=cx.substring(0,cv);
cu=cx.charCodeAt(cv+1)===99;
cw=cA[cx];

if(ct){this.__s(cs,cz,cu);
}else{this.__t(cs,cz,cu);
}}}},hasListener:function(cl,cm,cn){{};
var co=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cq=this.__m[co];

if(!cq){return false;
}var cr=cm+(cn?I:J);
var cp=cq[cr];
return cp&&cp.length>0;
},importListeners:function(a,b){{};
var h=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var j=this.__m[h]={};
var e=qx.event.Manager;

for(var c in b){var f=b[c];
var g=f.type+(f.capture?I:J);
var d=j[g];

if(!d){d=j[g]=[];
this.__s(a,f.type,f.capture);
}d.push({handler:f.listener,context:f.self,unique:f.unique||(e.__q++).toString(36)});
}},addListener:function(bq,br,bs,self,bt){var bx;
var by=bq.$$hash||qx.core.ObjectRegistry.toHashCode(bq);
var bA=this.__m[by];

if(!bA){bA=this.__m[by]={};
}var bw=br+(bt?I:J);
var bv=bA[bw];

if(!bv){bv=bA[bw]=[];
}if(bv.length===0){this.__s(bq,br,bt);
}var bz=(qx.event.Manager.__q++).toString(36);
var bu={handler:bs,context:self,unique:bz};
bv.push(bu);
return bw+H+bz;
},findHandler:function(bd,be){var bo=false,bh=false,bp=false;
var bn;

if(bd.nodeType===1){bo=true;
bn=D+bd.tagName.toLowerCase()+G+be;
}else if(bd==this.__l){bh=true;
bn=B+be;
}else if(bd.classname){bp=true;
bn=z+bd.classname+G+be;
}else{bn=E+bd+G+be;
}var bj=this.__p;

if(bj[bn]){return bj[bn];
}var bm=qx.event.Registration.getHandlers();
var bi=qx.event.IEventHandler;
var bk,bl,bg,bf;

for(var i=0,l=bm.length;i<l;i++){bk=bm[i];
bg=bk.SUPPORTED_TYPES;

if(bg&&!bg[be]){continue;
}bf=bk.TARGET_CHECK;

if(bf){if(!bo&&bf===bi.TARGET_DOMNODE){continue;
}else if(!bh&&bf===bi.TARGET_WINDOW){continue;
}else if(!bp&&bf===bi.TARGET_OBJECT){continue;
}}bl=this.getHandler(bm[i]);

if(bk.IGNORE_CAN_HANDLE||bl.canHandleEvent(bd,be)){bj[bn]=bl;
return bl;
}}return null;
},__s:function(bL,bM,bN){var bO=this.findHandler(bL,bM);

if(bO){bO.registerEvent(bL,bM,bN);
return;
}{};
},removeListener:function(bB,bC,bD,self,bE){var bI;
var bJ=bB.$$hash||qx.core.ObjectRegistry.toHashCode(bB);
var bK=this.__m[bJ];

if(!bK){return false;
}var bF=bC+(bE?I:J);
var bG=bK[bF];

if(!bG){return false;
}var bH;

for(var i=0,l=bG.length;i<l;i++){bH=bG[i];

if(bH.handler===bD&&bH.context===self){qx.lang.Array.removeAt(bG,i);

if(bG.length==0){this.__t(bB,bC,bE);
}return true;
}}return false;
},removeListenerById:function(m,n){var t;
var r=n.split(H);
var w=r[0];
var o=r[1].charCodeAt(0)==99;
var v=r[2];
var u=m.$$hash||qx.core.ObjectRegistry.toHashCode(m);
var x=this.__m[u];

if(!x){return false;
}var s=w+(o?I:J);
var q=x[s];

if(!q){return false;
}var p;

for(var i=0,l=q.length;i<l;i++){p=q[i];

if(p.unique===v){qx.lang.Array.removeAt(q,i);

if(q.length==0){this.__t(m,w,o);
}return true;
}}return false;
},removeAllListeners:function(O){var S=O.$$hash||qx.core.ObjectRegistry.toHashCode(O);
var U=this.__m[S];

if(!U){return false;
}var Q,T,P;

for(var R in U){if(U[R].length>0){Q=R.split(H);
T=Q[0];
P=Q[1]===A;
this.__t(O,T,P);
}}delete this.__m[S];
return true;
},__t:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.unregisterEvent(bP,bQ,bR);
return;
}{};
},dispatchEvent:function(V,event){var bb;
var bc=event.getType();

if(!event.getBubbles()&&!this.hasListener(V,bc)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(V);
}var ba=qx.event.Registration.getDispatchers();
var Y;
var X=false;

for(var i=0,l=ba.length;i<l;i++){Y=this.getDispatcher(ba[i]);
if(Y.canDispatchEvent(V,event,bc)){Y.dispatchEvent(V,event,bc);
X=true;
break;
}}
if(!X){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bc+" on "+V);
return true;
}var W=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !W;
},dispose:function(){qx.event.Registration.removeManager(this);
this.__m=this.__l=this.__n=this.__o=this.__r=this.__p=null;
}}});
})();
(function(){var M="qx.client",L='"',K="valueOf",J="toLocaleString",I="isPrototypeOf",H="",G="toString",F="qx.lang.Object",E='\", "',D="hasOwnProperty",C="Use 'clone()' instead!";
qx.Bootstrap.define(F,{statics:{empty:function(N){{};

for(var O in N){if(N.hasOwnProperty(O)){delete N[O];
}}},isEmpty:qx.core.Variant.select(M,{"gecko":function(A){{};
return A.__count__===0;
},"default":function(bb){{};

for(var bc in bb){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(M,{"gecko":function(t,u){{};
return t.__count__>=u;
},"default":function(v,w){{};

if(w<=0){return true;
}var length=0;

for(var x in v){if((++length)>=w){return true;
}}return false;
}}),getLength:qx.core.Variant.select(M,{"gecko":function(B){{};
return B.__count__;
},"default":function(P){{};
var length=0;

for(var Q in P){length++;
}return length;
}}),_shadowedKeys:[I,D,J,G,K],getKeys:qx.core.Variant.select(M,{"mshtml":function(p){{};
var q=[];

for(var s in p){q.push(s);
}var r=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(r.call(p,a[i])){q.push(a[i]);
}}return q;
},"default":function(bd){{};
var be=[];

for(var bf in bd){be.push(bf);
}return be;
}}),getKeysAsString:function(bl){{};
var bm=qx.lang.Object.getKeys(bl);

if(bm.length==0){return H;
}return L+bm.join(E)+L;
},getValues:function(X){{};
var ba=[];
var Y=this.getKeys(X);

for(var i=0,l=Y.length;i<l;i++){ba.push(X[Y[i]]);
}return ba;
},mergeWith:function(k,m,n){{};

if(n===undefined){n=true;
}
for(var o in m){if(n||k[o]===undefined){k[o]=m[o];
}}return k;
},carefullyMergeWith:function(y,z){{};
return qx.lang.Object.mergeWith(y,z,false);
},merge:function(R,S){{};
var T=arguments.length;

for(var i=1;i<T;i++){qx.lang.Object.mergeWith(R,arguments[i]);
}return R;
},copy:function(W){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C);
return qx.lang.Object.clone(W);
},clone:function(g){{};
var h={};

for(var j in g){h[j]=g[j];
}return h;
},invert:function(bg){{};
var bh={};

for(var bi in bg){bh[bg[bi].toString()]=bi;
}return bh;
},getKeyFromValue:function(d,e){{};

for(var f in d){if(d.hasOwnProperty(f)&&d[f]===e){return f;
}}return null;
},contains:function(b,c){{};
return this.getKeyFromValue(b,c)!==null;
},select:function(bj,bk){{};
return bk[bj];
},fromArray:function(U){{};
var V={};

for(var i=0,l=U.length;i<l;i++){{};
V[U[i].toString()]=true;
}return V;
}}});
})();
(function(){var n="Function",m="Boolean",l="Number",k="Array",j="RegExp",i="String",h="Object",g="qx.lang.Type",f="string";
qx.Bootstrap.define(g,{statics:{__u:{"[object String]":i,"[object Array]":k,"[object Object]":h,"[object RegExp]":j,"[object Number]":l,"[object Boolean]":m,"[object Function]":n},getClass:function(q){var r=Object.prototype.toString.call(q);
return (this.__u[r]||r.slice(8,-1));
},isString:function(b){return (typeof b===f||this.getClass(b)==i||b instanceof String||(!!b&&!!b.$$isString));
},isArray:function(e){return (e instanceof Array||this.getClass(e)==k||(!!e&&!!e.$$isArray));
},isObject:function(a){return (a!==undefined&&a!==null&&this.getClass(a)==h);
},isRegExp:function(c){return this.getClass(c)==j;
},isNumber:function(p){return (this.getClass(p)==l||p instanceof Number);
},isBoolean:function(o){return (this.getClass(o)==m||o instanceof Boolean);
},isFunction:function(d){return this.getClass(d)==n;
}}});
})();
(function(){var bK="[Class ",bJ="]",bI="toString",bH="extend",bG="Class",bF="qx.Class",bE="static";
qx.Bootstrap.define(bF,{statics:{define:function(name,bX){if(!bX){var bX={};
}if(bX.include&&!(bX.include instanceof Array)){bX.include=[bX.include];
}if(bX.implement&&!(bX.implement instanceof Array)){bX.implement=[bX.implement];
}if(!bX.hasOwnProperty(bH)&&!bX.type){bX.type=bE;
}{};
var ca=this.__z(name,bX.type,bX.extend,bX.statics,bX.construct,bX.destruct);
if(bX.extend){if(bX.properties){this.__B(ca,bX.properties,true);
}if(bX.members){this.__D(ca,bX.members,true,true,false);
}if(bX.events){this.__A(ca,bX.events,true);
}if(bX.include){for(var i=0,l=bX.include.length;i<l;i++){this.__G(ca,bX.include[i],false);
}}}if(bX.settings){for(var bY in bX.settings){qx.core.Setting.define(bY,bX.settings[bY]);
}}if(bX.variants){for(var bY in bX.variants){qx.core.Variant.define(bY,bX.variants[bY].allowedValues,bX.variants[bY].defaultValue);
}}if(bX.implement){for(var i=0,l=bX.implement.length;i<l;i++){this.__F(ca,bX.implement[i]);
}}{};
if(bX.defer){bX.defer.self=ca;
bX.defer(ca,ca.prototype,{add:function(name,p){var q={};
q[name]=p;
qx.Class.__B(ca,q,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(t,u){{};
qx.Class.__G(t,u,false);
},patch:function(r,s){{};
qx.Class.__G(r,s,true);
},isSubClassOf:function(M,N){if(!M){return false;
}
if(M==N){return true;
}
if(M.prototype instanceof N){return true;
}return false;
},getPropertyDefinition:function(bn,name){while(bn){if(bn.$$properties&&bn.$$properties[name]){return bn.$$properties[name];
}bn=bn.superclass;
}return null;
},getProperties:function(S){var T=[];

while(S){if(S.$$properties){T.push.apply(T,qx.lang.Object.getKeys(S.$$properties));
}S=S.superclass;
}return T;
},getByProperty:function(R,name){while(R){if(R.$$properties&&R.$$properties[name]){return R;
}R=R.superclass;
}return null;
},hasProperty:function(bD,name){return !!this.getPropertyDefinition(bD,name);
},getEventType:function(b,name){var b=b.constructor;

while(b.superclass){if(b.$$events&&b.$$events[name]!==undefined){return b.$$events[name];
}b=b.superclass;
}return null;
},supportsEvent:function(v,name){return !!this.getEventType(v,name);
},hasOwnMixin:function(K,L){return K.$$includes&&K.$$includes.indexOf(L)!==-1;
},getByMixin:function(bO,bP){var bQ,i,l;

while(bO){if(bO.$$includes){bQ=bO.$$flatIncludes;

for(i=0,l=bQ.length;i<l;i++){if(bQ[i]===bP){return bO;
}}}bO=bO.superclass;
}return null;
},getMixins:function(U){var V=[];

while(U){if(U.$$includes){V.push.apply(V,U.$$flatIncludes);
}U=U.superclass;
}return V;
},hasMixin:function(bo,bp){return !!this.getByMixin(bo,bp);
},hasOwnInterface:function(bL,bM){return bL.$$implements&&bL.$$implements.indexOf(bM)!==-1;
},getByInterface:function(c,d){var e,i,l;

while(c){if(c.$$implements){e=c.$$flatImplements;

for(i=0,l=e.length;i<l;i++){if(e[i]===d){return c;
}}}c=c.superclass;
}return null;
},getInterfaces:function(bS){var bT=[];

while(bS){if(bS.$$implements){bT.push.apply(bT,bS.$$flatImplements);
}bS=bS.superclass;
}return bT;
},hasInterface:function(bU,bV){return !!this.getByInterface(bU,bV);
},implementsInterface:function(O,P){var Q=O.constructor;

if(this.hasInterface(Q,P)){return true;
}
try{qx.Interface.assertObject(O,P);
return true;
}catch(bW){}
try{qx.Interface.assert(Q,P,false);
return true;
}catch(bR){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bK+this.classname+bJ;
},$$registry:qx.Bootstrap.$$registry,__v:null,__w:null,__x:function(){},__y:function(){},__z:function(name,w,x,y,z,A){var F;

if(!x&&true){F=y||{};
}else{F={};

if(x){if(!z){z=this.__H();
}F=this.__J(z,name,w);
}if(y){var G;

for(var i=0,a=qx.lang.Object.getKeys(y),l=a.length;i<l;i++){G=a[i];
{F[G]=y[G];
};
var C;
}}}var E=qx.Bootstrap.createNamespace(name,F,false);
F.name=F.classname=name;
F.basename=E;
F.$$type=bG;

if(w){F.$$classtype=w;
}if(!F.hasOwnProperty(bI)){F.toString=this.genericToString;
}
if(x){var H=x.prototype;
var B=this.__I();
B.prototype=H;
var D=new B;
F.prototype=D;
D.name=D.classname=name;
D.basename=E;
z.base=F.superclass=x;
z.self=F.constructor=D.constructor=F;
if(A){{};
F.$$destructor=A;
}}this.$$registry[name]=F;
return F;
},__A:function(bq,br,bs){var bt,bt;

if(bq.$$events){for(var bt in br){bq.$$events[bt]=br[bt];
}}else{bq.$$events=br;
}},__B:function(f,g,h){var k;

if(h===undefined){h=false;
}var j=!!f.$$propertiesAttached;

for(var name in g){k=g[name];
{};
k.name=name;
if(!k.refine){if(f.$$properties===undefined){f.$$properties={};
}f.$$properties[name]=k;
}if(k.init!==undefined){f.prototype["$$init_"+name]=k.init;
}if(k.event!==undefined){var event={};
event[k.event]="qx.event.type.Data";
this.__A(f,event,h);
}if(k.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(j){qx.core.Property.attachMethods(f,name,k);
}}},__C:null,__D:function(W,X,Y,ba,bb){var bc=W.prototype;
var be,bd;

for(var i=0,a=qx.lang.Object.getKeys(X),l=a.length;i<l;i++){be=a[i];
bd=X[be];
{};
if(ba!==false&&bd instanceof Function&&bd.$$type==null){if(bb==true){bd=this.__E(bd,bc[be]);
}else{if(bc[be]){bd.base=bc[be];
}bd.self=W;
}{};
}bc[be]=bd;
}},__E:function(I,J){if(J){return function(){var bm=I.base;
I.base=J;
var bl=I.apply(this,arguments);
I.base=bm;
return bl;
};
}else{return I;
}},__F:function(bi,bj){{};
var bk=qx.Interface.flatten([bj]);

if(bi.$$implements){bi.$$implements.push(bj);
bi.$$flatImplements.push.apply(bi.$$flatImplements,bk);
}else{bi.$$implements=[bj];
bi.$$flatImplements=bk;
}},__G:function(bu,bv,bw){{};

if(this.hasMixin(bu,bv)){qx.log.Logger.warn('Mixin "'+bv.name+'" is already included into Class "'+bu.classname+'" by class: '+this.getByMixin(bu,bv).classname+'!');
return;
}var by=qx.Mixin.flatten([bv]);
var bx;

for(var i=0,l=by.length;i<l;i++){bx=by[i];
if(bx.$$events){this.__A(bu,bx.$$events,bw);
}if(bx.$$properties){this.__B(bu,bx.$$properties,bw);
}if(bx.$$members){this.__D(bu,bx.$$members,bw,bw,bw);
}}if(bu.$$includes){bu.$$includes.push(bv);
bu.$$flatIncludes.push.apply(bu.$$flatIncludes,by);
}else{bu.$$includes=[bv];
bu.$$flatIncludes=by;
}},__H:function(){function bN(){arguments.callee.base.apply(this,arguments);
}return bN;
},__I:function(){return function(){};
},__J:function(bz,name,bA){var bC=function(){var bh=arguments.callee.constructor;
{};
if(!bh.$$propertiesAttached){qx.core.Property.attach(bh);
}var bg=bh.$$original.apply(this,arguments);
if(bh.$$includes){var bf=bh.$$flatIncludes;

for(var i=0,l=bf.length;i<l;i++){if(bf[i].$$constructor){bf[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bg;
};
var bB;
if(bA==="singleton"){bC.getInstance=this.getInstance;
}bC.$$original=bz;
bz.wrapper=bC;
return bC;
}},defer:function(m){var n,m,o;
}});
})();
(function(){var h="qx.dom.Node",g="qx.client",f="";
qx.Class.define(h,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(o){return o.nodeType===
this.DOCUMENT?o:
o.ownerDocument||o.document;
},getWindow:qx.core.Variant.select(g,{"mshtml":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.parentWindow;
},"default":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.defaultView;
}}),getDocumentElement:function(c){return this.getDocument(c).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(e){return !!(e&&e.nodeType!=null);
},isElement:function(d){return !!(d&&d.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);
},getText:function(k){if(!k||!k.nodeType){return null;
}
switch(k.nodeType){case 1:var i,a=[],l=k.childNodes,length=l.length;

for(i=0;i<length;i++){a[i]=this.getText(l[i]);
}return a.join(f);
case 2:return k.nodeValue;
break;
case 3:return k.nodeValue;
break;
}return null;
}}});
})();
(function(){var by="mshtml",bx="qx.client",bw="[object Array]",bv="qx.lang.Array",bu="Use qx.lang.Type.isArray() instead!",bt="qx",bs="number",br="Use the native Array access instead: arr[arr.length - 1]",bq="Use the native Array access instead: arr[0]",bp="string",bo="Use 'clone()' instead!";
qx.Bootstrap.define(bv,{statics:{isArray:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bu);
return qx.lang.Type.isArray(N);
},toArray:function(E,F){return this.cast(E,Array,F);
},cast:function(z,A,B){if(z.constructor===A){return z;
}
if(qx.Class.hasInterface(z,qx.data.IListData)){var z=z.toArray();
}var C=new A;
if(qx.core.Variant.isSet(bx,by)){if(z.item){for(var i=B||0,l=z.length;i<l;i++){C.push(z[i]);
}return C;
}}if(Object.prototype.toString.call(z)===bw&&B==null){C.push.apply(C,z);
}else{C.push.apply(C,Array.prototype.slice.call(z,B||0));
}return C;
},fromArguments:function(H,I){return Array.prototype.slice.call(H,I||0);
},fromCollection:function(bm){if(qx.core.Variant.isSet(bx,by)){if(bm.item){var bn=[];

for(var i=0,l=bm.length;i<l;i++){bn[i]=bm[i];
}return bn;
}}return Array.prototype.slice.call(bm,0);
},fromShortHand:function(a){var c=a.length;
var b=qx.lang.Array.clone(a);
switch(c){case 1:b[1]=b[2]=b[3]=b[0];
break;
case 2:b[2]=b[0];
case 3:b[3]=b[1];
}return b;
},copy:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bo);
return qx.lang.Array.clone(U);
},clone:function(bl){return bl.concat();
},getLast:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,br);
return k[k.length-1];
},getFirst:function(f){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bq);
return f[0];
},insertAt:function(R,S,i){R.splice(i,0,S);
return R;
},insertBefore:function(g,h,j){var i=g.indexOf(j);

if(i==-1){g.push(h);
}else{g.splice(i,0,h);
}return g;
},insertAfter:function(bi,bj,bk){var i=bi.indexOf(bk);

if(i==-1||i==(bi.length-1)){bi.push(bj);
}else{bi.splice(i+1,0,bj);
}return bi;
},removeAt:function(Q,i){return Q.splice(i,1)[0];
},removeAll:function(D){D.length=0;
return this;
},append:function(d,e){{};
Array.prototype.push.apply(d,e);
return d;
},exclude:function(be,bf){{};

for(var i=0,bh=bf.length,bg;i<bh;i++){bg=be.indexOf(bf[i]);

if(bg!=-1){be.splice(bg,1);
}}return be;
},remove:function(V,W){var i=V.indexOf(W);

if(i!=-1){V.splice(i,1);
return W;
}},contains:function(J,K){return J.indexOf(K)!==-1;
},equals:function(O,P){var length=O.length;

if(length!==P.length){return false;
}
for(var i=0;i<length;i++){if(O[i]!==P[i]){return false;
}}return true;
},sum:function(L){var M=0;

for(var i=0,l=L.length;i<l;i++){M+=L[i];
}return M;
},max:function(bb){{};
var i,bd=bb.length,bc=bb[0];

for(i=1;i<bd;i++){if(bb[i]>bc){bc=bb[i];
}}return bc===undefined?null:bc;
},min:function(X){{};
var i,ba=X.length,Y=X[0];

for(i=1;i<ba;i++){if(X[i]<Y){Y=X[i];
}}return Y===undefined?null:Y;
},unique:function(m){var w=[],o={},r={},t={};
var s,n=0;
var x=bt+qx.lang.Date.now();
var p=false,v=false,y=false;
for(var i=0,u=m.length;i<u;i++){s=m[i];
if(s===null){if(!p){p=true;
w.push(s);
}}else if(s===false){if(!v){v=true;
w.push(s);
}}else if(s===true){if(!y){y=true;
w.push(s);
}}else if(typeof s===bp){if(!o[s]){o[s]=1;
w.push(s);
}}else if(typeof s===bs){if(!r[s]){r[s]=1;
w.push(s);
}}else{q=s[x];

if(q==null){q=s[x]=n++;
}
if(!t[q]){t[q]=s;
w.push(s);
}}}for(var q in t){try{delete t[q][x];
}catch(G){try{t[q][x]=null;
}catch(T){throw new Error("Cannot clean-up map entry doneObjects["+q+"]["+x+"]");
}}}return w;
}}});
})();
(function(){var x=":",w=":constructor",v="Use qx.lang.Type.isArray() instead!",u='anonymous',t="anonymous: ",s="qx.lang.Function",r=":constructor wrapper";
qx.Bootstrap.define(s,{statics:{isFunction:function(j){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
return qx.lang.Type.isFunction(j);
},getCaller:function(y){return y.caller?y.caller.callee:y.callee.caller;
},getName:function(z){if(z.$$original){return z.classname+r;
}
if(z.wrapper){return z.wrapper.classname+w;
}
if(z.classname){return z.classname+w;
}
if(z.$$mixin){for(var B in z.$$mixin.$$members){if(z.$$mixin.$$members[B]==z){return z.$$mixin.name+x+B;
}}for(var B in z.$$mixin){if(z.$$mixin[B]==z){return z.$$mixin.name+x+B;
}}}
if(z.self){var C=z.self.constructor;

if(C){for(var B in C.prototype){if(C.prototype[B]==z){return C.classname+x+B;
}}for(var B in C){if(C[B]==z){return C.classname+x+B;
}}}}var A=z.toString().match(/(function\s*\w*\(.*?\))/);

if(A&&A.length>=1&&A[1]){return A[1];
}var A=z.toString().match(/(function\s*\(.*?\))/);

if(A&&A.length>=1&&A[1]){return t+A[1];
}return u;
},globalEval:function(k){if(window.execScript){return window.execScript(k);
}else{return eval.call(window,k);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(I,J){{};
if(!J){return I;
}if(!(J.self||J.args||J.delay!=null||J.periodical!=null||J.attempt)){return I;
}return function(event){{};
var E=qx.lang.Array.fromArguments(arguments);
if(J.args){E=J.args.concat(E);
}
if(J.delay||J.periodical){var D=function(){return I.apply(J.self||this,E);
};

if(J.delay){return setTimeout(D,J.delay);
}
if(J.periodical){return setInterval(D,J.periodical);
}}else if(J.attempt){var F=false;

try{F=I.apply(J.self||this,E);
}catch(c){}return F;
}else{return I.apply(J.self||this,E);
}};
},bind:function(G,self,H){return this.create(G,{self:self,args:H!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:b!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(p===undefined){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,q);
o.apply(self||this,d);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:f!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(g,h,self,i){return this.create(g,{delay:h,self:self,args:i!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(l,m,self,n){return this.create(l,{periodical:m,self:self,args:n!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Bootstrap.define(c,{statics:{__K:{},getManager:function(d){if(d==null){{};
d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__K[f];

if(!e){e=new qx.event.Manager(d);
this.__K[f]=e;
}return e;
},removeManager:function(w){var x=qx.core.ObjectRegistry.toHashCode(w.getWindow());
delete this.__K[x];
},addListener:function(I,J,K,self,L){return this.getManager(I).addListener(I,J,K,self,L);
},removeListener:function(s,t,u,self,v){return this.getManager(s).removeListener(s,t,u,self,v);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(M){return this.getManager(M).removeAllListeners(M);
},hasListener:function(O,P,Q){return this.getManager(O).hasListener(O,P,Q);
},serializeListeners:function(N){return this.getManager(N).serializeListeners(N);
},createEvent:function(i,j,k){{};
if(j==null){j=qx.event.type.Event;
}var l=qx.event.Pool.getInstance().getObject(j);

if(!l){return;
}k?l.init.apply(l,k):l.init();
if(i){l.setType(i);
}return l;
},dispatchEvent:function(g,event){return this.getManager(g).dispatchEvent(g,event);
},fireEvent:function(y,z,A,B){var C;
var D=this.createEvent(z,A||null,B);
return this.getManager(y).dispatchEvent(y,D);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__L:[],addHandler:function(h){{};
this.__L.push(h);
this.__L.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__L;
},__M:[],addDispatcher:function(E,F){{};
this.__M.push(E);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__M;
}}});
})();
(function(){var cq=';',cp='computed=this.',co='=value;',cn='this.',cm='if(this.',cl='!==undefined)',ck='delete this.',cj="set",ci="setThemed",ch='}',bV="setRuntime",bU='else if(this.',bT="init",bS='return this.',bR="string",bQ="boolean",bP="resetThemed",bO='!==undefined){',bN='=true;',bM="resetRuntime",cx="reset",cy="refresh",cv='old=this.',cw='else ',ct='old=computed=this.',cu=' of an instance of ',cr='if(old===computed)return value;',cs='if(old===undefined)old=null;',cz='(value);',cA=' is not (yet) ready!");',ca='===value)return value;',bY='return init;',cc='var init=this.',cb="Error in property ",ce='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cd='.validate.call(this, value);',cg='else{',cf=" in method ",bX='=computed;',bW='(backup);',bb='if(computed===inherit){',bc="inherit",bd='if(value===undefined)prop.error(this,2,"',be='var computed, old=this.',bf='else if(computed===undefined)',bg="': ",bh=" of class ",bi='===undefined)return;',bj="')){",bk='else this.',cE='value=this.',cD='","',cC='if(init==qx.core.Property.$$inherit)init=null;',cB='var inherit=prop.$$inherit;',cI='var computed, old;',cH='computed=undefined;delete this.',cG='",value);',cF='computed=value;',cK=';}',cJ='){',bz='if(computed===undefined||computed===inherit){',bA='!==inherit){',bx='(computed, old, "',by='return value;',bD='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bE="if(reg.hasListener(this, '",bB=')a[i].',bC='.$$properties.',bv="var reg=qx.event.Registration;",bw='return null;',bs='");',br='var pa=this.getLayoutParent();if(pa)computed=pa.',bu='!==undefined&&',bt="', qx.event.type.Data, [computed, old]",bo='var backup=computed;',bn='}else{',bq="object",bp='if(computed===undefined)computed=null;',bm='if(a[i].',bl='throw new Error("Property ',bI=")}",bJ='var prop=qx.core.Property;',bK=" with incoming value '",bL='if(computed===undefined||computed==inherit)computed=null;',bF='if((computed===undefined||computed===inherit)&&',bG="reg.fireEvent(this, '",bH="qx.core.Property";
qx.Class.define(bH,{statics:{__N:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__O:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:bc,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bR,dispose:bQ,inheritable:bQ,nullable:bQ,themeable:bQ,refine:bQ,init:null,apply:bR,event:bR,check:null,transform:bR,deferredInit:bQ,validate:null},$$allowedGroupKeys:{name:bR,group:bq,mode:bR,themeable:bQ},$$inheritable:{},refresh:function(x){var parent=x.getLayoutParent();

if(parent){var A=x.constructor;
var C=this.$$store.inherit;
var B=this.$$store.init;
var z=this.$$method.refresh;
var D;
var y;
{};

while(A){D=A.$$properties;

if(D){for(var name in this.$$inheritable){if(D[name]&&x[z[name]]){y=parent[C[name]];

if(y===undefined){y=parent[B[name]];
}{};
x[z[name]](y);
}}}A=A.superclass;
}}},attach:function(N){var O=N.$$properties;

if(O){for(var name in O){this.attachMethods(N,name,O[name]);
}}N.$$propertiesAttached=true;
},attachMethods:function(L,name,M){M.group?this.__P(L,M,name):this.__Q(L,M,name);
},__P:function(m,n,name){var u=qx.lang.String.firstUp(name);
var t=m.prototype;
var v=n.themeable===true;
{};
var w=[];
var q=[];

if(v){var o=[];
var s=[];
}var r="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
w.push(r);

if(v){o.push(r);
}
if(n.mode=="shorthand"){var p="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
w.push(p);

if(v){o.push(p);
}}
for(var i=0,a=n.group,l=a.length;i<l;i++){{};
w.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
q.push("this.",this.$$method.reset[a[i]],"();");

if(v){{};
o.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
s.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+u;
t[this.$$method.set[name]]=new Function(w.join(""));
this.$$method.reset[name]="reset"+u;
t[this.$$method.reset[name]]=new Function(q.join(""));

if(v){this.$$method.setThemed[name]="setThemed"+u;
t[this.$$method.setThemed[name]]=new Function(o.join(""));
this.$$method.resetThemed[name]="resetThemed"+u;
t[this.$$method.resetThemed[name]]=new Function(s.join(""));
}},__Q:function(b,c,name){var e=qx.lang.String.firstUp(name);
var g=b.prototype;
{};
if(c.dispose===undefined&&typeof c.check==="string"){c.dispose=this.__O[c.check]||qx.Class.isDefined(c.check)||qx.Interface.isDefined(c.check);
}var f=this.$$method;
var d=this.$$store;
d.runtime[name]="$$runtime_"+name;
d.user[name]="$$user_"+name;
d.theme[name]="$$theme_"+name;
d.init[name]="$$init_"+name;
d.inherit[name]="$$inherit_"+name;
d.useinit[name]="$$useinit_"+name;
f.get[name]="get"+e;
g[f.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,b,name,"get");
};
f.set[name]="set"+e;
g[f.set[name]]=function(da){return qx.core.Property.executeOptimizedSetter(this,b,name,"set",arguments);
};
f.reset[name]="reset"+e;
g[f.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"reset");
};

if(c.inheritable||c.apply||c.event||c.deferredInit){f.init[name]="init"+e;
g[f.init[name]]=function(K){return qx.core.Property.executeOptimizedSetter(this,b,name,"init",arguments);
};
}
if(c.inheritable){f.refresh[name]="refresh"+e;
g[f.refresh[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,b,name,"refresh",arguments);
};
}f.setRuntime[name]="setRuntime"+e;
g[f.setRuntime[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,b,name,"setRuntime",arguments);
};
f.resetRuntime[name]="resetRuntime"+e;
g[f.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"resetRuntime");
};

if(c.themeable){f.setThemed[name]="setThemed"+e;
g[f.setThemed[name]]=function(k){return qx.core.Property.executeOptimizedSetter(this,b,name,"setThemed",arguments);
};
f.resetThemed[name]="resetThemed"+e;
g[f.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"resetThemed");
};
}
if(c.check==="Boolean"){g["toggle"+e]=new Function("return this."+f.set[name]+"(!this."+f.get[name]+"())");
g["is"+e]=new Function("return this."+f.get[name]+"()");
}},__R:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cS,cT,cU,cV,cW){var cX=cS.constructor.classname;
var cY=cb+cU+bh+cX+cf+this.$$method[cV][cU]+bK+cW+bg;
throw new Error(cY+(this.__R[cT]||"Unknown reason: "+cT));
},__S:function(E,F,name,G,H,I){var J=this.$$method[G][name];
{F[J]=new Function("value",H.join(""));
};
{};
if(I===undefined){return E[J]();
}else{return E[J](I[0]);
}},executeOptimizedGetter:function(cL,cM,name,cN){var cP=cM.$$properties[name];
var cR=cM.prototype;
var cO=[];
var cQ=this.$$store;
cO.push(cm,cQ.runtime[name],cl);
cO.push(bS,cQ.runtime[name],cq);

if(cP.inheritable){cO.push(bU,cQ.inherit[name],cl);
cO.push(bS,cQ.inherit[name],cq);
cO.push(cw);
}cO.push(cm,cQ.user[name],cl);
cO.push(bS,cQ.user[name],cq);

if(cP.themeable){cO.push(bU,cQ.theme[name],cl);
cO.push(bS,cQ.theme[name],cq);
}
if(cP.deferredInit&&cP.init===undefined){cO.push(bU,cQ.init[name],cl);
cO.push(bS,cQ.init[name],cq);
}cO.push(cw);

if(cP.init!==undefined){if(cP.inheritable){cO.push(cc,cQ.init[name],cq);

if(cP.nullable){cO.push(cC);
}else if(cP.init!==undefined){cO.push(bS,cQ.init[name],cq);
}else{cO.push(bD,name,cu,cM.classname,cA);
}cO.push(bY);
}else{cO.push(bS,cQ.init[name],cq);
}}else if(cP.inheritable||cP.nullable){cO.push(bw);
}else{cO.push(bl,name,cu,cM.classname,cA);
}return this.__S(cL,cR,name,cN,cO);
},executeOptimizedSetter:function(P,Q,name,R,S){var Y=Q.$$properties[name];
var X=Q.prototype;
var U=[];
var T=R===cj||R===ci||R===bV||(R===bT&&Y.init===undefined);
var V=R===cx||R===bP||R===bM;
var W=Y.apply||Y.event||Y.inheritable;

if(R===bV||R===bM){var ba=this.$$store.runtime[name];
}else if(R===ci||R===bP){var ba=this.$$store.theme[name];
}else if(R===bT){var ba=this.$$store.init[name];
}else{var ba=this.$$store.user[name];
}{if(!Y.nullable||Y.check||Y.inheritable){U.push(bJ);
}if(R===cj){U.push(bd,name,cD,R,cG);
}};
if(T){if(Y.transform){U.push(cE,Y.transform,cz);
}if(Y.validate){if(typeof Y.validate===bR){U.push(cn,Y.validate,cz);
}else if(Y.validate instanceof Function){U.push(Q.classname,bC,name);
U.push(cd);
}}}if(W){if(T){U.push(cm,ba,ca);
}else if(V){U.push(cm,ba,bi);
}}if(Y.inheritable){U.push(cB);
}{};

if(!W){if(R===bV){U.push(cn,this.$$store.runtime[name],co);
}else if(R===bM){U.push(cm,this.$$store.runtime[name],cl);
U.push(ck,this.$$store.runtime[name],cq);
}else if(R===cj){U.push(cn,this.$$store.user[name],co);
}else if(R===cx){U.push(cm,this.$$store.user[name],cl);
U.push(ck,this.$$store.user[name],cq);
}else if(R===ci){U.push(cn,this.$$store.theme[name],co);
}else if(R===bP){U.push(cm,this.$$store.theme[name],cl);
U.push(ck,this.$$store.theme[name],cq);
}else if(R===bT&&T){U.push(cn,this.$$store.init[name],co);
}}else{if(Y.inheritable){U.push(be,this.$$store.inherit[name],cq);
}else{U.push(cI);
}U.push(cm,this.$$store.runtime[name],bO);

if(R===bV){U.push(cp,this.$$store.runtime[name],co);
}else if(R===bM){U.push(ck,this.$$store.runtime[name],cq);
U.push(cm,this.$$store.user[name],cl);
U.push(cp,this.$$store.user[name],cq);
U.push(bU,this.$$store.theme[name],cl);
U.push(cp,this.$$store.theme[name],cq);
U.push(bU,this.$$store.init[name],bO);
U.push(cp,this.$$store.init[name],cq);
U.push(cn,this.$$store.useinit[name],bN);
U.push(ch);
}else{U.push(ct,this.$$store.runtime[name],cq);
if(R===cj){U.push(cn,this.$$store.user[name],co);
}else if(R===cx){U.push(ck,this.$$store.user[name],cq);
}else if(R===ci){U.push(cn,this.$$store.theme[name],co);
}else if(R===bP){U.push(ck,this.$$store.theme[name],cq);
}else if(R===bT&&T){U.push(cn,this.$$store.init[name],co);
}}U.push(ch);
U.push(bU,this.$$store.user[name],bO);

if(R===cj){if(!Y.inheritable){U.push(cv,this.$$store.user[name],cq);
}U.push(cp,this.$$store.user[name],co);
}else if(R===cx){if(!Y.inheritable){U.push(cv,this.$$store.user[name],cq);
}U.push(ck,this.$$store.user[name],cq);
U.push(cm,this.$$store.runtime[name],cl);
U.push(cp,this.$$store.runtime[name],cq);
U.push(cm,this.$$store.theme[name],cl);
U.push(cp,this.$$store.theme[name],cq);
U.push(bU,this.$$store.init[name],bO);
U.push(cp,this.$$store.init[name],cq);
U.push(cn,this.$$store.useinit[name],bN);
U.push(ch);
}else{if(R===bV){U.push(cp,this.$$store.runtime[name],co);
}else if(Y.inheritable){U.push(cp,this.$$store.user[name],cq);
}else{U.push(ct,this.$$store.user[name],cq);
}if(R===ci){U.push(cn,this.$$store.theme[name],co);
}else if(R===bP){U.push(ck,this.$$store.theme[name],cq);
}else if(R===bT&&T){U.push(cn,this.$$store.init[name],co);
}}U.push(ch);
if(Y.themeable){U.push(bU,this.$$store.theme[name],bO);

if(!Y.inheritable){U.push(cv,this.$$store.theme[name],cq);
}
if(R===bV){U.push(cp,this.$$store.runtime[name],co);
}else if(R===cj){U.push(cp,this.$$store.user[name],co);
}else if(R===ci){U.push(cp,this.$$store.theme[name],co);
}else if(R===bP){U.push(ck,this.$$store.theme[name],cq);
U.push(cm,this.$$store.init[name],bO);
U.push(cp,this.$$store.init[name],cq);
U.push(cn,this.$$store.useinit[name],bN);
U.push(ch);
}else if(R===bT){if(T){U.push(cn,this.$$store.init[name],co);
}U.push(cp,this.$$store.theme[name],cq);
}else if(R===cy){U.push(cp,this.$$store.theme[name],cq);
}U.push(ch);
}U.push(bU,this.$$store.useinit[name],cJ);

if(!Y.inheritable){U.push(cv,this.$$store.init[name],cq);
}
if(R===bT){if(T){U.push(cp,this.$$store.init[name],co);
}else{U.push(cp,this.$$store.init[name],cq);
}}else if(R===cj||R===bV||R===ci||R===cy){U.push(ck,this.$$store.useinit[name],cq);

if(R===bV){U.push(cp,this.$$store.runtime[name],co);
}else if(R===cj){U.push(cp,this.$$store.user[name],co);
}else if(R===ci){U.push(cp,this.$$store.theme[name],co);
}else if(R===cy){U.push(cp,this.$$store.init[name],cq);
}}U.push(ch);
if(R===cj||R===bV||R===ci||R===bT){U.push(cg);

if(R===bV){U.push(cp,this.$$store.runtime[name],co);
}else if(R===cj){U.push(cp,this.$$store.user[name],co);
}else if(R===ci){U.push(cp,this.$$store.theme[name],co);
}else if(R===bT){if(T){U.push(cp,this.$$store.init[name],co);
}else{U.push(cp,this.$$store.init[name],cq);
}U.push(cn,this.$$store.useinit[name],bN);
}U.push(ch);
}}
if(Y.inheritable){U.push(bz);

if(R===cy){U.push(cF);
}else{U.push(br,this.$$store.inherit[name],cq);
}U.push(bF);
U.push(cn,this.$$store.init[name],bu);
U.push(cn,this.$$store.init[name],bA);
U.push(cp,this.$$store.init[name],cq);
U.push(cn,this.$$store.useinit[name],bN);
U.push(bn);
U.push(ck,this.$$store.useinit[name],cK);
U.push(ch);
U.push(cr);
U.push(bb);
U.push(cH,this.$$store.inherit[name],cq);
U.push(ch);
U.push(bf);
U.push(ck,this.$$store.inherit[name],cq);
U.push(bk,this.$$store.inherit[name],bX);
U.push(bo);
U.push(cs);
U.push(bL);
}else if(W){if(R!==cj&&R!==bV&&R!==ci){U.push(bp);
}U.push(cr);
U.push(cs);
}if(W){if(Y.apply){U.push(cn,Y.apply,bx,name,bs);
}if(Y.event){U.push(bv,bE,Y.event,bj,bG,Y.event,bt,bI);
}if(Y.inheritable&&X._getChildren){U.push(ce);
U.push(bm,this.$$method.refresh[name],bB,this.$$method.refresh[name],bW);
U.push(ch);
}}if(T){U.push(by);
}return this.__S(P,X,name,R,U,S);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var y="$$hash",x="qx.core.ObjectRegistry";
qx.Bootstrap.define(x,{statics:{inShutDown:false,__T:{},__U:0,__V:[],register:function(q){var t=this.__T;

if(!t){return;
}var s=q.$$hash;

if(s==null){var r=this.__V;

if(r.length>0){s=r.pop();
}else{s=(this.__U++).toString(36);
}q.$$hash=s;
}{};
t[s]=q;
},unregister:function(u){var v=u.$$hash;

if(v==null){return;
}var w=this.__T;

if(w&&w[v]){delete w[v];
this.__V.push(v);
}try{delete u.$$hash;
}catch(c){if(u.removeAttribute){u.removeAttribute(y);
}}},toHashCode:function(m){{};
var o=m.$$hash;

if(o!=null){return o;
}var n=this.__V;

if(n.length>0){o=n.pop();
}else{o=(this.__U++).toString(36);
}return m.$$hash=o;
},clearHashCode:function(d){{};
var e=d.$$hash;

if(e!=null){this.__V.push(e);
try{delete d.$$hash;
}catch(z){if(d.removeAttribute){d.removeAttribute(y);
}}}},fromHashCode:function(k){return this.__T[k]||null;
},shutdown:function(){this.inShutDown=true;
var g=this.__T;
var j=[];

for(var h in g){j.push(h);
}j.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var f,i=0,l=j.length;

while(true){try{for(;i<l;i++){h=j[i];
f=g[h];

if(f&&f.dispose){f.dispose();
}}}catch(p){qx.log.Logger.error(this,"Could not dispose object "+f.toString()+": "+p);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__T;
},getRegistry:function(){return this.__T;
}}});
})();
(function(){var d="qx.Mixin",c="]",b="Mixin",a="[Mixin ";
qx.Class.define(d,{statics:{define:function(name,q){if(q){if(q.include&&!(q.include instanceof Array)){q.include=[q.include];
}{};
var s=q.statics?q.statics:{};

for(var r in s){if(s[r] instanceof Function){s[r].$$mixin=s;
}}if(q.construct){s.$$constructor=q.construct;
}
if(q.include){s.$$includes=q.include;
}
if(q.properties){s.$$properties=q.properties;
}
if(q.members){s.$$members=q.members;
}
for(var r in s.$$members){if(s.$$members[r] instanceof Function){s.$$members[r].$$mixin=s;
}}
if(q.events){s.$$events=q.events;
}
if(q.destruct){s.$$destructor=q.destruct;
}}else{var s={};
}s.$$type=b;
s.name=name;
s.toString=this.genericToString;
s.basename=qx.Bootstrap.createNamespace(name,s);
this.$$registry[name]=s;
return s;
},checkCompatibility:function(e){var h=this.flatten(e);
var j=h.length;

if(j<2){return true;
}var n={};
var m={};
var k={};
var g;

for(var i=0;i<j;i++){g=h[i];

for(var f in g.events){if(k[f]){throw new Error('Conflict between mixin "'+g.name+'" and "'+k[f]+'" in member "'+f+'"!');
}k[f]=g.name;
}
for(var f in g.properties){if(n[f]){throw new Error('Conflict between mixin "'+g.name+'" and "'+n[f]+'" in property "'+f+'"!');
}n[f]=g.name;
}
for(var f in g.members){if(m[f]){throw new Error('Conflict between mixin "'+g.name+'" and "'+m[f]+'" in member "'+f+'"!');
}m[f]=g.name;
}}return true;
},isCompatible:function(t,u){var v=qx.Class.getMixins(u);
v.push(t);
return qx.Mixin.checkCompatibility(v);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(o){if(!o){return [];
}var p=o.concat();

for(var i=0,l=o.length;i<l;i++){if(o[i].$$includes){p.push.apply(p,this.flatten(o[i].$$includes));
}}return p;
},genericToString:function(){return a+this.name+c;
},$$registry:{},__W:null,__X:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var D="node",C="error",B="...(+",A="array",z=")",y="info",x="instance",w="string",v="null",u="class",Y="number",X="stringify",W="]",V="unknown",U="function",T="boolean",S="debug",R="map",Q="undefined",P="qx.log.Logger",K=")}",L="#",I="warn",J="document",G="{...(",H="[",E="text[",F="[...(",M="\n",N=")]",O="object";
qx.Bootstrap.define(P,{statics:{__Y:50,__ba:S,setLevel:function(bz){this.__ba=bz;
},getLevel:function(){return this.__ba;
},setTreshold:function(a){this.__Y=a;
},getTreshold:function(){return this.__Y;
},__bb:{},__bc:0,register:function(bt){if(bt.$$id){return;
}var bv=this.__bc++;
this.__bb[bv]=bt;
bt.$$id=bv;
var bu=this.__bd;

for(var i=0,l=bu.length;i<l;i++){bt.process(bu[i]);
}},unregister:function(br){var bs=br.$$id;

if(bs==null){return;
}delete this.__bb[bs];
delete br.$$id;
},debug:function(bp,bq){this.__bf(S,arguments);
},info:function(s,t){this.__bf(y,arguments);
},warn:function(ba,bb){this.__bf(I,arguments);
},error:function(bc,bd){this.__bf(C,arguments);
},trace:function(bw){this.__bf(y,[bw,qx.dev.StackTrace.getStackTrace().join(M)]);
},deprecatedMethodWarning:function(b,c){var e,d;
},deprecatedClassWarning:function(p,q){var r;
},clear:function(){this.__bd=[];
},__bd:[],__be:{debug:0,info:1,warn:2,error:3},__bf:function(be,bf){var bk=this.__be;

if(bk[be]<bk[this.__ba]){return;
}var bh=bf.length<2?null:bf[0];
var bj=bh?1:0;
var bg=[];

for(var i=bj,l=bf.length;i<l;i++){bg.push(this.__bh(bf[i],true));
}var bm=new Date;
var bn={time:bm,offset:bm-qx.Bootstrap.LOADSTART,level:be,items:bg,win:window};
if(bh){if(bh instanceof qx.core.Object){bn.object=bh.$$hash;
}else if(bh.$$type){bn.clazz=bh;
}}var bl=this.__bd;
bl.push(bn);

if(bl.length>(this.__Y+10)){bl.splice(this.__Y,bl.length);
}var bo=this.__bb;

for(var bi in bo){bo[bi].process(bn);
}},__bg:function(bx){if(bx===undefined){return Q;
}else if(bx===null){return v;
}
if(bx.$$type){return u;
}var by=typeof bx;

if(by===U||by==w||by===Y||by===T){return by;
}else if(by===O){if(bx.nodeType){return D;
}else if(bx.classname){return x;
}else if(bx instanceof Array){return A;
}else if(bx instanceof Error){return C;
}else{return R;
}}
if(bx.toString){return X;
}return V;
},__bh:function(f,g){var o=this.__bg(f);
var j=V;

switch(o){case v:case Q:j=o;
break;
case w:case Y:case T:j=f;
break;
case D:if(f.nodeType===9){j=J;
}else if(f.nodeType===3){j=E+f.nodeValue+W;
}else if(f.nodeType===1){j=f.nodeName.toLowerCase();

if(f.id){j+=L+f.id;
}}else{j=D;
}break;
case U:j=qx.lang.Function.getName(f)||o;
break;
case x:j=f.basename+H+f.$$hash+W;
break;
case u:case X:case C:j=f.toString();
break;
case A:if(g){j=[];

for(var i=0,l=f.length;i<l;i++){if(j.length>20){j.push(B+(l-i)+z);
break;
}j.push(this.__bh(f[i],false));
}}else{j=F+f.length+N;
}break;
case R:if(g){var h;
var n=[];

for(var m in f){n.push(m);
}n.sort();
j=[];

for(var i=0,l=n.length;i<l;i++){if(j.length>20){j.push(B+(l-i)+z);
break;
}m=n[i];
h=this.__bh(f[m],false);
h.key=m;
j.push(h);
}}else{var k=0;

for(var m in f){k++;
}j=G+k+K;
}break;
}return {type:o,text:j};
}}});
})();
(function(){var u="]",t="qx.core.Object",s="__bj",r="[",q="Object";
qx.Class.define(t,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:q},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+r+this.$$hash+u;
},base:function(o,p){if(arguments.length===1){return o.callee.base.call(this);
}else{return o.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bd){return bd.callee.self;
},clone:function(){var bg=this.constructor;
var bf=new bg;
var bi=qx.Class.getProperties(bg);
var bh=qx.core.Property.$$store.user;
var bj=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bi.length;i<l;i++){name=bi[i];

if(this.hasOwnProperty(bh[name])){bf[bj[name]](this[bh[name]]);
}}return bf;
},serialize:function(){var w=this.constructor;
var y=qx.Class.getProperties(w);
var z=qx.core.Property.$$store.user;
var name,v;
var x={classname:w.classname,properties:{}};
for(var i=0,l=y.length;i<l;i++){name=y[i];

if(this.hasOwnProperty(z[name])){v=this[z[name]];

if(v instanceof qx.core.Object){x.properties[name]={$$hash:v.$$hash};
}else{x.properties[name]=v;
}}}return x;
},set:function(X,Y){var bb=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(X)){{};
return this[bb[X]](Y);
}else{for(var ba in X){{};
this[bb[ba]](X[ba]);
}return this;
}},get:function(L){var M=qx.core.Property.$$method.get;
{};
return this[M[L]]();
},reset:function(V){var W=qx.core.Property.$$method.reset;
{};
this[W[V]]();
},__bi:qx.event.Registration,addListener:function(D,E,self,F){if(!this.$$disposed){return this.__bi.addListener(this,D,E,self,F);
}return null;
},addListenerOnce:function(bt,bu,self,bv){var bw=function(e){bu.call(self||this,e);
this.removeListener(bt,bw,this,bv);
};
return this.addListener(bt,bw,this,bv);
},removeListener:function(c,d,self,f){if(!this.$$disposed){return this.__bi.removeListener(this,c,d,self,f);
}return false;
},removeListenerById:function(m){if(!this.$$disposed){return this.__bi.removeListenerById(this,m);
}return false;
},hasListener:function(a,b){return this.__bi.hasListener(this,a,b);
},dispatchEvent:function(n){if(!this.$$disposed){return this.__bi.dispatchEvent(this,n);
}return true;
},fireEvent:function(N,O,P){if(!this.$$disposed){return this.__bi.fireEvent(this,N,O,P);
}return true;
},fireNonBubblingEvent:function(I,J,K){if(!this.$$disposed){return this.__bi.fireNonBubblingEvent(this,I,J,K);
}return true;
},fireDataEvent:function(R,S,T,U){if(!this.$$disposed){return this.__bi.fireNonBubblingEvent(this,R,qx.event.type.Data,[S,T||null,!!U]);
}return true;
},__bj:null,setUserData:function(A,B){if(!this.__bj){this.__bj={};
}this.__bj[A]=B;
},getUserData:function(h){if(!this.__bj){return null;
}var j=this.__bj[h];
return j===undefined?null:j;
},__bk:qx.log.Logger,debug:function(C){this.__bk.debug(this,C);
},info:function(G){this.__bk.info(this,G);
},warn:function(bc){this.__bk.warn(this,bc);
},error:function(be){this.__bk.error(this,be);
},trace:function(){this.__bk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var bz=this.constructor;
var bx;

while(bz.superclass){if(bz.$$destructor){bz.$$destructor.call(this);
}if(bz.$$includes){bx=bz.$$flatIncludes;

for(var i=0,l=bx.length;i<l;i++){if(bx[i].$$destructor){bx[i].$$destructor.call(this);
}}}bz=bz.superclass;
}var bA,by;
},_disposeFields:function(g){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(Q){qx.util.DisposeUtil.disposeArray(this,Q);
},_disposeMap:function(k){qx.util.DisposeUtil.disposeMap(this,k);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bk){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(s);
var bn=this.constructor;
var br;
var bs=qx.core.Property.$$store;
var bp=bs.user;
var bq=bs.theme;
var bl=bs.inherit;
var bo=bs.useinit;
var bm=bs.init;

while(bn){br=bn.$$properties;

if(br){for(var name in br){if(br[name].dispose){this[bp[name]]=this[bq[name]]=this[bl[name]]=this[bo[name]]=this[bm[name]]=undefined;
}}}bn=bn.superclass;
}}});
})();
(function(){var x="",w="g",v="0",u='\\$1',t="%",s='-',r="qx.lang.String",q=' ',p='\n',o="undefined";
qx.Bootstrap.define(r,{statics:{camelCase:function(O){return O.replace(/\-([a-z])/g,function(H,I){return I.toUpperCase();
});
},hyphenate:function(y){return y.replace(/[A-Z]/g,function(B){return (s+B.charAt(0).toLowerCase());
});
},capitalize:function(K){return K.replace(/\b[a-z]/g,function(f){return f.toUpperCase();
});
},clean:function(C){return C.replace(/\s+/g,q).trim();
},trimLeft:function(P){return P.replace(/^\s+/,x);
},trimRight:function(J){return J.replace(/\s+$/,x);
},trim:function(N){return N.replace(/^\s+|\s+$/g,x);
},startsWith:function(c,d){return c.substring(0,d.length)===d;
},endsWith:function(a,b){return a.substring(a.length-b.length,a.length)===b;
},pad:function(l,length,m){if(typeof m===o){m=v;
}var n=x;

for(var i=l.length;i<length;i++){n+=m;
}return n+l;
},firstUp:function(M){return M.charAt(0).toUpperCase()+M.substr(1);
},firstLow:function(e){return e.charAt(0).toLowerCase()+e.substr(1);
},contains:function(z,A){return z.indexOf(A)!=-1;
},format:function(h,j){var k=h;

for(var i=0;i<j.length;i++){k=k.replace(new RegExp(t+(i+1),w),j[i]);
}return k;
},escapeRegexpChars:function(g){return g.replace(/([.*+?^${}()|[\]\/\\])/g,u);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(Q){return Q.replace(/<\/?[^>]+>/gi,x);
},stripScripts:function(D,E){var G=x;
var F=D.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){G+=arguments[1]+p;
return x;
});

if(E===true){qx.lang.Function.globalEval(G);
}return F;
}}});
})();
(function(){var u="]",t="function",s="Interface",r="[Interface ",q="qx.Interface";
qx.Class.define(q,{statics:{define:function(name,m){if(m){if(m.extend&&!(m.extend instanceof Array)){m.extend=[m.extend];
}{};
var n=m.statics?m.statics:{};
if(m.extend){n.$$extends=m.extend;
}
if(m.properties){n.$$properties=m.properties;
}
if(m.members){n.$$members=m.members;
}
if(m.events){n.$$events=m.events;
}}else{var n={};
}n.$$type=s;
n.name=name;
n.toString=this.genericToString;
n.basename=qx.Bootstrap.createNamespace(name,n);
qx.Interface.$$registry[name]=n;
return n;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(o){if(!o){return [];
}var p=o.concat();

for(var i=0,l=o.length;i<l;i++){if(o[i].$$extends){p.push.apply(p,this.flatten(o[i].$$extends));
}}return p;
},__bl:function(a,b,c,d){var e=c.$$members;

if(e){for(var g in e){if(qx.lang.Type.isFunction(e[g])){var k=g.match(/^(get|set|reset)(.*)$/);
var j=k&&qx.Class.hasProperty(b,qx.lang.String.firstLow(k[2]));
var f=j||qx.lang.Type.isFunction(a[g]);

if(!f){throw new Error('Implementation of method "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}var h=d===true&&!j&&!qx.Class.hasInterface(b,c);

if(h){a[g]=this.__bo(c,a[g],g,e[g]);
}}else{if(typeof a[g]===undefined){if(typeof a[g]!==t){throw new Error('Implementation of member "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}}}}}},__bm:function(G,H){if(H.$$properties){for(var I in H.$$properties){if(!qx.Class.hasProperty(G,I)){throw new Error('The property "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},__bn:function(v,w){if(w.$$events){for(var x in w.$$events){if(!qx.Class.supportsEvent(v,x)){throw new Error('The event "'+x+'" is not supported by Class "'+v.classname+'"!');
}}}},assertObject:function(y,z){var B=y.constructor;
this.__bl(y,B,z,false);
this.__bm(B,z);
this.__bn(B,z);
var A=z.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assertObject(y,A[i]);
}}},assert:function(C,D,E){this.__bl(C.prototype,C,D,E);
this.__bm(C,D);
this.__bn(C,D);
var F=D.$$extends;

if(F){for(var i=0,l=F.length;i<l;i++){this.assert(C,F[i],E);
}}},genericToString:function(){return r+this.name+u;
},$$registry:{},__bo:function(){},__bp:null,__bq:function(){}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var t="load",s="unload",r="qx.client",q="ready",p="mshtml",o="qx.event.handler.Application",n="complete",m="gecko|opera|webkit",l="left",k="_window",i="DOMContentLoaded",j="shutdown";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this._window=b.getWindow();
this.__br=false;
this.__bs=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bt:false,onScriptLoaded:function(){this.__bt=true;
var a=qx.event.handler.Application.$$instance;

if(a){a.__bu();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(c,d,e){},unregisterEvent:function(w,x,y){},__bu:function(){var g=qx.event.handler.Application;
if(!this.__bv&&this.__br&&g.__bt){this.__bv=true;
qx.event.Registration.fireEvent(this._window,q);
}},isApplicationReady:function(){return this.__bv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==n){this.__br=true;
this.__bu();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(r,m)){qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(r,p)){var f=function(){try{document.documentElement.doScroll(l);
this._onNativeLoadWrapped();
}catch(h){setTimeout(f,100);
}};
f();
}qx.bom.Event.addNativeListener(this._window,t,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,s,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,s,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:function(e){this.__br=true;
this.__bu();
},_onNativeUnload:function(e){if(!this.__bw){this.__bw=true;

try{qx.event.Registration.fireEvent(this._window,j);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},destruct:function(){this._stopObserver();
this._disposeFields(k);
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var k='"',j="qx.lang.Core",h="\\\\",g="\\\"",f="[object Error]";
qx.Bootstrap.define(j);
if(!Error.prototype.toString||Error.prototype.toString()==f){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(v,w){if(w==null){w=0;
}else if(w<0){w=Math.max(0,this.length+w);
}
for(var i=w;i<this.length;i++){if(this[i]===v){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(o,p){if(p==null){p=this.length-1;
}else if(p<0){p=Math.max(0,this.length+p);
}
for(var i=p;i>=0;i--){if(this[i]===o){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(m,n){var l=this.length;

for(var i=0;i<l;i++){m.call(n,this[i],i,this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(c,d){var l=this.length;
var e=[];

for(var i=0;i<l;i++){if(c.call(d,this[i],i,this)){e.push(this[i]);
}}return e;
};
}
if(!Array.prototype.map){Array.prototype.map=function(s,t){var l=this.length;
var u=[];

for(var i=0;i<l;i++){u.push(s.call(t,this[i],i,this));
}return u;
};
}
if(!Array.prototype.some){Array.prototype.some=function(q,r){var l=this.length;

for(var i=0;i<l;i++){if(q.call(r,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(a,b){var l=this.length;

for(var i=0;i<l;i++){if(!a.call(b,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return k+this.replace(/\\/g,h).replace(/\"/g,g)+k;
};
}})();
(function(){var u="indexOf",t="lastIndexOf",r="slice",q="concat",p="join",o="toLocaleUpperCase",n="shift",m="substr",k="filter",j="unshift",Q="match",P="quote",O="qx.lang.Generics",N="localeCompare",M="sort",L="some",K="charAt",J="split",I="substring",H="pop",B="toUpperCase",C="replace",z="push",A="charCodeAt",x="every",y="reverse",v="search",w="forEach",D="map",E="toLowerCase",G="splice",F="toLocaleLowerCase";
qx.Bootstrap.define(O,{statics:{__bx:{"Array":[p,y,M,z,H,n,j,G,q,r,u,t,w,D,k,L,x],"String":[P,I,E,B,K,A,u,t,F,o,N,Q,v,C,J,m,q,r]},__by:function(g,h){return function(s){return g.prototype[h].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bz:function(){var a=qx.lang.Generics.__bx;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__by(c,d);
}}}}},defer:function(f){f.__bz();
}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(y){var G=this.getStackTraceFromError(y);
qx.lang.Array.removeAt(G,0);
var E=this.getStackTraceFromCaller(arguments);
var C=E.length>G.length?E:G;

for(var i=0;i<Math.min(E.length,G.length);i++){var D=E[i];

if(D.indexOf(g)>=0){continue;
}var K=D.split(j);

if(K.length!=2){continue;
}var I=K[0];
var B=K[1];
var A=G[i];
var L=A.split(j);
var H=L[0];
var z=L[1];

if(qx.Class.getByName(H)){var F=H;
}else{F=I;
}var J=F+j;

if(B){J+=B+j;
}J+=z;
C[i]=J;
}return C;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var bb;

try{bb.bar();
}catch(U){var bc=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(bc,0);
return bc;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(T){return [];
},"default":function(M){var R=[];
var Q=qx.lang.Function.getCaller(M);
var N={};

while(Q){var O=qx.lang.Function.getName(Q);
R.push(O);

try{Q=Q.caller;
}catch(S){break;
}
if(!Q){break;
}var P=qx.core.ObjectRegistry.toHashCode(Q);

if(N[P]){R.push(f);
break;
}N[P]=Q;
}return R;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(r){if(!r.stack){return [];
}var x=/@(.+):(\d+)$/gm;
var s;
var t=[];

while((s=x.exec(r.stack))!=null){var u=s[1];
var w=s[2];
var v=this.__bA(u);
t.push(v+j+w);
}return t;
},"webkit":function(ba){if(ba.sourceURL&&ba.line){return [this.__bA(ba.sourceURL)+j+ba.line];
}else{return [];
}},"opera":function(k){if(k.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var n=qx.lang.String.trim(k.message.split("Backtrace:")[1]);
var o=n.split(c);

for(var i=0;i<o.length;i++){var l=o[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(l&&l.length>=2){var q=l[1];
var p=this.__bA(l[2]);
m.push(p+j+q);
}}return m;
},"default":function(){return [];
}}),__bA:function(V){var Y=b;
var W=V.indexOf(Y);
var X=(W==-1)?V:V.substring(W+Y.length).replace(/\//g,a).replace(/\.js$/,d);
return X;
}}});
})();
(function(){var g="qx.event.type.Data",f="qx.event.type.Event",e="qx.data.IListData";
qx.Interface.define(e,{events:{"change":g,"changeLength":f},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="_originalTarget",d="_relatedTarget",c="qx.event.type.Event",b="_target",a="_currentTarget";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(p,q){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!p;
this._cancelable=!!q;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(j){if(j){var k=j;
}else{var k=qx.event.Pool.getInstance().getObject(this.constructor);
}k._type=this._type;
k._target=this._target;
k._currentTarget=this._currentTarget;
k._relatedTarget=this._relatedTarget;
k._originalTarget=this._originalTarget;
k._stopPropagation=this._stopPropagation;
k._bubbles=this._bubbles;
k._preventDefault=this._preventDefault;
k._cancelable=this._cancelable;
return k;
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(g){this._type=g;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(f){this._eventPhase=f;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(o){this._target=o;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(h){this._currentTarget=h;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(m){this._relatedTarget=m;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(n){this._bubbles=n;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(l){this._cancelable=l;
}},destruct:function(){this._disposeFields(b,a,d,e);
}});
})();
(function(){var h="Better use 'getData'",g="__bB",f="Better use 'getOldData'",e="__bC",d="qx.event.type.Data";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(a,b,c){arguments.callee.base.call(this,false,c);
this.__bB=a;
this.__bC=b;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
j.__bB=this.__bB;
j.__bC=this.__bC;
return j;
},getData:function(){return this.__bB;
},getOldData:function(){return this.__bC;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__bB;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.__bC;
}},destruct:function(){this._disposeFields(g,e);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(k){arguments.callee.base.call(this);
this.__bD={};

if(k!==undefined){this.setSize(k);
}},properties:{size:{check:a,init:null,nullable:true}},members:{__bD:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__bD[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(c){if(!this.__bD){return;
}var d=c.classname;
var e=this.__bD[d];

if(c.$$pooled){throw new Error("Object is already pooled: "+c);
}
if(!e){this.__bD[d]=e=[];
}var f=this.getSize()||Infinity;

if(e.length>f){this.warn("Cannot pool "+c+" because the pool is already full.");
c.dispose();
return;
}c.$$pooled=true;
e.push(c);
}},destruct:function(){var o=this.__bD;
var m,n,i,l;

for(m in o){n=o[m];

for(i=0,l=n.length;i<l;i++){n[i].dispose();
}}delete this.__bD;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var j="qx.event.dispatch.Direct";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var g=this._manager.getListeners(e,f,false);

if(g){for(var i=0,l=g.length;i<l;i++){var h=g[i].context||e;
g[i].handler.call(h,event);
}}}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var M="",L="get",K="change",J=".",I="last",H="]",G="[",F="Number",E="String",D="deepBinding",bd="' (",bc="Boolean",bb=").",ba="set",Y=") to the object '",X="item",W="Integer",V="reset",U="qx.data.SingleValueBinding",T="No event could be found for the property",R="PositiveNumber",S="Binding from '",P="PositiveInteger",Q="Binding does not exist!",N="model",O="Date";
qx.Class.define(U,{statics:{DEBUG_ON:false,__bE:{},bind:function(bR,bS,bT,bU,bV){var cb=bS.split(J);
var bX=this.__bL(cb);
var ce=[];
var cf=[];
var cc=[];
var bY=[];
var ca=bR;
for(var i=0;i<cb.length;i++){if(bX[i]!==M){bY.push(K);
}else{bY.push(this.__bG(ca,cb[i]));
}ce[i]=ca;
if(i==cb.length-1){if(bX[i]!==M){var ci=bX[i]===I?ca.length-1:bX[i];
var bW=ca.getItem(ci);
this.__bK(bW,bT,bU,bV);
cc[i]=this.__bM(ca,bY[i],bT,bU,bV,bX[i]);
}else{if(cb[i]!=null&&ca[L+qx.lang.String.firstUp(cb[i])]!=null){var bW=ca[L+qx.lang.String.firstUp(cb[i])]();
this.__bK(bW,bT,bU,bV);
}cc[i]=this.__bM(ca,bY[i],bT,bU,bV);
}}else{var cg={index:i,propertyNames:cb,sources:ce,listenerIds:cc,arrayIndexValues:bX,targetObject:bT,targetProperty:bU,options:bV,listeners:cf};
var cd=qx.lang.Function.bind(this.__bF,this,cg);
cf.push(cd);
cc[i]=ca.addListener(bY[i],cd);
}if(ca[L+qx.lang.String.firstUp(cb[i])]==null){ca=null;
}else if(bX[i]!==M){ca=ca[L+qx.lang.String.firstUp(cb[i])](bX[i]);
}else{ca=ca[L+qx.lang.String.firstUp(cb[i])]();
}
if(!ca){break;
}}var ch={type:D,listenerIds:cc,sources:ce};
this.__bN(ch,bR,bS,bT,bU);
return ch;
},__bF:function(bn){if(bn.options&&bn.options.onUpdate){bn.options.onUpdate(bn.sources[bn.index],bn.targetObject);
}for(var j=bn.index+1;j<bn.propertyNames.length;j++){var br=bn.sources[j];
bn.sources[j]=null;

if(!br){continue;
}br.removeListenerById(bn.listenerIds[j]);
}var br=bn.sources[bn.index];
for(var j=bn.index+1;j<bn.propertyNames.length;j++){if(bn.arrayIndexValues[j-1]!==M){br=br[L+qx.lang.String.firstUp(bn.propertyNames[j-1])](bn.arrayIndexValues[j-1]);
}else{br=br[L+qx.lang.String.firstUp(bn.propertyNames[j-1])]();
}bn.sources[j]=br;
if(!br){this.__bH(bn.targetObject,bn.targetProperty);
break;
}if(j==bn.propertyNames.length-1){if(qx.Class.implementsInterface(br,qx.data.IListData)){var bs=bn.arrayIndexValues[j]===I?br.length-1:bn.arrayIndexValues[j];
var bp=br.getItem(bs);
this.__bK(bp,bn.targetObject,bn.targetProperty,bn.options);
bn.listenerIds[j]=this.__bM(br,K,bn.targetObject,bn.targetProperty,bn.options,bn.arrayIndexValues[j]);
}else{if(bn.propertyNames[j]!=null&&br[L+qx.lang.String.firstUp(bn.propertyNames[j])]!=null){var bp=br[L+qx.lang.String.firstUp(bn.propertyNames[j])]();
this.__bK(bp,bn.targetObject,bn.targetProperty,bn.options);
}var bq=this.__bG(br,bn.propertyNames[j]);
bn.listenerIds[j]=this.__bM(br,bq,bn.targetObject,bn.targetProperty,bn.options);
}}else{if(bn.listeners[j]==null){var bo=qx.lang.Function.bind(this.__bF,this,bn);
bn.listeners.push(bo);
}if(qx.Class.implementsInterface(br,qx.data.IListData)){var bq=K;
}else{var bq=this.__bG(br,bn.propertyNames[j]);
}bn.listenerIds[j]=br.addListener(bq,bn.listeners[j]);
}}},__bG:function(be,bf){var bg=this.__bP(be,bf);
if(bg==null){if(qx.Class.supportsEvent(be.constructor,bf)){bg=bf;
}else if(qx.Class.supportsEvent(be.constructor,K+qx.lang.String.firstUp(bf))){bg=K+qx.lang.String.firstUp(bf);
}else{throw new qx.core.AssertionError(T,bf);
}}return bg;
},__bH:function(bB,bC){var bD=this.__bJ(bB,bC);

if(bD!=null){var bE=bC.substring(bC.lastIndexOf(J)+1,bC.length);
bD[V+qx.lang.String.firstUp(bE)]();
}},__bI:function(bh,bi,bj){var bk=this.__bJ(bh,bi);

if(bk!=null){var bl=bi.substring(bi.lastIndexOf(J)+1,bi.length);
bk[ba+qx.lang.String.firstUp(bl)](bj);
}},__bJ:function(x,y){var B=y.split(J);
var C=x;
for(var i=0;i<B.length-1;i++){try{var A=B[i];
if(A.indexOf(H)==A.length-1){var z=A.substring(A.indexOf(G)+1,A.length-1);
A=A.substring(0,A.indexOf(G));
}C=C[L+qx.lang.String.firstUp(A)]();

if(z!=null){if(z==I){z=C.length-1;
}C=C.getItem(z);
z=null;
}}catch(bm){return null;
}}return C;
},__bK:function(bN,bO,bP,bQ){if(bN==null){this.__bH(bO,bP);
}bN=this.__bO(bN,bO,bP,bQ);
if(bN!=undefined){this.__bI(bO,bP,bN);
}},__bL:function(c){var d=[];
for(var i=0;i<c.length;i++){var name=c[i];
if(qx.lang.String.endsWith(name,H)){var f=name.substring(name.indexOf(G)+1,name.indexOf(H));
if(name.indexOf(H)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(f!==I){if(f==M||isNaN(parseInt(f))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}c[i]=name.substring(0,name.indexOf(G));
d[i]=M;
d[i+1]=f;
c.splice(i+1,0,X);
i++;
}else{d[i]=M;
}}return d;
},__bM:function(cj,ck,cl,cm,cn,co){var cp;
var cr=function(n,e){if(n!==M){if(n===I){n=cj.length-1;
}var q=cj.getItem(n);
if(q==undefined){qx.data.SingleValueBinding.__bH(cl,cm);
}var o=e.getData().start;
var p=e.getData().end;

if(n<o||n>p){return;
}}else{var q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cj+" by "+ck+" to "+cl+" ("+cm+")");
qx.log.Logger.debug("Data before conversion: "+q);
}q=qx.data.SingleValueBinding.__bO(q,cl,cm,cn);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+q);
}try{if(q!=undefined){qx.data.SingleValueBinding.__bI(cl,cm,q);
}else{qx.data.SingleValueBinding.__bH(cl,cm);
}if(cn&&cn.onUpdate){cn.onUpdate(cj,cl,q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cn&&cn.onSetFail){cn.onSetFail(e);
}else{this.warn("Failed so set value "+q+" on "+cl+". Error message: "+e);
}}};
if(!co){co=M;
}cr=qx.lang.Function.bind(cr,cj,co);
var cq=cj.addListener(ck,cr);
return cq;
},__bN:function(bw,bx,by,bz,bA){if(this.__bE[bx.toHashCode()]===undefined){this.__bE[bx.toHashCode()]=[];
}this.__bE[bx.toHashCode()].push([bw,bx,by,bz,bA]);
},__bO:function(bF,bG,bH,bI){if(bI&&bI.converter){return bI.converter(bF,bG.getUserData(N));
}else{var bL=this.__bJ(bG,bH);
var bM=bH.substring(bH.lastIndexOf(J)+1,bH.length);
if(bL==null){return bF;
}var bK=qx.Class.getPropertyDefinition(bL.constructor,bM);
var bJ=bK==null?M:bK.check;
return this.__bQ(bF,bJ);
}},__bP:function(k,l){var m=qx.Class.getPropertyDefinition(k.constructor,l);

if(m==null){return null;
}return m.event;
},__bQ:function(s,t){var u=qx.lang.Type.getClass(s);
if((u==F||u==E)&&(t==W||t==P)){s=parseInt(s);
}if((u==bc||u==F||u==O)&&t==E){s=s+M;
}if((u==F||u==E)&&(t==F||t==R)){s=parseFloat(s);
}return s;
},removeBindingFromObject:function(bt,bu){if(bu.type==D){for(var i=0;i<bu.sources.length;i++){if(bu.sources[i]){bu.sources[i].removeListenerById(bu.listenerIds[i]);
}}}else{bt.removeListenerById(bu);
}var bv=this.__bE[bt.toHashCode()];
if(bv!=undefined){for(var i=0;i<bv.length;i++){if(bv[i][0]==bu){qx.lang.Array.remove(bv,bv[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(a){{};
var b=this.__bE[a.toHashCode()];
for(var i=b.length-1;i>=0;i--){this.removeBindingFromObject(a,b[i][0]);
}},getAllBindingsForObject:function(r){if(this.__bE[r.toHashCode()]===undefined){this.__bE[r.toHashCode()]=[];
}return this.__bE[r.toHashCode()];
},removeAllBindings:function(){for(var h in this.__bE){var g=qx.core.ObjectRegistry.fromHashCode(h);
if(g==null){delete this.__bE[h];
continue;
}this.removeAllBindingsForObject(g);
}this.__bE={};
},getAllBindings:function(){return this.__bE;
},showBindingInLog:function(cs,ct){var cv;
for(var i=0;i<this.__bE[cs.toHashCode()].length;i++){if(this.__bE[cs.toHashCode()][i][0]==ct){cv=this.__bE[cs.toHashCode()][i];
break;
}}
if(cv===undefined){var cu=Q;
}else{var cu=S+cv[1]+bd+cv[2]+Y+cv[3]+bd+cv[4]+bb;
}qx.log.Logger.debug(cu);
},showAllBindingsInLog:function(){for(var w in this.__bE){var v=qx.core.ObjectRegistry.fromHashCode(w);

for(var i=0;i<this.__bE[w].length;i++){this.showBindingInLog(v,this.__bE[w][i][0]);
}}}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bR=d||c;
this.__bS=e||c;
},members:{__bR:null,__bS:null,getComment:function(){return this.__bR;
},message:function(){return this.__bS;
},toString:function(){return this.__bR+b+this.__bS;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bT=qx.dev.StackTrace.getStackTrace();
},members:{__bT:null,getStackTrace:function(){return this.__bT;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var g="qx.util.DisposeUtil";
qx.Class.define(g,{statics:{disposeFields:function(p,q){var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(n,o){var name;

for(var i=0,l=o.length;i<l;i++){name=o[i];

if(n[name]==null||!n.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(n[name].dispose){n[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}n[name]=null;
}},disposeArray:function(h,j){var m=h[j];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{var k;

for(var i=m.length-1;i>=0;i--){k=m[i];

if(k){k.dispose();
}}}catch(e){throw new Error("The array field: "+j+" of object: "+h+" has non disposable entries: "+e);
}m.length=0;
h[j]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(f){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+f);
}a[b]=null;
}}});
})();
(function(){var w="abstract",v="qx.event.dispatch.AbstractBubbling";
qx.Class.define(v,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:w,construct:function(x){this._manager=x;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var m="__bV",l="qx.event.handler.UserAction",k="__bU";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__bU=j;
this.__bV=j.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(e,f){},registerEvent:function(a,b,c){},unregisterEvent:function(g,h,i){}},destruct:function(){this._disposeFields(k,m);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var x="keydown",w="keypress",v="qx.client",u="NumLock",t="keyup",s="Enter",r="0",q="9",p="-",o="PageUp",bI="+",bH="PrintScreen",bG="gecko",bF="A",bE="Z",bD="Left",bC="F5",bB="Down",bA="Up",bz="F11",E="F6",F="useraction",C="F3",D="keyinput",A="Insert",B="F8",y="End",z="/",M="Delete",N="*",bc="F1",X="F4",bk="Home",bf="F2",bv="F12",bp="PageDown",S="F7",by="F9",bx="F10",bw="Right",Q="text",U="Escape",W="webkit",ba="__bY",bd="5",bg="3",bm="Meta",br="7",G="CapsLock",H="input",T="Control",bj="Space",bi="Tab",bh="Shift",bo="Pause",bn="Unidentified",be="qx.event.handler.Keyboard",bl="__bX",l="mshtml",bq="mshtml|webkit",I="6",J="__bW",Y="off",m="Apps",n="4",P="Alt",K="2",L="Scroll",O="1",bb="8",bt="Win",bs="__ca",V="autoComplete",bu=",",R="Backspace";
qx.Class.define(be,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cp){arguments.callee.base.call(this);
this.__bW=cp;
this.__bX=cp.getWindow();
if(qx.core.Variant.isSet(v,bG)){this.__bY=this.__bX;
}else{this.__bY=this.__bX.document.documentElement;
}this.__ca={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(k){if(this._identifierToKeyCodeMap[k]){return true;
}
if(k.length!=1){return false;
}
if(k>=r&&k<=q){return true;
}
if(k>=bF&&k<=bE){return true;
}
switch(k){case bI:case p:case N:case z:return true;
default:return false;
}}},members:{__cb:null,__bW:null,__bX:null,__bY:null,__ca:null,canHandleEvent:function(i,j){},registerEvent:function(a,b,c){},unregisterEvent:function(cb,cc,cd){},_fireInputEvent:function(cH,cI){var cJ=this.__bW.getHandler(qx.event.handler.Focus);
var cK=cJ.getActive();
if(!cK||cK.offsetWidth==0){cK=cJ.getFocus();
}if(cK&&cK.offsetWidth!=0){var event=qx.event.Registration.createEvent(D,qx.event.type.KeyInput,[cH,cK,cI]);
this.__bW.dispatchEvent(cK,event);
}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,F,qx.event.type.Data,[D]);
}},_fireSequenceEvent:function(ce,cf,cg){var ch=this.__bW.getHandler(qx.event.handler.Focus);
var cj=ch.getActive();
if(!cj||cj.offsetWidth==0){cj=ch.getFocus();
}if(!cj||cj.offsetWidth==0){cj=this.__bW.getWindow().document.body;
}var event=qx.event.Registration.createEvent(cf,qx.event.type.KeySequence,[ce,cj,cg]);
this.__bW.dispatchEvent(cj,event);
if(qx.core.Variant.isSet(v,bq)){if(cf==x&&event.getDefaultPrevented()){var ci=ce.keyCode;

if(!(this._isNonPrintableKeyCode(ci)||ci==8||ci==9)){this._fireSequenceEvent(ce,w,cg);
}}}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,F,qx.event.type.Data,[cf]);
}},_initKeyObserver:function(){this.__cb=qx.lang.Function.listener(this.__cd,this);
this.__cc=qx.lang.Function.listener(this.__cg,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__bY,t,this.__cb);
Event.addNativeListener(this.__bY,x,this.__cb);
Event.addNativeListener(this.__bY,w,this.__cc);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__bY,t,this.__cb);
Event.removeNativeListener(this.__bY,x,this.__cb);
Event.removeNativeListener(this.__bY,w,this.__cc);

for(var cr in (this.__cf||{})){var cq=this.__cf[cr];
Event.removeNativeListener(cq.target,w,cq.callback);
}delete (this.__cf);
},__cd:qx.core.Variant.select(v,{"mshtml":function(cD){cD=window.event||cD;
var cG=cD.keyCode;
var cE=0;
var cF=cD.type;
if(!(this.__ca[cG]==x&&cF==x)){this._idealKeyHandler(cG,cE,cF,cD);
}if(cF==x){if(this._isNonPrintableKeyCode(cG)||cG==8||cG==9){this._idealKeyHandler(cG,cE,w,cD);
}}this.__ca[cG]=cF;
},"gecko":function(bR){var bV=this._keyCodeFix[bR.keyCode]||bR.keyCode;
var bT=bR.charCode;
var bU=bR.type;
if(qx.bom.client.Platform.WIN){var bS=bV?this._keyCodeToIdentifier(bV):this._charCodeToIdentifier(bT);

if(!(this.__ca[bS]==x&&bU==x)){this._idealKeyHandler(bV,bT,bU,bR);
}this.__ca[bS]=bU;
}else{this._idealKeyHandler(bV,bT,bU,bR);
}this.__ce(bR.target,bU,bV);
},"webkit":function(ck){var cn=0;
var cl=0;
var cm=ck.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cm==t||cm==x){cn=this._charCode2KeyCode[ck.charCode]||ck.keyCode;
}else{if(this._charCode2KeyCode[ck.charCode]){cn=this._charCode2KeyCode[ck.charCode];
}else{cl=ck.charCode;
}}this._idealKeyHandler(cn,cl,cm,ck);
}else{cn=ck.keyCode;
if(!(this.__ca[cn]==x&&cm==x)){this._idealKeyHandler(cn,cl,cm,ck);
}if(cm==x){if(this._isNonPrintableKeyCode(cn)||cn==8||cn==9){this._idealKeyHandler(cn,cl,w,ck);
}}this.__ca[cn]=cm;
}},"opera":function(d){this._idealKeyHandler(d.keyCode,0,d.type,d);
}}),__ce:qx.core.Variant.select(v,{"gecko":function(e,f,g){if(f===x&&(g==33||g==34||g==38||g==40)&&e.type==Q&&e.tagName.toLowerCase()===H&&e.getAttribute(V)!==Y){if(!this.__cf){this.__cf={};
}var h=qx.core.ObjectRegistry.toHashCode(e);

if(this.__cf[h]){return;
}var self=this;
this.__cf[h]={target:e,callback:function(co){qx.bom.Event.stopPropagation(co);
self.__cg(co);
}};
qx.bom.Event.addNativeListener(e,w,this.__cf[h].callback);
}},"default":null}),__cg:qx.core.Variant.select(v,{"mshtml":function(bM){bM=window.event||bM;

if(this._charCode2KeyCode[bM.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bM.keyCode],0,bM.type,bM);
}else{this._idealKeyHandler(0,bM.keyCode,bM.type,bM);
}},"gecko":function(cy){var cB=this._keyCodeFix[cy.keyCode]||cy.keyCode;
var cz=cy.charCode;
var cA=cy.type;
this._idealKeyHandler(cB,cz,cA,cy);
},"webkit":function(bN){if(qx.bom.client.Engine.VERSION<525.13){var bQ=0;
var bO=0;
var bP=bN.type;

if(bP==t||bP==x){bQ=this._charCode2KeyCode[bN.charCode]||bN.keyCode;
}else{if(this._charCode2KeyCode[bN.charCode]){bQ=this._charCode2KeyCode[bN.charCode];
}else{bO=bN.charCode;
}}this._idealKeyHandler(bQ,bO,bP,bN);
}else{if(this._charCode2KeyCode[bN.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bN.keyCode],0,bN.type,bN);
}else{this._idealKeyHandler(0,bN.keyCode,bN.type,bN);
}}},"opera":function(cC){if(this._keyCodeToIdentifierMap[cC.keyCode]){this._idealKeyHandler(cC.keyCode,0,cC.type,cC);
}else{this._idealKeyHandler(0,cC.keyCode,cC.type,cC);
}}}),_idealKeyHandler:function(ct,cu,cv,cw){if(!ct&&!cu){return;
}var cx;
if(ct){cx=this._keyCodeToIdentifier(ct);
this._fireSequenceEvent(cw,cv,cx);
}else{cx=this._charCodeToIdentifier(cu);
this._fireSequenceEvent(cw,w,cx);
this._fireInputEvent(cw,cu);
}},_specialCharCodeMap:{8:R,9:bi,13:s,27:U,32:bj},_keyCodeToIdentifierMap:{16:bh,17:T,18:P,20:G,224:bm,37:bD,38:bA,39:bw,40:bB,33:o,34:bp,35:y,36:bk,45:A,46:M,112:bc,113:bf,114:C,115:X,116:bC,117:E,118:S,119:B,120:by,121:bx,122:bz,123:bv,144:u,44:bH,145:L,19:bo,91:bt,93:m},_numpadToCharCode:{96:r.charCodeAt(0),97:O.charCodeAt(0),98:K.charCodeAt(0),99:bg.charCodeAt(0),100:n.charCodeAt(0),101:bd.charCodeAt(0),102:I.charCodeAt(0),103:br.charCodeAt(0),104:bb.charCodeAt(0),105:q.charCodeAt(0),106:N.charCodeAt(0),107:bI.charCodeAt(0),109:p.charCodeAt(0),110:bu.charCodeAt(0),111:z.charCodeAt(0)},_charCodeA:bF.charCodeAt(0),_charCodeZ:bE.charCodeAt(0),_charCode0:r.charCodeAt(0),_charCode9:q.charCodeAt(0),_isNonPrintableKeyCode:function(bJ){return this._keyCodeToIdentifierMap[bJ]?true:false;
},_isIdentifiableKeyCode:function(bK){if(bK>=this._charCodeA&&bK<=this._charCodeZ){return true;
}if(bK>=this._charCode0&&bK<=this._charCode9){return true;
}if(this._specialCharCodeMap[bK]){return true;
}if(this._numpadToCharCode[bK]){return true;
}if(this._isNonPrintableKeyCode(bK)){return true;
}return false;
},_keyCodeToIdentifier:function(cL){if(this._isIdentifiableKeyCode(cL)){var cM=this._numpadToCharCode[cL];

if(cM){return String.fromCharCode(cM);
}return (this._keyCodeToIdentifierMap[cL]||this._specialCharCodeMap[cL]||String.fromCharCode(cL));
}else{return bn;
}},_charCodeToIdentifier:function(cs){return this._specialCharCodeMap[cs]||String.fromCharCode(cs).toUpperCase();
},_identifierToKeyCode:function(bL){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bL]||bL.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(J,bl,ba,bs);
},defer:function(bW,bX,bY){qx.event.Registration.addHandler(bW);
if(!bW._identifierToKeyCodeMap){bW._identifierToKeyCodeMap={};

for(var ca in bX._keyCodeToIdentifierMap){bW._identifierToKeyCodeMap[bX._keyCodeToIdentifierMap[ca]]=parseInt(ca,10);
}
for(var ca in bX._specialCharCodeMap){bW._identifierToKeyCodeMap[bX._specialCharCodeMap[ca]]=parseInt(ca,10);
}}
if(qx.core.Variant.isSet(v,l)){bX._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(v,bG)){bX._keyCodeFix={12:bX._identifierToKeyCode(u)};
}else if(qx.core.Variant.isSet(v,W)){if(qx.bom.client.Engine.VERSION<525.13){bX._charCode2KeyCode={63289:bX._identifierToKeyCode(u),63276:bX._identifierToKeyCode(o),63277:bX._identifierToKeyCode(bp),63275:bX._identifierToKeyCode(y),63273:bX._identifierToKeyCode(bk),63234:bX._identifierToKeyCode(bD),63232:bX._identifierToKeyCode(bA),63235:bX._identifierToKeyCode(bw),63233:bX._identifierToKeyCode(bB),63272:bX._identifierToKeyCode(M),63302:bX._identifierToKeyCode(A),63236:bX._identifierToKeyCode(bc),63237:bX._identifierToKeyCode(bf),63238:bX._identifierToKeyCode(C),63239:bX._identifierToKeyCode(X),63240:bX._identifierToKeyCode(bC),63241:bX._identifierToKeyCode(E),63242:bX._identifierToKeyCode(S),63243:bX._identifierToKeyCode(B),63244:bX._identifierToKeyCode(by),63245:bX._identifierToKeyCode(bx),63246:bX._identifierToKeyCode(bz),63247:bX._identifierToKeyCode(bv),63248:bX._identifierToKeyCode(bH),3:bX._identifierToKeyCode(s),12:bX._identifierToKeyCode(u),13:bX._identifierToKeyCode(s)};
}else{bX._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var E="qx.client",D="mouseup",C="mousedown",B="click",A="contextmenu",z="dblclick",y="mousewheel",x="mouseover",w="mouseout",v="DOMMouseScroll",o="on",u="mshtml|webkit|opera",r="mousemove",n="__cj",m="useraction",q="__co",p="__ci",s="gecko|webkit",l="qx.event.handler.Mouse",t="__ch";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(F){arguments.callee.base.call(this);
this.__ch=F;
this.__ci=F.getWindow();
this.__cj=this.__ci.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ck:null,__cl:null,__cm:null,__cn:null,__co:null,__ch:null,__ci:null,__cj:null,canHandleEvent:function(j,k){},registerEvent:qx.core.Variant.select(E,{"webkit":function(L,M,N){if(qx.bom.client.System.IPHONE){var O=qx.lang.Function.returnNull;
L[o+M]=O;
L[o+M]=undefined;
}},"default":qx.lang.Function.returnNull}),unregisterEvent:function(W,X,Y){},__cp:function(f,g,h){if(!h){h=f.target||f.srcElement;
}if(h&&h.nodeType){qx.event.Registration.fireEvent(h,g||f.type,qx.event.type.Mouse,[f,h,null,true,true]);
}qx.event.Registration.fireEvent(this.__ci,m,qx.event.type.Data,[g||f.type]);
},_initButtonObserver:function(){this.__ck=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,C,this.__ck);
Event.addNativeListener(this.__cj,D,this.__ck);
Event.addNativeListener(this.__cj,B,this.__ck);
Event.addNativeListener(this.__cj,z,this.__ck);
Event.addNativeListener(this.__cj,A,this.__ck);
},_initMoveObserver:function(){this.__cl=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,r,this.__cl);
Event.addNativeListener(this.__cj,x,this.__cl);
Event.addNativeListener(this.__cj,w,this.__cl);
},_initWheelObserver:function(){this.__cm=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(E,u)?y:v;
Event.addNativeListener(this.__cj,a,this.__cm);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,C,this.__ck);
Event.removeNativeListener(this.__cj,D,this.__ck);
Event.removeNativeListener(this.__cj,B,this.__ck);
Event.removeNativeListener(this.__cj,z,this.__ck);
Event.removeNativeListener(this.__cj,A,this.__ck);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,r,this.__cl);
Event.removeNativeListener(this.__cj,x,this.__cl);
Event.removeNativeListener(this.__cj,w,this.__cl);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var i=qx.core.Variant.isSet(E,u)?y:v;
Event.removeNativeListener(this.__cj,i,this.__cm);
},_onMoveEvent:function(V){this.__cp(V);
},_onButtonEvent:function(b){var c=b.type;
var d=b.target||b.srcElement;
if(qx.core.Variant.isSet(E,s)){if(d&&d.nodeType==3){d=d.parentNode;
}}
if(this.__cq){this.__cq(b,c,d);
}
if(this.__cs){this.__cs(b,c,d);
}this.__cp(b,c,d);

if(this.__cr){this.__cr(b,c,d);
}
if(this.__ct){this.__ct(b,c,d);
}this.__cn=c;
},_onWheelEvent:function(e){this.__cp(e,y);
},__cq:qx.core.Variant.select(E,{"webkit":function(P,Q,R){if(Q==A){this.__cp(P,C,R);
this.__cp(P,D,R);
}},"default":null}),__cr:qx.core.Variant.select(E,{"opera":function(S,T,U){if(T==D&&S.button==2){this.__cp(S,A,U);
}},"default":null}),__cs:qx.core.Variant.select(E,{"mshtml":function(ba,bb,bc){if(bb==D&&this.__cn==B){this.__cp(ba,C,bc);
}else if(bb==z){this.__cp(ba,B,bc);
}},"default":null}),__ct:qx.core.Variant.select(E,{"mshtml":null,"default":function(G,H,I){switch(H){case C:this.__co=I;
break;
case D:if(I!==this.__co){var J=qx.dom.Hierarchy.getCommonParent(I,this.__co);
this.__cp(G,B,J);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(t,p,n,q);
},defer:function(K){qx.event.Registration.addHandler(K);
}});
})();
(function(){var j="qx.event.handler.Capture";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(e,f){},registerEvent:function(a,b,c){},unregisterEvent:function(g,h,i){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var z="alias",y="copy",x="blur",w="mouseout",v="keydown",u="Ctrl",t="Shift",s="mousemove",r="move",q="mouseover",X="Alt",W="keyup",V="mouseup",U="dragend",T="on",S="mousedown",R="qxDraggable",Q="drag",P="__cB",O="drop",G="qxDroppable",H="qx.event.handler.DragDrop",E="__cz",F="__cv",C="droprequest",D="dragstart",A="__cA",B="dragchange",I="dragleave",J="__cy",L="dragover",K="__cM",N="__cI",M="__cu";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ba){arguments.callee.base.call(this);
this.__cu=ba;
this.__cv=ba.getWindow().document.documentElement;
this.__cu.addListener(this.__cv,S,this._onMouseDown,this);
this.__cx();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(bb,bc){},registerEvent:function(b,c,d){},unregisterEvent:function(bd,be,bf){},addType:function(bp){this.__cy[bp]=true;
},addAction:function(bo){this.__cz[bo]=true;
},supportsType:function(bg){return !!this.__cy[bg];
},supportsAction:function(a){return !!this.__cz[a];
},getData:function(i){if(!this.__cL||!this.__cM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__cy[i]){throw new Error("Unsupported data type: "+i+"!");
}
if(!this.__cB[i]){this.__cw=i;
this.__cE(C,this.__cI,false);
}
if(!this.__cB[i]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__cB[i]||null;
},getCurrentAction:function(){return this.__cD;
},addData:function(bq,br){this.__cB[bq]=br;
},getCurrentType:function(){return this.__cw;
},__cx:function(){this.__cy={};
this.__cz={};
this.__cA={};
this.__cB={};
},__cC:function(){var bj=this.__cz;
var bh=this.__cA;
var bi=null;

if(this.__cL){if(bh.Shift&&bh.Ctrl&&bj.alias){bi=z;
}else if(bh.Shift&&bh.Alt&&bj.copy){bi=y;
}else if(bh.Shift&&bj.move){bi=r;
}else if(bh.Alt&&bj.alias){bi=z;
}else if(bh.Ctrl&&bj.copy){bi=y;
}else if(bj.move){bi=r;
}else if(bj.copy){bi=y;
}else if(bj.alias){bi=z;
}}
if(bi!=this.__cD){this.__cD=bi;
this.__cE(B,this.__cI,false);
}},__cE:function(j,k,l,m){var o=qx.event.Registration;
var n=o.createEvent(j,qx.event.type.Drag,[l,m]);

if(this.__cI!==this.__cM){if(k==this.__cI){n.setRelatedTarget(this.__cM);
}else{n.setRelatedTarget(this.__cI);
}}return o.dispatchEvent(k,n);
},__cF:function(Y){while(Y&&Y.nodeType==1){if(Y.getAttribute(R)==T){return Y;
}Y=Y.parentNode;
}return null;
},__cG:function(bs){while(bs&&bs.nodeType==1){if(bs.getAttribute(G)==T){return bs;
}bs=bs.parentNode;
}return null;
},__cH:function(){this.__cI=null;
this.__cu.removeListener(this.__cv,s,this._onMouseMove,this,true);
this.__cu.removeListener(this.__cv,V,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,x,this._onWindowBlur,this);
this.__cx();
},__cJ:function(){if(this.__cK){this.__cu.removeListener(this.__cv,q,this._onMouseOver,this,true);
this.__cu.removeListener(this.__cv,w,this._onMouseOut,this,true);
this.__cu.removeListener(this.__cv,v,this._onKeyDown,this,true);
this.__cu.removeListener(this.__cv,W,this._onKeyUp,this,true);
this.__cE(U,this.__cI,false);
this.__cK=false;
}this.__cL=false;
this.__cM=null;
this.__cH();
},__cL:false,_onWindowBlur:function(e){this.__cJ();
},_onKeyDown:function(e){var bn=e.getKeyIdentifier();

switch(bn){case X:case u:case t:if(!this.__cA[bn]){this.__cA[bn]=true;
this.__cC();
}}},_onKeyUp:function(e){var bm=e.getKeyIdentifier();

switch(bm){case X:case u:case t:if(this.__cA[bm]){this.__cA[bm]=false;
this.__cC();
}}},_onMouseDown:function(e){if(this.__cK){return;
}var p=this.__cF(e.getTarget());

if(p){this.__cN=e.getDocumentLeft();
this.__cO=e.getDocumentTop();
this.__cI=p;
this.__cu.addListener(this.__cv,s,this._onMouseMove,this,true);
this.__cu.addListener(this.__cv,V,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,x,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__cL){this.__cE(O,this.__cM,false,e);
}if(this.__cK){e.stopPropagation();
}this.__cJ();
},_onMouseMove:function(e){if(this.__cK){if(!this.__cE(Q,this.__cI,true,e)){this.__cJ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__cN)>3||Math.abs(e.getDocumentTop()-this.__cO)>3){if(this.__cE(D,this.__cI,true,e)){this.__cK=true;
this.__cu.addListener(this.__cv,q,this._onMouseOver,this,true);
this.__cu.addListener(this.__cv,w,this._onMouseOut,this,true);
this.__cu.addListener(this.__cv,v,this._onKeyDown,this,true);
this.__cu.addListener(this.__cv,W,this._onKeyUp,this,true);
var h=this.__cA;
h.Ctrl=e.isCtrlPressed();
h.Shift=e.isShiftPressed();
h.Alt=e.isAltPressed();
this.__cC();
}else{this.__cE(U,this.__cI,false);
this.__cH();
}}}},_onMouseOver:function(e){var f=e.getTarget();
var g=this.__cG(f);

if(g&&g!=this.__cM){this.__cL=this.__cE(L,g,true,e);
this.__cM=g;
this.__cC();
}},_onMouseOut:function(e){var bk=e.getTarget();
var bl=this.__cG(bk);

if(bl&&bl==this.__cM){this.__cE(I,this.__cM,false,e);
this.__cM=null;
this.__cL=false;
this.__cC();
}}},destruct:function(){this._disposeFields(N,K,M,F,J,E,A,P);
},defer:function(bt){qx.event.Registration.addHandler(bt);
}});
})();
(function(){var k="-",j="qx.event.handler.Element",i="_manager",h="_registeredEvents";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(l,m,n){var q=qx.core.ObjectRegistry.toHashCode(l);
var o=q+k+m;
var p=qx.lang.Function.listener(this._onNative,this,o);
qx.bom.Event.addNativeListener(l,m,p);
this._registeredEvents[o]={element:l,type:m,listener:p};
},unregisterEvent:function(v,w,x){var A=this._registeredEvents;

if(!A){return;
}var B=qx.core.ObjectRegistry.toHashCode(v);
var y=B+k+w;
var z=this._registeredEvents[y];
qx.bom.Event.removeNativeListener(v,w,z.listener);
delete this._registeredEvents[y];
},_onNative:function(r,s){var u=this._registeredEvents;

if(!u){return;
}var t=u[s];
qx.event.Registration.fireNonBubblingEvent(t.element,t.type,qx.event.type.Native,[r]);
}},destruct:function(){var d;
var e=this._registeredEvents;

for(var f in e){d=e[f];
qx.bom.Event.removeNativeListener(d.element,d.type,d.listener);
}this._disposeFields(i,h);
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var h="__cQ",g="qx.event.handler.Appear",f="__cP",e="disappear",d="appear";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__cP=a;
this.__cQ={};
qx.event.handler.Appear.__cR[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cR:{},refresh:function(){var j=this.__cR;

for(var k in j){j[k].refresh();
}}},members:{canHandleEvent:function(b,c){},registerEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__cQ;

if(z&&!z[y]){z[y]=v;
v.$$displayed=v.offsetWidth>0;
}},unregisterEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q);
var u=this.__cQ;

if(!u){return;
}
if(u[t]){delete u[t];
q.$$displayed=null;
}},refresh:function(){var o=this.__cQ;
var p;

for(var n in o){p=o[n];
var l=p.offsetWidth>0;

if((!!p.$$displayed)!==l){p.$$displayed=l;
var m=qx.event.Registration.createEvent(l?d:e);
this.__cP.dispatchEvent(p,m);
}}}},destruct:function(){this._disposeFields(f,h);
delete qx.event.handler.Appear.__cR[this.$$hash];
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var S="mshtml",R="",Q="qx.client",P=">",O="<",N=" ",M="='",L="http://www.w3.org/1999/xhtml",K="qx.bom.Element",J="div",H="' ",I="></";
qx.Class.define(K,{statics:{__cS:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,V,W){if(!W){W=window;
}
if(!name){throw new Error("The tag name is missing!");
}var Y=this.__cS;
var X=R;

for(var bb in V){if(Y[bb]){X+=bb+M+V[bb]+H;
}}var bc;
if(X!=R){if(qx.bom.client.Engine.MSHTML){bc=W.document.createElement(O+name+N+X+P);
}else{var ba=W.document.createElement(J);
ba.innerHTML=O+name+N+X+I+name+P;
bc=ba.firstChild;
}}else{if(W.document.createElementNS){bc=W.document.createElementNS(L,name);
}else{bc=W.document.createElement(name);
}}
for(var bb in V){if(!Y[bb]){qx.bom.element.Attribute.set(bc,bb,V[bb]);
}}return bc;
},empty:function(h){return h.innerHTML=R;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(B,C,D,self,E){return qx.event.Registration.removeListener(B,C,D,self,E);
},removeListenerById:function(e,f){return qx.event.Registration.removeListenerById(e,f);
},hasListener:function(x,y,z){return qx.event.Registration.hasListener(x,y,z);
},focus:function(g){qx.event.Registration.getManager(g).getHandler(qx.event.handler.Focus).focus(g);
},blur:function(A){qx.event.Registration.getManager(A).getHandler(qx.event.handler.Focus).blur(A);
},activate:function(F){qx.event.Registration.getManager(F).getHandler(qx.event.handler.Focus).activate(F);
},deactivate:function(G){qx.event.Registration.getManager(G).getHandler(qx.event.handler.Focus).deactivate(G);
},capture:function(T){qx.event.Registration.getManager(T).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(T);
},releaseCapture:function(U){qx.event.Registration.getManager(U).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(U);
},clone:function(k,m){var p;

if(m||(qx.core.Variant.isSet(Q,S)&&!qx.xml.Document.isXmlDocument(k))){var t=qx.event.Registration.getManager(k);
var n=qx.dom.Hierarchy.getDescendants(k);
n.push(k);
}if(qx.core.Variant.isSet(Q,S)){for(var i=0,l=n.length;i<l;i++){t.toggleAttachedEvents(n[i],false);
}}var p=k.cloneNode(true);
if(qx.core.Variant.isSet(Q,S)){for(var i=0,l=n.length;i<l;i++){t.toggleAttachedEvents(n[i],true);
}}if(m===true){var w=qx.dom.Hierarchy.getDescendants(p);
w.push(p);
var o,r,v,q;

for(var i=0,u=n.length;i<u;i++){v=n[i];
o=t.serializeListeners(v);

if(o.length>0){r=w[i];

for(var j=0,s=o.length;j<s;j++){q=o[j];
t.addListener(r,q.type,q.handler,q.self,q.capture);
}}}}return p;
}}});
})();
(function(){var bo="qx.client",bn="blur",bm="focus",bl="mousedown",bk="on",bj="mouseup",bi="DOMFocusOut",bh="DOMFocusIn",bg="selectstart",bf="onmousedown",bL="onfocusout",bK="onfocusin",bJ="onmouseup",bI="onselectstart",bH="draggesture",bG="_document",bF="_root",bE="qx.event.handler.Focus",bD="_applyFocus",bC="_window",bv="deactivate",bw="_applyActive",bt="focusin",bu="qxSelectable",br="tabIndex",bs="off",bp="_body",bq="activate",bx="focusout",by="__mouseActive",bA="_manager",bz="qxKeepFocus",bB="qxKeepActive";
qx.Class.define(bE,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bb){arguments.callee.base.call(this);
this._manager=bb;
this._window=bb.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bw,nullable:true},focus:{apply:bD,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(p,q){},registerEvent:function(Q,R,S){},unregisterEvent:function(m,n,o){},focus:function(s){try{s.focus();
}catch(K){}this.setFocus(s);
this.setActive(s);
},activate:function(l){this.setActive(l);
},blur:function(H){try{H.blur();
}catch(X){}
if(this.getActive()===H){this.resetActive();
}
if(this.getFocus()===H){this.resetFocus();
}},deactivate:function(P){if(this.getActive()===P){this.resetActive();
}},tryActivate:function(u){var v=this.__dr(u);

if(v){this.setActive(v);
}},__cT:function(b,c,d,f){var h=qx.event.Registration;
var g=h.createEvent(d,qx.event.type.Focus,[b,c,f]);
h.dispatchEvent(b,g);
},_windowFocused:true,__cU:function(){if(this._windowFocused){this._windowFocused=false;
this.__cT(this._window,null,bn,false);
}},__cV:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cT(this._window,null,bm,false);
}},_initObserver:qx.core.Variant.select(bo,{"gecko":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__db=qx.lang.Function.listener(this.__df,this);
this._document.addEventListener(bl,this.__cW,true);
this._document.addEventListener(bj,this.__cX,true);
this._window.addEventListener(bm,this.__cY,true);
this._window.addEventListener(bn,this.__da,true);
this._window.addEventListener(bH,this.__db,true);
},"mshtml":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.attachEvent(bf,this.__cW);
this._document.attachEvent(bJ,this.__cX);
this._document.attachEvent(bK,this.__dc);
this._document.attachEvent(bL,this.__dd);
this._document.attachEvent(bI,this.__de);
},"webkit":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.addEventListener(bl,this.__cW,true);
this._document.addEventListener(bj,this.__cX,true);
this._document.addEventListener(bg,this.__de,false);
this._window.addEventListener(bi,this.__dd,true);
this._window.addEventListener(bm,this.__cY,true);
this._window.addEventListener(bn,this.__da,true);
},"opera":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this._document.addEventListener(bl,this.__cW,true);
this._document.addEventListener(bj,this.__cX,true);
this._window.addEventListener(bh,this.__dc,true);
this._window.addEventListener(bi,this.__dd,true);
}}),_stopObserver:qx.core.Variant.select(bo,{"gecko":function(){this._document.removeEventListener(bl,this.__cW,true);
this._document.removeEventListener(bj,this.__cX,true);
this._window.removeEventListener(bm,this.__cY,true);
this._window.removeEventListener(bn,this.__da,true);
this._window.removeEventListener(bH,this.__db,true);
},"mshtml":function(){this._document.detachEvent(bf,this.__cW);
this._document.detachEvent(bJ,this.__cX);
this._document.detachEvent(bK,this.__dc);
this._document.detachEvent(bL,this.__dd);
this._document.detachEvent(bI,this.__de);
},"webkit":function(){this._document.removeEventListener(bl,this.__cW,true);
this._document.removeEventListener(bg,this.__de,false);
this._window.removeEventListener(bh,this.__dc,true);
this._window.removeEventListener(bi,this.__dd,true);
this._window.removeEventListener(bm,this.__cY,true);
this._window.removeEventListener(bn,this.__da,true);
},"opera":function(){this._document.removeEventListener(bl,this.__cW,true);
this._window.removeEventListener(bh,this.__dc,true);
this._window.removeEventListener(bi,this.__dd,true);
this._window.removeEventListener(bm,this.__cY,true);
this._window.removeEventListener(bn,this.__da,true);
}}),__df:qx.core.Variant.select(bo,{"gecko":function(e){if(!this.__ds(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__dg:qx.core.Variant.select(bo,{"mshtml":function(e){this.__cV();
var A=e.srcElement;
var z=this.__dq(A);

if(z){this.setFocus(z);
}this.tryActivate(A);
},"opera":function(e){var k=e.target;

if(k==this._document||k==this._window){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(k);
this.tryActivate(k);
if(!this.__ds(k)){k.selectionStart=0;
k.selectionEnd=0;
}}},"default":null}),__dh:qx.core.Variant.select(bo,{"mshtml":function(e){if(!e.toElement){this.__cU();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var a=e.target;

if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}},"opera":function(e){var G=e.target;

if(G==this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(G===this.getFocus()){this.resetFocus();
}
if(G===this.getActive()){this.resetActive();
}}},"default":null}),__dk:qx.core.Variant.select(bo,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__dl:qx.core.Variant.select(bo,{"gecko":function(e){var W=e.target;

if(W===this._window||W===this._document){this.__cV();
W=this._body;
}this.setFocus(W);
this.tryActivate(W);
},"webkit":function(e){var L=e.target;

if(L===this._window||L===this._document){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(L);
this.tryActivate(L);
}},"default":null}),__dm:qx.core.Variant.select(bo,{"gecko":function(e){var O=e.target;
var M=this.__dq(O);
var N=this.__ds(O);

if(!N){qx.bom.Event.preventDefault(e);
if(M){M.focus();
}}else if(!M){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bN=e.srcElement;
var bM=this.__dq(bN);

if(bM){if(!this.__ds(bN)){bN.unselectable=bk;
document.selection.empty();
bM.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__ds(bN)){bN.unselectable=bk;
}}},"webkit":function(e){var ba=e.target;
var Y=this.__dq(ba);

if(Y){this.setFocus(Y);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var D=e.target;
var B=this.__dq(D);

if(!this.__ds(D)){qx.bom.Event.preventDefault(e);
if(B){var C=this.getFocus();

if(C&&C.selectionEnd){C.selectionStart=0;
C.selectionEnd=0;
C.blur();
}if(B){this.setFocus(B);
}}}else if(B){this.setFocus(B);
}},"default":null}),__dn:qx.core.Variant.select(bo,{"mshtml":function(e){var r=e.srcElement;

if(r.unselectable){r.unselectable=bs;
}this.tryActivate(r);
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__do:qx.core.Variant.select(bo,{"mshtml|webkit":function(e){if(!this.__ds(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__dp:function(T){var U=qx.bom.element.Attribute.get(T,br);

if(U>=1){return true;
}var V=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(U>=0&&V[T.tagName]){return true;
}return false;
},__dq:function(be){while(be&&be.nodeType===1){if(be.getAttribute(bz)==bk){return null;
}
if(this.__dp(be)){return be;
}be=be.parentNode;
}return this._body;
},__dr:function(i){var j=i;

while(i&&i.nodeType===1){if(i.getAttribute(bB)==bk){return null;
}i=i.parentNode;
}return j;
},__ds:function(E){while(E&&E.nodeType===1){var F=E.getAttribute(bu);

if(F!=null){return F===bk;
}E=E.parentNode;
}return true;
},_applyActive:function(bc,bd){if(bd){this.__cT(bd,bc,bv,true);
}
if(bc){this.__cT(bc,bd,bq,true);
}},_applyFocus:function(I,J){if(J){this.__cT(J,I,bx,true);
}
if(I){this.__cT(I,J,bt,true);
}if(J){this.__cT(J,I,bn,false);
}
if(I){this.__cT(I,J,bm,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(bA,bC,bG,bF,bp,by);
},defer:function(w){qx.event.Registration.addHandler(w);
var x=w.FOCUSABLE_ELEMENTS;

for(var y in x){x[y.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="qx.client",i="mshtml",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="",t="useMap",s="innerText",r="innerHTML",q="tabIndex",o="cssText",p="dateTime",m="maxLength",n="cellPadding",k="colSpan",l="style";
qx.Class.define(f,{statics:{__dt:{names:{"class":c,"for":z,html:r,text:qx.core.Variant.isSet(j,i)?s:b,colspan:k,rowspan:e,valign:d,datetime:p,accesskey:g,tabindex:q,maxlength:m,readonly:h,longdesc:y,cellpadding:n,cellspacing:x,frameborder:w,usemap:t},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},original:{href:1,src:1,type:1}},compile:function(A){var B=[];
var D=this.__dt.runtime;

for(var C in A){if(!D[C]){B.push(C,v,A[C],a);
}}return B.join(u);
},get:qx.core.Variant.select(j,{"mshtml":function(E,name){var G=this.__dt;
var F;
name=G.names[name]||name;
if(G.original[name]){F=E.getAttribute(name,2);
}else if(G.property[name]){F=E[name];
}else{F=E.getAttribute(name);
}if(G.bools[name]){return !!F;
}return F;
},"default":function(H,name){var J=this.__dt;
var I;
name=J.names[name]||name;
if(J.property[name]){I=H[name];

if(I==null){I=H.getAttribute(name);
}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
}}),set:function(L,name,M){var N=this.__dt;
name=N.names[name]||name;
if(N.bools[name]){M=!!M;
}if(N.property[name]){L[name]=M;
}else if(M===true){L.setAttribute(name,name);
}else if(M===false||M===null){L.removeAttribute(name);
}else if(qx.core.Variant.isSet(j,i)&&name==l){L.style.setAttribute(o,M);
}else{L.setAttribute(name,M);
}},reset:function(K,name){this.set(K,name,null);
}}});
})();
(function(){var h="qx.event.type.Native",g="_native",f="_returnValue";
qx.Class.define(h,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
j._native=this._native;
j._returnValue=this._returnValue;
return j;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(k){this._returnValue=k;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._disposeFields(g,f);
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){if(!this.__modifiers){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
}return this.__modifiers;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__du:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__du();
}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dv:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dw:function(){var J=navigator.userAgent;
var I=[];

for(var H in this.__dv){I.push(H);
}var K=new RegExp(l+I.join(B).replace(/\./g,r)+G,v);

if(!K.test(J)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__dv[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(J.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&J.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(L){L.__dw();
}});
})();
(function(){var j="qx.client",i="left",h="right",g="middle",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__dx:qx.core.Variant.select(j,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return i;
case c:return h;
default:return this.__dx[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(j,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(j,{"mshtml":function(){var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(k);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(j,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var c="qx.client",b="CSS1Compat",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(c,{"opera":function(d){return (d||window).document.body.clientWidth;
},"webkit":function(l){return (l||window).innerWidth;
},"default":function(g){var h=(g||window).document;
return h.compatMode===b?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(c,{"opera":function(k){return (k||window).document.body.clientHeight;
},"webkit":function(e){return (e||window).innerHeight;
},"default":function(i){var j=(i||window).document;
return j.compatMode===b?j.documentElement.clientHeight:j.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(c,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(f){return (f||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(c,{"mshtml":function(n){var o=(n||window).document;
return o.documentElement.scrollTop||o.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var x="qx.client",w="qx.dom.Hierarchy",v="previousSibling",u="*",t="nextSibling",s="parentNode";
qx.Class.define(w,{statics:{getNodeIndex:function(C){var D=0;

while(C&&(C=C.previousSibling)){D++;
}return D;
},getElementIndex:function(K){var L=0;
var M=qx.dom.Node.ELEMENT;

while(K&&(K=K.previousSibling)){if(K.nodeType==M){L++;
}}return L;
},getNextElementSibling:function(N){while(N&&(N=N.nextSibling)&&!qx.dom.Node.isElement(N)){continue;
}return N||null;
},getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},contains:qx.core.Variant.select(x,{"webkit|mshtml|opera":function(F,G){if(qx.dom.Node.isDocument(F)){var H=qx.dom.Node.getDocument(G);
return F&&H==F;
}else if(qx.dom.Node.isDocument(G)){return false;
}else{return F.contains(G);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(I,J){while(J){if(I==J){return true;
}J=J.parentNode;
}return false;
}}),isRendered:function(U){if(!U.offsetParent){return false;
}var V=U.ownerDocument||U.document;
if(V.body.contains){return V.body.contains(U);
}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(p,q){return this.contains(q,p);
},getCommonParent:qx.core.Variant.select(x,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(h,i){if(h===i){return h;
}var j={};
var m=qx.core.ObjectRegistry;
var l,k;

while(h||i){if(h){l=m.toHashCode(h);

if(j[l]){return j[l];
}j[l]=h;
h=h.parentNode;
}
if(i){k=m.toHashCode(i);

if(j[k]){return j[k];
}j[k]=i;
i=i.parentNode;
}}return null;
}}),getAncestors:function(P){return this._recursivelyCollect(P,s);
},getChildElements:function(S){S=S.firstChild;

if(!S){return [];
}var T=this.getNextSiblings(S);

if(S.nodeType===1){T.unshift(S);
}return T;
},getDescendants:function(o){return qx.lang.Array.fromCollection(o.getElementsByTagName(u));
},getFirstDescendant:function(g){g=g.firstChild;

while(g&&g.nodeType!=1){g=g.nextSibling;
}return g;
},getLastDescendant:function(y){y=y.lastChild;

while(y&&y.nodeType!=1){y=y.previousSibling;
}return y;
},getPreviousSiblings:function(E){return this._recursivelyCollect(E,v);
},getNextSiblings:function(r){return this._recursivelyCollect(r,t);
},_recursivelyCollect:function(a,b){var c=[];

while(a=a[b]){if(a.nodeType==1){c.push(a);
}}return c;
},getSiblings:function(f){return this.getPreviousSiblings(f).reverse().concat(this.getNextSiblings(f));
},isEmpty:function(O){O=O.firstChild;

while(O){if(O.nodeType===qx.dom.Node.ELEMENT||O.nodeType===qx.dom.Node.TEXT){return false;
}O=O.nextSibling;
}return true;
},cleanWhitespace:function(z){var A=z.firstChild;

while(A){var B=A.nextSibling;

if(A.nodeType==3&&!/\S/.test(A.nodeValue)){z.removeChild(A);
}A=B;
}}}});
})();
(function(){var g="qx.client",f="qx.event.type.Drag";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(d,e){arguments.callee.base.call(this,false,d);

if(e){this._native=e.getNativeEvent()||null;
this._originalTarget=e.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=arguments.callee.base.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(c){return this.getManager().supportsAction(c);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(b){return this.getManager().getData(b);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var u="blur",t="losecapture",s="capture",r="__dz",q="click",p="__dy",o="qx.event.dispatch.MouseCapture",n="focus",m="scroll",k="__dA";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){arguments.callee.base.call(this);
this.__dy=c;
this.__dz=c.getWindow();
c.addListener(this.__dz,u,this.releaseCapture,this);
c.addListener(this.__dz,n,this.releaseCapture,this);
c.addListener(this.__dz,m,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__dA:null,__dy:null,__dz:null,canDispatchEvent:function(a,event,b){return (this.__dA&&this.__dB[b]);
},dispatchEvent:function(d,event,e){if(e==q){event.stopPropagation();
this.releaseCapture();
return;
}var f=this.__dy.getListeners(this.__dA,e,false);

if(f){event.setCurrentTarget(this.__dA);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=f.length;i<l;i++){var g=f[i].context||event.getCurrentTarget();
f[i].handler.call(g,event);
}}},__dB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(j){if(this.__dA===j){return;
}
if(this.__dA){this.releaseCapture();
}this.__dA=j;
qx.event.Registration.fireEvent(j,s,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dA;
},releaseCapture:function(){var v=this.__dA;

if(!v){return;
}this.__dA=null;
qx.event.Registration.fireEvent(v,t,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(k,p,r);
},defer:function(h){qx.event.Registration.addDispatcher(h);
}});
})();
(function(){var d="_window",c="_manager",b="qx.event.handler.Window";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(m,n,o){},unregisterEvent:function(u,v,w){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.addNativeListener(this._window,k,this._onNativeWrapper);
}},_stopWindowObserver:function(){var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.removeNativeListener(this._window,s,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var g=this._window;
var j=g.document;
var h=j.documentElement;
var f=e.target||e.srcElement;

if(f==null||f===g||f===j||f===h){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,g]);
qx.event.Registration.dispatchEvent(g,event);
var i=event.getReturnValue();

if(i!=null){e.returnValue=i;
return i;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(c,d);
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var x="qx.client",w="",v="mshtml",u="'",t="SelectionLanguage",s="qx.xml.Document",r=" />",q="MSXML2.DOMDocument.3.0",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="MSXML2.XMLHTTP.3.0",j="MSXML2.XMLHTTP.6.0",n=" xmlns='",m="text/xml",h="XPath",g="MSXML2.DOMDocument.6.0",k="HTML";
qx.Bootstrap.define(s,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(C){if(C.nodeType===9){return C.documentElement.nodeName!==k;
}else if(C.ownerDocument){return this.isXmlDocument(C.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(x,{"mshtml":function(y,z){var A=new ActiveXObject(this.DOMDOC);
A.setProperty(t,h);

if(z){var B=p;
B+=z;

if(y){B+=n+y+u;
}B+=r;
A.loadXML(B);
}return A;
},"default":function(F,G){return document.implementation.createDocument(F||w,G||w,null);
}}),fromString:qx.core.Variant.select(x,{"mshtml":function(D){var E=qx.xml.Document.create();
E.loadXML(D);
return E;
},"default":function(a){var b=new DOMParser();
return b.parseFromString(a,m);
}})},defer:function(c){if(qx.core.Variant.isSet(x,v)){var d=[g,q];
var e=[j,o];

for(var i=0,l=d.length;i<l;i++){try{new ActiveXObject(d[i]);
new ActiveXObject(e[i]);
}catch(f){continue;
}c.DOMDOC=d[i];
c.XMLHTTP=e[i];
break;
}}}});
})();
(function(){var k="(\\s|$)",j="(^|\\s)",i="",h="qx.bom.element.Class",g=" ",f="$2";
qx.Class.define(h,{statics:{add:function(d,name){if(!this.has(d,name)){d.className+=(d.className?g:i)+name;
}return name;
},get:function(e){return e.className;
},has:function(p,name){var q=new RegExp(j+name+k);
return q.test(p.className);
},remove:function(l,name){var m=new RegExp(j+name+k);
l.className=l.className.replace(m,f);
return name;
},replace:function(a,b,c){this.remove(a,b);
return this.add(a,c);
},toggle:function(n,name,o){if(o==null){o=!this.has(n,name);
}o?this.add(n,name):this.remove(n,name);
return name;
}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var bM="",bL="qx.client",bK="hidden",bJ="-moz-scrollbars-none",bI="overflow",bH=";",bG="overflowY",bF=":",bE="overflowX",bD="overflow:",bY="none",bX="scroll",bW="borderLeftStyle",bV="borderRightStyle",bU="div",bT="borderRightWidth",bS="overflow-y",bR="borderLeftWidth",bQ="-moz-scrollbars-vertical",bP="100px",bN="qx.bom.element.Overflow",bO="overflow-x";
qx.Class.define(bN,{statics:{__dC:null,getScrollbarWidth:function(){if(this.__dC!==null){return this.__dC;
}var g=qx.bom.element.Style;
var i=function(be,bf){return parseInt(g.get(be,bf))||0;
};
var j=function(o){return (g.get(o,bV)==bY?0:i(o,bT));
};
var h=function(cc){return (g.get(cc,bW)==bY?0:i(cc,bR));
};
var l=qx.core.Variant.select(bL,{"mshtml":function(Y){if(g.get(Y,bG)==bK||Y.clientWidth==0){return j(Y);
}return Math.max(0,Y.offsetWidth-Y.clientLeft-Y.clientWidth);
},"default":function(bu){if(bu.clientWidth==0){var bv=g.get(bu,bI);
var bw=(bv==bX||bv==bQ?16:0);
return Math.max(0,j(bu)+bw);
}return Math.max(0,(bu.offsetWidth-bu.clientWidth-h(bu)));
}});
var k=function(y){return l(y)-j(y);
};
var t=document.createElement(bU);
var s=t.style;
s.height=s.width=bP;
s.overflow=bX;
document.body.appendChild(t);
var c=k(t);
this.__dC=c?c:16;
document.body.removeChild(t);
return this.__dC;
},_compile:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(Q,R){if(R==bK){R=bJ;
}return bD+R+bH;
}:
function(e,f){return e+bF+f+bH;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(F,G){return bD+G+bH;
}:
function(bi,bj){return bi+bF+bj+bH;
},"default":function(H,I){return H+bF+I+bH;
}}),compileX:function(B){return this._compile(bO,B);
},compileY:function(bb){return this._compile(bS,bb);
},getX:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(r,u){var v=qx.bom.element.Style.get(r,bI,u,false);

if(v===bJ){v=bK;
}return v;
}:
function(w,x){return qx.bom.element.Style.get(w,bE,x,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){return qx.bom.element.Style.get(bx,bI,by,false);
}:
function(C,D){return qx.bom.element.Style.get(C,bE,D,false);
},"default":function(p,q){return qx.bom.element.Style.get(p,bE,q,false);
}}),setX:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bB,bC){if(bC==bK){bC=bJ;
}bB.style.overflow=bC;
}:
function(z,A){z.style.overflowX=A;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(a,b){a.style.overflowX=b;
},"default":function(K,L){K.style.overflowX=L;
}}),resetX:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(J){J.style.overflow=bM;
}:
function(bq){bq.style.overflowX=bM;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bz,bA){bz.style.overflow=bM;
}:
function(m,n){m.style.overflowX=bM;
},"default":function(d){d.style.overflowX=bM;
}}),getY:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(br,bs){var bt=qx.bom.element.Style.get(br,bI,bs,false);

if(bt===bJ){bt=bK;
}return bt;
}:
function(W,X){return qx.bom.element.Style.get(W,bG,X,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return qx.bom.element.Style.get(S,bI,T,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,bG,cf,false);
},"default":function(bg,bh){return qx.bom.element.Style.get(bg,bG,bh,false);
}}),setY:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){if(bd===bK){bd=bJ;
}bc.style.overflow=bd;
}:
function(bk,bl){bk.style.overflowY=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ca,cb){ca.style.overflow=cb;
}:
function(bm,bn){bm.style.overflowY=bn;
},"default":function(M,N){M.style.overflowY=N;
}}),resetY:qx.core.Variant.select(bL,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cd){cd.style.overflow=bM;
}:
function(ba){ba.style.overflowY=bM;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bo,bp){bo.style.overflow=bM;
}:
function(O,P){O.style.overflowY=bM;
},"default":function(E){E.style.overflowY=bM;
}})}});
})();
(function(){var E="",D="qx.client",C="boxSizing",B="cursor",A="opacity",z="clip",y="overflowY",x="overflowX",w="appearance",v="style",bd="px",bc="-webkit-appearance",bb="user-select",ba="userSelect",Y="styleFloat",X="-webkit-user-select",W="-moz-appearance",V="pixelHeight",U="MozAppearance",T=":",L="pixelTop",M="pixelLeft",J="text-overflow",K="-moz-user-select",H="MozUserSelect",I="qx.bom.element.Style",F="WebkitUserSelect",G="-o-text-overflow",N="pixelRight",O="pixelWidth",Q="pixelBottom",P=";",S="cssFloat",R="WebkitAppearance";
qx.Class.define(I,{statics:{__dD:{styleNames:{"float":qx.core.Variant.select(D,{"mshtml":Y,"default":S}),"appearance":qx.core.Variant.select(D,{"gecko":U,"webkit":R,"default":w}),"userSelect":qx.core.Variant.select(D,{"gecko":H,"webkit":F,"default":ba})},cssNames:{"appearance":qx.core.Variant.select(D,{"gecko":W,"webkit":bc,"default":w}),"userSelect":qx.core.Variant.select(D,{"gecko":K,"webkit":X,"default":bb}),"textOverflow":qx.core.Variant.select(D,{"opera":G,"default":J})},mshtmlPixel:{width:O,height:V,left:M,right:N,top:L,bottom:Q},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__dE:{},compile:function(h){var l=[];
var p=this.__dD;
var o=p.special;
var m=p.cssNames;
var k=this.__dE;
var n=qx.lang.String;
var name,j,i;

for(name in h){i=h[name];

if(i==null){continue;
}name=m[name]||name;
if(o[name]){switch(name){case z:l.push(qx.bom.element.Clip.compile(i));
break;
case B:l.push(qx.bom.element.Cursor.compile(i));
break;
case A:l.push(qx.bom.element.Opacity.compile(i));
break;
case C:l.push(qx.bom.element.BoxSizing.compile(i));
break;
case x:l.push(qx.bom.element.Overflow.compileX(i));
break;
case y:l.push(qx.bom.element.Overflow.compileY(i));
break;
}}else{j=k[name];

if(!j){j=k[name]=n.hyphenate(name);
}l.push(j,T,i,P);
}}return l.join(E);
},setCss:qx.core.Variant.select(D,{"mshtml":function(q,r){q.style.cssText=r;
},"default":function(f,g){f.setAttribute(v,g);
}}),getCss:qx.core.Variant.select(D,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(b){return b.getAttribute(v);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bs,name,bt,bu){{};
var bv=this.__dD;
name=bv.styleNames[name]||name;
if(bu!==false&&bv.special[name]){switch(name){case z:return qx.bom.element.Clip.set(bs,bt);
case B:return qx.bom.element.Cursor.set(bs,bt);
case A:return qx.bom.element.Opacity.set(bs,bt);
case C:return qx.bom.element.BoxSizing.set(bs,bt);
case x:return qx.bom.element.Overflow.setX(bs,bt);
case y:return qx.bom.element.Overflow.setY(bs,bt);
}}bs.style[name]=bt!==null?bt:E;
},setStyles:function(c,d,e){{};

for(var name in d){this.set(c,name,d[name],e);
}},reset:function(s,name,t){var u=this.__dD;
name=u.styleNames[name]||name;
if(t!==false&&u.special[name]){switch(name){case z:return qx.bom.element.Clip.reset(s);
case B:return qx.bom.element.Cursor.reset(s);
case A:return qx.bom.element.Opacity.reset(s);
case C:return qx.bom.element.BoxSizing.reset(s);
case x:return qx.bom.element.Overflow.resetX(s);
case y:return qx.bom.element.Overflow.resetY(s);
}}s.style[name]=E;
},get:qx.core.Variant.select(D,{"mshtml":function(bk,name,bl,bm){var br=this.__dD;
name=br.styleNames[name]||name;
if(bm!==false&&br.special[name]){switch(name){case z:return qx.bom.element.Clip.get(bk,bl);
case B:return qx.bom.element.Cursor.get(bk,bl);
case A:return qx.bom.element.Opacity.get(bk,bl);
case C:return qx.bom.element.BoxSizing.get(bk,bl);
case x:return qx.bom.element.Overflow.getX(bk,bl);
case y:return qx.bom.element.Overflow.getY(bk,bl);
}}if(!bk.currentStyle){return bk.style[name]||E;
}switch(bl){case this.LOCAL_MODE:return bk.style[name]||E;
case this.CASCADED_MODE:return bk.currentStyle[name]||E;
default:var bq=bk.currentStyle[name]||E;
if(/^-?[\.\d]+(px)?$/i.test(bq)){return bq;
}var bp=br.mshtmlPixel[name];

if(bp){var bn=bk.style[name];
bk.style[name]=bq||0;
var bo=bk.style[bp]+bd;
bk.style[name]=bn;
return bo;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bq)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bq;
}},"default":function(be,name,bf,bg){var bj=this.__dD;
name=bj.styleNames[name]||name;
if(bg!==false&&bj.special[name]){switch(name){case z:return qx.bom.element.Clip.get(be,bf);
case B:return qx.bom.element.Cursor.get(be,bf);
case A:return qx.bom.element.Opacity.get(be,bf);
case C:return qx.bom.element.BoxSizing.get(be,bf);
case x:return qx.bom.element.Overflow.getX(be,bf);
case y:return qx.bom.element.Overflow.getY(be,bf);
}}switch(bf){case this.LOCAL_MODE:return be.style[name]||E;
case this.CASCADED_MODE:if(be.currentStyle){return be.currentStyle[name]||E;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bh=qx.dom.Node.getDocument(be);
var bi=bh.defaultView.getComputedStyle(be,null);
return bi?bi[name]:E;
}}})}});
})();
(function(){var u="auto",t="px",s=",",r="clip:auto;",q="rect(",p=");",o="",n=")",m="qx.bom.element.Clip",l="string",i="rect(auto)",k="clip:rect(",j="clip",h="rect(auto,auto,auto,auto)";
qx.Class.define(m,{statics:{compile:function(b){if(!b){return r;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?u:f+t);
g=u;
}else{c=(f==null?u:g+f+t);
g=g+t;
}
if(top==null){d=(e==null?u:e+t);
top=u;
}else{d=(e==null?u:top+e+t);
top=top+t;
}return k+top+s+c+s+d+s+g+p;
},get:function(C,D){var F=qx.bom.element.Style.get(C,j,D,false);
var K,top,I,H;
var E,G;

if(typeof F===l&&F!==u&&F!==o){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(s);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===u){K=null;
}
if(top===u){top=null;
}
if(E===u){E=null;
}
if(G===u){G=null;
}if(top!=null){top=parseInt(top,10);
}
if(E!=null){E=parseInt(E,10);
}
if(G!=null){G=parseInt(G,10);
}
if(K!=null){K=parseInt(K,10);
}if(E!=null&&K!=null){I=E-K;
}else if(E!=null){I=E;
}
if(G!=null&&top!=null){H=G-top;
}else if(G!=null){H=G;
}}else{throw new Error("Could not parse clip string: "+F);
}}return {left:K||null,top:top||null,width:I||null,height:H||null};
},set:function(v,w){if(!w){v.style.clip=h;
return;
}var B=w.left;
var top=w.top;
var A=w.width;
var z=w.height;
var x,y;

if(B==null){x=(A==null?u:A+t);
B=u;
}else{x=(A==null?u:B+A+t);
B=B+t;
}
if(top==null){y=(z==null?u:z+t);
top=u;
}else{y=(z==null?u:top+z+t);
top=top+t;
}v.style.clip=q+top+s+x+s+y+s+B+n;
},reset:function(a){a.style.clip=qx.bom.client.Engine.MSHTML?i:u;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__dF:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(a){return i+(this.__dF[a]||a)+g;
},get:function(b,c){return qx.bom.element.Style.get(b,e,c,false);
},set:function(o,p){o.style.cursor=this.__dF[p]||p;
},reset:function(q){q.style.cursor=j;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(A){if(A>=1){return u;
}
if(A<0.00001){A=0;
}return l+(A*100)+n;
},"gecko":function(K){if(K==1){K=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+K+s;
}else{return q+K+s;
}},"default":function(d){if(d==1){return u;
}return q+d+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(B,C){var D=qx.bom.element.Style.get(B,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(C>=1){B.style.filter=D.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,u)+k+C*100+m;
},"gecko":function(a,b){if(b==1){b=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){a.style.MozOpacity=b;
}else{a.style.opacity=b;
}},"default":function(x,y){if(y==1){y=u;
}x.style.opacity=y;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(v){var w=qx.bom.element.Style.get(v,r,qx.bom.element.Style.COMPUTED_MODE,false);
v.style.filter=w.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(z){if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=u;
}else{z.style.opacity=u;
}},"default":function(c){c.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(e,f){var g=qx.bom.element.Style.get(e,r,f,false);

if(g){var h=g.match(/alpha\(opacity=(.*)\)/);

if(h&&h[1]){return parseFloat(h[1])/100;
}}return 1.0;
},"gecko":function(H,I){var J=qx.bom.element.Style.get(H,qx.bom.client.Engine.VERSION<1.7?o:p,I,false);

if(J==0.999999){J=1.0;
}
if(J!=null){return parseFloat(J);
}return 1.0;
},"default":function(E,F){var G=qx.bom.element.Style.get(E,p,F,false);

if(G!=null){return parseFloat(G);
}return 1.0;
}})}});
})();
(function(){var v="qx.client",u="",t="boxSizing",s="box-sizing",r=":",q="border-box",p="qx.bom.element.BoxSizing",o="KhtmlBoxSizing",n="-moz-box-sizing",m="WebkitBoxSizing",h=";",k="-khtml-box-sizing",j="content-box",g="-webkit-box-sizing",f="MozBoxSizing";
qx.Class.define(p,{statics:{__dG:qx.core.Variant.select(v,{"mshtml":null,"webkit":[t,o,m],"gecko":[f],"opera":[t]}),__dH:qx.core.Variant.select(v,{"mshtml":null,"webkit":[s,k,g],"gecko":[n],"opera":[s]}),__dI:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dJ:function(C){var D=this.__dI;
return D.tags[C.tagName.toLowerCase()]||D.types[C.type];
},compile:qx.core.Variant.select(v,{"mshtml":function(B){{};
},"default":function(a){var c=this.__dH;
var b=u;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+r+a+h;
}}return b;
}}),get:qx.core.Variant.select(v,{"mshtml":function(d){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(d))){if(!this.__dJ(d)){return j;
}}return q;
},"default":function(E){var G=this.__dG;
var F;

if(G){for(var i=0,l=G.length;i<l;i++){F=qx.bom.element.Style.get(E,G[i],null,false);

if(F!=null&&F!==u){return F;
}}}return u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(z,A){{};
},"default":function(w,x){var y=this.__dG;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(e){this.set(e,u);
}}});
})();
(function(){var g="CSS1Compat",f="qx.bom.Document";
qx.Class.define(f,{statics:{isQuirksMode:function(d){return (d||window).document.compatMode!==g;
},isStandardMode:function(e){return (e||window).document.compatMode===g;
},getWidth:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getWidth(a);
var scroll=b.compatMode===g?b.documentElement.scrollWidth:b.body.scrollWidth;
return Math.max(scroll,c);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=i.compatMode===g?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var Y="borderTopWidth",X="borderLeftWidth",W="scroll",V="border-box",U="position",T="borderBottomWidth",S="qx.client",R="borderRightWidth",Q="auto",P="marginTop",br="marginLeft",bq="padding",bp="fixed",bo="CSS1Compat",bn="qx.bom.element.Location",bm="paddingLeft",bl="static",bk="marginBottom",bj="visible",bi="BODY",bg="paddingBottom",bh="paddingTop",be="marginRight",bf="margin",bc="overflow",bd="paddingRight",ba="border",bb="absolute";
qx.Class.define(bn,{statics:{__dK:function(c,d){return qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false);
},__dL:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dM:function(bH){var bK=0,top=0;
if(bH.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bJ=qx.dom.Node.getWindow(bH);
bK-=qx.bom.Viewport.getScrollLeft(bJ);
top-=qx.bom.Viewport.getScrollTop(bJ);
}else{var bI=qx.dom.Node.getDocument(bH).body;
bH=bH.parentNode;
while(bH&&bH!=bI){bK+=bH.scrollLeft;
top+=bH.scrollTop;
bH=bH.parentNode;
}}return {left:bK,top:top};
},__dN:qx.core.Variant.select(S,{"mshtml":function(H){var J=qx.dom.Node.getDocument(H);
var I=J.body;
var K=0;
var top=0;
K-=I.clientLeft+J.documentElement.clientLeft;
top-=I.clientTop+J.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){K+=this.__dL(I,X);
top+=this.__dL(I,Y);
}return {left:K,top:top};
},"webkit":function(bD){var bF=qx.dom.Node.getDocument(bD);
var bE=bF.body;
var bG=bE.offsetLeft;
var top=bE.offsetTop;
bG+=this.__dL(bE,X);
top+=this.__dL(bE,Y);
if(bF.compatMode===bo){bG+=this.__dL(bE,br);
top+=this.__dL(bE,P);
}return {left:bG,top:top};
},"gecko":function(L){var M=qx.dom.Node.getDocument(L).body;
var O=M.offsetLeft;
var top=M.offsetTop;
if(qx.bom.element.BoxSizing.get(M)!==V){O+=this.__dL(M,X);
top+=this.__dL(M,Y);
if(!L.getBoundingClientRect){var N;

while(L){if(this.__dK(L,U)===bb||this.__dK(L,U)===bp){N=true;
break;
}L=L.offsetParent;
}
if(!N){O+=this.__dL(M,X);
top+=this.__dL(M,Y);
}}}return {left:O,top:top};
},"default":function(s){var t=qx.dom.Node.getDocument(s).body;
var u=t.offsetLeft;
var top=t.offsetTop;
return {left:u,top:top};
}}),__dO:qx.core.Variant.select(S,{"mshtml|webkit":function(e){var g=qx.dom.Node.getDocument(e);
if(e.getBoundingClientRect){var h=e.getBoundingClientRect();
var i=h.left;
var top=h.top;
}else{var i=e.offsetLeft;
var top=e.offsetTop;
e=e.offsetParent;
var f=g.body;
while(e&&e!=f){i+=e.offsetLeft;
top+=e.offsetTop;
i+=this.__dL(e,X);
top+=this.__dL(e,Y);
e=e.offsetParent;
}}return {left:i,top:top};
},"gecko":function(bs){if(bs.getBoundingClientRect){var bv=bs.getBoundingClientRect();
var bw=Math.round(bv.left);
var top=Math.round(bv.top);
}else{var bw=0;
var top=0;
var bt=qx.dom.Node.getDocument(bs).body;
var bu=qx.bom.element.BoxSizing;

if(bu.get(bs)!==V){bw-=this.__dL(bs,X);
top-=this.__dL(bs,Y);
}
while(bs&&bs!==bt){bw+=bs.offsetLeft;
top+=bs.offsetTop;
if(bu.get(bs)!==V){bw+=this.__dL(bs,X);
top+=this.__dL(bs,Y);
}if(bs.parentNode&&this.__dK(bs.parentNode,bc)!=bj){bw+=this.__dL(bs.parentNode,X);
top+=this.__dL(bs.parentNode,Y);
}bs=bs.offsetParent;
}}return {left:bw,top:top};
},"default":function(p){var r=0;
var top=0;
var q=qx.dom.Node.getDocument(p).body;
while(p&&p!==q){r+=p.offsetLeft;
top+=p.offsetTop;
p=p.offsetParent;
}return {left:r,top:top};
}}),get:function(x,y){var z=this.__dN(x);

if(x.tagName==bi){var F=z.left;
var top=z.top;
}else{var E=this.__dO(x);
var scroll=this.__dM(x);
var F=E.left+z.left-scroll.left;
var top=E.top+z.top-scroll.top;
}var A=F+x.offsetWidth;
var B=top+x.offsetHeight;

if(y){if(y==bq||y==W){var C=qx.bom.element.Overflow.getX(x);

if(C==W||C==Q){A+=x.scrollWidth-x.offsetWidth+this.__dL(x,X)+this.__dL(x,R);
}var D=qx.bom.element.Overflow.getY(x);

if(D==W||D==Q){B+=x.scrollHeight-x.offsetHeight+this.__dL(x,Y)+this.__dL(x,T);
}}
switch(y){case bq:F+=this.__dL(x,bm);
top+=this.__dL(x,bh);
A-=this.__dL(x,bd);
B-=this.__dL(x,bg);
case W:F-=x.scrollLeft;
top-=x.scrollTop;
A-=x.scrollLeft;
B-=x.scrollTop;
case ba:F+=this.__dL(x,X);
top+=this.__dL(x,Y);
A-=this.__dL(x,R);
B-=this.__dL(x,T);
break;
case bf:F-=this.__dL(x,br);
top-=this.__dL(x,P);
A+=this.__dL(x,be);
B+=this.__dL(x,bk);
break;
}}return {left:F,top:top,right:A,bottom:B};
},getLeft:function(bx,by){return this.get(bx,by).left;
},getTop:function(bB,bC){return this.get(bB,bC).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(v,w){return this.get(v,w).bottom;
},getRelative:function(j,k,l,m){var o=this.get(j,l);
var n=this.get(k,m);
return {left:o.left-n.left,top:o.top-n.top,right:o.right-n.right,bottom:o.bottom-n.bottom};
},getPosition:function(G){return this.getRelative(G,this.getOffsetParent(G));
},getOffsetParent:function(bL){var bN=bL.offsetParent||document.body;
var bM=qx.bom.element.Style;

while(bN&&(!/^body|html$/i.test(bN.tagName)&&bM.get(bN,U)===bl)){bN=bN.offsetParent;
}return bN;
}}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,__dP:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg","1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},defer:function(b){b.__dP();
}});
})();
(function(){var F="mshtml",E="qx.client",D="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",C="qx.bom.element.Dimension",B="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",A="paddingRight",z="paddingLeft",y="paddingTop",x="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",w="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",v="paddingBottom";
qx.Class.define(C,{statics:{getWidth:qx.core.Variant.select(E,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.right)-Math.round(b.left);
}else{return a.offsetWidth;
}},"default":function(H){return H.offsetWidth;
}}),getHeight:qx.core.Variant.select(E,{"gecko":function(J){if(J.getBoundingClientRect){var K=J.getBoundingClientRect();
return Math.round(K.bottom)-Math.round(K.top);
}else{return J.offsetHeight;
}},"default":function(c){return c.offsetHeight;
}}),getSize:function(u){return {width:this.getWidth(u),height:this.getHeight(u)};
},__dQ:{visible:true,hidden:true},getContentWidth:function(n){var p=qx.bom.element.Style;
var q=qx.bom.element.Overflow.getX(n);
var r=parseInt(p.get(n,z),10);
var t=parseInt(p.get(n,A),10);

if(this.__dQ[q]){return n.clientWidth-r-t;
}else{if(n.clientWidth>=n.scrollWidth){return Math.max(n.clientWidth,n.scrollWidth)-r-t;
}else{var s=n.scrollWidth-r;
var o=qx.bom.client.Engine;

if(o.NAME===F&&o.VERSION==6){s-=t;
}return s;
}}},getContentHeight:function(f){var h=qx.bom.element.Style;
var j=qx.bom.element.Overflow.getY(f);
var k=parseInt(h.get(f,y),10);
var i=parseInt(h.get(f,v),10);

if(this.__dQ[j]){return f.clientHeight-k-i;
}else{if(f.clientHeight>=f.scrollHeight){return Math.max(f.clientHeight,f.scrollHeight)-k-i;
}else{var l=f.scrollHeight-k;
var g=qx.bom.client.Engine;

if(g.NAME===F&&g.VERSION==6){l-=i;
}return l;
}}},getContentSize:function(d){return {width:this.getContentWidth(d),height:this.getContentHeight(d)};
},getClientWidth:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return G.clientWidth;
},getClientHeight:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return e.clientHeight;
},getScrollWidth:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return I.scrollWidth;
},getScrollHeight:function(m){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
return m.scrollHeight;
}}});
})();
(function(){var C="",B="number",A="qx.client",z="/",y="mshtml",x="0",w="px",v=";",u="background-image:url(",t=");",o=")",s="background-repeat:",r="https:",n=" ",m="qx.bom.element.Background",q="url(",p="background-position:";
qx.Class.define(m,{statics:{__dR:[u,null,t,p,null,v,s,null,v],__dS:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dT:function(J,top){var K=qx.bom.client.Engine;

if(K.GECKO&&K.VERSION<1.9&&J==top&&typeof J==B){top+=0.01;
}
if(J){var L=(typeof J==B)?J+w:J;
}else{L=x;
}
if(top){var M=(typeof top==B)?top+w:top;
}else{M=x;
}return L+n+M;
},compile:function(D,E,F,top){var G=this.__dT(F,top);
var H=qx.util.ResourceManager.toUri(D);

if(qx.core.Variant.isSet(A,y)){H=this.__dU(H);
}var I=this.__dR;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(C);
},getStyles:function(a,b,c,top){if(!a){return this.__dS;
}var d=this.__dT(c,top);
var e=qx.util.ResourceManager.toUri(a);

if(qx.core.Variant.isSet(A,y)){e=this.__dU(e);
}var f={backgroundPosition:d,backgroundImage:q+e+o};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(g,h,i,j,top){var k=this.getStyles(h,i,j,top);

for(var l in k){g.style[l]=k[l];
}},__dU:qx.core.Variant.select(A,{"mshtml":function(N){var O=C;
if(window.location.protocol===r){if(N.match(/^http/)){O=C;
}else if(N.match(/^\/\//)!=null){O=window.location.protocol;
}else if(N.match(/^\.\//)!=null){N=N.substring(N.indexOf(z));
O=document.URL.substring(0,document.URL.lastIndexOf(z));
}else{O=window.location.href.substring(0,window.location.href.lastIndexOf(z)+1);
}}return O+N;
},"default":function(){}})}});
})();
(function(){var h="/",g="qx.util.ResourceManager",f="string";
qx.Bootstrap.define(g,{statics:{__dV:qx.$$resources||{},has:function(a){return !!this.__dV[a];
},getData:function(i){return this.__dV[i]||null;
},getImageWidth:function(l){var m=this.__dV[l];
return m?m[0]:null;
},getImageHeight:function(j){var k=this.__dV[j];
return k?k[1]:null;
},getImageFormat:function(d){var e=this.__dV[d];
return e?e[2]:null;
},isClippedImage:function(b){var c=this.__dV[b];
return c&&c.length>4;
},toUri:function(n){if(n==null){return n;
}var o=this.__dV[n];

if(!o){return n;
}
if(typeof o===f){var p=o;
}else{var p=o[3];
if(!p){return n;
}}return window.qxlibraries[p].resourceUri+h+n;
}}});
})();
(function(){var O="px",N="div",M="img",L="qx.client",K="",J="scale-x",I="mshtml",H="no-repeat",G="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",F="scale-y",bh="repeat",bf=".png",be="scale",bd="webkit",bc='<div style="',bb="repeat-y",ba='<img src="',Y="qx.bom.element.Decoration",X="png",W="', sizingMethod='scale')",U="', sizingMethod='crop')",V='"/>',S='" style="',T="none",Q="repeat-x",R='"></div>',P="absolute";
qx.Class.define(Y,{statics:{DEBUG:false,__dW:qx.core.Variant.isSet(L,I)&&qx.bom.client.Engine.VERSION<8,__dX:qx.core.Variant.select(L,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__dY:{"scale-x":M,"scale-y":M,"scale":M,"repeat":N,"no-repeat":N,"repeat-x":N,"repeat-y":N},update:function(s,t,u,v){var x=this.getTagName(u,t);

if(x!=s.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var y=this.getAttributes(t,u,v);

if(x===M){s.src=y.src;
}if(s.style.backgroundPosition!=K&&y.style.backgroundPosition===undefined){y.style.backgroundPosition=null;
}if(s.style.clip!=K&&y.style.clip===undefined){y.style.clip=null;
}var w=qx.bom.element.Style;
w.setStyles(s,y.style);
},create:function(z,A,B){var C=this.getTagName(A,z);
var E=this.getAttributes(z,A,B);
var D=qx.bom.element.Style.compile(E.style);

if(C===M){return ba+E.src+S+D+V;
}else{return bc+D+R;
}},getTagName:function(q,r){if(qx.core.Variant.isSet(L,I)){if(r&&this.__dW&&this.__dX[q]&&qx.lang.String.endsWith(r,bf)){return N;
}}return this.__dY[q];
},getAttributes:function(a,b,c){var g=qx.util.ResourceManager;
var l=qx.io2.ImageLoader;
var m=qx.bom.element.Background;

if(!c){c={};
}
if(!c.position){c.position=P;
}
if(qx.core.Variant.isSet(L,I)){c.fontSize=0;
c.lineHeight=0;
}else if(qx.core.Variant.isSet(L,bd)){c.WebkitUserDrag=T;
}var k=g.getImageWidth(a)||l.getWidth(a);
var j=g.getImageHeight(a)||l.getHeight(a);
var h=g.getImageFormat(a)||l.getFormat(a);
{};
if(this.__dW&&this.__dX[b]&&h===X){if(c.width==null&&k!=null){c.width=k+O;
}
if(c.height==null&&j!=null){c.height=j+O;
}
if(b==H){c.filter=G+g.toUri(a)+U;
}else{c.filter=G+g.toUri(a)+W;
}c.backgroundImage=c.backgroundRepeat=K;
return {style:c};
}else{if(b===be){var i=g.toUri(a);

if(c.width==null&&k!=null){c.width=k+O;
}
if(c.height==null&&j!=null){c.height=j+O;
}return {src:i,style:c};
}var f=g.isClippedImage(a);

if(b===J||b===F){if(f){if(b===J){var o=g.getData(a);
var p=g.getImageHeight(o[4]);
var i=g.toUri(o[4]);
c.clip={top:-o[6],height:j};
c.height=p+O;
if(c.top!=null){c.top=(parseInt(c.top,10)+o[6])+O;
}else if(c.bottom!=null){c.bottom=(parseInt(c.bottom,10)+j-p-o[6])+O;
}return {src:i,style:c};
}else{var o=g.getData(a);
var n=g.getImageWidth(o[4]);
var i=g.toUri(o[4]);
c.clip={left:-o[5],width:k};
c.width=n+O;
if(c.left!=null){c.left=(parseInt(c.left,10)+o[5])+O;
}else if(c.right!=null){c.right=(parseInt(c.right,10)+k-n-o[5])+O;
}return {src:i,style:c};
}}else{{};

if(b==J){c.height=j==null?null:j+O;
}else if(b==F){c.width=k==null?null:k+O;
}var i=g.toUri(a);
return {src:i,style:c};
}}else{if(f&&b!==bh){var o=g.getData(a);
var e=m.getStyles(o[4],b,o[5],o[6]);

for(var d in e){c[d]=e[d];
}
if(k!=null&&c.width==null&&(b==bb||b===H)){c.width=k+O;
}
if(j!=null&&c.height==null&&(b==Q||b===H)){c.height=j+O;
}return {style:c};
}else{{};
var e=m.getStyles(a,b);

for(var d in e){c[d]=e[d];
}
if(k!=null&&c.width==null){c.width=k+O;
}
if(j!=null&&c.height==null){c.height=j+O;
}if(c.filter){c.filter=K;
}return {style:c};
}}}}}});
})();
(function(){var j="qx.client",h="qx.io2.ImageLoader",g="load";
qx.Bootstrap.define(h,{statics:{__ea:{},__eb:{width:null,height:null},__ec:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(k){var m=this.__ea[k];
return !!(m&&m.loaded);
},isFailed:function(E){var F=this.__ea[E];
return !!(F&&F.failed);
},isLoading:function(t){var u=this.__ea[t];
return !!(u&&u.loading);
},getFormat:function(z){if(z!=null&&this.__ea[z]){return this.__ea[z]||null;
}else{return null;
}},getSize:function(n){return this.__ea[n]||this.__eb;
},getWidth:function(C){var D=this.__ea[C];
return D?D.width:null;
},getHeight:function(v){var w=this.__ea[v];
return w?w.height:null;
},load:function(a,b,c){var d=this.__ea[a];

if(!d){d=this.__ea[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__ed,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__ed:function(event,o,p){var q=this.__ea[p];
if(event.type===g){q.loaded=true;
q.width=this.__ee(o);
q.height=this.__ef(o);
var r=this.__ec.exec(p);

if(r!=null){q.format=r[1];
}}else{q.failed=true;
}o.onload=o.onerror=null;
var s=q.callbacks;
delete q.loading;
delete q.callbacks;
for(var i=0,l=s.length;i<l;i+=2){s[i].call(s[i+1],p,q);
}},__ee:qx.core.Variant.select(j,{"gecko":function(A){return A.naturalWidth;
},"default":function(x){return x.width;
}}),__ef:qx.core.Variant.select(j,{"gecko":function(B){return B.naturalHeight;
},"default":function(y){return y.height;
}})}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(A){return !!A.firstChild;
},hasChildElements:function(r){r=r.firstChild;

while(r){if(r.nodeType===1){return true;
}r=r.nextSibling;
}return false;
},getParentElement:function(k){return k.parentNode;
},isInDom:function(c,d){var e=d.document.getElementsByTagName(c.nodeName);

for(var i=0,l=e.length;i<l;i++){if(e[i]===c){return true;
}}return false;
},insertAt:function(n,parent,o){var p=parent.childNodes[o];

if(p){parent.insertBefore(n,p);
}else{parent.appendChild(n);
}return true;
},insertBegin:function(m,parent){if(parent.firstChild){this.insertBefore(m,parent.firstChild);
}else{parent.appendChild(m);
}},insertEnd:function(f,parent){parent.appendChild(f);
},insertBefore:function(s,t){t.parentNode.insertBefore(s,t);
return true;
},insertAfter:function(y,z){var parent=z.parentNode;

if(z==parent.lastChild){parent.appendChild(y);
}else{return this.insertBefore(y,z.nextSibling);
}return true;
},remove:function(q){if(!q.parentNode){return false;
}q.parentNode.removeChild(q);
return true;
},removeChild:function(B,parent){if(B.parentNode!==parent){return false;
}parent.removeChild(B);
return true;
},removeChildAt:function(w,parent){var x=parent.childNodes[w];

if(!x){return false;
}parent.removeChild(x);
return true;
},replaceChild:function(u,v){if(!v.parentNode){return false;
}v.parentNode.replaceChild(u,v);
return true;
},replaceAt:function(g,h,parent){var j=parent.childNodes[h];

if(!j){return false;
}parent.replaceChild(g,j);
return true;
}}});
})();
(function(){var eb="",ea="string",dY="div",dX="previousSibling",dW="*",dV="href",dU="e",dT="[object Array]",dS="Syntax error, unrecognized expression: ",dR="text",eH="file",eG="button",eF="'/>",eE="CLASS",eD="radio",eC="script",eB="className",eA="BUTTON",ez="TAG",ey="password",ei="htmlFor",ej="reset",eg="<a href='#'></a>",eh="#",ee="qx.bom.Selector",ef="<input name='",ec="parentNode",ed="NAME",ek="number",el="form",eq="submit",ep="image",es="<div class='test e'></div><div class='test'></div>",er=".TEST",eu="checkbox",et="sourceIndex",en="\\",ex="hidden",ew="<p class='TEST'></p>",ev="undefined",em="ID",eo="HTML";
qx.Bootstrap.define(ee,{statics:{query:null,matches:null}});
(function(){var df=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,dl=0,dj=Object.prototype.toString;
var db=function(I,J,K,L){K=K||[];
J=J||document;

if(J.nodeType!==1&&J.nodeType!==9)return [];

if(!I||typeof I!==ea){return K;
}var S=[],m,N,M,U,T,P,O=true;
df.lastIndex=0;

while((m=df.exec(I))!==null){S.push(m[1]);

if(m[2]){P=RegExp.rightContext;
break;
}}
if(S.length>1&&di.exec(I)){if(S.length===2&&dd.relative[S[0]]){N=dc(S[0]+S[1],J);
}else{N=dd.relative[S[0]]?[J]:db(S.shift(),J);

while(S.length){I=S.shift();

if(dd.relative[I])I+=S.shift();
N=dc(I,N);
}}}else{var Q=L?
{expr:S.pop(),set:da(L)}:db.find(S.pop(),S.length===1&&J.parentNode?J.parentNode:J,dg(J));
N=db.filter(Q.expr,Q.set);

if(S.length>0){M=da(N);
}else{O=false;
}
while(S.length){var V=S.pop(),R=V;

if(!dd.relative[V]){V=eb;
}else{R=S.pop();
}
if(R==null){R=J;
}dd.relative[V](M,R,dg(J));
}}
if(!M){M=N;
}
if(!M){throw dS+(V||I);
}
if(dj.call(M)===dT){if(!O){K.push.apply(K,M);
}else if(J.nodeType===1){for(var i=0;M[i]!=null;i++){if(M[i]&&(M[i]===true||M[i].nodeType===1&&de(J,M[i]))){K.push(N[i]);
}}}else{for(var i=0;M[i]!=null;i++){if(M[i]&&M[i].nodeType===1){K.push(N[i]);
}}}}else{da(M,K);
}
if(P){db(P,J,K,L);

if(dk){hasDuplicate=false;
K.sort(dk);

if(hasDuplicate){for(var i=1;i<K.length;i++){if(K[i]===K[i-1]){K.splice(i--,1);
}}}}}return K;
};
db.matches=function(cH,cI){return db(cH,null,null,cI);
};
db.find=function(fw,fx,fy){var fz,fB;

if(!fw){return [];
}
for(var i=0,l=dd.order.length;i<l;i++){var fA=dd.order[i],fB;

if((fB=dd.match[fA].exec(fw))){var fC=RegExp.leftContext;

if(fC.substr(fC.length-1)!==en){fB[1]=(fB[1]||eb).replace(/\\/g,eb);
fz=dd.find[fA](fB,fx,fy);

if(fz!=null){fw=fw.replace(dd.match[fA],eb);
break;
}}}}
if(!fz){fz=fx.getElementsByTagName(dW);
}return {set:fz,expr:fw};
};
db.filter=function(bw,bx,by,bz){var bA=bw,bF=[],bB=bx,bK,bJ,bC=bx&&bx[0]&&dg(bx[0]);

while(bw&&bx.length){for(var bI in dd.filter){if((bK=dd.match[bI].exec(bw))!=null){var bD=dd.filter[bI],bH,bE;
bJ=false;

if(bB==bF){bF=[];
}
if(dd.preFilter[bI]){bK=dd.preFilter[bI](bK,bB,by,bF,bz,bC);

if(!bK){bJ=bH=true;
}else if(bK===true){continue;
}}
if(bK){for(var i=0;(bE=bB[i])!=null;i++){if(bE){bH=bD(bE,bK,i,bB);
var bG=bz^!!bH;

if(by&&bH!=null){if(bG){bJ=true;
}else{bB[i]=false;
}}else if(bG){bF.push(bE);
bJ=true;
}}}}
if(bH!==undefined){if(!by){bB=bF;
}bw=bw.replace(dd.match[bI],eb);

if(!bJ){return [];
}break;
}}}if(bw==bA){if(bJ==null){throw dS+bw;
}else{break;
}}bA=bw;
}return bB;
};
var dd=db.selectors={order:[em,ed,ez],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":eB,"for":ei},attrHandle:{href:function(cu){return cu.getAttribute(dV);
}},relative:{"+":function(c,d,e){var f=typeof d===ea,h=f&&!/\W/.test(d),j=f&&!h;

if(h&&!e){d=d.toUpperCase();
}
for(var i=0,l=c.length,g;i<l;i++){if((g=c[i])){while((g=g.previousSibling)&&g.nodeType!==1){}c[i]=j||g&&g.nodeName===d?g||false:g===d;
}}
if(j){db.filter(d,c,true);
}},">":function(bg,bh,bi){var bj=typeof bh===ea;

if(bj&&!/\W/.test(bh)){bh=bi?bh:bh.toUpperCase();

for(var i=0,l=bg.length;i<l;i++){var bk=bg[i];

if(bk){var parent=bk.parentNode;
bg[i]=parent.nodeName===bh?parent:false;
}}}else{for(var i=0,l=bg.length;i<l;i++){var bk=bg[i];

if(bk){bg[i]=bj?bk.parentNode:bk.parentNode===bh;
}}
if(bj){db.filter(bh,bg,true);
}}},"":function(co,cp,cq){var cr=dl++,cs=dm;

if(!cp.match(/\W/)){var ct=cp=cq?cp:cp.toUpperCase();
cs=dp;
}cs(ec,cp,cr,co,ct,cq);
},"~":function(k,n,o){var p=dl++,q=dm;

if(typeof n===ea&&!n.match(/\W/)){var r=n=o?n:n.toUpperCase();
q=dp;
}q(dX,n,p,k,r,o);
}},find:{ID:function(cW,cX,cY){if(typeof cX.getElementById!=="undefined"&&!cY){var m=cX.getElementById(cW[1]);
return m?[m]:[];
}},NAME:function(D,E,F){if(typeof E.getElementsByName!=="undefined"){var H=[],G=E.getElementsByName(D[1]);

for(var i=0,l=G.length;i<l;i++){if(G[i].getAttribute("name")===D[1]){H.push(G[i]);
}}return H.length===0?null:H;
}},TAG:function(cF,cG){return cG.getElementsByTagName(cF[1]);
}},preFilter:{CLASS:function(bX,bY,ca,cb,cc,cd){bX=" "+bX[1].replace(/\\/g,"")+" ";

if(cd){return bX;
}
for(var i=0,ce;(ce=bY[i])!=null;i++){if(ce){if(cc^(ce.className&&(" "+ce.className+" ").indexOf(bX)>=0)){if(!ca)cb.push(ce);
}else if(ca){bY[i]=false;
}}}return false;
},ID:function(bv){return bv[1].replace(/\\/g,"");
},TAG:function(dO,dP){for(var i=0;dP[i]===false;i++){}return dP[i]&&dg(dP[i])?dO[1]:dO[1].toUpperCase();
},CHILD:function(cR){if(cR[1]=="nth"){var cS=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(cR[2]=="even"&&"2n"||cR[2]=="odd"&&"2n+1"||!/\D/.test(cR[2])&&"0n+"+cR[2]||cR[2]);
cR[2]=(cS[1]+(cS[2]||1))-0;
cR[3]=cS[3]-0;
}cR[0]=dl++;
return cR;
},ATTR:function(fi,fj,fk,fl,fm,fn){var name=fi[1].replace(/\\/g,"");

if(!fn&&dd.attrMap[name]){fi[1]=dd.attrMap[name];
}
if(fi[2]==="~="){fi[4]=" "+fi[4]+" ";
}return fi;
},PSEUDO:function(du,dv,dw,dx,dy){if(du[1]==="not"){if(du[3].match(df).length>1||/^\w/.test(du[3])){du[3]=db(du[3],null,null,dv);
}else{var dz=db.filter(du[3],dv,dw,true^dy);

if(!dw){dx.push.apply(dx,dz);
}return false;
}}else if(dd.match.POS.test(du[0])||dd.match.CHILD.test(du[0])){return true;
}return du;
},POS:function(ft){ft.unshift(true);
return ft;
}},filters:{enabled:function(cf){return cf.disabled===false&&cf.type!==ex;
},disabled:function(B){return B.disabled===true;
},checked:function(dQ){return dQ.checked===true;
},selected:function(fv){fv.parentNode.selectedIndex;
return fv.selected===true;
},parent:function(A){return !!A.firstChild;
},empty:function(fh){return !fh.firstChild;
},has:function(bM,i,bN){return !!db(bN[3],bM).length;
},header:function(dq){return /h\d/i.test(dq.nodeName);
},text:function(cJ){return dR===cJ.type;
},radio:function(cL){return eD===cL.type;
},checkbox:function(bL){return eu===bL.type;
},file:function(fD){return eH===fD.type;
},password:function(fu){return ey===fu.type;
},submit:function(cV){return eq===cV.type;
},image:function(cC){return ep===cC.type;
},reset:function(eI){return ej===eI.type;
},button:function(cE){return eG===cE.type||cE.nodeName.toUpperCase()===eA;
},input:function(fo){return /input|select|textarea|button/i.test(fo.nodeName);
}},setFilters:{first:function(cv,i){return i===0;
},last:function(fp,i,fq,fr){return i===fr.length-1;
},even:function(cK,i){return i%2===0;
},odd:function(C,i){return i%2===1;
},lt:function(cM,i,cN){return i<cN[3]-0;
},gt:function(ck,i,cl){return i>cl[3]-0;
},nth:function(eY,i,fa){return fa[3]-0==i;
},eq:function(eJ,i,eK){return eK[3]-0==i;
}},filter:{PSEUDO:function(bO,bP,i,bQ){var name=bP[1],bR=dd.filters[name];

if(bR){return bR(bO,i,bP,bQ);
}else if(name==="contains"){return (bO.textContent||bO.innerText||"").indexOf(bP[3])>=0;
}else if(name==="not"){var bS=bP[3];

for(var i=0,l=bS.length;i<l;i++){if(bS[i]===bO){return false;
}}return true;
}},CHILD:function(dF,dG){var dM=dG[1],dH=dF;

switch(dM){case 'only':case 'first':while(dH=dH.previousSibling){if(dH.nodeType===1)return false;
}
if(dM=='first')return true;
dH=dF;
case 'last':while(dH=dH.nextSibling){if(dH.nodeType===1)return false;
}return true;
case 'nth':var dN=dG[2],dJ=dG[3];

if(dN==1&&dJ==0){return true;
}var dL=dG[0],parent=dF.parentNode;

if(parent&&(parent.sizcache!==dL||!dF.nodeIndex)){var dI=0;

for(dH=parent.firstChild;dH;dH=dH.nextSibling){if(dH.nodeType===1){dH.nodeIndex=++dI;
}}parent.sizcache=dL;
}var dK=dF.nodeIndex-dJ;

if(dN==0){return dK==0;
}else{return (dK%dN==0&&dK/dN>=0);
}}},ID:function(cm,cn){return cm.nodeType===1&&cm.getAttribute("id")===cn;
},TAG:function(cT,cU){return (cU==="*"&&cT.nodeType===1)||cT.nodeName===cU;
},CLASS:function(eW,eX){return (" "+(eW.className||eW.getAttribute("class"))+" ").indexOf(eX)>-1;
},ATTR:function(s,t){var name=t[1],x=dd.attrHandle[name]?dd.attrHandle[name](s):s[name]!=null?s[name]:s.getAttribute(name),w=x+"",v=t[2],u=t[4];
return x==null?v==="!=":v==="="?w===u:v==="*="?w.indexOf(u)>=0:v==="~="?(" "+w+" ").indexOf(u)>=0:!u?w&&x!==false:v==="!="?w!=u:v==="^="?w.indexOf(u)===0:v==="$="?w.substr(w.length-u.length)===u:v==="|="?w===u||w.substr(0,u.length+1)===u+"-":false;
},POS:function(cy,cz,i,cA){var name=cz[2],cB=dd.setFilters[name];

if(cB){return cB(cy,i,cz,cA);
}}}};
var di=dd.match.POS;

for(var dn in dd.match){dd.match[dn]=RegExp(dd.match[dn].source+/(?![^\[]*\])(?![^\(]*\))/.source);
}var da=function(be,bf){be=Array.prototype.slice.call(be);

if(bf){bf.push.apply(bf,be);
return bf;
}return be;
};
try{Array.prototype.slice.call(document.documentElement.childNodes);
}catch(e){da=function(bb,bc){var bd=bc||[];

if(dj.call(bb)===dT){Array.prototype.push.apply(bd,bb);
}else{if(typeof bb.length===ek){for(var i=0,l=bb.length;i<l;i++){bd.push(bb[i]);
}}else{for(var i=0;bb[i];i++){bd.push(bb[i]);
}}}return bd;
};
}var dk;

if(document.documentElement.compareDocumentPosition){dk=function(a,b){var bW=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(bW===0){hasDuplicate=true;
}return bW;
};
}else if(et in document.documentElement){dk=function(a,b){var fs=a.sourceIndex-b.sourceIndex;

if(fs===0){hasDuplicate=true;
}return fs;
};
}else if(document.createRange){dk=function(a,b){var cP=a.ownerDocument.createRange(),cQ=b.ownerDocument.createRange();
cP.selectNode(a);
cP.collapse(true);
cQ.selectNode(b);
cQ.collapse(true);
var cO=cP.compareBoundaryPoints(Range.START_TO_END,cQ);

if(cO===0){hasDuplicate=true;
}return cO;
};
}(function(){var bV=document.createElement(el),bU=eC+(new Date).getTime();
bV.innerHTML=ef+bU+eF;
var bT=document.documentElement;
bT.insertBefore(bV,bT.firstChild);
if(!!document.getElementById(bU)){dd.find.ID=function(dr,ds,dt){if(typeof ds.getElementById!=="undefined"&&!dt){var m=ds.getElementById(dr[1]);
return m?m.id===dr[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===dr[1]?[m]:undefined:[];
}};
dd.filter.ID=function(fE,fF){var fG=typeof fE.getAttributeNode!=="undefined"&&fE.getAttributeNode("id");
return fE.nodeType===1&&fG&&fG.nodeValue===fF;
};
}bT.removeChild(bV);
})();
(function(){var eM=document.createElement(dY);
eM.appendChild(document.createComment(eb));
if(eM.getElementsByTagName(dW).length>0){dd.find.TAG=function(cg,ch){var cj=ch.getElementsByTagName(cg[1]);
if(cg[1]==="*"){var ci=[];

for(var i=0;cj[i];i++){if(cj[i].nodeType===1){ci.push(cj[i]);
}}cj=ci;
}return cj;
};
}eM.innerHTML=eg;

if(eM.firstChild&&typeof eM.firstChild.getAttribute!==ev&&eM.firstChild.getAttribute(dV)!==eh){dd.attrHandle.href=function(bl){return bl.getAttribute(dV,2);
};
}})();

if(document.querySelectorAll)(function(){var z=db,y=document.createElement(dY);
y.innerHTML=ew;
if(y.querySelectorAll&&y.querySelectorAll(er).length===0){return;
}db=function(W,X,Y,ba){X=X||document;
if(!ba&&X.nodeType===9&&!dg(X)){try{return da(X.querySelectorAll(W),Y);
}catch(e){}}return z(W,X,Y,ba);
};
db.find=z.find;
db.filter=z.filter;
db.selectors=z.selectors;
db.matches=z.matches;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var cD=document.createElement(dY);
cD.innerHTML=es;
if(cD.getElementsByClassName(dU).length===0)return;
cD.lastChild.className=dU;

if(cD.getElementsByClassName(dU).length===1)return;
dd.order.splice(1,0,eE);
dd.find.CLASS=function(dC,dD,dE){if(typeof dD.getElementsByClassName!=="undefined"&&!dE){return dD.getElementsByClassName(dC[1]);
}};
})();
function dp(eN,eO,eP,eQ,eR,eS){var eT=eN==dX&&!eS;

for(var i=0,l=eQ.length;i<l;i++){var eV=eQ[i];

if(eV){if(eT&&eV.nodeType===1){eV.sizcache=eP;
eV.sizset=i;
}eV=eV[eN];
var eU=false;

while(eV){if(eV.sizcache===eP){eU=eQ[eV.sizset];
break;
}
if(eV.nodeType===1&&!eS){eV.sizcache=eP;
eV.sizset=i;
}
if(eV.nodeName===eO){eU=eV;
break;
}eV=eV[eN];
}eQ[i]=eU;
}}}function dm(bm,bn,bo,bp,bq,br){var bs=bm==dX&&!br;

for(var i=0,l=bp.length;i<l;i++){var bu=bp[i];

if(bu){if(bs&&bu.nodeType===1){bu.sizcache=bo;
bu.sizset=i;
}bu=bu[bm];
var bt=false;

while(bu){if(bu.sizcache===bo){bt=bp[bu.sizset];
break;
}
if(bu.nodeType===1){if(!br){bu.sizcache=bo;
bu.sizset=i;
}
if(typeof bn!==ea){if(bu===bn){bt=true;
break;
}}else if(db.filter(bn,[bu]).length>0){bt=bu;
break;
}}bu=bu[bm];
}bp[i]=bt;
}}}var de=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var dg=function(eL){return eL.nodeType===9&&eL.documentElement.nodeName!==eo||!!eL.ownerDocument&&dg(eL.ownerDocument);
};
var dc=function(fb,fc){var fe=[],fd=eb,fg,ff=fc.nodeType?[fc]:fc;
while((fg=dd.match.PSEUDO.exec(fb))){fd+=fg[0];
fb=fb.replace(dd.match.PSEUDO,eb);
}fb=dd.relative[fb]?fb+dW:fb;

for(var i=0,l=ff.length;i<l;i++){db(fb,ff[i],fe);
}return db.filter(fd,fe);
};
var dh=qx.bom.Selector;
dh.query=function(dA,dB){return db(dA,dB);
};
dh.matches=function(cw,cx){return db(cw,null,null,cx);
};
})();
})();
(function(){var p="mshtml",o="pop.push.reverse.shift.sort.splice.unshift.join.slice",n="number",m="qx.type.BaseArray",k="qx.client",j=".";
qx.Class.define(m,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function D(r){if(qx.core.Variant.isSet(k,p)){C.prototype={length:0,$$isArray:true};
var u=o.split(j);

for(var length=u.length;length;){C.prototype[u[--length]]=Array.prototype[u[length]];
}}var v=Array.prototype.slice;
C.prototype.concat=function(){var F=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var E;

if(arguments[i] instanceof C){E=v.call(arguments[i],0);
}else if(arguments[i] instanceof Array){E=arguments[i];
}else{E=[arguments[i]];
}F.push.apply(F,E);
}return F;
};
C.prototype.toString=function(){return v.call(this,0).toString();
};
C.prototype.toLocaleString=function(){return v.call(this,0).toLocaleString();
};
C.prototype.constructor=C;
var s=Array.prototype.filter;
var t=Array.prototype.map;
if(!Array.prototype.indexOf){C.prototype.indexOf=function(G,H){if(H==null){H=0;
}else if(H<0){H=Math.max(0,this.length+H);
}
for(var i=H;i<this.length;i++){if(this[i]===G){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){C.prototype.lastIndexOf=function(I,J){if(J==null){J=this.length-1;
}else if(J<0){J=Math.max(0,this.length+J);
}
for(var i=J;i>=0;i--){if(this[i]===I){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){C.prototype.forEach=function(a,b){var l=this.length;

for(var i=0;i<l;i++){a.call(b,this[i],i,this);
}};
}
if(!s){s=function(f,g){var l=this.length;
var h=[];

for(var i=0;i<l;i++){if(f.call(g,this[i],i,this)){h.push(this[i]);
}}return h;
};
}
if(!t){t=function(y,z){var l=this.length;
var A=[];

for(var i=0;i<l;i++){A.push(y.call(z,this[i],i,this));
}return A;
};
}
if(!Array.prototype.some){C.prototype.some=function(d,e){var l=this.length;

for(var i=0;i<l;i++){if(d.call(e,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){C.prototype.every=function(K,L){var l=this.length;

for(var i=0;i<l;i++){if(!K.call(L,this[i],i,this)){return false;
}}return true;
};
}C.prototype.filter=function(){var w=new this.constructor;
w.push.apply(w,s.apply(this,arguments));
return w;
};
C.prototype.map=function(){var c=new this.constructor;
c.push.apply(c,t.apply(this,arguments));
return c;
};
C.prototype.slice=function(){var q=new this.constructor;
q.push.apply(q,Array.prototype.slice.apply(this,arguments));
return q;
};
C.prototype.splice=function(){var x=new this.constructor;
x.push.apply(x,Array.prototype.splice.apply(this,arguments));
return x;
};
C.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
C.prototype.valueOf=function(){return this.length;
};
return C;
}function C(length){if(arguments.length===1&&typeof length===n){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function B(){}B.prototype=[];
C.prototype=new B;
C.prototype.length=0;
qx.type.BaseArray=D(C);
})();
})();
(function(){var G="change",F="input",E="checkbox",D="radio",C="textarea",B="text",A="qx.client",z="propertychange",y="keypress",x="select-multiple",u="checked",w="value",v="select",t="qx.event.handler.Input",s="Enter";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(m,n){var p=m.tagName.toLowerCase();

if(n===F&&(p===F||p===C)){return true;
}
if(n===G&&(p===F||p===C||p===v)){return true;
}return false;
},registerEvent:qx.core.Variant.select(A,{"mshtml":function(H,I,J){if(!H.__eg){var K=H.tagName.toLowerCase();
var L=H.type;

if(L===B||K===C||L===E||L===D){qx.bom.Event.addNativeListener(H,z,this._onPropertyWrapper);
}
if(L!==E&&L!==D){qx.bom.Event.addNativeListener(H,G,this._onChangeValueWrapper);
}this.__eh(H,L);
H.__eg=true;
}},"default":function(a,b,c){if(b===F){qx.bom.Event.addNativeListener(a,F,this._onInputWrapper);
}else if(b===G){if(a.type===D||a.type===E){qx.bom.Event.addNativeListener(a,G,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(a,G,this._onChangeValueWrapper);
}this.__eh(a,a.type);
}}}),unregisterEvent:qx.core.Variant.select(A,{"mshtml":function(d,f){if(d.__eg){var g=d.tagName.toLowerCase();
var h=d.type;

if(h===B||g===C||h===E||h===D){qx.bom.Event.removeNativeListener(d,z,this._onPropertyWrapper);
}
if(h!==E&&h!==D){qx.bom.Event.removeNativeListener(d,G,this._onChangeValueWrapper);
}
try{delete d.__eg;
}catch(q){d.__eg=null;
}}},"default":function(j,k){if(k===F){qx.bom.Event.removeNativeListener(j,F,this._onInputWrapper);
}else if(k===G){if(j.type===D||j.type===E){qx.bom.Event.removeNativeListener(j,G,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(j,G,this._onChangeValueWrapper);
}}}}),__eh:qx.core.Variant.select(A,{"mshtml|opera":function(O,P){if(P===B){qx.event.Registration.addListener(O,y,function(e){if(e.getKeyIdentifier()===s){qx.event.Registration.fireEvent(O,G,qx.event.type.Data,[O.value]);
}});
}},"default":function(S,T){}}),_onInput:function(e){var M=e.target;
qx.event.Registration.fireEvent(M,F,qx.event.type.Data,[M.value]);
},_onChangeValue:function(e){var R=e.target||e.srcElement;
var Q=R.value;

if(R.type===x){var Q=[];

for(var i=0,o=R.options,l=o.length;i<l;i++){if(o[i].selected){Q.push(o[i].value);
}}}qx.event.Registration.fireEvent(R,G,qx.event.type.Data,[Q]);
},_onChangeChecked:function(e){var r=e.target;

if(r.type===D){if(r.checked){qx.event.Registration.fireEvent(r,G,qx.event.type.Data,[r.value]);
}}else{qx.event.Registration.fireEvent(r,G,qx.event.type.Data,[r.checked]);
}},_onProperty:qx.core.Variant.select(A,{"mshtml":function(e){var U=e.target||e.srcElement;
var V=e.propertyName;

if(V===w&&(U.type===B||U.tagName.toLowerCase()===C)){if(!U.__inValueSet){qx.event.Registration.fireEvent(U,F,qx.event.type.Data,[U.value]);
}}else if(V===u){if(U.type===E){qx.event.Registration.fireEvent(U,G,qx.event.type.Data,[U.checked]);
}else if(U.checked){qx.event.Registration.fireEvent(U,G,qx.event.type.Data,[U.value]);
}}},"default":function(){}})},defer:function(N){qx.event.Registration.addHandler(N);
}});
})();
(function(){var Y="",X="select",W="soft",V="off",U="qx.client",T="wrap",S="text",R="mshtml",Q="number",P="checkbox",I="select-one",O="input",L="option",H="value",G="radio",K="qx.bom.Input",J="nowrap",M="textarea",F="auto",N="normal";
qx.Class.define(K,{statics:{__ei:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(r,s,t){{};
var s=s?qx.lang.Object.clone(s):{};
var u;

if(r===M||r===X){u=r;
}else{u=O;
s.type=r;
}return qx.bom.Element.create(u,s,t);
},setValue:function(a,b){var g=a.nodeName.toLowerCase();
var d=a.type;
var Array=qx.lang.Array;
var h=qx.lang.Type;

if(typeof b===Q){b+=Y;
}
if((d===P||d===G)){if(h.isArray(b)){a.checked=Array.contains(b,a.value);
}else{a.checked=a.value==b;
}}else if(g===X){var c=h.isArray(b);
var j=a.options;
var e,f;

for(var i=0,l=j.length;i<l;i++){e=j[i];
f=e.getAttribute(H);

if(f==null){f=e.text;
}e.selected=c?Array.contains(b,f):b==f;
}
if(c&&b.length==0){a.selectedIndex=-1;
}}else if(d===S&&qx.core.Variant.isSet(U,R)){a.__ej=true;
a.value=b;
a.__ej=null;
}else{a.value=b;
}},getValue:function(v){var B=v.nodeName.toLowerCase();

if(B===L){return (v.attributes.value||{}).specified?v.value:v.text;
}
if(B===X){var w=v.selectedIndex;
if(w<0){return null;
}var C=[];
var E=v.options;
var D=v.type==I;
var A=qx.bom.Input;
var z;
for(var i=D?w:0,y=D?w+1:E.length;i<y;i++){var x=E[i];

if(x.selected){z=A.getValue(x);
if(D){return z;
}C.push(z);
}}return C;
}else{return (v.value||Y).replace(/\r/g,Y);
}},setWrap:qx.core.Variant.select(U,{"mshtml":function(ba,bb){ba.wrap=bb?W:V;
},"gecko":function(n,o){var q=o?W:V;
var p=o?Y:F;
n.setAttribute(T,q);
n.style.overflow=p;
},"default":function(k,m){k.style.whiteSpace=m?N:J;
}})}});
})();
(function(){var bz="get",by="set",bx="reset",bw=":not(",bv="getValue",bu="append",bt=")",bs="getPreviousSiblings",br="getOffsetParent",bq="qx.bom.Collection",bX="setValue",bW="prepend",bV="string",bU="getAncestors",bT="#",bS="remove",bR=">*",bQ="add",bP="*",bO="",bG="addListener",bH="has",bE="toggle",bF="getSiblings",bC="replace",bD="after",bA="replaceWith",bB="setCss",bI="setStyles",bJ="before",bL="getNextSiblings",bK="getPosition",bN="getCss",bM="removeListener";
(function(){var U=function(M,N){return function(p,q,r,s,t,u){var length=this.length;

if(length>0){var v=M[N];

for(var i=0;i<length;i++){if(this[i].nodeType===1){v.call(M,this[i],p,q,r,s,t,u);
}}}return this;
};
};
var T=function(a,b){return function(cu,cv,cw,cx,cy,cz){if(this.length>0){var cA=this[0].nodeType===1?a[b](this[0],cu,cv,cw,cx,cy,cz):null;

if(cA&&cA.nodeType){return this.__en([cA]);
}else{return cA;
}}return null;
};
};
qx.Class.define(bq,{extend:qx.type.BaseArray,statics:{query:function(bc,bd){var be=qx.bom.Selector.query(bc,bd);
return qx.lang.Array.cast(be,qx.bom.Collection);
},id:function(cd){var ce=document.getElementById(cd);
if(ce&&ce.id!=cd){return qx.bom.Collection.query(bT+cd);
}return new qx.bom.Collection(ce);
},html:function(di,dj){var dk=qx.bom.Html.clean([di],dj);
return qx.lang.Array.cast(dk,qx.bom.Collection);
},__ek:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(P,Q){var S=qx.bom.Collection;
if(P.nodeType){return new S(P);
}else if(typeof P===bV){var R=S.__ek.exec(P);

if(R){return R[1]?S.html(R[1],Q):S.id(R[3].substring(1));
}else{return S.query(P,Q);
}}else{return qx.lang.Array.cast(P,qx.bom.Collection);
}}},members:{setAttribute:U(qx.bom.element.Attribute,by),resetAttribute:U(qx.bom.element.Attribute,bx),getAttribute:T(qx.bom.element.Attribute,bz),addClass:U(qx.bom.element.Class,bQ),getClass:T(qx.bom.element.Class,bz),hasClass:T(qx.bom.element.Class,bH),removeClass:U(qx.bom.element.Class,bS),replaceClass:U(qx.bom.element.Class,bC),toggleClass:U(qx.bom.element.Class,bE),setValue:U(qx.bom.Input,bX),getValue:T(qx.bom.Input,bv),setStyle:U(qx.bom.element.Style,by),setStyles:U(qx.bom.element.Style,bI),resetStyle:U(qx.bom.element.Style,bx),getStyle:T(qx.bom.element.Style,bz),setCss:U(qx.bom.element.Style,bB),getCss:U(qx.bom.element.Style,bN),getOffset:T(qx.bom.element.Location,bz),getPosition:T(qx.bom.element.Location,bK),getOffsetParent:T(qx.bom.element.Location,br),setScrollLeft:function(E){var Node=qx.dom.Node;

for(var i=0,l=this.length,F;i<l;i++){F=this[i];

if(Node.isElement(F)){F.scrollLeft=E;
}else if(Node.isWindow(F)){F.scrollTo(E,this.getScrollTop(F));
}else if(Node.isDocument(F)){Node.getWindow(F).scrollTo(E,this.getScrollTop(F));
}}return this;
},setScrollTop:function(cW){var Node=qx.dom.Node;

for(var i=0,l=this.length,cX;i<l;i++){cX=this[i];

if(Node.isElement(cX)){cX.scrollTop=cW;
}else if(Node.isWindow(cX)){cX.scrollTo(this.getScrollLeft(cX),cW);
}else if(Node.isDocument(cX)){Node.getWindow(cX).scrollTo(this.getScrollLeft(cX),cW);
}}return this;
},getScrollLeft:function(){var de=this[0];

if(!de){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(de)||Node.isDocument(de)){return qx.bom.Viewport.getScrollLeft();
}return de.scrollLeft;
},getScrollTop:function(){var cB=this[0];

if(!cB){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cB)||Node.isDocument(cB)){return qx.bom.Viewport.getScrollTop();
}return cB.scrollTop;
},getWidth:function(){var df=this[0];
var Node=qx.dom.Node;

if(df){if(Node.isElement(df)){return qx.bom.element.Dimension.getWidth(df);
}else if(Node.isDocument(df)){return qx.bom.Document.getWidth(Node.getWindow(df));
}else if(Node.isWindow(df)){return qx.bom.Viewport.getWidth(df);
}}return null;
},getContentWidth:function(){var bY=this[0];

if(qx.dom.Node.isElement(bY)){return qx.bom.element.Dimension.getContentWidth(bY);
}return null;
},getHeight:function(){var cQ=this[0];
var Node=qx.dom.Node;

if(cQ){if(Node.isElement(cQ)){return qx.bom.element.Dimension.getHeight(cQ);
}else if(Node.isDocument(cQ)){return qx.bom.Document.getHeight(Node.getWindow(cQ));
}else if(Node.isWindow(cQ)){return qx.bom.Viewport.getHeight(cQ);
}}return null;
},getContentHeight:function(){var c=this[0];

if(qx.dom.Node.isElement(c)){return qx.bom.element.Dimension.getContentHeight(c);
}return null;
},addListener:U(qx.bom.Element,bG),removeListener:U(qx.bom.Element,bM),eq:function(ct){return this.slice(ct,+ct+1);
},filter:function(X,Y){var ba;

if(qx.lang.Type.isFunction(X)){ba=qx.type.BaseArray.prototype.filter.call(this,X,Y);
}else{ba=qx.bom.Selector.matches(X,this);
}return this.__en(ba);
},is:function(cc){return !!cc&&qx.bom.Selector.matches(cc,this).length>0;
},__el:/^.[^:#\[\.,]*$/,not:function(cj){if(this.__el.test(cj)){var ck=qx.bom.Selector.matches(bw+cj+bt,this);
return this.__en(ck);
}var ck=qx.bom.Selector.matches(cj,this);
return this.filter(function(cn){return ck.indexOf(cn)===-1;
});
},add:function(bm,bn){var bo=qx.bom.Selector.query(bm,bn);
var bp=qx.lang.Array.unique(this.concat(bo));
return this.__en(bp);
},children:function(co){var cp=[];

for(var i=0,l=this.length;i<l;i++){cp.push.apply(cp,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(co){cp=qx.bom.Selector.matches(co,cp);
}return this.__en(cp);
},closest:function(H){var I=new qx.bom.Collection(1);
var K=qx.bom.Selector;
var J=this.map(function(w){while(w&&w.ownerDocument){I[0]=w;

if(K.matches(H,I).length>0){return w;
}w=w.parentNode;
}});
return this.__en(qx.lang.Array.unique(J));
},contents:function(){var cH=[];
var cG=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){cH.push.apply(cH,cG.fromCollection(this[i].childNodes));
}return this.__en(cH);
},find:function(da){var dc=qx.bom.Selector;
if(this.length===1){return this.__en(dc.query(da,this[0]));
}else{var db=[];

for(var i=0,l=this.length;i<l;i++){db.push.apply(db,dc.query(da,this[i]));
}return this.__en(qx.lang.Array.unique(db));
}},next:function(cI){var cJ=qx.dom.Hierarchy;
var cK=this.map(cJ.getNextElementSibling,cJ);
if(cI){cK=qx.bom.Selector.matches(cI,cK);
}return this.__en(cK);
},nextAll:function(L){return this.__em(bL,L);
},prev:function(cq){var cr=qx.dom.Hierarchy;
var cs=this.map(cr.getPreviousElementSibling,cr);
if(cq){cs=qx.bom.Selector.matches(cq,cs);
}return this.__en(cs);
},prevAll:function(cR){return this.__em(bs,cR);
},parent:function(cf){var Element=qx.dom.Element;
var cg=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(cf){cg=qx.bom.Selector.matches(cf,cg);
}return this.__en(cg);
},parents:function(cC){return this.__em(bU,cC);
},siblings:function(cV){return this.__em(bF,cV);
},__em:function(z,A){var C=[];
var B=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){C.push.apply(C,B[z](this[i]));
}var D=qx.lang.Array.unique(C);
if(A){D=qx.bom.Selector.matches(A,D);
}return this.__en(D);
},__en:function(cl){var cm=new qx.bom.Collection;
cm.__eo=this;
cl=Array.prototype.slice.call(cl,0);
cm.push.apply(cm,cl);
return cm;
},andSelf:function(){return this.add(this.__eo);
},end:function(){return this.__eo||new qx.bom.Collection();
},__ep:function(dm,dn){var dt=this[0];
var ds=dt.ownerDocument||dt;
var dr=ds.createDocumentFragment();
var dv=qx.bom.Html.clean(dm,ds,dr);
var dx=dr.firstChild;
if(dx){var dp=this.length-1;

for(var i=0,l=dp;i<l;i++){dn.call(this,this[i],dr.cloneNode(true));
}dn.call(this,this[dp],dr);
}if(dv){var dq;
var dw=qx.io2.ScriptLoader;
var du=qx.lang.Function;

for(var i=0,l=dv.length;i<l;i++){dq=dv[i];
if(dq.src){dw.get().load(dq.src);
}else{du.globalEval(dq.text||dq.textContent||dq.innerHTML||bO);
}if(dq.parentNode){dq.parentNode.removeChild(dq);
}}}return this;
},__eq:function(d,e){var g=qx.bom.Selector;
var f=qx.lang.Array;
var k=[];

for(var i=0,l=d.length;i<l;i++){{};
k.push.apply(k,g.query(d[i]));
}k=f.cast(f.unique(k),qx.bom.Collection);
for(var i=0,h=this.length;i<h;i++){k[e](this[i]);
}return this;
},append:function(bb){return this.__ep(arguments,this.__er);
},prepend:function(cL){return this.__ep(arguments,this.__es);
},__er:function(V,W){V.appendChild(W);
},__es:function(cT,cU){cT.insertBefore(cU,cT.firstChild);
},appendTo:function(cE){return this.__eq(arguments,bu);
},prependTo:function(ca){return this.__eq(arguments,bW);
},before:function(cF){return this.__ep(arguments,this.__et);
},after:function(cS){return this.__ep(arguments,this.__eu);
},__et:function(ch,ci){ch.parentNode.insertBefore(ci,ch);
},__eu:function(x,y){x.parentNode.insertBefore(y,x.nextSibling);
},insertBefore:function(m){return this.__eq(arguments,bJ);
},insertAfter:function(cb){return this.__eq(arguments,bD);
},wrapAll:function(content){var o=this[0];

if(o){var n=qx.bom.Collection.create(content,o.ownerDocument).clone();
if(o.parentNode){o.parentNode.insertBefore(n[0],o);
}n.map(this.__ev).append(this);
}return this;
},__ev:function(dd){while(dd.firstChild){dd=dd.firstChild;
}return dd;
},wrapInner:function(content){var dl=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dl[0]=this[i];
dl.contents().wrapAll(content);
}return this;
},wrap:function(content){var cD=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){cD[0]=this[i];
cD.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(O){return this.__eq(arguments,bA);
},remove:function(cM){var cO=this;

if(cM){cO=this.filter(cM);

if(cO.length==0){return this;
}}for(var i=0,cP=cO.length,cN;i<cP;i++){cN=cO[i];

if(cN.parentNode){cN.parentNode.removeChild(cN);
}}return cO;
},destroy:function(bf){if(this.length==0){return this;
}var bh=qx.bom.Selector;
var bk=this;

if(bf){bk=this.filter(bf);

if(bk.length==0){return this;
}}var bj=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bk.length,bi,bl;i<l;i++){bi=bk[i];
bj.removeAllListeners(bi);
bl=bh.query(bP,bi);

for(var j=0,bg=bl.length;j<bg;j++){bj.removeAllListeners(bl[j]);
}if(bi.parentNode){bi.parentNode.removeChild(bi);
}}if(bf){bk.end();
qx.lang.Array.exclude(this,bk);
}else{this.length=0;
}return this;
},empty:function(){var cY=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){cY.query(bR,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(G){var Element=qx.bom.Element;
return G?
this.map(function(dy){return Element.clone(dy,true);
}):this.map(Element.clone,Element);
}},defer:function(dg,dh){if(window.$==null){window.$=dg.create;
}}});
})();
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ew:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__ex:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__ey:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__ew);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__ex;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if(qx.core.Variant.isSet(m,q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==g&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===k){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===k){ba=this.__ey(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===h&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(h));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var r="success",q="head",p="complete",o="loaded",n="readystatechange",m="__eD",l="__eA",k="error",j="load",i="script",c="fail",h="qx.io2.ScriptLoader",g="qx.client",b="text/javascript",a="__ez",f="__eC",d="abort";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ez=qx.lang.Function.bind(this.__eF,this);
this.__eA=document.createElement(i);
},members:{__eB:null,__eC:null,__eD:null,__ez:null,__eA:null,load:function(t,u,v){if(this.__eB){throw new Error("Another request is still running!");
}this.__eB=true;
var w=document.getElementsByTagName(q)[0];
var x=this.__eA;
this.__eC=u||null;
this.__eD=v||window;
x.type=b;
x.onerror=x.onload=x.onreadystatechange=this.__ez;
x.src=t;
w.appendChild(x);
},abort:function(){if(this.__eB){this.__eE(d);
}},__eE:function(status){var s=this.__eA;
s.onerror=s.onload=s.onreadystatechange=null;
document.getElementsByTagName(q)[0].removeChild(s);
delete this.__eB;
this.__eC.call(this.__eD,status);
},__eF:qx.core.Variant.select(g,{"mshtml":function(){var y=this.__eA.readyState;

if(y==o){this.__eE(r);
}else if(y==p){this.__eE(r);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===k){this.__eE(c);
}else if(e.type===j){this.__eE(r);
}else if(e.type===n&&(e.target.readyState===p||e.target.readyState===o)){this.__eE(r);
}else{return;
}}})},destruct:function(){this._disposeFields(l,a,f,m);
}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

