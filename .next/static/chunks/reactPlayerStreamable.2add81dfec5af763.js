"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{8928:function(e,t,r){var s,a,l=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(s=n(t,a))||s.enumerable});return e},y=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=c(o({},"__esModule",{value:!0}),d);var m=(a=null!=(s=r(4090))?l(p(s)):{},c(s&&s.__esModule?a:o(a,"default",{value:s,enumerable:!0}),s)),f=r(6104),b=r(6877);class P extends m.Component{componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",e=>{let{duration:t,seconds:r}=e;this.duration=t,this.currentTime=r}),this.player.on("buffered",e=>{let{percent:t}=e;this.duration&&(this.secondsLoaded=this.duration*t)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(b.MATCH_URL_STREAMABLE)[1];return m.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}constructor(){super(...arguments),y(this,"callPlayer",f.callPlayer),y(this,"duration",null),y(this,"currentTime",null),y(this,"secondsLoaded",null),y(this,"mute",()=>{this.callPlayer("mute")}),y(this,"unmute",()=>{this.callPlayer("unmute")}),y(this,"ref",e=>{this.iframe=e})}}y(P,"displayName","Streamable"),y(P,"canPlay",b.canPlay.streamable)}}]);