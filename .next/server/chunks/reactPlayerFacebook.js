"use strict";exports.id=121,exports.ids=[121],exports.modules={819:(e,t,r)=>{var s,a,l=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of n(t))u.call(e,a)||a===r||i(e,a,{get:()=>t[a],enumerable:!(s=o(t,a))||s.enumerable});return e},y=(e,t,r)=>(c(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>v}),e.exports=h(i({},"__esModule",{value:!0}),d);var b=(a=null!=(s=r(3729))?l(p(s)):{},h(s&&s.__esModule?a:i(a,"default",{value:s,enumerable:!0}),s)),f=r(8662),m=r(8623);let g="https://connect.facebook.net/en_US/sdk.js",P="fbAsyncInit";class v extends b.Component{constructor(){super(...arguments),y(this,"callPlayer",f.callPlayer),y(this,"playerID",this.props.config.playerId||`facebook-player-${(0,f.randomString)()}`),y(this,"mute",()=>{this.callPlayer("mute")}),y(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){if(t){(0,f.getSDK)(g,"FB",P).then(e=>e.XFBML.parse());return}(0,f.getSDK)(g,"FB",P).then(e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",e=>{this.props.onLoaded()}),e.Event.subscribe("xfbml.ready",e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){let{attributes:e}=this.props.config;return b.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}y(v,"displayName","Facebook"),y(v,"canPlay",m.canPlay.facebook),y(v,"loopOnEnded",!0)}};