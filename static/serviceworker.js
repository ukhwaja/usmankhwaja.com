try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const r=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let r,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{r=a.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this.i&&(r=r.catch(n=>this.i.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const r=i.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c);function h(e,s,r){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return o().registerRoute(a),a}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),f=e=>e||l(u.precache),d=e=>e||l(u.runtime);function w(e){e.then(()=>{})}const p=new Set;class g{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(a,c)=>{const o=a.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(r?e:e.value),i&&u.length>=i?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const r=this.o.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const r=s.objectStore(t),a=r[e].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}g.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(g.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const m=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class v{constructor(e){this.m=e,this.o=new g("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=m(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+m(e)}}class b{constructor(e,t={}){this.R=!1,this.U=!1,this.L=t.maxEntries,this.N=t.maxAgeSeconds,this.m=e,this._=new v(e)}async expireEntries(){if(this.R)return void(this.U=!0);this.R=!0;const e=this.N?Date.now()-1e3*this.N:0,t=await this._.expireEntries(e,this.L),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this.U&&(this.U=!1,w(this.expireEntries()))}async updateTimestamp(e){await this._.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.N){return await this._.getTimestamp(e)<Date.now()-1e3*this.N}return!1}async delete(){this.U=!1,await this._.expireEntries(1/0)}}class q{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.O(n),r=this.K(s);w(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.K(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.T=e,this.N=e.maxAgeSeconds,this.M=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),p.add(t))}K(e){if(e===d())throw new t("expire-custom-caches-only");let s=this.M.get(e);return s||(s=new b(e,this.T),this.M.set(e,s)),s}O(e){if(!this.N)return!0;const t=this.D(e);if(null===t)return!0;return t>=Date.now()-1e3*this.N}D(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.M)await self.caches.delete(e),await t.delete();this.M=new Map}}const R=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=R(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},U=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await x({plugins:i,request:t,mode:"read"});let c=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},L=async({cacheName:e,request:s,response:n,event:i,plugins:a=[],matchOptions:c})=>{const o=await x({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:r(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:a,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=R(a,"cacheDidUpdate"),f=l.length>0?await U({cacheName:e,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},N=U,E=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=R(i,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:c,response:t}));return t}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}class O{constructor(e={}){this.m=d(e.cacheName),this.P=e.plugins||[],this.k=e.fetchOptions,this.A=e.matchOptions}async handle({event:e,request:s}){"string"==typeof s&&(s=new Request(s));let n,i=await N({cacheName:this.m,request:s,event:e,matchOptions:this.A,plugins:this.P});if(!i)try{i=await this.S(s,e)}catch(e){n=e}if(!i)throw new t("no-response",{url:s.url,error:n});return i}async S(e,t){const s=await E({request:e,event:t,fetchOptions:this.k,plugins:this.P}),n=s.clone(),i=L({cacheName:this.m,request:e,response:n,event:t,plugins:this.P});if(t)try{t.waitUntil(i)}catch(e){}return s}}const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}class T{constructor(e={}){this.C=e.statuses,this.I=e.headers}isResponseCacheable(e){let t=!0;return this.C&&(t=this.C.includes(e.status)),this.I&&t&&(t=Object.keys(this.I).some(t=>e.headers.get(t)===this.I[t])),t}}let M;async function D(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,r=function(){if(void 0===M){const e=new Response("");if("body"in e)try{new Response(e.body),M=!0}catch(e){M=!1}M=!1}return M}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function P(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class k{constructor(e){this.m=f(e),this.W=new Map,this.j=new Map,this.F=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=P(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.W.has(i)&&this.W.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.W.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.F.has(e)&&this.F.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.F.set(e,n.integrity)}if(this.W.set(i,e),this.j.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),r=await i.keys(),a=new Set(r.map(e=>e.url));for(const[e,t]of this.W)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const i=this.F.get(s),r=this.j.get(n);return this.B({cacheKey:s,cacheMode:r,event:e,integrity:i,plugins:t,url:n})});await Promise.all(c);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.W.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async B({cacheKey:e,url:s,cacheMode:n,event:i,plugins:r,integrity:a}){const c=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,h=await E({event:i,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await D(h)),await L({event:i,plugins:r,response:h,request:e===s?c:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.W}getCachedURLs(){return[...this.W.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.W.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let A;const S=()=>(A||(A=new k),A);const C=(e,t)=>{const s=S().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let I=!1;function W(e){I||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=f();self.addEventListener("fetch",r=>{const a=C(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let c=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));r.respondWith(c)})})(e),I=!0)}const j=[],F={get:()=>j,add(e){j.push(...e)}},B=e=>{const t=S(),s=F.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},H=e=>{const t=S();e.waitUntil(t.activate())};var G;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),G={},function(e){S().addToCacheList(e),e.length>0&&(self.addEventListener("install",B),self.addEventListener("activate",H))}([{url:"404.html",revision:"e65a267c0e786a9a2d5fb5b9429199a4"},{url:"index.html",revision:"e51444b36dcc801d686379afe28a9061"},{url:"categories/code/index.html",revision:"0bbca94b9108e4d6323f0d4a75af6d1f"},{url:"categories/index.html",revision:"89d99a36fffd0bdbb4f0b81d2b4337f7"},{url:"categories/personal/index.html",revision:"8b69697398edc9be980a4c6d98dcfe21"},{url:"cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",revision:"2678c73e4d951670878c74c9909e303f"},{url:"creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",revision:"f4f5f9b15a80054feef059b852504bac"},{url:"digital-footprint/index.html",revision:"4aced601d7a6d47c58b8f0ec08160aaa"},{url:"enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",revision:"b5f58d5b074b7641adaed050e5b49655"},{url:"hugo--tachyons-src-without-gulp-or-webpack/index.html",revision:"69632e6b0e5822482542e9cdb3bc0cfc"},{url:"lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",revision:"179dd8fc3ece749ca28e84a291412fc7"},{url:"page/1/index.html",revision:"547ea9cb35c6033734eeaecf740f9818"},{url:"page/2/index.html",revision:"48154590707a81ab6460aed83da84156"},{url:"show-remaining-characters-in-textarea-using-amp-bind/index.html",revision:"1d0eef27015a43451cc2ce178e6eb4da"},{url:"uses/index.html",revision:"08654dd3c695f1d6d6b34c9d8f5bce9e"},{url:"using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",revision:"8bfe52c5cf501d9feb5ad147e8d06cc6"},{url:"welcome-to-my-site/index.html",revision:"5130556cb1c8d7f2383159d2441d99b6"},{url:"logo.webp",revision:"430cce373cbfe9d13a3785d4ade49eb4"},{url:"using-hugo-htmlunescape-function-to-solve-selector-expected-errors/html-error.webp",revision:"75f47af35a34db0296f315d7963f1ed0"}]),W(G),self.addEventListener("activate",e=>{const t=f();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s})(t).then(e=>{}))}),h(/\.(?:webp|gif)$/,new O({cacheName:"images",plugins:[new q({maxEntries:10,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),h(/^https:\/\/fonts\.googleapis\.com/,new class{constructor(e={}){if(this.m=d(e.cacheName),this.P=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.P=t?e.plugins:[K,...e.plugins]}else this.P=[K];this.k=e.fetchOptions,this.A=e.matchOptions}async handle({event:e,request:s}){"string"==typeof s&&(s=new Request(s));const n=this.S({request:s,event:e});let i,r=await N({cacheName:this.m,request:s,event:e,matchOptions:this.A,plugins:this.P});if(r){if(e)try{e.waitUntil(n)}catch(i){}}else try{r=await n}catch(e){i=e}if(!r)throw new t("no-response",{url:s.url,error:i});return r}async S({request:e,event:t}){const s=await E({request:e,event:t,fetchOptions:this.k,plugins:this.P}),n=L({cacheName:this.m,request:e,response:s.clone(),event:t,plugins:this.P});if(t)try{t.waitUntil(n)}catch(e){}return s}}({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),h(/^https:\/\/fonts\.gstatic\.com/,new O({cacheName:"google-fonts-webfonts",plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this.H.isResponseCacheable(e)?e:null,this.H=new T(e)}}({statuses:[0,200]}),new q({maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET");
