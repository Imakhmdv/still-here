window.MENU_ASSETS={"blue": "./beec78d800b31b3b5453.png", "amber": "./3c98aad4b83f3890a5d4.png", "text": "./0ef7c6043023fe50d91a.png"};window.LAB_SFX={"step": "./4b4be334db54f5c307f5.wav", "button": "./1397a6de9342018b974c.wav", "ui": "./5d84ff86ef9922475370.wav", "shock": "./f75a6a395ff53c0552f1.wav", "crateDrop": "./1b657b858946b34e01f4.wav", "spark": "./bdfdc251757c9c97d34d.wav", "floodShort": "./de6a5e5ebb84aa9f55b5.wav", "door": "./6b04cbb33311957892aa.wav", "drag": "./3c58959920cdf2e505e8.wav", "lampOn": "./ee64f249e2506919600e.wav", "lampOff": "./ce9dd3c1202c05a7aa2c.wav", "valve": "./d13c98958e1bddd104f2.wav"};
(()=>{var Ou=0,sc=1,Bu=2;var rs=1,po=2,Ks=3,Fn=0,qt=1,gn=2,as=0,Js=1,rc=2,ac=3,oc=4,zu=5;var os=100,ku=101,Hu=102,Gu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,lc=204,cc=205,Zu=206,Ku=207,Ju=208,$u=209,ju=210,Qu=211,ed=212,td=213,nd=214,Ga=0,Va=1,Wa=2,Us=3,Xa=4,qa=5,Ya=6,Za=7,hc=0,id=1,sd=2,On=0,uc=1,dc=2,fc=3,ui=4,pc=5,mc=6,gc=7,Kl="attached",rd="detached",_c=300,ls=301,$s=302,mo=303,go=304,Si=1e3,fn=1001,Fs=1002,pt=1003,_o=1004;var cs=1005;var Mt=1006,js=1007;var _n=1008;var jt=1009,xc=1010,yc=1011,Qs=1012,xo=1013,An=1014,rn=1015,wn=1016,yo=1017,vo=1018,hs=1020,vc=35902,Mc=35899,Sc=1021,bc=1022,xn=1023,Qn=1026,di=1027,Mo=1028,So=1029,Ri=1030,bo=1031;var To=1033,Yr=33776,Zr=33777,Kr=33778,Jr=33779,Eo=35840,Ao=35841,wo=35842,Ro=35843,Co=36196,Io=37492,Po=37496,Lo=37488,No=37489,$r=37490,Do=37491,Uo=37808,Fo=37809,Oo=37810,Bo=37811,zo=37812,ko=37813,Ho=37814,Go=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Zo=37821,Ko=36492,Jo=36494,$o=36495,jo=36283,Qo=36284,jr=36285,el=36286,tl=2200,ad=2201,od=2202,Yi=2300,Zi=2301,ka=2302,Jl=2303,Wi=2400,Xi=2401,Mr=2402,nl=2500,ld=2501,Tc=0,Qr=1,er=2,cd=3200;var il=0,hd=1,fi="",st="srgb",Wt="srgb-linear",Sr="linear",je="srgb";var Ha=7680;var ud=519,dd=512,fd=513,pd=514,Ec=515,md=516,gd=517,Ac=518,wc=519,Rc=35044;var Cc="300 es",pn=2e3,Os=2001;function Af(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _d(){let s=Bs("canvas");return s.style.display="block",s}var Kh={},zs=null;function br(...s){let e="THREE."+s.shift();zs?zs("log",e,...s):console.log(e,...s)}function xd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Te(...s){s=xd(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=xd(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function qi(...s){let e=s.join(" ");e in Kh||(Kh[e]=!0,Te(...s))}function yd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var vd={[Ga]:Ga,[Wa]:Ya,[Xa]:Xa,[Us]:qa,[Va]:Va,[Ya]:Wa,[Za]:Za,[qa]:Us},Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,yr=Math.PI/180,Ki=180/Math.PI;function Bn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Ic(s,e){return(s%e+e)%e}function Rf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cf(s,e,t){return s!==e?(t-s)/(e-s):0}function vr(s,e,t){return(1-t)*s+t*e}function If(s,e,t,n){return vr(s,e,1-Math.exp(-t*n))}function Pf(s,e=1){return e-Math.abs(Ic(s,e*2)-e)}function Lf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Df(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Uf(s,e){return s+Math.random()*(e-s)}function Ff(s){return s*(.5-Math.random())}function Of(s){s!==void 0&&(Jh=s);let e=Jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bf(s){return s*yr}function zf(s){return s*Ki}function kf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Hf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lc(s,e){if(e.constructor===Float32Array)return s;let t=sl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Nc(s,e){if(e.constructor===Float32Array)return s;let t=sl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Yt={DEG2RAD:yr,RAD2DEG:Ki,generateUUID:Bn,clamp:Xe,euclideanModulo:Ic,mapLinear:Rf,inverseLerp:Cf,lerp:vr,damp:If,pingpong:Pf,smoothstep:Lf,smootherstep:Nf,randInt:Df,randFloat:Uf,randFloatSpread:Ff,seededRandom:Of,degToRad:Bf,radToDeg:zf,isPowerOfTwo:kf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Pc,setQuaternionFromProperEuler:Gf,normalize:Nc,denormalize:Lc},Ie=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+v*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new L,$h=new ft,De=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],M=i[1],E=i[4],S=i[7],T=i[2],A=i[5],_=i[8];return r[0]=a*v+o*M+c*T,r[3]=a*p+o*E+c*A,r[6]=a*m+o*S+c*_,r[1]=l*v+h*M+u*T,r[4]=l*p+h*E+u*A,r[7]=l*m+h*S+u*_,r[2]=d*v+f*M+g*T,r[5]=d*p+f*E+g*A,r[8]=d*m+f*S+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},El=new De,jh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){let s={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Sr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wt]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:n,transfer:je,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),s}var Ve=Vf();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var gs,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Bs("canvas")),gs.width=e.width,gs.height=e.height;let i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wf=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Al(i[a].image)):r.push(Al(i[a]))}else r=Al(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Xf=0,wl=new L,St=class s extends Tn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=fn,i=fn,r=Mt,a=_n,o=xn,c=jt,l=s.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Bn(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=_c;St.DEFAULT_ANISOTROPY=1;var et=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,S=(f+1)/2,T=(m+1)/2,A=(h+d)/4,_=(u+v)/4,b=(g+p)/4;return E>S&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=_/n):S>T?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=b/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends Tn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new St({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,p)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Yf)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),gi.crossVectors(n,Qt),gi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),gi.crossVectors(n,Qt)),gi.normalize(),da.crossVectors(Qt,gi),i[0]=gi.x,i[4]=da.x,i[8]=Qt.x,i[1]=gi.y,i[5]=da.y,i[9]=Qt.y,i[2]=gi.z,i[6]=da.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],E=n[7],S=n[11],T=n[15],A=i[0],_=i[4],b=i[8],U=i[12],P=i[1],D=i[5],k=i[9],q=i[13],I=i[2],F=i[6],W=i[10],H=i[14],ee=i[3],V=i[7],j=i[11],Q=i[15];return r[0]=a*A+o*P+c*I+l*ee,r[4]=a*_+o*D+c*F+l*V,r[8]=a*b+o*k+c*W+l*j,r[12]=a*U+o*q+c*H+l*Q,r[1]=h*A+u*P+d*I+f*ee,r[5]=h*_+u*D+d*F+f*V,r[9]=h*b+u*k+d*W+f*j,r[13]=h*U+u*q+d*H+f*Q,r[2]=g*A+v*P+p*I+m*ee,r[6]=g*_+v*D+p*F+m*V,r[10]=g*b+v*k+p*W+m*j,r[14]=g*U+v*q+p*H+m*Q,r[3]=M*A+E*P+S*I+T*ee,r[7]=M*_+E*D+S*F+T*V,r[11]=M*b+E*k+S*W+T*j,r[15]=M*U+E*q+S*H+T*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],M=c*f-l*d,E=o*f-l*u,S=o*d-c*u,T=a*f-l*h,A=a*d-c*h,_=a*u-o*h;return t*(v*M-p*E+m*S)-n*(g*M-p*T+m*A)+i*(g*E-v*T+m*_)-r*(g*S-v*A+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=t*o-n*a,E=t*c-i*a,S=t*l-r*a,T=n*c-i*o,A=n*l-r*o,_=i*l-r*c,b=h*v-u*g,U=h*p-d*g,P=h*m-f*g,D=u*p-d*v,k=u*m-f*v,q=d*m-f*p,I=M*q-E*k+S*D+T*P-A*U+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(o*q-c*k+l*D)*F,e[1]=(i*k-n*q-r*D)*F,e[2]=(v*_-p*A+m*T)*F,e[3]=(d*A-u*_-f*T)*F,e[4]=(c*P-a*q-l*U)*F,e[5]=(t*q-i*P+r*U)*F,e[6]=(p*S-g*_-m*E)*F,e[7]=(h*_-d*S+f*E)*F,e[8]=(a*k-o*P+l*b)*F,e[9]=(n*P-t*k-r*b)*F,e[10]=(g*A-v*S+m*M)*F,e[11]=(u*S-h*A-f*M)*F,e[12]=(o*U-a*D-c*b)*F,e[13]=(t*D-n*U+i*b)*F,e[14]=(v*E-g*T-p*M)*F,e[15]=(h*T-u*E+d*M)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,M=c*l,E=c*h,S=c*u,T=n.x,A=n.y,_=n.z;return i[0]=(1-(v+m))*T,i[1]=(f+S)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(d+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+E)*_,i[9]=(p-M)*_,i[10]=(1-(d+v))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(i[0],i[1],i[2]).length(),o=_s.set(i[4],i[5],i[6]).length(),c=_s.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Mn.copy(this);let l=1/a,h=1/o,u=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=pn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===pn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Os)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=pn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===pn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Os)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new L,Mn=new Oe,qf=new L(0,0,0),Yf=new L(1,1,1),gi=new L,da=new L,Qt=new L,eu=new Oe,tu=new ft,ei=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zf=0,nu=new L,xs=new ft,Xn=new Oe,fa=new L,or=new L,Kf=new L,Jf=new ft,iu=new L(1,0,0),su=new L(0,1,0),ru=new L(0,0,1),au={type:"added"},$f={type:"removed"},ys={type:"childadded",child:null},Rl={type:"childremoved",child:null},rt=class s extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ei,n=new ft,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new De}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(or,fa,this.up):Xn.lookAt(fa,or,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Xn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),ys.child=e,this.dispatchEvent(ys),ys.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rt.DEFAULT_UP=new L(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jf={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Cl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=Ic(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,i),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Ve.workingToColorSpace(Bt.copy(this),e),Math.round(Xe(Bt.r*255,0,255))*65536+Math.round(Xe(Bt.g*255,0,255))*256+Math.round(Xe(Bt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,i=Bt.g,r=Bt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=st){Ve.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,i=Bt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(pa);let n=vr(_i.h,pa.h,t),i=vr(_i.s,pa.s,t),r=vr(_i.l,pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Re;Re.NAMES=Md;var Ar=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ti=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new L,qn=new L,Il=new L,Yn=new L,vs=new L,Ms=new L,ou=new L,Pl=new L,Ll=new L,Nl=new L,Dl=new et,Ul=new et,Fl=new et,$n=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),qn.subVectors(n,t),Il.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(qn),c=Sn.dot(Il),l=qn.dot(qn),h=qn.dot(Il),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Dl.setScalar(0),Ul.setScalar(0),Fl.setScalar(0),Dl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Dl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(Fl,r.z),a}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),qn.subVectors(e,t),Sn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;vs.subVectors(i,n),Ms.subVectors(r,n),Pl.subVectors(e,n);let c=vs.dot(Pl),l=Ms.dot(Pl);if(c<=0&&l<=0)return t.copy(n);Ll.subVectors(e,i);let h=vs.dot(Ll),u=Ms.dot(Ll);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(vs,a);Nl.subVectors(e,r);let f=vs.dot(Nl),g=Ms.dot(Nl);if(g>=0&&f<=g)return t.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ms,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return ou.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(ou,o);let m=1/(p+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ga.subVectors(this.max,lr),Ss.subVectors(e.a,lr),bs.subVectors(e.b,lr),Ts.subVectors(e.c,lr),xi.subVectors(bs,Ss),yi.subVectors(Ts,bs),ki.subVectors(Ss,Ts);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-ki.z,ki.y,xi.z,0,-xi.x,yi.z,0,-yi.x,ki.z,0,-ki.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-ki.y,ki.x,0];return!Ol(t,Ss,bs,Ts,ga)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,Ss,bs,Ts,ga))?!1:(_a.crossVectors(xi,yi),t=[_a.x,_a.y,_a.z],Ol(t,Ss,bs,Ts,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,ma=new bt,Ss=new L,bs=new L,Ts=new L,xi=new L,yi=new L,ki=new L,lr=new L,ga=new L,_a=new L,Hi=new L;function Ol(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gt=new L,xa=new Ie,Qf=0,Nt=class extends Tn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=rn,this.version=0,this._normalizationScale=e!==void 0?sl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nc(e,this.array)}};var wr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ep=new bt,cr=new L,Bl=new L,Jt=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Bl)),this.expandByPoint(cr.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tp=0,dn=new Oe,zl=new rt,Es=new L,en=new bt,hr=new bt,Ct=new L,Pt=class s extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?Rr:wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(en.min,hr.min),en.expandByPoint(Ct),Ct.addVectors(en.max,hr.max),en.expandByPoint(Ct)):(en.expandByPoint(hr.min),en.expandByPoint(hr.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(e,l),Ct.add(Es)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new L,c[U]=new L;let h=new L,u=new L,d=new L,f=new Ie,g=new Ie,v=new Ie,p=new L,m=new L;function M(U,P,D){l[U]=l[P]=l[D]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let k=1/(g.x*v.y-v.x*g.y);isFinite(k)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(k),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(k),o[U].add(p),o[P].add(p),o[D].add(p),c[U].add(m),c[P].add(m),c[D].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,P=E.length;U<P;++U){let D=E[U],k=D.start,q=D.count;for(let I=k,F=k+q;I<F;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new L,T=new L,A=new L,_=new L;function b(U){A.fromBufferAttribute(i,U),_.copy(A);let P=o[U];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(_,P);let k=T.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,k)}for(let U=0,P=n.count;U<P;++U)l[U]&&b(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Nt(d,h,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=lu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=lu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function lu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Bn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Vt=new L,bi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?sl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nc(e,this.data.array)}},kl=new L,np=new L,ip=new De,tn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=kl.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ip.getNormalMatrix(e),i=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sp=0,zt=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Js,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gs=class extends zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,ur=new L,ws=new L,Rs=new L,Cs=new Ie,dr=new Ie,Sd=new Oe,ya=new L,fr=new L,va=new L,cu=new Ie,Hl=new Ie,hu=new Ie,Cr=class extends rt{constructor(e=new Gs){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ji(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new bi(n,3,0,!1)),As.setAttribute("uv",new bi(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Rs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ma(ya.set(-.5,-.5,0),Rs,a,ws,i,r),Ma(fr.set(.5,-.5,0),Rs,a,ws,i,r),Ma(va.set(.5,.5,0),Rs,a,ws,i,r),cu.set(0,0),Hl.set(1,0),hu.set(1,1);let o=e.ray.intersectTriangle(ya,fr,va,!1,ur);if(o===null&&(Ma(fr.set(-.5,.5,0),Rs,a,ws,i,r),Hl.set(0,1),o=e.ray.intersectTriangle(ya,va,fr,!1,ur),o===null))return;let c=e.ray.origin.distanceTo(ur);c<e.near||c>e.far||t.push({distance:c,point:ur.clone(),uv:$n.getInterpolation(ur,ya,fr,va,cu,Hl,hu,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ma(s,e,t,n,i,r){Cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(dr.x=r*Cs.x-i*Cs.y,dr.y=i*Cs.x+r*Cs.y):dr.copy(Cs),s.copy(e),s.x+=dr.x,s.y+=dr.y,s.applyMatrix4(Sd)}var Kn=new L,Gl=new L,Sa=new L,ba=new L,$i=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gl.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=ba.dot(this.direction),c=-ba.dot(Sa),l=ba.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gl).addScaledVector(Sa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,E=n.z-a.z,S=Math.abs(c),T=Math.abs(l),A=Math.abs(h),_,b,U,P,D,k,q,I,F,W,H,ee;if(S>=T&&S>=A?(U=c,k=u,F=g,ee=m,c>=0?(_=l,b=h,P=d,D=f,q=v,I=p,W=M,H=E):(_=h,b=l,P=f,D=d,q=p,I=v,W=E,H=M)):T>=A?(U=l,k=d,F=v,ee=M,l>=0?(_=h,b=c,P=f,D=u,q=p,I=g,W=E,H=m):(_=c,b=h,P=u,D=f,q=g,I=p,W=m,H=E)):(U=h,k=f,F=p,ee=E,h>=0?(_=c,b=l,P=u,D=d,q=g,I=v,W=m,H=M):(_=l,b=c,P=d,D=u,q=v,I=g,W=M,H=m)),U===0)return null;let V=_/U,j=b/U,Q=1/U,_e=P-V*k,Pe=D-j*k,Y=q-V*F,de=I-j*F,xe=W-V*ee,be=H-j*ee,me=xe*de-be*Y,Le=_e*be-Pe*xe,ze=Y*Pe-de*_e;if(i){if(me<0||Le<0||ze<0)return null}else if((me<0||Le<0||ze<0)&&(me>0||Le>0||ze>0))return null;let we=me+Le+ze;if(we===0)return null;let Ze=Q*(me*k+Le*F+ze*ee);return(we>0?Ze<0:Ze>0)?null:this.at(Ze/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uu=new Oe,Gi=new $i,Ta=new Jt,du=new L,Ea=new L,Aa=new L,wa=new L,Vl=new L,Ra=new L,fu=new L,Ca=new L,xt=class extends rt{constructor(e=new Pt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Vl.fromBufferAttribute(u,e),a?Ra.addScaledVector(Vl,h):Ra.addScaledVector(Vl.sub(t),h))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Ta.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ta,du)===null||Gi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(uu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,T=E;S<T;S+=3){let A=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);i=Ia(this,m,e,n,l,h,u,A,_,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);i=Ia(this,a,e,n,l,h,u,M,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,T=E;S<T;S+=3){let A=S,_=S+1,b=S+2;i=Ia(this,m,e,n,l,h,u,A,_,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=p,E=p+1,S=p+2;i=Ia(this,a,e,n,l,h,u,M,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function rp(s,e,t,n,i,r,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Fn,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:s}}function Ia(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ea),s.getVertexPosition(c,Aa),s.getVertexPosition(l,wa);let h=rp(s,e,t,n,Ea,Aa,wa,fu);if(h){let u=new L;$n.getBarycoord(fu,Ea,Aa,wa,u),i&&(h.uv=$n.getInterpolatedAttribute(i,o,c,l,u,new Ie)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,c,l,u,new Ie)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};$n.getNormal(Ea,Aa,wa,d.normal),h.face=d,h.barycoord=u}return h}var pr=new et,pu=new et,mu=new et,ap=new et,gu=new Oe,Pa=new L,Wl=new Jt,_u=new Oe,Xl=new $i,Ir=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(i),e.ray.intersectsSphere(Wl)!==!1&&(_u.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(_u),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;pu.fromBufferAttribute(i.attributes.skinIndex,e),mu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(pr.copy(t),t.set(0,0,0,0)):(pr.set(t.x,t.y,t.z,1),t.set(0,0,0)),pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=mu.getComponent(r);if(a!==0){let o=pu.getComponent(r);gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ap.copy(pr).applyMatrix4(gu),a)}}return t.isVector4&&(t.w=pr.w),t.applyMatrix4(this.bindMatrixInverse)}},Vs=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ws=class extends St{constructor(e=null,t=1,n=1,i,r,a,o,c,l=pt,h=pt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xu=new Oe,op=new Oe,Pr=class s{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:op;xu.multiplyMatrices(o,t[r]),xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ws(t,e,e,xn,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new Vs),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ni=class extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Oe,yu=new Oe,La=[],vu=new bt,lp=new Oe,mr=new xt,gr=new Jt,Lr=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),vu.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),gr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),yu.multiplyMatrices(n,Is),mr.matrixWorld=yu,mr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let c=La[a];c.instanceId=r,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(i*this.count),i,this.count,Mo,rn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new Jt,cp=new Ie(.5,.5),Na=new L,Ti=class{constructor(e=new tn,t=new tn,n=new tn,i=new tn,r=new tn,a=new tn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],E=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-a,f-h,m-g,T-M).normalize(),i[1].setComponents(l+a,f+h,m+g,T+M).normalize(),i[2].setComponents(l+o,f+u,m+v,T+E).normalize(),i[3].setComponents(l-o,f-u,m-v,T-E).normalize(),n)i[4].setComponents(c,d,p,S).normalize(),i[5].setComponents(l-c,f-d,m-p,T-S).normalize();else if(i[4].setComponents(l-c,f-d,m-p,T-S).normalize(),t===pn)i[5].setComponents(l+c,f+d,m+p,T+S).normalize();else if(t===Os)i[5].setComponents(c,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=cp.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mu=new Oe,ja=class s{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ti),n[i].setFromProjectionMatrix(Mu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ti),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Ei=class extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qa=new L,eo=new L,Su=new Oe,_r=new $i,Da=new Jt,ql=new L,bu=new L,ii=class extends rt{constructor(e=new Pt,t=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qa.fromBufferAttribute(t,i-1),eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qa.distanceTo(eo);e.setAttribute("lineDistance",new It(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Su.copy(i).invert(),_r.copy(e.ray).applyMatrix4(Su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){let m=h.getX(v),M=h.getX(v+1),E=Ua(this,e,_r,c,m,M,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(f),m=Ua(this,e,_r,c,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){let m=Ua(this,e,_r,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Ua(this,e,_r,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ua(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Qa.fromBufferAttribute(o,i),eo.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,eo,ql,bu)>n)return;ql.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ql);if(!(l<e.near||l>e.far))return{distance:l,point:bu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Tu=new L,Eu=new L,Nr=class extends ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tu.fromBufferAttribute(t,i),Eu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(Eu);e.setAttribute("lineDistance",new It(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dr=class extends ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Au=new Oe,$l=new $i,Fa=new Jt,Oa=new L,Ur=class extends rt{constructor(e=new Pt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Au.copy(i).invert(),$l.copy(e.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=l.getX(g);Oa.fromBufferAttribute(u,p),wu(Oa,p,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Oa.fromBufferAttribute(u,g),wu(Oa,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wu(s,e,t,n,i,r,a){let o=$l.distanceSqToPoint(s);if(o<t){let c=new L;$l.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends St{constructor(e=[],t=ls,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends St{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var si=class extends St{constructor(e,t,n=An,i,r,a,o=pt,c=pt,l,h=Qn,u=1){if(h!==Qn&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Br=class extends si{constructor(e,t=An,n=ls,i,r,a=pt,o=pt,c,l=Qn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(v,p,m,M,E,S,T,A,_,b,U){let P=S/_,D=T/b,k=S/2,q=T/2,I=A/2,F=_+1,W=b+1,H=0,ee=0,V=new L;for(let j=0;j<W;j++){let Q=j*D-q;for(let _e=0;_e<F;_e++){let Pe=_e*P-k;V[v]=Pe*M,V[p]=Q*E,V[m]=I,l.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[m]=A>0?1:-1,h.push(V.x,V.y,V.z),u.push(_e/_),u.push(1-j/b),H+=1}}for(let j=0;j<b;j++)for(let Q=0;Q<_;Q++){let _e=d+Q+F*j,Pe=d+Q+F*(j+1),Y=d+(Q+1)+F*(j+1),de=d+(Q+1)+F*j;c.push(_e,Pe,de),c.push(Pe,Y,de),ee+=6}o.addGroup(f,ee,U),f+=ee,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kr=class s extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,h=new Ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(o,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var ji=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let E=0;E<l;E++){let S=E*u-r;g.push(S,-M,0),v.push(0,0,1),p.push(E/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let E=M+l*m,S=M+l*(m+1),T=M+1+l*(m+1),A=M+1+l*m;f.push(E,S,A),f.push(S,T,A)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hr=class extends zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function us(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ru(i))i.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ru(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kt(s){let e={};for(let t=0;t<s.length;t++){let n=us(s[t]);for(let i in n)e[i]=n[i]}return e}function Ru(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var bd={clone:us,merge:kt},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new et().fromArray(i.value);break;case"m3":this.uniforms[n].value=new De().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},to=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qi=class extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Qi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var no=class extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},io=class extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function fp(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function pp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Dn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends Dn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wi,endingEnd:Wi}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xi:r=e,o=2*t-n;break;case Mr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xi:a=e,c=2*n-t;break;case Mr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*v+.5*g,S=f*p-f*v;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[l+T]+E*a[c+T]+S*a[u+T];return r}},Gr=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ro=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ao=class extends Dn{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[l+g],p=a[c+g],m=f*d+g*2,M=u[m],E=u[m+1],S=e*d+g*2,T=h[S],A=h[S+1],_=gp(n,t,M,T,i);r[g]=Td(_,v,E,A,p)}return r}};function Td(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function mp(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function gp(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Td(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=mp(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $t=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mi(t,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mi(e.times,Array),values:Mi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),xr(e.settings)&&(n.settings={inTangents:Mi(e.settings.inTangents,Array),outTangents:Mi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ao(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break;case Jl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;xr(this.settings)&&(Iu(this.settings.inTangents,e),Iu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;xr(this.settings)&&(Pu(this.settings.inTangents,e),Pu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&wf(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,xr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Iu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Pu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Zi;var ri=class extends $t{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Yi;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};Vr.prototype.ValueTypeName="color";var ai=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};ai.prototype.ValueTypeName="number";var oo=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)ft.slerpFlat(r,0,a,l-o,a,l,c);return r}},oi=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends $t{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Yi;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};wi.prototype.ValueTypeName="vector";var es=class{constructor(e="",t=-1,n=[],i=nl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xp(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push($t.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=fp(c);c=Cu(c,1,h),l=Cu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ai(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function _p(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ai;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return Vr;case"quaternion":return oi;case"bool":case"boolean":return ri;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_p(s.type);if(s.times===void 0){let n=[],i=[];pp(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),xr(s.settings)&&(t.settings={inTangents:Mi(s.settings.inTangents,Float32Array),outTangents:Mi(s.settings.outTangents,Float32Array)}),t}var Ln={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Lu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Lu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var lo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new lo,Un=class{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Un.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jn={},jl=class extends Error{constructor(e,t){super(e),this.response=t}},qs=class extends Un{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ln.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Jn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:E,value:S})=>{if(E)m.close();else{v+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,_=h.length;A<_;A++){let b=h[A];b.onProgress&&b.onProgress(T)}m.enqueue(S),M()}},E=>{m.error(E)})}}});return new Response(p)}else throw new jl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ln.add(`file:${e}`,l);let h=Jn[e];delete Jn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=new WeakMap,co=class extends Un{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ln.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ps.get(a);u===void 0&&(u=[],Ps.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Bs("img");function c(){h(),t&&t(this);let u=Ps.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ps.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Ln.remove(`image:${e}`);let d=Ps.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ln.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Wr=class extends Un{constructor(e){super(e)}load(e,t,n,i){let r=new St,a=new co(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ts=class extends rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ci=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yl=new Oe,Nu=new L,Du=new L,Ys=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Os||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=new L,za=new ft,Pn=new L,Xr=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,za,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ba,za,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new L,Uu=new Ie,Fu=new Ie,_t=class extends Xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Fu),t.subVectors(Fu,Uu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ql=class extends Ys{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ki*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ns=class extends ts{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ql}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ec=class extends Ys{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0}},is=class extends ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},En=class extends Xr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends Ys{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mn=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new tc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Zl=new WeakMap,qr=class extends Un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ln.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Zl.has(a)===!0?(i&&i(Zl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ln.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Zl.set(c,l),Ln.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ln.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Ns=1,Zs=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _t(Ls,Ns,e,t);i.layers=this.layers,this.add(i);let r=new _t(Ls,Ns,e,t);r.layers=this.layers,this.add(r);let a=new _t(Ls,Ns,e,t);a.layers=this.layers,this.add(a);let o=new _t(Ls,Ns,e,t);o.layers=this.layers,this.add(o);let c=new _t(Ls,Ns,e,t);c.layers=this.layers,this.add(c);let l=new _t(Ls,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var uo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;ft.multiplyQuaternionsFlat(e,a,e,t,e,n),ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Uc="\\[\\]\\.:\\/",yp=new RegExp("["+Uc+"]","g"),Fc="[^"+Uc+"]",vp="[^"+Uc.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Sp=/(WCOD+)?/.source.replace("WCOD",vp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Ep=new RegExp("^"+Mp+Sp+bp+Tp+"$"),Ap=["material","materials","bones","map"],nc=class{constructor(e,t,n){let i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(e){let t=Ep.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=nc;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Wi,endingEnd:Wi};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ld:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case nl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===od;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===tl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Xi,i.endingEnd=Xi):(e?i.endingStart=this.zeroSlopeAtStart?Xi:Wi:i.endingStart=Mr,t?i.endingEnd=this.zeroSlopeAtEnd?Xi:Wi:i.endingEnd=Mr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},wp=new Float32Array(1),ss=class extends Tn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;g=new uo(tt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Gr(new Float32Array(2),new Float32Array(2),1,wp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?es.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=nl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new fo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?es.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var ic=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Oc(s,e,t,n){let i=Rp(n);switch(t){case Sc:return s*e;case Mo:return s*e/i.components*i.byteLength;case So:return s*e/i.components*i.byteLength;case Ri:return s*e*2/i.components*i.byteLength;case bo:return s*e*2/i.components*i.byteLength;case bc:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case To:return s*e*4/i.components*i.byteLength;case Yr:case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Ro:return Math.max(s,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(s,8)*Math.max(e,8)/2;case Co:case Io:case Lo:case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:case $r:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Jo:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jo:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jr:case el:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(s){switch(s){case jt:case xc:return{byteLength:1,components:1};case Qs:case yc:case wn:return{byteLength:2,components:1};case yo:case vo:return{byteLength:2,components:4};case An:case xo:case rn:return{byteLength:4,components:1};case vc:case Mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Yd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ip(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,em=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,$g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,c0=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Np,alphamap_pars_fragment:Dp,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:$p,color_pars_vertex:jp,color_vertex:Qp,common:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:vm,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:wm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Im,lights_fragment_end:Pm,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:Jm,normal_pars_vertex:$m,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:yg,specularmap_fragment:vg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:bg,transmission_fragment:Tg,transmission_pars_fragment:Eg,uv_pars_fragment:Ag,uv_pars_vertex:wg,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Ig,background_frag:Pg,backgroundCube_vert:Lg,backgroundCube_frag:Ng,cube_vert:Dg,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distance_vert:Bg,distance_frag:zg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:Jg,meshnormal_frag:$g,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},kn={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};kn.physical={uniforms:kt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var rl={r:0,b:0,g:0},h0=new Oe,Zd=new De;Zd.set(-1,0,0,0,1,0,0,0,1);function u0(s,e,t,n,i,r){let a=new Re(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(M){let E=!1,S=f(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,E){let S=f(E);S&&S.isCubeTexture?(l===void 0&&(l=new xt(new Ai(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:us(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zd),l.material.toneMapped=Ve.getTransfer(S.colorSpace)!==je,(h!==S||u!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new ji(2,2),new Nn({name:"BackgroundMaterial",uniforms:us(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(S.colorSpace)!==je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,E){M.getRGB(rl,Dc(s)),t.buffers.color.setClear(rl.r,rl.g,rl.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function d0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,k,q,I,F){let W=!1,H=u(D,I,q,k);r!==H&&(r=H,l(r.object)),W=f(D,I,q,F),W&&g(D,I,q,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(D,k,q,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,k,q,I){let F=I.wireframe===!0,W=n[k.id];W===void 0&&(W={},n[k.id]=W);let H=D.isInstancedMesh===!0?D.id:0,ee=W[H];ee===void 0&&(ee={},W[H]=ee);let V=ee[q.id];V===void 0&&(V={},ee[q.id]=V);let j=V[F];return j===void 0&&(j=d(c()),V[F]=j),j}function d(D){let k=[],q=[],I=[];for(let F=0;F<t;F++)k[F]=0,q[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,k,q,I){let F=r.attributes,W=k.attributes,H=0,ee=q.getAttributes();for(let V in ee)if(ee[V].location>=0){let Q=F[V],_e=W[V];if(_e===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),Q===void 0||Q.attribute!==_e||_e&&Q.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(D,k,q,I){let F={},W=k.attributes,H=0,ee=q.getAttributes();for(let V in ee)if(ee[V].location>=0){let Q=W[V];Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let _e={};_e.attribute=Q,Q&&Q.data&&(_e.data=Q.data),F[V]=_e,H++}r.attributes=F,r.attributesNum=H,r.index=I}function v(){let D=r.newAttributes;for(let k=0,q=D.length;k<q;k++)D[k]=0}function p(D){m(D,0)}function m(D,k){let q=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;q[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),F[D]!==k&&(s.vertexAttribDivisor(D,k),F[D]=k)}function M(){let D=r.newAttributes,k=r.enabledAttributes;for(let q=0,I=k.length;q<I;q++)k[q]!==D[q]&&(s.disableVertexAttribArray(q),k[q]=0)}function E(D,k,q,I,F,W,H){H===!0?s.vertexAttribIPointer(D,k,q,F,W):s.vertexAttribPointer(D,k,q,I,F,W)}function S(D,k,q,I){v();let F=I.attributes,W=q.getAttributes(),H=k.defaultAttributeValues;for(let ee in W){let V=W[ee];if(V.location>=0){let j=F[ee];if(j===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let Q=j.normalized,_e=j.itemSize,Pe=e.get(j);if(Pe===void 0)continue;let Y=Pe.buffer,de=Pe.type,xe=Pe.bytesPerElement,be=de===s.INT||de===s.UNSIGNED_INT||j.gpuType===xo;if(j.isInterleavedBufferAttribute){let me=j.data,Le=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ze=j.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let we=0;we<V.locationSize;we++)m(V.location+we,me.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let we=0;we<V.locationSize;we++)p(V.location+we);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let we=0;we<V.locationSize;we++)E(V.location+we,_e/V.locationSize,de,Q,Le*xe,(ze+_e/V.locationSize*we)*xe,be)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)m(V.location+me,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<V.locationSize;me++)p(V.location+me);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let me=0;me<V.locationSize;me++)E(V.location+me,_e/V.locationSize,de,Q,_e*xe,_e/V.locationSize*me*xe,be)}}else if(H!==void 0){let Q=H[ee];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(V.location,Q);break;case 3:s.vertexAttrib3fv(V.location,Q);break;case 4:s.vertexAttrib4fv(V.location,Q);break;default:s.vertexAttrib1fv(V.location,Q)}}}}M()}function T(){U();for(let D in n){let k=n[D];for(let q in k){let I=k[q];for(let F in I){let W=I[F];for(let H in W)h(W[H].object),delete W[H];delete I[F]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let q in k){let I=k[q];for(let F in I){let W=I[F];for(let H in W)h(W[H].object),delete W[H];delete I[F]}}delete n[D.id]}function _(D){for(let k in n){let q=n[k];for(let I in q){let F=q[I];if(F[D.id]===void 0)continue;let W=F[D.id];for(let H in W)h(W[H].object),delete W[H];delete F[D.id]}}}function b(D){for(let k in n){let q=n[k],I=D.isInstancedMesh===!0?D.id:0,F=q[I];if(F!==void 0){for(let W in F){let H=F[W];for(let ee in H)h(H[ee].object),delete H[ee];delete F[W]}delete q[I],Object.keys(q).length===0&&delete n[k]}}}function U(){P(),a=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function f0(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==xn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==jt&&_!==rn&&!b&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Te("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:A}}function m0(s){let e=this,t=null,n=0,i=!1,r=!1,a=new tn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,E=M*4,S=m.clippingState||null;c.value=S,S=h(g,d,E,f);for(let T=0;T!==E;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=f;E!==v;++E,S+=4)a.copy(u[E]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var na=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:as});r.uniforms.tEquirect.value=t;let a=new xt(i,r),o=t.minFilter;return t.minFilter===_n&&(t.minFilter=Mt),new Zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Ad=256,g0=3,_0=20,Kd=256,Jd=16,x0=3,y0=new L,v0=new Re,ol=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zs(1,10,null),this._boxMesh=new xt(new Ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=y0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(v0));let p=new Zs(n,i,h);return p.position.copy(o),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ad,Pc(e))}_fromTexture(e,t){e.mapping===ls||e.mapping===$s?this._setSize(e.image.length===0?Ad:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wd(e,!1,!1),n=Math.log2(e)-g0;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ls||e.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=M0(),this._integrationMaterial=S0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Jd);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-x0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Kd*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=b0());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function wd(s,e,t){return new na(s,{minFilter:_n,generateMipmaps:e,type:wn,colorSpace:Wt,depthBuffer:t})}function ia(s,e,t){return new Nn({name:s,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:qt,blending:as,depthTest:!1,depthWrite:!1})}function M0(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S0(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b0(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Rd(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cd(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function T0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===mo||f===go)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new na(g.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===mo||f===go,v=f===ls||f===$s;if(g||v){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ol(s)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new ol(s)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===mo?d.mapping=ls:f===go&&(d.mapping=$s),d}function c(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function E0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&qi("WebGLRenderer: "+n+" extension not supported."),i}}}function A0(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)e.update(v[p],s.ARRAY_BUFFER)}function u(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,E=p.count>=65535?Rr:wr,S=new E(Math.ceil(M/3)*6,1),T=S.array;if(v!==null){let _=v.array;m=v.version;for(let b=0,U=0;b<M;b+=3){let P=_[b+0],D=_[b+1],k=_[b+2];T[U++]=P,T[U++]=D,T[U++]=D,T[U++]=k,T[U++]=k,T[U++]=P}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){let U=_+0,P=_+1,D=_+2;T[b++]=U,T[b++]=P,T[b++]=P,T[b++]=D,T[b++]=D,T[b++]=U}}S.version=m;let A=r.get(g);A&&e.remove(A),r.set(g,S)}function d(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in i){let v=i[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function w0(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function R0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function C0(s,e,t){let n=new WeakMap,i=new et;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=o.attributes.position.count*E,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*T*4*u),_=new Tr(A,S,T,u);_.type=rn,_.needsUpdate=!0;let b=E*4;for(let P=0;P<u;P++){let D=p[P],k=m[P],q=M[P],I=S*T*4*P;for(let F=0;F<D.count;F++){let W=F*b;f===!0&&(i.fromBufferAttribute(D,F),A[I+W+0]=i.x,A[I+W+1]=i.y,A[I+W+2]=i.z,A[I+W+3]=0),g===!0&&(i.fromBufferAttribute(k,F),A[I+W+4]=i.x,A[I+W+5]=i.y,A[I+W+6]=i.z,A[I+W+7]=0),v===!0&&(i.fromBufferAttribute(q,F),A[I+W+8]=i.x,A[I+W+9]=i.y,A[I+W+10]=i.z,A[I+W+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ie(S,T)},n.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function I0(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P0={[uc]:"LINEAR_TONE_MAPPING",[dc]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[ui]:"ACES_FILMIC_TONE_MAPPING",[mc]:"AGX_TONE_MAPPING",[gc]:"NEUTRAL_TONE_MAPPING",[pc]:"CUSTOM_TONE_MAPPING"};function L0(s,e,t,n,i,r){let a=new nn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Pt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let u=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(h,u),f=new En(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,M=null,E=[],S=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),c!==null&&c.setSize(T,A);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(T,A)}},this.setEffects=function(T){E=T,S=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new nn(A,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(A,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&E.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new si(A,_),r===!0&&(l.format=di,l.type=hs)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<E.length;U++){let P=E[U];P.setSize&&P.setSize(A,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(T,A){if(p||T.toneMapping===On&&E.length===0)return!1;if(M=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=On,!0},this.hasRenderPass=function(){return S},this.end=function(T,A){T.toneMapping=m,p=!0;let _=a,b=o;for(let U=0;U<E.length;U++){let P=E[U];P.enabled!==!1&&(P.render(T,b,_,A),P.needsSwap!==!1&&(_=b,b=b===o?c:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,u.defines={},Ve.getTransfer(g)===je&&(u.defines.SRGB_TRANSFER="");let U=P0[v];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(M),T.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var $d=new St,jd=new si(1,1),Qd=new Br(1),ef=new Tr,tf=new $a,nf=new Fr,Id=[],Pd=[],Ld=new Float32Array(16),Nd=new Float32Array(9),Dd=new Float32Array(4);function nr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Id[i];if(r===void 0&&(r=new Float32Array(i),Id[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ll(s,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function N0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function U0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function F0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function O0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Dd.set(n),s.uniformMatrix2fv(this.addr,!1,Dd),Et(t,n)}}function B0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Nd.set(n),s.uniformMatrix3fv(this.addr,!1,Nd),Et(t,n)}}function z0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Ld.set(n),s.uniformMatrix4fv(this.addr,!1,Ld),Et(t,n)}}function k0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function H0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function G0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function V0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function W0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function X0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function q0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function Y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function cl(s){return s.version===0&&(s.compareFunction=wc,s.needsUpdate=!0),s}function Z0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=cl(jd):r=$d,t.setTexture2D(e||r,i)}function K0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tf,i)}function J0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=cl(Qd):r=nf,t.setTextureCube(e||r,i)}function $0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ef,i)}function j0(s){switch(s){case 5126:return N0;case 35664:return D0;case 35665:return U0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return $0}}function Q0(s,e){s.uniform1fv(this.addr,e)}function e_(s,e){let t=nr(e,this.size,2);s.uniform2fv(this.addr,t)}function t_(s,e){let t=nr(e,this.size,3);s.uniform3fv(this.addr,t)}function n_(s,e){let t=nr(e,this.size,4);s.uniform4fv(this.addr,t)}function i_(s,e){let t=nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function s_(s,e){let t=nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r_(s,e){let t=nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a_(s,e){s.uniform1iv(this.addr,e)}function o_(s,e){s.uniform2iv(this.addr,e)}function l_(s,e){s.uniform3iv(this.addr,e)}function c_(s,e){s.uniform4iv(this.addr,e)}function h_(s,e){s.uniform1uiv(this.addr,e)}function u_(s,e){s.uniform2uiv(this.addr,e)}function d_(s,e){s.uniform3uiv(this.addr,e)}function f_(s,e){s.uniform4uiv(this.addr,e)}function p_(s,e,t){let n=this.cache,i=e.length,r=ll(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=cl(jd):a=$d;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function m_(s,e,t){let n=this.cache,i=e.length,r=ll(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tf,r[a])}function g_(s,e,t){let n=this.cache,i=e.length,r=ll(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=cl(Qd):a=nf;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function __(s,e,t){let n=this.cache,i=e.length,r=ll(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ef,r[a])}function x_(s){switch(s){case 5126:return Q0;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j0(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function Ud(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){let n=s.name,i=n.length;for(Bc.lastIndex=0;;){let r=Bc.exec(n),a=Bc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ud(t,l===void 0?new kc(o,s,e):new Hc(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Gc(o),Ud(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);y_(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Fd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var v_=37297,M_=0;function S_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Od=new De;function b_(s){Ve._getMatrix(Od,Ve.workingColorSpace,s);let e=`mat3( ${Od.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case Sr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(s.getShaderSource(e),o)}else return r}function T_(s,e){let t=b_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var E_={[uc]:"Linear",[dc]:"Reinhard",[fc]:"Cineon",[ui]:"ACESFilmic",[mc]:"AgX",[gc]:"Neutral",[pc]:"Custom"};function A_(s,e){let t=E_[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var al=new L;function w_(){Ve.getLuminanceCoefficients(al);let s=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function C_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ta(s){return s!==""}function zd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(P_,L_)}function L_(s,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vc(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(s){return s.replace(N_,D_)}function D_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var U_={[rs]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function F_(s){return U_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O_={[$s]:"ENVMAP_MODE_REFRACTION"};function B_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[hc]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};function k_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":z_[s.combine]||"ENVMAP_BLENDING_NONE"}function H_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=F_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=B_(t),u=k_(t),d=R_(t),f=C_(r),g=i.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(v=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?He.tonemapping_pars_fragment:"",t.toneMapping!==On?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Vc(a),a=zd(a,t),a=kd(a,t),o=Vc(o),o=zd(o,t),o=kd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,E=m+p+o,S=Fd(i,i.VERTEX_SHADER,M),T=Fd(i,i.FRAGMENT_SHADER,E);i.attachShader(g,S),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(S)||"",q=i.getShaderInfoLog(T)||"",I=D.trim(),F=k.trim(),W=q.trim(),H=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,T);else{let V=Bd(i,S,"vertex"),j=Bd(i,T,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+V+`
`+j)}else I!==""?Te("WebGLProgram: Program Info Log:",I):(F===""||W==="")&&(ee=!1);ee&&(P.diagnostics={runnable:H,programLog:I,vertexShader:{log:F,prefix:v},fragmentShader:{log:W,prefix:p}})}i.deleteShader(S),i.deleteShader(T),_=new tr(i,g),b=I_(i,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,v_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}var G_=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function V_(s){return s===Ri||s===$r||s===jr}function W_(s,e,t,n,i,r){let a=new Er,o=new Wc,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,U,P,D,k){let q=P.fog,I=D.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||F,W),ee=d[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Te("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=j!==void 0?j.length:0,_e=0;I.morphAttributes.position!==void 0&&(_e=1),I.morphAttributes.normal!==void 0&&(_e=2),I.morphAttributes.color!==void 0&&(_e=3);let Pe,Y,de,xe;if(ee){let fe=kn[ee];Pe=fe.vertexShader,Y=fe.fragmentShader}else{Pe=_.vertexShader,Y=_.fragmentShader;let fe=o.getVertexShaderStage(_),Qe=o.getFragmentShaderStage(_);o.update(_,fe,Qe),de=fe.id,xe=Qe.id}let be=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,we=!!_.map,Ze=!!_.matcap,Je=!!H,Ge=Je&&H.isPMREMTexture===!0,yt=!!_.aoMap,ut=!!_.lightMap,Dt=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,In=!!_.displacementMap,At=!!_.emissiveMap,ln=!!_.metalnessMap,cn=!!_.roughnessMap,hn=_.anisotropy>0,N=_.clearcoat>0,un=_.diffuseRoughness>0,at=_.dispersion>0,ot=_.retroreflectivity>0,ue=_.iridescence>0,vt=_.sheen>0,Ce=_.transmission>0,Ue=hn&&!!_.anisotropyMap,w=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,te=un&&!!_.diffuseRoughnessMap,$=ue&&!!_.iridescenceMap,se=ue&&!!_.iridescenceThicknessMap,ce=vt&&!!_.sheenColorMap,Z=vt&&!!_.sheenRoughnessMap,K=!!_.specularMap,ae=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Ce&&!!_.transmissionMap,X=Ce&&!!_.thicknessMap,oe=!!_.gradientMap,ie=!!_.alphaMap,re=_.alphaTest>0,Ee=!!_.alphaHash,ke=!!_.extensions,ne=On;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ne=s.toneMapping);let Ae=Ge?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Be={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Pe,fragmentShader:Y,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:ze,batchingColor:ze&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:we,matcap:Ze,envMap:Je,envMapMode:Je&&H.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Ae.length-1:null,envMapSize:Ge?Ae[0].width:null,aoMap:yt,lightMap:ut,bumpMap:Dt,normalMap:lt,displacementMap:In,emissiveMap:At,normalMapObjectSpace:lt&&_.normalMapType===hd,normalMapTangentSpace:lt&&_.normalMapType===il,packedNormalMap:lt&&_.normalMapType===il&&V_(_.normalMap.format),metalnessMap:ln,roughnessMap:cn,anisotropy:hn,anisotropyMap:Ue,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:un,diffuseRoughnessMap:te,dispersion:at,retroreflection:ot,iridescence:ue,iridescenceMap:$,iridescenceThicknessMap:se,sheen:vt,sheenColorMap:ce,sheenRoughnessMap:Z,specularMap:K,specularColorMap:ae,specularIntensityMap:R,transmission:Ce,transmissionMap:J,thicknessMap:X,gradientMap:oe,opaque:_.transparent===!1&&_.blending===Js&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:Ee,combine:_.combine,mapUv:we&&f(_.map.channel),aoMapUv:yt&&f(_.aoMap.channel),lightMapUv:ut&&f(_.lightMap.channel),bumpMapUv:Dt&&f(_.bumpMap.channel),normalMapUv:lt&&f(_.normalMap.channel),displacementMapUv:In&&f(_.displacementMap.channel),emissiveMapUv:At&&f(_.emissiveMap.channel),metalnessMapUv:ln&&f(_.metalnessMap.channel),roughnessMapUv:cn&&f(_.roughnessMap.channel),anisotropyMapUv:Ue&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ae&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:ie&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(lt||hn),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(we||ie),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:_e,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:we&&_.map.isVideoTexture===!0&&Ve.getTransfer(_.map.colorSpace)===je,decodeVideoTextureEmissive:At&&_.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(_.emissiveMap.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ke&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&_.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function v(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],U;if(b){let P=kn[b];U=bd.clone(P.uniforms)}else U=_.uniforms;return U}function E(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new H_(s,b,_,i),l.push(U),h.set(b,U)),U}function S(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:A}}function X_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function q_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Vd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,p,m){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),e++,M}function c(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);let E=o(d,f,g,v,p,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function l(d,f,g,v,p,m){let M=o(d,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||q_),n.length>1&&n.sort(f||Vd),i.length>1&&i.sort(f||Vd)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function Y_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Wd,s.set(n,[a])):i>=r.length?(a=new Wd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Z_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function K_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var J_=0;function $_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j_(s){let e=new Z_,t=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new Oe,a=new Oe;function o(l){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,E=0,S=0,T=0,A=0,_=0,b=0,U=0,P=0;l.sort($_);for(let k=0,q=l.length;k<q;k++){let I=l[k],F=I.color,W=I.intensity,H=I.distance,ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ri?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*W,u+=F.g*W,d+=F.b*W;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],W);P++}else if(I.isSunLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=ee;let _e=j.getViewportCount();for(let Pe=0;Pe<_e;Pe++)n.sunShadowMatrix[v+Pe]=j.getMatrix(Pe),n.sunShadowCascade[v+Pe]=j._cascadeData[Pe];v+=_e,g++}n.sun[f]=V,f++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=V,p++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(W),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[M]=V;let j=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&U++),n.spotLightMatrix[M]=j.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=ee,_++}M++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(F).multiplyScalar(W),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=V,E++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=V,m++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(W),V.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[S]=V,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=E,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=P,n.version=J_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let S=l[M];if(S.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),d++}else if(S.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Xd(s){let e=new j_(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Q_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Xd(s),e.set(i,[o])):r>=a.length?(o=new Xd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ix=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qd=new Oe,ea=new L,zc=new L;function sx(s,e,t){let n=new Ti,i=new Ie,r=new Ie,a=new et,o=new no,c=new io,l={},h=t.maxTextureSize,u={[Fn]:qt,[qt]:Fn,[gn]:gn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let m=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===po&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let U=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),k=s.state;k.setBlending(as),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=A.length;I<F;I++){let W=A[I],H=W.shadow;if(H===void 0){Te("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let ee=H.getFrameExtents();i.multiply(ee),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,H.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ks){if(W.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(i.x,i.y,{format:Ri,type:wn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new si(i.x,i.y,rn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Qn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt}else W.isPointLight?(H.map=new na(i.x),H.map.depthTexture=new Br(i.x,An)):(H.map=new nn(i.x,i.y),H.map.depthTexture=new si(i.x,i.y,An)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Qn,this.type===rs?(H.map.depthTexture.compareFunction=V?Ac:Ec,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,b);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let _e=0;_e<j;_e++){let Pe=H.getCamera(_e);if(W.isPointLight){let Y=H.camera,de=H.matrix,xe=W.distance||Y.far;xe!==Y.far&&(Y.far=xe,Y.updateProjectionMatrix()),ea.setFromMatrixPosition(W.matrixWorld),Y.position.copy(ea),zc.copy(Y.position),zc.add(nx[_e]),Y.up.copy(ix[_e]),Y.lookAt(zc),Y.updateMatrixWorld(),de.makeTranslation(-ea.x,-ea.y,-ea.z),qd.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qd,Y.coordinateSystem,Y.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,_e),s.clear();else{_e===0&&(s.setRenderTarget(H.map),s.clear());let Y=H.getViewport(_e);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),k.viewport(a)}n=H.getFrustum(_e),S(_,b,Pe,W,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Ks&&M(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(U,P,D)};function M(A,_){let b=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new nn(i.x,i.y,{format:Ri,type:wn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,b,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,b,f,v,null)}function E(A,_,b,U){let P=null,D=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=b.isPointLight===!0?c:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=P.uuid,q=_.uuid,I=l[k];I===void 0&&(I={},l[k]=I);let F=I[q];F===void 0&&(F=P.clone(),I[q]=F,_.addEventListener("dispose",T)),P=F}if(P.visible=_.visible,P.wireframe=_.wireframe,U===Ks?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=s.properties.get(P);k.light=b}return P}function S(A,_,b,U,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Ks)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let I=e.update(A),F=A.material;if(Array.isArray(F)){let W=I.groups;for(let H=0,ee=W.length;H<ee;H++){let V=W[H],j=F[V.materialIndex];if(j&&j.visible){let Q=E(A,j,U,D);A.onBeforeShadow(s,A,_,b,I,Q,V),s.renderBufferDirect(b,null,I,Q,A,V),A.onAfterShadow(s,A,_,b,I,Q,V)}}}else if(F.visible){let W=E(A,F,U,D);A.onBeforeShadow(s,A,_,b,I,W,null),s.renderBufferDirect(b,null,I,W,A,null),A.onAfterShadow(s,A,_,b,I,W,null)}}let q=A.children;for(let I=0,F=q.length;I<F;I++)S(q[I],_,b,U,P,D)}function T(A){A.target.removeEventListener("dispose",T);for(let b in l){let U=l[b],P=A.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function rx(s,e){function t(){let R=!1,J=new et,X=null,oe=new et(0,0,0,0);return{setMask:function(ie){X!==ie&&!R&&(s.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,Ee,ke,ne){ne===!0&&(ie*=ke,re*=ke,Ee*=ke),J.set(ie,re,Ee,ke),oe.equals(J)===!1&&(s.clearColor(ie,re,Ee,ke),oe.copy(J))},reset:function(){R=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if(J!==re){let Ee=e.get("EXT_clip_control");re?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),J=re;let ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return J},setTest:function(re){re?me(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(re){X!==re&&!R&&(s.depthMask(re),X=re)},setFunc:function(re){if(J&&(re=vd[re]),oe!==re){switch(re){case Ga:s.depthFunc(s.NEVER);break;case Va:s.depthFunc(s.ALWAYS);break;case Wa:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case Xa:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case Ya:s.depthFunc(s.GREATER);break;case Za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,J&&(re=1-re),s.clearDepth(re))},reset:function(){R=!1,X=null,oe=null,ie=null,J=!1}}}function i(){let R=!1,J=null,X=null,oe=null,ie=null,re=null,Ee=null,ke=null,ne=null;return{setTest:function(Ae){R||(Ae?me(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Ae){J!==Ae&&!R&&(s.stencilMask(Ae),J=Ae)},setFunc:function(Ae,Be,fe){(X!==Ae||oe!==Be||ie!==fe)&&(s.stencilFunc(Ae,Be,fe),X=Ae,oe=Be,ie=fe)},setOp:function(Ae,Be,fe){(re!==Ae||Ee!==Be||ke!==fe)&&(s.stencilOp(Ae,Be,fe),re=Ae,Ee=Be,ke=fe)},setLocked:function(Ae){R=Ae},setClear:function(Ae){ne!==Ae&&(s.clearStencil(Ae),ne=Ae)},reset:function(){R=!1,J=null,X=null,oe=null,ie=null,re=null,Ee=null,ke=null,ne=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,E=null,S=null,T=null,A=null,_=null,b=new Re(0,0,0),U=0,P=!1,D=null,k=null,q=null,I=null,F=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=ee>=2);let j=null,Q={},_e=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Y=new et().fromArray(_e),de=new et().fromArray(Pe);function xe(R,J,X,oe){let ie=new Uint8Array(4),re=s.createTexture();s.bindTexture(R,re),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<X;Ee++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(J+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return re}let be={};be[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(s.DEPTH_TEST),a.setFunc(Us),Dt(!1),lt(sc),me(s.CULL_FACE),yt(as);function me(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function Le(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function ze(R,J){return d[R]!==J?(s.bindFramebuffer(R,J),d[R]=J,R===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),R===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function we(R,J){let X=g,oe=!1;if(R){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let ie=R.textures;if(X.length!==ie.length||X[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Ee=ie.length;re<Ee;re++)X[re]=s.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,oe=!0);oe&&s.drawBuffers(X)}function Ze(R){return v!==R?(s.useProgram(R),v=R,!0):!1}let Je={[os]:s.FUNC_ADD,[ku]:s.FUNC_SUBTRACT,[Hu]:s.FUNC_REVERSE_SUBTRACT};Je[Gu]=s.MIN,Je[Vu]=s.MAX;let Ge={[Wu]:s.ZERO,[Xu]:s.ONE,[qu]:s.SRC_COLOR,[lc]:s.SRC_ALPHA,[ju]:s.SRC_ALPHA_SATURATE,[Ju]:s.DST_COLOR,[Zu]:s.DST_ALPHA,[Yu]:s.ONE_MINUS_SRC_COLOR,[cc]:s.ONE_MINUS_SRC_ALPHA,[$u]:s.ONE_MINUS_DST_COLOR,[Ku]:s.ONE_MINUS_DST_ALPHA,[Qu]:s.CONSTANT_COLOR,[ed]:s.ONE_MINUS_CONSTANT_COLOR,[td]:s.CONSTANT_ALPHA,[nd]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(R,J,X,oe,ie,re,Ee,ke,ne,Ae){if(R===as){p===!0&&(Le(s.BLEND),p=!1);return}if(p===!1&&(me(s.BLEND),p=!0),R!==zu){if(R!==m||Ae!==P){if((M!==os||T!==os)&&(s.blendEquation(s.FUNC_ADD),M=os,T=os),Ae)switch(R){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rc:s.blendFunc(s.ONE,s.ONE);break;case ac:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",R);break}else switch(R){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ac:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",R);break}E=null,S=null,A=null,_=null,b.set(0,0,0),U=0,m=R,P=Ae}return}ie=ie||J,re=re||X,Ee=Ee||oe,(J!==M||ie!==T)&&(s.blendEquationSeparate(Je[J],Je[ie]),M=J,T=ie),(X!==E||oe!==S||re!==A||Ee!==_)&&(s.blendFuncSeparate(Ge[X],Ge[oe],Ge[re],Ge[Ee]),E=X,S=oe,A=re,_=Ee),(ke.equals(b)===!1||ne!==U)&&(s.blendColor(ke.r,ke.g,ke.b,ne),b.copy(ke),U=ne),m=R,P=!1}function ut(R,J){R.side===gn?Le(s.CULL_FACE):me(s.CULL_FACE);let X=R.side===qt;J&&(X=!X),Dt(X),R.blending===Js&&R.transparent===!1?yt(as):yt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),At(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(R){D!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),D=R)}function lt(R){R!==Ou?(me(s.CULL_FACE),R!==k&&(R===sc?s.cullFace(s.BACK):R===Bu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),k=R}function In(R){R!==q&&(H&&s.lineWidth(R),q=R)}function At(R,J,X){R?(me(s.POLYGON_OFFSET_FILL),(I!==J||F!==X)&&(I=J,F=X,a.getReversed()&&(J=-J,X=-X),s.polygonOffset(J,X))):Le(s.POLYGON_OFFSET_FILL)}function ln(R){R?me(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function cn(R){R===void 0&&(R=s.TEXTURE0+W-1),j!==R&&(s.activeTexture(R),j=R)}function hn(R,J,X){X===void 0&&(j===null?X=s.TEXTURE0+W-1:X=j);let oe=Q[X];oe===void 0&&(oe={type:void 0,texture:void 0},Q[X]=oe),(oe.type!==R||oe.texture!==J)&&(j!==X&&(s.activeTexture(X),j=X),s.bindTexture(R,J||be[R]),oe.type=R,oe.texture=J)}function N(){let R=Q[j];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function un(){try{s.compressedTexImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function ot(){try{s.texSubImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function ue(){try{s.texSubImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function vt(){try{s.compressedTexSubImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function Ue(){try{s.texStorage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function w(){try{s.texStorage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function x(){try{s.texImage2D(...arguments)}catch(R){Ne("WebGLState:",R)}}function B(){try{s.texImage3D(...arguments)}catch(R){Ne("WebGLState:",R)}}function te(R){return u[R]!==void 0?u[R]:s.getParameter(R)}function $(R,J){u[R]!==J&&(s.pixelStorei(R,J),u[R]=J)}function se(R){Y.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function ce(R){de.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),de.copy(R))}function Z(R,J){let X=l.get(J);X===void 0&&(X=new WeakMap,l.set(J,X));let oe=X.get(R);oe===void 0&&(oe=s.getUniformBlockIndex(J,R.name),s.uniformBlockBinding(J,oe,oe),X.set(R,oe))}function K(R,J,X){let ie=l.get(J).get(R);c[ie]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,ie,X),c[ie]=X)}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,Q={},d={},c={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,E=null,S=null,T=null,A=null,_=null,b=new Re(0,0,0),U=0,P=!1,D=null,k=null,q=null,I=null,F=null,Y.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Le,bindFramebuffer:ze,drawBuffers:we,useProgram:Ze,setBlending:yt,setMaterial:ut,setFlipSided:Dt,setCullFace:lt,setLineWidth:In,setPolygonOffset:At,setScissorTest:ln,activeTexture:cn,bindTexture:hn,unbindTexture:N,compressedTexImage2D:un,compressedTexImage3D:at,texImage2D:x,texImage3D:B,pixelStorei:$,getParameter:te,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Ue,texStorage3D:w,texSubImage2D:ot,texSubImage3D:ue,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ce,scissor:se,viewport:ce,reset:ae}}function ax(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return p?new OffscreenCanvas(w,x):Bs("canvas")}function M(w,x,B){let te=1,$=Ue(w);if(($.width>B||$.height>B)&&(te=B/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(te*$.width),ce=Math.floor(te*$.height);d===void 0&&(d=m(se,ce));let Z=x?m(se,ce):d;return Z.width=se,Z.height=ce,Z.getContext("2d").drawImage(w,0,0,se,ce),Te("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ce+")."),Z}else return"data"in w&&Te("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(w,x,B,te,$,se=!1){if(w!==null){if(s[w]!==void 0)return s[w];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8),B===s.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),B===s.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8),B===s.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),B===s.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),B===s.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),x===s.RGBA){let K=se?Sr:Ve.getTransfer($);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=K===je?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),B===s.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(w,x){let B;return w?x===null||x===An||x===hs?B=s.DEPTH24_STENCIL8:x===rn?B=s.DEPTH32F_STENCIL8:x===Qs&&(B=s.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===An||x===hs?B=s.DEPTH_COMPONENT24:x===rn?B=s.DEPTH_COMPONENT32F:x===Qs&&(B=s.DEPTH_COMPONENT16),B}function b(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==pt&&w.minFilter!==Mt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function U(w){let x=new WeakRef(w);n.get(w).__ref=x,g.add(x),v.register(w,x,x)}function P(w){let x=n.get(w).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function D(w){q(w.target)}function k(w){I(w.target)}function q(w){w.removeEventListener("dispose",D),P(w),W(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function I(w){w.removeEventListener("dispose",k),P(w),ee(w)}function F(){for(let w of g){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):q(x))}g.clear(),u.clear()}function W(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,te=f.get(B);if(te){let $=te[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(w),Object.keys(te).length===0&&f.delete(B)}n.remove(w)}function H(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let B=w.source,te=f.get(B);delete te[x.__cacheKey],a.memory.textures--}function ee(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&q(B),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let se=0;se<x.__webglFramebuffer[$].length;se++)s.deleteFramebuffer(x.__webglFramebuffer[$][se]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let te=w.textures;for(let $=0,se=te.length;$<se;$++){let ce=n.get(te[$]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[$])}n.remove(w)}let V=0;function j(){V=0}function Q(){return V}function _e(w){V=w}function Pe(){let w=V;return w>=i.maxTextures&&Te("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,w}function Y(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function de(w,x){let B=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let te=w.image;if(te===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function xe(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ut(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function be(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ut(B,w,x);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function me(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Dt(B,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}let Le={[Si]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[Fs]:s.MIRRORED_REPEAT},ze={[pt]:s.NEAREST,[_o]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Mt]:s.LINEAR,[js]:s.LINEAR_MIPMAP_NEAREST,[_n]:s.LINEAR_MIPMAP_LINEAR},we={[dd]:s.NEVER,[wc]:s.ALWAYS,[fd]:s.LESS,[Ec]:s.LEQUAL,[pd]:s.EQUAL,[Ac]:s.GEQUAL,[md]:s.GREATER,[gd]:s.NOTEQUAL};function Ze(w,x){if(x.type===rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Mt||x.magFilter===js||x.magFilter===cs||x.magFilter===_n||x.minFilter===Mt||x.minFilter===js||x.minFilter===cs||x.minFilter===_n)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Le[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Le[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Le[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ze[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ze[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pt||x.minFilter!==cs&&x.minFilter!==_n||x.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Je(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",D),U(x));let te=x.source,$=f.get(te);$===void 0&&($={},f.set(te,$));let se=Y(x);if(se!==w.__cacheKey){$[se]===void 0&&($[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[se].usedTimes++;let ce=$[w.__cacheKey];ce!==void 0&&($[w.__cacheKey].usedTimes--,ce.usedTimes===0&&H(x)),w.__cacheKey=se,w.__webglTexture=$[se].texture}return B}function Ge(w,x,B){return Math.floor(Math.floor(w/B)/x)}function yt(w,x,B,te){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,te,x.data);else{se.sort((R,J)=>R.start-J.start);let ce=0;for(let R=1;R<se.length;R++){let J=se[ce],X=se[R],oe=J.start+J.count,ie=Ge(X.start,x.width,4),re=Ge(J.start,x.width,4);X.start<=oe+1&&ie===re&&Ge(X.start+X.count-1,x.width,4)===ie?J.count=Math.max(J.count,X.start+X.count-J.start):(++ce,se[ce]=X)}se.length=ce+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),K=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=se.length;R<J;R++){let X=se[R],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%x.width,Ee=Math.floor(oe/x.width),ke=ie,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(s.TEXTURE_2D,0,re,Ee,ke,ne,B,te,x.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function ut(w,x,B){let te=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=s.TEXTURE_3D);let $=Je(w,x),se=x.source;t.bindTexture(te,w.__webglTexture,s.TEXTURE0+B);let ce=n.get(se);if(se.version!==ce.__version||$===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ne=Ve.getPrimaries(Ve.workingColorSpace),Ae=x.colorSpace===fi?null:Ve.getPrimaries(x.colorSpace),Be=x.colorSpace===fi||ne===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let K=M(x.image,!1,i.maxTextureSize);K=Ce(x,K);let ae=r.convert(x.format,x.colorSpace),R=r.convert(x.type),J=A(x.internalFormat,ae,R,x.normalized,x.colorSpace,x.isVideoTexture);Ze(te,x);let X,oe=x.mipmaps,ie=x.isVideoTexture!==!0,re=ce.__version===void 0||$===!0,Ee=se.dataReady,ke=b(x,K);if(x.isDepthTexture)J=_(x.format===di,x.type),re&&(ie?t.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ae,R,null));else if(x.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(s.TEXTURE_2D,ke,J,oe[0].width,oe[0].height);for(let ne=0,Ae=oe.length;ne<Ae;ne++)X=oe[ne],ie?Ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(s.TEXTURE_2D,ne,J,X.width,X.height,0,ae,R,X.data);x.generateMipmaps=!1}else ie?(re&&t.texStorage2D(s.TEXTURE_2D,ke,J,K.width,K.height),Ee&&yt(x,K,ae,R)):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ae,R,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,J,oe[0].width,oe[0].height,K.depth);for(let ne=0,Ae=oe.length;ne<Ae;ne++)if(X=oe[ne],x.format!==xn)if(ae!==null)if(ie){if(Ee)if(x.layerUpdates.size>0){let Be=Oc(X.width,X.height,x.format,x.type);for(let fe of x.layerUpdates){let Qe=X.data.subarray(fe*Be/X.data.BYTES_PER_ELEMENT,(fe+1)*Be/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,fe,X.width,X.height,1,ae,Qe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,X.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,K.depth,0,X.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,R,X.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,K.depth,0,ae,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(s.TEXTURE_2D,ke,J,oe[0].width,oe[0].height);for(let ne=0,Ae=oe.length;ne<Ae;ne++)X=oe[ne],x.format!==xn?ae!==null?ie?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,J,X.width,X.height,0,X.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(s.TEXTURE_2D,ne,J,X.width,X.height,0,ae,R,X.data)}else if(x.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,J,K.width,K.height,K.depth),Ee)if(x.layerUpdates.size>0){let ne=Oc(K.width,K.height,x.format,x.type);for(let Ae of x.layerUpdates){let Be=K.data.subarray(Ae*ne/K.data.BYTES_PER_ELEMENT,(Ae+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,K.width,K.height,1,ae,R,Be)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ae,R,K.data);else if(x.isData3DTexture)ie?(re&&t.texStorage3D(s.TEXTURE_3D,ke,J,K.width,K.height,K.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)):t.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ae,R,K.data);else if(x.isFramebufferTexture){if(re)if(ie)t.texStorage2D(s.TEXTURE_2D,ke,J,K.width,K.height);else{let ne=K.width,Ae=K.height;for(let Be=0;Be<ke;Be++)t.texImage2D(s.TEXTURE_2D,Be,J,ne,Ae,0,ae,R,null),ne>>=1,Ae>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),u.add(x),ne.onpaint=Ae=>{let Be=Ae.changedElements;for(let fe of u)Be.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{let Be=s.RGBA,fe=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,fe,Qe,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Ue(oe[0]);t.texStorage2D(s.TEXTURE_2D,ke,J,ne.width,ne.height)}for(let ne=0,Ae=oe.length;ne<Ae;ne++)X=oe[ne],ie?Ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ae,R,X):t.texImage2D(s.TEXTURE_2D,ne,J,ae,R,X);x.generateMipmaps=!1}else if(ie){if(re){let ne=Ue(K);t.texStorage2D(s.TEXTURE_2D,ke,J,ne.width,ne.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,R,K)}else t.texImage2D(s.TEXTURE_2D,0,J,ae,R,K);E(x)&&x.mipmapsAutoUpdate===!0&&S(te),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Dt(w,x,B){if(x.image.length!==6)return;let te=Je(w,x),$=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);let se=n.get($);if($.version!==se.__version||te===!0){t.activeTexture(s.TEXTURE0+B);let ce=Ve.getPrimaries(Ve.workingColorSpace),Z=x.colorSpace===fi?null:Ve.getPrimaries(x.colorSpace),K=x.colorSpace===fi||ce===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ae=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let fe=0;fe<6;fe++)!ae&&!R?J[fe]=M(x.image[fe],!0,i.maxCubemapSize):J[fe]=R?x.image[fe].image:x.image[fe],J[fe]=Ce(x,J[fe]);let X=J[0],oe=r.convert(x.format,x.colorSpace),ie=r.convert(x.type),re=A(x.internalFormat,oe,ie,x.normalized,x.colorSpace),Ee=x.isVideoTexture!==!0,ke=se.__version===void 0||te===!0,ne=$.dataReady,Ae=b(x,X);Ze(s.TEXTURE_CUBE_MAP,x);let Be;if(x.isDepthTexture){if(re=_(x.format===di,x.type),ke)if(Ee)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let fe=0;fe<6;fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){Ee&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,re,X.width,X.height);for(let fe=0;fe<6;fe++){Be=J[fe].mipmaps;for(let Qe=0;Qe<Be.length;Qe++){let wt=Be[Qe];x.format!==xn?oe!==null?Ee?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,0,0,wt.width,wt.height,oe,wt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,re,wt.width,wt.height,0,wt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,0,0,wt.width,wt.height,oe,ie,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,re,wt.width,wt.height,0,oe,ie,wt.data)}}}else{if(Be=x.mipmaps,Ee&&ke){Be.length>0&&Ae++;let fe=Ue(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,re,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(R){Ee?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,J[fe].width,J[fe].height,oe,ie,J[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,J[fe].width,J[fe].height,0,oe,ie,J[fe].data);for(let Qe=0;Qe<Be.length;Qe++){let pi=Be[Qe].image[fe].image;Ee?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,0,0,pi.width,pi.height,oe,ie,pi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,re,pi.width,pi.height,0,oe,ie,pi.data)}}else{Ee?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe,ie,J[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,oe,ie,J[fe]);for(let Qe=0;Qe<Be.length;Qe++){let wt=Be[Qe];Ee?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,0,0,oe,ie,wt.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,re,oe,ie,wt.image[fe])}}}E(x)&&x.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),se.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function lt(w,x,B,te,$,se){let ce=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),K=A(B.internalFormat,ce,Z,B.normalized,B.colorSpace),ae=n.get(x),R=n.get(B);if(R.__renderTarget=x,!ae.__hasExternalTextures){let J=Math.max(1,x.width>>se),X=Math.max(1,x.height>>se);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,se,K,J,X,x.depth,0,ce,Z,null):t.texImage2D($,se,K,J,X,0,ce,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,$,R.__webglTexture,0,ot(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,$,R.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function In(w,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let te=x.depthTexture,$=te&&te.isDepthTexture?te.type:null,se=_(x.stencilBuffer,$),ce=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(x),se,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(x),se,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,se,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,w)}else{let te=x.textures;for(let $=0;$<te.length;$++){let se=te[$],ce=r.convert(se.format,se.colorSpace),Z=r.convert(se.type),K=A(se.internalFormat,ce,Z,se.normalized,se.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(x),K,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(x),K,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,K,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(w,x,B){let te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);$.__renderTarget=x;let se=te?x.depthTexture.image[0]:x.depthTexture.image;(!$.__webglTexture||se.width!==x.width||se.height!==x.height)&&(se.width=x.width,se.height=x.height,x.depthTexture.needsUpdate=!0),te?me(x.depthTexture,0):de(x.depthTexture,0);let ce=$.__webglTexture,Z=ot(x),K=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ae=x.depthTexture.format===di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qn)ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,K,ce,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ae,K,ce,0);else if(x.depthTexture.format===di)ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,K,ce,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)At(x.__webglFramebuffer[te],w,te);else w.texture.mipmaps.length>0?At(x.__webglFramebuffer[0],w,0):At(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=s.createRenderbuffer(),In(x.__webglDepthbuffer[te],w,!1);else{let $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),In(x.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function cn(w,x,B){let te=n.get(w);x!==void 0&&lt(te.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ln(w)}function hn(w){let x=w.texture,B=n.get(w),te=n.get(x);w.addEventListener("dispose",k),U(w);let $=w.textures,se=w.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[Z][K]=s.createFramebuffer()}else B.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ce)for(let Z=0,K=$.length;Z<K;Z++){let ae=n.get($[Z]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ue(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){let K=$[Z];B.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ae=r.convert(K.format,K.colorSpace),R=r.convert(K.type),J=A(K.internalFormat,ae,R,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),X=ot(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),In(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)lt(B.__webglFramebuffer[Z][K],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else lt(B.__webglFramebuffer[Z],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(x)?S(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Z=0,K=$.length;Z<K;Z++){let ae=$[Z],R=n.get(ae),J=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),Ze(J,ae),lt(B.__webglFramebuffer,w,ae,s.COLOR_ATTACHMENT0+Z,J,0),E(ae)&&S(J)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,te.__webglTexture),Ze(Z,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)lt(B.__webglFramebuffer[K],w,x,s.COLOR_ATTACHMENT0,Z,K);else lt(B.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,Z,0);E(x)?S(Z):x.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&ln(w)}function N(w){let x=w.textures;for(let B=0,te=x.length;B<te;B++){let $=x[B];if(E($)&&$.mipmapsAutoUpdate===!0){let se=T(w),ce=n.get($).__webglTexture;t.bindTexture(se,ce),S(se),t.unbindTexture()}}}let un=[];function at(w){if(w.samples>0){if(ue(w)===!1){let x=w.textures,B=w.width,te=w.height,$=s.COLOR_BUFFER_BIT,se=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(w),Z=x.length>1;if(Z)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(x[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,R,0)}s.blitFramebuffer(0,0,B,te,0,0,B,te,$,s.NEAREST),c===!0&&(un.length=0,un.push(s.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&un.push(se),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(x[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,R,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ot(w){return Math.min(i.maxSamples,w.samples)}function ue(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ce(w,x){let B=w.colorSpace,te=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Wt&&B!==fi&&(Ve.getTransfer(B)===je?(te!==xn||$!==jt)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",B)),x}function Ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Pe,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=_e,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=cn,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ue,this.dispose=F}function ox(s,e){function t(n,i=fi){let r,a=Ve.getTransfer(i);if(n===jt)return s.UNSIGNED_BYTE;if(n===yo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return s.BYTE;if(n===yc)return s.SHORT;if(n===Qs)return s.UNSIGNED_SHORT;if(n===xo)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===wn)return s.HALF_FLOAT;if(n===Sc)return s.ALPHA;if(n===bc)return s.RGB;if(n===xn)return s.RGBA;if(n===Qn)return s.DEPTH_COMPONENT;if(n===di)return s.DEPTH_STENCIL;if(n===Mo)return s.RED;if(n===So)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===bo)return s.RG_INTEGER;if(n===To)return s.RGBA_INTEGER;if(n===Yr||n===Zr||n===Kr||n===Jr)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===Ao||n===wo||n===Ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===No||n===$r||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Io)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lo)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Jo||n===$o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Qo||n===jr||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends Tn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new qc,m={},M=t.getContextAttributes(),E=null,S=null,T=[],A=[],_=new Ie,b=null,U=null,P=new _t;P.viewport=new et;let D=new _t;D.viewport=new et;let k=[P,D],q=new ho,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=T[Y];return de===void 0&&(de=new Hs,T[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=T[Y];return de===void 0&&(de=new Hs,T[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=T[Y];return de===void 0&&(de=new Hs,T[Y]=de),de.getHandSpace()};function W(Y){let de=A.indexOf(Y.inputSource);if(de===-1)return;let xe=T[de];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<T.length;Y++){let de=A[Y];de!==null&&(A[Y]=null,T[Y].disconnect(de))}I=null,F=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(E),f=null,d=null,u=null,i=null,S=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),U!==null){let Y=U.camera;Y.fov=U.fov,Y.zoom=U.zoom,Y.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?di:Qn,be=M.stencil?hs:An);let Le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new nn(d.textureWidth,d.textureHeight,{format:xn,type:jt,depthTexture:new si(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new nn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(Y){for(let de=0;de<Y.removed.length;de++){let xe=Y.removed[de],be=A.indexOf(xe);be>=0&&(A[be]=null,T[be].disconnect(xe))}for(let de=0;de<Y.added.length;de++){let xe=Y.added[de],be=A.indexOf(xe);if(be===-1){for(let Le=0;Le<T.length;Le++)if(Le>=A.length){A.push(xe),be=Le;break}else if(A[Le]===null){A[Le]=xe,be=Le;break}if(be===-1)break}let me=T[be];me&&me.connect(xe)}}function V(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let de=Y.near,xe=Y.far;p.texture!==null&&(p.depthNear>0&&(de=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),q.near=D.near=P.near=de,q.far=D.far=P.far=xe,(I!==q.near||F!==q.far)&&(i.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,F=q.far),q.layers.mask=Y.layers.mask|6,P.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let be=Y.parent,me=q.cameras;V(q,be);for(let Le=0;Le<me.length;Le++)V(me[Le],be);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&Y.isPerspectiveCamera&&(U={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,q,be)};function j(Y,de,xe){xe===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ki*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return m[Y]};let Q=null;function _e(Y,de){if(h=de.getViewerPose(l||a),g=de,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let be=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,be=!0);for(let we=0;we<xe.length;we++){let Ze=xe[we],Je=null;if(f!==null)Je=f.getViewport(Ze);else{let yt=u.getViewSubImage(d,Ze);Je=yt.viewport,we===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Ge=k[we];Ge===void 0&&(Ge=new _t,Ge.layers.enable(we),Ge.viewport=new et,k[we]=Ge),Ge.matrix.fromArray(Ze.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ze.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(q.matrix.copy(Ge.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),be===!0&&q.cameras.push(Ge)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let we=u.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&p.init(we,i.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<xe.length;we++){let Ze=xe[we].camera;if(Ze){let Je=m[Ze];Je||(Je=new zr,m[Ze]=Je);let Ge=u.getCameraImage(Ze);Je.sourceTexture=Ge}}}}for(let xe=0;xe<T.length;xe++){let be=A[xe],me=T[xe];be!==null&&me!==void 0&&me.update(be,de,l||a)}Q&&Q(Y,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let Pe=new Yd;Pe.setAnimationLoop(_e),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},hx=new Oe,sf=new De;sf.set(-1,0,0,0,1,0,0,0,1);function ux(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Dc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),E=M.envMap,S=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(s,e,t,n){let i={},r={};function a(M,E){let S=E.program;n.uniformBlockBinding(M,S,i[M.id])}function o(M,E){let S=i[M.id];S===void 0&&(g(M),S=c(M),i[M.id]=S,M.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(M,T);let A=e.render.frame;r[M.id]!==A&&(l(M),r[M.id]=A)}function c(M){let E=s.createBuffer(),S=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function l(M){let E=i[M.id],S=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,_=S.length;A<_;A++){let b=S[A];if(Array.isArray(b))for(let U=0,P=b.length;U<P;U++)h(b[U],A,U,T);else h(b,A,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,E,S,T){if(d(M,E,S,T)===!0){let A=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){let P=_[U],D=v(P,!0);u(P,M.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,M.__data)}}function u(M,E,S){typeof M=="number"||typeof M=="boolean"?E[S]=M:M.isMatrix3?(E[S]=M.elements[0],E[S+1]=M.elements[1],E[S+2]=M.elements[2],E[S+3]=0,E[S+4]=M.elements[3],E[S+5]=M.elements[4],E[S+6]=M.elements[5],E[S+7]=0,E[S+8]=M.elements[6],E[S+9]=M.elements[7],E[S+10]=M.elements[8],E[S+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-S),S):M.toArray(E,S)}function d(M,E,S,T){let A=M.value,_=E+"_"+S;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let b=T[_],U=!1;for(let P=0;P<A.length;P++)f(A[P],b,P)===!0&&(U=!0);return U}return f(A,T,_)}function f(M,E,S){if(E[S]===void 0)return typeof M=="number"||typeof M=="boolean"?E[S]=M:ArrayBuffer.isView(M)?E[S]=M.slice():E[S]=M.clone(),!0;{let T=E[S];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return E[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function g(M){let E=M.uniforms,S=0,T=16;for(let _=0,b=E.length;_<b;_++){let U=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,D=U.length;P<D;P++){let k=U[P],q=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(E[_])||Array.isArray(k.value),F=S;for(let H=0,ee=q.length;H<ee;H++){let V=q[H],j=v(V,I),Q=S%T,_e=Q%j.boundary,Pe=Q+_e;S+=_e,Pe!==0&&T-Pe<j.storage&&(S+=T-Pe),H===0&&(F=S),S+=j.storage}let W=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new W((S-F)/Float32Array.BYTES_PER_ELEMENT),k.__offset=F}}let A=S%T;return A>0&&(S+=T-A),M.__size=S,M.__cache={},this}function v(M,E){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let E=M.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:a,update:o,dispose:m}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function px(){return zn===null&&(zn=new Ws(fx,16,16,Ri,wn),zn.name="DFG_LUT",zn.minFilter=Mt,zn.magFilter=Mt,zn.wrapS=fn,zn.wrapT=fn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Ci=class{constructor(e={}){let{canvas:t=_d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([To,bo,So]),m=new Set([jt,An,Qs,hs,yo,vo]),M=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],b=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,k=null,q=null,I=null,F=null;this._outputColorSpace=st;let W=0,H=0,ee=null,V=-1,j=null,Q=new et,_e=new et,Pe=null,Y=new Re(0),de=0,xe=t.width,be=t.height,me=1,Le=null,ze=null,we=new et(0,0,xe,be),Ze=new et(0,0,xe,be),Je=!1,Ge=new Ti,yt=new ja,ut=!1,Dt=!1,lt=new Oe,In=new L,At=new et,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},cn=!1;function hn(){return ee===null?me:1}let N=n;function un(y,C){return t.getContext(y,C)}let at,ot,ue,vt,Ce,Ue,w,x,B,te,$,se,ce,Z,K,ae,R,J,X,oe,ie,re,Ee;try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){let C="webgl2";if(N=un(C,y),N===null)throw un(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(y){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ne("WebGLRenderer: "+y.message),y}function ke(){at=new E0(N),at.init(),ie=new ox(N,at),ot=new p0(N,at,e,ie),ue=new rx(N,at),ot.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),q=N.createFramebuffer(),I=N.createFramebuffer(),F=N.createFramebuffer(),vt=new R0(N),Ce=new X_,Ue=new ax(N,at,ue,Ce,ot,ie,vt),w=new T0(P),x=new Ip(N),re=new d0(N,x),B=new A0(N,x,vt,re),te=new I0(N,B,x,re,vt),J=new C0(N,ot,Ue),K=new m0(Ce),$=new W_(P,w,at,ot,re,K),se=new ux(P,Ce),ce=new Y_,Z=new Q_(at),R=new u0(P,w,ue,te,g,c),ae=new sx(P,te,ot),Ee=new dx(N,vt,ot,ue),X=new f0(N,at,vt),oe=new w0(N,at,vt),vt.programs=$.programs,P.capabilities=ot,P.extensions=at,P.properties=Ce,P.renderLists=ce,P.shadowMap=ae,P.state=ue,P.info=vt}v!==jt&&(U=new L0(v,t.width,t.height,o,i,r));let ne=new Yc(P,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(xe,be,!1))},this.getSize=function(y){return y.set(xe,be)},this.setSize=function(y,C,G=!0){if(ne.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=y,be=C,t.width=Math.floor(y*me),t.height=Math.floor(C*me),G===!0&&(t.style.width=y+"px",t.style.height=C+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,y,C)},this.getDrawingBufferSize=function(y){return y.set(xe*me,be*me).floor()},this.setDrawingBufferSize=function(y,C,G){xe=y,be=C,me=G,t.width=Math.floor(y*G),t.height=Math.floor(C*G),this.setViewport(0,0,y,C)},this.setEffects=function(y){if(v===jt){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let C=0;C<y.length;C++)if(y[C].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,C,G,O){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,C,G,O),ue.viewport(Q.copy(we).multiplyScalar(hn()).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,C,G,O){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,C,G,O),ue.scissor(_e.copy(Ze).multiplyScalar(hn()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){ue.setScissorTest(Je=y)},this.setOpaqueSort=function(y){Le=y},this.setTransparentSort=function(y){ze=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,C=!0,G=!0){let O=0;if(y){let z=!1;if(ee!==null){let he=ee.texture.format;z=p.has(he)}if(z){let he=ee.texture.type,ye=m.has(he),le=R.getClearColor(),ge=R.getClearAlpha(),Se=le.r,Fe=le.g,qe=le.b;ye?(M[0]=Se,M[1]=Fe,M[2]=qe,M[3]=ge,N.clearBufferuiv(N.COLOR,0,M)):(E[0]=Se,E[1]=Fe,E[2]=qe,E[3]=ge,N.clearBufferiv(N.COLOR,0,E))}else O|=N.COLOR_BUFFER_BIT}C&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),R.dispose(),ce.dispose(),Z.dispose(),Ue.dispose(),Ce.dispose(),w.dispose(),te.dispose(),B.dispose(),re.dispose(),Ee.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",zh),ne.removeEventListener("sessionend",kh),Oi.stop()};function Ae(y){y.preventDefault(),br("WebGLRenderer: Context Lost."),D=!0}function Be(){br("WebGLRenderer: Context Restored."),D=!1;let y=vt.autoReset,C=ae.enabled,G=ae.autoUpdate,O=ae.needsUpdate,z=ae.type;ke(),vt.autoReset=y,ae.enabled=C,ae.autoUpdate=G,ae.needsUpdate=O,ae.type=z}function fe(y){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Qe(y){let C=y.target;C.removeEventListener("dispose",Qe),wt(C)}function wt(y){pi(y),Ce.remove(y)}function pi(y){let C=Ce.get(y).programs;C!==void 0&&(C.forEach(function(G){$.releaseProgram(G)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,C,G,O,z,he){C===null&&(C=ln);let ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,le=bf(y,C,G,O,z);ue.setMaterial(O,ye);let ge=G.index,Se=1;if(O.wireframe===!0){if(ge=B.getWireframeAttribute(G),ge===void 0)return;Se=2}let Fe=G.drawRange,qe=G.attributes.position,ve=Fe.start*Se,Ye=(Fe.start+Fe.count)*Se;he!==null&&(ve=Math.max(ve,he.start*Se),Ye=Math.min(Ye,(he.start+he.count)*Se)),ge!==null?(ve=Math.max(ve,0),Ye=Math.min(Ye,ge.count)):qe!=null&&(ve=Math.max(ve,0),Ye=Math.min(Ye,qe.count));let mt=Ye-ve;if(mt<0||mt===1/0)return;re.setup(z,O,le,G,ge);let it,nt=X;if(ge!==null&&(it=x.get(ge),nt=oe,nt.setIndex(it)),z.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*hn()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(z.isLine){let Ut=O.linewidth;Ut===void 0&&(Ut=1),ue.setLineWidth(Ut*hn()),z.isLineSegments?nt.setMode(N.LINES):z.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else z.isPoints?nt.setMode(N.POINTS):z.isSprite&&nt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(at.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ut=z._multiDrawStarts,Me=z._multiDrawCounts,Gt=z._multiDrawCount,$e=ge?x.get(ge).bytesPerElement:1,Bi=Ce.get(O).currentProgram.getUniforms();for(let Ft=0;Ft<Gt;Ft++)Bi.setValue(N,"_gl_DrawID",Ft),nt.render(Ut[Ft]/$e,Me[Ft])}else if(z.isInstancedMesh)nt.renderInstances(ve,mt,z.count);else if(G.isInstancedBufferGeometry){let Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Me=Math.min(G.instanceCount,Ut);nt.renderInstances(ve,mt,Me)}else nt.render(ve,mt)};function Bh(y,C,G,O){k!==null&&y.isNodeMaterial&&k.setObject(O,y),ut===!0&&K.setState(y,G,!1),y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,ar(y,C,O),y.side=Fn,y.needsUpdate=!0,ar(y,C,O),y.side=gn):ar(y,C,O)}this.compile=function(y,C,G=null){G===null&&(G=y),k!==null&&k.renderStart(y,C,G),A=Z.get(G),A.init(C),b.push(A),G.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),Dt=this.localClippingEnabled,ut=K.init(this.clippingPlanes,Dt),ut===!0&&K.setGlobalState(this.clippingPlanes,C),k!==null&&ae.render(A.state.shadowsArray,G,C);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let he=z.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){let le=he[ye];Bh(le,G,C,z),O.add(le)}else Bh(he,G,C,z),O.add(he)}),A=b.pop(),k!==null&&k.renderEnd(),O},this.compileAsync=function(y,C,G=null){let O=this.compile(y,C,G);return new Promise(z=>{function he(){if(O.forEach(function(ye){let ge=Ce.get(ye).currentProgram;(ge===void 0||ge.isReady())&&O.delete(ye)}),O.size===0){z(y);return}setTimeout(he,10)}at.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Sl=null;function Mf(y){Sl&&Sl(y)}function zh(){Oi.stop()}function kh(){Oi.start()}let Oi=new Yd;Oi.setAnimationLoop(Mf),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(y){Sl=y,ne.setAnimationLoop(y),y===null?Oi.stop():Oi.start()},ne.addEventListener("sessionstart",zh),ne.addEventListener("sessionend",kh),this.render=function(y,C){if(C!==void 0&&C.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(y,C);let G=ne.enabled===!0&&ne.isPresenting===!0,O=U!==null&&(ee===null||G)&&U.begin(P,ee);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,C,ee),A=Z.get(y,b.length),A.init(C),A.state.textureUnits=Ue.getTextureUnits(),b.push(A),lt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?yt.setFromArrayCamera(C):Ge.setFromProjectionMatrix(lt,pn,C.reversedDepth),Dt=this.localClippingEnabled,ut=K.init(this.clippingPlanes,Dt),T=ce.get(y,_.length),T.init(),_.push(T),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let ye=P.xr.getDepthSensingMesh();ye!==null&&bl(ye,C,-1/0,P.sortObjects)}bl(y,C,0,P.sortObjects),T.finish(),k!==null&&k.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(Le,ze),cn=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,cn&&R.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),ut===!0&&K.beginShadows();let z=A.state.shadowsArray;if(ae.render(z,y,C),ut===!0&&K.endShadows(),(O&&U.hasRenderPass())===!1){let ye=T.opaque,le=T.transmissive;if(A.setupLights(),C.isArrayCamera){let ge=C.cameras;if(le.length>0)for(let Se=0,Fe=ge.length;Se<Fe;Se++){let qe=ge[Se];Gh(ye,le,y,qe)}cn&&R.render(y);for(let Se=0,Fe=ge.length;Se<Fe;Se++){let qe=ge[Se];Hh(T,y,qe,qe.viewport)}}else le.length>0&&Gh(ye,le,y,C),cn&&R.render(y),Hh(T,y,C)}ee!==null&&H===0&&(Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee)),O&&U.end(P),y.isScene===!0&&y.onAfterRender(P,y,C),re.resetDefaultState(),V=-1,j=null,b.pop(),b.length>0?(A=b[b.length-1],Ue.setTextureUnits(A.state.textureUnits),ut===!0&&K.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,k!==null&&k.renderEnd()};function bl(y,C,G,O){if(y.visible===!1)return;if(y.layers.test(C.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(C);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let ye=C.isArrayCamera?yt:Ge;if(!y.frustumCulled||y.intersectsFrustum(ye)){O&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);let le=te.update(y),ge=y.material;ge.visible&&T.push(y,le,ge,G,At.z,null,C)}}else if(y.isMesh||y.isLine||y.isPoints){let ye=C.isArrayCamera?yt:Ge;if(!y.frustumCulled||y.intersectsFrustum(ye)){let le=te.update(y),ge=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),At.copy(le.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(lt)),Array.isArray(ge)){let Se=le.groups;for(let Fe=0,qe=Se.length;Fe<qe;Fe++){let ve=Se[Fe],Ye=ge[ve.materialIndex];Ye&&Ye.visible&&T.push(y,le,Ye,G,At.z,ve,C)}}else ge.visible&&T.push(y,le,ge,G,At.z,null,C)}}}let he=y.children;for(let ye=0,le=he.length;ye<le;ye++)bl(he[ye],C,G,O)}function Hh(y,C,G,O){let{opaque:z,transmissive:he,transparent:ye}=y;A.setupLightsView(G),ut===!0&&K.setGlobalState(P.clippingPlanes,G),O&&ue.viewport(Q.copy(O)),z.length>0&&ha(z,C,G),he.length>0&&ha(he,C,G),ye.length>0&&ha(ye,C,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Gh(y,C,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){let ve=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new nn(1,1,{generateMipmaps:!0,type:ve?wn:jt,minFilter:_n,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let he=A.state.transmissionRenderTarget[O.id],ye=O.viewport||Q;he.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);let le=P.getRenderTarget(),ge=P.getActiveCubeFace(),Se=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(Y),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),cn&&R.render(G);let Fe=P.toneMapping;P.toneMapping=On;let qe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),A.setupLightsView(O),ut===!0&&K.setGlobalState(P.clippingPlanes,O),ha(y,G,O),Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he),at.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ye=0,mt=C.length;Ye<mt;Ye++){let it=C[Ye],{object:nt,geometry:Ut,material:Me,group:Gt}=it;if(Me.side===gn&&nt.layers.test(O.layers)){let $e=Me.side;Me.side=qt,Me.needsUpdate=!0,Vh(nt,G,O,Ut,Me,Gt),Me.side=$e,Me.needsUpdate=!0,ve=!0}}ve===!0&&(Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he))}P.setRenderTarget(le,ge,Se),P.setClearColor(Y,de),qe!==void 0&&(O.viewport=qe),P.toneMapping=Fe}function ha(y,C,G){let O=C.isScene===!0?C.overrideMaterial:null;for(let z=0,he=y.length;z<he;z++){let ye=y[z],{object:le,geometry:ge,group:Se}=ye,Fe=ye.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),le.layers.test(G.layers)&&Vh(le,C,G,ge,Fe,Se)}}function Vh(y,C,G,O,z,he){k!==null&&z.isNodeMaterial&&k.setObject(y,z),y.onBeforeRender(P,C,G,O,z,he),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,C,G,O,y,he),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=qt,z.needsUpdate=!0,P.renderBufferDirect(G,C,O,z,y,he),z.side=Fn,z.needsUpdate=!0,P.renderBufferDirect(G,C,O,z,y,he),z.side=gn):P.renderBufferDirect(G,C,O,z,y,he),y.onAfterRender(P,C,G,O,z,he)}function Wh(y){let C=0;for(let G of y)G.texture!==null&&C++;return C}function ar(y,C,G){C.isScene!==!0&&(C=ln);let O=Ce.get(y),z=A.state.lights,he=A.state.shadowsArray,ye=z.state.version,le=$.getParameters(y,z.state,he,C,G,A.state.lightProbeGridArray),ge=$.getProgramCacheKey(le),Se=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;let Fe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=w.get(y.envMap||O.environment,Fe),O.envMapRotation=O.environment!==null&&y.envMap===null?C.environmentRotation:y.envMapRotation,Se===void 0&&(y.addEventListener("dispose",Qe),Se=new Map,O.programs=Se,O.programVariants=new Map);let qe=Se.get(ge);if(qe!==void 0){if(O.currentProgram===qe&&O.lightsStateVersion===ye)return qh(y,le),qe}else le.uniforms=$.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,G,le),y.onBeforeCompile(le,P),qe=$.acquireProgram(le,ge),Se.set(ge,qe),O.uniforms=le.uniforms;let ve=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=K.uniform),qh(y,le),O.needsLights=Ef(y),O.lightsStateVersion=ye,O.needsLights&&(ve.ambientLightColor.value=z.state.ambient,ve.lightProbe.value=z.state.probe,ve.sunLights.value=z.state.sun,ve.sunLightShadows.value=z.state.sunShadow,ve.directionalLights.value=z.state.directional,ve.directionalLightShadows.value=z.state.directionalShadow,ve.spotLights.value=z.state.spot,ve.spotLightShadows.value=z.state.spotShadow,ve.rectAreaLights.value=z.state.rectArea,ve.ltc_1.value=z.state.rectAreaLTC1,ve.ltc_2.value=z.state.rectAreaLTC2,ve.pointLights.value=z.state.point,ve.pointLightShadows.value=z.state.pointShadow,ve.hemisphereLights.value=z.state.hemi,ve.sunShadowMatrix.value=z.state.sunShadowMatrix,ve.sunShadowCascade.value=z.state.sunShadowCascade,ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ve.spotLightMatrix.value=z.state.spotLightMatrix,ve.spotLightMap.value=z.state.spotLightMap,ve.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Wh(A.state.lightProbeGridArray),O.currentProgram=qe,O.uniformsList=null,qe}function Sf(y,C,G,O,z){let he=Ce.get(y),ye=he.currentProgram.id+","+O+","+z,le=he.programVariants.get(ye);return le===void 0?(le=ar(y,C,G),he.programVariants.set(ye,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=z),le}function Xh(y){if(y.uniformsList===null){let C=y.currentProgram.getUniforms();y.uniformsList=tr.seqWithValue(C.seq,y.uniforms)}return y.uniformsList}function qh(y,C){let G=Ce.get(y);G.outputColorSpace=C.outputColorSpace,G.batching=C.batching,G.batchingColor=C.batchingColor,G.instancing=C.instancing,G.instancingColor=C.instancingColor,G.instancingMorph=C.instancingMorph,G.skinning=C.skinning,G.morphTargets=C.morphTargets,G.morphNormals=C.morphNormals,G.morphColors=C.morphColors,G.morphTargetsCount=C.morphTargetsCount,G.numClippingPlanes=C.numClippingPlanes,G.numIntersection=C.numClipIntersection,G.vertexAlphas=C.vertexAlphas,G.vertexTangents=C.vertexTangents,G.toneMapping=C.toneMapping}function bf(y,C,G,O,z){C.isScene!==!0&&(C=ln),Ue.resetTextureUnits();let he=C.fog,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,le=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ve.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Se=w.get(O.envMap||ye,ge),Fe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qe=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ve=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,it=On;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(it=P.toneMapping);let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ut=nt!==void 0?nt.length:0,Me=Ce.get(O),Gt=A.state.lights;if(ut===!0&&(Dt===!0||y!==j)){let ct=y===j&&O.id===V;K.setState(O,y,ct)}let $e=!1,Bi=!1;O.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Gt.state.version||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==Se||O.fog===!0&&Me.fog!==he||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==K.numPlanes||Me.numIntersection!==K.numIntersection)||Me.vertexAlphas!==Fe||Me.vertexTangents!==qe||Me.morphTargets!==ve||Me.morphNormals!==Ye||Me.morphColors!==mt||Me.morphTargetsCount!==Ut||Me.numLightProbeGrids!==Wh(A.state.lightProbeGridArray)?$e=!0:(Me.outputColorSpace!==le||Me.toneMapping!==it)&&(Bi=!0):($e=!0,Me.__version=O.version);let Ft=Me.currentProgram;($e===!0||Bi===!0)&&(Ft=Bi===!0?Sf(O,C,z,le,it):ar(O,C,z),k&&O.isNodeMaterial&&k.onUpdateProgram(O,Ft,Me));let ua=!1,mi=!1,zi=!1,Ke=Ft.getUniforms(),Lt=Me.uniforms;if(ue.useProgram(Ft.program)&&(ua=!0,mi=!0,zi=!0),O.id!==V&&(V=O.id,mi=!0),ua||j!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ke.setValue(N,"projectionMatrix",y.projectionMatrix),Ke.setValue(N,"viewMatrix",y.matrixWorldInverse);let Rt=Ke.map.cameraPosition;Rt!==void 0&&Rt.setValue(N,In.setFromMatrixPosition(y.matrixWorld)),ot.logarithmicDepthBuffer&&Ke.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ke.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,mi=!0,zi=!0)}if(Me.needsLights&&(Gt.state.sunShadowMap.length>0&&Ke.setValue(N,"sunShadowMap",Gt.state.sunShadowMap,Ue),Gt.state.directionalShadowMap.length>0&&Ke.setValue(N,"directionalShadowMap",Gt.state.directionalShadowMap,Ue),Gt.state.spotShadowMap.length>0&&Ke.setValue(N,"spotShadowMap",Gt.state.spotShadowMap,Ue),Gt.state.pointShadowMap.length>0&&Ke.setValue(N,"pointShadowMap",Gt.state.pointShadowMap,Ue)),z.isSkinnedMesh){Ke.setOptional(N,z,"bindMatrix"),Ke.setOptional(N,z,"bindMatrixInverse");let ct=z.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ke.setValue(N,"boneTexture",ct.boneTexture,Ue))}z.isBatchedMesh&&(Ke.setOptional(N,z,"batchingTexture"),Ke.setValue(N,"batchingTexture",z._matricesTexture,Ue),Ke.setOptional(N,z,"batchingIdTexture"),Ke.setValue(N,"batchingIdTexture",z._indirectTexture,Ue),Ke.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Ke.setValue(N,"batchingColorTexture",z._colorsTexture,Ue));let vn=G.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&J.update(z,G,Ft),(mi||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,Ke.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(Lt.envMapIntensity.value=C.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=px()),mi){if(Ke.setValue(N,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&Tf(Lt,zi),he&&O.fog===!0&&se.refreshFogUniforms(Lt,he),se.refreshMaterialUniforms(Lt,O,me,be,A.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){let ct=S,Rt=0;for(let Wn of A.state.lightProbeGridArray)Wn.texture!==null&&(ct.textures[Rt]=Wn.texture,ct.min[Rt]=Wn.boundingBox.min,ct.max[Rt]=Wn.boundingBox.max,ct.resolution[Rt]=Wn.resolution,Rt++);for(let Wn in ct)ct[Wn].length=Rt;Lt.probesSH.value=ct.textures,Lt.probesMin.value=ct.min,Lt.probesMax.value=ct.max,Lt.probesResolution.value=ct.resolution}tr.upload(N,Xh(Me),Lt,Ue)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(tr.upload(N,Xh(Me),Lt,Ue),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ke.setValue(N,"center",z.center),Ke.setValue(N,"modelViewMatrix",z.modelViewMatrix),Ke.setValue(N,"normalMatrix",z.normalMatrix),Ke.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let ct=O.uniformsGroups;for(let Rt=0,Wn=ct.length;Rt<Wn;Rt++){let Zh=ct[Rt];Ee.update(Zh,Ft),Ee.bind(Zh,Ft)}}return Ft}function Tf(y,C){y.ambientLightColor.needsUpdate=C,y.lightProbe.needsUpdate=C,y.sunLights.needsUpdate=C,y.sunLightShadows.needsUpdate=C,y.directionalLights.needsUpdate=C,y.directionalLightShadows.needsUpdate=C,y.pointLights.needsUpdate=C,y.pointLightShadows.needsUpdate=C,y.spotLights.needsUpdate=C,y.spotLightShadows.needsUpdate=C,y.rectAreaLights.needsUpdate=C,y.hemisphereLights.needsUpdate=C}function Ef(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(y,C,G){let O=Ce.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=C,Ce.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,C){let G=Ce.get(y);G.__webglFramebuffer=C,G.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(y,C=0,G=0){ee=y,W=C,H=G;let O=null,z=!1,he=!1;if(y){let le=Ce.get(y);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(N.FRAMEBUFFER,le.__webglFramebuffer),Q.copy(y.viewport),_e.copy(y.scissor),Pe=y.scissorTest,ue.viewport(Q),ue.scissor(_e),ue.setScissorTest(Pe),V=-1;return}else if(le.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(le.__hasExternalTextures)Ue.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Fe=y.depthTexture;if(le.__boundDepthTexture!==Fe){if(Fe!==null&&Ce.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}let ge=y.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let Se=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Se[C])?O=Se[C][G]:O=Se[C],z=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?O=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Se)?O=Se[G]:O=Se,Q.copy(y.viewport),_e.copy(y.scissor),Pe=y.scissorTest}else Q.copy(we).multiplyScalar(me).floor(),_e.copy(Ze).multiplyScalar(me).floor(),Pe=Je;if(G!==0&&(O=q),ue.bindFramebuffer(N.FRAMEBUFFER,O)&&ue.drawBuffers(y,O),ue.viewport(Q),ue.scissor(_e),ue.setScissorTest(Pe),z){let le=Ce.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,G)}else if(he){let le=C;for(let ge=0;ge<y.textures.length;ge++){let Se=Ce.get(y.textures[ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ge,Se.__webglTexture,G,le)}}else if(y!==null&&G!==0){let le=Ce.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,le.__webglTexture,G)}V=-1};function Yh(y){let C=Ce.get(y);return(C.__readFormat!==y.format||C.__readType!==y.type)&&(C.__readFormat=y.format,C.__readType=y.type,C.__formatReadable=ot.textureFormatReadable(y.format),C.__typeReadable=ot.textureTypeReadable(y.type)),C}this.readRenderTargetPixels=function(y,C,G,O,z,he,ye,le=0){if(!(y&&y.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(ge=ge[ye],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(N.FRAMEBUFFER,ge);try{let Se=y.textures[le],Fe=Se.format,qe=Se.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);let ve=Yh(Se);if(ve.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=y.width-O&&G>=0&&G<=y.height-z&&N.readPixels(C,G,O,z,ie.convert(Fe),ie.convert(qe),he)}finally{let Se=ee!==null?Ce.get(ee).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(y,C,G,O,z,he,ye,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(ge=ge[ye],Array.isArray(ge)&&(ge=ge[0])),ge)if(C>=0&&C<=y.width-O&&G>=0&&G<=y.height-z){ue.bindFramebuffer(N.FRAMEBUFFER,ge);let Se=y.textures[le],Fe=Se.format,qe=Se.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);let ve=Yh(Se);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(C,G,O,z,ie.convert(Fe),ie.convert(qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let mt=ee!==null?Ce.get(ee).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,mt);let it=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yd(N,it,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ye),N.deleteSync(it),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,C=null,G=0){let O=Math.pow(2,-G),z=Math.floor(y.image.width*O),he=Math.floor(y.image.height*O),ye=C!==null?C.x:0,le=C!==null?C.y:0;Ue.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ye,le,z,he),ue.unbindTexture()},this.copyTextureToTexture=function(y,C,G=null,O=null,z=0,he=0){let ye,le,ge,Se,Fe,qe,ve,Ye,mt,it=y.isCompressedTexture?y.mipmaps[he]:y.image;if(G!==null)ye=G.max.x-G.min.x,le=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Fe=G.min.y,qe=G.isBox3?G.min.z:0;else{let Ke=Math.pow(2,-z);ye=Math.floor(it.width*Ke),le=Math.floor(it.height*Ke),y.isDataArrayTexture?ge=it.depth:y.isData3DTexture?ge=Math.floor(it.depth*Ke):ge=1,Se=0,Fe=0,qe=0}O!==null?(ve=O.x,Ye=O.y,mt=O.z):(ve=0,Ye=0,mt=0);let nt=ie.convert(C.format),Ut=ie.convert(C.type),Me;C.isData3DTexture?(Ue.setTexture3D(C,0),Me=N.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ue.setTexture2DArray(C,0),Me=N.TEXTURE_2D_ARRAY):(Ue.setTexture2D(C,0),Me=N.TEXTURE_2D),ue.activeTexture(N.TEXTURE0),ue.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,C.flipY),ue.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),ue.pixelStorei(N.UNPACK_ALIGNMENT,C.unpackAlignment);let Gt=ue.getParameter(N.UNPACK_ROW_LENGTH),$e=ue.getParameter(N.UNPACK_IMAGE_HEIGHT),Bi=ue.getParameter(N.UNPACK_SKIP_PIXELS),Ft=ue.getParameter(N.UNPACK_SKIP_ROWS),ua=ue.getParameter(N.UNPACK_SKIP_IMAGES);ue.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),ue.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),ue.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),ue.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),ue.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);let mi=y.isDataArrayTexture||y.isData3DTexture,zi=C.isDataArrayTexture||C.isData3DTexture;if(y.isDepthTexture){let Ke=Ce.get(y),Lt=Ce.get(C),vn=Ce.get(Ke.__renderTarget),ct=Ce.get(Lt.__renderTarget);ue.bindFramebuffer(N.READ_FRAMEBUFFER,vn.__webglFramebuffer),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Rt=0;Rt<ge;Rt++)mi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,z,qe+Rt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(C).__webglTexture,he,mt+Rt)),N.blitFramebuffer(Se,Fe,Se+ye,Fe+le,ve,Ye,ve+ye,Ye+le,N.DEPTH_BUFFER_BIT,N.NEAREST);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Ce.has(y)){let Ke=Ce.get(y),Lt=Ce.get(C);ue.bindFramebuffer(N.READ_FRAMEBUFFER,I),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let vn=0;vn<ge;vn++)mi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ke.__webglTexture,z,qe+vn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ke.__webglTexture,z),zi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.__webglTexture,he,mt+vn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Lt.__webglTexture,he),z!==0?N.blitFramebuffer(Se,Fe,Se+ye,Fe+le,ve,Ye,ve+ye,Ye+le,N.COLOR_BUFFER_BIT,N.NEAREST):zi?N.copyTexSubImage3D(Me,he,ve,Ye,mt+vn,Se,Fe,ye,le):N.copyTexSubImage2D(Me,he,ve,Ye,Se,Fe,ye,le);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else zi?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Me,he,ve,Ye,mt,ye,le,ge,nt,Ut,it.data):C.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,he,ve,Ye,mt,ye,le,ge,nt,it.data):N.texSubImage3D(Me,he,ve,Ye,mt,ye,le,ge,nt,Ut,it):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ve,Ye,ye,le,nt,Ut,it.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ve,Ye,it.width,it.height,nt,it.data):N.texSubImage2D(N.TEXTURE_2D,he,ve,Ye,ye,le,nt,Ut,it);ue.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),ue.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),ue.pixelStorei(N.UNPACK_SKIP_PIXELS,Bi),ue.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),ue.pixelStorei(N.UNPACK_SKIP_IMAGES,ua),he===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&N.generateMipmap(Me),ue.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){W=0,H=0,ee=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};function Kc(s,e){if(e===Tc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===er||e===Qr){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===er)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function sa(s){let e=new Map,t=new Map,n=s.clone();return rf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)rf(s.children[n],e.children[n],t)}var Pi=class extends Un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new hl(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hl(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=hi.extractUrlBase(e);a=hi.resolveURL(l,this.path)}else a=hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hf){try{a[We.KHR_BINARY_GLTF]=new _h(e)}catch(u){i&&i(u);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Th(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:a[u]=new eh;break;case We.KHR_DRACO_MESH_COMPRESSION:a[u]=new xh(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[u]=new yh;break;case We.KHR_MESH_QUANTIZATION:a[u]=new vh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function mx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function ht(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qc=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new is(h),l.distance=u;break;case"spot":l=new ns(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},eh=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,st))}return Promise.all(i)}},th=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(r,r)}return Promise.all(i)}},ih=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},sh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},ah=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Wt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,st)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},oh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},lh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],Wt),Promise.all(i)}},ch=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],Wt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,st)),Promise.all(i)}},uh=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},fh=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ph=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},mh=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},hl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},gh=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let v=new Oe,p=new L,m=new ft,M=new L(1,1,1),E=new Lr(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&M.fromBufferAttribute(c.SCALE,T),E.setMatrixAt(T,v.compose(p,m,M));let S=null;for(let T in c)if(T==="_COLOR_0"){let A=c[T];E.instanceColor=new ni(A.array,A.itemSize,A.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(S===null){let _=E.geometry;S=new Pt,S.name=_.name;for(let b in _.attributes)S.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)S.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&S.setIndex(_.index),S.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)S.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(S.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(S.boundingSphere=_.boundingSphere.clone()),S.drawRange.start=_.drawRange.start,S.drawRange.count=_.drawRange.count,S.userData=Object.assign({},_.userData),E.geometry=S}let A=c[T];S.setAttribute(T,new ni(A.array,A.itemSize,A.normalized))}rt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},hf="glTF",ra=12,af={JSON:1313821514,BIN:5130562},_h=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ra,r=new DataView(e,ra),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===af.JSON){let l=new Uint8Array(e,ra+a,o);this.content=n.decode(l)}else if(c===af.BIN){let l=ra+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Sh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Sh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ir[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],p=c[g];p!==void 0&&(v.normalized=p)}u(f)},o,l,Wt,d)})})}},yh=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vh=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},ul=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,v=g-l,p=-2*f+3*d,m=f-d,M=1-p,E=m-d+u;for(let S=0;S!==o;S++){let T=a[v+S+o],A=a[v+S+c]*h,_=a[g+S+o],b=a[g+S]*h;r[S]=M*T+E*A+p*_+m*b}return r}},gx=new ft,Mh=class extends ul{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return gx.fromArray(r).normalize().toArray(r),r}},yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},of={9728:pt,9729:Mt,9984:_o,9985:js,9986:cs,9987:_n},lf={33071:fn,33648:Fs,10497:Si},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_x={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Yi},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),s.DefaultMaterial}function ds(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mx(s){let e,t=s.extensions&&s.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jc(t.attributes):e=s.indices+":"+jc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+jc(s.targets[n]);return e}function jc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bx=new Oe,Th=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new Wr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new qr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ds(r,o,i),Hn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(hi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Jc[i.type],o=ir[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Nt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Jc[i.type],l=ir[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,p;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,E=t.cache.get(M);E||(v=new l(o,m*f,i.count*f/h),E=new Ji(v,f/h),t.cache.add(M,E)),p=new bi(E,c,d%f/h,g)}else o===null?v=new l(i.count*c):v=new l(o,d,i.count*c),p=new Nt(v,c,g);if(i.sparse!==void 0){let m=Jc.SCALAR,M=ir[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,T=new M(a[1],E,i.sparse.count*m),A=new l(a[2],S,i.sparse.count*c);o!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,b=T.length;_<b;_++){let U=T[_];if(p.setX(U,A[_*c]),c>=2&&p.setY(U,A[_*c+1]),c>=3&&p.setZ(U,A[_*c+2]),c>=4&&p.setW(U,A[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=of[d.magFilter]||Mt,h.minFilter=of[d.minFilter]||_n,h.wrapS=lf[d.wrapS]||Si,h.wrapT=lf[d.wrapT]||Si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==pt&&h.minFilter!==Mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let v=f;t.isImageBitmapLoader===!0&&(v=function(p){let m=new St(p);m.needsUpdate=!0,f(m)}),t.load(hi.resolveURL(d,r.path),v,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),Hn(d,a),d.userData.mimeType=a.mimeType||Sx(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ei,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){let u=i[We.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,st)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);let h=r.alphaMode||$c.OPAQUE;if(h===$c.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$c.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==sn){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&a!==sn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,st)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Hn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ds(i,u,r),u})}createUniqueName(e){let t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return cf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Mx(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=cf(new Pt,l,t),l.mode===yn.TRIANGLE_STRIP?d=d.then(f=>Kc(f,Qr)):l.mode===yn.TRIANGLE_FAN&&(d=d.then(f=>Kc(f,er))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?xx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],p=a[f],m,M=l[f];if(p.mode===yn.TRIANGLES||p.mode===yn.TRIANGLE_STRIP||p.mode===yn.TRIANGLE_FAN||p.mode===void 0){let E=r.isSkinnedMesh===!0,S=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");E&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&S?new Ir(v,M):new xt(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===yn.LINES)m=new Nr(v,M);else if(p.mode===yn.LINE_STRIP)m=new ii(v,M);else if(p.mode===yn.LINE_LOOP)m=new Dr(v,M);else if(p.mode===yn.POINTS)m=new Ur(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&vx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Hn(m,r),p.extensions&&ds(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ds(i,u[0],r),u[0];let d=new dt;r.extensions&&ds(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _t(Yt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new En(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Oe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],v=f.target,p=v.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let E=0,S=d.length;E<S;E++){let T=d[E],A=f[E],_=g[E],b=v[E],U=p[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let P=n._createAnimationTracks(T,A,_,b,U);if(P)for(let D=0;D<P.length;D++)m.push(P[D])}let M=new es(r,void 0,m);return Hn(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Vs:l.length>1?h=new dt:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Hn(h,r),r.extensions&&ds(n,h,r),r.matrix!==void 0){let u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&ds(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(sa(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof zt||d instanceof St)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ii[r.path]===Ii.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ii[r.path]){case Ii.weights:h=ai;break;case Ii.rotation:h=oi;break;case Ii.translation:case Ii.scale:h=wi;break;default:n.itemSize===1?h=ai:h=wi;break}let u=i.interpolation!==void 0?_x[i.interpolation]:Zi,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let v=new h(c[f]+"."+Ii[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof oi?Mh:ul;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Tx(s,e,t){let n=e.attributes,i=new bt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=bh(ir[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=bh(ir[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Jt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function cf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Sh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ve.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Hn(s,e),Tx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yx(s,e.targets,t):s})}function uf(s,e,t,n){e.shadowMap.enabled=!0,e.shadowMap.type=po;for(let[T]of n)T.castShadow=!0,T.shadow.mapSize.set(2048,2048),Object.assign(T.shadow.camera,{left:-240,right:240,top:280,bottom:-160,near:1,far:700}),T.shadow.bias=-4e-4,T.shadow.normalBias=.15,T.shadow.radius=3;let i=new xt(new ji(700,400),new Hr({opacity:.36}));i.rotation.x=-Math.PI/2,i.position.y=-.5,i.receiveShadow=!0,s.add(i);let r=document.querySelector("#main-menu"),a=document.createElement("div");a.className="interior-effects",a.innerHTML=`<div class="wall-light blue-light"></div><div class="wall-light amber-light"></div><div class="floor-light blue-floor"></div><div class="floor-light amber-floor"></div><div class="menu-mist"></div><button class="scene-lamp blue-lamp" aria-label="\u0421\u0438\u043D\u044F\u044F \u043B\u0430\u043C\u043F\u0430" aria-pressed="true"><svg viewBox="270 0 545 1200"><image href="${window.MENU_ASSETS.blue}" width="1086" height="1448"/></svg><i></i></button><button class="scene-lamp amber-lamp" aria-label="\u0416\u0451\u043B\u0442\u0430\u044F \u043B\u0430\u043C\u043F\u0430" aria-pressed="true"><svg viewBox="245 310 595 845"><image href="${window.MENU_ASSETS.amber}" width="1086" height="1448"/></svg><i></i></button><button class="menu-valve" aria-label="\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044C"></button>`,r.prepend(a);const rocks=document.createElement('div');rocks.className='lamp-foreground';rocks.style.backgroundImage=r.style.backgroundImage;a.appendChild(rocks);let o={blue:!0,amber:!1};a.querySelector(".amber-lamp").setAttribute("aria-pressed","false");for(let T of["blue","amber"])a.querySelector("."+T+"-lamp").onclick=()=>{o[T]=!o[T],window.labAudio?.trigger(o[T]?"lampOn":"lampOff"),a.querySelector("."+T+"-lamp").setAttribute("aria-pressed",o[T])};let c=document.createElement("canvas");c.width=c.height=128;let l=c.getContext("2d"),h=l.createRadialGradient(64,64,3,64,64,63);h.addColorStop(0,"rgba(0,0,0,.8)"),h.addColorStop(.4,"rgba(0,0,0,.45)"),h.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=h,l.fillRect(0,0,128,128);let u=new Or(c);for(let side of ["LeftFoot","RightFoot"]){let foot;t.traverse(o=>{if(o.isBone&&o.name.endsWith(side))foot=o});if(!foot)continue;let A=new xt(new ji(34,42),new sn({map:u,transparent:true,depthWrite:false,opacity:.65}));A.rotation.x=-Math.PI/2;let P=foot.getWorldPosition(new L);A.position.set(P.x,.1,P.z+5);s.add(A)}let d=a.querySelector(".menu-valve"),f=new Ci({alpha:!0,antialias:!0});f.setPixelRatio(Math.min(devicePixelRatio||1,2)),f.outputColorSpace=st,f.toneMapping=ui,d.appendChild(f.domElement);let g=new ti,v=new En(-.7,.7,.7,-.7,.1,20);v.position.set(0,0,4),g.add(new ci(12178920,3483418,2));let p=new mn(16763018,3);p.position.set(-2,3,4),g.add(p);let m,M=0,E=0;new Pi().parse(window.WHEEL_GLB,"",T=>{let A=new bt().setFromObject(T.scene),_=A.getSize(new L);T.scene.position.sub(A.getCenter(new L)),m=new dt,m.add(T.scene),m.scale.setScalar(1.1/Math.max(_.x,_.y));let b=new dt;b.rotation.y=-.7,b.rotation.x=.08,b.add(m),g.add(b)},T=>console.error("Valve load",T));window.resetFloodValve102=()=>{M=0;E=0;};let dragId=null,lastAngle=0;const polar=e=>{const r=d.getBoundingClientRect();return Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2)};d.onpointerdown=e=>{if(dragId!==null)return;e.preventDefault();dragId=e.pointerId;lastAngle=polar(e);window.floodGestureStart104?.();d.setPointerCapture(e.pointerId)};d.onpointermove=e=>{if(e.pointerId!==dragId)return;e.preventDefault();const events=e.getCoalescedEvents?.()||[];for(const event of events.length?events:[e]){const r=d.getBoundingClientRect();if(Math.hypot(event.clientX-r.left-r.width/2,event.clientY-r.top-r.height/2)<8)continue;const a=polar(event),delta=Math.atan2(Math.sin(a-lastAngle),Math.cos(a-lastAngle));const applied=window.floodTurn102?window.floodTurn102(delta):delta;M-=applied;if(Math.abs(applied)>.008)window.labAudio?.play("valve");lastAngle=a}};const release=e=>{if(e.pointerId===dragId){dragId=null;window.floodGestureEnd104?.();window.labAudio?.stop("valve")}};d.onpointerup=release;d.onpointercancel=release;d.onlostpointercapture=release;d.onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();if(e.repeat)return;window.floodGestureStart104?.();M-=window.floodTurn102?window.floodTurn102(e.key==='ArrowRight'?.4:-.4):(e.key==='ArrowRight'?.15:-.15)}};let S=0;return function(A){let _=Math.min(.05,(A-S)/1e3||0);S=A;let b=.97+.018*Math.sin(A*.0017)+.012*Math.sin(A*.0043),U=o.blue?b:0,P=o.amber?.98+.02*Math.sin(A*.0021):0;a.style.setProperty("--blue-power",U),a.style.setProperty("--amber-power",P),n[0][0].intensity=3.1*P,n[1][0].intensity=2.5*U,p.intensity=.3+1.7*P+U,E+=(M-E)*(1-Math.exp(-_*7)),m&&(m.rotation.z=E);let D=d.clientWidth,k=d.clientHeight;if(D&&k){let q=f.getSize(new Ie);(q.x!==D||q.y!==k)&&f.setSize(D,k,!1),f.render(g,v)}}}var Ht=()=>new L,Li=()=>new ft,Eh=s=>s*s*(3-2*s);function wh(s,e,t){let n=s.getWorldPosition(Ht()),i=e.getWorldPosition(Ht()).sub(n).normalize(),r=t.clone().sub(n).normalize();s.quaternion.copy(s.parent.getWorldQuaternion(Li()).invert().multiply(Li().setFromUnitVectors(i,r).multiply(s.getWorldQuaternion(Li())))),s.updateWorldMatrix(!1,!0)}function df(s,e,t,n,i){let r=s.getWorldPosition(Ht()),a=e.getWorldPosition(Ht()),o=t.getWorldPosition(Ht()),c=r.distanceTo(a),l=a.distanceTo(o),h=n.clone().sub(r),u=Yt.clamp(h.length(),Math.abs(c-l)+1e-5,(c+l)*.999);h.normalize();let d=(c*c-l*l+u*u)/(2*u),f=i.clone().addScaledVector(h,-i.dot(h)).normalize();wh(s,e,r.clone().addScaledVector(h,d).addScaledVector(f,Math.sqrt(Math.max(0,c*c-d*d)))),wh(e,t,r.addScaledVector(h,u))}function Ah(s,e){s.quaternion.copy(s.parent.getWorldQuaternion(Li()).invert().multiply(Li().setFromAxisAngle(new L(0,0,1),e).multiply(s.getWorldQuaternion(Li())))),s.updateWorldMatrix(!1,!0)}var dl=class{constructor(e,t,n){this.model=e,this.root=t,this.h=n,this.b={},this.rest=[],e.traverse(i=>{i.isBone&&(this.b[i.name.replace(/^.*mixamorig[:_]?/,"")]=i,this.rest.push([i,i.quaternion.clone(),i.position.clone()]))}),this.weight=0,this.distance=0,this.state="Idle",this.feet={},this.metrics={}}update({active:e,box:t,face:n=1,floor:i,dt:r,travel:a=0}){if(this.weight=Yt.clamp(this.weight+(e?r/.28:-r/.28),0,1),this.state=e?this.weight<1?"PushStart":Math.abs(a)>1e-5?"PushLoop":"PushBlocked":this.weight>0?"PushStop":"Idle",!e){if(this.releasePose&&this.weight>0){let F=Eh(this.weight);for(let[W,H,ee]of this.releasePose)W.quaternion.slerp(H,F),W.position.lerp(ee,F);this.root.position.addScaledVector(this.releaseOffset,F),this.root.updateMatrixWorld(!0)}this.feet={},this.lastBox=null;return}if(e&&t&&(this.lastBox=t),t=t||this.lastBox,!t||this.weight<=0){this.feet={};return}let o=Eh(this.weight),c=this.h,l=this.b,h=this.root,u=h.position.clone(),d=this.rest.map(([F])=>[F,F.quaternion.clone(),F.position.clone()]);for(let[F,W,H]of this.rest)F.quaternion.copy(W),F.position.copy(H);h.updateMatrixWorld(!0),h.position.y-=c*.065,h.updateMatrixWorld(!0),Ah(l.Hips,-n*.39),Ah(l.Spine,-n*.035),Ah(l.Head,n*.09);let f=l.LeftArm.getWorldPosition(Ht()),g=l.LeftForeArm.getWorldPosition(Ht()),v=l.LeftHand.getWorldPosition(Ht()),p=f.distanceTo(g),m=g.distanceTo(v),M=Math.sqrt(p*p+m*m+2*p*m*Math.cos(Math.PI/9)),E=n>0?t.left:t.right,S=Math.min(f.y,t.top-c*.035),T=E-n*c*.025,A=S-f.y,_=T-n*Math.sqrt(Math.max(M*M-A*A,c*c*.003));h.position.x+=_-f.x,h.updateMatrixWorld(!0);for(let F of["Left","Right"]){let W=l[F+"Arm"].getWorldPosition(Ht()),H=l[F+"ForeArm"].getWorldPosition(Ht()),ee=l[F+"Hand"].getWorldPosition(Ht()),V=W.distanceTo(H),j=H.distanceTo(ee),Q=Math.sqrt(V*V+j*j+2*V*j*Math.cos(Math.PI/9)),_e=S-W.y,Pe=Math.sqrt(Math.max(0,Q*Q-_e*_e)),Y=n*(T-W.x)-Pe;Y>0&&(h.position.x+=n*Y,h.updateMatrixWorld(!0))}this.weight>.98&&(this.distance+=Math.abs(a));let b=c*.36,U=this.distance/b%1,P=this.state==="PushBlocked"||this.state==="PushStop",D=0,k=0,q=0;for(let[F,W,H]of[["Left",0,c*.065],["Right",.5,-c*.065]]){let ee=l[F+"Hand"],V=l[F+"Arm"],j=l[F+"ForeArm"],Q=new L(T,S,V.getWorldPosition(Ht()).z);df(V,j,ee,Q,new L(0,-1,0));let _e=l[F+"HandMiddle1"];_e&&wh(ee,_e,ee.getWorldPosition(Ht()).add(new L(n*.01,c*.1,0))),D=Math.max(D,ee.getWorldPosition(Ht()).distanceTo(Q));let Pe=(U+W)%1,Y=Pe<.68,de=l[F+"UpLeg"],xe=l[F+"Leg"],be=l[F+"Foot"],me=de.getWorldPosition(Ht()),Le=i+c*.075,ze=this.feet[F],we=u.x-n*c*.04;ze||(ze=this.feet[F]={x:we+n*(.12-Pe/.68*.245)*c,stance:Y,groundY:Le}),Y&&!ze.stance&&(ze.x=we+n*.12*c);let Ze=ze.x,Je=Le;if(!Y&&!P){let ut=(Pe-.68)/.32,Dt=we+n*.12*c;Ze=ze.x+(Dt-ze.x)*Eh(ut),Je+=Math.sin(Math.PI*ut)*c*.055,q++}P?(ze.wasBlocked||(ze.x=ze.lastX??ze.x),Ze=ze.x,ze.lift=(ze.lift||0)*Math.exp(-r*22),Je=Le+ze.lift):ze.lift=Je-Le,ze.wasBlocked=P,ze.lastX=Ze;let Ge=new L(Ze,Je,H*.65),yt=be.getWorldQuaternion(Li());df(de,xe,be,Ge,new L(n,0,0)),be.quaternion.copy(be.parent.getWorldQuaternion(Li()).invert().multiply(yt)),be.updateWorldMatrix(!1,!0),Y&&(k=Math.max(k,be.getWorldPosition(Ht()).distanceTo(Ge))),ze.stance=Y}let I=h.position.clone();this.releaseOffset=I.clone().sub(u),this.releasePose=this.rest.map(([F])=>[F,F.quaternion.clone(),F.position.clone()]);for(let[F,W,H]of d)F.quaternion.slerpQuaternions(W,F.quaternion.clone(),o),F.position.lerpVectors(H,F.position.clone(),o);h.position.lerpVectors(u,I,o),h.updateMatrixWorld(!0),this.metrics={state:this.state,handError:D,plantedDrift:k,airborne:q,phase:U}}};var mf=2340,Zt=1080,Gn=new Ci({alpha:!0,antialias:!0});let hdLast=0;function hdResize(force=false){const now=performance.now();if(!force&&now-hdLast<750)return;hdLast=now;const c=document.querySelector('#scene'),r={width:c.clientWidth},phone=Math.min(screen.width,screen.height)<600,cap=phone?2560:4608,dpr=Math.min(devicePixelRatio||1,2),w=Math.max(640,Math.min(cap,Math.round(r.width*dpr*(phone?1:1.35)))),h=Math.round(w*1080/2340);if(c.width!==w||c.height!==h){c.width=w;c.height=h;const ctx=c.getContext('2d');ctx.setTransform(w/2340,0,0,h/1080,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';Gn.setSize(w,h,false)}c.dataset.renderSize=w+'x'+h;c.dataset.drawCalls=Gn.info.render.calls;c.dataset.triangles=Gn.info.render.triangles;c.dataset.textures=Gn.info.memory.textures;}Gn.setSize(2340,1080,false);window.resizeLabHD=hdResize;Gn.setClearColor(0,0);Gn.outputColorSpace=st;Gn.toneMapping=ui;Gn.toneMappingExposure=1.3;Gn.shadowMap.enabled=!0;Gn.shadowMap.type=po;Gn.localClippingEnabled=!0;var gf=new tn(new L(0,1,0),1e6),Vn=new ti,Oh=new En(0,mf,Zt,0,.1,3e3);Oh.position.set(0,0,1500);Oh.lookAt(0,0,0);Vn.add(new ci(11255771,3484451,1.25));var _f=new mn(13753599,1.6);_f.position.set(500,900,700);Vn.add(_f);function Fi(s,e,t,n,i){let r=new is(t,n,i,2);return r.position.set(s,Zt-e,100),Vn.add(r),r}Fi(475,185,16760170,16e4,850);Fi(1830,185,16760170,16e4,850);Fi(2090,610,16753226,7e4,460);Fi(745,400,16755280,4e4,450);var Ex=Fi(1120,580,2678783,3e4,330),VM=Fi(1420,990,16717832,11e4,520),fl=Fi(1139,207,10280959,0,340),Ax=Fi(2035,510,10280959,0,300),wx=new sn({colorWrite:!1});for(let[s,e,t,n]of[[140,748,480,332],[620,835,370,245],[990,898,175,182],[1165,949,160,131],[1325,816,305,264],[1630,750,530,330],[790,600,660,44],[470,353,405,2],[907,112,405,45],[1680,365,480,44]]){let i=new xt(new Ai(t,n,70),wx);i.position.set(s+t/2,Zt-e-n/2,0),i.castShadow=!0,i.renderOrder=-1,Vn.add(i)}var ms=new ns(16764556,16e4,1e3,.9,.7,2);ms.position.set(475,Zt-185,200);ms.target.position.set(600,Zt-800,0);ms.castShadow=!0;ms.shadow.mapSize.set(Math.min(screen.width,screen.height)<600?1024:2048,Math.min(screen.width,screen.height)<600?1024:2048);ms.shadow.bias=-2e-4;Vn.add(ms,ms.target);var Ml,Rh=[];var ca,pl=null,aa=0,Ch=null,xf=[],yf=[],Cn,yl,on,oa="Idle",Ih=null,Kt,Fh;var la,vl,rr=new dt;Vn.add(rr);var Rx=new Promise((s,e)=>new Pi().parse(window.HERO_GLB,"",t=>{let n=0;t.scene.traverse(l=>{if(!l.isSkinnedMesh)return;let h=l.geometry,u=h.attributes.position,d=h.morphAttributes.position;if(!d?.length)return;let f=d[0],g=[];for(let p=0;p<u.count;p++)u.getY(p)>.415&&u.getY(p)<.455&&Math.abs(f.getZ(p))>.008&&g.push(p);let v=d.map(p=>p.clone());for(let p=0;p<u.count;p++){let m=u.getY(p);if(m<.28||m>=.43||u.getZ(p)>-.03)continue;let M=-1,E=.035*.035;for(let T of g){let A=(u.getX(p)-u.getX(T))**2+(u.getZ(p)-u.getZ(T))**2;A<E&&(E=A,M=T)}if(M<0)continue;let S=Yt.smoothstep(m,.28,.33);for(let T=0;T<v.length;T++){let A=d[T];v[T].setXYZ(p,A.getX(M)*S,A.getY(M)*S,A.getZ(M)*S)}n++}h.morphAttributes.position=v}),console.info("Cape hem vertices freed:",n),Cn=t.scene,Cn.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1)});let i=t.animations.find(l=>l.name==="Run");for(let l of i.tracks.filter(h=>/Hips.*position/.test(h.name))){let h=[0,0,0];for(let u=0;u<l.values.length;u++)h[u%3]+=l.values[u]/(l.values.length/3);for(let u=0;u<l.values.length;u++)l.values[u]=h[u%3]+(l.values[u]-h[u%3])*.12}ca=new dl(Cn,rr,184),yl=new ss(Cn),on=Object.fromEntries(t.animations.map(l=>[l.name,yl.clipAction(l)])),on.Idle.play(),yl.update(0),Cn.updateMatrixWorld(!0);let r=new bt().setFromObject(Cn,!0);la=184/r.getSize(new L).y,vl=new L(-(r.min.x+r.max.x)/2,-r.min.y,-(r.min.z+r.max.z)/2),Cn.position.copy(vl),rr.add(Cn),rr.scale.setScalar(la);let o=sa(t.scene);o.traverse(l=>{if(l.isBone){let h=ca.rest.find(([u])=>u.name===l.name);h&&yf.push([l,h[1],h[2]])}}),o.position.copy(vl),o.position.y-=92/la,o.traverse(l=>{l.isMesh&&(l.material=l.material.clone(),l.material.transparent=!0,l.material.opacity=.45,l.material.depthWrite=!1,l.material.clippingPlanes=[gf])}),o.traverse(l=>{if(l.isSkinnedMesh){let h=[],u=l.geometry,d=u.attributes.skinIndex,f=u.attributes.skinWeight,g=new Set(l.skeleton.bones.map((v,p)=>/Foot|Toe/.test(v.name)?p:-1));for(let v=0;v<d.count;v++){let p=0;for(let m=0;m<4;m++)g.has(d.getComponent(v,m))&&(p+=f.getComponent(v,m));p>.65&&h.push(v)}xf.push([l,h])}}),Kt=new dt,Kt.scale.setScalar(la),Kt.add(o),Vn.add(Kt),Kt.visible=!1,Fh=new ss(o);let c=Fh.clipAction(t.animations.find(l=>l.name==="Death"));c.setLoop(tl,1),c.clampWhenFinished=!0,c.play(),window.hero3d.status={loaded:!0,clips:Object.keys(on),height:184},s()},e)),Cx=new Promise((s,e)=>new Pi().parse(window.CRATE_GLB,"",t=>{let n=new bt().setFromObject(t.scene),i=n.getSize(new L);t.scene.position.set(-(n.min.x+n.max.x)/2,-n.min.y,-(n.min.z+n.max.z)/2),Ml=t.scene,Ml.userData.size=i,s()},e)),Ui,sr,ml,Ix=new Promise((s,e)=>new Pi().parse(window.BELOVED_GLB,"",t=>{Ui=new Ci({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ui.setSize(606,1074),Ui.setClearColor(0,0),Ui.outputColorSpace=st,Ui.toneMapping=ui,sr=new ti,sr.fog=new Ar(10857125,390,780),sr.add(new ci(15002091,6447188,2.3));let n=new mn(16769709,2.5);n.position.set(-80,240,180),sr.add(n);let i=new bt().setFromObject(t.scene),r=i.getSize(new L),a=184/r.y;t.scene.position.set(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2);let o=new dt;o.add(t.scene),o.scale.setScalar(a),o.position.z=-184*1.05,sr.add(o),ml=new _t(28,101/179,.1,1500),ml.position.set(0,92,420),ml.lookAt(0,92,-129),Ui.render(sr,ml),s()},e)),Px=Promise.all([Rx,Cx,Ix]),ff=!1,Rn,an,Ni,Di,Ph=0,Lh=[],gl,_l,Nh,fs=0,Dh=0,xl,Uh=[],pf;function Lx(s){if(ff=s,!s){cancelAnimationFrame(Ph),fs&&(fs=-1);return}if(!Rn){let t=document.querySelector("#menu-hero");Rn=new Ci({alpha:!0,antialias:!0}),Rn.setPixelRatio(Math.min(devicePixelRatio||1,2)),Rn.outputColorSpace=st,Rn.toneMapping=ui,t.appendChild(Rn.domElement),Ni=new ti,Ni.add(new ci(12181229,2695966,1.2));let n=new mn(16765845,3.2);n.position.set(160,32,100),Ni.add(n);let i=new mn(7524317,2.6);i.position.set(-140,320,45),Ni.add(i),Uh=[[n,3.2],[i,2.6]];let r=sa(Cn);r.traverse(u=>{if(u.isBone){let d=ca.rest.find(([f])=>f.name===u.name);d&&(u.quaternion.copy(d[1]),u.position.copy(d[2]))}}),r.position.copy(vl);let a=u=>{let d;return r.traverse(f=>{f.isBone&&f.name.endsWith(u)&&(d=f)}),d};gl=new ss(r),_l=gl.clipAction(on.Run.getClip().clone()),Nh=gl.clipAction(on.Idle.getClip().clone()),_l.play(),Nh.play(),fs=-1,Dh=performance.now(),a("LeftForeArm")?.rotateX(-.12),a("RightForeArm")?.rotateX(-.16),an=new dt,an.add(r),an.scale.setScalar(la*1.18),an.rotation.y=-.2,Ni.add(an);an.updateMatrixWorld(true);an.userData.groundY=-new bt().setFromObject(an).min.y;an.position.y=an.userData.groundY;an.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});for(let u of["Spine","Spine1","Spine2","Head","LeftShoulder","RightShoulder"]){let d=a(u);d&&Lh.push([d,d.quaternion.clone(),u])}r.traverse(u=>{if(u.isMesh)for(let d of[].concat(u.material))for(let f of["map","normalMap","roughnessMap"])d[f]&&(d[f].anisotropy=Math.min(8,Rn.capabilities.getMaxAnisotropy()),d[f].needsUpdate=!0)});let o=new xt(new kr(35,48),new sn({color:132360,transparent:!0,opacity:.3,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.scale.set(1,.6,1),o.position.set(0,.1,0),o.visible=!1,Ni.add(o),xl=o,Di=new _t(34,1,.1,1500),Di.position.set(0,101,345),Di.lookAt(0,94,0),pf=uf(Ni,Rn,an,Uh);let c=null,l=0;t.addEventListener("pointerdown",u=>{fs>0&&performance.now()-fs<2450||(c=u.pointerId,l=u.clientX,t.setPointerCapture(u.pointerId))}),t.addEventListener("pointermove",u=>{c===u.pointerId&&(an.rotation.y+=(u.clientX-l)*.012,l=u.clientX)});let h=()=>{c=null};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h),t.addEventListener("lostpointercapture",h),t.addEventListener("keydown",u=>{(u.key==="ArrowLeft"||u.key==="ArrowRight")&&(u.preventDefault(),an.rotation.y+=u.key==="ArrowLeft"?-.15:.15)})}function e(){if(!ff)return;let t=document.querySelector("#menu-hero"),n=t.clientWidth,i=t.clientHeight;if(n&&i){let r=Rn.getSize(new Ie);(r.x!==n||r.y!==i)&&(Rn.setSize(n,i,!1),Di.aspect=n/i,Di.updateProjectionMatrix());let a=performance.now(),o=Math.min(.05,Math.max(0,(a-Dh)/1e3));Dh=a;let c=fs<0?3:Math.min(3,(a-fs)/1e3),l=Math.min(1,c/2.45),h=l<.72?l/.86:(.72+(l-.72)-(l-.72)**2/.56)/.86,u=l<.72?1:Math.max(0,(1-l)/.28),d=Yt.smoothstep(l,.78,1);for(let[m,M]of Lh)m.quaternion.copy(M);_l.setEffectiveWeight(1-d),Nh.setEffectiveWeight(d),_l.timeScale=u*1.65,gl.update(0),l<1?(an.position.set(-310*(1-h),0,-70*(1-h)),an.rotation.y=Yt.lerp(1.35,-.2,d)):an.position.set(0,an.userData.groundY||0,0);let f=Yt.smoothstep(h,.08,.82);for(let[m,M]of Uh)m.intensity=M*(.05+.95*f);xl.position.x=an.position.x,xl.position.z=an.position.z,xl.material.opacity=.3*f;let g=Math.sin(a*.001*1.65)*d;for(let[m,M,E]of Lh)E.startsWith("Spine")?m.rotateX(g*.004):E==="Head"&&m.rotateX(-g*.006);let v=Math.tan(Yt.degToRad(17))*466,p=-.19*2*v*n/i;Di.position.set(p,120,466),Di.lookAt(p,110,0),pf?.(a),Rn.render(Ni,Di)}Ph=requestAnimationFrame(e)}cancelAnimationFrame(Ph),e()}var ps=new dt;Vn.add(ps);var vf=new Ei({color:9364991,transparent:!0,opacity:.9});for(let s=0;s<5;s++){let e=new ii(new Pt().setFromPoints(Array.from({length:13},()=>new L)),vf);ps.add(e)}ps.visible=!1;window.hero3d={ready:Px,showMenu:Lx,drawBeloved(s){if(!Ui)return;s.save(),s.beginPath(),s.rect(2005,180,101,179),s.clip(),s.drawImage(Ui.domElement,2005,180,101,179);let e=s.createLinearGradient(0,180,0,359);e.addColorStop(0,"#aab9b00c"),e.addColorStop(.5,"#aab9b01c"),e.addColorStop(1,"#b4c2b370"),s.fillStyle=e,s.fillRect(2005,180,101,179),s.restore()},status:{loaded:!1},draw(s,e,t){if(!Cn)return;let{player:n,clock:i,flash:r,corpses:a,crates:o,deaths:c,mode:l}=e,h=Ih===null?0:Math.max(0,Math.min(.05,i-Ih));Ih=i;let u=n.ground?n.pushing?"Idle":Math.abs(n.vx)>8?"Run":"Idle":"Jump";if(u!==oa&&(on[oa].fadeOut(.1),on[u].reset().setEffectiveWeight(1).fadeIn(.1).play(),oa=u),on.Run.timeScale=.9+Math.min(1,Math.abs(n.vx)/516)*.15,on.Push.timeScale=.65,oa==="Jump"?(on.Jump.paused=!0,on.Jump.time=Yt.clamp((n.vy+966)/1932,0,1)*on.Jump.getClip().duration):on.Jump.paused=!1,Ch)for(let[p,m,M]of Ch)p.quaternion.copy(m),p.position.copy(M);yl.update(h);let d=.18+Math.min(1,Math.abs(n.vx)/516)*.95;aa+=(d-aa)*(1-Math.exp(-h*7)),Cn.traverse(p=>{if(!p.morphTargetDictionary)return;let m=p.morphTargetDictionary,M=p.morphTargetInfluences;m.Cape_Wind!==void 0&&(M[m.Cape_Wind]=aa),m.Cape_Ripple!==void 0&&(M[m.Cape_Ripple]=Math.sin(i*9-1.1)*(.12+aa*.55)),m.Cape_Side!==void 0&&(M[m.Cape_Side]=Math.sin(i*6-.8)*(.08+aa*.3))}),Ch=ca.rest.map(([p])=>[p,p.quaternion.clone(),p.position.clone()]),rr.userData.corpseBaseScale??=rr.scale.x,rr.scale.setScalar(rr.userData.corpseBaseScale*(n.modelScale||1)),rr.position.set(n.prevX+(n.x-n.prevX)*t+n.w/2,Zt-(n.prevY+(n.y-n.prevY)*t+(n.inverted?0:n.h)),0),rr.rotation.z=n.inverted?Math.PI:0,rr.rotation.y=n.face>0?Math.PI/2:-Math.PI/2;let f=o.find(p=>Math.abs((n.face>0?p.x:p.x+p.w)-(n.face>0?n.x+n.w:n.x))<35&&Math.abs(p.y+p.h-n.y-n.h)<50),g=f&&pl!==null&&Math.abs(f.x-pl)<100?f.x-pl:0;for(pl=f?.x??null,ca.update({active:!!n.pushing,box:f?{left:f.x,right:f.x+f.w,top:Zt-f.y}:null,face:n.face,floor:Zt-n.y-n.h,dt:h,travel:g});Rh.length<o.length;){let p=new dt;p.add(Ml.clone(!0)),Vn.add(p),Rh.push(p)}if(Rh.forEach((p,m)=>{let M=o[m];if(p.visible=!!M&&!M.ice,!M||M.ice)return;let E=Ml.userData.size,bw=M.baseW??M.w,bh=M.baseH??M.h,A=(M.prevAngle??M.angle??0)+((M.angle??0)-(M.prevAngle??M.angle??0))*t,px=(M.prevX??M.x)+(M.prevW??M.w)/2,py=(M.prevY??M.y)+(M.prevH??M.h)/2,cx=px+(M.x+M.w/2-px)*t,cy=py+(M.y+M.h/2-py)*t;p.scale.set(bw/E.x,bh/E.y,85/E.z);p.rotation.set(M.floating?(M.prevTumbleX+(M.tumbleX-M.prevTumbleX)*t):0,M.floating?(M.prevTumbleY+(M.tumbleY-M.prevTumbleY)*t):0,-A);p.position.set(cx,Zt-cy,0);p.translateY(-bh/2)}),fl.intensity=r>0?85e3*(.4+.6*Math.abs(Math.sin(i*65))):0,Ax.intensity=e.effects!==!1&&Math.sin(i*8)>.88?45e3:0,Ex.position.set(e.floatPlate?e.floatPlate.x:1120,Zt-(e.floatPlate?e.floatPlate.y:580),Ex.position.z),Ex.color.set(e.plateColor||0x28dfff),Ex.intensity=e.opened?42e3:3e4,gf.constant=1e6,Kt.visible=a.length>0,a.length){let p=a[0];Kt.position.set(p.x+p.w/2,Zt-(p.y+p.h)+46,0),Kt.rotation.set(0,p.face*(Math.PI/3+Math.PI/6*Math.max(0,1-p.age*2.5)),-p.face*Math.min(Math.PI/2,Math.max(0,p.age-.12)*2.5)),Fh.setTime(Math.min(p.age,.716));let m=Yt.smoothstep(p.age,.25,.8);for(let[E,S,T]of yf)E.quaternion.slerp(S,m),E.position.lerp(T,m);let M=new ft().setFromAxisAngle(new L(0,1,0),-p.face*Math.PI/2).multiply(new ft().setFromAxisAngle(new L(1,0,0),-Math.PI/2));Kt.quaternion.slerp(M,m),Kt.position.z=70,Kt.updateMatrixWorld(!0);window.settleCorpse87(Kt,p,Zt,m);Kt.traverse(E=>{E.isMesh&&(E.material.opacity=.45,E.material.emissive&&(E.material.emissive.setHex(3579903),E.material.emissiveIntensity=p.electric&&p.age<.35?(1-p.age/.35)*2:0))}),p.electric&&p.age<.25?(fl.position.set(p.x,Zt-p.y,80),fl.intensity=12e4):fl.position.set(1139,Zt-207,100)}let v=a[0];ps.visible=e.effects!==!1&&!!v?.electric&&v.age<.38,ps.visible&&(ps.position.copy(Kt.position),vf.opacity=Math.max(0,1-v.age/.38),ps.children.forEach((p,m)=>{let M=p.geometry.attributes.position;for(let E=0;E<M.count;E++){let S=E/(M.count-1)*Math.PI*2+m*.6,T=35+9*Math.sin(E*4+m+Math.floor(i*24));M.setXYZ(E,Math.cos(S)*T,Math.sin(S)*T*1.8,45+m)}M.needsUpdate=!0})),window.updateJellyScene92?.(Vn,e),window.updateIceScene99?.(Vn,e),window.updateHydraulicScene112?.(Vn,e),window.updateNolanScene117?.(Vn,e),Gn.render(Vn,Oh),window.drawSpeedTrail121?.(s,Gn.domElement,e),s.save(),s.globalAlpha=1,s.globalCompositeOperation="source-over",s.drawImage(Gn.domElement,0,0,mf,Zt),s.restore(),window.hero3d.status.state=oa}};window.hero3d.ready.then(()=>{const seen=new Set;function quality(root){root?.traverse(o=>{if(!o.isMesh)return;for(const m of [].concat(o.material))for(const k of ['map','normalMap','roughnessMap','metalnessMap']){const t=m[k];if(t&&!seen.has(t)){seen.add(t);t.anisotropy=Math.min(16,Gn.capabilities.getMaxAnisotropy());t.needsUpdate=true}}})}quality(Vn);quality(Ml);hdResize(true)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(()=>{
let ac,master,enabled=true,musicEnabled=true,musicSource,decoded={},loading;const last={},active={};
async function unlock(){if(!ac){ac=new(window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=enabled?.5:0;master.connect(ac.destination);loading=Promise.all(Object.entries(window.LAB_SFX||{}).map(async([key,b64])=>{try{decoded[key]=await ac.decodeAudioData(await (await fetch(b64)).arrayBuffer())}catch(e){console.warn('Sound unavailable:',key)}}));}if(ac.state==='suspended')await ac.resume();await loading}
addEventListener('pointerdown',()=>unlock().catch(()=>{}),{passive:true});addEventListener('keydown',()=>unlock().catch(()=>{}),{passive:true});
const levels={step:.4,button:.8,ui:.175,drag:.24,lampOn:.166667,lampOff:.166667,valve:.3,door:.28,shock:.65,spark:.15,crateDrop:.55,thud:.3};
function play(name,x=1170,strength=1){if(name==='ui')return;if(!enabled||!ac||ac.state!=='running')return;const now=ac.currentTime;if(now-(last[name]??-100)<({step:.22,ui:.08,spark:.75,door:.3,crateDrop:.1}[name]||.04))return;const key=name==='thud'?'crateDrop':name,buffer=decoded[key];if(!buffer)return;last[name]=now;
 if((name==='drag'||name==='valve')&&active[name])return;const src=ac.createBufferSource(),gain=ac.createGain(),pan=ac.createStereoPanner();src.buffer=buffer;src.playbackRate.value=name==='step'?1+(Math.random()-.5)*.04:1;const volume=(levels[name]??.3)*Math.min(1,strength);src.voiceVolume=volume;src.voiceStart=now;src.voiceAttack=name==='drag'?.09:0;gain.gain.setValueAtTime(src.voiceAttack?0:volume,now);if(src.voiceAttack)gain.gain.linearRampToValueAtTime(volume,now+src.voiceAttack);if(name==='drag'){const end=now+buffer.duration/src.playbackRate.value;src.voiceEnd=end;src.voiceRelease=Math.min(.25,buffer.duration*.2);gain.gain.setValueAtTime(volume,Math.max(now+src.voiceAttack,end-src.voiceRelease));gain.gain.linearRampToValueAtTime(0,end);}pan.pan.value=Math.max(-.6,Math.min(.6,(x/2340-.5)*1.2));src.connect(gain);gain.connect(pan);pan.connect(master);src.voiceGain=gain;active[name]=src;src.start();src.onended=()=>{if(active[name]===src)delete active[name];src.disconnect();gain.disconnect();pan.disconnect()}}
window.labAudio={trigger(name){unlock().then(()=>play(name)).catch(()=>{})},stop(name){const src=active[name];if(!src)return;delete active[name];const t=ac.currentTime,g=src.voiceGain.gain;const attack=src.voiceAttack?Math.min(1,Math.max(0,(t-src.voiceStart)/src.voiceAttack)):1,tail=src.voiceEnd?Math.min(1,Math.max(0,(src.voiceEnd-t)/src.voiceRelease)):1;g.cancelScheduledValues(t);g.setValueAtTime(src.voiceVolume*Math.min(attack,tail),t);g.linearRampToValueAtTime(0,t+.22);src.stop(t+.24)},setEnabled(v){enabled=v;if(master)master.gain.setTargetAtTime(v?.5:0,ac.currentTime,.015)},setMusicEnabled(v){musicEnabled=v;if(musicSource)musicSource.muted=!v},setMusic(src){musicSource?.pause();musicSource=new Audio(src);musicSource.loop=true;musicSource.volume=.2;musicSource.muted=!musicEnabled;musicSource.play().catch(()=>{})},play};
document.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b||b.disabled||b.matches('[data-key],.menu-valve,.blue-lamp,.amber-lamp'))return;await unlock().catch(()=>{});play('ui')});
})();

const embeddedAssets={"frozen-button":"./c70ad0cf085da673ac55.png","room": "./a8a2051259a174e7f96b.png", "room-new": "./63377117d59760f9a291.png", "button": "./6c6e84d06a3c21efb204.png", "button-down": "./5c793104852fb29294bb.png", "door": "./e8c10a1096b3e3f7a9a3.png", "crate": "./7ceeff1514909f0f3817.png"};
/* Logical room coordinates match the original 2340 × 1080 artwork. */
const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d'),W=2340,H=1080;
canvas.width=W;canvas.height=H;
const $=s=>document.querySelector(s),images={},keys={left:false,right:false,jump:false};
// Continuous lower contour from the user's green markup, in source-image pixels.
const floorSteps=[{x:140,y:748,w:480},{x:620,y:835,w:370},{x:990,y:898,w:175},{x:1165,y:949,w:160},{x:1325,y:816,w:305},{x:1630,y:750,w:530}];
const solids=[...floorSteps.map(s=>({...s,h:H-s.y+200})),{x:790,y:600,w:660,h:44},{x:470,y:353,w:405,h:2},{x:907,y:112,w:405,h:45},{x:1680,y:365,w:480,h:44}];
// TLA clip 2.85–3.45 s: vx ≈129.4, gravity ≈459.3 at 699 px width.
// Scale measured 64 px rise to 255 px so the 235 px exit climb remains possible.
const physics=Object.freeze({speed:516,gravity:1830,jumpSpeed:Math.sqrt(2*1830*255),airSpeed:516});
let doorProgress=0,doorPrevious=0;
let player,corpses=[],opened=false,mode='intro',deaths=0,heat=0,clock=0,anim=0,jumpBuffer=0,coyote=0,toastTime=0,sound=true,audio;
const wire={x:1139,y:207},panel={x:2035,y:510};let particles=[],nextSpark=1.3,nextPanelSpark=.6,flash=0,shocks=[];
const bounds={left:160,right:2160,top:32,bottom:1010};
let crates=[],stepTravel=0,nextScrape=0;
const hero={height:184,hitHeight:172,width:57};
const LEVELS=[{"id": 1, "rule": "once", "ru": "всё просто", "en": "All simple", "hintRu": "Нажми на кнопку и иди к двери.", "hintEn": "Step on the button, then reach the door.", "locales": {"en": {"title": "Easy does it", "hint": "Step on the button, then head for the door."}, "es": {"title": "Así de fácil", "hint": "Pisa el botón y ve hacia la puerta."}, "pt-BR": {"title": "Simples assim", "hint": "Pise no botão e vá até a porta."}, "de": {"title": "Ganz einfach", "hint": "Stell dich auf den Knopf und geh zur Tür."}, "fr": {"title": "Tout simplement", "hint": "Marche sur le bouton, puis rejoins la porte."}, "zh-Hans": {"title": "就这么简单", "hint": "踩下按钮，然后走到门口。"}, "ja": {"title": "簡単なこと", "hint": "ボタンを踏んで、扉へ向かおう。"}, "tr": {"title": "İşte bu kadar basit", "hint": "Düğmeye bas, sonra kapıya git."}, "id": {"title": "Gampang, kan?", "hint": "Injak tombol, lalu menuju pintu."}, "ru": {"title": "всё просто", "hint": "Нажми на кнопку и иди к двери."}}}, {"id": 2, "rule": "three", "ru": "старайся больше", "en": "Try harder", "hintRu": "Нажми на кнопку три раза. Между нажатиями сойди с неё.", "hintEn": "Press three times. Step off between presses.", "locales": {"en": {"title": "Try harder", "hint": "Press the button three times. Step off it between presses."}, "es": {"title": "Esfuérzate más", "hint": "Pulsa el botón tres veces. Bájate de él entre pulsaciones."}, "pt-BR": {"title": "Tente mais", "hint": "Aperte o botão três vezes. Saia de cima dele entre cada vez."}, "de": {"title": "Gib dir mehr Mühe", "hint": "Drücke den Knopf dreimal. Geh zwischendurch wieder herunter."}, "fr": {"title": "Encore un effort", "hint": "Appuie trois fois sur le bouton. Descends entre chaque pression."}, "zh-Hans": {"title": "再加把劲", "hint": "踩三次按钮，每次踩完都要先离开。"}, "ja": {"title": "もっと頑張って", "hint": "ボタンを3回踏もう。1回踏むたびにボタンから降りてね。"}, "tr": {"title": "Biraz daha çabala", "hint": "Düğmeye üç kez bas. Her basıştan sonra üzerinden in."}, "id": {"title": "Usaha sedikit lagi", "hint": "Injak tombol tiga kali. Turun dulu setiap selesai menginjak."}, "ru": {"title": "старайся больше", "hint": "Нажми на кнопку три раза. Между нажатиями сойди с неё."}}}, {"id": 3, "rule": "corpse", "ru": "мёртвый груз", "en": "Dead weight", "hintRu": "Прыгни к оголённому проводу над кнопкой. Тело должно упасть на кнопку; его можно подвинуть.", "hintEn": "Reach the exposed wire above the button. Let your body fall onto it; you can push it.", "locales": {"en": {"title": "Dead weight", "hint": "Jump into the exposed wire above the button. Your body needs to land on the button; you can push it into place."}, "es": {"title": "Peso muerto", "hint": "Salta hacia el cable pelado que hay sobre el botón. Tu cuerpo debe caer encima; puedes empujarlo para colocarlo."}, "pt-BR": {"title": "Peso morto", "hint": "Pule no fio desencapado acima do botão. Seu corpo precisa cair sobre o botão; você pode empurrá-lo para ajustar a posição."}, "de": {"title": "Totes Gewicht", "hint": "Spring gegen das blanke Kabel über dem Knopf. Dein Körper muss auf dem Knopf landen. Du kannst ihn zurechtschieben."}, "fr": {"title": "Poids mort", "hint": "Saute contre le fil dénudé au-dessus du bouton. Ton corps doit tomber dessus ; tu peux le pousser pour le placer."}, "zh-Hans": {"title": "死沉死沉", "hint": "跳起来碰到按钮上方的裸露电线，让尸体落在按钮上。位置不对时可以推动尸体。"}, "ja": {"title": "死してなお重し", "hint": "ボタンの上にあるむき出しの電線に飛び込もう。倒れた体をボタンに落とせばいい。体は押して動かせるよ。"}, "tr": {"title": "Ölü ağırlık", "hint": "Düğmenin üstündeki açıkta kalan tele zıpla. Bedenin düğmeye düşmeli; gerekirse iterek yerini ayarla."}, "id": {"title": "Beban mati", "hint": "Lompat ke kabel terbuka di atas tombol. Tubuhmu harus jatuh ke tombol; kamu bisa mendorongnya agar pas."}, "ru": {"title": "мёртвый груз", "hint": "Прыгни к оголённому проводу над кнопкой. Тело должно упасть на кнопку; его можно подвинуть."}}}, {"id": 4, "rule": "avoid", "ru": "Ничего не делай", "en": "Do nothing", "hintRu": "Дверь уже открыта. Не нажимай кнопку.", "hintEn": "The door is open. Avoid the button.", "locales": {"en": {"title": "Do nothing", "hint": "The door is already open. Leave the button alone."}, "es": {"title": "No hagas nada", "hint": "La puerta ya está abierta. No pulses el botón."}, "pt-BR": {"title": "Não faça nada", "hint": "A porta já está aberta. Não aperte o botão."}, "de": {"title": "Tu nichts", "hint": "Die Tür ist schon offen. Lass den Knopf in Ruhe."}, "fr": {"title": "Ne fais rien", "hint": "La porte est déjà ouverte. Ne touche pas au bouton."}, "zh-Hans": {"title": "什么都别做", "hint": "门已经开了，别踩按钮。"}, "ja": {"title": "何もしないで", "hint": "扉はもう開いている。ボタンは踏まないで。"}, "tr": {"title": "Hiçbir şey yapma", "hint": "Kapı zaten açık. Düğmeye basma."}, "id": {"title": "Jangan lakukan apa-apa", "hint": "Pintunya sudah terbuka. Jangan injak tombol."}, "ru": {"title": "Ничего не делай", "hint": "Дверь уже открыта. Не нажимай кнопку."}}}, {"id": 5, "rule": "crate", "ru": "Что-то потяжелее", "en": "Something heavier", "hintRu": "Сбрось верхний ящик и дотолкай его до кнопки.", "hintEn": "Drop the upper crate and push it onto the button.", "locales": {"en": {"title": "Something heavier", "hint": "Knock the top crate down and push it onto the button."}, "es": {"title": "Algo más pesado", "hint": "Tira la caja de arriba y empújala hasta el botón."}, "pt-BR": {"title": "Algo mais pesado", "hint": "Derrube a caixa de cima e empurre-a até o botão."}, "de": {"title": "Etwas Schwereres", "hint": "Stoße die obere Kiste herunter und schiebe sie auf den Knopf."}, "fr": {"title": "Quelque chose de plus lourd", "hint": "Fais tomber la caisse du haut et pousse-la sur le bouton."}, "zh-Hans": {"title": "还不够重", "hint": "把上面的箱子推下来，再推到按钮上。"}, "ja": {"title": "もっと重いもの", "hint": "上の木箱を落として、ボタンの上まで押そう。"}, "tr": {"title": "Daha ağır bir şey", "hint": "Üstteki sandığı düşür ve düğmenin üzerine it."}, "id": {"title": "Cari yang lebih berat", "hint": "Jatuhkan peti di atas, lalu dorong ke tombol."}, "ru": {"title": "Что-то потяжелее", "hint": "Сбрось верхний ящик и дотолкай его до кнопки."}}}, {"id": 6, "rule": "stack", "ru": "Ещё тяжелее", "en": "Even heavier", "hintRu": "Поставь ящик на кнопку, затем сбрось на него тело.", "hintEn": "Push a crate onto the button, then land your body on it.", "locales": {"en": {"title": "Even heavier", "hint": "Put a crate on the button, then drop your body onto the crate."}, "es": {"title": "Aún más pesado", "hint": "Pon una caja sobre el botón y deja caer tu cuerpo encima de la caja."}, "pt-BR": {"title": "Mais pesado ainda", "hint": "Coloque uma caixa no botão e deixe seu corpo cair em cima dela."}, "de": {"title": "Noch schwerer", "hint": "Stelle eine Kiste auf den Knopf und lass dann deinen Körper darauf fallen."}, "fr": {"title": "Encore plus lourd", "hint": "Place une caisse sur le bouton, puis fais tomber ton corps dessus."}, "zh-Hans": {"title": "再重一点", "hint": "把箱子推到按钮上，再让尸体落在箱子上。"}, "ja": {"title": "さらに重く", "hint": "ボタンに木箱を載せて、その上に倒れた体を落とそう。"}, "tr": {"title": "Daha da ağır", "hint": "Düğmeye bir sandık koy, ardından bedenini sandığın üstüne düşür."}, "id": {"title": "Lebih berat lagi", "hint": "Taruh peti di tombol, lalu jatuhkan tubuhmu ke atas peti."}, "ru": {"title": "Ещё тяжелее", "hint": "Поставь ящик на кнопку, затем сбрось на него тело."}}}, {"id": 7, "rule": "lowerCrate", "ru": "Я думаю, ты догадаешься", "en": "I think you will figure it out", "hintRu": "Сбрось ящик на нижнюю кнопку, затем нажми основную.", "hintEn": "Drop a crate onto the lower button, then press the main button.", "locales": {"en": {"title": "You'll figure it out", "hint": "Drop a crate onto the lower button, then press the main one."}, "es": {"title": "Seguro que lo deduces", "hint": "Tira una caja sobre el botón de abajo y luego pulsa el principal."}, "pt-BR": {"title": "Você vai descobrir", "hint": "Derrube uma caixa no botão de baixo e depois aperte o principal."}, "de": {"title": "Du kommst schon drauf", "hint": "Lass eine Kiste auf den unteren Knopf fallen und drücke dann den Hauptknopf."}, "fr": {"title": "Tu vas trouver", "hint": "Fais tomber une caisse sur le bouton du bas, puis appuie sur le bouton principal."}, "zh-Hans": {"title": "你会想明白的", "hint": "把箱子推到下面的按钮上，再踩中间的主按钮。"}, "ja": {"title": "きっとわかるはず", "hint": "下のボタンに木箱を落としてから、中央のボタンを踏もう。"}, "tr": {"title": "Sen çözersin", "hint": "Bir sandığı alttaki düğmeye düşür, sonra ana düğmeye bas."}, "id": {"title": "Pasti kamu bisa menebaknya", "hint": "Jatuhkan peti ke tombol bawah, lalu injak tombol utama."}, "ru": {"title": "Я думаю, ты догадаешься", "hint": "Сбрось ящик на нижнюю кнопку, затем нажми основную."}}}, {"id": 8, "rule": "touch", "ru": "Нажми на кнопку", "en": "Press the button", "hintRu": "Нажми на кнопку пальцем", "hintEn": "Tap the button with your finger", "locales": {"en": {"title": "Press the button", "hint": "Tap the button with your finger."}, "es": {"title": "Pulsa el botón", "hint": "Toca el botón con el dedo."}, "pt-BR": {"title": "Aperte o botão", "hint": "Toque no botão com o dedo."}, "de": {"title": "Drück den Knopf", "hint": "Tippe mit dem Finger auf den Knopf."}, "fr": {"title": "Appuie sur le bouton", "hint": "Touche le bouton avec ton doigt."}, "zh-Hans": {"title": "按下按钮", "hint": "用手指直接点按钮。"}, "ja": {"title": "ボタンを押して", "hint": "指で直接ボタンをタップしよう。"}, "tr": {"title": "Düğmeye bas", "hint": "Düğmeye parmağınla dokun."}, "id": {"title": "Tekan tombolnya", "hint": "Ketuk tombol langsung dengan jarimu."}, "ru": {"title": "Нажми на кнопку", "hint": "Нажми на кнопку пальцем"}}}, {"id": 9, "rule": "remap", "ru": "Что с управлением?", "en": "What happened to the controls?", "hintRu": "Ну... развивай моторику", "hintEn": "Well... work on your coordination", "locales": {"en": {"title": "What's with the controls?", "hint": "Time to work on your coordination."}, "es": {"title": "¿Qué les pasa a los controles?", "hint": "Toca practicar la coordinación."}, "pt-BR": {"title": "O que houve com os controles?", "hint": "Hora de treinar a coordenação."}, "de": {"title": "Was ist mit der Steuerung los?", "hint": "Zeit, deine Koordination zu trainieren."}, "fr": {"title": "Qu'ont les commandes ?", "hint": "Il va falloir travailler ta coordination."}, "zh-Hans": {"title": "这操作怎么回事？", "hint": "考验协调能力的时候到了。"}, "ja": {"title": "操作がおかしい？", "hint": "手先の器用さが試されるね。"}, "tr": {"title": "Kontrollere ne oldu?", "hint": "El göz koordinasyonunu çalıştırma zamanı."}, "id": {"title": "Kontrolnya kenapa?", "hint": "Saatnya melatih koordinasi tangan."}, "ru": {"title": "Что с управлением?", "hint": "Ну... развивай моторику"}}}, {"id": 10, "rule": "illusion", "ru": "Не верь глазам", "en": "Do not trust your eyes", "hintRu": "Просто иди к двери", "hintEn": "Just go to the door", "locales": {"en": {"title": "Don't trust your eyes", "hint": "Just head for the door."}, "es": {"title": "No te fíes de tus ojos", "hint": "Ve directamente a la puerta."}, "pt-BR": {"title": "Não confie nos seus olhos", "hint": "Vá direto para a porta."}, "de": {"title": "Trau deinen Augen nicht", "hint": "Geh einfach zur Tür."}, "fr": {"title": "Ne te fie pas à tes yeux", "hint": "Va simplement jusqu'à la porte."}, "zh-Hans": {"title": "别相信眼睛", "hint": "直接走到门口。"}, "ja": {"title": "目を信じるな", "hint": "そのまま扉へ向かおう。"}, "tr": {"title": "Gözlerine inanma", "hint": "Doğruca kapıya git."}, "id": {"title": "Jangan percaya matamu", "hint": "Langsung saja menuju pintu."}, "ru": {"title": "Не верь глазам", "hint": "Просто иди к двери"}}}, {"id": 11, "rule": "dragHero", "ru": "Возьми себя в руки!", "en": "Get a grip!", "hintRu": "Двигай героя пальцем", "hintEn": "Drag the hero with your finger", "locales": {"en": {"title": "Get a grip!", "hint": "Drag the hero with your finger."}, "es": {"title": "¡Toma las riendas!", "hint": "Arrastra al personaje con el dedo."}, "pt-BR": {"title": "Tome as rédeas!", "hint": "Arraste o personagem com o dedo."}, "de": {"title": "Nimm es selbst in die Hand!", "hint": "Ziehe die Figur mit dem Finger."}, "fr": {"title": "Prends les choses en main !", "hint": "Fais glisser le personnage avec ton doigt."}, "zh-Hans": {"title": "亲自动手！", "hint": "用手指拖动角色。"}, "ja": {"title": "その手で動かして！", "hint": "指でキャラクターをドラッグしよう。"}, "tr": {"title": "İpleri eline al!", "hint": "Karakteri parmağınla sürükle."}, "id": {"title": "Ambil kendali!", "hint": "Seret karakter dengan jarimu."}, "ru": {"title": "Возьми себя в руки!", "hint": "Двигай героя пальцем"}}}, {"id": 12, "rule": "knock", "ru": "Тук-тук", "en": "Knock knock", "hintRu": "Постучи в дверь", "hintEn": "Knock on the door", "locales": {"en": {"title": "Knock, knock", "hint": "Knock on the door."}, "es": {"title": "Toc, toc", "hint": "Llama a la puerta."}, "pt-BR": {"title": "Toc, toc", "hint": "Bata na porta."}, "de": {"title": "Klopf, klopf", "hint": "Klopfe an die Tür."}, "fr": {"title": "Toc, toc", "hint": "Frappe à la porte."}, "zh-Hans": {"title": "咚咚咚", "hint": "敲敲门。"}, "ja": {"title": "コンコン", "hint": "扉をノックしよう。"}, "tr": {"title": "Tık tık", "hint": "Kapıyı çal."}, "id": {"title": "Tok, tok", "hint": "Ketuk pintunya."}, "ru": {"title": "Тук-тук", "hint": "Постучи в дверь"}}}, {"id": 13, "rule": "lowGravity", "ru": "Гравитация", "en": "Gravity", "hintRu": "Поймай летающую кнопку и доберись до двери за три секунды. Берегись ящиков.", "hintEn": "Catch the floating button and reach the door in three seconds. Dodge the crates.", "locales": {"en": {"title": "Gravity", "hint": "Touch the floating button, then reach the door within three seconds. Watch out for the crates."}, "es": {"title": "Gravedad", "hint": "Toca el botón flotante y llega a la puerta en tres segundos. Cuidado con las cajas."}, "pt-BR": {"title": "Gravidade", "hint": "Toque no botão flutuante e chegue à porta em três segundos. Cuidado com as caixas."}, "de": {"title": "Schwerkraft", "hint": "Berühre den schwebenden Knopf und erreiche die Tür in drei Sekunden. Pass auf die Kisten auf."}, "fr": {"title": "Gravité", "hint": "Touche le bouton flottant et rejoins la porte en trois secondes. Attention aux caisses."}, "zh-Hans": {"title": "重力", "hint": "碰到漂浮的按钮后，在三秒内赶到门口。小心箱子。"}, "ja": {"title": "重力", "hint": "浮いているボタンに触れたら、3秒以内に扉へ。木箱に気をつけて。"}, "tr": {"title": "Yerçekimi", "hint": "Havada süzülen düğmeye dokun ve üç saniye içinde kapıya ulaş. Sandıklara dikkat et."}, "id": {"title": "Gravitasi", "hint": "Sentuh tombol melayang, lalu capai pintu dalam tiga detik. Awas peti!"}, "ru": {"title": "Гравитация", "hint": "Поймай летающую кнопку и доберись до двери за три секунды. Берегись ящиков."}}}, {"id": 14, "rule": "frozen", "ru": "Ох уж этот Саб-Зиро", "en": "Oh, that Sub-Zero", "hintRu": "Нужно согреть кнопку пальцем", "hintEn": "Warm the button with your finger", "locales": {"en": {"title": "Not again, Sub-Zero!", "hint": "Warm the button with your finger."}, "es": {"title": "¡Otra vez Sub-Zero!", "hint": "Calienta el botón con el dedo."}, "pt-BR": {"title": "De novo, Sub-Zero?!", "hint": "Aqueça o botão com o dedo."}, "de": {"title": "Nicht schon wieder, Sub-Zero!", "hint": "Wärme den Knopf mit deinem Finger."}, "fr": {"title": "Encore toi, Sub-Zero !", "hint": "Réchauffe le bouton avec ton doigt."}, "zh-Hans": {"title": "又是你，绝对零度！", "hint": "用手指给按钮暖一暖。"}, "ja": {"title": "またサブ・ゼロか！", "hint": "指でボタンを温めよう。"}, "tr": {"title": "Yine mi Sub-Zero!", "hint": "Düğmeyi parmağınla ısıt."}, "id": {"title": "Sub-Zero lagi?!", "hint": "Hangatkan tombol dengan jarimu."}, "ru": {"title": "Ох уж этот Саб-Зиро", "hint": "Нужно согреть кнопку пальцем"}}}, {"id": 15, "rule": "noLeft", "ru": "Не оглядывайся", "en": "Do not look back", "hintRu": "Только вперёд. Не ходи налево", "hintEn": "Only forward. Do not go left", "locales": {"en": {"title": "Don't look back", "hint": "Keep moving forward. Don't go left."}, "es": {"title": "No mires atrás", "hint": "Siempre hacia delante. No vayas a la izquierda."}, "pt-BR": {"title": "Não olhe para trás", "hint": "Siga em frente. Não vá para a esquerda."}, "de": {"title": "Schau nicht zurück", "hint": "Immer vorwärts. Geh nicht nach links."}, "fr": {"title": "Ne regarde pas en arrière", "hint": "Toujours en avant. Ne pars pas à gauche."}, "zh-Hans": {"title": "别回头", "hint": "只管向前，别往左走。"}, "ja": {"title": "振り返らないで", "hint": "前へ進もう。左には行かないで。"}, "tr": {"title": "Arkana bakma", "hint": "Hep ileri. Sola gitme."}, "id": {"title": "Jangan menoleh", "hint": "Terus maju. Jangan bergerak ke kiri."}, "ru": {"title": "Не оглядывайся", "hint": "Только вперёд. Не ходи налево"}}}, {"id": 16, "rule": "wordButton", "ru": "Нужно нажать на кнопку", "en": "Press the button", "hintRu": "Нажми на слово «кнопку» в задании", "hintEn": "Tap the word “button” in the task", "locales": {"en": {"title": "Press the button", "hint": "Tap the word “button” in the task.", "word": "button"}, "es": {"title": "Pulsa el botón", "hint": "Toca la palabra «botón» del enunciado.", "word": "botón"}, "pt-BR": {"title": "Aperte o botão", "hint": "Toque na palavra “botão” do enunciado.", "word": "botão"}, "de": {"title": "Drück den Knopf", "hint": "Tippe in der Aufgabe auf das Wort „Knopf“.", "word": "Knopf"}, "fr": {"title": "Appuie sur le bouton", "hint": "Touche le mot « bouton » dans la consigne.", "word": "bouton"}, "zh-Hans": {"title": "按下按钮", "hint": "点击任务文字中的“按钮”二字。", "word": "按钮"}, "ja": {"title": "ボタンを押して", "hint": "お題の中の「ボタン」という文字をタップしよう。", "word": "ボタン"}, "tr": {"title": "Düğmeye bas", "hint": "Görevdeki “Düğmeye” sözcüğüne dokun.", "word": "Düğmeye"}, "id": {"title": "Tekan tombolnya", "hint": "Ketuk kata “tombolnya” pada instruksi.", "word": "tombolnya"}, "ru": {"title": "Нужно нажать на кнопку", "hint": "Нажми на слово «кнопку» в задании", "word": "кнопку"}}}, {"id": 17, "rule": "flipGravity", "ru": "Дружелюбный сосед", "en": "Friendly neighbour", "hintRu": "Ты справишься!", "hintEn": "You can do it!", "locales": {"en": {"title": "Your friendly neighbour", "hint": "You've got this!"}, "es": {"title": "Tu vecino de confianza", "hint": "¡Tú puedes!"}, "pt-BR": {"title": "Seu amigo da vizinhança", "hint": "Você consegue!"}, "de": {"title": "Dein freundlicher Nachbar", "hint": "Du schaffst das!"}, "fr": {"title": "Ton sympathique voisin", "hint": "Tu vas y arriver !"}, "zh-Hans": {"title": "你的好邻居", "hint": "你能做到！"}, "ja": {"title": "親愛なる隣人", "hint": "君ならできる！"}, "tr": {"title": "Dost canlısı komşun", "hint": "Bunu başarabilirsin!"}, "id": {"title": "Tetangga yang ramah", "hint": "Kamu pasti bisa!"}, "ru": {"title": "Дружелюбный сосед", "hint": "Ты справишься!"}}}, {"id": 18, "rule": "inputLag", "ru": "Пинг", "en": "Ping", "hintRu": "Задержка. Надеюсь, не в развитии", "hintEn": "A delay. Hopefully only in the controls.", "locales": {"en": {"title": "Lag", "hint": "A little slow on the uptake? No, just the controls."}, "es": {"title": "Lag", "hint": "Hay retraso… en los controles, esperemos."}, "pt-BR": {"title": "Lag", "hint": "A resposta está lenta… a dos controles, claro."}, "de": {"title": "Lag", "hint": "Etwas langsam heute? Zum Glück nur die Steuerung."}, "fr": {"title": "Latence", "hint": "Un peu de retard… dans les commandes, espérons-le."}, "zh-Hans": {"title": "延迟", "hint": "反应有点慢？说的是操作。"}, "ja": {"title": "ラグ", "hint": "反応が遅い？操作の話だよ。"}, "tr": {"title": "Gecikme", "hint": "Biraz geç tepki veriyor… Neyse ki sadece kontroller."}, "id": {"title": "Lag", "hint": "Responsnya lambat… Untung cuma kontrolnya."}, "ru": {"title": "Пинг", "hint": "Задержка. Надеюсь, не в развитии"}}}, {"id": 19, "rule": "oneFinger", "ru": "Одним пальцем", "en": "One finger", "hintRu": "Не нажимай кнопки одновременно", "hintEn": "Do not press controls at the same time", "locales": {"en": {"title": "One finger", "hint": "Don't press two controls at once."}, "es": {"title": "Con un solo dedo", "hint": "No pulses varios controles a la vez."}, "pt-BR": {"title": "Com um dedo só", "hint": "Não aperte vários controles ao mesmo tempo."}, "de": {"title": "Mit einem Finger", "hint": "Drücke nicht mehrere Steuertasten gleichzeitig."}, "fr": {"title": "Avec un seul doigt", "hint": "N'appuie pas sur plusieurs commandes à la fois."}, "zh-Hans": {"title": "一指搞定", "hint": "不要同时按多个操作键。"}, "ja": {"title": "指一本で", "hint": "操作ボタンを同時に押さないで。"}, "tr": {"title": "Tek parmakla", "hint": "Aynı anda birden fazla kontrol tuşuna basma."}, "id": {"title": "Satu jari saja", "hint": "Jangan menekan beberapa kontrol sekaligus."}, "ru": {"title": "Одним пальцем", "hint": "Не нажимай кнопки одновременно"}}}, {"id": 20, "rule": "jellyfish", "ru": "Не трогай — ужалит", "en": "Look, don’t touch", "hintRu": "Избегай медуз. Нажми кнопку и доберись до двери.", "hintEn": "Avoid the jellyfish. Press the button and reach the door.", "locales": {"ru": {"title": "Не трогай — ужалит", "hint": "Избегай медуз. Нажми кнопку и доберись до двери."}, "en": {"title": "Look, don’t touch", "hint": "Avoid the jellyfish. Press the button and reach the door."}, "es": {"title": "Se mira, pero no se toca", "hint": "Esquiva las medusas. Pulsa el botón y llega a la puerta."}, "pt-BR": {"title": "Olhe, mas não toque", "hint": "Desvie das águas-vivas. Aperte o botão e chegue à porta."}, "de": {"title": "Ansehen, nicht anfassen", "hint": "Weiche den Quallen aus. Drücke den Knopf und erreiche die Tür."}, "fr": {"title": "On regarde, on ne touche pas", "hint": "Évite les méduses. Appuie sur le bouton et rejoins la porte."}, "zh-Hans": {"title": "别碰，会蜇人", "hint": "躲开水母，踩下按钮，再走到门口。"}, "ja": {"title": "触ると刺すよ", "hint": "クラゲを避けてボタンを踏み、扉へ向かおう。"}, "tr": {"title": "Bak ama dokunma", "hint": "Denizanalarından kaçın. Düğmeye bas ve kapıya ulaş."}, "id": {"title": "Lihat saja, jangan sentuh", "hint": "Hindari ubur-ubur. Tekan tombol dan capai pintu."}}}, {"id": 21, "rule": "iceKey", "ru": "Ещё и ключ добавили", "en": "Now there’s a key, too", "hintRu": "Скинь куб вниз и растопи лёд пальцем.", "hintEn": "Push the cube off the platform, then hold your finger on the ice to melt it.", "locales": {"ru": {"title": "Ещё и ключ добавили", "hint": "Скинь куб вниз и растопи лёд пальцем."}, "en": {"title": "Now there’s a key, too", "hint": "Push the cube off the platform, then hold your finger on the ice to melt it."}, "es": {"title": "Y ahora también una llave", "hint": "Tira el cubo de la plataforma y derrite el hielo manteniendo el dedo encima."}, "pt-BR": {"title": "Agora tem chave também", "hint": "Derrube o cubo da plataforma e mantenha o dedo sobre o gelo para derretê-lo."}, "de": {"title": "Jetzt auch noch ein Schlüssel", "hint": "Stoße den Würfel von der Plattform und halte den Finger auf das Eis, um es zu schmelzen."}, "fr": {"title": "Et maintenant, une clé !", "hint": "Pousse le cube en bas de la plateforme, puis garde le doigt sur la glace pour la faire fondre."}, "zh-Hans": {"title": "现在还要找钥匙", "hint": "把冰块推下平台，再按住冰块将它融化。"}, "ja": {"title": "今度は鍵まで", "hint": "氷の塊を足場から落として、指で押さえ続けて溶かそう。"}, "tr": {"title": "Bir de anahtar çıktı", "hint": "Küpü platformdan aşağı it, sonra parmağını buzun üzerinde tutarak erit."}, "id": {"title": "Sekarang pakai kunci juga", "hint": "Dorong balok hingga jatuh dari platform, lalu tahan jarimu pada es untuk mencairkannya."}}}, {"id": 22, "rule": "pinchHero", "ru": "Скотт Лэнг уже идёт в суд", "en": "Scott Lang is calling his lawyer", "hintRu": "Двумя пальцами уменьши героя", "hintEn": "Pinch with two fingers to shrink the hero.", "locales": {"ru": {"title": "Скотт Лэнг уже идёт в суд", "hint": "Двумя пальцами уменьши героя"}, "en": {"title": "Scott Lang is calling his lawyer", "hint": "Pinch with two fingers to shrink the hero."}, "es": {"title": "Scott Lang ya llamó a su abogado", "hint": "Junta dos dedos para encoger al personaje."}, "pt-BR": {"title": "Scott Lang já chamou o advogado", "hint": "Junte dois dedos para diminuir o personagem."}, "de": {"title": "Scott Lang ruft schon seinen Anwalt an", "hint": "Zieh zwei Finger zusammen, um die Figur zu verkleinern."}, "fr": {"title": "Scott Lang appelle déjà son avocat", "hint": "Rapproche deux doigts pour rétrécir le personnage."}, "zh-Hans": {"title": "斯科特·朗已经在找律师了", "hint": "用双指捏合来缩小角色。"}, "ja": {"title": "スコット・ラングが訴えるってさ", "hint": "2本の指でつまむようにして、キャラクターを小さくしよう。"}, "tr": {"title": "Scott Lang avukatını arıyor", "hint": "İki parmağını birbirine yaklaştırarak karakteri küçült."}, "id": {"title": "Scott Lang sudah menelepon pengacara", "hint": "Cubit layar dengan dua jari untuk mengecilkan karakter."}}}, {"id": 23, "rule": "swipeButton", "ru": "Лизни кнопку", "en": "Lick the button", "hintRu": "Ты серьёзно?!", "hintEn": "Seriously?!", "locales": {"ru": {"title": "Лизни кнопку", "hint": "Ты серьёзно?!"}, "en": {"title": "Lick the button", "hint": "Seriously?!"}, "es": {"title": "Lame el botón", "hint": "¡¿En serio?!"}, "pt-BR": {"title": "Lamba o botão", "hint": "Sério mesmo?!"}, "de": {"title": "Leck den Knopf ab", "hint": "Dein Ernst?!"}, "fr": {"title": "Lèche le bouton", "hint": "Sérieusement ?!"}, "zh-Hans": {"title": "舔一下按钮", "hint": "你认真的？！"}, "ja": {"title": "ボタンをなめて", "hint": "本気なの？！"}, "tr": {"title": "Düğmeyi yala", "hint": "Ciddi misin?!"}, "id": {"title": "Jilat tombolnya", "hint": "Serius?!"}}, "reply": {"ru": {"question": "Я надеюсь, ты просто провёл пальцем вверх?", "yes": "Да", "no": "Нет"}, "en": {"question": "I hope you just swiped up.", "yes": "Yes", "no": "No"}, "es": {"question": "Espero que solo hayas deslizado el dedo hacia arriba.", "yes": "Sí", "no": "No"}, "pt-BR": {"question": "Espero que você só tenha deslizado o dedo para cima.", "yes": "Sim", "no": "Não"}, "de": {"question": "Ich hoffe, du hast nur nach oben gewischt.", "yes": "Ja", "no": "Nein"}, "fr": {"question": "J’espère que tu as simplement glissé le doigt vers le haut.", "yes": "Oui", "no": "Non"}, "zh-Hans": {"question": "希望你只是用手指向上滑了一下。", "yes": "是", "no": "否"}, "ja": {"question": "指で上にスワイプしただけだよね。", "yes": "はい", "no": "いいえ"}, "tr": {"question": "Umarım sadece parmağını yukarı kaydırmışsındır.", "yes": "Evet", "no": "Hayır"}, "id": {"question": "Semoga tadi kamu cuma mengusap ke atas.", "yes": "Ya", "no": "Tidak"}}}, {"id": 24, "rule": "marioKey", "ru": "Играл в Марио?", "en": "Ever played Mario?", "hintRu": "Ударь головой снизу по левой части центральной платформы. Подбери ключ, нажми основную кнопку и иди к двери.", "hintEn": "Hit the left side of the central platform from below with your head. Collect the key, press the main button, then head to the door.", "locales": {"ru": {"title": "Играл в Марио?", "hint": "Ударь головой снизу по левой части центральной платформы. Подбери ключ, нажми основную кнопку и иди к двери."}, "en": {"title": "Ever played Mario?", "hint": "Hit the left side of the central platform from below with your head. Collect the key, press the main button, then head to the door."}, "es": {"title": "¿Has jugado a Mario?", "hint": "Golpea con la cabeza el lado izquierdo de la plataforma central desde abajo. Recoge la llave, pulsa el botón principal y ve a la puerta."}, "pt-BR": {"title": "Já jogou Mario?", "hint": "Bata com a cabeça no lado esquerdo da plataforma central, por baixo. Pegue a chave, aperte o botão principal e vá até a porta."}, "de": {"title": "Schon mal Mario gespielt?", "hint": "Stoße von unten mit dem Kopf gegen die linke Seite der mittleren Plattform. Sammle den Schlüssel ein, drücke den Hauptknopf und geh zur Tür."}, "fr": {"title": "Tu as déjà joué à Mario ?", "hint": "Frappe la partie gauche de la plateforme centrale avec la tête, par-dessous. Ramasse la clé, appuie sur le bouton principal et rejoins la porte."}, "zh-Hans": {"title": "玩过马力欧吗？", "hint": "从下方用头顶中央平台的左侧。捡起钥匙，踩下主按钮，再走到门口。"}, "ja": {"title": "マリオで遊んだことある？", "hint": "中央の足場の左側を下から頭で叩こう。鍵を拾い、中央のボタンを踏んでから扉へ向かおう。"}, "tr": {"title": "Hiç Mario oynadın mı?", "hint": "Ortadaki platformun sol tarafına alttan kafanla vur. Anahtarı al, ana düğmeye bas ve kapıya git."}, "id": {"title": "Pernah main Mario?", "hint": "Sundul sisi kiri platform tengah dari bawah. Ambil kuncinya, injak tombol utama, lalu menuju pintu."}}}, {"id": 25, "rule": "traffic", "ru": "У тебя есть водительские права?", "en": "Do you have a driving licence?", "hintRu": "Двигайся только когда горит зеленый свет", "hintEn": "Move only when the light is green", "locales": {"en": {"title": "Do you have a driving licence?", "hint": "Move only when the light is green."}, "es": {"title": "¿Tienes permiso de conducir?", "hint": "Muévete solo cuando la luz esté verde."}, "pt-BR": {"title": "Você tem carteira de motorista?", "hint": "Só se mova quando a luz estiver verde."}, "de": {"title": "Hast du einen Führerschein?", "hint": "Bewege dich nur bei Grün."}, "fr": {"title": "Tu as ton permis ?", "hint": "Ne bouge que lorsque le feu est vert."}, "zh-Hans": {"title": "你有驾照吗？", "hint": "只有绿灯亮时才能移动。"}, "ja": {"title": "運転免許は持ってる？", "hint": "青信号のときだけ動こう。"}, "tr": {"title": "Ehliyetin var mı?", "hint": "Yalnızca yeşil ışık yanarken hareket et."}, "id": {"title": "Punya SIM?", "hint": "Bergerak hanya saat lampu hijau menyala."}, "ru": {"title": "У тебя есть водительские права?", "hint": "Двигайся только когда горит зеленый свет"}}}, {"id": 26, "rule": "hydraulic", "ru": "Какой ты тяжёлый!", "en": "You’re so heavy!", "hintRu": "Пройди понизу и подставь правый ящик под центральную платформу.", "hintEn": "Take the lower route and push the right-hand crate under the central platform.", "locales": {"ru": {"title": "Какой ты тяжёлый!", "hint": "Пройди понизу и подставь правый ящик под центральную платформу."}, "en": {"title": "You’re so heavy!", "hint": "Take the lower route and push the right-hand crate under the central platform."}, "es": {"title": "¡Cuánto pesas!", "hint": "Ve por abajo y empuja la caja de la derecha bajo la plataforma central."}, "pt-BR": {"title": "Como você pesa!", "hint": "Vá por baixo e empurre a caixa da direita para debaixo da plataforma central."}, "de": {"title": "Bist du schwer!", "hint": "Nimm den unteren Weg und schiebe die rechte Kiste unter die mittlere Plattform."}, "fr": {"title": "Tu pèses ton poids !", "hint": "Passe par le bas et pousse la caisse de droite sous la plateforme centrale."}, "zh-Hans": {"title": "你可真重！", "hint": "从下方绕过去，把右边的箱子推到中央平台下面。"}, "ja": {"title": "ずいぶん重いね！", "hint": "下を通って、右の木箱を中央の足場の下へ押そう。"}, "tr": {"title": "Ne kadar ağırsın!", "hint": "Alt yoldan git ve sağdaki sandığı orta platformun altına it."}, "id": {"title": "Berat sekali kamu!", "hint": "Lewat bawah dan dorong peti kanan ke bawah platform tengah."}}}, {"id": 27, "rule": "morse", "ru": "Помогите!", "en": "Help!", "hintRu": "Набери SOS азбукой Морзе, нажимая на кнопку: · · · — — — · · ·.", "hintEn": "Tap out SOS on the button: three short presses, three long presses, then three short presses.", "locales": {"ru": {"title": "Помогите!", "hint": "Набери SOS азбукой Морзе, нажимая на кнопку: · · · — — — · · ·."}, "en": {"title": "Help!", "hint": "Tap out SOS on the button: three short presses, three long presses, then three short presses."}, "es": {"title": "¡Ayuda!", "hint": "Envía SOS con el botón: tres pulsaciones cortas, tres largas y tres cortas."}, "pt-BR": {"title": "Socorro!", "hint": "Envie SOS pelo botão: três toques curtos, três longos e três curtos."}, "de": {"title": "Hilfe!", "hint": "Sende SOS mit dem Knopf: dreimal kurz, dreimal lang, dreimal kurz."}, "fr": {"title": "Au secours !", "hint": "Envoie SOS avec le bouton : trois pressions courtes, trois longues, puis trois courtes."}, "zh-Hans": {"title": "救命！", "hint": "用按钮发出 SOS：三次短按、三次长按，再三次短按。"}, "ja": {"title": "助けて！", "hint": "ボタンでSOSを送ろう。短く3回、長く3回、短く3回。"}, "tr": {"title": "Yardım edin!", "hint": "Düğmeyle SOS gönder: üç kısa, üç uzun, ardından üç kısa basış."}, "id": {"title": "Tolong!", "hint": "Kirim SOS lewat tombol: tiga tekanan pendek, tiga panjang, lalu tiga pendek."}}}, {"id": 28, "rule": "nolan", "ru": "У нас в гостях Кристофер Нолан", "en": "Christopher Nolan is visiting", "hintRu": "Используй меняющуюся гравитацию. Коснись кнопки героем и доберись до двери.", "hintEn": "Use the changing gravity. Touch the button with your character, then reach the door.", "locales": {"ru": {"title": "У нас в гостях Кристофер Нолан", "hint": "Используй меняющуюся гравитацию. Коснись кнопки героем и доберись до двери."}, "en": {"title": "Christopher Nolan is visiting", "hint": "Use the changing gravity. Touch the button with your character, then reach the door."}, "es": {"title": "Nos visita Christopher Nolan", "hint": "Aprovecha los cambios de gravedad. Toca el botón con el personaje y llega a la puerta."}, "pt-BR": {"title": "Christopher Nolan veio visitar", "hint": "Use a gravidade que muda de direção. Toque no botão com o personagem e chegue à porta."}, "de": {"title": "Christopher Nolan zu Besuch", "hint": "Nutze die wechselnde Schwerkraft. Berühre den Knopf mit deiner Figur und erreiche die Tür."}, "fr": {"title": "Christopher Nolan nous rend visite", "hint": "Profite de la gravité changeante. Touche le bouton avec ton personnage, puis rejoins la porte."}, "zh-Hans": {"title": "克里斯托弗·诺兰来做客", "hint": "利用不断变化的重力，让角色碰到按钮，再到达门口。"}, "ja": {"title": "クリストファー・ノーランがやってきた", "hint": "向きが変わる重力を利用しよう。主人公でボタンに触れ、扉へ向かおう。"}, "tr": {"title": "Christopher Nolan misafirimiz", "hint": "Değişen yer çekimini kullan. Karakterinle düğmeye dokun ve kapıya ulaş."}, "id": {"title": "Christopher Nolan bertamu", "hint": "Manfaatkan gravitasi yang berubah. Sentuh tombol dengan karaktermu, lalu capai pintu."}}}, {"id": 29, "rule": "superSpeed", "ru": "220 вольт спустя", "en": "220 Volts Later", "hintRu": "Нужен ящик для торможения", "hintEn": "You need a crate to slow down.", "locales": {"ru": {"title": "220 вольт спустя", "hint": "Нужен ящик для торможения"}, "en": {"title": "220 Volts Later", "hint": "You need a crate to slow down."}, "es": {"title": "220 voltios después", "hint": "Necesitas una caja para frenar."}, "pt-BR": {"title": "220 volts depois", "hint": "Você precisa de uma caixa para frear."}, "de": {"title": "220 Volt später", "hint": "Du brauchst eine Kiste zum Bremsen."}, "fr": {"title": "220 volts plus tard", "hint": "Il te faut une caisse pour freiner."}, "zh-Hans": {"title": "220伏之后", "hint": "你需要一个箱子来刹车。"}, "ja": {"title": "220ボルト後", "hint": "ブレーキ代わりに木箱を使おう。"}, "tr": {"title": "220 volt sonra", "hint": "Fren yapmak için bir sandık lazım."}, "id": {"title": "220 volt kemudian", "hint": "Butuh peti untuk mengerem."}}}, {"id": 30, "rule": "flood", "ru": "Нужно перекрыть кран", "en": "Turn off the water", "hintRu": "Выйди в главное меню и трижды поверни кран пальцем по часовой стрелке. Затем вернись и нажми кнопку.", "hintEn": "In the main menu, swipe clockwise around the valve three times. Return and press the button.", "locales": {"ru": {"title": "Нужно перекрыть кран", "hint": "Выйди в главное меню и трижды поверни кран пальцем по часовой стрелке. Затем вернись и нажми кнопку."}, "en": {"title": "Turn off the water", "hint": "In the main menu, swipe clockwise around the valve three times. Return and press the button."}, "es": {"title": "Cierra la válvula", "hint": "En el menú principal, desliza el dedo tres veces alrededor de la válvula en sentido horario. Vuelve y pulsa el botón."}, "pt-BR": {"title": "Feche a válvula", "hint": "No menu principal, deslize o dedo três vezes no sentido horário na válvula. Volte e aperte o botão."}, "de": {"title": "Dreh das Wasser ab", "hint": "Wische im Hauptmenü dreimal im Uhrzeigersinn über das Ventil. Kehre zurück und drücke den Knopf."}, "fr": {"title": "Ferme la vanne", "hint": "Dans le menu principal, fais trois gestes dans le sens des aiguilles d’une montre sur la vanne. Reviens appuyer sur le bouton."}, "zh-Hans": {"title": "关掉阀门", "hint": "在主菜单中，沿阀门顺时针划动三次。然后返回关卡踩下按钮。"}, "ja": {"title": "バルブを閉めよう", "hint": "メインメニューでバルブを時計回りに3回なぞろう。その後、戻ってボタンを踏もう。"}, "tr": {"title": "Vanayı kapat", "hint": "Ana menüde vanayı saat yönünde üç ayrı parmak hareketiyle çevir. Geri dönüp düğmeye bas."}, "id": {"title": "Tutup katupnya", "hint": "Di menu utama, usap katup searah jarum jam tiga kali. Kembali dan tekan tombol."}}}, {"id": 31, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 32, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 33, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 34, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 35, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 36, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 37, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 38, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 39, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 40, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 41, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 42, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 43, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 44, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 45, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 46, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 47, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 48, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 49, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 50, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 51, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 52, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 53, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 54, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 55, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 56, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 57, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 58, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 59, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 60, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 61, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 62, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 63, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 64, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 65, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 66, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 67, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 68, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 69, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 70, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 71, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 72, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 73, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 74, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 75, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 76, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 77, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 78, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 79, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 80, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 81, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 82, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 83, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 84, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 85, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 86, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 87, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 88, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 89, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 90, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 91, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 92, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 93, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 94, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 95, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 96, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 97, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 98, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 99, "rule": "pending", "ru": "Скоро", "en": "Coming soon", "hintRu": "", "hintEn": ""}, {"id": 100, "rule": "quoteAnswer", "ru": "После стольких лет?", "en": "After all this time?", "hintRu": "Некоторые чувства не меняются. Открой клавиатуру в меню паузы и ответь на вопрос.", "hintEn": "Some feelings never change. Open the keyboard in the pause menu and answer the question.", "locales": {"en": {"title": "After all this time?", "hint": "Some feelings never change. Open the keyboard in the pause menu and answer the question."}, "ru": {"title": "После стольких лет?", "hint": "Некоторые чувства не меняются. Открой клавиатуру в меню паузы и ответь на вопрос."}, "es": {"title": "¿Después de todo este tiempo?", "hint": "Hay sentimientos que nunca cambian. Abre el teclado en el menú de pausa y responde."}, "pt-BR": {"title": "Depois de todo esse tempo?", "hint": "Alguns sentimentos nunca mudam. Abra o teclado no menu de pausa e responda."}, "zh-Hans": {"title": "这么长时间了还是这样？", "hint": "有些感情从未改变。在暂停菜单中打开键盘，回答这个问题。"}, "de": {"title": "Nach all diesen Jahren?", "hint": "Manche Gefühle ändern sich nie. Öffne die Tastatur im Pausenmenü und beantworte die Frage."}, "fr": {"title": "Après tout ce temps ?", "hint": "Certains sentiments ne changent jamais. Ouvre le clavier dans le menu pause et réponds."}, "ja": {"title": "これほどの時がたっても？", "hint": "変わらない想いもある。ポーズメニューからキーボードを開いて答えよう。"}, "tr": {"title": "Bunca zamandan sonra mı?", "hint": "Bazı duygular hiç değişmez. Duraklatma menüsünden klavyeyi aç ve soruyu yanıtla."}, "id": {"title": "Setelah sekian lama?", "hint": "Ada perasaan yang tak pernah berubah. Buka papan ketik di menu jeda dan jawab pertanyaannya."}}, "answers": {"en": ["Always", "Forever"], "ru": ["Всегда", "Навсегда"], "es": ["Siempre", "Para siempre"], "pt-BR": ["Sempre", "Para sempre"], "zh-Hans": ["一直是这样", "一直如此", "一直都是", "永远"], "de": ["Immer", "Für immer"], "fr": ["À jamais", "A jamais", "Toujours"], "ja": ["永遠に", "いつまでも", "ずっと"], "tr": ["Her zaman", "Daima", "Sonsuza dek"], "id": ["Selalu", "Selamanya"]}}];
let wordOpened=false,gravityUp=false,inputQueue=[],rawKeys={},thawTime=0,warmPointer=null,leftFailed=false,doorTimer=0,knockCount=0,knockPointer=null,mainArmed=false,touchPressed=false,heroDrag=null,lowerPlateDown=false,currentLevel=1,pressCount=0,pressWas=false,plateDown=false,roomSlide=null;
const levelConfig=()=>LEVELS[currentLevel-1];
function syncFloodRefresh108(){const b=$('#flood-refresh');b.hidden=levelConfig().rule!=='flood';b.disabled=!flood?.dead;}
function levelLabels(){syncFloodRefresh108();
 $('#hint-text').hidden=true;$('#hint-modal').hidden=true;document.querySelectorAll('[data-key]').forEach(b=>{b.disabled=levelConfig().rule==='dragHero';});const l=levelText(),el=$('#objective');el.textContent=l.title;
 if(levelConfig().rule==='wordButton'&&l.word){const at=l.title.indexOf(l.word);if(at>=0){el.textContent='';el.append(document.createTextNode(l.title.slice(0,at)));const word=document.createElement('span');word.dataset.wordButton='true';word.style.pointerEvents='auto';word.style.cursor='pointer';word.textContent=l.word;el.append(word,document.createTextNode(l.title.slice(at+l.word.length)));}}
 $('#level-number').textContent=currentLevel+'.';$('#hint-text').textContent=l.hint;
}
let dash122=0,push122=false;
let morse119={index:0,held:0,down:false,pointer:null,code:""};
function resetLevelRules(){dash122=0;push122=false;morse119={index:0,held:0,down:false,pointer:null,code:""};resetGestures();answerUnlocked=false;trafficTime=0;trafficBolt=null;trafficLinks=[];oneFingerFailed=false;wordOpened=false;gravityUp=false;inputQueue=[];rawKeys={};thawTime=0;warmPointer=null;leftFailed=false;doorTimer=0;knockCount=0;knockPointer=null;mainArmed=false;touchPressed=false;heroDrag=null;lowerPlateDown=false;pressCount=0;pressWas=false;plateDown=false;opened=['avoid','remap','illusion'].includes(levelConfig().rule);doorProgress=doorPrevious=opened&&levelConfig().rule!=='illusion'?1:0;}
function updateLevelRules(dt=0){if(levelConfig().rule==='frozen'&&warmPointer!==null)thawTime=Math.min(5,thawTime+dt);
 const onPlate=b=>b.ground&&b.onButton&&b.x+b.w>1077&&b.x<1163;
 const person=levelConfig().rule==='lowGravity'?!!floatButton&&(floatContact||overlaps(player,floatButton)||(player.ground&&Math.abs(player.y+player.h-floatButton.y)<2&&player.x+player.w>floatButton.x&&player.x<floatButton.x+floatButton.w)):onPlate(player),box=crates.some(onPlate),body=corpses.some(onPlate),down=['three','lowGravity'].includes(levelConfig().rule)?person:(person||box||body);
 const rising=down&&!pressWas&&!(levelConfig().rule==='frozen'&&thawTime<5),wasOpen=opened;plateDown=levelConfig().rule==='morse'?morse119.pointer!==null:levelConfig().rule==='frozen'&&thawTime<5?false:levelConfig().rule==='touch'?touchPressed:down;
 if(rising&&levelConfig().rule!=='morse')window.labAudio?.play('button',1120,1);
 switch(levelConfig().rule){
 case 'lowGravity':doorTimer=Math.max(0,doorTimer-dt);if(rising&&person)doorTimer=3;opened=doorTimer>0;break;
 case 'frozen':if(thawTime>=5&&person)opened=true;break;
 case 'noLeft':if(leftFailed)opened=false;else if(person)opened=true;break;
 case 'wordButton':opened=wordOpened;break;
 case 'oneFinger':if(oneFingerFailed)opened=false;else if(person)opened=true;break;
 case 'superSpeed':if(person)opened=true;break;
 case 'morse':if(morse119.pointer!==null)morse119.held+=dt;break;
 case 'hydraulic':if(person)mainArmed=true;opened=mainArmed;break;
 case 'flood':if(flood.closed&&person)flood.button=true;opened=flood.closed&&flood.button;break;
 case 'marioKey':case 'iceKey':if(person)iceQuest.armed=true;if(iceQuest.armed&&iceQuest.collected&&overlaps(player,{x:1915,y:175,w:190,h:200}))opened=true;break;
 case 'traffic':if(person)opened=true;break;
 case 'quoteAnswer':opened=answerUnlocked;break;
 case 'jellyfish':case 'pinchHero':if(person)opened=true;break;
 case 'swipeButton':opened=swipeUnlocked;break;
 case 'flipGravity':case 'inputLag':case 'dragHero':case 'once':if(person)opened=true;break;
 case 'three':if(rising&&person)pressCount++;opened=pressCount>=3;break;
 case 'corpse':opened=body;break;
 case 'avoid':if(down)opened=false;break;
 case 'crate':opened=box;break;
 case 'lowerCrate':{const loaded=crates.some(b=>b.ground&&b.onLowerButton);if(!loaded)mainArmed=false;else if(person&&rising)mainArmed=true;opened=loaded&&mainArmed;break;}
 case 'touch':opened=touchPressed;break;
 case 'knock':opened=knockCount>=3;break;
 case 'remap':case 'illusion':opened=true;break;
 case 'stack':opened=crates.some(c=>onPlate(c)&&corpses.some(b=>b.ground&&Math.abs(b.y+b.h-c.y)<2&&b.x+b.w>c.x+4&&b.x<c.x+c.w-4));break;
 }
 if(opened&&!wasOpen)window.labAudio?.play('door',2050,1);
 pressWas=down;
 lowerPlateDown=levelConfig().rule==='lowerCrate'&&[player,...crates,...corpses].some(b=>b.ground&&b.onLowerButton);
}
function selectLevel(n){currentLevel=Math.max(1,Math.min(LEVELS.length,n));if(levelConfig().rule==='pending'){currentLevel=1;}roomSlide=null;reset();levelLabels();continueGame();try{localStorage.setItem('shadow-current-level',currentLevel)}catch{}}
function finishLevel(){
 clearKeys();window.labAudio?.stop('drag');
 if(currentLevel===LEVELS.length){showMainMenu();return;}
 const old=document.createElement('canvas');old.width=canvas.width;old.height=canvas.height;old.getContext('2d').drawImage(canvas,0,0);
 do{currentLevel++;}while(currentLevel<LEVELS.length&&levelConfig().rule==='pending');reset();levelLabels();mode='transition';roomSlide={old,time:0,next:document.createElement('canvas')};
 try{localStorage.setItem('shadow-current-level',currentLevel)}catch{}
}
function drawRoomSlide(){if(!roomSlide)return;const {old,next}=roomSlide;next.width=canvas.width;next.height=canvas.height;next.getContext('2d').drawImage(canvas,0,0);const t=Math.min(1,roomSlide.time/.55),ease=t*t*(3-2*t),w=canvas.width,h=canvas.height;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,w,h);ctx.drawImage(old,-w*ease,0,w,h);ctx.drawImage(next,w*(1-ease),0,w,h);ctx.restore();}
function interfaceHaptic(){if(!preferences.vibration)return;try{const f=window.Telegram?.WebApp?.HapticFeedback;if(f)f.selectionChanged();else navigator.vibrate?.(5)}catch{}}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(b&&!b.disabled&&!b.matches('[data-key],.menu-valve'))interfaceHaptic();});
const UI_TEXT={
  "ru": {
    "start": "Старт",
    "levels": "Уровни",
    "settings": "Настройки",
    "back": "Назад",
    "sound": "Звук",
    "music": "Музыка",
    "vibration": "Вибрация",
    "about": "Об игре",
    "language": "Язык",
    "rate": "Оценить",
    "on": "вкл",
    "off": "выкл",
    "left": "Влево",
    "right": "Вправо",
    "jump": "Прыжок",
    "tip": "Подсказка",
    "pause": "Меню и пауза",
    "home": "Главное меню",
    "blue": "Синяя лампа",
    "amber": "Жёлтая лампа",
    "valve": "Повернуть вентиль",
    "loading": "Загрузка комнаты…",
    "level": "Уровень",
    "danger": "ОПАСНАЯ ЗОНА",
    "keyboard": "Клавиатура",
    "answer": "Ответ",
    "submit": "Ответить",
    "close": "Закрыть",
    "wrong": "Пока не тот ответ. Попробуй ещё.",
    "correct": "Дверь открыта.",
    "placeholder": "Введи ответ",
    "pending": "Скоро",
    "space": "Пробел",
    "done": "Готово",
    "shift": "Регистр",
    "erase": "Удалить символ",
    "restart": "Заново",
    "loadError": "Не удалось загрузить",
    "story": "Герой пытается выбраться из комнаты к любимой, но временная петля возвращает его назад. Каждый круг приносит новое испытание.",
    "objective": "",
    "hint": ""
  },
  "en": {
    "start": "Start",
    "levels": "Levels",
    "settings": "Settings",
    "back": "Back",
    "sound": "Sound",
    "music": "Music",
    "vibration": "Vibration",
    "about": "About",
    "language": "Language",
    "rate": "Rate",
    "on": "on",
    "off": "off",
    "left": "Move left",
    "right": "Move right",
    "jump": "Jump",
    "tip": "Hint",
    "pause": "Menu and pause",
    "home": "Main menu",
    "blue": "Blue lamp",
    "amber": "Amber lamp",
    "valve": "Turn the valve",
    "loading": "Loading room…",
    "level": "Level",
    "danger": "DANGER ZONE",
    "keyboard": "Keyboard",
    "answer": "Answer",
    "submit": "Submit",
    "close": "Close",
    "wrong": "Not quite. Try again.",
    "correct": "The door is open.",
    "placeholder": "Type your answer",
    "pending": "Coming soon",
    "space": "Space",
    "done": "Done",
    "shift": "Shift",
    "erase": "Backspace",
    "restart": "Restart",
    "loadError": "Unable to load",
    "story": "He is trying to escape the room and reach the one he loves, but a time loop keeps bringing him back. Every loop brings a new challenge.",
    "objective": "",
    "hint": ""
  },
  "es": {
    "start": "Jugar",
    "levels": "Niveles",
    "settings": "Ajustes",
    "back": "Volver",
    "sound": "Sonido",
    "music": "Música",
    "vibration": "Vibración",
    "about": "Acerca del juego",
    "language": "Idioma",
    "rate": "Valorar",
    "on": "activado",
    "off": "desactivado",
    "left": "Izquierda",
    "right": "Derecha",
    "jump": "Saltar",
    "tip": "Pista",
    "pause": "Menú y pausa",
    "home": "Menú principal",
    "blue": "Lámpara azul",
    "amber": "Lámpara ámbar",
    "valve": "Girar la válvula",
    "loading": "Cargando la sala…",
    "level": "Nivel",
    "danger": "ZONA PELIGROSA",
    "keyboard": "Teclado",
    "answer": "Respuesta",
    "submit": "Responder",
    "close": "Cerrar",
    "wrong": "No es eso. Inténtalo de nuevo.",
    "correct": "La puerta está abierta.",
    "placeholder": "Escribe tu respuesta",
    "pending": "Próximamente",
    "space": "Espacio",
    "done": "Listo",
    "shift": "Mayúsculas",
    "erase": "Borrar carácter",
    "restart": "Reiniciar",
    "loadError": "No se pudo cargar",
    "story": "Intenta escapar de la sala para reunirse con su amada, pero un bucle temporal lo devuelve al principio. Cada vuelta trae un nuevo desafío.",
    "objective": "",
    "hint": ""
  },
  "pt-BR": {
    "start": "Jogar",
    "levels": "Fases",
    "settings": "Configurações",
    "back": "Voltar",
    "sound": "Som",
    "music": "Música",
    "vibration": "Vibração",
    "about": "Sobre o jogo",
    "language": "Idioma",
    "rate": "Avaliar",
    "on": "ativado",
    "off": "desativado",
    "left": "Esquerda",
    "right": "Direita",
    "jump": "Pular",
    "tip": "Dica",
    "pause": "Menu e pausa",
    "home": "Menu principal",
    "blue": "Lâmpada azul",
    "amber": "Lâmpada âmbar",
    "valve": "Girar a válvula",
    "loading": "Carregando a sala…",
    "level": "Fase",
    "danger": "ÁREA DE PERIGO",
    "keyboard": "Teclado",
    "answer": "Resposta",
    "submit": "Responder",
    "close": "Fechar",
    "wrong": "Ainda não. Tente outra vez.",
    "correct": "A porta está aberta.",
    "placeholder": "Digite sua resposta",
    "pending": "Em breve",
    "space": "Espaço",
    "done": "Pronto",
    "shift": "Maiúsculas",
    "erase": "Apagar caractere",
    "restart": "Recomeçar",
    "loadError": "Não foi possível carregar",
    "story": "Ele tenta sair da sala para reencontrar sua amada, mas um ciclo temporal sempre o traz de volta. A cada volta, um novo desafio.",
    "objective": "",
    "hint": ""
  },
  "de": {
    "start": "Start",
    "levels": "Level",
    "settings": "Einstellungen",
    "back": "Zurück",
    "sound": "Ton",
    "music": "Musik",
    "vibration": "Vibration",
    "about": "Über das Spiel",
    "language": "Sprache",
    "rate": "Bewerten",
    "on": "an",
    "off": "aus",
    "left": "Nach links",
    "right": "Nach rechts",
    "jump": "Springen",
    "tip": "Hinweis",
    "pause": "Menü und Pause",
    "home": "Hauptmenü",
    "blue": "Blaue Lampe",
    "amber": "Gelbe Lampe",
    "valve": "Ventil drehen",
    "loading": "Raum wird geladen…",
    "level": "Level",
    "danger": "GEFAHRENZONE",
    "keyboard": "Tastatur",
    "answer": "Antwort",
    "submit": "Antworten",
    "close": "Schließen",
    "wrong": "Noch nicht richtig. Versuch es noch mal.",
    "correct": "Die Tür ist offen.",
    "placeholder": "Antwort eingeben",
    "pending": "Demnächst",
    "space": "Leerzeichen",
    "done": "Fertig",
    "shift": "Umschalten",
    "erase": "Zeichen löschen",
    "restart": "Neustart",
    "loadError": "Laden fehlgeschlagen",
    "story": "Er will aus dem Raum entkommen und zu seiner Liebsten zurückkehren. Doch eine Zeitschleife wirft ihn immer wieder zurück. Mit jedem Durchlauf wartet eine neue Herausforderung.",
    "objective": "",
    "hint": ""
  },
  "fr": {
    "start": "Jouer",
    "levels": "Niveaux",
    "settings": "Paramètres",
    "back": "Retour",
    "sound": "Son",
    "music": "Musique",
    "vibration": "Vibration",
    "about": "À propos",
    "language": "Langue",
    "rate": "Évaluer",
    "on": "activé",
    "off": "désactivé",
    "left": "À gauche",
    "right": "À droite",
    "jump": "Sauter",
    "tip": "Indice",
    "pause": "Menu et pause",
    "home": "Menu principal",
    "blue": "Lampe bleue",
    "amber": "Lampe ambrée",
    "valve": "Tourner la vanne",
    "loading": "Chargement de la salle…",
    "level": "Niveau",
    "danger": "ZONE DANGEREUSE",
    "keyboard": "Clavier",
    "answer": "Réponse",
    "submit": "Répondre",
    "close": "Fermer",
    "wrong": "Ce n’est pas ça. Réessaie.",
    "correct": "La porte est ouverte.",
    "placeholder": "Saisis ta réponse",
    "pending": "Bientôt",
    "space": "Espace",
    "done": "Terminé",
    "shift": "Majuscules",
    "erase": "Effacer un caractère",
    "restart": "Recommencer",
    "loadError": "Chargement impossible",
    "story": "Il tente de quitter la salle pour retrouver celle qu’il aime, mais une boucle temporelle le ramène sans cesse au départ. À chaque boucle, une nouvelle épreuve.",
    "objective": "",
    "hint": ""
  },
  "zh-Hans": {
    "start": "开始",
    "levels": "关卡",
    "settings": "设置",
    "back": "返回",
    "sound": "音效",
    "music": "音乐",
    "vibration": "振动",
    "about": "关于游戏",
    "language": "语言",
    "rate": "评分",
    "on": "开",
    "off": "关",
    "left": "向左",
    "right": "向右",
    "jump": "跳跃",
    "tip": "提示",
    "pause": "菜单与暂停",
    "home": "主菜单",
    "blue": "蓝色灯",
    "amber": "黄色灯",
    "valve": "转动阀门",
    "loading": "正在加载房间…",
    "level": "关卡",
    "danger": "危险区域",
    "keyboard": "键盘",
    "answer": "答案",
    "submit": "提交",
    "close": "关闭",
    "wrong": "还不对，再试一次。",
    "correct": "门开了。",
    "placeholder": "输入答案",
    "pending": "敬请期待",
    "space": "空格",
    "done": "完成",
    "shift": "大小写",
    "erase": "删除字符",
    "restart": "重新开始",
    "loadError": "加载失败",
    "story": "他想逃离房间，回到心爱的人身边，却一次次被时间循环带回原点。每一次循环，都有新的考验。",
    "objective": "",
    "hint": ""
  },
  "ja": {
    "start": "スタート",
    "levels": "ステージ",
    "settings": "設定",
    "back": "戻る",
    "sound": "効果音",
    "music": "音楽",
    "vibration": "振動",
    "about": "このゲームについて",
    "language": "言語",
    "rate": "評価する",
    "on": "オン",
    "off": "オフ",
    "left": "左へ",
    "right": "右へ",
    "jump": "ジャンプ",
    "tip": "ヒント",
    "pause": "メニュー・ポーズ",
    "home": "メインメニュー",
    "blue": "青いランプ",
    "amber": "黄色いランプ",
    "valve": "バルブを回す",
    "loading": "部屋を読み込み中…",
    "level": "ステージ",
    "danger": "危険エリア",
    "keyboard": "キーボード",
    "answer": "答え",
    "submit": "回答する",
    "close": "閉じる",
    "wrong": "まだ違うみたい。もう一度。",
    "correct": "扉が開いた。",
    "placeholder": "答えを入力",
    "pending": "近日公開",
    "space": "スペース",
    "done": "完了",
    "shift": "大文字・小文字",
    "erase": "一文字削除",
    "restart": "やり直す",
    "loadError": "読み込めませんでした",
    "story": "愛する人のもとへ向かうため、部屋から抜け出そうとする主人公。しかし時のループが彼を引き戻す。繰り返すたび、新たな試練が待っている。",
    "objective": "",
    "hint": ""
  },
  "tr": {
    "start": "Başla",
    "levels": "Bölümler",
    "settings": "Ayarlar",
    "back": "Geri",
    "sound": "Ses",
    "music": "Müzik",
    "vibration": "Titreşim",
    "about": "Oyun hakkında",
    "language": "Dil",
    "rate": "Puan ver",
    "on": "açık",
    "off": "kapalı",
    "left": "Sola git",
    "right": "Sağa git",
    "jump": "Zıpla",
    "tip": "İpucu",
    "pause": "Menü ve duraklatma",
    "home": "Ana menü",
    "blue": "Mavi lamba",
    "amber": "Sarı lamba",
    "valve": "Vanayı çevir",
    "loading": "Oda yükleniyor…",
    "level": "Bölüm",
    "danger": "TEHLİKELİ BÖLGE",
    "keyboard": "Klavye",
    "answer": "Yanıt",
    "submit": "Yanıtla",
    "close": "Kapat",
    "wrong": "Tam değil. Tekrar dene.",
    "correct": "Kapı açıldı.",
    "placeholder": "Yanıtını yaz",
    "pending": "Yakında",
    "space": "Boşluk",
    "done": "Bitti",
    "shift": "Büyük harf",
    "erase": "Karakter sil",
    "restart": "Yeniden başla",
    "loadError": "Yüklenemedi",
    "story": "Sevdiğine kavuşmak için odadan çıkmaya çalışıyor, ama bir zaman döngüsü onu hep başa döndürüyor. Her döngüde yeni bir sınav bekliyor.",
    "objective": "",
    "hint": ""
  },
  "id": {
    "start": "Mulai",
    "levels": "Level",
    "settings": "Pengaturan",
    "back": "Kembali",
    "sound": "Suara",
    "music": "Musik",
    "vibration": "Getaran",
    "about": "Tentang game",
    "language": "Bahasa",
    "rate": "Beri nilai",
    "on": "aktif",
    "off": "nonaktif",
    "left": "Ke kiri",
    "right": "Ke kanan",
    "jump": "Lompat",
    "tip": "Petunjuk",
    "pause": "Menu dan jeda",
    "home": "Menu utama",
    "blue": "Lampu biru",
    "amber": "Lampu kuning",
    "valve": "Putar katup",
    "loading": "Memuat ruangan…",
    "level": "Level",
    "danger": "AREA BERBAHAYA",
    "keyboard": "Papan ketik",
    "answer": "Jawaban",
    "submit": "Jawab",
    "close": "Tutup",
    "wrong": "Belum tepat. Coba lagi.",
    "correct": "Pintunya terbuka.",
    "placeholder": "Ketik jawabanmu",
    "pending": "Segera hadir",
    "space": "Spasi",
    "done": "Selesai",
    "shift": "Huruf besar",
    "erase": "Hapus karakter",
    "restart": "Ulangi",
    "loadError": "Gagal memuat",
    "story": "Ia berusaha keluar dari ruangan untuk menemui kekasihnya, tetapi putaran waktu selalu membawanya kembali. Setiap putaran menghadirkan tantangan baru.",
    "objective": "",
    "hint": ""
  }
};
const LOCALE_NAMES={'ru':'Русский','en':'English','es':'Español','pt-BR':'Português (Brasil)','zh-Hans':'简体中文','de':'Deutsch','fr':'Français','ja':'日本語','tr':'Türkçe','id':'Bahasa Indonesia'};
function resolveLocale(value){const v=String(value||'en').replaceAll('_','-').toLowerCase();if(v.startsWith('pt'))return 'pt-BR';if(v.startsWith('zh'))return 'zh-Hans';return Object.keys(LOCALE_NAMES).find(k=>k.toLowerCase()===v)||Object.keys(LOCALE_NAMES).find(k=>k===v.split('-')[0])||'en';}
function gameLocale(){return resolveLocale(document.documentElement.lang);}
function tr(key){return UI_TEXT[gameLocale()][key]??UI_TEXT.en[key]??key;}
function levelText(l=levelConfig()){return l.locales?.[gameLocale()]||l.locales?.en||{title:tr('pending'),hint:''};}
function normalizeAnswer(value,locale=gameLocale()){
 let v=String(value).normalize('NFKC').trim().replace(/[.!?。！？…]+$/u,'').trim().replace(/\s+/gu,' ').toLocaleLowerCase(locale);
 if(locale==='fr')v=v.normalize('NFD').replace(/\p{M}/gu,'').normalize('NFC');
 return v;
}
let answerUnlocked=false;
function submitLevelAnswer(value){
 if(levelConfig().rule!=='quoteAnswer')return false;
 const normalized=normalizeAnswer(value),accepted=levelConfig().answers?.[gameLocale()]||levelConfig().answers?.en||[];
 if(!normalized||!accepted.some(a=>normalizeAnswer(a)===normalized))return false;
 if(!answerUnlocked){answerUnlocked=true;updateLevelRules(0);}
 return true;
}
function localizeAnswerPanel(){const p=$('#answer-panel');if(!p)return;$('#answer-label').textContent=levelText().title;$('#answer-input').placeholder=tr('placeholder');$('#answer-input').setAttribute('aria-label',tr('answer'));$('#answer-input').lang=gameLocale();$('#answer-submit').textContent=tr('submit');$('#answer-close').textContent=tr('close');$('#answer-feedback').textContent='';}
function openAnswerPanel(){
 keyboardClose();clearKeys();keyboardOpen=true;$('#keyboard-toggle').setAttribute('aria-expanded','true');localizeAnswerPanel();$('#answer-panel').hidden=false;$('#answer-input').value='';$('#answer-input').focus({preventScroll:true});
}
function answerFormSubmit(e){e?.preventDefault();if(answerComposing)return;const input=$('#answer-input');const good=submitLevelAnswer(input.value);$('#answer-feedback').textContent=tr(good?'correct':'wrong');if(!good){input.focus({preventScroll:true});input.select();}else input.blur();}
let answerComposing=false;
$('#answer-form').onsubmit=answerFormSubmit;
$('#answer-input').addEventListener('compositionstart',()=>{answerComposing=true;});
$('#answer-input').addEventListener('compositionend',()=>{answerComposing=false;submitLevelAnswer($('#answer-input').value);});
$('#answer-input').addEventListener('input',()=>{if(!answerComposing)submitLevelAnswer($('#answer-input').value);});
$('#answer-close').onclick=()=>keyboardClose();

let keyboardOpen=false,keyboardValue='',keyboardShift=false,keyboardNumbers=false,keyboardGhost='',keyboardGhostTimer=null;
const keyboardLayouts={es:['qwertyuiop','asdfghjklñ','zxcvbnm'],de:['qwertzuiopü','asdfghjklöä','yxcvbnmß'],fr:['azertyuiop','qsdfghjklm','wxcvbnéàç'],tr:['qwertyuıopğü','asdfghjklşi','zxcvbnmöç'],'pt-BR':['qwertyuiop','asdfghjklç','zxcvbnmãõ'],ru:['йцукенгшщзхъ','фывапролджэ','ячсмитьбю'],en:['qwertyuiop','asdfghjkl','zxcvbnm']};
function keyboardUpdateText(){const el=$('#keyboard-text');el.textContent=keyboardValue+keyboardGhost;el.hidden=!keyboardOpen&&!keyboardValue;el.classList[keyboardOpen?'add':'remove']('editing');}
function keyboardAnswer(){const l=levelConfig(),lang=gameLocale();return l.answers?.[lang]?.[0]??null;}
function keyboardInsert(value){
 clearTimeout(keyboardGhostTimer);keyboardGhost='';
 const candidate=keyboardValue+value,answers=levelConfig().answers?.[gameLocale()]||[],normalized=normalizeAnswer(candidate);
 if(answers.some(answer=>normalizeAnswer(answer).startsWith(normalized))&&Array.from(candidate).length<=80){keyboardValue=candidate;submitLevelAnswer(candidate);}
 else{keyboardGhost=value;keyboardGhostTimer=setTimeout(()=>{keyboardGhost='';keyboardUpdateText();},230);}
 keyboardUpdateText();
}
function keyboardErase(){clearTimeout(keyboardGhostTimer);keyboardGhost='';keyboardValue=Array.from(keyboardValue).slice(0,-1).join('');keyboardUpdateText();}
function keyboardClose(){const field=$('#answer-input');field?.blur?.();if(field)field.value='';if($('#answer-panel'))$('#answer-panel').hidden=true;answerComposing=false;clearTimeout(keyboardGhostTimer);keyboardGhost='';keyboardValue='';keyboardOpen=false;$('#game-keyboard').hidden=true;$('#game').classList.remove('keyboard-open');$('#keyboard-toggle').setAttribute('aria-expanded','false');keyboardUpdateText();}
function keyboardClear(){keyboardClose();keyboardValue='';keyboardUpdateText();}
function keyboardDraw(){
 const host=$('#game-keyboard');host.replaceChildren();const language=gameLocale(),en=language==='en';
 const layout=keyboardNumbers?['1234567890','@#%&*()-+=','!?.,:;/']:keyboardLayouts[language]||keyboardLayouts.en;
 function button(label,action,style='',description=label){const b=document.createElement('button');b.type='button';b.className='gk-key '+style;b.textContent=label;b.setAttribute('aria-label',description);b.onpointerdown=e=>{e.preventDefault();e.stopPropagation();};b.onclick=e=>{e.stopPropagation();action();};return b;}
 layout.forEach((line,i)=>{const row=document.createElement('div');row.className='gk-row';if(i===2)row.append(button('⇧',()=>{keyboardShift=!keyboardShift;keyboardDraw()},'gk-special '+(keyboardShift?'gk-shift-active':''),tr('shift')));for(const c of line)row.append(button(keyboardShift?c.toUpperCase():c,()=>{keyboardInsert(keyboardShift?c.toUpperCase():c);if(keyboardShift){keyboardShift=false;keyboardDraw();}}));if(i===2)row.append(button('⌫',keyboardErase,'gk-special',tr('erase')));host.append(row);});
 const row=document.createElement('div');row.className='gk-row';row.append(button(keyboardNumbers?(gameLocale()==='ru'?'АБВ':'ABC'):'123',()=>{keyboardNumbers=!keyboardNumbers;keyboardDraw()},'gk-special'),button(tr('space'),()=>keyboardInsert(' '),'gk-space'),button(tr('done'),keyboardClose,'gk-special gk-done'));host.append(row);
}
$('#keyboard-toggle').onclick=()=>{if(mode!=='pause')return;if(['ja','zh-Hans'].includes(gameLocale())){if(keyboardOpen)keyboardClose();else openAnswerPanel();return;}keyboardOpen=!keyboardOpen;if(!keyboardOpen){keyboardClose();return;}clearKeys();const style=getComputedStyle($('#objective'));$('#keyboard-text').style.fontFamily=style.fontFamily;$('#keyboard-text').style.fontWeight=style.fontWeight;$('#keyboard-text').style.letterSpacing=style.letterSpacing;keyboardNumbers=false;keyboardShift=false;keyboardDraw();$('#game-keyboard').hidden=false;$('#game').classList.add('keyboard-open');$('#keyboard-toggle').setAttribute('aria-expanded','true');keyboardUpdateText();};
addEventListener('keydown',e=>{if(!keyboardOpen)return;if(!$('#answer-panel').hidden){e.stopImmediatePropagation();if(e.isComposing||answerComposing)return;if(e.key==='Escape'){e.preventDefault();keyboardClose();}else if(e.key==='Enter'){e.preventDefault();answerFormSubmit();}return;}e.preventDefault();e.stopImmediatePropagation();if(e.key==='Escape'||e.key==='Enter'){keyboardClose();return;}if(e.key==='Backspace'){keyboardErase();return;}if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&Array.from(e.key).length===1)keyboardInsert(e.key);},true);
addEventListener('keyup',e=>{if(keyboardOpen){e.stopImmediatePropagation();if($('#answer-panel').hidden)e.preventDefault();}},true);

function setupLevels(){document.querySelectorAll('.level-grid button').forEach((b,i)=>{b.disabled=i>=LEVELS.length||LEVELS[i]?.rule==='pending';if(!b.disabled){b.removeAttribute('aria-disabled');b.onclick=()=>selectLevel(i+1);}});levelLabels();}

let pinchPointers=new Map(),pinchStart=null,swipeStart=null,swipeUnlocked=false;
function resetGestures(){pinchPointers.clear();pinchStart=null;swipeStart=null;swipeUnlocked=false;$('#swipe-reply').hidden=true;}
function resizeHero(value){
 const factor=Math.max(1,Math.min(2.6,value)),foot=player.y+player.h,cx=player.x+player.w/2;
 const candidate={...player,w:hero.width*factor,h:hero.hitHeight*factor};candidate.x=Math.max(bounds.left,Math.min(bounds.right-candidate.w,cx-candidate.w/2));candidate.y=foot-candidate.h;
 if(factor>(player.modelScale||1)&&[...solids,...crates].some(o=>overlaps(candidate,o)))return false;
 Object.assign(player,candidate,{modelScale:factor,prevX:candidate.x,prevY:candidate.y});return true;
}
function gesturePress(p,id){
 if(levelConfig().rule==='pinchHero'){pinchPointers.set(id,{...p});if(pinchPointers.size===2){const [a,b]=[...pinchPointers.values()];pinchStart={distance:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y)),scale:player.modelScale};clearKeys();}return true;}
 if(levelConfig().rule==='swipeButton'&&!swipeUnlocked&&p.x>=1025&&p.x<=1215&&p.y>=545&&p.y<=675){swipeStart={...p,id};return true;}return false;
}
function gestureMove(p,id){if(pinchPointers.has(id)){pinchPointers.set(id,{...p});if(pinchPointers.size===2&&pinchStart){const [a,b]=[...pinchPointers.values()];resizeHero(pinchStart.scale*Math.hypot(a.x-b.x,a.y-b.y)/pinchStart.distance);}}if(swipeStart?.id===id){swipeStart.end={...p};}}
function gestureRelease(id){
 pinchPointers.delete(id);if(pinchPointers.size<2)pinchStart=null;
 if(swipeStart?.id!==id)return;const start=swipeStart;swipeStart=null;const end=start.end;
 if(end&&start.y-end.y>=45&&Math.abs(end.x-start.x)<80){clearKeys();window.labAudio?.stop('drag');mode='swipeReply';const t=levelConfig().reply[gameLocale()]||levelConfig().reply.en;$('#swipe-question').textContent=t.question;$('#swipe-yes').textContent=t.yes;$('#swipe-no').textContent=t.no;$('#swipe-reply').hidden=false;}
}
function acceptSwipeReply(){if(mode!=='swipeReply'||levelConfig().rule!=='swipeButton')return;swipeUnlocked=true;$('#swipe-reply').hidden=true;clearKeys();mode='play';updateLevelRules(0);}
$('#swipe-yes').onclick=$('#swipe-no').onclick=acceptSwipeReply;
canvas.addEventListener('wheel',e=>{if(mode==='play'&&levelConfig().rule==='pinchHero'&&(e.ctrlKey||e.metaKey)){e.preventDefault();resizeHero((player.modelScale||1)*Math.exp(-e.deltaY*.008));}},{passive:false});

let jellyTime=0,jellies=[],jellyRandomState=93271;
function jellyRandom(){jellyRandomState=(Math.imul(jellyRandomState,1664525)+1013904223)>>>0;return jellyRandomState/4294967296;}
// Independent asymmetric patrol loops. Each animal has its own timing and shape.
// x, refuge height, excursion height, phase offset, period, clear dwell, x radius, lean.
const jellyRoutes=[
 [610,190,700,4,47,13,72,65],
 [820,245,735,-7,59,16,125,-75],
 [700,140,600,11,53,17,90,95],
 [960,205,685,-3,67,19,115,-100],
 [560,280,670,18,61,15,55,80],
 [1080,160,510,0,51,15,138,-90],
 [1190,235,495,-6,63,18,75,-55],
 [1000,110,545,5,57,17,100,70],
 [1240,145,460,9,71,22,55,-70],
 [860,265,580,-11,65,14,100,95],
 [1560,760,330,-3,55,19,70,45],
 [1730,825,240,5,69,21,105,-65],
 [1870,710,400,12,73,25,70,80],
 [1640,690,180,-9,79,20,95,70],
 [1940,790,300,17,83,29,65,-45]
];
// Four individual opening encounters; smooth closed loops continue after respawn.
const jellyEncounters=[
 [[0,1120,490],[8,1190,205],[19,960,270],[31,1060,520],[43,1120,490]],
 [[0,295,650],[7,260,435],[18,525,370],[30,545,570],[44,295,650]],
 [[0,1820,420],[5,2030,290],[12,1910,135],[24,1690,530],[39,1820,420]],
 [[0,710,650],[6,525,620],[15,575,395],[28,845,290],[41,710,650]]
];
function jellyEncounter(points,t){
 const phase=t%points[points.length-1][0];
 for(let k=1;k<points.length;k++){const a=points[k-1],b=points[k];if(phase<=b[0]){
 const u=(phase-a[0])/(b[0]-a[0]),s=(1-Math.cos(Math.PI*u))/2;
 return {x:a[1]+(b[1]-a[1])*s,y:a[2]+(b[2]-a[2])*s};}}
}
function jellyPosition(j,t){
 if(j.seed<4)return jellyEncounter(jellyEncounters[j.seed],t);
 const [cx,rest,reach,offset,period,dwell,radius,lean]=jellyRoutes[j.seed];
 const phase=((t+offset)%period+period)%period;
 const travel=(period-dwell)/2;
 const u=phase<dwell?0:(phase-dwell)/travel;
 const sweep=u<=1?(1-Math.cos(Math.PI*u))/2:(1+Math.cos(Math.PI*(u-1)))/2;
 const angle=t*(.075+j.seed*.0037)+j.seed*2.39996;
 // Unequal lateral lobes, oblique excursions and an independent vertical drift.
 let x=cx+radius*(.72*Math.sin(angle)+.28*Math.sin(angle*1.73+j.seed)) + lean*sweep;
 // Keep the small waiting ledge free without flattening the trajectories.
 if(cx<1350&&x>1250)x=1250+50*Math.tanh((x-1250)/50);else if(cx>1350&&x<1565)x=1565-50*Math.tanh((1565-x)/50);
 return {x,y:rest+(reach-rest)*sweep+13*Math.sin(angle*1.37+j.seed*.9)};
}
function resetJellies(){jellyTime=0;jellies=[];jellyRandomState=93271;if(levelConfig().rule!=='jellyfish')return;
 for(let i=0;i<15;i++){const j={seed:i,flip:i%2===1,size:.9+jellyRandom()*.2,tilt:(jellyRandom()-.5)*.65,vx:0,vy:0};Object.assign(j,jellyPosition(j,0));j.px=j.x;j.py=j.y;jellies.push(j);}}
function updateJellies(dt){if(levelConfig().rule!=='jellyfish')return false;jellyTime+=dt;
 for(const j of jellies){j.px=j.x;j.py=j.y;Object.assign(j,jellyPosition(j,jellyTime));j.vx=(j.x-j.px)/(dt||1);j.vy=(j.y-j.py)/(dt||1);
 const size=j.size||1,angle=(j.tilt||0)+.04*Math.sin(jellyTime*.6+j.seed),c=Math.cos(angle),s=Math.sin(angle),mirror=j.flip?-1:1;
 const touch=(ox,oy,rx,ry)=>{const x=j.x+(c*ox*mirror+s*oy)*size,y=j.y+(-s*ox*mirror+c*oy)*size;
 if(x>=player.x&&x<=player.x+player.w&&y>=player.y&&y<=player.y+player.h)return true;
 const pts=[[player.x,player.y],[player.x+player.w,player.y],[player.x+player.w,player.y+player.h],[player.x,player.y+player.h]].map(([px,py])=>[(c*(px-x)-s*(py-y))/(rx*size),(s*(px-x)+c*(py-y))/(ry*size)]);
 return pts.some((a,i)=>{const b=pts[(i+1)%4],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,-(a[0]*dx+a[1]*dy)/(dx*dx+dy*dy||1)));return (a[0]+dx*t)**2+(a[1]+dy*t)**2<1;});};
 if(touch(12,-25,27,18)||touch(-7,10,13,26)){die(true);return true;}}
 return false;
}


const floodElectricalContact={x:2135,y:575};
let flood=null,floodLayer=null,floodMaskData=null;
function resetFlood(){waterFx105=[];waterRipples106=[];lastSplash106=-100;const wasFlood=!!flood;flood=levelConfig().rule==='flood'?{elapsed:0,y:1018,closed:false,turn:0,swipes:0,gesture:0,powered:false,breath:0,button:false,arc:0}:null;if(wasFlood||flood)window.resetFloodValve102?.();syncFloodValve103();}
function syncFloodValve103(){}
window.floodGestureStart104=()=>{if(flood)flood.gesture=0;};
window.floodGestureEnd104=()=>{if(flood)flood.gesture=0;};
window.floodTurn102=delta=>{
 if(!flood||mode!=='menu')return delta;
 if(flood.gesture!==null){
  flood.gesture=(flood.gesture||0)+delta;
  if(Math.abs(flood.gesture)>=.4){
   const direction=Math.sign(flood.gesture);
   flood.swipes=Math.max(0,Math.min(3,(flood.swipes||0)+direction));
   flood.closed=flood.swipes>=3;flood.gesture=null;interfaceHaptic();
  }
 }
 return delta;
};
function floodAllows(x,y){if(!floodMaskData&&window.floodMask102){const c=document.createElement('canvas');c.width=W;c.height=H;const k=c.getContext('2d');k.drawImage(window.floodMask102,0,0,W,H);floodMaskData=k.getImageData(0,0,W,H).data;}if(x<0||x>=W||y<0||y>=H)return false;return !floodMaskData||floodMaskData[((y|0)*W+(x|0))*4+3]<200;}
function floodWet(head=false){
 if(!flood)return false;
 if(head){const y=player.y+5;return y>flood.y&&floodAllows(player.x+player.w/2,y);}
 // Foreground masks can cover the feet while the rest of the body is in water.
 const top=Math.max(player.y+2,flood.y+.01),bottom=player.y+player.h-2;
 if(top>bottom)return false;
 for(let j=0;j<=8;j++){const y=top+(bottom-top)*j/8;for(const u of [.15,.5,.85])if(floodAllows(player.x+player.w*u,y))return true;}
 return false;
}
function advanceFlood(dt){if(!flood)return;for(const p of waterFx105){p.vy+=420*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;}waterFx105=waterFx105.filter(p=>p.life>0);for(const r of waterRipples106)r.age+=dt;waterRipples106=waterRipples106.filter(r=>r.age<1.25);flood.arc+=dt;if(!flood.closed){flood.elapsed+=dt;flood.y=Math.max(0,1018-(1018-floodElectricalContact.y)*flood.elapsed/60);}if(!flood.powered&&flood.y<=floodElectricalContact.y+1e-8){flood.powered=true;window.playFloodShort102?.(preferences.sound);}}
function checkFlood(dt){if(!flood)return false;if(flood.powered&&floodWet()){die(true,'water');return true;}flood.breath=floodWet(true)?flood.breath+dt:0;if(flood.breath>=20-1e-8){die(false,'water');return true;}return false;}
function drawFlood(){if(!flood||!window.floodMask102)return;if(!floodLayer){floodLayer=document.createElement('canvas');floodLayer.width=W;floodLayer.height=H;}const c=floodLayer.getContext('2d'),y=flood.y,t=flood.arc;c.clearRect(0,0,W,H);
 const wave=x=>y+2.5*Math.sin(x*.014+t*1.8)+1.3*Math.sin(x*.032-t*1.1);
 c.save();c.beginPath();c.moveTo(0,H);c.lineTo(0,wave(0));for(let x=0;x<=W;x+=12)c.lineTo(x,wave(x));c.lineTo(W,H);c.closePath();c.clip();
 const g=c.createLinearGradient(0,y,0,H+50);g.addColorStop(0,'rgba(68,148,159,.22)');g.addColorStop(.35,'rgba(23,89,109,.34)');g.addColorStop(1,'rgba(8,41,64,.53)');c.fillStyle=g;c.fillRect(0,Math.min(y-10,0),W,H+200);
 c.strokeStyle='rgba(151,217,226,.10)';c.lineWidth=1;for(let k=0;k<24;k++){const yy=y+23+(k*79)%650,start=190+(k*337)%1820,length=22+(k*17)%80;c.beginPath();for(let x=start;x<=start+length;x+=6){const py=yy+2*Math.sin(x*.019+t*.7+k);x===start?c.moveTo(x,py):c.lineTo(x,py);}c.stroke();}c.restore();
 c.beginPath();for(let x=0;x<=W;x+=8){x===0?c.moveTo(x,wave(x)):c.lineTo(x,wave(x));}c.strokeStyle='rgba(168,230,235,.65)';c.lineWidth=2;c.stroke();
 if(flood.powered&&flood.y>0){c.save();const tick=Math.floor(t*16),noise=n=>{const z=Math.sin(n*127.1+tick*31.7)*43758.5453;return z-Math.floor(z);};
 for(let k=0;k<9;k++){if(noise(k+30)<.3)continue;const start=175+noise(k+1)*1900,length=65+noise(k+90)*250,pts=[];for(let i=0;i<=18;i++){const x=start+i*length/18;pts.push([x,wave(x)+(noise(k*23+i)-.5)*12]);}
 const path=()=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));};
 c.shadowColor='#65bcff';c.shadowBlur=14;c.strokeStyle='rgba(72,155,255,.3)';c.lineWidth=5;path();c.stroke();c.shadowBlur=5;c.strokeStyle='rgba(221,248,255,.9)';c.lineWidth=1.2;path();c.stroke();
 c.shadowBlur=3;c.strokeStyle='rgba(151,222,255,.5)';c.lineWidth=.7;for(let branch=0;branch<3;branch++){const p=pts[3+branch*5];c.beginPath();c.moveTo(...p);c.lineTo(p[0]+9,p[1]-7);c.lineTo(p[0]+16,p[1]-4);c.lineTo(p[0]+24,p[1]-12);c.stroke();}}
 c.restore();}
 c.globalCompositeOperation='destination-out';c.drawImage(window.floodMask102,0,0,W,H);c.globalCompositeOperation='source-over';ctx.drawImage(floodLayer,0,0);
 if(flood.powered&&flood.y>0&&Math.sin(t*13)>.5){ctx.save();ctx.strokeStyle='#ccf5ff';ctx.shadowColor='#89dfff';ctx.shadowBlur=10;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(floodElectricalContact.x,floodElectricalContact.y);ctx.lineTo(floodElectricalContact.x+12,floodElectricalContact.y+7);ctx.lineTo(floodElectricalContact.x-4,floodElectricalContact.y+15);ctx.stroke();ctx.restore();}
}

let hydraulic111=null;
function resetHydraulic111(){solids[6].y=600;solids[6].h=44;plate.base=608;hydraulic111=levelConfig().rule==='hydraulic'?{active:false,dy:0,supported:false,moving:false}:null;window.hydraulicSound111?.(false);}
function updateHydraulic111(dt){const q=hydraulic111;if(!q)return false;const p=solids[6],old=p.y,bottom=old+77;
 const on=b=>b.ground&&b.x+b.w>p.x&&b.x<p.x+p.w&&(Math.abs(b.y+b.h-old)<3||b===player&&b.onButton);
 if(on(player))q.active=true;
 q.moving=false;if(!q.active)return false;
 let stop=739,support=null;
 for(const b of crates)if(b.ground&&b.y>=bottom-1&&b.x+b.w>p.x+5&&b.x<p.x+p.w-5&&b.y-77<stop){stop=b.y-77;support=b;}
 const next=Math.max(old,Math.min(stop,old+27.8*dt)),dy=next-old;
 const rider=on(player);q.supported=!!support&&Math.abs(next-stop)<.1;q.moving=dy>0;
 if(dy>0){
  if(!rider&&player.x+player.w>p.x&&player.x<p.x+p.w&&player.y>=old+p.h-1&&player.y<next+77){
   const newY=next+77;
   if(solids.filter(s=>s!==p).concat(crates).some(s=>overlaps({...player,y:newY},s))){die(false);return true;}
   player.y=newY;player.prevY=newY;player.vy=Math.max(0,player.vy);
  }
  for(const b of crates.concat(corpses))if(on(b)){b.y+=dy;if(b.prevY!==undefined)b.prevY+=dy;}
  if(rider){player.y+=dy;player.prevY+=dy;}
  p.y=next;q.dy=next-600;plate.base=608+q.dy;
 }
 window.hydraulicSound111?.(q.moving&&preferences.sound);return false;
}
function drawHydraulic111(){if(!hydraulic111)return;const bg=window.hydraulicBackground113,deck=window.hydraulicDeck113;if(!bg?.complete||!deck?.complete)return;
 ctx.drawImage(bg,760,480,720,330,760,480,720,330);
 // Button remains a separate live state; the supplied deck starts at its top surface.
 ctx.drawImage(deck,791,600,659,108,791,600+hydraulic111.dy,659,108);
}
// Level 27: fixed-step oriented-body collisions in room coordinates.
let nolan117=null;
function resetNolan117(){nolan117=levelConfig().rule==='nolan'?{time:0,accumulator:0,angle:0}:null;}
function nolanShape117(b){const a=b===player||b.nolanCorpse?nolan117.angle:0,w=b===player?57:b.nolanCorpse?172:b.w,h=b===player?172:b.nolanCorpse?57:b.h;return {cx:b.x+b.w/2,cy:b.y+b.h/2,w,h,a};}
function nolanSAT117(a,b){const axes=[[Math.cos(a.a),Math.sin(a.a)],[-Math.sin(a.a),Math.cos(a.a)],[Math.cos(b.a),Math.sin(b.a)],[-Math.sin(b.a),Math.cos(b.a)]];let depth=Infinity,nx=0,ny=0;for(const [x,y]of axes){const radius=s=>Math.abs(x*Math.cos(s.a)+y*Math.sin(s.a))*s.w/2+Math.abs(-x*Math.sin(s.a)+y*Math.cos(s.a))*s.h/2;const d=(a.cx-b.cx)*x+(a.cy-b.cy)*y,overlap=radius(a)+radius(b)-Math.abs(d);if(overlap<=0)return null;if(overlap<depth){depth=overlap;nx=x*(d<0?-1:1);ny=y*(d<0?-1:1);}}return {depth,nx,ny};}
function nolanBounds117(b,cx,cy){if(b===player||b.nolanCorpse){const a=nolan117.angle,w=b===player?57:172,h=b===player?172:57;b.w=Math.abs(Math.cos(a))*w+Math.abs(Math.sin(a))*h;b.h=Math.abs(Math.sin(a))*w+Math.abs(Math.cos(a))*h;if(b.nolanCorpse){b.age+=1/240;b.angle=a;}}b.x=cx-b.w/2;b.y=cy-b.h/2;}
function nolanTick117(dt){const q=nolan117;q.time+=dt;q.angle=q.time*Math.PI*2/30;const gx=-physics.gravity*Math.sin(q.angle),gy=physics.gravity*Math.cos(q.angle),tx=Math.cos(q.angle),ty=Math.sin(q.angle),dir=Number(keys.right)-Number(keys.left);
 const bodies=[player,...crates,...corpses];const walls=[...solids,{x:bounds.left-200,y:-200,w:200,h:1500},{x:bounds.right,y:-200,w:200,h:1500},{x:-200,y:bounds.top-200,w:2800,h:200},{x:-200,y:bounds.bottom,w:2800,h:200},{x:1055,y:583,w:130,h:25}];
 const jump=jumpBuffer>0&&player.normal117;if(jump){player.vx+=player.normal117.x*physics.jumpSpeed;player.vy+=player.normal117.y*physics.jumpSpeed;jumpBuffer=0;player.normal117=null;}
 for(const b of bodies){const cx=b.x+b.w/2,cy=b.y+b.h/2;nolanBounds117(b,cx,cy);b.vx+=gx*dt;b.vy+=gy*dt;
  if(b===player&&dir){const speed=b.vx*tx+b.vy*ty,force=(b.normal117?2600:750)*dt,change=Math.max(-force,Math.min(force,dir*physics.speed-speed));b.vx+=tx*change;b.vy+=ty*change;b.face=dir;}
  b.vx=Math.max(-1100,Math.min(1100,b.vx));b.vy=Math.max(-1100,Math.min(1100,b.vy));b.normal117=null;b.ground=false;b.x+=b.vx*dt;b.y+=b.vy*dt;
 }
 const contact=(a,b,hit,invA,invB)=>{const total=invA+invB,correction=(hit.depth+.001)/total;a.x+=hit.nx*correction*invA;a.y+=hit.ny*correction*invA;if(invB){b.x-=hit.nx*correction*invB;b.y-=hit.ny*correction*invB;}
  const rvx=a.vx-(b.vx||0),rvy=a.vy-(b.vy||0),vn=rvx*hit.nx+rvy*hit.ny;if(vn<0){const impulse=-vn/total;a.vx+=hit.nx*impulse*invA;a.vy+=hit.ny*impulse*invA;if(invB){b.vx-=hit.nx*impulse*invB;b.vy-=hit.ny*impulse*invB;}}
  const grounded=(body,nx,ny)=>{const normalLoad=-(gx*nx+gy*ny);if(normalLoad<40)return;body.ground=true;body.normal117={x:nx,y:ny};const sx=-ny,sy=nx,v=body.vx*sx+body.vy*sy,along=gx*sx+gy*sy;const friction=normalLoad*(Math.abs(v)<3&&Math.abs(along)<normalLoad*.65?.65:.32)*dt;if(body!==player||!dir){const d=Math.min(Math.abs(v),friction)*Math.sign(v);body.vx-=sx*d;body.vy-=sy*d;}};
  grounded(a,hit.nx,hit.ny);if(invB)grounded(b,-hit.nx,-hit.ny);
 };
 for(let pass=0;pass<4;pass++){for(const b of bodies)for(const wall of walls){const hit=nolanSAT117(nolanShape117(b),{cx:wall.x+wall.w/2,cy:wall.y+wall.h/2,w:wall.w,h:wall.h,a:0});if(hit)contact(b,wall,hit,b===player?1:.25,0);}
  for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const a=bodies[i],b=bodies[j],hit=nolanSAT117(nolanShape117(a),nolanShape117(b));if(hit)contact(a,b,hit,a===player?1:.25,b===player?1:.25);}
 }
 const touching=rect=>{const shape=nolanShape117(player);shape.w+=3;shape.h+=3;return !!nolanSAT117(shape,{cx:rect.x+rect.w/2,cy:rect.y+rect.h/2,w:rect.w,h:rect.h,a:0});};
 if(touching({x:1055,y:583,w:130,h:25})){if(!opened)window.labAudio?.play('button',1120,1);opened=true;}plateDown=opened;
 if(touching({x:wire.x-7,y:wire.y-10,w:14,h:20})||touching({x:panel.x-16,y:panel.y-18,w:32,h:36})){die(true);return false;}
 heat=touching({x:1080,y:870,w:550,h:210})?heat+dt:0;if(heat>=3){die();return false;}
 doorPrevious=doorProgress;doorProgress=Math.min(1,doorProgress+(opened?dt/.22:0));if(opened&&doorProgress>=.99&&touching({x:2000,y:175,w:103,h:200})){finishLevel();return false;}
 player.pushing=false;player.pushPose=0;player.airTime=player.ground?0:(player.airTime||0)+dt;player.landing=0;anim+=dt;return true;
}
function updateNolan117(dt){for(const b of [player,...crates,...corpses]){b.prevX=b.x;b.prevY=b.y;b.prevW=b.w;b.prevH=b.h;}nolan117.accumulator+=dt;jumpBuffer-=dt;while(nolan117&&nolan117.accumulator>=1/240){nolan117.accumulator-=1/240;if(!nolanTick117(1/240))break;}}

let iceQuest=null;
function resetIceQuest(){iceQuest=null;if(levelConfig().rule==='marioKey'){iceQuest={cube:null,key:null,collected:false,armed:false,shards:[],mario:true};return;}if(levelConfig().rule!=='iceKey')return;
 const cube={x:1851,y:227,w:138,h:138,vx:0,vy:0,ground:true,ice:true};crates.push(cube);
 iceQuest={cube,cracked:false,melt:0,pointer:null,key:null,collected:false,armed:false,shards:[]};
}
function marioHeadHit109(surface){
 const q=iceQuest;if(!q?.mario||q.key||surface!==solids[solids.length-4]||player.x+player.w<860||player.x>990)return;
 q.key={x:925,y:surface.y-60,baseY:surface.y-60,born:clock,w:64,h:20};
 window.playIceSound100?.('key',preferences.sound);interfaceHaptic();
}
function iceImpact(b,impact){if(!iceQuest||b!==iceQuest.cube||iceQuest.cracked||b.y+b.h<420||impact<160)return;
 iceQuest.cracked=true;window.playIceSound100?.("crack",preferences.sound);
}
function iceHit(p){const b=iceQuest?.cube;return b&&p.x>=b.x-12&&p.x<=b.x+b.w+12&&p.y>=b.y-12&&p.y<=b.y+b.h+12;}
function updateIceQuest(dt){const q=iceQuest;if(!q)return;
 const b=q.cube;if(b&&q.cracked&&b.ground&&q.pointer!==null){q.melt=Math.min(5,q.melt+dt);if(q.melt>=5){q.key={x:b.x+b.w/2,y:b.y+b.h-60,baseY:b.y+b.h-60,born:clock,w:64,h:20};window.playIceSound100?.("key",preferences.sound);crates=crates.filter(c=>c!==b);q.cube=null;q.pointer=null;}}
 if(q.key&&!q.collected)q.key.y=q.key.baseY+Math.sin((clock-q.key.born)*1.4)*5;
 if(q.key&&!q.collected&&overlaps(player,{x:q.key.x-38,y:q.key.y-26,w:76,h:36})){q.collected=true;interfaceHaptic();}
}
function drawIceQuest(){const q=iceQuest;if(!q)return;const b=q.cube;
 if(b){ctx.save();ctx.translate(b.x+b.w/2,b.y+b.h/2);ctx.rotate(b.angle||0);const size=138,fade=q.melt/5;ctx.globalAlpha=1-fade*.8;ctx.drawImage(window.iceCubeImage,146,144,961,975,-size/2,-size/2,size,size);
 if(q.cracked){ctx.shadowColor="#b0edff";ctx.shadowBlur=3;ctx.strokeStyle='#e1faff';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-62,-49);ctx.lineTo(-18,-15);ctx.lineTo(12,-29);ctx.lineTo(4,9);ctx.lineTo(59,43);ctx.moveTo(4,9);ctx.lineTo(-34,57);ctx.stroke();}
ctx.restore();}
}
let hintPreviousMode='play';
function closeHint(){if($('#hint-modal').hidden)return;$('#hint-modal').hidden=true;if(mode==='hint')mode=hintPreviousMode;clearKeys();}
function showHint(){if(!$('#hint-modal').hidden){closeHint();return;}hintPreviousMode=mode;clearKeys();window.labAudio?.stop('drag');mode='hint';$('#hint-modal-copy').textContent=levelText().hint;$('#hint-modal').hidden=false;}
let floatButton=null,floatTime=0,floatContact=false;
function resetFloatRoom(){
 floatTime=0;floatButton=null;floatContact=false;
 if(levelConfig().rule!=='lowGravity')return;
 floatButton={x:1080,y:455,w:130,h:25,vx:115,vy:-65,phase:2};
 Object.assign(crates[0],{x:760,y:395,vx:170,vy:-105,ground:false,phase:0});
 Object.assign(crates[1],{x:1510,y:430,vx:-155,vy:95,ground:false,phase:4});
}
function floatImpact(b,axis){
 if(!floatButton||!(b===floatButton||b.floating))return;
 if(b===floatButton)floatContact=true;
 if(floatTime<(b.nextImpact||0))return;
 const n=(axis==='x'?player.x+player.w/2-b.x-b.w/2:player.y+player.h/2-b.y-b.h/2)<0?1:-1;
 const v=axis==='x'?'vx':'vy',closing=(player[v]-b[v]*.5)*n;
 if(closing<=8)return;
 const mass=b===floatButton?.7:2.5,impulse=Math.min(220,closing*1.15/(1+1/mass));
 b[v]+=n*impulse/mass; b.nextImpact=floatTime+.08;
 const offset=axis==='x'?(player.y+player.h/2-b.y-b.h/2)/b.h:(player.x+player.w/2-b.x-b.w/2)/b.w;
 b.impactSpin=Math.max(-.9,Math.min(.9,(b.impactSpin||0)+offset*n*impulse*.008*(axis==='x'?-1:1)));
}
function floatMove(b,dt,obstacles){dt*=.5;
 const ox=b.x,oy=b.y;
 b.vx+=Math.sin(floatTime*1.7+b.phase)*65*dt;b.vy+=Math.cos(floatTime*1.3+b.phase)*55*dt;
 b.vx=Math.max(-210,Math.min(210,b.vx));b.vy=Math.max(-145,Math.min(145,b.vy));
 for(const axis of ['x','y']){
 const vel=axis==='x'?'vx':'vy',size=axis==='x'?'w':'h',before=b[axis];b[axis]+=b[vel]*dt;
 if(obstacles.some(wall=>wall!==b&&overlaps(b,wall))){b[axis]=before;b[vel]*=-.85;}
 const lo=axis==='x'?500:265,hi=axis==='x'?1950:790;
 if(b[axis]<lo){b[axis]=lo;b[vel]=Math.abs(b[vel]);}
 if(b[axis]+b[size]>hi){b[axis]=hi-b[size];b[vel]=-Math.abs(b[vel]);}
 }
 b.prevX=ox;b.prevY=oy;b.ground=false;b.onButton=false;
}
function updateFloatRoom(dt){floatContact=!!floatButton&&overlaps(player,floatButton);
 floatTime+=dt*.5;
 const riding=player.ground&&player.vy>=0&&Math.abs(player.y+player.h-floatButton.y)<2&&player.x+player.w>floatButton.x&&player.x<floatButton.x+floatButton.w;
 const fx=floatButton.x,fy=floatButton.y;
 const pad=floatButton,oldPad={x:pad.x,y:pad.y,w:pad.w,h:pad.h,angle:pad.angle||0},cx=pad.x+pad.w/2,cy=pad.y+pad.h/2;
 pad.impactSpin=(pad.impactSpin||0)*Math.exp(-dt*.3);pad.angle=(pad.angle||0)+dt*(.18+pad.impactSpin)*(riding?.1:1);
 pad.w=130*Math.abs(Math.cos(pad.angle))+25*Math.abs(Math.sin(pad.angle));pad.h=130*Math.abs(Math.sin(pad.angle))+25*Math.abs(Math.cos(pad.angle));pad.x=cx-pad.w/2;pad.y=cy-pad.h/2;
 if([...solids,...crates].some(w=>overlaps(pad,w))){Object.assign(pad,oldPad);pad.impactSpin=-.18;}
 floatMove(floatButton,dt,[...solids,...crates]);
 if(riding){const moved={...player,x:player.x+floatButton.x-fx,y:player.y+floatButton.y-fy};if(!solids.some(w=>overlaps(moved,w))){player.x=moved.x;player.y=moved.y;}else{floatButton.x=fx;floatButton.y=fy;floatButton.vx*=-1;floatButton.vy*=-1;}}
 if(overlaps(player,floatButton)){
 const b=floatButton,choices=[{x:b.x-player.w-player.x,y:0},{x:b.x+b.w-player.x,y:0},{x:0,y:b.y-player.h-player.y},{x:0,y:b.y+b.h-player.y}];
 choices.sort((a,c)=>Math.abs(a.x+a.y)-Math.abs(c.x+c.y));const d=choices.find(d=>!solids.some(w=>overlaps({...player,x:player.x+d.x,y:player.y+d.y},w)));
 if(d&&Math.abs(d.x)+Math.abs(d.y)<12){floatImpact(b,d.x?'x':'y');player.x+=d.x;player.y+=d.y;if(d.y<0){player.vy=0;player.ground=true;}}else{floatButton.x=fx;floatButton.y=fy;floatButton.vx*=-1;floatButton.vy*=-1;}
 }

 for(const b of crates){
 if(!b.floating){b.floating=true;b.baseW=b.w;b.baseH=b.h;const cx=b.x+b.w/2,cy=b.y+b.h/2;const diameter=Math.hypot(b.w,b.h,85);b.w=b.h=diameter;b.x=cx-diameter/2;b.y=cy-diameter/2;b.angle=0;b.tumbleX=0;b.tumbleY=0;}
 b.prevAngle=b.angle;b.prevTumbleX=b.tumbleX;b.prevTumbleY=b.tumbleY;
 b.impactSpin=(b.impactSpin||0)*Math.exp(-dt*.18);b.angle+=dt*((b.phase===0?.24:-.19)+b.impactSpin);b.tumbleX+=dt*.17;b.tumbleY+=dt*(b.phase===0?.21:-.16);
 floatMove(b,dt,[...solids,floatButton,...crates.filter(c=>c!==b)]);
 // Move the hero out along the smallest overlap, resolving static platforms too.
 if(overlaps(player,b)){
 const choices=[{x:b.x-player.w-player.x,y:0},{x:b.x+b.w-player.x,y:0},{x:0,y:b.y-player.h-player.y},{x:0,y:b.y+b.h-player.y}];
 choices.sort((a,c)=>Math.abs(a.x+a.y)-Math.abs(c.x+c.y));
 const d=choices.find(d=>!solids.some(w=>overlaps({...player,x:player.x+d.x,y:player.y+d.y},w)));
 if(d&&Math.abs(d.x)+Math.abs(d.y)<12){floatImpact(b,d.x?'x':'y');player.x+=d.x;player.y+=d.y;if(d.y<0){player.vy=0;player.ground=true;}}else{b.x=b.prevX;b.y=b.prevY;b.vx*=-1;b.vy*=-1;}
 }
 }
}

let oneFingerFailed=false;
let trafficTime=0,trafficBolt=null,trafficLinks=[];
function trafficSpark(source){if(levelConfig().rule==='traffic'&&trafficPhase()!==2)trafficLinks.push({x:source.x,y:source.y,life:.1});}
function trafficPhase(){return Math.floor((trafficTime+1e-8)/1)%3;}
function trafficColor(){return ['#ff3038','#ffd434','#45ff78'][trafficPhase()];}
function updateTraffic(dt){trafficLinks=trafficLinks.filter(p=>(p.life-=dt)>0);
 if(trafficBolt){trafficBolt.life-=dt;if(trafficBolt.life<=0)trafficBolt=null;}
 if(levelConfig().rule!=='traffic')return false;
 trafficTime+=dt;
 if(trafficPhase()!==2&&(rawKeys.left||rawKeys.right||rawKeys.jump)){
 const target={x:player.x+player.w/2,y:player.y+player.h*.45,life:.32};
 die(true);trafficBolt=target;return true;
 }return false;
}
function drawTraffic(){
 if(levelConfig().rule!=='traffic')return;
 const color=trafficColor(),y=plateDown?593:585;
 ctx.save();ctx.globalCompositeOperation='screen';ctx.shadowColor=color;ctx.shadowBlur=18;ctx.fillStyle=color;ctx.fillRect(1063,y,114,5);ctx.restore();
 function arc(x,y,endX,endY,seed,strength){
 const tick=Math.floor(clock*30);let rng=(seed*7717+tick*937+19)>>>0;
 const random=()=>{rng=(Math.imul(rng,1664525)+1013904223)>>>0;return rng/4294967296;};
 function split(a,b,rough,depth){if(!depth)return [a,b];const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1,j=(random()-.5)*rough;const mid={x:(a.x+b.x)/2-dy/len*j,y:(a.y+b.y)/2+dx/len*j};const left=split(a,mid,rough*.52,depth-1),right=split(mid,b,rough*.52,depth-1);return left.concat(right.slice(1));}
 const pts=split({x,y},{x:endX,y:endY},strength*3,5);
 const stroke=(points,width,shade,alpha)=>{ctx.globalAlpha=alpha;ctx.lineWidth=width;ctx.strokeStyle=shade;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();};
 const opacity=ctx.globalAlpha*(.7+random()*.3),width=ctx.lineWidth;
 stroke(pts,width*3,'#5d86ff',opacity*.15);stroke(pts,width,'#91bdff',opacity*.65);stroke(pts,Math.max(.45,width*.32),'#f4fcff',opacity);
 for(let i=6;i<27;i+=7){const p=pts[i],next=pts[Math.min(i+4,32)],dx=next.x-p.x,dy=next.y-p.y,side=random()>.5?1:-1;stroke(split(p,{x:next.x-dy*side*.8,y:next.y+dx*side*.8},strength*.55,3),Math.max(.4,width*.3),'#a8c8ff',opacity*.4);}
 ctx.globalAlpha=opacity;
 }
 ctx.save();ctx.strokeStyle=color;ctx.shadowColor='#87aaff';ctx.shadowBlur=7;ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=1.3;
 if(preferences.effects&&trafficPhase()!==2)for(let i=0;i<4;i++){if(Math.sin(Math.floor(clock*18)*2.7+i*5.1)<.1)continue;ctx.globalAlpha=.65;const a=clock*.7+i*1.9;arc(1075+i*29,y,1075+i*29+Math.cos(a)*22,y-14-Math.abs(Math.sin(a))*30,i,7);}
 if(preferences.effects&&trafficPhase()!==2)for(const link of trafficLinks){ctx.globalAlpha=.25*Math.min(1,link.life/.04);ctx.lineWidth=1.05;ctx.shadowBlur=5;arc(1120,y,link.x,link.y,13,20);}
 if(trafficBolt){ctx.globalAlpha=Math.min(1,trafficBolt.life*8);ctx.strokeStyle='#b5eaff';ctx.shadowColor='#68caff';ctx.lineWidth=2.3;arc(1120,y,trafficBolt.x,trafficBolt.y,8,26);}
 ctx.restore();
}

function roomGravity(){return physics.gravity/(levelConfig().rule==='lowGravity'?3:1);}
function spawn(){player={x:390,y:748-hero.hitHeight,w:hero.width,h:hero.hitHeight,vx:0,vy:0,ground:true,face:1,pushing:false,pushPose:0,landing:0,airTime:0};if(levelConfig().rule==='pinchHero'){player.x=220;player.modelScale=2.6;player.w=hero.width*2.6;player.h=hero.hitHeight*2.6;player.y=748-player.h;}player.prevX=player.x;player.prevY=player.y;heat=0;anim=0;jumpBuffer=0;coyote=0;}
function resetRoom(){resetLevelRules();crates=[{x:667,y:248,w:126,h:105,vx:0,vy:0,ground:true},{x:1755,y:632,w:138,h:118,vx:0,vy:0,ground:true}];spawn();resetFloatRoom();resetJellies();resetIceQuest();resetFlood();resetHydraulic111();resetNolan117();}
function reset(){keyboardClear();corpses=[];shocks=[];particles=[];deaths=0;resetRoom();levelLabels();}
function legacyBeep(f=440,d=.08,type='sine'){if(!sound)return;try{audio??=new AudioContext();audio.resume();let o=audio.createOscillator(),g=audio.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.045,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+d);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+d)}catch{}}
function beep(){}
function overlaps(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}

function die(electric=false,cause=null){if(nolan117){deaths++;haptic(electric);window.labAudio?.play(electric?'shock':'thud',player.x,1);clearKeys();const cx=player.x+player.w/2,cy=player.y+player.h/2;corpses=[{x:cx-86,y:cy-28.5,w:172,h:57,vx:player.vx,vy:player.vy,face:player.face,ground:false,age:0,settled:0,angle:nolan117.angle,spin:0,electric,nolanCorpse:true}];spawn();return;}if(flood?.dead)return;
 const foot=player.y+player.h;
 corpses=[{x:player.x-15,y:foot-92,w:92,h:92,vx:player.vx*.25-player.face*65,vy:-210,face:player.face,ground:false,age:0,settled:0,angle:0,spin:player.face*2.0,electric}];
 shocks=[];
 deaths++;haptic(electric);window.labAudio?.play(electric?"shock":"thud",player.x,1);clearKeys();if(flood&&cause!=='water'){spawn();flood.breath=0;syncFloodRefresh108();return;}if(flood){flood.dead=true;syncFloodRefresh108();player.x=player.prevX=-5000;player.vx=player.vy=0;player.ground=false;window.labAudio?.stop('drag');return;}if(levelConfig().rule==='stack'){spawn();}else if(levelConfig().rule==='jellyfish'){const savedJellies=jellies,savedTime=jellyTime,savedRandom=jellyRandomState;resetRoom();jellies=savedJellies;jellyTime=savedTime;jellyRandomState=savedRandom;}else resetRoom();
}
// Trapezoidal pressure plate: sloping shoulders and a level weight-bearing top.
let plate={left:1055,right:1185,ramp:22,base:608};
const lowerPlate={left:1400,right:1530,ramp:22,base:824};
function plateSurface(x){const height=levelConfig().rule==='frozen'&&thawTime<5?60.67-35.67*(thawTime/5):plateDown?17:25;return plate.base-height*Math.max(0,Math.min(1,(x-plate.left)/plate.ramp,(plate.right-x)/plate.ramp));}
function supportPlate(body,oldFoot,dt){if(body===player&&gravityUp){body.onButton=false;return;}if(levelConfig().rule==='lowGravity'){body.onButton=false;body.onLowerButton=false;return;}
 supportOnePlate(body,oldFoot,dt);
 if(levelConfig().rule!=='lowerCrate'){body.onLowerButton=false;return;}
 const upper=plate,upperDown=plateDown,upperContact=body.onButton;
 plate=lowerPlate;plateDown=lowerPlateDown;body.onButton=body.onLowerButton;
 supportOnePlate(body,oldFoot,dt);body.onLowerButton=body.onButton;
 plate=upper;plateDown=upperDown;body.onButton=upperContact;
}
function supportOnePlate(body,oldFoot,dt){
 const wasOnButton=body.onButton;body.onButton=false;
 if(oldFoot>plate.base+2||body.vy<0)return;
 let sample=body.x+body.w/2;
 if(crates.includes(body)){if(body.x>=plate.right||body.x+body.w<=plate.left)return;sample=Math.max(body.x,Math.min(body.x+body.w,(plate.left+plate.right)/2));}
 if(sample<=plate.left||sample>=plate.right)return;
 let surface=plateSurface(sample);
 if(body.y+body.h<surface-.5&&!wasOnButton&&!(body.ground&&oldFoot>=surface-26))return;
 if(body===player&&!keys.left&&!keys.right&&(sample<plate.left+plate.ramp||sample>plate.right-plate.ramp)){
  const slide=sample<(plate.left+plate.right)/2?-1:1;body.x+=slide*28*dt;sample=body.x+body.w/2;surface=plateSurface(sample);
 }
 body.y=Math.min(plate.base-8,surface)-body.h;body.vy=0;body.ground=true;body.onButton=true;
}
function moveBody(body,dt,obstacles=solids,push=false,substep=false){
 if(body===player&&levelConfig().rule==='superSpeed'&&!substep){const n=Math.max(1,Math.ceil(Math.max(Math.abs(body.vx),Math.abs(body.vy))*dt/6));for(let i=0;i<n;i++)moveBody(body,dt/n,obstacles,push,true);return;}

 const oldFoot=body.y+body.h;
 body.x+=body.vx*dt;
 for(const s of obstacles)if(s!==body&&overlaps(body,s)){
  if(body===player){floatImpact(s,'x');waterContact105(s,'x');}
  if(body.rotating&&body.prevY+body.prevH<=s.y+30)continue;
  if(push&&!(levelConfig().rule==='superSpeed'&&dash122)&&levelConfig().rule!=='lowGravity'&&crates.includes(s)&&!s.submergedDrift&&!s.tipping&&!s.rotating&&body.ground&&(Number(keys.right)-Number(keys.left))===Math.sign(body.vx)&&Math.abs(body.vx)>0){
   body.pushing=true;body.pushElapsed=(body.pushElapsed||0)+dt;
   const before=s.x,sign=Math.sign(body.vx);s.vx=sign*45;
   const grounded=s.ground,fall=s.vy;s.vy=0;if(body.pushElapsed>=.28)moveBody(s,dt,[...solids,...crates.filter(c=>c!==s)],false);s.vy=fall;s.ground=grounded;
   if(Math.abs(s.x-before)>.001)body.vx=sign*45;else body.vx=0;
  }else if(push&&crates.includes(s)){body.vx=0;}
  if(body.x+body.w/2<s.x+s.w/2)body.x=s.x-body.w;else body.x=s.x+s.w;if(body===player&&levelConfig().rule==='superSpeed'&&dash122){body.vx=0;dash122=0;keys.left=keys.right=false;}
 }
 const unclampedX122=body.x;body.x=Math.max(bounds.left,Math.min(bounds.right-body.w,body.x));if(body===player&&levelConfig().rule==='superSpeed'&&unclampedX122!==body.x){dash122=0;body.vx=0;keys.left=keys.right=false;}
 body.y+=body.vy*dt;body.ground=false;
 for(const s of obstacles)if(s!==body&&overlaps(body,s)){
  const impactVy=body.vy;if(body===player){floatImpact(s,'y');waterContact105(s,'y');}
  if(impactVy>0){body.y=s.y-body.h;body.ground=true}
  else if(impactVy<0){body.y=s.y+s.h;if(body===player)marioHeadHit109(s);}
  body.vy=0;
 }
 supportPlate(body,oldFoot,dt);
 if(body.y<bounds.top){body.y=bounds.top;body.vy=Math.max(0,body.vy)}
 if(body.y+body.h>bounds.bottom){body.y=bounds.bottom-body.h;body.vy=0;body.ground=true}
}
// Screen-space rotation, fixed-step edge torque and conservative rotated bounds.
function crateShape(b,cx,cy){
 const c=Math.abs(Math.cos(b.angle)),s=Math.abs(Math.sin(b.angle));
 b.w=b.baseW*c+b.baseH*s;b.h=b.baseW*s+b.baseH*c;b.x=cx-b.w/2;b.y=cy-b.h/2;
}
let waterFx105=[],waterRipples106=[],lastSplash106=-100;
function splash105(x,speed,width=40){if(!flood||speed<110)return;waterRipples106.push({x,y:flood.y,age:0,width});if(clock-lastSplash106>.22){lastSplash106=clock;if(preferences.sound)window.playSplash106?.(.09+Math.min(1,speed/700)*.07);}for(let i=0;i<18;i++)waterFx105.push({x:x+(i/17-.5)*width,y:flood.y,vx:(i-8.5)*9,vy:-Math.min(135,35+speed*.12)*(1-Math.abs(i-8.5)/11),life:.5+i%3*.08});}
function waterContact105(b,axis){if(!flood||!b.submergedDrift)return;const relative=axis==='x'?player.vx-(b.vx||0):player.vy-(b.vy||0);if(Math.abs(relative)<5)return;const impulse=Math.max(-55,Math.min(55,relative*.16));if(axis==='x')b.vx=Math.max(-75,Math.min(75,(b.vx||0)+impulse));else b.vy=Math.max(-90,Math.min(90,(b.vy||0)+impulse));b.spin=(b.spin||0)+impulse*.001;}
function updateBuoyantCrate104(b,dt){
 if(!flood||b.ice)return false;
 // Engage only once the top is underwater. Keep collision bounds fixed while drifting.
 if(!b.submergedDrift){if(b.y>flood.y+8&&floodAllows(b.x+b.w/2,Math.min(H-1,b.y+b.h/2))){b.submergedDrift=true;b.waterSeed=crates.indexOf(b)*2.399;b.vy=Math.min(100,b.vy);b.tipping=null;b.rotating=false;b.ignoreSupport=null;}else return false;}
 const rider=player.ground&&Math.abs(player.y+player.h-b.y)<4&&player.x+player.w>b.x+3&&player.x<b.x+b.w-3;
 b.prevX=b.x;b.prevY=b.y;b.prevW=b.w;b.prevH=b.h;b.prevAngle=b.angle||0;
 const t=flood.arc,seed=b.waterSeed;
 let ay=-35+30*Math.sin(t*.51+seed)+20*Math.sin(t*.23-seed);
 if(b.y<flood.y+35)ay+=(flood.y+35-b.y)*7;
 if(rider)ay+=35;
 b.vy=Math.max(-60,Math.min(100,(b.vy+ay*dt)*Math.exp(-1.7*dt)));
 b.vx=Math.max(-75,Math.min(75,(b.vx+(16*Math.sin(t*.37+seed)+9*Math.cos(t*.71-seed))*dt)*Math.exp(-.8*dt)));
 b.angle??=0;b.spin??=0;const rest=Math.round(b.angle/(Math.PI/2))*Math.PI/2;
 b.spin+=((rest+.11*Math.sin(t*.6+seed)-b.angle)*3-b.spin*3)*dt;b.angle+=b.spin*dt;
 moveBody(b,dt,[...solids,...crates.filter(c=>c!==b)]);
 if(rider){player.x+=b.x-b.prevX;player.y+=b.y-b.prevY;}
 b.impact=0;return true;
}
function drawWaterFx105(){if(!flood||!preferences.effects)return;ctx.save();ctx.strokeStyle='rgba(195,234,241,.55)';ctx.lineWidth=1.2;for(const r of waterRipples106){ctx.globalAlpha=(1-r.age/1.25)*.65;ctx.beginPath();ctx.ellipse(r.x,flood.y,r.width*.4+r.age*70,2+r.age*5,0,0,Math.PI*2);ctx.stroke();}ctx.fillStyle='rgba(184,228,237,.65)';for(const p of waterFx105){ctx.globalAlpha=Math.min(1,p.life*2);ctx.beginPath();ctx.ellipse(p.x,p.y,1.5,3,0,0,Math.PI*2);ctx.fill();}ctx.restore();}

function updateCrate(b,dt){
 if(updateBuoyantCrate104(b,dt))return;
 b.baseW??=b.w;b.baseH??=b.h;b.angle??=0;b.spin??=0;
 b.prevX=b.x;b.prevY=b.y;b.prevW=b.w;b.prevH=b.h;b.prevAngle=b.angle;
 const obstacles=[...solids,...crates.filter(c=>c!==b)];
 if(b.ground&&!b.rotating&&!b.tipping&&!b.onButton){
  const foot=b.y+b.h,cx=b.x+b.w/2;
  const support=obstacles.filter(s=>Math.abs(s.y-foot)<1.5&&b.x<s.x+s.w&&b.x+b.w>s.x);
  if(support.length){const left=Math.min(...support.map(s=>s.x)),right=Math.max(...support.map(s=>s.x+s.w));
   if(cx>right+.05||cx<left-.05){const edge=cx>right?right:left;
    b.tipping={x:edge,y:foot,dx:cx-edge,dy:-b.h/2,start:b.angle,support:support[0]};b.spin=Math.sign(cx-edge)*.12;b.ground=false;b.onButton=false;
   }
  }
 }
 if(b.tipping){
  const t=b.tipping,a=b.angle-t.start,rx=t.dx*Math.cos(a)-t.dy*Math.sin(a),ry=t.dx*Math.sin(a)+t.dy*Math.cos(a);
  const inertia=(b.baseW*b.baseW+b.baseH*b.baseH)/12+t.dx*t.dx+t.dy*t.dy;
  b.spin+=roomGravity()*rx/inertia*dt;b.angle+=b.spin*dt;
  const na=b.angle-t.start,nx=t.dx*Math.cos(na)-t.dy*Math.sin(na),ny=t.dx*Math.sin(na)+t.dy*Math.cos(na);
  crateShape(b,t.x+nx,t.y+ny);b.vx=-ny*b.spin;b.vy=nx*b.spin;
  if(Math.abs(na)>.65){b.ignoreSupport=t.support;b.tipping=null;b.rotating=true;}
  return;
 }
 const falling=!b.ground,impact=b.vy;
 if(b.rotating){const cx=b.x+b.w/2,cy=b.y+b.h/2;b.angle+=b.spin*dt;b.spin*=Math.exp(-.15*dt);crateShape(b,cx,cy);}
 else b.vx=0;
 b.vy=Math.min(b.vy+roomGravity()*dt,1300);
 moveBody(b,dt,obstacles.filter(s=>s!==b.ignoreSupport));
 if(b.ground){
  if(falling&&impact>100){iceImpact(b,impact);if(!b.ice)window.labAudio?.play('crateDrop',b.x,Math.min(1,impact/700));b.impact=1;
   b.settleAngle=Math.round((b.angle+b.spin*.07)/(Math.PI/2))*Math.PI/2;
   b.spin*=.22;if(impact>220){b.vy=-Math.min(70,impact*.09);b.ground=false;}
  }
  if(b.rotating&&b.ground){
   b.settleAngle??=Math.round(b.angle/(Math.PI/2))*Math.PI/2;
   const foot=b.y+b.h,cx=b.x+b.w/2;b.spin+=(b.settleAngle-b.angle)*95*dt;b.spin*=Math.exp(-14*dt);b.angle+=b.spin*dt;
   crateShape(b,cx,0);b.y=foot-b.h;b.vx=0;
   if(Math.abs(b.angle-b.settleAngle)<.003&&Math.abs(b.spin)<.03){b.angle=b.settleAngle;b.spin=0;crateShape(b,cx,0);b.y=foot-b.h;b.rotating=false;b.ignoreSupport=null;b.settleAngle=null;}
  }
 }
 b.impact=Math.max(0,(b.impact||0)-dt*5);
}

function toast(s){}
function overlay(title,desc,button){$('#overlay').style.display='grid';$('h1').textContent='';$('section p').textContent='';$('#play').textContent=mode==='win'?'↻':'▶';}
const preferences={sound:true,music:true,vibration:true,effects:true};
try{Object.assign(preferences,JSON.parse(localStorage.getItem('shadow-settings')||'{}'));}catch{}
window.iceSoundEnabled100=()=>preferences.sound;
function savePreferences(){try{localStorage.setItem('shadow-settings',JSON.stringify(preferences));}catch{}}
function syncPreferences(){sound=preferences.sound;window.labAudio?.setEnabled(sound);window.labAudio?.setMusicEnabled(preferences.music);for(const key of ['sound','music','vibration']){const el=$('#'+key);el.setAttribute?.('aria-label',({sound:'Звук',vibration:'Вибрация',music:'Музыка'}[key])+' · '+(preferences[key]?'вкл':'выкл'));el.setAttribute?.('aria-pressed',String(preferences[key]));}}
function haptic(electric=false){if(!preferences.vibration)return;try{const feedback=window.Telegram?.WebApp?.HapticFeedback;if(feedback){feedback.impactOccurred(electric?'rigid':'light');if(electric)setTimeout(()=>{if(preferences.vibration)try{feedback.impactOccurred('rigid')}catch{}},50);}else if(typeof navigator!=='undefined')navigator.vibrate?.(electric?50:10);}catch{}}
function panelVisible(show){if(!show)keyboardClose();$('#pause-dismiss').hidden=!show;$('#pause-panel').classList[show?'add':'remove']('open');$('#pause-panel').inert=!show;$('#pause').setAttribute?.('aria-expanded',String(show));}
function pause(){pinchPointers.clear();pinchStart=null;swipeStart=null;if(mode==='play'){mode='pause';clearKeys();panelVisible(true);}else if(mode==='pause'){mode='play';panelVisible(false);}}
function clearKeys(){dash122=0;push122=false;morse119.pointer=null;morse119.held=0;window.hydraulicSound111?.(false);if(iceQuest){iceQuest.pointer=null;if(iceQuest.cube)iceQuest.melt=0;}inputQueue=[];rawKeys={};if(thawTime<5)thawTime=0;warmPointer=null;heroDrag=null;knockPointer=null;for(let k in keys)keys[k]=false;document.querySelectorAll('[data-key]').forEach(b=>b.classList.remove('active'))}
$('#play').onclick=()=>{if(mode!=='pause')reset();mode='play';$('#overlay').style.display='none';beep(330)};
function restart(){reset();mode='play';panelVisible(false);$('#overlay').style.display='none';clearKeys()}
$('#hint').onclick=e=>{e.stopPropagation();showHint();};
document.addEventListener('pointerdown',e=>{if(!$('#hint-modal').hidden){e.preventDefault();e.stopImmediatePropagation();closeHint();}},true);
$('#hint-modal').onclick=e=>{e.preventDefault();e.stopPropagation();closeHint();};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#hint-modal').hidden){e.preventDefault();e.stopImmediatePropagation();closeHint();}},true);
$('#flood-refresh').onclick=e=>{e.preventDefault();e.stopPropagation();if(flood?.dead)restart();};$('#pause').onclick=pause;$('#pause-dismiss').onpointerdown=e=>{e.preventDefault();e.stopPropagation();if(mode==='pause')pause();};
function menuPage(id){for(const name of ['home','levels','settings'])$('#menu-'+name).hidden=name!==id;}
function menuSettings(){for(const key of ['sound','music','vibration']){$('#menu-'+key).textContent=({sound:'Звук',music:'Музыка',vibration:'Вибрация'}[key])+' · '+(preferences[key]?'вкл':'выкл');$('#menu-'+key).setAttribute?.('aria-pressed',String(preferences[key]));}}
function showMainMenu(){mode='menu';clearKeys();panelVisible(false);$('#overlay').style.display='none';$('#main-menu').hidden=false;menuPage('home');menuSettings();window.hero3d.showMenu?.(true);syncFloodValve103();}
function continueGame(){mode='play';$('#main-menu').hidden=true;window.hero3d.showMenu?.(false);clearKeys();syncFloodValve103();}
$('#menu').onclick=showMainMenu;$('#continue-game').onclick=continueGame;
$('#show-levels').onclick=()=>menuPage('levels');$('#show-settings').onclick=()=>{menuSettings();menuPage('settings');};
$('#back-levels').onclick=$('#back-settings').onclick=()=>menuPage('home');$('#level-one').onclick=()=>{reset();continueGame();};
for(const key of ['sound','music','vibration'])$('#menu-'+key).onclick=()=>{preferences[key]=!preferences[key];syncPreferences();savePreferences();menuSettings();};
for(const key of ['sound','music','vibration'])$('#'+key).onclick=()=>{preferences[key]=!preferences[key];syncPreferences();savePreferences();};syncPreferences();
const mapping={ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',Space:'jump',ArrowUp:'jump',KeyW:'jump'};
addEventListener('keydown',e=>{if(mapping[e.code]){e.preventDefault();controlDown(mapping[e.code]);}if(e.code==='KeyR')restart();if(e.code==='Escape')pause();});
addEventListener('keyup',e=>{if(mapping[e.code])controlUp(mapping[e.code]);});addEventListener('blur',()=>{clearKeys();if(mode==='play')pause();});
document.querySelectorAll('[data-key]').forEach(b=>{b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);controlDown(b.dataset.key);b.classList.add('active');};const release=()=>{controlUp(b.dataset.key);b.classList.remove('active');};b.onpointerup=release;b.onpointercancel=release;b.onlostpointercapture=release;});
function controlAction(key){if(levelConfig().rule==='dragHero')return null;return levelConfig().rule==='remap'?({jump:'right',left:'jump',right:'left'}[key]):key;}
function activateWordButton(){if(mode==='play'&&levelConfig().rule==='wordButton'){wordOpened=true;opened=true;interfaceHaptic();}}
$('#objective').onclick=e=>{if(e.target?.dataset?.wordButton)activateWordButton();};
function applyControl(key,down){const a=controlAction(key);if(!a)return;
 if(levelConfig().rule==='superSpeed'&&(a==='left'||a==='right')){if(!down){keys[a]=false;if(push122){push122=false;player.vx=0;}return;}if(dash122)return;const sign=a==='right'?1:-1;const adjacent=player.ground&&crates.some(b=>Math.abs((sign>0?b.x-player.x-player.w:player.x-b.x-b.w))<10&&player.y<b.y+b.h&&player.y+player.h>b.y);keys.left=keys.right=false;keys[a]=true;push122=adjacent;if(!adjacent){dash122=sign;player.vx=sign*4200;}player.face=sign;return;}
if(!down){keys[a]=false;return;}
 if(a==='left'&&levelConfig().rule==='noLeft'){leftFailed=true;opened=false;}
 if(a==='jump'&&!keys.jump){if(levelConfig().rule==='flipGravity'){gravityUp=!gravityUp;player.inverted=gravityUp;player.vy=0;player.ground=false;player.onButton=false;jumpBuffer=0;coyote=0;}else jumpBuffer=.13;}
 keys[a]=true;
}
function controlDown(key){if(mode!=='play'||rawKeys[key])return;rawKeys[key]=true;if(levelConfig().rule==='oneFinger'&&Object.values(rawKeys).filter(Boolean).length>1){oneFingerFailed=true;opened=false;}if(levelConfig().rule==='inputLag')inputQueue.push({key,down:true,time:clock+1});else applyControl(key,true);}
function controlUp(key){if(!rawKeys[key])return;rawKeys[key]=false;if(levelConfig().rule==='inputLag'&&mode==='play')inputQueue.push({key,down:false,time:clock+1});else applyControl(key,false);}
function moveInvertedHero(dt){
 const obstacles=[...solids,...crates].map(s=>({...s,y:H-s.y-s.h}));
 player.y=H-player.y-player.h;player.vy=-player.vy;
 const top=bounds.top,bottom=bounds.bottom;bounds.top=H-bottom;bounds.bottom=H-top;
 moveBody(player,dt,obstacles,false);
 bounds.top=top;bounds.bottom=bottom;player.y=H-player.y-player.h;player.vy=-player.vy;player.onButton=false;
}
function screenPoint(e){const r=canvas.getBoundingClientRect(),m=new DOMMatrix(getComputedStyle($('#game')).transform),p=new DOMPoint(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2)).matrixTransform(m.inverse());return {x:(p.x/canvas.clientWidth+.5)*W,y:(p.y/canvas.clientHeight+.5)*H};}
function scenePress(p,id){if(mode==='play'&&levelConfig().rule==='morse'&&p.x>=1035&&p.x<=1205&&p.y>=550&&p.y<=635){if(morse119.pointer===null&&!opened){morse119.pointer=id;morse119.held=0;plateDown=true;interfaceHaptic();window.labAudio?.play('button',1120,1);}return true;}if(mode==='play'&&iceQuest?.cracked&&iceQuest.cube?.ground&&iceHit(p)){if(iceQuest.pointer===null){iceQuest.pointer=id;iceQuest.melt=0;}return true;}if(mode!=='play')return false;if(gesturePress(p,id))return true;if(mode!=='play')return false;if(levelConfig().rule==='frozen'&&thawTime<5&&p.x>=1035&&p.x<=1205&&p.y>=520&&p.y<=615){if(warmPointer===null){warmPointer=id;thawTime=0;}return true;}if(levelConfig().rule==='knock'&&p.x>=1980&&p.x<=2125&&p.y>=170&&p.y<=365){if(knockPointer===null){knockPointer=id;knockCount=Math.min(3,knockCount+1);interfaceHaptic();}return true;}if(levelConfig().rule==='touch'&&p.x>=1045&&p.x<=1195&&p.y>=570&&p.y<=620){if(!touchPressed)window.labAudio?.play('button',1120,1);touchPressed=true;interfaceHaptic();return true;}if(levelConfig().rule==='dragHero'&&!heroDrag&&p.x>=player.x-25&&p.x<=player.x+player.w+25&&p.y>=player.y-20&&p.y<=player.y+player.h+10){heroDrag={id,x:player.x,y:player.y,dx:p.x-player.x,dy:p.y-player.y};return true;}return false;}
function sceneMove(p,id){if(iceQuest?.pointer===id&&!iceHit(p)){iceQuest.pointer=null;iceQuest.melt=0;}gestureMove(p,id);if(warmPointer===id&&(p.x<1035||p.x>1205||p.y<520||p.y>615)){warmPointer=null;if(thawTime<5)thawTime=0;}if(heroDrag?.id===id){heroDrag.x=Math.max(bounds.left,Math.min(bounds.right-player.w,p.x-heroDrag.dx));heroDrag.y=Math.max(bounds.top,Math.min(bounds.bottom-player.h,p.y-heroDrag.dy));}}
function sceneRelease(id){if(levelConfig().rule==='morse'&&morse119.pointer===id){const symbol=morse119.held>=.6?'-':'.',expected='...---...';morse119.code+=symbol;morse119.index=symbol===expected[morse119.index]?morse119.index+1:(symbol==='.'?1:0);if(!expected.startsWith(morse119.code))morse119.code=symbol==='.'?'.':'';morse119.pointer=null;morse119.held=0;plateDown=false;if(morse119.index===9)opened=true;}if(iceQuest?.pointer===id){iceQuest.pointer=null;iceQuest.melt=0;}gestureRelease(id);if(warmPointer===id){warmPointer=null;if(thawTime<5)thawTime=0;}if(knockPointer===id)knockPointer=null;if(heroDrag?.id===id){heroDrag=null;player.vx=0;player.vy=0;}}
canvas.onpointerdown=e=>{if(scenePress(screenPoint(e),e.pointerId)){e.preventDefault();canvas.setPointerCapture(e.pointerId);}};
canvas.onpointercancel=e=>{pinchPointers.delete(e.pointerId);pinchStart=null;if(swipeStart?.id===e.pointerId)swipeStart=null;};
canvas.onpointermove=e=>{if(iceQuest?.pointer===e.pointerId||pinchPointers.has(e.pointerId)||swipeStart?.id===e.pointerId||heroDrag?.id===e.pointerId||warmPointer===e.pointerId){e.preventDefault();sceneMove(screenPoint(e),e.pointerId);}};
canvas.onpointerup=canvas.onpointercancel=canvas.onlostpointercapture=e=>sceneRelease(e.pointerId);

function update(dt){if(mode==='transition'){roomSlide.time+=dt;if(roomSlide.time>=.55){roomSlide=null;mode='play';clearKeys();}return;}if(mode!=='play')return;advanceFlood(dt);if(updateHydraulic111(dt))return;clock+=dt;if(updateTraffic(dt))return;while(inputQueue.length&&inputQueue[0].time<=clock+1e-8){const event=inputQueue.shift();applyControl(event.key,event.down);}if(toastTime>0){toastTime-=dt;if(toastTime<=0)$('#toast').textContent=''}
 player.prevX=player.x;player.prevY=player.y;player.pushing=false;
 for(const s of shocks)s.life-=dt;shocks=shocks.filter(s=>s.life>0);
 nextPanelSpark-=dt;if(nextPanelSpark<=0){trafficSpark(panel);nextPanelSpark=5+Math.random()*2;window.labAudio?.play("spark",panel.x,.4);for(let i=0;i<9;i++)particles.push({x:panel.x,y:panel.y,vx:-30-Math.random()*100,vy:-35+Math.random()*90,life:.3+Math.random()*.45})}
 flash=Math.max(0,flash-dt);nextSpark-=dt;
 if(nextSpark<=0){trafficSpark(wire);nextSpark=5+Math.random()*2;window.labAudio?.play("spark",wire.x,.4);flash=.13+Math.random()*.1;for(let i=0;i<7;i++)particles.push({x:wire.x,y:wire.y,vx:(Math.random()-.5)*55,vy:25+Math.random()*65,life:.4+Math.random()*.45});}
 for(const p of particles){p.vy+=230*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt}particles=particles.filter(p=>p.life>0);
 
 if(nolan117){updateNolan117(dt);return;}if(levelConfig().rule==='lowGravity')updateFloatRoom(dt);else for(const box of crates){const oldFoot=box.y+box.h,speed=box.vy;updateCrate(box,dt);if(flood&&oldFoot<flood.y&&box.y+box.h>=flood.y)splash105(box.x+box.w/2,speed,box.w);}
 for(const body of corpses){
  if(flood&&updateBuoyantCrate104(body,dt)){body.age+=dt;body.settled=0;continue;}
  body.age+=dt;body.settled=body.ground?body.settled+dt:0;const impact=body.vy,wasGround=body.ground;
  body.vy=Math.min(body.vy+roomGravity()*dt,1300);body.vx*=Math.exp(-(body.ground?12:.6)*dt);
  moveBody(body,dt,[...solids,...crates]);
  if(body.ground){/* The body lands once; the cape does not create a second contact. */
   body.angle+=(body.face*Math.PI/2-body.angle)*Math.min(1,18*dt);body.spin*=Math.exp(-12*dt);
  }else body.angle+=body.spin*dt;
 }

 if(flood?.dead){window.labAudio?.stop('drag');return;}
 anim+=dt*(player.pushing?1:Math.min(1,Math.abs(player.vx)/physics.speed));jumpBuffer-=dt;coyote=player.ground?.1:coyote-dt;
 const dir=levelConfig().rule==='superSpeed'?(dash122||(push122?Number(keys.right)-Number(keys.left):0)):Number(keys.right)-Number(keys.left);if(dir)player.face=dir;
 if(levelConfig().rule!=='flipGravity'&&jumpBuffer>0&&coyote>0){player.vy=-physics.jumpSpeed*(levelConfig().rule==='superSpeed'?Math.sqrt(440/255):1)*(floodWet()?.85:1);player.ground=false;coyote=0;jumpBuffer=0;beep(460,.06)}
 const target=dir*(player.ground?physics.speed:physics.airSpeed)*(floatButton?.5:1)*(levelConfig().rule==='superSpeed'?3.5:1)*(floodWet()?.5:1),accel=levelConfig().rule==='superSpeed'?(dir?(player.ground?13000:3800):(player.ground?1800:350)):floodWet()?(dir?2200:1700):(dir?9000:12000);
 if(levelConfig().rule==='superSpeed')player.vx=dash122?dash122*4200:push122?dir*45:0;else player.vx+=Math.max(-accel*dt,Math.min(accel*dt,target-player.vx));
 if(['corpse','stack'].includes(levelConfig().rule)&&dir&&player.ground){for(const body of corpses){if(body.ground&&Math.abs(player.y+player.h-(body.y+body.h))<110&&((dir>0&&body.x>=player.x&&body.x-player.x-player.w<18)||(dir<0&&body.x<player.x&&player.x-body.x-body.w<18))){body.vx=dir*95;}}}
 const wasAirborne=!player.ground;
 player.vy=Math.max(-1300,Math.min(player.vy+roomGravity()*dt*(gravityUp?-1:1),1300));if(flood&&floodWet()){const depth=Math.max(0,Math.min(1,(player.y+player.h-flood.y)/player.h));player.vy=(player.vy-physics.gravity*.5*depth*dt)*Math.exp(-3.2*depth*dt);}if(heroDrag&&levelConfig().rule==='dragHero'){player.onButton=false;player.vx=Math.max(-1500,Math.min(1500,(heroDrag.x-player.x)/dt));player.vy=Math.max(-1500,Math.min(1500,(heroDrag.y-player.y)/dt));if(Math.abs(player.vx)>1)player.face=Math.sign(player.vx);}if(gravityUp)moveInvertedHero(dt);else moveBody(player,dt,[...solids,...crates,...(floatButton?[floatButton]:[])],true);
 if(flood&&player.prevY+player.h<flood.y&&player.y+player.h>=flood.y)splash105(player.x+player.w/2,player.vy,40);
 player.airTime=player.ground?0:player.airTime+dt;
 player.landing=player.ground&&wasAirborne?.12:Math.max(0,player.landing-dt);
 if(!player.pushing)player.pushElapsed=0;
 if(player.ground&&wasAirborne)window.labAudio?.play('step',player.x,.75);
 if(player.ground&&Math.abs(player.vx)>5){stepTravel+=Math.abs(player.x-player.prevX);if(stepTravel>165){stepTravel-=165;window.labAudio?.play('step',player.x,player.pushing?.5:.65);}}
 if(player.pushing&&clock>nextScrape){nextScrape=clock+.22;window.labAudio?.play('drag',player.x,.5);}
 player.pushPose+=((player.pushing?1:0)-player.pushPose)*Math.min(1,dt*20);

 if(!player.pushing||Math.abs(player.vx)<1)window.labAudio?.stop('drag');

 if(checkFlood(dt))return;
 updateIceQuest(dt);
 if(updateJellies(dt))return;
 updateLevelRules(dt);if(levelConfig().rule==='remap'&&player.onButton){die(true);return;}doorPrevious=doorProgress;doorProgress=Math.max(0,Math.min(1,doorProgress+(opened&&levelConfig().rule!=='illusion'?1:-1)*dt/.22));
 const inRed=!floodWet()&&player.x+player.w>1080&&player.x<1630&&player.y+player.h>870;heat=inRed?heat+dt:0;if(heat>=3){die();return}
 // Only actual contact with the exposed tip kills; falling sparks are decorative.
 if(overlaps(player,{x:wire.x-7,y:wire.y-10,w:14,h:20})||overlaps(player,{x:panel.x-16,y:panel.y-18,w:32,h:36})){die(true);return}
 if(opened&&(!['iceKey','marioKey'].includes(levelConfig().rule)||doorProgress>=.99)&&overlaps(player,{x:2000,y:175,w:103,h:200})){finishLevel()}
}
function drawImage(name,x,y,w,h){if(images[name])ctx.drawImage(images[name],x,y,w,h)}
let plateBackdrop,plate13Patch;
function drawPlateBackdrop(){
 if(!plateBackdrop){
  const x=1015,y=535,w=210,h=65,im=images.room;
  plateBackdrop=document.createElement('canvas');plateBackdrop.width=w;plateBackdrop.height=h;
  const c=plateBackdrop.getContext('2d');
  c.drawImage(im,x/W*im.width,y/H*im.height,w/W*im.width,h/H*im.height,0,0,w,h);
  c.globalCompositeOperation='destination-in';
  let mask=c.createLinearGradient(0,0,w,0);mask.addColorStop(0,'transparent');mask.addColorStop(.15,'#000');mask.addColorStop(.85,'#000');mask.addColorStop(1,'transparent');c.fillStyle=mask;c.fillRect(0,0,w,h);
  mask=c.createLinearGradient(0,0,0,h);mask.addColorStop(0,'transparent');mask.addColorStop(.6,'#000');mask.addColorStop(1,'#000');c.fillStyle=mask;c.fillRect(0,0,w,h);
 }
 ctx.drawImage(plateBackdrop,1015,535);
}

let trafficBackdrop;
function neutralTrafficBackdrop(){
 if(levelConfig().rule!=='traffic')return;
 if(!trafficBackdrop){const p=document.createElement('canvas');p.width=340;p.height=230;const c=p.getContext('2d');c.filter='saturate(0)';c.drawImage(canvas,950/W*canvas.width,455/H*canvas.height,340/W*canvas.width,230/H*canvas.height,0,0,340,230);c.filter='none';c.globalCompositeOperation='destination-in';const g=c.createRadialGradient(170,130,50,170,130,175);g.addColorStop(0,'black');g.addColorStop(.62,'black');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,340,230);trafficBackdrop=p;}
 ctx.drawImage(trafficBackdrop,950,455);
}

function drawFrozenButton(){
 const melt=Math.min(1,thawTime/5),cold=1-melt;
 ctx.save();ctx.globalAlpha=melt;drawImage('button',1055,583,130,25);ctx.restore();
 ctx.save();ctx.globalAlpha=cold;
 ctx.drawImage(images['frozen-button'],1038.1,547.33,164.06,72.02);ctx.restore();
 if(!preferences.effects)return;
 ctx.save();ctx.globalCompositeOperation='screen';
 // Separate soft puffs avoid a hard strip around the ice.
 for(let i=0;i<9;i++){
  const phase=(clock*.12+i*.173)%1,x=1042+i*19+Math.sin(clock*.55+i*2.1)*9,y=580+phase*40;
  ctx.save();ctx.translate(x,y);ctx.scale(1.5,.55);
  const r=13+phase*11,g=ctx.createRadialGradient(0,0,0,0,0,r);
  g.addColorStop(0,'rgba(183,227,244,'+(.075*cold*Math.sin(phase*Math.PI))+')');g.addColorStop(1,'rgba(183,227,244,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.restore();
 }
 for(let i=0;i<5;i++){
  const p=(clock*.16+i*.217)%1,x=1045+i*35+Math.sin(clock*.4+i)*5,y=548+p*58;
  ctx.globalAlpha=cold*.45*Math.sin(p*Math.PI);ctx.strokeStyle='#cfedff';ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(x-1.5,y);ctx.lineTo(x+1.5,y);ctx.moveTo(x,y-2);ctx.lineTo(x,y+2);ctx.stroke();
 }
 if(warmPointer!==null&&melt>0){
  for(let i=0;i<4;i++){const p=(clock*.65+i*.27)%1;ctx.globalAlpha=Math.sin(p*Math.PI)*melt*cold*1.8;ctx.fillStyle='#b8eaff';ctx.beginPath();ctx.ellipse(1056+i*42,586+p*27,1,1.7+p*1.2,0,0,Math.PI*2);ctx.fill();}
 }
 ctx.restore();
}

function render(alpha=1){window.resizeLabHD?.();ctx.setTransform(canvas.width/W,0,0,canvas.height/H,0,0);ctx.imageSmoothingQuality="high";ctx.clearRect(0,0,W,H);drawImage('room-new',0,0,W,H);
 // Restore clean wall beneath movable crates and the wire: sparks are live particles only.
 for(const [x,y,w,h] of [[150,630,146,118],[665,245,132,108],[1750,630,147,120],[1100,195,78,100]]){const im=images.room;ctx.drawImage(im,x/W*im.width,y/H*im.height,w/W*im.width,h/H*im.height,x,y,w,h);}

 
 drawPlateBackdrop();neutralTrafficBackdrop();drawHydraulic111();
 if(floatButton){if(!plate13Patch){const patch=document.createElement('canvas');patch.width=230;patch.height=150;const c=patch.getContext('2d');c.filter='saturate(0) brightness(.82)';c.drawImage(canvas,1005/W*canvas.width,530/H*canvas.height,230/W*canvas.width,150/H*canvas.height,0,0,230,150);c.filter='none';c.globalCompositeOperation='destination-in';let mask=c.createLinearGradient(0,0,230,0);mask.addColorStop(0,'transparent');mask.addColorStop(.15,'black');mask.addColorStop(.85,'black');mask.addColorStop(1,'transparent');c.fillStyle=mask;c.fillRect(0,0,230,150);mask=c.createLinearGradient(0,0,0,150);mask.addColorStop(0,'transparent');mask.addColorStop(.2,'black');mask.addColorStop(.8,'black');mask.addColorStop(1,'transparent');c.fillStyle=mask;c.fillRect(0,0,230,150);plate13Patch=patch;}ctx.drawImage(plate13Patch,1005,530);}


 ctx.save();if(hydraulic111)ctx.translate(0,hydraulic111.dy);if(floatButton){ctx.translate(floatButton.x+floatButton.w/2,floatButton.y+floatButton.h/2);ctx.rotate(floatButton.angle||0);ctx.translate(-1120,-595.5-(plateDown?4:0));}else if(floatButton)ctx.translate(floatButton.x+floatButton.w/2-1120,floatButton.y+floatButton.h/2-595.5-(plateDown?8:0)); ctx.save();ctx.globalCompositeOperation='screen';let g=ctx.createRadialGradient(1120,598,2,1120,598,95);g.addColorStop(0,levelConfig().rule==='traffic'?trafficColor()+'55':opened?'#52fff050':'#00dcff45');g.addColorStop(1,levelConfig().rule==='traffic'?trafficColor()+'00':'#00cfff00');ctx.fillStyle=g;ctx.fillRect(1015,498,210,180);ctx.restore();const visualDown=plateDown;if(levelConfig().rule==='frozen'&&thawTime<5){drawFrozenButton();}else {if(levelConfig().rule==='traffic')ctx.filter='grayscale(1)';drawImage(visualDown?'button-down':'button',1055,visualDown?591:583,130,visualDown?17:25);ctx.filter='none';}ctx.restore();
 if(levelConfig().rule==='morse'){ctx.save();ctx.font='300 32px "Segoe UI", Arial, sans-serif';ctx.textAlign='center';ctx.fillStyle='#e8fbff';ctx.shadowColor='#000';ctx.shadowBlur=6;const text=morse119.code.replaceAll('.','·').replaceAll('-','—').split('').join(' ');ctx.fillText(text+(morse119.pointer!==null?(morse119.held>=.6?' —':' ·'):''),1120,548);ctx.restore();}
 if(levelConfig().rule==='lowerCrate'){ctx.save();ctx.globalCompositeOperation='screen';const glow=ctx.createRadialGradient(1465,812,2,1465,812,65);glow.addColorStop(0,'#00dcff55');glow.addColorStop(1,'#00cfff00');ctx.fillStyle=glow;ctx.fillRect(1400,747,130,130);ctx.restore();drawImage(lowerPlateDown?'button-down':'button',1400,lowerPlateDown?807:799,130,lowerPlateDown?17:25);}
 ctx.save();ctx.strokeStyle='#624432';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(wire.x-2,wire.y-20);ctx.lineTo(wire.x,wire.y);ctx.stroke();ctx.restore();

 if(preferences.effects&&flash>0){
  ctx.save();ctx.globalCompositeOperation='screen';
  ctx.globalAlpha=.35+.45*Math.pow(Math.sin(flash*65),2);
  ctx.shadowColor='#e4f6ff';ctx.shadowBlur=24;ctx.strokeStyle='#e7f7ff';ctx.lineWidth=6;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(1141,174);ctx.lineTo(1198,170);ctx.stroke();
  ctx.globalAlpha*=.6;ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(1141,174);ctx.lineTo(1164,173);ctx.stroke();ctx.restore();
 }
 ctx.save();ctx.lineWidth=1.3;for(const p of (preferences.effects?particles:[])){ctx.globalAlpha=Math.min(1,p.life*3);ctx.strokeStyle='#ffc06b';ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.022,p.y-p.vy*.022);ctx.stroke()}ctx.restore();
 // The door leaf rotates about its right hinge; the frame remains part of the room.
 if(doorProgress>0||doorPrevious>0){
 const t=doorPrevious+(doorProgress-doorPrevious)*alpha,e=t*t*(3-2*t),angle=e*Math.PI*.43;
 const x=2005,y=180,w=101,h=179,hinge=x+w,projected=w*Math.cos(angle),depth=10*Math.sin(angle);
 ctx.save();const recess=ctx.createLinearGradient(x,y,hinge,y);recess.addColorStop(0,'#1e211f');recess.addColorStop(1,'#c6b27c');ctx.fillStyle=recess;ctx.fillRect(x,y,w,h);window.hero3d.drawBeloved?.(ctx);
 const im=images['room-new'];
 for(let i=0;i<w;i++){const u=i/w,dx=hinge-projected+u*projected,dy=depth*(1-u);ctx.drawImage(im,(x+i)/W*im.width,y/H*im.height,im.width/W,h/H*im.height,dx,y+dy,projected/w+.5,h-dy*2);}
 ctx.strokeStyle='#252821';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(hinge-projected,y+depth);ctx.lineTo(hinge-projected,y+h-depth);ctx.stroke();
 ctx.globalAlpha=e;ctx.globalCompositeOperation='screen';const light=ctx.createRadialGradient(2050,357,0,2050,357,85);light.addColorStop(0,'#ffe4a03a');light.addColorStop(1,'#ffe4a000');ctx.fillStyle=light;ctx.fillRect(1965,285,170,150);ctx.restore();}
 ctx.save();ctx.font='bold 26px Arial';ctx.textAlign='center';ctx.fillStyle=opened?'#64fff0':'#46abb2';ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=opened?18:4;ctx.fillText('↗',2052,151);ctx.restore();



 drawIceQuest();drawHero(alpha);drawTraffic();drawFlood();drawWaterFx105();
 if(preferences.effects&&heat>0){ctx.save();const opacity=(.035+.065*(.5+.5*Math.sin(clock*5)))*Math.min(1,heat/.5);const edge=ctx.createLinearGradient(0,0,W,0);edge.addColorStop(0,'rgba(210,15,8,'+opacity+')');edge.addColorStop(.16,'rgba(210,15,8,0)');edge.addColorStop(.84,'rgba(210,15,8,0)');edge.addColorStop(1,'rgba(210,15,8,'+opacity+')');ctx.fillStyle=edge;ctx.fillRect(0,0,W,H);ctx.restore();}
 drawRoomSlide();$('#heat').style.display='none';$('#heat i').style.width=(heat/3*100)+'%';$('#heat b').textContent=Math.max(0,3-heat).toFixed(1)+' с';
 
}


/* ATLAS_DATA */
const atlasData={"run-atlas": {"frames": [[64, 11, 287, 358], [512, 11, 208, 355], [892, 11, 214, 353], [1257, 12, 236, 360], [1616, 12, 325, 322], [61, 410, 309, 353], [482, 410, 240, 355], [883, 412, 225, 354], [1291, 411, 206, 354], [1668, 412, 230, 354]], "scale": 0.5111111111111111}, "jump-atlas": {"frames": [[102, 46, 240, 329], [485, 90, 245, 285], [888, 17, 233, 363], [1284, 10, 203, 333], [1666, 15, 171, 304], [115, 413, 175, 299], [506, 414, 179, 334], [838, 413, 238, 352], [1240, 466, 250, 307], [1675, 414, 176, 361]], "scale": 0.5068870523415978}, "push-atlas": {"frames": [[17, 109, 240, 280], [504, 108, 198, 280], [947, 108, 199, 281], [1359, 108, 231, 281], [20, 551, 238, 282], [485, 552, 217, 281], [947, 553, 200, 282], [1359, 552, 231, 282]], "scale": 0.6524822695035462}, "death-atlas": {"frames": [[143, 40, 176, 377], [532, 70, 159, 349], [892, 88, 166, 332], [1235, 116, 211, 303], [1590, 149, 307, 268], [39, 529, 332, 221], [416, 569, 346, 179], [801, 583, 389, 158], [1190, 591, 396, 153], [1586, 598, 360, 147]], "scale": 0.4880636604774536}};
/* END_ATLAS_DATA */
function drawAtlas(name,index,x,y,push=false){
 const data=atlasData[name],f=data.frames[Math.max(0,Math.min(data.frames.length-1,index))],scale=data.scale;
 const [sx,sy,sw,sh]=f,w=sw*scale,h=sh*scale;
 // Pushing hands align with the collider's leading edge, not the sprite center.
 ctx.drawImage(images[name],sx,sy,sw,sh,push?hero.width/2-w:x-w/2,y-h,w,h);
}
function deathFrame(body){const phase=body.ground?Math.min(9,6+body.settled*7):Math.min(5,body.age*9);return body.electric?Math.floor(phase):Math.max(2,Math.floor(phase))}
function heroFrame(){
 if(!player.ground){
  const v=player.vy/physics.jumpSpeed;
  return {name:'jump-atlas',frame:v<-.65?2:v<-.25?3:v<.1?4:v<.35?5:v<.7?6:7};
 }
 if(player.landing>0)return {name:'jump-atlas',frame:player.landing>.055?8:9};
 if(player.pushing)return {name:'push-atlas',frame:Math.floor(clock*12)%8};
 if(Math.abs(player.vx)>8)return {name:'run-atlas',frame:Math.floor(anim*24)%10};
 return {name:'idle',frame:0};
}
function drawHero(alpha){window.hero3d.draw(ctx,{superSpeed:levelConfig().rule==='superSpeed',nolan:nolan117,hydraulicOffset:hydraulic111?.dy||0,iceQuest,player:nolan117?{...player,vx:player.vx*Math.cos(nolan117.angle)+player.vy*Math.sin(nolan117.angle),vy:-player.vx*Math.sin(nolan117.angle)+player.vy*Math.cos(nolan117.angle)}:player,corpses,crates,deaths,clock,jellies,jellyTime,plateColor:levelConfig().rule==='traffic'?trafficColor():null,flash:preferences.effects?flash:0,opened:opened&&levelConfig().rule!=="illusion",mode,floatPlate:floatButton?{x:floatButton.x+floatButton.w/2,y:floatButton.y+floatButton.h/2}:null,effects:preferences.effects},alpha);}
const names=['room','room-new','button','button-down','door','crate','frozen-button'];
Promise.all([window.floodMaskReady102,window.keyReady99,window.iceImageReady99,window.jellyReady,window.hero3d.ready,...names.map(n=>new Promise((resolve,reject)=>{let im=new Image();im.onload=()=>{images[n]=im;resolve()};im.onerror=()=>reject(n);im.src=embeddedAssets[n]}))]).then(()=>{try{currentLevel=Math.max(1,Math.min(LEVELS.length,Number(localStorage.getItem('shadow-current-level'))||1));if(!localStorage.getItem('still-here-traffic25-migrated')){if(currentLevel===21){currentLevel=25;localStorage.setItem('shadow-current-level','25');}localStorage.setItem('still-here-traffic25-migrated','1');}}catch{}if(levelConfig().rule==='pending')currentLevel=1;reset();setupLevels();showMainMenu();render(1);$('#game').setAttribute('data-ready','true');$('#loading').style.display='none';let last=performance.now(),acc=0;function loop(now){acc+=Math.min((now-last)/1000,.06);last=now;while(acc>=1/120){update(1/120);acc-=1/120}render(acc/(1/120));requestAnimationFrame(loop)}requestAnimationFrame(loop)}).catch(n=>{$('#loading').textContent=tr('loadError')+': '+n});
window.gameDebug={get state(){return {nolan:nolan117?{...nolan117}:null,hydraulic:hydraulic111?{...hydraulic111}:null,flood:flood?{...flood}:null,iceQuest:iceQuest?{...iceQuest,cube:iceQuest.cube?{...iceQuest.cube}:null}:null,jellies:jellies.map(j=>({...j})),jellyTime,swipeUnlocked,answerUnlocked,trafficPhase:trafficPhase(),trafficTime,trafficBolt:trafficBolt?{...trafficBolt}:null,oneFingerFailed,wordOpened,gravityUp,inputQueue:inputQueue.map(e=>({...e})),thawTime,leftFailed,floatButton:floatButton?{...floatButton}:null,doorTimer,knockCount,doorProgress,currentLevel,pressCount,plateDown,lowerPlateDown,player:{...player},corpses:corpses.map(c=>({...c})),opened,heat,mode,deaths,flash,crates:crates.map(c=>({...c})),shocks:shocks.map(s=>({...s})),particles:particles.map(p=>({...p}))}},submitLevelAnswer,normalizeAnswer,gameLocale,levelText,resizeHero,acceptSwipeReply,activateWordButton,roomGravity,scenePress,sceneMove,sceneRelease,controlDown,controlUp,selectLevel,finishLevel,levelConfig,solids,physics,floorSteps,wire,panel,hero,bounds,atlasData,heroFrame,deathFrame,crates:()=>crates,render,step:update,reset,keys,setPlayer(p){Object.assign(player,p)},start(){mode='play';$('#overlay').style.display='none'}};









