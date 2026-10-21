(()=>{var ff=0,Fh=1,pf=2;var Rs=1,mf=2,Sr=3,oi=0,Qe=1,Fe=2,ai=0,br=1,Do=2,Oh=3,Bh=4,gf=5;var Cs=100,xf=101,_f=102,yf=103,vf=104,Mf=200,Sf=201,bf=202,Ef=203,kh=204,zh=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Lf=213,Df=214,Ba=0,ka=1,za=2,sr=3,Ha=4,Va=5,Ga=6,Wa=7,xl=0,Nf=1,Uf=2,Kn=0,Hh=1,Vh=2,Gh=3,No=4,Wh=5,Xh=6,qh=7,Eh="attached",Ff="detached",Yh=300,Zi=301,Is=302,_l=303,yl=304,Uo=306,bn=1e3,In=1001,rr=1002,He=1003,vl=1004;var Ps=1005;var Ve=1006,Er=1007;var Zn=1008;var vn=1009,Kh=1010,Zh=1011,wr=1012,Ml=1013,Jn=1014,Tn=1015,$n=1016,Sl=1017,bl=1018,Tr=1020,Jh=35902,$h=35899,jh=1021,Qh=1022,An=1023,ii=1026,Ji=1027,El=1028,wl=1029,$i=1030,Tl=1031;var Al=1033,Fo=33776,Oo=33777,Bo=33778,ko=33779,Rl=35840,Cl=35841,Il=35842,Pl=35843,Ll=36196,Dl=37492,Nl=37496,Ul=37488,Fl=37489,zo=37490,Ol=37491,Bl=37808,kl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Kl=37818,Zl=37819,Jl=37820,$l=37821,jl=36492,Ql=36494,tc=36495,ec=36283,nc=36284,Ho=36285,ic=36286,sc=2200,rc=2201,Of=2202,fs=2300,ps=2301,Ua=2302,wh=2303,cs=2400,hs=2401,Qr=2402,oc=2500,Bf=2501,tu=0,Vo=1,Ar=2,kf=3200;var Go=0,zf=1,Pi="",ye="srgb",pn="srgb-linear",to="linear",ve="srgb";var Fa=7680;var Hf=519,Vf=512,Gf=513,Wf=514,ac=515,Xf=516,qf=517,lc=518,Yf=519,eu=35044,Wo=35048;var nu="300 es",Xn=2e3,or=2001;function um(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kf(){let r=ar("canvas");return r.style.display="block",r}var Md={},lr=null;function eo(...r){let t="THREE."+r.shift();lr?lr("log",t,...r):console.log(t,...r)}function Zf(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ft(...r){r=Zf(r);let t="THREE."+r.shift();if(lr)lr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Kt(...r){r=Zf(r);let t="THREE."+r.shift();if(lr)lr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ds(...r){let t=r.join(" ");t in Md||(Md[t]=!0,Ft(...r))}function Jf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var $f={[Ba]:ka,[za]:Ga,[Ha]:Wa,[sr]:Va,[ka]:Ba,[Ga]:za,[Wa]:Ha,[Va]:sr},qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,Zr=Math.PI/180,ms=180/Math.PI;function Pn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function iu(r,t){return(r%t+t)%t}function fm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function pm(r,t,e){return r!==t?(e-r)/(t-r):0}function Jr(r,t,e){return(1-e)*r+e*t}function mm(r,t,e,n){return Jr(r,t,1-Math.exp(-e*n))}function gm(r,t=1){return t-Math.abs(iu(r,t*2)-t)}function xm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function _m(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ym(r,t){return r+Math.floor(Math.random()*(t-r+1))}function vm(r,t){return r+Math.random()*(t-r)}function Mm(r){return r*(.5-Math.random())}function Sm(r){r!==void 0&&(Sd=r);let t=Sd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bm(r){return r*Zr}function Em(r){return r*ms}function wm(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Tm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Am(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rm(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xo={DEG2RAD:Zr,RAD2DEG:ms,generateUUID:Pn,clamp:oe,euclideanModulo:iu,mapLinear:fm,inverseLerp:pm,lerp:Jr,damp:mm,pingpong:gm,smoothstep:xm,smootherstep:_m,randInt:ym,randFloat:vm,randFloatSpread:Mm,seededRandom:Sm,degToRad:bm,radToDeg:Em,isPowerOfTwo:wm,ceilPowerOfTwo:Tm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:Me,denormalize:Wn},cu=class cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;var lt=cu,pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),b=Math.sin(M);g=Math.sin(g*M)/b,a=Math.sin(a*M)/b,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hu=class hu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hu.prototype.isVector3=!0;var R=hu,Jc=new R,bd=new pe,uu=class uu{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],M=i[1],b=i[4],y=i[7],v=i[2],E=i[5],A=i[8];return s[0]=o*x+a*M+l*v,s[3]=o*p+a*b+l*E,s[6]=o*g+a*y+l*A,s[1]=c*x+h*M+u*v,s[4]=c*p+h*b+u*E,s[7]=c*g+h*y+u*A,s[2]=d*x+f*M+m*v,s[5]=d*p+f*b+m*E,s[8]=d*g+f*y+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uu.prototype.isMatrix3=!0;var jt=uu,$c=new jt,Ed=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){let r={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?to:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[pn]:{primaries:t,whitePoint:n,transfer:to,toXYZ:Ed,fromXYZ:wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Ed,fromXYZ:wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),r}var re=Cm();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ks,Xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ks===void 0&&(ks=ar("canvas")),ks.width=t.width,ks.height=t.height;let i=ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Im=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jc(i[o].image)):s.push(jc(i[o]))}else s=jc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function jc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Pm=0,Qc=new R,je=class r extends qn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=In,i=In,s=Ve,o=Zn,a=An,l=vn,c=r.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Pn(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Yh;je.DEFAULT_ANISOTROPY=1;var du=class du{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(f+1)/2,v=(g+1)/2,E=(h+d)/4,A=(u+x)/4,_=(m+p)/4;return b>y&&b>v?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=A/n):y>v?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=_/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=A/s,i=_/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};du.prototype.isVector4=!0;var Se=du,qa=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new je(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var gl=class gl{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,p)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/zs.setFromMatrixColumn(t,0).length(),s=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Dm)}lookAt(t,e,n){let i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Oi.crossVectors(n,Mn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Oi.crossVectors(n,Mn)),Oi.normalize(),ra.crossVectors(Mn,Oi),i[0]=Oi.x,i[4]=ra.x,i[8]=Mn.x,i[1]=Oi.y,i[5]=ra.y,i[9]=Mn.y,i[2]=Oi.z,i[6]=ra.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],b=n[7],y=n[11],v=n[15],E=i[0],A=i[4],_=i[8],w=i[12],I=i[1],L=i[5],C=i[9],N=i[13],D=i[2],O=i[6],F=i[10],z=i[14],K=i[3],W=i[7],$=i[11],nt=i[15];return s[0]=o*E+a*I+l*D+c*K,s[4]=o*A+a*L+l*O+c*W,s[8]=o*_+a*C+l*F+c*$,s[12]=o*w+a*N+l*z+c*nt,s[1]=h*E+u*I+d*D+f*K,s[5]=h*A+u*L+d*O+f*W,s[9]=h*_+u*C+d*F+f*$,s[13]=h*w+u*N+d*z+f*nt,s[2]=m*E+x*I+p*D+g*K,s[6]=m*A+x*L+p*O+g*W,s[10]=m*_+x*C+p*F+g*$,s[14]=m*w+x*N+p*z+g*nt,s[3]=M*E+b*I+y*D+v*K,s[7]=M*A+b*L+y*O+v*W,s[11]=M*_+b*C+y*F+v*$,s[15]=M*w+b*N+y*z+v*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],M=l*f-c*d,b=a*f-c*u,y=a*d-l*u,v=o*f-c*h,E=o*d-l*h,A=o*u-a*h;return e*(x*M-p*b+g*y)-n*(m*M-p*v+g*E)+i*(m*b-x*v+g*A)-s*(m*y-x*E+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=e*a-n*o,b=e*l-i*o,y=e*c-s*o,v=n*l-i*a,E=n*c-s*a,A=i*c-s*l,_=h*x-u*m,w=h*p-d*m,I=h*g-f*m,L=u*p-d*x,C=u*g-f*x,N=d*g-f*p,D=M*N-b*C+y*L+v*I-E*w+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(a*N-l*C+c*L)*O,t[1]=(i*C-n*N-s*L)*O,t[2]=(x*A-p*E+g*v)*O,t[3]=(d*E-u*A-f*v)*O,t[4]=(l*I-o*N-c*w)*O,t[5]=(e*N-i*I+s*w)*O,t[6]=(p*y-m*A-g*b)*O,t[7]=(h*A-d*y+f*b)*O,t[8]=(o*C-a*I+c*_)*O,t[9]=(n*I-e*C-s*_)*O,t[10]=(m*E-x*y+g*M)*O,t[11]=(u*y-h*E-f*M)*O,t[12]=(a*w-o*L-l*_)*O,t[13]=(e*L-n*w+i*_)*O,t[14]=(x*b-m*v-p*M)*O,t[15]=(h*v-u*b+d*M)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,p=o*u,g=a*u,M=l*c,b=l*h,y=l*u,v=n.x,E=n.y,A=n.z;return i[0]=(1-(x+g))*v,i[1]=(f+y)*v,i[2]=(m-b)*v,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+g))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+b)*A,i[9]=(p-M)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=zs.set(i[0],i[1],i[2]).length(),a=zs.set(i[4],i[5],i[6]).length(),l=zs.set(i[8],i[9],i[10]).length();s<0&&(o=-o),zn.copy(this);let c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Xn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===Xn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===or)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===Xn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===or)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gl.prototype.isMatrix4=!0;var Rt=gl,zs=new R,zn=new Rt,Lm=new R(0,0,0),Dm=new R(1,1,1),Oi=new R,ra=new R,Mn=new R,Td=new Rt,Ad=new pe,Ln=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Td,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nm=0,Rd=new R,Hs=new pe,pi=new Rt,oa=new R,Or=new R,Um=new R,Fm=new pe,Cd=new R(1,0,0),Id=new R(0,1,0),Pd=new R(0,0,1),Ld={type:"added"},Om={type:"removed"},Vs={type:"childadded",child:null},th={type:"childremoved",child:null},Pe=class r extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new Ln,n=new pe,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new jt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Cd,t)}rotateY(t){return this.rotateOnAxis(Id,t)}rotateZ(t){return this.rotateOnAxis(Pd,t)}translateOnAxis(t,e){return Rd.copy(t).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cd,t)}translateY(t){return this.translateOnAxis(Id,t)}translateZ(t){return this.translateOnAxis(Pd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Or,oa,this.up):pi.lookAt(oa,Or,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(pi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ld),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Om),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ld),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,Um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function eh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=iu(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=eh(o,s,t+1/3),this.g=eh(o,s,t),this.b=eh(o,s,t-1/3)}return re.colorSpaceToWorking(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return re.workingToColorSpace(ln.copy(this),t),Math.round(oe(ln.r*255,0,255))*65536+Math.round(oe(ln.g*255,0,255))*256+Math.round(oe(ln.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=ye){re.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(aa);let n=Jr(Bi.h,aa.h,e),i=Jr(Bi.s,aa.s,e),s=Jr(Bi.l,aa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new vt;vt.NAMES=jf;var so=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ro=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new R,mi=new R,nh=new R,gi=new R,Gs=new R,Ws=new R,Dd=new R,ih=new R,sh=new R,rh=new R,oh=new Se,ah=new Se,lh=new Se,vi=class r{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Hn.subVectors(i,e),mi.subVectors(n,e),nh.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(mi),l=Hn.dot(nh),c=mi.dot(mi),h=mi.dot(nh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),lh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(oh,s.x),o.addScaledVector(ah,s.y),o.addScaledVector(lh,s.z),o}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),mi.subVectors(t,e),Hn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Gs.subVectors(i,n),Ws.subVectors(s,n),ih.subVectors(t,n);let l=Gs.dot(ih),c=Ws.dot(ih);if(l<=0&&c<=0)return e.copy(n);sh.subVectors(t,i);let h=Gs.dot(sh),u=Ws.dot(sh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);rh.subVectors(t,s);let f=Gs.dot(rh),m=Ws.dot(rh);if(m>=0&&f<=m)return e.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ws,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Dd.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Dd,a);let g=1/(p+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},En=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),ca.subVectors(this.max,Br),Xs.subVectors(t.a,Br),qs.subVectors(t.b,Br),Ys.subVectors(t.c,Br),ki.subVectors(qs,Xs),zi.subVectors(Ys,qs),rs.subVectors(Xs,Ys);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-rs.z,rs.y,ki.z,0,-ki.x,zi.z,0,-zi.x,rs.z,0,-rs.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-rs.y,rs.x,0];return!ch(e,Xs,qs,Ys,ca)||(e=[1,0,0,0,1,0,0,0,1],!ch(e,Xs,qs,Ys,ca))?!1:(ha.crossVectors(ki,zi),e=[ha.x,ha.y,ha.z],ch(e,Xs,qs,Ys,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,la=new En,Xs=new R,qs=new R,Ys=new R,ki=new R,zi=new R,rs=new R,Br=new R,ca=new R,ha=new R,os=new R;function ch(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){os.fromArray(r,s);let a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new R,ua=new lt,km=0,Jt=class extends qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var oo=class extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Dt=class extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},zm=new En,kr=new R,hh=new R,gn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(hh)),this.expandByPoint(kr.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hm=0,Cn=new Rt,uh=new Pe,Ks=new R,Sn=new En,zr=new En,nn=new R,$t=class r extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(um(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Sn.min,zr.min),Sn.expandByPoint(nn),nn.addVectors(Sn.max,zr.max),Sn.expandByPoint(nn)):(Sn.expandByPoint(zr.min),Sn.expandByPoint(zr.max))}Sn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)nn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),nn.add(Ks)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new R,l[_]=new R;let c=new R,h=new R,u=new R,d=new lt,f=new lt,m=new lt,x=new R,p=new R;function g(_,w,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,I),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,I),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(x),a[w].add(x),a[I].add(x),l[_].add(p),l[w].add(p),l[I].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,w=M.length;_<w;++_){let I=M[_],L=I.start,C=I.count;for(let N=L,D=L+C;N<D;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new R,y=new R,v=new R,E=new R;function A(_){v.fromBufferAttribute(i,_),E.copy(v);let w=a[_];b.copy(w),b.sub(v.multiplyScalar(v.dot(w))).normalize(),y.crossVectors(E,w);let L=y.dot(l[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,L)}for(let _=0,w=M.length;_<w;++_){let I=M[_],L=I.start,C=I.count;for(let N=L,D=L+C;N<D;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Jt(d,h,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eu,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},fn=new R,Gi=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dh=new R,Vm=new R,Gm=new jt,Gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dh.subVectors(n,e).cross(Vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(dh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gm.getNormalMatrix(t),i=this.coplanarPoint(dh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wm=0,cn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=br,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=zh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xs=class extends cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,Hr=new R,Js=new R,$s=new R,js=new lt,Vr=new lt,Qf=new Rt,da=new R,Gr=new R,fa=new R,Nd=new lt,fh=new lt,Ud=new lt,ur=class extends Pe{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new $t;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gs(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Gi(n,3,0,!1)),Zs.setAttribute("uv",new Gi(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;pa(da.set(-.5,-.5,0),$s,o,Js,i,s),pa(Gr.set(.5,-.5,0),$s,o,Js,i,s),pa(fa.set(.5,.5,0),$s,o,Js,i,s),Nd.set(0,0),fh.set(1,0),Ud.set(1,1);let a=t.ray.intersectTriangle(da,Gr,fa,!1,Hr);if(a===null&&(pa(Gr.set(-.5,.5,0),$s,o,Js,i,s),fh.set(0,1),a=t.ray.intersectTriangle(da,fa,Gr,!1,Hr),a===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:vi.getInterpolation(Hr,da,Gr,fa,Nd,fh,Ud,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(r,t,e,n,i,s){js.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Vr.x=s*js.x-i*js.y,Vr.y=i*js.x+s*js.y):Vr.copy(js),r.copy(t),r.x+=Vr.x,r.y+=Vr.y,r.applyMatrix4(Qf)}var _i=new R,ph=new R,ma=new R,ga=new R,_s=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ph.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(ph);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ph).addScaledVector(ma,d),f}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,b=n.z-o.z,y=Math.abs(l),v=Math.abs(c),E=Math.abs(h),A,_,w,I,L,C,N,D,O,F,z,K;if(y>=v&&y>=E?(w=l,C=u,O=m,K=g,l>=0?(A=c,_=h,I=d,L=f,N=x,D=p,F=M,z=b):(A=h,_=c,I=f,L=d,N=p,D=x,F=b,z=M)):v>=E?(w=c,C=d,O=x,K=M,c>=0?(A=h,_=l,I=f,L=u,N=p,D=m,F=b,z=g):(A=l,_=h,I=u,L=f,N=m,D=p,F=g,z=b)):(w=h,C=f,O=p,K=b,h>=0?(A=l,_=c,I=u,L=d,N=m,D=x,F=g,z=M):(A=c,_=l,I=d,L=u,N=x,D=m,F=M,z=g)),w===0)return null;let W=A/w,$=_/w,nt=1/w,j=I-W*C,et=L-$*C,It=N-W*O,Vt=D-$*O,Yt=F-W*K,Y=z-$*K,Q=Yt*Vt-Y*It,ft=j*Y-et*Yt,kt=It*et-Vt*j;if(i){if(Q<0||ft<0||kt<0)return null}else if((Q<0||ft<0||kt<0)&&(Q>0||ft>0||kt>0))return null;let wt=Q+ft+kt;if(wt===0)return null;let Gt=nt*(Q*C+ft*O+kt*K);return(wt>0?Gt<0:Gt>0)?null:this.at(Gt/wt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fd=new Rt,as=new _s,xa=new gn,Od=new R,_a=new R,ya=new R,va=new R,mh=new R,Ma=new R,Bd=new R,Sa=new R,Et=class extends Pe{constructor(t=new $t,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(mh.fromBufferAttribute(u,t),o?Ma.addScaledVector(mh,h):Ma.addScaledVector(mh.sub(e),h))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),as.copy(t.ray).recast(t.near),!(xa.containsPoint(as.origin)===!1&&(as.intersectSphere(xa,Od)===null||as.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(Fd.copy(s).invert(),as.copy(t.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,v=b;y<v;y+=3){let E=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);i=ba(this,g,t,n,c,h,u,E,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);i=ba(this,o,t,n,c,h,u,M,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,v=b;y<v;y+=3){let E=y,A=y+1,_=y+2;i=ba(this,g,t,n,c,h,u,E,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=p,b=p+1,y=p+2;i=ba(this,o,t,n,c,h,u,M,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Xm(r,t,e,n,i,s,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===oi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:r}}function ba(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_a),r.getVertexPosition(l,ya),r.getVertexPosition(c,va);let h=Xm(r,t,e,n,_a,ya,va,Bd);if(h){let u=new R;vi.getBarycoord(Bd,_a,ya,va,u),i&&(h.uv=vi.getInterpolatedAttribute(i,a,l,c,u,new lt)),s&&(h.uv1=vi.getInterpolatedAttribute(s,a,l,c,u,new lt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};vi.getNormal(_a,ya,va,d.normal),h.face=d,h.barycoord=u}return h}var Wr=new Se,kd=new Se,zd=new Se,qm=new Se,Hd=new Rt,Ea=new R,gh=new gn,Vd=new Rt,xh=new _s,ys=class extends Et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(i),t.ray.intersectsSphere(gh)!==!1&&(Vd.copy(i).invert(),xh.copy(t.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;kd.fromBufferAttribute(i.attributes.skinIndex,t),zd.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Wr.copy(e),e.set(0,0,0,0)):(Wr.set(...e,1),e.set(0,0,0)),Wr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=zd.getComponent(s);if(o!==0){let a=kd.getComponent(s);Hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(qm.copy(Wr).applyMatrix4(Hd),o)}}return e.isVector4&&(e.w=Wr.w),e.applyMatrix4(this.bindMatrixInverse)}},dr=class extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},fr=class extends je{constructor(t=null,e=1,n=1,i,s,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new Rt,Ym=new Rt,lo=class r{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Rt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:Ym;Gd.multiplyMatrices(a,e[s]),Gd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new fr(e,t,t,An,Tn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],o=e[s];o===void 0&&(Ft("Skeleton: No bone found with UUID:",s),o=new dr),this.bones.push(o),this.boneInverses.push(new Rt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Si=class extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new Rt,Wd=new Rt,wa=[],Xd=new En,Km=new Rt,Xr=new Et,qr=new gn,Ce=class extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Km)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Xd.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Xd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),qr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),t.ray.intersectsSphere(qr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qs),Wd.multiplyMatrices(n,Qs),Xr.matrixWorld=Wd,Xr.raycast(t,wa);for(let o=0,a=wa.length;o<a;o++){let l=wa[o];l.instanceId=s,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(i*this.count),i,this.count,El,Tn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new gn,Zm=new lt(.5,.5),Ta=new R,pr=class{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,s=new Gn,o=new Gn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],p=s[10],g=s[11],M=s[12],b=s[13],y=s[14],v=s[15];if(i[0].setComponents(c-o,f-h,g-m,v-M).normalize(),i[1].setComponents(c+o,f+h,g+m,v+M).normalize(),i[2].setComponents(c+a,f+u,g+x,v+b).normalize(),i[3].setComponents(c-a,f-u,g-x,v-b).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,f-d,g-p,v-y).normalize();else if(i[4].setComponents(c-l,f-d,g-p,v-y).normalize(),e===Xn)i[5].setComponents(c+l,f+d,g+p,v+y).normalize();else if(e===or)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);let e=Zm.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ta.x=i.normal.x>0?t.max.x:t.min.x,Ta.y=i.normal.y>0?t.max.y:t.min.y,Ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wi=class extends cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ka=new R,Za=new R,qd=new Rt,Yr=new _s,Aa=new gn,_h=new R,Yd=new R,bi=class extends Pe{constructor(t=new $t,e=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ka.fromBufferAttribute(e,i-1),Za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ka.distanceTo(Za);t.setAttribute("lineDistance",new Dt(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,t.ray.intersectsSphere(Aa)===!1)return;qd.copy(i).invert(),Yr.copy(t.ray).applyMatrix4(qd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),M=h.getX(x+1),b=Ra(this,t,Yr,l,g,M,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Ra(this,t,Yr,l,x,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=Ra(this,t,Yr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Ra(this,t,Yr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ra(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(Ka.fromBufferAttribute(a,i),Za.fromBufferAttribute(a,s),e.distanceSqToSegment(Ka,Za,_h,Yd)>n)return;_h.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(_h);if(!(c<t.near||c>t.far))return{distance:c,point:Yd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Kd=new R,Zd=new R,co=class extends bi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Kd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kd.distanceTo(Zd);t.setAttribute("lineDistance",new Dt(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ho=class extends bi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Xi=class extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jd=new Rt,Th=new _s,Ca=new gn,Ia=new R,Ei=class extends Pe{constructor(t=new $t,e=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=s,t.ray.intersectsSphere(Ca)===!1)return;Jd.copy(i).invert(),Th.copy(t.ray).applyMatrix4(Jd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);Ia.fromBufferAttribute(u,p),$d(Ia,p,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Ia.fromBufferAttribute(u,m),$d(Ia,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function $d(r,t,e,n,i,s,o){let a=Th.distanceSqToPoint(r);if(a<e){let l=new R;Th.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends je{constructor(t=[],e=Zi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yn=class extends je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends je{constructor(t,e,n=Jn,i,s,o,a=He,l=He,c,h=ii,u=1){if(h!==ii&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends qi{constructor(t,e=Jn,n=Zi,i,s,o=He,a=He,l,c=ii){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fo=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class r extends $t{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function m(x,p,g,M,b,y,v,E,A,_,w){let I=y/A,L=v/_,C=y/2,N=v/2,D=E/2,O=A+1,F=_+1,z=0,K=0,W=new R;for(let $=0;$<F;$++){let nt=$*L-N;for(let j=0;j<O;j++){let et=j*I-C;W[x]=et*M,W[p]=nt*b,W[g]=D,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(j/A),u.push(1-$/_),z+=1}}for(let $=0;$<_;$++)for(let nt=0;nt<A;nt++){let j=d+nt+O*$,et=d+nt+O*($+1),It=d+(nt+1)+O*($+1),Vt=d+(nt+1)+O*$;l.push(j,et,Vt),l.push(et,It,Vt),K+=6}a.addGroup(f,K,w),f+=K,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},po=class r extends $t{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+s,x=i+1,p=new R,g=new R;for(let M=0;M<=m;M++){let b=0,y=0,v=0,E=0;if(M<=n){let w=M/n,I=w*Math.PI/2;y=-h-t*Math.cos(I),v=t*Math.sin(I),E=-t*Math.cos(I),b=w*u}else if(M<=n+s){let w=(M-n)/s;y=-h+w*e,v=t,E=0,b=u+w*d}else{let w=(M-n-s)/n,I=w*Math.PI/2;y=h+t*Math.sin(I),v=t*Math.cos(I),E=t*Math.sin(I),b=u+d+w*u}let A=Math.max(0,Math.min(1,b/f)),_=0;M===0?_=.5/i:M===m&&(_=-.5/i);for(let w=0;w<=i;w++){let I=w/i,L=I*Math.PI*2,C=Math.sin(L),N=Math.cos(L);g.x=-v*N,g.y=y,g.z=v*C,a.push(g.x,g.y,g.z),p.set(-v*N,E,v*C),p.normalize(),l.push(p.x,p.y,p.z),c.push(I+_,A)}if(M>0){let w=(M-1)*x;for(let I=0;I<i;I++){let L=w+I,C=w+I+1,N=M*x+I,D=M*x+I+1;o.push(L,C,N),o.push(C,D,N)}}}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},wi=class r extends $t{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new R,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class r extends $t{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function M(){let y=new R,v=new R,E=0,A=(e-t)/n;for(let _=0;_<=s;_++){let w=[],I=_/s,L=I*(e-t)+t;for(let C=0;C<=i;C++){let N=C/i,D=N*l+a,O=Math.sin(D),F=Math.cos(D);v.x=L*O,v.y=-I*n+p,v.z=L*F,u.push(v.x,v.y,v.z),y.set(O,A,F).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-I),w.push(m++)}x.push(w)}for(let _=0;_<i;_++)for(let w=0;w<s;w++){let I=x[w][_],L=x[w+1][_],C=x[w+1][_+1],N=x[w][_+1];(t>0||w!==0)&&(h.push(I,L,N),E+=3),(e>0||w!==s-1)&&(h.push(L,C,N),E+=3)}c.addGroup(g,E,0),g+=E}function b(y){let v=m,E=new lt,A=new R,_=0,w=y===!0?t:e,I=y===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),m++;let L=m;for(let C=0;C<=i;C++){let D=C/i*l+a,O=Math.cos(D),F=Math.sin(D);A.x=w*F,A.y=p*I,A.z=w*O,u.push(A.x,A.y,A.z),d.push(0,I,0),E.x=O*.5+.5,E.y=F*.5*I+.5,f.push(E.x,E.y),m++}for(let C=0;C<i;C++){let N=v+C,D=L+C;y===!0?h.push(D,D+1,N):h.push(D+1,D,N),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dn=class r extends Le{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$a=class r extends $t{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new R,y=new R,v=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],y),f(e[E+2],v),l(b,y,v,M)}function l(M,b,y,v){let E=v+1,A=[];for(let _=0;_<=E;_++){A[_]=[];let w=M.clone().lerp(y,_/E),I=b.clone().lerp(y,_/E),L=E-_;for(let C=0;C<=L;C++)C===0&&_===E?A[_][C]=w:A[_][C]=w.clone().lerp(I,C/L)}for(let _=0;_<E;_++)for(let w=0;w<2*(E-_)-1;w++){let I=Math.floor(w/2);w%2===0?(d(A[_][I+1]),d(A[_+1][I]),d(A[_][I])):(d(A[_][I+1]),d(A[_+1][I+1]),d(A[_+1][I]))}}function c(M){let b=new R;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(M),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){let M=new R;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];let y=p(M)/2/Math.PI+.5,v=g(M)/Math.PI+.5;o.push(y,1-v)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let b=o[M+0],y=o[M+2],v=o[M+4],E=Math.max(b,y,v),A=Math.min(b,y,v);E>.9&&A<.1&&(b<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),v<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,b){let y=M*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function m(){let M=new R,b=new R,y=new R,v=new R,E=new lt,A=new lt,_=new lt;for(let w=0,I=0;w<s.length;w+=9,I+=6){M.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),E.set(o[I+0],o[I+1]),A.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),v.copy(M).add(b).add(y).divideScalar(3);let L=p(v);x(E,I+0,M,L),x(A,I+2,b,L),x(_,I+4,y,L)}}function x(M,b,y,v){v<0&&M.x===1&&(o[b]=M.x-1),y.x===0&&y.z===0&&(o[b]=v/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new lt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],s=[],o=[],a=new R,l=new Rt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(oe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(oe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends wn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends mr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var jd=new R,Qd=new R,yh=new su,vh=new su,Mh=new su,gr=class extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Qd.subVectors(i[0],i[1]).add(i[0]),c=Qd);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(jd.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),yh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,p),vh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,p),Mh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Mh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(yh.calc(l),vh.calc(l),Mh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tf(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Jm(r,t){let e=1-r;return e*e*t}function $m(r,t){return 2*(1-r)*r*t}function jm(r,t){return r*r*t}function $r(r,t,e,n){return Jm(r,t)+$m(r,e)+jm(r,n)}function Qm(r,t){let e=1-r;return e*e*e*t}function t0(r,t){let e=1-r;return 3*e*e*r*t}function e0(r,t){return 3*(1-r)*r*r*t}function n0(r,t){return r*r*r*t}function jr(r,t,e,n,i){return Qm(r,t)+t0(r,e)+e0(r,n)+n0(r,i)}var mo=class extends wn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,s.x,o.x,a.x),jr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qa=class extends wn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,s.x,o.x,a.x),jr(t,i.y,s.y,o.y,a.y),jr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends wn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends wn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends wn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set($r(t,i.x,s.x,o.x),$r(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends wn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set($r(t,i.x,s.x,o.x),$r(t,i.y,s.y,o.y),$r(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(tf(a,l.x,c.x,h.x,u.x),tf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},el=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:gr,CubicBezierCurve:mo,CubicBezierCurve3:Qa,EllipseCurve:mr,LineCurve:go,LineCurve3:tl,QuadraticBezierCurve:xo,QuadraticBezierCurve3:_o,SplineCurve:yo}),nl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new el[i.type]().fromJSON(i))}return this}},vo=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new go(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new xo(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new mo(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new mr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends vo{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new vo().fromJSON(i))}return this}};function i0(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=tp(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=l0(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,u=l;for(let d=e;d<i;d+=e){let f=r[d],m=r[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Mo(s,o,e,a,l,c,0),o}function tp(r,t,e,n,i){let s;if(i===y0(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=ef(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ef(o/n|0,r[o],r[o+1],s);return s&&xr(s,s.next)&&(bo(s),s=s.next),s}function Ms(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(xr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&f0(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?r0(r,n,i,s):s0(r)){t.push(l.i,r.i,c.i),bo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=o0(Ms(r),t),Mo(r,t,e,n,i,s,2)):o===2&&a0(r,t,e,n,i,s):Mo(Ms(r),t,e,n,i,s,1);break}}}function s0(r){let t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Kr(i,a,s,l,o,c,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function r0(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),p=Math.max(h,u,d),g=Ah(f,m,t,e,n),M=Ah(x,p,t,e,n),b=r.prevZ,y=r.nextZ;for(;b&&b.z>=g&&y&&y.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Kr(a,h,l,u,c,d,b.x,b.y)&&Ne(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Kr(a,h,l,u,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Kr(a,h,l,u,c,d,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Kr(a,h,l,u,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function o0(r,t){let e=r;do{let n=e.prev,i=e.next.next;!xr(n,i)&&np(n,e,e.next,i)&&So(n,i)&&So(i,n)&&(t.push(n.i,e.i,i.i),bo(e),bo(e.next),e=r=i),e=e.next}while(e!==r);return Ms(e)}function a0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g0(o,a)){let l=ip(o,a);o=Ms(o,o.next),l=Ms(l,l.next),Mo(o,t,e,n,i,s,0),Mo(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function l0(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=tp(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(m0(c))}i.sort(c0);for(let s=0;s<i.length;s++)e=h0(i[s],e);return e}function c0(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function h0(r,t){let e=u0(r,t);if(!e)return t;let n=ip(e,r);return Ms(n,n.next),Ms(e,e.next)}function u0(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(xr(r,e))return e;do{if(xr(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ep(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);So(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&d0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function d0(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function f0(r,t,e,n){let i=r;do i.z===0&&(i.z=Ah(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,p0(i)}function p0(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Ah(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function m0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ep(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Kr(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&ep(r,t,e,n,i,s,o,a)}function g0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!x0(r,t)&&(So(r,t)&&So(t,r)&&_0(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||xr(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function xr(r,t){return r.x===t.x&&r.y===t.y}function np(r,t,e,n){let i=La(Ne(r,t,e)),s=La(Ne(r,t,n)),o=La(Ne(e,n,r)),a=La(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&Pa(r,e,t)||s===0&&Pa(r,n,t)||o===0&&Pa(e,r,n)||a===0&&Pa(e,t,n))}function Pa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function La(r){return r>0?1:r<0?-1:0}function x0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&np(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function So(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function _0(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ip(r,t){let e=Rh(r.i,r.x,r.y),n=Rh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ef(r,t,e,n){let i=Rh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rh(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Ch=class{static triangulate(t,e,n=2){return i0(t,e,n)}},us=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];nf(t),sf(n,t);let o=t.length;e.forEach(nf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,sf(n,e[l]);let a=Ch.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function nf(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function sf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var _r=class r extends $t{constructor(t=new vs([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Dt(i,3)),this.setAttribute("uv",new Dt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:v0,b,y=!1,v,E,A,_;if(g){b=g.getSpacedPoints(h),y=!0,d=!1;let st=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(h,st),E=new R,A=new R,_=new R}d||(p=0,f=0,m=0,x=0);let w=a.extractPoints(c),I=w.shape,L=w.holes;if(!us.isClockWise(I)){I=I.reverse();for(let st=0,at=L.length;st<at;st++){let ct=L[st];us.isClockWise(ct)&&(L[st]=ct.reverse())}}function N(st){let ct=10000000000000001e-36,ht=st[0];for(let pt=1;pt<=st.length;pt++){let Wt=pt%st.length,Ht=st[Wt],Zt=Ht.x-ht.x,Qt=Ht.y-ht.y,U=Zt*Zt+Qt*Qt,ge=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(ht.x),Math.abs(ht.y)),le=ct*ge*ge;if(U<=le){st.splice(Wt,1),pt--;continue}ht=Ht}}N(I),L.forEach(N);let D=L.length,O=I;for(let st=0;st<D;st++){let at=L[st];I=I.concat(at)}function F(st,at,ct){return at||Kt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(at,ct)}let z=I.length;function K(st,at,ct){let ht,pt,Wt,Ht=st.x-at.x,Zt=st.y-at.y,Qt=ct.x-st.x,U=ct.y-st.y,ge=Ht*Ht+Zt*Zt,le=Ht*U-Zt*Qt;if(Math.abs(le)>Number.EPSILON){let P=Math.sqrt(ge),S=Math.sqrt(Qt*Qt+U*U),H=at.x-Zt/P,X=at.y+Ht/P,Z=ct.x-U/S,ut=ct.y+Qt/S,dt=((Z-H)*U-(ut-X)*Qt)/(Ht*U-Zt*Qt);ht=H+Ht*dt-st.x,pt=X+Zt*dt-st.y;let J=ht*ht+pt*pt;if(J<=2)return new lt(ht,pt);Wt=Math.sqrt(J/2)}else{let P=!1;Ht>Number.EPSILON?Qt>Number.EPSILON&&(P=!0):Ht<-Number.EPSILON?Qt<-Number.EPSILON&&(P=!0):Math.sign(Zt)===Math.sign(U)&&(P=!0),P?(ht=-Zt,pt=Ht,Wt=Math.sqrt(ge)):(ht=Ht,pt=Zt,Wt=Math.sqrt(ge/2))}return new lt(ht/Wt,pt/Wt)}let W=[];for(let st=0,at=O.length,ct=at-1,ht=st+1;st<at;st++,ct++,ht++)ct===at&&(ct=0),ht===at&&(ht=0),W[st]=K(O[st],O[ct],O[ht]);let $=[],nt,j=W.concat();for(let st=0,at=D;st<at;st++){let ct=L[st];nt=[];for(let ht=0,pt=ct.length,Wt=pt-1,Ht=ht+1;ht<pt;ht++,Wt++,Ht++)Wt===pt&&(Wt=0),Ht===pt&&(Ht=0),nt[ht]=K(ct[ht],ct[Wt],ct[Ht]);$.push(nt),j=j.concat(nt)}let et;if(p===0)et=us.triangulateShape(O,L);else{let st=[],at=[];for(let ct=0;ct<p;ct++){let ht=ct/p,pt=f*Math.cos(ht*Math.PI/2),Wt=m*Math.sin(ht*Math.PI/2)+x;for(let Ht=0,Zt=O.length;Ht<Zt;Ht++){let Qt=F(O[Ht],W[Ht],Wt);ft(Qt.x,Qt.y,-pt),ht===0&&st.push(Qt)}for(let Ht=0,Zt=D;Ht<Zt;Ht++){let Qt=L[Ht];nt=$[Ht];let U=[];for(let ge=0,le=Qt.length;ge<le;ge++){let P=F(Qt[ge],nt[ge],Wt);ft(P.x,P.y,-pt),ht===0&&U.push(P)}ht===0&&at.push(U)}}et=us.triangulateShape(st,at)}let It=et.length,Vt=m+x;for(let st=0;st<z;st++){let at=d?F(I[st],j[st],Vt):I[st];y?(A.copy(v.normals[0]).multiplyScalar(at.x),E.copy(v.binormals[0]).multiplyScalar(at.y),_.copy(b[0]).add(A).add(E),ft(_.x,_.y,_.z)):ft(at.x,at.y,0)}for(let st=1;st<=h;st++)for(let at=0;at<z;at++){let ct=d?F(I[at],j[at],Vt):I[at];y?(A.copy(v.normals[st]).multiplyScalar(ct.x),E.copy(v.binormals[st]).multiplyScalar(ct.y),_.copy(b[st]).add(A).add(E),ft(_.x,_.y,_.z)):ft(ct.x,ct.y,u/h*st)}for(let st=p-1;st>=0;st--){let at=st/p,ct=f*Math.cos(at*Math.PI/2),ht=m*Math.sin(at*Math.PI/2)+x;for(let pt=0,Wt=O.length;pt<Wt;pt++){let Ht=F(O[pt],W[pt],ht);ft(Ht.x,Ht.y,u+ct)}for(let pt=0,Wt=L.length;pt<Wt;pt++){let Ht=L[pt];nt=$[pt];for(let Zt=0,Qt=Ht.length;Zt<Qt;Zt++){let U=F(Ht[Zt],nt[Zt],ht);y?ft(U.x,U.y+b[h-1].y,b[h-1].x+ct):ft(U.x,U.y,u+ct)}}}Yt(),Y();function Yt(){let st=i.length/3;if(d){let at=0,ct=z*at;for(let ht=0;ht<It;ht++){let pt=et[ht];kt(pt[2]+ct,pt[1]+ct,pt[0]+ct)}at=h+p*2,ct=z*at;for(let ht=0;ht<It;ht++){let pt=et[ht];kt(pt[0]+ct,pt[1]+ct,pt[2]+ct)}}else{for(let at=0;at<It;at++){let ct=et[at];kt(ct[2],ct[1],ct[0])}for(let at=0;at<It;at++){let ct=et[at];kt(ct[0]+z*h,ct[1]+z*h,ct[2]+z*h)}}n.addGroup(st,i.length/3-st,0)}function Y(){let st=i.length/3,at=0;Q(O,at),at+=O.length;for(let ct=0,ht=L.length;ct<ht;ct++){let pt=L[ct];Q(pt,at),at+=pt.length}n.addGroup(st,i.length/3-st,1)}function Q(st,at){let ct=st.length;for(;--ct>=0;){let ht=ct,pt=ct-1;pt<0&&(pt=st.length-1);for(let Wt=0,Ht=h+p*2;Wt<Ht;Wt++){let Zt=z*Wt,Qt=z*(Wt+1),U=at+ht+Zt,ge=at+pt+Zt,le=at+pt+Qt,P=at+ht+Qt;wt(U,ge,le,P)}}}function ft(st,at,ct){l.push(st),l.push(at),l.push(ct)}function kt(st,at,ct){Gt(st),Gt(at),Gt(ct);let ht=i.length/3,pt=M.generateTopUV(n,i,ht-3,ht-2,ht-1);fe(pt[0]),fe(pt[1]),fe(pt[2])}function wt(st,at,ct,ht){Gt(st),Gt(at),Gt(ht),Gt(at),Gt(ct),Gt(ht);let pt=i.length/3,Wt=M.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);fe(Wt[0]),fe(Wt[1]),fe(Wt[3]),fe(Wt[1]),fe(Wt[2]),fe(Wt[3])}function Gt(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function fe(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return M0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new el[i.type]().fromJSON(i)),new r(n,t.options)}},v0={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(s,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[s*3],p=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-m),new lt(x,1-g)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-m),new lt(p,1-g)]}};function M0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Nn=class r extends $a{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Eo=class r extends $t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let M=g*d-o;for(let b=0;b<c;b++){let y=b*u-s;m.push(y,-M,0),x.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let b=M+c*g,y=M+c*(g+1),v=M+1+c*(g+1),E=M+1+c*g;f.push(b,y,E),f.push(y,v,E)}this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Ss=class r extends $t{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new R,m=new lt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let g=s+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let p=x*(n+1);for(let g=0;g<n;g++){let M=g+p,b=M,y=M+n+1,v=M+n+2,E=M+1;a.push(b,y,E),a.push(y,v,E)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ue=class r extends $t{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let M=[],b=g/n,y=o+b*a,v=t*Math.cos(y),E=Math.sqrt(t*t-v*v),A=0;g===0&&o===0?A=.5/e:g===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let w=_/e,I=i+w*s;u.x=-E*Math.cos(I),u.y=v,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(w+A,1-b),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let b=h[g][M+1],y=h[g][M],v=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&f.push(b,y,E),(g!==n-1||l<Math.PI)&&f.push(y,v,E)}this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yr=class r extends $t{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new R,f=new R,m=new R;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let g=0;g<=i;g++){let M=g/i*s;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){let g=(i+1)*x+p-1,M=(i+1)*(x-1)+p-1,b=(i+1)*(x-1)+p,y=(i+1)*x+p;l.push(g,M,y),l.push(M,b,y)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var wo=class r extends $t{constructor(t=new _o(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new lt,h=new R,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function x(){for(let b=0;b<e;b++)p(b);p(s===!1?e:0),M(),g()}function p(b){h=t.getPointAt(b/e,h);let y=o.normals[b],v=o.binormals[b];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,_=Math.sin(A),w=-Math.cos(A);l.x=w*y.x+_*v.x,l.y=w*y.y+_*v.y,l.z=w*y.z+_*v.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=i;y++){let v=(i+1)*(b-1)+(y-1),E=(i+1)*b+(y-1),A=(i+1)*b+y,_=(i+1)*(b-1)+y;m.push(v,E,_),m.push(E,A,_)}}function M(){for(let b=0;b<=e;b++)for(let y=0;y<=i;y++)c.x=b/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new el[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ls(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(rf(i))i.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(rf(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function hn(r){let t={};for(let e=0;e<r.length;e++){let n=Ls(r[e]);for(let i in n)t[i]=n[i]}return t}function rf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function S0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ru(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Rr={clone:Ls,merge:hn},b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=S0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_n=class extends qt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Un=class extends cn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sl=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vi(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Oa(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function w0(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function of(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function T0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}var si=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends si{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cs,endingEnd:cs}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hs:s=t,a=2*e-n;break;case Qr:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hs:o=t,l=2*n-e;break;case Qr:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let v=0;v!==a;++v)s[v]=g*o[h+v]+M*o[c+v]+b*o[l+v]+y*o[u+v];return s}},To=class extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},al=class extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends si{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*x+o[l+p]*m;return s}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=f*d+m*2,M=u[g],b=u[g+1],y=t*d+m*2,v=h[y],E=h[y+1],A=R0(n,e,M,v,i);s[m]=sp(A,x,b,E,p)}return s}};function sp(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function A0(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function R0(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=sp(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=A0(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vi(e,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vi(t.times,Array),values:Vi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Oa(t.settings)&&(n.settings={inTangents:Vi(t.settings.inTangents,Array),outTangents:Vi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case ps:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Oa(this.settings)&&(af(this.settings.inTangents,t),af(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Oa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function af(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ps;var Ti=class extends yn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=fs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};Ao.prototype.ValueTypeName="color";var Ai=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};Ai.prototype.ValueTypeName="number";var cl=class extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)pe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ri=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends yn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};Yi.prototype.ValueTypeName="vector";var bs=class{constructor(t="",e=-1,n=[],i=oc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(I0(n[o]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=w0(l);l=of(l,1,h),c=of(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function C0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return Ao;case"quaternion":return Ri;case"bool":case"boolean":return Ti;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function I0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=C0(r.type);if(r.times===void 0){let n=[],i=[];T0(r.keys,n,i,"value"),r.times=n,r.values=i}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Oa(r.settings)&&(e.settings={inTangents:Vi(r.settings.inTangents,Float32Array),outTangents:Vi(r.settings.outTangents,Float32Array)}),e}var ni={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(lf(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!lf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function lf(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var hl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new hl,ri=class{constructor(t){this.manager=t!==void 0?t:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Ih=class extends Error{constructor(t,e){super(t),this.response=e}},vr=class extends ri{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=ni.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:i});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=yi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,p=new ReadableStream({start(g){M();function M(){u.read().then(({done:b,value:y})=>{if(b)g.close();else{x+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let E=0,A=h.length;E<A;E++){let _=h[E];_.onProgress&&_.onProgress(v)}g.enqueue(y),M()}},b=>{g.error(b)})}}});return new Response(p)}else throw new Ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ni.add(`file:${t}`,c);let h=yi[t];delete yi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=yi[t];if(h===void 0)throw this.manager.itemError(t),c;delete yi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tr=new WeakMap,ul=class extends ri{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ni.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=tr.get(o);u===void 0&&(u=[],tr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=ar("img");function l(){h(),e&&e(this);let u=tr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}tr.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),ni.remove(`image:${t}`);let d=tr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}tr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Es=class extends ri{constructor(t){super(t)}load(t,e,n,i){let s=new je,o=new ul(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},ws=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ro=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sh=new Rt,cf=new R,hf=new R,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sh,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Da=new R,Na=new pe,ei=new R,Co=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Da,Na,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Da,Na,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new R,uf=new lt,df=new lt,Je=class extends Co{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,uf,df),e.subVectors(df,uf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ph=class extends Mr{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ms*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Io=class extends ws{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Lh=class extends Mr{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},Ts=class extends ws{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends Co{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dh=class extends Mr{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ii=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var bh=new WeakMap,Po=class extends ri{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ft("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ft("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ni.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{bh.has(o)===!0?(i&&i(bh.get(o)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),bh.set(l,c),ni.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ni.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=-90,nr=1,dl=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Je(er,nr,t,e);i.layers=this.layers,this.add(i);let s=new Je(er,nr,t,e);s.layers=this.layers,this.add(s);let o=new Je(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new Je(er,nr,t,e);a.layers=this.layers,this.add(a);let l=new Je(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new Je(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var pl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){pe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let o=this._workIndex*s;pe.multiplyQuaternionsFlat(t,o,t,e,t,n),pe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},ou="\\[\\]\\.:\\/",P0=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",L0="[^"+ou.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",au),N0=/(WCOD+)?/.source.replace("WCOD",L0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),O0=new RegExp("^"+D0+N0+U0+F0+"$"),B0=["material","materials","bones","map"],Nh=class{constructor(t,e,n){let i=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(t){let e=O0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);B0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Nh;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ml=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,o=s.length,a=new Array(o),l={endingStart:cs,endingEnd:cs};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=rc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case oc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,o=n===Of;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===sc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=hs,i.endingEnd=hs):(t?i.endingStart=this.zeroSlopeAtStart?hs:cs:i.endingStart=Qr,e?i.endingEnd=this.zeroSlopeAtEnd?hs:cs:i.endingEnd=Qr)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}},k0=new Float32Array(1),Lo=class extends qn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;m=new pl(Ee.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new To(new Float32Array(2),new Float32Array(2),1,k0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,o=typeof t=="string"?bs.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=oc),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new ml(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?bs.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var fu=class fu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};fu.prototype.isMatrix2=!0;var Uh=fu;function lu(r,t,e,n){let i=z0(n);switch(e){case jh:return r*t;case El:return r*t/i.components*i.byteLength;case wl:return r*t/i.components*i.byteLength;case $i:return r*t*2/i.components*i.byteLength;case Tl:return r*t*2/i.components*i.byteLength;case Qh:return r*t*3/i.components*i.byteLength;case An:return r*t*4/i.components*i.byteLength;case Al:return r*t*4/i.components*i.byteLength;case Fo:case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Pl:return Math.max(r,16)*Math.max(t,8)/4;case Rl:case Il:return Math.max(r,8)*Math.max(t,8)/2;case Ll:case Dl:case Ul:case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nl:case zo:case Ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jl:case Ql:case tc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ho:case ic:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z0(r){switch(r){case vn:case Kh:return{byteLength:1,components:1};case wr:case Zh:case $n:return{byteLength:2,components:1};case Sl:case bl:return{byteLength:2,components:4};case Jn:case Ml:case Tn:return{byteLength:4,components:1};case Jh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ap(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function V0(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dg=`#define PI 3.141592653589793
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
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Hg=`uniform sampler2D dfgLUT;
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
	vec3 f0 = material.specularColorBlended;
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Vg=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,a_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,M_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:$0,batching_vertex:j0,begin_vertex:Q0,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:dg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:xg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:vg,envmap_fragment:Mg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:bg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Ug,envmap_vertex:wg,fog_vertex:Tg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Pg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:kg,lights_physical_fragment:zg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:$g,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ex,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:_x,premultiplied_alpha_fragment:yx,project_vertex:vx,dithering_fragment:Mx,dithering_pars_fragment:Sx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Ix,skinning_vertex:Px,skinnormal_vertex:Lx,specularmap_fragment:Dx,specularmap_pars_fragment:Nx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Fx,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:kx,uv_pars_vertex:zx,uv_vertex:Hx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Kx,depth_vert:Zx,depth_frag:Jx,distance_vert:$x,distance_frag:jx,equirect_vert:Qx,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:x_,points_frag:__,shadow_vert:y_,shadow_frag:v_,sprite_vert:M_,sprite_frag:S_},mt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ci={basic:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:hn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:hn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new vt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:hn([mt.points,mt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:hn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:hn([mt.common,mt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:hn([mt.sprite,mt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:hn([mt.common,mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:hn([mt.lights,mt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var cc={r:0,b:0,g:0},b_=new Rt,Rp=new jt;Rp.set(-1,0,0,0,1,0,0,0,1);function E_(r,t,e,n,i,s){let o=new vt(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let y=M.backgroundBlurriness>0;b=t.get(b,y)}return b}function m(M){let b=!1,y=f(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),b=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(M,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===Uo)?(c===void 0&&(c=new Et(new xn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ls(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rp),c.material.toneMapped=re.getTransfer(y.colorSpace)!==ve,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Et(new Eo(2,2),new We({name:"BackgroundMaterial",uniforms:Ls(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(cc,ru(r)),e.buffers.color.setClear(cc.r,cc.g,cc.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:x,dispose:g}}function w_(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(L,C,N,D,O){let F=!1,z=u(L,D,N,C);s!==z&&(s=z,c(s.object)),F=f(L,D,N,O),F&&m(L,D,N,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(L,C,N,D),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function u(L,C,N,D){let O=D.wireframe===!0,F=n[C.id];F===void 0&&(F={},n[C.id]=F);let z=L.isInstancedMesh===!0?L.id:0,K=F[z];K===void 0&&(K={},F[z]=K);let W=K[N.id];W===void 0&&(W={},K[N.id]=W);let $=W[O];return $===void 0&&($=d(l()),W[O]=$),$}function d(L){let C=[],N=[],D=[];for(let O=0;O<e;O++)C[O]=0,N[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,C,N,D){let O=s.attributes,F=C.attributes,z=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let nt=O[W],j=F[W];if(j===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),nt===void 0||nt.attribute!==j||j&&nt.data!==j.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function m(L,C,N,D){let O={},F=C.attributes,z=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let nt=F[W];nt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let j={};j.attribute=nt,nt&&nt.data&&(j.data=nt.data),O[W]=j,z++}s.attributes=O,s.attributesNum=z,s.index=D}function x(){let L=s.newAttributes;for(let C=0,N=L.length;C<N;C++)L[C]=0}function p(L){g(L,0)}function g(L,C){let N=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;N[L]=1,D[L]===0&&(r.enableVertexAttribArray(L),D[L]=1),O[L]!==C&&(r.vertexAttribDivisor(L,C),O[L]=C)}function M(){let L=s.newAttributes,C=s.enabledAttributes;for(let N=0,D=C.length;N<D;N++)C[N]!==L[N]&&(r.disableVertexAttribArray(N),C[N]=0)}function b(L,C,N,D,O,F,z){z===!0?r.vertexAttribIPointer(L,C,N,O,F):r.vertexAttribPointer(L,C,N,D,O,F)}function y(L,C,N,D){x();let O=D.attributes,F=N.getAttributes(),z=C.defaultAttributeValues;for(let K in F){let W=F[K];if(W.location>=0){let $=O[K];if($===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let nt=$.normalized,j=$.itemSize,et=t.get($);if(et===void 0)continue;let It=et.buffer,Vt=et.type,Yt=et.bytesPerElement,Y=Vt===r.INT||Vt===r.UNSIGNED_INT||$.gpuType===Ml;if($.isInterleavedBufferAttribute){let Q=$.data,ft=Q.stride,kt=$.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt);r.bindBuffer(r.ARRAY_BUFFER,It);for(let wt=0;wt<W.locationSize;wt++)b(W.location+wt,j/W.locationSize,Vt,nt,ft*Yt,(kt+j/W.locationSize*wt)*Yt,Y)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q,$.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q);r.bindBuffer(r.ARRAY_BUFFER,It);for(let Q=0;Q<W.locationSize;Q++)b(W.location+Q,j/W.locationSize,Vt,nt,j*Yt,j/W.locationSize*Q*Yt,Y)}}else if(z!==void 0){let nt=z[K];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(W.location,nt);break;case 3:r.vertexAttrib3fv(W.location,nt);break;case 4:r.vertexAttrib4fv(W.location,nt);break;default:r.vertexAttrib1fv(W.location,nt)}}}}M()}function v(){w();for(let L in n){let C=n[L];for(let N in C){let D=C[N];for(let O in D){let F=D[O];for(let z in F)h(F[z].object),delete F[z];delete D[O]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let C=n[L.id];for(let N in C){let D=C[N];for(let O in D){let F=D[O];for(let z in F)h(F[z].object),delete F[z];delete D[O]}}delete n[L.id]}function A(L){for(let C in n){let N=n[C];for(let D in N){let O=N[D];if(O[L.id]===void 0)continue;let F=O[L.id];for(let z in F)h(F[z].object),delete F[z];delete O[L.id]}}}function _(L){for(let C in n){let N=n[C],D=L.isInstancedMesh===!0?L.id:0,O=N[D];if(O!==void 0){for(let F in O){let z=O[F];for(let K in z)h(z[K].object),delete z[K];delete O[F]}delete N[D],Object.keys(N).length===0&&delete n[C]}}}function w(){I(),o=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function T_(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function A_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==An&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vn&&A!==Tn&&!_&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:v,samples:E}}function R_(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Gn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,b=M*4,y=g.clippingState||null;l.value=y,y=h(m,d,b,f);for(let v=0;v!==b;++v)y[v]=e[v];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Ir=4,C_=6,I_=20,P_=256,qo=new Ki,op=new vt,pu=null,mu=0,gu=0,xu=!1,L_=new R,Ds=new R,uc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=L_}=s;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=xu,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:$n,format:An,colorSpace:pn,depthBuffer:!1},i=ap(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D_(s)),this._blurMaterial=U_(s,t,e),this._ggxMaterial=N_(s,t,e)}return i}_compileMaterial(t){let e=new Et(new $t,t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i,s){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(op),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new xn,new Ge({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,g=!0):(p.color.copy(op),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let v=this._cubeSize;Cr(i,y*v,b>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Zi||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-Ir?n-m+Ir:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Cr(s,p,g,3*x,2*x),i.setRenderTarget(s),i.render(a,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Cr(t,p,g,3*x,2*x),i.setRenderTarget(t),i.render(a,qo)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Ir?i-this._lodMax+Ir:0),d=4*(this._cubeSize-h);Cr(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,qo)}};function D_(r){let t=[],e=[],n=r,i=r-Ir+1+C_;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let M=g%3*2/3-1,b=g>2?0:-1,y=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];m.set(y,f*d*g);for(let v=0;v<d;v++){let E=h[v*2]*2-1,A=h[v*2+1]*2-1;g===0?Ds.set(1,A,E):g===1?Ds.set(-E,1,-A):g===2?Ds.set(-E,A,1):g===3?Ds.set(-1,A,-E):g===4?Ds.set(-E,-1,A):Ds.set(E,A,-1),Ds.toArray(x,(g*d+v)*f)}}let p=new $t;p.setAttribute("position",new Jt(m,f)),p.setAttribute("outputDirection",new Jt(x,f)),e.push(new Et(p,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function ap(r,t,e){let n=new mn(r,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function N_(r,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function U_(r,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lp(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function cp(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new uo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xn(5,5,5),s=new We({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ai});s.uniforms.tEquirect.value=e;let o=new Et(i,s),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Ve),new dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function F_(r){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===_l||f===yl)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new dc(m.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===_l||f===yl,x=f===Zi||f===Is;if(m||x){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new uc(r)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return m&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new uc(r)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===_l?d.mapping=Zi:f===yl&&(d.mapping=Is),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function O_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ds("WebGLRenderer: "+n+" extension not supported."),i}}}function B_(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let b=0,y=M.length;b<y;b+=3){let v=M[b+0],E=M[b+1],A=M[b+2];d.push(v,E,E,A,A,v)}}else{let M=m.array;x=m.version;for(let b=0,y=M.length/3-1;b<y;b+=3){let v=b+0,E=b+1,A=b+2;d.push(v,E,E,A,A,v)}}let p=new(m.count>=65535?ao:oo)(d,1);p.version=x;let g=s.get(u);g&&t.remove(g),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function k_(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function H_(r,t,e){let n=new WeakMap,i=new Se;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*v*4*u),A=new no(E,y,v,u);A.type=Tn,A.needsUpdate=!0;let _=b*4;for(let I=0;I<u;I++){let L=p[I],C=g[I],N=M[I],D=y*v*4*I;for(let O=0;O<L.count;O++){let F=O*_;f===!0&&(i.fromBufferAttribute(L,O),E[D+F+0]=i.x,E[D+F+1]=i.y,E[D+F+2]=i.z,E[D+F+3]=0),m===!0&&(i.fromBufferAttribute(C,O),E[D+F+4]=i.x,E[D+F+5]=i.y,E[D+F+6]=i.z,E[D+F+7]=0),x===!0&&(i.fromBufferAttribute(N,O),E[D+F+8]=i.x,E[D+F+9]=i.y,E[D+F+10]=i.z,E[D+F+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new lt(y,v)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function V_(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var G_={[Hh]:"LINEAR_TONE_MAPPING",[Vh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function W_(r,t,e,n,i,s){let o=new mn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new $t;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let h=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Et(c,h),d=new Ki(-1,1,1,-1,0,1),f=null,m=null,x=!1,p,g=null,M=[],b=!1;this.setSize=function(y,v){o.setSize(y,v),a!==null&&a.setSize(y,v),l!==null&&l.setSize(y,v);for(let E=0;E<M.length;E++){let A=M[E];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){M=y,b=M.length>0&&M[0].isRenderPass===!0;let v=o.width,E=o.height;M.length>0&&a===null&&(a=new mn(v,E,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new mn(v,E,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(v,E)}},this.begin=function(y,v){if(x||y.toneMapping===Kn&&M.length===0)return!1;if(g=v,v!==null){let E=v.width,A=v.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return b===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=Kn,!0},this.hasRenderPass=function(){return b},this.end=function(y,v){y.toneMapping=p,x=!0;let E=o,A=a;for(let _=0;_<M.length;_++){let w=M[_];w.enabled!==!1&&(w.render(y,A,E,v),w.needsSwap!==!1&&(E=A,A=A===a?l:a))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},re.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let _=G_[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cp=new je,vu=new qi(1,1),Ip=new no,Pp=new Ya,Lp=new uo,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Lr(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=hp[i];if(s===void 0&&(s=new Float32Array(i),hp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function tn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function en(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function mc(r,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function X_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function q_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2fv(this.addr,t),en(e,t)}}function Y_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;r.uniform3fv(this.addr,t),en(e,t)}}function K_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4fv(this.addr,t),en(e,t)}}function Z_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;pp.set(n),r.uniformMatrix2fv(this.addr,!1,pp),en(e,n)}}function J_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;fp.set(n),r.uniformMatrix3fv(this.addr,!1,fp),en(e,n)}}function $_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;dp.set(n),r.uniformMatrix4fv(this.addr,!1,dp),en(e,n)}}function j_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Q_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2iv(this.addr,t),en(e,t)}}function ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;r.uniform3iv(this.addr,t),en(e,t)}}function ey(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4iv(this.addr,t),en(e,t)}}function ny(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function iy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2uiv(this.addr,t),en(e,t)}}function sy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;r.uniform3uiv(this.addr,t),en(e,t)}}function ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4uiv(this.addr,t),en(e,t)}}function oy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vu.compareFunction=e.isReversedDepthBuffer()?lc:ac,s=vu):s=Cp,e.setTexture2D(t||s,i)}function ay(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pp,i)}function ly(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lp,i)}function cy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ip,i)}function hy(r){switch(r){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return K_;case 35674:return Z_;case 35675:return J_;case 35676:return $_;case 5124:case 35670:return j_;case 35667:case 35671:return Q_;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}function uy(r,t){r.uniform1fv(this.addr,t)}function dy(r,t){let e=Lr(t,this.size,2);r.uniform2fv(this.addr,e)}function fy(r,t){let e=Lr(t,this.size,3);r.uniform3fv(this.addr,e)}function py(r,t){let e=Lr(t,this.size,4);r.uniform4fv(this.addr,e)}function my(r,t){let e=Lr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gy(r,t){let e=Lr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xy(r,t){let e=Lr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _y(r,t){r.uniform1iv(this.addr,t)}function yy(r,t){r.uniform2iv(this.addr,t)}function vy(r,t){r.uniform3iv(this.addr,t)}function My(r,t){r.uniform4iv(this.addr,t)}function Sy(r,t){r.uniform1uiv(this.addr,t)}function by(r,t){r.uniform2uiv(this.addr,t)}function Ey(r,t){r.uniform3uiv(this.addr,t)}function wy(r,t){r.uniform4uiv(this.addr,t)}function Ty(r,t,e){let n=this.cache,i=t.length,s=mc(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=vu:o=Cp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Ay(r,t,e){let n=this.cache,i=t.length,s=mc(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Pp,s[o])}function Ry(r,t,e){let n=this.cache,i=t.length,s=mc(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Lp,s[o])}function Cy(r,t,e){let n=this.cache,i=t.length,s=mc(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ip,s[o])}function Iy(r){switch(r){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}var Mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hy(e.type)}},Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iy(e.type)}},bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},_u=/(\w+)(\])?(\[|\.)?/g;function mp(r,t){r.seq.push(t),r.map[t.id]=t}function Py(r,t,e){let n=r.name,i=n.length;for(_u.lastIndex=0;;){let s=_u.exec(n),o=_u.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mp(e,c===void 0?new Mu(a,r,t):new Su(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new bu(a),mp(e,u)),e=u}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Py(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function gp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Ly=37297,Dy=0;function Ny(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xp=new jt;function Uy(r){re._getMatrix(xp,re.workingColorSpace,r);let t=`mat3( ${xp.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(r)){case to:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _p(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ny(r.getShaderSource(t),a)}else return s}function Fy(r,t){let e=Uy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Oy={[Hh]:"Linear",[Vh]:"Reinhard",[Gh]:"Cineon",[No]:"ACESFilmic",[Xh]:"AgX",[qh]:"Neutral",[Wh]:"Custom"};function By(r,t){let e=Oy[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hc=new R;function ky(){re.getLuminanceCoefficients(hc);let r=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function Hy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ko(r){return r!==""}function yp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(r){return r.replace(Gy,Xy)}var Wy=new Map;function Xy(r,t){let e=se[t];if(e===void 0){let n=Wy.get(t);if(n!==void 0)e=se[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eu(e)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(r){return r.replace(qy,Yy)}function Yy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ky={[Rs]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function Zy(r){return Ky[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jy={[Zi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};function $y(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Jy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var jy={[Is]:"ENVMAP_MODE_REFRACTION"};function Qy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tv={[xl]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function ev(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":tv[r.combine]||"ENVMAP_BLENDING_NONE"}function nv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function iv(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zy(e),c=$y(e),h=Qy(e),u=ev(e),d=nv(e),f=zy(e),m=Hy(s),x=i.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ko).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ko).join(`
`),g.length>0&&(g+=`
`)):(p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),g=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?se.tonemapping_pars_fragment:"",e.toneMapping!==Kn?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Fy("linearToOutputTexel",e.outputColorSpace),ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ko).join(`
`)),o=Eu(o),o=yp(o,e),o=vp(o,e),a=Eu(a),a=yp(a,e),a=vp(a,e),o=Mp(o),a=Mp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=M+p+o,y=M+g+a,v=gp(i,i.VERTEX_SHADER,b),E=gp(i,i.FRAGMENT_SHADER,y);i.attachShader(x,v),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(r.debug.checkShaderErrors){let C=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(v)||"",D=i.getShaderInfoLog(E)||"",O=C.trim(),F=N.trim(),z=D.trim(),K=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,v,E);else{let $=_p(i,v,"vertex"),nt=_p(i,E,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+nt)}else O!==""?Ft("WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:O,vertexShader:{log:F,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(v),i.deleteShader(E),_=new Pr(i,x),w=Vy(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(x,Ly)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=E,this}var sv=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tu(t),e.set(t,n)),n}},Tu=class{constructor(t){this.id=sv++,this.code=t,this.usedTimes=0}};function rv(r){return r===$i||r===zo||r===Ho}function ov(r,t,e,n,i,s){let o=new io,a=new wu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,I,L,C,N){let D=L.fog,O=C.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=t.get(_.envMap||F,z),W=K&&K.mapping===Uo?K.image.height:null,$=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=nt!==void 0?nt.length:0,et=0;O.morphAttributes.position!==void 0&&(et=1),O.morphAttributes.normal!==void 0&&(et=2),O.morphAttributes.color!==void 0&&(et=3);let It,Vt,Yt,Y;if($){let Ae=ci[$];It=Ae.vertexShader,Vt=Ae.fragmentShader}else{It=_.vertexShader,Vt=_.fragmentShader;let Ae=a.getVertexShaderStage(_),xe=a.getFragmentShaderStage(_);a.update(_,Ae,xe),Yt=Ae.id,Y=xe.id}let Q=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),kt=C.isInstancedMesh===!0,wt=C.isBatchedMesh===!0,Gt=!!_.map,fe=!!_.matcap,st=!!K,at=!!_.aoMap,ct=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Wt=!!_.displacementMap,Ht=!!_.emissiveMap,Zt=!!_.metalnessMap,Qt=!!_.roughnessMap,U=_.anisotropy>0,ge=_.clearcoat>0,le=_.dispersion>0,P=_.retroreflectivity>0,S=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,Z=U&&!!_.anisotropyMap,ut=ge&&!!_.clearcoatMap,dt=ge&&!!_.clearcoatNormalMap,J=ge&&!!_.clearcoatRoughnessMap,rt=S&&!!_.iridescenceMap,gt=S&&!!_.iridescenceThicknessMap,Ot=H&&!!_.sheenColorMap,Mt=H&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Bt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,te=X&&!!_.transmissionMap,k=X&&!!_.thicknessMap,_t=!!_.gradientMap,it=!!_.alphaMap,yt=_.alphaTest>0,Tt=!!_.alphaHash,ot=!!_.extensions,zt=Kn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(zt=r.toneMapping);let Nt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:Vt,defines:_.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:wt,batchingColor:wt&&C._colorsTexture!==null,instancing:kt,instancingColor:kt&&C.instanceColor!==null,instancingMorph:kt&&C.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:fe,envMap:st,envMapMode:st&&K.mapping,envMapCubeUVHeight:W,aoMap:at,lightMap:ct,bumpMap:ht,normalMap:pt,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:pt&&_.normalMapType===zf,normalMapTangentSpace:pt&&_.normalMapType===Go,packedNormalMap:pt&&_.normalMapType===Go&&rv(_.normalMap.format),metalnessMap:Zt,roughnessMap:Qt,anisotropy:U,anisotropyMap:Z,clearcoat:ge,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:le,retroreflection:P,iridescence:S,iridescenceMap:rt,iridescenceThicknessMap:gt,sheen:H,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:xt,specularColorMap:Bt,specularIntensityMap:Xt,transmission:X,transmissionMap:te,thicknessMap:k,gradientMap:_t,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Tt,combine:_.combine,mapUv:Gt&&m(_.map.channel),aoMapUv:at&&m(_.aoMap.channel),lightMapUv:ct&&m(_.lightMap.channel),bumpMapUv:ht&&m(_.bumpMap.channel),normalMapUv:pt&&m(_.normalMap.channel),displacementMapUv:Wt&&m(_.displacementMap.channel),emissiveMapUv:Ht&&m(_.emissiveMap.channel),metalnessMapUv:Zt&&m(_.metalnessMap.channel),roughnessMapUv:Qt&&m(_.roughnessMap.channel),anisotropyMapUv:Z&&m(_.anisotropyMap.channel),clearcoatMapUv:ut&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(_.sheenRoughnessMap.channel),specularMapUv:xt&&m(_.specularMap.channel),specularColorMapUv:Bt&&m(_.specularColorMap.channel),specularIntensityMapUv:Xt&&m(_.specularIntensityMap.channel),transmissionMapUv:te&&m(_.transmissionMap.channel),thicknessMapUv:k&&m(_.thicknessMap.channel),alphaMapUv:it&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pt||U),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(Gt||it),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)w.push(I),w.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(w,_),M(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let w=f[_.type],I;if(w){let L=ci[w];I=Rr.clone(L.uniforms)}else I=_.uniforms;return I}function y(_,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new iv(r,w,_,i),c.push(I),h.set(w,I)),I}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:A}}function av(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function lv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function bp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ep(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,p,g){let M=r[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},r[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=p,M.group=g),t++,M}function l(d,f,m,x,p,g,M){M.reversedDepth===!0&&(p=-p);let b=a(d,f,m,x,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):e.push(b)}function c(d,f,m,x,p,g){let M=a(d,f,m,x,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||lv),n.length>1&&n.sort(f||bp),i.length>1&&i.sort(f||bp)}function u(){for(let d=t,f=r.length;d<f;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function cv(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Ep,r.set(n,[o])):i>=s.length?(o=new Ep,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function hv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function uv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var dv=0;function fv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function pv(r){let t=new hv,e=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,s=new Rt,o=new Rt;function a(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,M=0,b=0,y=0,v=0,E=0,A=0,_=0,w=0,I=0;c.sort(fv);for(let C=0,N=c.length;C<N;C++){let D=c[C],O=D.color,F=D.intensity,z=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$i?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],F);I++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=nt,n.sunShadowMap[m]=K;let j=$.getViewportCount();for(let et=0;et<j;et++)n.sunShadowMatrix[x+et]=$.getMatrix(et),n.sunShadowCascade[x+et]=$._cascadeData[et];x+=j,m++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=W,p++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[M]=W;let $=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,$.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[M]=$.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=K,A++}M++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=W,b++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let $=D.shadow,nt=e.get(D);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,nt.shadowCameraNear=$.camera.near,nt.shadowCameraFar=$.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(F),W.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[y]=W,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==v||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=M,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=v,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=I,n.version=dv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let y=c[M];if(y.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function wp(r){let t=new pv(r),e=[],n=[],i=[];function s(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function mv(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new wp(r),t.set(i,[a])):s>=o.length?(a=new wp(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,_v=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],yv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Tp=new Rt,Yo=new R,yu=new R;function vv(r,t,e){let n=new pr,i=new lt,s=new lt,o=new Se,a=new sl,l=new rl,c={},h=e.maxTextureSize,u={[oi]:Qe,[Qe]:oi,[Fe]:Fe},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new $t;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Et(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let g=this.type;this.render=function(E,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===mf&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let w=r.getRenderTarget(),I=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),C=r.state;C.setBlending(ai),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=g!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=E.length;D<O;D++){let F=E[D],z=F.shadow;if(z===void 0){Ft("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let K=z.getFrameExtents();i.multiply(K),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,z.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Sr){if(F.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new mn(i.x,i.y,{format:$i,type:$n,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new qi(i.x,i.y,Tn),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He}else F.isPointLight?(z.map=new dc(i.x),z.map.depthTexture=new Ja(i.x,Jn)):(z.map=new mn(i.x,i.y),z.map.depthTexture=new qi(i.x,i.y,Jn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=ii,this.type===Rs?(z.map.depthTexture.compareFunction=W?lc:ac,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let $=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,_);for(let nt=0;nt<$;nt++){let j=z.getCamera(nt);if(F.isPointLight){let et=z.camera,It=z.matrix,Vt=F.distance||et.far;Vt!==et.far&&(et.far=Vt,et.updateProjectionMatrix()),Yo.setFromMatrixPosition(F.matrixWorld),et.position.copy(Yo),yu.copy(et.position),yu.add(_v[nt]),et.up.copy(yv[nt]),et.lookAt(yu),et.updateMatrixWorld(),It.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Tp.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Tp,et.coordinateSystem,et.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(z.map),r.clear());let et=z.getViewport(nt);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),C.viewport(o)}n=z.getFrustum(nt),y(A,_,j,F,this.type)}z.isPointLightShadow!==!0&&this.type===Sr&&M(z,_),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(w,I,L)};function M(E,A){let _=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new mn(i.x,i.y,{format:$i,type:$n}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,_,f,x,null)}function b(E,A,_,w){let I=null,L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)I=L;else if(I=_.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=I.uuid,N=A.uuid,D=c[C];D===void 0&&(D={},c[C]=D);let O=D[N];O===void 0&&(O=I.clone(),D[N]=O,A.addEventListener("dispose",v)),I=O}if(I.visible=A.visible,I.wireframe=A.wireframe,w===Sr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let C=r.properties.get(I);C.light=_}return I}function y(E,A,_,w,I){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Sr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let N=t.update(E),D=E.material;if(Array.isArray(D)){let O=N.groups;for(let F=0,z=O.length;F<z;F++){let K=O[F],W=D[K.materialIndex];if(W&&W.visible){let $=b(E,W,w,I);E.onBeforeShadow(r,E,A,_,N,$,K),r.renderBufferDirect(_,null,N,$,E,K),E.onAfterShadow(r,E,A,_,N,$,K)}}}else if(D.visible){let O=b(E,D,w,I);E.onBeforeShadow(r,E,A,_,N,O,null),r.renderBufferDirect(_,null,N,O,E,null),E.onAfterShadow(r,E,A,_,N,O,null)}}let C=E.children;for(let N=0,D=C.length;N<D;N++)y(C[N],A,_,w,I)}function v(E){E.target.removeEventListener("dispose",v);for(let _ in c){let w=c[_],I=E.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function Mv(r,t){function e(){let k=!1,_t=new Se,it=null,yt=new Se(0,0,0,0);return{setMask:function(Tt){it!==Tt&&!k&&(r.colorMask(Tt,Tt,Tt,Tt),it=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,ot,zt,Nt,Ae){Ae===!0&&(Tt*=Nt,ot*=Nt,zt*=Nt),_t.set(Tt,ot,zt,Nt),yt.equals(_t)===!1&&(r.clearColor(Tt,ot,zt,Nt),yt.copy(_t))},reset:function(){k=!1,it=null,yt.set(-1,0,0,0)}}}function n(){let k=!1,_t=!1,it=null,yt=null,Tt=null;return{setReversed:function(ot){if(_t!==ot){let zt=t.get("EXT_clip_control");ot?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;let Nt=Tt;Tt=null,this.setClear(Nt)}},getReversed:function(){return _t},setTest:function(ot){ot?Q(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(ot){it!==ot&&!k&&(r.depthMask(ot),it=ot)},setFunc:function(ot){if(_t&&(ot=$f[ot]),yt!==ot){switch(ot){case Ba:r.depthFunc(r.NEVER);break;case ka:r.depthFunc(r.ALWAYS);break;case za:r.depthFunc(r.LESS);break;case sr:r.depthFunc(r.LEQUAL);break;case Ha:r.depthFunc(r.EQUAL);break;case Va:r.depthFunc(r.GEQUAL);break;case Ga:r.depthFunc(r.GREATER);break;case Wa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=ot}},setLocked:function(ot){k=ot},setClear:function(ot){Tt!==ot&&(Tt=ot,_t&&(ot=1-ot),r.clearDepth(ot))},reset:function(){k=!1,it=null,yt=null,Tt=null,_t=!1}}}function i(){let k=!1,_t=null,it=null,yt=null,Tt=null,ot=null,zt=null,Nt=null,Ae=null;return{setTest:function(xe){k||(xe?Q(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(xe){_t!==xe&&!k&&(r.stencilMask(xe),_t=xe)},setFunc:function(xe,kn,Qn){(it!==xe||yt!==kn||Tt!==Qn)&&(r.stencilFunc(xe,kn,Qn),it=xe,yt=kn,Tt=Qn)},setOp:function(xe,kn,Qn){(ot!==xe||zt!==kn||Nt!==Qn)&&(r.stencilOp(xe,kn,Qn),ot=xe,zt=kn,Nt=Qn)},setLocked:function(xe){k=xe},setClear:function(xe){Ae!==xe&&(r.clearStencil(xe),Ae=xe)},reset:function(){k=!1,_t=null,it=null,yt=null,Tt=null,ot=null,zt=null,Nt=null,Ae=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,b=null,y=null,v=null,E=null,A=null,_=new vt(0,0,0),w=0,I=!1,L=null,C=null,N=null,D=null,O=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=K>=2);let $=null,nt={},j=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),It=new Se().fromArray(j),Vt=new Se().fromArray(et);function Yt(k,_t,it,yt){let Tt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(k,ot),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<it;zt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(_t+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return ot}let Y={};Y[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(sr),ht(!1),pt(Fh),Q(r.CULL_FACE),at(ai);function Q(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function ft(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function kt(k,_t){return d[k]!==_t?(r.bindFramebuffer(k,_t),d[k]=_t,k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=_t),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(k,_t){let it=m,yt=!1;if(k){it=f.get(_t),it===void 0&&(it=[],f.set(_t,it));let Tt=k.textures;if(it.length!==Tt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,zt=Tt.length;ot<zt;ot++)it[ot]=r.COLOR_ATTACHMENT0+ot;it.length=Tt.length,yt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,yt=!0);yt&&r.drawBuffers(it)}function Gt(k){return x!==k?(r.useProgram(k),x=k,!0):!1}let fe={[Cs]:r.FUNC_ADD,[xf]:r.FUNC_SUBTRACT,[_f]:r.FUNC_REVERSE_SUBTRACT};fe[yf]=r.MIN,fe[vf]=r.MAX;let st={[Mf]:r.ZERO,[Sf]:r.ONE,[bf]:r.SRC_COLOR,[kh]:r.SRC_ALPHA,[Cf]:r.SRC_ALPHA_SATURATE,[Af]:r.DST_COLOR,[wf]:r.DST_ALPHA,[Ef]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[Rf]:r.ONE_MINUS_DST_COLOR,[Tf]:r.ONE_MINUS_DST_ALPHA,[If]:r.CONSTANT_COLOR,[Pf]:r.ONE_MINUS_CONSTANT_COLOR,[Lf]:r.CONSTANT_ALPHA,[Df]:r.ONE_MINUS_CONSTANT_ALPHA};function at(k,_t,it,yt,Tt,ot,zt,Nt,Ae,xe){if(k===ai){p===!0&&(ft(r.BLEND),p=!1);return}if(p===!1&&(Q(r.BLEND),p=!0),k!==gf){if(k!==g||xe!==I){if((M!==Cs||v!==Cs)&&(r.blendEquation(r.FUNC_ADD),M=Cs,v=Cs),xe)switch(k){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Do:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Kt("WebGLState: Invalid blending: ",k);break}else switch(k){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Do:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Oh:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",k);break}b=null,y=null,E=null,A=null,_.set(0,0,0),w=0,g=k,I=xe}return}Tt=Tt||_t,ot=ot||it,zt=zt||yt,(_t!==M||Tt!==v)&&(r.blendEquationSeparate(fe[_t],fe[Tt]),M=_t,v=Tt),(it!==b||yt!==y||ot!==E||zt!==A)&&(r.blendFuncSeparate(st[it],st[yt],st[ot],st[zt]),b=it,y=yt,E=ot,A=zt),(Nt.equals(_)===!1||Ae!==w)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Ae),_.copy(Nt),w=Ae),g=k,I=!1}function ct(k,_t){k.side===Fe?ft(r.CULL_FACE):Q(r.CULL_FACE);let it=k.side===Qe;_t&&(it=!it),ht(it),k.blending===br&&k.transparent===!1?at(ai):at(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let yt=k.stencilWrite;a.setTest(yt),yt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){L!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),L=k)}function pt(k){k!==ff?(Q(r.CULL_FACE),k!==C&&(k===Fh?r.cullFace(r.BACK):k===pf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),C=k}function Wt(k){k!==N&&(z&&r.lineWidth(k),N=k)}function Ht(k,_t,it){k?(Q(r.POLYGON_OFFSET_FILL),(D!==_t||O!==it)&&(D=_t,O=it,o.getReversed()&&(_t=-_t),r.polygonOffset(_t,it))):ft(r.POLYGON_OFFSET_FILL)}function Zt(k){k?Q(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function Qt(k){k===void 0&&(k=r.TEXTURE0+F-1),$!==k&&(r.activeTexture(k),$=k)}function U(k,_t,it){it===void 0&&($===null?it=r.TEXTURE0+F-1:it=$);let yt=nt[it];yt===void 0&&(yt={type:void 0,texture:void 0},nt[it]=yt),(yt.type!==k||yt.texture!==_t)&&($!==it&&(r.activeTexture(it),$=it),r.bindTexture(k,_t||Y[k]),yt.type=k,yt.texture=_t)}function ge(){let k=nt[$];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function le(){try{r.compressedTexImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function S(){try{r.texSubImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function H(){try{r.texSubImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function ut(){try{r.texStorage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function dt(){try{r.texStorage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function J(){try{r.texImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function rt(){try{r.texImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function gt(k){return u[k]!==void 0?u[k]:r.getParameter(k)}function Ot(k,_t){u[k]!==_t&&(r.pixelStorei(k,_t),u[k]=_t)}function Mt(k){It.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),It.copy(k))}function xt(k){Vt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Vt.copy(k))}function Bt(k,_t){let it=c.get(_t);it===void 0&&(it=new WeakMap,c.set(_t,it));let yt=it.get(k);yt===void 0&&(yt=r.getUniformBlockIndex(_t,k.name),it.set(k,yt))}function Xt(k,_t){let yt=c.get(_t).get(k);l.get(_t)!==yt&&(r.uniformBlockBinding(_t,yt,k.__bindingPointIndex),l.set(_t,yt))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,nt={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,b=null,y=null,v=null,E=null,A=null,_=new vt(0,0,0),w=0,I=!1,L=null,C=null,N=null,D=null,O=null,It.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ft,bindFramebuffer:kt,drawBuffers:wt,useProgram:Gt,setBlending:at,setMaterial:ct,setFlipSided:ht,setCullFace:pt,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:Zt,activeTexture:Qt,bindTexture:U,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:P,texImage2D:J,texImage3D:rt,pixelStorei:Ot,getParameter:gt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:Mt,viewport:xt,reset:te}}function Sv(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return m?new OffscreenCanvas(P,S):ar("canvas")}function p(P,S,H){let X=1,Z=le(P);if((Z.width>H||Z.height>H)&&(X=H/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ut=Math.floor(X*Z.width),dt=Math.floor(X*Z.height);d===void 0&&(d=x(ut,dt));let J=S?x(ut,dt):d;return J.width=ut,J.height=dt,J.getContext("2d").drawImage(P,0,0,ut,dt),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+dt+")."),J}else return"data"in P&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,S,H,X,Z,ut=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt;X&&(dt=t.get("EXT_texture_norm16"),dt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),H===r.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),S===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),H===r.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),S===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),S===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),S===r.RGB&&(H===r.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),H===r.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),S===r.RGBA){let rt=ut?to:re.getTransfer(Z);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=rt===ve?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),H===r.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(P,S){let H;return P?S===null||S===Jn||S===Tr?H=r.DEPTH24_STENCIL8:S===Tn?H=r.DEPTH32F_STENCIL8:S===wr&&(H=r.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jn||S===Tr?H=r.DEPTH_COMPONENT24:S===Tn?H=r.DEPTH_COMPONENT32F:S===wr&&(H=r.DEPTH_COMPONENT16),H}function E(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==He&&P.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){let S=P.target;S.removeEventListener("dispose",A),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(P){let S=P.target;S.removeEventListener("dispose",_),L(S)}function w(P){let S=n.get(P);if(S.__webglInit===void 0)return;let H=P.source,X=f.get(H);if(X){let Z=X[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(P),Object.keys(X).length===0&&f.delete(H)}n.remove(P)}function I(P){let S=n.get(P);r.deleteTexture(S.__webglTexture);let H=P.source,X=f.get(H);delete X[S.__cacheKey],o.memory.textures--}function L(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Z=0;Z<S.__webglFramebuffer[X].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[X][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=P.textures;for(let X=0,Z=H.length;X<Z;X++){let ut=n.get(H[X]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(P)}let C=0;function N(){C=0}function D(){return C}function O(P){C=P}function F(){let P=C;return P>=i.maxTextures&&Ft("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function z(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function K(P,S){let H=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let X=P.image;if(X===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(H,P,S);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+S)}function W(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ft(H,P,S);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+S)}function $(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ft(H,P,S);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+S)}function nt(P,S){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){kt(H,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+S)}let j={[bn]:r.REPEAT,[In]:r.CLAMP_TO_EDGE,[rr]:r.MIRRORED_REPEAT},et={[He]:r.NEAREST,[vl]:r.NEAREST_MIPMAP_NEAREST,[Ps]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[Er]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},It={[Vf]:r.NEVER,[Yf]:r.ALWAYS,[Gf]:r.LESS,[ac]:r.LEQUAL,[Wf]:r.EQUAL,[lc]:r.GEQUAL,[Xf]:r.GREATER,[qf]:r.NOTEQUAL};function Vt(P,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ve||S.magFilter===Er||S.magFilter===Ps||S.magFilter===Zn||S.minFilter===Ve||S.minFilter===Er||S.minFilter===Ps||S.minFilter===Zn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,j[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,j[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,j[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,et[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,It[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===He||S.minFilter!==Ps&&S.minFilter!==Zn||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));let X=S.source,Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));let ut=z(S);if(ut!==P.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[ut].usedTimes++;let dt=Z[P.__cacheKey];dt!==void 0&&(Z[P.__cacheKey].usedTimes--,dt.usedTimes===0&&I(S)),P.__cacheKey=ut,P.__webglTexture=Z[ut].texture}return H}function Y(P,S,H){return Math.floor(Math.floor(P/H)/S)}function Q(P,S,H,X){let ut=P.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,H,X,S.data);else{ut.sort((Ot,Mt)=>Ot.start-Mt.start);let dt=0;for(let Ot=1;Ot<ut.length;Ot++){let Mt=ut[dt],xt=ut[Ot],Bt=Mt.start+Mt.count,Xt=Y(xt.start,S.width,4),te=Y(Mt.start,S.width,4);xt.start<=Bt+1&&Xt===te&&Y(xt.start+xt.count-1,S.width,4)===Xt?Mt.count=Math.max(Mt.count,xt.start+xt.count-Mt.start):(++dt,ut[dt]=xt)}ut.length=dt+1;let J=e.getParameter(r.UNPACK_ROW_LENGTH),rt=e.getParameter(r.UNPACK_SKIP_PIXELS),gt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Ot=0,Mt=ut.length;Ot<Mt;Ot++){let xt=ut[Ot],Bt=Math.floor(xt.start/4),Xt=Math.ceil(xt.count/4),te=Bt%S.width,k=Math.floor(Bt/S.width),_t=Xt,it=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,te),e.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,te,k,_t,it,H,X,S.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(r.UNPACK_SKIP_ROWS,gt)}}function ft(P,S,H){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);let Z=Yt(P,S),ut=S.source;e.bindTexture(X,P.__webglTexture,r.TEXTURE0+H);let dt=n.get(ut);if(ut.version!==dt.__version||Z===!0){if(e.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let it=re.getPrimaries(re.workingColorSpace),yt=S.colorSpace===Pi?null:re.getPrimaries(S.colorSpace),Tt=S.colorSpace===Pi||it===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let rt=p(S.image,!1,i.maxTextureSize);rt=ge(S,rt);let gt=s.convert(S.format,S.colorSpace),Ot=s.convert(S.type),Mt=y(S.internalFormat,gt,Ot,S.normalized,S.colorSpace,S.isVideoTexture);Vt(X,S);let xt,Bt=S.mipmaps,Xt=S.isVideoTexture!==!0,te=dt.__version===void 0||Z===!0,k=ut.dataReady,_t=E(S,rt);if(S.isDepthTexture)Mt=v(S.format===Ji,S.type),te&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,Mt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Mt,rt.width,rt.height,0,gt,Ot,null));else if(S.isDataTexture)if(Bt.length>0){Xt&&te&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,Bt[0].width,Bt[0].height);for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],Xt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,xt.width,xt.height,0,gt,Ot,xt.data);S.generateMipmaps=!1}else Xt?(te&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,rt.width,rt.height),k&&Q(S,rt,gt,Ot)):e.texImage2D(r.TEXTURE_2D,0,Mt,rt.width,rt.height,0,gt,Ot,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,Bt[0].width,Bt[0].height,rt.depth);for(let it=0,yt=Bt.length;it<yt;it++)if(xt=Bt[it],S.format!==An)if(gt!==null)if(Xt){if(k)if(S.layerUpdates.size>0){let Tt=lu(xt.width,xt.height,S.format,S.type);for(let ot of S.layerUpdates){let zt=xt.data.subarray(ot*Tt/xt.data.BYTES_PER_ELEMENT,(ot+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,ot,xt.width,xt.height,1,gt,zt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,rt.depth,gt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,Mt,xt.width,xt.height,rt.depth,0,xt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,rt.depth,gt,Ot,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,Mt,xt.width,xt.height,rt.depth,0,gt,Ot,xt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Xt&&te&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,Bt[0].width,Bt[0].height);for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],S.format!==An?gt!==null?Xt?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,it,Mt,xt.width,xt.height,0,xt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,xt.width,xt.height,0,gt,Ot,xt.data)}else if(S.isDataArrayTexture)if(Xt){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,rt.width,rt.height,rt.depth),k)if(S.layerUpdates.size>0){let it=lu(rt.width,rt.height,S.format,S.type);for(let yt of S.layerUpdates){let Tt=rt.data.subarray(yt*it/rt.data.BYTES_PER_ELEMENT,(yt+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,rt.width,rt.height,1,gt,Ot,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Ot,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,rt.width,rt.height,rt.depth,0,gt,Ot,rt.data);else if(S.isData3DTexture)Xt?(te&&e.texStorage3D(r.TEXTURE_3D,_t,Mt,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Ot,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,rt.width,rt.height,rt.depth,0,gt,Ot,rt.data);else if(S.isFramebufferTexture){if(te)if(Xt)e.texStorage2D(r.TEXTURE_2D,_t,Mt,rt.width,rt.height);else{let it=rt.width,yt=rt.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Mt,it,yt,0,gt,Ot,null),it>>=1,yt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let it=r.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),rt.parentNode!==it){it.appendChild(rt),u.add(S),it.onpaint=yt=>{let Tt=yt.changedElements;for(let ot of u)Tt.includes(ot.image)&&(ot.needsUpdate=!0)},it.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,rt);else{let Tt=r.RGBA,ot=r.RGBA,zt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Tt,ot,zt,rt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Xt&&te){let it=le(Bt[0]);e.texStorage2D(r.TEXTURE_2D,_t,Mt,it.width,it.height)}for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],Xt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,gt,Ot,xt):e.texImage2D(r.TEXTURE_2D,it,Mt,gt,Ot,xt);S.generateMipmaps=!1}else if(Xt){if(te){let it=le(rt);e.texStorage2D(r.TEXTURE_2D,_t,Mt,it.width,it.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Ot,rt)}else e.texImage2D(r.TEXTURE_2D,0,Mt,gt,Ot,rt);g(S)&&M(X),dt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function kt(P,S,H){if(S.image.length!==6)return;let X=Yt(P,S),Z=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);let ut=n.get(Z);if(Z.version!==ut.__version||X===!0){e.activeTexture(r.TEXTURE0+H);let dt=re.getPrimaries(re.workingColorSpace),J=S.colorSpace===Pi?null:re.getPrimaries(S.colorSpace),rt=S.colorSpace===Pi||dt===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let gt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ot=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let ot=0;ot<6;ot++)!gt&&!Ot?Mt[ot]=p(S.image[ot],!0,i.maxCubemapSize):Mt[ot]=Ot?S.image[ot].image:S.image[ot],Mt[ot]=ge(S,Mt[ot]);let xt=Mt[0],Bt=s.convert(S.format,S.colorSpace),Xt=s.convert(S.type),te=y(S.internalFormat,Bt,Xt,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,_t=ut.__version===void 0||X===!0,it=Z.dataReady,yt=E(S,xt);Vt(r.TEXTURE_CUBE_MAP,S);let Tt;if(gt){k&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,te,xt.width,xt.height);for(let ot=0;ot<6;ot++){Tt=Mt[ot].mipmaps;for(let zt=0;zt<Tt.length;zt++){let Nt=Tt[zt];S.format!==An?Bt!==null?k?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt,0,0,Nt.width,Nt.height,Bt,Nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt,te,Nt.width,Nt.height,0,Nt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt,0,0,Nt.width,Nt.height,Bt,Xt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt,te,Nt.width,Nt.height,0,Bt,Xt,Nt.data)}}}else{if(Tt=S.mipmaps,k&&_t){Tt.length>0&&yt++;let ot=le(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Mt[ot].width,Mt[ot].height,Bt,Xt,Mt[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Mt[ot].width,Mt[ot].height,0,Bt,Xt,Mt[ot].data);for(let zt=0;zt<Tt.length;zt++){let Ae=Tt[zt].image[ot].image;k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt+1,0,0,Ae.width,Ae.height,Bt,Xt,Ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt+1,te,Ae.width,Ae.height,0,Bt,Xt,Ae.data)}}else{k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Bt,Xt,Mt[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Bt,Xt,Mt[ot]);for(let zt=0;zt<Tt.length;zt++){let Nt=Tt[zt];k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt+1,0,0,Bt,Xt,Nt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,zt+1,te,Bt,Xt,Nt.image[ot])}}}g(S)&&M(r.TEXTURE_CUBE_MAP),ut.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function wt(P,S,H,X,Z,ut){let dt=s.convert(H.format,H.colorSpace),J=s.convert(H.type),rt=y(H.internalFormat,dt,J,H.normalized,H.colorSpace),gt=n.get(S),Ot=n.get(H);if(Ot.__renderTarget=S,!gt.__hasExternalTextures){let Mt=Math.max(1,S.width>>ut),xt=Math.max(1,S.height>>ut);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,rt,Mt,xt,S.depth,0,dt,J,null):e.texImage2D(Z,ut,rt,Mt,xt,0,dt,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Qt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,Z,Ot.__webglTexture,0,Zt(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,Z,Ot.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,S,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){let X=S.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ut=v(S.stencilBuffer,Z),dt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Qt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(S),ut,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(S),ut,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ut,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,P)}else{let X=S.textures;for(let Z=0;Z<X.length;Z++){let ut=X[Z],dt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),rt=y(ut.internalFormat,dt,J,ut.normalized,ut.colorSpace);Qt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(S),rt,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(S),rt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,rt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(P,S,H){let X=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,S.depthTexture);let gt=s.convert(S.depthTexture.format),Ot=s.convert(S.depthTexture.type),Mt;S.depthTexture.format===ii?Mt=r.DEPTH_COMPONENT24:S.depthTexture.format===Ji&&(Mt=r.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Mt,S.width,S.height,0,gt,Ot,null)}}else K(S.depthTexture,0);let ut=Z.__webglTexture,dt=Zt(S),J=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,rt=S.depthTexture.format===Ji?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===ii)Qt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,J,ut,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,rt,J,ut,0);else if(S.depthTexture.format===Ji)Qt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,J,ut,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,rt,J,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){let S=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=X}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)fe(S.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?fe(S.__webglFramebuffer[0],P,0):fe(S.__webglFramebuffer,P,0)}else if(H){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),Gt(S.__webglDepthbuffer[X],P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ut)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Gt(S.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ut)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,S,H){let X=n.get(P);S!==void 0&&wt(X.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&st(P)}function ct(P){let S=P.texture,H=n.get(P),X=n.get(S);P.addEventListener("dispose",_);let Z=P.textures,ut=P.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,o.memory.textures++),ut){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let rt=0;rt<S.mipmaps.length;rt++)H.__webglFramebuffer[J][rt]=r.createFramebuffer()}else H.__webglFramebuffer[J]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)H.__webglFramebuffer[J]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(dt)for(let J=0,rt=Z.length;J<rt;J++){let gt=n.get(Z[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Qt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let rt=Z[J];H.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let gt=s.convert(rt.format,rt.colorSpace),Ot=s.convert(rt.type),Mt=y(rt.internalFormat,gt,Ot,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),xt=Zt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,Mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,H.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)wt(H.__webglFramebuffer[J][rt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt);else wt(H.__webglFramebuffer[J],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(S)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,rt=Z.length;J<rt;J++){let gt=Z[J],Ot=n.get(gt),Mt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ot.__webglTexture),Vt(Mt,gt),wt(H.__webglFramebuffer,P,gt,r.COLOR_ATTACHMENT0+J,Mt,0),g(gt)&&M(Mt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,X.__webglTexture),Vt(J,S),S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)wt(H.__webglFramebuffer[rt],P,S,r.COLOR_ATTACHMENT0,J,rt);else wt(H.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,J,0);g(S)&&M(J),e.unbindTexture()}P.depthBuffer&&st(P)}function ht(P){let S=P.textures;for(let H=0,X=S.length;H<X;H++){let Z=S[H];if(g(Z)){let ut=b(P),dt=n.get(Z).__webglTexture;e.bindTexture(ut,dt),M(ut),e.unbindTexture()}}}let pt=[],Wt=[];function Ht(P){if(P.samples>0){if(Qt(P)===!1){let S=P.textures,H=P.width,X=P.height,Z=r.COLOR_BUFFER_BIT,ut=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(P),J=S.length>1;if(J)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let rt=P.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ot=n.get(S[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,H,X,0,0,H,X,Z,r.NEAREST),l===!0&&(pt.length=0,Wt.length=0,pt.push(r.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(pt.push(ut),Wt.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ot=n.get(S[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Zt(P){return Math.min(i.maxSamples,P.samples)}function Qt(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function ge(P,S){let H=P.colorSpace,X=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==pn&&H!==Pi&&(re.getTransfer(H)===ve?(X!==An||Z!==vn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",H)),S}function le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=nt,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bv(r,t){function e(n,i=Pi){let s,o=re.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Sl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return r.BYTE;if(n===Zh)return r.SHORT;if(n===wr)return r.UNSIGNED_SHORT;if(n===Ml)return r.INT;if(n===Jn)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===$n)return r.HALF_FLOAT;if(n===jh)return r.ALPHA;if(n===Qh)return r.RGB;if(n===An)return r.RGBA;if(n===ii)return r.DEPTH_COMPONENT;if(n===Ji)return r.DEPTH_STENCIL;if(n===El)return r.RED;if(n===wl)return r.RED_INTEGER;if(n===$i)return r.RG;if(n===Tl)return r.RG_INTEGER;if(n===Al)return r.RGBA_INTEGER;if(n===Fo||n===Oo||n===Bo||n===ko)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Il||n===Pl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===zo||n===Ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ll||n===Dl)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return s.COMPRESSED_R11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===zo)return s.COMPRESSED_RG11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===$l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Ql||n===tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===jl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===Ho||n===ic)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:Ev,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Eo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends qn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new Au,g={},M=e.getContextAttributes(),b=null,y=null,v=[],E=[],A=new lt,_=null,w=null,I=new Je;I.viewport=new Se;let L=new Je;L.viewport=new Se;let C=[I,L],N=new fl,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=v[Y];return Q===void 0&&(Q=new hr,v[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=v[Y];return Q===void 0&&(Q=new hr,v[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=v[Y];return Q===void 0&&(Q=new hr,v[Y]=Q),Q.getHandSpace()};function F(Y){let Q=E.indexOf(Y.inputSource);if(Q===-1)return;let ft=v[Q];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<v.length;Y++){let Q=E[Y];Q!==null&&(E[Y]=null,v[Y].disconnect(Q))}D=null,O=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(b),f=null,d=null,u=null,i=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,kt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=M.stencil?Ji:ii,kt=M.stencil?Tr:Jn);let Gt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new mn(d.textureWidth,d.textureHeight,{format:An,type:vn,depthTexture:new qi(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ft={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mn(f.framebufferWidth,f.framebufferHeight,{format:An,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Y){for(let Q=0;Q<Y.removed.length;Q++){let ft=Y.removed[Q],kt=E.indexOf(ft);kt>=0&&(E[kt]=null,v[kt].disconnect(ft))}for(let Q=0;Q<Y.added.length;Q++){let ft=Y.added[Q],kt=E.indexOf(ft);if(kt===-1){for(let Gt=0;Gt<v.length;Gt++)if(Gt>=E.length){E.push(ft),kt=Gt;break}else if(E[Gt]===null){E[Gt]=ft,kt=Gt;break}if(kt===-1)break}let wt=v[kt];wt&&wt.connect(ft)}}let W=new R,$=new R;function nt(Y,Q,ft){W.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);let kt=W.distanceTo($),wt=Q.projectionMatrix.elements,Gt=ft.projectionMatrix.elements,fe=wt[14]/(wt[10]-1),st=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],pt=(Gt[8]+1)/Gt[0],Wt=fe*ht,Ht=fe*pt,Zt=kt/(-ht+pt),Qt=Zt*-ht;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Qt),Y.translateZ(Zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let U=fe+Zt,ge=st+Zt,le=Wt-Qt,P=Ht+(kt-Qt),S=at*st/ge*U,H=ct*st/ge*U;Y.projectionMatrix.makePerspective(le,P,S,H,U,ge),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ft=Y.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),N.near=L.near=I.near=Q,N.far=L.far=I.far=ft,(D!==N.near||O!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,O=N.far),N.layers.mask=Y.layers.mask|6,I.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let kt=Y.parent,wt=N.cameras;j(N,kt);for(let Gt=0;Gt<wt.length;Gt++)j(wt[Gt],kt);wt.length===2?nt(N,I,L):N.projectionMatrix.copy(I.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),et(Y,N,kt)};function et(Y,Q,ft){ft===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Y){return g[Y]};let It=null;function Vt(Y,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;ft.length!==N.cameras.length&&(N.cameras.length=0,kt=!0);for(let st=0;st<ft.length;st++){let at=ft[st],ct=null;if(f!==null)ct=f.getViewport(at);else{let pt=u.getViewSubImage(d,at);ct=pt.viewport,st===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let ht=C[st];ht===void 0&&(ht=new Je,ht.layers.enable(st),ht.viewport=new Se,C[st]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),st===0&&(N.matrix.copy(ht.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),kt===!0&&N.cameras.push(ht)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let st=u.getDepthInformation(ft[0]);st&&st.isValid&&st.texture&&p.init(st,i.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let st=0;st<ft.length;st++){let at=ft[st].camera;if(at){let ct=g[at];ct||(ct=new fo,g[at]=ct);let ht=u.getCameraImage(at);ct.sourceTexture=ht}}}}for(let ft=0;ft<v.length;ft++){let kt=E[ft],wt=v[ft];kt!==null&&wt!==void 0&&wt.update(kt,Q,c||o)}It&&It(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Yt=new Ap;Yt.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){It=Y},this.dispose=function(){}}},Tv=new Rt,Dp=new jt;Dp.set(-1,0,0,0,1,0,0,0,1);function Av(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ru(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Qe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Qe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),b=M.envMap,y=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rv(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(p(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",M));let A=v.program;n.updateUBOMapping(y,A);let _=t.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function h(y){let v=u();y.__bindingPointIndex=v;let E=r.createBuffer(),A=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],E=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let _=0,w=E.length;_<w;_++){let I=E[_];if(Array.isArray(I))for(let L=0,C=I.length;L<C;L++)f(I[L],_,L,A);else f(I,_,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,E,A){if(x(y,v,E,A)===!0){let _=y.__offset,w=y.value;if(Array.isArray(w)){let I=0;for(let L=0;L<w.length;L++){let C=w[L],N=g(C);m(C,y.__data,I),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function m(y,v,E){typeof y=="number"||typeof y=="boolean"?v[0]=y:y.isMatrix3?(v[0]=y.elements[0],v[1]=y.elements[1],v[2]=y.elements[2],v[3]=0,v[4]=y.elements[3],v[5]=y.elements[4],v[6]=y.elements[5],v[7]=0,v[8]=y.elements[6],v[9]=y.elements[7],v[10]=y.elements[8],v[11]=0):ArrayBuffer.isView(y)?v.set(new y.constructor(y.buffer,y.byteOffset,v.length)):y.toArray(v,E)}function x(y,v,E,A){let _=y.value,w=v+"_"+E;if(A[w]===void 0)return typeof _=="number"||typeof _=="boolean"?A[w]=_:ArrayBuffer.isView(_)?A[w]=_.slice():A[w]=_.clone(),!0;{let I=A[w];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return A[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function p(y){let v=y.uniforms,E=0,A=16;for(let w=0,I=v.length;w<I;w++){let L=Array.isArray(v[w])?v[w]:[v[w]];for(let C=0,N=L.length;C<N;C++){let D=L[C],O=Array.isArray(D.value)?D.value:[D.value];for(let F=0,z=O.length;F<z;F++){let K=O[F],W=g(K),$=E%A,nt=$%W.boundary,j=$+nt;E+=nt,j!==0&&A-j<W.storage&&(E+=A-j),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}let _=E%A;return _>0&&(E+=A-_),y.__size=E,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),v}function M(y){let v=y.target;v.removeEventListener("dispose",M);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function b(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:b}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Iv(){return li===null&&(li=new fr(Cv,16,16,$i,$n),li.name="DFG_LUT",li.minFilter=Ve,li.magFilter=Ve,li.wrapS=In,li.wrapT=In,li.generateMipmaps=!1,li.needsUpdate=!0),li}var fc=class{constructor(t={}){let{canvas:e=Kf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,p=new Set([Al,Tl,wl]),g=new Set([vn,Jn,wr,Tr,Sl,bl]),M=new Uint32Array(4),b=new Int32Array(4),y=new R,v=null,E=null,A=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,C=null,N=null,D=null,O=null;this._outputColorSpace=ye;let F=0,z=0,K=null,W=-1,$=null,nt=new Se,j=new Se,et=null,It=new vt(0),Vt=0,Yt=e.width,Y=e.height,Q=1,ft=null,kt=null,wt=new Se(0,0,Yt,Y),Gt=new Se(0,0,Yt,Y),fe=!1,st=new pr,at=!1,ct=!1,ht=new Rt,pt=new R,Wt=new Se,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Qt(){return K===null?Q:1}let U=n;function ge(T,B){return e.getContext(T,B)}let le,P,S,H,X,Z,ut,dt,J,rt,gt,Ot,Mt,xt,Bt,Xt,te,k,_t,it,yt,Tt,ot;try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",kn,!1),U===null){let B="webgl2";if(U=ge(B,T),U===null)throw ge(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(T){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),Kt("WebGLRenderer: "+T.message),T}function zt(){le=new O_(U),le.init(),yt=new bv(U,le),P=new A_(U,le,t,yt),S=new Mv(U,le),P.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),N=U.createFramebuffer(),D=U.createFramebuffer(),O=U.createFramebuffer(),H=new z_(U),X=new av,Z=new Sv(U,le,S,X,P,yt,H),ut=new F_(I),dt=new V0(U),Tt=new w_(U,dt),J=new B_(U,dt,H,Tt),rt=new V_(U,J,dt,Tt,H),k=new H_(U,P,Z),Bt=new R_(X),gt=new ov(I,ut,le,P,Tt,Bt),Ot=new Av(I,X),Mt=new cv,xt=new mv(le),te=new E_(I,ut,S,rt,m,l),Xt=new vv(I,rt,P),ot=new Rv(U,H,P,S),_t=new T_(U,le,H),it=new k_(U,le,H),H.programs=gt.programs,I.capabilities=P,I.extensions=le,I.properties=X,I.renderLists=Mt,I.shadowMap=Xt,I.state=S,I.info=H}x!==vn&&(w=new W_(x,e.width,e.height,a,i,s));let Nt=new Ru(I,U);this.xr=Nt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Yt,Y,!1))},this.getSize=function(T){return T.set(Yt,Y)},this.setSize=function(T,B,q=!0){if(Nt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=T,Y=B,e.width=Math.floor(T*Q),e.height=Math.floor(B*Q),q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Yt*Q,Y*Q).floor()},this.setDrawingBufferSize=function(T,B,q){Yt=T,Y=B,Q=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===vn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(nt)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,B,q,V){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,B,q,V),S.viewport(nt.copy(wt).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Gt)},this.setScissor=function(T,B,q,V){T.isVector4?Gt.set(T.x,T.y,T.z,T.w):Gt.set(T,B,q,V),S.scissor(j.copy(Gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){S.setScissorTest(fe=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,q=!0){let V=0;if(T){let G=!1;if(K!==null){let bt=K.texture.format;G=p.has(bt)}if(G){let bt=K.texture.type,Ct=g.has(bt),St=te.getClearColor(),Pt=te.getClearAlpha(),Ut=St.r,ne=St.g,ce=St.b;Ct?(M[0]=Ut,M[1]=ne,M[2]=ce,M[3]=Pt,U.clearBufferuiv(U.COLOR,0,M)):(b[0]=Ut,b[1]=ne,b[2]=ce,b[3]=Pt,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}B&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),te.dispose(),Mt.dispose(),xt.dispose(),X.dispose(),ut.dispose(),rt.dispose(),Tt.dispose(),ot.dispose(),gt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",dd),Nt.removeEventListener("sessionend",fd),ss.stop()};function Ae(T){T.preventDefault(),eo("WebGLRenderer: Context Lost."),L=!0}function xe(){eo("WebGLRenderer: Context Restored."),L=!1;let T=H.autoReset,B=Xt.enabled,q=Xt.autoUpdate,V=Xt.needsUpdate,G=Xt.type;zt(),H.autoReset=T,Xt.enabled=B,Xt.autoUpdate=q,Xt.needsUpdate=V,Xt.type=G}function kn(T){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qn(T){let B=T.target;B.removeEventListener("dispose",Qn),sm(B)}function sm(T){rm(T),X.remove(T)}function rm(T){let B=X.get(T).programs;B!==void 0&&(B.forEach(function(q){gt.releaseProgram(q)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,V,G,bt){B===null&&(B=Ht);let Ct=G.isMesh&&G.matrixWorld.determinantAffine()<0,St=lm(T,B,q,V,G);S.setMaterial(V,Ct);let Pt=q.index,Ut=1;if(V.wireframe===!0){if(Pt=J.getWireframeAttribute(q),Pt===void 0)return;Ut=2}let ne=q.drawRange,ce=q.attributes.position,Lt=ne.start*Ut,_e=(ne.start+ne.count)*Ut;bt!==null&&(Lt=Math.max(Lt,bt.start*Ut),_e=Math.min(_e,(bt.start+bt.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),_e=Math.min(_e,Pt.count)):ce!=null&&(Lt=Math.max(Lt,0),_e=Math.min(_e,ce.count));let Ke=_e-Lt;if(Ke<0||Ke===1/0)return;Tt.setup(G,V,St,q,Pt);let Ie,Te=_t;if(Pt!==null&&(Ie=dt.get(Pt),Te=it,Te.setIndex(Ie)),G.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*Qt()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(G.isLine){let on=V.linewidth;on===void 0&&(on=1),S.setLineWidth(on*Qt()),G.isLineSegments?Te.setMode(U.LINES):G.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else G.isPoints?Te.setMode(U.POINTS):G.isSprite&&Te.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let on=G._multiDrawStarts,At=G._multiDrawCounts,dn=G._multiDrawCount,de=Pt?dt.get(Pt).bytesPerElement:1,Rn=X.get(V).currentProgram.getUniforms();for(let ti=0;ti<dn;ti++)Rn.setValue(U,"_gl_DrawID",ti),Te.render(on[ti]/de,At[ti])}else if(G.isInstancedMesh)Te.renderInstances(Lt,Ke,G.count);else if(q.isInstancedBufferGeometry){let on=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,At=Math.min(q.instanceCount,on);Te.renderInstances(Lt,Ke,At)}else Te.render(Lt,Ke)};function ud(T,B,q,V){C!==null&&T.isNodeMaterial&&C.setObject(V,T),at===!0&&Bt.setState(T,q,!1),T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,sa(T,B,V),T.side=oi,T.needsUpdate=!0,sa(T,B,V),T.side=Fe):sa(T,B,V)}this.compile=function(T,B,q=null){q===null&&(q=T),C!==null&&C.renderStart(T,B,q),E=xt.get(q),E.init(B),_.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),ct=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,ct),at===!0&&Bt.setGlobalState(this.clippingPlanes,B),C!==null&&Xt.render(E.state.shadowsArray,q,B);let V=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){let St=bt[Ct];ud(St,q,B,G),V.add(St)}else ud(bt,q,B,G),V.add(bt)}),E=_.pop(),C!==null&&C.renderEnd(),V},this.compileAsync=function(T,B,q=null){let V=this.compile(T,B,q);return new Promise(G=>{function bt(){if(V.forEach(function(Ct){let Pt=X.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Ct)}),V.size===0){G(T);return}setTimeout(bt,10)}le.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Kc=null;function om(T){Kc&&Kc(T)}function dd(){ss.stop()}function fd(){ss.start()}let ss=new Ap;ss.setAnimationLoop(om),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(T){Kc=T,Nt.setAnimationLoop(T),T===null?ss.stop():ss.start()},Nt.addEventListener("sessionstart",dd),Nt.addEventListener("sessionend",fd),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(T,B);let q=Nt.enabled===!0&&Nt.isPresenting===!0,V=w!==null&&(K===null||q)&&w.begin(I,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(B),B=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,K),E=xt.get(T,_.length),E.init(B),E.state.textureUnits=Z.getTextureUnits(),_.push(E),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),st.setFromProjectionMatrix(ht,Xn,B.reversedDepth),ct=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,ct),v=Mt.get(T,A.length),v.init(),A.push(v),Nt.enabled===!0&&Nt.isPresenting===!0){let Ct=I.xr.getDepthSensingMesh();Ct!==null&&Zc(Ct,B,-1/0,I.sortObjects)}Zc(T,B,0,I.sortObjects),v.finish(),C!==null&&C.updateLights(E.state.lightsArray),I.sortObjects===!0&&v.sort(ft,kt),Zt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Zt&&te.addToRenderList(v,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Bt.beginShadows();let G=E.state.shadowsArray;if(Xt.render(G,T,B),at===!0&&Bt.endShadows(),(V&&w.hasRenderPass())===!1){let Ct=v.opaque,St=v.transmissive;if(E.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(St.length>0)for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let ce=Pt[Ut];md(Ct,St,T,ce)}Zt&&te.render(T);for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let ce=Pt[Ut];pd(v,T,ce,ce.viewport)}}else St.length>0&&md(Ct,St,T,B),Zt&&te.render(T),pd(v,T,B)}K!==null&&z===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),V&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Tt.resetDefaultState(),W=-1,$=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),at===!0&&Bt.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,C!==null&&C.renderEnd()};function Zc(T,B,q,V){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(st)){V&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);let Ct=rt.update(T),St=T.material;St.visible&&v.push(T,Ct,St,q,Wt.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(st))){let Ct=rt.update(T),St=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Wt.copy(Ct.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){let Pt=Ct.groups;for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let ce=Pt[Ut],Lt=St[ce.materialIndex];Lt&&Lt.visible&&v.push(T,Ct,Lt,q,Wt.z,ce,B)}}else St.visible&&v.push(T,Ct,St,q,Wt.z,null,B)}}let bt=T.children;for(let Ct=0,St=bt.length;Ct<St;Ct++)Zc(bt[Ct],B,q,V)}function pd(T,B,q,V){let{opaque:G,transmissive:bt,transparent:Ct}=T;E.setupLightsView(q),at===!0&&Bt.setGlobalState(I.clippingPlanes,q),V&&S.viewport(nt.copy(V)),G.length>0&&ia(G,B,q),bt.length>0&&ia(bt,B,q),Ct.length>0&&ia(Ct,B,q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function md(T,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Lt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new mn(1,1,{generateMipmaps:!0,type:Lt?$n:vn,minFilter:Zn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let bt=E.state.transmissionRenderTarget[V.id],Ct=V.viewport||nt;bt.setSize(Ct.z*I.transmissionResolutionScale,Ct.w*I.transmissionResolutionScale);let St=I.getRenderTarget(),Pt=I.getActiveCubeFace(),Ut=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(It),Vt=I.getClearAlpha(),Vt<1&&I.setClearColor(16777215,.5),I.clear(),Zt&&te.render(q);let ne=I.toneMapping;I.toneMapping=Kn;let ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),at===!0&&Bt.setGlobalState(I.clippingPlanes,V),ia(T,q,V),Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _e=0,Ke=B.length;_e<Ke;_e++){let Ie=B[_e],{object:Te,geometry:on,material:At,group:dn}=Ie;if(At.side===Fe&&Te.layers.test(V.layers)){let de=At.side;At.side=Qe,At.needsUpdate=!0,gd(Te,q,V,on,At,dn),At.side=de,At.needsUpdate=!0,Lt=!0}}Lt===!0&&(Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt))}I.setRenderTarget(St,Pt,Ut),I.setClearColor(It,Vt),ce!==void 0&&(V.viewport=ce),I.toneMapping=ne}function ia(T,B,q){let V=B.isScene===!0?B.overrideMaterial:null;for(let G=0,bt=T.length;G<bt;G++){let Ct=T[G],{object:St,geometry:Pt,group:Ut}=Ct,ne=Ct.material;ne.allowOverride===!0&&V!==null&&(ne=V),St.layers.test(q.layers)&&gd(St,B,q,Pt,ne,Ut)}}function gd(T,B,q,V,G,bt){C!==null&&G.isNodeMaterial&&C.setObject(T,G),T.onBeforeRender(I,B,q,V,G,bt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(I,B,q,V,T,bt),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1?(G.side=Qe,G.needsUpdate=!0,I.renderBufferDirect(q,B,V,G,T,bt),G.side=oi,G.needsUpdate=!0,I.renderBufferDirect(q,B,V,G,T,bt),G.side=Fe):I.renderBufferDirect(q,B,V,G,T,bt),T.onAfterRender(I,B,q,V,G,bt)}function sa(T,B,q){B.isScene!==!0&&(B=Ht);let V=X.get(T),G=E.state.lights,bt=E.state.shadowsArray,Ct=G.state.version,St=gt.getParameters(T,G.state,bt,B,q,E.state.lightProbeGridArray),Pt=gt.getProgramCacheKey(St),Ut=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=ut.get(T.envMap||V.environment,ne),V.envMapRotation=V.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Qn),Ut=new Map,V.programs=Ut);let ce=Ut.get(Pt);if(ce!==void 0){if(V.currentProgram===ce&&V.lightsStateVersion===Ct)return _d(T,St),ce}else St.uniforms=gt.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,q,St),T.onBeforeCompile(St,I),ce=gt.acquireProgram(St,Pt),Ut.set(Pt,ce),V.uniforms=St.uniforms;let Lt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=Bt.uniform),_d(T,St),V.needsLights=hm(T),V.lightsStateVersion=Ct,V.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.sunLights.value=G.state.sun,Lt.sunLightShadows.value=G.state.sunShadow,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.sunShadowMatrix.value=G.state.sunShadowMatrix,Lt.sunShadowCascade.value=G.state.sunShadowCascade,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ce,V.uniformsList=null,ce}function xd(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Pr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function _d(T,B){let q=X.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function am(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let q=0,V=T.length;q<V;q++){let G=T[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function lm(T,B,q,V,G){B.isScene!==!0&&(B=Ht),Z.resetTextureUnits();let bt=B.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,St=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:re.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=ut.get(V.envMap||Ct,Pt),ne=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ce=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!q.morphAttributes.position,_e=!!q.morphAttributes.normal,Ke=!!q.morphAttributes.color,Ie=Kn;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=I.toneMapping);let Te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,on=Te!==void 0?Te.length:0,At=X.get(V),dn=E.state.lights;if(at===!0&&(ct===!0||T!==$)){let Re=T===$&&V.id===W;Bt.setState(V,T,Re)}let de=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==dn.state.version||At.outputColorSpace!==St||G.isBatchedMesh&&At.batching===!1||!G.isBatchedMesh&&At.batching===!0||G.isBatchedMesh&&At.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&At.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&At.instancing===!1||!G.isInstancedMesh&&At.instancing===!0||G.isSkinnedMesh&&At.skinning===!1||!G.isSkinnedMesh&&At.skinning===!0||G.isInstancedMesh&&At.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&At.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&At.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&At.instancingMorph===!1&&G.morphTexture!==null||At.envMap!==Ut||V.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Bt.numPlanes||At.numIntersection!==Bt.numIntersection)||At.vertexAlphas!==ne||At.vertexTangents!==ce||At.morphTargets!==Lt||At.morphNormals!==_e||At.morphColors!==Ke||At.toneMapping!==Ie||At.morphTargetsCount!==on||!!At.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,At.__version=V.version);let Rn=At.currentProgram;de===!0&&(Rn=sa(V,B,G),C&&V.isNodeMaterial&&C.onUpdateProgram(V,Rn,At));let ti=!1,Ni=!1,Os=!1,be=Rn.getUniforms(),ze=At.uniforms;if(S.useProgram(Rn.program)&&(ti=!0,Ni=!0,Os=!0),V.id!==W&&(W=V.id,Ni=!0),At.needsLights){let Re=am(E.state.lightProbeGridArray,G);At.lightProbeGrid!==Re&&(At.lightProbeGrid=Re,Ni=!0)}if(ti||$!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),be.setValue(U,"projectionMatrix",T.projectionMatrix),be.setValue(U,"viewMatrix",T.matrixWorldInverse);let Fi=be.map.cameraPosition;Fi!==void 0&&Fi.setValue(U,pt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&be.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Ni=!0,Os=!0)}if(At.needsLights&&(dn.state.sunShadowMap.length>0&&be.setValue(U,"sunShadowMap",dn.state.sunShadowMap,Z),dn.state.directionalShadowMap.length>0&&be.setValue(U,"directionalShadowMap",dn.state.directionalShadowMap,Z),dn.state.spotShadowMap.length>0&&be.setValue(U,"spotShadowMap",dn.state.spotShadowMap,Z),dn.state.pointShadowMap.length>0&&be.setValue(U,"pointShadowMap",dn.state.pointShadowMap,Z)),G.isSkinnedMesh){be.setOptional(U,G,"bindMatrix"),be.setOptional(U,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(U,"boneTexture",Re.boneTexture,Z))}G.isBatchedMesh&&(be.setOptional(U,G,"batchingTexture"),be.setValue(U,"batchingTexture",G._matricesTexture,Z),be.setOptional(U,G,"batchingIdTexture"),be.setValue(U,"batchingIdTexture",G._indirectTexture,Z),be.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&be.setValue(U,"batchingColorTexture",G._colorsTexture,Z));let Ui=q.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&k.update(G,q,Rn),(Ni||At.receiveShadow!==G.receiveShadow)&&(At.receiveShadow=G.receiveShadow,be.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(ze.envMapIntensity.value=B.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=Iv()),Ni){if(be.setValue(U,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&cm(ze,Os),bt&&V.fog===!0&&Ot.refreshFogUniforms(ze,bt),Ot.refreshMaterialUniforms(ze,V,Q,Y,E.state.transmissionRenderTarget[T.id]),At.needsLights&&At.lightProbeGrid){let Re=At.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}Pr.upload(U,xd(At),ze,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(U,xd(At),ze,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(U,"center",G.center),be.setValue(U,"modelViewMatrix",G.modelViewMatrix),be.setValue(U,"normalMatrix",G.normalMatrix),be.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Re=V.uniformsGroups;for(let Fi=0,Bs=Re.length;Fi<Bs;Fi++){let vd=Re[Fi];ot.update(vd,Rn),ot.bind(vd,Rn)}}return Rn}function cm(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function hm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,B,q){let V=X.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=B,X.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let q=X.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){K=T,F=B,z=q;let V=null,G=!1,bt=!1;if(T){let St=X.get(T);if(St.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,St.__webglFramebuffer),nt.copy(T.viewport),j.copy(T.scissor),et=T.scissorTest,S.viewport(nt),S.scissor(j),S.setScissorTest(et),W=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(St.__hasExternalTextures)Z.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(St.__boundDepthTexture!==ne){if(ne!==null&&X.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);let Ut=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[B])?V=Ut[B][q]:V=Ut[B],G=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?V=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[q]:V=Ut,nt.copy(T.viewport),j.copy(T.scissor),et=T.scissorTest}else nt.copy(wt).multiplyScalar(Q).floor(),j.copy(Gt).multiplyScalar(Q).floor(),et=fe;if(q!==0&&(V=N),S.bindFramebuffer(U.FRAMEBUFFER,V)&&S.drawBuffers(T,V),S.viewport(nt),S.scissor(j),S.setScissorTest(et),G){let St=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,q)}else if(bt){let St=B;for(let Pt=0;Pt<T.textures.length;Pt++){let Ut=X.get(T.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,q,St)}}else if(T!==null&&q!==0){let St=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,q)}W=-1};function yd(T){let B=X.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=P.textureFormatReadable(T.format),B.__typeReadable=P.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,q,V,G,bt,Ct,St=0){if(!(T&&T.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){S.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Ut=T.textures[St],ne=Ut.format,ce=Ut.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Lt=yd(Ut);if(Lt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-V&&q>=0&&q<=T.height-G&&U.readPixels(B,q,V,G,yt.convert(ne),yt.convert(ce),bt)}finally{let Ut=K!==null?X.get(K).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,V,G,bt,Ct,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(B>=0&&B<=T.width-V&&q>=0&&q<=T.height-G){S.bindFramebuffer(U.FRAMEBUFFER,Pt);let Ut=T.textures[St],ne=Ut.format,ce=Ut.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Lt=yd(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(B,q,V,G,yt.convert(ne),yt.convert(ce),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ke=K!==null?X.get(K).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ke);let Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jf(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_e),U.deleteSync(Ie),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,q=0){let V=Math.pow(2,-q),G=Math.floor(T.image.width*V),bt=Math.floor(T.image.height*V),Ct=B!==null?B.x:0,St=B!==null?B.y:0;Z.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ct,St,G,bt),S.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,V=null,G=0,bt=0){let Ct,St,Pt,Ut,ne,ce,Lt,_e,Ke,Ie=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(q!==null)Ct=q.max.x-q.min.x,St=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,ne=q.min.y,ce=q.isBox3?q.min.z:0;else{let ze=Math.pow(2,-G);Ct=Math.floor(Ie.width*ze),St=Math.floor(Ie.height*ze),T.isDataArrayTexture?Pt=Ie.depth:T.isData3DTexture?Pt=Math.floor(Ie.depth*ze):Pt=1,Ut=0,ne=0,ce=0}V!==null?(Lt=V.x,_e=V.y,Ke=V.z):(Lt=0,_e=0,Ke=0);let Te=yt.convert(B.format),on=yt.convert(B.type),At;B.isData3DTexture?(Z.setTexture3D(B,0),At=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),At=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),At=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let dn=S.getParameter(U.UNPACK_ROW_LENGTH),de=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=S.getParameter(U.UNPACK_SKIP_PIXELS),ti=S.getParameter(U.UNPACK_SKIP_ROWS),Ni=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),S.pixelStorei(U.UNPACK_SKIP_ROWS,ne),S.pixelStorei(U.UNPACK_SKIP_IMAGES,ce);let Os=T.isDataArrayTexture||T.isData3DTexture,be=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let ze=X.get(T),Ui=X.get(B),Re=X.get(ze.__renderTarget),Fi=X.get(Ui.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Re.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Bs=0;Bs<Pt;Bs++)Os&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(T).__webglTexture,G,ce+Bs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(B).__webglTexture,bt,Ke+Bs)),U.blitFramebuffer(Ut,ne,Ct,St,Lt,_e,Ct,St,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||X.has(T)){let ze=X.get(T),Ui=X.get(B);S.bindFramebuffer(U.READ_FRAMEBUFFER,D),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let Re=0;Re<Pt;Re++)Os?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.__webglTexture,G,ce+Re):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ze.__webglTexture,G),be?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ui.__webglTexture,bt,Ke+Re):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ui.__webglTexture,bt),G!==0?U.blitFramebuffer(Ut,ne,Ct,St,Lt,_e,Ct,St,U.COLOR_BUFFER_BIT,U.NEAREST):be?U.copyTexSubImage3D(At,bt,Lt,_e,Ke+Re,Ut,ne,Ct,St):U.copyTexSubImage2D(At,bt,Lt,_e,Ut,ne,Ct,St);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(At,bt,Lt,_e,Ke,Ct,St,Pt,Te,on,Ie.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(At,bt,Lt,_e,Ke,Ct,St,Pt,Te,Ie.data):U.texSubImage3D(At,bt,Lt,_e,Ke,Ct,St,Pt,Te,on,Ie):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,Lt,_e,Ct,St,Te,on,Ie.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,Lt,_e,Ie.width,Ie.height,Te,Ie.data):U.texSubImage2D(U.TEXTURE_2D,bt,Lt,_e,Ct,St,Te,on,Ie);S.pixelStorei(U.UNPACK_ROW_LENGTH,dn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),S.pixelStorei(U.UNPACK_SKIP_ROWS,ti),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Ni),bt===0&&B.generateMipmaps&&U.generateMipmap(At),S.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){F=0,z=0,K=null,S.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Np="0.6.0 (BV-005)",gc="beaver-valley:save:v1",ee={size:220,playRadius:60,waterY:0,lodgeSite:{x:-15,z:6},spawn:{x:-8,z:17}},De={steps:12,woodPerStep:2},Dr={high:{treeDetail:2,treeKeep:1,pr:2,shadow:2048,shadowDist:34,grass:1,terrainSeg:300,aa:!0,particles:1,flowers:1},medium:{treeDetail:2,treeKeep:.85,pr:2,shadow:1536,shadowDist:30,grass:.6,terrainSeg:240,aa:!0,particles:.75,flowers:.75},low:{treeDetail:2,treeKeep:.7,pr:1.5,shadow:1024,shadowDist:26,grass:.35,terrainSeg:200,aa:!1,particles:.5,flowers:.5}};var he=(r,t,e)=>Math.min(e,Math.max(t,r)),Be=(r,t,e)=>r+(t-r)*e,ue=(r,t,e)=>{let n=he((e-r)/(t-r),0,1);return n*n*(3-2*n)},ji=(r,t,e,n)=>Be(r,t,1-Math.exp(-e*n)),_c=(r,t)=>{let e=(t-r)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function sn(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function xc(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function hi(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n,o=i*i*(3-2*i),a=s*s*(3-2*s),l=xc(e,n),c=xc(e+1,n),h=xc(e,n+1),u=xc(e+1,n+1);return Be(Be(l,c,o),Be(h,u,o),a)}function ke(r,t,e=4){let n=0,i=.5,s=1;for(let o=0;o<e;o++)n+=i*(hi(r*s+o*17.3,t*s-o*9.1)*2-1),i*=.5,s*=2.03;return n}function tt(r,t,e){return new vt().setRGB(r,t,e,ye)}function jn(r){let t=0,e=0;for(let u of r)t+=u.attributes.position.count,e+=u.index?u.index.count:u.attributes.position.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Uint32Array(e),l=0,c=0;for(let u of r){let d=u.attributes.position.count;if(n.set(u.attributes.position.array,l*3),u.attributes.normal&&i.set(u.attributes.normal.array,l*3),u.attributes.color?s.set(u.attributes.color.array,l*3):s.fill(1,l*3,(l+d)*3),u.attributes.uv&&o.set(u.attributes.uv.array,l*2),u.index)for(let f=0;f<u.index.count;f++)a[c++]=u.index.array[f]+l;else for(let f=0;f<d;f++)a[c++]=f+l;l+=d}let h=new $t;return h.setAttribute("position",new Jt(n,3)),h.setAttribute("normal",new Jt(i,3)),h.setAttribute("color",new Jt(s,3)),h.setAttribute("uv",new Jt(o,2)),h.setIndex(new Jt(a,1)),h}function ui(r,t,e=0,n=Math.random){let i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++){let a=1+(n()-.5)*e;s[o*3]=t.r*a,s[o*3+1]=t.g*a,s[o*3+2]=t.b*a}return r.setAttribute("color",new Jt(s,3)),r}function yc(r,t,e,n=0){let i=r.attributes.position,s=new R;for(let o=0;o<i.count;o++){s.fromBufferAttribute(i,o);let a=ke(s.x*e+n,s.y*e+s.z*e*.7-n,3);s.multiplyScalar(1+a*t),i.setXYZ(o,s.x,s.y,s.z)}return r.computeVertexNormals(),r}function rn(r){return 16*Math.sin(r*.032+.5)+5*Math.sin(r*.085+2)+2}function Pv(r,t){let e=Math.hypot(r,t),n=1.3+ke(r*.018,t*.018,4)*2.4+ke(r*.07+40,t*.07,3)*.35;n+=Math.pow(ue(38,96,e),1.15)*36,n+=ue(55,100,e)*ke(r*.05,t*.05+11,4)*9;let i=ee.lodgeSite,s=Math.hypot(r-i.x,t-i.z);n=Be(n,1.45,1-ue(5,13,s));let o=Math.abs(r-rn(t));n+=15*ue(-65,-73,t)*(1-ue(12,34,o));let a=(1-ue(1.4,9.5,o))*ue(-72,-66,t),l=-1.35+ke(r*.2,t*.2,2)*.25;return n=Be(n,Math.min(n,l+(1-a)*2.6),Math.pow(a,.85)),n}var vc=class{constructor(t){this.seg=t,this.size=ee.size,this.half=this.size/2,this.cell=this.size/t;let e=t+1;this.grid=new Float32Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++)this.grid[n*e+i]=Pv(-this.half+i*this.cell,-this.half+n*this.cell)}heightAt(t,e){let n=this.seg+1,i=he((t+this.half)/this.cell,0,this.seg-.001),s=he((e+this.half)/this.cell,0,this.seg-.001),o=Math.floor(i),a=Math.floor(s),l=i-o,c=s-a,h=this.grid,u=h[a*n+o],d=h[a*n+o+1],f=h[(a+1)*n+o],m=h[(a+1)*n+o+1];return Be(Be(u,d,l),Be(f,m,l),c)}slopeAt(t,e){let i=this.heightAt(t+.7,e)-this.heightAt(t-.7,e),s=this.heightAt(t,e+.7)-this.heightAt(t,e-.7);return Math.hypot(i,s)/(2*.7)}normalAt(t,e,n=new R){let i=this.cell,s=this.heightAt(t+i,e)-this.heightAt(t-i,e),o=this.heightAt(t,e+i)-this.heightAt(t,e-i);return n.set(-s,2*i,-o).normalize()}depthAt(t,e){return ee.waterY-this.heightAt(t,e)}buildMesh(t,e,n=[]){let i=this.seg,s=i+1,o=new Float32Array(s*s*3),a=new Float32Array(s*s*3),l=new Float32Array(s*s*3),c=new Float32Array(s*s*2),h=new Uint32Array(i*i*6),u=new vt,d=new Float32Array(s*s).fill(1);for(let w of n){let I=Math.max(0,Math.floor((w.x-w.r+this.half)/this.cell)),L=Math.min(i,Math.ceil((w.x+w.r+this.half)/this.cell)),C=Math.max(0,Math.floor((w.z-w.r+this.half)/this.cell)),N=Math.min(i,Math.ceil((w.z+w.r+this.half)/this.cell));for(let D=C;D<=N;D++)for(let O=I;O<=L;O++){let F=-this.half+O*this.cell-w.x,z=-this.half+D*this.cell-w.z,K=Math.exp(-(F*F+z*z)/(w.r*w.r*.5));d[D*s+O]*=1-w.k*K}}let f=tt(.36,.76,.15),m=tt(.2,.58,.13),x=tt(.62,.78,.28),p=tt(.46,.36,.23),g=tt(.78,.68,.46),M=tt(.56,.52,.47),b=tt(.26,.47,.22),y=tt(.36,.33,.27);for(let w=0;w<s;w++)for(let I=0;I<s;I++){let L=w*s+I,C=-this.half+I*this.cell,N=-this.half+w*this.cell,D=this.grid[L];o[L*3]=C,o[L*3+1]=D,o[L*3+2]=N;let O=this.grid[w*s+Math.max(0,I-1)],F=this.grid[w*s+Math.min(i,I+1)],z=this.grid[Math.max(0,w-1)*s+I],K=this.grid[Math.min(i,w+1)*s+I],W=O-F,$=z-K,nt=2*this.cell,j=Math.hypot(W,nt,$);a[L*3]=W/j,a[L*3+1]=nt/j,a[L*3+2]=$/j,c[L*2]=C/5,c[L*2+1]=N/5;let et=Math.hypot(W,$)/nt,It=ke(C*.045,N*.045+7,3)*.5+.5,Vt=hi(C*.16,N*.16);u.copy(m).lerp(f,ue(.25,.75,It)),u.lerp(x,ue(.62,.9,Vt)*.35*(1-ue(.8,1.6,D)));let Yt=Math.hypot(C,N);u.lerp(b,ue(30,62,Yt)*.8),u.lerp(g,ue(.55,.15,D)*.8),u.lerp(p,ue(.2,-.25,D)*.9),u.lerp(y,ue(-.2,-1,D)),u.lerp(M,ue(.45,.85,et)*.6);let Y=d[L]*(.92+.16*hi(C*.5,N*.5));l[L*3]=u.r*Y,l[L*3+1]=u.g*Y,l[L*3+2]=u.b*Y}let v=0;for(let w=0;w<i;w++)for(let I=0;I<i;I++){let L=w*s+I,C=L+1,N=L+s,D=N+1;h[v++]=L,h[v++]=N,h[v++]=C,h[v++]=C,h[v++]=N,h[v++]=D}let E=new $t;E.setAttribute("position",new Jt(o,3)),E.setAttribute("normal",new Jt(a,3)),E.setAttribute("color",new Jt(l,3)),E.setAttribute("uv",new Jt(c,2)),E.setIndex(new Jt(h,1)),E.computeBoundingSphere();let A=new qt({vertexColors:!0,map:t,normalMap:e,normalScale:new lt(.8,.8),roughness:.96,metalness:0}),_=new Et(E,A);return _.receiveShadow=!0,_}};var Xe={top:tt(.3,.55,.92),horizon:tt(.99,.9,.74),fog:tt(.9,.88,.78),sunColor:tt(1,.95,.84),sunDir:new R(.55,.52,.65).normalize()},Lv=`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,Dv=`
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uFog; uniform vec3 uSun; uniform vec3 uSunDir;
varying vec3 vDir;
void main(){
  vec3 d = normalize(vDir);
  float t = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(t, 0.55));
  col = mix(uFog, col, smoothstep(-0.02, 0.28, d.y));
  float s = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSun * (pow(s, 900.0) * 6.0 + pow(s, 24.0) * 0.30 + pow(s, 5.0) * 0.12);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Nv(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Yn(r);return n.colorSpace=ye,n}var Qi={top:tt(.3,.55,.92),horizon:tt(.99,.9,.74),fog:tt(.9,.88,.78),sun:tt(1,.95,.84),hemiSky:tt(.72,.86,1),hemiGround:tt(.55,.47,.32),cloud:tt(1,.98,.95),water:tt(.5,.76,.92)},ts={top:tt(.34,.36,.68),horizon:tt(1,.56,.3),fog:tt(.95,.66,.5),sun:tt(1,.62,.36),hemiSky:tt(.78,.66,.78),hemiGround:tt(.5,.36,.28),cloud:tt(1,.72,.6),water:tt(.9,.55,.45)},Li={top:tt(.025,.04,.12),horizon:tt(.09,.13,.27),fog:tt(.06,.09,.19),sun:tt(.5,.62,1),hemiSky:tt(.22,.3,.6),hemiGround:tt(.08,.08,.13),cloud:tt(.18,.22,.38),water:tt(.08,.13,.27)};function Up(r,t){let e=new Et(new Ue(400,32,16),new We({vertexShader:Lv,fragmentShader:Dv,side:Qe,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Xe.top},uHorizon:{value:Xe.horizon},uFog:{value:Xe.fog},uSun:{value:Xe.sunColor},uSunDir:{value:Xe.sunDir}}}));e.frustumCulled=!1,e.renderOrder=-10,r.add(e),r.fog=new so(Xe.fog,.0105);let n=new Ro(tt(.72,.86,1),tt(.55,.47,.32),2.5);r.add(n);let i=new As(Xe.sunColor,2.6);i.castShadow=!0;let s=t.shadowDist;i.shadow.mapSize.set(t.shadow,t.shadow),Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:1,far:160}),i.shadow.bias=-4e-4,i.shadow.normalBias=.06,i.shadow.radius=3,r.add(i),r.add(i.target);let o=Nv(),a=[];for(let v=0;v<14;v++){let E=new xs({map:o,transparent:!0,depthWrite:!1,fog:!1,opacity:.85,toneMapped:!1,color:tt(1,.98,.95)}),A=new ur(E),_=v/14*Math.PI*2+Math.random()*.4,w=140+Math.random()*120;A.position.set(Math.cos(_)*w,55+Math.random()*40,Math.sin(_)*w);let I=60+Math.random()*70;A.scale.set(I,I*.34,1),A.userData.speed=.6+Math.random()*.8,a.push(A),r.add(A)}let l=[],c=(()=>{let v=7;return()=>(v=v*16807%2147483647)/2147483647})();for(let v=0;v<520;v++){let E=c()*6.283,A=Math.asin(.08+c()*.92);l.push(Math.cos(E)*Math.cos(A)*380,Math.sin(A)*380,Math.sin(E)*Math.cos(A)*380)}let h=new $t;h.setAttribute("position",new Dt(l,3));let u=new Ei(h,new Xi({size:2.2,sizeAttenuation:!1,color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));u.frustumCulled=!1,u.renderOrder=-9,r.add(u);let d=document.createElement("canvas");d.width=d.height=128;let f=d.getContext("2d"),m=f.createRadialGradient(64,64,8,64,64,62);m.addColorStop(0,"rgba(255,255,240,1)"),m.addColorStop(.35,"rgba(235,240,255,0.95)"),m.addColorStop(.42,"rgba(200,215,255,0.25)"),m.addColorStop(1,"rgba(180,200,255,0)"),f.fillStyle=m,f.fillRect(0,0,128,128);let x=new ur(new xs({map:new Yn(d),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,opacity:0}));x.scale.set(46,46,1),x.renderOrder=-8,r.add(x);let p=new R(.5,.5,.6),g=new vt,M=new R,b=(v,E,A,_,w,I)=>(v.copy(E).lerp(A,w),I>0&&v.lerp(_,I),v),y={sun:i,hemi:n,dome:e,night:0,hour:9,setTime(v){this.hour=v;let E=(v-6)/12*Math.PI,A=Math.sin(E);Xe.sunDir.set(Math.cos(E)*.9,A,.5).normalize();let _=ue(-.1,.3,A),w=Math.exp(-Math.pow(A/.22,2));this.night=1-_,b(Xe.top,Li.top,Qi.top,ts.top,_,w*.55),b(Xe.horizon,Li.horizon,Qi.horizon,ts.horizon,_,w*.9),b(Xe.fog,Li.fog,Qi.fog,ts.fog,_,w*.75),r.fog.color.copy(Xe.fog),r.fog.density=Be(.0135,.0105,_),b(Xe.sunColor,Li.sun,Qi.sun,ts.sun,ue(-.05,.25,A),w*.85),b(n.color,Li.hemiSky,Qi.hemiSky,ts.hemiSky,_,w*.5),b(n.groundColor,Li.hemiGround,Qi.hemiGround,ts.hemiGround,_,w*.5),n.intensity=Be(1.35,2.5,_),A>=0?(p.copy(Xe.sunDir),i.color.copy(Xe.sunColor),i.intensity=2.6*ue(0,.22,A)+.02):(p.copy(Xe.sunDir).multiplyScalar(-1),p.y=Math.max(p.y,.25),p.normalize(),i.color.copy(Li.sun),i.intensity=.75*ue(0,.25,-A)+.02),u.material.opacity=Math.pow(this.night,1.5),M.copy(Xe.sunDir).multiplyScalar(-1),x.userData.dir=M.clone(),x.material.opacity=this.night*(M.y>.05?1:0);for(let I of a)I.material.color.copy(g.copy(Li.cloud).lerp(Qi.cloud,_).lerp(ts.cloud,w*.6));this.waterHorizon=b(this._wh||(this._wh=new vt),Li.water,Qi.water,ts.water,_,w*.5)},update(v,E){i.target.position.copy(E),i.position.copy(E).addScaledVector(p,90),u.position.copy(E),x.userData.dir&&x.position.copy(E).addScaledVector(x.userData.dir,340),e.position.copy(E);for(let A of a)A.position.x+=A.userData.speed*v,A.position.x-E.x>260&&(A.position.x-=520)}};return y.setTime(9),y}var Uv=`
attribute float aDepth;
uniform float uTime;
varying vec2 vXZ; varying float vDepth; varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec3 p = position;
  float w = sin(p.x*0.9 + uTime*1.3) * 0.5 + sin(p.z*0.6 - uTime*1.7) * 0.5;
  p.y += w * 0.04 * smoothstep(0.0, 0.8, aDepth);
  vXZ = p.xz; vDepth = aDepth; vWorld = (modelMatrix * vec4(p,1.0)).xyz;
  vec4 mvPosition = viewMatrix * vec4(vWorld, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Fv=`
uniform float uTime; uniform vec3 uSunDir; uniform vec3 uShallow; uniform vec3 uDeep; uniform vec3 uSkyTop; uniform vec3 uSkyHor; uniform vec3 uSun;
varying vec2 vXZ; varying float vDepth; varying vec3 vWorld;
#include <fog_pars_fragment>
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float wave(vec2 p){
  float h = 0.0;
  h += vn(p*0.8 + vec2(0.0, -uTime*1.0)) * 0.55;
  h += vn(p*2.0 + vec2(uTime*0.25, -uTime*1.5)) * 0.30;
  h += vn(p*4.6 + vec2(-uTime*0.35, -uTime*2.2)) * 0.15;
  return h;
}
void main(){
  vec2 p = vXZ;
  float e = 0.07;
  float h0 = wave(p), hx = wave(p + vec2(e,0.0)), hz = wave(p + vec2(0.0,e));
  vec3 n = normalize(vec3((h0-hx)*3.2, 1.0, (h0-hz)*3.2));
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(n,V), 0.0), 4.0) * 0.75 + 0.03;
  float dm = smoothstep(0.0, 1.5, vDepth);
  vec3 base = mix(uShallow, uDeep, dm);
  vec3 R = reflect(-V, n);
  vec3 refl = mix(uSkyHor, uSkyTop, clamp(R.y, 0.0, 1.0));
  vec3 col = mix(base, refl, clamp(fres, 0.0, 0.8));
  vec3 H = normalize(normalize(uSunDir) + V);
  col += uSun * pow(max(dot(n,H),0.0), 260.0) * 2.2;
  // ak\u0131\u015F \xE7izgileri: nehir boyunca kayan a\xE7\u0131k \u015Feritler (k\xFC\xE7\xFCk telefon ekran\u0131nda da se\xE7ilsin diye belirgin)
  float streak = vn(vec2(p.x*2.2, p.y*0.45 - uTime*2.2));
  float streak2 = vn(vec2(p.x*4.1 + 7.0, p.y*0.9 - uTime*3.4));
  col += vec3(0.92,1.0,1.0) * (smoothstep(0.70, 0.92, streak) * 0.15 + smoothstep(0.78, 0.94, streak2) * 0.09) * (0.35 + 0.65*dm);
  float fleck = vn(vec2(p.x*7.0, p.y*1.6 - uTime*4.0));
  col += vec3(1.0) * smoothstep(0.90, 0.98, fleck) * 0.14 * dm;
  float edge = smoothstep(0.34, 0.0, vDepth + (h0-0.5)*0.12);
  float fn = vn(p*3.4 + vec2(uTime*0.2, -uTime*0.35));
  float foam = edge * smoothstep(0.30, 0.65, fn + edge*0.45);
  col = mix(col, vec3(1.0), foam*0.85);
  float alpha = clamp(smoothstep(-0.03, 0.30, vDepth)*0.92 + foam*0.2, 0.0, 0.97);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function Fp(r){let o=[],a=[],l=[];for(let d=0;d<=230;d++){let f=-115+230*d/230,m=rn(f);for(let x=0;x<=56;x++){let p=m-20+40*x/56;o.push(p,ee.waterY,f),a.push(r.depthAt(p,f))}}for(let d=0;d<230;d++)for(let f=0;f<56;f++){let m=d*57+f,x=m+1,p=m+56+1,g=p+1;l.push(m,p,x,x,p,g)}let c=new $t;c.setAttribute("position",new Dt(o,3)),c.setAttribute("aDepth",new Dt(a,1)),c.setIndex(l);let h=new We({vertexShader:Uv,fragmentShader:Fv,transparent:!0,depthWrite:!1,fog:!0,uniforms:Rr.merge([mt.fog,{uTime:{value:0},uSunDir:{value:Xe.sunDir},uShallow:{value:tt(.22,.72,.7)},uDeep:{value:tt(.05,.3,.5)},uSkyTop:{value:Xe.top},uSkyHor:{value:tt(.5,.76,.92)},uSun:{value:Xe.sunColor}}])}),u=new Et(c,h);return u.frustumCulled=!1,u.renderOrder=2,{mesh:u,update(d){h.uniforms.uTime.value=d}}}function Mc(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,o=0,a=Object.keys(r.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,b=a.length;M<b;M++){let y=a[M],v=r.attributes[y];l[y]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let E=r.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((A,_)=>{let w=new A.array.constructor(A.count*A.itemSize);c[y][_]=new A.constructor(w,A.itemSize,A.normalized)}))}let f=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),p=f*x;for(let M=0;M<s;M++){let b=n?n.getX(M):M,y="";for(let v=0,E=a.length;v<E;v++){let A=a[v],_=r.getAttribute(A),w=_.itemSize;for(let I=0;I<w;I++)y+=`${Math.trunc(_[u[I]](b)*x+p)},`}if(y in e)h.push(e[y]);else{for(let v=0,E=a.length;v<E;v++){let A=a[v],_=r.getAttribute(A),w=r.morphAttributes[A],I=_.itemSize,L=l[A],C=c[A];for(let N=0;N<I;N++){let D=u[N],O=d[N];if(L[O](o,_[D](b)),w)for(let F=0,z=w.length;F<z;F++)C[F][O](o,w[F][D](b))}}e[y]=o,h.push(o),o++}}let g=r.clone();for(let M in r.attributes){let b=l[M];if(g.setAttribute(M,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),M in c)for(let y=0;y<c[M].length;y++){let v=c[M][y];g.morphAttributes[M][y]=new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)}}return g.setIndex(h),g}function Cu(r,t){if(t===tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Ar||t===Vo){let e=r.getIndex();if(e===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Ar)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var Sc={value:0},Iu=2;function Zo(r,t,e,n,i=1.2){let s=r.length,o=[],a=[],l=[],c=[],h=[],u=0;for(let f=0;f<s;f++){f&&(u+=r[f].distanceTo(r[f-1]));let m=r[f],x=t[f];for(let p=0;p<=e;p++){let g=p/e*Math.PI*2,M=1+(p%e===0?0:(n()-.5)*.18),b=Math.cos(g),y=Math.sin(g);o.push(m.x+b*x*M,m.y,m.z+y*x*M),a.push(b,.15,y),l.push(p/e*2,u*i);let v=.78+.22*ue(0,1.2,m.y);c.push(v,v,v)}}for(let f=0;f<s-1;f++)for(let m=0;m<e;m++){let x=f*(e+1)+m,p=x+1,g=x+e+1,M=g+1;h.push(x,p,g,p,M,g)}let d=new $t;return d.setAttribute("position",new Dt(o,3)),d.setAttribute("normal",new Dt(a,3)),d.setAttribute("uv",new Dt(l,2)),d.setAttribute("color",new Dt(c,3)),d.setIndex(h),d.computeVertexNormals(),d}function Pu(r,t=2){let e=new Nn(1,t);return e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=Mc(e,1e-4),e.scale(r[0],r[1],r[2]),e}function Ec(r,t,e,n,i,s,o=1){r.computeVertexNormals();let a=r.attributes.position,l=r.attributes.normal,c=new Float32Array(a.count*3),h=new vt;for(let u=0;u<a.count;u++){let d=he((a.getY(u)-n)/i*.5+.5,0,1),f=he(l.getY(u)*.5+.5,0,1);h.copy(t).lerp(e,he(d*.6+f*.5,0,1));let m=.94+s()*.12,x=.62+.38*he(a.getY(u)/o,0,1);c[u*3]=h.r*m*x,c[u*3+1]=h.g*m*x,c[u*3+2]=h.b*m*x}return r.setAttribute("color",new Jt(c,3)),r}function Jo(r,t,e,n,i=1,s=1,o=1,a=0,l=0){let c=new Rt().compose(new R(t,e,n),new pe().setFromEuler(new Ln(a,0,l)),new R(i,s,o));return r.applyMatrix4(c),r}var Ov=[tt(.18,.4,.17),tt(.22,.45,.14),tt(.3,.46,.14)],Bv=[tt(.5,.8,.28),tt(.58,.82,.3),tt(.68,.82,.28)];function kv(r){let t=sn(r),e=3+t()*1.2,n=(t()-.5)*.7,i=(t()-.5)*.7,s=[],o=[],a=7;for(let x=0;x<a;x++){let p=x/(a-1);s.push(new R(Math.sin(p*2)*n*p,p*e,Math.sin(p*2.4)*i*p)),o.push((.4-.2*p)*(x===0?1.55:x===1?1.15:1))}let l=[Zo(s,o,8,t)],c=s[a-1],h=[],u=5+Math.floor(t()*3),d=Ov[Math.floor(t()*3)],f=Bv[Math.floor(t()*3)],m=1.55+t()*.5;for(let x=0;x<u;x++){let p=x/u*Math.PI*2+t(),g=x===0?0:m*(.45+t()*.5),M=c.x+Math.cos(p)*g,b=c.z+Math.sin(p)*g,y=c.y+(x===0?1.55:.2+t()*1),v=(x===0?1.45:1+t()*.5)*(.9+t()*.3),E=Pu([v,v*.88,v],Iu);if(yc(E,.16,1.4,t()*50),Jo(E,M,y,b),Ec(E,d,f,y,v,t,c.y+3.2),h.push(E),x>0&&t()<.8){let A=new R(c.x,c.y-.4-t()*.5,c.z),_=new R(M*.8+c.x*.2,y-.4,b*.8+c.z*.2),w=[A,A.clone().lerp(_,.5).add(new R(0,.1,0)),_];l.push(Zo(w,[.11,.08,.05],5,t))}}return{trunk:jn(l),foliage:jn(h),height:e+3.4,trunkR:.5,canopyR:m+.8,shape:{type:"oak",H:e,lean:n,lean2:i}}}function zv(r){let t=sn(r),e=1.4+t()*.6,n=[],i=[];for(let h=0;h<5;h++){let u=h/4;n.push(new R(0,u*(e+3.4),0)),i.push((.3-.18*u)*(h===0?1.4:1))}let s=[Zo(n,i,7,t)],o=[],a=5+Math.floor(t()*2),l=tt(.1+t()*.04,.3+t()*.06,.2),c=tt(.3+t()*.08,.58,.32);for(let h=0;h<a;h++){let u=h/(a-1),d=(2.05-1.5*u)*(.92+t()*.16),f=1.9-.5*u,m=e+u*4.4,x=new Dn(d,f,9,2,!0);x.deleteAttribute("uv");let p=x.attributes.position;for(let g=0;g<p.count;g++){let M=p.getY(g);if(M<-f*.2){let b=Math.atan2(p.getZ(g),p.getX(g));p.setY(g,M-.18*(.5+.5*Math.sin(b*3+h))-t()*.08)}p.setX(g,p.getX(g)*(1+(t()-.5)*.06)),p.setZ(g,p.getZ(g)*(1+(t()-.5)*.06))}x=Mc(x,1e-4),Jo(x,0,m+f*.5,0,1,1,1,0,0),x.applyMatrix4(new Rt().makeRotationY(t()*6.28)),Ec(x,l,c,m+f*.5,f*.6,t,e+6.5),o.push(x)}return{trunk:jn(s),foliage:jn(o),height:e+6.4,trunkR:.4,canopyR:2.1,shape:{type:"pine",H:e+3.4,lean:0,lean2:0}}}function Hv(r){let t=sn(r),e=3.6+t()*1.4,n=(t()-.5)*.6,i=(t()-.5)*.6,s=[],o=[];for(let x=0;x<8;x++){let p=x/7;s.push(new R(Math.sin(p*2.4)*n*p,p*e,Math.sin(p*2)*i*p)),o.push((.2-.1*p)*(x===0?1.4:1))}let a=Zo(s,o,7,t,.6),l=a.attributes.color,c=a.attributes.uv;for(let x=0;x<l.count;x++){let p=hi(c.getX(x)*6+r,c.getY(x)*5)>.72?.35:1;l.setXYZ(x,.92*p,.9*p,.84*p)}let h=s[7],u=[],d=tt(.3,.52,.14),f=tt(.62+t()*.12,.84,.28),m=4+Math.floor(t()*3);for(let x=0;x<m;x++){let p=x/m*Math.PI*2+t(),g=x===0?0:.5+t()*.6,M=h.x+Math.cos(p)*g,b=h.z+Math.sin(p)*g,y=h.y-.9+x*.35+t()*.4,v=.7+t()*.4,E=Pu([v,v*1.25,v],Iu);yc(E,.13,1.7,t()*50),Jo(E,M,y,b),Ec(E,d,f,y,v*1.2,t,h.y+1.6),u.push(E)}return{trunk:a,foliage:jn(u),height:e+2,trunkR:.3,canopyR:1.6,birch:!0,shape:{type:"birch",H:e,lean:n,lean2:i}}}function Vv(){let r=sn(77),t=[new R(0,0,0),new R(0,.18,0),new R(0,.38,0)],e=Zo(t,[.5,.4,.37],9,r,1.2),n=new wi(.37,9);n.rotateX(-Math.PI/2),n.translate(0,.38,0);let i=new Float32Array(n.attributes.position.count*3).fill(0);for(let o=0;o<i.length;o+=3)i[o]=.95,i[o+1]=.78,i[o+2]=.52;return n.setAttribute("color",new Jt(i,3)),jn([e,n])}function Gv(r){let t=sn(r),e=tt(.16,.38,.16),n=tt(.52+t()*.2,.78,.3),i=[],s=3+Math.floor(t()*2);for(let o=0;o<s;o++){let a=.5+t()*.35,l=Pu([a,a*.78,a],1);yc(l,.18,2,t()*20);let c=(t()-.5)*.9,h=(t()-.5)*.9,u=a*.55;if(Jo(l,c,u,h),Ec(l,e,n,u,a,t,1.2),i.push(l),t()<.35)for(let d=0;d<3;d++){let f=new Nn(.06,0);f.deleteAttribute("uv");let m=t()*6.28;Jo(f,c+Math.cos(m)*a*.9,u+t()*a*.4,h+Math.sin(m)*a*.9),ui(f,tt(.9,.18,.22)),i.push(f)}}return jn(i)}function Wv(r){let t=sn(r),e=new Nn(1,1);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=Mc(e,1e-4);let n=e.attributes.position,i=new R;for(let c=0;c<n.count;c++){i.fromBufferAttribute(n,c);let h=.78+hi(i.x*2.1+r,i.y*2.1+i.z*1.3)*.5;i.multiplyScalar(h),i.y*=.72,n.setXYZ(c,i.x,i.y,i.z)}e=e.toNonIndexed(),e.computeVertexNormals();let s=e.attributes.position,o=e.attributes.normal,a=new Float32Array(s.count*2),l=new Float32Array(s.count*3);for(let c=0;c<s.count;c+=3){let h=Math.abs(o.getX(c)),u=Math.abs(o.getY(c)),d=Math.abs(o.getZ(c));for(let f=0;f<3;f++){let m=s.getX(c+f),x=s.getY(c+f),p=s.getZ(c+f),g,M;u>=h&&u>=d?(g=m,M=p):h>=d?(g=p,M=x):(g=m,M=x),a[(c+f)*2]=g*.6,a[(c+f)*2+1]=M*.6;let b=ue(.55,.9,o.getY(c+f))*(.5+.5*hi(m*3+r,p*3)),y=tt(.62,.6,.58).lerp(tt(.36,.55,.22),b*.85),v=.9+t()*.15;l[(c+f)*3]=y.r*v,l[(c+f)*3+1]=y.g*v,l[(c+f)*3+2]=y.b*v}}return e.setAttribute("uv",new Jt(a,2)),e.setAttribute("color",new Jt(l,3)),e}function Op(){let r=[0,.34,.68],t=[.045,.036,.022],e=[],n=[],i=[],s=[],o=tt(.2,.42,.14),a=tt(.62,.86,.3),l=new vt;for(let u=0;u<3;u++)for(let d of[-1,1])e.push(d*t[u],r[u],r[u]**2*.05),i.push(0,1,0),l.copy(o).lerp(a,r[u]/.9),n.push(l.r,l.g,l.b);e.push(0,1,.12),i.push(0,1,0),l.copy(a),n.push(l.r,l.g,l.b),s.push(0,1,2,1,3,2,2,3,4,3,5,4,4,5,6);let c=e.length/3;for(let u=0;u<c;u++)e.push(e[u*3],e[u*3+1],e[u*3+2]),i.push(0,1,0),n.push(n[u*3],n[u*3+1],n[u*3+2]);s.push(c+0,c+2,c+1,c+1,c+2,c+3,c+2,c+4,c+3,c+3,c+4,c+5,c+4,c+6,c+5);let h=new $t;return h.setAttribute("position",new Dt(e,3)),h.setAttribute("normal",new Dt(i,3)),h.setAttribute("color",new Dt(n,3)),h.setIndex(s),h}function Xv(){let r=new Le(.008,.012,.32,4,1);r.translate(0,.16,0),ui(r,tt(.3,.55,.2));let t=[];for(let n=0;n<5;n++){let i=n/5*Math.PI*2,s=new Ue(.045,6,4);s.scale(1,.35,1.5),s.rotateY(-i),s.translate(Math.cos(i)*.055,.33,Math.sin(i)*.055),ui(s,tt(1,1,1)),t.push(s)}let e=new Ue(.035,6,4);return e.translate(0,.335,0),ui(e,tt(1,.82,.18)),t.push(e),{stem:jn([r]),head:jn(t)}}function qv(){let r=new Le(.03,.04,.12,6);r.translate(0,.06,0),ui(r,tt(.96,.92,.82));let t=new Ue(.1,10,6,0,Math.PI*2,0,Math.PI/2);t.scale(1,.75,1),t.translate(0,.11,0),ui(t,tt(.88,.2,.18));let e=[r,t];for(let n=0;n<4;n++){let i=n*1.7,s=.055,o=new Ue(.014,5,4);o.translate(Math.cos(i)*s,.17-n%2*.015,Math.sin(i)*s),ui(o,tt(1,1,.95)),e.push(o)}return jn(e)}function Yv(){let r=new wi(.42,14,.5,Math.PI*2-.5);return r.rotateX(-Math.PI/2),ui(r,tt(.28,.62,.26),.2),r}var bc=class{constructor(t,e,n,i){this.scene=t,this.terrain=e,this.tier=n,this.tex=i,Iu=n.treeDetail,this.trees=[],this.obstacles=[],this.rocks=[],this.ao=[],this.group=new ie,t.add(this.group),this.active=[],this.placements=this.placeAll()}placeAll(){let t=this.terrain,e=sn(20261019),n=ee.lodgeSite,i=[],s=[],o=(d,f,m)=>{for(let x of s){let p=x.x-d,g=x.z-f,M=x.r+m;if(p*p+g*g<M*M)return!1}return!0},a=(d,f)=>{let m=t.heightAt(d,f);return!(m<.75||Math.abs(d-rn(f))<11&&m<1||t.slopeAt(d,f)>.85||Math.hypot(d-n.x,f-n.z)<8.5||Math.hypot(d-ee.spawn.x,f-ee.spawn.z)<3)},l=(d,f,m)=>{let x=m==="pine"?1.8:2.4;return!a(d,f)||!o(d,f,x)?!1:(s.push({x:d,z:f,r:x}),i.push({x:d,z:f,kind:m,variant:Math.floor(e()*4),scale:.85+e()*.5,rot:e()*6.283,tint:e()}),!0)},c=[[-32,-4,10,"oak"],[-28,26,9,"oak"],[-6,-16,9,"birch"],[-40,14,8,"oak"],[-8,34,7,"birch"],[-24,-22,8,"pine"],[30,-8,11,"oak"],[28,22,10,"birch"],[12,44,9,"oak"]];for(let[d,f,m,x]of c)for(let p=0,g=0;p<60&&g<11;p++){let M=e()*6.283,b=Math.sqrt(e())*m,y=e()<.7?x:e()<.5?"oak":"birch";l(d+Math.cos(M)*b,f+Math.sin(M)*b,y)&&g++}for(let d=0;d<2600;d++){let f=(e()-.5)*190,m=(e()-.5)*190,x=Math.hypot(f,m),p=ke(f*.03+5,m*.03-3,3)*.5+.5,g=ue(.35,.65,p)*.9+ue(48,70,x)*.9;if(e()>g*this.tier.treeKeep)continue;let M=t.heightAt(f,m),b=x>50||M>5?"pine":e()<.2?"oak":e()<.3?"birch":"pine";Math.abs(f-rn(m))<20&&e()<.6&&(b="birch"),l(f,m,b)}for(let d of i)d.choppable=Math.hypot(d.x,d.z)<54&&d.kind!=="pine"||Math.hypot(d.x,d.z)<54&&d.kind==="pine";let h=[];for(let d=0;d<700&&h.length<110;d++){let f=(e()-.5)*170,m=(e()-.5)*170,x=t.heightAt(f,m),g=Math.abs(f-rn(m))<13&&x>-.6,M=t.slopeAt(f,m);if(!(g||M>.35?e()<.5:e()<.06)||Math.hypot(f-n.x,m-n.z)<7||x>14)continue;let b=.45+Math.pow(e(),2)*1.6;o(f,m,b*.9)&&(s.push({x:f,z:m,r:b*.9}),h.push({x:f,z:m,s:b,variant:Math.floor(e()*5),rot:e()*6.283}))}let u=[];for(let d=0;d<1400&&u.length<260;d++){let f=(e()-.5)*150,m=(e()-.5)*150;if(!a(f,m))continue;let x=ke(f*.05-9,m*.05+4,3)*.5+.5;e()>.15+x*.6||o(f,m,.6)&&(s.push({x:f,z:m,r:.6}),u.push({x:f,z:m,variant:Math.floor(e()*4),scale:.8+e()*.6,rot:e()*6.283}))}return{trees:i,rocks:h,bushes:u,taken:s}}get aoPoints(){let t=[];for(let e of this.placements.trees)t.push({x:e.x,z:e.z,r:2.6*e.scale,k:.38});for(let e of this.placements.rocks)t.push({x:e.x,z:e.z,r:1.2*e.s+.5,k:.4});for(let e of this.placements.bushes)t.push({x:e.x,z:e.z,r:1.1,k:.28});return t}build(){let t=this.terrain,e=this.placements,n=this.tex,i=Sc,s=(C,N=1)=>(C.onBeforeCompile=D=>{D.uniforms.uTime=i,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #else
            vec3 iw = vec3(0.0);
          #endif
          float hh = max(transformed.y, 0.0);
          float ph = iw.x * 0.31 + iw.z * 0.23;
          transformed.x += (sin(uTime * 1.3 + ph) * 0.038 * hh + sin(uTime * 3.1 + ph * 1.9 + transformed.y) * 0.016) * ${N.toFixed(2)};
          transformed.z += cos(uTime * 1.05 + ph * 0.8) * 0.03 * hh * ${N.toFixed(2)};`)},C);this.injectWind=s;let o=s(new qt({vertexColors:!0,roughness:.82,metalness:0})),a=new qt({vertexColors:!0,map:n.barkC,normalMap:n.barkN,roughness:.92}),l=new qt({vertexColors:!0,roughness:.8}),c=new qt({vertexColors:!0,map:n.rockC,roughness:.95,flatShading:!0});this.mats={foliageMat:o,trunkMat:a,rockMat:c};let h={oak:[],pine:[],birch:[]};for(let C=0;C<4;C++)h.oak.push(kv(100+C*31)),h.pine.push(zv(200+C*17)),h.birch.push(Hv(300+C*13));this.kinds=h;let u=C=>C.kind+C.variant+":"+Math.floor((C.x+110)/40)+":"+Math.floor((C.z+110)/40),d={},f={};for(let C of e.trees){let N=u(C);d[N]=(d[N]||0)+1,f[N]=C}let m={};for(let C of Object.keys(d)){let N=d[C],D=h[f[C].kind][f[C].variant],O=new Ce(D.trunk,D.birch?l:a,N),F=new Ce(D.foliage,o,N);for(let z of[O,F])z.castShadow=!0,z.receiveShadow=!0,z.count=0,this.group.add(z);F.frustumCulled=!0,O.frustumCulled=!0,m[C]={tm:O,fm:F,def:D}}this.meshes=m;let x=new Rt,p=new pe,g=new R,M=new R,b=new R(0,1,0),y=new vt;e.trees.forEach((C,N)=>{let D=u(C),O=m[D];C.id=N,C.key=D,C.idx=O.tm.count++,O.fm.count=O.tm.count,C.y=t.heightAt(C.x,C.z)-.05,C.hp=3,C.alive=!0,C.state="stand",C.trunkR=O.def.trunkR*C.scale,C.height=O.def.height*C.scale,this.writeTree(C),y.setHSL(0,0,1);let F=(C.tint-.5)*.1;y.setRGB(1,1,1).offsetHSL(F,0,(C.tint-.5)*.12),O.fm.setColorAt(C.idx,y),this.trees.push(C),this.obstacles.push({x:C.x,z:C.z,r:C.trunkR*.95,tree:C})});for(let C in m){let N=m[C];N.tm.instanceMatrix.needsUpdate=!0,N.fm.instanceMatrix.needsUpdate=!0,N.fm.instanceColor&&(N.fm.instanceColor.needsUpdate=!0),N.tm.computeBoundingSphere(),N.fm.computeBoundingSphere()}let v=Vv();this.stumps=new Ce(v,a,e.trees.length),this.stumps.count=0,this.stumps.castShadow=!0,this.stumps.receiveShadow=!0,this.stumps.frustumCulled=!1,this.group.add(this.stumps);let E=[0,1,2,3,4].map(C=>Wv(500+C*7)),A=[0,0,0,0,0];e.rocks.forEach(C=>A[C.variant]++);let _=E.map((C,N)=>{let D=new Ce(C,c,Math.max(1,A[N]));return D.count=0,D.castShadow=!0,D.receiveShadow=!0,this.group.add(D),D});e.rocks.forEach(C=>{let N=_[C.variant],D=t.heightAt(C.x,C.z);g.set(C.x,D+C.s*.12,C.z),p.setFromAxisAngle(b,C.rot),M.set(C.s*1.15,C.s,C.s*1),x.compose(g,p,M),N.setMatrixAt(N.count++,x),this.obstacles.push({x:C.x,z:C.z,r:C.s*.85}),this.rocks.push(C)}),_.forEach(C=>{C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere()});let w=[0,1,2,3].map(C=>Gv(700+C*5)),I=[0,0,0,0];e.bushes.forEach(C=>I[C.variant]++);let L=w.map((C,N)=>{let D=new Ce(C,o,Math.max(1,I[N]));return D.count=0,D.castShadow=!0,D.receiveShadow=!0,this.group.add(D),D});e.bushes.forEach(C=>{let N=L[C.variant];g.set(C.x,t.heightAt(C.x,C.z)-.05,C.z),p.setFromAxisAngle(b,C.rot),M.setScalar(C.scale),x.compose(g,p,M),N.setMatrixAt(N.count++,x)}),L.forEach(C=>{C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere()}),this.buildGrass(sn(99)),this.buildSmall(sn(4242))}writeTree(t,e=null,n=0,i=1,s=0,o=0){let a=this.meshes[t.key],l=this._m4||(this._m4=new Rt),c=this._q||(this._q=new pe),h=this._q2||(this._q2=new pe),u=this._p||(this._p=new R),d=this._s||(this._s=new R);c.setFromAxisAngle(this._up||(this._up=new R(0,1,0)),t.rot),e&&(h.setFromAxisAngle(e,n),c.premultiply(h)),u.set(t.x+s,t.y,t.z+o),d.setScalar(t.scale*i),l.compose(u,c,d),a.tm.setMatrixAt(t.idx,l),a.fm.setMatrixAt(t.idx,l),a.tm.instanceMatrix.needsUpdate=!0,a.fm.instanceMatrix.needsUpdate=!0}hideTree(t){let e=this.meshes[t.key],n=this._zero||(this._zero=new Rt().makeScale(0,0,0));e.tm.setMatrixAt(t.idx,n),e.fm.setMatrixAt(t.idx,n),e.tm.instanceMatrix.needsUpdate=!0,e.fm.instanceMatrix.needsUpdate=!0}addStump(t){let e=new Rt,n=new pe().setFromAxisAngle(new R(0,1,0),t.rot);e.compose(new R(t.x,t.y+.02,t.z),n,new R().setScalar(t.scale*.9+.2)),this.stumps.setMatrixAt(this.stumps.count++,e),this.stumps.instanceMatrix.needsUpdate=!0}removeObstacleOf(t){let e=this.obstacles.findIndex(n=>n.tree===t);e>=0&&this.obstacles.splice(e,1)}applyChopped(t){let e=this.trees[t];!e||!e.alive||(e.alive=!1,e.state="gone",this.hideTree(e),this.addStump(e),this.removeObstacleOf(e))}nearestChoppable(t,e,n){let i=null,s=n*n;for(let o of this.trees){if(!o.alive||!o.choppable||o.state!=="stand")continue;let a=o.x-t,l=o.z-e,c=a*a+l*l-0,h=(n+o.trunkR)*(n+o.trunkR);c<h&&c<s+4&&(!i||c<s)&&(i=o,s=c)}return i}trunkAt(t){let e=this.kinds[t.kind][t.variant].shape,n=1/t.scale,i=he(n/e.H,0,1),o=(e.type==="oak"?.4-.2*i:e.type==="pine"?.3-.18*i:.2-.1*i)*t.scale*1.03,a=0,l=0;e.type==="oak"?(a=Math.sin(i*2)*e.lean,l=Math.sin(i*2.4)*e.lean2):e.type==="birch"&&(a=Math.sin(i*2.4)*e.lean,l=Math.sin(i*2)*e.lean2);let c=Math.cos(t.rot),h=Math.sin(t.rot),u=t.x+(a*c+l*h)*t.scale,d=t.z+(-a*h+l*c)*t.scale;return{R:o,cx:u,cz:d}}updateBite(t,e,n){let{R:i,cx:s,cz:o}=this.trunkAt(t),a=[1.5,2.4,3.3][Math.min(t.bite-1,2)],l=.34+.09*t.bite,c=Math.atan2(e-s,n-o),h=new Le(i,i*1.02,l,16,1,!0,c-a/2,a);if(t.biteMesh)t.biteMesh.geometry.dispose(),t.biteMesh.geometry=h;else{let u=new qt({color:tt(.96,.8,.55),roughness:.75,side:Fe,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});t.biteMesh=new Et(h,u),t.biteMesh.castShadow=!1,this.group.add(t.biteMesh)}t.biteMesh.position.set(s,t.y+1,o)}hit(t,e,n){t.bite=(t.bite||0)+1,this.updateBite(t,e,n),t.hp--,t.shake=.5,t.fallDir=new R(t.x-e,0,t.z-n).normalize(),this.active.includes(t)||this.active.push(t),t.hp<=0&&(t.state="falling",t.fallT=0,this.removeObstacleOf(t),t.biteMesh&&(t.biteMesh.visible=!1))}update(t,e,n){Sc.value=e;for(let i=this.active.length-1;i>=0;i--){let s=this.active[i];if(s.state==="stand"){if(s.shake-=t*1.6,s.shake<=0){this.writeTree(s),this.active.splice(i,1);continue}let o=Math.sin(e*48)*.035*s.shake,a=new R(s.fallDir.z,0,-s.fallDir.x);this.writeTree(s,a,o)}else if(s.state==="falling"){s.fallT+=t;let o=1.5,a=Math.min(1,s.fallT/o),l=Math.PI*.5*(a*a);a>=1&&(l=Math.PI*.5-.06*Math.max(0,Math.sin((s.fallT-o)*18))*Math.exp(-(s.fallT-o)*5));let c=new R(s.fallDir.z,0,-s.fallDir.x);if(this.writeTree(s,c,l),!s.thud&&a>=1&&(s.thud=!0,n?.onThud?.(s)),s.fallT>o+.9){let h=Math.max(0,1-(s.fallT-o-.9)/.35);this.writeTree(s,c,Math.PI*.5,h),h<=0&&(s.biteMesh&&(this.group.remove(s.biteMesh),s.biteMesh.geometry.dispose(),s.biteMesh=null),s.state="gone",s.alive=!1,this.hideTree(s),this.addStump(s),this.active.splice(i,1),n?.onGone?.(s))}}}}buildGrass(t){let e=this.terrain,n=this.tier,i=Op(),s=new Un({vertexColors:!0});this.grassUniforms={uTime:Sc,uDensity:{value:1},uFade:{value:44}},s.onBeforeCompile=p=>{p.uniforms.uTime=this.grassUniforms.uTime,p.uniforms.uDensity=this.grassUniforms.uDensity,p.uniforms.uFade=this.grassUniforms.uFade,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uDensity; uniform float uFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float hsh = fract(sin(dot(iw.xz, vec2(12.9898, 78.233))) * 43758.5453);
        float keep = step(hsh, uDensity);
        float dcam = distance(cameraPosition, iw);
        keep *= 1.0 - smoothstep(uFade, uFade + 12.0, dcam);
        transformed *= keep;
        float bend = transformed.y * transformed.y;
        transformed.x += (sin(uTime * 1.9 + iw.x * 0.45 + iw.z * 0.3) * 0.12 + sin(uTime * 5.0 + iw.x * 2.0) * 0.025) * bend;
        transformed.z += cos(uTime * 1.5 + iw.z * 0.4) * 0.07 * bend;`)},this.grassMat=s;let o=66,a=16,l=n.grass*6.5;this.grassMeshes=[];let c=new Rt,h=new pe,u=new R,d=new R,f=new R(0,1,0),m=new vt,x=ee.lodgeSite;for(let p=-o;p<o;p+=a)for(let g=-o;g<o;g+=a){let M=Math.floor(a*a*l),b=[];for(let v=0;v<M;v++){let E=p+t()*a,A=g+t()*a,_=e.heightAt(E,A);if(_<.42||e.slopeAt(E,A)>.6||Math.hypot(E,A)>62)continue;let L=ke(E*.03+5,A*.03-3,3)*.5+.5;t()>1-.35*ue(.55,.8,L)-0||Math.hypot(E-x.x,A-x.z)<2.9||b.push([E,_,A,L])}if(!b.length)continue;let y=new Ce(i,s,b.length);b.forEach((v,E)=>{let A=.45+t()*.55+ke(v[0]*.1,v[2]*.1,2)*.3;u.set(v[0],v[1]-.03,v[2]),h.setFromAxisAngle(f,t()*6.283),d.set(.9+t()*.8,Math.max(.25,A),1),c.compose(u,h,d),y.setMatrixAt(E,c);let _=ke(v[0]*.05,v[2]*.05,2)*.5+.5;m.setRGB(.75+_*.3+t()*.15,.85+_*.15+t()*.12,.6+t()*.2),y.setColorAt(E,m)}),y.receiveShadow=!0,y.castShadow=!1,y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),this.group.add(y),this.grassMeshes.push(y)}}buildSmall(t){let e=this.terrain,n=this.tier,i=new Rt,s=new pe,o=new R,a=new R,l=new R(0,1,0),c=new vt,h=(F,z)=>e.heightAt(F,z)>.6&&e.slopeAt(F,z)<.4&&Math.hypot(F,z)<58,{stem:u,head:d}=Xv(),f=Math.floor(900*n.flowers),m=[];for(let F=0;F<f*6&&m.length<f;F++){let z=(t()-.5)*120,K=(t()-.5)*120;h(z,K)&&(hi(z*.12,K*.12)<.5&&t()<.8||Math.hypot(z-ee.lodgeSite.x,K-ee.lodgeSite.z)<3.3||m.push([z,K]))}let x=new Ce(u,new Un({vertexColors:!0}),m.length),p=new Ce(d,new Un({vertexColors:!0}),m.length),g=[tt(1,1,1),tt(1,.55,.7),tt(1,.85,.25),tt(.7,.6,1),tt(1,.5,.35)];m.forEach(([F,z],K)=>{let W=.9+t()*.9;o.set(F,e.heightAt(F,z)-.02,z),s.setFromAxisAngle(l,t()*6.28),a.setScalar(W),i.compose(o,s,a),x.setMatrixAt(K,i),p.setMatrixAt(K,i),p.setColorAt(K,c.copy(g[Math.floor(t()*g.length)]))}),[x,p].forEach(F=>{F.instanceMatrix.needsUpdate=!0,F.receiveShadow=!0,F.frustumCulled=!1,this.group.add(F)}),this.flowerMats=[x.material,p.material];let M=new Ce(qv(),new Un({vertexColors:!0}),70),b=0;for(let F of this.placements.trees){if(b>=70)break;if(t()>.3)continue;let z=t()*6.28,K=.9+t()*.7;for(let W=0;W<1+Math.floor(t()*3)&&b<70;W++){let $=F.x+Math.cos(z+W*.7)*(K+W*.15),nt=F.z+Math.sin(z+W*.7)*(K+W*.15);e.heightAt($,nt)<.7||(o.set($,e.heightAt($,nt)-.01,nt),s.setFromAxisAngle(l,t()*6.28),a.setScalar(.8+t()*.9),i.compose(o,s,a),M.setMatrixAt(b++,i))}}M.count=b,M.instanceMatrix.needsUpdate=!0,M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,this.group.add(M);let y=Op(),v=new Un({vertexColors:!0});v.onBeforeCompile=F=>{F.uniforms.uTime=Sc,F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float bend = transformed.y * transformed.y;
        transformed.x += sin(uTime * 1.6 + iw.x * 0.5 + iw.z * 0.4) * 0.10 * bend;
        transformed.z += cos(uTime * 1.3 + iw.z * 0.6) * 0.06 * bend;`)};let E=[];for(let F=0;F<6e3*Math.max(.3,n.grass)&&E.length<1600*Math.max(.4,n.grass);F++){let z=(t()-.5)*124,K=rn(z)+(t()-.5)*30,W=e.heightAt(K,z);W<-.35||W>.55||hi(K*.2,z*.2)<.45||E.push([K,W,z])}let A=new Ce(y,v,E.length),_=new po(.035,.2,3,6);_.translate(0,1.55,0),ui(_,tt(.42,.24,.12));let w=new Ce(_,new Un({vertexColors:!0}),Math.max(1,Math.floor(E.length/5))),I=0;E.forEach((F,z)=>{let K=1.2+t()*1.1;o.set(F[0],F[1]-.02,F[2]),s.setFromAxisAngle(l,t()*6.28),a.set(1.6+t(),K,1),i.compose(o,s,a),A.setMatrixAt(z,i),A.setColorAt(z,c.setRGB(.55+t()*.3,.75+t()*.2,.4+t()*.15)),z%5===0&&I<w.instanceMatrix.count&&(a.set(1,1,1),o.y=F[1]-.02+0,a.setScalar(K/1.6*1),i.compose(o,s,a),w.setMatrixAt(I++,i))}),w.count=I,[A,w].forEach(F=>{F.instanceMatrix.needsUpdate=!0,F.receiveShadow=!0,F.frustumCulled=!1,this.group.add(F)}),this.reedMat=v;let L=Yv(),C=[];for(let F=0;F<3e3&&C.length<90;F++){let z=(t()-.5)*100,K=rn(z)+(t()-.5)*16,W=e.depthAt(K,z);W<.25||W>.9||C.push([K,z])}let N=new Ce(L,new Un({vertexColors:!0,side:Fe}),C.length),D=new Ce(new Dn(.1,.16,7).translate(0,.09,0),new Un({color:tt(1,.65,.78)}),Math.ceil(C.length/3)),O=0;C.forEach(([F,z],K)=>{o.set(F,ee.waterY+.03,z),s.setFromAxisAngle(l,t()*6.28),a.setScalar(.7+t()*.8),i.compose(o,s,a),N.setMatrixAt(K,i),N.setColorAt(K,c.setRGB(.8+t()*.3,.9+t()*.2,.7+t()*.2)),K%3===0&&(o.y+=.01,i.compose(o,s,a),D.setMatrixAt(O++,i))}),D.count=O,[N,D].forEach(F=>{F.instanceMatrix.needsUpdate=!0,F.frustumCulled=!1,this.group.add(F)})}setGrassDensity(t){this.grassUniforms&&(this.grassUniforms.uDensity.value=t)}setGrassFade(t){this.grassUniforms&&(this.grassUniforms.uFade.value=t)}};var wc=class{constructor(t,e,n){this.scene=t,this.terrain=e,this.items=[],this.nextId=1;let i=new qt({map:n.barkC,normalMap:n.barkN,roughness:.9}),s=new qt({color:tt(.92,.74,.46),roughness:.8});this.mats=[i,s,s],this.geo=new Le(.13,.145,1.05,10,1,!1),this.geo.rotateZ(Math.PI/2),this.group=new ie,t.add(this.group)}makeMesh(t,e){let n=new ie;return(t===1?[[0,.13,0]]:t===2?[[0,.13,-.15],[.05,.13,.15]]:[[0,.13,-.15],[.03,.13,.15],[.02,.36,0]]).forEach(([s,o,a],l)=>{let c=new Et(this.geo,this.mats);c.position.set(s,o,a),c.rotation.y=(e()-.5)*.35,c.scale.set(.85+e()*.3,1,1),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}),n}spawn(t,e,n,{key:i=null,pop:s=null}={}){let o=sn((Math.floor(t*31)^Math.floor(e*57))+7),a=this.makeMesh(n,o),l=this.terrain.heightAt(t,e);a.position.set(t,l+.02,e),a.rotation.y=o()*6.28,this.group.add(a);let c={id:this.nextId++,key:i,x:t,z:e,y:l,wood:n,mesh:a,state:"ground",t:0,vy:0,bob:o()*6};return s&&(c.state="pop",c.px=s.x,c.pz=s.z,c.vy=5.5,c.sx=s.sx,c.sz=s.sz,c.py=s.y,a.position.set(s.x,s.y,s.z)),this.items.push(c),c}nearest(t,e,n){let i=null,s=n*n;for(let o of this.items){if(o.state!=="ground")continue;let a=o.x-t,l=o.z-e,c=a*a+l*l;c<s&&(s=c,i=o)}return i}throwLog(t,e,n=0,i){let s=this.makeMesh(1,Math.random);s.position.copy(t),s.visible=!1,this.group.add(s),this.items.push({id:this.nextId++,key:null,state:"throw",t:-n,from:t.clone(),to:e.clone(),mesh:s,wood:0,onLand:i})}remove(t){this.group.remove(t.mesh);let e=this.items.indexOf(t);e>=0&&this.items.splice(e,1)}update(t,e,n){for(let i of this.items)if(i.state==="pop"){i.vy-=16*t;let s=i.mesh;s.position.x+=i.sx*t,s.position.z+=i.sz*t,s.position.y+=i.vy*t,s.rotation.x+=t*5,s.rotation.z+=t*3;let o=this.terrain.heightAt(s.position.x,s.position.z)+.02;s.position.y<=o&&i.vy<0&&(Math.abs(i.vy)>2.2?(i.vy=-i.vy*.32,s.rotation.x*=.3,s.rotation.z*=.3,n?.onBounce?.(i)):(i.state="ground",i.x=s.position.x,i.z=s.position.z,i.y=o,s.position.y=o,s.rotation.x=0,s.rotation.z=0))}else if(i.state==="fly"){i.t+=t/.28;let s=Math.min(1,i.t),o=s*s;i.mesh.position.lerpVectors(i.from,i.to,o),i.mesh.position.y+=Math.sin(s*Math.PI)*.6,i.mesh.scale.setScalar(1-.75*o),s>=1&&(i.state="done",n?.onCollected?.(i),this.remove(i))}else if(i.state==="throw"){if(i.t+=t/.6,i.t<0)continue;let s=Math.min(1,i.t);i.mesh.visible=!0,i.mesh.position.lerpVectors(i.from,i.to,s),i.mesh.position.y+=Math.sin(s*Math.PI)*1.5,i.mesh.rotation.x+=t*9,i.mesh.rotation.z+=t*5,s>=1&&(i.onLand&&i.onLand(i),this.remove(i))}else i.state==="ground"&&(i.mesh.position.y=i.y+.02)}};var Kv=22,Bp=11,Tc=20,Zv=140,Ac=class{constructor(t,e,n,i,s=[]){this.scene=t,this.terrain=e,this.stones=[],this.bushes=[],this.group=new ie,t.add(this.group);let o=new Set(s),a=sn(4242),l=ee.lodgeSite,c=ee.spawn,h=(y,v,E=.7)=>e.heightAt(y,v)<E||e.slopeAt(y,v)>.45||Math.hypot(y,v)>54||Math.hypot(y-l.x,v-l.z)<7?!1:!n.obstacles.some(_=>(_.x-y)**2+(_.z-v)**2<(_.r+1.3)**2)&&!this.stones.some(_=>(_.x-y)**2+(_.z-v)**2<9)&&!this.bushes.some(_=>(_.x-y)**2+(_.z-v)**2<36),u=new qt({map:i.rockC,color:tt(.86,.85,.82),roughness:.95,flatShading:!0}),d=new Nn(1,1);for(let y=0,v=0;y<900&&v<Kv;y++){let E=v<12,A=a()*6.283,_=E?9+a()*24:14+a()*38,w=(E?c.x:0)+Math.cos(A)*_,I=(E?c.z:0)+Math.sin(A)*_*.9;if(!h(w,I))continue;let L="s"+v,C=1+Math.floor(a()*2)+(a()<.3?1:0);if(v++,o.has(L)){this.stones.push({key:L,x:w,z:I,y:0,n:C,alive:!1,mesh:null});continue}let N=e.heightAt(w,I),D=new ie;for(let O=0;O<Math.min(3,C+1);O++){let F=.17+a()*.15,z=new Et(d,u);z.scale.set(F*(1+a()*.4),F*.7,F*(1+a()*.4)),z.position.set((a()-.5)*.55,F*.45,(a()-.5)*.55),z.rotation.y=a()*6,z.castShadow=!0,z.receiveShadow=!0,D.add(z)}D.position.set(w,N,I),this.group.add(D),this.stones.push({key:L,x:w,z:I,y:N,n:C,alive:!0,mesh:D})}let f=new qt({color:tt(.2,.46,.17),roughness:1}),m=new qt({color:tt(.3,.58,.2),roughness:1}),x=new Nn(1,1);this.berryMesh=new Ce(new Ue(.085,8,6),new qt({roughness:.4}),Bp*Tc),this.berryMesh.castShadow=!0,this.berryMesh.frustumCulled=!1,this.group.add(this.berryMesh);let p=new Rt,g=new pe,M=new vt,b=[tt(.82,.12,.2),tt(.78,.1,.3),tt(.22,.25,.7)];for(let y=0,v=0;y<1200&&v<Bp;y++){let E=v<5?0:v<8?1:2,A,_;if(E===2)_=-10+a()*40,A=rn(_)+9+a()*14;else{let C=a()*6.283,N=(E?16:10)+a()*(E?26:16);A=c.x+Math.cos(C)*N,_=c.z+Math.sin(C)*N*.9}if(!h(A,_,.9))continue;let w=e.heightAt(A,_),I=new ie;for(let C=0;C<4;C++){let N=new Et(x,C%2?f:m),D=.45+a()*.25;N.position.set((a()-.5)*.9,.45+a()*.25,(a()-.5)*.9),N.scale.set(D*1.3,D,D*1.3),N.castShadow=!0,N.receiveShadow=!0,I.add(N)}I.position.set(A,w,_),I.rotation.y=a()*6.28,this.group.add(I);let L={key:"b"+v,x:A,z:_,y:w,state:"full",t:0,group:I,base:v*Tc,pos:[],cols:[],n:3,sway:a()*6};for(let C=0;C<Tc;C++){let N=a()*6.283,D=.15+a()*1.1,O=.82;L.pos.push(new R(Math.cos(N)*Math.sin(D)*O*1.15,.5+Math.cos(D)*O*.7,Math.sin(N)*Math.sin(D)*O*1.15).applyAxisAngle(new R(0,1,0),I.rotation.y).add(new R(A,w,_))),L.cols.push(b[Math.floor(a()*b.length)])}this.bushes.push(L),n.obstacles.push({x:A,z:_,r:.85}),this.showBerries(L,!0),v++}this._m=p,this._q=g,this._c=M,this.berryMesh.instanceMatrix.needsUpdate=!0,this.berryMesh.instanceColor&&(this.berryMesh.instanceColor.needsUpdate=!0)}showBerries(t,e,n=1){let i=this._m||(this._m=new Rt),s=this._q||(this._q=new pe);for(let o=0;o<Tc;o++){let a=e?n:1e-4;i.compose(t.pos[o],s.identity(),new R(a,a,a)),this.berryMesh.setMatrixAt(t.base+o,i),this.berryMesh.setColorAt(t.base+o,t.cols[o])}this.berryMesh.instanceMatrix.needsUpdate=!0,this.berryMesh.instanceColor&&(this.berryMesh.instanceColor.needsUpdate=!0)}nearest(t,e,n){let i=null,s=n*n;for(let o of this.stones){if(!o.alive)continue;let a=(o.x-t)**2+(o.z-e)**2;a<s&&(s=a,i={kind:"stone",item:o,x:o.x,z:o.z,y:o.y+.9,n:o.n})}for(let o of this.bushes){if(o.state!=="full")continue;let a=(o.x-t)**2+(o.z-e)**2-.5;a<s&&(s=a,i={kind:"berry",item:o,x:o.x,z:o.z,y:o.y+1.7,n:o.n})}return i}nearestOfKind(t,e,n){let i=null,s=1e9,o=t==="stone"?this.stones.filter(a=>a.alive):this.bushes.filter(a=>a.state==="full");for(let a of o){let l=Math.hypot(a.x-e,a.z-n);l<s&&(s=l,i={x:a.x,z:a.z,y:a.y+(t==="stone"?.9:1.7)})}return i}take(t){t.kind==="stone"?(t.item.alive=!1,this.group.remove(t.item.mesh),t.item.mesh=null):(t.item.state="empty",t.item.t=0,this.showBerries(t.item,!1))}update(t,e){for(let n of this.bushes)if(n.group.rotation.z=Math.sin(e*1.3+n.sway)*.012,n.state==="empty")n.t+=t,n.t>=Zv&&(n.state="grow",n.t=0);else if(n.state==="grow"){n.t+=t/3;let i=Math.min(1,n.t);this.showBerries(n,!0,i),i>=1&&(n.state="full")}}takenKeys(){return this.stones.filter(t=>!t.alive).map(t=>t.key)}};var Jv=new R(0,1,0),Rc=class{constructor(t){this.group=new ie,this.group.visible=!1,t.add(this.group);let e=new qt({color:tt(.45,.28,.14),roughness:.85});this.rod=new Et(new Le(.012,.03,1.7,6),e),this.rod.castShadow=!0,this.group.add(this.rod);let n=new $t;n.setAttribute("position",new Dt([0,0,0,0,0,0],3)),this.line=new bi(n,new Wi({color:15986918,transparent:!0,opacity:.85})),this.line.frustumCulled=!1,this.group.add(this.line),this.bobber=new ie;let i=new Et(new Ue(.1,12,8,0,Math.PI*2,0,Math.PI/2),new qt({color:tt(.9,.15,.15),roughness:.5})),s=new Et(new Ue(.1,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new qt({color:16777215,roughness:.5}));this.bobber.add(i,s),this.group.add(this.bobber),this.fish=new ie;let o=new qt({color:tt(.55,.72,.85),roughness:.35,metalness:.3}),a=new Et(new Ue(1,12,8),o);a.scale.set(.3,.1,.1);let l=new Et(new Dn(.1,.18,4),o);l.rotation.z=Math.PI/2,l.position.x=-.32,l.scale.set(1,1,.4);let c=new Et(new Ue(1,10,6),new qt({color:tt(.95,.9,.78),roughness:.5}));c.scale.set(.26,.05,.08),c.position.y=-.04,this.fish.add(a,l,c),this.fish.visible=!1,this.group.add(this.fish),this._d=new R,this._tip=new R}show(t){this.group.visible=t,t||(this.fish.visible=!1)}update(t,e,n,i){let s=this._d.set(e*.75,.85,n*.75).normalize();this.rod.position.copy(t).addScaledVector(s,.85),this.rod.quaternion.setFromUnitVectors(Jv,s);let o=this._tip.copy(t).addScaledVector(s,1.7),a=this.line.geometry.attributes.position;a.setXYZ(0,o.x,o.y,o.z),a.setXYZ(1,i.x,i.y+.02,i.z),a.needsUpdate=!0,this.bobber.position.copy(i)}flyFish(t,e,n){this.fish.visible=!0,this.fish.position.lerpVectors(t,e,n),this.fish.position.y+=Math.sin(n*Math.PI)*1.1,this.fish.rotation.set(0,Math.atan2(e.x-t.x,e.z-t.z)-Math.PI/2,Math.sin(n*14)*.5)}};var qe=2.35,Fn=1.65,di=2.78,Di=1.55,$e=.14,Nr=2.75,Lu=.42;function $v(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.fillStyle="#c28a52",t.fillRect(0,0,128,128);for(let n=0;n<90;n++){let i=Math.random()*128,s=.06+Math.random()*.14;t.strokeStyle=`rgba(${Math.random()<.5?"70,40,15":"230,190,130"},${s})`,t.lineWidth=.6+Math.random()*1.8,t.beginPath(),t.moveTo(0,i),t.bezierCurveTo(40,i+(Math.random()-.5)*6,90,i+(Math.random()-.5)*6,128,i+(Math.random()-.5)*4),t.stroke()}t.strokeStyle="rgba(60,30,10,0.35)",t.lineWidth=2,t.strokeRect(1,1,126,126);let e=new Yn(r);return e.colorSpace=ye,e.wrapS=e.wrapT=bn,e.anisotropy=4,e}function kp(r,t){return r.onBeforeCompile=e=>{e.uniforms.uCut=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCut; varying float vLy;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vLy > uCut) discard;`)},r}var Cc=class{constructor(t,e,n){this.scene=t,this.terrain=e,this.x=ee.lodgeSite.x,this.z=ee.lodgeSite.z,this.y=e.heightAt(this.x,this.z),this.group=new ie,this.group.position.set(this.x,this.y,this.z),t.add(this.group),this.steps=0,this.anim=[],this.pops=[];let i=sn(77),s=new qt({map:$v(),roughness:.85}),o=new qt({map:s.map,color:tt(.62,.42,.26),roughness:.9}),a=new qt({map:n.rockC,color:tt(.78,.76,.72),roughness:.95,flatShading:!0});this.timber=[],this.stones=[];let l=(j,et,It,Vt,Yt,Y,Q,ft=0,kt=1)=>this.timber.push({step:j,x:et,y:It,z:Vt,sx:Yt,sy:Y,sz:Q,rotY:ft,shade:kt});for(let j=0;j<7;j++)l(2,qe+.95,$e*.5+.02,(j-3)*.27,1.9,.09,.25,0,.95+i()*.15);for(let j=0;j<8;j++){let et=j/8*Math.PI*2+.2;Math.abs(Math.atan2(Math.sin(et),Math.cos(et)))<Lu+.1||l(3,Math.cos(et)*(qe+.06),$e+Fn/2,Math.sin(et)*(qe+.06),.17,Fn+.1,.17,Math.PI/2-et,.75)}for(let j of[-1,1]){let et=j*(Lu+.02);l(3,Math.cos(et)*(qe+.08),$e+Fn/2+.05,Math.sin(et)*(qe+.08),.2,Fn+.2,.2,Math.PI/2-et,.7)}let c=30;for(let j=0;j<c;j++){let et=j/c*Math.PI*2;if(Math.abs(Math.atan2(Math.sin(et),Math.cos(et)))<Lu)continue;let It=Fn-.04+(i()-.5)*.08;l(j%2===0?4:5,Math.cos(et)*qe,$e+It/2,Math.sin(et)*qe,.265,It,.075,Math.PI/2-et,.9+i()*.2)}for(let j of[-1,1])l(11,qe+1.82,$e+.45,j*.9,.12,.9,.12,0,.8),l(11,qe+.95,$e+.78,j*.9,1.9,.08,.08,0,.9),l(11,qe+.95,$e+.45,j*.9,1.9,.06,.06,0,.9);l(11,qe+2,.04,0,.28,.08,1.2,0,.9);for(let j=0;j<26;j++){let et=j/26*Math.PI*2+i()*.1;if(Math.abs(Math.atan2(Math.sin(et),Math.cos(et)))<.36)continue;let It=.26+i()*.2,Vt=qe+.22+i()*.12;this.stones.push({step:1,x:Math.cos(et)*Vt,y:It*.35,z:Math.sin(et)*Vt,s:It,rot:i()*6.28,sy:.55+i()*.3})}for(let j of[-1,1])for(let et=0;et<3;et++)this.stones.push({step:1,x:qe+.5+et*.7,y:.12,z:j*(1.3+i()*.2),s:.22+i()*.12,rot:i()*6.28,sy:.6});this.timberMesh=new Ce(new xn(1,1,1),s,this.timber.length),this.timberMesh.castShadow=!0,this.timberMesh.receiveShadow=!0,this.timberMesh.frustumCulled=!1;let h=new vt;this.timber.forEach((j,et)=>{j.q=new pe().setFromAxisAngle(new R(0,1,0),j.rotY),this.timberMesh.setColorAt(et,h.setScalar(j.shade)),this.setTimber(et,0)}),this.group.add(this.timberMesh),this.stoneMesh=new Ce(new Nn(1,1),a,this.stones.length),this.stoneMesh.castShadow=!0,this.stoneMesh.receiveShadow=!0,this.stoneMesh.frustumCulled=!1,this.stones.forEach((j,et)=>{j.q=new pe().setFromAxisAngle(new R(0,1,0),j.rot),this.stoneMesh.setColorAt(et,h.setScalar(.85+i()*.3)),this.setStone(et,0)}),this.group.add(this.stoneMesh);let u=new Et(new Le(qe+.05,qe+.12,$e,32),o);u.position.y=$e/2,u.receiveShadow=!0,u.castShadow=!0,u.userData.step=2,this.group.add(u),this.ribs=new ie;let d=new qt({map:s.map,color:tt(.7,.48,.3),roughness:.85}),f=[];for(let j=0;j<=20;j++){let et=j/20*Math.PI;f.push(new R(Math.cos(et)*(di+.03),Math.sin(et)*(Di+.03),0))}let m=new wo(new gr(f),28,.065,6,!1);for(let j=0;j<6;j++){let et=new Et(m,d);et.rotation.y=j/6*Math.PI,et.castShadow=!0,this.ribs.add(et)}let x=new Et(new yr(di+.03,.09,8,48),d);x.rotation.x=Math.PI/2,x.castShadow=!0,this.ribs.add(x),this.ribs.position.y=$e+Fn,this.ribs.userData.step=6,this.group.add(this.ribs),this.cutWood={value:-1},this.cutMoss={value:-1};let p=kp(new qt({map:s.map,color:tt(.55,.36,.22),roughness:.9,side:Fe}),this.cutWood),g=new Et(new Ue(1,36,14,0,Math.PI*2,0,Math.PI/2),p);g.scale.set(di-.02,Di,di-.02),g.position.y=$e+Fn,g.castShadow=!0,g.receiveShadow=!0,this.group.add(g);let M=new Ue(1,48,22,0,Math.PI*2,0,Math.PI/2);{let j=M.attributes.position,et=new Float32Array(j.count*3),It=new vt,Vt=tt(.26,.46,.14),Yt=tt(.52,.72,.24),Y=tt(.4,.55,.2);for(let Q=0;Q<j.count;Q++){let ft=j.getX(Q),kt=j.getY(Q),wt=j.getZ(Q),Gt=ke(ft*3.2+4,wt*3.2-kt*2,3)*.5+.5,fe=ke(ft*9,wt*9+kt*5,2)*.5+.5;It.copy(Vt).lerp(Yt,Gt).lerp(Y,fe*.4);let st=.82+.3*kt;et[Q*3]=It.r*st,et[Q*3+1]=It.g*st,et[Q*3+2]=It.b*st;let at=1+(fe-.5)*.045+(Gt-.5)*.03;j.setXYZ(Q,ft*at,kt*at,wt*at)}M.setAttribute("color",new Jt(et,3)),M.computeVertexNormals()}let b=new Et(M,kp(new qt({vertexColors:!0,roughness:1,side:Fe}),this.cutMoss));b.scale.set(di+.1,Di+.1,di+.1),b.position.y=$e+Fn-.02,b.castShadow=!0,b.receiveShadow=!0,this.group.add(b),this.tufts=new ie;let y=new Ue(1,8,6),v=new qt({color:tt(.42,.66,.2),roughness:1});for(let j=0;j<26;j++){let et=i()*Math.PI*2,It=.1+i()*.75,Vt=Math.sqrt(1-It*It)*(Di+.1),Yt=new Et(y,v),Y=.14+i()*.16;Yt.scale.set(Y,Y*.6,Y),Yt.position.set(Math.cos(et)*It*(di+.08),$e+Fn+Vt-.02,Math.sin(et)*It*(di+.08)),Yt.castShadow=!0,this.tufts.add(Yt)}let E=[tt(1,.6,.75),tt(1,.9,.35),tt(1,1,1),tt(.75,.65,1)];for(let j=0;j<14;j++){let et=i()*Math.PI*2,It=.12+i()*.7,Vt=Math.sqrt(1-It*It)*(Di+.1)+.1,Yt=new Et(new Ue(.06,6,5),new qt({color:E[j%4],roughness:.7}));Yt.position.set(Math.cos(et)*It*(di+.1),$e+Fn+Vt,Math.sin(et)*It*(di+.1)),this.tufts.add(Yt)}this.tufts.userData.step=10,this.group.add(this.tufts),this.glassMat=new qt({color:tt(1,.78,.4),emissive:tt(1,.65,.25),emissiveIntensity:.6,roughness:.3}),this.windows=new ie;for(let j of[1.15,-1.15,Math.PI]){let et=new ie,It=new Et(new yr(.31,.055,8,22),d);It.castShadow=!0;let Vt=new Et(new wi(.29,22),this.glassMat),Yt=new Et(new xn(.58,.035,.03),d),Y=new Et(new xn(.035,.58,.03),d);Vt.position.z=-.01,Yt.position.z=Y.position.z=.012,et.add(Vt,It,Yt,Y),et.position.set(Math.cos(j)*(qe+.06),$e+1.02,Math.sin(j)*(qe+.06)),et.rotation.y=Math.PI/2-j,this.windows.add(et)}this.windows.userData.step=10,this.group.add(this.windows);let A=new vs,_=.46,w=1.05;A.moveTo(-_,0),A.lineTo(-_,w),A.absarc(0,w,_,Math.PI,0,!0),A.lineTo(_,0),A.lineTo(-_,0),this.door=new ie;let I=new Et(new _r(A,{depth:.07,bevelEnabled:!1}),new qt({map:s.map,color:tt(.7,.44,.24),roughness:.8}));I.castShadow=!0;let L=new vs;L.moveTo(-.58,0),L.lineTo(-.58,1.1),L.absarc(0,1.1,.58,Math.PI,0,!0),L.lineTo(.58,0),L.lineTo(_,0),L.lineTo(_,w),L.absarc(0,w,_,0,Math.PI,!1),L.lineTo(-_,0),L.lineTo(-.58,0);let C=new Et(new _r(L,{depth:.1,bevelEnabled:!1}),d);C.castShadow=!0;let N=new Et(new Ue(.045,8,6),new qt({color:tt(.8,.65,.3),metalness:.7,roughness:.35}));N.position.set(.26,.62,.1);let D=new Et(new xn(.8,.05,.02),d);D.position.set(0,.35,.075);let O=D.clone();O.position.y=.85,this.door.add(I,C,N,D,O),this.door.position.set(qe-.02,$e,0),this.door.rotation.y=Math.PI/2,this.door.userData.step=11,this.group.add(this.door),this.hole=new Et(new wi(.44,16),new Ge({color:tt(.06,.04,.03)})),this.hole.position.set(qe-.05,$e+.5,0),this.hole.rotation.y=Math.PI/2,this.hole.scale.y=1.2,this.group.add(this.hole),this.lantern=new ie;let F=new Et(new Le(.035,.045,1.3,6),d);F.position.y=.65;let z=new Et(new xn(.16,.2,.16),this.glassMat);z.position.y=1.38;let K=new Et(new Dn(.13,.12,4),o);K.position.y=1.54,K.rotation.y=Math.PI/4,this.lantern.add(F,z,K),this.lantern.position.set(qe+1.85,$e,-.9),this.lantern.userData.step=11,this.group.add(this.lantern),this.light=new Ts(tt(1,.7,.38),0,10,1.5),this.light.position.set(qe+1.8,1.7,-.5),this.group.add(this.light),this.chimney=new ie;let W=new Et(new Le(.27,.32,1.5,9),a);W.position.y=.75,W.castShadow=!0,W.receiveShadow=!0;let $=new Et(new Le(.34,.3,.14,9),a);$.position.y=1.55,$.castShadow=!0,this.chimney.add(W,$),this.chimney.position.set(-1.05,$e+Fn+.85,-1.15),this.chimney.userData.step=12,this.group.add(this.chimney);let nt=new Ss(Nr*1.12,Nr*1.12+.18,48);nt.rotateX(-Math.PI/2),this.marker=new Et(nt,new Ge({color:tt(1,.86,.4),transparent:!0,opacity:.7,depthWrite:!1})),this.marker.position.y=.06,this.marker.renderOrder=3,this.group.add(this.marker),this.stakes=new ie;for(let j=0;j<10;j++){let et=j/10*Math.PI*2,It=new Et(new Le(.04,.06,.8,5),new qt({color:tt(.62,.45,.25),roughness:.9}));It.position.set(Math.cos(et)*Nr*1.12,.3,Math.sin(et)*Nr*1.12),It.rotation.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3),It.castShadow=!0,this.stakes.add(It)}this.group.add(this.stakes),this.setStepsInstant(0)}setTimber(t,e){let n=this.timber[t],i=this._m||(this._m=new Rt),s=this._p||(this._p=new R),o=this._s||(this._s=new R);if(e<=0){i.makeScale(0,0,0),this.timberMesh.setMatrixAt(t,i);return}let a=e<1?1+.2*Math.sin(e*Math.PI)*(1-e)*2-(1-e)*(1-e):1;s.set(n.x,n.y+(1-e)*.8,n.z),o.set(n.sx*Math.min(1,a),n.sy*a,n.sz*Math.min(1,a)),i.compose(s,n.q,o),this.timberMesh.setMatrixAt(t,i)}setStone(t,e){let n=this.stones[t],i=this._m||(this._m=new Rt),s=this._p||(this._p=new R),o=this._s||(this._s=new R);if(e<=0){i.makeScale(0,0,0),this.stoneMesh.setMatrixAt(t,i);return}let a=e<1?1+.25*Math.sin(e*Math.PI)*(1-e)*2-(1-e)*(1-e):1;s.set(n.x,n.y+(1-e)*.6,n.z),o.set(n.s*a,n.s*n.sy*a,n.s*a),i.compose(s,n.q,o),this.stoneMesh.setMatrixAt(t,i)}get done(){return this.steps>=De.steps}get obstacleRadius(){return this.steps>0?Nr*1.05:0}get doorWorld(){return new R(this.x+Nr+1.2,this.y,this.z)}get chimneyWorld(){return new R(this.x-1.05,this.y+$e+Fn+2.75,this.z-1.15)}cutsFor(t){return{wood:t>=8?Di+.3:t===7?Di*.5:-1,moss:t>=10?Di+.4:t===9?Di*.55:-1}}setStepsInstant(t){this.steps=t,this.anim.length=0,this.pops.length=0,this.timber.forEach((n,i)=>this.setTimber(i,n.step<=t?1:0)),this.timberMesh.instanceMatrix.needsUpdate=!0,this.stones.forEach((n,i)=>this.setStone(i,n.step<=t?1:0)),this.stoneMesh.instanceMatrix.needsUpdate=!0,this.group.children.forEach(n=>{n.userData.step!==void 0&&(n.visible=n.userData.step<=t,n.scale.setScalar(1))}),this.hole.visible=t>=11;let e=this.cutsFor(t);this.cutWood.value=e.wood,this.cutMoss.value=e.moss,this.stakes.visible=t<De.steps,this.marker.visible=t<De.steps,this.cutTargets=null,this.finishT=void 0,this.light.intensity=t>=12?5:0}addStep(){if(this.steps>=De.steps)return this.steps;let t=++this.steps;return this.timber.forEach((e,n)=>{e.step===t&&this.anim.push({kind:"t",i:n,t:-(Math.random()*.5)})}),this.stones.forEach((e,n)=>{e.step===t&&this.anim.push({kind:"s",i:n,t:-(Math.random()*.5)})}),this.group.children.forEach(e=>{e.userData.step===t&&(e.visible=!0,e.scale.setScalar(.001),this.pops.push({o:e,t:-.15}))}),t===11&&(this.hole.visible=!0),this.cutTargets=this.cutsFor(t),t>=De.steps&&(this.stakes.visible=!1,this.marker.visible=!1,this.finishT=0),t}update(t,e){if(this.anim.length){for(let i=this.anim.length-1;i>=0;i--){let s=this.anim[i];s.t+=t/.4;let o=he(s.t,0,1);s.kind==="t"?this.setTimber(s.i,s.t<0?0:o):this.setStone(s.i,s.t<0?0:o),s.t>=1&&this.anim.splice(i,1)}this.timberMesh.instanceMatrix.needsUpdate=!0,this.stoneMesh.instanceMatrix.needsUpdate=!0}for(let i=this.pops.length-1;i>=0;i--){let s=this.pops[i];s.t+=t/.5;let o=he(s.t,0,1),a=o<=0?.001:1+Math.sin(o*Math.PI)*.22*(1-o)*2-Math.pow(1-o,3);s.o.scale.setScalar(Math.max(.001,a)),s.t>=1&&(s.o.scale.setScalar(1),this.pops.splice(i,1))}if(this.cutTargets){let i=this.cutTargets,s=1-Math.exp(-3.5*t);this.cutWood.value+=(i.wood-this.cutWood.value)*s,this.cutMoss.value+=(i.moss-this.cutMoss.value)*s,Math.abs(i.wood-this.cutWood.value)<.01&&Math.abs(i.moss-this.cutMoss.value)<.01&&(this.cutWood.value=i.wood,this.cutMoss.value=i.moss,this.cutTargets=null)}let n=this.nightK||0;this.finishT!==void 0&&(this.finishT+=t,this.finishT>3&&(this.finishT=void 0)),this.glassMat.emissiveIntensity=this.steps>=10?.5+1.9*n:.2,this.done&&(this.light.intensity=4+14*n+Math.sin(e*7)*(.5+.8*n)+Math.sin(e*11.3)*(.3+.6*n)),this.marker.material.opacity=.45+.3*Math.sin(e*3),this.marker.scale.setScalar(1+.012*Math.sin(e*3))}};function zp(){let i=new Float32Array(14661),s=new Float32Array(4887*3),o=[],a=new vt,l=tt(.22,.38,.2),c=tt(.5,.46,.44),h=tt(.96,.97,1),u=tt(.16,.27,.17);for(let m=0;m<=26;m++){let x=m/26,p=96+234*Math.pow(x,1.35);for(let g=0;g<=180;g++){let M=g/180*Math.PI*2,b=Math.cos(M)*p,y=Math.sin(M)*p,v=1-Math.abs(ke(b*.006+3,y*.006-2,4)),E=ke(b*.0025-7,y*.0025+9,3)*.5+.5,A=36+12*ue(96,150,p)+(60+110*E)*Math.pow(v,2.2)*ue(100,190,p)*(1-.55*ue(240,330,p));A+=ke(b*.03,y*.03,3)*6;let _=(m*181+g)*3;i[_]=b,i[_+1]=A,i[_+2]=y;let w=ue(78,112,A+ke(b*.02,y*.02,2)*14),I=ue(46,72,A);a.copy(u).lerp(l,ue(36,55,A)*(.6+.4*ke(b*.01,y*.01,2))).lerp(c,I).lerp(h,w),s[_]=a.r,s[_+1]=a.g,s[_+2]=a.b}}for(let m=0;m<26;m++)for(let x=0;x<180;x++){let p=m*181+x,g=p+1,M=p+180+1,b=M+1;o.push(p,g,M,g,b,M)}let d=new $t;d.setAttribute("position",new Jt(i,3)),d.setAttribute("color",new Jt(s,3)),d.setIndex(o),d.computeVertexNormals();let f=new Et(d,new qt({vertexColors:!0,roughness:1,flatShading:!1}));return f.frustumCulled=!1,f.position.y=-3,f}var jv=`
varying vec2 vUv; varying vec3 vW;
#include <fog_pars_vertex>
void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition;
#include <fog_vertex>
}`,Qv=`
uniform float uTime; uniform vec3 uLight;
varying vec2 vUv; varying vec3 vW;
#include <fog_pars_fragment>
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
void main(){
  float s = vn(vec2(vUv.x*16.0, vUv.y*3.0 + uTime*2.6)) * 0.6 + vn(vec2(vUv.x*34.0, vUv.y*7.0 + uTime*4.4)) * 0.4;
  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
  float foam = smoothstep(0.12, 0.0, vUv.y);
  vec3 col = mix(vec3(0.45,0.78,0.95), vec3(1.0), smoothstep(0.35, 0.8, s) + foam*0.6) * uLight;
  float a = edge * (0.55 + 0.4 * s) * smoothstep(1.0, 0.9, vUv.y);
  gl_FragColor = vec4(col, clamp(a, 0.0, 0.92));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function Hp(r){let o=[],a=[],l=[];for(let f=0;f<=26;f++){let m=-64.5+-12.5*f/26,x=rn(m);for(let p=0;p<=8;p++){let g=x-3.3+6.6*p/8;o.push(g,Math.max(r.heightAt(g,m)+.15,.02),m),a.push(p/8,f/26)}}for(let f=0;f<26;f++)for(let m=0;m<8;m++){let x=f*9+m,p=x+1,g=x+8+1,M=g+1;l.push(x,p,g,p,M,g)}let c=new $t;c.setAttribute("position",new Dt(o,3)),c.setAttribute("uv",new Dt(a,2)),c.setIndex(l);let h=new We({vertexShader:jv,fragmentShader:Qv,transparent:!0,depthWrite:!1,side:Fe,fog:!0,uniforms:Rr.merge([mt.fog,{uTime:{value:0},uLight:{value:new vt(1,1,1)}}])}),u=new Et(c,h);u.renderOrder=2,u.frustumCulled=!1;let d=rn(-64.5);return{mesh:u,base:new R(d,.2,-64.5-.5),update(f,m){h.uniforms.uTime.value=f,h.uniforms.uLight.value.setScalar(.25+.75*(1-m))}}}var Ns=40,es=36,Ic=class{constructor(t,e,n,i){this.terrain=e,this.x=i.x+3.9,this.z=i.z+3.4,this.y=e.heightAt(this.x,this.z);let s=new Le(.12,.13,1.15,9,1,!1).rotateZ(Math.PI/2),o=new qt({map:n.barkC,normalMap:n.barkN,roughness:.9}),a=new qt({color:new vt().setRGB(.83,.55,.22,ye),roughness:.8});this.mesh=new Ce(s,[o,a,a],es),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,t.add(this.mesh),this.slots=[];let l=0,c=8;for(;this.slots.length<es;){for(let h=0;h<c&&this.slots.length<es;h++)this.slots.push({x:0,y:.13+l*.215,z:(h-(c-1)/2)*.27,rot:(Math.random()-.5)*.06});l++,c--}this.shown=0,this.anim=new Array(es).fill(1),this.count=0,this._m=new Rt,this._q=new pe,this._p=new R,this._s=new R;for(let h=0;h<es;h++)this.write(h,0);this.mesh.count=es}write(t,e){let n=this.slots[t];this._q.setFromAxisAngle(new R(0,1,0),n.rot),this._p.set(this.x+n.x,this.y+n.y+(1-e)*.8,this.z+n.z),this._s.setScalar(Math.max(1e-4,e)),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(t,this._m)}set(t,e){let n=Math.min(es,t);for(let i=0;i<es;i++)i<n?i>=this.shown&&(this.anim[i]=e?1:-(i-this.shown)*.18):this.anim[i]=0,e&&this.write(i,i<n?1:0);this.shown=n,this.count=t,this.mesh.instanceMatrix.needsUpdate=!0}update(t){let e=!1;for(let n=0;n<this.shown;n++)if(this.anim[n]<1){this.anim[n]+=t/.35;let i=he(this.anim[n],0,1);this.write(n,i<0?0:i),e=!0}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}};function Vp(r){let t=new Map,e=new Map,n=r.clone();return Gp(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Gp(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Gp(r.children[n],t.children[n],e)}var Pc=class extends ri{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ku(e)}),this.register(function(e){return new zu(e)}),this.register(function(e){return new Zu(e)}),this.register(function(e){return new Ju(e)}),this.register(function(e){return new $u(e)}),this.register(function(e){return new Vu(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new Xu(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new qu(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new Ku(e)}),this.register(function(e){return new Yu(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new Lc(e,ae.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Lc(e,ae.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new ju(e)})}load(t,e,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(t);o=Ii.resolveURL(c,this.path)}else o=Ii.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Kp){try{o[ae.KHR_BINARY_GLTF]=new Qu(t)}catch(u){i&&i(u);return}s=JSON.parse(o[ae.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new od(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ae.KHR_MATERIALS_UNLIT:o[u]=new Ou;break;case ae.KHR_DRACO_MESH_COMPRESSION:o[u]=new td(s,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:o[u]=new ed;break;case ae.KHR_MESH_QUANTIZATION:o[u]=new nd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function tM(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Ye(r,t,e){let n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fu=class{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,h=new vt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],pn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new As(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ts(h),c.distance=u;break;case"spot":c=new Io(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},Ou=class{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return Ge}extendParams(t,e,n){let i=[];t.color=new vt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],pn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ye))}return Promise.all(i)}},Bu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ku=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new lt(s,s)}return Promise.all(i)}},zu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Vu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],pn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,ye)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Gu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Wu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(s[0],s[1],s[2],pn),Promise.all(i)}},Xu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},qu=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return e.specularColor=new vt().setRGB(s[0],s[1],s[2],pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,ye)),Promise.all(i)}},Yu=class{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ku=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ye(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ye(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Zu=class{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}},Ju=class{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},$u=class{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},Lc=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},ju=class{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Rt,p=new R,g=new pe,M=new R(1,1,1),b=new Ce(m.geometry,m.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,x.compose(p,g,M));let y=null;for(let v in l)if(v==="_COLOR_0"){let E=l[v];b.instanceColor=new Si(E.array,E.itemSize,E.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(y===null){let A=b.geometry;y=new $t,y.name=A.name;for(let _ in A.attributes)y.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)y.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&y.setIndex(A.index),y.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)y.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(y.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(y.boundingSphere=A.boundingSphere.clone()),y.drawRange.start=A.drawRange.start,y.drawRange.count=A.drawRange.count,y.userData=Object.assign({},A.userData),b.geometry=y}let E=l[v];y.setAttribute(v,new Si(E.array,E.itemSize,E.normalized))}Pe.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Kp="glTF",$o=12,Wp={JSON:1313821514,BIN:5130562},Qu=class{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,$o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-$o,s=new DataView(t,$o),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Wp.JSON){let c=new Uint8Array(t,$o+o,a);this.content=n.decode(c)}else if(l===Wp.BIN){let c=$o+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},td=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=sd[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=sd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=Ur[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}u(f)},a,c,pn,d)})})}},ed=class{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},nd=class{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}},Dc=class extends si{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,x=m-c,p=-2*f+3*d,g=f-d,M=1-p,b=g-d+u;for(let y=0;y!==a;y++){let v=o[x+y+a],E=o[x+y+l]*h,A=o[m+y+a],_=o[m+y]*h;s[y]=M*v+b*E+p*A+g*_}return s}},eM=new pe,id=class extends Dc{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return eM.fromArray(s).normalize().toArray(s),s}},On={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xp={9728:He,9729:Ve,9984:vl,9985:Er,9986:Ps,9987:Zn},qp={33071:In,33648:rr,10497:bn},Du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nM={CUBICSPLINE:void 0,LINEAR:ps,STEP:fs},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),r.DefaultMaterial}function Us(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function sM(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function rM(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oM(r){let t,e=r.extensions&&r.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Uu(e.attributes):t=r.indices+":"+Uu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Uu(r.targets[n]);return t}function Uu(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function rd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var lM=new Rt,od=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new tM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Es(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Us(s,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Ii.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=Du[i.type],a=Ur[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Jt(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Du[i.type],c=Ur[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,p;if(f&&f!==u){let g=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=e.cache.get(M);b||(x=new c(a,g*f,i.count*f/h),b=new gs(x,f/h),e.cache.add(M,b)),p=new Gi(b,l,d%f/h,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),p=new Jt(x,l,m);if(i.sparse!==void 0){let g=Du.SCALAR,M=Ur[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,v=new M(o[1],b,i.sparse.count*g),E=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new Jt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,_=v.length;A<_;A++){let w=v[A];if(p.setX(w,E[A*l]),l>=2&&p.setY(w,E[A*l+1]),l>=3&&p.setZ(w,E[A*l+2]),l>=4&&p.setW(w,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){let i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Xp[d.magFilter]||Ve,h.minFilter=Xp[d.minFilter]||Zn,h.wrapS=qp[d.wrapS]||bn,h.wrapT=qp[d.wrapT]||bn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==He&&h.minFilter!==Ve,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(x){let p=new je(x);p.needsUpdate=!0,d(p)}),e.load(Ii.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),fi(u,o),u.userData.mimeType=o.mimeType||aM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ae.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xi,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Wi,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return qt}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],o,a={},l=s.extensions||{},c=[];if(l[ae.KHR_MATERIALS_UNLIT]){let u=i[ae.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,ye)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Fe);let h=s.alphaMode||Nu.OPAQUE;if(h===Nu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Nu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ge&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Ge&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ge){let u=s.emissiveFactor;a.emissive=new vt().setRGB(u[0],u[1],u[2],pn)}return s.emissiveTexture!==void 0&&o!==Ge&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,ye)),Promise.all(c).then(function(){let u=new o(a);return s.name&&(u.name=s.name),fi(u,s),e.associations.set(u,{materials:t}),s.extensions&&Us(i,u,s),u})}createUniqueName(t){let e=Ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Yp(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=oM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yp(new $t,c,e),c.mode===On.TRIANGLE_STRIP?d=d.then(f=>Cu(f,Vo)):c.mode===On.TRIANGLE_FAN&&(d=d.then(f=>Cu(f,Ar))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?iM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],p=o[f],g,M=c[f];if(p.mode===On.TRIANGLES||p.mode===On.TRIANGLE_STRIP||p.mode===On.TRIANGLE_FAN||p.mode===void 0){let b=s.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&y?new ys(x,M):new Et(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===On.LINES)g=new co(x,M);else if(p.mode===On.LINE_STRIP)g=new bi(x,M);else if(p.mode===On.LINE_LOOP)g=new ho(x,M);else if(p.mode===On.POINTS)g=new Ei(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&rM(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),fi(g,s),p.extensions&&Us(i,g,p),e.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Us(i,u[0],s),u[0];let d=new ie;s.extensions&&Us(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Je(Xo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ki(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Rt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new lo(a,l)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],x=f.target,p=x.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let b=0,y=d.length;b<y;b++){let v=d[b],E=f[b],A=m[b],_=x[b],w=p[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let I=n._createAnimationTracks(v,E,A,_,w);if(I)for(let L=0;L<I.length;L++)g.push(I[L])}let M=new bs(s,void 0,g);return fi(M,i),M})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new dr:c.length>1?h=new ie:c.length===1?h=c[0]:h=new Pe,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),fi(h,s),s.extensions&&Us(n,h,s),s.matrix!==void 0){let u=new Rt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new ie;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&Us(e,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?s.add(Vp(d)):s.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof je)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){let o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ns[s.path]===ns.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(ns[s.path]){case ns.weights:h=Ai;break;case ns.rotation:h=Ri;break;case ns.translation:case ns.scale:h=Yi;break;default:n.itemSize===1?h=Ai:h=Yi;break}let u=i.interpolation!==void 0?nM[i.interpolation]:ps,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let x=new h(l[f]+"."+ns[s.path],e.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=rd(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Ri?id:Dc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cM(r,t,e){let n=t.attributes,i=new En;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=rd(Ur[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new R,l=new R;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=rd(Ur[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Yp(r,t,e){let n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=sd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){let o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return re.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${re.workingColorSpace}" not supported.`),fi(r,t),cM(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?sM(r,t.targets,e):r})}var jo=12,Nc=class{constructor(){this.root=new ie,this.pivot=new ie,this.root.add(this.pivot),this.actions={},this.current=null,this.onStep=null,this.scale=1.05,this.carry=0,this._tmp=new R}async load(t,e){let n=await new Pc().loadAsync(t);this.model=n.scene,this.model.scale.setScalar(this.scale),this.pivot.add(this.model);let i=new Ge({color:tt(.24,.11,.04),side:Qe});i.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * 0.006;`)};let s=[];this.model.traverse(o=>{o.isSkinnedMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,s.push(o))});for(let o of s){let a=new ys(o.geometry,i);a.bind(o.skeleton,o.bindMatrix),a.frustumCulled=!1,o.parent.add(a),a.position.copy(o.position),a.quaternion.copy(o.quaternion),a.scale.copy(o.scale)}this.mixer=new Lo(this.model);for(let o of n.animations){let a=this.mixer.clipAction(o);a.enabled=!0,this.actions[o.name]=a}this.buildPack(e),this.play("Idle",0)}buildPack(t){this.hips=this.model.getObjectByName("Spine"),this.model.updateMatrixWorld(!0);let e=new Rt().copy(this.model.matrixWorld).invert();this.hipsRestInv=new Rt().multiplyMatrices(e,this.hips.matrixWorld).invert(),this.pack=new ie,this.pack.matrixAutoUpdate=!1,this.model.add(this.pack),this.packRest=new Rt;let n=new Le(.072,.08,.84,9,1,!1).rotateZ(Math.PI/2),i=new qt({map:t.barkC,normalMap:t.barkN,roughness:.9}),s=new qt({color:tt(.92,.74,.46),roughness:.8});this.logMeshes=[];let o=[.5,.65,.8,.95],a=[-.58,-.74,-.9],l=0;for(let h of a)for(let u of o){let d=new Et(n,[i,s,s]);d.position.set((Math.random()-.5)*.03,u,h+(Math.random()-.5)*.015),d.rotation.y=(Math.random()-.5)*.1,d.scale.set(.9+Math.random()*.2,1,1),d.castShadow=!0,d.visible=!1,d.userData.order=l++,this.pack.add(d),this.logMeshes.push(d)}let c=new qt({map:null,color:tt(.36,.2,.1),roughness:.7});this.straps=[];for(let h of[-.2,.2]){let u=new Et(new xn(.05,.6,.5),c);u.position.set(h,.72,-.72),u.visible=!1,u.castShadow=!0,this.pack.add(u),this.straps.push(u)}this.setCarry(0),this.updatePack()}setCarry(t){this.carry=Math.min(t,jo),this.logMeshes.forEach((e,n)=>{e.visible=n<this.carry}),this.straps.forEach(e=>{e.visible=this.carry>0})}updatePack(){if(!this.hips)return;this.model.updateMatrixWorld(!0);let t=this._inv||(this._inv=new Rt);t.copy(this.model.matrixWorld).invert();let e=this._b||(this._b=new Rt);e.multiplyMatrices(t,this.hips.matrixWorld).multiply(this.hipsRestInv).multiply(this.packRest),this.pack.matrix.copy(e),this.pack.matrixWorldNeedsUpdate=!0}packWorld(t=this._tmp){return t.set(0,.72,-.7).applyMatrix4(this.pack.matrix).applyMatrix4(this.model.matrixWorld),t}play(t,e=.22,{once:n=!1,speed:i=1,syncPhase:s=!1}={}){let o=this.actions[t];if(o){if(this.current===o&&!n){o.timeScale=i;return}o.reset(),o.setLoop(n?sc:rc,n?1:1/0),o.clampWhenFinished=n,o.timeScale=i,s&&this.current&&(o.time=this.current.time/this.current.getClip().duration*o.getClip().duration),o.setEffectiveWeight(1),this.current&&e>0?o.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),o.play(),this.currentName=t,this.current=o}}get clipName(){return this.currentName}get clipTime(){return this.current?this.current.time:0}update(t){if(!this.mixer)return;let e=this.current?this.current.time/this.current.getClip().duration:0;if(this.mixer.update(t),this.updatePack(),(this.currentName==="Walk"||this.currentName==="Run")&&this.onStep){let n=this.current.time/this.current.getClip().duration,i=Math.floor(e*2),s=Math.floor(n*2);i!==s&&this.onStep(this.currentName)}}};var hM=`
attribute float aSize; attribute vec4 aColor; attribute float aShape;
uniform float uScale;
varying vec4 vColor; varying float vShape;
void main(){
  vColor = aColor; vShape = aShape;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = max(1.0, aSize * uScale / -mv.z);
}`,uM=`
varying vec4 vColor; varying float vShape;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float a;
  if (vShape > 0.5) { a = step(max(abs(c.x), abs(c.y)), 0.38); }
  else { a = smoothstep(0.5, 0.18, length(c)); }
  if (a * vColor.a < 0.02) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <colorspace_fragment>
}`,Uc=class{constructor(t,e=700,n=1){this.max=e,this.amountScale=n,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.col=new Float32Array(e*4),this.shape=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.fade=new Float32Array(e),this.base=new Float32Array(e),this.cursor=0;let i=new $t;i.setAttribute("position",new Jt(this.pos,3).setUsage(Wo)),i.setAttribute("aSize",new Jt(this.size,1).setUsage(Wo)),i.setAttribute("aColor",new Jt(this.col,4).setUsage(Wo)),i.setAttribute("aShape",new Jt(this.shape,1)),this.geo=i,this.mat=new We({vertexShader:hM,fragmentShader:uM,transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}}}),this.points=new Ei(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}setScale(t,e){this.mat.uniforms.uScale.value=t*.5/Math.tan(Xo.degToRad(e)*.5)}emit(t){let e=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.vel[e*3]=t.vx||0,this.vel[e*3+1]=t.vy||0,this.vel[e*3+2]=t.vz||0,this.life[e]=this.maxLife[e]=t.life||1,this.base[e]=t.size||.1,this.size[e]=this.base[e],this.col[e*4]=t.r??1,this.col[e*4+1]=t.g??1,this.col[e*4+2]=t.b??1,this.col[e*4+3]=t.a??1,this.shape[e]=t.shape||0,this.grav[e]=t.grav??6,this.drag[e]=t.drag??.5,this.fade[e]=t.fade??1}burst(t,e,n=1,i=1){t=Math.max(1,Math.round(t*this.amountScale));for(let s=0;s<t;s++){let o=Math.random()*6.283,a=(.3+Math.random())*n;this.emit({...e,vx:Math.cos(o)*a+(e.vx||0),vz:Math.sin(o)*a+(e.vz||0),vy:(.4+Math.random())*i+(e.vy||0),life:(e.life||1)*(.7+Math.random()*.6),size:(e.size||.1)*(.7+Math.random()*.6)})}}update(t){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.col[n*4+3]=0,this.size[n]=0;continue}this.life[n]-=t;let i=Math.exp(-this.drag[n]*t);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]=this.vel[n*3+1]*i-this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let s=Math.max(0,this.life[n]/this.maxLife[n]);this.col[n*4+3]=Math.min(1,s*3)*(this.fade[n],1),this.size[n]=this.base[n]*(this.fade[n]===2?1.6-s*.9:.4+s*.6)}let e=this.geo.attributes;e.position.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aColor.needsUpdate=!0}};var Fc=class{constructor(t,e){this.cam=t,this.terrain=e,this.yaw=.6,this.pitch=.42,this.dist=8.5,this.minD=4,this.maxD=15,this.focus=new R,this.look=new R,this.shakeAmp=0,this.cine=null,this.portrait=!1,this._v=new R}shake(t){this.shakeAmp=Math.max(this.shakeAmp,t)}playCine(t,e,n){this.cine={t:0,dur:t,fn:e,done:n}}snap(t){this.focus.copy(t),this.look.copy(t),this.applyPos(1)}applyPos(t){let e=Math.cos(this.pitch),n=Math.sin(this.pitch),i=this._v.set(Math.sin(this.yaw)*e,n,Math.cos(this.yaw)*e).multiplyScalar(this.dist).add(this.look),s=this.terrain.heightAt(i.x,i.z)+.9;i.y<s&&(i.y=s),this.cam.position.copy(i),this.shakeAmp>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shakeAmp,this.cam.position.y+=(Math.random()-.5)*this.shakeAmp,this.cam.position.z+=(Math.random()-.5)*this.shakeAmp,this.shakeAmp*=Math.exp(-7*t)),this.cam.lookAt(this.look.x,this.look.y,this.look.z)}update(t,e,n,i=!0){if(this.cine){let c=this.cine;c.t+=t;let h=he(c.t/c.dur,0,1);if(c.fn(h,this),this.applyPos(t),h>=1){let u=c.done;this.cine=null,u&&u()}return}let[s,o,a]=n;i&&(this.yaw-=s*.0058,this.pitch=he(this.pitch+o*.0046,.12,1.25),this.dist=he(this.dist+a*.7,this.minD,this.maxD));let l=this._t||(this._t=new R);l.set(e.x,e.y+1.05,e.z),this.focus.x=ji(this.focus.x,l.x,9,t),this.focus.y=ji(this.focus.y,l.y,7,t),this.focus.z=ji(this.focus.z,l.z,9,t),this.look.copy(this.focus),this.applyPos(t)}};var Oc=class{constructor(t,e){this.canvas=t,this.joyEl=e,this.keys=new Set,this.move={x:0,y:0},this.actionEdge=!1,this.actionHeld=!1,this.camDX=0,this.camDY=0,this.zoom=0,this.enabled=!1,this.isTouch=!1,this.pointers=new Map,this.joyId=null,this.joyOrigin={x:0,y:0},this.joyVec={x:0,y:0},this.onPause=null,this.onAnyInput=null,this.uiAction=!1;let n=i=>{this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault()};addEventListener("keydown",i=>{if(i.repeat){n(i);return}if(this.keys.add(i.code),n(i),!this.enabled){i.code==="Escape"&&this.onPause&&this.onPause();return}(i.code==="KeyE"||i.code==="Space"||i.code==="Enter")&&(this.actionEdge=!0,this.actionHeld=!0),(i.code==="Escape"||i.code==="KeyP")&&this.onPause&&this.onPause(),this.onAnyInput&&this.onAnyInput("key")}),addEventListener("keyup",i=>{this.keys.delete(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter")&&(this.actionHeld=this.uiAction)}),addEventListener("blur",()=>{this.keys.clear(),this.actionHeld=!1,this.uiAction=!1,this.joyId=null,this.joyVec={x:0,y:0},this.pointers.clear(),this.showJoy(!1)}),t.style.touchAction="none",t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>this.down(i)),addEventListener("pointermove",i=>this.moveEv(i),{passive:!0}),addEventListener("pointerup",i=>this.up(i)),addEventListener("pointercancel",i=>this.up(i)),t.addEventListener("wheel",i=>{this.enabled&&(i.preventDefault(),this.zoom+=Math.sign(i.deltaY)*(i.ctrlKey?.4:1))},{passive:!1}),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("dblclick",i=>i.preventDefault())}showJoy(t,e,n){this.joyEl&&(this.joyEl.classList.toggle("on",t),t&&(this.joyEl.style.left=e+"px",this.joyEl.style.top=n+"px"))}down(t){if(!this.enabled)return;(t.pointerType==="touch"||t.pointerType==="pen")&&(this.isTouch=!0),this.onAnyInput&&this.onAnyInput(t.pointerType),this.canvas.setPointerCapture?.(t.pointerId);let e=t.clientX<innerWidth*.5;t.pointerType==="touch"&&e&&this.joyId===null?(this.joyId=t.pointerId,this.joyOrigin={x:t.clientX,y:t.clientY},this.joyVec={x:0,y:0},this.showJoy(!0,t.clientX,t.clientY),this.setKnob(0,0)):this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,btn:t.button})}setKnob(t,e){let n=this.joyEl&&this.joyEl.firstElementChild;n&&(n.style.transform=`translate(${t}px,${e}px)`)}moveEv(t){if(t.pointerId===this.joyId){let o=t.clientX-this.joyOrigin.x,a=t.clientY-this.joyOrigin.y,l=Math.hypot(o,a);l>56&&(o=o/l*56,a=a/l*56),this.setKnob(o,a);let c=o/56,h=a/56;Math.hypot(c,h)<.12&&(c=h=0),this.joyVec={x:c,y:-h};return}let e=this.pointers.get(t.pointerId);if(!e)return;let n=t.clientX-e.x,i=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,this.pointers.size>=2){let s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.lastPinch&&(this.zoom-=(o-this.lastPinch)*.03),this.lastPinch=o}else this.camDX+=n,this.camDY+=i}up(t){t.pointerId===this.joyId&&(this.joyId=null,this.joyVec={x:0,y:0},this.showJoy(!1)),this.pointers.delete(t.pointerId),this.pointers.size<2&&(this.lastPinch=0)}setUiAction(t){this.uiAction=t,this.actionHeld=t,t&&(this.actionEdge=!0)}get run(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.joyVec.x,this.joyVec.y)>.82}poll(){if(!this.enabled){this.move.x=this.move.y=0;return}let t=0,e=0,n=this.keys;if((n.has("KeyW")||n.has("ArrowUp"))&&(e+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(e-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(t+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(t-=1),t||e){let s=Math.hypot(t,e);t/=s,e/=s}t+=this.joyVec.x,e+=this.joyVec.y;let i=Math.hypot(t,e);i>1&&(t/=i,e/=i),this.move.x=t,this.move.y=e,n.has("KeyQ")&&(this.camDX-=7),n.has("KeyR")&&(this.camDX+=7)}consumeAction(){let t=this.actionEdge;return this.actionEdge=!1,t}consumeCam(){let t=[this.camDX,this.camDY,this.zoom];return this.camDX=this.camDY=this.zoom=0,t}};var Bc=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1,this.musicOn=!0}unlock(){if(this.ready){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.enabled?.9:0,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=Math.random()*2-1;this.noiseBuf=i,this.wind=this.loopNoise(420,"lowpass",.05,.6),this.water=this.loopNoise(1500,"bandpass",0,.7),this.water2=this.loopNoise(500,"lowpass",0,.5),this.delay=e.createDelay(1),this.delay.delayTime.value=.36;let o=e.createGain();o.gain.value=.36;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2200,this.delay.connect(a),a.connect(o),o.connect(this.delay),this.musicBus=e.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this.delay.connect(this.musicBus),this.ready=!0,this.nextNote=e.currentTime+1.5,this.nextBird=e.currentTime+3}loopNoise(t,e,n,i){let s=this.ctx,o=s.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let a=s.createBiquadFilter();a.type=e,a.frequency.value=t,a.Q.value=i;let l=s.createGain();return l.gain.value=n,o.connect(a),a.connect(l),l.connect(this.master),o.start(),{g:l,f:a}}setEnabled(t){this.enabled=t,this.ready&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}ambient(t,e,n){if(!this.ready)return;let i=this.ctx.currentTime;if(this.water.g.gain.setTargetAtTime(.018+e*.09,i,.3),this.water2.g.gain.setTargetAtTime(.01+e*.07,i,.3),this.wind.g.gain.setTargetAtTime(.025+n*.03,i,.5),this.wind.f.frequency.setTargetAtTime(320+n*280,i,.5),i>this.nextBird&&(this.bird(),this.nextBird=i+2.5+Math.random()*6),this.musicOn&&i>this.nextNote){let s=[261.63,293.66,329.63,392,440,523.25,587.33],o=s[Math.floor(Math.random()*s.length)]*(Math.random()<.25?.5:1);this.pluck(o,i,.5),this.nextNote=i+1.1+Math.random()*2.2,Math.random()<.3&&this.pluck(o*1.5,i+.28,.35)}}pluck(t,e,n=.5){let i=this.ctx,s=i.createOscillator(),o=i.createOscillator(),a=i.createGain();s.type="sine",o.type="triangle",s.frequency.value=t,o.frequency.value=t*2,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(n*.5,e+.012),a.gain.exponentialRampToValueAtTime(5e-4,e+1.8),s.connect(a),o.connect(a),a.connect(this.musicBus),a.connect(this.delay),s.start(e),o.start(e),s.stop(e+2),o.stop(e+2)}bird(){let t=this.ctx,e=t.currentTime,n=2+Math.floor(Math.random()*3),i=2400+Math.random()*1600;for(let s=0;s<n;s++){let o=t.createOscillator(),a=t.createGain(),l=e+s*.11;o.type="sine",o.frequency.setValueAtTime(i,l),o.frequency.exponentialRampToValueAtTime(i*(1.3+Math.random()*.4),l+.07),a.gain.setValueAtTime(0,l),a.gain.linearRampToValueAtTime(.05,l+.01),a.gain.exponentialRampToValueAtTime(5e-4,l+.1),o.connect(a),a.connect(this.sfx),o.start(l),o.stop(l+.12)}}tone(t,e,{type:n="sine",vol:i=.3,slide:s=0,delay:o=0}={}){if(!this.ready)return;let a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=n,c.frequency.setValueAtTime(t,l),s&&c.frequency.exponentialRampToValueAtTime(Math.max(20,t*s),l+e),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(i,l+.01),h.gain.exponentialRampToValueAtTime(5e-4,l+e),c.connect(h),h.connect(this.sfx),c.start(l),c.stop(l+e+.02)}noise(t,{freq:e=1200,type:n="bandpass",q:i=1,vol:s=.3,delay:o=0,sweep:a=0}={}){if(!this.ready)return;let l=this.ctx,c=l.currentTime+o,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(e,c),u.Q.value=i,a&&u.frequency.exponentialRampToValueAtTime(Math.max(60,e*a),c+t);let d=l.createGain();d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime(s,c+.008),d.gain.exponentialRampToValueAtTime(5e-4,c+t),h.connect(u),u.connect(d),d.connect(this.sfx),h.start(c,Math.random()),h.stop(c+t+.02)}step(t){t?this.noise(.18,{freq:900,q:.8,vol:.12,sweep:.5}):this.noise(.07,{freq:2200+Math.random()*600,type:"highpass",vol:.05})}splash(){this.noise(.5,{freq:1800,q:.7,vol:.28,sweep:.3}),this.tone(300,.2,{slide:.4,vol:.08})}gnaw(){for(let t=0;t<3;t++)this.noise(.07,{freq:900+t*150,q:2,vol:.28,delay:t*.09});this.tone(180,.1,{type:"triangle",vol:.12})}hit(){this.noise(.1,{freq:700,q:1.5,vol:.3}),this.tone(130,.14,{type:"triangle",vol:.22,slide:.6})}treeFall(){this.tone(220,.9,{type:"sawtooth",vol:.06,slide:.45}),this.noise(1.2,{freq:1600,q:.5,vol:.12,sweep:.4,delay:.1})}thud(){this.tone(70,.5,{vol:.55,slide:.5}),this.noise(.5,{freq:300,type:"lowpass",vol:.4})}pickup(){this.tone(520,.12,{vol:.22}),this.tone(780,.18,{vol:.2,delay:.08})}bounce(){this.tone(160,.08,{type:"triangle",vol:.12,slide:.7})}build(){this.tone(240,.12,{type:"triangle",vol:.3,slide:.55}),this.noise(.08,{freq:2500,type:"highpass",vol:.12})}pop(){this.tone(400,.09,{vol:.12,slide:1.8})}click(){this.tone(660,.05,{vol:.12})}fanfare(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>{this.tone(t,.55,{type:"triangle",vol:.3,delay:e*.13}),this.tone(t*2,.4,{vol:.08,delay:e*.13})}),this.tone(1318.5,1.2,{vol:.18,delay:.6})}};var we=r=>document.getElementById(r),is={log:'<svg viewBox="0 0 48 48"><ellipse cx="14" cy="24" rx="9" ry="12" fill="#e9bd7d" stroke="#5b341a" stroke-width="3"/><path d="M14 12h22c3 0 5 5 5 12s-2 12-5 12H14" fill="#a8683a" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/></svg>',tooth:'<svg viewBox="0 0 48 48"><path d="M10 8h28l-3 22a6 6 0 0 1-6 5H19a6 6 0 0 1-6-5z" fill="#fff6d8" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><path d="M24 10v24" stroke="#5b341a" stroke-width="3"/></svg>',build:'<svg viewBox="0 0 48 48"><path d="M6 38 24 10l18 28z" fill="#a8683a" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><path d="M19 38v-9a5 5 0 0 1 10 0v9" fill="#3b2412" stroke="#5b341a" stroke-width="3"/></svg>',moon:'<svg viewBox="0 0 48 48"><path d="M30 6a18 18 0 1 0 12 30A15 15 0 0 1 30 6z" fill="#ffe9a0" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/></svg>',stone:'<svg viewBox="0 0 48 48"><path d="M6 34 15 14l14-3 13 13-4 12z" fill="#b9b6ac" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><path d="M15 14l8 10 16 0M23 24l-3 12" fill="none" stroke="#7d7a70" stroke-width="2.5" stroke-linecap="round"/></svg>',berry:'<svg viewBox="0 0 48 48"><circle cx="16" cy="30" r="9" fill="#d02a3a" stroke="#5b341a" stroke-width="3"/><circle cx="32" cy="30" r="9" fill="#7a2fc0" stroke="#5b341a" stroke-width="3"/><circle cx="24" cy="19" r="9" fill="#e24a58" stroke="#5b341a" stroke-width="3"/><path d="M24 10c0-4 3-6 7-6-1 4-3 6-7 6z" fill="#5da83a" stroke="#5b341a" stroke-width="2.5" stroke-linejoin="round"/></svg>',fish:'<svg viewBox="0 0 48 48"><path d="M4 24c8-12 22-14 32-4l8-8v24l-8-8C26 38 12 36 4 24z" fill="#5ab0e0" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><circle cx="14" cy="22" r="2.4" fill="#2a1608"/></svg>',lock:'<svg viewBox="0 0 48 48"><rect x="10" y="21" width="28" height="20" rx="4" fill="#d6b27a" stroke="#5b341a" stroke-width="3"/><path d="M16 21v-5a8 8 0 0 1 16 0v5" fill="none" stroke="#5b341a" stroke-width="3"/></svg>'},Fr=is,kc=class{constructor(){this.el={hud:we("hud"),wood:we("woodCount"),badge:we("woodBadge"),qList:we("questList"),qTitle:we("questTitle"),qBar:we("questBar").firstElementChild,hint:we("hint"),toast:we("toast"),act:we("actBtn"),actIcon:we("actIcon"),actLabel:we("actLabel"),banner:we("banner"),bT:we("bannerTitle"),bS:we("bannerSub")},this.hintTimer=0}setTouch(t){document.body.classList.toggle("touch",t)}showHUD(t){this.el.hud.classList.toggle("hidden",!t)}setWood(t,e=!0){this.el.wood.textContent=t,e&&(this.el.badge.classList.remove("pop"),this.el.badge.offsetWidth,this.el.badge.classList.add("pop"))}fade(t,e){let n=we("fade");e&&(we("fadeText").textContent=e),n.classList.toggle("on",t)}setClock(t,e,n){let i=we("clock");i.textContent=(n?(matchMedia("(max-width: 700px)").matches?"G"+n:"G\xFCn "+n)+" \xB7 ":"")+(e?"\u263E ":"\u2600 ")+t}setBag(t,e){let n=document.getElementById("bagCount");if(n.textContent=t,n.classList.toggle("hidden",!t),e){let i=document.getElementById("bagBtn");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}setStock(t,e){we("stockBadge").classList.toggle("hidden",!e),we("stockCount").textContent=t}setQuest(t,e,n){this.el.qTitle.textContent=t?"G\xF6rev \xB7 "+t:"G\xF6rev";let i=JSON.stringify(e);i!==this._qKey&&(this._qKey=i,this.el.qList.replaceChildren(...e.map(s=>{let o=document.createElement("li");return o.className=(s.done?"done ":"")+(s.soft?"soft":""),o.textContent=s.t,o}))),this.el.qBar.style.width=Math.round(Math.max(0,Math.min(1,n))*100)+"%"}setAction(t,e){let n=this.el.act;t===this._kind&&e===this._label||(this._kind=t,this._label=e,n.classList.toggle("off",!t||t==="locked"),n.classList.toggle("ready",!!t&&t!=="locked"),this.el.actIcon.innerHTML=t==="log"?is.log:t==="tree"?is.tooth:t==="build"?is.build:t==="locked"?is.lock:t==="sleep"?is.moon:is[t]||is.log,this.el.actLabel.textContent=e||"")}showGuide(t){guideIcon.textContent=t.intro.icon,guideTitle.textContent=t.title,guideLines.replaceChildren(...t.intro.lines.map(e=>{let n=document.createElement("li");return e.split("**").forEach((i,s)=>{if(i)if(s%2){let o=document.createElement("b");o.textContent=i,n.append(o)}else n.append(i)}),n})),guide.classList.remove("hidden"),clearTimeout(this._gt),this._gt=setTimeout(()=>this.hideGuide(),22e3)}guideShownFor(){return we("guide").classList.contains("hidden")?0:performance.now()-(this._gs||0)}hideGuide(){guide.classList.add("hidden"),clearTimeout(this._gt)}hint(t,e=3){this.el.hint.textContent=t,this.el.hint.classList.add("on"),clearTimeout(this._h),this._h=setTimeout(()=>this.el.hint.classList.remove("on"),e*1e3)}toast(t){let e=this.el.toast;e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}banner(t,e){let n=this.el.banner;this.el.bT.textContent=t,this.el.bS.textContent=e||"",n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}show(t,e=!0){we(t).classList.toggle("hidden",!e)}setLoad(t,e){we("loadBar").firstElementChild.style.width=Math.round(t*100)+"%",e&&(we("loadText").textContent=e)}ready(t){we("loadWrap").classList.add("hidden");let e=we("playBtn");e.disabled=!1,e.textContent=t?"DEVAM ET":"OYNA",we("contBtn").classList.toggle("hidden",!t)}setVersion(t){we("verLabel").textContent=t,we("verLabel2").textContent=t}};function ad(r="auto"){let t=new URLSearchParams(location.search).get("q");if(t&&Dr[t])return t;if(r&&Dr[r])return r;let e=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<1100,n=navigator.deviceMemory||(e?4:8),i=navigator.hardwareConcurrency||4;return e?n<=2||n<=3&&i<=4?"low":"medium":i>=6?"high":"medium"}var zc=class{constructor(t){this.scale=1,this.acc=0,this.n=0,this.slow=0,this.fast=0,this.enabled=!0,this.onChange=t,this.warm=90}frame(t){if(!this.enabled||this.warm-- >0||(this.acc+=t,this.n++,this.acc<1.2))return;let e=this.acc/this.n;this.acc=0,this.n=0,e>1/42?(this.slow++,this.fast=0):e<1/57?(this.fast++,this.slow=0):this.slow=this.fast=0,this.slow>=1?(this.set(this.scale-.12),this.slow=0):this.fast>=4&&this.scale<1&&(this.set(this.scale+.06),this.fast=0)}set(t){t=he(t,.7,1),Math.abs(t-this.scale)>.001&&(this.scale=t,this.onChange(t))}};var Qo=70,Fs=2,dM=36,Hc=class{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.t=0;let n=Qo*2*Fs,i=this.base=document.createElement("canvas");i.width=i.height=n;let s=i.getContext("2d"),o=s.createImageData(n,n);for(let a=0;a<n;a++)for(let l=0;l<n;l++){let c=l/Fs-Qo,h=a/Fs-Qo,u=e.heightAt(c,h),d,f,m;if(u<0){let p=he(-u/1.6,0,1);d=110-70*p,f=190-70*p,m=215-40*p}else{let p=he(u/14,0,1),g=he(1+(e.heightAt(c-1.2,h-1.2)-e.heightAt(c+1.2,h+1.2))*.22,.6,1.35);d=(122+70*p)*g,f=(176+20*p-30*p*p)*g,m=(84+55*p)*g,u<.35&&(d=224,f=208,m=150)}let x=(a*n+l)*4;o.data[x]=he(d,0,255),o.data[x+1]=he(f,0,255),o.data[x+2]=he(m,0,255),o.data[x+3]=255}s.putImageData(o,0,0)}draw(t,e,n,i,s,o){if(this.t+=t,this.t<.08)return;this.t=0;let a=this.ctx,l=this.canvas.width,c=l/2,h=c/dM;a.clearRect(0,0,l,l),a.save(),a.beginPath(),a.arc(c,c,c-1,0,Math.PI*2),a.clip(),a.fillStyle="#6fa152",a.fillRect(0,0,l,l),a.save(),a.translate(c,c),a.scale(h/Fs,h/Fs),a.translate(-(e.x+Qo)*Fs,-(e.z+Qo)*Fs),a.imageSmoothingEnabled=!0,a.drawImage(this.base,0,0),a.restore();let u=c-14,d=(f,m,x)=>{let p=(f-e.x)*h,g=(m-e.z)*h,M=Math.hypot(p,g),b=M>u;b&&(p*=u/M,g*=u/M),a.save(),a.translate(c+p,c+g),x(b),a.restore()};if(s&&d(ee.lodgeSite.x,ee.lodgeSite.z,()=>{a.fillStyle="#7a4a22",a.strokeStyle="#2e1808",a.lineWidth=2,a.beginPath(),a.moveTo(0,-10),a.lineTo(11,3),a.lineTo(-11,3),a.closePath(),a.fill(),a.stroke(),a.fillRect(-7,3,14,7),a.strokeRect(-7,3,14,7)}),i){let f=1+Math.sin(o*4)*.18;d(i.x,i.z,m=>{a.fillStyle="rgba(255,214,90,.35)",a.beginPath(),a.arc(0,0,13*f,0,7),a.fill(),a.fillStyle="#ffcf4a",a.strokeStyle="#5b341a",a.lineWidth=3,a.beginPath(),a.arc(0,0,m?6:8,0,7),a.fill(),a.stroke()})}a.translate(c,c),a.rotate(Math.PI-n),a.fillStyle="#fff",a.strokeStyle="#5b341a",a.lineWidth=3,a.lineJoin="round",a.beginPath(),a.moveTo(0,-12),a.lineTo(8,9),a.lineTo(0,4),a.lineTo(-8,9),a.closePath(),a.stroke(),a.fill(),a.restore()}};var ld=r=>document.getElementById(r),Vc=new R,Gc=class{constructor(){this.el=ld("objMark"),this.arrow=ld("objArrow"),this.dist=ld("objDist"),this.shown=!1}hide(){this.shown&&(this.el.classList.add("hidden"),this.shown=!1)}update(t,e,n,i,s){if(!e){this.hide();return}let o=Math.hypot(e.x-n.x,e.z-n.z);if(o<4.5){this.hide();return}Vc.set(e.x,e.y??0,e.z).project(t);let a=Vc.z>1,l=(Vc.x*.5+.5)*i,c=(1-(Vc.y*.5+.5))*s;a&&(l=i-l,c=s-c);let h=44,u=i-44,d=150,f=s-150,m=!a&&l>h&&l<u&&c>d&&c<f,x=180;if(!m){let p=i/2,g=s/2,M=l-p,b=c-g;a&&Math.abs(M)<1&&Math.abs(b)<1&&(b=1);let y=Math.min((M>0?u-p:h-p)/(M||1e-6),(b>0?f-g:d-g)/(b||1e-6));l=p+M*y,c=g+b*y,x=Math.atan2(b,M)*180/Math.PI-90+180}this.shown||(this.el.classList.remove("hidden"),this.shown=!0),this.el.classList.toggle("bob",m),this.el.style.transform=`translate(${l.toFixed(1)}px, ${c.toFixed(1)}px)`,this.arrow.style.transform=`rotate(${x.toFixed(0)}deg)`,this.dist.textContent=Math.round(o)+" m"}};var Wc=De.steps*De.woodPerStep;function fM(r){let t=()=>({x:r.lodge.x,z:r.lodge.z,y:r.lodge.y+3.2});return[{id:"wood",title:"Odun Topla",intro:{icon:"\u{1FAB5}",lines:["Bir a\u011Fac\u0131n yan\u0131na git ve **Kemir** d\xFC\u011Fmesine bas. A\u011Fa\xE7 3 vuru\u015Fta devrilir.","Yerdeki odun y\u0131\u011F\u0131nlar\u0131na yakla\u015F\u0131p **Topla**.","Odunlar Badi'nin **s\u0131rt\u0131nda** ta\u015F\u0131n\u0131r (en \xE7ok 12). Yuva i\xE7in toplam 24 odun gerek."]},objectives:[{text:()=>`Odun topla: ${Math.min(r.have(),Wc)}/${Wc}`,done:()=>r.have()>=Wc,target:()=>r.nearestWoodSource(),progress:()=>r.have()/Wc}]},{id:"lodge",title:"Yuvan\u0131 Kur",intro:{icon:"\u{1F3E0}",lines:["Parlayan **\u0131\u015F\u0131k s\xFCtununa** do\u011Fru y\xFCr\xFC: oras\u0131 yuva alan\u0131.","Alan\u0131n yan\u0131nda **\u0130n\u015Fa et** d\xFC\u011Fmesine bas. Her ad\u0131m 2 odun harcar.","S\u0131rt\u0131n bo\u015Fal\u0131rsa daha fazla odun topla; yuva 12 ad\u0131mda \xE7ubuk \xE7ubuk y\xFCkselir."]},objectives:[{text:()=>"Parlayan yuva alan\u0131n\u0131 bul",done:()=>r.siteFound||r.lodge.steps>0,target:t},{text:()=>`Yuvay\u0131 in\u015Fa et: ${r.lodge.steps}/${De.steps}`,done:()=>r.lodge.done,target:t,progress:()=>r.lodge.steps/De.steps}]},{id:"stock",title:"Odun Deposu",intro:{icon:"\u{1F4E6}",lines:["Yuvan\u0131n yan\u0131ndaki **depo y\u0131\u011F\u0131n\u0131na** yakla\u015F ve **Depola**'ya bas: s\u0131rt\u0131ndaki odunlar depoya ge\xE7er.",`Depoda **${Ns} odun** biriktir; ilerideki b\xFCy\xFCk yap\u0131lar i\xE7in laz\u0131m olacak.`,"Depodaki odunlar ta\u015F\u0131mak zorunda kalmadan g\xFCvende durur."]},objectives:[{text:()=>"S\u0131rttaki odunlar\u0131 depola",done:()=>r.stock>0,target:()=>r.wood>0?{x:r.stockpile.x,z:r.stockpile.z,y:r.stockpile.y+2.4}:r.nearestWoodSource()},{text:()=>`Depoda ${Ns} odun biriktir: ${Math.min(r.stock,Ns)}/${Ns}`,done:()=>r.stock>=Ns,target:()=>r.wood>0?{x:r.stockpile.x,z:r.stockpile.z,y:r.stockpile.y+2.4}:r.nearestWoodSource(),progress:()=>r.stock/Ns}]},{id:"sleep",title:"Yuvada Dinlen",intro:{icon:"\u{1F319}",lines:["Yuvan\u0131n **kap\u0131s\u0131na** yakla\u015F ve **Uyu / Dinlen**'e bas.","Uyku saati ilerletir: g\xFCnd\xFCz uyursan ak\u015Fam, geceyse sabah olur.","Her sabah yeni bir **g\xFCn** ba\u015Flar; g\xFCn say\u0131s\u0131 sol \xFCstte yazar."]},objectives:[{text:()=>"Yuvanda uyu",done:()=>!!r.save.slept,target:()=>{let e=r.lodge.doorWorld;return{x:e.x,z:e.z,y:r.lodge.y+2.4}}}]},{id:"gather",title:"Ta\u015F ve Meyve",intro:{icon:"\u{1FAA8}",lines:["Yerdeki **gri ta\u015F y\u0131\u011F\u0131nlar\u0131na** yakla\u015F ve **Ta\u015F topla**. Ta\u015Flar yap\u0131lar i\xE7in laz\u0131m.","**B\xF6\u011F\xFCrtlen \xE7al\u0131lar\u0131ndan** meyve topla; \xE7al\u0131 bir s\xFCre sonra yeniden meyve verir.","Toplad\u0131klar\u0131n sa\u011F taraftaki **\xE7anta** d\xFC\u011Fmesinde g\xF6r\xFCn\xFCr."]},objectives:[{text:()=>`Ta\u015F topla: ${Math.min(r.inv.stone,10)}/10`,done:()=>r.inv.stone>=10,target:()=>r.res.nearestOfKind("stone",r.player.pos.x,r.player.pos.z),progress:()=>r.inv.stone/10},{text:()=>`B\xF6\u011F\xFCrtlen topla: ${Math.min(r.inv.berry,6)}/6`,done:()=>r.inv.berry>=6,target:()=>r.res.nearestOfKind("berry",r.player.pos.x,r.player.pos.z),progress:()=>r.inv.berry/6}]},{id:"fish",title:"Bal\u0131k Tut",intro:{icon:"\u{1F41F}",lines:["Nehrin **k\u0131y\u0131s\u0131na** git ve suya bakarak **Bal\u0131k tut**'a bas.","\u015Eamand\u0131ra bat\u0131nca hemen **\xC7ek!** d\xFC\u011Fmesine bas; ge\xE7 kal\u0131rsan bal\u0131k ka\xE7ar.","Bal\u0131k, yeni kunduzlar i\xE7in yiyecek olacak. Y\xFCr\xFCrsen oltay\u0131 b\u0131rak\u0131rs\u0131n."]},objectives:[{text:()=>`Bal\u0131k tut: ${Math.min(r.inv.fish,3)}/3`,done:()=>r.inv.fish>=3,target:()=>r.nearestShore(),progress:()=>r.inv.fish/3}]},{id:"soon",title:"Vadi Seni Bekliyor",intro:{icon:"\u{1F3DE}\uFE0F",lines:["Tebrikler! Yuvan haz\u0131r ve deponda odun var.","Yeni g\xF6revler (at\xF6lye, baraj, koloni) \xE7ok yak\u0131nda geliyor.","O zamana kadar vadiyi gez, nehirde y\xFCz, odun biriktirmeye devam et."]},objectives:[{text:()=>"Yeni g\xF6revler yak\u0131nda\u2026",done:()=>!1,target:()=>null,soft:!0}]}]}var Xc=class{constructor(t){this.g=t,this.defs=fM(t),this.index=0,this.targetCache=null,this.tT=0}get current(){return this.defs[Math.min(this.index,this.defs.length-1)]}restore(t){this.index=Math.max(0,Math.min(t|0,this.defs.length-1)),this.skipDone()}skipDone(){for(;this.index<this.defs.length-1&&this.defs[this.index].objectives.every(t=>t.done());)this.index++}refresh(t){let e=this.g,n=this.current;this.index<this.defs.length-1&&n.objectives.every(l=>l.done())&&(this.index++,this.skipDone(),e.save.quest=this.index,t||(e.ui.banner("G\xD6REV TAMAM!",n.title),e.audio.pop(),setTimeout(()=>this.showIntro(),2600)));let i=this.current,s=i.objectives.map(l=>({t:l.text(),done:l.done(),soft:!!l.soft})),o=i.objectives.filter(l=>l.progress),a=o.length?Math.max(...o.map(l=>Math.min(1,l.progress()))):0;e.ui.setQuest(i.title,s,a)}showIntro(t){let e=this.g,n=this.current;e.state!=="play"&&!t||!t&&(e.save.guideShown|0)>this.index||(e.save.guideShown=this.index+1,e.ui.showGuide(n))}target(){let t=this.current.objectives.find(e=>!e.done());return t&&t.target?t.target():null}};var Zp=1;function ta(){return{v:Zp,ts:0,wood:0,spent:0,lodge:0,chopped:[],taken:[],drops:[],pos:null,playMs:0,intro:!1,quest:0,guideShown:0,slept:!1,day:1,siteFound:!1,settings:{sound:!0,quality:"auto"},install:null}}function Jp(r){let t={...ta(),...r};return t.settings={...ta().settings,...r.settings||{}},t.v=Zp,t}function $p(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}var pM=r=>btoa(unescape(encodeURIComponent(r))),mM=r=>decodeURIComponent(escape(atob(r)));function jp(){try{let r=localStorage.getItem(gc);if(!r)return ta();let t=JSON.parse(r);return!t||typeof t!="object"||typeof t.v!="number"?ta():Jp(t)}catch{return ta()}}function qc(r){try{return r.ts=Date.now(),localStorage.setItem(gc,JSON.stringify(r)),!0}catch{return!1}}function cd(){try{localStorage.removeItem(gc)}catch{}}function hd(r){let t=JSON.stringify(r);return"BV1."+pM(t)+"."+$p(t)}function Qp(r){try{let[t,e,n]=r.trim().split(".");if(t!=="BV1"||!e)return null;let i=mM(e);if($p(i)!==n)return null;let s=JSON.parse(i);return typeof s.v!="number"?null:Jp(s)}catch{return null}}async function tm(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}var ea=r=>document.getElementById(r),Bn={deferred:null,standalone(){return matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1},init(){addEventListener("beforeinstallprompt",r=>{r.preventDefault(),Bn.deferred=r}),addEventListener("appinstalled",()=>{Bn.deferred=null}),"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}},gM='<svg viewBox="0 0 24 24"><path d="M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" fill="none" stroke="#2a7de1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',xM='<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#5b341a" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="#5b341a" stroke-width="2" stroke-linecap="round"/></svg>';function em({welcome:r,getSaveCode:t,onClose:e}){let n=ea("installBody"),i=ea("instDo"),s=ea("instSkip"),o=Bn.isIOS();s.textContent=r?"\u{1F3AE} Y\xDCKLEMEDEN OYNA":"Kapat",i.classList.remove("hidden"),Bn.standalone()?(n.innerHTML="<p>Oyun zaten uygulama olarak a\xE7\u0131k. \u{1F389}</p>",i.classList.add("hidden")):o?(n.innerHTML=`<p>iPhone / iPad'de Safari ile ekle:</p><div class="step">`+gM+`<span>Alttaki (iPad'de \xFCstteki) <b>Payla\u015F</b> d\xFC\u011Fmesine dokun</span></div><div class="step">`+xM+`<span><b>Ana Ekrana Ekle</b>'yi se\xE7, sonra <b>Ekle</b></span></div><p class="small"><b>\xD6nemli:</b> iOS'ta y\xFCklenen uygulama taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \xD6nce kay\u0131t kodunu kopyala; yeni uygulamada Men\xFC \u2192 Kay\u0131t yede\u011Fi \u2192 <b>Koddan y\xFCkle</b> de.</p>`,i.textContent="\u{1F4CB} KAYIT KODUNU KOPYALA"):Bn.deferred?(n.innerHTML="<p>Tek dokunu\u015Fla ana ekrana ekle; \xE7evrimd\u0131\u015F\u0131 da oynayabilirsin.</p>",i.textContent="\u{1F4F2} OYUNU Y\xDCKLE"):(n.innerHTML="<p>Taray\u0131c\u0131 men\xFCs\xFCnden (\u22EE veya \u22EF) <b>Ana ekrana ekle</b> / <b>Uygulamay\u0131 y\xFCkle</b> / <b>Masa\xFCst\xFCne ekle</b> se\xE7ene\u011Fini kullan.</p>",i.classList.add("hidden")),ea("install").classList.remove("hidden");let a=l=>{ea("install").classList.add("hidden"),i.onclick=s.onclick=null,e&&e(l)};i.onclick=async()=>{if(o){let l=t();try{await navigator.clipboard.writeText(l),i.textContent="\u2714 KOPYALANDI"}catch{i.textContent="Kodu men\xFCden kopyala"}return}if(Bn.deferred){Bn.deferred.prompt();try{await Bn.deferred.userChoice}catch{}Bn.deferred=null,a("done")}},s.onclick=()=>a("skip")}function nm(r,t){return t&&!Bn.standalone()&&!r}var me=r=>document.getElementById(r),Oe=(r,t,e)=>{let n=tt(r,t,e);return{r:n.r,g:n.g,b:n.b}},_M=3.4,yM=6.6,vM=2.5,D1=De.steps*De.woodPerStep,MM={stone:"ta\u015F",berry:"b\xF6\u011F\xFCrtlen",fish:"bal\u0131k"};function na(r,t){return new Promise((e,n)=>new Es().load(r,i=>{i.wrapS=i.wrapT=bn,t&&(i.colorSpace=ye),e(i)},void 0,n))}function im(r,t){let e=r.image,n=document.createElement("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0);let s=i.getImageData(0,0,n.width,n.height),o=s.data,a=0,l=o.length/4;for(let u=0;u<o.length;u+=4)a+=.3*o[u]+.59*o[u+1]+.11*o[u+2];let c=a/l;for(let u=0;u<o.length;u+=4){let d=(.3*o[u]+.59*o[u+1]+.11*o[u+2])/c*215;o[u]=o[u+1]=o[u+2]=Math.min(255,d)}i.putImageData(s,0,0);let h=new Yn(n);return h.wrapS=h.wrapT=bn,h.colorSpace=ye,h.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),h}var Yc=class{constructor(t){this.canvas=t,this.ui=new kc,this.save=jp(),this.debug=new URLSearchParams(location.search).has("debug"),this.tierName=ad(this.save.settings.quality),this.tier=Dr[this.tierName],this.time=0,this.state="loading",this.act=null,this.target=null,this.player={pos:new R,vel:new R,yaw:-2.58,swim:!1,wade:!1,speed:0},this.stepAcc=0,this.rippleT=0,this.saveT=0,this.puffT=0,this.leafT=0,this.confetti=0,this.wood=0,this.spent=0,this.stock=0,this.clock=8.5,this.clockT=0,this.sleep=null,this.noAdapt=new URLSearchParams(location.search).has("noadapt")}async init(){let t=this.ui,e=this.tier;t.setVersion("v"+Np);let n=this.renderer=new fc({canvas:this.canvas,antialias:e.aa,powerPreference:"high-performance",stencil:!1});n.toneMapping=No,n.toneMappingExposure=1.02,n.shadowMap.enabled=!0,n.shadowMap.type=Rs,this.scene=new ro,this.camera=new Je(52,1,.2,520),this.renderScale=1;let i=()=>new Promise(d=>setTimeout(d,0));t.setLoad(.05,"Dokular y\xFCkleniyor\u2026"),await i();let[s,o,a,l,c]=await Promise.all([na("tex/grass_c.jpg",!0),na("tex/grass_n.jpg",!1),na("tex/bark_c.jpg",!0),na("tex/bark_n.jpg",!1),na("tex/rock_c.jpg",!0)]),h=Math.min(8,n.capabilities.getMaxAnisotropy());[o,a,l,c].forEach(d=>d.anisotropy=h),this.tex={barkC:a,barkN:l,rockC:im(c,n)};let u=im(s,n);t.setLoad(.15,"Vadi \u015Fekilleniyor\u2026"),await i(),this.terrain=new vc(e.terrainSeg),this.minimap=new Hc(me("minimap"),this.terrain),this.siteFound=!1,this.veg=new bc(this.scene,this.terrain,e,this.tex),t.setLoad(.35,"Arazi boyan\u0131yor\u2026"),await i(),this.terrainMesh=this.terrain.buildMesh(u,o,this.veg.aoPoints),this.scene.add(this.terrainMesh),this.sky=Up(this.scene,e),this.water=Fp(this.terrain),this.scene.add(this.water.mesh),this.mountains=zp(),this.scene.add(this.mountains),this.waterfall=Hp(this.terrain),this.scene.add(this.waterfall.mesh),t.setLoad(.5,"A\u011Fa\xE7lar dikiliyor\u2026"),await i(),this.veg.build(),this.grassBuilt=e.grass,t.setLoad(.75,"Yuva alan\u0131 haz\u0131rlan\u0131yor\u2026"),await i(),this.logs=new wc(this.scene,this.terrain,this.tex),this.lodge=new Cc(this.scene,this.terrain,this.tex,this.veg.mats.trunkMat),this.stockpile=new Ic(this.scene,this.terrain,this.tex,this.lodge),this.veg.obstacles.push({x:this.stockpile.x,z:this.stockpile.z,r:1.1,pile:!0}),this.particles=new Uc(this.scene,900,e.particles),this.buildMarkers(),this.buildButterflies(),this.spawnWorldLogs(),this.res=new Ac(this.scene,this.terrain,this.veg,this.tex,this.save.taken||[]),this.inv={stone:0,berry:0,fish:0},this.gear=new Rc(this.scene),t.setLoad(.88,"Badi uyan\u0131yor\u2026"),await i(),this.badi=new Nc,await this.badi.load("models/badi.glb",this.tex),this.scene.add(this.badi.root),this.badi.onStep=d=>this.onStep(d),this.fcam=new Fc(this.camera,this.terrain),this.input=new Oc(this.canvas,me("joy")),this.audio=new Bc,this.audio.enabled=this.save.settings.sound,this.adapt=new zc(d=>{this.renderScale=d,this.resize(),this.veg.setGrassFade(Be(30,44,(d-.5)/.5))}),this.noAdapt&&(this.adapt.enabled=!1),this.quests=new Xc(this),this.marker=new Gc,this.applySave(),this.bindUI(),this.resize(),new ResizeObserver(()=>this.resize()).observe(this.canvas),addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),200)),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.persist(),this.state==="play"&&this.pause(!0))}),addEventListener("pagehide",()=>this.persist()),Bn.init(),this.placePlayerVisual(),this.fcam.yaw=.35,this.fcam.pitch=.3,this.fcam.dist=7.5,this.fcam.snap(new R(this.player.pos.x,this.player.pos.y+1.05,this.player.pos.z)),this.state="title",this.ui.ready(this.hasProgress()),t.setLoad(1,"Haz\u0131r"),this.last=performance.now(),n.setAnimationLoop(()=>this.frame()),this.debug&&(window.__bv=this)}nightTint(t){let e=1-.8*this.sky.night;return{r:t.r*e,g:t.g*e,b:t.b*e}}setWood(t,e=!0){this.wood=t,this.ui.setWood(t,e),this.badi.setCarry(t)}have(){return this.spent+this.wood}hasProgress(){return this.save.wood>0||this.save.lodge>0||this.save.spent>0||(this.save.chopped||[]).length>0||this.save.intro}buildMarkers(){let t=new Et(new Dn(.22,.45,4).rotateX(Math.PI),new Ge({color:tt(1,.86,.3),fog:!1}));t.visible=!1,t.renderOrder=6,t.material.depthTest=!1,this.scene.add(t),this.arrow=t;let e=document.createElement("canvas");e.width=4,e.height=64;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.7,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,1)"),n.fillStyle=i,n.fillRect(0,0,4,64);let s=new Yn(e),o=new Et(new Le(.5,.9,26,16,1,!0),new Ge({color:tt(1,.85,.4),alphaMap:s,transparent:!0,opacity:.4,depthWrite:!1,blending:Do,side:Fe,fog:!1}));o.position.set(this.lodge.x,this.lodge.y+13,this.lodge.z),o.renderOrder=4,this.scene.add(o),this.beam=o,this.ripples=[];let a=new Ss(.82,1,28);a.rotateX(-Math.PI/2);for(let l=0;l<10;l++){let c=new Et(a,new Ge({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));c.visible=!1,c.renderOrder=3,this.scene.add(c),this.ripples.push({m:c,t:1})}this.rippleI=0}ripple(t,e,n=1){let i=this.ripples[this.rippleI++%this.ripples.length];i.t=0,i.size=n,i.m.position.set(t,ee.waterY+.04,e),i.m.visible=!0}buildButterflies(){let t=new $t;t.setAttribute("position",new Dt([0,0,0,.16,.05,-.08,.14,0,.12,0,0,0,.14,0,.12,.08,-.02,.2],3)),t.computeVertexNormals(),this.bflies=[];let e=[[1,.6,.2],[.95,.85,.2],[.6,.75,1],[1,.55,.75],[1,1,1]],n=this.tierName==="low"?5:12;for(let i=0;i<n;i++){let s=new Ge({color:tt(...e[i%e.length]),side:Fe}),o=new ie,a=new Et(t,s),l=new Et(t,s);l.scale.x=-1,o.add(a,l),o.userData={l:a,r:l,tgt:new R,ph:Math.random()*10},o.position.set(ee.spawn.x+(Math.random()-.5)*30,1.5,ee.spawn.z+(Math.random()-.5)*30),this.scene.add(o),this.bflies.push(o)}}spawnWorldLogs(){let t=sn(8080),e=this.terrain,n=ee.lodgeSite,i=new Set(this.save.taken||[]);this.worldLogKeys=[];let s=0;for(let o=0;o<400&&s<16;o++){let a=t()*6.283,l=8+t()*26,c=ee.spawn.x+Math.cos(a)*l,h=ee.spawn.z+Math.sin(a)*l*.8-4;if(e.heightAt(c,h)<.9||e.slopeAt(c,h)>.5||Math.hypot(c,h)>52||Math.hypot(c-n.x,h-n.z)<5.5||this.veg.obstacles.some(f=>(f.x-c)**2+(f.z-h)**2<(f.r+.9)**2))continue;let d="w"+s;s++,!i.has(d)&&this.logs.spawn(c,h,1+Math.floor(t()*2),{key:d})}}applySave(){let t=this.save;this.day=Math.max(1,t.day|0),this.siteFound=!!t.siteFound;let e=t.inv||{};this.inv={stone:e.stone|0,berry:e.berry|0,fish:e.fish|0},this.ui.setBag(this.invTotal()),this.wood=t.wood|0,this.spent=t.spent|0,this.stock=t.stock|0,this.clock=typeof t.clock=="number"?t.clock:8.5;for(let i of t.chopped||[])this.veg.applyChopped(i);for(let i of t.drops||[])this.logs.spawn(i.x,i.z,i.wood,{key:"drop"});this.lodge.setStepsInstant(he(t.lodge|0,0,De.steps)),this.stockpile.set(this.stock,!0),this.badi.setCarry(this.wood),this.sky.setTime(this.clock);let n=this.player;t.pos?(n.pos.set(t.pos.x,0,t.pos.z),n.yaw=t.pos.yaw):n.pos.set(ee.spawn.x,0,ee.spawn.z),n.pos.y=this.terrain.heightAt(n.pos.x,n.pos.z),this.audio.enabled=t.settings.sound,this.ui.setWood(this.wood,!1),this.ui.setStock(this.stock,this.lodge.done),this.quests.restore(t.quest|0),this.refreshQuest(!0)}persist(){if(!this.logs||!this.badi)return;let t=this.save;t.wood=this.wood,t.spent=this.spent,t.lodge=this.lodge.steps,t.stock=this.stock,t.clock=+this.clock.toFixed(3),t.chopped=this.veg.trees.filter(e=>!e.alive||e.state==="falling").map(e=>e.id),t.taken=[...new Set([...t.taken||[]])],t.drops=this.logs.items.filter(e=>e.key==="drop"&&e.state==="ground").map(e=>({x:+e.x.toFixed(2),z:+e.z.toFixed(2),wood:e.wood})),t.pos={x:+this.player.pos.x.toFixed(2),z:+this.player.pos.z.toFixed(2),yaw:+this.player.yaw.toFixed(2)},t.settings.sound=this.audio.enabled,t.quest=this.quests.index,t.day=this.day,t.siteFound=this.siteFound,t.inv={...this.inv},t.playMs=(t.playMs||0)+0,qc(t)}bindUI(){let t=this.ui,e=this.input;t.setTouch(navigator.maxTouchPoints>0&&matchMedia("(pointer:coarse)").matches),e.onAnyInput=o=>{o==="touch"&&t.setTouch(!0)},e.onPause=()=>{this.invOpen?this.closeInventory():this.pause(this.state==="play")},me("bagBtn").onclick=()=>this.openInventory(),me("invClose").onclick=()=>this.closeInventory(),me("playBtn").onclick=()=>this.startGame(!1),me("contBtn").onclick=()=>{confirm("Kay\u0131tl\u0131 oyun silinip yeni oyun ba\u015Flayacak. Emin misin?")&&(cd(),location.reload())},me("tutOk").onclick=()=>{t.show("tutorial",!1),this.save.intro=!0,this.beginPlay()},me("guideOk").onclick=()=>{t.hideGuide(),this.audio.click()},me("guideBtn").onclick=()=>{this.audio.click(),this.quests.showIntro(!0)},me("menuBtn").style.pointerEvents="auto",me("menuBtn").onclick=()=>this.pause(!0),me("mResume").onclick=()=>this.pause(!1);let n=me("actBtn");n.addEventListener("pointerdown",o=>{o.preventDefault(),this.audio.unlock(),e.setUiAction(!0)});let i=()=>e.setUiAction(!1);n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i);let s=()=>{me("mSound").textContent="Ses: "+(this.audio.enabled?"a\xE7\u0131k":"kapal\u0131"),me("mMusic").textContent="M\xFCzik: "+(this.audio.musicOn?"a\xE7\u0131k":"kapal\u0131"),me("mQuality").textContent="Grafik: "+({auto:"otomatik",high:"y\xFCksek",medium:"orta",low:"d\xFC\u015F\xFCk"}[this.save.settings.quality]||"otomatik")};this.refreshMenu=s,me("mSound").onclick=()=>{this.audio.unlock(),this.audio.setEnabled(!this.audio.enabled),this.save.settings.sound=this.audio.enabled,s()},me("mMusic").onclick=()=>{this.audio.musicOn=!this.audio.musicOn,s()},me("mQuality").onclick=()=>{let o=["auto","high","medium","low"],a=this.save.settings.quality,l=o[(o.indexOf(a)+1)%o.length];this.save.settings.quality=l,this.applyTier(ad(l)),s()},me("mCopy").onclick=async()=>{this.persist();let o=hd(this.save);me("saveCode").value=o;try{await navigator.clipboard.writeText(o),me("saveMsg").textContent="Kod kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r."}catch{me("saveMsg").textContent="Kodu elle kopyala."}},me("mImport").onclick=()=>{let o=Qp(me("saveCode").value);if(!o){me("saveMsg").textContent="Kod ge\xE7ersiz.";return}qc(o),me("saveMsg").textContent="Y\xFCklendi, yeniden ba\u015Fl\u0131yor\u2026",setTimeout(()=>location.reload(),600)},me("mReset").onclick=()=>{confirm("T\xFCm ilerleme silinecek. Emin misin?")&&(cd(),location.reload())},me("mInstall").onclick=()=>this.openInstallDialog(!1),s(),addEventListener("pointerdown",()=>this.audio.unlock(),{once:!1,passive:!0})}openInstallDialog(t,e){em({welcome:t,getSaveCode:()=>(this.persist(),hd(this.save)),onClose:n=>{t&&(this.save.install=n,qc(this.save)),e&&e()}})}applyTier(t){this.tierName=t,this.tier=Dr[t];let e=this.tier;this.sky.sun.shadow.mapSize.set(e.shadow,e.shadow),this.sky.sun.shadow.map&&(this.sky.sun.shadow.map.dispose(),this.sky.sun.shadow.map=null);let n=e.shadowDist;Object.assign(this.sky.sun.shadow.camera,{left:-n,right:n,top:n,bottom:-n}),this.sky.sun.shadow.camera.updateProjectionMatrix(),this.veg.setGrassDensity(he(e.grass/this.grassBuilt,.05,1)),this.particles.amountScale=e.particles,this.resize()}startGame(){this.audio.unlock(),tm(),this.ui.show("title",!1);let t=this.player,e=new R(t.pos.x,t.pos.y+1.05,t.pos.z),n=()=>{this.save.intro?this.beginPlay():(this.ui.show("tutorial",!0),this.state="tutorial")},i=()=>{let s=this.fcam,o=s.yaw+.9,a=this.yawBehind(),l=.95,c=.42,h=26,u=this.defaultDist();this.state="intro",s.playCine(3.2,(d,f)=>{let m=d*d*(3-2*d);f.yaw=Be(o,a,m),f.pitch=Be(l,c,m),f.dist=Be(h,u,m),f.look.set(t.pos.x,t.pos.y+1.05,t.pos.z),f.focus.copy(f.look)},n)};nm(this.save.install,this.input.isTouch||navigator.maxTouchPoints>0)?(this.state="install",this.openInstallDialog(!0,i)):i()}defaultDist(){return this.camera.aspect<.8?11.5:8.8}yawBehind(){return this.player.yaw+Math.PI}beginPlay(){this.state="play",this.input.enabled=!0,this.ui.showHUD(!0),this.fcam.yaw=this.yawBehind(),this.fcam.dist=this.defaultDist(),this.fcam.pitch=.42,this.fcam.snap(new R(this.player.pos.x,this.player.pos.y+1.05,this.player.pos.z)),!this.lodge.done&&this.wood===0&&this.spent===0&&this.ui.hint("A\u011Fa\xE7lara ve yerdeki odunlara yakla\u015F!",5),this.persist(),setTimeout(()=>this.quests.showIntro(),1400)}openInventory(){if(this.state!=="play"||this.act)return;this.state="paused",this.invOpen=!0,this.input.enabled=!1,this.audio.click();let t=(n,i,s)=>"<div class='slot'>"+n+"<b>"+i+"</b><span>"+s+"</span></div>",e=()=>"<div class='slot empty'><span>bo\u015F</span></div>";me("invGrid").innerHTML=t(Fr.log,this.wood+"/"+jo,"S\u0131rttaki odun")+t(Fr.log,this.stock,"Depodaki odun")+t(Fr.stone,this.inv.stone,"Ta\u015F")+t(Fr.berry,this.inv.berry,"B\xF6\u011F\xFCrtlen")+t(Fr.fish,this.inv.fish,"Bal\u0131k")+e()+e()+e()+e(),me("invNote").textContent="Ta\u015F ve yiyecek yap\u0131lar ve yeni kunduzlar i\xE7in laz\u0131m olacak.",this.ui.show("inv",!0)}closeInventory(){this.invOpen&&(this.invOpen=!1,this.ui.show("inv",!1),this.state="play",this.input.enabled=!0,this.audio.click())}pause(t){t&&this.state!=="play"||!t&&this.state!=="paused"||(this.state=t?"paused":"play",this.input.enabled=!t,this.ui.show("menu",t),t&&(this.refreshMenu(),this.persist()),this.audio.click())}resize(){let t=this.canvas,e=t.clientWidth||innerWidth,n=t.clientHeight||innerHeight,i=Math.min(devicePixelRatio||1,this.tier.pr)*this.renderScale;this.renderer.setPixelRatio(i),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.fov=e/n<.8?64:52,this.camera.updateProjectionMatrix(),this.particles&&this.particles.setScale(n*i/i,this.camera.fov),this.fcam&&this.state==="play"&&!this.fcam.cine&&(this.fcam.dist=he(this.fcam.dist,this.fcam.minD,this.fcam.maxD))}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.adapt.frame(e),this.step(e),this.renderer.render(this.scene,this.camera),this.frames=(this.frames||0)+1}step(t){if(this.state==="paused"||this.state==="loading")return;this.time+=t;let e=this.player;this.state==="play"?this.updatePlay(t):this.state==="title"||this.state==="install"?this.fcam.update(t,e.pos,[-t*17,0,0]):(this.state==="intro"||this.state==="tutorial")&&this.fcam.update(t,e.pos,[0,0,0],!1),this.badi.update(t),this.updateWorld(t)}updateWorld(t){let e=this.player;if(this.water.update(this.time),this.waterfall.update(this.time,this.sky.night),this.state==="play"&&!this.sleep&&this.advanceClock(this.clock+t*24/480),this.clockT-=t,this.clockT<=0){this.clockT=.15,this.sky.setTime(this.clock),this.water.mesh.material.uniforms.uSkyHor.value.copy(this.sky.waterHorizon),this.lodge.nightK=this.sky.night,this.particles.mat.uniforms.uScale.value=this.particles.mat.uniforms.uScale.value;let i=Math.floor(this.clock),s=Math.floor((this.clock-i)*60/10)*10;this.ui.setClock(String(i).padStart(2,"0")+":"+String(s).padStart(2,"0"),this.sky.night>.5,this.day)}this.sky.update(t,this.fcam.focus),this.stockpile.update(t),this.veg.update(t,this.time,{onThud:i=>this.onThud(i),onGone:()=>this.persist()});for(let i of this.logs.items)i.state==="fly"&&i.to.copy(this.badi.packWorld(this._pw||(this._pw=new R)));this.logs.update(t,this.time,{onCollected:i=>this.onCollected(i),onBounce:()=>this.audio.bounce()}),this.lodge.update(t,this.time),this.res.update(t,this.time),this.particles.update(t);for(let i of this.ripples)if(i.t<1){i.t+=t/1.1;let s=(.3+i.t*1.8)*(i.size||1);i.m.scale.set(s,1,s),i.m.material.opacity=.55*(1-i.t),i.t>=1&&(i.m.visible=!1)}this.updateButterflies(t),this.updateAmbientFx(t);let n=this.lodge.steps<De.steps&&this.state!=="title";if(this.beam.visible=n,n&&(this.beam.material.opacity=(this.wood>=2?.5:.22)+Math.sin(this.time*2.5)*.06),this.audio.ambient(t,this.riverProximity(),.5+.5*Math.sin(this.time*.3)),this.state==="play"){!this.siteFound&&Math.hypot(e.pos.x-ee.lodgeSite.x,e.pos.z-ee.lodgeSite.z)<14&&(this.siteFound=!0,this.refreshQuest()),this.qT=(this.qT||0)-t,this.qT<=0&&(this.qT=.25,this.objTarget=this.quests.target());let i=!!this.act&&["cheer","sleep"].includes(this.act.type);this.marker.update(this.camera,i?null:this.objTarget,e.pos,this.canvas.clientWidth,this.canvas.clientHeight),this.minimap.draw(t,e.pos,e.yaw,this.objTarget,this.lodge.done,this.time)}}riverProximity(){let t=this.player.pos,e=Math.abs(t.x-rn(t.z));return he(1-e/28,0,1)}updateButterflies(t){let e=this.player.pos,n=this.terrain;for(let i of this.bflies){let s=i.userData;if(s.ph+=t,i.position.distanceTo(s.tgt)<.6||s.tgt.lengthSq()===0){let u=Math.random()*6.28,d=3+Math.random()*16,f=e.x+Math.cos(u)*d,m=e.z+Math.sin(u)*d;s.tgt.set(f,Math.max(n.heightAt(f,m),.3)+.8+Math.random()*1.2,m)}let o=s.tgt.x-i.position.x,a=s.tgt.y-i.position.y,l=s.tgt.z-i.position.z,c=Math.hypot(o,a,l)||1;i.position.x+=o/c*1.4*t+Math.sin(s.ph*3)*.01,i.position.z+=l/c*1.4*t,i.position.y+=a/c*1*t+Math.sin(s.ph*7)*.012,i.rotation.y=Math.atan2(o,l)+Math.PI/2;let h=Math.sin(s.ph*22)*.9;s.l.rotation.z=h,s.r.rotation.z=-h}}updateAmbientFx(t){let e=this.player.pos,n=this.particles;if(this.leafT-=t,this.leafT<=0){this.leafT=.35;for(let i=0;i<2;i++){let s=Math.random()*6.28,o=2+Math.random()*14,a=Math.random()<.5?Oe(.95,.9,.55):Oe(.7,.85,.35);n.emit({x:e.x+Math.cos(s)*o,y:e.y+.8+Math.random()*3,z:e.z+Math.sin(s)*o,vx:.3,vy:.05,vz:.1,life:5,size:Math.random()<.5?.06:.1,shape:Math.random()<.5?1:0,...a,a:.9,grav:-.02+Math.random()*.15,drag:.4})}}{let i=this.waterfall.base;Math.hypot(e.x-i.x,e.z-i.z)<85&&Math.random()<t*9&&n.emit({x:i.x+(Math.random()-.5)*5,y:i.y+.3,z:i.z+.6+Math.random()*1.5,vx:(Math.random()-.5)*.4,vy:.9,vz:.5,life:2.4,size:1.3,...this.nightTint({r:.9,g:.95,b:1}),a:.28,grav:-.2,drag:.7,fade:2})}if(this.sky.night>.35&&Math.random()<t*14){let i=Math.random()*6.28,s=2+Math.random()*12,o=Oe(.75,1,.35);n.emit({x:e.x+Math.cos(i)*s,y:e.y+.5+Math.random()*1.8,z:e.z+Math.sin(i)*s,vx:(Math.random()-.5)*.4,vy:.1,vz:(Math.random()-.5)*.4,life:4,size:.13,...o,a:1,grav:-.02,drag:.6})}if(this.lodge.done&&(this.puffT-=t,this.puffT<=0)){this.puffT=.4;let i=this.lodge,s=i.chimneyWorld;n.emit({x:s.x+(Math.random()-.5)*.25,y:s.y,z:s.z+(Math.random()-.5)*.25,vx:.4,vy:.9,vz:.1,life:3.2,size:.55,...this.nightTint(Oe(.9,.9,.92)),a:.45,grav:-.15,drag:.5,fade:2})}if(this.confetti>0){this.confetti-=t;let i=this.lodge,s=[Oe(1,.4,.4),Oe(1,.85,.3),Oe(.5,.9,.5),Oe(.45,.7,1),Oe(1,.55,.85)];for(let o=0;o<4;o++){let a=s[Math.floor(Math.random()*s.length)],l=Math.random()*6.28;n.emit({x:i.x+Math.cos(l)*3.5,y:i.y+5+Math.random()*2,z:i.z+Math.sin(l)*3.5,vx:(Math.random()-.5)*1.5,vy:1+Math.random()*3,vz:(Math.random()-.5)*1.5,life:3.2,size:.14,shape:1,...a,a:1,grav:1.8,drag:.8})}}}placePlayerVisual(){let t=this.player,e=this.badi;e.root.position.copy(t.pos),e.root.rotation.y=t.yaw}collide(t,e){let i=this.veg.obstacles;for(let a=0;a<i.length;a++){let l=i[a],c=t-l.x,h=e-l.z,u=l.r+.42;if(c*c+h*h<u*u){let d=Math.sqrt(c*c+h*h)||.001;t=l.x+c/d*u,e=l.z+h/d*u}}let s=this.lodge.obstacleRadius;if(s>0){let a=t-this.lodge.x,l=e-this.lodge.z,c=s+.42,h=Math.hypot(a,l);h<c&&(t=this.lodge.x+a/h*c,e=this.lodge.z+l/h*c)}let o=Math.hypot(t,e);return o>ee.playRadius&&(t*=ee.playRadius/o,e*=ee.playRadius/o),[t,e]}updatePlay(t){let e=this.input,n=this.player,i=this.terrain,s=this.fcam;e.poll();let o=e.consumeCam(),a=e.consumeAction();this.wantAct=a;let l=e.move.x,c=e.move.y,h=Math.min(1,Math.hypot(l,c));h>.35&&this.ui.guideShownFor()>3500&&this.ui.hideGuide(),this.act&&h>(this.act.type==="fish"?.3:.55)&&!["cheer","sleep","deposit"].includes(this.act.type)&&this.cancelAct(),this.act&&(l=c=0,h=0);let d=Math.sin(s.yaw),f=Math.cos(s.yaw),m=-d*c+f*l,x=-f*c+-d*l,p=i.depthAt(n.pos.x,n.pos.z),g=n.swim,M=n.wade;n.swim=p>.8,n.wade=p>.18;let b=e.run&&!n.swim,y=n.swim?vM:b?yM:_M;n.wade&&!n.swim&&(y*=.82),y*=1-.015*Math.min(this.wood,jo);let v=h>.1?h:0,E=(v?m/(Math.hypot(m,x)||1):0)*y*(b?1:Math.min(1,v/.82)),A=(v?x/(Math.hypot(m,x)||1):0)*y*(b?1:Math.min(1,v/.82));if(n.vel.x=ji(n.vel.x,E,v?9:13,t),n.vel.z=ji(n.vel.z,A,v?9:13,t),n.speed=Math.hypot(n.vel.x,n.vel.z),n.speed>.01){let I=n.pos.y,L=n.pos.x+n.vel.x*t,C=n.pos.z+n.vel.z*t;[L,C]=this.collide(L,C);let N=(D,O)=>i.slopeAt(D,O)>.95&&i.heightAt(D,O)>I+.02;N(L,C)&&(N(L,n.pos.z)?N(n.pos.x,C)?(L=n.pos.x,C=n.pos.z,n.vel.set(0,0,0)):L=n.pos.x:C=n.pos.z),n.pos.x=L,n.pos.z=C}let _=i.heightAt(n.pos.x,n.pos.z),w=n.swim?ee.waterY-.52+Math.sin(this.time*3)*.03:_;if(n.pos.y=ji(n.pos.y,w,16,t),n.pos.y<_&&!n.swim&&(n.pos.y=_),this.act&&this.act.face){let I=this.act.face.x-n.pos.x,L=this.act.face.z-n.pos.z;n.yaw+=_c(n.yaw,Math.atan2(I,L))*Math.min(1,t*12)}else n.speed>.25&&(n.yaw+=_c(n.yaw,Math.atan2(n.vel.x,n.vel.z))*Math.min(1,t*11));if((n.wade&&!M||n.swim&&!g)&&(this.audio.splash(),this.splash(n.pos.x,n.pos.z,1.4)),n.wade&&n.speed>.5?(this.rippleT-=t,this.rippleT<=0&&(this.rippleT=n.swim?.35:.22,this.ripple(n.pos.x,n.pos.z,n.swim?1.5:.9),Math.random()<.5&&this.splash(n.pos.x,n.pos.z,.4))):n.swim&&this.rippleT<=0&&(this.rippleT=.9,this.ripple(n.pos.x,n.pos.z,1.2)),this.act?this.updateAct(t):this.updateTarget(a),this.act||(n.swim?this.badi.play("Swim",.25,{speed:n.speed>.3?1.1:.55}):n.speed>.35?n.speed>4.6?this.badi.play("Run",.18,{speed:n.speed/6.2,syncPhase:this.badi.clipName==="Walk"}):this.badi.play("Walk",.18,{speed:Math.max(.6,n.speed/3.2),syncPhase:this.badi.clipName==="Run"}):this.badi.play("Idle",.25)),b&&n.speed>5&&!n.wade&&(this.dustT=(this.dustT||0)-t,this.dustT<=0)){this.dustT=.12;let I=Oe(.78,.7,.5);this.particles.emit({x:n.pos.x-n.vel.x*.05,y:n.pos.y+.08,z:n.pos.z-n.vel.z*.05,vx:-n.vel.x*.1+(Math.random()-.5)*.4,vy:.5,vz:-n.vel.z*.1+(Math.random()-.5)*.4,life:.7,size:.35,...I,a:.35,grav:-.2,drag:2,fade:2})}this.placePlayerVisual(),this.badi.pivot.rotation.z=n.swim?Math.sin(this.time*4)*.04:0,s.update(t,n.pos,o,!this.act||this.act.type!=="cheer"),this.saveT+=t,this.saveT>12&&(this.saveT=0,this.persist())}splash(t,e,n=1){let i=Oe(.85,.95,1);this.particles.burst(10*n,{x:t,y:ee.waterY+.1,z:e,size:.14,...i,a:.85,grav:9,drag:.6},1.6*n,2.2*n)}onStep(t){let e=this.player;this.audio.step(e.wade),!e.wade&&t==="Run"&&(this.camShakeStep=0)}updateTarget(t){let e=this.player.pos,n=this.ui,i=this.lodge,s=null,o=1e9,a=(m,x)=>{m<o&&(o=m,s=x)},l=this.logs.nearest(e.x,e.z,2);l&&a(Math.hypot(l.x-e.x,l.z-e.z)/2,{type:"log",item:l,x:l.x,z:l.z,y:l.y+1.2});let c=this.veg.nearestChoppable(e.x,e.z,2.1);c&&a((Math.hypot(c.x-e.x,c.z-e.z)-c.trunkR)/2.1,{type:"tree",tree:c,x:c.x,z:c.z,y:c.y+3*c.scale});let h=this.fishSpot(e.x,e.z);h&&a(1.25,{type:"fish",spot:h,x:h.x,z:h.z,y:ee.waterY+1.3});let u=this.res.nearest(e.x,e.z,2.1);if(u&&a(Math.hypot(u.x-e.x,u.z-e.z)/2.1,{type:"res",res:u,x:u.x,z:u.z,y:u.y}),i.done){let m=this.stockpile,x=Math.hypot(m.x-e.x,m.z-e.z);this.wood>0&&x<3.4&&a(x/3.4*.9,{type:"pile",x:m.x,z:m.z,y:m.y+2.2});let p=i.doorWorld,g=Math.hypot(p.x-e.x,p.z-e.z);g<2.6&&a(g/2.6*1.05,{type:"door",x:p.x,z:p.z,y:i.y+2.3})}else{let m=Math.hypot(i.x-e.x,i.z-e.z);m<5&&a(m/5*1.15,{type:"site",x:i.x,z:i.z,y:i.y+3.6})}if(this.target=s,!s){n.setAction(null,""),this.arrow.visible=!1;return}let d=this.arrow;d.visible=!0,d.position.set(s.x,s.y+Math.sin(this.time*4)*.12,s.z),d.rotation.y=this.time*2;let f=null;if(s.type==="log"?this.wood+s.item.wood>jo?(n.setAction("locked","S\u0131rt dolu"),f="S\u0131rt\u0131n dolu! Odunlar\u0131 yuvaya g\xF6t\xFCr."):n.setAction("log","Topla"):s.type==="tree"?n.setAction("tree","Kemir"):s.type==="res"?n.setAction(s.res.kind,s.res.kind==="stone"?"Ta\u015F topla":"Meyve topla"):s.type==="fish"?n.setAction("fish","Bal\u0131k tut"):s.type==="site"?this.wood>=De.woodPerStep?n.setAction("build","\u0130n\u015Fa et"):(n.setAction("locked","Odun laz\u0131m"),f="Yuva i\xE7in en az "+De.woodPerStep+" odun gerekli"):s.type==="pile"?n.setAction("log","Depola"):n.setAction("sleep",this.sky.night>.5||this.clock>=18?"Uyu":"Dinlen"),!!t){if(this.audio.unlock(),f){n.hint(f,2.5);return}s.type==="log"?this.startGather(s.item):s.type==="tree"?this.startGnaw(s.tree):s.type==="res"?this.startForage(s.res):s.type==="fish"?this.startFish(s.spot):s.type==="site"?this.startBuild():s.type==="pile"?this.startDeposit():this.startSleep()}}cancelAct(){this.act&&this.act.type==="fish"&&this.gear.show(!1),this.act=null}standPoint(t,e,n){let i=this.player.pos,s=i.x-t,o=i.z-e,a=Math.hypot(s,o)||1;return{x:t+s/a*n,z:e+o/a*n}}startGather(t){this.act={type:"gather",t:0,item:t,flew:!1,face:{x:t.x,z:t.z},walk:this.standPoint(t.x,t.z,.85)},this.badi.play("Gather",.15,{once:!0,speed:1.15}),this.arrow.visible=!1,this.ui.setAction(null,"")}fishSpot(t,e){let n=this.terrain;if(n.depthAt(t,e)>.12||n.heightAt(t,e)<.05)return null;let i=null,s=.5;for(let o=0;o<12;o++){let a=o/12*6.283;for(let l of[2.3,3.4]){let c=t+Math.sin(a)*l,h=e+Math.cos(a)*l,u=n.depthAt(c,h);u>s&&(s=u,i={x:c,z:h,a})}}return i}nearestShore(){let t=this.player.pos,e=this.terrain,n=rn(t.z),i=t.x<n?-1:1;for(let s=1;s<40;s+=.5){let o=n+i*s;if(e.depthAt(o,t.z)<.02&&e.heightAt(o,t.z)>.1&&e.slopeAt(o,t.z)<.5)return{x:o,z:t.z,y:e.heightAt(o,t.z)+2}}return{x:n+i*8,z:t.z,y:2}}startFish(t){this.act={type:"fish",t:0,phase:"cast",k:0,spot:t,wait:2+Math.random()*3.5,pt:0,bt:0,face:{x:t.x,z:t.z},bobT:0},this.badi.play("Sit",.3),this.gear.show(!0),this._bob=this._bob||new R,this._fb=this._fb||new R,this.arrow.visible=!1,this.ui.setAction("locked","Bekle\u2026"),this.ui.hint("\u015Eamand\u0131ra bat\u0131nca \xC7ek!'e bas. Y\xFCr\xFCrsen b\u0131rak\u0131rs\u0131n.",3.5)}updateFish(t,e){let n=this.player.pos,i=t.spot,s=this.ui,o=ee.waterY,a=this._bob,l=this._fb,c=Math.sin(this.player.yaw),h=Math.cos(this.player.yaw);l.set(n.x+c*.45+h*.28,n.y+.62,n.z+h*.45-c*.28);let u=this.wantAct;if(t.phase==="cast"){t.k=Math.min(1,t.k+e/.7);let d=l.x+c*1.2,f=l.y+1.3,m=l.z+h*1.2;a.set(d+(i.x-d)*t.k,f+(o+.05-f)*t.k+Math.sin(t.k*Math.PI)*1.2,m+(i.z-m)*t.k),t.k>=1&&(t.phase="wait",t.pt=0,this.ripple(i.x,i.z,.7),this.audio.splash())}else if(t.phase==="wait")t.pt+=e,a.set(i.x,o+.06+Math.sin(this.time*2.6)*.012,i.z),u?(s.toast("\xC7ok erken!"),t.pt=0,t.wait=2+Math.random()*3.5):t.pt>=t.wait&&(t.phase="bite",t.bt=0,this.audio.pop(),this.ripple(i.x,i.z,1.1),s.setAction("fish","\xC7ek!"),s.hint("Bal\u0131k geldi! \xC7ek!",1.4));else if(t.phase==="bite")t.bt+=e,a.set(i.x+Math.sin(this.time*31)*.02,o-.05+Math.sin(this.time*24)*.02,i.z),t.rip=(t.rip||0)-e,t.rip<=0&&(t.rip=.3,this.ripple(i.x,i.z,.8)),u?(t.phase="catch",t.ct=0,s.setAction("locked","\xC7ekiyor\u2026"),this.audio.splash(),this.splash(i.x,i.z,1.2),this.badi.play("Gather",.1,{once:!0,speed:1.3}),t.n=Math.random()<.7?1:Math.random()<.85?2:3):t.bt>1.15&&(s.toast("Ka\xE7t\u0131\u2026"),t.phase="wait",t.pt=0,t.wait=2+Math.random()*3.5,s.setAction("locked","Bekle\u2026"));else if(t.phase==="catch"){t.ct+=e;let d=Math.min(1,t.ct/.8),f=this.badi.packWorld(new R);f.y+=.4,this.gear.flyFish(new R(i.x,o+.1,i.z),f,d),a.set(i.x,o+.06,i.z),d>=1&&(this.gear.fish.visible=!1,this.audio.pickup(),this.particles.burst(10,{x:n.x,y:n.y+.9,z:n.z,size:.1,...Oe(.6,.85,1),a:1,grav:4,drag:1},1.2,1.6),this.addItem("fish",t.n),t.phase="wait",t.pt=0,t.wait=2+Math.random()*3.5,this.badi.play("Sit",.3),s.setAction("locked","Bekle\u2026"))}this.gear.update(l,c,h,a)}startForage(t){this.act={type:"forage",t:0,res:t,got:!1,face:{x:t.x,z:t.z},walk:this.standPoint(t.x,t.z,t.kind==="berry"?1.25:.8)},this.badi.play("Gather",.15,{once:!0,speed:1.15}),this.arrow.visible=!1,this.ui.setAction(null,"")}startGnaw(t){let e=this.veg.trunkAt(t);this.act={type:"gnaw",t:0,tree:t,hits:0,next:.6,end:0,face:{x:e.cx,z:e.cz},walk:this.standPoint(e.cx,e.cz,e.R+.47)},this.badi.play("Gnaw",.3),this.arrow.visible=!1,this.ui.setAction(null,"")}startBuild(){this.act={type:"build",t:0,knock:0,done:!1,face:{x:this.lodge.x,z:this.lodge.z}},this.badi.play("Build",.25),this.arrow.visible=!1,this.ui.setAction(null,"")}startDeposit(){let t=this.stockpile,e=this.wood;this.act={type:"deposit",t:0,n:e,thrown:0,done:!1,face:{x:t.x,z:t.z},walk:this.standPoint(t.x,t.z,2.1)},this.badi.play("Build",.25),this.arrow.visible=!1,this.ui.setAction(null,"")}startSleep(){let t=this.lodge;this.act={type:"sleep",t:0,phase:0,face:{x:t.x,z:t.z},entry:{x:t.x+2.7,z:t.z}},this.badi.play("Walk",.2,{speed:.9}),this.arrow.visible=!1,this.ui.setAction(null,"")}updateAct(t){let e=this.act,n=this.player.pos;if(e.t+=t,e.walk&&e.t<.6){let i=1-Math.exp(-11*t);n.x+=(e.walk.x-n.x)*i,n.z+=(e.walk.z-n.z)*i}if(e.type==="gather"){if(!e.flew&&e.t>=.5){let i=e.item;i.state==="ground"&&(i.state="fly",i.t=0,i.from=i.mesh.position.clone(),i.to=this.badi.packWorld(new R),this.audio.pickup()),e.flew=!0}e.t>=1&&(this.act=null)}else if(e.type==="fish")this.updateFish(e,t);else if(e.type==="forage"){if(!e.got&&e.t>=.5){e.got=!0;let i=e.res,s=i.n,o=i.kind;this.res.take(i),o==="stone"&&this.save.taken.push(i.item.key),this.audio.pickup();let a=o==="stone"?Oe(.8,.8,.78):Oe(.85,.2,.3);this.particles.burst(10,{x:i.x,y:i.y-.2,z:i.z,size:.1,shape:1,...a,a:1,grav:5,drag:1},1.4,2),this.addItem(o,s)}e.t>=1&&(this.act=null)}else if(e.type==="gnaw"){let i=e.tree;if(e.hits<3&&e.t>=e.next){e.hits++,e.next+=.9,this.veg.hit(i,n.x,n.z),this.audio.gnaw(),this.audio.hit();let s=Oe(.93,.76,.5),o=new R(n.x-i.x,0,n.z-i.z).normalize(),a=.33*i.scale;this.particles.burst(16,{x:i.x+o.x*a,y:i.y+1,z:i.z+o.z*a,vx:o.x*1.8,vz:o.z*1.8,size:.09,shape:1,...s,a:1,grav:9,drag:.8},1.6,2.2);let l=Oe(.5,.75,.3);this.particles.burst(4,{x:i.x,y:i.y+3.5*i.scale,z:i.z,size:.12,shape:1,...l,a:1,grav:1.5,drag:1},1.4,.4),this.fcam.shake(.05),e.hits>=3&&(e.end=e.t+1.8,this.audio.treeFall(),this.save.chopped.includes(i.id)||this.save.chopped.push(i.id))}if(e.chew=(e.chew||0)+t,e.chew>.25&&e.hits<3){e.chew=0;let s=new R(n.x-i.x,0,n.z-i.z).normalize(),o=.33*i.scale,a=Oe(.93,.76,.5);this.particles.burst(2,{x:i.x+s.x*o,y:i.y+.98,z:i.z+s.z*o,vx:s.x,vz:s.z,size:.06,shape:1,...a,a:1,grav:7,drag:.8},.9,1.2),this.audio.noise(.05,{freq:1800,q:2,vol:.12})}e.hits>=3&&e.t>=e.end&&(this.act=null,this.persist())}else if(e.type==="build"){let i=this.lodge;if(e.knock<2&&e.t>=.3+e.knock*.4){e.knock++;let s=this.badi.packWorld(new R),o=new R(i.x+(Math.random()-.5)*2.4,i.y+.9+Math.random()*.8,i.z+(Math.random()-.5)*2.4);this.badi.setCarry(this.wood-e.knock),this.logs.throwLog(s,o,0,a=>{this.audio.build(),this.dustAt(a.to.x,a.to.y,a.to.z)})}if(!e.done&&e.t>=1.1){e.done=!0,this.setWood(this.wood-De.woodPerStep),this.spent+=De.woodPerStep;let s=this.lodge.addStep(this.time);this.audio.pop(),this.fcam.shake(.04);let o=Oe(.8,.55,.3),a=s/De.steps*Math.PI/2;if(this.particles.burst(18,{x:i.x,y:i.y+Math.sin(a)*2.2,z:i.z,size:.12,shape:1,...o,a:1,grav:6,drag:.8},3,2.5),this.refreshQuest(),this.ui.toast("Yuva "+s+" / "+De.steps),this.persist(),s>=De.steps){this.celebrate();return}}e.t>=1.5&&(this.act=null,this.input.actionHeld&&this.wood>=De.woodPerStep&&Math.hypot(n.x-i.x,n.z-i.z)<5.4&&!i.done&&this.startBuild())}else if(e.type==="deposit"){let i=this.stockpile,s=Math.min(e.n,6);for(;e.thrown<s&&e.t>=.25+e.thrown*.13;){let o=this.badi.packWorld(new R),a=new R(i.x+(Math.random()-.5)*.8,i.y+.7,i.z+(Math.random()-.5)*.8);e.thrown++,this.badi.setCarry(Math.max(0,this.wood-Math.ceil(e.thrown*e.n/s))),this.logs.throwLog(o,a,0,()=>this.audio.bounce())}!e.done&&e.t>=.25+s*.13+.5&&(e.done=!0,this.stock+=e.n,this.setWood(0,!1),this.stockpile.set(this.stock,!1),this.ui.setStock(this.stock,!0),this.audio.pop(),this.ui.toast("Depoya +"+e.n+" odun"),this.refreshQuest(),this.persist()),e.t>=.25+s*.13+.9&&(this.act=null)}else e.type==="sleep"?this.updateSleep(e,t):e.type==="cheer"&&e.t>=3.2&&(this.act=null)}updateSleep(t,e){let n=this.player.pos,i=this.lodge,s=this.ui;if(t.phase===0){let o=t.entry.x-n.x,a=t.entry.z-n.z,l=Math.hypot(o,a);if(l>.12){let c=Math.min(l/e,2.4);n.x+=o/l*c*e,n.z+=a/l*c*e,this.player.yaw+=_c(this.player.yaw,Math.atan2(o,a))*Math.min(1,e*10)}(l<=.2||t.t>3)&&(t.phase=1,t.t=0,this.badi.root.visible=!1,this.sleep=!0,s.fade(!0,"Zzz\u2026"),this.audio.pop())}else if(t.phase===1){if(t.t>=.9){t.phase=2,t.t=0;let o=this.clock;t.from=o,t.to=o>=6&&o<18.5?19:o>=18.5?24+6.5:6.5,t.morning=!(o>=6&&o<18.5)}}else if(t.phase===2){let o=Math.min(1,t.t/2.4),a=o*o*(3-2*o);if(this.advanceClock(t.from+(t.to-t.from)*a),this.sky.setTime(this.clock),this.clockT=0,o>=1){t.phase=3,t.t=0,s.fade(!1);let l=i.doorWorld;n.x=l.x,n.z=l.z,n.y=this.terrain.heightAt(n.x,n.z),this.player.yaw=Math.PI/2,this.badi.root.visible=!0,this.badi.play("Idle",0),this.sleep=!1,this.fcam.yaw=this.yawBehind(),this.fcam.snap(new R(n.x,n.y+1.05,n.z)),this.save.slept=!0,this.refreshQuest()}}else t.phase===3&&(t.t>.3&&!t.said&&(t.said=!0,s.banner(t.morning?"G\xDCNAYDIN!":"AK\u015EAM OLDU",t.morning?"Badi dinlendi.":"G\xFCn batarken Badi yuvas\u0131nda dinlendi."),this.persist()),t.t>1.2&&(this.act=null))}dustAt(t,e,n){let i=Oe(.7,.6,.42);this.particles.burst(6,{x:t,y:e,z:n,size:.4,...i,a:.4,grav:-.3,drag:2,fade:2},.8,.4)}onCollected(t){this.setWood(this.wood+t.wood),this.ui.toast("+"+t.wood+" odun"),t.key&&t.key!=="drop"&&this.save.taken.push(t.key);let e=Oe(1,.9,.5),n=this.player.pos;this.particles.burst(8,{x:n.x,y:n.y+1,z:n.z,size:.12,...e,a:1,grav:-.5,drag:2},.8,.8),this.refreshQuest(),this.persist()}invTotal(){return this.inv.stone+this.inv.berry+this.inv.fish}addItem(t,e){this.inv[t]=(this.inv[t]|0)+e,this.ui.toast("+"+e+" "+MM[t]),this.ui.setBag(this.invTotal(),!0),this.refreshQuest(),this.persist()}onThud(t){this.audio.thud(),this.fcam.shake(.14);let e=t.fallDir,n=t.height,i=t.x+e.x*n*.55,s=t.z+e.z*n*.55,o=Oe(.7,.6,.4);this.particles.burst(20,{x:i,y:this.terrain.heightAt(i,s)+.2,z:s,size:.6,...o,a:.5,grav:-.3,drag:2,fade:2},2.4,.6);let a=[Oe(.5,.78,.3),Oe(.78,.85,.3)];for(let c=0;c<2;c++)this.particles.burst(14,{x:t.x+e.x*n*.8,y:t.y+1.2,z:t.z+e.z*n*.8,size:.14,shape:1,...a[c],a:1,grav:2.5,drag:1},3.5,2.2);let l=[[.5,2],[.82,1]];for(let[c,h]of l){let u=t.x+e.x*n*c+(Math.random()-.5)*1.2,d=t.z+e.z*n*c+(Math.random()-.5)*1.2;this.logs.spawn(u,d,h,{key:"drop",pop:{x:t.x+e.x*n*c*.6,y:t.y+.8,z:t.z+e.z*n*c*.6,sx:(u-(t.x+e.x*n*c*.6))*1.6,sz:(d-(t.z+e.z*n*c*.6))*1.6}})}this.persist()}celebrate(){let t=this.lodge;this.act={type:"cheer",t:0,face:{x:t.x,z:t.z}},this.badi.play("Cheer",.2),this.confetti=3.2,this.audio.fanfare(),this.ui.setStock(this.stock,!0),this.ui.banner("YUVA TAMAM!","Badi art\u0131k kendi evinde \u{1F389}"),this.ui.setAction(null,""),this.arrow.visible=!1;let e=this.fcam,n=e.yaw,i=e.dist,s=e.pitch,o=this.player.pos;e.playCine(5,(a,l)=>{let c=a*a*(3-2*a);l.yaw=n+c*1.9,l.pitch=Be(s,.28,Math.sin(c*Math.PI)*.8+c*.1),l.dist=Be(i,13.5,Math.sin(Math.min(1,a*1.2)*Math.PI/2));let h=Be(o.x,t.x,.55),u=Be(o.z,t.z,.55);l.look.set(h,t.y+1.4,u),l.focus.copy(l.look)},()=>{e.dist=he(e.dist,e.minD,e.maxD),e.focus.copy(e.look)}),this.refreshQuest(),this.persist()}simulate(t,e=1/30){let n=Math.round(t/e);for(let i=0;i<n;i++)this.step(e)}manualRender(){this.renderer.setAnimationLoop(null),this.renderer.render(this.scene,this.camera)}refreshQuest(t){this.quests.refresh(t)}advanceClock(t){let e=this.clock;this.clock=t%24,this.clock<e-12&&(this.day++,this.ui.toast("G\xFCn "+this.day))}nearestWoodSource(){let t=this.player.pos,e=null,n=1e9;for(let s of this.logs.items){if(s.state!=="ground")continue;let o=Math.hypot(s.x-t.x,s.z-t.z);o<n&&(n=o,e={x:s.x,z:s.z,y:s.y+1.2})}let i=this.veg.nearestChoppable(t.x,t.z,200);return i&&Math.hypot(i.x-t.x,i.z-t.z)<n&&(e={x:i.x,z:i.z,y:i.y+3*i.scale}),e}};window.__BV_VER="v6";var bM=new Yc(document.getElementById("c"));bM.init().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Y\xFCklenemedi: "+(r&&r.message?r.message:r))});})();
