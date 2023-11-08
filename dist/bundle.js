(()=>{"use strict";var e={247:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  font-size: 62.5%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.page-container {\n  max-width: 50rem;\n  margin: 5rem auto;\n}\n\nlabel,\ninput,\ntextarea {\n  display: block;\n  margin: 0.5rem 0;\n}\n\nlabel {\n  font-weight: bold;\n}\n\ninput,\ntextarea {\n  font: inherit;\n  padding: 0.2rem 0.4rem;\n  width: 100%;\n  max-width: 30rem;\n  border: 1px solid #ccc;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n  background: #fff5f9;\n}\n\nbutton {\n  font: inherit;\n  font-size: 1.4rem;\n  background: #ff0062;\n  border: 1px solid #ff0062;\n  cursor: pointer;\n  color: white;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover,\nbutton:active {\n  background: #a80041;\n  border-color: #a80041;\n}\n\n.projects {\n  margin: 1rem;\n  border: 1px solid #ff0062;\n}\n\n.projects header {\n  background: #ff0062;\n  height: 3.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#finished-projects {\n  border-color: #0044ff;\n}\n\n#finished-projects header {\n  background: #0044ff;\n}\n\n.projects h2 {\n  margin: 0;\n  color: white;\n}\n\n.projects ul {\n  list-style: none;\n  margin: 0;\n  padding: 1rem;\n}\n\n.projects li {\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);\n  padding: 1rem;\n  margin: 1rem;\n  background-color: #fff;\n}\n\n.projects li h2 {\n  color: #ff0062;\n  margin: 0.5rem 0;\n}\n\n#finished-projects li h2 {\n  color: #0044ff;\n}\n\n.projects li h3 {\n  color: #575757;\n  font-size: 1rem;\n}\n\n.project li p {\n  margin: 0;\n}\n\n.droppable {\n  background: #ffe3ee;\n}\n\n#finished-projects .droppable {\n  background: #d6e1ff;\n}\n\n#user-input {\n  margin: 1rem;\n  margin-bottom: 2rem;\n  padding: 1rem;\n  border: 1px solid #ff0062;\n  background: #f7f7f7;\n}\n\n.link {\n  display: inline-block;\n  margin: 2rem 1rem;\n  padding-bottom: 3px;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.link:link,\n.link:visited {\n  color: #0044ff;\n  border-bottom: 1px solid #0044ff;\n}\n\n.link:hover,\n.link:active {\n  color: #ff0062;\n  border-bottom: 1px solid #ff0062;\n}\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e,t=n(379),r=n.n(t),o=n(795),i=n.n(o),s=n(569),a=n.n(s),l=n(565),c=n.n(l),d=n(216),u=n.n(d),p=n(589),f=n.n(p),h=n(247),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),r()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class g{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const o=document.importNode(this.templateElement.content,!0);this.element=o.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(e||(e={}));class v{constructor(e,t,n,r,o){this.id=e,this.title=t,this.description=n,this.people=r,this.status=o}}class y{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}class b extends y{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new b),this.instance}addProject(t,n,r){const o=new v(Math.random().toString(),t,n,r,e.Active);this.projects.push(o),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const j=b.getInstance();function x(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}function E(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}class I extends g{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.configure()}gatherUserInput(){const e=this.titleInputElement.value,t=this.descriptionInputElement.value,n=this.peopleInputElement.value,r={value:t,required:!0,minLength:5},o={value:+n,required:!0,min:1,max:5};return x({value:e,required:!0})&&x(r)&&x(o)?[e,t,+n]:void alert("Invalid Input")}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;j.addProject(e,n,r),this.clearInputs()}}}!function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);i>3&&s&&Object.defineProperty(t,n,s)}([E],I.prototype,"submitHandler",null);class L extends g{get persons(){return 1===this.project.people?"1 person":`${this.project.people} persons`}constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("Dragend")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);i>3&&s&&Object.defineProperty(t,n,s)}([E],L.prototype,"dragStartHandler",null);var w=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class S extends g{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(t){const n=t.dataTransfer.getData("text/plain");j.moveProject(n,"active"===this.type?e.Active:e.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("drop",this.dropHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),j.addListener((t=>{const n=t.filter((t=>"active"===this.type?t.status===e.Active:t.status===e.Finished));this.assignedProjects=n,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}renderProjects(){document.getElementById(`${this.type}-projects-list`).innerHTML="";for(const e of this.assignedProjects)new L(this.element.querySelector("ul").id,e)}}w([E],S.prototype,"dragOverHandler",null),w([E],S.prototype,"dropHandler",null),w([E],S.prototype,"dragLeaveHandler",null),new I,new S("active"),new S("finished"),console.log(10)})()})();