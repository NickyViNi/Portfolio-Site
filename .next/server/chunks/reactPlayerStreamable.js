"use strict";exports.id=546,exports.ids=[546],exports.modules={7338:(e,t,r)=>{var s,o,a=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))u.call(e,o)||o===r||l(e,o,{get:()=>t[o],enumerable:!(s=i(t,o))||s.enumerable});return e},y=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>P}),e.exports=d(l({},"__esModule",{value:!0}),c);var m=(o=null!=(s=r(3729))?a(p(s)):{},d(s&&s.__esModule?o:l(o,"default",{value:s,enumerable:!0}),s)),f=r(8662),b=r(8623);class P extends m.Component{constructor(){super(...arguments),y(this,"callPlayer",f.callPlayer),y(this,"duration",null),y(this,"currentTime",null),y(this,"secondsLoaded",null),y(this,"mute",()=>{this.callPlayer("mute")}),y(this,"unmute",()=>{this.callPlayer("unmute")}),y(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}),this.player.on("buffered",({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(b.MATCH_URL_STREAMABLE)[1];return m.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}y(P,"displayName","Streamable"),y(P,"canPlay",b.canPlay.streamable)}};