"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2337],{2126:(t,s,i)=>{i.d(s,{R:()=>a});var e=i(5242);class a{constructor(t){this.Ca=t}Bb(){(0,e.i)(this.ca)&&this.Oe()}ra(){(0,e.a)(this.ca)&&window.cancelAnimationFrame(this.ca),this.ca=void 0}Oe(){this.ca=window.requestAnimationFrame((()=>{(0,e.i)(this.ca)||(this.Ca(),this.Oe())}))}}},2337:(t,s,i)=>{i.r(s),i.d(s,{AudioProvider:()=>a});var e=i(7850);class a extends e.B{constructor(){super(...arguments),this.$$PROVIDER_TYPE="AUDIO"}get type(){return"audio"}setup(){super.setup(),"audio"===this.type&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}},7850:(t,s,i)=>{i.d(s,{B:()=>u});var e=i(9256),a=i(5242),h=i(2126),r=i(7203),d=i(555),c=i(3493);class n{constructor(t,s){this.i=t,this.b=s,this.sa=(0,a.M)(),this.Cb=!1,this.$c=!1,this.ad=!1,this.Da=new h.R(this.bd.bind(this)),this.Qe=void 0,this.Dg=void 0,this.pg(),(0,a.e)(this.qg.bind(this)),(0,a.o)(this.cd.bind(this))}get a(){return this.i.media}get c(){return this.b.delegate.c}cd(){this.$c=!1,this.ad=!1,this.Da.ra(),this.sa.empty()}bd(){const t=this.a.currentTime;this.b.$state.realCurrentTime()!==t&&this.$a(t)}pg(){this.t("loadstart",this.Ea),this.t("abort",this.Pe),this.t("emptied",this.rg),this.t("error",this.U),this.t("volumechange",this.ab)}sg(){this.$c||(this.sa.add(this.t("loadeddata",this.tg),this.t("loadedmetadata",this.ug),this.t("canplay",this.hc),this.t("canplaythrough",this.vg),this.t("durationchange",this.wg),this.t("play",this.xb),this.t("progress",this.ic),this.t("stalled",this.xg),this.t("suspend",this.yg),this.t("ratechange",this.Bg)),this.$c=!0)}zg(){this.ad||(this.sa.add(this.t("pause",this.Aa),this.t("playing",this.Ag),this.t("seeked",this.bb),this.t("seeking",this.Cg),this.t("ended",this.Db),this.t("waiting",this.dd)),this.ad=!0)}t(t,s){return(0,a.l)(this.a,t,s.bind(this))}Eg(t){}$a(t,s){const i={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",i,s)}Ea(t){3!==this.a.networkState?(this.sg(),this.c("load-start",void 0,t)):this.Pe(t)}Pe(t){this.c("abort",void 0,t)}rg(){this.c("emptied",void 0,event)}tg(t){this.c("loaded-data",void 0,t)}ug(t){this.zg(),this.c("loaded-metadata",void 0,t),(d.a||d.h&&(0,e.f)(this.b.$state.source()))&&this.b.delegate.jc(this.ed(),t)}ed(){return{provider:(0,a.u)(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}xb(t){this.b.$state.canPlay&&this.c("play",void 0,t)}Aa(t){(1!==this.a.readyState||this.Cb)&&(this.Cb=!1,this.Da.ra(),this.c("pause",void 0,t))}hc(t){this.b.delegate.jc(this.ed(),t)}vg(t){this.b.$state.started()||this.c("can-play-through",this.ed(),t)}Ag(t){this.Cb=!1,this.c("playing",void 0,t),this.Da.Bb()}xg(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}dd(t){this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}Db(t){this.Da.ra(),this.$a(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()&&(0,a.N)(this.a.controls)&&(this.a.controls=!1)}qg(){this.b.$state.paused()&&(0,a.l)(this.a,"timeupdate",this.Eb.bind(this))}Eb(t){this.$a(this.a.currentTime,t)}wg(t){this.b.$state.ended()&&this.$a(this.a.duration,t),this.c("duration-change",this.a.duration,t)}ab(t){const s={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",s,t)}bb(t){this.$a(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&(0,r.g)(this.a.duration)>(0,r.g)(this.a.currentTime)&&(this.$a(this.a.duration,t),this.a.ended||this.b.player.dispatch(new a.D("media-play-request",{trigger:t})))}Cg(t){this.c("seeking",this.a.currentTime,t)}ic(t){const s={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",s,t)}yg(t){this.c("suspend",void 0,t)}Bg(t){this.c("rate-change",this.a.playbackRate,t)}U(t){const s=this.a.error;if(!s)return;const i={message:s.message,code:s.code,mediaError:s};this.c("error",i,t)}}class o{constructor(t,s){this.i=t,this.b=s,this.Fb.onaddtrack=this.Fg.bind(this),this.Fb.onremovetrack=this.Gg.bind(this),this.Fb.onchange=this.Hg.bind(this),(0,a.l)(this.b.audioTracks,"change",this.Ig.bind(this))}get Fb(){return this.i.media.audioTracks}Fg(t){const s=t.track;if(""===s.label)return;const i={id:s.id.toString(),label:s.label,language:s.language,kind:s.kind,selected:!1};this.b.audioTracks[c.L.oa](i,t),s.enabled&&(i.selected=!0)}Gg(t){const s=this.b.audioTracks.getById(t.track.id);s&&this.b.audioTracks[c.L.Yb](s,t)}Hg(t){let s=this.Re();if(!s)return;const i=this.b.audioTracks.getById(s.id);i&&this.b.audioTracks[c.L.pa](i,!0,t)}Re(){return Array.from(this.Fb).find((t=>t.enabled))}Ig(t){const{current:s}=t.detail;if(!s)return;const i=this.Fb.getTrackById(s.id);if(i){const t=this.Re();t&&(t.enabled=!1),i.enabled=!0}}}class u{constructor(t,s){this.a=t,this.b=s,this.scope=(0,a.x)(),this.V=null}setup(){new n(this,this.b),"audioTracks"in this.media&&new o(this,this.b),(0,a.o)((()=>{this.a.srcObject=null,this.a.removeAttribute("src");for(const t of this.a.querySelectorAll("source"))t.remove();this.a.load()}))}get type(){return""}get media(){return this.a}get currentSrc(){return this.V}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysInline(t){(0,a.s)(this.a,"playsinline",t)}async loadSource({src:t,type:s},i){this.a.preload=i||"",(0,e.g)(t)?(this.Bn(),this.a.srcObject=t):(this.a.srcObject=null,(0,a.t)(t)?"?"!==s?this.yn({src:t,type:s}):(this.Bn(),this.a.src=this.Ik(t)):(this.Bn(),this.a.src=window.URL.createObjectURL(t))),this.a.load(),this.V={src:t,type:s}}yn(t,s){const i=this.a.querySelector("source[data-vds]"),e=i??document.createElement("source");(0,a.s)(e,"src",this.Ik(t.src)),(0,a.s)(e,"type","?"!==t.type?t.type:s),(0,a.s)(e,"data-vds",""),i||this.a.append(e)}Bn(){this.a.querySelector("source[data-vds]")?.remove()}Ik(t){const{clipStartTime:s,clipEndTime:i}=this.b.$state,e=s(),a=i();return e>0&&a>0?`${t}#t=${e},${a}`:e>0?`${t}#t=${e}`:a>0?`${t}#t=0,${a}`:t}}}}]);