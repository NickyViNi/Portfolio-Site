"use strict";exports.id=261,exports.ids=[261],exports.modules={2052:(e,t,r)=>{var s,o,a=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))p.call(e,o)||o===r||l(e,o,{get:()=>t[o],enumerable:!(s=n(t,o))||s.enumerable});return e},y=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>b}),e.exports=h(l({},"__esModule",{value:!0}),c);var m=(o=null!=(s=r(3729))?a(u(s)):{},h(s&&s.__esModule?o:l(o,"default",{value:s,enumerable:!0}),s)),f=r(8662),P=r(8623);class b extends m.Component{constructor(){super(...arguments),y(this,"callPlayer",f.callPlayer),y(this,"duration",null),y(this,"currentTime",null),y(this,"secondsLoaded",null),y(this,"mute",()=>{this.callPlayer("mute")}),y(this,"unmute",()=>{this.callPlayer("unmute")}),y(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return m.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}y(b,"displayName","Kaltura"),y(b,"canPlay",P.canPlay.kaltura)}};