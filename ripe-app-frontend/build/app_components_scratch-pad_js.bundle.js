"use strict";(self.webpackChunkworkbench_shell=self.webpackChunkworkbench_shell||[]).push([["app_components_scratch-pad_js"],{"./app/components/scratch-pad.js":(e,t,s)=>{if(!customElements.get("scratch-pad")){let e=document.createElement("template");s.e("app_components_scratch-pad_html").then(s.bind(s,"./app/components/scratch-pad.html")).then((t=>{e.innerHTML=`${t.default}`,customElements.define("scratch-pad",class extends HTMLElement{constructor(){super();const t=e.content.cloneNode(!0);this.scratchPad=t.querySelector("textarea"),this.attachShadow({mode:"open"}).appendChild(t),this.storage_key="ripencc-workbench-scratchpad",this.load_notes()}static get observedAttributes(){return["id"]}attributeChangedCallback(e,t,s){"id"==e&&(this.storage_key=s,this.load_notes())}load_notes(){const e=sessionStorage.getItem(this.storage_key);null!=e&&(this.scratchPad.value=e),this.scratchPad.onchange=()=>{sessionStorage.setItem(this.storage_key,this.scratchPad.value)}}})}))}}}]);