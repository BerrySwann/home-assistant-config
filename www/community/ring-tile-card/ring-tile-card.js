(()=>{let t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,i=this.t;if(e&&void 0===t){let e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}let n=(t,...e)=>new r(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,i),o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,s="";for(let e of t.cssRules)s+=e.cssText;return new r("string"==typeof(e=s)?e:e+"",void 0,i)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,_=globalThis,p=_.trustedTypes,m=p?p.emptyScript:"",g=_.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},S=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){let n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...c(t),...d(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(o(i));else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let e of s){let s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s;let n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){let s=this.constructor,r=this[t];if(!(((i??=s.getPropertyOptions(t)).hasChanged??S)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,g?.({ReactiveElement:y}),(_.reactiveElementVersions??=[]).push("2.1.1");let N=globalThis,b=N.trustedTypes,E=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,v="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,W="?"+x,w=`<${W}>`,k=document,A=()=>k.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,T="[ 	\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,z=/>/g,M=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,U=/"/g,R=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Z=D(1),J=D(2),H=(D(3),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),F=new WeakMap,L=k.createTreeWalker(k,129);function B(t,e){if(!C(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":3===e?"<math>":"",o=V;for(let e=0;e<i;e++){let i=t[e],a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,null!==(l=o.exec(i)));)c=o.lastIndex,o===V?"!--"===l[1]?o=P:void 0!==l[1]?o=z:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=M):void 0!==l[3]&&(o=M):o===M?">"===l[0]?(o=r??V,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?M:'"'===l[3]?U:j):o===U||o===j?o=M:o===P||o===z?o=V:(o=M,r=void 0);let d=o===M&&t[e+1].startsWith("/>")?" ":"";n+=o===V?i+w:h>=0?(s.push(a),i.slice(0,h)+v+i.slice(h)+x+d):i+x+(-2===h?e:d)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=G.createElement(l,i),L.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=L.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(v)){const e=h[n++],i=s.getAttribute(t).split(x),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?X:"?"===o[1]?tt:"@"===o[1]?te:Q}),s.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(R.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),L.nextNode(),a.push({type:2,index:++r});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===W)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,s){if(e===H)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=q(t,r._$AS(t,e.values),r,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);L.currentNode=s;let r=L.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ti(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=L.nextNode(),n++)}return L.currentNode=k,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let i;O(t=q(this,t,e))?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):C(i=t)||"function"==typeof i?.[Symbol.iterator]?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==I&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(B(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new G(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new Y(this.O(A()),this.O(A()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!O(t=q(this,t,e,0))||t!==this._$AH&&t!==H)&&(this._$AH=t);else{let s,o,a=t;for(t=r[0],s=0;s<r.length-1;s++)(o=q(this,a[i+s],e,s))===H&&(o=this._$AH[s]),n||=!O(o)||o!==this._$AH[s],o===I?t=I:t!==I&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==I)}}class te extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??I)===H)return;let i=this._$AH,s=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==I&&(i===I||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ti{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}let ts=N.litHtmlPolyfillSupport;ts?.(G,Y),(N.litHtmlVersions??=[]).push("3.3.1");let tr=globalThis;class tn extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new Y(e.insertBefore(A(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}tn._$litElement$=!0,tn.finalized=!0,tr.litElementHydrateSupport?.({LitElement:tn});let to=tr.litElementPolyfillSupport;to?.({LitElement:tn}),(tr.litElementVersions??=[]).push("4.2.1");let ta=t=>(...e)=>({_$litDirective$:t,values:e});class tl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let th=ta(class extends tl{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return H}}),tc="important",td=" !"+tc,tu=ta(class extends tl{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(let t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let s=e[t];if(null!=s){this.ft.add(t);let e="string"==typeof s&&s.endsWith(td);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?tc:""):i[t]=s}}return H}}),t_={ha_red:"rgb(244,67,54)",ha_orange:"rgb(255,152,1)",ha_yellow:"rgb(255,193,7)",ha_green:"rgb(81,140,67)",ha_blue:"rgb(68,115,158)",ha_purple:"rgb(146,107,199)",ha_grey:"color-mix(in srgb, var(--primary-text-color, #212121) 50%, transparent)",ha_gray:"color-mix(in srgb, var(--primary-text-color, #212121) 50%, transparent)"},tp="open",tm="closed",tg="compass",tf="none",tS="pointer",t$="none",ty="arrow_in",tN="none",tb="ticks",tE="ticks_with_labels",tv="icon",tx="marker_dir",tW="unit",tw="none",tk="icon",tA="value",tO="value_with_unit",tC="ring_value",tT="ring_value_with_unit",tV="none",tP="name",tz="unit",tM="ring_unit",tj="icon",tU="min_max",tR="value",tD="value_with_unit",tZ="ring_value",tJ="ring_value_with_unit",tH="none",tI="bottom",tF="middle",tL="below_dial",tB=[{US:"color",AU:"colour"},{US:"marker_color",AU:"marker_colour"},{US:"marker2_color",AU:"marker2_colour"},{US:"colorize_icon",AU:"colourise_icon"}],tG={ring_only:!1,ring_type:tm,indicator:"arc",scale:tN,top_element:tw,middle_element:tk,bottom_element:tH,colour:{"70%":t_.ha_blue,"80%":t_.ha_yellow,"90%":t_.ha_red},min:0,max:100,min_sig_figs:2,max_decimals:1,marker_colour:"var(--secondary-text-color, grey)",marker2_colour:"var(--disabled-text-color, lightgrey)",large_secondary:!1,hide_state:!1,transparent_tile:!1,colourise_icon:!1,tap_action:{action:"more-info"}},tq={ring_type:tp,top_element:tW,middle_element:tA,bottom_element:tj,min_sig_figs:2},tK={ring_type:tp,top_element:tv,middle_element:tO,bottom_element:tU,min_sig_figs:3},tY={top_element:tx,middle_element:tO,bottom_element:tH,marker_colour:t_.ha_blue,marker2_colour:"var(--disabled-text-color, grey)",compass_marker:ty,compass_marker2:ty,indicator:t$,ring_size:2},tQ={temperature:{null:{null:{default_icon:"mdi:thermometer",ring_type:tp,indicator:"dot",bottom_element:tU},"°C":{min:17,max:27,colour:{19.5:t_.ha_blue,21:t_.ha_green,22.5:t_.ha_green,24:t_.ha_yellow,25:t_.ha_orange,27:t_.ha_red}},"°F":{min:62,max:80,colour:{67:t_.ha_blue,70:t_.ha_green,73:t_.ha_green,75:t_.ha_yellow,77:t_.ha_orange,80:t_.ha_red}}}},pressure:{null:{null:{default_icon:"mdi:weather-partly-cloudy",ring_type:tp,indicator:tS,scale:tb,middle_element:tV,bottom_element:tj},mbar:{min:980,max:1040,colour:{983:t_.ha_blue,1013:t_.ha_green,1043:t_.ha_yellow}},inHg:{min:28.9,max:30.4,colour:{29:t_.ha_blue,29.9:t_.ha_green,30.4:t_.ha_yellow}}},medium:{null:{scale:tE,top_element:tw,middle_element:tV,bottom_element:tj}},large:{null:{scale:tE,middle_element:tA,bottom_element:tz}}},humidity:{null:{null:{default_icon:"mdi:water-percent",ring_type:tp,indicator:"dot",max_decimals:0,colour:{0:t_.ha_red,50:t_.ha_green,100:t_.ha_blue}}},medium:{null:{top_element:tw,middle_element:tO,bottom_element:tj}},large:{null:{top_element:tv,middle_element:tO,bottom_element:tH}}},data_size:{null:{null:{ring_type:tp,bottom_element:tU}},medium:{null:{top_element:tw,middle_element:tk}}},wind_speed:{null:{null:{default_icon:"mdi:weather-windy",ring_type:tp},kn:{min:0,max:40,colour:{10:t_.ha_blue,15:t_.ha_green,20:t_.ha_yellow,25:t_.ha_orange,30:t_.ha_red}},"km/h":{min:0,max:75,colour:{20:t_.ha_blue,30:t_.ha_green,40:t_.ha_yellow,50:t_.ha_orange,60:t_.ha_red}},mph:{min:0,max:45,colour:{12:t_.ha_blue,17:t_.ha_green,23:t_.ha_yellow,29:t_.ha_orange,35:t_.ha_red}}}},precipitation:{null:{null:{default_icon:"mdi:weather-rainy",ring_type:tp,colour:t_.ha_blue,bottom_element:tU},mm:{max:10},in:{max:.4}},medium:{null:{top_element:tw,middle_element:tk}}},battery:{null:{"%":{colour:{20:t_.ha_red,30:t_.ha_orange,40:t_.ha_yellow,70:t_.ha_green},max_decimals:0}},medium:{"%":{scale:tb,ring_type:tm,top_element:tv,middle_element:tT,bottom_element:tH}},large:{"%":{scale:tb,ring_type:tm,top_element:tv,middle_element:tT,bottom_element:tH}}},power:{null:{null:{ring_type:tp,indicator:"dot"},kW:{max:3},W:{max:3e3,bottom_element:tH}},large:{null:{scale:tE}}},energy:{null:{null:{ring_type:tp},kWh:{max:10},Wh:{max:1e4,bottom_element:tH}},large:{null:{scale:tE}}},signal_strength:{null:{null:{ring_type:tp,middle_element:tC,bottom_element:tM,min:-90,max:-40,colour:{"-90":t_.ha_purple,"-80":t_.ha_red,"-70":t_.ha_orange,"-67":t_.ha_yellow,"-60":t_.ha_green},max_decimals:0}},medium:{null:{bottom_element:tj}},large:{null:{middle_element:tT,bottom_element:tU}}},moisture:{null:{null:{colour:{25:t_.ha_yellow,45:t_.ha_blue,55:t_.ha_blue,75:t_.ha_purple},max_decimals:0}},medium:{null:{ring_type:tm,top_element:tv,middle_element:tO}},large:{null:{ring_type:tm,bottom_element:tH}}}};var tX={};tX=JSON.parse('{"directions":{"north":"Север","east":"Изток","south":"Юг","west":"Запад","N":"С","NNE":"ССИ","NE":"СИ","ENE":"ИСИ","E":"И","ESE":"ИЮИ","SE":"ЮИ","SSE":"ЮЮИ","S":"Ю","SSW":"ЮЮЗ","SW":"ЮЗ","WSW":"ЗЮЗ","W":"З","WNW":"ЗСЗ","NW":"СЗ","NNW":"ССЗ"}}');var t0={};t0=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Oest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t1={};t1=JSON.parse('{"directions":{"north":"Sever","east":"Východ","south":"Jih","west":"Západ","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');var t2={};t2=JSON.parse('{"directions":{"north":"Nord","east":"Øst","south":"Syd","west":"Vest","N":"N","NNE":"NNØ","NE":"NØ","ENE":"ØNØ","E":"Ø","ESE":"ØSØ","SE":"SØ","SSE":"SSØ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var t5={};t5=JSON.parse('{"directions":{"north":"Norden","east":"Osten","south":"Süden","west":"Westen","N":"N","NNE":"NNO","NE":"NO","ENE":"ONO","E":"O","ESE":"OSO","SE":"SO","SSE":"SSO","S":"S","SSW":"SSW","SW":"SW","WSW":"WSW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var t3={};t3=JSON.parse('{"directions":{"north":"North","east":"East","south":"South","west":"West","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSW","SW":"SW","WSW":"WSW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var t6={};t6=JSON.parse('{"directions":{"north":"Norte","east":"Este","south":"Sur","west":"Oeste","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t8={};t8=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Ouest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t4={};t4=JSON.parse('{"directions":{"north":"Észak","east":"Kelet","south":"Dél","west":"Nyugat","N":"É","NNE":"ÉÉK","NE":"ÉK","ENE":"ÉKÉ","E":"K","ESE":"KDK","SE":"DK","SSE":"DDK","S":"D","SSW":"DDNy","SW":"DNy","WSW":"NyDNy","W":"Ny","WNW":"NyÉNy","NW":"ÉNy","NNW":"ÉÉNy"}}');var t7={};t7=JSON.parse('{"directions":{"north":"Norður","east":"Austur","south":"Suður","west":"Vestur","N":"N","NNE":"NNA","NE":"NA","ENE":"ANA","E":"A","ESE":"ASA","SE":"SA","SSE":"SSA","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var t9={};t9=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Ovest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var et={};et=JSON.parse('{"directions":{"north":"Noorden","east":"Oosten","south":"Zuiden","west":"Westen","N":"N","NNE":"NNO","NE":"NO","ENE":"ONO","E":"O","ESE":"OZO","SE":"ZO","SSE":"ZZO","S":"Z","SSW":"ZZW","SW":"ZW","WSW":"WZW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var ee={};ee=JSON.parse('{"directions":{"north":"Nord","east":"Øst","south":"Sør","west":"Vest","N":"N","NNE":"NNØ","NE":"NØ","ENE":"ØNØ","E":"Ø","ESE":"ØSØ","SE":"SØ","SSE":"SSØ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var ei={};ei=JSON.parse('{"directions":{"north":"Północ","east":"Wschód","south":"Południe","west":"Zachód","N":"Pn.","NNE":"Pn. Pn. Wsch.","NE":"Pn. Wsch.","ENE":"Wsch. Pn. Wsch.","E":"Wsch.","ESE":"Wsch. Pd. Wsch.","SE":"Pd. Wsch.","SSE":"Pd. Pd. Wsch.","S":"Pd.","SSW":"Pd. Pd. Zach.","SW":"Pd. Zach.","WSW":"Zach. Pd. Zach.","W":"Zach.","WNW":"Zach. Pn. Zach.","NW":"Pn. Zach.","NNW":"Pn. Pn. Zach."}}');var es={};es=JSON.parse('{"directions":{"north":"norte","east":"leste","south":"sul","west":"oeste","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"L","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var er={};er=JSON.parse('{"directions":{"north":"Nord","east":"Öst","south":"Syd","west":"Väst","N":"N","NNE":"NNÖ","NE":"NÖ","ENE":"ÖNÖ","E":"Ö","ESE":"ÖSÖ","SE":"SÖ","SSE":"SSÖ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var en={};en=JSON.parse('{"directions":{"north":"Sever","east":"Východ","south":"Juh","west":"Západ","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');var eo={};eo=JSON.parse('{"directions":{"north":"Sever","east":"Vzhod","south":"Jug","west":"Zahod","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');let ea={bg:tX,ca:t0,cz:t1,da:t2,de:t5,en:t3,es:t6,fr:t8,hu:t4,is:t7,it:t9,nl:et,no:ee,pl:ei,pt:es,sv:er,sk:en,sl:eo,ru:JSON.parse('{"directions":{"north":"Север","east":"Восток","south":"Юг","west":"Запад","N":"С","NNE":"ССВ","NE":"СВ","ENE":"ВСВ","E":"В","ESE":"ВЮВ","SE":"ЮВ","SSE":"ЮЮВ","S":"Ю","SSW":"ЮЮЗ","SW":"ЮЗ","WSW":"ЗЮЗ","W":"З","WNW":"ЗСЗ","NW":"СЗ","NNW":"ССЗ"}}')};function el(t){return!isNaN(parseFloat(t))&&!isNaN(t-0)}function eh(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)}function ec(t,e,i){return t>i?i:t<e?e:t}function ed(t,e=5){if(Math.floor(t=parseFloat(t.toFixed(e)))===t)return 0;let i=t.toString();return -1===i.indexOf(".")?0:i.split(".")[1].length}function eu(t,e){return parseFloat(parseFloat(t).toFixed(e))}function e_(t){return t*Math.PI*2/360}function ep(t,e,i){return[-Math.sin(e_(t))*e+i/2,Math.cos(e_(t))*e+i/2]}function em(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].map(t=>(function(t){let e,i=navigator.language.slice(0,2);try{e=t.split(".").reduce((t,e)=>t[e],ea[i])}catch{e=t.split(".").reduce((t,e)=>t[e],ea.en)}return e})(`directions.${t}`))[Math.round((t%360+360)%360/22.5)%16]}class eg{#t;#e;#i;#s;#r;#n;constructor(t,e){if(this.#t=t,this.#e=e,el(this.#t)?this.#i=0:eh(this.#t)&&this.#t.attribute?this.#i=2:this.#i=1,0===this.#i)return;switch(this.#i){case 1:eh(this.#t)?(this.#s=this.#t.entity,this.#r=this.#t.entity):(this.#s=this.#t,this.#r=this.#t);break;case 2:this.#s=this.#t.attribute,this.#r=this.#t.entity}const i=this.#e.states[this.#r];this.#n={...i},this.#n.attributes={...i.attributes},2===this.#i&&(this.#n.state=i.attributes[this.#s]??0),this.#t.device_class&&(this.#n.attributes.device_class=this.#t.device_class),this.#t.unit_of_measurement&&(this.#n.attributes.unit_of_measurement=this.#t.unit_of_measurement)}get deviceClass(){return this.#n.attributes.device_class}get unitOfMeasurement(){return this.#n.attributes.unit_of_measurement}get elementType(){return this.#i}get stateObj(){return this.#n}get value(){return 0===this.#i?this.#t:this.#n.state}get elementName(){return this.#s}get entityName(){return this.#r}}class ef extends tn{_noState;_configProcessed=!1;static get properties(){return{_hass:{attribute:!1},_config:{state:!0},_ringStateObj:{state:!0},_displayStateObj:{state:!0},_markerValue:{state:!0},_marker2Value:{state:!0},_minValue:{state:!0},_maxValue:{state:!0}}}processConfig(){let t={...tG};this._config.ring_size&&2===this._config.ring_size&&(t={...t,...tq}),this._config.ring_size&&this._config.ring_size>2&&(t={...t,...tK});let e=this._ringElement.deviceClass,i=this._ringElement.unitOfMeasurement;if(this._config.ring_type&&this._config.ring_type.startsWith(tg))t={...t,...tY};else{let s=tQ[e];if(s){let e=this._config.ring_size?1===this._config.ring_size?"small":2===this._config.ring_size?"medium":"large":"small",r=s.null||{},n=r.null||{},o=r[i]||{},a=s[e]||{},l=a.null||{},h=a[i]||{};t={...t,...n,...o,...l,...h}}}tB.forEach(t=>{t.US in this._config&&(this._config[t.AU]=this._config[t.US])}),this._config={...t,...this._config},this._config.ring_size=ec(this._config.ring_size||1,1,6),this._name=this._config.name||this._displayStateObj.attributes.friendly_name,this._config.bottom_name=this._config.bottom_name||this._name,this._config.ring_only=this._config.ring_only||this._config.ring_size>=3,this._configProcessed=!0}setConfig(t){if(!t)throw Error("Invalid configuration");if(!t.entity)throw Error("You must define an entity");this._config={...t},this._hass&&(this.hass=this._hass)}set hass(t){this._hass=t,this._ringElement=new eg(this._config.ring_entity||this._config.entity,t),this._ringStateObj=this._ringElement.stateObj;let e=this._ringElement.value;this._noState=["unavailable","unknown"].includes(e),this._displayElement=new eg(this._config.entity,t),this._displayStateObj=this._displayElement.stateObj,this._ringStateObj&&!this._configProcessed&&this.processConfig(),null!=this._config.marker&&(this._markerElement=new eg(this._config.marker,this._hass),this._markerValue=parseFloat(this._markerElement.value)),null!=this._config.marker2&&(this._marker2Element=new eg(this._config.marker2,this._hass),this._marker2Value=parseFloat(this._marker2Element.value)),null!=this._config.min&&(this._minElement=new eg(this._config.min,this._hass),this._minValue=parseFloat(this._minElement.value)),null!=this._config.max&&(this._maxElement=new eg(this._config.max,this._hass),this._maxValue=parseFloat(this._maxElement.value)),this._minValue===this._maxValue&&(this._maxValue+=1e-11)}render(){this._ringStateObj&&parseFloat(this._ringElement.value);let t=this._config.hide_state?I:Z`
          <state-display
            .stateObj=${this._displayStateObj}
            .hass=${this._hass}
            .name=${this._name}
          ></state-display>
        `,e=[36,96,154,212,270,330][this._config.ring_size-1],i={vertical:!1,centred:this._config.ring_only||this._config.ring_size>=3,large:this._config.ring_size>1,small:1===this._config.ring_size},s=this._config.icon||this._displayStateObj.attributes.icon||this._config.default_icon,r={"transparent-tile":this._config.tweaks?.transparent_tile||!1},n={};if(this._config.tweaks){let t=this._config.tweaks;Object.keys(t).forEach(e=>{"rt-"===e.slice(0,3)&&(n[`--${e}`]=t_[t[e]]||t[e])})}return Z`
      <ha-card
        class="active ${th(r)}"
        style=${tu(n)}
      >
        <div
          class="background"
          @pointerdown=${t=>this._onPointerDown(t,"card")}
          @pointerup=${t=>this._onPointerUp(t,"card")}
          @pointercancel=${t=>this._onPointerCancel(t,"card")}
          @dblclick=${t=>this._onPointerDouble(t,"card")}
          role=${(this._hasCardAction?"button":void 0)??I}
          tabindex=${(this._hasCardAction?"0":void 0)??I}
          aria-labelledby="info"
        >
          <ha-ripple .disabled=${!this._hasCardAction}></ha-ripple>
        </div>
        <div class="container">
          <div class="content ${th(i)} ">
            <rt-ring
              role=${(this._hasIconAction?"button":void 0)??I}
              tabindex=${(this._hasIconAction?"0":void 0)??I}
              .interactive=${this._hasIconAction}
              ring_size=${this._config.ring_size}
              @pointerdown=${(this._hasIconAction?t=>this._onPointerDown(t,"icon"):void 0)??I}
              @pointerup=${(this._hasIconAction?t=>this._onPointerUp(t,"icon"):void 0)??I}
              @pointercancel=${(this._hasIconAction?t=>this._onPointerCancel(t,"icon"):void 0)??I}
              @dblclick=${(this._hasIconAction?t=>this._onPointerDouble(t,"icon"):void 0)??I}
            >
              <rt-ring-svg
                style="width: var(--rt-ring-svg-size, ${e}px);
                  height: var(--rt-ring-svg-size, ${e}px);"
                slot="icon"
                ring_type=${this._config.ring_type}
                ring_size=${this._config.ring_size}
                indicator=${this._config.indicator}
                scale=${this._config.scale}
                .colour=${this._config.colour}
                .state=${this._ringElement}
                .display_state=${this._displayElement}
                .marker_value=${this._markerValue}
                .marker_colour=${this._config.marker_colour}
                .compass_marker=${this._config.compass_marker}
                .marker2_value=${this._marker2Value}
                .marker2_colour=${this._config.marker2_colour}
                .compass_marker2=${this._config.compass_marker2}
                .icon=${s}
                .colourise_icon=${this._config.colourise_icon}
                .top_element=${this._config.top_element}
                .middle_element=${this._config.middle_element}
                .bottom_element=${this._config.bottom_element}
                .bottom_name=${this._config.bottom_name}
                .name=${this._name}
                .min=${this._minValue}
                .max=${this._maxValue}
                .min_sig_figs=${this._config.min_sig_figs}
                .max_decimals=${this._config.max_decimals}
                .hass=${this._hass}
              ></rt-ring-svg>
              ${this._noState?Z` <ha-tile-badge
                    style="--tile-badge-background-color: var(--orange-color)"
                  >
                    <ha-svg-icon .path=${"M10 3H14V14H10V3M10 21V17H14V21H10Z"} />
                  </ha-tile-badge>`:I}
            </rt-ring>
            ${this._config.ring_only||this._config.ring_size>=3?I:Z` <rt-info
                  id="info"
                  .primary=${this._name}
                  .secondary=${t}
                  .large_ring=${this._config.ring_size>1}
                  large_secondary=${this._config.large_secondary}
                ></rt-info>`}
          </div>
        </div>
      </ha-card>
    `}_holdTimers={};_singleTapTimers={};_lastTap={};_holdFired={};get _hasCardAction(){return this._config.tap_action&&"none"!==this._config.tap_action.action||this._config.hold_action&&"none"!==this._config.hold_action.action||this._config.double_tap_action&&"none"!==this._config.double_tap_action.action}get _hasIconAction(){return void 0!==this._config.ring_entity||this._config.icon_tap_action&&"none"!==this._config.icon_tap_action.action||this._config.icon_hold_action&&"none"!==this._config.icon_hold_action.action||this._config.icon_double_tap_action&&"none"!==this._config.icon_double_tap_action.action}_onPointerDown(t,e){"icon"===e&&t.stopPropagation(),("card"===e&&this._hasCardAction||"icon"===e&&this._hasIconAction)&&(this._holdFired[e]=!1,this._holdTimers[e]=setTimeout(()=>{this._holdFired[e]=!0,this._fireAction(e,"hold")},500))}_onPointerUp(t,e){if("icon"===e&&t.stopPropagation(),this._holdTimers[e]&&(clearTimeout(this._holdTimers[e]),delete this._holdTimers[e]),this._holdFired[e]){this._holdFired[e]=!1;return}let i=Date.now(),s=this._lastTap[e]||0,r="card"===e&&this._config.double_tap_action||"icon"===e&&this._config.icon_double_tap_action;i-s<=300?(this._singleTapTimers[e]&&(clearTimeout(this._singleTapTimers[e]),delete this._singleTapTimers[e]),this._lastTap[e]=0,this._fireAction(e,"double_tap")):r?(this._lastTap[e]=i,this._singleTapTimers[e]=setTimeout(()=>{this._singleTapTimers[e]=void 0,this._lastTap[e]=0,this._fireAction(e,"tap")},300)):(this._lastTap[e]=0,this._fireAction(e,"tap"))}_onPointerCancel(t,e){"icon"===e&&t.stopPropagation(),this._holdTimers[e]&&(clearTimeout(this._holdTimers[e]),delete this._holdTimers[e]),this._singleTapTimers[e]&&(clearTimeout(this._singleTapTimers[e]),delete this._singleTapTimers[e]),this._holdFired[e]=!1,this._lastTap[e]=0}_onPointerDouble(t,e){"icon"===e&&t.stopPropagation(),this._singleTapTimers[e]&&(clearTimeout(this._singleTapTimers[e]),delete this._singleTapTimers[e]),this._holdTimers[e]&&(clearTimeout(this._holdTimers[e]),delete this._holdTimers[e]),this._lastTap[e]=0,this._fireAction(e,"double_tap")}_fireAction(t,e){let i,s={card:{tap:"tap_action",hold:"hold_action",double_tap:"double_tap_action"},icon:{tap:"icon_tap_action",hold:"icon_hold_action",double_tap:"icon_double_tap_action"}}[t][e],r=this._config[s];if(r||"icon"!==t||"tap"!==e)i=r.entity||this._displayElement.entityName;else{if(!this._config.ring_entity)return void this._fireAction("card",e);r={action:"more-info"},i=this._ringElement.entityName}r&&this._handleAction({entity:i,tap_action:r},e)}_handleAction(t,e="tap"){let i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:t,action:e},this.dispatchEvent(i)}static getStubConfig(t,e,i){let s=e.filter(t=>t.startsWith("sensor.")),r=s.filter(e=>"temperature"===t.states[e].attributes.device_class);return{entity:r.length>0?r[Math.floor(Math.random()*r.length)]:s[Math.floor(Math.random()*s.length)]}}getCardSize(){return 1}getGridOptions(){let t=this._config.tweaks?.tile_columns||6;this._config.ring_only&&!this._config.tweaks?.tile_columns&&(t=2*this._config.ring_size);let e=this._config.tweaks?.tile_rows||this._config.ring_size;return{columns:t,rows:e,min_columns:t,min_rows:e}}static styles=n`
    :host {
      --tile-color: var(--state-inactive-color);
      -webkit-tap-highlight-color: transparent;
    }
    ha-card:has(.background:focus-visible) {
      --shadow-default: var(--ha-card-box-shadow, 0 0 0 0 transparent);
      --shadow-focus: 0 0 0 1px var(--tile-color);
      border-color: var(--tile-color);
      box-shadow: var(--shadow-default), var(--shadow-focus);
    }
    ha-card {
      --ha-ripple-color: var(--tile-color);
      --ha-ripple-hover-opacity: 0.04;
      --ha-ripple-pressed-opacity: 0.12;
      height: 100%;
      transition: box-shadow 180ms ease-in-out, border-color 180ms ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ha-card.transparent-tile {
      border-width: 0;
      background: none;
    }
    ha-card.active {
      --tile-color: var(--state-icon-color);
    }
    [role="button"] {
      cursor: pointer;
      pointer-events: auto;
    }
    [role="button"]:focus {
      outline: none;
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: var(--ha-card-border-radius, 12px);
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      overflow: hidden;
    }
    .container {
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .container.horizontal {
      flex-direction: row;
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      pointer-events: none;
      overflow: hidden;
    }
    .content.centred {
      justify-content: center;
    }
    .content.large {
      gap: 20px;
    }
    .content.small {
      gap: 10px;
    }

    .vertical {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    .vertical ha-tile-info {
      width: 100%;
      flex: none;
    }
    rt-ring {
      --tile-icon-color: var(--tile-color);
      position: relative;
      padding: 6px;
      margin: -6px;
    }
    ha-tile-badge {
      position: absolute;
      top: 3px;
      right: 3px;
      inset-inline-end: 3px;
      inset-inline-start: initial;
    }
    rt-info {
      position: relative;
      min-width: 0;
      transition: background-color 180ms ease-in-out;
      box-sizing: border-box;
    }
    hui-card-features {
      --feature-color: var(--tile-color);
      padding: 0 12px 12px 12px;
    }
    .container.horizontal hui-card-features {
      width: calc(50% - var(--column-gap, 0px) / 2 - 12px);
      flex: none;
      --feature-height: 36px;
      padding: 0 12px;
      padding-inline-start: 0;
    }

    ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"],
    ha-tile-icon[data-domain="lock"][data-state="jammed"] {
      animation: pulse 1s infinite;
    }

    ha-tile-badge.not-found {
      --tile-badge-background-color: var(--red-color);
    }

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}function eS(t,e,i,s=!1){if(!document.getElementById(t)){var r=document.createElement("link");r.id=t,r.rel=i,r.href=e,s&&(r.crossOrigin="anonymous"),document.head.appendChild(r)}}class e$ extends tn{static get properties(){return{primary:{},secondary:{},large_ring:{},large_secondary:{}}}render(){return this.large_ring?Z`
        <div class="info large">
          <span class="primary small">${this.primary}</span>
          ${this.secondary?Z`<span class="secondary ${this.large_secondary?"large":"small"}">${this.secondary}</span>`:I}
        </div>
      `:Z`
        <div class="info small">
          <span class="primary small nowrap">${this.primary}</span>
          ${this.secondary?Z`<span class="secondary small nowrap">${this.secondary}</span>`:I}
        </div>
      `}static styles=n`
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .info.small {
      height: 36px;
      justify-content: center;
    }
    .info.large {
      height: 100px;
    }
    span {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
    }
    .nowrap {
      white-space: nowrap;
    }
    .primary.small {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: var(--primary-text-color);
    }
    .secondary.small {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: var(--primary-text-color);
    }
    .primary.large {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0px; //0.8px;
      color: var(--primary-text-color);
    }
    .secondary.large {
      font-family: var(--rt-font-family, Geist), var(--ha-font-family-body);
      font-optical-sizing: auto;
      font-style: normal;
      font-weight: 600;
      font-size: 34px;
      line-height: 28px;
      // letter-spacing: 0.2px;
      color: var(--primary-text-color);
      height: 60px;
      align-items: center;
      display: flex;
    }
  `}class ey extends tn{static get properties(){return{interactive:{reflect:!0,type:Boolean},ring_size:{}}}render(){return Z`
      <div class="container size_${this.ring_size} }">
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    `}static styles=n`
    :host {
      --tile-icon-color: var(--disabled-color);
      --tile-icon-opacity: 0.2;
      --tile-icon-hover-opacity: 0.35;
      --mdc-icon-size: 24px;
      position: relative;
      user-select: none;
      transition: transform 180ms ease-in-out;
    }
    :host([interactive]:active) {
      transform: scale(1.1);
    }
    :host([interactive]:hover) {
      --tile-icon-opacity: var(--tile-icon-hover-opacity);
    }
    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      overflow: visible;
      transition: box-shadow 180ms ease-in-out;
    }
    :host([interactive]:focus-visible) .container {
      box-shadow: 0 0 0 2px var(--tile-icon-color);
    }
    .container.rounded-square {
      border-radius: 8px;
    }
    .container.square {
      border-radius: 0;
    }
    .container ::slotted([slot="icon"]) {
      display: flex;
      color: var(--tile-icon-color);
      transition: color 180ms ease-in-out;
      pointer-events: none;
    }
  `}function eN(t,e,i,s){let r=i-s,n=+(Math.abs(e-t)>180),o=ep(t,i,100).join(" "),a=ep(e,i,100).join(" "),l=ep(e,r,100).join(" "),h=ep(t,r,100).join(" "),c=[];return c.push(`M ${o}`),c.push(`A ${i} ${i} 0 ${n} 1 ${a}`),c.push(`A ${s/2} ${s/2} 0 0 1 ${l}`),c.push(`A ${r} ${r} 0 ${n} 0 ${h}`),c.push(`A ${s/2} ${s/2} 0 0 1 ${o}`),c.join(" ")}function eb(t){let e=".";return t?.number_format==="language"?e=new Intl.NumberFormat(t.language).formatToParts(1.1).find(t=>"decimal"===t.type).value:t?.number_format.endsWith("comma")&&(e=","),e}function eE(t,e){let i=Math.floor(Math.log10(t)),s=t/Math.pow(10,i);return(e?s<1.5?1:s<3?2:s<7?5:10:s<=1?1:s<=2?2:s<=5?5:10)*Math.pow(10,i)}class ev{#o=[];#a;#l;#h;#c;#d=!1;constructor(t,e={}){if(t.constructor==Object){for(const[i,s]of(this.#h=e.gradStart||0,this.#c=e.gradEnd||100,this.#a=e.minValue||0,this.#l=e.maxValue||100,Object.entries(t))){const t=i.endsWith("%")?this.#a+parseFloat(i)/100*(this.#l-this.#a):parseFloat(i),e=t_[s]||s;this.#o.push({value:this.#u(t),colour:e})}this.#o.sort((t,e)=>t.value-e.value),this.#o[0]>0&&this.#o.unshift({value:0,colour:this.#o[0].colour}),100>this.#o.at(-1)&&this.#o.push({value:100,colour:this.#o.at(-1).colour})}else this.#d=!0,this.#o=t_[t]||t}#_(t){return`var(--rt-ring-color, var(--rt-ring-colour, ${t}))`}#u(t){return this.#h+(parseFloat(t)-this.#a)/(this.#l-this.#a)*(this.#c-this.#h)}getConicGradientCss(t=1){if(this.#d)return`background: color-mix(in srgb, ${this.#_(this.#o)} var(--rt-ring-background-opacity, ${100*t}%), transparent);`;let e=this.#o.map(e=>`color-mix(in srgb, ${this.#_(e.colour)} var(--rt-ring-background-opacity, ${100*t}%), transparent) ${e.value}%`);return`background-image: conic-gradient(
        from 180deg,
        ${e.join(", ")}
      );
    `}getSolidColourAtGradPct(t){let e=this.#a+(t-this.#h)/(this.#c-this.#h)*(this.#l-this.#a);return this.#_(this.getSolidColour(e))}getSolidColour(t){if(el(t)||(t=0),this.#d)return this.#_(this.#o);if(this.#u(t)<this.#o[0].value)return this.#_(this.#o[0].colour);if(this.#u(t)>this.#o.at(-1).value)return this.#_(this.#o.at(-1).colour);let e=this.#u(t),i=this.#o.find(t=>t.value===e);if(i)return this.#_(i.colour);let s=this.#o.findLast(t=>t.value<e),r=this.#o.find(t=>t.value>e);if(s.colour===r.colour)return this.#_(s.colour);let n=100*(e-s.value)/(r.value-s.value);return this.#_(`color-mix(in srgb,
        ${s.colour} ${100-n}%,
        ${r.colour} ${n}%
      )
    `)}}class ex extends tn{_iconSvgCache={};_iconSvg=I;constructor(...t){super(...t),ex.prototype.renderText=function(t,e,i){let s=this;function r(e="",i=1,n=6){let o=eb(s.hass.locale);return 1-.16*ec(t.length-.7*!!t.includes(o)-.5*!!t.includes("°")+e.length*i-2,0,n-2)}function n(i,s,r,n,o){return J`
        <text class=${o}
          x=${50+r} y="${50+n+i/3.5}" 
          text-anchor="middle" alignment-baseline="alphabetic" 
          font-size=${i}
          >${t}<tspan
            alignment-baseline="alphabetic"
            font-size=${s}
          >${e||I}</tspan>
        </text>
      `}function o(t,e,i,s,r,n="middle"){return J`
        <text class=${r}
          x=${50+i} y="${50+s+e/3.5}" 
          text-anchor=${n} alignment-baseline="alphabetic" 
          font-size=${e}
        >${t}</text>
      `}el(t)&&!["min","max"].includes(i)&&(t=this.getRoundedValue(t)),e&&(1===this.ring_size?e.startsWith("°")?(t=`${t}\xb0`,e=""):e=e.slice(0,1):"%"!==e&&(e=` ${e}`));let a=[1,.8,.75,.72,.71,.7][this.ring_size-1],l=[20,15,11,10,9,7.5][this.ring_size-1];switch(i){case"top":return n(12,12,0,this.scale===tE?-22:-25,"top marker");case tF:if(1===this.ring_size||["%",""].includes(e)){let t=42*r(e,.8)*a;return n(t,.8*t,0,0,`middle ${1===this.ring_size?"tight":""}`)}{let i=38*r()*a,s=22-2*(2===this.ring_size);return J`
            ${o(t,i,0,0,"middle")}
            ${o(e,15*a,0,s,"middle unit")}
          `}case tL:{let t=20*r(e,.8,4)*a;return n(t,.8*t,0,18,"lower-middle")}case tI:{let t=41,e="bottom";return this.ring_type===tm&&(t-=15,e+=" closed"),n(l,l,0,t,e)}case"min":{let e=-32+[0,6,6,4,3.8,3.2][this.ring_size-1],i=41-10*(this.ring_type===tm);return o(t,l,e,i,"bottom","start")}case"max":{let e=32-[0,6,6,4,3.8,3.2][this.ring_size-1],i=41-10*(this.ring_type===tm);return o(t,l,e,i,"bottom","end")}}},ex.prototype.renderScale=function(t=1,e=[]){let i,s=this._ringWidth,r=1===this.ring_size?3:5,n=[80,80,110,110,110,110][this.ring_size-1],o=this.min,a=this.max,l=a-o,h=eE(l,!1),c=eE(h/(r-1),!0),[d,u]=(i=Math.pow(10,Math.floor(Math.log10(c))),5==c/i?[c/5,c/10]:[c/2,c/10]),_=Math.round(l/u)<n,p=[];for(let t=Math.ceil(o/c)*c;t<=a;t+=c){let e=eu(t,this.max_decimals+2);p.push(e)}let m=[];for(let t=Math.ceil(o/d)*d;t<=a;t+=d){let e=eu(t,this.max_decimals+2);p.includes(e)||m.push(e)}let g=[];if(_)for(let t=Math.ceil(o/u)*u;t<=a;t+=u){let e=eu(t,this.max_decimals+2);p.includes(e)||m.includes(e)||g.push(e)}let f=t=>this._startDegrees+(this._endDegrees-this._startDegrees)*(t-o)/l,S=[1,1,1,.9,.8,.7][this.ring_size-1],$=(t,e)=>{let i=(f(t)+180*(this.ring_type===tm))%360,r=ep(i,this._outerRadius,100),n=ep(i,this._outerRadius-e*s,100);return`M ${r[0]} ${r[1]} L ${n[0]} ${n[1]}`},y=t=>{if(this.bottom_element===tU&&(t===this.min||t===this.max))return I;let e=this._outerRadius*[.45,.65,.7,.73,.75,.77][this.ring_size-1];this._hasMarker&&"dot"===this.indicator&&(e*=.96),Math.log10(this.max)>3&&(e*=.93);let i=ep((f(t)+180*(this.ring_type===tm))%360,e,100),r=1===this.ring_size?2.5*s:1.15*s,n=eb(this.hass.locale),o=t.replace(".",n);return J`
          <text
            x=${i[0]} y=${i[1]}
            text-anchor="middle"
            alignment-baseline="central"
            font-size=${r}
          >${o}</text>
        `},N=J`
      <path
        class="grand"
        d=${p.map(t=>$(t,1.35)).join(" ")}
        stroke-width=${1.8*S}
        stroke-opacity=${t}
      />`,b=J`
      <path
        class="major"
        d=${m.map(t=>$(t,1.2)).join(" ")}
        stroke-width=${1.2*S}
        stroke-opacity=${.7*t}
      />`,E=J`
      <path
        class="minor"
        d=${g.map(t=>$(t,1)).join(" ")}
        stroke-width=${.6*S}
        stroke-opacity=${.3*t}
      />`,v=I;if(this.scale===tE){let t=[...p];this.ring_size>3&&c/d!=5&&(t=[...t,...m]);let e=t.reduce((t,e)=>Math.max(t,ed(e,this.max_decimals)),0);v=(t=t.map(t=>t.toFixed(e))).map(y)}return J`
        <g class="scale">
          <mask id="cut-outs-scale">
            <rect width=${100} height=${100} fill="white" />
            <g fill="black" stroke="black" stroke-width="0"
              transform="rotate(${180*(this.ring_type===tm)} 
                ${50} ${50})"
            >
              ${e}
            </g>
          </mask>
          <g class="ticks" mask="url(#cut-outs-scale)">
            ${N}
            ${b}
            ${E}
          </g>
          <g class="labels" mask="url(#cut-outs-scale)">
            ${v} 
          </g> 
        </g>
      `},function(t){t.prototype.renderGradRing=function(t,e,i,s=[]){let r=this._ringWidth,n=eN(t,e,this._outerRadius,r),o=this._grad.getConicGradientCss(i),a=i.toString().replace(".","");return{object:J`
        <g class="ring-grad">
          <clipPath id="ring-clip-${a}">
            <path
              d=${n}
            />
          </clipPath>
          <mask id="cut-outs-ring-grad">
            <rect width=${100} height=${100} fill="white" />
            <g fill="black" stroke="black" stroke-width="0">
              ${s}
            </g>
          </mask>
          <foreignObject
            x="0" y="0"
            width=${100} height=${100}
            clip-path="url(#ring-clip-${a})"
            mask="url(#cut-outs-ring-grad)"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style="width: ${100}px; height: ${100}px; ${o};";
            />
          </foreignObject>
        </g>
      `}},t.prototype.renderSolidRing=function(t,e,i,s=[]){let r=this._ringWidth,n=eN(t,e,this._outerRadius,r);return{object:J`
        <g class="ring-solid">
          <mask id="cut-outs-ring-solid">
            <rect width=${100} height=${100} fill="white" />
            <g fill="black" stroke="black" stroke-width="0">
              ${s}
            </g>
          </mask>
          <path 
            mask="url(#cut-outs-ring-solid)"
            d=${n}
            fill=${this._grad.getSolidColour(i)}
            stroke-width="0"
            fill-opacity="1"
          />
        </g>`}}}(ex),ex.prototype.renderPointer=function(t){let e=ep(this.ring_type===tm?t:(t+180)%360,7.5,100),i=ep(this.ring_type!==tm?t:(t+180)%360,this._outerRadius-this._ringWidth/2,100);return{object:J`
        <g class="indicator">
          <line class="pointer"
            x1=${e[0]} y1=${e[1]}
            x2=${i[0]}   y2=${i[1]}
            stroke-width=${[5,3,2.5,2.5,2.3,2][this.ring_size-1]}
            stroke-linecap="round"
          />
          <circle class="pointer"
            cx=${50} cy=${50}
            r=${[7,5,3.5,3.5,3.3,2.9][this.ring_size-1]}
          />
          <circle class="pointer-centre"
            cx=${50} cy=${50}
            r=${[3,2.5,1.8,1.8,1.6,1.4][this.ring_size-1]}
        </g>
      `}},ex.prototype.renderMarker=function(t,e,i){let s,r,n,o=this._ringWidth,a="marker";if(this.ring_type.startsWith(tg))s=((s=parseFloat(t))+180)%360,a="marker compass","dot"===i?(r=1.5*o,n=o/5):(r=2.3*o,n=0);else{let e=ec(t,this.min,this.max);s=this._startDegrees+(this._endDegrees-this._startDegrees)*(e-this.min)/(this.max-this.min),r=("dot"===this.indicator?1.2:1.5)*o,n="dot"===this.indicator?0:this.ring_size<=2?o/2.5:o/4}if(this.indicator!==tS){if("dot"===i)return J`
        <g class=${a} transform="rotate(${s} ${50} ${50})">
          <circle
            cx=${50}
            cy=${100-.7*o/2}
            r=${r/2}
            fill=${e}
            stroke="var(--card-background-color, white)"
            stroke-width=${n}
          />
        </g>`;let t=[];"dot"===this.indicator?t.push(`M 50 ${100-o+n}`):this.ring_type.startsWith(tg)?t.push(`M 50 ${100+o/3+n}`):t.push(`M 50 ${100-o/3}`),t.push(`l ${r/2} -${r*Math.sin(e_(60))}`),this.ring_type.startsWith(tg)?(t.push(`l -${r/2} ${r/6}`),t.push(`l -${r/2} -${r/6}`)):t.push(`h -${r}`),t.push("Z");let l=t.join(" "),h=this.ring_type.startsWith(tg)&&i===ty?180:0;return{object:J`
          <g class=${a} 
            transform="rotate(${s} ${50} ${50})"
          >
            <path
              d=${l}
              fill=${e}
              transform="rotate(${h} ${50} 
                ${100-o+.5*o/3})"
            />
          </g>`,mask:J`
          <g transform="rotate(${s} ${50} ${50})">
            <path
              d=${l}
              stroke-linejoin="round"
              stroke-width=${n}
              transform="rotate(${h} ${50} 
                ${100-o+.5*o/3})"
            />
          </g>`}}{let t=[50,50],i=ep(s,50-.75*o,100),r=[2,1.6,1.4,1.3,1.2,1.1][this.ring_size-1];return{object:J`
          <g class=${a}>
            <line
              x1=${t[0]} y1=${t[1]}
              x2=${i[0]} y2=${i[1]}
              stroke=${e}
              stroke-linecap="round"
              stroke-width=${r}
            />
          </g>
        `}}},ex.prototype.renderIcon=async function(t,e,i){let s,r;async function n(t,i){let s=this.closest("rt-ring")||this.getRootNode&&this.getRootNode().host&&this.getRootNode().host.closest&&this.getRootNode().host.closest("rt-ring")||this.getRootNode&&this.getRootNode().host||document.body,r="";try{r=getComputedStyle(s).getPropertyValue("--card-mod-icon")}catch(t){r=""}let n=`${t||"def"}|${(r||"").trim()}`;if(this._iconSvgCache||(this._iconSvgCache={}),this._iconSvgCache[n])return this._iconSvgCache[n];if(!this._rt_offscreen_container){let t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.width="1px",t.style.height="1px",t.style.overflow="hidden",t.style.pointerEvents="none",s.appendChild(t),this._rt_offscreen_container=t}if(!this._rt_ha_state_icon){let t=document.createElement("ha-state-icon");this._rt_offscreen_container.appendChild(t),this._rt_ha_state_icon=t}let o=this._rt_ha_state_icon;return o.icon=t,o.stateObj=e,o.hass=i,new Promise(t=>{let e=0,i=setInterval(()=>{let s=o.shadowRoot,r=s?.querySelector("ha-icon")?.shadowRoot?.querySelector("ha-svg-icon"),a=r?.shadowRoot?.querySelector("svg"),l=a?.querySelector("path");if(l){let e=a.getAttribute("viewBox")?.split(" ")[3]||24,s={d:l.getAttribute("d"),vbSize:e};try{this._iconSvgCache[n]=s}catch(t){}clearInterval(i),t(s)}else e>=40&&(clearInterval(i),t({d:null,vbSize:null}));e++},50)})}let o="var(--rt-icon-color, var(--rt-icon-colour, var(--tile-icon-color)))";switch(t){case"top":s=[0,.625,.65,.566,.667,.667][this.ring_size-1],r=-27,this.indicator===tS&&(r*=.75),this.scale===tE&&(s*=.95,r*=.93),o=`var(--rt-icon-color, var(--rt-icon-colour,
                        color-mix(
                          in srgb, 
                          var(--primary-text-color, #212121) 
                          var(--rt-top-icon-opacity, 50%), 
                          transparent
                        )
                      ))`;break;case tF:s=1===this.ring_size?this.ring_type===tf?2.778:(this.ring_type===tm?2.7:2.38)*(this._hasMarker&&this.indicator?.9:1):[2.2,2,1.9,1.85,1.8][this.ring_size-2],r=this.bottom_element===tU?-3:0;break;case tI:s=[1.4,1,1,.8,.8,.8][this.ring_size-1],r=[35,37,40,40,40,40][this.ring_size-1],this.ring_type===tm&&(r=22)}let a=el(i)?this._grad.getSolidColour(i):"",l=await n.call(this,this.icon,this.hass);s*=24/parseFloat(l.vbSize);let h=50-l.vbSize/2*s;return J`
      <path 
        d=${l.d}
        fill=${a||o}
        transform=
          "translate(${h}, ${h+r})
          scale(${s}, ${s})" 
      />`},ex.prototype.renderDot=function(t,e){let i=this._ringWidth,s=ep(t,this._outerRadius-i/2,100),r=i*[.55,.4,.35,.35,.35,.35][this.ring_size-1],n=i/2+.7*r,o=eN(t-10,t+10,this._outerRadius+.05*i,1.1*i);return{object:J`
        <g class="indicator">
          <circle 
            class="dot"
            cx=${s[0]} cy=${s[1]} 
            r=${n-r/2}
            fill=${this._grad.getSolidColour(e)}
          />
        </g>`,mask:J`
        <clipPath id="dot-clip">
          <path d=${o}
          />
        </clipPath>
        <circle 
          cx=${s[0]} cy=${s[1]} 
          r=${n+r/2}
          clip-path="url(#dot-clip)"
        />      
      `}},ex.prototype.renderCompass=function(){let t=.7*this._ringWidth,e=[],i=[],s=[],r=[];for(let n=0;n<360;n+=5.625){let o=(n+180)%360;if(n%90==0)if("compass_nesw"===this.ring_type||"compass_n"===this.ring_type&&0===o){let e=ep(n,this._outerRadius-1.2*t/2,100);i.push(J`<text
                  class="compass cardinal"
                  x=${e[0]}
                  y=${e[1]}
                  text-anchor="middle"
                  alignment-baseline="central"
                  font-size=${2*t}
                  fill="var(--primary-text-color, #212121)"
                >${em(o)}</text>`)}else e.push(`M ${ep(n,this._outerRadius,100)}`),e.push(`L ${ep(n,this._outerRadius-1.7*t,100)}`);else n%22.5==0?(s.push(`M ${ep(n,this._outerRadius,100)}`),s.push(`L ${ep(n,this._outerRadius-1.2*t,100)}`)):(r.push(`M ${ep(n,this._outerRadius,100)}`),r.push(`L ${ep(n,this._outerRadius-t,100)}`))}let n=i?J`${i}`:I,o=e?J`
            <path
              class="compass cardinals"
              d=${e.join(" ")}
              stroke-width=2
              fill="none"
              stroke="var(--primary-text-color, #212121)"
              stroke-linecap="round"
            />`:I;return J`
        ${n}
        ${o}
        <path
          class="compass major"
          d=${s.join(" ")}
          stroke-width=1.4
          fill="none"
          stroke="var(--primary-text-color, #212121)"
          stroke-linecap="round"
          stroke-opacity=0.7
        />
        <path
          class="compass minor"
          d=${r.join(" ")}
          stroke-width=0.8
          fill="none"
          stroke="var(--primary-text-color, #212121)"
          stroke-linecap="round"
          stroke-opacity=0.3
        />`},ex.prototype.getRoundedValue=function(t,e=!1,i=99){var s,r;let n,o,a=Math.max(Math.floor(this.min_sig_figs-Math.log10(Math.abs(t))),0);a>(this.max_decimals??99)&&(a=this.max_decimals),a>i&&(a=i);let l=parseFloat(t);return isFinite(l)?0===l?"0":(e&&(a=Math.min(a,ed(l),i)),s=a,r=this.hass.locale,n=parseFloat(t).toFixed(s),o=eb(r),n.replace(".",o)):String(t)}}static get properties(){return{ring_type:{},indicator:{},scale:{},ring_size:{},colour:{attribute:!1},state:{attribute:!1},display_state:{attribute:!1},marker_value:{attribute:!1},marker_colour:{attribute:!1},compass_marker:{attribute:!1},marker2_value:{attribute:!1},marker2_colour:{attribute:!1},compass_marker2:{attribute:!1},min:{attribute:!1},max:{attribute:!1},icon:{attribute:!1},colourise_icon:{attribute:!1},name:{attribute:!1},bottom_element:{attribute:!1},middle_element:{attribute:!1},top_element:{attribute:!1},bottom_name:{attribute:!1},min_sig_figs:{attribute:!1},max_decimals:{attribute:!1},hass:{attribute:!1}}}configureRing(){this._outerRadius=50,this._hasMarker=el(this.marker_value),this.bottom_element===tP&&(this.bottom_name=this.bottom_name||this.name),this._startDegrees=60,this._endDegrees=300,this.ring_type.startsWith(tg)||this.ring_type===tm?(this._startDegrees=0,this._endDegrees=359.999):([tj,tH,tz].includes(this.bottom_element)||this.bottom_element===tP&&this.bottom_name.length<=[3,6,8,10,12,14][this.ring_size-1]||this.bottom_element===tU&&this.ring_size>1||this.bottom_element.includes(tR)&&this.ring_size>1)&&(this._startDegrees=45,this._endDegrees=315),this._ringUnit=this.state?this.state.unitOfMeasurement:I,this._displayUnit=this.display_state?this.display_state.unitOfMeasurement:I;let t={minValue:this.min,maxValue:this.max,gradStart:100*this._startDegrees/360,gradEnd:100*this._endDegrees/360};this._grad=new ev(this.colour,t),this.marker_colour=t_[this.marker_colour]||this.marker_colour,this.marker2_colour=t_[this.marker2_colour]||this.marker2_colour,this._ringWidth=[10,8,7,6,5.5,5][this.ring_size-1]*(this.scale===tN?1:.85)}getTopElementSvg(){switch(this.top_element){case"marker":return this.renderText(this.marker_value,"","top");case"marker_with_unit":return this.renderText(this.marker_value,this._displayUnit,"top");case tW:return this.renderText(this._displayUnit,"","top");case tx:return this.renderText(em(this.marker_value),"","top");default:return I}}getMiddleElementSvg(){switch(this.middle_element){case tA:case tO:case tC:case tT:if(this._noState)return I;let t=[tC,tT].includes(this.middle_element)?this.state.value:this.display_state.value,e="";this.middle_element===tO&&(e=this._displayUnit),this.middle_element===tT&&(e=this._ringUnit);let i=this.indicator===tS?tL:tF;return this.renderText(t,e,i);default:return I}}getBottomElementSvg(){if(this.ring_type.startsWith(tg))return I;switch(this.bottom_element){case tP:return this.renderText(this.bottom_name,"",tI);case tz:return this.renderText(this._displayUnit,"",tI);case tM:return this.renderText(this._ringUnit,"",tI);case tU:let t,e;if(this.ring_type===tm)return I;let i=0;do t=this.getRoundedValue(this.min,!0,this.max_decimals-i),e=this.max-this.min<.01?"–":this.getRoundedValue(this.max,!0,this.max_decimals-i);while(t.length+e.length>[5,5,7,8,9,11][this.ring_size-1]&&i++<this.max_decimals)return J`
          ${this.renderText(t,"","min")}
          ${this.renderText(e,"","max")}
        `;case tR:case tD:case tZ:case tJ:if(this._noState)return I;let s=[tZ,tJ].includes(this.bottom_element)?this.state.value:this.display_state.value,r="";return this.bottom_element===tD&&(r=this._displayUnit),this.bottom_element===tJ&&(r=this._ringUnit),this.renderText(s,r,tI);default:return I}}async updated(t){if(t.has("icon")||t.has("display_state")||t.has("middle_element")||t.has("top_element")||t.has("bottom_element")){let t;this.colourise_icon&&(t=this.state.value),this._iconSvg=this.middle_element===tk?await this.renderIcon(tF,this.display_state.stateObj,t):this.top_element===tv?await this.renderIcon("top",this.display_state.stateObj,t):this.bottom_element===tj?await this.renderIcon(tI,this.display_state.stateObj,t):I,this.requestUpdate()}}render(){let t;this.configureRing(),this._noState=["unknown","unavailable"].includes(this.state.value);let e=ec(this.state.value,this.min,this.max),i=this._startDegrees+(this._endDegrees-this._startDegrees)*(e-this.min)/(this.max-this.min);this._noState&&(e=this.min,i=this._startDegrees,this._grad=new ev("grey"));let s=.15;"dot"===this.indicator?s=.7:this.indicator===tS?s=.07:this.scale===t$&&(s=.15);let r=el(this.marker_value)&&!this._noState?this.renderMarker(this.marker_value,`var(--rt-marker-color, var(--rt-marker-colour, ${this.marker_colour}))`,this.compass_marker):I,n=el(this.marker2_value)&&!this._noState?this.renderMarker(this.marker2_value,`var(--rt-marker2-color, var(--rt-marker2-colour, ${this.marker2_colour}))`,this.compass_marker2):I,o=I,a=I;if(this.ring_type!==tf&&!this._noState)switch(this.indicator){case"arc":o=this.renderSolidRing(this._startDegrees,i,this.state.value,[r.mask,n.mask]);break;case"dot":o=this.renderDot(i,this.state.value);break;case tS:a=this.renderPointer(i)}let l=I;if(this.scale!==tN){let t=this.indicator===tS?.7:.2;l=this.renderScale(t,[o.mask,r.mask,n.mask])}t=this.ring_type===tf?I:this.ring_type.startsWith(tg)?this.renderCompass():this.renderGradRing(this._startDegrees,this._endDegrees,s,[o.mask,r.mask,n.mask]).object;let h=this.getTopElementSvg(),c=this.getMiddleElementSvg(),d=this.getBottomElementSvg();return Z`
      <svg
        viewBox="0 0 ${100} ${100}"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        role="img"
        aria-hidden="true"
      >
        <g class="elements">
          ${h} ${c} ${d}
          ${this._iconSvg}
        </g>
        <g
          class="ring"
          transform="rotate(${180*(this.ring_type===tm)} 
            ${50} ${50})"
        >
          ${t}
        </g>
        ${l}
        <g
          class="indicators"
          transform="rotate(${180*(this.ring_type===tm)} 
            ${50} ${50})"
        >
          ${o.object} ${n.object} ${r.object}
          ${a.object}
        </g>
      </svg>
    `}static styles=n`
    :host {
      display: var(--ha-icon-display, inline-flex);
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: var(--icon-primary-color, currentcolor);
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      overflow: visible;
    }
    text {
      font-family: var(--rt-font-family, Geist), var(--ha-font-family-body);
      font-optical-sizing: auto;
      font-style: normal;
      color: var(--primary-text-color);
      font-weight: 600;
    }
    text.middle {
      letter-spacing: -0.3px;
    }
    text.middle.tight {
      letter-spacing: -1.1px;
    }
    text.lower-middle {
      letter-spacing: -0.2px;
    }
    text.middle.unit {
      letter-spacing: 0px;
      opacity: var(--rt-background-text-opacity, 0.6);
      font-weight: 500;
    }
    text.bottom.closed {
      letter-spacing: -0.2px;
      opacity: var(--rt-background-text-opacity, 0.6);
      font-weight: 500;
    }
    text.top.marker {
      opacity: var(--rt-background-text-opacity, 0.6);
      font-weight: 500;
    }
    text.compass.cardinal {
      font-weight: 800;
    }
    g.scale text {
      font-weight: 300;
      letter-spacing: 0px;
      opacity: var(--rt-scale-text-opacity, 0.5);
      fill: var(--primary-text-color, #212121);
    }
    .scale .ticks {
      stroke: var(--primary-text-color, #212121);
    }
    .pointer {
      stroke: var(
        --rt-pointer-color,
        var(
          --rt-pointer-colour,
          color-mix(in srgb, orange 90%, var(--primary-text-color))
        )
      );
      fill: var(
        --rt-pointer-color,
        var(
          --rt-pointer-colour,
          color-mix(in srgb, orange 90%, var(--primary-text-color))
        )
      );
    }
    .pointer-centre {
      fill: #444444;
    }
  `}var eW={};eW=JSON.parse('{"name":"ring-tile-card","version":"1.0.5","description":"A Home Assistant card to visualise your sensor data, based on tile card","author":"neponn","license":"MIT","repository":{"type":"git","url":"https://github.com/neponn/ring-tile-card.git"},"source":"src/ring-tile-card.js","scripts":{"clean":"rm -rf .parcel-cache dist","start":"BUILD_NUMBER=$(git rev-parse --short HEAD)-$(date +%y%m%d-%H%M)-dev parcel","build":"BUILD_NUMBER=$(git rev-parse --short HEAD)-$(date +%y%m%d-%H%M)-prod parcel build --no-source-maps","clean-build":"npm run clean && npm run build","rebuild-deps":"npm run clean && ncu -u && rm -rf node_modules package-lock.json && npm i"},"type":"module","devDependencies":{"npm-check-updates":"^19.2.0","parcel":"^2.16.3"},"dependencies":{"lit":"^3.3.1"},"bugs":{"url":"https://github.com/neponn/ring-tile-card/issues"},"homepage":"https://github.com/neponn/ring-tile-card#readme"}');let ew=`v${eW.version}   #635c897-251221-0359-prod`;console.info(`%c ring-tile-card %c ${ew} `,"color: yellow; font-weight: bold; background: darkblue","color: white; font-weight: bold; background: dimgray"),eS("gf1","https://fonts.googleapis.com","preconnect"),eS("gf2","https://fonts.gstatic.com","preconnect"),eS("gf3","https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap","stylesheet",!0),customElements.define("ring-tile",ef),customElements.define("rt-info",e$),customElements.define("rt-ring",ey),customElements.define("rt-ring-svg",ex),window.customCards=window.customCards||[],window.customCards.push({type:"ring-tile",name:"Ring Tile Card",preview:!0,description:"Add a ring to your sensor tile cards to visualise sensor state."})})();