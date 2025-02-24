(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="162",Iv=0,Uf=1,Uv=2,Lm=1,Pm=2,Bi=3,Er=0,Tn=1,xi=2,pr=0,io=1,Ff=2,Bf=3,kf=4,Fv=5,jr=100,Bv=101,kv=102,zf=103,Hf=104,zv=200,Hv=201,Vv=202,Gv=203,Hu=204,Vu=205,Wv=206,$v=207,Xv=208,Yv=209,qv=210,jv=211,Kv=212,Zv=213,Jv=214,Qv=0,t0=1,e0=2,Hl=3,n0=4,i0=5,r0=6,s0=7,Dm=0,o0=1,a0=2,mr=0,l0=1,c0=2,u0=3,h0=4,f0=5,d0=6,p0=7,Nm=300,ho=301,fo=302,Gu=303,Wu=304,cc=306,$u=1e3,fi=1001,Xu=1002,pn=1003,Vf=1004,Uo=1005,Mn=1006,Lc=1007,Zr=1008,_r=1009,m0=1010,_0=1011,Ph=1012,Om=1013,lr=1014,Hi=1015,ga=1016,Im=1017,Um=1018,ns=1020,g0=1021,di=1023,v0=1024,x0=1025,is=1026,po=1027,E0=1028,Fm=1029,S0=1030,Bm=1031,km=1033,Pc=33776,Dc=33777,Nc=33778,Oc=33779,Gf=35840,Wf=35841,$f=35842,Xf=35843,zm=36196,Yf=37492,qf=37496,jf=37808,Kf=37809,Zf=37810,Jf=37811,Qf=37812,td=37813,ed=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,Ic=36492,cd=36494,ud=36495,y0=36283,hd=36284,fd=36285,dd=36286,M0=3200,b0=3201,Hm=0,T0=1,ar="",mn="srgb",Cr="srgb-linear",Dh="display-p3",uc="display-p3-linear",Vl="linear",Ee="srgb",Gl="rec709",Wl="p3",bs=7680,pd=519,A0=512,w0=513,C0=514,Vm=515,R0=516,L0=517,P0=518,D0=519,md=35044,_d="300 es",Yu=1035,Gi=2e3,$l=2001;class Co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const ea=Math.PI/180,va=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[r&255]+Ze[r>>8&255]+Ze[r>>16&255]+Ze[r>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function en(r,t,e){return Math.max(t,Math.min(e,r))}function Nh(r,t){return(r%t+t)%t}function N0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function O0(r,t,e){return r!==t?(e-r)/(t-r):0}function na(r,t,e){return(1-e)*r+e*t}function I0(r,t,e,n){return na(r,t,1-Math.exp(-e*n))}function U0(r,t=1){return t-Math.abs(Nh(r,t*2)-t)}function F0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function B0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function k0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function z0(r,t){return r+Math.random()*(t-r)}function H0(r){return r*(.5-Math.random())}function V0(r){r!==void 0&&(gd=r);let t=gd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function G0(r){return r*ea}function W0(r){return r*va}function qu(r){return(r&r-1)===0&&r!==0}function $0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function X0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $s(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vd={DEG2RAD:ea,RAD2DEG:va,generateUUID:Ro,clamp:en,euclideanModulo:Nh,mapLinear:N0,inverseLerp:O0,lerp:na,damp:I0,pingpong:U0,smoothstep:F0,smootherstep:B0,randInt:k0,randFloat:z0,randFloatSpread:H0,seededRandom:V0,degToRad:G0,radToDeg:W0,isPowerOfTwo:qu,ceilPowerOfTwo:$0,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:X0,normalize:ln,denormalize:$s};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],S=i[7],T=i[2],b=i[5],y=i[8];return s[0]=o*_+a*x+l*T,s[3]=o*m+a*v+l*b,s[6]=o*p+a*S+l*y,s[1]=c*_+u*x+h*T,s[4]=c*m+u*v+h*b,s[7]=c*p+u*S+h*y,s[2]=f*_+d*x+g*T,s[5]=f*m+d*v+g*b,s[8]=f*p+d*S+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new Jt;function Gm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Y0(){const r=xa("canvas");return r.style.display="block",r}const xd={};function q0(r){r in xd||(xd[r]=!0,console.warn(r))}const Ed=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sd=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[Cr]:{transfer:Vl,primaries:Gl,toReference:r=>r,fromReference:r=>r},[mn]:{transfer:Ee,primaries:Gl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[uc]:{transfer:Vl,primaries:Wl,toReference:r=>r.applyMatrix3(Sd),fromReference:r=>r.applyMatrix3(Ed)},[Dh]:{transfer:Ee,primaries:Wl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sd),fromReference:r=>r.applyMatrix3(Ed).convertLinearToSRGB()}},j0=new Set([Cr,uc]),de={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!j0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Ha[t].toReference,i=Ha[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Ha[r].primaries},getTransfer:function(r){return r===ar?Vl:Ha[r].transfer}};function ro(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ts;class Wm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=xa("canvas")),Ts.width=t.width,Ts.height=t.height;const n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ro(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ro(e[n]/255)*255):e[n]=ro(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let K0=0;class $m{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ro(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Bc(i[o].image)):s.push(Bc(i[o]))}else s=Bc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Bc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z0=0;class xn extends Co{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=fi,i=fi,s=Mn,o=Zr,a=di,l=_r,c=xn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Ro(),this.name="",this.source=new $m(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $u:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Xu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $u:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Xu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Nm;xn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(d+1)/2,T=(p+1)/2,b=(u+f)/4,y=(h+_)/4,L=(g+m)/4;return v>S&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=y/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=L/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=y/s,i=L/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J0 extends Co{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $m(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends J0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xm extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q0 extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,p*x);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const S=a*x;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new k,yd=new Pa;class Da{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),Ga.subVectors(this.max,Fo),As.subVectors(t.a,Fo),ws.subVectors(t.b,Fo),Cs.subVectors(t.c,Fo),Qi.subVectors(ws,As),tr.subVectors(Cs,ws),Ir.subVectors(As,Cs);let e=[0,-Qi.z,Qi.y,0,-tr.z,tr.y,0,-Ir.z,Ir.y,Qi.z,0,-Qi.x,tr.z,0,-tr.x,Ir.z,0,-Ir.x,-Qi.y,Qi.x,0,-tr.y,tr.x,0,-Ir.y,Ir.x,0];return!zc(e,As,ws,Cs,Ga)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,As,ws,Cs,Ga))?!1:(Wa.crossVectors(Qi,tr),e=[Wa.x,Wa.y,Wa.z],zc(e,As,ws,Cs,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new k,new k,new k,new k,new k,new k,new k,new k],oi=new k,Va=new Da,As=new k,ws=new k,Cs=new k,Qi=new k,tr=new k,Ir=new k,Fo=new k,Ga=new k,Wa=new k,Ur=new k;function zc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ur.fromArray(r,s);const a=i.x*Math.abs(Ur.x)+i.y*Math.abs(Ur.y)+i.z*Math.abs(Ur.z),l=t.dot(Ur),c=e.dot(Ur),u=n.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tx=new Da,Bo=new k,Hc=new k;class Oh{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const e=Bo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Hc)),this.expandByPoint(Bo.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new k,Vc=new k,$a=new k,er=new k,Gc=new k,Xa=new k,Wc=new k;class Ym{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vc.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),er.copy(this.origin).sub(Vc);const s=t.distanceTo(e)*.5,o=-this.direction.dot($a),a=er.dot(this.direction),l=-er.dot($a),c=er.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Vc).addScaledVector($a,f),d}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,i,s){Gc.subVectors(e,t),Xa.subVectors(n,t),Wc.crossVectors(Gc,Xa);let o=this.direction.dot(Wc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,t);const l=a*this.direction.dot(Xa.crossVectors(er,Xa));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(Wc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Rs.setFromMatrixColumn(t,0).length(),s=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ex,t,nx)}lookAt(t,e,n){const i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),nr.crossVectors(n,Dn),nr.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),nr.crossVectors(n,Dn)),nr.normalize(),Ya.crossVectors(Dn,nr),i[0]=nr.x,i[4]=Ya.x,i[8]=Dn.x,i[1]=nr.y,i[5]=Ya.y,i[9]=Dn.y,i[2]=nr.z,i[6]=Ya.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],S=n[11],T=n[15],b=i[0],y=i[4],L=i[8],D=i[12],E=i[1],w=i[5],I=i[9],Y=i[13],P=i[2],W=i[6],U=i[10],z=i[14],G=i[3],j=i[7],C=i[11],J=i[15];return s[0]=o*b+a*E+l*P+c*G,s[4]=o*y+a*w+l*W+c*j,s[8]=o*L+a*I+l*U+c*C,s[12]=o*D+a*Y+l*z+c*J,s[1]=u*b+h*E+f*P+d*G,s[5]=u*y+h*w+f*W+d*j,s[9]=u*L+h*I+f*U+d*C,s[13]=u*D+h*Y+f*z+d*J,s[2]=g*b+_*E+m*P+p*G,s[6]=g*y+_*w+m*W+p*j,s[10]=g*L+_*I+m*U+p*C,s[14]=g*D+_*Y+m*z+p*J,s[3]=x*b+v*E+S*P+T*G,s[7]=x*y+v*w+S*W+T*j,s[11]=x*L+v*I+S*U+T*C,s[15]=x*D+v*Y+S*z+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,b=e*x+n*v+i*S+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=x*y,t[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*y,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*y,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*y,t[4]=v*y,t[5]=(u*m*s-g*f*s+g*i*d-e*m*d-u*i*p+e*f*p)*y,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*y,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*y,t[8]=S*y,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*y,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*y,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*y,t[12]=T*y,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*y,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*y,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,x=l*c,v=l*u,S=l*h,T=n.x,b=n.y,y=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+S)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(f+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+v)*y,i[9]=(m-x)*y,i[10]=(1-(f+_))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Rs.set(i[0],i[1],i[2]).length();const o=Rs.set(i[4],i[5],i[6]).length(),a=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,e.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Gi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Gi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$l)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Gi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===Gi)g=(o+s)*h,_=-2*h;else if(a===$l)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rs=new k,ai=new Le,ex=new k(0,0,0),nx=new k(1,1,1),nr=new k,Ya=new k,Dn=new k,Md=new Le,bd=new Pa;class Li{constructor(t=0,e=0,n=0,i=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Md,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bd.setFromEuler(this),this.setFromQuaternion(bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Ih{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ix=0;const Td=new k,Ls=new Pa,Ii=new Le,qa=new k,ko=new k,rx=new k,sx=new Pa,Ad=new k(1,0,0),wd=new k(0,1,0),Cd=new k(0,0,1),ox={type:"added"},ax={type:"removed"},$c={type:"childadded",child:null},Xc={type:"childremoved",child:null};class je extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new k,e=new Li,n=new Pa,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Jt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Ad,t)}rotateY(t){return this.rotateOnAxis(wd,t)}rotateZ(t){return this.rotateOnAxis(Cd,t)}translateOnAxis(t,e){return Td.copy(t).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ad,t)}translateY(t){return this.translateOnAxis(wd,t)}translateZ(t){return this.translateOnAxis(Cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qa.copy(t):qa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ko,qa,this.up):Ii.lookAt(qa,ko,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ox),$c.child=t,this.dispatchEvent($c),$c.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ax),Xc.child=t,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,sx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}je.DEFAULT_UP=new k(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new k,Ui=new k,Yc=new k,Fi=new k,Ps=new k,Ds=new k,Rd=new k,qc=new k,jc=new k,Kc=new k;class Ei{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){li.subVectors(i,e),Ui.subVectors(n,e),Yc.subVectors(t,e);const o=li.dot(li),a=li.dot(Ui),l=li.dot(Yc),c=Ui.dot(Ui),u=Ui.dot(Yc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Ui.subVectors(t,e),li.cross(Ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),li.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Ei.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ps.subVectors(i,n),Ds.subVectors(s,n),qc.subVectors(t,n);const l=Ps.dot(qc),c=Ds.dot(qc);if(l<=0&&c<=0)return e.copy(n);jc.subVectors(t,i);const u=Ps.dot(jc),h=Ds.dot(jc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ps,o);Kc.subVectors(t,s);const d=Ps.dot(Kc),g=Ds.dot(Kc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ds,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Rd.subVectors(s,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(Rd,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Zc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Nh(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zc(o,s,t+1/3),this.g=Zc(o,s,t),this.b=Zc(o,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=qm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}copyLinearToSRGB(t){return this.r=Fc(t.r),this.g=Fc(t.g),this.b=Fc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return de.fromWorkingColorSpace(Je.copy(this),t),Math.round(en(Je.r*255,0,255))*65536+Math.round(en(Je.g*255,0,255))*256+Math.round(en(Je.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=mn){de.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+e,ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ir),t.getHSL(ja);const n=na(ir.h,ja.h,e),i=na(ir.s,ja.s,e),s=na(ir.l,ja.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ce;ce.NAMES=qm;let lx=0;class Na extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=io,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Vu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(n.blending=this.blending),this.side!==Er&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hu&&(n.blendSrc=this.blendSrc),this.blendDst!==Vu&&(n.blendDst=this.blendDst),this.blendEquation!==jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Uh extends Na{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new k,Ka=new Qt;class bi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return q0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==md&&(t.usage=this.usage),t}}class jm extends bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Km extends bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Hn extends bi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cx=0;const qn=new Le,Jc=new je,Ns=new k,Nn=new Da,zo=new Da,Ge=new k;class Zi extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gm(t)?Km:jm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Nn.min,zo.min),Nn.expandByPoint(Ge),Ge.addVectors(Nn.max,zo.max),Nn.expandByPoint(Ge)):(Nn.expandByPoint(zo.min),Nn.expandByPoint(zo.max))}Nn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Ge.add(Ns)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new k,l[L]=new k;const c=new k,u=new k,h=new k,f=new Qt,d=new Qt,g=new Qt,_=new k,m=new k;function p(L,D,E){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,D),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[L].add(_),a[D].add(_),a[E].add(_),l[L].add(m),l[D].add(m),l[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,D=x.length;L<D;++L){const E=x[L],w=E.start,I=E.count;for(let Y=w,P=w+I;Y<P;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const v=new k,S=new k,T=new k,b=new k;function y(L){T.fromBufferAttribute(i,L),b.copy(T);const D=a[L];v.copy(D),v.sub(T.multiplyScalar(T.dot(D))).normalize(),S.crossVectors(b,D);const w=S.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,D=x.length;L<D;++L){const E=x[L],w=E.start,I=E.count;for(let Y=w,P=w+I;Y<P;Y+=3)y(t.getX(Y+0)),y(t.getX(Y+1)),y(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new bi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new Le,Fr=new Ym,Za=new Oh,Pd=new k,Os=new k,Is=new k,Us=new k,Qc=new k,Ja=new k,Qa=new Qt,tl=new Qt,el=new Qt,Dd=new k,Nd=new k,Od=new k,nl=new k,il=new k;class pi extends je{constructor(t=new Zi,e=new Uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Qc.fromBufferAttribute(h,t),o?Ja.addScaledVector(Qc,u):Ja.addScaledVector(Qc.sub(e),u))}e.add(Ja)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Fr.copy(t.ray).recast(t.near),!(Za.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Za,Pd)===null||Fr.origin.distanceToSquared(Pd)>(t.far-t.near)**2))&&(Ld.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,T=v;S<T;S+=3){const b=a.getX(S),y=a.getX(S+1),L=a.getX(S+2);i=rl(this,p,t,n,c,u,h,b,y,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=rl(this,o,t,n,c,u,h,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,T=v;S<T;S+=3){const b=S,y=S+1,L=S+2;i=rl(this,p,t,n,c,u,h,b,y,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,S=m+2;i=rl(this,o,t,n,c,u,h,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ux(r,t,e,n,i,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Er,a),l===null)return null;il.copy(a),il.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(il);return c<e.near||c>e.far?null:{distance:c,point:il.clone(),object:r}}function rl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Os),r.getVertexPosition(l,Is),r.getVertexPosition(c,Us);const u=ux(r,t,e,n,Os,Is,Us,nl);if(u){i&&(Qa.fromBufferAttribute(i,a),tl.fromBufferAttribute(i,l),el.fromBufferAttribute(i,c),u.uv=Ei.getInterpolation(nl,Os,Is,Us,Qa,tl,el,new Qt)),s&&(Qa.fromBufferAttribute(s,a),tl.fromBufferAttribute(s,l),el.fromBufferAttribute(s,c),u.uv1=Ei.getInterpolation(nl,Os,Is,Us,Qa,tl,el,new Qt)),o&&(Dd.fromBufferAttribute(o,a),Nd.fromBufferAttribute(o,l),Od.fromBufferAttribute(o,c),u.normal=Ei.getInterpolation(nl,Os,Is,Us,Dd,Nd,Od,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Ei.getNormal(Os,Is,Us,h.normal),u.face=h}return u}class Oa extends Zi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(h,2));function g(_,m,p,x,v,S,T,b,y,L,D){const E=S/y,w=T/L,I=S/2,Y=T/2,P=b/2,W=y+1,U=L+1;let z=0,G=0;const j=new k;for(let C=0;C<U;C++){const J=C*w-Y;for(let it=0;it<W;it++){const xt=it*E-I;j[_]=xt*x,j[m]=J*v,j[p]=P,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=b>0?1:-1,u.push(j.x,j.y,j.z),h.push(it/y),h.push(1-C/L),z+=1}}for(let C=0;C<L;C++)for(let J=0;J<y;J++){const it=f+J+W*C,xt=f+J+W*(C+1),O=f+(J+1)+W*(C+1),Z=f+(J+1)+W*C;l.push(it,xt,Z),l.push(xt,O,Z),G+=6}a.addGroup(d,G,D),d+=G,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mo(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(r){const t={};for(let e=0;e<r.length;e++){const n=mo(r[e]);for(const i in n)t[i]=n[i]}return t}function hx(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Zm(r){return r.getRenderTarget()===null?r.outputColorSpace:de.workingColorSpace}const fx={clone:mo,merge:un};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Na{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mo(t.uniforms),this.uniformsGroups=hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jm extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new k,Id=new Qt,Ud=new Qt;class Fn extends Jm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,Id,Ud),e.subVectors(Ud,Id)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Bs=1;class mx extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(Fs,Bs,t,e);i.layers=this.layers,this.add(i);const s=new Fn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const o=new Fn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new Fn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new Fn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new Fn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fh extends xn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ho,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _x extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Oa(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:pr});s.uniforms.tEquirect.value=e;const o=new pi(i,s),a=e.minFilter;return e.minFilter===Zr&&(e.minFilter=Mn),new mx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const tu=new k,gx=new k,vx=new Jt;class Wr{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tu.subVectors(n,e).cross(gx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vx.getNormalMatrix(t),i=this.coplanarPoint(tu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Oh,sl=new k;class Bh{constructor(t=new Wr,e=new Wr,n=new Wr,i=new Wr,s=new Wr,o=new Wr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,m-d,S-p).normalize(),n[1].setComponents(l+s,f+c,m+d,S+p).normalize(),n[2].setComponents(l+o,f+u,m+g,S+x).normalize(),n[3].setComponents(l-o,f-u,m-g,S-x).normalize(),n[4].setComponents(l-a,f-h,m-_,S-v).normalize(),e===Gi)n[5].setComponents(l+a,f+h,m+_,S+v).normalize();else if(e===$l)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(sl.x=i.normal.x>0?t.max.x:t.min.x,sl.y=i.normal.y>0?t.max.y:t.min.y,sl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function xx(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class hc extends Zi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),T=x+1+c*(p+1),b=x+1+c*p;d.push(v,S,b),d.push(S,T,b)}this.setIndex(d),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,UE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,CS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Ex,alphahash_pars_fragment:Sx,alphamap_fragment:yx,alphamap_pars_fragment:Mx,alphatest_fragment:bx,alphatest_pars_fragment:Tx,aomap_fragment:Ax,aomap_pars_fragment:wx,batching_pars_vertex:Cx,batching_vertex:Rx,begin_vertex:Lx,beginnormal_vertex:Px,bsdfs:Dx,iridescence_fragment:Nx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Bx,color_fragment:kx,color_pars_fragment:zx,color_pars_vertex:Hx,color_vertex:Vx,common:Gx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Xx,displacementmap_vertex:Yx,emissivemap_fragment:qx,emissivemap_pars_fragment:jx,colorspace_fragment:Kx,colorspace_pars_fragment:Zx,envmap_fragment:Jx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:tE,envmap_pars_vertex:eE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:oE,gradientmap_pars_fragment:aE,lightmap_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:hE,lights_pars_begin:fE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:_E,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:xE,lights_fragment_begin:EE,lights_fragment_maps:SE,lights_fragment_end:yE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:wE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:LE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:DE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:IE,morphtarget_pars_vertex:UE,morphtarget_vertex:FE,normal_fragment_begin:BE,normal_fragment_maps:kE,normal_pars_fragment:zE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:XE,iridescence_pars_fragment:YE,opaque_fragment:qE,packing:jE,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:JE,dithering_pars_fragment:QE,roughnessmap_fragment:tS,roughnessmap_pars_fragment:eS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:sS,skinbase_vertex:oS,skinning_pars_vertex:aS,skinning_vertex:lS,skinnormal_vertex:cS,specularmap_fragment:uS,specularmap_pars_fragment:hS,tonemapping_fragment:fS,tonemapping_pars_fragment:dS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:_S,uv_pars_vertex:gS,uv_vertex:vS,worldpos_vertex:xS,background_vert:ES,background_frag:SS,backgroundCube_vert:yS,backgroundCube_frag:MS,cube_vert:bS,cube_frag:TS,depth_vert:AS,depth_frag:wS,distanceRGBA_vert:CS,distanceRGBA_frag:RS,equirect_vert:LS,equirect_frag:PS,linedashed_vert:DS,linedashed_frag:NS,meshbasic_vert:OS,meshbasic_frag:IS,meshlambert_vert:US,meshlambert_frag:FS,meshmatcap_vert:BS,meshmatcap_frag:kS,meshnormal_vert:zS,meshnormal_frag:HS,meshphong_vert:VS,meshphong_frag:GS,meshphysical_vert:WS,meshphysical_frag:$S,meshtoon_vert:XS,meshtoon_frag:YS,points_vert:qS,points_frag:jS,shadow_vert:KS,shadow_frag:ZS,sprite_vert:JS,sprite_frag:QS},mt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vi={basic:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:un([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:un([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:un([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:un([mt.common,mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:un([mt.lights,mt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};vi.physical={uniforms:un([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ol={r:0,b:0,g:0},kr=new Li,ty=new Le;function ey(r,t,e,n,i,s,o){const a=new ce(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cc)?(u===void 0&&(u=new pi(new Oa(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:mo(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),kr.copy(p.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(kr)),u.material.toneMapped=de.getTransfer(v.colorSpace)!==Ee,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pi(new hc(2,2),new Sr({name:"BackgroundMaterial",uniforms:mo(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ol,Zm(r)),n.buffers.color.setClear(ol.r,ol.g,ol.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function ny(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(P,W,U,z,G){let j=!1;if(o){const C=_(z,U,W);c!==C&&(c=C,d(c.object)),j=p(P,z,U,G),j&&x(P,z,U,G)}else{const C=W.wireframe===!0;(c.geometry!==z.id||c.program!==U.id||c.wireframe!==C)&&(c.geometry=z.id,c.program=U.id,c.wireframe=C,j=!0)}G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,L(P,W,U,z),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,W,U){const z=U.wireframe===!0;let G=a[P.id];G===void 0&&(G={},a[P.id]=G);let j=G[W.id];j===void 0&&(j={},G[W.id]=j);let C=j[z];return C===void 0&&(C=m(f()),j[z]=C),C}function m(P){const W=[],U=[],z=[];for(let G=0;G<i;G++)W[G]=0,U[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:z,object:P,attributes:{},index:null}}function p(P,W,U,z){const G=c.attributes,j=W.attributes;let C=0;const J=U.getAttributes();for(const it in J)if(J[it].location>=0){const O=G[it];let Z=j[it];if(Z===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;C++}return c.attributesNum!==C||c.index!==z}function x(P,W,U,z){const G={},j=W.attributes;let C=0;const J=U.getAttributes();for(const it in J)if(J[it].location>=0){let O=j[it];O===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(O=P.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),G[it]=Z,C++}c.attributes=G,c.attributesNum=C,c.index=z}function v(){const P=c.newAttributes;for(let W=0,U=P.length;W<U;W++)P[W]=0}function S(P){T(P,0)}function T(P,W){const U=c.newAttributes,z=c.enabledAttributes,G=c.attributeDivisors;U[P]=1,z[P]===0&&(r.enableVertexAttribArray(P),z[P]=1),G[P]!==W&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),G[P]=W)}function b(){const P=c.newAttributes,W=c.enabledAttributes;for(let U=0,z=W.length;U<z;U++)W[U]!==P[U]&&(r.disableVertexAttribArray(U),W[U]=0)}function y(P,W,U,z,G,j,C){C===!0?r.vertexAttribIPointer(P,W,U,G,j):r.vertexAttribPointer(P,W,U,z,G,j)}function L(P,W,U,z){if(n.isWebGL2===!1&&(P.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const G=z.attributes,j=U.getAttributes(),C=W.defaultAttributeValues;for(const J in j){const it=j[J];if(it.location>=0){let xt=G[J];if(xt===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),xt!==void 0){const O=xt.normalized,Z=xt.itemSize,rt=e.get(xt);if(rt===void 0)continue;const gt=rt.buffer,ut=rt.type,ft=rt.bytesPerElement,Kt=n.isWebGL2===!0&&(ut===r.INT||ut===r.UNSIGNED_INT||xt.gpuType===Om);if(xt.isInterleavedBufferAttribute){const bt=xt.data,B=bt.stride,Ft=xt.offset;if(bt.isInstancedInterleavedBuffer){for(let vt=0;vt<it.locationSize;vt++)T(it.location+vt,bt.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let vt=0;vt<it.locationSize;vt++)S(it.location+vt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let vt=0;vt<it.locationSize;vt++)y(it.location+vt,Z/it.locationSize,ut,O,B*ft,(Ft+Z/it.locationSize*vt)*ft,Kt)}else{if(xt.isInstancedBufferAttribute){for(let bt=0;bt<it.locationSize;bt++)T(it.location+bt,xt.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let bt=0;bt<it.locationSize;bt++)S(it.location+bt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let bt=0;bt<it.locationSize;bt++)y(it.location+bt,Z/it.locationSize,ut,O,Z*ft,Z/it.locationSize*bt*ft,Kt)}}else if(C!==void 0){const O=C[J];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(it.location,O);break;case 3:r.vertexAttrib3fv(it.location,O);break;case 4:r.vertexAttrib4fv(it.location,O);break;default:r.vertexAttrib1fv(it.location,O)}}}}b()}function D(){I();for(const P in a){const W=a[P];for(const U in W){const z=W[U];for(const G in z)g(z[G].object),delete z[G];delete W[U]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const W=a[P.id];for(const U in W){const z=W[U];for(const G in z)g(z[G].object),delete z[G];delete W[U]}delete a[P.id]}function w(P){for(const W in a){const U=a[W];if(U[P.id]===void 0)continue;const z=U[P.id];for(const G in z)g(z[G].object),delete z[G];delete U[P.id]}}function I(){Y(),u=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function iy(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,f),e.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ry(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||t.has("OES_texture_float"),T=v&&S,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:b}}function sy(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Wr,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let S=p.clippingState||null;l.value=S,S=u(g,f,v,d);for(let T=0;T!==v;++T)S[T]=e[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function oy(r){let t=new WeakMap;function e(o,a){return a===Gu?o.mapping=ho:a===Wu&&(o.mapping=fo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gu||a===Wu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _x(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class t_ extends Jm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zs=4,Fd=[.125,.215,.35,.446,.526,.582],Kr=20,eu=new t_,Bd=new ce;let nu=null,iu=0,ru=0;const $r=(1+Math.sqrt(5))/2,ks=1/$r,kd=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,$r,ks),new k(0,$r,-ks),new k(ks,0,$r),new k(-ks,0,$r),new k($r,ks,0),new k(-$r,ks,0)];class zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nu,iu,ru),t.scissorTest=!1,al(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ho||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ga,format:di,colorSpace:Cr,depthBuffer:!1},i=Hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(s)),this._blurMaterial=ly(s,t,e)}return i}_compileMaterial(t){const e=new pi(this._lodPlanes[0],t);this._renderer.compile(e,eu)}_sceneToCubeUV(t,e,n,i){const a=new Fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bd),u.toneMapping=mr,u.autoClear=!1;const d=new Uh({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new pi(new Oa,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Bd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;al(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ho||t.mapping===fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;al(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,eu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kd[(i-1)%kd.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Kr;m>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const p=[];let x=0;for(let y=0;y<Kr;++y){const L=y/_,D=Math.exp(-L*L/2);p.push(D),y===0?x+=D:y<m&&(x+=2*D)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],T=3*S*(i>v-Zs?i-v+Zs:0),b=4*(this._cubeSize-S);al(e,T,b,3*S,2*S),l.setRenderTarget(e),l.render(h,eu)}}function ay(r){const t=[],e=[],n=[];let i=r;const s=r-Zs+1+Fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Zs?l=Fd[o-r+Zs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let b=0;b<d;b++){const y=b%3*2/3-1,L=b>2?0:-1,D=[y,L,0,y+2/3,L,0,y+2/3,L+1,0,y,L,0,y+2/3,L+1,0,y,L+1,0];x.set(D,_*g*b),v.set(f,m*g*b);const E=[b,b,b,b,b,b];S.set(E,p*g*b)}const T=new Zi;T.setAttribute("position",new bi(x,_)),T.setAttribute("uv",new bi(v,m)),T.setAttribute("faceIndex",new bi(S,p)),t.push(T),i>Zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hd(r,t,e){const n=new fs(r,t,e);return n.texture.mapping=cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function al(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ly(r,t,e){const n=new Float32Array(Kr),i=new k(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Vd(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Gd(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cy(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gu||l===Wu,u=l===ho||l===fo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new zd(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new zd(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uy(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hy(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,S=x.length;v<S;v+=3){const T=x[v+0],b=x[v+1],y=x[v+2];f.push(T,b,b,y,y,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const T=v+0,b=v+1,y=v+2;f.push(T,b,b,y,y,T)}}else return;const m=new(Gm(f)?Km:jm)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fy(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),e.update(g,s,1)}function h(d,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),e.update(g,s,_)}function f(d,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function dy(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function py(r,t){return r[0]-t[0]}function my(r,t){return Math.abs(t[1])-Math.abs(r[1])}function _y(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new be,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let Y=function(){w.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var d=Y;m!==void 0&&m.texture.dispose();const p=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),v===!0&&(y=3);let L=u.attributes.position.count*y,D=1;L>t.maxTextureSize&&(D=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*D*4*_),w=new Xm(E,L,D,_);w.type=Hi,w.needsUpdate=!0;const I=y*4;for(let P=0;P<_;P++){const W=S[P],U=T[P],z=b[P],G=L*D*4*P;for(let j=0;j<W.count;j++){const C=j*I;p===!0&&(o.fromBufferAttribute(W,j),E[G+C+0]=o.x,E[G+C+1]=o.y,E[G+C+2]=o.z,E[G+C+3]=0),x===!0&&(o.fromBufferAttribute(U,j),E[G+C+4]=o.x,E[G+C+5]=o.y,E[G+C+6]=o.z,E[G+C+7]=0),v===!0&&(o.fromBufferAttribute(z,j),E[G+C+8]=o.x,E[G+C+9]=o.y,E[G+C+10]=o.z,E[G+C+11]=z.itemSize===4?o.w:1)}}m={count:_,texture:w,size:new Qt(L,D)},s.set(u,m),u.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const T=_[S];T[0]=S,T[1]=f[S]}_.sort(my);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(py);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const T=a[S],b=T[0],y=T[1];b!==Number.MAX_SAFE_INTEGER&&y?(m&&u.getAttribute("morphTarget"+S)!==m[b]&&u.setAttribute("morphTarget"+S,m[b]),p&&u.getAttribute("morphNormal"+S)!==p[b]&&u.setAttribute("morphNormal"+S,p[b]),i[S]=y,x+=y):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function gy(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class e_ extends xn{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:is,u!==is&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===is&&(n=lr),n===void 0&&u===po&&(n=ns),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const n_=new xn,i_=new e_(1,1);i_.compareFunction=Vm;const r_=new Xm,s_=new Q0,o_=new Fh,Wd=[],$d=[],Xd=new Float32Array(16),Yd=new Float32Array(9),qd=new Float32Array(4);function Lo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wd[i];if(s===void 0&&(s=new Float32Array(i),Wd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function He(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fc(r,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function vy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function xy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2fv(this.addr,t),Ve(e,t)}}function Ey(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;r.uniform3fv(this.addr,t),Ve(e,t)}}function Sy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4fv(this.addr,t),Ve(e,t)}}function yy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;qd.set(n),r.uniformMatrix2fv(this.addr,!1,qd),Ve(e,n)}}function My(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Yd.set(n),r.uniformMatrix3fv(this.addr,!1,Yd),Ve(e,n)}}function by(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Xd.set(n),r.uniformMatrix4fv(this.addr,!1,Xd),Ve(e,n)}}function Ty(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ay(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2iv(this.addr,t),Ve(e,t)}}function wy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3iv(this.addr,t),Ve(e,t)}}function Cy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4iv(this.addr,t),Ve(e,t)}}function Ry(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ly(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2uiv(this.addr,t),Ve(e,t)}}function Py(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3uiv(this.addr,t),Ve(e,t)}}function Dy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4uiv(this.addr,t),Ve(e,t)}}function Ny(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?i_:n_;e.setTexture2D(t||s,i)}function Oy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||s_,i)}function Iy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||o_,i)}function Uy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||r_,i)}function Fy(r){switch(r){case 5126:return vy;case 35664:return xy;case 35665:return Ey;case 35666:return Sy;case 35674:return yy;case 35675:return My;case 35676:return by;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Ly;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Uy}}function By(r,t){r.uniform1fv(this.addr,t)}function ky(r,t){const e=Lo(t,this.size,2);r.uniform2fv(this.addr,e)}function zy(r,t){const e=Lo(t,this.size,3);r.uniform3fv(this.addr,e)}function Hy(r,t){const e=Lo(t,this.size,4);r.uniform4fv(this.addr,e)}function Vy(r,t){const e=Lo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Gy(r,t){const e=Lo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Wy(r,t){const e=Lo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function $y(r,t){r.uniform1iv(this.addr,t)}function Xy(r,t){r.uniform2iv(this.addr,t)}function Yy(r,t){r.uniform3iv(this.addr,t)}function qy(r,t){r.uniform4iv(this.addr,t)}function jy(r,t){r.uniform1uiv(this.addr,t)}function Ky(r,t){r.uniform2uiv(this.addr,t)}function Zy(r,t){r.uniform3uiv(this.addr,t)}function Jy(r,t){r.uniform4uiv(this.addr,t)}function Qy(r,t,e){const n=this.cache,i=t.length,s=fc(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||n_,s[o])}function tM(r,t,e){const n=this.cache,i=t.length,s=fc(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||s_,s[o])}function eM(r,t,e){const n=this.cache,i=t.length,s=fc(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||o_,s[o])}function nM(r,t,e){const n=this.cache,i=t.length,s=fc(e,i);He(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||r_,s[o])}function iM(r){switch(r){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Hy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return $y;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Ky;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iM(e.type)}}class oM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const su=/(\w+)(\])?(\[|\.)?/g;function jd(r,t){r.seq.push(t),r.map[t.id]=t}function aM(r,t,e){const n=r.name,i=n.length;for(su.lastIndex=0;;){const s=su.exec(n),o=su.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jd(e,c===void 0?new rM(a,r,t):new sM(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new oM(a),jd(e,h)),e=h}}}class Cl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);aM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Kd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const lM=37297;let cM=0;function uM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hM(r){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r);let n;switch(t===e?n="":t===Wl&&e===Gl?n="LinearDisplayP3ToLinearSRGB":t===Gl&&e===Wl&&(n="LinearSRGBToLinearDisplayP3"),r){case Cr:case uc:return[n,"LinearTransferOETF"];case mn:case Dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+uM(r.getShaderSource(t),o)}else return i}function fM(r,t){const e=hM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dM(r,t){let e;switch(t){case l0:e="Linear";break;case c0:e="Reinhard";break;case u0:e="OptimizedCineon";break;case h0:e="ACESFilmic";break;case d0:e="AgX";break;case p0:e="Neutral";break;case f0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function mM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function _M(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Js(r){return r!==""}function Jd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(r){return r.replace(vM,EM)}const xM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function EM(r,t){let e=Zt[t];if(e===void 0){const n=xM.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ju(e)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(r){return r.replace(SM,yM)}function yM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ep(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function bM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ho:case fo:t="ENVMAP_TYPE_CUBE";break;case cc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function TM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fo:t="ENVMAP_MODE_REFRACTION";break}return t}function AM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dm:t="ENVMAP_BLENDING_MULTIPLY";break;case o0:t="ENVMAP_BLENDING_MIX";break;case a0:t="ENVMAP_BLENDING_ADD";break}return t}function wM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function CM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=MM(e),c=bM(e),u=TM(e),h=AM(e),f=wM(e),d=e.isWebGL2?"":pM(e),g=mM(e),_=_M(s),m=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),x.length>0&&(x+=`
`)):(p=[ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),x=[d,ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?Zt.tonemapping_pars_fragment:"",e.toneMapping!==mr?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,fM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=ju(o),o=Jd(o,e),o=Qd(o,e),a=ju(a),a=Jd(a,e),a=Qd(a,e),o=tp(o),a=tp(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+p+o,T=v+x+a,b=Kd(i,i.VERTEX_SHADER,S),y=Kd(i,i.FRAGMENT_SHADER,T);i.attachShader(m,b),i.attachShader(m,y),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(I){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),W=i.getShaderInfoLog(y).trim();let U=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,y);else{const G=Zd(i,b,"vertex"),j=Zd(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+G+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(P===""||W==="")&&(z=!1);z&&(I.diagnostics={runnable:U,programLog:Y,vertexShader:{log:P,prefix:p},fragmentShader:{log:W,prefix:x}})}i.deleteShader(b),i.deleteShader(y),D=new Cl(i,m),E=gM(i,m)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,lM)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=y,this}let RM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new PM(t),e.set(t,n)),n}}class PM{constructor(t){this.id=RM++,this.code=t,this.usedTimes=0}}function DM(r,t,e,n,i,s,o){const a=new Ih,l=new LM,c=new Set,u=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,w,I,Y,P){const W=Y.fog,U=P.geometry,z=E.isMeshStandardMaterial?Y.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),j=G&&G.mapping===cc?G.image.height:null,C=_[E.type];E.precision!==null&&(g=i.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=J!==void 0?J.length:0;let xt=0;U.morphAttributes.position!==void 0&&(xt=1),U.morphAttributes.normal!==void 0&&(xt=2),U.morphAttributes.color!==void 0&&(xt=3);let O,Z,rt,gt;if(C){const le=vi[C];O=le.vertexShader,Z=le.fragmentShader}else O=E.vertexShader,Z=E.fragmentShader,l.update(E),rt=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const ut=r.getRenderTarget(),ft=P.isInstancedMesh===!0,Kt=P.isBatchedMesh===!0,bt=!!E.map,B=!!E.matcap,Ft=!!G,vt=!!E.aoMap,Ot=!!E.lightMap,yt=!!E.bumpMap,H=!!E.normalMap,It=!!E.displacementMap,Vt=!!E.emissiveMap,te=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,K=E.clearcoat>0,Q=E.iridescence>0,tt=E.sheen>0,et=E.transmission>0,Et=M&&!!E.anisotropyMap,Rt=K&&!!E.clearcoatMap,ot=K&&!!E.clearcoatNormalMap,dt=K&&!!E.clearcoatRoughnessMap,Gt=Q&&!!E.iridescenceMap,nt=Q&&!!E.iridescenceThicknessMap,ve=tt&&!!E.sheenColorMap,Wt=tt&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,Tt=!!E.specularColorMap,Mt=!!E.specularIntensityMap,jt=et&&!!E.transmissionMap,pt=et&&!!E.thicknessMap,ae=!!E.gradientMap,N=!!E.alphaMap,ct=E.alphaTest>0,X=!!E.alphaHash,at=!!E.extensions;let _t=mr;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(_t=r.toneMapping);const $t={isWebGL2:h,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:O,fragmentShader:Z,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Kt,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Cr,alphaToCoverage:!!E.alphaToCoverage,map:bt,matcap:B,envMap:Ft,envMapMode:Ft&&G.mapping,envMapCubeUVHeight:j,aoMap:vt,lightMap:Ot,bumpMap:yt,normalMap:H,displacementMap:d&&It,emissiveMap:Vt,normalMapObjectSpace:H&&E.normalMapType===T0,normalMapTangentSpace:H&&E.normalMapType===Hm,metalnessMap:te,roughnessMap:R,anisotropy:M,anisotropyMap:Et,clearcoat:K,clearcoatMap:Rt,clearcoatNormalMap:ot,clearcoatRoughnessMap:dt,iridescence:Q,iridescenceMap:Gt,iridescenceThicknessMap:nt,sheen:tt,sheenColorMap:ve,sheenRoughnessMap:Wt,specularMap:Dt,specularColorMap:Tt,specularIntensityMap:Mt,transmission:et,transmissionMap:jt,thicknessMap:pt,gradientMap:ae,opaque:E.transparent===!1&&E.blending===io&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:ct,alphaHash:X,combine:E.combine,mapUv:bt&&m(E.map.channel),aoMapUv:vt&&m(E.aoMap.channel),lightMapUv:Ot&&m(E.lightMap.channel),bumpMapUv:yt&&m(E.bumpMap.channel),normalMapUv:H&&m(E.normalMap.channel),displacementMapUv:It&&m(E.displacementMap.channel),emissiveMapUv:Vt&&m(E.emissiveMap.channel),metalnessMapUv:te&&m(E.metalnessMap.channel),roughnessMapUv:R&&m(E.roughnessMap.channel),anisotropyMapUv:Et&&m(E.anisotropyMap.channel),clearcoatMapUv:Rt&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(E.sheenRoughnessMap.channel),specularMapUv:Dt&&m(E.specularMap.channel),specularColorMapUv:Tt&&m(E.specularColorMap.channel),specularIntensityMapUv:Mt&&m(E.specularIntensityMap.channel),transmissionMapUv:jt&&m(E.transmissionMap.channel),thicknessMapUv:pt&&m(E.thicknessMap.channel),alphaMapUv:N&&m(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(H||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(bt||N),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&de.getTransfer(E.map.colorSpace)===Ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xi,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:at&&E.extensions.derivatives===!0,extensionFragDepth:at&&E.extensions.fragDepth===!0,extensionDrawBuffers:at&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function x(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)w.push(I),w.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(w,E),S(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),E.push(a.mask)}function T(E){const w=_[E.type];let I;if(w){const Y=vi[w];I=fx.clone(Y.uniforms)}else I=E.uniforms;return I}function b(E,w){let I;for(let Y=0,P=u.length;Y<P;Y++){const W=u[Y];if(W.cacheKey===w){I=W,++I.usedTimes;break}}return I===void 0&&(I=new CM(r,w,E,s),u.push(I)),I}function y(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:T,acquireProgram:b,releaseProgram:y,releaseShaderCache:L,programs:u,dispose:D}}function NM(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function OM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function np(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ip(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||OM),n.length>1&&n.sort(f||np),i.length>1&&i.sort(f||np)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function IM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ip,r.set(n,[o])):i>=s.length?(o=new ip,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function UM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ce};break;case"SpotLight":e={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function FM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let BM=0;function kM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zM(r,t){const e=new UM,n=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new Le,a=new Le;function l(u,h){let f=0,d=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,S=0,T=0,b=0,y=0,L=0,D=0;u.sort(kM);const E=h===!0?Math.PI:1;for(let I=0,Y=u.length;I<Y;I++){const P=u[I],W=P.color,U=P.intensity,z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=W.r*U*E,d+=W.g*U*E,g+=W.b*U*E;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],U);D++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const C=P.shadow,J=n.get(P);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(W).multiplyScalar(U*E),j.distance=z,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[p]=j;const C=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,C.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[p]=C.matrix,P.castShadow){const J=n.get(P);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=G,b++}p++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(W).multiplyScalar(U),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=j,x++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),j.distance=P.distance,j.decay=P.decay,P.castShadow){const C=P.shadow,J=n.get(P);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(U*E),j.groundColor.copy(P.groundColor).multiplyScalar(U*E),i.hemi[v]=j,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==x||w.hemiLength!==v||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==b||w.numSpotMaps!==y||w.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+y-L,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=x,w.hemiLength=v,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=b,w.numSpotMaps=y,w.numLightProbes=D,i.version=BM++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const S=u[x];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function rp(r,t){const e=new zM(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function HM(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new rp(r,t),e.set(s,[l])):o>=a.length?(l=new rp(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class VM extends Na{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GM extends Na{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(r,t,e){let n=new Bh;const i=new Qt,s=new Qt,o=new be,a=new VM({depthPacking:b0}),l=new GM,c={},u=e.maxTextureSize,h={[Er]:Tn,[Tn]:Er,[xi]:xi},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:WM,fragmentShader:$M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zi;g.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lm;let p=this.type;this.render=function(b,y,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const D=r.getRenderTarget(),E=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),I=r.state;I.setBlending(pr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Y=p!==Bi&&this.type===Bi,P=p===Bi&&this.type!==Bi;for(let W=0,U=b.length;W<U;W++){const z=b[W],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const j=G.getFrameExtents();if(i.multiply(j),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||Y===!0||P===!0){const J=this.type!==Bi?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new fs(i.x,i.y,J),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const C=G.getViewportCount();for(let J=0;J<C;J++){const it=G.getViewport(J);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),I.viewport(o),G.updateMatrices(z,J),n=G.getFrustum(),S(y,L,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Bi&&x(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(D,E,w)};function x(b,y){const L=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new fs(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(y,null,L,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(y,null,L,d,_,null)}function v(b,y,L,D){let E=null;const w=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)E=w;else if(E=L.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=E.uuid,Y=y.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let W=P[Y];W===void 0&&(W=E.clone(),P[Y]=W,y.addEventListener("dispose",T)),E=W}if(E.visible=y.visible,E.wireframe=y.wireframe,D===Bi?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:h[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=r.properties.get(E);I.light=L}return E}function S(b,y,L,D,E){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Bi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),P=b.material;if(Array.isArray(P)){const W=Y.groups;for(let U=0,z=W.length;U<z;U++){const G=W[U],j=P[G.materialIndex];if(j&&j.visible){const C=v(b,j,D,E);b.onBeforeShadow(r,b,y,L,Y,C,G),r.renderBufferDirect(L,null,Y,C,b,G),b.onAfterShadow(r,b,y,L,Y,C,G)}}}else if(P.visible){const W=v(b,P,D,E);b.onBeforeShadow(r,b,y,L,Y,W,null),r.renderBufferDirect(L,null,Y,W,b,null),b.onAfterShadow(r,b,y,L,Y,W,null)}}const I=b.children;for(let Y=0,P=I.length;Y<P;Y++)S(I[Y],y,L,D,E)}function T(b){b.target.removeEventListener("dispose",T);for(const L in c){const D=c[L],E=b.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}function YM(r,t,e){const n=e.isWebGL2;function i(){let N=!1;const ct=new be;let X=null;const at=new be(0,0,0,0);return{setMask:function(_t){X!==_t&&!N&&(r.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){N=_t},setClear:function(_t,$t,le,Lt,wt){wt===!0&&(_t*=Lt,$t*=Lt,le*=Lt),ct.set(_t,$t,le,Lt),at.equals(ct)===!1&&(r.clearColor(_t,$t,le,Lt),at.copy(ct))},reset:function(){N=!1,X=null,at.set(-1,0,0,0)}}}function s(){let N=!1,ct=null,X=null,at=null;return{setTest:function(_t){_t?ft(r.DEPTH_TEST):Kt(r.DEPTH_TEST)},setMask:function(_t){ct!==_t&&!N&&(r.depthMask(_t),ct=_t)},setFunc:function(_t){if(X!==_t){switch(_t){case Qv:r.depthFunc(r.NEVER);break;case t0:r.depthFunc(r.ALWAYS);break;case e0:r.depthFunc(r.LESS);break;case Hl:r.depthFunc(r.LEQUAL);break;case n0:r.depthFunc(r.EQUAL);break;case i0:r.depthFunc(r.GEQUAL);break;case r0:r.depthFunc(r.GREATER);break;case s0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}X=_t}},setLocked:function(_t){N=_t},setClear:function(_t){at!==_t&&(r.clearDepth(_t),at=_t)},reset:function(){N=!1,ct=null,X=null,at=null}}}function o(){let N=!1,ct=null,X=null,at=null,_t=null,$t=null,le=null,Lt=null,wt=null;return{setTest:function(Nt){N||(Nt?ft(r.STENCIL_TEST):Kt(r.STENCIL_TEST))},setMask:function(Nt){ct!==Nt&&!N&&(r.stencilMask(Nt),ct=Nt)},setFunc:function(Nt,lt,Bt){(X!==Nt||at!==lt||_t!==Bt)&&(r.stencilFunc(Nt,lt,Bt),X=Nt,at=lt,_t=Bt)},setOp:function(Nt,lt,Bt){($t!==Nt||le!==lt||Lt!==Bt)&&(r.stencilOp(Nt,lt,Bt),$t=Nt,le=lt,Lt=Bt)},setLocked:function(Nt){N=Nt},setClear:function(Nt){wt!==Nt&&(r.clearStencil(Nt),wt=Nt)},reset:function(){N=!1,ct=null,X=null,at=null,_t=null,$t=null,le=null,Lt=null,wt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,T=null,b=null,y=null,L=null,D=new ce(0,0,0),E=0,w=!1,I=null,Y=null,P=null,W=null,U=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(C)[1]),G=j>=1):C.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),G=j>=2);let J=null,it={};const xt=r.getParameter(r.SCISSOR_BOX),O=r.getParameter(r.VIEWPORT),Z=new be().fromArray(xt),rt=new be().fromArray(O);function gt(N,ct,X,at){const _t=new Uint8Array(4),$t=r.createTexture();r.bindTexture(N,$t),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<X;le++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(ct,0,r.RGBA,1,1,at,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(ct+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return $t}const ut={};ut[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),ut[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ut[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ut[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ft(r.DEPTH_TEST),l.setFunc(Hl),It(!1),Vt(Uf),ft(r.CULL_FACE),yt(pr);function ft(N){f[N]!==!0&&(r.enable(N),f[N]=!0)}function Kt(N){f[N]!==!1&&(r.disable(N),f[N]=!1)}function bt(N,ct){return d[N]!==ct?(r.bindFramebuffer(N,ct),d[N]=ct,n&&(N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct)),!0):!1}function B(N,ct){let X=_,at=!1;if(N){X=g.get(ct),X===void 0&&(X=[],g.set(ct,X));const _t=N.textures;if(X.length!==_t.length||X[0]!==r.COLOR_ATTACHMENT0){for(let $t=0,le=_t.length;$t<le;$t++)X[$t]=r.COLOR_ATTACHMENT0+$t;X.length=_t.length,at=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,at=!0);if(at)if(e.isWebGL2)r.drawBuffers(X);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ft(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const vt={[jr]:r.FUNC_ADD,[Bv]:r.FUNC_SUBTRACT,[kv]:r.FUNC_REVERSE_SUBTRACT};if(n)vt[zf]=r.MIN,vt[Hf]=r.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(vt[zf]=N.MIN_EXT,vt[Hf]=N.MAX_EXT)}const Ot={[zv]:r.ZERO,[Hv]:r.ONE,[Vv]:r.SRC_COLOR,[Hu]:r.SRC_ALPHA,[qv]:r.SRC_ALPHA_SATURATE,[Xv]:r.DST_COLOR,[Wv]:r.DST_ALPHA,[Gv]:r.ONE_MINUS_SRC_COLOR,[Vu]:r.ONE_MINUS_SRC_ALPHA,[Yv]:r.ONE_MINUS_DST_COLOR,[$v]:r.ONE_MINUS_DST_ALPHA,[jv]:r.CONSTANT_COLOR,[Kv]:r.ONE_MINUS_CONSTANT_COLOR,[Zv]:r.CONSTANT_ALPHA,[Jv]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(N,ct,X,at,_t,$t,le,Lt,wt,Nt){if(N===pr){p===!0&&(Kt(r.BLEND),p=!1);return}if(p===!1&&(ft(r.BLEND),p=!0),N!==Fv){if(N!==x||Nt!==w){if((v!==jr||b!==jr)&&(r.blendEquation(r.FUNC_ADD),v=jr,b=jr),Nt)switch(N){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFunc(r.ONE,r.ONE);break;case Bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,T=null,y=null,L=null,D.set(0,0,0),E=0,x=N,w=Nt}return}_t=_t||ct,$t=$t||X,le=le||at,(ct!==v||_t!==b)&&(r.blendEquationSeparate(vt[ct],vt[_t]),v=ct,b=_t),(X!==S||at!==T||$t!==y||le!==L)&&(r.blendFuncSeparate(Ot[X],Ot[at],Ot[$t],Ot[le]),S=X,T=at,y=$t,L=le),(Lt.equals(D)===!1||wt!==E)&&(r.blendColor(Lt.r,Lt.g,Lt.b,wt),D.copy(Lt),E=wt),x=N,w=!1}function H(N,ct){N.side===xi?Kt(r.CULL_FACE):ft(r.CULL_FACE);let X=N.side===Tn;ct&&(X=!X),It(X),N.blending===io&&N.transparent===!1?yt(pr):yt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const at=N.stencilWrite;c.setTest(at),at&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),R(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):Kt(r.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){I!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),I=N)}function Vt(N){N!==Iv?(ft(r.CULL_FACE),N!==Y&&(N===Uf?r.cullFace(r.BACK):N===Uv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Kt(r.CULL_FACE),Y=N}function te(N){N!==P&&(G&&r.lineWidth(N),P=N)}function R(N,ct,X){N?(ft(r.POLYGON_OFFSET_FILL),(W!==ct||U!==X)&&(r.polygonOffset(ct,X),W=ct,U=X)):Kt(r.POLYGON_OFFSET_FILL)}function M(N){N?ft(r.SCISSOR_TEST):Kt(r.SCISSOR_TEST)}function K(N){N===void 0&&(N=r.TEXTURE0+z-1),J!==N&&(r.activeTexture(N),J=N)}function Q(N,ct,X){X===void 0&&(J===null?X=r.TEXTURE0+z-1:X=J);let at=it[X];at===void 0&&(at={type:void 0,texture:void 0},it[X]=at),(at.type!==N||at.texture!==ct)&&(J!==X&&(r.activeTexture(X),J=X),r.bindTexture(N,ct||ut[N]),at.type=N,at.texture=ct)}function tt(){const N=it[J];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(N){Z.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function Mt(N){rt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function jt(N,ct){let X=h.get(ct);X===void 0&&(X=new WeakMap,h.set(ct,X));let at=X.get(N);at===void 0&&(at=r.getUniformBlockIndex(ct,N.name),X.set(N,at))}function pt(N,ct){const at=h.get(ct).get(N);u.get(ct)!==at&&(r.uniformBlockBinding(ct,at,N.__bindingPointIndex),u.set(ct,at))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},J=null,it={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,T=null,b=null,y=null,L=null,D=new ce(0,0,0),E=0,w=!1,I=null,Y=null,P=null,W=null,U=null,Z.set(0,0,r.canvas.width,r.canvas.height),rt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ft,disable:Kt,bindFramebuffer:bt,drawBuffers:B,useProgram:Ft,setBlending:yt,setMaterial:H,setFlipSided:It,setCullFace:Vt,setLineWidth:te,setPolygonOffset:R,setScissorTest:M,activeTexture:K,bindTexture:Q,unbindTexture:tt,compressedTexImage2D:et,compressedTexImage3D:Et,texImage2D:Wt,texImage3D:Dt,updateUBOMapping:jt,uniformBlockBinding:pt,texStorage2D:nt,texStorage3D:ve,texSubImage2D:Rt,texSubImage3D:ot,compressedTexSubImage2D:dt,compressedTexSubImage3D:Gt,scissor:Tt,viewport:Mt,reset:ae}}function qM(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qt,h=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return g?new OffscreenCanvas(R,M):xa("canvas")}function m(R,M,K,Q){let tt=1;const et=te(R);if((et.width>Q||et.height>Q)&&(tt=Q/Math.max(et.width,et.height)),tt<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Et=M?Xl:Math.floor,Rt=Et(tt*et.width),ot=Et(tt*et.height);f===void 0&&(f=_(Rt,ot));const dt=K?_(Rt,ot):f;return dt.width=Rt,dt.height=ot,dt.getContext("2d").drawImage(R,0,0,Rt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Rt+"x"+ot+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){const M=te(R);return qu(M.width)&&qu(M.height)}function x(R){return a?!1:R.wrapS!==fi||R.wrapT!==fi||R.minFilter!==pn&&R.minFilter!==Mn}function v(R,M){return R.generateMipmaps&&M&&R.minFilter!==pn&&R.minFilter!==Mn}function S(R){r.generateMipmap(R)}function T(R,M,K,Q,tt=!1){if(a===!1)return M;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=M;if(M===r.RED&&(K===r.FLOAT&&(et=r.R32F),K===r.HALF_FLOAT&&(et=r.R16F),K===r.UNSIGNED_BYTE&&(et=r.R8)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(et=r.R8UI),K===r.UNSIGNED_SHORT&&(et=r.R16UI),K===r.UNSIGNED_INT&&(et=r.R32UI),K===r.BYTE&&(et=r.R8I),K===r.SHORT&&(et=r.R16I),K===r.INT&&(et=r.R32I)),M===r.RG&&(K===r.FLOAT&&(et=r.RG32F),K===r.HALF_FLOAT&&(et=r.RG16F),K===r.UNSIGNED_BYTE&&(et=r.RG8)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(et=r.RG8UI),K===r.UNSIGNED_SHORT&&(et=r.RG16UI),K===r.UNSIGNED_INT&&(et=r.RG32UI),K===r.BYTE&&(et=r.RG8I),K===r.SHORT&&(et=r.RG16I),K===r.INT&&(et=r.RG32I)),M===r.RGBA){const Et=tt?Vl:de.getTransfer(Q);K===r.FLOAT&&(et=r.RGBA32F),K===r.HALF_FLOAT&&(et=r.RGBA16F),K===r.UNSIGNED_BYTE&&(et=Et===Ee?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(R,M,K){return v(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function y(R){return R===pn||R===Vf||R===Uo?r.NEAREST:r.LINEAR}function L(R){const M=R.target;M.removeEventListener("dispose",L),E(M),M.isVideoTexture&&h.delete(M)}function D(R){const M=R.target;M.removeEventListener("dispose",D),I(M)}function E(R){const M=n.get(R);if(M.__webglInit===void 0)return;const K=R.source,Q=d.get(K);if(Q){const tt=Q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(R),Object.keys(Q).length===0&&d.delete(K)}n.remove(R)}function w(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const K=R.source,Q=d.get(K);delete Q[M.__cacheKey],o.memory.textures--}function I(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let tt=0;tt<M.__webglFramebuffer[Q].length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[Q][tt]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=R.textures;for(let Q=0,tt=K.length;Q<tt;Q++){const et=n.get(K[Q]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(K[Q])}n.remove(R)}let Y=0;function P(){Y=0}function W(){const R=Y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),Y+=1,R}function U(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function z(R,M){const K=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,R,M);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function G(R,M){const K=n.get(R);if(R.version>0&&K.__version!==R.version){rt(K,R,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function j(R,M){const K=n.get(R);if(R.version>0&&K.__version!==R.version){rt(K,R,M);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function C(R,M){const K=n.get(R);if(R.version>0&&K.__version!==R.version){gt(K,R,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const J={[$u]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Xu]:r.MIRRORED_REPEAT},it={[pn]:r.NEAREST,[Vf]:r.NEAREST_MIPMAP_NEAREST,[Uo]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[Lc]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},xt={[A0]:r.NEVER,[D0]:r.ALWAYS,[w0]:r.LESS,[Vm]:r.LEQUAL,[C0]:r.EQUAL,[P0]:r.GEQUAL,[R0]:r.GREATER,[L0]:r.NOTEQUAL};function O(R,M,K){if(M.type===Hi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===Lc||M.magFilter===Uo||M.magFilter===Zr||M.minFilter===Mn||M.minFilter===Lc||M.minFilter===Uo||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,it[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,it[M.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==fi||M.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,y(M.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,y(M.minFilter)),M.minFilter!==pn&&M.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Uo&&M.minFilter!==Zr||M.type===Hi&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===ga&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Z(R,M){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",L));const Q=M.source;let tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));const et=U(M);if(et!==R.__cacheKey){tt[et]===void 0&&(tt[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),tt[et].usedTimes++;const Et=tt[R.__cacheKey];Et!==void 0&&(tt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&w(M)),R.__cacheKey=et,R.__webglTexture=tt[et].texture}return K}function rt(R,M,K){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const tt=Z(R,M),et=M.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+K);const Et=n.get(et);if(et.version!==Et.__version||tt===!0){e.activeTexture(r.TEXTURE0+K);const Rt=de.getPrimaries(de.workingColorSpace),ot=M.colorSpace===ar?null:de.getPrimaries(M.colorSpace),dt=M.colorSpace===ar||Rt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=x(M)&&p(M.image)===!1;let nt=m(M.image,Gt,!1,i.maxTextureSize);nt=Vt(M,nt);const ve=p(nt)||a,Wt=s.convert(M.format,M.colorSpace);let Dt=s.convert(M.type),Tt=T(M.internalFormat,Wt,Dt,M.colorSpace,M.isVideoTexture);O(Q,M,ve);let Mt;const jt=M.mipmaps,pt=a&&M.isVideoTexture!==!0&&Tt!==zm,ae=Et.__version===void 0||tt===!0,N=et.dataReady,ct=b(M,nt,ve);if(M.isDepthTexture)Tt=r.DEPTH_COMPONENT,a?M.type===Hi?Tt=r.DEPTH_COMPONENT32F:M.type===lr?Tt=r.DEPTH_COMPONENT24:M.type===ns?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:M.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===is&&Tt===r.DEPTH_COMPONENT&&M.type!==Ph&&M.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=lr,Dt=s.convert(M.type)),M.format===po&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,M.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ns,Dt=s.convert(M.type))),ae&&(pt?e.texStorage2D(r.TEXTURE_2D,1,Tt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Tt,nt.width,nt.height,0,Wt,Dt,null));else if(M.isDataTexture)if(jt.length>0&&ve){pt&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Tt,jt[0].width,jt[0].height);for(let X=0,at=jt.length;X<at;X++)Mt=jt[X],pt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Mt.width,Mt.height,Wt,Dt,Mt.data):e.texImage2D(r.TEXTURE_2D,X,Tt,Mt.width,Mt.height,0,Wt,Dt,Mt.data);M.generateMipmaps=!1}else pt?(ae&&e.texStorage2D(r.TEXTURE_2D,ct,Tt,nt.width,nt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,Wt,Dt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,nt.width,nt.height,0,Wt,Dt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){pt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Tt,jt[0].width,jt[0].height,nt.depth);for(let X=0,at=jt.length;X<at;X++)Mt=jt[X],M.format!==di?Wt!==null?pt?N&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,nt.depth,Wt,Mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Tt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,nt.depth,Wt,Dt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Tt,Mt.width,Mt.height,nt.depth,0,Wt,Dt,Mt.data)}else{pt&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Tt,jt[0].width,jt[0].height);for(let X=0,at=jt.length;X<at;X++)Mt=jt[X],M.format!==di?Wt!==null?pt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,Mt.width,Mt.height,Wt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Tt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Mt.width,Mt.height,Wt,Dt,Mt.data):e.texImage2D(r.TEXTURE_2D,X,Tt,Mt.width,Mt.height,0,Wt,Dt,Mt.data)}else if(M.isDataArrayTexture)pt?(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Tt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Wt,Dt,nt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,nt.width,nt.height,nt.depth,0,Wt,Dt,nt.data);else if(M.isData3DTexture)pt?(ae&&e.texStorage3D(r.TEXTURE_3D,ct,Tt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Wt,Dt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,nt.width,nt.height,nt.depth,0,Wt,Dt,nt.data);else if(M.isFramebufferTexture){if(ae)if(pt)e.texStorage2D(r.TEXTURE_2D,ct,Tt,nt.width,nt.height);else{let X=nt.width,at=nt.height;for(let _t=0;_t<ct;_t++)e.texImage2D(r.TEXTURE_2D,_t,Tt,X,at,0,Wt,Dt,null),X>>=1,at>>=1}}else if(jt.length>0&&ve){if(pt&&ae){const X=te(jt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Tt,X.width,X.height)}for(let X=0,at=jt.length;X<at;X++)Mt=jt[X],pt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Wt,Dt,Mt):e.texImage2D(r.TEXTURE_2D,X,Tt,Wt,Dt,Mt);M.generateMipmaps=!1}else if(pt){if(ae){const X=te(nt);e.texStorage2D(r.TEXTURE_2D,ct,Tt,X.width,X.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,Dt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Tt,Wt,Dt,nt);v(M,ve)&&S(Q),Et.__version=et.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function gt(R,M,K){if(M.image.length!==6)return;const Q=Z(R,M),tt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+K);const et=n.get(tt);if(tt.version!==et.__version||Q===!0){e.activeTexture(r.TEXTURE0+K);const Et=de.getPrimaries(de.workingColorSpace),Rt=M.colorSpace===ar?null:de.getPrimaries(M.colorSpace),ot=M.colorSpace===ar||Et===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Gt=M.image[0]&&M.image[0].isDataTexture,nt=[];for(let X=0;X<6;X++)!dt&&!Gt?nt[X]=m(M.image[X],!1,!0,i.maxCubemapSize):nt[X]=Gt?M.image[X].image:M.image[X],nt[X]=Vt(M,nt[X]);const ve=nt[0],Wt=p(ve)||a,Dt=s.convert(M.format,M.colorSpace),Tt=s.convert(M.type),Mt=T(M.internalFormat,Dt,Tt,M.colorSpace),jt=a&&M.isVideoTexture!==!0,pt=et.__version===void 0||Q===!0,ae=tt.dataReady;let N=b(M,ve,Wt);O(r.TEXTURE_CUBE_MAP,M,Wt);let ct;if(dt){jt&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,N,Mt,ve.width,ve.height);for(let X=0;X<6;X++){ct=nt[X].mipmaps;for(let at=0;at<ct.length;at++){const _t=ct[at];M.format!==di?Dt!==null?jt?ae&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,_t.width,_t.height,Dt,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,Mt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?ae&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,_t.width,_t.height,Dt,Tt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,Mt,_t.width,_t.height,0,Dt,Tt,_t.data)}}}else{if(ct=M.mipmaps,jt&&pt){ct.length>0&&N++;const X=te(nt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,N,Mt,X.width,X.height)}for(let X=0;X<6;X++)if(Gt){jt?ae&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,nt[X].width,nt[X].height,Dt,Tt,nt[X].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Mt,nt[X].width,nt[X].height,0,Dt,Tt,nt[X].data);for(let at=0;at<ct.length;at++){const $t=ct[at].image[X].image;jt?ae&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,$t.width,$t.height,Dt,Tt,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,Mt,$t.width,$t.height,0,Dt,Tt,$t.data)}}else{jt?ae&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Dt,Tt,nt[X]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Mt,Dt,Tt,nt[X]);for(let at=0;at<ct.length;at++){const _t=ct[at];jt?ae&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,Dt,Tt,_t.image[X]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,Mt,Dt,Tt,_t.image[X])}}}v(M,Wt)&&S(r.TEXTURE_CUBE_MAP),et.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ut(R,M,K,Q,tt,et){const Et=s.convert(K.format,K.colorSpace),Rt=s.convert(K.type),ot=T(K.internalFormat,Et,Rt,K.colorSpace);if(!n.get(M).__hasExternalTextures){const Gt=Math.max(1,M.width>>et),nt=Math.max(1,M.height>>et);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,ot,Gt,nt,M.depth,0,Et,Rt,null):e.texImage2D(tt,et,ot,Gt,nt,0,Et,Rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,tt,n.get(K).__webglTexture,0,yt(M)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,tt,n.get(K).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(R,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||H(M)){const tt=M.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Hi?Q=r.DEPTH_COMPONENT32F:tt.type===lr&&(Q=r.DEPTH_COMPONENT24));const et=yt(M);H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Q,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Q,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Q=yt(M);K&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const Q=M.textures;for(let tt=0;tt<Q.length;tt++){const et=Q[tt],Et=s.convert(et.format,et.colorSpace),Rt=s.convert(et.type),ot=T(et.internalFormat,Et,Rt,et.colorSpace),dt=yt(M);K&&H(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,ot,M.width,M.height):H(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,ot,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ot,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,tt=yt(M);if(M.depthTexture.format===is)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===po)H(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(R){const M=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Kt(M.__webglFramebuffer,R)}else if(K){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=r.createRenderbuffer(),ft(M.__webglDepthbuffer[Q],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),ft(M.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function B(R,M,K){const Q=n.get(R);M!==void 0&&ut(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&bt(R)}function Ft(R){const M=R.texture,K=n.get(R),Q=n.get(M);R.addEventListener("dispose",D);const tt=R.textures,et=R.isWebGLCubeRenderTarget===!0,Et=tt.length>1,Rt=p(R)||a;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,o.memory.textures++),et){K.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ot]=[];for(let dt=0;dt<M.mipmaps.length;dt++)K.__webglFramebuffer[ot][dt]=r.createFramebuffer()}else K.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)K.__webglFramebuffer[ot]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Et)if(i.drawBuffers)for(let ot=0,dt=tt.length;ot<dt;ot++){const Gt=n.get(tt[ot]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&H(R)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ot=0;ot<tt.length;ot++){const dt=tt[ot];K.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ot]);const Gt=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),ve=T(dt.internalFormat,Gt,nt,dt.colorSpace,R.isXRRenderTarget===!0),Wt=yt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ve,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,K.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),O(r.TEXTURE_CUBE_MAP,M,Rt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ut(K.__webglFramebuffer[ot][dt],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else ut(K.__webglFramebuffer[ot],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(M,Rt)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,dt=tt.length;ot<dt;ot++){const Gt=tt[ot],nt=n.get(Gt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),O(r.TEXTURE_2D,Gt,Rt),ut(K.__webglFramebuffer,R,Gt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),v(Gt,Rt)&&S(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,Q.__webglTexture),O(ot,M,Rt),a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ut(K.__webglFramebuffer[dt],R,M,r.COLOR_ATTACHMENT0,ot,dt);else ut(K.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ot,0);v(M,Rt)&&S(ot),e.unbindTexture()}R.depthBuffer&&bt(R)}function vt(R){const M=p(R)||a,K=R.textures;for(let Q=0,tt=K.length;Q<tt;Q++){const et=K[Q];if(v(et,M)){const Et=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Rt=n.get(et).__webglTexture;e.bindTexture(Et,Rt),S(Et),e.unbindTexture()}}}function Ot(R){if(a&&R.samples>0&&H(R)===!1){const M=R.textures,K=R.width,Q=R.height;let tt=r.COLOR_BUFFER_BIT;const et=[],Et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=n.get(R),ot=M.length>1;if(ot)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){et.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&et.push(Et);const Gt=Rt.__ignoreDepthValues!==void 0?Rt.__ignoreDepthValues:!1;if(Gt===!1&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ot&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]),Gt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Et])),ot){const nt=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,nt,0)}r.blitFramebuffer(0,0,K,Q,0,0,K,Q,tt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]);const Gt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}}function yt(R){return Math.min(i.maxSamples,R.samples)}function H(R){const M=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Vt(R,M){const K=R.colorSpace,Q=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Yu||K!==Cr&&K!==ar&&(de.getTransfer(K)===Ee?a===!1?t.has("EXT_sRGB")===!0&&Q===di?(R.format=Yu,R.minFilter=Mn,R.generateMipmaps=!1):M=Wm.sRGBToLinear(M):(Q!==di||tt!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=C,this.rebindTextures=B,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=H}function jM(r,t,e){const n=e.isWebGL2;function i(s,o=ar){let a;const l=de.getTransfer(o);if(s===_r)return r.UNSIGNED_BYTE;if(s===Im)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Um)return r.UNSIGNED_SHORT_5_5_5_1;if(s===m0)return r.BYTE;if(s===_0)return r.SHORT;if(s===Ph)return r.UNSIGNED_SHORT;if(s===Om)return r.INT;if(s===lr)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===ga)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===g0)return r.ALPHA;if(s===di)return r.RGBA;if(s===v0)return r.LUMINANCE;if(s===x0)return r.LUMINANCE_ALPHA;if(s===is)return r.DEPTH_COMPONENT;if(s===po)return r.DEPTH_STENCIL;if(s===Yu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===E0)return r.RED;if(s===Fm)return r.RED_INTEGER;if(s===S0)return r.RG;if(s===Bm)return r.RG_INTEGER;if(s===km)return r.RGBA_INTEGER;if(s===Pc||s===Dc||s===Nc||s===Oc)if(l===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gf||s===Wf||s===$f||s===Xf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$f)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yf||s===qf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yf)return l===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jf||s===Kf||s===Zf||s===Jf||s===Qf||s===td||s===ed||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qf)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===td)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ed)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nd)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===id)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rd)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sd)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ad)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ld)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ic||s===cd||s===ud)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ic)return l===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ud)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===y0||s===hd||s===fd||s===dd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ns?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class KM extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yo extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new xn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Sr({extensions:{fragDepth:!0},vertexShader:JM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new hc(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class eb extends Co{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new tb,m=e.getContextAttributes();let p=null,x=null;const v=[],S=[],T=new Qt;let b=null;const y=new Fn;y.layers.enable(1),y.viewport=new be;const L=new Fn;L.layers.enable(2),L.viewport=new be;const D=[y,L],E=new KM;E.layers.enable(1),E.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=v[O];return Z===void 0&&(Z=new ou,v[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=v[O];return Z===void 0&&(Z=new ou,v[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=v[O];return Z===void 0&&(Z=new ou,v[O]=Z),Z.getHandSpace()};function Y(O){const Z=S.indexOf(O.inputSource);if(Z===-1)return;const rt=v[Z];rt!==void 0&&(rt.update(O.inputSource,O.frame,c||o),rt.dispatchEvent({type:O.type,data:O.inputSource}))}function P(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",W);for(let O=0;O<v.length;O++){const Z=S[O];Z!==null&&(S[O]=null,v[O].disconnect(Z))}w=null,I=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,x=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",P),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new fs(d.framebufferWidth,d.framebufferHeight,{format:di,type:_r,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,rt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?po:is,rt=m.stencil?ns:lr);const ut={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new fs(f.textureWidth,f.textureHeight,{format:di,type:_r,depthTexture:new e_(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const ft=t.properties.get(x);ft.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(O){for(let Z=0;Z<O.removed.length;Z++){const rt=O.removed[Z],gt=S.indexOf(rt);gt>=0&&(S[gt]=null,v[gt].disconnect(rt))}for(let Z=0;Z<O.added.length;Z++){const rt=O.added[Z];let gt=S.indexOf(rt);if(gt===-1){for(let ft=0;ft<v.length;ft++)if(ft>=S.length){S.push(rt),gt=ft;break}else if(S[ft]===null){S[ft]=rt,gt=ft;break}if(gt===-1)break}const ut=v[gt];ut&&ut.connect(rt)}}const U=new k,z=new k;function G(O,Z,rt){U.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(rt.matrixWorld);const gt=U.distanceTo(z),ut=Z.projectionMatrix.elements,ft=rt.projectionMatrix.elements,Kt=ut[14]/(ut[10]-1),bt=ut[14]/(ut[10]+1),B=(ut[9]+1)/ut[5],Ft=(ut[9]-1)/ut[5],vt=(ut[8]-1)/ut[0],Ot=(ft[8]+1)/ft[0],yt=Kt*vt,H=Kt*Ot,It=gt/(-vt+Ot),Vt=It*-vt;Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Vt),O.translateZ(It),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const te=Kt+It,R=bt+It,M=yt-Vt,K=H+(gt-Vt),Q=B*bt/R*te,tt=Ft*bt/R*te;O.projectionMatrix.makePerspective(M,K,Q,tt,te,R),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function j(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;_.texture!==null&&(O.near=_.depthNear,O.far=_.depthFar),E.near=L.near=y.near=O.near,E.far=L.far=y.far=O.far,(w!==E.near||I!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,I=E.far,y.near=w,y.far=I,L.near=w,L.far=I,y.updateProjectionMatrix(),L.updateProjectionMatrix(),O.updateProjectionMatrix());const Z=O.parent,rt=E.cameras;j(E,Z);for(let gt=0;gt<rt.length;gt++)j(rt[gt],Z);rt.length===2?G(E,y,L):E.projectionMatrix.copy(y.projectionMatrix),C(O,E,Z)};function C(O,Z,rt){rt===null?O.matrix.copy(Z.matrixWorld):(O.matrix.copy(rt.matrixWorld),O.matrix.invert(),O.matrix.multiply(Z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=va*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null};let J=null;function it(O,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let gt=!1;rt.length!==E.cameras.length&&(E.cameras.length=0,gt=!0);for(let ft=0;ft<rt.length;ft++){const Kt=rt[ft];let bt=null;if(d!==null)bt=d.getViewport(Kt);else{const Ft=h.getViewSubImage(f,Kt);bt=Ft.viewport,ft===0&&(t.setRenderTargetTextures(x,Ft.colorTexture,f.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(x))}let B=D[ft];B===void 0&&(B=new Fn,B.layers.enable(ft),B.viewport=new be,D[ft]=B),B.matrix.fromArray(Kt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Kt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(bt.x,bt.y,bt.width,bt.height),ft===0&&(E.matrix.copy(B.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),gt===!0&&E.cameras.push(B)}const ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const ft=h.getDepthInformation(rt[0]);ft&&ft.isValid&&ft.texture&&_.init(t,ft,i.renderState)}}for(let rt=0;rt<v.length;rt++){const gt=S[rt],ut=v[rt];gt!==null&&ut!==void 0&&ut.update(gt,Z,c||o)}_.render(t,E),J&&J(O,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const xt=new Qm;xt.setAnimationLoop(it),this.setAnimationLoop=function(O){J=O},this.dispose=function(){}}}const zr=new Li,nb=new Le;function ib(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,S=x.envMapRotation;if(v&&(m.envMap.value=v,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(zr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rb(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(g(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(x,T);const b=t.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const S=r.createBuffer(),T=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],S=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,y=S.length;b<y;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let D=0,E=L.length;D<E;D++){const w=L[D];if(d(w,b,D,T)===!0){const I=w.__offset,Y=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let W=0;W<Y.length;W++){const U=Y[W],z=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,I+P,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,P),P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,S,T){const b=x.value,y=v+"_"+S;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{const L=T[y];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return T[y]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(x){const v=x.uniforms;let S=0;const T=16;for(let y=0,L=v.length;y<L;y++){const D=Array.isArray(v[y])?v[y]:[v[y]];for(let E=0,w=D.length;E<w;E++){const I=D[E],Y=Array.isArray(I.value)?I.value:[I.value];for(let P=0,W=Y.length;P<W;P++){const U=Y[P],z=_(U),G=S%T;G!==0&&T-G<z.boundary&&(S+=T-G),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=z.storage}}}const b=S%T;return b>0&&(S+=T-b),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class a_{constructor(t={}){const{canvas:e=Y0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let S=!1,T=0,b=0,y=null,L=-1,D=null;const E=new be,w=new be;let I=null;const Y=new ce(0);let P=0,W=e.width,U=e.height,z=1,G=null,j=null;const C=new be(0,0,W,U),J=new be(0,0,W,U);let it=!1;const xt=new Bh;let O=!1,Z=!1,rt=null;const gt=new Le,ut=new Qt,ft=new k,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return y===null?z:1}let B=n;function Ft(A,F){for(let q=0;q<A.length;q++){const $=A[q],V=e.getContext($,F);if(V!==null)return V}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lh}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",ct,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),B=Ft(F,A),B===null)throw Ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,Ot,yt,H,It,Vt,te,R,M,K,Q,tt,et,Et,Rt,ot,dt,Gt,nt,ve,Wt,Dt,Tt,Mt;function jt(){vt=new uy(B),Ot=new ry(B,vt,t),vt.init(Ot),Dt=new jM(B,vt,Ot),yt=new YM(B,vt,Ot),H=new dy(B),It=new NM,Vt=new qM(B,vt,yt,It,Ot,Dt,H),te=new oy(v),R=new cy(v),M=new xx(B,Ot),Tt=new ny(B,vt,M,Ot),K=new hy(B,M,H,Tt),Q=new gy(B,K,M,H),nt=new _y(B,Ot,Vt),ot=new sy(It),tt=new DM(v,te,R,vt,Ot,Tt,ot),et=new ib(v,It),Et=new IM,Rt=new HM(vt,Ot),Gt=new ey(v,te,R,yt,Q,f,l),dt=new XM(v,Q,Ot),Mt=new rb(B,H,Ot,yt),ve=new iy(B,vt,H,Ot),Wt=new fy(B,vt,H,Ot),H.programs=tt.programs,v.capabilities=Ot,v.extensions=vt,v.properties=It,v.renderLists=Et,v.shadowMap=dt,v.state=yt,v.info=H}jt();const pt=new eb(v,B);this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(W,U,!1))},this.getSize=function(A){return A.set(W,U)},this.setSize=function(A,F,q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,U=F,e.width=Math.floor(A*z),e.height=Math.floor(F*z),q===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(W*z,U*z).floor()},this.setDrawingBufferSize=function(A,F,q){W=A,U=F,z=q,e.width=Math.floor(A*q),e.height=Math.floor(F*q),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,F,q,$){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,F,q,$),yt.viewport(E.copy(C).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,F,q,$){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,F,q,$),yt.scissor(w.copy(J).multiplyScalar(z).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){yt.setScissorTest(it=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(A=!0,F=!0,q=!0){let $=0;if(A){let V=!1;if(y!==null){const ht=y.texture.format;V=ht===km||ht===Bm||ht===Fm}if(V){const ht=y.texture.type,At=ht===_r||ht===lr||ht===Ph||ht===ns||ht===Im||ht===Um,kt=Gt.getClearColor(),Ct=Gt.getClearAlpha(),Pt=kt.r,zt=kt.g,qt=kt.b;At?(d[0]=Pt,d[1]=zt,d[2]=qt,d[3]=Ct,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=Pt,g[1]=zt,g[2]=qt,g[3]=Ct,B.clearBufferiv(B.COLOR,0,g))}else $|=B.COLOR_BUFFER_BIT}F&&($|=B.DEPTH_BUFFER_BIT),q&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Et.dispose(),Rt.dispose(),It.dispose(),te.dispose(),R.dispose(),Q.dispose(),Tt.dispose(),Mt.dispose(),tt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",wt),pt.removeEventListener("sessionend",Nt),rt&&(rt.dispose(),rt=null),lt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=H.autoReset,F=dt.enabled,q=dt.autoUpdate,$=dt.needsUpdate,V=dt.type;jt(),H.autoReset=A,dt.enabled=F,dt.autoUpdate=q,dt.needsUpdate=$,dt.type=V}function ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function X(A){const F=A.target;F.removeEventListener("dispose",X),at(F)}function at(A){_t(A),It.remove(A)}function _t(A){const F=It.get(A).programs;F!==void 0&&(F.forEach(function(q){tt.releaseProgram(q)}),A.isShaderMaterial&&tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,q,$,V,ht){F===null&&(F=Kt);const At=V.isMesh&&V.matrixWorld.determinant()<0,kt=_e(A,F,q,$,V);yt.setMaterial($,At);let Ct=q.index,Pt=1;if($.wireframe===!0){if(Ct=K.getWireframeAttribute(q),Ct===void 0)return;Pt=2}const zt=q.drawRange,qt=q.attributes.position;let ye=zt.start*Pt,Be=(zt.start+zt.count)*Pt;ht!==null&&(ye=Math.max(ye,ht.start*Pt),Be=Math.min(Be,(ht.start+ht.count)*Pt)),Ct!==null?(ye=Math.max(ye,0),Be=Math.min(Be,Ct.count)):qt!=null&&(ye=Math.max(ye,0),Be=Math.min(Be,qt.count));const he=Be-ye;if(he<0||he===1/0)return;Tt.setup(V,$,kt,q,Ct);let on,fe=ve;if(Ct!==null&&(on=M.get(Ct),fe=Wt,fe.setIndex(on)),V.isMesh)$.wireframe===!0?(yt.setLineWidth($.wireframeLinewidth*bt()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(V.isLine){let Xt=$.linewidth;Xt===void 0&&(Xt=1),yt.setLineWidth(Xt*bt()),V.isLineSegments?fe.setMode(B.LINES):V.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else V.isPoints?fe.setMode(B.POINTS):V.isSprite&&fe.setMode(B.TRIANGLES);if(V.isBatchedMesh)fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)fe.renderInstances(ye,he,V.count);else if(q.isInstancedBufferGeometry){const Xt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ac=Math.min(q.instanceCount,Xt);fe.renderInstances(ye,he,Ac)}else fe.render(ye,he)};function $t(A,F,q){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,me(A,F,q),A.side=Er,A.needsUpdate=!0,me(A,F,q),A.side=xi):me(A,F,q)}this.compile=function(A,F,q=null){q===null&&(q=A),m=Rt.get(q),m.init(),x.push(m),q.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);const $=new Set;return A.traverse(function(V){const ht=V.material;if(ht)if(Array.isArray(ht))for(let At=0;At<ht.length;At++){const kt=ht[At];$t(kt,q,V),$.add(kt)}else $t(ht,q,V),$.add(ht)}),x.pop(),m=null,$},this.compileAsync=function(A,F,q=null){const $=this.compile(A,F,q);return new Promise(V=>{function ht(){if($.forEach(function(At){It.get(At).currentProgram.isReady()&&$.delete(At)}),$.size===0){V(A);return}setTimeout(ht,10)}vt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let le=null;function Lt(A){le&&le(A)}function wt(){lt.stop()}function Nt(){lt.start()}const lt=new Qm;lt.setAnimationLoop(Lt),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(A){le=A,pt.setAnimationLoop(A),A===null?lt.stop():lt.start()},pt.addEventListener("sessionstart",wt),pt.addEventListener("sessionend",Nt),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,y),m=Rt.get(A,x.length),m.init(),x.push(m),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),xt.setFromProjectionMatrix(gt),Z=this.localClippingEnabled,O=ot.init(this.clippingPlanes,Z),_=Et.get(A,p.length),_.init(),p.push(_),Bt(A,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,j),this.info.render.frame++,O===!0&&ot.beginShadows();const q=m.state.shadowsArray;if(dt.render(q,A,F),O===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1)&&Gt.render(_,A),m.setupLights(v._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let V=0,ht=$.length;V<ht;V++){const At=$[V];Ut(_,A,At,At.viewport)}}else Ut(_,A,F);y!==null&&(Vt.updateMultisampleRenderTarget(y),Vt.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(v,A,F),Tt.resetDefaultState(),L=-1,D=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Bt(A,F,q,$){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){$&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const At=Q.update(A),kt=A.material;kt.visible&&_.push(A,At,kt,q,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const At=Q.update(A),kt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ft.copy(At.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(kt)){const Ct=At.groups;for(let Pt=0,zt=Ct.length;Pt<zt;Pt++){const qt=Ct[Pt],ye=kt[qt.materialIndex];ye&&ye.visible&&_.push(A,At,ye,q,ft.z,qt)}}else kt.visible&&_.push(A,At,kt,q,ft.z,null)}}const ht=A.children;for(let At=0,kt=ht.length;At<kt;At++)Bt(ht[At],F,q,$)}function Ut(A,F,q,$){const V=A.opaque,ht=A.transmissive,At=A.transparent;m.setupLightsView(q),O===!0&&ot.setGlobalState(v.clippingPlanes,q),ht.length>0&&Yt(V,ht,F,q),$&&yt.viewport(E.copy($)),V.length>0&&Ae(V,F,q),ht.length>0&&Ae(ht,F,q),At.length>0&&Ae(At,F,q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Yt(A,F,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ht=Ot.isWebGL2;rt===null&&(rt=new fs(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?ga:_r,minFilter:Zr,samples:ht?4:0})),v.getDrawingBufferSize(ut),ht?rt.setSize(ut.x,ut.y):rt.setSize(Xl(ut.x),Xl(ut.y));const At=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(Y),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const kt=v.toneMapping;v.toneMapping=mr,Ae(A,q,$),Vt.updateMultisampleRenderTarget(rt),Vt.updateRenderTargetMipmap(rt);let Ct=!1;for(let Pt=0,zt=F.length;Pt<zt;Pt++){const qt=F[Pt],ye=qt.object,Be=qt.geometry,he=qt.material,on=qt.group;if(he.side===xi&&ye.layers.test($.layers)){const fe=he.side;he.side=Tn,he.needsUpdate=!0,ee(ye,q,$,Be,he,on),he.side=fe,he.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(rt),Vt.updateRenderTargetMipmap(rt)),v.setRenderTarget(At),v.setClearColor(Y,P),v.toneMapping=kt}function Ae(A,F,q){const $=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ht=A.length;V<ht;V++){const At=A[V],kt=At.object,Ct=At.geometry,Pt=$===null?At.material:$,zt=At.group;kt.layers.test(q.layers)&&ee(kt,F,q,Ct,Pt,zt)}}function ee(A,F,q,$,V,ht){A.onBeforeRender(v,F,q,$,V,ht),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,F,q,$,A,ht),V.transparent===!0&&V.side===xi&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,v.renderBufferDirect(q,F,$,V,A,ht),V.side=Er,V.needsUpdate=!0,v.renderBufferDirect(q,F,$,V,A,ht),V.side=xi):v.renderBufferDirect(q,F,$,V,A,ht),A.onAfterRender(v,F,q,$,V,ht)}function me(A,F,q){F.isScene!==!0&&(F=Kt);const $=It.get(A),V=m.state.lights,ht=m.state.shadowsArray,At=V.state.version,kt=tt.getParameters(A,V.state,ht,F,q),Ct=tt.getProgramCacheKey(kt);let Pt=$.programs;$.environment=A.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(A.isMeshStandardMaterial?R:te).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Pt===void 0&&(A.addEventListener("dispose",X),Pt=new Map,$.programs=Pt);let zt=Pt.get(Ct);if(zt!==void 0){if($.currentProgram===zt&&$.lightsStateVersion===At)return xe(A,kt),zt}else kt.uniforms=tt.getUniforms(A),A.onBuild(q,kt,v),A.onBeforeCompile(kt,v),zt=tt.acquireProgram(kt,Ct),Pt.set(Ct,zt),$.uniforms=kt.uniforms;const qt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=ot.uniform),xe(A,kt),$.needsLights=Pn(A),$.lightsStateVersion=At,$.needsLights&&(qt.ambientLightColor.value=V.state.ambient,qt.lightProbe.value=V.state.probe,qt.directionalLights.value=V.state.directional,qt.directionalLightShadows.value=V.state.directionalShadow,qt.spotLights.value=V.state.spot,qt.spotLightShadows.value=V.state.spotShadow,qt.rectAreaLights.value=V.state.rectArea,qt.ltc_1.value=V.state.rectAreaLTC1,qt.ltc_2.value=V.state.rectAreaLTC2,qt.pointLights.value=V.state.point,qt.pointLightShadows.value=V.state.pointShadow,qt.hemisphereLights.value=V.state.hemi,qt.directionalShadowMap.value=V.state.directionalShadowMap,qt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qt.spotShadowMap.value=V.state.spotShadowMap,qt.spotLightMatrix.value=V.state.spotLightMatrix,qt.spotLightMap.value=V.state.spotLightMap,qt.pointShadowMap.value=V.state.pointShadowMap,qt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=zt,$.uniformsList=null,zt}function Fe(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function xe(A,F){const q=It.get(A);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function _e(A,F,q,$,V){F.isScene!==!0&&(F=Kt),Vt.resetTextureUnits();const ht=F.fog,At=$.isMeshStandardMaterial?F.environment:null,kt=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Cr,Ct=($.isMeshStandardMaterial?R:te).get($.envMap||At),Pt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!q.morphAttributes.position,ye=!!q.morphAttributes.normal,Be=!!q.morphAttributes.color;let he=mr;$.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(he=v.toneMapping);const on=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=on!==void 0?on.length:0,Xt=It.get($),Ac=m.state.lights;if(O===!0&&(Z===!0||A!==D)){const Yn=A===D&&$.id===L;ot.setState($,A,Yn)}let Me=!1;$.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ac.state.version||Xt.outputColorSpace!==kt||V.isBatchedMesh&&Xt.batching===!1||!V.isBatchedMesh&&Xt.batching===!0||V.isInstancedMesh&&Xt.instancing===!1||!V.isInstancedMesh&&Xt.instancing===!0||V.isSkinnedMesh&&Xt.skinning===!1||!V.isSkinnedMesh&&Xt.skinning===!0||V.isInstancedMesh&&Xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xt.instancingMorph===!1&&V.morphTexture!==null||Xt.envMap!==Ct||$.fog===!0&&Xt.fog!==ht||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ot.numPlanes||Xt.numIntersection!==ot.numIntersection)||Xt.vertexAlphas!==Pt||Xt.vertexTangents!==zt||Xt.morphTargets!==qt||Xt.morphNormals!==ye||Xt.morphColors!==Be||Xt.toneMapping!==he||Ot.isWebGL2===!0&&Xt.morphTargetsCount!==fe)&&(Me=!0):(Me=!0,Xt.__version=$.version);let Nr=Xt.currentProgram;Me===!0&&(Nr=me($,F,V));let Of=!1,Io=!1,wc=!1;const Ke=Nr.getUniforms(),Or=Xt.uniforms;if(yt.useProgram(Nr.program)&&(Of=!0,Io=!0,wc=!0),$.id!==L&&(L=$.id,Io=!0),Of||D!==A){Ke.setValue(B,"projectionMatrix",A.projectionMatrix),Ke.setValue(B,"viewMatrix",A.matrixWorldInverse);const Yn=Ke.map.cameraPosition;Yn!==void 0&&Yn.setValue(B,ft.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&Ke.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ke.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Io=!0,wc=!0)}if(V.isSkinnedMesh){Ke.setOptional(B,V,"bindMatrix"),Ke.setOptional(B,V,"bindMatrixInverse");const Yn=V.skeleton;Yn&&(Ot.floatVertexTextures?(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ke.setValue(B,"boneTexture",Yn.boneTexture,Vt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ke.setOptional(B,V,"batchingTexture"),Ke.setValue(B,"batchingTexture",V._matricesTexture,Vt));const Cc=q.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&Ot.isWebGL2===!0)&&nt.update(V,q,Nr),(Io||Xt.receiveShadow!==V.receiveShadow)&&(Xt.receiveShadow=V.receiveShadow,Ke.setValue(B,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Or.envMap.value=Ct,Or.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Io&&(Ke.setValue(B,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&ue(Or,wc),ht&&$.fog===!0&&et.refreshFogUniforms(Or,ht),et.refreshMaterialUniforms(Or,$,z,U,rt),Cl.upload(B,Fe(Xt),Or,Vt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cl.upload(B,Fe(Xt),Or,Vt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ke.setValue(B,"center",V.center),Ke.setValue(B,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(B,"normalMatrix",V.normalMatrix),Ke.setValue(B,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Yn=$.uniformsGroups;for(let Rc=0,Ov=Yn.length;Rc<Ov;Rc++)if(Ot.isWebGL2){const If=Yn[Rc];Mt.update(If,Nr),Mt.bind(If,Nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nr}function ue(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Pn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,F,q){It.get(A.texture).__webglTexture=F,It.get(A.depthTexture).__webglTexture=q;const $=It.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const q=It.get(A);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,q=0){y=A,T=F,b=q;let $=!0,V=null,ht=!1,At=!1;if(A){const Ct=It.get(A);Ct.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(B.FRAMEBUFFER,null),$=!1):Ct.__webglFramebuffer===void 0?Vt.setupRenderTarget(A):Ct.__hasExternalTextures&&Vt.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);const Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(At=!0);const zt=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?V=zt[F][q]:V=zt[F],ht=!0):Ot.isWebGL2&&A.samples>0&&Vt.useMultisampledRTT(A)===!1?V=It.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[q]:V=zt,E.copy(A.viewport),w.copy(A.scissor),I=A.scissorTest}else E.copy(C).multiplyScalar(z).floor(),w.copy(J).multiplyScalar(z).floor(),I=it;if(yt.bindFramebuffer(B.FRAMEBUFFER,V)&&Ot.drawBuffers&&$&&yt.drawBuffers(A,V),yt.viewport(E),yt.scissor(w),yt.setScissorTest(I),ht){const Ct=It.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,q)}else if(At){const Ct=It.get(A.texture),Pt=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,q||0,Pt)}L=-1},this.readRenderTargetPixels=function(A,F,q,$,V,ht,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(kt=kt[At]),kt){yt.bindFramebuffer(B.FRAMEBUFFER,kt);try{const Ct=A.texture,Pt=Ct.format,zt=Ct.type;if(Pt!==di&&Dt.convert(Pt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=zt===ga&&(vt.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&vt.has("EXT_color_buffer_float"));if(zt!==_r&&Dt.convert(zt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Hi&&(Ot.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-$&&q>=0&&q<=A.height-V&&B.readPixels(F,q,$,V,Dt.convert(Pt),Dt.convert(zt),ht)}finally{const Ct=y!==null?It.get(y).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(A,F,q=0){const $=Math.pow(2,-q),V=Math.floor(F.image.width*$),ht=Math.floor(F.image.height*$);Vt.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,A.x,A.y,V,ht),yt.unbindTexture()},this.copyTextureToTexture=function(A,F,q,$=0){const V=F.image.width,ht=F.image.height,At=Dt.convert(q.format),kt=Dt.convert(q.type);Vt.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,A.x,A.y,V,ht,At,kt,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,At,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,$,A.x,A.y,At,kt,F.image),$===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(A,F,q,$,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=Math.round(A.max.x-A.min.x),At=Math.round(A.max.y-A.min.y),kt=A.max.z-A.min.z+1,Ct=Dt.convert($.format),Pt=Dt.convert($.type);let zt;if($.isData3DTexture)Vt.setTexture3D($,0),zt=B.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Vt.setTexture2DArray($,0),zt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const qt=B.getParameter(B.UNPACK_ROW_LENGTH),ye=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Be=B.getParameter(B.UNPACK_SKIP_PIXELS),he=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES),fe=q.isCompressedTexture?q.mipmaps[V]:q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(zt,V,F.x,F.y,F.z,ht,At,kt,Ct,Pt,fe.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,V,F.x,F.y,F.z,ht,At,kt,Ct,fe.data):B.texSubImage3D(zt,V,F.x,F.y,F.z,ht,At,kt,Ct,Pt,fe),B.pixelStorei(B.UNPACK_ROW_LENGTH,qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,he),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),V===0&&$.generateMipmaps&&B.generateMipmap(zt),yt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){T=0,b=0,y=null,yt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Dh?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===uc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sb extends a_{}sb.prototype.isWebGL1Renderer=!0;class ob extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zh extends Zi{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Hn(s,3)),this.setAttribute("normal",new Hn(s.slice(),3)),this.setAttribute("uv",new Hn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new k,S=new k,T=new k;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],S),d(e[b+2],T),l(v,S,T,x)}function l(x,v,S,T){const b=T+1,y=[];for(let L=0;L<=b;L++){y[L]=[];const D=x.clone().lerp(S,L/b),E=v.clone().lerp(S,L/b),w=b-L;for(let I=0;I<=w;I++)I===0&&L===b?y[L][I]=D:y[L][I]=D.clone().lerp(E,I/w)}for(let L=0;L<b;L++)for(let D=0;D<2*(b-L)-1;D++){const E=Math.floor(D/2);D%2===0?(f(y[L][E+1]),f(y[L+1][E]),f(y[L][E])):(f(y[L][E+1]),f(y[L+1][E+1]),f(y[L+1][E]))}}function c(x){const v=new k;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const x=new k;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(S,1-T)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],T=o[x+4],b=Math.max(v,S,T),y=Math.min(v,S,T);b>.9&&y<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new k,v=new k,S=new k,T=new k,b=new Qt,y=new Qt,L=new Qt;for(let D=0,E=0;D<s.length;D+=9,E+=6){x.set(s[D+0],s[D+1],s[D+2]),v.set(s[D+3],s[D+4],s[D+5]),S.set(s[D+6],s[D+7],s[D+8]),b.set(o[E+0],o[E+1]),y.set(o[E+2],o[E+3]),L.set(o[E+4],o[E+5]),T.copy(x).add(v).add(S).divideScalar(3);const w=m(T);_(b,E+0,x,w),_(y,E+2,v,w),_(L,E+4,S,w)}}function _(x,v,S,T){T<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zh(t.vertices,t.indices,t.radius,t.details)}}class Hh extends zh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hh(t.radius,t.detail)}}class Vh extends Zi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){const b=T/e;h.x=-t*Math.cos(i+b*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+b*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(b+S,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=u[p][x+1],S=u[p][x],T=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&d.push(v,S,b),(p!==n-1||l<Math.PI)&&d.push(S,T,b)}this.setIndex(d),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ab extends Na{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lb{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const cb=new lb;class dc{constructor(t){this.manager=t!==void 0?t:cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dc.DEFAULT_MATERIAL_NAME="__DEFAULT";class l_ extends dc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=sp.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=xa("img");function l(){u(),sp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ub extends dc{constructor(t){super(t)}load(t,e,n,i){const s=new Fh;s.colorSpace=mn;const o=new l_(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class hb extends dc{constructor(t){super(t)}load(t,e,n,i){const s=new xn,o=new l_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Gh extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const au=new Le,op=new k,ap=new k;class c_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;op.setFromMatrixPosition(t.matrixWorld),e.position.copy(op),ap.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ap),e.updateMatrixWorld(),au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(au)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lp=new Le,Ho=new k,lu=new k;class fb extends c_{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ho),lu.copy(n.position),lu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lu),n.updateMatrixWorld(),i.makeTranslation(-Ho.x,-Ho.y,-Ho.z),lp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}}class db extends Gh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pb extends c_{constructor(){super(new t_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mb extends Gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new pb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _b extends Gh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=cp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cp(){return(typeof performance>"u"?Date:performance).now()}const up=new Le;class vb{constructor(t,e,n=0,i=1/0){this.ray=new Ym(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return up.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(up),this}intersectObject(t,e=!0,n=[]){return Ku(t,this,n,e),n.sort(hp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ku(t[i],this,n,e);return n.sort(hp),n}}function hp(r,t){return r.distance-t.distance}function Ku(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ku(i[s],t,e,!0)}}class xb{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class Ti{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ti.nextNameID=Ti.nextNameID||0,this.$name.id=`lil-gui-name-${++Ti.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Eb extends Ti{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Zu(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Sb={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Zu,toHexString:Zu},Ea={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},yb={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=Ea.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ea.toHexString(i)}},Mb={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Ea.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ea.toHexString(i)}},bb=[Sb,Ea,yb,Mb];function Tb(r){return bb.find(t=>t.match(r))}class Ab extends Ti{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Tb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Zu(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class cu extends Ti{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class wb extends Ti{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,h;const f=5,d=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-a,S=x.clientY-l;Math.abs(S)>f?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>f&&_()}if(!o){const v=x.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,x,v,S,T)=>(p-x)/(v-x)*(T-S)+S,e=p=>{const x=this.$slider.getBoundingClientRect();let v=t(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const x=p.touches[0].clientX-a,v=p.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),e(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Cb extends Ti{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.innerHTML=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Rb extends Ti{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Lb=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Pb(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let fp=!1;class Wh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!fp&&a&&(Pb(Lb),fp=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,s){if(Object(n)===n)return new Cb(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new wb(this,t,e,n,i,s);case"boolean":return new Eb(this,t,e);case"string":return new Rb(this,t,e);case"function":return new cu(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Ab(this,t,e,n)}addFolder(t){const e=new Wh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof cu||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof cu)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Db=Wh;function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function u_(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_o={duration:.5,overwrite:!1,delay:0},$h,rn,Te,Jn=1e8,ge=1/Jn,Ju=Math.PI*2,Nb=Ju/4,Ob=0,h_=Math.sqrt,Ib=Math.cos,Ub=Math.sin,Ye=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},qi=function(t){return typeof t=="number"},Xh=function(t){return typeof t>"u"},Pi=function(t){return typeof t=="object"},An=function(t){return t!==!1},Yh=function(){return typeof window<"u"},ll=function(t){return Pe(t)||Ye(t)},f_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Qu=/(?:-?\.?\d|\.)+/gi,d_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,p_=/[+-]=-?[.\d]+/,m_=/[^,'"\[\]\s]+/gi,Fb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,_i,th,qh,Gn={},Yl={},__,g_=function(t){return(Yl=ds(t,Gn))&&Ln},jh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Sa=function(t,e){return!e&&console.warn(t)},v_=function(t,e){return t&&(Gn[t]=e)&&Yl&&(Yl[t]=e)||Gn},ya=function(){return 0},Bb={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},kb={suppressEvents:!0},Kh={},gr=[],eh={},x_,Un={},hu={},dp=30,Ll=[],Zh="",Jh=function(t){var e=t[0],n,i;if(Pi(e)||Pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(e););n=Ll[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new G_(t[i],n)))||t.splice(i,1);return t},rs=function(t){return t._gsap||Jh(Qn(t))[0]._gsap},E_=function(t,e,n){return(n=t[e])&&Pe(n)?t[e]():Xh(n)&&t.getAttribute&&t.getAttribute(e)||n},wn=function(t,e){return(t=t.split(",")).forEach(e)||t},De=function(t){return Math.round(t*1e5)/1e5||0},Xe=function(t){return Math.round(t*1e7)/1e7||0},so=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ql=function(){var t=gr.length,e=gr.slice(0),n,i;for(eh={},gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},S_=function(t,e,n,i){gr.length&&!rn&&ql(),t.render(e,n,i||rn&&e<0&&(t._initted||t._startAt)),gr.length&&!rn&&ql()},y_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(m_).length<2?e:Ye(t)?t.trim():t},M_=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ds=function(t,e){for(var n in e)t[n]=e[n];return t},pp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},jl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ia=function(t){var e=t.parent||Ce,n=t.keyframes?Hb(sn(t.keyframes)):ni;if(An(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},b_=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},pc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},yr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nh=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(Rl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Wb=function r(t){return!t||t._ts&&r(t.parent)},mp=function(t){return t._repeat?go(t._tTime,t=t.duration()+t._rDelay)*t:0},go=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Kl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},mc=function(t){return t._end=Xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ge)||0))},_c=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),mc(t),n._dirty||ss(n,t)),t},T_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Kl(t.rawTime(),e),(!e._dur||Ia(0,e.totalDuration(),n)-e._tTime>ge)&&e.render(n,!0)),ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ge}},Si=function(t,e,n,i){return e.parent&&yr(e),e._start=Xe((qi(n)?n:n||t!==Ce?jn(t,n,e):t._time)+e._delay),e._end=Xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),b_(t,e,"_first","_last",t._sort?"_start":0),ih(e)||(t._recent=e),i||T_(t,e),t._ts<0&&_c(t,t._tTime),t},A_=function(t,e){return(Gn.ScrollTrigger||jh("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},w_=function(t,e,n,i,s){if(tf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&x_!==Bn.frame)return gr.push(t),t._lazy=[s,i],1},$b=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ih=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xb=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&$b(t)&&!(!t._initted&&ih(t))||(t._ts<0||t._dp._ts<0)&&!ih(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Ia(0,t._tDur,e),u=go(l,a),t._yoyo&&u&1&&(o=1-o),u!==go(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===ge||!e&&t._zTime){if(!t._initted&&w_(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ge:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&nh(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&yr(t,1),!n&&!rn&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},vo=function(t,e,n,i){var s=t._repeat,o=Xe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Xe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&_c(t,t._tTime=t._tDur*a),t.parent&&mc(t),n||ss(t.parent,t),t},_p=function(t){return t instanceof _n?ss(t):vo(t,t._dur)},qb={_start:0,endTime:ya,totalDuration:ya},jn=function r(t,e,n){var i=t.labels,s=t._recent||qb,o=t.duration()>=Jn?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ra=function(t,e,n){var i=qi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ue(e[0],o,e[s+1])},Rr=function(t,e){return t||t===0?e(t):e},Ia=function(t,e,n){return n<t?t:n>e?e:n},nn=function(t,e){return!Ye(t)||!(e=Fb.exec(t))?"":e[1]},jb=function(t,e,n){return Rr(n,function(i){return Ia(t,e,i)})},rh=[].slice,C_=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==_i},Kb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||C_(i,1)?(s=n).push.apply(s,Qn(i)):n.push(i)})||n},Qn=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):Ye(t)&&!n&&(th||!xo())?rh.call((e||qh).querySelectorAll(t),0):sn(t)?Kb(t,n):C_(t)?rh.call(t,0):t?[t]:[]},sh=function(t){return t=Qn(t)[0]||Sa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Qn(e,n.querySelectorAll?n:n===t?Sa("Invalid scope")||qh.createElement("div"):t)}},R_=function(t){return t.sort(function(){return .5-Math.random()})},L_=function(t){if(Pe(t))return t;var e=Pi(t)?t:{each:t},n=os(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Ye(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,x,v,S,T,b,y,L,D;if(!m){if(D=e.grid==="auto"?0:(e.grid||[1,Jn])[1],!D){for(y=-Jn;y<(y=g[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(m=o[_]=[],p=l?Math.min(D,_)*u-.5:i%D,x=D===Jn?0:l?_*h/D-.5:i/D|0,y=0,L=Jn,b=0;b<_;b++)v=b%D-p,S=x-(b/D|0),m[b]=T=c?Math.abs(c==="y"?S:v):h_(v*v+S*S),T>y&&(y=T),T<L&&(L=T);i==="random"&&R_(m),m.max=y-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(D>_?_-1:c?c==="y"?_/D:D:Math.max(D,_/D))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=nn(e.amount||e.each)||0,n=n&&_<0?z_(n):n}return _=(m[f]-m.min)/m.max||0,Xe(m.b+(n?n(_):_)*m.v)+m.u}},oh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Xe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qi(n)?0:nn(n))}},P_=function(t,e){var n=sn(t),i,s;return!n&&Pi(t)&&(i=n=t.radius||Jn,t.values?(t=Qn(t.values),(s=!qi(t[0]))&&(i*=i)):t=oh(t.increment)),Rr(e,n?Pe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Jn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||qi(o)?u:u+nn(o)}:oh(t))},D_=function(t,e,n,i){return Rr(sn(t)?!e:n===!0?!!(n=0):!i,function(){return sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Zb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Jb=function(t,e){return function(n){return t(parseFloat(n))+(e||nn(n))}},Qb=function(t,e,n){return O_(t,e,0,1,n)},N_=function(t,e,n){return Rr(n,function(i){return t[~~e(i)]})},tT=function r(t,e,n){var i=e-t;return sn(t)?N_(t,r(0,t.length),e):Rr(n,function(s){return(i+(s-t)%i)%i+t})},eT=function r(t,e,n){var i=e-t,s=i*2;return sn(t)?N_(t,r(0,t.length-1),e):Rr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ma=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?m_:Qu),n+=t.substr(e,i-e)+D_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},O_=function(t,e,n,i,s){var o=e-t,a=i-n;return Rr(s,function(l){return n+((l-t)/o*a||0)})},nT=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ye(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(sn(t)&&!sn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=ds(sn(t)?[]:{},t));if(!u){for(l in e)Qh.call(a,t,l,"get",e[l]);s=function(g){return rf(g,a)||(o?t.p:t)}}}return Rr(n,s)},gp=function(t,e,n){var i=t.labels,s=Jn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=Te,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&gr.length&&ql(),a&&(Te=a),u=l?s.apply(c,l):s.call(c),Te=o,u},qo=function(t){return yr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&zn(t,"onInterrupt"),t},to,I_=[],U_=function(t){if(t)if(t=!t.name&&t.default||t,Yh()||t.headless){var e=t.name,n=Pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ya,render:rf,add:Qh,kill:vT,modifier:gT,rawVars:0},o={targetTest:0,get:0,getSetter:nf,aliases:{},register:0};if(xo(),t!==i){if(Un[e])return;ni(i,ni(jl(t,s),o)),ds(i.prototype,ds(s,jl(t,o))),Un[i.prop=e]=i,t.targetTest&&(Ll.push(i),Kh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}v_(e,i),t.register&&t.register(Ln,i,Cn)}else I_.push(t)},pe=255,jo={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},fu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*pe+.5|0},F_=function(t,e,n){var i=t?qi(t)?[t>>16,t>>8&pe,t&pe]:0:jo.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jo[t])i=jo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&pe,i&pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&pe,t&pe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Qu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=fu(l+1/3,s,o),i[1]=fu(l,s,o),i[2]=fu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(d_),n&&i.length<4&&(i[3]=1),i}else i=t.match(Qu)||jo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/pe,o=i[1]/pe,a=i[2]/pe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},B_=function(t){var e=[],n=[],i=-1;return t.split(vr).forEach(function(s){var o=s.match(Qs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},vp=function(t,e,n){var i="",s=(t+i).match(vr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=F_(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=B_(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(vr,"1").split(Qs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},vr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),iT=/hsl[a]?\(/,k_=function(t){var e=t.join(" "),n;if(vr.lastIndex=0,vr.test(e))return n=iT.test(e),t[1]=vp(t[1],n),t[0]=vp(t[0],n,B_(t[1])),!0},ba,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,x=m===!0,v,S,T,b;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,v=T-o,(v>0||x)&&(b=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](T,f,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){__&&(!th&&Yh()&&(_i=th=window,qh=_i.document||{},Gn.gsap=Ln,(_i.gsapVersions||(_i.gsapVersions=[])).push(Ln.version),g_(Yl||_i.GreenSockGlobals||!_i.gsap&&_i||{}),I_.forEach(U_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ba=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ba=0,c=ya},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,x){var v=p?function(S,T,b,y){m(S,T,b,y),h.remove(v)}:m;return h.remove(m),a[x?"unshift":"push"](v),xo(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),xo=function(){return!ba&&Bn.wake()},oe={},rT=/^[\d.\-M][\d.\-,\s]/,sT=/["']/g,oT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(sT,"").trim():+c,i=l.substr(a+1).trim();return e},aT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lT=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oT(e[1])]:aT(t).split(",").map(y_)):oe._CE&&rT.test(t)?oe._CE("",t):n},z_=function(t){return function(e){return 1-t(1-e)}},H_=function r(t,e){for(var n=t._first,i;n;)n instanceof _n?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},os=function(t,e){return t&&(Pe(t)?t:oe[t]||lT(t))||e},Ss=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return wn(t,function(a){oe[a]=Gn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},V_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},du=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ju*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ub((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:V_(a);return s=Ju/s,l.config=function(c,u){return r(t,c,u)},l},pu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:V_(n);return i.config=function(s){return r(t,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ss(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Ss("Elastic",du("in"),du("out"),du());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ss("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ss("Circ",function(r){return-(h_(1-r*r)-1)});Ss("Sine",function(r){return r===1?1:-Ib(r*Nb)+1});Ss("Back",pu("in"),pu("out"),pu());oe.SteppedEase=oe.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ge;return function(a){return((i*Ia(0,o,a)|0)+s)*n}}};_o.ease=oe["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zh+=r+","+r+"Params,"});var G_=function(t,e){this.id=Ob++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:E_,this.set=e?e.getSetter:nf},Ta=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,vo(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),ba||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,vo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_c(this,n),!s._dp||s.parent||T_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),S_(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?go(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ge?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ge?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this._tDur,s),i!==!1),mc(this),Gb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ge&&(this._tTime-=ge)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kb);var i=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_p(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_p(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),An(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ge,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ge)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Pe(n)?n:M_,a=function(){var c=i.then;i.then=null,Pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){qo(this)},r}();ni(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ge,_prom:0,_ps:!1,_rts:1});var _n=function(r){u_(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Ce&&Si(n.parent||Ce,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&A_(ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ra(0,arguments,this),this},e.from=function(i,s,o){return ra(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ra(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ia(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ue(i,s,jn(this,o),1),this},e.call=function(i,s,o){return Si(this,Ue.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ue(i,o,jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ia(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ia(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xe(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,x,v,S,T,b,y;if(this!==Ce&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Xe(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),T=go(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),b&&_&1&&(f=c-f,y=1),_!==T&&!this._lock){var L=b&&T&1,D=L===(b&&_&1);if(_<T&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(y?0:Xe(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,D&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;H_(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Yb(this,Xe(a),Xe(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-ge);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||rn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=E?-ge:ge);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-ge)._zTime=f>=a?1:-1,this._ts))return this._start=S,mc(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(qi(s)||(s=jn(this,s,i)),!(i instanceof Ta)){if(sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Pe(i))i=Ue.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ue?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Pe(i)?this.killTweensOf(i):(pc(this,i),i===this._recent&&(this._recent=this._last),ss(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xe(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ue.delayedCall(0,s||ya,o);return a.data="isPause",this._hasPause=1,Si(this,a,jn(this,i))},e.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&yr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Qn(i),l=this._first,c=qi(s),u;l;)l instanceof Ue?zb(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ue.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ge,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&vo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gp(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gp(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ge)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Jn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Si(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;vo(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(S_(Ce,Kl(i,Ce)),x_=Bn.frame),Bn.frame>=dp){dp+=Vn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Vn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(Ta);ni(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var cT=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,j_,null,s),c=0,u=0,h,f,d,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ma(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(uu)||[];h=uu.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?so(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=uu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(p_.test(i)||p)&&(l.e=0),this._pt=l,l},Qh=function(t,e,n,i,s,o,a,l,c,u){Pe(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Pe(h)?c?t[e.indexOf("set")||!Pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Pe(h)?c?pT:Y_:ef,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(g=so(f,i)+(nn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ah)return!isNaN(f*i)&&i!==""?(g=new Cn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?_T:q_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&jh(e,i),cT.call(this,t,e,f,i,d,l||Vn.stringFilter,c))},uT=function(t,e,n,i,s){if(Pe(t)&&(t=sa(t,s,e,n,i)),!Pi(t)||t.style&&t.nodeType||sn(t)||f_(t))return Ye(t)?sa(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=sa(t[a],s,e,n,i);return o},W_=function(t,e,n,i,s,o){var a,l,c,u;if(Un[t]&&(a=new Un[t]).init(s,a.rawVars?e[t]:uT(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==to))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},cr,ah,tf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!$h,S=t.timeline,T,b,y,L,D,E,w,I,Y,P,W,U,z;if(S&&(!f||!s)&&(s="none"),t._ease=os(s,_o.ease),t._yEase=h?z_(os(h===!0?s:h,_o.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(I=m[0]?rs(m[0]).harness:0,U=I&&i[I.prop],T=jl(i,Kh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Rl:Bb),_._lazy=0),o){if(yr(t._startAt=Ue.set(m,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!d)&&t._startAt.revert(Rl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),y=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:p},T),U&&(y[I.prop]=U),yr(t._startAt=Ue.set(m,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(Rl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ge,ge);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&An(l)||l&&!g,b=0;b<m.length;b++){if(D=m[b],w=D._gsap||Jh(m)[b]._gsap,t._ptLookup[b]=P={},eh[w.id]&&gr.length&&ql(),W=x===m?b:x.indexOf(D),I&&(Y=new I).init(D,U||T,t,W,x)!==!1&&(t._pt=L=new Cn(t._pt,D,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(G){P[G]=L}),Y.priority&&(E=1)),!I||U)for(y in T)Un[y]&&(Y=W_(y,T,t,W,D,x))?Y.priority&&(E=1):P[y]=L=Qh.call(t,D,y,"get",T[y],W,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(D,t._op[b]),v&&t._pt&&(cr=t,Ce.killTweensOf(D,P,t.globalTime(e)),z=!t.parent,cr=0),t._pt&&l&&(eh[w.id]=1)}E&&K_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,f&&e<=0&&S.render(Jn,!0,!0)},hT=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ah=1,t.vars[e]="+=0",tf(t,a),ah=0,l?Sa(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=De(n)+nn(h.e)),h.b&&(h.b=u.s+nn(h.b))},fT=function(t,e){var n=t[0]?rs(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ds({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dT=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},sa=function(t,e,n,i,s){return Pe(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?Ma(t):t},$_=Zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",X_={};wn($_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return X_[r]=1});var Ue=function(r){u_(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ia(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Ce,v=(sn(n)||f_(n)?qi(n[0]):"length"in i)?[n]:Qn(n),S,T,b,y,L,D,E,w;if(a._targets=v.length?Jh(v):Sa("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||ll(c)||ll(u)){if(i=a.vars,S=a.timeline=new _n({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),S.kill(),S.parent=S._dp=ki(a),S._start=0,f||ll(c)||ll(u)){if(y=v.length,E=f&&L_(f),Pi(f))for(L in f)~$_.indexOf(L)&&(w||(w={}),w[L]=f[L]);for(T=0;T<y;T++)b=jl(i,X_),b.stagger=0,p&&(b.yoyoEase=p),w&&ds(b,w),D=v[T],b.duration=+sa(c,ki(a),T,D,v),b.delay=(+sa(u,ki(a),T,D,v)||0)-a._delay,!f&&y===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(D,b,E?E(T,D,v):0),S._ease=oe.none;S.duration()?c=u=0:a.timeline=0}else if(g){ia(ni(S.vars.defaults,{ease:"none"})),S._ease=os(g.ease||i.ease||"none");var I=0,Y,P,W;if(sn(g))g.forEach(function(U){return S.to(v,U,">")}),S.duration();else{b={};for(L in g)L==="ease"||L==="easeEach"||dT(L,g[L],b,g.easeEach);for(L in b)for(Y=b[L].sort(function(U,z){return U.t-z.t}),I=0,T=0;T<Y.length;T++)P=Y[T],W={ease:P.e,duration:(P.t-(T?Y[T-1].t:0))/100*c},W[L]=P.v,S.to(v,W,I),I+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!$h&&(cr=ki(a),Ce.killTweensOf(v),cr=0),Si(x,ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Xe(x._time)&&An(h)&&Wb(ki(a))&&x.data!=="nested")&&(a._tTime=-ge,a.render(Math.max(0,-u)||0)),m&&A_(ki(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ge&&!u?l:i<ge?0:i,f,d,g,_,m,p,x,v,S;if(!c)Xb(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Xe(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Xe(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=go(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(v&&this._yEase&&H_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Xe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(w_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!g&&(zn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&nh(this,i,s,o),zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&yr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ba||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||tf(this,c),u=this._ease(c/this._dur),hT(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(_c(this,0),this.parent||b_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||qo(this),this.parent&&o!==this.timeline.totalDuration()&&vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Qn(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&Vb(a,l))return s==="all"&&(this._pt=0),qo(this);for(h=this._op=this._op||[],s!=="all"&&(Ye(s)&&(_={},wn(s,function(x){return _[x]=1}),s=_),s=fT(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&qo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ra(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ra(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(Ta);ni(Ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Ue[r]=function(){var t=new _n,e=rh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ef=function(t,e,n){return t[e]=n},Y_=function(t,e,n){return t[e](n)},pT=function(t,e,n,i){return t[e](i.fp,n)},mT=function(t,e,n){return t.setAttribute(e,n)},nf=function(t,e){return Pe(t[e])?Y_:Xh(t[e])&&t.setAttribute?mT:ef},q_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_T=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},j_=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gT=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},vT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},K_=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||q_,this.d=l||this,this.set=c||ef,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xT,this.m=n,this.mt=s,this.tween=i},r}();wn(Zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Kh[r]=1});Gn.TweenMax=Gn.TweenLite=Ue;Gn.TimelineLite=Gn.TimelineMax=_n;Ce=new _n({sortChildren:!1,defaults:_o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=k_;var as=[],Pl={},ET=[],xp=0,ST=0,mu=function(t){return(Pl[t]||ET).map(function(e){return e()})},lh=function(){var t=Date.now(),e=[];t-xp>2&&(mu("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),mu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xp=t,mu("matchMedia"))},Z_=function(){function r(e,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ST++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Pe(n)&&(s=i,i=n,n=Pe);var o=this,a=function(){var c=Te,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=sh(s)),Te=o,h=i.apply(o,arguments),Pe(h)&&o._r.push(h),Te=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Pe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ue&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ue)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),yT=function(){function r(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Pi(n)||(n={matches:n});var o=new Z_(0,s||this.scope),a=o.conditions={},l,c,u;Te&&!o.selector&&(o.selector=Te.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Zl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return U_(i)})},timeline:function(t){return new _n(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=Qn(t)[0]);var s=rs(t||{}).get,o=n?M_:y_;return n==="native"&&(n=""),t&&(e?o((Un[e]&&Un[e].get||s)(t,e,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Qn(t),t.length>1){var i=t.map(function(u){return Ln.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Un[e],a=rs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;to._pt=0,h.init(t,n?u+n:u,to,0,[t]),h.render(1,h),to._pt&&rf(1,to)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Ln.to(t,ds((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=os(t.ease,_o.ease)),pp(_o,t||{})},config:function(t){return pp(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Gn[a]&&Sa(e+" effect requires "+a+" plugin.")}),hu[e]=function(a,l,c){return n(Qn(a),ni(l||{},s),c)},o&&(_n.prototype[e]=function(a,l,c){return this.add(hu[e](a,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=os(e)},parseEase:function(t,e){return arguments.length?os(t,e):oe},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _n(t),i,s;for(n.smoothChildTiming=An(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ue&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Ce,n,0),n},context:function(t,e){return t?new Z_(t,e):Te},matchMedia:function(t){return new yT(t)},matchMediaRefresh:function(){return as.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||lh()},addEventListener:function(t,e){var n=Pl[t]||(Pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tT,wrapYoyo:eT,distribute:L_,random:D_,snap:P_,normalize:Qb,getUnit:nn,clamp:jb,splitColor:F_,toArray:Qn,selector:sh,mapRange:O_,pipe:Zb,unitize:Jb,interpolate:nT,shuffle:R_},install:g_,effects:hu,ticker:Bn,updateRoot:_n.updateRoot,plugins:Un,globalTimeline:Ce,core:{PropTween:Cn,globals:v_,Tween:Ue,Timeline:_n,Animation:Ta,getCache:rs,_removeLinkedListItem:pc,reverting:function(){return rn},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return $h=t}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Zl[r]=Ue[r]});Bn.add(_n.updateRoot);to=Zl.to({},{duration:0});var MT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bT=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=MT(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},_u=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bT(a,s)}}}},Ln=Zl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_u("roundProps",oh),_u("modifiers"),_u("snap",P_))||Zl;Ue.version=_n.version=Ln.version="3.12.5";__=1;Yh()&&xo();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ep,ur,oo,sf,Jr,Sp,of,TT=function(){return typeof window<"u"},ji={},Xr=180/Math.PI,ao=Math.PI/180,zs=Math.atan2,yp=1e8,af=/([A-Z])/g,AT=/(left|right|width|margin|padding|x)/i,wT=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ch=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},J_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Q_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},PT=function(t,e,n){return t.style[e]=n},DT=function(t,e,n){return t.style.setProperty(e,n)},NT=function(t,e,n){return t._gsap[e]=n},OT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},IT=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},UT=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",Rn=Re+"Origin",FT=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=zi(i,a)}):this.tfm[t]=o.x?o[t]:zi(i,t),t===Rn&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},tg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},BT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=of(),(!s||!s.isStart)&&!n[Re]&&(tg(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},eg=function(t,e){var n={target:t,props:[],revert:BT,save:FT};return t._gsap||Ln.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},ng,uh=function(t,e){var n=ur.createElementNS?ur.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ur.createElement(t);return n&&n.style?n:ur.createElement(t)},Ai=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(af,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Eo(e)||e,1)||""},Mp="O,Moz,ms,Ms,Webkit".split(","),Eo=function(t,e,n){var i=e||Jr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Mp[o]:"")+t},hh=function(){TT()&&window.document&&(Ep=window,ur=Ep.document,oo=ur.documentElement,Jr=uh("div")||{style:{}},uh("div"),Re=Eo(Re),Rn=Re+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ng=!!Eo("perspective"),of=Ln.core.reverting,sf=1)},gu=function r(t){var e=uh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(oo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),oo.removeChild(e),this.style.cssText=s,o},bp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ig=function(t){var e;try{e=t.getBBox()}catch{e=gu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===gu||(e=gu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+bp(t,["x","cx","x1"])||0,y:+bp(t,["y","cy","y1"])||0,width:0,height:0}:e},rg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ig(t))},ps=function(t,e){if(e){var n=t.style,i;e in ji&&e!==Rn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(af,"-$1").toLowerCase())):n.removeAttribute(e)}},hr=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?Q_:J_);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Tp={deg:1,rad:1,turn:1},kT={grid:1,flex:1},Mr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Jr.style,l=AT.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Tp[i]||Tp[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&rg(t),(d||o==="%")&&(ji[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],De(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ur||!_.appendChild)&&(_=ur.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Bn.time&&!m.uncache)return De(s/m.width*h);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=h+i,g=t[u],x?t.style[e]=x:ps(t,e)}else(d||o==="%")&&!kT[Ai(_,"display")]&&(a.position=Ai(t,"position")),_===t&&(a.position="static"),_.appendChild(Jr),g=Jr[u],_.removeChild(Jr),a.position="absolute";return l&&d&&(m=rs(_),m.time=Bn.time,m.width=_[u]),De(f?g*s/h:g&&s?h/g*s:0)},zi=function(t,e,n,i){var s;return sf||hh(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(s=wa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ql(Ai(t,Rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jl[e]&&Jl[e](t,e,n)||Ai(t,e)||E_(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mr(t,e,s,n)+n:s},zT=function(t,e,n,i){if(!n||n==="none"){var s=Eo(e,t,1),o=s&&Ai(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ai(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,j_),l=0,c=0,u,h,f,d,g,_,m,p,x,v,S,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ai(t,e)||i,_?t.style[e]=_:ps(t,e)),u=[n,i],k_(u),n=u[0],i=u[1],f=n.match(Qs)||[],T=i.match(Qs)||[],T.length){for(;h=Qs.exec(i);)m=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=so(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=Qs.lastIndex-v.length,v||(v=v||Vn.units[e]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=Mr(t,e,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Q_:J_;return p_.test(i)&&(a.e=0),this._pt=a,a},Ap={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},HT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ap[n]||n,e[1]=Ap[i]||i,e.join(" ")},VT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Rn:Re),ps(n,a);l&&(ps(n,Re),o&&(o.svg&&n.removeAttribute("transform"),wa(n,1),o.uncache=1,tg(i)))}},Jl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,VT);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Aa=[1,0,0,1,0,0],sg={},og=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wp=function(t){var e=Ai(t,Re);return og(e)?Aa:e.substr(7).match(d_).map(De)},lf=function(t,e){var n=t._gsap||rs(t),i=t.style,s=wp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Aa:s):(s===Aa&&!t.offsetParent&&t!==oo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,oo.appendChild(t)),s=wp(t),l?i.display=l:ps(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):oo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(t,e,n,i,s,o){var a=t._gsap,l=s||lf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=e.split(" "),S=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,y,L,D;n?l!==Aa&&(y=d*m-g*_)&&(L=S*(m/y)+T*(-_/y)+(_*x-m*p)/y,D=S*(-g/y)+T*(d/y)-(d*x-g*p)/y,S=L,T=D):(b=ig(t),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(p=S-c,x=T-u,a.xOffset=h+(p*d+x*_)-p,a.yOffset=f+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Rn]="0px 0px",o&&(hr(o,a,"xOrigin",c,S),hr(o,a,"yOrigin",u,T),hr(o,a,"xOffset",h,a.xOffset),hr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+T)},wa=function(t,e){var n=t._gsap||new G_(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ai(t,Rn)||"0",u,h,f,d,g,_,m,p,x,v,S,T,b,y,L,D,E,w,I,Y,P,W,U,z,G,j,C,J,it,xt,O,Z;return u=h=f=_=m=p=x=v=S=0,d=g=1,n.svg=!!(t.getCTM&&rg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),y=lf(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),fh(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,y)),T=n.xOrigin||0,b=n.yOrigin||0,y!==Aa&&(w=y[0],I=y[1],Y=y[2],P=y[3],u=W=y[4],h=U=y[5],y.length===6?(d=Math.sqrt(w*w+I*I),g=Math.sqrt(P*P+Y*Y),_=w||I?zs(I,w)*Xr:0,x=Y||P?zs(Y,P)*Xr+_:0,x&&(g*=Math.abs(Math.cos(x*ao))),n.svg&&(u-=T-(T*w+b*Y),h-=b-(T*I+b*P))):(Z=y[6],xt=y[7],C=y[8],J=y[9],it=y[10],O=y[11],u=y[12],h=y[13],f=y[14],L=zs(Z,it),m=L*Xr,L&&(D=Math.cos(-L),E=Math.sin(-L),z=W*D+C*E,G=U*D+J*E,j=Z*D+it*E,C=W*-E+C*D,J=U*-E+J*D,it=Z*-E+it*D,O=xt*-E+O*D,W=z,U=G,Z=j),L=zs(-Y,it),p=L*Xr,L&&(D=Math.cos(-L),E=Math.sin(-L),z=w*D-C*E,G=I*D-J*E,j=Y*D-it*E,O=P*E+O*D,w=z,I=G,Y=j),L=zs(I,w),_=L*Xr,L&&(D=Math.cos(L),E=Math.sin(L),z=w*D+I*E,G=W*D+U*E,I=I*D-w*E,U=U*D-W*E,w=z,W=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=De(Math.sqrt(w*w+I*I+Y*Y)),g=De(Math.sqrt(U*U+Z*Z)),L=zs(W,U),x=Math.abs(L)>2e-4?L*Xr:0,S=O?1/(O<0?-O:O):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!og(Ai(t,Re)),z&&t.setAttribute("transform",z))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=De(d),n.scaleY=De(g),n.rotation=De(_)+a,n.rotationX=De(m)+a,n.rotationY=De(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Rn]=Ql(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?WT:ng?ag:GT,n.uncache=0,n},Ql=function(t){return(t=t.split(" "))[0]+" "+t[1]},vu=function(t,e,n){var i=nn(e);return De(parseFloat(e)+parseFloat(Mr(t,"x",n+"px",i)))+i},GT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ag(t,e)},Hr="0deg",Vo="0px",Vr=") ",ag=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,S="",T=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==Hr||u!==Hr)){var b=parseFloat(u)*ao,y=Math.sin(b),L=Math.cos(b),D;b=parseFloat(h)*ao,D=Math.cos(b),o=vu(x,o,y*D*-v),a=vu(x,a,-Math.sin(b)*-v),l=vu(x,l,L*D*-v+v)}m!==Vo&&(S+="perspective("+m+Vr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||o!==Vo||a!==Vo||l!==Vo)&&(S+=l!==Vo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vr),c!==Hr&&(S+="rotate("+c+Vr),u!==Hr&&(S+="rotateY("+u+Vr),h!==Hr&&(S+="rotateX("+h+Vr),(f!==Hr||d!==Hr)&&(S+="skew("+f+", "+d+Vr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Vr),x.style[Re]=S||"translate(0, 0)"},WT=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),S=parseFloat(a),T,b,y,L,D;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ao,c*=ao,T=Math.cos(l)*h,b=Math.sin(l)*h,y=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=ao,D=Math.tan(c-u),D=Math.sqrt(1+D*D),y*=D,L*=D,u&&(D=Math.tan(u),D=Math.sqrt(1+D*D),T*=D,b*=D)),T=De(T),b=De(b),y=De(y),L=De(L)):(T=h,L=f,b=y=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Mr(d,"x",o,"px"),S=Mr(d,"y",a,"px")),(g||_||m||p)&&(v=De(v+g-(g*T+_*y)+m),S=De(S+_-(g*b+_*L)+p)),(i||s)&&(D=d.getBBox(),v=De(v+i/100*D.width),S=De(S+s/100*D.height)),D="matrix("+T+","+b+","+y+","+L+","+v+","+S+")",d.setAttribute("transform",D),x&&(d.style[Re]=D)},$T=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*yp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*yp)%o-~~(c/o)*o)),t._pt=f=new Cn(t._pt,e,n,i,c,CT),f.e=u,f.u="deg",t._props.push(n),f},Cp=function(t,e){for(var n in e)t[n]=e[n];return t},XT=function(t,e,n){var i=Cp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=wa(n,1),ps(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=wa(n,1),o[Re]=c);for(l in ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=nn(c),g=nn(u),h=d!==g?Mr(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Cn(t._pt,a,l,h,f-h,ch),t._pt.u=g||0,t._props.push(l));Cp(a,i)};wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Jl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return zi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var lg={name:"css",register:hh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,x,v,S,T,b,y,L;sf||hh(),this.styles=this.styles||eg(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Un[_]&&W_(_,e,n,i,t,s)))){if(d=typeof u,g=Jl[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ma(u)),g)g(this,t,_,u,n)&&(y=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=nn(c),p=nn(u)),p?m!==p&&(c=Mr(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ye(c)&&~c.indexOf("random(")&&(c=Ma(c)),nn(c+"")||c==="auto"||(c+=Vn.units[_]||nn(zi(t,_))||""),(c+"").charAt(1)==="="&&(c=zi(t,_))):c=zi(t,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in yi&&(_==="autoAlpha"&&(f===1&&zi(t,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),hr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ji,v){if(this.styles.save(_),S||(T=t._gsap,T.renderTransform&&!e.parseTransform||wa(t,e.parseTransform),b=e.smoothOrigin!==!1&&T.smooth,S=this._pt=new Cn(this._pt,a,Re,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Cn(this._pt,T,"scaleY",T.scaleY,(x?so(T.scaleY,x+h):h)-T.scaleY||0,ch),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Rn,0,a[Rn]),u=HT(u),T.svg?fh(t,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&hr(this,T,"zOrigin",T.zOrigin,p),hr(this,a,_,Ql(c),Ql(u)));continue}else if(_==="svgOrigin"){fh(t,u,1,b,0,this);continue}else if(_ in sg){$T(this,T,_,f,x?so(f,x+u):u);continue}else if(_==="smoothOrigin"){hr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){XT(this,u,t);continue}}else _ in a||(_=Eo(_)||_);if(v||(h||h===0)&&(f||f===0)&&!wT.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=nn(u)||(_ in Vn.units?Vn.units[_]:m),m!==p&&(f=Mr(t,_,c,p)),this._pt=new Cn(this._pt,v?T:a,_,f,(x?so(f,x+h):h)-f,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?LT:ch),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=RT);else if(_ in a)zT.call(this,t,_,c,x?x+u:u);else if(_ in t)this.add(t,_,c||t[_],x?x+u:u,i,s);else if(_!=="parseTransform"){jh(_,u);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||t[_])),o.push(_)}}y&&K_(this)},render:function(t,e){if(e.tween._time||!of())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zi,aliases:yi,getSetter:function(t,e,n){var i=yi[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==Rn&&(t._gsap.x||zi(t,"x"))?n&&Sp===n?e==="scale"?OT:NT:(Sp=n||{})&&(e==="scale"?IT:UT):t.style&&!Xh(t.style[e])?PT:~e.indexOf("-")?DT:nf(t,e)},core:{_removeProperty:ps,_getMatrix:lf}};Ln.utils.checkPrefix=Eo;Ln.core.getStyleSaver=eg;(function(r,t,e,n){var i=wn(r+","+t+","+e,function(s){ji[s]=1});wn(t,function(s){Vn.units[s]="deg",sg[s]=1}),yi[i[13]]=r+","+t,wn(n,function(s){var o=s.split(":");yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Ln.registerPlugin(lg);var ui=Ln.registerPlugin(lg)||Ln;ui.core.Tween;function Rp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function YT(r,t,e){return t&&Rp(r.prototype,t),e&&Rp(r,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qe,Dl,kn,fr,dr,lo,cg,Yr,oa,ug,Wi,ci,hg,fg=function(){return qe||typeof window<"u"&&(qe=window.gsap)&&qe.registerPlugin&&qe},dg=1,eo=[],ie=[],wi=[],aa=Date.now,dh=function(t,e){return e},qT=function(){var t=oa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,wi),ie=n,wi=i,dh=function(o,a){return e[o](a)}},xr=function(t,e){return~wi.indexOf(t)&&wi[wi.indexOf(t)+1][e]},la=function(t){return!!~ug.indexOf(t)},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},an=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},cl="scrollLeft",ul="scrollTop",ph=function(){return Wi&&Wi.isPressed||ie.cache++},tc=function(t,e){var n=function i(s){if(s||s===0){dg&&(kn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),t(s),i.cacheID=ie.cache,o&&dh("ss",s)}else(e||ie.cache!==i.cacheID||dh("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},gn={s:cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tc(function(r){return arguments.length?kn.scrollTo(r,ze.sc()):kn.pageXOffset||fr[cl]||dr[cl]||lo[cl]||0})},ze={s:ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:tc(function(r){return arguments.length?kn.scrollTo(gn.sc(),r):kn.pageYOffset||fr[ul]||dr[ul]||lo[ul]||0})},yn=function(t,e){return(e&&e._ctx&&e._ctx.selector||qe.utils.toArray)(t)[0]||(typeof t=="string"&&qe.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},br=function(t,e){var n=e.s,i=e.sc;la(t)&&(t=fr.scrollingElement||dr);var s=ie.indexOf(t),o=i===ze.sc?1:2;!~s&&(s=ie.push(t)-1),ie[s+o]||cn(t,"scroll",ph);var a=ie[s+o],l=a||(ie[s+o]=tc(xr(t,n),!0)||(la(t)?i:tc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=qe.getProperty(t,"scrollBehavior")==="smooth"),l},mh=function(t,e,n){var i=t,s=t,o=aa(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=aa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=aa();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Go=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Lp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},pg=function(){oa=qe.core.globals().ScrollTrigger,oa&&oa.core&&qT()},mg=function(t){return qe=t||fg(),!Dl&&qe&&typeof document<"u"&&document.body&&(kn=window,fr=document,dr=fr.documentElement,lo=fr.body,ug=[kn,fr,dr,lo],qe.utils.clamp,hg=qe.core.context||function(){},Yr="onpointerenter"in lo?"pointer":"mouse",cg=Ne.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=Ne.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dg=0},500),pg(),Dl=1),Dl};gn.op=ze;ie.cache=0;var Ne=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Dl||mg(qe)||console.warn("Please gsap.registerPlugin(Observer)"),oa||pg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,S=n.onRelease,T=n.onRight,b=n.onLeft,y=n.onUp,L=n.onDown,D=n.onChangeX,E=n.onChangeY,w=n.onChange,I=n.onToggleX,Y=n.onToggleY,P=n.onHover,W=n.onHoverEnd,U=n.onMove,z=n.ignoreCheck,G=n.isNormalizer,j=n.onGestureStart,C=n.onGestureEnd,J=n.onWheel,it=n.onEnable,xt=n.onDisable,O=n.onClick,Z=n.scrollSpeed,rt=n.capture,gt=n.allowClicks,ut=n.lockAxis,ft=n.onLockAxis;this.target=a=yn(a)||dr,this.vars=n,d&&(d=qe.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Z=Z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(lo).lineHeight)||22);var Kt,bt,B,Ft,vt,Ot,yt,H=this,It=0,Vt=0,te=n.passive||!u,R=br(a,gn),M=br(a,ze),K=R(),Q=M(),tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ci[0]==="pointerdown",et=la(a),Et=a.ownerDocument||fr,Rt=[0,0,0],ot=[0,0,0],dt=0,Gt=function(){return dt=aa()},nt=function(wt,Nt){return(H.event=wt)&&d&&~d.indexOf(wt.target)||Nt&&tt&&wt.pointerType!=="touch"||z&&z(wt,Nt)},ve=function(){H._vx.reset(),H._vy.reset(),bt.pause(),h&&h(H)},Wt=function(){var wt=H.deltaX=Lp(Rt),Nt=H.deltaY=Lp(ot),lt=Math.abs(wt)>=i,Bt=Math.abs(Nt)>=i;w&&(lt||Bt)&&w(H,wt,Nt,Rt,ot),lt&&(T&&H.deltaX>0&&T(H),b&&H.deltaX<0&&b(H),D&&D(H),I&&H.deltaX<0!=It<0&&I(H),It=H.deltaX,Rt[0]=Rt[1]=Rt[2]=0),Bt&&(L&&H.deltaY>0&&L(H),y&&H.deltaY<0&&y(H),E&&E(H),Y&&H.deltaY<0!=Vt<0&&Y(H),Vt=H.deltaY,ot[0]=ot[1]=ot[2]=0),(Ft||B)&&(U&&U(H),B&&(x(H),B=!1),Ft=!1),Ot&&!(Ot=!1)&&ft&&ft(H),vt&&(J(H),vt=!1),Kt=0},Dt=function(wt,Nt,lt){Rt[lt]+=wt,ot[lt]+=Nt,H._vx.update(wt),H._vy.update(Nt),c?Kt||(Kt=requestAnimationFrame(Wt)):Wt()},Tt=function(wt,Nt){ut&&!yt&&(H.axis=yt=Math.abs(wt)>Math.abs(Nt)?"x":"y",Ot=!0),yt!=="y"&&(Rt[2]+=wt,H._vx.update(wt,!0)),yt!=="x"&&(ot[2]+=Nt,H._vy.update(Nt,!0)),c?Kt||(Kt=requestAnimationFrame(Wt)):Wt()},Mt=function(wt){if(!nt(wt,1)){wt=Go(wt,u);var Nt=wt.clientX,lt=wt.clientY,Bt=Nt-H.x,Ut=lt-H.y,Yt=H.isDragging;H.x=Nt,H.y=lt,(Yt||Math.abs(H.startX-Nt)>=s||Math.abs(H.startY-lt)>=s)&&(x&&(B=!0),Yt||(H.isDragging=!0),Tt(Bt,Ut),Yt||m&&m(H))}},jt=H.onPress=function(Lt){nt(Lt,1)||Lt&&Lt.button||(H.axis=yt=null,bt.pause(),H.isPressed=!0,Lt=Go(Lt),It=Vt=0,H.startX=H.x=Lt.clientX,H.startY=H.y=Lt.clientY,H._vx.reset(),H._vy.reset(),cn(G?a:Et,ci[1],Mt,te,!0),H.deltaX=H.deltaY=0,v&&v(H))},pt=H.onRelease=function(Lt){if(!nt(Lt,1)){an(G?a:Et,ci[1],Mt,!0);var wt=!isNaN(H.y-H.startY),Nt=H.isDragging,lt=Nt&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Bt=Go(Lt);!lt&&wt&&(H._vx.reset(),H._vy.reset(),u&&gt&&qe.delayedCall(.08,function(){if(aa()-dt>300&&!Lt.defaultPrevented){if(Lt.target.click)Lt.target.click();else if(Et.createEvent){var Ut=Et.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,kn,1,Bt.screenX,Bt.screenY,Bt.clientX,Bt.clientY,!1,!1,!1,!1,0,null),Lt.target.dispatchEvent(Ut)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&Nt&&!G&&bt.restart(!0),p&&Nt&&p(H),S&&S(H,lt)}},ae=function(wt){return wt.touches&&wt.touches.length>1&&(H.isGesturing=!0)&&j(wt,H.isDragging)},N=function(){return(H.isGesturing=!1)||C(H)},ct=function(wt){if(!nt(wt)){var Nt=R(),lt=M();Dt((Nt-K)*Z,(lt-Q)*Z,1),K=Nt,Q=lt,h&&bt.restart(!0)}},X=function(wt){if(!nt(wt)){wt=Go(wt,u),J&&(vt=!0);var Nt=(wt.deltaMode===1?l:wt.deltaMode===2?kn.innerHeight:1)*g;Dt(wt.deltaX*Nt,wt.deltaY*Nt,0),h&&!G&&bt.restart(!0)}},at=function(wt){if(!nt(wt)){var Nt=wt.clientX,lt=wt.clientY,Bt=Nt-H.x,Ut=lt-H.y;H.x=Nt,H.y=lt,Ft=!0,h&&bt.restart(!0),(Bt||Ut)&&Tt(Bt,Ut)}},_t=function(wt){H.event=wt,P(H)},$t=function(wt){H.event=wt,W(H)},le=function(wt){return nt(wt)||Go(wt,u)&&O(H)};bt=H._dc=qe.delayedCall(f||.25,ve).pause(),H.deltaX=H.deltaY=0,H._vx=mh(0,50,!0),H._vy=mh(0,50,!0),H.scrollX=R,H.scrollY=M,H.isDragging=H.isGesturing=H.isPressed=!1,hg(this),H.enable=function(Lt){return H.isEnabled||(cn(et?Et:a,"scroll",ph),o.indexOf("scroll")>=0&&cn(et?Et:a,"scroll",ct,te,rt),o.indexOf("wheel")>=0&&cn(a,"wheel",X,te,rt),(o.indexOf("touch")>=0&&cg||o.indexOf("pointer")>=0)&&(cn(a,ci[0],jt,te,rt),cn(Et,ci[2],pt),cn(Et,ci[3],pt),gt&&cn(a,"click",Gt,!0,!0),O&&cn(a,"click",le),j&&cn(Et,"gesturestart",ae),C&&cn(Et,"gestureend",N),P&&cn(a,Yr+"enter",_t),W&&cn(a,Yr+"leave",$t),U&&cn(a,Yr+"move",at)),H.isEnabled=!0,Lt&&Lt.type&&jt(Lt),it&&it(H)),H},H.disable=function(){H.isEnabled&&(eo.filter(function(Lt){return Lt!==H&&la(Lt.target)}).length||an(et?Et:a,"scroll",ph),H.isPressed&&(H._vx.reset(),H._vy.reset(),an(G?a:Et,ci[1],Mt,!0)),an(et?Et:a,"scroll",ct,rt),an(a,"wheel",X,rt),an(a,ci[0],jt,rt),an(Et,ci[2],pt),an(Et,ci[3],pt),an(a,"click",Gt,!0),an(a,"click",le),an(Et,"gesturestart",ae),an(Et,"gestureend",N),an(a,Yr+"enter",_t),an(a,Yr+"leave",$t),an(a,Yr+"move",at),H.isEnabled=H.isPressed=H.isDragging=!1,xt&&xt(H))},H.kill=H.revert=function(){H.disable();var Lt=eo.indexOf(H);Lt>=0&&eo.splice(Lt,1),Wi===H&&(Wi=0)},eo.push(H),G&&la(a)&&(Wi=H),H.enable(_)},YT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ne.version="3.12.5";Ne.create=function(r){return new Ne(r)};Ne.register=mg;Ne.getAll=function(){return eo.slice()};Ne.getById=function(r){return eo.filter(function(t){return t.vars.id===r})[0]};fg()&&qe.registerPlugin(Ne);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var St,Xs,se,we,hi,Se,_g,ec,Ca,ca,Ko,hl,Qe,gc,_h,fn,Pp,Dp,Ys,gg,xu,vg,hn,gh,xg,Eg,or,vh,cf,co,uf,nc,xh,Eu,fl=1,tn=Date.now,Su=tn(),ti=0,Zo=0,Np=function(t,e,n){var i=In(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Op=function(t,e){return e&&(!In(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},jT=function r(){return Zo&&requestAnimationFrame(r)},Ip=function(){return gc=1},Up=function(){return gc=0},gi=function(t){return t},Jo=function(t){return Math.round(t*1e5)/1e5||0},Sg=function(){return typeof window<"u"},yg=function(){return St||Sg()&&(St=window.gsap)&&St.registerPlugin&&St},ms=function(t){return!!~_g.indexOf(t)},Mg=function(t){return(t==="Height"?uf:se["inner"+t])||hi["client"+t]||Se["client"+t]},bg=function(t){return xr(t,"getBoundingClientRect")||(ms(t)?function(){return Fl.width=se.innerWidth,Fl.height=uf,Fl}:function(){return Vi(t)})},KT=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=xr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Mg(s):t["client"+s])||0}},ZT=function(t,e){return!e||~wi.indexOf(t)?bg(t):function(){return Fl}},Mi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=xr(t,n))?o()-bg(t)()[s]:ms(t)?(hi[n]||Se[n])-Mg(i):t[n]-t["offset"+i])},dl=function(t,e){for(var n=0;n<Ys.length;n+=3)(!e||~e.indexOf(Ys[n+1]))&&t(Ys[n],Ys[n+1],Ys[n+2])},In=function(t){return typeof t=="string"},vn=function(t){return typeof t=="function"},Qo=function(t){return typeof t=="number"},qr=function(t){return typeof t=="object"},Wo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},yu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Hs=Math.abs,Tg="left",Ag="top",hf="right",ff="bottom",ls="width",cs="height",ua="Right",ha="Left",fa="Top",da="Bottom",Ie="padding",Kn="margin",So="Width",df="Height",ke="px",Zn=function(t){return se.getComputedStyle(t)},JT=function(t){var e=Zn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Fp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vi=function(t,e){var n=e&&Zn(t)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},ic=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},wg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},QT=function(t){return function(e){return St.utils.snap(wg(t),e)}},pf=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},tA=function(t){return function(e,n){return pf(wg(t))(e,n.direction)}},pl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},We=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ml=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Bp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_l={toggleActions:"play",anticipatePin:0},rc={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(t,e){if(In(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in rc?rc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},gl=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=we.createElement("div"),_=ms(n)||xr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Se:n,x=t.indexOf("start")!==-1,v=x?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===ze?hf:ff)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=S,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ol(g,0,i,x),g},Ol=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[n.p]=e+"px",St.set(t,s)},ne=[],Eh={},Ra,kp=function(){return tn()-ti>34&&(Ra||(Ra=requestAnimationFrame($i)))},Vs=function(){(!hn||!hn.isPressed||hn.startX>Se.clientWidth)&&(ie.cache++,hn?Ra||(Ra=requestAnimationFrame($i)):$i(),ti||gs("scrollStart"),ti=tn())},Mu=function(){Eg=se.innerWidth,xg=se.innerHeight},ta=function(){ie.cache++,!Qe&&!vg&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!gh||Eg!==se.innerWidth||Math.abs(se.innerHeight-xg)>se.innerHeight*.25)&&ec.restart(!0)},_s={},eA=[],Cg=function r(){return We(re,"scrollEnd",r)||Qr(!0)},gs=function(t){return _s[t]&&_s[t].map(function(e){return e()})||eA},On=[],Rg=function(t){for(var e=0;e<On.length;e+=5)(!t||On[e+4]&&On[e+4].query===t)&&(On[e].style.cssText=On[e+1],On[e].getBBox&&On[e].setAttribute("transform",On[e+2]||""),On[e+3].uncache=1)},mf=function(t,e){var n;for(fn=0;fn<ne.length;fn++)n=ne[fn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));nc=!0,e&&Rg(e),e||gs("revert")},Lg=function(t,e){ie.cache++,(e||!dn)&&ie.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),In(t)&&(se.history.scrollRestoration=cf=t)},dn,us=0,zp,nA=function(){if(zp!==us){var t=zp=us;requestAnimationFrame(function(){return t===us&&Qr(!0)})}},Pg=function(){Se.appendChild(co),uf=!hn&&co.offsetHeight||se.innerHeight,Se.removeChild(co)},Hp=function(t){return Ca(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Qr=function(t,e){if(ti&&!t&&!nc){$e(re,"scrollEnd",Cg);return}Pg(),dn=re.isRefreshing=!0,ie.forEach(function(i){return vn(i)&&++i.cacheID&&(i.rec=i())});var n=gs("refreshInit");gg&&re.sort(),e||mf(),ie.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),nc=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),xh=1,Hp(!0),ne.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Hp(!1),xh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lg(cf,1),ec.pause(),us++,dn=2,$i(2),ne.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),dn=re.isRefreshing=!1,gs("refresh")},Sh=0,Il=1,pa,$i=function(t){if(t===2||!dn&&!nc){re.isUpdating=!0,pa&&pa.update(0);var e=ne.length,n=tn(),i=n-Su>=50,s=e&&ne[0].scroll();if(Il=Sh>s?-1:1,dn||(Sh=s),i&&(ti&&!gc&&n-ti>200&&(ti=0,gs("scrollEnd")),Ko=Su,Su=n),Il<0){for(fn=e;fn-- >0;)ne[fn]&&ne[fn].update(0,i);Il=1}else for(fn=0;fn<e;fn++)ne[fn]&&ne[fn].update(0,i);re.isUpdating=!1}Ra=0},yh=[Tg,Ag,ff,hf,Kn+da,Kn+ua,Kn+fa,Kn+ha,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ul=yh.concat([ls,cs,"boxSizing","max"+So,"max"+df,"position",Kn,Ie,Ie+fa,Ie+ua,Ie+da,Ie+ha]),iA=function(t,e,n){uo(n);var i=t._gsap;if(i.spacerIsNative)uo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},bu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=yh.length,o=e.style,a=t.style,l;s--;)l=yh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ff]=a[hf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ls]=ic(t,gn)+ke,o[cs]=ic(t,ze)+ke,o[Ie]=a[Kn]=a[Ag]=a[Tg]="0",uo(i),a[ls]=a["max"+So]=n[ls],a[cs]=a["max"+df]=n[cs],a[Ie]=n[Ie],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},rA=/([A-Z])/g,uo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(rA,"-$1").toLowerCase())}},vl=function(t){for(var e=Ul.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ul[s],n[Ul[s]]);return i.t=t,i},sA=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Fl={left:0,top:0},Vp=function(t,e,n,i,s,o,a,l,c,u,h,f,d,g){vn(t)&&(t=t(l)),In(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Nl("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(t)||(t=+t),Qo(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Ol(a,n,i,!0);else{vn(e)&&(e=e(l));var v=(t||"0").split(" "),S,T,b,y;x=yn(e,l)||Se,S=Vi(x)||{},(!S||!S.left&&!S.top)&&Zn(x).display==="none"&&(y=x.style.display,x.style.display="block",S=Vi(x),y?x.style.display=y:x.style.removeProperty("display")),T=Nl(v[0],S[i.d]),b=Nl(v[1]||"0",n),t=S[i.p]-c[i.p]-u+T+s-b,a&&Ol(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var L=t+n,D=o._isStart;m="scroll"+i.d2,Ol(o,L,i,D&&L>20||!D&&(h?Math.max(Se[m],hi[m]):o.parentNode[m])<=L+1),h&&(c=Vi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ke))}return d&&x&&(m=Vi(x),d.seek(f),p=Vi(x),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},oA=/(webkit|moz|length|cssText|inset)/i,Gp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Se){t._stOrig=s.cssText,a=Zn(t);for(o in a)!+o&&!oA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Dg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},xl=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Wp=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=Dg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&$i()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=St.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),re.isTouch&&$e(t,"touchmove",n.wheelHandler),s},re=function(){function r(e,n){Xs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zo){this.update=this.refresh=this.kill=gi;return}n=Fp(In(n)||Qo(n)||n.nodeType?{trigger:n}:n,_l);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,T=s.pinReparent,b=s.pinSpacer,y=s.containerAnimation,L=s.fastScrollEnd,D=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:ze,w=!h&&h!==0,I=yn(n.scroller||se),Y=St.core.getCache(I),P=ms(I),W=("pinType"in n?n.pinType:xr(I,"pinType")||P&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=w&&n.toggleActions.split(" "),G="markers"in n?n.markers:_l.markers,j=P?0:parseFloat(Zn(I)["border"+E.p2+So])||0,C=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(C)},it=KT(I,P,E),xt=ZT(I,P),O=0,Z=0,rt=0,gt=br(I,E),ut,ft,Kt,bt,B,Ft,vt,Ot,yt,H,It,Vt,te,R,M,K,Q,tt,et,Et,Rt,ot,dt,Gt,nt,ve,Wt,Dt,Tt,Mt,jt,pt,ae,N,ct,X,at,_t,$t;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=I,C.scroll=y?y.time.bind(y):gt,bt=gt(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(gg=1,n.refreshPriority===-9999&&(pa=C)),Y.tweenScroll=Y.tweenScroll||{top:Wp(I,ze),left:Wp(I,gn)},C.tweenTo=ut=Y.tweenScroll[E.p],C.scrubDuration=function(lt){ae=Qo(lt)&&lt,ae?pt?pt.duration(lt):pt=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return p&&p(C)}}):(pt&&pt.progress(1).kill(),pt=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Mt=0,l||(l=i.vars.id)),S&&((!qr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Se.style&&St.set(P?[Se,hi]:I,{scrollBehavior:"auto"}),ie.forEach(function(lt){return vn(lt)&&lt.target===(P?we.scrollingElement||hi:I)&&(lt.smooth=!1)}),Kt=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?QT(i):S.snapTo==="labelsDirectional"?tA(i):S.directional!==!1?function(lt,Bt){return pf(S.snapTo)(lt,tn()-Z<500?0:Bt.direction)}:St.utils.snap(S.snapTo),N=S.duration||{min:.1,max:2},N=qr(N)?ca(N.min,N.max):ca(N,N),ct=St.delayedCall(S.delay||ae/2||.1,function(){var lt=gt(),Bt=tn()-Z<500,Ut=ut.tween;if((Bt||Math.abs(C.getVelocity())<10)&&!Ut&&!gc&&O!==lt){var Yt=(lt-Ft)/R,Ae=i&&!w?i.totalProgress():Yt,ee=Bt?0:(Ae-jt)/(tn()-Ko)*1e3||0,me=St.utils.clamp(-Yt,1-Yt,Hs(ee/2)*ee/.185),Fe=Yt+(S.inertia===!1?0:me),xe,_e,ue=S,Pn=ue.onStart,A=ue.onInterrupt,F=ue.onComplete;if(xe=Kt(Fe,C),Qo(xe)||(xe=Fe),_e=Math.round(Ft+xe*R),lt<=vt&&lt>=Ft&&_e!==lt){if(Ut&&!Ut._initted&&Ut.data<=Hs(_e-lt))return;S.inertia===!1&&(me=xe-Yt),ut(_e,{duration:N(Hs(Math.max(Hs(Fe-Ae),Hs(xe-Ae))*.185/ee/.05||0)),ease:S.ease||"power3",data:Hs(_e-lt),onInterrupt:function(){return ct.restart(!0)&&A&&A(C)},onComplete:function(){C.update(),O=gt(),i&&(pt?pt.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),Mt=jt=i&&!w?i.totalProgress():C.progress,x&&x(C),F&&F(C)}},lt,me*R,_e-lt-me*R),Pn&&Pn(C,ut.tween)}}else C.isActive&&O!==lt&&ct.restart(!0)}).pause()),l&&(Eh[l]=C),f=C.trigger=yn(f||d!==!0&&d),$t=f&&f._gsap&&f._gsap.stRevert,$t&&($t=$t(C)),d=d===!0?f:yn(d),In(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Kn||(g=!g&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:Ie),C.pin=d,ft=St.core.getCache(d),ft.spacer?M=ft.pinState:(b&&(b=yn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ft.spacerIsNative=!!b,b&&(ft.spacerState=vl(b))),ft.spacer=tt=b||we.createElement("div"),tt.classList.add("pin-spacer"),l&&tt.classList.add("pin-spacer-"+l),ft.pinState=M=vl(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),C.spacer=tt=ft.spacer,Tt=Zn(d),Gt=Tt[g+E.os2],Et=St.getProperty(d),Rt=St.quickSetter(d,E.a,ke),bu(d,tt,Tt),Q=vl(d)),G){Vt=qr(G)?Fp(G,Bp):Bp,H=gl("scroller-start",l,I,E,Vt,0),It=gl("scroller-end",l,I,E,Vt,0,H),et=H["offset"+E.op.d2];var le=yn(xr(I,"content")||I);Ot=this.markerStart=gl("start",l,le,E,Vt,et,0,y),yt=this.markerEnd=gl("end",l,le,E,Vt,et,0,y),y&&(_t=St.quickSetter([Ot,yt],E.a,ke)),!W&&!(wi.length&&xr(I,"fixedMarkers")===!0)&&(JT(P?Se:I),St.set([H,It],{force3D:!0}),ve=St.quickSetter(H,E.a,ke),Dt=St.quickSetter(It,E.a,ke))}if(y){var Lt=y.vars.onUpdate,wt=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){C.update(0,0,1),Lt&&Lt.apply(y,wt||[])})}if(C.previous=function(){return ne[ne.indexOf(C)-1]},C.next=function(){return ne[ne.indexOf(C)+1]},C.revert=function(lt,Bt){if(!Bt)return C.kill(!0);var Ut=lt!==!1||!C.enabled,Yt=Qe;Ut!==C.isReverted&&(Ut&&(X=Math.max(gt(),C.scroll.rec||0),rt=C.progress,at=i&&i.progress()),Ot&&[Ot,yt,H,It].forEach(function(Ae){return Ae.style.display=Ut?"none":"block"}),Ut&&(Qe=C,C.update(Ut)),d&&(!T||!C.isActive)&&(Ut?iA(d,tt,M):bu(d,tt,Zn(d),nt)),Ut||C.update(Ut),Qe=Yt,C.isReverted=Ut)},C.refresh=function(lt,Bt,Ut,Yt){if(!((Qe||!C.enabled)&&!Bt)){if(d&&lt&&ti){$e(r,"scrollEnd",Cg);return}!dn&&J&&J(C),Qe=C,ut.tween&&!Ut&&(ut.tween.kill(),ut.tween=0),pt&&pt.pause(),_&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ae=it(),ee=xt(),me=y?y.duration():Mi(I,E),Fe=R<=.01,xe=0,_e=Yt||0,ue=qr(Ut)?Ut.end:n.end,Pn=n.endTrigger||f,A=qr(Ut)?Ut.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),F=C.pinnedContainer=n.pinnedContainer&&yn(n.pinnedContainer,C),q=f&&Math.max(0,ne.indexOf(C))||0,$=q,V,ht,At,kt,Ct,Pt,zt,qt,ye,Be,he,on,fe;for(G&&qr(Ut)&&(on=St.getProperty(H,E.p),fe=St.getProperty(It,E.p));$--;)Pt=ne[$],Pt.end||Pt.refresh(0,1)||(Qe=C),zt=Pt.pin,zt&&(zt===f||zt===d||zt===F)&&!Pt.isReverted&&(Be||(Be=[]),Be.unshift(Pt),Pt.revert(!0,!0)),Pt!==ne[$]&&(q--,$--);for(vn(A)&&(A=A(C)),A=Np(A,"start",C),Ft=Vp(A,f,Ae,E,gt(),Ot,H,C,ee,j,W,me,y,C._startClamp&&"_startClamp")||(d?-.001:0),vn(ue)&&(ue=ue(C)),In(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(In(A)?A.split(" ")[0]:"")+ue:(xe=Nl(ue.substr(2),Ae),ue=In(A)?A:(y?St.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,Ft):Ft)+xe,Pn=f)),ue=Np(ue,"end",C),vt=Math.max(Ft,Vp(ue||(Pn?"100% 0":me),Pn,Ae,E,gt()+xe,yt,It,C,ee,j,W,me,y,C._endClamp&&"_endClamp"))||-.001,xe=0,$=q;$--;)Pt=ne[$],zt=Pt.pin,zt&&Pt.start-Pt._pinPush<=Ft&&!y&&Pt.end>0&&(V=Pt.end-(C._startClamp?Math.max(0,Pt.start):Pt.start),(zt===f&&Pt.start-Pt._pinPush<Ft||zt===F)&&isNaN(A)&&(xe+=V*(1-Pt.progress)),zt===d&&(_e+=V));if(Ft+=xe,vt+=xe,C._startClamp&&(C._startClamp+=xe),C._endClamp&&!dn&&(C._endClamp=vt||-.001,vt=Math.min(vt,Mi(I,E))),R=vt-Ft||(Ft-=.01)&&.001,Fe&&(rt=St.utils.clamp(0,1,St.utils.normalize(Ft,vt,X))),C._pinPush=_e,Ot&&xe&&(V={},V[E.a]="+="+xe,F&&(V[E.p]="-="+gt()),St.set([Ot,yt],V)),d&&!(xh&&C.end>=Mi(I,E)))V=Zn(d),kt=E===ze,At=gt(),ot=parseFloat(Et(E.a))+_e,!me&&vt>1&&(he=(P?we.scrollingElement||hi:I).style,he={style:he,value:he["overflow"+E.a.toUpperCase()]},P&&Zn(Se)["overflow"+E.a.toUpperCase()]!=="scroll"&&(he.style["overflow"+E.a.toUpperCase()]="scroll")),bu(d,tt,V),Q=vl(d),ht=Vi(d,!0),qt=W&&br(I,kt?gn:ze)(),g?(nt=[g+E.os2,R+_e+ke],nt.t=tt,$=g===Ie?ic(d,E)+R+_e:0,$&&(nt.push(E.d,$+ke),tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=$+ke)),uo(nt),F&&ne.forEach(function(Xt){Xt.pin===F&&Xt.vars.pinSpacing!==!1&&(Xt._subPinOffset=!0)}),W&&gt(X)):($=ic(d,E),$&&tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=$+ke)),W&&(Ct={top:ht.top+(kt?At-Ft:qt)+ke,left:ht.left+(kt?qt:At-Ft)+ke,boxSizing:"border-box",position:"fixed"},Ct[ls]=Ct["max"+So]=Math.ceil(ht.width)+ke,Ct[cs]=Ct["max"+df]=Math.ceil(ht.height)+ke,Ct[Kn]=Ct[Kn+fa]=Ct[Kn+ua]=Ct[Kn+da]=Ct[Kn+ha]="0",Ct[Ie]=V[Ie],Ct[Ie+fa]=V[Ie+fa],Ct[Ie+ua]=V[Ie+ua],Ct[Ie+da]=V[Ie+da],Ct[Ie+ha]=V[Ie+ha],K=sA(M,Ct,T),dn&&gt(0)),i?(ye=i._initted,xu(1),i.render(i.duration(),!0,!0),dt=Et(E.a)-ot+R+_e,Wt=Math.abs(R-dt)>1,W&&Wt&&K.splice(K.length-2,2),i.render(0,!0,!0),ye||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xu(0)):dt=R,he&&(he.value?he.style["overflow"+E.a.toUpperCase()]=he.value:he.style.removeProperty("overflow-"+E.a));else if(f&&gt()&&!y)for(ht=f.parentNode;ht&&ht!==Se;)ht._pinOffset&&(Ft-=ht._pinOffset,vt-=ht._pinOffset),ht=ht.parentNode;Be&&Be.forEach(function(Xt){return Xt.revert(!1,!0)}),C.start=Ft,C.end=vt,bt=B=dn?X:gt(),!y&&!dn&&(bt<X&&gt(X),C.scroll.rec=0),C.revert(!1,!0),Z=tn(),ct&&(O=-1,ct.restart(!0)),Qe=0,i&&w&&(i._initted||at)&&i.progress()!==at&&i.progress(at||0,!0).render(i.time(),!0,!0),(Fe||rt!==C.progress||y||_)&&(i&&!w&&i.totalProgress(y&&Ft<-.001&&!rt?St.utils.normalize(Ft,vt,0):rt,!0),C.progress=Fe||(bt-Ft)/R===rt?0:rt),d&&g&&(tt._pinOffset=Math.round(C.progress*dt)),pt&&pt.invalidate(),isNaN(on)||(on-=St.getProperty(H,E.p),fe-=St.getProperty(It,E.p),xl(H,E,on),xl(Ot,E,on-(Yt||0)),xl(It,E,fe),xl(yt,E,fe-(Yt||0))),Fe&&!dn&&C.update(),u&&!dn&&!te&&(te=!0,u(C),te=!1)}},C.getVelocity=function(){return(gt()-B)/(tn()-Ko)*1e3||0},C.endAnimation=function(){Wo(C.callbackAnimation),i&&(pt?pt.progress(1):i.paused()?w||Wo(i,C.direction<0,1):Wo(i,i.reversed()))},C.labelToScroll=function(lt){return i&&i.labels&&(Ft||C.refresh()||Ft)+i.labels[lt]/i.duration()*R||0},C.getTrailing=function(lt){var Bt=ne.indexOf(C),Ut=C.direction>0?ne.slice(0,Bt).reverse():ne.slice(Bt+1);return(In(lt)?Ut.filter(function(Yt){return Yt.vars.preventOverlaps===lt}):Ut).filter(function(Yt){return C.direction>0?Yt.end<=Ft:Yt.start>=vt})},C.update=function(lt,Bt,Ut){if(!(y&&!Ut&&!lt)){var Yt=dn===!0?X:C.scroll(),Ae=lt?0:(Yt-Ft)/R,ee=Ae<0?0:Ae>1?1:Ae||0,me=C.progress,Fe,xe,_e,ue,Pn,A,F,q;if(Bt&&(B=bt,bt=y?gt():Yt,S&&(jt=Mt,Mt=i&&!w?i.totalProgress():ee)),m&&d&&!Qe&&!fl&&ti&&(!ee&&Ft<Yt+(Yt-B)/(tn()-Ko)*m?ee=1e-4:ee===1&&vt>Yt+(Yt-B)/(tn()-Ko)*m&&(ee=.9999)),ee!==me&&C.enabled){if(Fe=C.isActive=!!ee&&ee<1,xe=!!me&&me<1,A=Fe!==xe,Pn=A||!!ee!=!!me,C.direction=ee>me?1:-1,C.progress=ee,Pn&&!Qe&&(_e=ee&&!me?0:ee===1?1:me===1?2:3,w&&(ue=!A&&z[_e+1]!=="none"&&z[_e+1]||z[_e],q=i&&(ue==="complete"||ue==="reset"||ue in i))),D&&(A||q)&&(q||h||!i)&&(vn(D)?D(C):C.getTrailing(D).forEach(function(At){return At.endAnimation()})),w||(pt&&!Qe&&!fl?(pt._dp._time-pt._start!==pt._time&&pt.render(pt._dp._time-pt._start),pt.resetTo?pt.resetTo("totalProgress",ee,i._tTime/i._tDur):(pt.vars.totalProgress=ee,pt.invalidate().restart())):i&&i.totalProgress(ee,!!(Qe&&(Z||lt)))),d){if(lt&&g&&(tt.style[g+E.os2]=Gt),!W)Rt(Jo(ot+dt*ee));else if(Pn){if(F=!lt&&ee>me&&vt+1>Yt&&Yt+1>=Mi(I,E),T)if(!lt&&(Fe||F)){var $=Vi(d,!0),V=Yt-Ft;Gp(d,Se,$.top+(E===ze?V:0)+ke,$.left+(E===ze?0:V)+ke)}else Gp(d,tt);uo(Fe||F?K:Q),Wt&&ee<1&&Fe||Rt(ot+(ee===1&&!F?dt:0))}}S&&!ut.tween&&!Qe&&!fl&&ct.restart(!0),a&&(A||v&&ee&&(ee<1||!Eu))&&Ca(a.targets).forEach(function(At){return At.classList[Fe||v?"add":"remove"](a.className)}),o&&!w&&!lt&&o(C),Pn&&!Qe?(w&&(q&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(C)),(A||!Eu)&&(c&&A&&yu(C,c),U[_e]&&yu(C,U[_e]),v&&(ee===1?C.kill(!1,1):U[_e]=0),A||(_e=ee===1?1:3,U[_e]&&yu(C,U[_e]))),L&&!Fe&&Math.abs(C.getVelocity())>(Qo(L)?L:2500)&&(Wo(C.callbackAnimation),pt?pt.progress(1):Wo(i,ue==="reverse"?1:!ee,1))):w&&o&&!Qe&&o(C)}if(Dt){var ht=y?Yt/y.duration()*(y._caScrollDist||0):Yt;ve(ht+(H._isFlipped?1:0)),Dt(ht)}_t&&_t(-Yt/y.duration()*(y._caScrollDist||0))}},C.enable=function(lt,Bt){C.enabled||(C.enabled=!0,$e(I,"resize",ta),P||$e(I,"scroll",Vs),J&&$e(r,"refreshInit",J),lt!==!1&&(C.progress=rt=0,bt=B=O=gt()),Bt!==!1&&C.refresh())},C.getTween=function(lt){return lt&&ut?ut.tween:pt},C.setPositions=function(lt,Bt,Ut,Yt){if(y){var Ae=y.scrollTrigger,ee=y.duration(),me=Ae.end-Ae.start;lt=Ae.start+me*lt/ee,Bt=Ae.start+me*Bt/ee}C.refresh(!1,!1,{start:Op(lt,Ut&&!!C._startClamp),end:Op(Bt,Ut&&!!C._endClamp)},Yt),C.update()},C.adjustPinSpacing=function(lt){if(nt&&lt){var Bt=nt.indexOf(E.d)+1;nt[Bt]=parseFloat(nt[Bt])+lt+ke,nt[1]=parseFloat(nt[1])+lt+ke,uo(nt)}},C.disable=function(lt,Bt){if(C.enabled&&(lt!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Bt||pt&&pt.pause(),X=0,ft&&(ft.uncache=1),J&&We(r,"refreshInit",J),ct&&(ct.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!P)){for(var Ut=ne.length;Ut--;)if(ne[Ut].scroller===I&&ne[Ut]!==C)return;We(I,"resize",ta),P||We(I,"scroll",Vs)}},C.kill=function(lt,Bt){C.disable(lt,Bt),pt&&!Bt&&pt.kill(),l&&delete Eh[l];var Ut=ne.indexOf(C);Ut>=0&&ne.splice(Ut,1),Ut===fn&&Il>0&&fn--,Ut=0,ne.forEach(function(Yt){return Yt.scroller===C.scroller&&(Ut=1)}),Ut||dn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,lt&&i.revert({kill:!1}),Bt||i.kill()),Ot&&[Ot,yt,H,It].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),pa===C&&(pa=0),d&&(ft&&(ft.uncache=1),Ut=0,ne.forEach(function(Yt){return Yt.pin===d&&Ut++}),Ut||(ft.spacer=0)),n.onKill&&n.onKill(C)},ne.push(C),C.enable(!1,!1),$t&&$t(C),i&&i.add&&!R){var Nt=C.update;C.update=function(){C.update=Nt,Ft||vt||C.refresh()},St.delayedCall(.01,C.update),R=.01,Ft=vt=0}else C.refresh();d&&nA()},r.register=function(n){return Xs||(St=n||yg(),Sg()&&window.document&&r.enable(),Xs=Zo),Xs},r.defaults=function(n){if(n)for(var i in n)_l[i]=n[i];return _l},r.disable=function(n,i){Zo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),We(se,"wheel",Vs),We(we,"scroll",Vs),clearInterval(hl),We(we,"touchcancel",gi),We(Se,"touchstart",gi),pl(We,we,"pointerdown,touchstart,mousedown",Ip),pl(We,we,"pointerup,touchend,mouseup",Up),ec.kill(),dl(We);for(var s=0;s<ie.length;s+=3)ml(We,ie[s],ie[s+1]),ml(We,ie[s],ie[s+2])},r.enable=function(){if(se=window,we=document,hi=we.documentElement,Se=we.body,St&&(Ca=St.utils.toArray,ca=St.utils.clamp,vh=St.core.context||gi,xu=St.core.suppressOverwrites||gi,cf=se.history.scrollRestoration||"auto",Sh=se.pageYOffset,St.core.globals("ScrollTrigger",r),Se)){Zo=1,co=document.createElement("div"),co.style.height="100vh",co.style.position="absolute",Pg(),jT(),Ne.register(St),r.isTouch=Ne.isTouch,or=Ne.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gh=Ne.isTouch===1,$e(se,"wheel",Vs),_g=[se,we,hi,Se],St.matchMedia?(r.matchMedia=function(l){var c=St.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},St.addEventListener("matchMediaInit",function(){return mf()}),St.addEventListener("matchMediaRevert",function(){return Rg()}),St.addEventListener("matchMedia",function(){Qr(0,1),gs("matchMedia")}),St.matchMedia("(orientation: portrait)",function(){return Mu(),Mu})):console.warn("Requires GSAP 3.11.0 or later"),Mu(),$e(we,"scroll",Vs);var n=Se.style,i=n.borderTopStyle,s=St.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Vi(Se),ze.m=Math.round(o.top+ze.sc())||0,gn.m=Math.round(o.left+gn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),hl=setInterval(kp,250),St.delayedCall(.5,function(){return fl=0}),$e(we,"touchcancel",gi),$e(Se,"touchstart",gi),pl($e,we,"pointerdown,touchstart,mousedown",Ip),pl($e,we,"pointerup,touchend,mouseup",Up),_h=St.utils.checkPrefix("transform"),Ul.push(_h),Xs=tn(),ec=St.delayedCall(.2,Qr).pause(),Ys=[we,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;we.hidden?(Pp=l,Dp=c):(Pp!==l||Dp!==c)&&ta()},we,"DOMContentLoaded",Qr,se,"load",Qr,se,"resize",ta],dl($e),ne.forEach(function(l){return l.enable(0,1)}),a=0;a<ie.length;a+=3)ml(We,ie[a],ie[a+1]),ml(We,ie[a],ie[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Eu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(hl)||(hl=i)&&setInterval(kp,i),"ignoreMobileResize"in n&&(gh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dl(We)||dl($e,n.autoRefreshEvents||"none"),vg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=yn(n),o=ie.indexOf(s),a=ms(s);~o&&ie.splice(o,a?6:2),i&&(a?wi.unshift(se,i,Se,i,hi,i):wi.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(In(n)?yn(n):n).getBoundingClientRect(),a=o[s?ls:cs]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=yn(n));var o=n.getBoundingClientRect(),a=o[s?ls:cs],l=i==null?a/2:i in rc?rc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(s){return s()})}},r}();re.version="3.12.5";re.saveStyles=function(r){return r?Ca(r).forEach(function(t){if(t&&t.style){var e=On.indexOf(t);e>=0&&On.splice(e,5),On.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),vh())}}):On};re.revert=function(r,t){return mf(!r,t)};re.create=function(r,t){return new re(r,t)};re.refresh=function(r){return r?ta():(Xs||re.register())&&Qr(!0)};re.update=function(r){return++ie.cache&&$i(r===!0?2:0)};re.clearScrollMemory=Lg;re.maxScroll=function(r,t){return Mi(r,t?gn:ze)};re.getScrollFunc=function(r,t){return br(yn(r),t?gn:ze)};re.getById=function(r){return Eh[r]};re.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};re.isScrolling=function(){return!!ti};re.snapDirectional=pf;re.addEventListener=function(r,t){var e=_s[r]||(_s[r]=[]);~e.indexOf(t)||e.push(t)};re.removeEventListener=function(r,t){var e=_s[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};re.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=St.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&vn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return vn(s)&&(s=s(),$e(re,"refresh",function(){return s=t.batchMax()})),Ca(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(re.create(c))}),e};var $p=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Tu=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ne.isTouch?" pinch-zoom":""):"none",t===hi&&r(Se,e)},El={auto:1,scroll:1},aA=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Se&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(El[(l=Zn(s)).overflowY]||El[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ms(s)&&(El[(l=Zn(s)).overflowY]||El[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ng=function(t,e,n,i){return Ne.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&aA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(we,Ne.eventTypes[0],Yp,!1,!0)},onDisable:function(){return We(we,Ne.eventTypes[0],Yp,!0)}})},lA=/(input|label|select|textarea)/i,Xp,Yp=function(t){var e=lA.test(t.target.tagName);(e||Xp)&&(t._gsapAllow=!0,Xp=e)},cA=function(t){qr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=yn(t.target)||hi,u=St.core.globals().ScrollSmoother,h=u&&u.get(),f=or&&(t.content&&yn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=br(c,ze),g=br(c,gn),_=1,m=(Ne.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,x=vn(i)?function(){return i(a)}:function(){return i||2.8},v,S,T=Ng(c,t.type,!0,s),b=function(){return S=!1},y=gi,L=gi,D=function(){l=Mi(c,ze),L=ca(or?1:0,l),n&&(y=ca(0,Mi(c,gn))),v=us},E=function(){f._gsap.y=Jo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},w=function(){if(S){requestAnimationFrame(b);var G=Jo(a.deltaY/2),j=L(d.v-G);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var C=Jo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=ie.cache,$i()}return!0}d.offset&&E(),S=!0},I,Y,P,W,U=function(){D(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&St.set(f,{y:"+=0"}),t.ignoreCheck=function(z){return or&&z.type==="touchmove"&&w()||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){S=!1;var z=_;_=Jo((se.visualViewport&&se.visualViewport.scale||1)/m),I.pause(),z!==_&&Tu(c,_>1.01?!0:n?!1:"x"),Y=g(),P=d(),D(),v=us},t.onRelease=t.onGestureStart=function(z,G){if(d.offset&&E(),!G)W.restart(!0);else{ie.cache++;var j=x(),C,J;n&&(C=g(),J=C+j*.05*-z.velocityX/.227,j*=$p(g,C,J,Mi(c,gn)),I.vars.scrollX=y(J)),C=d(),J=C+j*.05*-z.velocityY/.227,j*=$p(d,C,J,Mi(c,ze)),I.vars.scrollY=L(J),I.invalidate().duration(j).play(.01),(or&&I.vars.scrollY>=l||C>=l-1)&&St.to({},{onUpdate:U,duration:j})}o&&o(z)},t.onWheel=function(){I._ts&&I.pause(),tn()-p>1e3&&(v=0,p=tn())},t.onChange=function(z,G,j,C,J){if(us!==v&&D(),G&&n&&g(y(C[2]===G?Y+(z.startX-z.x):g()+G-C[1])),j){d.offset&&E();var it=J[2]===j,xt=it?P+z.startY-z.y:d()+j-J[1],O=L(xt);it&&xt!==O&&(P+=O-xt),d(O)}(j||G)&&$i()},t.onEnable=function(){Tu(c,n?!1:"x"),re.addEventListener("refresh",U),$e(se,"resize",U),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),T.enable()},t.onDisable=function(){Tu(c,!0),We(se,"resize",U),re.removeEventListener("refresh",U),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ne(t),a.iOS=or,or&&!d()&&d(1),or&&St.ticker.add(gi),W=a._dc,I=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dg(d,d(),function(){return I.pause()})},onUpdate:$i,onComplete:W.vars.onComplete}),a};re.sort=function(r){return ne.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};re.observe=function(r){return new Ne(r)};re.normalizeScroll=function(r){if(typeof r>"u")return hn;if(r===!0&&hn)return hn.enable();if(r===!1){hn&&hn.kill(),hn=r;return}var t=r instanceof Ne?r:cA(r);return hn&&hn.target===t.target&&hn.kill(),ms(t.target)&&(hn=t),t};re.core={_getVelocityProp:mh,_inputObserver:Ng,_scrollers:ie,_proxies:wi,bridge:{ss:function(){ti||gs("scrollStart"),ti=tn()},ref:function(){return Qe}}};yg()&&St.registerPlugin(re);var En="top",Wn="bottom",$n="right",Sn="left",vc="auto",Po=[En,Wn,$n,Sn],vs="start",yo="end",Og="clippingParents",_f="viewport",qs="popper",Ig="reference",Mh=Po.reduce(function(r,t){return r.concat([t+"-"+vs,t+"-"+yo])},[]),gf=[].concat(Po,[vc]).reduce(function(r,t){return r.concat([t,t+"-"+vs,t+"-"+yo])},[]),Ug="beforeRead",Fg="read",Bg="afterRead",kg="beforeMain",zg="main",Hg="afterMain",Vg="beforeWrite",Gg="write",Wg="afterWrite",$g=[Ug,Fg,Bg,kg,zg,Hg,Vg,Gg,Wg];function Di(r){return r?(r.nodeName||"").toLowerCase():null}function Xn(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var t=r.ownerDocument;return t&&t.defaultView||window}return r}function xs(r){var t=Xn(r).Element;return r instanceof t||r instanceof Element}function ei(r){var t=Xn(r).HTMLElement;return r instanceof t||r instanceof HTMLElement}function vf(r){if(typeof ShadowRoot>"u")return!1;var t=Xn(r).ShadowRoot;return r instanceof t||r instanceof ShadowRoot}function uA(r){var t=r.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!ei(s)||!Di(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function hA(r){var t=r.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],s=t.attributes[n]||{},o=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:e[n]),a=o.reduce(function(l,c){return l[c]="",l},{});!ei(i)||!Di(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const xf={name:"applyStyles",enabled:!0,phase:"write",fn:uA,effect:hA,requires:["computeStyles"]};function Ci(r){return r.split("-")[0]}var hs=Math.max,sc=Math.min,Mo=Math.round;function bh(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Xg(){return!/^((?!chrome|android).)*safari/i.test(bh())}function bo(r,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var n=r.getBoundingClientRect(),i=1,s=1;t&&ei(r)&&(i=r.offsetWidth>0&&Mo(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&Mo(n.height)/r.offsetHeight||1);var o=xs(r)?Xn(r):window,a=o.visualViewport,l=!Xg()&&e,c=(n.left+(l&&a?a.offsetLeft:0))/i,u=(n.top+(l&&a?a.offsetTop:0))/s,h=n.width/i,f=n.height/s;return{width:h,height:f,top:u,right:c+h,bottom:u+f,left:c,x:c,y:u}}function Ef(r){var t=bo(r),e=r.offsetWidth,n=r.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:r.offsetLeft,y:r.offsetTop,width:e,height:n}}function Yg(r,t){var e=t.getRootNode&&t.getRootNode();if(r.contains(t))return!0;if(e&&vf(e)){var n=t;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ki(r){return Xn(r).getComputedStyle(r)}function fA(r){return["table","td","th"].indexOf(Di(r))>=0}function Lr(r){return((xs(r)?r.ownerDocument:r.document)||window.document).documentElement}function xc(r){return Di(r)==="html"?r:r.assignedSlot||r.parentNode||(vf(r)?r.host:null)||Lr(r)}function qp(r){return!ei(r)||Ki(r).position==="fixed"?null:r.offsetParent}function dA(r){var t=/firefox/i.test(bh()),e=/Trident/i.test(bh());if(e&&ei(r)){var n=Ki(r);if(n.position==="fixed")return null}var i=xc(r);for(vf(i)&&(i=i.host);ei(i)&&["html","body"].indexOf(Di(i))<0;){var s=Ki(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ua(r){for(var t=Xn(r),e=qp(r);e&&fA(e)&&Ki(e).position==="static";)e=qp(e);return e&&(Di(e)==="html"||Di(e)==="body"&&Ki(e).position==="static")?t:e||dA(r)||t}function Sf(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function ma(r,t,e){return hs(r,sc(t,e))}function pA(r,t,e){var n=ma(r,t,e);return n>e?e:n}function qg(){return{top:0,right:0,bottom:0,left:0}}function jg(r){return Object.assign({},qg(),r)}function Kg(r,t){return t.reduce(function(e,n){return e[n]=r,e},{})}var mA=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,jg(typeof t!="number"?t:Kg(t,Po))};function _A(r){var t,e=r.state,n=r.name,i=r.options,s=e.elements.arrow,o=e.modifiersData.popperOffsets,a=Ci(e.placement),l=Sf(a),c=[Sn,$n].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var h=mA(i.padding,e),f=Ef(s),d=l==="y"?En:Sn,g=l==="y"?Wn:$n,_=e.rects.reference[u]+e.rects.reference[l]-o[l]-e.rects.popper[u],m=o[l]-e.rects.reference[l],p=Ua(s),x=p?l==="y"?p.clientHeight||0:p.clientWidth||0:0,v=_/2-m/2,S=h[d],T=x-f[u]-h[g],b=x/2-f[u]/2+v,y=ma(S,b,T),L=l;e.modifiersData[n]=(t={},t[L]=y,t.centerOffset=y-b,t)}}function gA(r){var t=r.state,e=r.options,n=e.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Yg(t.elements.popper,i)&&(t.elements.arrow=i))}const Zg={name:"arrow",enabled:!0,phase:"main",fn:_A,effect:gA,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function To(r){return r.split("-")[1]}var vA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function xA(r,t){var e=r.x,n=r.y,i=t.devicePixelRatio||1;return{x:Mo(e*i)/i||0,y:Mo(n*i)/i||0}}function jp(r){var t,e=r.popper,n=r.popperRect,i=r.placement,s=r.variation,o=r.offsets,a=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,h=r.isFixed,f=o.x,d=f===void 0?0:f,g=o.y,_=g===void 0?0:g,m=typeof u=="function"?u({x:d,y:_}):{x:d,y:_};d=m.x,_=m.y;var p=o.hasOwnProperty("x"),x=o.hasOwnProperty("y"),v=Sn,S=En,T=window;if(c){var b=Ua(e),y="clientHeight",L="clientWidth";if(b===Xn(e)&&(b=Lr(e),Ki(b).position!=="static"&&a==="absolute"&&(y="scrollHeight",L="scrollWidth")),b=b,i===En||(i===Sn||i===$n)&&s===yo){S=Wn;var D=h&&b===T&&T.visualViewport?T.visualViewport.height:b[y];_-=D-n.height,_*=l?1:-1}if(i===Sn||(i===En||i===Wn)&&s===yo){v=$n;var E=h&&b===T&&T.visualViewport?T.visualViewport.width:b[L];d-=E-n.width,d*=l?1:-1}}var w=Object.assign({position:a},c&&vA),I=u===!0?xA({x:d,y:_},Xn(e)):{x:d,y:_};if(d=I.x,_=I.y,l){var Y;return Object.assign({},w,(Y={},Y[S]=x?"0":"",Y[v]=p?"0":"",Y.transform=(T.devicePixelRatio||1)<=1?"translate("+d+"px, "+_+"px)":"translate3d("+d+"px, "+_+"px, 0)",Y))}return Object.assign({},w,(t={},t[S]=x?_+"px":"",t[v]=p?d+"px":"",t.transform="",t))}function EA(r){var t=r.state,e=r.options,n=e.gpuAcceleration,i=n===void 0?!0:n,s=e.adaptive,o=s===void 0?!0:s,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:Ci(t.placement),variation:To(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,jp(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,jp(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const yf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:EA,data:{}};var Sl={passive:!0};function SA(r){var t=r.state,e=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,o=n.resize,a=o===void 0?!0:o,l=Xn(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",e.update,Sl)}),a&&l.addEventListener("resize",e.update,Sl),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",e.update,Sl)}),a&&l.removeEventListener("resize",e.update,Sl)}}const Mf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:SA,data:{}};var yA={left:"right",right:"left",bottom:"top",top:"bottom"};function Bl(r){return r.replace(/left|right|bottom|top/g,function(t){return yA[t]})}var MA={start:"end",end:"start"};function Kp(r){return r.replace(/start|end/g,function(t){return MA[t]})}function bf(r){var t=Xn(r),e=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:e,scrollTop:n}}function Tf(r){return bo(Lr(r)).left+bf(r).scrollLeft}function bA(r,t){var e=Xn(r),n=Lr(r),i=e.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var c=Xg();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+Tf(r),y:l}}function TA(r){var t,e=Lr(r),n=bf(r),i=(t=r.ownerDocument)==null?void 0:t.body,s=hs(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=hs(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Tf(r),l=-n.scrollTop;return Ki(i||e).direction==="rtl"&&(a+=hs(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Af(r){var t=Ki(r),e=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+n)}function Jg(r){return["html","body","#document"].indexOf(Di(r))>=0?r.ownerDocument.body:ei(r)&&Af(r)?r:Jg(xc(r))}function _a(r,t){var e;t===void 0&&(t=[]);var n=Jg(r),i=n===((e=r.ownerDocument)==null?void 0:e.body),s=Xn(n),o=i?[s].concat(s.visualViewport||[],Af(n)?n:[]):n,a=t.concat(o);return i?a:a.concat(_a(xc(o)))}function Th(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function AA(r,t){var e=bo(r,!1,t==="fixed");return e.top=e.top+r.clientTop,e.left=e.left+r.clientLeft,e.bottom=e.top+r.clientHeight,e.right=e.left+r.clientWidth,e.width=r.clientWidth,e.height=r.clientHeight,e.x=e.left,e.y=e.top,e}function Zp(r,t,e){return t===_f?Th(bA(r,e)):xs(t)?AA(t,e):Th(TA(Lr(r)))}function wA(r){var t=_a(xc(r)),e=["absolute","fixed"].indexOf(Ki(r).position)>=0,n=e&&ei(r)?Ua(r):r;return xs(n)?t.filter(function(i){return xs(i)&&Yg(i,n)&&Di(i)!=="body"}):[]}function CA(r,t,e,n){var i=t==="clippingParents"?wA(r):[].concat(t),s=[].concat(i,[e]),o=s[0],a=s.reduce(function(l,c){var u=Zp(r,c,n);return l.top=hs(u.top,l.top),l.right=sc(u.right,l.right),l.bottom=sc(u.bottom,l.bottom),l.left=hs(u.left,l.left),l},Zp(r,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Qg(r){var t=r.reference,e=r.element,n=r.placement,i=n?Ci(n):null,s=n?To(n):null,o=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(i){case En:l={x:o,y:t.y-e.height};break;case Wn:l={x:o,y:t.y+t.height};break;case $n:l={x:t.x+t.width,y:a};break;case Sn:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?Sf(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case vs:l[c]=l[c]-(t[u]/2-e[u]/2);break;case yo:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function Ao(r,t){t===void 0&&(t={});var e=t,n=e.placement,i=n===void 0?r.placement:n,s=e.strategy,o=s===void 0?r.strategy:s,a=e.boundary,l=a===void 0?Og:a,c=e.rootBoundary,u=c===void 0?_f:c,h=e.elementContext,f=h===void 0?qs:h,d=e.altBoundary,g=d===void 0?!1:d,_=e.padding,m=_===void 0?0:_,p=jg(typeof m!="number"?m:Kg(m,Po)),x=f===qs?Ig:qs,v=r.rects.popper,S=r.elements[g?x:f],T=CA(xs(S)?S:S.contextElement||Lr(r.elements.popper),l,u,o),b=bo(r.elements.reference),y=Qg({reference:b,element:v,strategy:"absolute",placement:i}),L=Th(Object.assign({},v,y)),D=f===qs?L:b,E={top:T.top-D.top+p.top,bottom:D.bottom-T.bottom+p.bottom,left:T.left-D.left+p.left,right:D.right-T.right+p.right},w=r.modifiersData.offset;if(f===qs&&w){var I=w[i];Object.keys(E).forEach(function(Y){var P=[$n,Wn].indexOf(Y)>=0?1:-1,W=[En,Wn].indexOf(Y)>=0?"y":"x";E[Y]+=I[W]*P})}return E}function RA(r,t){t===void 0&&(t={});var e=t,n=e.placement,i=e.boundary,s=e.rootBoundary,o=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?gf:l,u=To(n),h=u?a?Mh:Mh.filter(function(g){return To(g)===u}):Po,f=h.filter(function(g){return c.indexOf(g)>=0});f.length===0&&(f=h);var d=f.reduce(function(g,_){return g[_]=Ao(r,{placement:_,boundary:i,rootBoundary:s,padding:o})[Ci(_)],g},{});return Object.keys(d).sort(function(g,_){return d[g]-d[_]})}function LA(r){if(Ci(r)===vc)return[];var t=Bl(r);return[Kp(r),t,Kp(t)]}function PA(r){var t=r.state,e=r.options,n=r.name;if(!t.modifiersData[n]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,o=e.altAxis,a=o===void 0?!0:o,l=e.fallbackPlacements,c=e.padding,u=e.boundary,h=e.rootBoundary,f=e.altBoundary,d=e.flipVariations,g=d===void 0?!0:d,_=e.allowedAutoPlacements,m=t.options.placement,p=Ci(m),x=p===m,v=l||(x||!g?[Bl(m)]:LA(m)),S=[m].concat(v).reduce(function(O,Z){return O.concat(Ci(Z)===vc?RA(t,{placement:Z,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:_}):Z)},[]),T=t.rects.reference,b=t.rects.popper,y=new Map,L=!0,D=S[0],E=0;E<S.length;E++){var w=S[E],I=Ci(w),Y=To(w)===vs,P=[En,Wn].indexOf(I)>=0,W=P?"width":"height",U=Ao(t,{placement:w,boundary:u,rootBoundary:h,altBoundary:f,padding:c}),z=P?Y?$n:Sn:Y?Wn:En;T[W]>b[W]&&(z=Bl(z));var G=Bl(z),j=[];if(s&&j.push(U[I]<=0),a&&j.push(U[z]<=0,U[G]<=0),j.every(function(O){return O})){D=w,L=!1;break}y.set(w,j)}if(L)for(var C=g?3:1,J=function(Z){var rt=S.find(function(gt){var ut=y.get(gt);if(ut)return ut.slice(0,Z).every(function(ft){return ft})});if(rt)return D=rt,"break"},it=C;it>0;it--){var xt=J(it);if(xt==="break")break}t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}}const tv={name:"flip",enabled:!0,phase:"main",fn:PA,requiresIfExists:["offset"],data:{_skip:!1}};function Jp(r,t,e){return e===void 0&&(e={x:0,y:0}),{top:r.top-t.height-e.y,right:r.right-t.width+e.x,bottom:r.bottom-t.height+e.y,left:r.left-t.width-e.x}}function Qp(r){return[En,$n,Wn,Sn].some(function(t){return r[t]>=0})}function DA(r){var t=r.state,e=r.name,n=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Ao(t,{elementContext:"reference"}),a=Ao(t,{altBoundary:!0}),l=Jp(o,n),c=Jp(a,i,s),u=Qp(l),h=Qp(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const ev={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:DA};function NA(r,t,e){var n=Ci(r),i=[Sn,En].indexOf(n)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:r})):e,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Sn,$n].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function OA(r){var t=r.state,e=r.options,n=r.name,i=e.offset,s=i===void 0?[0,0]:i,o=gf.reduce(function(u,h){return u[h]=NA(h,t.rects,s),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=o}const nv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:OA};function IA(r){var t=r.state,e=r.name;t.modifiersData[e]=Qg({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wf={name:"popperOffsets",enabled:!0,phase:"read",fn:IA,data:{}};function UA(r){return r==="x"?"y":"x"}function FA(r){var t=r.state,e=r.options,n=r.name,i=e.mainAxis,s=i===void 0?!0:i,o=e.altAxis,a=o===void 0?!1:o,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,h=e.padding,f=e.tether,d=f===void 0?!0:f,g=e.tetherOffset,_=g===void 0?0:g,m=Ao(t,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),p=Ci(t.placement),x=To(t.placement),v=!x,S=Sf(p),T=UA(S),b=t.modifiersData.popperOffsets,y=t.rects.reference,L=t.rects.popper,D=typeof _=="function"?_(Object.assign({},t.rects,{placement:t.placement})):_,E=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),w=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(b){if(s){var Y,P=S==="y"?En:Sn,W=S==="y"?Wn:$n,U=S==="y"?"height":"width",z=b[S],G=z+m[P],j=z-m[W],C=d?-L[U]/2:0,J=x===vs?y[U]:L[U],it=x===vs?-L[U]:-y[U],xt=t.elements.arrow,O=d&&xt?Ef(xt):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:qg(),rt=Z[P],gt=Z[W],ut=ma(0,y[U],O[U]),ft=v?y[U]/2-C-ut-rt-E.mainAxis:J-ut-rt-E.mainAxis,Kt=v?-y[U]/2+C+ut+gt+E.mainAxis:it+ut+gt+E.mainAxis,bt=t.elements.arrow&&Ua(t.elements.arrow),B=bt?S==="y"?bt.clientTop||0:bt.clientLeft||0:0,Ft=(Y=w==null?void 0:w[S])!=null?Y:0,vt=z+ft-Ft-B,Ot=z+Kt-Ft,yt=ma(d?sc(G,vt):G,z,d?hs(j,Ot):j);b[S]=yt,I[S]=yt-z}if(a){var H,It=S==="x"?En:Sn,Vt=S==="x"?Wn:$n,te=b[T],R=T==="y"?"height":"width",M=te+m[It],K=te-m[Vt],Q=[En,Sn].indexOf(p)!==-1,tt=(H=w==null?void 0:w[T])!=null?H:0,et=Q?M:te-y[R]-L[R]-tt+E.altAxis,Et=Q?te+y[R]+L[R]-tt-E.altAxis:K,Rt=d&&Q?pA(et,te,Et):ma(d?et:M,te,d?Et:K);b[T]=Rt,I[T]=Rt-te}t.modifiersData[n]=I}}const iv={name:"preventOverflow",enabled:!0,phase:"main",fn:FA,requiresIfExists:["offset"]};function BA(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function kA(r){return r===Xn(r)||!ei(r)?bf(r):BA(r)}function zA(r){var t=r.getBoundingClientRect(),e=Mo(t.width)/r.offsetWidth||1,n=Mo(t.height)/r.offsetHeight||1;return e!==1||n!==1}function HA(r,t,e){e===void 0&&(e=!1);var n=ei(t),i=ei(t)&&zA(t),s=Lr(t),o=bo(r,i,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!e)&&((Di(t)!=="body"||Af(s))&&(a=kA(t)),ei(t)?(l=bo(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=Tf(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function VA(r){var t=new Map,e=new Set,n=[];r.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&i(l)}}),n.push(s)}return r.forEach(function(s){e.has(s.name)||i(s)}),n}function GA(r){var t=VA(r);return $g.reduce(function(e,n){return e.concat(t.filter(function(i){return i.phase===n}))},[])}function WA(r){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(r())})})),t}}function $A(r){var t=r.reduce(function(e,n){var i=e[n.name];return e[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,e},{});return Object.keys(t).map(function(e){return t[e]})}var tm={placement:"bottom",modifiers:[],strategy:"absolute"};function em(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ec(r){r===void 0&&(r={});var t=r,e=t.defaultModifiers,n=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?tm:i;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},tm,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],f=!1,d={state:u,setOptions:function(p){var x=typeof p=="function"?p(u.options):p;_(),u.options=Object.assign({},s,u.options,x),u.scrollParents={reference:xs(a)?_a(a):a.contextElement?_a(a.contextElement):[],popper:_a(l)};var v=GA($A([].concat(n,u.options.modifiers)));return u.orderedModifiers=v.filter(function(S){return S.enabled}),g(),d.update()},forceUpdate:function(){if(!f){var p=u.elements,x=p.reference,v=p.popper;if(em(x,v)){u.rects={reference:HA(x,Ua(v),u.options.strategy==="fixed"),popper:Ef(v)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var T=u.orderedModifiers[S],b=T.fn,y=T.options,L=y===void 0?{}:y,D=T.name;typeof b=="function"&&(u=b({state:u,options:L,name:D,instance:d})||u)}}}},update:WA(function(){return new Promise(function(m){d.forceUpdate(),m(u)})}),destroy:function(){_(),f=!0}};if(!em(a,l))return d;d.setOptions(c).then(function(m){!f&&c.onFirstUpdate&&c.onFirstUpdate(m)});function g(){u.orderedModifiers.forEach(function(m){var p=m.name,x=m.options,v=x===void 0?{}:x,S=m.effect;if(typeof S=="function"){var T=S({state:u,name:p,instance:d,options:v}),b=function(){};h.push(T||b)}})}function _(){h.forEach(function(m){return m()}),h=[]}return d}}var XA=Ec(),YA=[Mf,wf,yf,xf],qA=Ec({defaultModifiers:YA}),jA=[Mf,wf,yf,xf,nv,tv,iv,Zg,ev],Cf=Ec({defaultModifiers:jA});const rv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Hg,afterRead:Bg,afterWrite:Wg,applyStyles:xf,arrow:Zg,auto:vc,basePlacements:Po,beforeMain:kg,beforeRead:Ug,beforeWrite:Vg,bottom:Wn,clippingParents:Og,computeStyles:yf,createPopper:Cf,createPopperBase:XA,createPopperLite:qA,detectOverflow:Ao,end:yo,eventListeners:Mf,flip:tv,hide:ev,left:Sn,main:zg,modifierPhases:$g,offset:nv,placements:gf,popper:qs,popperGenerator:Ec,popperOffsets:wf,preventOverflow:iv,read:Fg,reference:Ig,right:$n,start:vs,top:En,variationPlacements:Mh,viewport:_f,write:Gg},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const sr=new Map,Au={set(r,t,e){sr.has(r)||sr.set(r,new Map);const n=sr.get(r);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(r,t){return sr.has(r)&&sr.get(r).get(t)||null},remove(r,t){if(!sr.has(r))return;const e=sr.get(r);e.delete(t),e.size===0&&sr.delete(r)}},KA=1e6,ZA=1e3,Ah="transitionend",sv=r=>(r&&window.CSS&&window.CSS.escape&&(r=r.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),r),JA=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),QA=r=>{do r+=Math.floor(Math.random()*KA);while(document.getElementById(r));return r},tw=r=>{if(!r)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(r);const n=Number.parseFloat(t),i=Number.parseFloat(e);return!n&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*ZA)},ov=r=>{r.dispatchEvent(new Event(Ah))},Xi=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),Tr=r=>Xi(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(sv(r)):null,Do=r=>{if(!Xi(r)||r.getClientRects().length===0)return!1;const t=getComputedStyle(r).getPropertyValue("visibility")==="visible",e=r.closest("details:not([open])");if(!e)return t;if(e!==r){const n=r.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},Ar=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",av=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){const t=r.getRootNode();return t instanceof ShadowRoot?t:null}return r instanceof ShadowRoot?r:r.parentNode?av(r.parentNode):null},oc=()=>{},Fa=r=>{r.offsetHeight},lv=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,wu=[],ew=r=>{document.readyState==="loading"?(wu.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of wu)t()}),wu.push(r)):r()},ii=()=>document.documentElement.dir==="rtl",si=r=>{ew(()=>{const t=lv();if(t){const e=r.NAME,n=t.fn[e];t.fn[e]=r.jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=()=>(t.fn[e]=n,r.jQueryInterface)}})},bn=(r,t=[],e=r)=>typeof r=="function"?r(...t):e,cv=(r,t,e=!0)=>{if(!e){bn(r);return}const n=5,i=tw(t)+n;let s=!1;const o=({target:a})=>{a===t&&(s=!0,t.removeEventListener(Ah,o),bn(r))};t.addEventListener(Ah,o),setTimeout(()=>{s||ov(t)},i)},Rf=(r,t,e,n)=>{const i=r.length;let s=r.indexOf(t);return s===-1?!e&&n?r[i-1]:r[0]:(s+=e?1:-1,n&&(s=(s+i)%i),r[Math.max(0,Math.min(s,i-1))])},nw=/[^.]*(?=\..*)\.|.*/,iw=/\..*/,rw=/::\d+$/,Cu={};let nm=1;const uv={mouseenter:"mouseover",mouseleave:"mouseout"},sw=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function hv(r,t){return t&&`${t}::${nm++}`||r.uidEvent||nm++}function fv(r){const t=hv(r);return r.uidEvent=t,Cu[t]=Cu[t]||{},Cu[t]}function ow(r,t){return function e(n){return Lf(n,{delegateTarget:r}),e.oneOff&&st.off(r,n.type,t),t.apply(r,[n])}}function aw(r,t,e){return function n(i){const s=r.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return Lf(i,{delegateTarget:o}),n.oneOff&&st.off(r,i.type,t,e),e.apply(o,[i])}}function dv(r,t,e=null){return Object.values(r).find(n=>n.callable===t&&n.delegationSelector===e)}function pv(r,t,e){const n=typeof t=="string",i=n?e:t||e;let s=mv(r);return sw.has(s)||(s=r),[n,i,s]}function im(r,t,e,n,i){if(typeof t!="string"||!r)return;let[s,o,a]=pv(t,e,n);t in uv&&(o=(g=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return g.call(this,_)})(o));const l=fv(r),c=l[a]||(l[a]={}),u=dv(c,o,s?e:null);if(u){u.oneOff=u.oneOff&&i;return}const h=hv(o,t.replace(nw,"")),f=s?aw(r,e,o):ow(r,o);f.delegationSelector=s?e:null,f.callable=o,f.oneOff=i,f.uidEvent=h,c[h]=f,r.addEventListener(a,f,s)}function wh(r,t,e,n,i){const s=dv(t[e],n,i);s&&(r.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function lw(r,t,e,n){const i=t[e]||{};for(const[s,o]of Object.entries(i))s.includes(n)&&wh(r,t,e,o.callable,o.delegationSelector)}function mv(r){return r=r.replace(iw,""),uv[r]||r}const st={on(r,t,e,n){im(r,t,e,n,!1)},one(r,t,e,n){im(r,t,e,n,!0)},off(r,t,e,n){if(typeof t!="string"||!r)return;const[i,s,o]=pv(t,e,n),a=o!==t,l=fv(r),c=l[o]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;wh(r,l,o,s,i?e:null);return}if(u)for(const h of Object.keys(l))lw(r,l,h,t.slice(1));for(const[h,f]of Object.entries(c)){const d=h.replace(rw,"");(!a||t.includes(d))&&wh(r,l,o,f.callable,f.delegationSelector)}},trigger(r,t,e){if(typeof t!="string"||!r)return null;const n=lv(),i=mv(t),s=t!==i;let o=null,a=!0,l=!0,c=!1;s&&n&&(o=n.Event(t,e),n(r).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=Lf(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&r.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Lf(r,t={}){for(const[e,n]of Object.entries(t))try{r[e]=n}catch{Object.defineProperty(r,e,{configurable:!0,get(){return n}})}return r}function rm(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function Ru(r){return r.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Yi={setDataAttribute(r,t,e){r.setAttribute(`data-bs-${Ru(t)}`,e)},removeDataAttribute(r,t){r.removeAttribute(`data-bs-${Ru(t)}`)},getDataAttributes(r){if(!r)return{};const t={},e=Object.keys(r.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=rm(r.dataset[n])}return t},getDataAttribute(r,t){return rm(r.getAttribute(`data-bs-${Ru(t)}`))}};class Ba{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=Xi(e)?Yi.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...Xi(e)?Yi.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,i]of Object.entries(e)){const s=t[n],o=Xi(s)?"element":JA(s);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)}}}const cw="5.3.3";class mi extends Ba{constructor(t,e){super(),t=Tr(t),t&&(this._element=t,this._config=this._getConfig(e),Au.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Au.remove(this._element,this.constructor.DATA_KEY),st.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){cv(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Au.get(Tr(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return cw}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Lu=r=>{let t=r.getAttribute("data-bs-target");if(!t||t==="#"){let e=r.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>sv(e)).join(","):null},Ht={find(r,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,r))},findOne(r,t=document.documentElement){return Element.prototype.querySelector.call(t,r)},children(r,t){return[].concat(...r.children).filter(e=>e.matches(t))},parents(r,t){const e=[];let n=r.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(r,t){let e=r.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(r,t){let e=r.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(r){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,r).filter(e=>!Ar(e)&&Do(e))},getSelectorFromElement(r){const t=Lu(r);return t&&Ht.findOne(t)?t:null},getElementFromSelector(r){const t=Lu(r);return t?Ht.findOne(t):null},getMultipleElementsFromSelector(r){const t=Lu(r);return t?Ht.find(t):[]}},Sc=(r,t="hide")=>{const e=`click.dismiss${r.EVENT_KEY}`,n=r.NAME;st.on(document,e,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ar(this))return;const s=Ht.getElementFromSelector(this)||this.closest(`.${n}`);r.getOrCreateInstance(s)[t]()})},uw="alert",hw="bs.alert",_v=`.${hw}`,fw=`close${_v}`,dw=`closed${_v}`,pw="fade",mw="show";class yc extends mi{static get NAME(){return uw}close(){if(st.trigger(this._element,fw).defaultPrevented)return;this._element.classList.remove(mw);const e=this._element.classList.contains(pw);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),st.trigger(this._element,dw),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=yc.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Sc(yc,"close");si(yc);const _w="button",gw="bs.button",vw=`.${gw}`,xw=".data-api",Ew="active",sm='[data-bs-toggle="button"]',Sw=`click${vw}${xw}`;class Mc extends mi{static get NAME(){return _w}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ew))}static jQueryInterface(t){return this.each(function(){const e=Mc.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}st.on(document,Sw,sm,r=>{r.preventDefault();const t=r.target.closest(sm);Mc.getOrCreateInstance(t).toggle()});si(Mc);const yw="swipe",No=".bs.swipe",Mw=`touchstart${No}`,bw=`touchmove${No}`,Tw=`touchend${No}`,Aw=`pointerdown${No}`,ww=`pointerup${No}`,Cw="touch",Rw="pen",Lw="pointer-event",Pw=40,Dw={endCallback:null,leftCallback:null,rightCallback:null},Nw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ac extends Ba{constructor(t,e){super(),this._element=t,!(!t||!ac.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Dw}static get DefaultType(){return Nw}static get NAME(){return yw}dispose(){st.off(this._element,No)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),bn(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Pw)return;const e=t/this._deltaX;this._deltaX=0,e&&bn(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(st.on(this._element,Aw,t=>this._start(t)),st.on(this._element,ww,t=>this._end(t)),this._element.classList.add(Lw)):(st.on(this._element,Mw,t=>this._start(t)),st.on(this._element,bw,t=>this._move(t)),st.on(this._element,Tw,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Rw||t.pointerType===Cw)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ow="carousel",Iw="bs.carousel",Pr=`.${Iw}`,gv=".data-api",Uw="ArrowLeft",Fw="ArrowRight",Bw=500,$o="next",Gs="prev",js="left",kl="right",kw=`slide${Pr}`,Pu=`slid${Pr}`,zw=`keydown${Pr}`,Hw=`mouseenter${Pr}`,Vw=`mouseleave${Pr}`,Gw=`dragstart${Pr}`,Ww=`load${Pr}${gv}`,$w=`click${Pr}${gv}`,vv="carousel",yl="active",Xw="slide",Yw="carousel-item-end",qw="carousel-item-start",jw="carousel-item-next",Kw="carousel-item-prev",xv=".active",Ev=".carousel-item",Zw=xv+Ev,Jw=".carousel-item img",Qw=".carousel-indicators",t1="[data-bs-slide], [data-bs-slide-to]",e1='[data-bs-ride="carousel"]',n1={[Uw]:kl,[Fw]:js},i1={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},r1={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ka extends mi{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Ht.findOne(Qw,this._element),this._addEventListeners(),this._config.ride===vv&&this.cycle()}static get Default(){return i1}static get DefaultType(){return r1}static get NAME(){return Ow}next(){this._slide($o)}nextWhenVisible(){!document.hidden&&Do(this._element)&&this.next()}prev(){this._slide(Gs)}pause(){this._isSliding&&ov(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){st.one(this._element,Pu,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){st.one(this._element,Pu,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const i=t>n?$o:Gs;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&st.on(this._element,zw,t=>this._keydown(t)),this._config.pause==="hover"&&(st.on(this._element,Hw,()=>this.pause()),st.on(this._element,Vw,()=>this._maybeEnableCycle())),this._config.touch&&ac.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Ht.find(Jw,this._element))st.on(n,Gw,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(js)),rightCallback:()=>this._slide(this._directionToOrder(kl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Bw+this._config.interval))}};this._swipeHelper=new ac(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=n1[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Ht.findOne(xv,this._indicatorsElement);e.classList.remove(yl),e.removeAttribute("aria-current");const n=Ht.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(yl),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),i=t===$o,s=e||Rf(this._getItems(),n,i,this._config.wrap);if(s===n)return;const o=this._getItemIndex(s),a=d=>st.trigger(this._element,d,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:o});if(a(kw).defaultPrevented||!n||!s)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const u=i?qw:Yw,h=i?jw:Kw;s.classList.add(h),Fa(s),n.classList.add(u),s.classList.add(u);const f=()=>{s.classList.remove(u,h),s.classList.add(yl),n.classList.remove(yl,h,u),this._isSliding=!1,a(Pu)};this._queueCallback(f,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Xw)}_getActive(){return Ht.findOne(Zw,this._element)}_getItems(){return Ht.find(Ev,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return ii()?t===js?Gs:$o:t===js?$o:Gs}_orderToDirection(t){return ii()?t===Gs?js:kl:t===Gs?kl:js}static jQueryInterface(t){return this.each(function(){const e=ka.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}st.on(document,$w,t1,function(r){const t=Ht.getElementFromSelector(this);if(!t||!t.classList.contains(vv))return;r.preventDefault();const e=ka.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){e.to(n),e._maybeEnableCycle();return}if(Yi.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});st.on(window,Ww,()=>{const r=Ht.find(e1);for(const t of r)ka.getOrCreateInstance(t)});si(ka);const s1="collapse",o1="bs.collapse",za=`.${o1}`,a1=".data-api",l1=`show${za}`,c1=`shown${za}`,u1=`hide${za}`,h1=`hidden${za}`,f1=`click${za}${a1}`,Du="show",no="collapse",Ml="collapsing",d1="collapsed",p1=`:scope .${no} .${no}`,m1="collapse-horizontal",_1="width",g1="height",v1=".collapse.show, .collapse.collapsing",Ch='[data-bs-toggle="collapse"]',x1={parent:null,toggle:!0},E1={parent:"(null|element)",toggle:"boolean"};class La extends mi{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Ht.find(Ch);for(const i of n){const s=Ht.getSelectorFromElement(i),o=Ht.find(s).filter(a=>a===this._element);s!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return x1}static get DefaultType(){return E1}static get NAME(){return s1}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(v1).filter(a=>a!==this._element).map(a=>La.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||st.trigger(this._element,l1).defaultPrevented)return;for(const a of t)a.hide();const n=this._getDimension();this._element.classList.remove(no),this._element.classList.add(Ml),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ml),this._element.classList.add(no,Du),this._element.style[n]="",st.trigger(this._element,c1)},o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||st.trigger(this._element,u1).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Fa(this._element),this._element.classList.add(Ml),this._element.classList.remove(no,Du);for(const i of this._triggerArray){const s=Ht.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Ml),this._element.classList.add(no),st.trigger(this._element,h1)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Du)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Tr(t.parent),t}_getDimension(){return this._element.classList.contains(m1)?_1:g1}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ch);for(const e of t){const n=Ht.getElementFromSelector(e);n&&this._addAriaAndCollapsedClass([e],this._isShown(n))}}_getFirstLevelChildren(t){const e=Ht.find(p1,this._config.parent);return Ht.find(t,this._config.parent).filter(n=>!e.includes(n))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(d1,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const n=La.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}st.on(document,f1,Ch,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const t of Ht.getMultipleElementsFromSelector(this))La.getOrCreateInstance(t,{toggle:!1}).toggle()});si(La);const om="dropdown",S1="bs.dropdown",ys=`.${S1}`,Pf=".data-api",y1="Escape",am="Tab",M1="ArrowUp",lm="ArrowDown",b1=2,T1=`hide${ys}`,A1=`hidden${ys}`,w1=`show${ys}`,C1=`shown${ys}`,Sv=`click${ys}${Pf}`,yv=`keydown${ys}${Pf}`,R1=`keyup${ys}${Pf}`,Ks="show",L1="dropup",P1="dropend",D1="dropstart",N1="dropup-center",O1="dropdown-center",ts='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',I1=`${ts}.${Ks}`,zl=".dropdown-menu",U1=".navbar",F1=".navbar-nav",B1=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",k1=ii()?"top-end":"top-start",z1=ii()?"top-start":"top-end",H1=ii()?"bottom-end":"bottom-start",V1=ii()?"bottom-start":"bottom-end",G1=ii()?"left-start":"right-start",W1=ii()?"right-start":"left-start",$1="top",X1="bottom",Y1={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},q1={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ri extends mi{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Ht.next(this._element,zl)[0]||Ht.prev(this._element,zl)[0]||Ht.findOne(zl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Y1}static get DefaultType(){return q1}static get NAME(){return om}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ar(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!st.trigger(this._element,w1,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(F1))for(const n of[].concat(...document.body.children))st.on(n,"mouseover",oc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ks),this._element.classList.add(Ks),st.trigger(this._element,C1,t)}}hide(){if(Ar(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!st.trigger(this._element,T1,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))st.off(n,"mouseover",oc);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ks),this._element.classList.remove(Ks),this._element.setAttribute("aria-expanded","false"),Yi.removeDataAttribute(this._menu,"popper"),st.trigger(this._element,A1,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Xi(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${om.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof rv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Xi(this._config.reference)?t=Tr(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Cf(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ks)}_getPlacement(){const t=this._parent;if(t.classList.contains(P1))return G1;if(t.classList.contains(D1))return W1;if(t.classList.contains(N1))return $1;if(t.classList.contains(O1))return X1;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(L1)?e?z1:k1:e?V1:H1}_detectNavbar(){return this._element.closest(U1)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Yi.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...bn(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const n=Ht.find(B1,this._menu).filter(i=>Do(i));n.length&&Rf(n,e,t===lm,!n.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Ri.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===b1||t.type==="keyup"&&t.key!==am)return;const e=Ht.find(I1);for(const n of e){const i=Ri.getInstance(n);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),o=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===am||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===y1,i=[M1,lm].includes(t.key);if(!i&&!n||e&&!n)return;t.preventDefault();const s=this.matches(ts)?this:Ht.prev(this,ts)[0]||Ht.next(this,ts)[0]||Ht.findOne(ts,t.delegateTarget.parentNode),o=Ri.getOrCreateInstance(s);if(i){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}st.on(document,yv,ts,Ri.dataApiKeydownHandler);st.on(document,yv,zl,Ri.dataApiKeydownHandler);st.on(document,Sv,Ri.clearMenus);st.on(document,R1,Ri.clearMenus);st.on(document,Sv,ts,function(r){r.preventDefault(),Ri.getOrCreateInstance(this).toggle()});si(Ri);const Mv="backdrop",j1="fade",cm="show",um=`mousedown.bs.${Mv}`,K1={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Z1={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class bv extends Ba{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return K1}static get DefaultType(){return Z1}static get NAME(){return Mv}show(t){if(!this._config.isVisible){bn(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Fa(e),e.classList.add(cm),this._emulateAnimation(()=>{bn(t)})}hide(t){if(!this._config.isVisible){bn(t);return}this._getElement().classList.remove(cm),this._emulateAnimation(()=>{this.dispose(),bn(t)})}dispose(){this._isAppended&&(st.off(this._element,um),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(j1),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Tr(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),st.on(t,um,()=>{bn(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){cv(t,this._getElement(),this._config.isAnimated)}}const J1="focustrap",Q1="bs.focustrap",lc=`.${Q1}`,tC=`focusin${lc}`,eC=`keydown.tab${lc}`,nC="Tab",iC="forward",hm="backward",rC={autofocus:!0,trapElement:null},sC={autofocus:"boolean",trapElement:"element"};class Tv extends Ba{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return rC}static get DefaultType(){return sC}static get NAME(){return J1}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),st.off(document,lc),st.on(document,tC,t=>this._handleFocusin(t)),st.on(document,eC,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,st.off(document,lc))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=Ht.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===hm?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===nC&&(this._lastTabNavDirection=t.shiftKey?hm:iC)}}const fm=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",dm=".sticky-top",bl="padding-right",pm="margin-right";class Rh{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,bl,e=>e+t),this._setElementAttributes(fm,bl,e=>e+t),this._setElementAttributes(dm,pm,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,bl),this._resetElementAttributes(fm,bl),this._resetElementAttributes(dm,pm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,e);const a=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&Yi.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=i=>{const s=Yi.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}Yi.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(Xi(t)){e(t);return}for(const n of Ht.find(t,this._element))e(n)}}const oC="modal",aC="bs.modal",ri=`.${aC}`,lC=".data-api",cC="Escape",uC=`hide${ri}`,hC=`hidePrevented${ri}`,Av=`hidden${ri}`,wv=`show${ri}`,fC=`shown${ri}`,dC=`resize${ri}`,pC=`click.dismiss${ri}`,mC=`mousedown.dismiss${ri}`,_C=`keydown.dismiss${ri}`,gC=`click${ri}${lC}`,mm="modal-open",vC="fade",_m="show",Nu="modal-static",xC=".modal.show",EC=".modal-dialog",SC=".modal-body",yC='[data-bs-toggle="modal"]',MC={backdrop:!0,focus:!0,keyboard:!0},bC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Es extends mi{constructor(t,e){super(t,e),this._dialog=Ht.findOne(EC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Rh,this._addEventListeners()}static get Default(){return MC}static get DefaultType(){return bC}static get NAME(){return oC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||st.trigger(this._element,wv,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(mm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||st.trigger(this._element,uC).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(_m),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){st.off(window,ri),st.off(this._dialog,ri),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bv({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Tv({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Ht.findOne(SC,this._dialog);e&&(e.scrollTop=0),Fa(this._element),this._element.classList.add(_m);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,st.trigger(this._element,fC,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){st.on(this._element,_C,t=>{if(t.key===cC){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),st.on(window,dC,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),st.on(this._element,mC,t=>{st.one(this._element,pC,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(mm),this._resetAdjustments(),this._scrollBar.reset(),st.trigger(this._element,Av)})}_isAnimated(){return this._element.classList.contains(vC)}_triggerBackdropTransition(){if(st.trigger(this._element,hC).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Nu)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Nu),this._queueCallback(()=>{this._element.classList.remove(Nu),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const i=ii()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!n&&t){const i=ii()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=Es.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}st.on(document,gC,yC,function(r){const t=Ht.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),st.one(t,wv,i=>{i.defaultPrevented||st.one(t,Av,()=>{Do(this)&&this.focus()})});const e=Ht.findOne(xC);e&&Es.getInstance(e).hide(),Es.getOrCreateInstance(t).toggle(this)});Sc(Es);si(Es);const TC="offcanvas",AC="bs.offcanvas",Ji=`.${AC}`,Cv=".data-api",wC=`load${Ji}${Cv}`,CC="Escape",gm="show",vm="showing",xm="hiding",RC="offcanvas-backdrop",Rv=".offcanvas.show",LC=`show${Ji}`,PC=`shown${Ji}`,DC=`hide${Ji}`,Em=`hidePrevented${Ji}`,Lv=`hidden${Ji}`,NC=`resize${Ji}`,OC=`click${Ji}${Cv}`,IC=`keydown.dismiss${Ji}`,UC='[data-bs-toggle="offcanvas"]',FC={backdrop:!0,keyboard:!0,scroll:!1},BC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class wr extends mi{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return FC}static get DefaultType(){return BC}static get NAME(){return TC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||st.trigger(this._element,LC,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Rh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(vm);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(gm),this._element.classList.remove(vm),st.trigger(this._element,PC,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||st.trigger(this._element,DC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(xm),this._backdrop.hide();const e=()=>{this._element.classList.remove(gm,xm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Rh().reset(),st.trigger(this._element,Lv)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){st.trigger(this._element,Em);return}this.hide()},e=!!this._config.backdrop;return new bv({className:RC,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Tv({trapElement:this._element})}_addEventListeners(){st.on(this._element,IC,t=>{if(t.key===CC){if(this._config.keyboard){this.hide();return}st.trigger(this._element,Em)}})}static jQueryInterface(t){return this.each(function(){const e=wr.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}st.on(document,OC,UC,function(r){const t=Ht.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Ar(this))return;st.one(t,Lv,()=>{Do(this)&&this.focus()});const e=Ht.findOne(Rv);e&&e!==t&&wr.getInstance(e).hide(),wr.getOrCreateInstance(t).toggle(this)});st.on(window,wC,()=>{for(const r of Ht.find(Rv))wr.getOrCreateInstance(r).show()});st.on(window,NC,()=>{for(const r of Ht.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(r).position!=="fixed"&&wr.getOrCreateInstance(r).hide()});Sc(wr);si(wr);const kC=/^aria-[\w-]*$/i,Pv={"*":["class","dir","id","lang","role",kC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},zC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),HC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,VC=(r,t)=>{const e=r.nodeName.toLowerCase();return t.includes(e)?zC.has(e)?!!HC.test(r.nodeValue):!0:t.filter(n=>n instanceof RegExp).some(n=>n.test(e))};function GC(r,t,e){if(!r.length)return r;if(e&&typeof e=="function")return e(r);const i=new window.DOMParser().parseFromString(r,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)VC(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const WC="TemplateFactory",$C={allowList:Pv,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},XC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},YC={entry:"(string|element|function|null)",selector:"(string|element)"};class qC extends Ba{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return $C}static get DefaultType(){return XC}static get NAME(){return WC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},YC)}_setContent(t,e,n){const i=Ht.findOne(n,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(Xi(e)){this._putElementInTemplate(Tr(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?GC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return bn(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const jC="tooltip",KC=new Set(["sanitize","allowList","sanitizeFn"]),Ou="fade",ZC="modal",Tl="show",JC=".tooltip-inner",Sm=`.${ZC}`,ym="hide.bs.modal",Xo="hover",Iu="focus",QC="click",tR="manual",eR="hide",nR="hidden",iR="show",rR="shown",sR="inserted",oR="click",aR="focusin",lR="focusout",cR="mouseenter",uR="mouseleave",hR={AUTO:"auto",TOP:"top",RIGHT:ii()?"left":"right",BOTTOM:"bottom",LEFT:ii()?"right":"left"},fR={allowList:Pv,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dR={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Oo extends mi{constructor(t,e){if(typeof rv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return fR}static get DefaultType(){return dR}static get NAME(){return jC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),st.off(this._element.closest(Sm),ym,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=st.trigger(this._element,this.constructor.eventName(iR)),n=(av(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),st.trigger(this._element,this.constructor.eventName(sR))),this._popper=this._createPopper(i),i.classList.add(Tl),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))st.on(a,"mouseover",oc);const o=()=>{st.trigger(this._element,this.constructor.eventName(rR)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||st.trigger(this._element,this.constructor.eventName(eR)).defaultPrevented)return;if(this._getTipElement().classList.remove(Tl),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))st.off(i,"mouseover",oc);this._activeTrigger[QC]=!1,this._activeTrigger[Iu]=!1,this._activeTrigger[Xo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),st.trigger(this._element,this.constructor.eventName(nR)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ou,Tl),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=QA(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(Ou),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new qC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[JC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ou)}_isShown(){return this.tip&&this.tip.classList.contains(Tl)}_createPopper(t){const e=bn(this._config.placement,[this,t,this._element]),n=hR[e.toUpperCase()];return Cf(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return bn(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...e,...bn(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")st.on(this._element,this.constructor.eventName(oR),this._config.selector,n=>{this._initializeOnDelegatedTarget(n).toggle()});else if(e!==tR){const n=e===Xo?this.constructor.eventName(cR):this.constructor.eventName(aR),i=e===Xo?this.constructor.eventName(uR):this.constructor.eventName(lR);st.on(this._element,n,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?Iu:Xo]=!0,o._enter()}),st.on(this._element,i,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?Iu:Xo]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},st.on(this._element.closest(Sm),ym,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Yi.getDataAttributes(this._element);for(const n of Object.keys(e))KC.has(n)&&delete e[n];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Tr(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,n]of Object.entries(this._config))this.constructor.Default[e]!==n&&(t[e]=n);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Oo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}si(Oo);const pR="popover",mR=".popover-header",_R=".popover-body",gR={...Oo.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},vR={...Oo.DefaultType,content:"(null|string|element|function)"};class Df extends Oo{static get Default(){return gR}static get DefaultType(){return vR}static get NAME(){return pR}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[mR]:this._getTitle(),[_R]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Df.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}si(Df);const xR="scrollspy",ER="bs.scrollspy",Nf=`.${ER}`,SR=".data-api",yR=`activate${Nf}`,Mm=`click${Nf}`,MR=`load${Nf}${SR}`,bR="dropdown-item",Ws="active",TR='[data-bs-spy="scroll"]',Uu="[href]",AR=".nav, .list-group",bm=".nav-link",wR=".nav-item",CR=".list-group-item",RR=`${bm}, ${wR} > ${bm}, ${CR}`,LR=".dropdown",PR=".dropdown-toggle",DR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},NR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class bc extends mi{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return DR}static get DefaultType(){return NR}static get NAME(){return xR}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Tr(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(st.off(this._config.target,Mm),st.on(this._config.target,Mm,Uu,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}n.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),n=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(n(o),!i)return;continue}!s&&!a&&n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Ht.find(Uu,this._config.target);for(const e of t){if(!e.hash||Ar(e))continue;const n=Ht.findOne(decodeURI(e.hash),this._element);Do(n)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,n))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ws),this._activateParents(t),st.trigger(this._element,yR,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(bR)){Ht.findOne(PR,t.closest(LR)).classList.add(Ws);return}for(const e of Ht.parents(t,AR))for(const n of Ht.prev(e,RR))n.classList.add(Ws)}_clearActiveClass(t){t.classList.remove(Ws);const e=Ht.find(`${Uu}.${Ws}`,t);for(const n of e)n.classList.remove(Ws)}static jQueryInterface(t){return this.each(function(){const e=bc.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}st.on(window,MR,()=>{for(const r of Ht.find(TR))bc.getOrCreateInstance(r)});si(bc);const OR="tab",IR="bs.tab",Ms=`.${IR}`,UR=`hide${Ms}`,FR=`hidden${Ms}`,BR=`show${Ms}`,kR=`shown${Ms}`,zR=`click${Ms}`,HR=`keydown${Ms}`,VR=`load${Ms}`,GR="ArrowLeft",Tm="ArrowRight",WR="ArrowUp",Am="ArrowDown",Fu="Home",wm="End",es="active",Cm="fade",Bu="show",$R="dropdown",Dv=".dropdown-toggle",XR=".dropdown-menu",ku=`:not(${Dv})`,YR='.list-group, .nav, [role="tablist"]',qR=".nav-item, .list-group-item",jR=`.nav-link${ku}, .list-group-item${ku}, [role="tab"]${ku}`,Nv='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zu=`${jR}, ${Nv}`,KR=`.${es}[data-bs-toggle="tab"], .${es}[data-bs-toggle="pill"], .${es}[data-bs-toggle="list"]`;class wo extends mi{constructor(t){super(t),this._parent=this._element.closest(YR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),st.on(this._element,HR,e=>this._keydown(e)))}static get NAME(){return OR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?st.trigger(e,UR,{relatedTarget:t}):null;st.trigger(t,BR,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(es),this._activate(Ht.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Bu);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),st.trigger(t,kR,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(Cm))}_deactivate(t,e){if(!t)return;t.classList.remove(es),t.blur(),this._deactivate(Ht.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Bu);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),st.trigger(t,FR,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(Cm))}_keydown(t){if(![GR,Tm,WR,Am,Fu,wm].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!Ar(i));let n;if([Fu,wm].includes(t.key))n=e[t.key===Fu?0:e.length-1];else{const i=[Tm,Am].includes(t.key);n=Rf(e,t.target,i,!0)}n&&(n.focus({preventScroll:!0}),wo.getOrCreateInstance(n).show())}_getChildren(){return Ht.find(zu,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=Ht.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains($R))return;const i=(s,o)=>{const a=Ht.findOne(s,n);a&&a.classList.toggle(o,e)};i(Dv,es),i(XR,Bu),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(es)}_getInnerElement(t){return t.matches(zu)?t:Ht.findOne(zu,t)}_getOuterElement(t){return t.closest(qR)||t}static jQueryInterface(t){return this.each(function(){const e=wo.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}st.on(document,zR,Nv,function(r){["A","AREA"].includes(this.tagName)&&r.preventDefault(),!Ar(this)&&wo.getOrCreateInstance(this).show()});st.on(window,VR,()=>{for(const r of Ht.find(KR))wo.getOrCreateInstance(r)});si(wo);const ZR="toast",JR="bs.toast",Dr=`.${JR}`,QR=`mouseover${Dr}`,tL=`mouseout${Dr}`,eL=`focusin${Dr}`,nL=`focusout${Dr}`,iL=`hide${Dr}`,rL=`hidden${Dr}`,sL=`show${Dr}`,oL=`shown${Dr}`,aL="fade",Rm="hide",Al="show",wl="showing",lL={animation:"boolean",autohide:"boolean",delay:"number"},cL={animation:!0,autohide:!0,delay:5e3};class Tc extends mi{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cL}static get DefaultType(){return lL}static get NAME(){return ZR}show(){if(st.trigger(this._element,sL).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(aL);const e=()=>{this._element.classList.remove(wl),st.trigger(this._element,oL),this._maybeScheduleHide()};this._element.classList.remove(Rm),Fa(this._element),this._element.classList.add(Al,wl),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||st.trigger(this._element,iL).defaultPrevented)return;const e=()=>{this._element.classList.add(Rm),this._element.classList.remove(wl,Al),st.trigger(this._element,rL)};this._element.classList.add(wl),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Al),super.dispose()}isShown(){return this._element.classList.contains(Al)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){st.on(this._element,QR,t=>this._onInteraction(t,!0)),st.on(this._element,tL,t=>this._onInteraction(t,!1)),st.on(this._element,eL,t=>this._onInteraction(t,!0)),st.on(this._element,nL,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Tc.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Sc(Tc);si(Tc);ui.registerPlugin(re);const uL=(r,t)=>{const e=t.position.z;r<e?r-=e:r+=e;const n=t.fov*Math.PI/180;return 2*Math.tan(n/2)*Math.abs(r)},Gr=(r,t)=>uL(r,t)*t.aspect;document.addEventListener("DOMContentLoaded",()=>{const r=new Db,t=new hb,e=new ub,n=t.load("textures/hotspot/hotspot5.png");n.colorSpace=mn;const i=t.load("textures/map/8081_earthmap10k.jpg");i.colorSpace=mn,i.offset.x=.255,i.wrapS=5;const s=t.load("textures/map/landmask4K.png");s.offset.x=.255,s.wrapS=5,console.log("worldmap",i);const o=t.load("textures/map/earth_bumpmap.jpg");o.colorSpace=mn,o.offset.x=.25,o.wrapS=5;const a=t.load("textures/map/clouds.jp2");a.colorSpace=mn;const l=e.load(["textures/enviromentMaps/px.png","textures/enviromentMaps/nx.png","textures/enviromentMaps/py.png","textures/enviromentMaps/ny.png","textures/enviromentMaps/pz.png","textures/enviromentMaps/nz.png"]),c=document.querySelector("canvas.webgl"),u=new ob;u.background=l,u.backgroundBlurriness=.5,u.environment=l;const h=new Yo,f=new Vh(10,150,150),d=new ab({map:i,roughnessMap:s,metalnessMap:s,roughness:.6,metalness:.15,bumpMap:o,bumpScale:.2,envMapIntensity:0}),g=new pi(f,d);g.scale.x=1.5,g.scale.y=1.5,g.scale.z=1.5;const _=r.addFolder("World");g.position.z=-5,g.position.x=12,g.updateMatrixWorld(),g.rotation.x=0,g.rotation.y=0,g.rotation.z=0,_.add(g.rotation,"x",-50,50,.001),_.add(g.rotation,"y",-50,50,.001),_.add(g.rotation,"z",-50,50,.001),g.castShadow=!0,g.receiveShadow=!0,h.add(g);const m=new Hh(.25,0),p=[{name:"section1",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:48.864716,lon:2.349014},rotation:{x:-.8,y:-.1,z:.5}},{name:"section2",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:162.3007,lon:-103.188},rotation:{x:1.7,y:-.67,z:-.1}},{name:"section3",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:42.8308,lon:82.6541},rotation:{x:.6,y:.4,z:0}},{name:"section4",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:-32.121,lon:22.8864},rotation:{x:-.9,y:1.2,z:0}},{name:"section5",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:-156.2858,lon:51.6804},rotation:{x:-.7,y:.7,z:0}},{name:"section6",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",position:{lat:16.2819,lon:126.9022},rotation:{x:.5,y:-.7,z:0}}],x=[],v=(C,J,it)=>{var xt={lat:vd.degToRad(90-C.position.lat),lon:vd.degToRad(C.position.lon)},O=10.25,Z=new k().setFromSphericalCoords(O,xt.lat,xt.lon),rt=new xb().setFromVector3(Z);it.position.setFromSphericalCoords(rt.radius,rt.phi,rt.theta);var gt=new k,ut=new k;new je,gt.subVectors(it.position,new k(0,0,0)).normalize(),ut.copy(J.position).add(gt),it.lookAt(ut),ui.to(it.rotation,{z:3.14*2,repeat:-1,duration:15})};new _b("#ffffff",5);const S={width:document.getElementById("canvas-container").getClientRects()[0].width,height:document.getElementById("canvas-container").getClientRects()[0].height},T=new mb("#ffffff",3);T.shadow.camera.left=-10,T.shadow.camera.right=10,T.shadow.camera.top=10,T.shadow.camera.bottom=-10,T.shadow.mapSize.width=S.height,T.shadow.mapSize.height=S.width,T.shadow.camera.near=1,T.shadow.camera.far=2e3,T.shadow.camera.fov=75,T.lookAt(g),T.position.x=-30,T.position.y=5,T.position.z=10,T.castShadow=!0,h.add(T),window.addEventListener("resize",()=>{S.width=document.getElementById("canvas-container").getClientRects()[0].width,S.height=document.getElementById("canvas-container").getClientRects()[0].height,b.aspect=S.width/S.height,b.updateProjectionMatrix(),y.setSize(S.width,S.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2))});const b=new Fn(50,S.width/S.height,.001,1e3);b.position.z=20,h.add(b);const y=new a_({canvas:c,antialias:!0,alpha:!0});y.setSize(S.width,S.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Pm,ui.fromTo(u.environment,{offset:0,rotation:0},{offset:1,rotation:Math.PI*2,duration:2,repeat:-1,yoyo:!0}),u.add(h);const L=new gb,D=new ui.timeline({scrollTrigger:{trigger:"#the-body",pin:!1,start:"top bottom",end:"bottom bottom",scrub:2,duration:100,onUpdate:()=>{g.updateMatrixWorld()},ease:"none"}}),E=()=>{const C=document.getElementsByClassName("section1")[0].getClientRects()[0].height,J=document.getElementsByClassName("section2")[0].getClientRects()[0].height,it=document.getElementsByClassName("section3")[0].getClientRects()[0].height,xt=document.getElementsByClassName("section4")[0].getClientRects()[0].height,O=document.getElementsByClassName("section5")[0].getClientRects()[0].height,Z=document.getElementsByClassName("section6")[0].getClientRects()[0].height;return[C,J,it,xt,O,Z]},w=document.getElementById("the-body").getClientRects()[0].height,I=E();let Y=0,P;const W=[{x:1,y:-6.8,z:.8},{x:.1,y:-.5,z:-.1},{x:-.6,y:-2.5,z:-1.2},{x:-.5,y:.2,z:.9},{x:.3,y:1.2,z:-.8},{x:.5,y:-1.3,z:0}];I.forEach((C,J)=>{let it=0;switch(J){case 1:it=-Gr(20,b)/2+15,P=100;break;case 2:it=Gr(20,b)/2-15,P=-30;break;case 3:it=-Gr(20,b)/2+15,P=100;break;case 4:it=Gr(20,b)/2-15,P=-30;break;case 5:it=-Gr(20,b)/2+15,P=100;break}const O=100/w*C;J===0?(D.to(g.position,{x:Gr(20,b)/2-15,duration:O,ease:"none"},0),D.to(g.rotation,{x:W[J].x,y:W[J].y,z:W[J].z,duration:O,ease:"none"},0),D.to(g.position,{z:-5,duration:O,ease:"none"},0),Y+=O):(D.to(T.position,{x:P,duration:O/1.2,ease:"none"},Y),D.to(g.position,{z:-30,duration:O/4,ease:"none"},Y),D.to(g.position,{y:-Gr(20,b)/2+10.25,duration:O/2,ease:"none"},Y),D.to(g.position,{x:it,duration:O/2,ease:"none"},Y),D.to(g.rotation,{x:W[J].x,y:W[J].y,z:W[J].z,duration:O/2,ease:"none"},Y),D.to(g.position,{y:5,duration:O/2,ease:"none"},Y+O/2),D.to(g.position,{z:-5,duration:O/3,ease:"none"},Y+O/3),Y+=O)});const U=new vb;let z;const G=new Qt;window.addEventListener("mousemove",C=>{G.x=(C.clientX/S.width-.5)*2,G.y=-(C.clientY/S.height-.5)*2}),window.addEventListener("click",()=>{z.userData&&(console.log(z.userData.modal._element),ui.fromTo(z.userData.modal._element,{backdropFilter:"blur(0px)",zIndex:0},{backdropFilter:"blur(10px)",zIndex:9999,duration:1}),z.userData.modal.show())}),p.forEach(C=>{const it=document.querySelector("#modal-template").content.cloneNode(!0);it.querySelector("#close-header").addEventListener("pointerdown",()=>{xt.hide()}),it.querySelector("#close-footer").addEventListener("pointerdown",()=>{xt.hide()}),it.querySelector(".modal").id=C.name,it.querySelector(".modal-body").innerHTML=`${C.content}`,document.getElementById("the-body").append(it);const xt=new Es(document.getElementById(C.name),{}),O=new Uh({color:"#aaa",side:xi,transparent:!0,envMapIntensity:1,roughness:0}),Z=new db("#fff",0),rt=new pi(m,O);rt.add(Z),rt.castShadow=!0,g.updateMatrixWorld({force:!0}),g.updateWorldMatrix(!0,!0);const gt=r.addFolder(C.name).close();rt.rotation.x=-Math.PI*2;const ut={position:{lat:0,lon:0}};gt.add(ut.position,"lat").min(-180).max(180).step(1e-4).onChange(ft=>{v(ut,g,rt)}),gt.add(ut.position,"lon").min(-180).max(180).step(1e-4).onChange(ft=>{v(ut,g,rt)}),rt.userData.modal=xt,rt.userData.name=C.name,x.push(rt),g.add(rt),v(C,g,rt)});const j=()=>{L.getElapsedTime(),T.target=g,T.lookAt(g.position),U.setFromCamera(G,b),U.intersectObjects(x)[0]?(z=U.intersectObjects(x)[0].object,U.intersectObjects(x)[0].object.scale.x>1||(ui.to(U.intersectObjects(x)[0].object.children[0],{intensity:5,ease:"elastic.out(1,0.3)",duration:1}),ui.to(U.intersectObjects(x)[0].object.scale,{x:1.25,y:1.25,z:1.25,ease:"elastic.out(1,0.3)",duration:1}),ui.to(U.intersectObjects(x)[0].object.material.color,{b:255,g:255,r:255,ease:"elastic.out(1,0.3)",duration:1})),document.getElementById("the-body").style.cursor="pointer"):z&&(z.material.color.set("#bbbbbb"),document.getElementById("the-body").style.cursor="default",ui.to(z.scale,{x:1,y:1,z:1,ease:"elastic.out(1,0.3)",duration:1}),ui.to(z.children[0],{intensity:0,duration:.5,onComplete:()=>{z=null}})),y.render(u,b),window.requestAnimationFrame(j)};j()});
//# sourceMappingURL=index-949cfd04.js.map
