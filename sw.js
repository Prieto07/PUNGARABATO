if(!self.define){let e,c={};const i=(i,r)=>(i=new URL(i+".js",r).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(c[d])return;let I={};const a=e=>i(e,d),s={module:{uri:d},exports:I,require:a};c[d]=Promise.all(r.map((e=>s[e]||a(e)))).then((e=>(f(...e),I)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"ACTIVIDAD ECONOMICA.html",revision:"8654bfa750d262d6ff3828517116a2b4"},{url:"assets/favicon.ico",revision:"556f31acd686989b1afcf382c05846aa"},{url:"Comunicaciones, transporte y medios de comunicación social.html",revision:"a15a4842c8a402b5fdd42fe61f22f07b"},{url:"css/styles.css",revision:"e7332bdba25982a235486878fa7e90ee"},{url:"DEMOGRAFIA.html",revision:"ce6e02444d6a8db66bebac8fa163b575"},{url:"FIESTAS TRADICIONALES.html",revision:"a030d8dde29d28b5cda7e7441831f9c6"},{url:"GASTRONOMIA.html",revision:"996f012064dc6429b63c3929c45e0672"},{url:"HISTORIA.html",revision:"e525a09702df6d6f09c313078342ca3c"},{url:"IM-VI/ACTIVIDAD ECONOMICA.jpg",revision:"878f2820316628d0061f3019e5ff5e28"},{url:"IM-VI/COMUNICACIONES.jpg",revision:"3015a35216540f309c15dc0079529559"},{url:"IM-VI/DEMOGRAFIA.jpg",revision:"e4dc3b894e6e7cb280f3f5ef59dc822c"},{url:"IM-VI/ESCUDO.png",revision:"52f8bd66a8610a2b90642c849a01805c"},{url:"IM-VI/FIESTAS.jpg",revision:"02120a3a11aed7fdba6557f87c3ecfa2"},{url:"IM-VI/fondo (2).jpg",revision:"715757f728f979361dcffa7b244241ed"},{url:"IM-VI/GASTRONOMIA.jpg",revision:"21aad3df0f6626f7bdeacd4f05c36ebe"},{url:"IM-VI/GLIFO.jpg",revision:"299b9e4dafbbb8dbbdd5079fc25ce38f"},{url:"IM-VI/HISTORIA.jpg",revision:"16026a127bcd0136e4885e9ea25f1fcb"},{url:"IM-VI/ICONO.jpg",revision:"6f371c365539d4514c55acad125c0958"},{url:"IM-VI/IGUANATC.jpg",revision:"b7dca5cc9b617800e9ec615efdd729be"},{url:"IM-VI/MEDIO AMBIENTE.jpg",revision:"a725d832538a718c3b6422f6d0189ab7"},{url:"IM-VI/ORIGEN Y SIGNIFICADO.jpg",revision:"7d8f509a4e7fb34173ab7520e24a1d99"},{url:"IM-VI/SOCIOLOGIA.jpg",revision:"16cf0e073115a93dc3bf9647c95a003f"},{url:"IM-VI/SOMBREROCALE.jpg",revision:"174c35fcc4b50361e03f66def933b8be"},{url:"IM-VI/UBICACION GEOGRAFICA.jpg",revision:"b33d55fc10c060838c07d7cedb282965"},{url:"index.html",revision:"a5e002e5e107f6a00835bcd30f44b138"},{url:"js/scripts.js",revision:"4518f82ff2a57cb4ac64d651c199de12"},{url:"manifest.json",revision:"7b4162c12a3c3f28c2143ee0758d771c"},{url:"MEDIO AMBIENTE.html",revision:"bb3fca40d56e2e55c0ea5f45edf7f0d2"},{url:"ORIGEN.html",revision:"ae4ab5a2122466a39e2cc994fb8cc1a7"},{url:"PERSONAJES ILUSTRES.html",revision:"219c76d919c364b7ab1e474eb9d4ac14"},{url:"SOCIOLOGIA Y EDUCACION.html",revision:"23e335f2be8140c8e6dfec7dc805bdb4"},{url:"UBICACION GEOGRAFICA.html",revision:"5a11e2a918d7228c243708bdf90dfb08"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map