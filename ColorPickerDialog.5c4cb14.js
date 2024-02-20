import{D,a as E,S as L,P as O,w as d,l as A,m as R,o as j,q as I,r as V,n as z}from"./index.5c4cb14.js";function a(t,o=2){return t.toFixed(o).replace(/0+$/,"").replace(/\.$/,"")}function v(t){const o=t.replace(/^#/,""),e=[],r=o.length>4?2:1;for(let n=0;n<o.length;n+=r){const C=o.slice(n,n+r);e.push(C.repeat(r%2+1))}e.length===3&&e.push("ff");const s=e.map(n=>parseInt(n,16)/255);return{r:s[0],g:s[1],b:s[2],a:s[3]}}function B(t){const o=t.l+t.s*Math.min(t.l,1-t.l),e=o===0?0:2-2*t.l/o;return{h:t.h,s:e,v:o,a:t.a}}function y(t,o,e){return e<0?e+=1:e>1&&(e-=1),e<1/6?t+(o-t)*6*e:e<1/2?o:e<2/3?t+(o-t)*(2/3-e)*6:t}function _(t){const o=t.l<.5?t.l*(1+t.s):t.l+t.s-t.l*t.s,e=2*t.l-o;return{r:y(e,o,t.h+1/3),g:y(e,o,t.h),b:y(e,o,t.h-1/3),a:t.a}}function U(t){const o=t.v-t.v*t.s/2,e=Math.min(o,1-o),r=e===0?0:(t.v-o)/e;return{h:t.h,s:r,l:o,a:t.a}}function X(t){return{h:t.h,w:(1-t.s)*t.v,b:1-t.v,a:t.a}}function x(t,o){const e=(t+o.h*6)%6;return o.v-o.v*o.s*Math.max(0,Math.min(e,4-e,1))}function f(t){return{r:x(5,t),g:x(3,t),b:x(1,t),a:t.a}}function c(t){return{h:t.h,s:t.b===1?0:1-t.w/(1-t.b),v:1-t.b,a:t.a}}function g(t){return"#"+Object.values(t).map(e=>{const r=e*255,s=Math.round(r).toString(16);return s.length===1?"0"+s:s}).join("")}function u(t){const o=Math.min(t.r,t.g,t.b),e=Math.max(t.r,t.g,t.b);let r;return e===o?r=0:e===t.r?r=(0+(t.g-t.b)/(e-o))/6:e===t.g?r=(2+(t.b-t.r)/(e-o))/6:r=(4+(t.r-t.g)/(e-o))/6,r<0&&(r+=1),{h:r,w:o,b:1-e,a:t.a}}function T(t){const o=u(t),e=o.w,r=1-o.b,s=(r+e)/2;let n;return r===0||e===1?n=0:n=(r-s)/Math.min(s,1-s),{h:o.h,s:n,l:s,a:t.a}}function m(t,o,e){return Math.max(o,Math.min(t,e))}function H(t){return a(t*360)}function Y(t,o){if(typeof t=="string"||typeof o=="string")return t===o;for(const e in t)if(t[e]!==o[e])return!1;return!0}function i(t,o){return o.reduce((e,r)=>r(e),t)}function k(t){const o={};for(const e in t)o[e]=t[e];return o}function W(t){return t.endsWith(".")?NaN:(parseFloat(t)%360+360)%360/360}function h(t){if(!t.endsWith("%"))return NaN;const o=t.substring(0,t.length-1);if(o.endsWith("."))return NaN;const e=parseFloat(o);return Number.isNaN(e)?NaN:m(e,0,100)/100}function b(t){return a(t*100)+"%"}function w(t){if(t.endsWith("%"))return h(t);if(t.endsWith("."))return NaN;const o=parseFloat(t);return Number.isNaN(o)?NaN:m(o,0,255)/255}function $(t){return a(t*255)}function F(t){return t.endsWith("%")?h(t):m(parseFloat(t),0,1)}function M(t){return String(t)}function q(t){return Object.prototype.hasOwnProperty.call(t,"r")?"rgb":Object.prototype.hasOwnProperty.call(t,"w")?"hwb":Object.prototype.hasOwnProperty.call(t,"v")?"hsv":"hsl"}const K={hex(t,o){return o&&[5,9].includes(t.length)?t.substring(0,t.length-(t.length-1)/4):t},hsl(t,o){const e=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return`hsl${!o&&t.a!==1?"a":""}(${e},${r}%,${s}%`+(!o&&t.a!==1?`,${a(t.a)})`:")")},hwb(t,o){const e=a(t.h*360),r=a(t.w*100),s=a(t.b*100);return`hwb(${e} ${r}% ${s}%`+(o?")":` / ${a(t.a)})`)},rgb(t,o){const e=Math.round(t.r*255),r=Math.round(t.g*255),s=Math.round(t.b*255);return`rgb${t.a!==1&&!o?"a":""}(${e},${r},${s}${t.a!==1&&!o?`,${a(t.a)}`:""})`}};function P(t,o,e=!1){return K[o](t,e)}function S(t){return!t.startsWith("#")||![3,4,6,8].includes(t.length-1)?!1:/^#[0-9A-Fa-f]+$/.test(t)}const G={hex:[["hsl",t=>i(t,[v,T])],["hsv",t=>i(t,[v,u,c])],["hwb",t=>i(t,[v,u])],["rgb",v]],hsl:[["hex",t=>i(t,[_,g])],["hsv",B],["hwb",t=>i(t,[_,u])],["rgb",_]],hsv:[["hex",t=>i(t,[f,g])],["hsl",U],["hwb",X],["rgb",f]],hwb:[["hex",t=>i(t,[c,f,g])],["hsl",t=>i(t,[c,f,T])],["hsv",c],["rgb",t=>i(t,[c,f])]],rgb:[["hex",g],["hsl",T],["hsv",t=>i(t,[u,c])],["hwb",u]]},J={hsl:{h:{to:H,from:W},s:{to:b,from:h},l:{to:b,from:h},a:{to:M,from:F}},hwb:{h:{to:H,from:W},w:{to:b,from:h},b:{to:b,from:h},a:{to:M,from:F}},rgb:{r:{to:$,from:w},g:{to:$,from:w},b:{to:$,from:w},a:{to:M,from:F}}};function Q(t){if(typeof t!="string")return{format:q(t),color:t};if(S(t))return{format:"hex",color:t};if(!t.includes("(")){const l=document.createElement("canvas").getContext("2d");l.fillStyle=t;const p=l.fillStyle;return p==="#000000"&&t!=="black"?null:{format:"hex",color:p}}const[o,e]=t.split("("),r=o.substring(0,3),s=e.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");s.length===3&&s.push("1");const n=r.split("").concat("a"),C=Object.fromEntries(n.map((l,p)=>[l,J[r][l].from(s[p])]));return{format:r,color:C}}const N=["hex","hsl","rgb"],Z={name:"ColorPickerDialog",mixins:[D],components:{Dialog:E,Slider:L},props:{value:{type:String,default:"#000"},label:{type:String,default:"Select color"},outputFormat:{type:String,default:"rgb"},showPalette:{type:Boolean,default:!0}},data:()=>({colors:{hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},rgb:{r:1,g:1,b:1,a:1}},activeFormat:"rgb",recentColors:[],movingFromCanvas:!1,hue:null,alpha:1}),computed:{swatches:()=>O,outputColor(){const t=this.colors[this.outputFormat];return P(t,this.outputFormat)},displayColor(){if(this.activeFormat===this.outputFormat)return this.outputColor;const t=this.colors[this.activeFormat];return P(t,this.activeFormat)}},created(){d.getColors().then(t=>{for(const o of t)this.recentColors.push(o)}),this.value&&typeof this.value=="string"&&this.setColorFromProp(this.value,!0)},mounted(){const t={passive:!0};document.addEventListener("mousemove",this.moveThumbWithMouse,t),document.addEventListener("touchmove",this.moveThumbWithTouch,t),document.addEventListener("mouseup",this.stopMovingThumb,t),document.addEventListener("touchend",this.stopMovingThumb),this.updateCanvas(this.colors)},beforeDestroy(){document.removeEventListener("mousemove",this.moveThumbWithMouse),document.removeEventListener("touchmove",this.moveThumbWithTouch),document.removeEventListener("mouseup",this.stopMovingThumb),document.removeEventListener("touchend",this.stopMovingThumb)},methods:{setColorFromProp(t,o=!1){if(t===null)return;const e=Q(t);e!==null&&(this.activeFormat=e.format,e.color.a===1&&!o&&this.alpha&&this.alpha<1&&(e.color.a=this.alpha),this.setColor(e.format,e.color,o))},startMovingThumbWithMouse(t){this.movingFromCanvas=!0,this.moveThumbWithMouse(t)},startMovingThumbWithTouch(t){this.movingFromCanvas=!0,this.moveThumbWithTouch(t)},moveThumbWithMouse(t){t.buttons!==1||this.movingFromCanvas===!1||this.moveThumb(t.clientX,t.clientY)},moveThumbWithTouch(t){if(this.movingFromCanvas===!1)return;const o=t.touches[0];this.moveThumb(o.clientX,o.clientY)},moveThumb(t,o){const e=this.getNewThumbPosition(t,o),r=k(this.colors.hsv);r.s=e.x,r.v=e.y,this.setColor("hsv",r)},stopMovingThumb(){this.movingFromCanvas=!1},getNewThumbPosition(t,o){const e=this.$refs.canvas.getBoundingClientRect(),r=t-e.left,s=o-e.top;return{x:m(r/e.width,0,1),y:m(1-s/e.height,0,1)}},applyColorUpdates(t){for(const[o,e]of G[t])this.colors[o]=e(this.colors[t]);this.hue=this.colors.hsl.h*360,this.alpha=this.colors.rgb.a,this.updateCanvas(this.colors)},getEventData(t,o){const e=P(t[o],o);return{colors:t,cssColor:e}},setColor(t,o,e){const r=o;Y(this.colors[t],r)||(this.colors[t]=r,this.applyColorUpdates(t),e||this.$emit("input",this.outputColor))},addColorToHistory(t){this.recentColors.indexOf(t)===-1&&(d.saveColor(t),this.recentColors.push(t),this.recentColors.length>32&&d.removeColor(this.recentColors.shift()))},switchFormat(){const t=N.findIndex(e=>e===this.activeFormat),o=t===N.length-1?0:t+1;this.activeFormat=N[o]},submitColor(){this.addColorToHistory(this.outputColor)},updateHue(t){const o=k(this.colors.hsv);o.h=t/360,this.setColor("hsv",o)},updateAlpha(t){const o=k(this.colors.hsv);o.a=t,this.setColor("hsv",o)},updateHexColorValue(t){S(t)&&this.setColor("hex",t)},updateCanvas(t){this.$el&&(this.$el.style.setProperty("--vacp-hsl-h",String(t.hsl.h)),this.$el.style.setProperty("--text-color",this.getLinearShadeText(this.outputColor)),this.$el.style.setProperty("--background-color",this.outputColor),this.$refs.canvas.setAttribute("style",`
    position: relative;
    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */
    background-image:
      linear-gradient(to top, #000, transparent),  /* 2. */
      linear-gradient(to right, #fff, transparent) /* 2. */
    ;
  `),this.$refs.thumb.setAttribute("style",`
    box-sizing: border-box;
    position: absolute;
    left: ${t.hsv.s*100}%;   /* 3. */
    bottom: ${t.hsv.v*100}%; /* 3. */
  `))},setNull(){this.setColorFromProp("rgba(0,0,0,0)",!0),this.$emit("input",null)},setTransparent(){this.updateAlpha(0)},selectRecentColor(t,o){if(t.shiftKey){const e=this.recentColors.indexOf(o);e!==-1&&d.removeColor(this.recentColors.splice(e,1)[0]);return}this.setColorFromProp(o)},getLinearShadeText(t){if(!t)return;const o=A(t,R()),e=j(o,.75*(I(o)>0?-1:1));return V(e)}}};var tt=function(){var o=this,e=o._self._c;return e("Dialog",{staticClass:"color-picker-dialog",attrs:{resizable:!1,mask:!1,size:"small"},on:{clickOutside:o.close},nativeOn:{mousedown:function(r){r.stopPropagation()}},scopedSlots:o._u([{key:"header",fn:function(){return[e("div",[e("div",{staticClass:"dialog__title"},[o._v(o._s(o.label))])])]},proxy:!0}])},[e("div",{ref:"canvas",staticClass:"color-picker-dialog-canvas",on:{mousedown:o.startMovingThumbWithMouse,touchstart:o.startMovingThumbWithTouch}},[e("div",{ref:"thumb",staticClass:"color-picker-dialog-canvas__thumb",attrs:{tabindex:"0","aria-label":"Color space thumb"}})]),e("div",{staticClass:"color-picker-dialog-sliders"},[e("slider",{staticClass:"color-picker-dialog-sliders__hue",attrs:{showCompletion:!1,gradient:["#f00","#ff0","#0f0","#0ff","#00f","#f0f","#f00"],max:360},on:{input:function(r){return o.updateHue(o.hue)}},model:{value:o.hue,callback:function(r){o.hue=r},expression:"hue"}}),e("slider",{staticClass:"color-picker-dialog-sliders__alpha -alpha",attrs:{gradient:[`rgba(${o.colors.rgb.r*255}, ${o.colors.rgb.g*255}, ${o.colors.rgb.b*255}, 0)`,`rgba(${o.colors.rgb.r*255}, ${o.colors.rgb.g*255}, ${o.colors.rgb.b*255}, 1)`],min:0,max:1,step:.01,value:o.alpha,showCompletion:!1},on:{input:function(r){return o.updateAlpha(o.alpha)}},model:{value:o.alpha,callback:function(r){o.alpha=r},expression:"alpha"}})],1),e("div",{staticClass:"color-picker-dialog-controls"},[e("button",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"btn -text -small",attrs:{type:"button",title:"Rotate"},on:{click:o.switchFormat}},[e("i",{staticClass:"icon-refresh"})]),e("editable",{staticClass:"form-control hide-scrollbar",attrs:{value:o.displayColor},on:{input:function(r){return o.setColorFromProp(r)}}}),e("button",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"btn -text -small",attrs:{type:"button",title:"Save color"},on:{click:o.submitColor}},[e("i",{staticClass:"icon-save"})])],1),o.showPalette?[e("div",{staticClass:"color-picker-dialog-colors"},[o._l(o.swatches,function(r){return e("button",{key:r,staticClass:"btn color-picker-dialog-colors__color",class:[r===o.outputColor&&"color-picker-dialog-colors__color--active"],style:`color: ${r}`,attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),o.setColorFromProp(r)}}})}),e("button",{directives:[{name:"tippy",rawName:"v-tippy",value:{distance:16},expression:"{ distance: 16 }"}],staticClass:"btn color-picker-dialog-colors__color color-picker-dialog-colors__color--transparent",attrs:{type:"button",title:"Transparent"},on:{click:function(r){return r.preventDefault(),o.setTransparent.apply(null,arguments)}}}),e("button",{directives:[{name:"tippy",rawName:"v-tippy",value:{distance:16},expression:"{ distance: 16 }"}],staticClass:"btn -text color-picker-dialog-colors__color color-picker-dialog-colors__color--null",attrs:{type:"button",title:"Default color"},on:{click:function(r){return r.preventDefault(),o.setNull.apply(null,arguments)}}},[e("i",{staticClass:"icon-cross -small"})])],2),e("div",{staticClass:"color-picker-dialog-colors"},o._l(o.recentColors,function(r){return e("a",{key:r,staticClass:"color-picker-dialog-colors__color",class:[r===o.outputColor&&"color-picker-dialog-colors__color--active"],style:`color: ${r}`,attrs:{role:"button",href:"#"},on:{click:function(s){return s.preventDefault(),o.selectRecentColor(s,r)}}})}),0)]:o._e()],2)},ot=[],et=z(Z,tt,ot,!1,null,null,null,null);const st=et.exports;export{st as default};
