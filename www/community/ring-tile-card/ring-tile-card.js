(()=>{let t,e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(i&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}let a=(t,...e)=>new n(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,s),o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new n("string"==typeof(e=i)?e:e+"",void 0,s)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,p=globalThis,m=p.trustedTypes,g=m?m.emptyScript:"",f=p.reactiveElementPolyfillSupport,S={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class N extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){let n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...d(t),...u(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(o(i));else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of s){let s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:S;this._$Em=s;let n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){let s=this.constructor,r=this[t];if(!(((i??=s.getPropertyOptions(t)).hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N.elementProperties=new Map,N.finalized=new Map,f?.({ReactiveElement:N}),(p.reactiveElementVersions??=[]).push("2.1.1");let E=globalThis,v=E.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",W=`lit$${Math.random().toFixed(9).slice(2)}$`,w="?"+W,A=`<${w}>`,k=document,O=()=>k.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,z="[ 	\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,j=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,T=/"/g,D=/^(?:script|style|textarea|title)$/i,Z=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),J=Z(1),H=Z(2),I=(Z(3),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),B=new WeakMap,F=k.createTreeWalker(k,129);function G(t,e){if(!V(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,h]=((t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":3===e?"<math>":"",a=M;for(let e=0;e<i;e++){let i=t[e],o,l,h=-1,c=0;for(;c<i.length&&(a.lastIndex=c,null!==(l=a.exec(i)));)c=a.lastIndex,a===M?"!--"===l[1]?a=P:void 0!==l[1]?a=U:void 0!==l[2]?(D.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=r??M,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?j:'"'===l[3]?T:R):a===T||a===R?a=j:a===P||a===U?a=M:(a=j,r=void 0);let d=a===j&&t[e+1].startsWith("/>")?" ":"";n+=a===M?i+A:h>=0?(s.push(o),i.slice(0,h)+x+i.slice(h)+W+d):i+W+(-2===h?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=q.createElement(l,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(x)){const e=h[n++],i=s.getAttribute(t).split(W),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?te:"@"===a[1]?ti:X}),s.removeAttribute(t)}else t.startsWith(W)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(W),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),F.nextNode(),o.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===w)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(W,t+1));)o.push({type:7,index:r}),t+=W.length-1}r++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===I)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,n=C(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Q(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new ts(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=F.nextNode(),n++)}return F.currentNode=k,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let i;C(t=K(this,t,e))?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):V(i=t)||"function"==typeof i?.[Symbol.iterator]?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new q(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!C(t=K(this,t,e,0))||t!==this._$AH&&t!==I)&&(this._$AH=t);else{let s,a,o=t;for(t=r[0],s=0;s<r.length-1;s++)(a=K(this,o[i+s],e,s))===I&&(a=this._$AH[s]),n||=!C(a)||a!==this._$AH[s],a===L?t=L:t!==L&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}n&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class te extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class ti extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??L)===I)return;let i=this._$AH,s=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ts{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}let tr=E.litHtmlPolyfillSupport;tr?.(q,Q),(E.litHtmlVersions??=[]).push("3.3.1");let tn=globalThis;class ta extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}ta._$litElement$=!0,ta.finalized=!0,tn.litElementHydrateSupport?.({LitElement:ta});let to=tn.litElementPolyfillSupport;to?.({LitElement:ta}),(tn.litElementVersions??=[]).push("4.2.1");class tl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let th=(t=class extends tl{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return I}},(...e)=>({_$litDirective$:t,values:e})),tc={ha_red:"rgb(244,67,54)",ha_orange:"rgb(255,152,1)",ha_yellow:"rgb(255,193,7)",ha_green:"rgb(81,140,67)",ha_blue:"rgb(68,115,158)",ha_purple:"rgb(146,107,199)",ha_grey:"color-mix(in srgb, var(--primary-text-color, #212121) 50%, transparent)",ha_gray:"color-mix(in srgb, var(--primary-text-color, #212121) 50%, transparent)"},td="open",tu="closed",t_="compass",tp="none",tm="pointer",tg="none",tf="arrow_in",tS="none",t$="ticks",ty="ticks_with_labels",tN="icon",tE="marker_dir",tv="unit",tb="none",tx="icon",tW="value",tw="value_with_unit",tA="ring_value",tk="ring_value_with_unit",tO="none",tC="name",tV="unit",tz="ring_unit",tM="icon",tP="min_max",tU="value",tj="value_with_unit",tR="ring_value",tT="ring_value_with_unit",tD="none",tZ="bottom",tJ="middle",tH="below_dial",tI=[{US:"color",AU:"colour"},{US:"marker_color",AU:"marker_colour"},{US:"marker2_color",AU:"marker2_colour"},{US:"colorize_icon",AU:"colourise_icon"}],tL={ring_only:!1,ring_type:tu,indicator:"arc",scale:tS,top_element:tb,middle_element:tx,bottom_element:tD,colour:{"70%":tc.ha_blue,"80%":tc.ha_yellow,"90%":tc.ha_red},min:0,max:100,min_sig_figs:2,max_decimals:1,marker_colour:"var(--secondary-text-color, grey)",marker2_colour:"var(--disabled-text-color, lightgrey)",large_secondary:!1,hide_state:!1,transparent_tile:!1,colourise_icon:!1,tap_action:{action:"more-info",tapped:"info"},icon_tap_action:{action:"more-info",tapped:"icon"}},tB={ring_type:td,top_element:tv,middle_element:tW,bottom_element:tM,min_sig_figs:2},tF={ring_type:td,top_element:tN,middle_element:tw,bottom_element:tP,min_sig_figs:3},tG={top_element:tE,middle_element:tw,bottom_element:tD,marker_colour:tc.ha_blue,marker2_colour:"var(--disabled-text-color, grey)",compass_marker:tf,compass_marker2:tf,indicator:tg,ring_size:2},tq={temperature:{null:{null:{default_icon:"mdi:thermometer",ring_type:td,indicator:"dot",bottom_element:tP},"°C":{min:17,max:27,colour:{19.5:tc.ha_blue,21:tc.ha_green,22.5:tc.ha_green,24:tc.ha_yellow,25:tc.ha_orange,27:tc.ha_red}},"°F":{min:62,max:80,colour:{67:tc.ha_blue,70:tc.ha_green,73:tc.ha_green,75:tc.ha_yellow,77:tc.ha_orange,80:tc.ha_red}}}},pressure:{null:{null:{default_icon:"mdi:weather-partly-cloudy",ring_type:td,indicator:tm,scale:t$,middle_element:tO,bottom_element:tM},mbar:{min:980,max:1040,colour:{983:tc.ha_blue,1013:tc.ha_green,1043:tc.ha_yellow}},inHg:{min:28.9,max:30.4,colour:{29:tc.ha_blue,29.9:tc.ha_green,30.4:tc.ha_yellow}}},medium:{null:{scale:ty,top_element:tb,middle_element:tO,bottom_element:tM}},large:{null:{scale:ty,middle_element:tW,bottom_element:tV}}},humidity:{null:{null:{default_icon:"mdi:water-percent",ring_type:td,indicator:"dot",max_decimals:0,colour:{0:tc.ha_red,50:tc.ha_green,100:tc.ha_blue}}},medium:{null:{top_element:tb,middle_element:tw,bottom_element:tM}},large:{null:{top_element:tN,middle_element:tw,bottom_element:tD}}},data_size:{null:{null:{ring_type:td,bottom_element:tP}},medium:{null:{top_element:tb,middle_element:tx}}},wind_speed:{null:{null:{default_icon:"mdi:weather-windy",ring_type:td},kn:{min:0,max:40,colour:{10:tc.ha_blue,15:tc.ha_green,20:tc.ha_yellow,25:tc.ha_orange,30:tc.ha_red}},"km/h":{min:0,max:75,colour:{20:tc.ha_blue,30:tc.ha_green,40:tc.ha_yellow,50:tc.ha_orange,60:tc.ha_red}},mph:{min:0,max:45,colour:{12:tc.ha_blue,17:tc.ha_green,23:tc.ha_yellow,29:tc.ha_orange,35:tc.ha_red}}}},precipitation:{null:{null:{default_icon:"mdi:weather-rainy",ring_type:td,colour:tc.ha_blue,bottom_element:tP},mm:{max:10},in:{max:.4}},medium:{null:{top_element:tb,middle_element:tx}}},battery:{null:{"%":{colour:{20:tc.ha_red,30:tc.ha_orange,40:tc.ha_yellow,70:tc.ha_green},max_decimals:0}},medium:{"%":{scale:t$,ring_type:tu,top_element:tN,middle_element:tk,bottom_element:tD}},large:{"%":{scale:t$,ring_type:tu,top_element:tN,middle_element:tk,bottom_element:tD}}},power:{null:{null:{ring_type:td,indicator:"dot"},kW:{max:3},W:{max:3e3,bottom_element:tD}},large:{null:{scale:ty}}},energy:{null:{null:{ring_type:td},kWh:{max:10},Wh:{max:1e4,bottom_element:tD}},large:{null:{scale:ty}}},signal_strength:{null:{null:{ring_type:td,middle_element:tA,bottom_element:tz,min:-90,max:-40,colour:{"-90":tc.ha_purple,"-80":tc.ha_red,"-70":tc.ha_orange,"-67":tc.ha_yellow,"-60":tc.ha_green},max_decimals:0}},medium:{null:{bottom_element:tM}},large:{null:{middle_element:tk,bottom_element:tP}}},moisture:{null:{null:{colour:{25:tc.ha_yellow,45:tc.ha_blue,55:tc.ha_blue,75:tc.ha_purple},max_decimals:0}},medium:{null:{ring_type:tu,top_element:tN,middle_element:tw}},large:{null:{ring_type:tu,bottom_element:tD}}}};var tK={};tK=JSON.parse('{"directions":{"north":"Север","east":"Изток","south":"Юг","west":"Запад","N":"С","NNE":"ССИ","NE":"СИ","ENE":"ИСИ","E":"И","ESE":"ИЮИ","SE":"ЮИ","SSE":"ЮЮИ","S":"Ю","SSW":"ЮЮЗ","SW":"ЮЗ","WSW":"ЗЮЗ","W":"З","WNW":"ЗСЗ","NW":"СЗ","NNW":"ССЗ"}}');var tY={};tY=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Oest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var tQ={};tQ=JSON.parse('{"directions":{"north":"Sever","east":"Východ","south":"Jih","west":"Západ","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');var tX={};tX=JSON.parse('{"directions":{"north":"Nord","east":"Øst","south":"Syd","west":"Vest","N":"N","NNE":"NNØ","NE":"NØ","ENE":"ØNØ","E":"Ø","ESE":"ØSØ","SE":"SØ","SSE":"SSØ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var t0={};t0=JSON.parse('{"directions":{"north":"Norden","east":"Osten","south":"Süden","west":"Westen","N":"N","NNE":"NNO","NE":"NO","ENE":"ONO","E":"O","ESE":"OSO","SE":"SO","SSE":"SSO","S":"S","SSW":"SSW","SW":"SW","WSW":"WSW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var t1={};t1=JSON.parse('{"directions":{"north":"North","east":"East","south":"South","west":"West","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSW","SW":"SW","WSW":"WSW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var t2={};t2=JSON.parse('{"directions":{"north":"Norte","east":"Este","south":"Sur","west":"Oeste","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t5={};t5=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Ouest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t3={};t3=JSON.parse('{"directions":{"north":"Észak","east":"Kelet","south":"Dél","west":"Nyugat","N":"É","NNE":"ÉÉK","NE":"ÉK","ENE":"ÉKÉ","E":"K","ESE":"KDK","SE":"DK","SSE":"DDK","S":"D","SSW":"DDNy","SW":"DNy","WSW":"NyDNy","W":"Ny","WNW":"NyÉNy","NW":"ÉNy","NNW":"ÉÉNy"}}');var t6={};t6=JSON.parse('{"directions":{"north":"Norður","east":"Austur","south":"Suður","west":"Vestur","N":"N","NNE":"NNA","NE":"NA","ENE":"ANA","E":"A","ESE":"ASA","SE":"SA","SSE":"SSA","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var t8={};t8=JSON.parse('{"directions":{"north":"Nord","east":"Est","south":"Sud","west":"Ovest","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"E","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var t4={};t4=JSON.parse('{"directions":{"north":"Noorden","east":"Oosten","south":"Zuiden","west":"Westen","N":"N","NNE":"NNO","NE":"NO","ENE":"ONO","E":"O","ESE":"OZO","SE":"ZO","SSE":"ZZO","S":"Z","SSW":"ZZW","SW":"ZW","WSW":"WZW","W":"W","WNW":"WNW","NW":"NW","NNW":"NNW"}}');var t7={};t7=JSON.parse('{"directions":{"north":"Nord","east":"Øst","south":"Sør","west":"Vest","N":"N","NNE":"NNØ","NE":"NØ","ENE":"ØNØ","E":"Ø","ESE":"ØSØ","SE":"SØ","SSE":"SSØ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var t9={};t9=JSON.parse('{"directions":{"north":"Północ","east":"Wschód","south":"Południe","west":"Zachód","N":"Pn.","NNE":"Pn. Pn. Wsch.","NE":"Pn. Wsch.","ENE":"Wsch. Pn. Wsch.","E":"Wsch.","ESE":"Wsch. Pd. Wsch.","SE":"Pd. Wsch.","SSE":"Pd. Pd. Wsch.","S":"Pd.","SSW":"Pd. Pd. Zach.","SW":"Pd. Zach.","WSW":"Zach. Pd. Zach.","W":"Zach.","WNW":"Zach. Pn. Zach.","NW":"Pn. Zach.","NNW":"Pn. Pn. Zach."}}');var et={};et=JSON.parse('{"directions":{"north":"norte","east":"leste","south":"sul","west":"oeste","N":"N","NNE":"NNE","NE":"NE","ENE":"ENE","E":"L","ESE":"ESE","SE":"SE","SSE":"SSE","S":"S","SSW":"SSO","SW":"SO","WSW":"OSO","W":"O","WNW":"ONO","NW":"NO","NNW":"NNO"}}');var ee={};ee=JSON.parse('{"directions":{"north":"Nord","east":"Öst","south":"Syd","west":"Väst","N":"N","NNE":"NNÖ","NE":"NÖ","ENE":"ÖNÖ","E":"Ö","ESE":"ÖSÖ","SE":"SÖ","SSE":"SSÖ","S":"S","SSW":"SSV","SW":"SV","WSW":"VSV","W":"V","WNW":"VNV","NW":"NV","NNW":"NNV"}}');var ei={};ei=JSON.parse('{"directions":{"north":"Sever","east":"Východ","south":"Juh","west":"Západ","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');var es={};es=JSON.parse('{"directions":{"north":"Sever","east":"Vzhod","south":"Jug","west":"Zahod","N":"S","NNE":"SSV","NE":"SV","ENE":"VSV","E":"V","ESE":"VJV","SE":"JV","SSE":"JJV","S":"J","SSW":"JJZ","SW":"JZ","WSW":"ZJZ","W":"Z","WNW":"ZSZ","NW":"SZ","NNW":"SSZ"}}');let er={bg:tK,ca:tY,cz:tQ,da:tX,de:t0,en:t1,es:t2,fr:t5,hu:t3,is:t6,it:t8,nl:t4,no:t7,pl:t9,pt:et,sv:ee,sk:ei,sl:es,ru:JSON.parse('{"directions":{"north":"Север","east":"Восток","south":"Юг","west":"Запад","N":"С","NNE":"ССВ","NE":"СВ","ENE":"ВСВ","E":"В","ESE":"ВЮВ","SE":"ЮВ","SSE":"ЮЮВ","S":"Ю","SSW":"ЮЮЗ","SW":"ЮЗ","WSW":"ЗЮЗ","W":"З","WNW":"ЗСЗ","NW":"СЗ","NNW":"ССЗ"}}')};function en(t){return!isNaN(parseFloat(t))&&!isNaN(t-0)}function ea(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)}function eo(t,e,i){return t>i?i:t<e?e:t}function el(t,e=5){if(Math.floor(t=parseFloat(t.toFixed(e)))===t)return 0;let i=t.toString();return -1===i.indexOf(".")?0:i.split(".")[1].length}function eh(t){return t*Math.PI*2/360}function ec(t,e,i){return[-Math.sin(eh(t))*e+i/2,Math.cos(eh(t))*e+i/2]}function ed(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].map(t=>(function(t){let e,i=navigator.language.slice(0,2);try{e=t.split(".").reduce((t,e)=>t[e],er[i])}catch{e=t.split(".").reduce((t,e)=>t[e],er.en)}return e})(`directions.${t}`))[Math.round((t%360+360)%360/22.5)%16]}class eu{#t;#e;#i;#s;#r;#n;constructor(t,e){if(this.#t=t,this.#e=e,en(this.#t)?this.#i=0:ea(this.#t)&&this.#t.attribute?this.#i=2:this.#i=1,0===this.#i)return;switch(this.#i){case 1:ea(this.#t)?(this.#s=this.#t.entity,this.#r=this.#t.entity):(this.#s=this.#t,this.#r=this.#t);break;case 2:this.#s=this.#t.attribute,this.#r=this.#t.entity}const i=this.#e.states[this.#r];this.#n={...i},this.#n.attributes={...i.attributes},2===this.#i&&(this.#n.state=i.attributes[this.#s]??0),this.#t.device_class&&(this.#n.attributes.device_class=this.#t.device_class),this.#t.unit_of_measurement&&(this.#n.attributes.unit_of_measurement=this.#t.unit_of_measurement)}get deviceClass(){return this.#n.attributes.device_class}get unitOfMeasurement(){return this.#n.attributes.unit_of_measurement}get elementType(){return this.#i}get stateObj(){return this.#n}get value(){return 0===this.#i?this.#t:this.#n.state}get elementName(){return this.#s}get entityName(){return this.#r}}class e_ extends ta{_noState;_configProcessed=!1;static get properties(){return{_hass:{attribute:!1},_config:{state:!0},_ringStateObj:{state:!0},_displayStateObj:{state:!0},_markerValue:{state:!0},_marker2Value:{state:!0},_minValue:{state:!0},_maxValue:{state:!0}}}processConfig(){let t={...tL};this._config.ring_size&&2===this._config.ring_size&&(t={...t,...tB}),this._config.ring_size&&this._config.ring_size>2&&(t={...t,...tF});let e=this._ringElement.deviceClass,i=this._ringElement.unitOfMeasurement;if(this._config.ring_type&&this._config.ring_type.startsWith(t_))t={...t,...tG};else{let s=tq[e];if(s){let e=this._config.ring_size?1===this._config.ring_size?"small":2===this._config.ring_size?"medium":"large":"small",r=s.null||{},n=r.null||{},a=r[i]||{},o=s[e]||{},l=o.null||{},h=o[i]||{};t={...t,...n,...a,...l,...h}}}tI.forEach(t=>{t.US in this._config&&(this._config[t.AU]=this._config[t.US])}),this._config={...t,...this._config},this._config.ring_size=eo(this._config.ring_size||1,1,6),this._name=this._config.name||this._displayStateObj.attributes.friendly_name,this._config.bottom_name=this._config.bottom_name||this._name,this._config.ring_only=this._config.ring_only||this._config.ring_size>=3,this._configProcessed=!0}setConfig(t){if(!t)throw Error("Invalid configuration");if(!t.entity)throw Error("You must define an entity");this._config={...t},this._hass&&(this.hass=this._hass)}set hass(t){this._hass=t,this._ringElement=new eu(this._config.ring_entity||this._config.entity,t),this._ringStateObj=this._ringElement.stateObj;let e=this._ringElement.value;this._noState=["unavailable","unknown"].includes(e),this._displayElement=new eu(this._config.entity,t),this._displayStateObj=this._displayElement.stateObj,this._ringStateObj&&!this._configProcessed&&this.processConfig(),null!=this._config.marker&&(this._markerElement=new eu(this._config.marker,this._hass),this._markerValue=parseFloat(this._markerElement.value)),null!=this._config.marker2&&(this._marker2Element=new eu(this._config.marker2,this._hass),this._marker2Value=parseFloat(this._marker2Element.value)),null!=this._config.min&&(this._minElement=new eu(this._config.min,this._hass),this._minValue=parseFloat(this._minElement.value)),null!=this._config.max&&(this._maxElement=new eu(this._config.max,this._hass),this._maxValue=parseFloat(this._maxElement.value)),this._minValue===this._maxValue&&(this._maxValue+=1e-11)}render(){let t=this._ringStateObj?parseFloat(this._ringElement.value):"unavailable",e=this._config.hide_state?L:J`
          <state-display
            .stateObj=${this._displayStateObj}
            .hass=${this._hass}
            .name=${this._name}
          ></state-display>
        `,i=[36,96,154,212,270,330][this._config.ring_size-1],s={vertical:!1,centred:this._config.ring_only||this._config.ring_size>=3,large:this._config.ring_size>1,small:1===this._config.ring_size},r={"transparent-tile":this.transparent_tile},n=this._config.icon||this._displayStateObj.attributes.icon||this._config.default_icon;return J`
      <ha-card class="active type-tile ${th(r)}">
        <div
          class="background"
          @click=${t=>this._handleAction(t,this._config.tap_action)}
          role=${(this._hasCardAction?"button":void 0)??L}
          tabindex=${(this._hasCardAction?"0":void 0)??L}
          aria-labelledby="info"
        >
          <ha-ripple .disabled=${!this._hasCardAction}></ha-ripple>
        </div>
        <div class="container">
          <div class="content ${th(s)} ">
            <rt-ring
              role=${(this._hasIconAction?"button":void 0)??L}
              tabindex=${(this._hasIconAction?"0":void 0)??L}
              data-domain="sensor"
              data-state=${t}
              ring_size=${this._config.ring_size}
              @click=${t=>this._handleAction(t,this._config.icon_tap_action)}
            >
              <rt-ring-svg
                style="width:${i}px;height:${i}px;"
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
                .icon=${n}
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
              ${this._noState?J` <ha-tile-badge
                    style="--tile-badge-background-color: var(--orange-color)"
                  >
                    <ha-svg-icon .path=${"M10 3H14V14H10V3M10 21V17H14V21H10Z"} />
                  </ha-tile-badge>`:L}
            </rt-ring>
            ${this._config.ring_only||this._config.ring_size>=3?L:J` <rt-info
                  id="info"
                  .primary=${this._name}
                  .secondary=${e}
                  .large_ring=${this._config.ring_size>1}
                  large_secondary=${this._config.large_secondary}
                ></rt-info>`}
          </div>
        </div>
      </ha-card>
    `}static getStubConfig(t,e,i){let s=e.filter(t=>t.startsWith("sensor.")),r=s.filter(e=>"temperature"===t.states[e].attributes.device_class);return{entity:r.length>0?r[Math.floor(Math.random()*r.length)]:s[Math.floor(Math.random()*s.length)]}}getCardSize(){return 1}getGridOptions(){let t=6;this._config.ring_only&&(t=this._config.transparent_tile?1.6:2*this._config.ring_size);let e=this._config.ring_size;return{columns:t,rows:e,min_columns:t,min_rows:e}}static styles=a`
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
      /* margin: auto;
      padding: 0; */
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
  `;_handleAction(t,e){if(!e||!e.action)return;let i="icon"===e.tapped&&this._config.ring_entity?this._ringElement.entityName:this._displayElement.entityName;switch(e.action){case"more-info":i&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:i}}));break;case"navigate":e.navigation_path&&(window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"call-service":if(e.service){let[t,i]=e.service.split(".",2);this._hass.callService(t,i,e.service_data||{})}break;case"url":e.url&&window.open(e.url,"_blank");break;default:console.warn(`Unhandled action type: ${e.action}`)}}_hasCardAction(){return this._config.tap_action&&"none"!==this._config.tap_action.action}_hasIconAction(){return this._config.icon_tap_action&&"none"!==this._config.icon_tap_action.action}}function ep(t,e,i,s=!1){if(!document.getElementById(t)){var r=document.createElement("link");r.id=t,r.rel=i,r.href=e,s&&(r.crossOrigin="anonymous"),document.head.appendChild(r)}}class em extends ta{static get properties(){return{primary:{},secondary:{},large_ring:{},large_secondary:{}}}render(){return this.large_ring?J`
        <div class="info large">
          <span class="primary small">${this.primary}</span>
          ${this.secondary?J`<span class="secondary ${this.large_secondary?"large":"small"}">${this.secondary}</span>`:L}
        </div>
      `:J`
        <div class="info small">
          <span class="primary small nowrap">${this.primary}</span>
          ${this.secondary?J`<span class="secondary small nowrap">${this.secondary}</span>`:L}
        </div>
      `}static styles=a`
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
      font-family: Geist, var(--ha-font-family-body);
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
  `}class eg extends ta{static get properties(){return{interactive:{},imageStyle:{},imageUrl:{},ring_size:{}}}render(){if(this.imageUrl){let t=this.imageStyle||DEFAULT_TILE_ICON_BORDER_STYLE;return J`
        <div class="container ${classMap({[t]:this.imageUrl})}">
          <img alt="" src=${this.imageUrl} />
        </div>
        <slot></slot>
      `}return J`
      <div
        class="container size_${this.ring_size} ${this.interactive?"background":""}"
      >
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    `}static styles=a`
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
      transform: scale(1.2);
    }
    :host([interactive]:hover) {
      --tile-icon-opacity: var(--tile-icon-hover-opacity);
    }
    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      // width: 36px;
      // height: 36px;
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
    .container.background::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--tile-icon-color);
      transition: background-color 180ms ease-in-out, opacity 180ms ease-in-out;
      opacity: var(--tile-icon-opacity);
    }
    .container ::slotted([slot="icon"]) {
      display: flex;
      color: var(--tile-icon-color);
      transition: color 180ms ease-in-out;
      pointer-events: none;
    }
    .container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}function ef(t,e,i,s){let r=i-s,n=+(Math.abs(e-t)>180),a=ec(t,i,100).join(" "),o=ec(e,i,100).join(" "),l=ec(e,r,100).join(" "),h=ec(t,r,100).join(" "),c=[];return c.push(`M ${a}`),c.push(`A ${i} ${i} 0 ${n} 1 ${o}`),c.push(`A ${s/2} ${s/2} 0 0 1 ${l}`),c.push(`A ${r} ${r} 0 ${n} 0 ${h}`),c.push(`A ${s/2} ${s/2} 0 0 1 ${a}`),c.join(" ")}function eS(t){let e=new Intl.NumberFormat(t).formatToParts(1.1).find(t=>"decimal"===t.type);return e?e.value:"."}function e$(t,e){let i=Math.floor(Math.log10(t)),s=t/Math.pow(10,i);return(e?s<1.5?1:s<3?2:s<7?5:10:s<=1?1:s<=2?2:s<=5?5:10)*Math.pow(10,i)}class ey{#a=[];#o;#l;#h;#c;#d=!1;constructor(t,e={}){if(t.constructor==Object){for(const[i,s]of(this.#h=e.gradStart||0,this.#c=e.gradEnd||100,this.#o=e.minValue||0,this.#l=e.maxValue||100,Object.entries(t))){const t=i.endsWith("%")?this.#o+parseFloat(i)/100*(this.#l-this.#o):parseFloat(i),e=tc[s]||s;this.#a.push({value:this.#u(t),colour:e})}this.#a.sort((t,e)=>t.value-e.value),this.#a[0]>0&&this.#a.unshift({value:0,colour:this.#a[0].colour}),100>this.#a.at(-1)&&this.#a.push({value:100,colour:this.#a.at(-1).colour})}else this.#d=!0,this.#a=tc[t]||t}#u(t){return this.#h+(parseFloat(t)-this.#o)/(this.#l-this.#o)*(this.#c-this.#h)}getConicGradientCss(t=1){if(this.#d)return`background: color-mix(in srgb, ${this.#a} var(--rt-ring-background-opacity, ${100*t}%), transparent);`;let e=this.#a.map(e=>`color-mix(in srgb, ${e.colour} var(--rt-ring-background-opacity, ${100*t}%), transparent) ${e.value}%`);return`background-image: conic-gradient(
        from 180deg,
        ${e.join(", ")}
      );
    `}getSolidColourAtGradPct(t){let e=this.#o+(t-this.#h)/(this.#c-this.#h)*(this.#l-this.#o);return this.getSolidColour(e)}getSolidColour(t){if(en(t)||(t=0),this.#d)return this.#a;if(this.#u(t)<this.#a[0].value)return this.#a[0].colour;if(this.#u(t)>this.#a.at(-1).value)return this.#a.at(-1).colour;let e=this.#u(t),i=this.#a.find(t=>t.value===e);if(i)return i.colour;let s=this.#a.findLast(t=>t.value<e),r=this.#a.find(t=>t.value>e);if(s.colour===r.colour)return s.colour;let n=100*(e-s.value)/(r.value-s.value);return`color-mix(in srgb,
        ${s.colour} ${100-n}%,
        ${r.colour} ${n}%
      )
    `}}class eN extends ta{_iconSvgCache={};_iconSvg=L;constructor(...t){super(...t),eN.prototype.renderText=function(t,e,i){function s(e="",i=1,r=6){let n=eS();return 1-.16*eo(t.length-.7*!!t.includes(n)-.5*!!t.includes("°")+e.length*i-2,0,r-2)}function r(i,s,r,n,a){return H`
        <text class=${a}
          x=${50+r} y="${50+n+i/3.5}" 
          text-anchor="middle" alignment-baseline="alphabetic" 
          font-size=${i}
          >${t}<tspan
            alignment-baseline="alphabetic"
            font-size=${s}
          >${e||L}</tspan>
        </text>
      `}function n(t,e,i,s,r,a="middle"){return H`
        <text class=${r}
          x=${50+i} y="${50+s+e/3.5}" 
          text-anchor=${a} alignment-baseline="alphabetic" 
          font-size=${e}
        >${t}</text>
      `}en(t)&&!["min","max"].includes(i)&&(t=this.getRoundedValue(t)),e&&(1===this.ring_size?e.startsWith("°")?(t=`${t}\xb0`,e=""):e=e.slice(0,1):"%"!==e&&(e=` ${e}`));let a=[1,.8,.75,.72,.71,.7][this.ring_size-1],o=[20,15,11,10,9,7.5][this.ring_size-1];switch(i){case"top":return r(12,12,0,this.scale===ty?-22:-25,"top marker");case tJ:if(1===this.ring_size||["%",""].includes(e)){let t=42*s(e,.8)*a;return r(t,.8*t,0,0,`middle ${1===this.ring_size?"tight":""}`)}{let i=38*s()*a,r=22-2*(2===this.ring_size);return H`
            ${n(t,i,0,0,"middle")}
            ${n(e,15*a,0,r,"middle unit")}
          `}case tH:{let t=20*s(e,.8,4)*a;return r(t,.8*t,0,18,"lower-middle")}case tZ:{let t=41,e="bottom";return this.ring_type===tu&&(t-=15,e+=" closed"),r(o,o,0,t,e)}case"min":{let e=-32+[0,6,6,4,3.8,3.2][this.ring_size-1],i=41-10*(this.ring_type===tu);return n(t,o,e,i,"bottom","start")}case"max":{let e=32-[0,6,6,4,3.8,3.2][this.ring_size-1],i=41-10*(this.ring_type===tu);return n(t,o,e,i,"bottom","end")}}},eN.prototype.renderScale=function(t=1){let e,i=this._ringWidth,s=1===this.ring_size?3:5,r=[80,80,110,110,110,110][this.ring_size-1],n=this.min,a=this.max,o=a-n,l=e$(o,!1),h=e$(l/(s-1),!0),[c,d]=(e=Math.pow(10,Math.floor(Math.log10(h))),5==h/e?[h/5,h/10]:[h/2,h/10]),u=Math.round(o/d)<r,_=[];for(let t=Math.ceil(n/h)*h;t<=a;t+=h)_.push(t);let p=[];for(let t=Math.ceil(n/c)*c;t<=a;t+=c)_.includes(t)||p.push(t);let m=[];if(u)for(let t=Math.ceil(n/d)*d;t<=a;t+=d)_.includes(t)||p.includes(t)||m.push(t);let g=t=>this._startDegrees+(this._endDegrees-this._startDegrees)*(t-n)/o,f=[1,1,1,.9,.8,.7][this.ring_size-1],S=(t,e)=>{let s=(g(t)+180*(this.ring_type===tu))%360,r=ec(s,this._outerRadius,100),n=ec(s,this._outerRadius-e*i,100);return`M ${r[0]} ${r[1]} L ${n[0]} ${n[1]}`},$=t=>{if(this.bottom_element===tP&&(t===this.min||t===this.max))return L;let e=this._outerRadius*[.45,.65,.7,.73,.75,.77][this.ring_size-1];this._hasMarker&&"dot"===this.indicator&&(e*=.96),Math.log10(this.max)>3&&(e*=.93);let s=ec((g(t)+180*(this.ring_type===tu))%360,e,100),r=1===this.ring_size?2.5*i:1.15*i,n=eS(),a=t.replace(".",n);return H`
          <text
            x=${s[0]} y=${s[1]}
            text-anchor="middle"
            alignment-baseline="central"
            font-size=${r}
          >${a}</text>
        `},y=H`
      <path
        class="grand"
        d=${_.map(t=>S(t,1.35)).join(" ")}
        stroke-width=${1.8*f}
        stroke-opacity=${t}
      />`,N=H`
      <path
        class="major"
        d=${p.map(t=>S(t,1.2)).join(" ")}
        stroke-width=${1.2*f}
        stroke-opacity=${.7*t}
      />`,E=H`
      <path
        class="minor"
        d=${m.map(t=>S(t,1)).join(" ")}
        stroke-width=${.6*f}
        stroke-opacity=${.3*t}
      />`,v=L;if(this.scale===ty){let t=[..._];this.ring_size>3&&h/c!=5&&(t=[...t,...p]);let e=t.reduce((t,e)=>Math.max(t,el(e,this.max_decimals)),0);v=(t=t.map(t=>t.toFixed(e))).map($)}return H`
        <g class="scale">
          <g class="ticks">
            ${y}
            ${N}
            ${E}
          </g>
          <g class="labels">
            ${v} 
          </g> 
        </g>
      `},function(t){t.prototype.renderGradRing=function(t,e,i){let s=this._ringWidth,r=ef(t,e,this._outerRadius,s),n=this._grad.getConicGradientCss(i),a=i.toString().replace(".","");return H`
      <clipPath id="ring-clip-${a}">
        <path
          d=${r}
        />
      </clipPath>
      <foreignObject
        x="0" y="0"
        class="ring-grad"
        width=${100} height=${100}
        clip-path="url(#ring-clip-${a})"
        transform="rotate(${180*(this.ring_type===tu)} ${50} ${50})"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style="width: ${100}px; height: ${100}px; ${n};";
        />
      </foreignObject>
    `},t.prototype.renderSolidRing=function(t,e,i){let s=this._ringWidth,r=ef(t,e,this._outerRadius,s);return H`<path 
        class="ring-solid"
        d=${r}
        fill=${this._grad.getSolidColour(i)}
        stroke-width="0"
        fill-opacity="1"
        transform="rotate(${180*(this.ring_type===tu)} ${50} ${50})"
      />`}}(eN),eN.prototype.renderPointer=function(t){let e="color-mix(in srgb, orange 80%, var(--primary-text-color))",i=ec(this.ring_type===tu?t:(t+180)%360,7.5,100),s=ec(this.ring_type!==tu?t:(t+180)%360,this._outerRadius-this._ringWidth/2,100);return H`
        <g class="indicator">
          <line class="pointer"
            x1=${i[0]} y1=${i[1]}
            x2=${s[0]}   y2=${s[1]}
            stroke=${e}
            stroke-width=${[5,3,2.5,2.5,2.3,2][this.ring_size-1]}
            stroke-linecap="round"
          />
          <circle class="pointer"
            cx=${50} cy=${50}
            r=${[7,5,3.5,3.5,3.3,2.9][this.ring_size-1]}
            fill=${e}
          />
          <circle class="pointer-centre"
            cx=${50} cy=${50}
            r=${[3,2.5,1.8,1.8,1.6,1.4][this.ring_size-1]}
            fill="#444444"
        </g>
      `},eN.prototype.renderMarker=function(t,e,i){let s,r,n,a=this._ringWidth,o="marker";if(this.ring_type.startsWith(t_))s=((s=parseFloat(t))+180)%360,o="marker compass","dot"===i?(r=1.5*a,n=a/5):(r=2.3*a,n=0);else{let e=eo(t,this.min,this.max);s=this._startDegrees+(this._endDegrees-this._startDegrees)*(e-this.min)/(this.max-this.min),r=("dot"===this.indicator?1.2:1.5)*a,n="dot"===this.indicator?0:this.ring_size<=2?a/5:a/8,this.ring_type===tu&&(s=(s+180)%360)}if(this.indicator!==tm){if("dot"===i)return H`
        <g class=${o} transform="rotate(${s} ${50} ${50})">
          <circle
            cx=${50}
            cy=${100-.7*a/2}
            r=${r/2}
            fill=${e}
            stroke="var(--card-background-color, white)"
            stroke-width=${n}
          />
        </g>`;let t=[];"dot"===this.indicator?t.push(`M 50 ${100-a+n}`):this.ring_type.startsWith(t_)?t.push(`M 50 ${100+a/3+n}`):t.push(`M 50 ${100-a/3}`),t.push(`l ${r/2} -${r*Math.sin(eh(60))}`),this.ring_type.startsWith(t_)?(t.push(`l -${r/2} ${r/6}`),t.push(`l -${r/2} -${r/6}`)):t.push(`h -${r}`),t.push("Z");let l=t.join(" "),h=this.ring_type.startsWith(t_)&&i===tf?180:0;return H`
        <g class=${o} transform="rotate(${s} ${50} ${50})">
          <path
            d=${l}
            fill=${e}
            stroke="var(--card-background-color, white)"
            stroke-linejoin="bevel"
            stroke-width=${n}
            transform="rotate(${h} ${50} ${100-a+.5*a/3})"
          />
        </g>`}{let t=[50,50],i=ec(s,50-.75*a,100),r=[2,1.6,1.4,1.3,1.2,1.1][this.ring_size-1];return H`
          <g class=${o}>
            <line
              x1=${t[0]} y1=${t[1]}
              x2=${i[0]} y2=${i[1]}
              stroke=${e}
              stroke-linecap="round"
              stroke-width=${r}
            />
          </g>
        `}},eN.prototype.renderIcon=async function(t,e,i){let s,r;async function n(t,i){let s=this.closest("rt-ring")||this.getRootNode&&this.getRootNode().host&&this.getRootNode().host.closest&&this.getRootNode().host.closest("rt-ring")||this.getRootNode&&this.getRootNode().host||document.body,r="";try{r=getComputedStyle(s).getPropertyValue("--card-mod-icon")}catch(t){r=""}let n=`${t||"def"}|${(r||"").trim()}`;if(this._iconSvgCache||(this._iconSvgCache={}),this._iconSvgCache[n])return this._iconSvgCache[n];if(!this._rt_offscreen_container){let t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.width="1px",t.style.height="1px",t.style.overflow="hidden",t.style.pointerEvents="none",s.appendChild(t),this._rt_offscreen_container=t}if(!this._rt_ha_state_icon){let t=document.createElement("ha-state-icon");this._rt_offscreen_container.appendChild(t),this._rt_ha_state_icon=t}let a=this._rt_ha_state_icon;return a.icon=t,a.stateObj=e,a.hass=i,new Promise(t=>{let e=0,i=setInterval(()=>{let s=a.shadowRoot,r=s?.querySelector("ha-icon")?.shadowRoot?.querySelector("ha-svg-icon"),o=r?.shadowRoot?.querySelector("svg"),l=o?.querySelector("path");if(l){let e=o.getAttribute("viewBox")?.split(" ")[3]||24,s={d:l.getAttribute("d"),vbSize:e};try{this._iconSvgCache[n]=s}catch(t){}clearInterval(i),t(s)}else e>=40&&(clearInterval(i),t({d:null,vbSize:null}));e++},50)})}let a="var(--rt-icon-color, var(--tile-icon-color))";switch(t){case"top":s=[0,.625,.65,.566,.667,.667][this.ring_size-1],r=-27,this.indicator===tm&&(r*=.75),this.scale===ty&&(s*=.95,r*=.93),a=`var(--rt-icon-color, 
                        color-mix(
                          in srgb, 
                          var(--primary-text-color, #212121) 
                          var(--top-icon-opacity, 50%), 
                          transparent
                        )
                      )`;break;case tJ:s=1===this.ring_size?this.ring_type===tp?2.778:(this.ring_type===tu?2.7:2.38)*(this._hasMarker&&this.indicator?.9:1):[2.2,2,1.9,1.85,1.8][this.ring_size-2],r=this.bottom_element===tP?-3:0;break;case tZ:s=[1.4,1,1,.8,.8,.8][this.ring_size-1],r=[35,37,40,40,40,40][this.ring_size-1],this.ring_type===tu&&(r=22)}let o=en(i)?this._grad.getSolidColour(i):"",l=await n.call(this,this.icon,this.hass);s*=24/parseFloat(l.vbSize);let h=50-l.vbSize/2*s;return H`
      <path 
        d=${l.d}
        fill=${o||a}
        transform=
          "translate(${h}, ${h+r})
          scale(${s}, ${s})" 
      />`},eN.prototype.renderDot=function(t,e){let i=this._ringWidth,s=ec(t,this._outerRadius-i/2,100),r=i*[.55,.4,.35,.35,.35,.35][this.ring_size-1],n=i/2+.7*r,a=ef(t-10,t+10,this._outerRadius+.05*i,1.1*i);return H`
            <g class="indicator">
              <clipPath id="ring-clip">
                <path d=${a}
                />
              </clipPath>
              <circle 
                class="dot-outline"
                cx=${s[0]} cy=${s[1]} 
                r=${n+r/2}
                clip-path="url(#ring-clip)"
                fill="var(--card-background-color, white)"
                transform="rotate(${180*(this.ring_type===tu)} ${50} ${50})"
              />
              <circle 
                class="dot"
                cx=${s[0]} cy=${s[1]} 
                r=${n-r/2}
                fill=${this._grad.getSolidColour(e)}
                transform="rotate(${180*(this.ring_type===tu)} ${50} ${50})"
              />
            </g>`},eN.prototype.renderCompass=function(){let t=.7*this._ringWidth,e=[],i=[],s=[],r=[];for(let n=0;n<360;n+=5.625){let a=(n+180)%360;if(n%90==0)if("compass_nesw"===this.ring_type||"compass_n"===this.ring_type&&0===a){let e=ec(n,this._outerRadius-1.2*t/2,100);i.push(H`<text
                  class="compass cardinal"
                  x=${e[0]}
                  y=${e[1]}
                  text-anchor="middle"
                  alignment-baseline="central"
                  font-size=${2*t}
                  fill="var(--primary-text-color, #212121)"
                >${ed(a)}</text>`)}else e.push(`M ${ec(n,this._outerRadius,100)}`),e.push(`L ${ec(n,this._outerRadius-1.7*t,100)}`);else n%22.5==0?(s.push(`M ${ec(n,this._outerRadius,100)}`),s.push(`L ${ec(n,this._outerRadius-1.2*t,100)}`)):(r.push(`M ${ec(n,this._outerRadius,100)}`),r.push(`L ${ec(n,this._outerRadius-t,100)}`))}let n=i?H`${i}`:nothing,a=e?H`
            <path
              class="compass cardinals"
              d=${e.join(" ")}
              stroke-width=2
              fill="none"
              stroke="var(--primary-text-color, #212121)"
              stroke-linecap="round"
            />`:nothing;return H`
        ${n}
        ${a}
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
        />`},eN.prototype.getRoundedValue=function(t,e=!1,i=99){var s;let r,n,a=Math.max(Math.floor(this.min_sig_figs-Math.log10(Math.abs(t))),0);a>(this.max_decimals??99)&&(a=this.max_decimals),a>i&&(a=i);let o=parseFloat(t);return isFinite(o)?0===o?"0":(e&&(a=Math.min(a,el(o),i)),s=a,r=parseFloat(t).toFixed(s),n=eS(),r.replace(".",n)):String(t)}}static get properties(){return{ring_type:{},indicator:{},scale:{},ring_size:{},colour:{attribute:!1},state:{attribute:!1},display_state:{attribute:!1},marker_value:{attribute:!1},marker_colour:{attribute:!1},compass_marker:{attribute:!1},marker2_value:{attribute:!1},marker2_colour:{attribute:!1},compass_marker2:{attribute:!1},min:{attribute:!1},max:{attribute:!1},icon:{attribute:!1},colourise_icon:{attribute:!1},name:{attribute:!1},bottom_element:{attribute:!1},middle_element:{attribute:!1},top_element:{attribute:!1},bottom_name:{attribute:!1},min_sig_figs:{attribute:!1},max_decimals:{attribute:!1},hass:{attribute:!1}}}configureRing(){this._outerRadius=50,this._hasMarker=en(this.marker_value),this.bottom_element===tC&&(this.bottom_name=this.bottom_name||this.name),this._startDegrees=60,this._endDegrees=300,this.ring_type.startsWith(t_)||this.ring_type===tu?(this._startDegrees=0,this._endDegrees=359.999):([tM,tD,tV].includes(this.bottom_element)||this.bottom_element===tC&&this.bottom_name.length<=[3,6,8,10,12,14][this.ring_size-1]||this.bottom_element===tP&&this.ring_size>1||this.bottom_element.includes(tU)&&this.ring_size>1)&&(this._startDegrees=45,this._endDegrees=315),this._ringUnit=this.state?this.state.unitOfMeasurement:L,this._displayUnit=this.display_state?this.display_state.unitOfMeasurement:L;let t={minValue:this.min,maxValue:this.max,gradStart:100*this._startDegrees/360,gradEnd:100*this._endDegrees/360};this._grad=new ey(this.colour,t),this.marker_colour=tc[this.marker_colour]||this.marker_colour,this.marker2_colour=tc[this.marker2_colour]||this.marker2_colour,this._ringWidth=[10,8,7,6,5.5,5][this.ring_size-1]*(this.scale===tS?1:.85)}getTopElementSvg(){switch(this.top_element){case"marker":return this.renderText(this.marker_value,"","top");case"marker_with_unit":return this.renderText(this.marker_value,this._displayUnit,"top");case tv:return this.renderText(this._displayUnit,"","top");case tE:return this.renderText(ed(this.marker_value),"","top");default:return L}}getMiddleElementSvg(){switch(this.middle_element){case tW:case tw:case tA:case tk:if(this._noState)return L;let t=[tA,tk].includes(this.middle_element)?this.state.value:this.display_state.value,e="";this.middle_element===tw&&(e=this._displayUnit),this.middle_element===tk&&(e=this._ringUnit);let i=this.indicator===tm?tH:tJ;return this.renderText(t,e,i);default:return L}}getBottomElementSvg(){if(this.ring_type.startsWith(t_))return L;switch(this.bottom_element){case tC:return this.renderText(this.bottom_name,"",tZ);case tV:return this.renderText(this._displayUnit,"",tZ);case tz:return this.renderText(this._ringUnit,"",tZ);case tP:let t,e;if(this.ring_type===tu)return L;let i=0;do t=this.getRoundedValue(this.min,!0,this.max_decimals-i),e=this.max-this.min<.01?"–":this.getRoundedValue(this.max,!0,this.max_decimals-i);while(t.length+e.length>[5,5,7,8,9,11][this.ring_size-1]&&i++<this.max_decimals)return H`
          ${this.renderText(t,"","min")}
          ${this.renderText(e,"","max")}
        `;case tU:case tj:case tR:case tT:if(this._noState)return L;let s=[tR,tT].includes(this.bottom_element)?this.state.value:this.display_state.value,r="";return this.bottom_element===tj&&(r=this._displayUnit),this.bottom_element===tT&&(r=this._ringUnit),this.renderText(s,r,tZ);default:return L}}async updated(t){if(t.has("icon")||t.has("display_state")||t.has("middle_element")||t.has("top_element")||t.has("bottom_element")){let t;this.colourise_icon&&(t=this.state.value),this._iconSvg=this.middle_element===tx?await this.renderIcon(tJ,this.display_state.stateObj,t):this.top_element===tN?await this.renderIcon("top",this.display_state.stateObj,t):this.bottom_element===tM?await this.renderIcon(tZ,this.display_state.stateObj,t):L,this.requestUpdate()}}render(){let t;this.configureRing(),this._noState=["unknown","unavailable"].includes(this.state.value);let e=eo(this.state.value,this.min,this.max),i=this._startDegrees+(this._endDegrees-this._startDegrees)*(e-this.min)/(this.max-this.min);this._noState&&(e=this.min,i=this._startDegrees,this._grad=new ey("grey"));let s=.15;"dot"===this.indicator?s=.7:this.indicator===tm?s=.07:this.scale===tg&&(s=.15),t=this.ring_type===tp?L:this.ring_type.startsWith(t_)?this.renderCompass():this.renderGradRing(this._startDegrees,this._endDegrees,s);let r=L,n=L;if(this.ring_type!==tp&&!this._noState)switch(this.indicator){case"arc":r=this.renderSolidRing(this._startDegrees,i,this.state.value);break;case"dot":r=this.renderDot(i,this.state.value);break;case tm:n=this.renderPointer(i)}let a=L;if(this.scale!==tS){let t=this.indicator===tm?.7:.2;a=this.renderScale(t)}let o=en(this.marker_value)&&!this._noState?this.renderMarker(this.marker_value,this.marker_colour,this.compass_marker):L,l=en(this.marker2_value)&&!this._noState?this.renderMarker(this.marker2_value,this.marker2_colour,this.compass_marker2):L,h=this.getTopElementSvg(),c=this.getMiddleElementSvg(),d=this.getBottomElementSvg();return J`
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
        <g class="ring">${t} ${a}</g>
        <g class="indicators">
          ${r} ${l} ${o} ${n}
        </g>
      </svg>
    `}static styles=a`
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
      font-family: Geist, var(--ha-font-family-body);
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
      stroke: var(--rt-pointer-colour, orange);
      fill: var(--rt-pointer-colour, orange);
    }
  `}var eE={};eE=JSON.parse('{"name":"ring-tile-card","version":"1.0.4","description":"A Home Assistant card to visualise your sensor data, based on tile card","author":"neponn","license":"MIT","repository":{"type":"git","url":"https://github.com/neponn/ring-tile-card.git"},"source":"src/ring-tile-card.js","scripts":{"clean":"rm -rf .parcel-cache dist","start":"BUILD_NUMBER=$(git rev-parse --short HEAD)-$(date +%y%m%d-%H%M)-dev parcel","build":"BUILD_NUMBER=$(git rev-parse --short HEAD)-$(date +%y%m%d-%H%M)-prod parcel build --no-source-maps","clean-build":"npm run clean && npm run build","rebuild-deps":"npm run clean && ncu -u && rm -rf node_modules package-lock.json && npm i"},"type":"module","devDependencies":{"parcel":"^2.16.1","npm-check-updates":"^19.1.2"},"dependencies":{"lit":"^3.3.1"},"bugs":{"url":"https://github.com/neponn/ring-tile-card/issues"},"homepage":"https://github.com/neponn/ring-tile-card#readme"}');let ev=`v${eE.version}   #22f4cca-251205-2330-prod`;console.info(`%c ring-tile-card %c ${ev} `,"color: yellow; font-weight: bold; background: darkblue","color: white; font-weight: bold; background: dimgray"),ep("gf1","https://fonts.googleapis.com","preconnect"),ep("gf2","https://fonts.gstatic.com","preconnect"),ep("gf3","https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap","stylesheet",!0),customElements.define("ring-tile",e_),customElements.define("rt-info",em),customElements.define("rt-ring",eg),customElements.define("rt-ring-svg",eN),window.customCards=window.customCards||[],window.customCards.push({type:"ring-tile",name:"Ring Tile Card",preview:!0,description:"Add a ring to your sensor tile cards to visualise sensor state."})})();