"use strict";(()=>{var e={};e.id=155,e.ids=[155],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8036:(e,t,i)=>{i.r(t),i.d(t,{headerHooks:()=>b,originalPathname:()=>m,patchFetch:()=>w,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>p,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>f});var r={};i.r(r),i.d(r,{GET:()=>u,dynamic:()=>A});var o=i(5419),n=i(9108),a=i(9678),s=i(9647);let l=Buffer.from("AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYFI8AHxxXzA9LBLqOCcM/zgnDP8+LRPue3BePWNVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBSPAB8cV8wPSwS6jgnDP84Jwz/Pi0T7ntwXj1jVUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgUjwAfHFfMD0sEuo4Jwz/OCcM/z4tE+57cF49Y1VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYFI8AHxxXzA9LBLqOCcM/zgnDP8+LRPue3BePWNVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBSPAB8cV8wPSwS6jgnDP84Jwz/Pi0T7ntwXj1jVUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgUjwAfHFfMD0sEuo4Jwz/OCcM/z4tE+57cF49Y1VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYFI8AHxxXzA9LBLqOCcM/zgnDP8+LRPue3BePWNVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBSPAB8cV8wPSwS6jgnDP84Jwz/Pi0T7ntwXj1jVUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgUjwAfHFfMD0sEuo4Jwz/OCcM/z4tE+57cF49Y1VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYFI8AHxxXzA9LBLqOCcM/zgnDP8+LRPue3BePWNVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBSPAB8cV8wPSwS6jgnDP84Jwz/Pi0T7ntwXj1jVUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhUz4AgHRjLz0sEuk4Jwz/OCcM/z4tE+5+cmE7ZFZCAAAAAAAAAAAAAAAAAAAAAABjVkEQSDkgcTgnC4A4Jwx/OCcMfkMzGZg6KQ/0OCcM/zgnDP87Kg/2RjYclzcmC3Y4Jwx4OCcMeTgnDGo4JwwPY1ZBH0g5IOI4Jwv/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84JwziOCcMH2NWQR9IOSDiOCcL/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM4jgnDB9jVkEfSDkg4jgnC/84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDP84Jwz/OCcM/zgnDOI4Jwwf+B8AAPgfAAD4HwAA+B8AAPgfAAD4HwAA+B8AAPgfAAD4HwAA+B8AAPgfAAD4HwAAAAAAAAAAAAAAAAAAAAAAAA==","base64");function u(){return new s.NextResponse(l,{headers:{"Content-Type":"image/x-icon","Cache-Control":"public, max-age=0, must-revalidate"}})}let A="force-static",d=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/favicon.ico/route",pathname:"/favicon.ico",filename:"favicon",bundlePath:"app/favicon.ico/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/nickyli/BootCamp-AA-sept-2023/00-Module7/00-Nicky-Portfolio/NickyPortfolio/app/favicon.ico?__next_metadata_route__",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:h,serverHooks:p,headerHooks:b,staticGenerationBailout:f}=d,m="/favicon.ico/route";function w(){return(0,a.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:h})}},2491:e=>{var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,n={};function a(e){var t;let i=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean);return`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}; ${i.join("; ")}`}function s(e){let t=new Map;for(let i of e.split(/; */)){if(!i)continue;let e=i.indexOf("=");if(-1===e){t.set(i,"true");continue}let[r,o]=[i.slice(0,e),i.slice(e+1)];try{t.set(r,decodeURIComponent(null!=o?o:"true"))}catch{}}return t}function l(e){var t,i;if(!e)return;let[[r,o],...n]=s(e),{domain:a,expires:l,httponly:d,maxage:c,path:h,samesite:p,secure:b,priority:f}=Object.fromEntries(n.map(([e,t])=>[e.toLowerCase(),t]));return function(e){let t={};for(let i in e)e[i]&&(t[i]=e[i]);return t}({name:r,value:decodeURIComponent(o),domain:a,...l&&{expires:new Date(l)},...d&&{httpOnly:!0},..."string"==typeof c&&{maxAge:Number(c)},path:h,...p&&{sameSite:u.includes(t=(t=p).toLowerCase())?t:void 0},...b&&{secure:!0},...f&&{priority:A.includes(i=(i=f).toLowerCase())?i:void 0}})}((e,i)=>{for(var r in i)t(e,r,{get:i[r],enumerable:!0})})(n,{RequestCookies:()=>d,ResponseCookies:()=>c,parseCookie:()=>s,parseSetCookie:()=>l,stringifyCookie:()=>a}),e.exports=((e,n,a,s)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let a of r(n))o.call(e,a)||void 0===a||t(e,a,{get:()=>n[a],enumerable:!(s=i(n,a))||s.enumerable});return e})(t({},"__esModule",{value:!0}),n);var u=["strict","lax","none"],A=["low","medium","high"],d=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t)for(let[e,i]of s(t))this._parsed.set(e,{name:e,value:i})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let i=Array.from(this._parsed);if(!e.length)return i.map(([e,t])=>t);let r="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return i.filter(([e])=>e===r).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,i]=1===e.length?[e[0].name,e[0].value]:e,r=this._parsed;return r.set(t,{name:t,value:i}),this._headers.set("cookie",Array.from(r).map(([e,t])=>a(t)).join("; ")),this}delete(e){let t=this._parsed,i=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>a(t)).join("; ")),i}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},c=class{constructor(e){var t,i,r;this._parsed=new Map,this._headers=e;let o=null!=(r=null!=(i=null==(t=e.getSetCookie)?void 0:t.call(e))?i:e.get("set-cookie"))?r:[];for(let e of Array.isArray(o)?o:function(e){if(!e)return[];var t,i,r,o,n,a=[],s=0;function l(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,n=!1;l();)if(","===(i=e.charAt(s))){for(r=s,s+=1,l(),o=s;s<e.length&&"="!==(i=e.charAt(s))&&";"!==i&&","!==i;)s+=1;s<e.length&&"="===e.charAt(s)?(n=!0,s=o,a.push(e.substring(t,r)),t=s):s=r+1}else s+=1;(!n||s>=e.length)&&a.push(e.substring(t,e.length))}return a}(o)){let t=l(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let i=Array.from(this._parsed.values());if(!e.length)return i;let r="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return i.filter(e=>e.name===r)}has(e){return this._parsed.has(e)}set(...e){let[t,i,r]=1===e.length?[e[0].name,e[0].value,e[0]]:e,o=this._parsed;return o.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:i,...r})),function(e,t){for(let[,i]of(t.delete("set-cookie"),e)){let e=a(i);t.append("set-cookie",e)}}(o,this._headers),this}delete(...e){let[t,i,r]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:i,domain:r,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(a).join("; ")}}},3825:(e,t,i)=>{var r;(()=>{var o={226:function(o,n){!function(a,s){var l="function",u="undefined",A="object",d="string",c="major",h="model",p="name",b="type",f="vendor",m="version",w="architecture",g="console",v="mobile",x="tablet",y="smarttv",P="wearable",k="embedded",_="Amazon",O="Apple",S="ASUS",j="BlackBerry",C="Browser",R="Chrome",z="Firefox",L="Google",M="Huawei",N="Microsoft",U="Motorola",D="Opera",q="Samsung",E="Sharp",B="Sony",T="Xiaomi",I="Zebra",H="Facebook",J="Chromium OS",$="Mac OS",F=function(e,t){var i={};for(var r in e)t[r]&&t[r].length%2==0?i[r]=t[r].concat(e[r]):i[r]=e[r];return i},V=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},G=function(e,t){return typeof e===d&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},X=function(e,t){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof t===u?e:e.substring(0,350)},Y=function(e,t){for(var i,r,o,n,a,u,d=0;d<t.length&&!a;){var c=t[d],h=t[d+1];for(i=r=0;i<c.length&&!a&&c[i];)if(a=c[i++].exec(e))for(o=0;o<h.length;o++)u=a[++r],typeof(n=h[o])===A&&n.length>0?2===n.length?typeof n[1]==l?this[n[0]]=n[1].call(this,u):this[n[0]]=n[1]:3===n.length?typeof n[1]!==l||n[1].exec&&n[1].test?this[n[0]]=u?u.replace(n[1],n[2]):s:this[n[0]]=u?n[1].call(this,u,n[2]):s:4===n.length&&(this[n[0]]=u?n[3].call(this,u.replace(n[1],n[2])):s):this[n]=u||s;d+=2}},Q=function(e,t){for(var i in t)if(typeof t[i]===A&&t[i].length>0){for(var r=0;r<t[i].length;r++)if(G(t[i][r],e))return"?"===i?s:i}else if(G(t[i],e))return"?"===i?s:i;return e},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,m],[/opios[\/ ]+([\w\.]+)/i],[m,[p,D+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[p,D]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[p,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[p,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[p,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[p,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[p,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure "+C],m],[/\bfocus\/([\w\.]+)/i],[m,[p,z+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[p,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[p,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[p,"MIUI "+C]],[/fxios\/([-\w\.]+)/i],[m,[p,z]],[/\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+C]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1 "+C],m],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[p,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,H],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[p,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[p,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[p,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[p,R+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,R+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[p,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[p,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[m,Q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[p,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[p,z+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[p,m],[/(cobalt)\/([\w\.]+)/i],[p,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,W]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[f,q],[b,x]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[f,q],[b,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[f,O],[b,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[f,O],[b,x]],[/(macintosh);/i],[h,[f,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[f,E],[b,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[f,M],[b,x]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[f,M],[b,v]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[f,T],[b,v]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[f,T],[b,x]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[f,"OPPO"],[b,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[f,"Vivo"],[b,v]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[h,[f,"Realme"],[b,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[f,U],[b,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[f,U],[b,x]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[f,"LG"],[b,x]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[f,"LG"],[b,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[f,"Lenovo"],[b,x]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[f,"Nokia"],[b,v]],[/(pixel c)\b/i],[h,[f,L],[b,x]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[f,L],[b,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[f,B],[b,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[f,B],[b,x]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[f,"OnePlus"],[b,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[f,_],[b,x]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[f,_],[b,v]],[/(playbook);[-\w\),; ]+(rim)/i],[h,f,[b,x]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[f,j],[b,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[f,S],[b,x]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[f,S],[b,v]],[/(nexus 9)/i],[h,[f,"HTC"],[b,x]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[h,/_/g," "],[b,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[f,"Acer"],[b,x]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[f,"Meizu"],[b,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,h,[b,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,h,[b,x]],[/(surface duo)/i],[h,[f,N],[b,x]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[f,"Fairphone"],[b,v]],[/(u304aa)/i],[h,[f,"AT&T"],[b,v]],[/\bsie-(\w*)/i],[h,[f,"Siemens"],[b,v]],[/\b(rct\w+) b/i],[h,[f,"RCA"],[b,x]],[/\b(venue[\d ]{2,7}) b/i],[h,[f,"Dell"],[b,x]],[/\b(q(?:mv|ta)\w+) b/i],[h,[f,"Verizon"],[b,x]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[f,"Barnes & Noble"],[b,x]],[/\b(tm\d{3}\w+) b/i],[h,[f,"NuVision"],[b,x]],[/\b(k88) b/i],[h,[f,"ZTE"],[b,x]],[/\b(nx\d{3}j) b/i],[h,[f,"ZTE"],[b,v]],[/\b(gen\d{3}) b.+49h/i],[h,[f,"Swiss"],[b,v]],[/\b(zur\d{3}) b/i],[h,[f,"Swiss"],[b,x]],[/\b((zeki)?tb.*\b) b/i],[h,[f,"Zeki"],[b,x]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],h,[b,x]],[/\b(ns-?\w{0,9}) b/i],[h,[f,"Insignia"],[b,x]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[f,"NextBook"],[b,x]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],h,[b,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],h,[b,v]],[/\b(ph-1) /i],[h,[f,"Essential"],[b,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[f,"Envizen"],[b,x]],[/\b(trio[-\w\. ]+) b/i],[h,[f,"MachSpeed"],[b,x]],[/\btu_(1491) b/i],[h,[f,"Rotor"],[b,x]],[/(shield[\w ]+) b/i],[h,[f,"Nvidia"],[b,x]],[/(sprint) (\w+)/i],[f,h,[b,v]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[f,N],[b,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[f,I],[b,x]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[f,I],[b,v]],[/smart-tv.+(samsung)/i],[f,[b,y]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[f,q],[b,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,"LG"],[b,y]],[/(apple) ?tv/i],[f,[h,O+" TV"],[b,y]],[/crkey/i],[[h,R+"cast"],[f,L],[b,y]],[/droid.+aft(\w)( bui|\))/i],[h,[f,_],[b,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[f,E],[b,y]],[/(bravia[\w ]+)( bui|\))/i],[h,[f,B],[b,y]],[/(mitv-\w{5}) bui/i],[h,[f,T],[b,y]],[/Hbbtv.*(technisat) (.*);/i],[f,h,[b,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,X],[h,X],[b,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,h,[b,g]],[/droid.+; (shield) bui/i],[h,[f,"Nvidia"],[b,g]],[/(playstation [345portablevi]+)/i],[h,[f,B],[b,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[f,N],[b,g]],[/((pebble))app/i],[f,h,[b,P]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[f,O],[b,P]],[/droid.+; (glass) \d/i],[h,[f,L],[b,P]],[/droid.+; (wt63?0{2,3})\)/i],[h,[f,I],[b,P]],[/(quest( 2| pro)?)/i],[h,[f,H],[b,P]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[b,k]],[/(aeobc)\b/i],[h,[f,_],[b,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[h,[b,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[b,x]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,x]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,v]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[p,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[p,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[p,[m,Q,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,"Windows"],[m,Q,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,$],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,m],[/\(bb(10);/i],[m,[p,j]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[p,z+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[p,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[p,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[p,R+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[p,J],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,m],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[p,m]]},ee=function(e,t){if(typeof e===A&&(t=e,e=s),!(this instanceof ee))return new ee(e,t).getResult();var i=typeof a!==u&&a.navigator?a.navigator:s,r=e||(i&&i.userAgent?i.userAgent:""),o=i&&i.userAgentData?i.userAgentData:s,n=t?F(K,t):K,g=i&&i.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=s,t[m]=s,Y.call(t,r,n.browser),t[c]=typeof(e=t[m])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:s,g&&i&&i.brave&&typeof i.brave.isBrave==l&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[w]=s,Y.call(e,r,n.cpu),e},this.getDevice=function(){var e={};return e[f]=s,e[h]=s,e[b]=s,Y.call(e,r,n.device),g&&!e[b]&&o&&o.mobile&&(e[b]=v),g&&"Macintosh"==e[h]&&i&&typeof i.standalone!==u&&i.maxTouchPoints&&i.maxTouchPoints>2&&(e[h]="iPad",e[b]=x),e},this.getEngine=function(){var e={};return e[p]=s,e[m]=s,Y.call(e,r,n.engine),e},this.getOS=function(){var e={};return e[p]=s,e[m]=s,Y.call(e,r,n.os),g&&!e[p]&&o&&"Unknown"!=o.platform&&(e[p]=o.platform.replace(/chrome os/i,J).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===d&&e.length>350?X(e,350):e,this},this.setUA(r),this};ee.VERSION="1.0.35",ee.BROWSER=V([p,m,c]),ee.CPU=V([w]),ee.DEVICE=V([h,f,b,g,v,y,x,P,k]),ee.ENGINE=ee.OS=V([p,m]),typeof n!==u?(o.exports&&(n=o.exports=ee),n.UAParser=ee):i.amdO?void 0!==(r=(function(){return ee}).call(t,i,t,e))&&(e.exports=r):typeof a!==u&&(a.UAParser=ee);var et=typeof a!==u&&(a.jQuery||a.Zepto);if(et&&!et.ua){var ei=new ee;et.ua=ei.getResult(),et.ua.get=function(){return ei.getUA()},et.ua.set=function(e){ei.setUA(e);var t=ei.getResult();for(var i in t)et.ua[i]=t[i]}}}(this)}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}},r=!0;try{o[e].call(i.exports,i,i.exports,a),r=!1}finally{r&&delete n[e]}return i.exports}a.ab=__dirname+"/";var s=a(226);e.exports=s})()},5419:(e,t,i)=>{e.exports=i(517)},3457:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{PageSignatureError:function(){return i},RemovedPageError:function(){return r},RemovedUAError:function(){return o}});class i extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class r extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class o extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}},2778:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextURL",{enumerable:!0,get:function(){return A}});let r=i(7567),o=i(1219),n=i(2329),a=i(6993),s=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function l(e,t){return new URL(String(e).replace(s,"localhost"),t&&String(t).replace(s,"localhost"))}let u=Symbol("NextURLInternal");class A{constructor(e,t,i){let r,o;"object"==typeof t&&"pathname"in t||"string"==typeof t?(r=t,o=i||{}):o=i||t||{},this[u]={url:l(e,r??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,t,i,o,s;let l=(0,a.getNextPathnameInfo)(this[u].url.pathname,{nextConfig:this[u].options.nextConfig,parseData:!0,i18nProvider:this[u].options.i18nProvider}),A=(0,n.getHostname)(this[u].url,this[u].options.headers);this[u].domainLocale=this[u].options.i18nProvider?this[u].options.i18nProvider.detectDomainLocale(A):(0,r.detectDomainLocale)(null==(t=this[u].options.nextConfig)?void 0:null==(e=t.i18n)?void 0:e.domains,A);let d=(null==(i=this[u].domainLocale)?void 0:i.defaultLocale)||(null==(s=this[u].options.nextConfig)?void 0:null==(o=s.i18n)?void 0:o.defaultLocale);this[u].url.pathname=l.pathname,this[u].defaultLocale=d,this[u].basePath=l.basePath??"",this[u].buildId=l.buildId,this[u].locale=l.locale??d,this[u].trailingSlash=l.trailingSlash}formatPathname(){return(0,o.formatNextPathnameInfo)({basePath:this[u].basePath,buildId:this[u].buildId,defaultLocale:this[u].options.forceLocale?void 0:this[u].defaultLocale,locale:this[u].locale,pathname:this[u].url.pathname,trailingSlash:this[u].trailingSlash})}formatSearch(){return this[u].url.search}get buildId(){return this[u].buildId}set buildId(e){this[u].buildId=e}get locale(){return this[u].locale??""}set locale(e){var t,i;if(!this[u].locale||!(null==(i=this[u].options.nextConfig)?void 0:null==(t=i.i18n)?void 0:t.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[u].locale=e}get defaultLocale(){return this[u].defaultLocale}get domainLocale(){return this[u].domainLocale}get searchParams(){return this[u].url.searchParams}get host(){return this[u].url.host}set host(e){this[u].url.host=e}get hostname(){return this[u].url.hostname}set hostname(e){this[u].url.hostname=e}get port(){return this[u].url.port}set port(e){this[u].url.port=e}get protocol(){return this[u].url.protocol}set protocol(e){this[u].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[u].url=l(e),this.analyze()}get origin(){return this[u].url.origin}get pathname(){return this[u].url.pathname}set pathname(e){this[u].url.pathname=e}get hash(){return this[u].url.hash}set hash(e){this[u].url.hash=e}get search(){return this[u].url.search}set search(e){this[u].url.search=e}get password(){return this[u].url.password}set password(e){this[u].url.password=e}get username(){return this[u].url.username}set username(e){this[u].url.username=e}get basePath(){return this[u].basePath}set basePath(e){this[u].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new A(String(this),this[u].options)}}},7770:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{RequestCookies:function(){return r.RequestCookies},ResponseCookies:function(){return r.ResponseCookies}});let r=i(2491)},7054:(e,t)=>{function i(){throw Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead')}Object.defineProperty(t,"E",{enumerable:!0,get:function(){return i}})},7699:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{INTERNALS:function(){return s},NextRequest:function(){return l}});let r=i(2778),o=i(952),n=i(3457),a=i(7770),s=Symbol("internal request");class l extends Request{constructor(e,t={}){let i="string"!=typeof e&&"url"in e?e.url:String(e);(0,o.validateURL)(i),e instanceof Request?super(e,t):super(i,t);let n=new r.NextURL(i,{headers:(0,o.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:t.nextConfig});this[s]={cookies:new a.RequestCookies(this.headers),geo:t.geo||{},ip:t.ip,nextUrl:n,url:n.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[s].cookies}get geo(){return this[s].geo}get ip(){return this[s].ip}get nextUrl(){return this[s].nextUrl}get page(){throw new n.RemovedPageError}get ua(){throw new n.RemovedUAError}get url(){return this[s].url}}},4704:(e,t,i)=>{Object.defineProperty(t,"x",{enumerable:!0,get:function(){return u}});let r=i(2778),o=i(952),n=i(7770),a=Symbol("internal response"),s=new Set([301,302,303,307,308]);function l(e,t){var i;if(null==e?void 0:null==(i=e.request)?void 0:i.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let i=[];for(let[r,o]of e.request.headers)t.set("x-middleware-request-"+r,o),i.push(r);t.set("x-middleware-override-headers",i.join(","))}}class u extends Response{constructor(e,t={}){super(e,t),this[a]={cookies:new n.ResponseCookies(this.headers),url:t.url?new r.NextURL(t.url,{headers:(0,o.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[a].cookies}static json(e,t){let i=Response.json(e,t);return new u(i.body,i)}static redirect(e,t){let i="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!s.has(i))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let r="object"==typeof t?t:{},n=new Headers(null==r?void 0:r.headers);return n.set("Location",(0,o.validateURL)(e)),new u(null,{...r,headers:n,status:i})}static rewrite(e,t){let i=new Headers(null==t?void 0:t.headers);return i.set("x-middleware-rewrite",(0,o.validateURL)(e)),l(t,i),new u(null,{...t,headers:i})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),l(e,t),new u(null,{...e,headers:t})}}},1172:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{isBot:function(){return o},userAgentFromString:function(){return n},userAgent:function(){return a}});let r=function(e){return e&&e.__esModule?e:{default:e}}(i(3825));function o(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function n(e){return{...(0,r.default)(e),isBot:void 0!==e&&o(e)}}function a({headers:e}){return n(e.get("user-agent")||void 0)}},952:(e,t)=>{function i(e){let t=new Headers;for(let[i,r]of Object.entries(e))for(let e of Array.isArray(r)?r:[r])void 0!==e&&("number"==typeof e&&(e=e.toString()),t.append(i,e));return t}function r(e){var t,i,r,o,n,a=[],s=0;function l(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,n=!1;l();)if(","===(i=e.charAt(s))){for(r=s,s+=1,l(),o=s;s<e.length&&"="!==(i=e.charAt(s))&&";"!==i&&","!==i;)s+=1;s<e.length&&"="===e.charAt(s)?(n=!0,s=o,a.push(e.substring(t,r)),t=s):s=r+1}else s+=1;(!n||s>=e.length)&&a.push(e.substring(t,e.length))}return a}function o(e){let t={},i=[];if(e)for(let[o,n]of e.entries())"set-cookie"===o.toLowerCase()?(i.push(...r(n)),t[o]=1===i.length?i[0]:i):t[o]=n;return t}function n(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{fromNodeOutgoingHttpHeaders:function(){return i},splitCookiesString:function(){return r},toNodeOutgoingHttpHeaders:function(){return o},validateURL:function(){return n}})},2329:(e,t)=>{function i(e,t){let i;if((null==t?void 0:t.host)&&!Array.isArray(t.host))i=t.host.toString().split(":",1)[0];else{if(!e.hostname)return;i=e.hostname}return i.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getHostname",{enumerable:!0,get:function(){return i}})},7567:(e,t)=>{function i(e,t,i){if(e)for(let n of(i&&(i=i.toLowerCase()),e)){var r,o;if(t===(null==(r=n.domain)?void 0:r.split(":",1)[0].toLowerCase())||i===n.defaultLocale.toLowerCase()||(null==(o=n.locales)?void 0:o.some(e=>e.toLowerCase()===i)))return n}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"detectDomainLocale",{enumerable:!0,get:function(){return i}})},1111:(e,t)=>{function i(e,t){let i;let r=e.split("/");return(t||[]).some(t=>!!r[1]&&r[1].toLowerCase()===t.toLowerCase()&&(i=t,r.splice(1,1),e=r.join("/")||"/",!0)),{pathname:e,detectedLocale:i}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return i}})},1763:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}});let r=i(1963),o=i(3312);function n(e,t,i,n){if(!t||t===i)return e;let a=e.toLowerCase();return!n&&((0,o.pathHasPrefix)(a,"/api")||(0,o.pathHasPrefix)(a,"/"+t.toLowerCase()))?e:(0,r.addPathPrefix)(e,"/"+t)}},1963:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let r=i(7711);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:i,query:o,hash:n}=(0,r.parsePath)(e);return""+t+i+o+n}},2157:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathSuffix",{enumerable:!0,get:function(){return o}});let r=i(7711);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:i,query:o,hash:n}=(0,r.parsePath)(e);return""+i+t+o+n}},1219:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"formatNextPathnameInfo",{enumerable:!0,get:function(){return s}});let r=i(6915),o=i(1963),n=i(2157),a=i(1763);function s(e){let t=(0,a.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=(0,r.removeTrailingSlash)(t)),e.buildId&&(t=(0,n.addPathSuffix)((0,o.addPathPrefix)(t,"/_next/data/"+e.buildId),"/"===e.pathname?"index.json":".json")),t=(0,o.addPathPrefix)(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:(0,n.addPathSuffix)(t,"/"):(0,r.removeTrailingSlash)(t)}},6993:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getNextPathnameInfo",{enumerable:!0,get:function(){return a}});let r=i(1111),o=i(6034),n=i(3312);function a(e,t){var i,a;let{basePath:s,i18n:l,trailingSlash:u}=null!=(i=t.nextConfig)?i:{},A={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):u};s&&(0,n.pathHasPrefix)(A.pathname,s)&&(A.pathname=(0,o.removePathPrefix)(A.pathname,s),A.basePath=s);let d=A.pathname;if(A.pathname.startsWith("/_next/data/")&&A.pathname.endsWith(".json")){let e=A.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),i=e[0];A.buildId=i,d="index"!==e[1]?"/"+e.slice(1).join("/"):"/",!0===t.parseData&&(A.pathname=d)}if(l){let e=t.i18nProvider?t.i18nProvider.analyze(A.pathname):(0,r.normalizeLocalePath)(A.pathname,l.locales);A.locale=e.detectedLocale,A.pathname=null!=(a=e.pathname)?a:A.pathname,!e.detectedLocale&&A.buildId&&(e=t.i18nProvider?t.i18nProvider.analyze(d):(0,r.normalizeLocalePath)(d,l.locales)).detectedLocale&&(A.locale=e.detectedLocale)}return A}},7711:(e,t)=>{function i(e){let t=e.indexOf("#"),i=e.indexOf("?"),r=i>-1&&(t<0||i<t);return r||t>-1?{pathname:e.substring(0,r?i:t),query:r?e.substring(i,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return i}})},3312:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let r=i(7711);function o(e,t){if("string"!=typeof e)return!1;let{pathname:i}=(0,r.parsePath)(e);return i===t||i.startsWith(t+"/")}},6034:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removePathPrefix",{enumerable:!0,get:function(){return o}});let r=i(3312);function o(e,t){if(!(0,r.pathHasPrefix)(e,t))return e;let i=e.slice(t.length);return i.startsWith("/")?i:"/"+i}},6915:(e,t)=>{function i(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return i}})},9647:(e,t,i)=>{let r={NextRequest:i(7699).NextRequest,NextResponse:i(4704).x,ImageResponse:i(7054).E,userAgentFromString:i(1172).userAgentFromString,userAgent:i(1172).userAgent};"undefined"!=typeof URLPattern&&(r.URLPattern=URLPattern),e.exports=r,t.NextRequest=r.NextRequest,t.NextResponse=r.NextResponse,t.ImageResponse=r.ImageResponse,t.userAgentFromString=r.userAgentFromString,t.userAgent=r.userAgent,t.URLPattern=r.URLPattern}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[638],()=>i(8036));module.exports=r})();