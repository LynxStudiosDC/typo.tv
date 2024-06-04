"use strict";!function(t,e){Vue.component("plex-mediaverse-hub",{template:"#plex-mediaverse-hub",props:["hubId","hubInternalId","hubMediaverse","hub","hubTitle","hubDescription","hubDisclaimer","hubExclude","hubsAttributionList","hubNav","hubLayout","hubDummy"],data:function(){return{scroller:null,isNextDisabled:!1,isPreviousDisabled:!0,exclude:[],attributionList:[]}},methods:{previousItem:function(){this.scroller.scrollLeft-=this.scroller.offsetWidth},nextItem:function(){this.scroller.scrollLeft+=this.scroller.offsetWidth},touchStart:function(t){var e=this;if(1===t.changedTouches.length){var i=t.changedTouches[0].clientX;addEventListener("touchend",function(t){return e.touchEnd(t,i)},{once:!0})}},touchEnd:function(t,e){if(1===t.changedTouches.length){var i=t.changedTouches[0].clientX;e<i?this.previousItem():e>i&&this.nextItem()}},isAtRightEdge:function(){if(this.scroller)return this.scroller.scrollLeft+this.scroller.offsetWidth>=this.scroller.scrollWidth},isAtLeftEdge:function(){if(this.scroller)return this.scroller.scrollLeft<=0},checkScrollPosition:function(){this.isNextDisabled=this.isAtRightEdge(),this.isPreviousDisabled=this.isAtLeftEdge()},itemClick:function(t){var e={hubItemClickData:{hubId:this.hubInternalId,mediaverse:this.hubMediaverse,slug:t.slug,url:t.url,element:this.hubId}};PlexMetrics.pushEvent("plex.hubItemClick","",e)}},mounted:function(){this.$nextTick(function(){this.hubId&&document.getElementById(this.hubId)&&(this.scroller=document.getElementById(this.hubId),this.scrollerRight=this.scroller.scrollRight,this.scrollerLeft=this.scroller.scrollLeft,this.checkScrollPosition(),void 0!==this.hubExclude&&this.hubExclude&&(this.exclude=this.hubExclude),this.attributionList&&(this.attributionList=this.hubsAttributionList),this.$emit("hub-loaded"))})}})}(window);