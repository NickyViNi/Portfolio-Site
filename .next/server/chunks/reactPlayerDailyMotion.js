"use strict";exports.id=596,exports.ids=[596],exports.modules={8427:(e,t,r)=>{var a,s,i=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of l(t))u.call(e,s)||s===r||o(e,s,{get:()=>t[s],enumerable:!(a=n(t,s))||a.enumerable});return e},y=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>P}),e.exports=d(o({},"__esModule",{value:!0}),c);var m=(s=null!=(a=r(3729))?i(p(a)):{},d(a&&a.__esModule?s:o(s,"default",{value:a,enumerable:!0}),a)),f=r(8662),g=r(8623);class P extends m.Component{constructor(){super(...arguments),y(this,"callPlayer",f.callPlayer),y(this,"onDurationChange",()=>{let e=this.getDuration();this.props.onDuration(e)}),y(this,"mute",()=>{this.callPlayer("setMuted",!0)}),y(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),y(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{controls:t,config:r,onError:a,playing:s}=this.props,[,i]=e.match(g.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(i,{start:(0,f.parseStartTime)(e),autoplay:s});return}(0,f.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",e=>e.player).then(s=>{if(!this.container)return;let o=s.player;this.player=new o(this.container,{width:"100%",height:"100%",video:i,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,f.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){let{display:e}=this.props;return m.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},m.default.createElement("div",{ref:this.ref}))}}y(P,"displayName","DailyMotion"),y(P,"canPlay",g.canPlay.dailymotion),y(P,"loopOnEnded",!0)}};