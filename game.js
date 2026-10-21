(()=>{var rf=0,Ch=1,of=2;var ws=1,af=2,vr=3,ri=0,$e=1,De=2,oi=0,Mr=1,Po=2,Ih=3,Ph=4,cf=5;var As=100,lf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Lh=204,Dh=205,xf=206,_f=207,yf=208,vf=209,Mf=210,Sf=211,bf=212,Ef=213,Tf=214,Fa=0,Oa=1,Ba=2,er=3,za=4,ka=5,Ha=6,Va=7,mc=0,wf=1,Af=2,qn=0,Nh=1,Uh=2,Fh=3,Lo=4,Oh=5,Bh=6,zh=7,xh="attached",Rf="detached",kh=300,Yi=301,Rs=302,gc=303,xc=304,Do=306,Sn=1e3,In=1001,nr=1002,Be=1003,_c=1004;var Cs=1005;var ze=1006,Sr=1007;var Yn=1008;var _n=1009,Hh=1010,Vh=1011,br=1012,yc=1013,Kn=1014,Tn=1015,Zn=1016,vc=1017,Mc=1018,Er=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,wn=1023,ei=1026,Ki=1027,Sc=1028,bc=1029,Zi=1030,Ec=1031;var Tc=1033,No=33776,Uo=33777,Fo=33778,Oo=33779,wc=35840,Ac=35841,Rc=35842,Cc=35843,Ic=36196,Pc=37492,Lc=37496,Dc=37488,Nc=37489,Bo=37490,Uc=37491,Fc=37808,Oc=37809,Bc=37810,zc=37811,kc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Kc=37820,Zc=37821,Jc=36492,$c=36494,jc=36495,Qc=36283,tl=36284,zo=36285,el=36286,nl=2200,il=2201,Cf=2202,hs=2300,us=2301,Da=2302,_h=2303,os=2400,as=2401,$r=2402,sl=2500,If=2501,Yh=0,ko=1,Tr=2,Pf=3200;var Ho=0,Lf=1,Ii="",xe="srgb",dn="srgb-linear",jr="linear",_e="srgb";var Na=7680;var Df=519,Nf=512,Uf=513,Ff=514,rl=515,Of=516,Bf=517,ol=518,zf=519,Kh=35044,Vo=35048;var Zh="300 es",Gn=2e3,ir=2001;function nm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function im(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kf(){let r=sr("canvas");return r.style.display="block",r}var fd={},rr=null;function Qr(...r){let t="THREE."+r.shift();rr?rr("log",t,...r):console.log(t,...r)}function Hf(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ut(...r){r=Hf(r);let t="THREE."+r.shift();if(rr)rr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=Hf(r);let t="THREE."+r.shift();if(rr)rr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ls(...r){let t=r.join(" ");t in fd||(fd[t]=!0,Ut(...r))}function Vf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Gf={[Fa]:Oa,[Ba]:Ha,[za]:Va,[er]:ka,[Oa]:Fa,[Ha]:Ba,[Va]:za,[ka]:er},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,Yr=Math.PI/180,ds=180/Math.PI;function Pn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function Jh(r,t){return(r%t+t)%t}function sm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function rm(r,t,e){return r!==t?(e-r)/(t-r):0}function Kr(r,t,e){return(1-e)*r+e*t}function om(r,t,e,n){return Kr(r,t,1-Math.exp(-e*n))}function am(r,t=1){return t-Math.abs(Jh(r,t*2)-t)}function cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function lm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function hm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function um(r,t){return r+Math.random()*(t-r)}function dm(r){return r*(.5-Math.random())}function fm(r){r!==void 0&&(pd=r);let t=pd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pm(r){return r*Yr}function mm(r){return r*ds}function gm(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function xm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _m(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ym(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Go={DEG2RAD:Yr,RAD2DEG:ds,generateUUID:Pn,clamp:se,euclideanModulo:Jh,mapLinear:sm,inverseLerp:rm,lerp:Kr,damp:om,pingpong:am,smoothstep:cm,smootherstep:lm,randInt:hm,randFloat:um,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:xm,floorPowerOfTwo:_m,setQuaternionFromProperEuler:ym,normalize:ye,denormalize:Vn},nu=class nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nu.prototype.isVector2=!0;var ct=nu,ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(u!==x||c!==d||l!==f||h!==m){let p=c*d+l*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let S=Math.acos(p),b=Math.sin(S);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b,c=c*g+d*a,l=l*g+f*a,h=h*g+m*a,u=u*g+x*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+m*a,u=u*g+x*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},iu=class iu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(md.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};iu.prototype.isVector3=!0;var R=iu,Gl=new R,md=new ve,su=class su{constructor(t,e,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],S=i[1],b=i[4],y=i[7],M=i[2],E=i[5],A=i[8];return s[0]=o*x+a*S+c*M,s[3]=o*p+a*b+c*E,s[6]=o*g+a*y+c*A,s[1]=l*x+h*S+u*M,s[4]=l*p+h*b+u*E,s[7]=l*g+h*y+u*A,s[2]=d*x+f*S+m*M,s[5]=d*p+f*b+m*E,s[8]=d*g+f*y+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};su.prototype.isMatrix3=!0;var Jt=su,Wl=new Jt,gd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vm(){let r={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[dn]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),r}var ie=vm();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Fs,Ga=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=sr("canvas")),Fs.width=t.width,Fs.height=t.height;let i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mm=0,or=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Xl(i[o].image)):s.push(Xl(i[o]))}else s=Xl(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Xl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ga.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Sm=0,ql=new R,Je=class r extends Wn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=In,i=In,s=ze,o=Yn,a=wn,c=_n,l=r.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Pn(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=kh;Je.DEFAULT_ANISOTROPY=1;var ru=class ru{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(f+1)/2,M=(g+1)/2,E=(h+d)/4,A=(u+x)/4,_=(m+p)/4;return b>y&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=A/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=_/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=_/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;var Me=ru,Wa=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Je(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new or(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},to=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pc=class pc{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,p)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Os.setFromMatrixColumn(t,0).length(),s=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bm,t,Em)}lookAt(t,e,n){let i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(n,vn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(n,vn)),Fi.normalize(),ia.crossVectors(vn,Fi),i[0]=Fi.x,i[4]=ia.x,i[8]=vn.x,i[1]=Fi.y,i[5]=ia.y,i[9]=vn.y,i[2]=Fi.z,i[6]=ia.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],S=n[3],b=n[7],y=n[11],M=n[15],E=i[0],A=i[4],_=i[8],T=i[12],I=i[1],L=i[5],C=i[9],N=i[13],D=i[2],B=i[6],O=i[10],k=i[14],K=i[3],W=i[7],$=i[11],et=i[15];return s[0]=o*E+a*I+c*D+l*K,s[4]=o*A+a*L+c*B+l*W,s[8]=o*_+a*C+c*O+l*$,s[12]=o*T+a*N+c*k+l*et,s[1]=h*E+u*I+d*D+f*K,s[5]=h*A+u*L+d*B+f*W,s[9]=h*_+u*C+d*O+f*$,s[13]=h*T+u*N+d*k+f*et,s[2]=m*E+x*I+p*D+g*K,s[6]=m*A+x*L+p*B+g*W,s[10]=m*_+x*C+p*O+g*$,s[14]=m*T+x*N+p*k+g*et,s[3]=S*E+b*I+y*D+M*K,s[7]=S*A+b*L+y*B+M*W,s[11]=S*_+b*C+y*O+M*$,s[15]=S*T+b*N+y*k+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],S=c*f-l*d,b=a*f-l*u,y=a*d-c*u,M=o*f-l*h,E=o*d-c*h,A=o*u-a*h;return e*(x*S-p*b+g*y)-n*(m*S-p*M+g*E)+i*(m*b-x*M+g*A)-s*(m*y-x*E+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(s*h-a*c)+i*(s*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],S=e*a-n*o,b=e*c-i*o,y=e*l-s*o,M=n*c-i*a,E=n*l-s*a,A=i*l-s*c,_=h*x-u*m,T=h*p-d*m,I=h*g-f*m,L=u*p-d*x,C=u*g-f*x,N=d*g-f*p,D=S*N-b*C+y*L+M*I-E*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*N-c*C+l*L)*B,t[1]=(i*C-n*N-s*L)*B,t[2]=(x*A-p*E+g*M)*B,t[3]=(d*E-u*A-f*M)*B,t[4]=(c*I-o*N-l*T)*B,t[5]=(e*N-i*I+s*T)*B,t[6]=(p*y-m*A-g*b)*B,t[7]=(h*A-d*y+f*b)*B,t[8]=(o*C-a*I+l*_)*B,t[9]=(n*I-e*C-s*_)*B,t[10]=(m*E-x*y+g*S)*B,t[11]=(u*y-h*E-f*S)*B,t[12]=(a*T-o*L-c*_)*B,t[13]=(e*L-n*T+i*_)*B,t[14]=(x*b-m*M-p*S)*B,t[15]=(h*M-u*b+d*S)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,m=s*u,x=o*h,p=o*u,g=a*u,S=c*l,b=c*h,y=c*u,M=n.x,E=n.y,A=n.z;return i[0]=(1-(x+g))*M,i[1]=(f+y)*M,i[2]=(m-b)*M,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+g))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(m+b)*A,i[9]=(p-S)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Os.set(i[0],i[1],i[2]).length(),a=Os.set(i[4],i[5],i[6]).length(),c=Os.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Bn.copy(this);let l=1/o,h=1/a,u=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=Gn,c=!1){let l=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(c)m=s/(o-s),x=o*s/(o-s);else if(a===Gn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ir)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Gn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(c)m=1/(o-s),x=o/(o-s);else if(a===Gn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===ir)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};pc.prototype.isMatrix4=!0;var Ct=pc,Os=new R,Bn=new Ct,bm=new R(0,0,0),Em=new R(1,1,1),Fi=new R,ia=new R,vn=new R,_d=new Ct,yd=new ve,Ln=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _d.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yd.setFromEuler(this),this.setFromQuaternion(yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tm=0,vd=new R,Bs=new ve,fi=new Ct,sa=new R,Ur=new R,wm=new R,Am=new ve,Md=new R(1,0,0),Sd=new R(0,1,0),bd=new R(0,0,1),Ed={type:"added"},Rm={type:"removed"},zs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Ce=class r extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new Ln,n=new ve,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Jt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return vd.copy(t).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Ur,sa,this.up):fi.lookAt(sa,Ur,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(fi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ed),zs.child=t,this.dispatchEvent(zs),zs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rm),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ed),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new R(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fe=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cm={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Kl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Jh(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Kl(o,s,t+1/3),this.g=Kl(o,s,t),this.b=Kl(o,s,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=xe){function n(s){s!==void 0&&parseFloat(s)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=Wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return ie.workingToColorSpace(rn.copy(this),t),Math.round(se(rn.r*255,0,255))*65536+Math.round(se(rn.g*255,0,255))*256+Math.round(se(rn.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=xe){ie.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,i=rn.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(ra);let n=Kr(Oi.h,ra.h,e),i=Kr(Oi.s,ra.s,e),s=Kr(Oi.l,ra.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Mt;Mt.NAMES=Wf;var no=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var io=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new R,pi=new R,Zl=new R,mi=new R,ks=new R,Hs=new R,Td=new R,Jl=new R,$l=new R,jl=new R,Ql=new Me,th=new Me,eh=new Me,yi=class r{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){zn.subVectors(i,e),pi.subVectors(n,e),Zl.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(pi),c=zn.dot(Zl),l=pi.dot(pi),h=pi.dot(Zl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ql.setScalar(0),th.setScalar(0),eh.setScalar(0),Ql.fromBufferAttribute(t,e),th.fromBufferAttribute(t,n),eh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ql,s.x),o.addScaledVector(th,s.y),o.addScaledVector(eh,s.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),pi.subVectors(t,e),zn.cross(pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ks.subVectors(i,n),Hs.subVectors(s,n),Jl.subVectors(t,n);let c=ks.dot(Jl),l=Hs.dot(Jl);if(c<=0&&l<=0)return e.copy(n);$l.subVectors(t,i);let h=ks.dot($l),u=Hs.dot($l);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ks,o);jl.subVectors(t,s);let f=ks.dot(jl),m=Hs.dot(jl);if(m>=0&&f<=m)return e.copy(s);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Hs,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Td.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Td,a);let g=1/(p+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(ks,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),aa.subVectors(this.max,Fr),Vs.subVectors(t.a,Fr),Gs.subVectors(t.b,Fr),Ws.subVectors(t.c,Fr),Bi.subVectors(Gs,Vs),zi.subVectors(Ws,Gs),ns.subVectors(Vs,Ws);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ns.z,ns.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ns.z,0,-ns.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ns.y,ns.x,0];return!nh(e,Vs,Gs,Ws,aa)||(e=[1,0,0,0,1,0,0,0,1],!nh(e,Vs,Gs,Ws,aa))?!1:(ca.crossVectors(Bi,zi),e=[ca.x,ca.y,ca.z],nh(e,Vs,Gs,Ws,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new R,new R,new R,new R,new R,new R,new R,new R],kn=new R,oa=new bn,Vs=new R,Gs=new R,Ws=new R,Bi=new R,zi=new R,ns=new R,Fr=new R,aa=new R,ca=new R,is=new R;function nh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){is.fromArray(r,s);let a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qe=new R,la=new ct,Im=0,Zt=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var so=class extends Zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ro=class extends Zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends Zt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pm=new bn,Or=new R,ih=new R,pn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(ih)),this.expandByPoint(Or.copy(t.center).sub(ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lm=0,Cn=new Ct,sh=new Ce,Xs=new R,Mn=new bn,Br=new bn,en=new R,jt=class r extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nm(t)?ro:so)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Mn.min,Br.min),Mn.expandByPoint(en),en.addVectors(Mn.max,Br.max),Mn.expandByPoint(en)):(Mn.expandByPoint(Br.min),Mn.expandByPoint(Br.max))}Mn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(Xs.fromBufferAttribute(t,l),en.add(Xs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new R,c[_]=new R;let l=new R,h=new R,u=new R,d=new ct,f=new ct,m=new ct,x=new R,p=new R;function g(_,T,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,I),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,I),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(x),a[T].add(x),a[I].add(x),c[_].add(p),c[T].add(p),c[I].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,T=S.length;_<T;++_){let I=S[_],L=I.start,C=I.count;for(let N=L,D=L+C;N<D;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new R,y=new R,M=new R,E=new R;function A(_){M.fromBufferAttribute(i,_),E.copy(M);let T=a[_];b.copy(T),b.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(E,T);let L=y.dot(c[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,L)}for(let _=0,T=S.length;_<T;++_){let I=S[_],L=I.start,C=I.count;for(let N=L,D=L+C;N<D;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new Zt(d,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},un=new R,Vi=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Zt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rh=new R,Dm=new R,Nm=new Jt,Hn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rh.subVectors(n,e).cross(Dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(rh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nm.getNormalMatrix(t),i=this.coplanarPoint(rh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Um=0,on=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Mr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ps=class extends on{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qs,zr=new R,Ys=new R,Ks=new R,Zs=new ct,kr=new ct,Xf=new Ct,ha=new R,Hr=new R,ua=new R,wd=new ct,oh=new ct,Ad=new ct,cr=class extends Ce{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fs(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new Vi(n,3,0,!1)),qs.setAttribute("uv",new Vi(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Ks.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;da(ha.set(-.5,-.5,0),Ks,o,Ys,i,s),da(Hr.set(.5,-.5,0),Ks,o,Ys,i,s),da(ua.set(.5,.5,0),Ks,o,Ys,i,s),wd.set(0,0),oh.set(1,0),Ad.set(1,1);let a=t.ray.intersectTriangle(ha,Hr,ua,!1,zr);if(a===null&&(da(Hr.set(-.5,.5,0),Ks,o,Ys,i,s),oh.set(0,1),a=t.ray.intersectTriangle(ha,ua,Hr,!1,zr),a===null))return;let c=t.ray.origin.distanceTo(zr);c<t.near||c>t.far||e.push({distance:c,point:zr.clone(),uv:yi.getInterpolation(zr,ha,Hr,ua,wd,oh,Ad,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(r,t,e,n,i,s){Zs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(kr.x=s*Zs.x-i*Zs.y,kr.y=i*Zs.x+s*Zs.y):kr.copy(Zs),r.copy(t),r.x+=kr.x,r.y+=kr.y,r.applyMatrix4(Xf)}var xi=new R,ah=new R,fa=new R,pa=new R,ms=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ah.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),pa.copy(this.origin).sub(ah);let s=t.distanceTo(e)*.5,o=-this.direction.dot(fa),a=pa.dot(this.direction),c=-pa.dot(fa),l=pa.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ah).addScaledVector(fa,d),f}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,p=e.z-o.z,g=n.x-o.x,S=n.y-o.y,b=n.z-o.z,y=Math.abs(c),M=Math.abs(l),E=Math.abs(h),A,_,T,I,L,C,N,D,B,O,k,K;if(y>=M&&y>=E?(T=c,C=u,B=m,K=g,c>=0?(A=l,_=h,I=d,L=f,N=x,D=p,O=S,k=b):(A=h,_=l,I=f,L=d,N=p,D=x,O=b,k=S)):M>=E?(T=l,C=d,B=x,K=S,l>=0?(A=h,_=c,I=f,L=u,N=p,D=m,O=b,k=g):(A=c,_=h,I=u,L=f,N=m,D=p,O=g,k=b)):(T=h,C=f,B=p,K=b,h>=0?(A=c,_=l,I=u,L=d,N=m,D=x,O=g,k=S):(A=l,_=c,I=d,L=u,N=x,D=m,O=S,k=g)),T===0)return null;let W=A/T,$=_/T,et=1/T,j=I-W*C,tt=L-$*C,Rt=N-W*B,Vt=D-$*B,qt=O-W*K,Y=k-$*K,Q=qt*Vt-Y*Rt,ft=j*Y-tt*qt,zt=Rt*tt-Vt*j;if(i){if(Q<0||ft<0||zt<0)return null}else if((Q<0||ft<0||zt<0)&&(Q>0||ft>0||zt>0))return null;let Et=Q+ft+zt;if(Et===0)return null;let Gt=et*(Q*C+ft*B+zt*K);return(Et>0?Gt<0:Gt>0)?null:this.at(Gt/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends on{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rd=new Ct,ss=new ms,ma=new pn,Cd=new R,ga=new R,xa=new R,_a=new R,ch=new R,ya=new R,Id=new R,va=new R,It=class extends Ce{constructor(t=new jt,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(ch.fromBufferAttribute(u,t),o?ya.addScaledVector(ch,h):ya.addScaledVector(ch.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ss.copy(t.ray).recast(t.near),!(ma.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ma,Cd)===null||ss.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Rd.copy(s).invert(),ss.copy(t.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,M=b;y<M;y+=3){let E=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);i=Ma(this,g,t,n,l,h,u,E,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let S=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);i=Ma(this,o,t,n,l,h,u,S,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,M=b;y<M;y+=3){let E=y,A=y+1,_=y+2;i=Ma(this,g,t,n,l,h,u,E,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let S=p,b=p+1,y=p+2;i=Ma(this,o,t,n,l,h,u,S,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Fm(r,t,e,n,i,s,o,a){let c;if(t.side===$e?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ri,a),c===null)return null;va.copy(a),va.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(va);return l<e.near||l>e.far?null:{distance:l,point:va.clone(),object:r}}function Ma(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,ga),r.getVertexPosition(c,xa),r.getVertexPosition(l,_a);let h=Fm(r,t,e,n,ga,xa,_a,Id);if(h){let u=new R;yi.getBarycoord(Id,ga,xa,_a,u),i&&(h.uv=yi.getInterpolatedAttribute(i,a,c,l,u,new ct)),s&&(h.uv1=yi.getInterpolatedAttribute(s,a,c,l,u,new ct)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};yi.getNormal(ga,xa,_a,d.normal),h.face=d,h.barycoord=u}return h}var Vr=new Me,Pd=new Me,Ld=new Me,Om=new Me,Dd=new Ct,Sa=new R,lh=new pn,Nd=new Ct,hh=new ms,gs=class extends It{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new Ct,this.bindMatrixInverse=new Ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(i),t.ray.intersectsSphere(lh)!==!1&&(Nd.copy(i).invert(),hh.copy(t.ray).applyMatrix4(Nd),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,hh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ut("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Pd.fromBufferAttribute(i.attributes.skinIndex,t),Ld.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Vr.copy(e),e.set(0,0,0,0)):(Vr.set(...e,1),e.set(0,0,0)),Vr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Ld.getComponent(s);if(o!==0){let a=Pd.getComponent(s);Dd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Om.copy(Vr).applyMatrix4(Dd),o)}}return e.isVector4&&(e.w=Vr.w),e.applyMatrix4(this.bindMatrixInverse)}},lr=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},hr=class extends Je{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Be,h=Be,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ud=new Ct,Bm=new Ct,oo=class r{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ut("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ct)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ct;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:Bm;Ud.multiplyMatrices(a,e[s]),Ud.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new hr(e,t,t,wn,Tn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],o=e[s];o===void 0&&(Ut("Skeleton: No bone found with UUID:",s),o=new lr),this.bones.push(o),this.boneInverses.push(new Ct().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Mi=class extends Zt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new Ct,Fd=new Ct,ba=[],Od=new bn,zm=new Ct,Gr=new It,Wr=new pn,Pe=class extends It{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Od.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(Od)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Wr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),t.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Js),Fd.multiplyMatrices(n,Js),Gr.matrixWorld=Fd,Gr.raycast(t,ba);for(let o=0,a=ba.length;o<a;o++){let c=ba[o];c.instanceId=s,c.object=this,e.push(c)}ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(i*this.count),i,this.count,Sc,Tn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new pn,km=new ct(.5,.5),Ea=new R,ur=class{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,s=new Hn,o=new Hn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],p=s[10],g=s[11],S=s[12],b=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-o,f-h,g-m,M-S).normalize(),i[1].setComponents(l+o,f+h,g+m,M+S).normalize(),i[2].setComponents(l+a,f+u,g+x,M+b).normalize(),i[3].setComponents(l-a,f-u,g-x,M-b).normalize(),n)i[4].setComponents(c,d,p,y).normalize(),i[5].setComponents(l-c,f-d,g-p,M-y).normalize();else if(i[4].setComponents(l-c,f-d,g-p,M-y).normalize(),e===Gn)i[5].setComponents(l+c,f+d,g+p,M+y).normalize();else if(e===ir)i[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=km.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends on{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new R,Ya=new R,Bd=new Ct,Xr=new ms,Ta=new pn,uh=new R,zd=new R,xs=class extends Ce{constructor(t=new jt,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)qa.fromBufferAttribute(e,i-1),Ya.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new Ft(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,t.ray.intersectsSphere(Ta)===!1)return;Bd.copy(i).invert(),Xr.copy(t.ray).applyMatrix4(Bd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=l){let g=h.getX(x),S=h.getX(x+1),b=wa(this,t,Xr,c,g,S,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=wa(this,t,Xr,c,x,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=l){let g=wa(this,t,Xr,c,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=wa(this,t,Xr,c,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wa(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(qa.fromBufferAttribute(a,i),Ya.fromBufferAttribute(a,s),e.distanceSqToSegment(qa,Ya,uh,zd)>n)return;uh.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(uh);if(!(l<t.near||l>t.far))return{distance:l,point:zd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var kd=new R,Hd=new R,ao=class extends xs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)kd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kd.distanceTo(Hd);t.setAttribute("lineDistance",new Ft(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},co=class extends xs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Gi=class extends on{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vd=new Ct,yh=new ms,Aa=new pn,Ra=new R,Si=class extends Ce{constructor(t=new jt,e=new Gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,t.ray.intersectsSphere(Aa)===!1)return;Vd.copy(i).invert(),yh.copy(t.ray).applyMatrix4(Vd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let p=l.getX(m);Ra.fromBufferAttribute(u,p),Gd(Ra,p,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Ra.fromBufferAttribute(u,m),Gd(Ra,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Gd(r,t,e,n,i,s,o){let a=yh.distanceSqToPoint(r);if(a<e){let c=new R;yh.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var lo=class extends Je{constructor(t=[],e=Yi,n,i,s,o,a,c,l,h){super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xn=class extends Je{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends Je{constructor(t,e,n=Kn,i,s,o,a=Be,c=Be,l,h=ei,u=1){if(h!==ei&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ka=class extends Wi{constructor(t,e=Kn,n=Yi,i,s,o=Be,a=Be,c,l=ei){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ho=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class r extends jt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(x,p,g,S,b,y,M,E,A,_,T){let I=y/A,L=M/_,C=y/2,N=M/2,D=E/2,B=A+1,O=_+1,k=0,K=0,W=new R;for(let $=0;$<O;$++){let et=$*L-N;for(let j=0;j<B;j++){let tt=j*I-C;W[x]=tt*S,W[p]=et*b,W[g]=D,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(j/A),u.push(1-$/_),k+=1}}for(let $=0;$<_;$++)for(let et=0;et<A;et++){let j=d+et+B*$,tt=d+et+B*($+1),Rt=d+(et+1)+B*($+1),Vt=d+(et+1)+B*$;c.push(j,tt,Vt),c.push(tt,Rt,Vt),K+=6}a.addGroup(f,K,T),f+=K,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},uo=class r extends jt{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+s,x=i+1,p=new R,g=new R;for(let S=0;S<=m;S++){let b=0,y=0,M=0,E=0;if(S<=n){let T=S/n,I=T*Math.PI/2;y=-h-t*Math.cos(I),M=t*Math.sin(I),E=-t*Math.cos(I),b=T*u}else if(S<=n+s){let T=(S-n)/s;y=-h+T*e,M=t,E=0,b=u+T*d}else{let T=(S-n-s)/n,I=T*Math.PI/2;y=h+t*Math.sin(I),M=t*Math.cos(I),E=t*Math.sin(I),b=u+d+T*u}let A=Math.max(0,Math.min(1,b/f)),_=0;S===0?_=.5/i:S===m&&(_=-.5/i);for(let T=0;T<=i;T++){let I=T/i,L=I*Math.PI*2,C=Math.sin(L),N=Math.cos(L);g.x=-M*N,g.y=y,g.z=M*C,a.push(g.x,g.y,g.z),p.set(-M*N,E,M*C),p.normalize(),c.push(p.x,p.y,p.z),l.push(I+_,A)}if(S>0){let T=(S-1)*x;for(let I=0;I<i;I++){let L=T+I,C=T+I+1,N=S*x+I,D=S*x+I+1;o.push(L,C,N),o.push(C,D,N)}}}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},bi=class r extends jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class r extends jt{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function S(){let y=new R,M=new R,E=0,A=(e-t)/n;for(let _=0;_<=s;_++){let T=[],I=_/s,L=I*(e-t)+t;for(let C=0;C<=i;C++){let N=C/i,D=N*c+a,B=Math.sin(D),O=Math.cos(D);M.x=L*B,M.y=-I*n+p,M.z=L*O,u.push(M.x,M.y,M.z),y.set(B,A,O).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-I),T.push(m++)}x.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){let I=x[T][_],L=x[T+1][_],C=x[T+1][_+1],N=x[T][_+1];(t>0||T!==0)&&(h.push(I,L,N),E+=3),(e>0||T!==s-1)&&(h.push(L,C,N),E+=3)}l.addGroup(g,E,0),g+=E}function b(y){let M=m,E=new ct,A=new R,_=0,T=y===!0?t:e,I=y===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),m++;let L=m;for(let C=0;C<=i;C++){let D=C/i*c+a,B=Math.cos(D),O=Math.sin(D);A.x=T*O,A.y=p*I,A.z=T*B,u.push(A.x,A.y,A.z),d.push(0,I,0),E.x=B*.5+.5,E.y=O*.5*I+.5,f.push(E.x,E.y),m++}for(let C=0;C<i;C++){let N=M+C,D=L+C;y===!0?h.push(D,D+1,N):h.push(D+1,D,N),_+=3}l.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ni=class r extends Ne{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class r extends jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(s.slice(),3)),this.setAttribute("uv",new Ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new R,y=new R,M=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],y),f(e[E+2],M),c(b,y,M,S)}function c(S,b,y,M){let E=M+1,A=[];for(let _=0;_<=E;_++){A[_]=[];let T=S.clone().lerp(y,_/E),I=b.clone().lerp(y,_/E),L=E-_;for(let C=0;C<=L;C++)C===0&&_===E?A[_][C]=T:A[_][C]=T.clone().lerp(I,C/L)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let I=Math.floor(T/2);T%2===0?(d(A[_][I+1]),d(A[_+1][I]),d(A[_][I])):(d(A[_][I+1]),d(A[_+1][I+1]),d(A[_+1][I]))}}function l(S){let b=new R;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(S),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){let S=new R;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];let y=p(S)/2/Math.PI+.5,M=g(S)/Math.PI+.5;o.push(y,1-M)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let b=o[S+0],y=o[S+2],M=o[S+4],E=Math.max(b,y,M),A=Math.min(b,y,M);E>.9&&A<.1&&(b<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function f(S,b){let y=S*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function m(){let S=new R,b=new R,y=new R,M=new R,E=new ct,A=new ct,_=new ct;for(let T=0,I=0;T<s.length;T+=9,I+=6){S.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),E.set(o[I+0],o[I+1]),A.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),M.copy(S).add(b).add(y).divideScalar(3);let L=p(M);x(E,I+0,S,L),x(A,I+2,b,L),x(_,I+4,y,L)}}function x(S,b,y,M){M<0&&S.x===1&&(o[b]=S.x-1),y.x===0&&y.z===0&&(o[b]=M/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ct:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],s=[],o=[],a=new R,c=new Ct;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(se(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends En{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ja=class extends fr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $h(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Wd=new R,Xd=new R,dh=new $h,fh=new $h,ph=new $h,pr=class extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Xd.subVectors(i[0],i[1]).add(i[0]),l=Xd);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Wd.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),dh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,p),fh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,p),ph.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ph.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(dh.calc(c),fh.calc(c),ph.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qd(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Hm(r,t){let e=1-r;return e*e*t}function Vm(r,t){return 2*(1-r)*r*t}function Gm(r,t){return r*r*t}function Zr(r,t,e,n){return Hm(r,t)+Vm(r,e)+Gm(r,n)}function Wm(r,t){let e=1-r;return e*e*e*t}function Xm(r,t){let e=1-r;return 3*e*e*r*t}function qm(r,t){return 3*(1-r)*r*r*t}function Ym(r,t){return r*r*r*t}function Jr(r,t,e,n,i){return Wm(r,t)+Xm(r,e)+qm(r,n)+Ym(r,i)}var fo=class extends En{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,i.x,s.x,o.x,a.x),Jr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends En{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,i.x,s.x,o.x,a.x),Jr(t,i.y,s.y,o.y,a.y),Jr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends En{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends En{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends En{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Zr(t,i.x,s.x,o.x),Zr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends En{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Zr(t,i.x,s.x,o.x),Zr(t,i.y,s.y,o.y),Zr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qd(a,c.x,l.x,h.x,u.x),qd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ct().fromArray(i))}return this}},Qa=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:pr,CubicBezierCurve:fo,CubicBezierCurve3:$a,EllipseCurve:fr,LineCurve:po,LineCurve3:ja,QuadraticBezierCurve:mo,QuadraticBezierCurve3:go,SplineCurve:xo}),tc=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Qa[i.type]().fromJSON(i))}return this}},_o=class extends tc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new po(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new mo(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new fo(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){let l=new fr(t,e,n,i,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_s=class extends _o{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new _o().fromJSON(i))}return this}};function Km(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=qf(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Qm(r,t,s,e)),r.length>80*e){a=r[0],c=r[1];let h=a,u=c;for(let d=e;d<i;d+=e){let f=r[d],m=r[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return yo(s,o,e,a,c,l,0),o}function qf(r,t,e,n,i){let s;if(i===h0(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=Yd(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Yd(o/n|0,r[o],r[o+1],s);return s&&mr(s,s.next)&&(Mo(s),s=s.next),s}function ys(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Le(e.prev,e,e.next)===0)){if(Mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&s0(r,n,i,s);let a=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?Jm(r,n,i,s):Zm(r)){t.push(c.i,r.i,l.i),Mo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=$m(ys(r),t),yo(r,t,e,n,i,s,2)):o===2&&jm(r,t,e,n,i,s):yo(ys(r),t,e,n,i,s,1);break}}}function Zm(r){let t=r.prev,e=r,n=r.next;if(Le(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,s,o),u=Math.min(a,c,l),d=Math.max(i,s,o),f=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&qr(i,a,s,c,o,l,m.x,m.y)&&Le(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jm(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Le(i,s,o)>=0)return!1;let a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),x=Math.max(a,c,l),p=Math.max(h,u,d),g=vh(f,m,t,e,n),S=vh(x,p,t,e,n),b=r.prevZ,y=r.nextZ;for(;b&&b.z>=g&&y&&y.z<=S;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&qr(a,h,c,u,l,d,b.x,b.y)&&Le(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&qr(a,h,c,u,l,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&qr(a,h,c,u,l,d,b.x,b.y)&&Le(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&qr(a,h,c,u,l,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $m(r,t){let e=r;do{let n=e.prev,i=e.next.next;!mr(n,i)&&Kf(n,e,e.next,i)&&vo(n,i)&&vo(i,n)&&(t.push(n.i,e.i,i.i),Mo(e),Mo(e.next),e=r=i),e=e.next}while(e!==r);return ys(e)}function jm(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a0(o,a)){let c=Zf(o,a);o=ys(o,o.next),c=ys(c,c.next),yo(o,t,e,n,i,s,0),yo(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Qm(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=qf(r,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(o0(l))}i.sort(t0);for(let s=0;s<i.length;s++)e=e0(i[s],e);return e}function t0(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function e0(r,t){let e=n0(r,t);if(!e)return t;let n=Zf(e,r);return ys(n,n.next),ys(e,e.next)}function n0(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(mr(r,e))return e;do{if(mr(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Yf(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);vo(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&i0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function i0(r,t){return Le(r.prev,r,t.prev)<0&&Le(t.next,r,r.next)<0}function s0(r,t,e,n){let i=r;do i.z===0&&(i.z=vh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,r0(i)}function r0(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function vh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function o0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Yf(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function qr(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Yf(r,t,e,n,i,s,o,a)}function a0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!c0(r,t)&&(vo(r,t)&&vo(t,r)&&l0(r,t)&&(Le(r.prev,r,t.prev)||Le(r,t.prev,t))||mr(r,t)&&Le(r.prev,r,r.next)>0&&Le(t.prev,t,t.next)>0)}function Le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function mr(r,t){return r.x===t.x&&r.y===t.y}function Kf(r,t,e,n){let i=Ia(Le(r,t,e)),s=Ia(Le(r,t,n)),o=Ia(Le(e,n,r)),a=Ia(Le(e,n,t));return!!(i!==s&&o!==a||i===0&&Ca(r,e,t)||s===0&&Ca(r,n,t)||o===0&&Ca(e,r,n)||a===0&&Ca(e,t,n))}function Ca(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ia(r){return r>0?1:r<0?-1:0}function c0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function vo(r,t){return Le(r.prev,r,r.next)<0?Le(r,t,r.next)>=0&&Le(r,r.prev,t)>=0:Le(r,t,r.prev)<0||Le(r,r.next,t)<0}function l0(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Zf(r,t){let e=Mh(r.i,r.x,r.y),n=Mh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yd(r,t,e,n){let i=Mh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Mh(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Sh=class{static triangulate(t,e,n=2){return Km(t,e,n)}},cs=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Kd(t),Zd(n,t);let o=t.length;e.forEach(Kd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Zd(n,e[c]);let a=Sh.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Kd(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Zd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var gr=class r extends jt{constructor(t=new _s([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ft(i,3)),this.setAttribute("uv",new Ft(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:u0,b,y=!1,M,E,A,_;if(g){b=g.getSpacedPoints(h),y=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,it),E=new R,A=new R,_=new R}d||(p=0,f=0,m=0,x=0);let T=a.extractPoints(l),I=T.shape,L=T.holes;if(!cs.isClockWise(I)){I=I.reverse();for(let it=0,at=L.length;it<at;it++){let lt=L[it];cs.isClockWise(lt)&&(L[it]=lt.reverse())}}function N(it){let lt=10000000000000001e-36,ht=it[0];for(let pt=1;pt<=it.length;pt++){let Wt=pt%it.length,Ht=it[Wt],Kt=Ht.x-ht.x,$t=Ht.y-ht.y,U=Kt*Kt+$t*$t,pe=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(ht.x),Math.abs(ht.y)),oe=lt*pe*pe;if(U<=oe){it.splice(Wt,1),pt--;continue}ht=Ht}}N(I),L.forEach(N);let D=L.length,B=I;for(let it=0;it<D;it++){let at=L[it];I=I.concat(at)}function O(it,at,lt){return at||Yt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(at,lt)}let k=I.length;function K(it,at,lt){let ht,pt,Wt,Ht=it.x-at.x,Kt=it.y-at.y,$t=lt.x-it.x,U=lt.y-it.y,pe=Ht*Ht+Kt*Kt,oe=Ht*U-Kt*$t;if(Math.abs(oe)>Number.EPSILON){let P=Math.sqrt(pe),v=Math.sqrt($t*$t+U*U),H=at.x-Kt/P,X=at.y+Ht/P,Z=lt.x-U/v,ut=lt.y+$t/v,dt=((Z-H)*U-(ut-X)*$t)/(Ht*U-Kt*$t);ht=H+Ht*dt-it.x,pt=X+Kt*dt-it.y;let J=ht*ht+pt*pt;if(J<=2)return new ct(ht,pt);Wt=Math.sqrt(J/2)}else{let P=!1;Ht>Number.EPSILON?$t>Number.EPSILON&&(P=!0):Ht<-Number.EPSILON?$t<-Number.EPSILON&&(P=!0):Math.sign(Kt)===Math.sign(U)&&(P=!0),P?(ht=-Kt,pt=Ht,Wt=Math.sqrt(pe)):(ht=Ht,pt=Kt,Wt=Math.sqrt(pe/2))}return new ct(ht/Wt,pt/Wt)}let W=[];for(let it=0,at=B.length,lt=at-1,ht=it+1;it<at;it++,lt++,ht++)lt===at&&(lt=0),ht===at&&(ht=0),W[it]=K(B[it],B[lt],B[ht]);let $=[],et,j=W.concat();for(let it=0,at=D;it<at;it++){let lt=L[it];et=[];for(let ht=0,pt=lt.length,Wt=pt-1,Ht=ht+1;ht<pt;ht++,Wt++,Ht++)Wt===pt&&(Wt=0),Ht===pt&&(Ht=0),et[ht]=K(lt[ht],lt[Wt],lt[Ht]);$.push(et),j=j.concat(et)}let tt;if(p===0)tt=cs.triangulateShape(B,L);else{let it=[],at=[];for(let lt=0;lt<p;lt++){let ht=lt/p,pt=f*Math.cos(ht*Math.PI/2),Wt=m*Math.sin(ht*Math.PI/2)+x;for(let Ht=0,Kt=B.length;Ht<Kt;Ht++){let $t=O(B[Ht],W[Ht],Wt);ft($t.x,$t.y,-pt),ht===0&&it.push($t)}for(let Ht=0,Kt=D;Ht<Kt;Ht++){let $t=L[Ht];et=$[Ht];let U=[];for(let pe=0,oe=$t.length;pe<oe;pe++){let P=O($t[pe],et[pe],Wt);ft(P.x,P.y,-pt),ht===0&&U.push(P)}ht===0&&at.push(U)}}tt=cs.triangulateShape(it,at)}let Rt=tt.length,Vt=m+x;for(let it=0;it<k;it++){let at=d?O(I[it],j[it],Vt):I[it];y?(A.copy(M.normals[0]).multiplyScalar(at.x),E.copy(M.binormals[0]).multiplyScalar(at.y),_.copy(b[0]).add(A).add(E),ft(_.x,_.y,_.z)):ft(at.x,at.y,0)}for(let it=1;it<=h;it++)for(let at=0;at<k;at++){let lt=d?O(I[at],j[at],Vt):I[at];y?(A.copy(M.normals[it]).multiplyScalar(lt.x),E.copy(M.binormals[it]).multiplyScalar(lt.y),_.copy(b[it]).add(A).add(E),ft(_.x,_.y,_.z)):ft(lt.x,lt.y,u/h*it)}for(let it=p-1;it>=0;it--){let at=it/p,lt=f*Math.cos(at*Math.PI/2),ht=m*Math.sin(at*Math.PI/2)+x;for(let pt=0,Wt=B.length;pt<Wt;pt++){let Ht=O(B[pt],W[pt],ht);ft(Ht.x,Ht.y,u+lt)}for(let pt=0,Wt=L.length;pt<Wt;pt++){let Ht=L[pt];et=$[pt];for(let Kt=0,$t=Ht.length;Kt<$t;Kt++){let U=O(Ht[Kt],et[Kt],ht);y?ft(U.x,U.y+b[h-1].y,b[h-1].x+lt):ft(U.x,U.y,u+lt)}}}qt(),Y();function qt(){let it=i.length/3;if(d){let at=0,lt=k*at;for(let ht=0;ht<Rt;ht++){let pt=tt[ht];zt(pt[2]+lt,pt[1]+lt,pt[0]+lt)}at=h+p*2,lt=k*at;for(let ht=0;ht<Rt;ht++){let pt=tt[ht];zt(pt[0]+lt,pt[1]+lt,pt[2]+lt)}}else{for(let at=0;at<Rt;at++){let lt=tt[at];zt(lt[2],lt[1],lt[0])}for(let at=0;at<Rt;at++){let lt=tt[at];zt(lt[0]+k*h,lt[1]+k*h,lt[2]+k*h)}}n.addGroup(it,i.length/3-it,0)}function Y(){let it=i.length/3,at=0;Q(B,at),at+=B.length;for(let lt=0,ht=L.length;lt<ht;lt++){let pt=L[lt];Q(pt,at),at+=pt.length}n.addGroup(it,i.length/3-it,1)}function Q(it,at){let lt=it.length;for(;--lt>=0;){let ht=lt,pt=lt-1;pt<0&&(pt=it.length-1);for(let Wt=0,Ht=h+p*2;Wt<Ht;Wt++){let Kt=k*Wt,$t=k*(Wt+1),U=at+ht+Kt,pe=at+pt+Kt,oe=at+pt+$t,P=at+ht+$t;Et(U,pe,oe,P)}}}function ft(it,at,lt){c.push(it),c.push(at),c.push(lt)}function zt(it,at,lt){Gt(it),Gt(at),Gt(lt);let ht=i.length/3,pt=S.generateTopUV(n,i,ht-3,ht-2,ht-1);de(pt[0]),de(pt[1]),de(pt[2])}function Et(it,at,lt,ht){Gt(it),Gt(at),Gt(ht),Gt(at),Gt(lt),Gt(ht);let pt=i.length/3,Wt=S.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);de(Wt[0]),de(Wt[1]),de(Wt[3]),de(Wt[1]),de(Wt[2]),de(Wt[3])}function Gt(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function de(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qa[i.type]().fromJSON(i)),new r(n,t.options)}},u0={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ct(s,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[s*3],p=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(d,1-m),new ct(x,1-g)]:[new ct(a,1-c),new ct(h,1-u),new ct(f,1-m),new ct(p,1-g)]}};function d0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ei=class r extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var So=class r extends jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let S=g*d-o;for(let b=0;b<l;b++){let y=b*u-s;m.push(y,-S,0),x.push(0,0,1),p.push(b/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){let b=S+l*g,y=S+l*(g+1),M=S+1+l*(g+1),E=S+1+l*g;f.push(b,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},vs=class r extends jt{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new R,m=new ct;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let g=s+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let p=x*(n+1);for(let g=0;g<n;g++){let S=g+p,b=S,y=S+n+1,M=S+n+2,E=S+1;a.push(b,y,E),a.push(y,M,E)}}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var an=class r extends jt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let S=[],b=g/n,y=o+b*a,M=t*Math.cos(y),E=Math.sqrt(t*t-M*M),A=0;g===0&&o===0?A=.5/e:g===n&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=i+T*s;u.x=-E*Math.cos(I),u.y=M,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(T+A,1-b),S.push(l++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let b=h[g][S+1],y=h[g][S],M=h[g+1][S],E=h[g+1][S+1];(g!==0||o>0)&&f.push(b,y,E),(g!==n-1||c<Math.PI)&&f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xr=class r extends jt{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new R,f=new R,m=new R;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let g=0;g<=i;g++){let S=g/i*s;f.x=(t+e*Math.cos(p))*Math.cos(S),f.y=(t+e*Math.cos(p))*Math.sin(S),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){let g=(i+1)*x+p-1,S=(i+1)*(x-1)+p-1,b=(i+1)*(x-1)+p,y=(i+1)*x+p;c.push(g,S,y),c.push(S,b,y)}this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var bo=class r extends jt{constructor(t=new go(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new ct,h=new R,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function x(){for(let b=0;b<e;b++)p(b);p(s===!1?e:0),S(),g()}function p(b){h=t.getPointAt(b/e,h);let y=o.normals[b],M=o.binormals[b];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);c.x=T*y.x+_*M.x,c.y=T*y.y+_*M.y,c.z=T*y.z+_*M.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=i;y++){let M=(i+1)*(b-1)+(y-1),E=(i+1)*b+(y-1),A=(i+1)*b+y,_=(i+1)*(b-1)+y;m.push(M,E,_),m.push(E,A,_)}}function S(){for(let b=0;b<=e;b++)for(let y=0;y<=i;y++)l.x=b/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Qa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Is(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Jd(i))i.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Jd(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(r){let t={};for(let e=0;e<r.length;e++){let n=Is(r[e]);for(let i in n)t[i]=n[i]}return t}function Jd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function f0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function jh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var wr={clone:Is,merge:cn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends on{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ec=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends on{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gn=class extends ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Dn=class extends on{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},nc=class extends on{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ic=class extends on{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hi(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ua(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function g0(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function $d(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function x0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}var ii=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sc=class extends ii{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case as:s=t,a=2*e-n;break;case $r:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case as:o=t,c=2*n-e;break;case $r:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,S=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+S*o[l+M]+b*o[c+M]+y*o[u+M];return s}},Eo=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},rc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},oc=class extends ii{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==a;++p)s[p]=o[l+p]*x+o[c+p]*m;return s}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[l+m],p=o[c+m],g=f*d+m*2,S=u[g],b=u[g+1],y=t*d+m*2,M=h[y],E=h[y+1],A=y0(n,e,S,M,i);s[m]=Jf(A,x,b,E,p)}return s}};function Jf(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function _0(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function y0(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=Jf(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let c=_0(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hi(e,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hi(t.times,Array),values:Hi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ua(t.settings)&&(n.settings={inTangents:Hi(t.settings.inTangents,Array),outTangents:Hi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hs:e=this.InterpolantFactoryMethodDiscrete;break;case us:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case _h:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ua(this.settings)&&(jd(this.settings.inTangents,t),jd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Yt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&im(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ua(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function jd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=us;var Ti=class extends xn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=hs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};To.prototype.ValueTypeName="color";var wi=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};wi.prototype.ValueTypeName="number";var ac=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)ve.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ai=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends xn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=hs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};Xi.prototype.ValueTypeName="vector";var Ms=class{constructor(t="",e=-1,n=[],i=sl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(M0(n[o]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=g0(c);c=$d(c,1,h),l=$d(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new wi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function v0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return To;case"quaternion":return Ai;case"bool":case"boolean":return Ti;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function M0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=v0(r.type);if(r.times===void 0){let n=[],i=[];x0(r.keys,n,i,"value"),r.times=n,r.values=i}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Ua(r.settings)&&(e.settings={inTangents:Hi(r.settings.inTangents,Float32Array),outTangents:Hi(r.settings.outTangents,Float32Array)}),e}var ti={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Qd(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Qd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Qd(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var cc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$f=new cc,si=class{constructor(t){this.manager=t!==void 0?t:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},bh=class extends Error{constructor(t,e){super(t),this.response=e}},_r=class extends si{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=ti.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:n,onError:i});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,p=new ReadableStream({start(g){S();function S(){u.read().then(({done:b,value:y})=>{if(b)g.close();else{x+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let E=0,A=h.length;E<A;E++){let _=h[E];_.onProgress&&_.onProgress(M)}g.enqueue(y),S()}},b=>{g.error(b)})}}});return new Response(p)}else throw new bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ti.add(`file:${t}`,l);let h=_i[t];delete _i[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=_i[t];if(h===void 0)throw this.manager.itemError(t),l;delete _i[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $s=new WeakMap,lc=class extends si{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ti.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=$s.get(o);u===void 0&&(u=[],$s.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=sr("img");function c(){h(),e&&e(this);let u=$s.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}$s.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),ti.remove(`image:${t}`);let d=$s.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}$s.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ti.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ss=class extends si{constructor(t){super(t)}load(t,e,n,i){let s=new Je,o=new lc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},bs=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wo=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mh=new Ct,tf=new R,ef=new R,yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mh,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===ir||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pa=new R,La=new ve,Qn=new R,Ao=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pa,La,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pa,La,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new R,nf=new ct,sf=new ct,Ye=class extends Ao{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,nf,sf),e.subVectors(sf,nf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Eh=class extends yr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ds*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ro=class extends bs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Eh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Th=class extends yr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends bs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qi=class extends Ao{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wh=class extends yr{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ci=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var gh=new WeakMap,Co=class extends si{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ut("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ut("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ti.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{gh.has(o)===!0?(i&&i(gh.get(o)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(l),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),gh.set(c,l),ti.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ti.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var js=-90,Qs=1,hc=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ye(js,Qs,t,e);i.layers=this.layers,this.add(i);let s=new Ye(js,Qs,t,e);s.layers=this.layers,this.add(s);let o=new Ye(js,Qs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(js,Qs,t,e);a.layers=this.layers,this.add(a);let c=new Ye(js,Qs,t,e);c.layers=this.layers,this.add(c);let l=new Ye(js,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},uc=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dc=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ve.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let o=this._workIndex*s;ve.multiplyQuaternionsFlat(t,o,t,e,t,n),ve.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Qh="\\[\\]\\.:\\/",S0=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",b0="[^"+Qh.replace("\\.","")+"]",E0=/((?:WC+[\/:])*)/.source.replace("WC",tu),T0=/(WCOD+)?/.source.replace("WCOD",b0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),R0=new RegExp("^"+E0+T0+w0+A0+"$"),C0=["material","materials","bones","map"],Ah=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S0,"")}static parseTrackName(t){let e=R0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);C0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Ah;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fc=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,o=s.length,a=new Array(o),c={endingStart:os,endingEnd:os};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=il,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case If:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case sl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,o=n===Cf;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===nl){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=as,i.endingEnd=as):(t?i.endingStart=this.zeroSlopeAtStart?as:os:i.endingStart=$r,e?i.endingEnd=this.zeroSlopeAtEnd?as:os:i.endingEnd=$r)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}},I0=new Float32Array(1),Io=class extends Wn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;m=new dc(be.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Eo(new Float32Array(2),new Float32Array(2),1,I0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,o=typeof t=="string"?Ms.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sl),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new fc(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?Ms.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var ou=class ou{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ou.prototype.isMatrix2=!0;var Rh=ou;function eu(r,t,e,n){let i=P0(n);switch(e){case Xh:return r*t;case Sc:return r*t/i.components*i.byteLength;case bc:return r*t/i.components*i.byteLength;case Zi:return r*t*2/i.components*i.byteLength;case Ec:return r*t*2/i.components*i.byteLength;case qh:return r*t*3/i.components*i.byteLength;case wn:return r*t*4/i.components*i.byteLength;case Tc:return r*t*4/i.components*i.byteLength;case No:case Uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ac:case Cc:return Math.max(r,16)*Math.max(t,8)/4;case wc:case Rc:return Math.max(r,8)*Math.max(t,8)/2;case Ic:case Pc:case Dc:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Bo:case Uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case qc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Jc:case $c:case jc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qc:case tl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zo:case el:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P0(r){switch(r){case _n:case Hh:return{byteLength:1,components:1};case br:case Vh:case Zn:return{byteLength:2,components:1};case vc:case Mc:return{byteLength:2,components:4};case Kn:case yc:case Tn:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yp(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function D0(r){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
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
#endif`,K0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yx=`float getShadowMask() {
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
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Vx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,t_=`#define NORMAL
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
}`,e_=`#define NORMAL
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
}`,n_=`#define PHONG
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
}`,i_=`#define PHONG
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
}`,s_=`#define STANDARD
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
}`,r_=`#define STANDARD
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
}`,o_=`#define TOON
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
}`,a_=`#define TOON
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
}`,c_=`uniform float size;
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
}`,l_=`uniform vec3 diffuse;
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
}`,h_=`#include <common>
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
}`,u_=`uniform vec3 color;
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
}`,d_=`uniform float rotation;
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
}`,f_=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:N0,alphahash_pars_fragment:U0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:z0,aomap_fragment:k0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:q0,iridescence_fragment:Y0,bumpmap_pars_fragment:K0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:j0,color_fragment:Q0,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:og,displacementmap_vertex:ag,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:hg,colorspace_pars_fragment:ug,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:wg,envmap_vertex:gg,fog_vertex:xg,fog_pars_vertex:_g,fog_fragment:yg,fog_pars_fragment:vg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ng,lights_fragment_end:Ug,lightprobes_pars_fragment:Fg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:kg,map_fragment:Hg,map_pars_fragment:Vg,map_particle_fragment:Gg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Yg,morphcolor_vertex:Kg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Jg,morphtarget_vertex:$g,normal_fragment_begin:jg,normal_fragment_maps:Qg,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:cx,packing:lx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:xx,shadowmap_vertex:_x,shadowmask_pars_fragment:yx,skinbase_vertex:vx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:bx,specularmap_fragment:Ex,specularmap_pars_fragment:Tx,tonemapping_fragment:wx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Ix,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:zx,depth_vert:kx,depth_frag:Hx,distance_vert:Vx,distance_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:Kx,meshbasic_frag:Zx,meshlambert_vert:Jx,meshlambert_frag:$x,meshmatcap_vert:jx,meshmatcap_frag:Qx,meshnormal_vert:t_,meshnormal_frag:e_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:c_,points_frag:l_,shadow_vert:h_,shadow_frag:u_,sprite_vert:d_,sprite_frag:f_},mt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ci={basic:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:cn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:cn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:cn([mt.points,mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:cn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:cn([mt.common,mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:cn([mt.sprite,mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:cn([mt.common,mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:cn([mt.lights,mt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var al={r:0,b:0,g:0},p_=new Ct,vp=new Jt;vp.set(-1,0,0,0,1,0,0,0,1);function m_(r,t,e,n,i,s){let o=new Mt(0),a=i===!0?0:1,c,l,h=null,u=0,d=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let y=S.backgroundBlurriness>0;b=t.get(b,y)}return b}function m(S){let b=!1,y=f(S);y===null?p(o,a):y&&y.isColor&&(p(y,1),b=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===Do)?(l===void 0&&(l=new It(new mn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Is(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vp),l.material.toneMapped=ie.getTransfer(y.colorSpace)!==_e,(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new So(2,2),new He({name:"BackgroundMaterial",uniforms:Is(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(al,jh(r)),e.buffers.color.setClear(al.r,al.g,al.b,b,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:m,addToRenderList:x,dispose:g}}function g_(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(L,C,N,D,B){let O=!1,k=u(L,D,N,C);s!==k&&(s=k,l(s.object)),O=f(L,D,N,B),O&&m(L,D,N,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(L,C,N,D),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function u(L,C,N,D){let B=D.wireframe===!0,O=n[C.id];O===void 0&&(O={},n[C.id]=O);let k=L.isInstancedMesh===!0?L.id:0,K=O[k];K===void 0&&(K={},O[k]=K);let W=K[N.id];W===void 0&&(W={},K[N.id]=W);let $=W[B];return $===void 0&&($=d(c()),W[B]=$),$}function d(L){let C=[],N=[],D=[];for(let B=0;B<e;B++)C[B]=0,N[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,C,N,D){let B=s.attributes,O=C.attributes,k=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let et=B[W],j=O[W];if(j===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),et===void 0||et.attribute!==j||j&&et.data!==j.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function m(L,C,N,D){let B={},O=C.attributes,k=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let et=O[W];et===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let j={};j.attribute=et,et&&et.data&&(j.data=et.data),B[W]=j,k++}s.attributes=B,s.attributesNum=k,s.index=D}function x(){let L=s.newAttributes;for(let C=0,N=L.length;C<N;C++)L[C]=0}function p(L){g(L,0)}function g(L,C){let N=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;N[L]=1,D[L]===0&&(r.enableVertexAttribArray(L),D[L]=1),B[L]!==C&&(r.vertexAttribDivisor(L,C),B[L]=C)}function S(){let L=s.newAttributes,C=s.enabledAttributes;for(let N=0,D=C.length;N<D;N++)C[N]!==L[N]&&(r.disableVertexAttribArray(N),C[N]=0)}function b(L,C,N,D,B,O,k){k===!0?r.vertexAttribIPointer(L,C,N,B,O):r.vertexAttribPointer(L,C,N,D,B,O)}function y(L,C,N,D){x();let B=D.attributes,O=N.getAttributes(),k=C.defaultAttributeValues;for(let K in O){let W=O[K];if(W.location>=0){let $=B[K];if($===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let et=$.normalized,j=$.itemSize,tt=t.get($);if(tt===void 0)continue;let Rt=tt.buffer,Vt=tt.type,qt=tt.bytesPerElement,Y=Vt===r.INT||Vt===r.UNSIGNED_INT||$.gpuType===yc;if($.isInterleavedBufferAttribute){let Q=$.data,ft=Q.stride,zt=$.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<W.locationSize;Et++)g(W.location+Et,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<W.locationSize;Et++)p(W.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Et=0;Et<W.locationSize;Et++)b(W.location+Et,j/W.locationSize,Vt,et,ft*qt,(zt+j/W.locationSize*Et)*qt,Y)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q,$.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Q=0;Q<W.locationSize;Q++)b(W.location+Q,j/W.locationSize,Vt,et,j*qt,j/W.locationSize*Q*qt,Y)}}else if(k!==void 0){let et=k[K];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(W.location,et);break;case 3:r.vertexAttrib3fv(W.location,et);break;case 4:r.vertexAttrib4fv(W.location,et);break;default:r.vertexAttrib1fv(W.location,et)}}}}S()}function M(){T();for(let L in n){let C=n[L];for(let N in C){let D=C[N];for(let B in D){let O=D[B];for(let k in O)h(O[k].object),delete O[k];delete D[B]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let C=n[L.id];for(let N in C){let D=C[N];for(let B in D){let O=D[B];for(let k in O)h(O[k].object),delete O[k];delete D[B]}}delete n[L.id]}function A(L){for(let C in n){let N=n[C];for(let D in N){let B=N[D];if(B[L.id]===void 0)continue;let O=B[L.id];for(let k in O)h(O[k].object),delete O[k];delete B[L.id]}}}function _(L){for(let C in n){let N=n[C],D=L.isInstancedMesh===!0?L.id:0,B=N[D];if(B!==void 0){for(let O in B){let k=B[O];for(let K in k)h(k[K].object),delete k[K];delete B[O]}delete N[D],Object.keys(N).length===0&&delete n[C]}}}function T(){I(),o=!0,s!==i&&(s=i,l(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function x_(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function __(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==wn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&A!==Tn&&!_&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:E}}function y_(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Hn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):l();else{let S=s?0:n,b=S*4,y=g.clippingState||null;c.value=y,y=h(m,d,b,f);for(let M=0;M!==b;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Rr=4,v_=6,M_=20,S_=256,Wo=new qi,jf=new Mt,au=null,cu=0,lu=0,hu=!1,b_=new R,Ps=new R,ll=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=b_}=s;au=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(au,cu,lu),this._renderer.xr.enabled=hu,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Zn,format:wn,colorSpace:dn,depthBuffer:!1},i=Qf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=E_(s)),this._blurMaterial=w_(s,t,e),this._ggxMaterial=T_(s,t,e)}return i}_compileMaterial(t){let e=new It(new jt,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,i,s){let c=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jf),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new mn,new ke({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,g=!0):(p.color.copy(jf),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));let M=this._cubeSize;Ar(i,y*M,b>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(x,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Yi||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-Rr?n-m+Rr:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Ar(s,p,g,3*x,2*x),i.setRenderTarget(s),i.render(a,Wo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Ar(t,p,g,3*x,2*x),i.setRenderTarget(t),i.render(a,Wo)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Rr?i-this._lodMax+Rr:0),d=4*(this._cubeSize-h);Ar(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(c,Wo)}};function E_(r){let t=[],e=[],n=r,i=r-Rr+1+v_;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let S=g%3*2/3-1,b=g>2?0:-1,y=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];m.set(y,f*d*g);for(let M=0;M<d;M++){let E=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?Ps.set(1,A,E):g===1?Ps.set(-E,1,-A):g===2?Ps.set(-E,A,1):g===3?Ps.set(-1,A,-E):g===4?Ps.set(-E,-1,A):Ps.set(E,A,-1),Ps.toArray(x,(g*d+M)*f)}}let p=new jt;p.setAttribute("position",new Zt(m,f)),p.setAttribute("outputDirection",new Zt(x,f)),e.push(new It(p,null)),n>Rr&&n--}return{lodMeshes:e,sizeLods:t}}function Qf(r,t,e){let n=new fn(r,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function T_(r,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function w_(r,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:M_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function tp(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ep(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hl=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mn(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:oi});s.uniforms.tEquirect.value=e;let o=new It(i,s),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=ze),new hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function A_(r){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===gc||f===xc)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new hl(m.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===gc||f===xc,x=f===Yi||f===Rs;if(m||x){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ll(r)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return m&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new ll(r)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===gc?d.mapping=Yi:f===xc&&(d.mapping=Rs),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function R_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ls("WebGLRenderer: "+n+" extension not supported."),i}}}function C_(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let S=f.array;x=f.version;for(let b=0,y=S.length;b<y;b+=3){let M=S[b+0],E=S[b+1],A=S[b+2];d.push(M,E,E,A,A,M)}}else{let S=m.array;x=m.version;for(let b=0,y=S.length/3-1;b<y;b+=3){let M=b+0,E=b+1,A=b+2;d.push(M,E,E,A,A,M)}}let p=new(m.count>=65535?ro:so)(d,1);p.version=x;let g=s.get(u);g&&t.remove(g),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function I_(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function P_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function L_(r,t,e){let n=new WeakMap,i=new Me;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*M*4*u),A=new to(E,y,M,u);A.type=Tn,A.needsUpdate=!0;let _=b*4;for(let I=0;I<u;I++){let L=p[I],C=g[I],N=S[I],D=y*M*4*I;for(let B=0;B<L.count;B++){let O=B*_;f===!0&&(i.fromBufferAttribute(L,B),E[D+O+0]=i.x,E[D+O+1]=i.y,E[D+O+2]=i.z,E[D+O+3]=0),m===!0&&(i.fromBufferAttribute(C,B),E[D+O+4]=i.x,E[D+O+5]=i.y,E[D+O+6]=i.z,E[D+O+7]=0),x===!0&&(i.fromBufferAttribute(N,B),E[D+O+8]=i.x,E[D+O+9]=i.y,E[D+O+10]=i.z,E[D+O+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new ct(y,M)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function D_(r,t,e,n,i){let s=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var N_={[Nh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function U_(r,t,e,n,i,s){let o=new fn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new jt;l.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let h=new ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new It(l,h),d=new qi(-1,1,1,-1,0,1),f=null,m=null,x=!1,p,g=null,S=[],b=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),c!==null&&c.setSize(y,M);for(let E=0;E<S.length;E++){let A=S[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){S=y,b=S.length>0&&S[0].isRenderPass===!0;let M=o.width,E=o.height;S.length>0&&a===null&&(a=new fn(M,E,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),c=new fn(M,E,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let _=S[A];_.setSize&&_.setSize(M,E)}},this.begin=function(y,M){if(x||y.toneMapping===qn&&S.length===0)return!1;if(g=M,M!==null){let E=M.width,A=M.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return b===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=qn,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=p,x=!0;let E=o,A=a;for(let _=0;_<S.length;_++){let T=S[_];T.enabled!==!1&&(T.render(y,A,E,M),T.needsSwap!==!1&&(E=A,A=A===a?c:a))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},ie.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let _=N_[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Mp=new Je,fu=new Wi(1,1),Sp=new to,bp=new Xa,Ep=new lo,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function Ir(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=np[i];if(s===void 0&&(s=new Float32Array(i),np[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fl(r,t){let e=ip[t];e===void 0&&(e=new Int32Array(t),ip[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function F_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function O_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),Qe(e,t)}}function B_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),Qe(e,t)}}function z_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),Qe(e,t)}}function k_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;op.set(n),r.uniformMatrix2fv(this.addr,!1,op),Qe(e,n)}}function H_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;rp.set(n),r.uniformMatrix3fv(this.addr,!1,rp),Qe(e,n)}}function V_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;sp.set(n),r.uniformMatrix4fv(this.addr,!1,sp),Qe(e,n)}}function G_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function W_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),Qe(e,t)}}function X_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),Qe(e,t)}}function q_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),Qe(e,t)}}function Y_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function K_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),Qe(e,t)}}function Z_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),Qe(e,t)}}function J_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),Qe(e,t)}}function $_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?ol:rl,s=fu):s=Mp,e.setTexture2D(t||s,i)}function j_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bp,i)}function Q_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ep,i)}function ty(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sp,i)}function ey(r){switch(r){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return z_;case 35674:return k_;case 35675:return H_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return K_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ty}}function ny(r,t){r.uniform1fv(this.addr,t)}function iy(r,t){let e=Ir(t,this.size,2);r.uniform2fv(this.addr,e)}function sy(r,t){let e=Ir(t,this.size,3);r.uniform3fv(this.addr,e)}function ry(r,t){let e=Ir(t,this.size,4);r.uniform4fv(this.addr,e)}function oy(r,t){let e=Ir(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ay(r,t){let e=Ir(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cy(r,t){let e=Ir(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ly(r,t){r.uniform1iv(this.addr,t)}function hy(r,t){r.uniform2iv(this.addr,t)}function uy(r,t){r.uniform3iv(this.addr,t)}function dy(r,t){r.uniform4iv(this.addr,t)}function fy(r,t){r.uniform1uiv(this.addr,t)}function py(r,t){r.uniform2uiv(this.addr,t)}function my(r,t){r.uniform3uiv(this.addr,t)}function gy(r,t){r.uniform4uiv(this.addr,t)}function xy(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=fu:o=Mp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function _y(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||bp,s[o])}function yy(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ep,s[o])}function vy(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sp,s[o])}function My(r){switch(r){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return cy;case 5124:case 35670:return ly;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return vy}}var pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ey(e.type)}},mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=My(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},uu=/(\w+)(\])?(\[|\.)?/g;function ap(r,t){r.seq.push(t),r.map[t.id]=t}function Sy(r,t,e){let n=r.name,i=n.length;for(uu.lastIndex=0;;){let s=uu.exec(n),o=uu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ap(e,l===void 0?new pu(a,r,t):new mu(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new gu(a),ap(e,u)),e=u}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Sy(a,c,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function cp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var by=37297,Ey=0;function Ty(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var lp=new Jt;function wy(r){ie._getMatrix(lp,ie.workingColorSpace,r);let t=`mat3( ${lp.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case jr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ty(r.getShaderSource(t),a)}else return s}function Ay(r,t){let e=wy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ry={[Nh]:"Linear",[Uh]:"Reinhard",[Fh]:"Cineon",[Lo]:"ACESFilmic",[Bh]:"AgX",[zh]:"Neutral",[Oh]:"Custom"};function Cy(r,t){let e=Ry[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new R;function Iy(){ie.getLuminanceCoefficients(cl);let r=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Py(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function Ly(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function qo(r){return r!==""}function up(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(r){return r.replace(Ny,Fy)}var Uy=new Map;function Fy(r,t){let e=ne[t];if(e===void 0){let n=Uy.get(t);if(n!==void 0)e=ne[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xu(e)}var Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(r){return r.replace(Oy,By)}function By(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pp(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var zy={[ws]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function ky(r){return zy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hy={[Yi]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};function Vy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Hy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gy={[Rs]:"ENVMAP_MODE_REFRACTION"};function Wy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Gy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xy={[mc]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Af]:"ENVMAP_BLENDING_ADD"};function qy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[r.combine]||"ENVMAP_BLENDING_NONE"}function Yy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ky(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ky(e),l=Vy(e),h=Wy(e),u=qy(e),d=Yy(e),f=Py(e),m=Ly(s),x=i.createProgram(),p,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(p=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ne.tonemapping_pars_fragment:"",e.toneMapping!==qn?Cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Ay("linearToOutputTexel",e.outputColorSpace),Iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=xu(o),o=up(o,e),o=dp(o,e),a=xu(a),a=up(a,e),a=dp(a,e),o=fp(o),a=fp(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=S+p+o,y=S+g+a,M=cp(i,i.VERTEX_SHADER,b),E=cp(i,i.FRAGMENT_SHADER,y);i.attachShader(x,M),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(r.debug.checkShaderErrors){let C=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(M)||"",D=i.getShaderInfoLog(E)||"",B=C.trim(),O=N.trim(),k=D.trim(),K=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,M,E);else{let $=hp(i,M,"vertex"),et=hp(i,E,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+$+`
`+et)}else B!==""?Ut("WebGLProgram: Program Info Log:",B):(O===""||k==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:B,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:g}})}i.deleteShader(M),i.deleteShader(E),_=new Cr(i,x),T=Dy(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(x,by)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ey++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var Zy=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yu(t),e.set(t,n)),n}},yu=class{constructor(t){this.id=Zy++,this.code=t,this.usedTimes=0}};function Jy(r){return r===Zi||r===Bo||r===zo}function $y(r,t,e,n,i,s){let o=new eo,a=new _u,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,I,L,C,N){let D=L.fog,B=C.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=t.get(_.envMap||O,k),W=K&&K.mapping===Do?K.image.height:null,$=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=et!==void 0?et.length:0,tt=0;B.morphAttributes.position!==void 0&&(tt=1),B.morphAttributes.normal!==void 0&&(tt=2),B.morphAttributes.color!==void 0&&(tt=3);let Rt,Vt,qt,Y;if($){let Te=ci[$];Rt=Te.vertexShader,Vt=Te.fragmentShader}else{Rt=_.vertexShader,Vt=_.fragmentShader;let Te=a.getVertexShaderStage(_),me=a.getFragmentShaderStage(_);a.update(_,Te,me),qt=Te.id,Y=me.id}let Q=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),zt=C.isInstancedMesh===!0,Et=C.isBatchedMesh===!0,Gt=!!_.map,de=!!_.matcap,it=!!K,at=!!_.aoMap,lt=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Wt=!!_.displacementMap,Ht=!!_.emissiveMap,Kt=!!_.metalnessMap,$t=!!_.roughnessMap,U=_.anisotropy>0,pe=_.clearcoat>0,oe=_.dispersion>0,P=_.retroreflectivity>0,v=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,Z=U&&!!_.anisotropyMap,ut=pe&&!!_.clearcoatMap,dt=pe&&!!_.clearcoatNormalMap,J=pe&&!!_.clearcoatRoughnessMap,st=v&&!!_.iridescenceMap,gt=v&&!!_.iridescenceThicknessMap,Ot=H&&!!_.sheenColorMap,vt=H&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Bt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,Qt=X&&!!_.transmissionMap,z=X&&!!_.thicknessMap,_t=!!_.gradientMap,nt=!!_.alphaMap,yt=_.alphaTest>0,Tt=!!_.alphaHash,ot=!!_.extensions,kt=qn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=r.toneMapping);let Dt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:Vt,defines:_.defines,customVertexShaderID:qt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Et,batchingColor:Et&&C._colorsTexture!==null,instancing:zt,instancingColor:zt&&C.instanceColor!==null,instancingMorph:zt&&C.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:de,envMap:it,envMapMode:it&&K.mapping,envMapCubeUVHeight:W,aoMap:at,lightMap:lt,bumpMap:ht,normalMap:pt,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:pt&&_.normalMapType===Lf,normalMapTangentSpace:pt&&_.normalMapType===Ho,packedNormalMap:pt&&_.normalMapType===Ho&&Jy(_.normalMap.format),metalnessMap:Kt,roughnessMap:$t,anisotropy:U,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:oe,retroreflection:P,iridescence:v,iridescenceMap:st,iridescenceThicknessMap:gt,sheen:H,sheenColorMap:Ot,sheenRoughnessMap:vt,specularMap:xt,specularColorMap:Bt,specularIntensityMap:Xt,transmission:X,transmissionMap:Qt,thicknessMap:z,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Mr&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:yt,alphaHash:Tt,combine:_.combine,mapUv:Gt&&m(_.map.channel),aoMapUv:at&&m(_.aoMap.channel),lightMapUv:lt&&m(_.lightMap.channel),bumpMapUv:ht&&m(_.bumpMap.channel),normalMapUv:pt&&m(_.normalMap.channel),displacementMapUv:Wt&&m(_.displacementMap.channel),emissiveMapUv:Ht&&m(_.emissiveMap.channel),metalnessMapUv:Kt&&m(_.metalnessMap.channel),roughnessMapUv:$t&&m(_.roughnessMap.channel),anisotropyMapUv:Z&&m(_.anisotropyMap.channel),clearcoatMapUv:ut&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(_.sheenRoughnessMap.channel),specularMapUv:xt&&m(_.specularMap.channel),specularColorMapUv:Bt&&m(_.specularColorMap.channel),specularIntensityMapUv:Xt&&m(_.specularIntensityMap.channel),transmissionMapUv:Qt&&m(_.transmissionMap.channel),thicknessMapUv:z&&m(_.thicknessMap.channel),alphaMapUv:nt&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!B.attributes.uv&&(Gt||nt),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(T,_),S(T,_),T.push(r.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let T=f[_.type],I;if(T){let L=ci[T];I=wr.clone(L.uniforms)}else I=_.uniforms;return I}function y(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Ky(r,T,_,i),l.push(I),h.set(T,I)),I}function M(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:A}}function jy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Qy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function mp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,p,g){let S=r[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},r[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=m,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=p,S.group=g),t++,S}function c(d,f,m,x,p,g,S){S.reversedDepth===!0&&(p=-p);let b=a(d,f,m,x,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):e.push(b)}function l(d,f,m,x,p,g){let S=a(d,f,m,x,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||Qy),n.length>1&&n.sort(f||mp),i.length>1&&i.sort(f||mp)}function u(){for(let d=t,f=r.length;d<f;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function tv(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new gp,r.set(n,[o])):i>=s.length?(o=new gp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function ev(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Mt};break;case"SpotLight":e={position:new R,direction:new R,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function nv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var iv=0;function sv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rv(r){let t=new ev,e=nv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,s=new Ct,o=new Ct;function a(l){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,S=0,b=0,y=0,M=0,E=0,A=0,_=0,T=0,I=0;l.sort(sv);for(let C=0,N=l.length;C<N;C++){let D=l[C],B=D.color,O=D.intensity,k=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Zi?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],O);I++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,et=e.get(D);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=K;let j=$.getViewportCount();for(let tt=0;tt<j;tt++)n.sunShadowMatrix[x+tt]=$.getMatrix(tt),n.sunShadowCascade[x+tt]=$._cascadeData[tt];x+=j,m++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,et=e.get(D);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=W,p++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[S]=W;let $=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,$.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[S]=$.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=K,A++}S++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=W,b++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let $=D.shadow,et=e.get(D);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(O),W.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[y]=W,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=S,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=I,n.version=iv++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let S=0,b=l.length;S<b;S++){let y=l[S];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(y.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function xp(r){let t=new rv(r),e=[],n=[],i=[];function s(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){i.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ov(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new xp(r),t.set(i,[a])):s>=o.length?(a=new xp(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`,lv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],hv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],_p=new Ct,Xo=new R,du=new R;function uv(r,t,e){let n=new ur,i=new ct,s=new ct,o=new Me,a=new nc,c=new ic,l={},h=e.maxTextureSize,u={[ri]:$e,[$e]:ri,[De]:De},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:av,fragmentShader:cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new jt;m.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new It(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let g=this.type;this.render=function(E,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===af&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let T=r.getRenderTarget(),I=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),C=r.state;C.setBlending(oi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=g!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=E.length;D<B;D++){let O=E[D],k=O.shadow;if(k===void 0){Ut("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,k.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===vr){if(O.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fn(i.x,i.y,{format:Zi,type:Zn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new Wi(i.x,i.y,Tn),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be}else O.isPointLight?(k.map=new hl(i.x),k.map.depthTexture=new Ka(i.x,Kn)):(k.map=new fn(i.x,i.y),k.map.depthTexture=new Wi(i.x,i.y,Kn)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=ei,this.type===ws?(k.map.depthTexture.compareFunction=W?ol:rl,k.map.depthTexture.minFilter=ze,k.map.depthTexture.magFilter=ze):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let $=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();O.isPointLight!==!0&&k.updateMatrices(O,_);for(let et=0;et<$;et++){let j=k.getCamera(et);if(O.isPointLight){let tt=k.camera,Rt=k.matrix,Vt=O.distance||tt.far;Vt!==tt.far&&(tt.far=Vt,tt.updateProjectionMatrix()),Xo.setFromMatrixPosition(O.matrixWorld),tt.position.copy(Xo),du.copy(tt.position),du.add(lv[et]),tt.up.copy(hv[et]),tt.lookAt(du),tt.updateMatrixWorld(),Rt.makeTranslation(-Xo.x,-Xo.y,-Xo.z),_p.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(_p,tt.coordinateSystem,tt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,et),r.clear();else{et===0&&(r.setRenderTarget(k.map),r.clear());let tt=k.getViewport(et);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),C.viewport(o)}n=k.getFrustum(et),y(A,_,j,O,this.type)}k.isPointLightShadow!==!0&&this.type===vr&&S(k,_),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(T,I,L)};function S(E,A){let _=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new fn(i.x,i.y,{format:Zi,type:Zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,_,f,x,null)}function b(E,A,_,T){let I=null,L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)I=L;else if(I=_.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=I.uuid,N=A.uuid,D=l[C];D===void 0&&(D={},l[C]=D);let B=D[N];B===void 0&&(B=I.clone(),D[N]=B,A.addEventListener("dispose",M)),I=B}if(I.visible=A.visible,I.wireframe=A.wireframe,T===vr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let C=r.properties.get(I);C.light=_}return I}function y(E,A,_,T,I){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===vr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let N=t.update(E),D=E.material;if(Array.isArray(D)){let B=N.groups;for(let O=0,k=B.length;O<k;O++){let K=B[O],W=D[K.materialIndex];if(W&&W.visible){let $=b(E,W,T,I);E.onBeforeShadow(r,E,A,_,N,$,K),r.renderBufferDirect(_,null,N,$,E,K),E.onAfterShadow(r,E,A,_,N,$,K)}}}else if(D.visible){let B=b(E,D,T,I);E.onBeforeShadow(r,E,A,_,N,B,null),r.renderBufferDirect(_,null,N,B,E,null),E.onAfterShadow(r,E,A,_,N,B,null)}}let C=E.children;for(let N=0,D=C.length;N<D;N++)y(C[N],A,_,T,I)}function M(E){E.target.removeEventListener("dispose",M);for(let _ in l){let T=l[_],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function dv(r,t){function e(){let z=!1,_t=new Me,nt=null,yt=new Me(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!z&&(r.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){z=Tt},setClear:function(Tt,ot,kt,Dt,Te){Te===!0&&(Tt*=Dt,ot*=Dt,kt*=Dt),_t.set(Tt,ot,kt,Dt),yt.equals(_t)===!1&&(r.clearColor(Tt,ot,kt,Dt),yt.copy(_t))},reset:function(){z=!1,nt=null,yt.set(-1,0,0,0)}}}function n(){let z=!1,_t=!1,nt=null,yt=null,Tt=null;return{setReversed:function(ot){if(_t!==ot){let kt=t.get("EXT_clip_control");ot?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return _t},setTest:function(ot){ot?Q(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(ot){nt!==ot&&!z&&(r.depthMask(ot),nt=ot)},setFunc:function(ot){if(_t&&(ot=Gf[ot]),yt!==ot){switch(ot){case Fa:r.depthFunc(r.NEVER);break;case Oa:r.depthFunc(r.ALWAYS);break;case Ba:r.depthFunc(r.LESS);break;case er:r.depthFunc(r.LEQUAL);break;case za:r.depthFunc(r.EQUAL);break;case ka:r.depthFunc(r.GEQUAL);break;case Ha:r.depthFunc(r.GREATER);break;case Va:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=ot}},setLocked:function(ot){z=ot},setClear:function(ot){Tt!==ot&&(Tt=ot,_t&&(ot=1-ot),r.clearDepth(ot))},reset:function(){z=!1,nt=null,yt=null,Tt=null,_t=!1}}}function i(){let z=!1,_t=null,nt=null,yt=null,Tt=null,ot=null,kt=null,Dt=null,Te=null;return{setTest:function(me){z||(me?Q(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(me){_t!==me&&!z&&(r.stencilMask(me),_t=me)},setFunc:function(me,On,$n){(nt!==me||yt!==On||Tt!==$n)&&(r.stencilFunc(me,On,$n),nt=me,yt=On,Tt=$n)},setOp:function(me,On,$n){(ot!==me||kt!==On||Dt!==$n)&&(r.stencilOp(me,On,$n),ot=me,kt=On,Dt=$n)},setLocked:function(me){z=me},setClear:function(me){Te!==me&&(r.clearStencil(me),Te=me)},reset:function(){z=!1,_t=null,nt=null,yt=null,Tt=null,ot=null,kt=null,Dt=null,Te=null}}}let s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,S=null,b=null,y=null,M=null,E=null,A=null,_=new Mt(0,0,0),T=0,I=!1,L=null,C=null,N=null,D=null,B=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=K>=2);let $=null,et={},j=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),Rt=new Me().fromArray(j),Vt=new Me().fromArray(tt);function qt(z,_t,nt,yt){let Tt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(z,ot),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<nt;kt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(_t+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return ot}let Y={};Y[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(er),ht(!1),pt(Ch),Q(r.CULL_FACE),at(oi);function Q(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function ft(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function zt(z,_t){return d[z]!==_t?(r.bindFramebuffer(z,_t),d[z]=_t,z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=_t),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function Et(z,_t){let nt=m,yt=!1;if(z){nt=f.get(_t),nt===void 0&&(nt=[],f.set(_t,nt));let Tt=z.textures;if(nt.length!==Tt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,kt=Tt.length;ot<kt;ot++)nt[ot]=r.COLOR_ATTACHMENT0+ot;nt.length=Tt.length,yt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,yt=!0);yt&&r.drawBuffers(nt)}function Gt(z){return x!==z?(r.useProgram(z),x=z,!0):!1}let de={[As]:r.FUNC_ADD,[lf]:r.FUNC_SUBTRACT,[hf]:r.FUNC_REVERSE_SUBTRACT};de[uf]=r.MIN,de[df]=r.MAX;let it={[ff]:r.ZERO,[pf]:r.ONE,[mf]:r.SRC_COLOR,[Lh]:r.SRC_ALPHA,[Mf]:r.SRC_ALPHA_SATURATE,[yf]:r.DST_COLOR,[xf]:r.DST_ALPHA,[gf]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[vf]:r.ONE_MINUS_DST_COLOR,[_f]:r.ONE_MINUS_DST_ALPHA,[Sf]:r.CONSTANT_COLOR,[bf]:r.ONE_MINUS_CONSTANT_COLOR,[Ef]:r.CONSTANT_ALPHA,[Tf]:r.ONE_MINUS_CONSTANT_ALPHA};function at(z,_t,nt,yt,Tt,ot,kt,Dt,Te,me){if(z===oi){p===!0&&(ft(r.BLEND),p=!1);return}if(p===!1&&(Q(r.BLEND),p=!0),z!==cf){if(z!==g||me!==I){if((S!==As||M!==As)&&(r.blendEquation(r.FUNC_ADD),S=As,M=As),me)switch(z){case Mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Po:r.blendFunc(r.ONE,r.ONE);break;case Ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ph:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",z);break}else switch(z){case Mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ih:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",z);break}b=null,y=null,E=null,A=null,_.set(0,0,0),T=0,g=z,I=me}return}Tt=Tt||_t,ot=ot||nt,kt=kt||yt,(_t!==S||Tt!==M)&&(r.blendEquationSeparate(de[_t],de[Tt]),S=_t,M=Tt),(nt!==b||yt!==y||ot!==E||kt!==A)&&(r.blendFuncSeparate(it[nt],it[yt],it[ot],it[kt]),b=nt,y=yt,E=ot,A=kt),(Dt.equals(_)===!1||Te!==T)&&(r.blendColor(Dt.r,Dt.g,Dt.b,Te),_.copy(Dt),T=Te),g=z,I=!1}function lt(z,_t){z.side===De?ft(r.CULL_FACE):Q(r.CULL_FACE);let nt=z.side===$e;_t&&(nt=!nt),ht(nt),z.blending===Mr&&z.transparent===!1?at(oi):at(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let yt=z.stencilWrite;a.setTest(yt),yt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ht(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(z){L!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),L=z)}function pt(z){z!==rf?(Q(r.CULL_FACE),z!==C&&(z===Ch?r.cullFace(r.BACK):z===of?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),C=z}function Wt(z){z!==N&&(k&&r.lineWidth(z),N=z)}function Ht(z,_t,nt){z?(Q(r.POLYGON_OFFSET_FILL),(D!==_t||B!==nt)&&(D=_t,B=nt,o.getReversed()&&(_t=-_t),r.polygonOffset(_t,nt))):ft(r.POLYGON_OFFSET_FILL)}function Kt(z){z?Q(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function $t(z){z===void 0&&(z=r.TEXTURE0+O-1),$!==z&&(r.activeTexture(z),$=z)}function U(z,_t,nt){nt===void 0&&($===null?nt=r.TEXTURE0+O-1:nt=$);let yt=et[nt];yt===void 0&&(yt={type:void 0,texture:void 0},et[nt]=yt),(yt.type!==z||yt.texture!==_t)&&($!==nt&&(r.activeTexture(nt),$=nt),r.bindTexture(z,_t||Y[z]),yt.type=z,yt.texture=_t)}function pe(){let z=et[$];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{r.compressedTexImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function v(){try{r.texSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function H(){try{r.texSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function ut(){try{r.texStorage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function dt(){try{r.texStorage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function J(){try{r.texImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function st(){try{r.texImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function gt(z){return u[z]!==void 0?u[z]:r.getParameter(z)}function Ot(z,_t){u[z]!==_t&&(r.pixelStorei(z,_t),u[z]=_t)}function vt(z){Rt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Rt.copy(z))}function xt(z){Vt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Vt.copy(z))}function Bt(z,_t){let nt=l.get(_t);nt===void 0&&(nt=new WeakMap,l.set(_t,nt));let yt=nt.get(z);yt===void 0&&(yt=r.getUniformBlockIndex(_t,z.name),nt.set(z,yt))}function Xt(z,_t){let yt=l.get(_t).get(z);c.get(_t)!==yt&&(r.uniformBlockBinding(_t,yt,z.__bindingPointIndex),c.set(_t,yt))}function Qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,et={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,S=null,b=null,y=null,M=null,E=null,A=null,_=new Mt(0,0,0),T=0,I=!1,L=null,C=null,N=null,D=null,B=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ft,bindFramebuffer:zt,drawBuffers:Et,useProgram:Gt,setBlending:at,setMaterial:lt,setFlipSided:ht,setCullFace:pt,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:Kt,activeTexture:$t,bindTexture:U,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:P,texImage2D:J,texImage3D:st,pixelStorei:Ot,getParameter:gt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:vt,viewport:xt,reset:Qt}}function fv(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return m?new OffscreenCanvas(P,v):sr("canvas")}function p(P,v,H){let X=1,Z=oe(P);if((Z.width>H||Z.height>H)&&(X=H/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ut=Math.floor(X*Z.width),dt=Math.floor(X*Z.height);d===void 0&&(d=x(ut,dt));let J=v?x(ut,dt):d;return J.width=ut,J.height=dt,J.getContext("2d").drawImage(P,0,0,ut,dt),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+dt+")."),J}else return"data"in P&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,v,H,X,Z,ut=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt;X&&(dt=t.get("EXT_texture_norm16"),dt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),H===r.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),v===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),v===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),H===r.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),v===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),v===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),v===r.RGB&&(H===r.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),H===r.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),v===r.RGBA){let st=ut?jr:ie.getTransfer(Z);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=st===_e?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),H===r.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(P,v){let H;return P?v===null||v===Kn||v===Er?H=r.DEPTH24_STENCIL8:v===Tn?H=r.DEPTH32F_STENCIL8:v===br&&(H=r.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===Er?H=r.DEPTH_COMPONENT24:v===Tn?H=r.DEPTH_COMPONENT32F:v===br&&(H=r.DEPTH_COMPONENT16),H}function E(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Be&&P.minFilter!==ze?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){let v=P.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function _(P){let v=P.target;v.removeEventListener("dispose",_),L(v)}function T(P){let v=n.get(P);if(v.__webglInit===void 0)return;let H=P.source,X=f.get(H);if(X){let Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(P),Object.keys(X).length===0&&f.delete(H)}n.remove(P)}function I(P){let v=n.get(P);r.deleteTexture(v.__webglTexture);let H=P.source,X=f.get(H);delete X[v.__cacheKey],o.memory.textures--}function L(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else r.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)r.deleteFramebuffer(v.__webglFramebuffer[X]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=P.textures;for(let X=0,Z=H.length;X<Z;X++){let ut=n.get(H[X]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(P)}let C=0;function N(){C=0}function D(){return C}function B(P){C=P}function O(){let P=C;return P>=i.maxTextures&&Ut("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function k(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function K(P,v){let H=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let X=P.image;if(X===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(H,P,v);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+v)}function W(P,v){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ft(H,P,v);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+v)}function $(P,v){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ft(H,P,v);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+v)}function et(P,v){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){zt(H,P,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+v)}let j={[Sn]:r.REPEAT,[In]:r.CLAMP_TO_EDGE,[nr]:r.MIRRORED_REPEAT},tt={[Be]:r.NEAREST,[_c]:r.NEAREST_MIPMAP_NEAREST,[Cs]:r.NEAREST_MIPMAP_LINEAR,[ze]:r.LINEAR,[Sr]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},Rt={[Nf]:r.NEVER,[zf]:r.ALWAYS,[Uf]:r.LESS,[rl]:r.LEQUAL,[Ff]:r.EQUAL,[ol]:r.GEQUAL,[Of]:r.GREATER,[Bf]:r.NOTEQUAL};function Vt(P,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ze||v.magFilter===Sr||v.magFilter===Cs||v.magFilter===Yn||v.minFilter===ze||v.minFilter===Sr||v.minFilter===Cs||v.minFilter===Yn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,j[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,j[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,j[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,tt[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==Cs&&v.minFilter!==Yn||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qt(P,v){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));let X=v.source,Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));let ut=k(v);if(ut!==P.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[ut].usedTimes++;let dt=Z[P.__cacheKey];dt!==void 0&&(Z[P.__cacheKey].usedTimes--,dt.usedTimes===0&&I(v)),P.__cacheKey=ut,P.__webglTexture=Z[ut].texture}return H}function Y(P,v,H){return Math.floor(Math.floor(P/H)/v)}function Q(P,v,H,X){let ut=P.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,H,X,v.data);else{ut.sort((Ot,vt)=>Ot.start-vt.start);let dt=0;for(let Ot=1;Ot<ut.length;Ot++){let vt=ut[dt],xt=ut[Ot],Bt=vt.start+vt.count,Xt=Y(xt.start,v.width,4),Qt=Y(vt.start,v.width,4);xt.start<=Bt+1&&Xt===Qt&&Y(xt.start+xt.count-1,v.width,4)===Xt?vt.count=Math.max(vt.count,xt.start+xt.count-vt.start):(++dt,ut[dt]=xt)}ut.length=dt+1;let J=e.getParameter(r.UNPACK_ROW_LENGTH),st=e.getParameter(r.UNPACK_SKIP_PIXELS),gt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ot=0,vt=ut.length;Ot<vt;Ot++){let xt=ut[Ot],Bt=Math.floor(xt.start/4),Xt=Math.ceil(xt.count/4),Qt=Bt%v.width,z=Math.floor(Bt/v.width),_t=Xt,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,Qt,z,_t,nt,H,X,v.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,st),e.pixelStorei(r.UNPACK_SKIP_ROWS,gt)}}function ft(P,v,H){let X=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=r.TEXTURE_3D);let Z=qt(P,v),ut=v.source;e.bindTexture(X,P.__webglTexture,r.TEXTURE0+H);let dt=n.get(ut);if(ut.version!==dt.__version||Z===!0){if(e.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let nt=ie.getPrimaries(ie.workingColorSpace),yt=v.colorSpace===Ii?null:ie.getPrimaries(v.colorSpace),Tt=v.colorSpace===Ii||nt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let st=p(v.image,!1,i.maxTextureSize);st=pe(v,st);let gt=s.convert(v.format,v.colorSpace),Ot=s.convert(v.type),vt=y(v.internalFormat,gt,Ot,v.normalized,v.colorSpace,v.isVideoTexture);Vt(X,v);let xt,Bt=v.mipmaps,Xt=v.isVideoTexture!==!0,Qt=dt.__version===void 0||Z===!0,z=ut.dataReady,_t=E(v,st);if(v.isDepthTexture)vt=M(v.format===Ki,v.type),Qt&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,vt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,vt,st.width,st.height,0,gt,Ot,null));else if(v.isDataTexture)if(Bt.length>0){Xt&&Qt&&e.texStorage2D(r.TEXTURE_2D,_t,vt,Bt[0].width,Bt[0].height);for(let nt=0,yt=Bt.length;nt<yt;nt++)xt=Bt[nt],Xt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(r.TEXTURE_2D,nt,vt,xt.width,xt.height,0,gt,Ot,xt.data);v.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(r.TEXTURE_2D,_t,vt,st.width,st.height),z&&Q(v,st,gt,Ot)):e.texImage2D(r.TEXTURE_2D,0,vt,st.width,st.height,0,gt,Ot,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,vt,Bt[0].width,Bt[0].height,st.depth);for(let nt=0,yt=Bt.length;nt<yt;nt++)if(xt=Bt[nt],v.format!==wn)if(gt!==null)if(Xt){if(z)if(v.layerUpdates.size>0){let Tt=eu(xt.width,xt.height,v.format,v.type);for(let ot of v.layerUpdates){let kt=xt.data.subarray(ot*Tt/xt.data.BYTES_PER_ELEMENT,(ot+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,ot,xt.width,xt.height,1,gt,kt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,st.depth,gt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,vt,xt.width,xt.height,st.depth,0,xt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,st.depth,gt,Ot,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,vt,xt.width,xt.height,st.depth,0,gt,Ot,xt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(r.TEXTURE_2D,_t,vt,Bt[0].width,Bt[0].height);for(let nt=0,yt=Bt.length;nt<yt;nt++)xt=Bt[nt],v.format!==wn?gt!==null?Xt?z&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,vt,xt.width,xt.height,0,xt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(r.TEXTURE_2D,nt,vt,xt.width,xt.height,0,gt,Ot,xt.data)}else if(v.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,vt,st.width,st.height,st.depth),z)if(v.layerUpdates.size>0){let nt=eu(st.width,st.height,v.format,v.type);for(let yt of v.layerUpdates){let Tt=st.data.subarray(yt*nt/st.data.BYTES_PER_ELEMENT,(yt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,st.width,st.height,1,gt,Ot,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Ot,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,st.width,st.height,st.depth,0,gt,Ot,st.data);else if(v.isData3DTexture)Xt?(Qt&&e.texStorage3D(r.TEXTURE_3D,_t,vt,st.width,st.height,st.depth),z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Ot,st.data)):e.texImage3D(r.TEXTURE_3D,0,vt,st.width,st.height,st.depth,0,gt,Ot,st.data);else if(v.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(r.TEXTURE_2D,_t,vt,st.width,st.height);else{let nt=st.width,yt=st.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,vt,nt,yt,0,gt,Ot,null),nt>>=1,yt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),u.add(v),nt.onpaint=yt=>{let Tt=yt.changedElements;for(let ot of u)Tt.includes(ot.image)&&(ot.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,st);else{let Tt=r.RGBA,ot=r.RGBA,kt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Tt,ot,kt,st)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Xt&&Qt){let nt=oe(Bt[0]);e.texStorage2D(r.TEXTURE_2D,_t,vt,nt.width,nt.height)}for(let nt=0,yt=Bt.length;nt<yt;nt++)xt=Bt[nt],Xt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,gt,Ot,xt):e.texImage2D(r.TEXTURE_2D,nt,vt,gt,Ot,xt);v.generateMipmaps=!1}else if(Xt){if(Qt){let nt=oe(st);e.texStorage2D(r.TEXTURE_2D,_t,vt,nt.width,nt.height)}z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Ot,st)}else e.texImage2D(r.TEXTURE_2D,0,vt,gt,Ot,st);g(v)&&S(X),dt.__version=ut.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function zt(P,v,H){if(v.image.length!==6)return;let X=qt(P,v),Z=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);let ut=n.get(Z);if(Z.version!==ut.__version||X===!0){e.activeTexture(r.TEXTURE0+H);let dt=ie.getPrimaries(ie.workingColorSpace),J=v.colorSpace===Ii?null:ie.getPrimaries(v.colorSpace),st=v.colorSpace===Ii||dt===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ot=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!gt&&!Ot?vt[ot]=p(v.image[ot],!0,i.maxCubemapSize):vt[ot]=Ot?v.image[ot].image:v.image[ot],vt[ot]=pe(v,vt[ot]);let xt=vt[0],Bt=s.convert(v.format,v.colorSpace),Xt=s.convert(v.type),Qt=y(v.internalFormat,Bt,Xt,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,_t=ut.__version===void 0||X===!0,nt=Z.dataReady,yt=E(v,xt);Vt(r.TEXTURE_CUBE_MAP,v);let Tt;if(gt){z&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Qt,xt.width,xt.height);for(let ot=0;ot<6;ot++){Tt=vt[ot].mipmaps;for(let kt=0;kt<Tt.length;kt++){let Dt=Tt[kt];v.format!==wn?Bt!==null?z?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Dt.width,Dt.height,Bt,Dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,Qt,Dt.width,Dt.height,0,Dt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Dt.width,Dt.height,Bt,Xt,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,Qt,Dt.width,Dt.height,0,Bt,Xt,Dt.data)}}}else{if(Tt=v.mipmaps,z&&_t){Tt.length>0&&yt++;let ot=oe(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Qt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Bt,Xt,vt[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,vt[ot].width,vt[ot].height,0,Bt,Xt,vt[ot].data);for(let kt=0;kt<Tt.length;kt++){let Te=Tt[kt].image[ot].image;z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Te.width,Te.height,Bt,Xt,Te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,Qt,Te.width,Te.height,0,Bt,Xt,Te.data)}}else{z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Bt,Xt,vt[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,Bt,Xt,vt[ot]);for(let kt=0;kt<Tt.length;kt++){let Dt=Tt[kt];z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Bt,Xt,Dt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,Qt,Bt,Xt,Dt.image[ot])}}}g(v)&&S(r.TEXTURE_CUBE_MAP),ut.__version=Z.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Et(P,v,H,X,Z,ut){let dt=s.convert(H.format,H.colorSpace),J=s.convert(H.type),st=y(H.internalFormat,dt,J,H.normalized,H.colorSpace),gt=n.get(v),Ot=n.get(H);if(Ot.__renderTarget=v,!gt.__hasExternalTextures){let vt=Math.max(1,v.width>>ut),xt=Math.max(1,v.height>>ut);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,st,vt,xt,v.depth,0,dt,J,null):e.texImage2D(Z,ut,st,vt,xt,0,dt,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),$t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,Z,Ot.__webglTexture,0,Kt(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,Z,Ot.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,v,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){let X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ut=M(v.stencilBuffer,Z),dt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt(v),ut,v.width,v.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt(v),ut,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ut,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,P)}else{let X=v.textures;for(let Z=0;Z<X.length;Z++){let ut=X[Z],dt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),st=y(ut.internalFormat,dt,J,ut.normalized,ut.colorSpace);$t(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt(v),st,v.width,v.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt(v),st,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,st,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(P,v,H){let X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,v.depthTexture);let gt=s.convert(v.depthTexture.format),Ot=s.convert(v.depthTexture.type),vt;v.depthTexture.format===ei?vt=r.DEPTH_COMPONENT24:v.depthTexture.format===Ki&&(vt=r.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,vt,v.width,v.height,0,gt,Ot,null)}}else K(v.depthTexture,0);let ut=Z.__webglTexture,dt=Kt(v),J=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,st=v.depthTexture.format===Ki?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===ei)$t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,J,ut,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,st,J,ut,0);else if(v.depthTexture.format===Ki)$t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,J,ut,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,st,J,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let v=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)de(v.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?de(v.__webglFramebuffer[0],P,0):de(v.__webglFramebuffer,P,0)}else if(H){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=r.createRenderbuffer(),Gt(v.__webglDepthbuffer[X],P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ut)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Gt(v.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ut)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,v,H){let X=n.get(P);v!==void 0&&Et(X.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&it(P)}function lt(P){let v=P.texture,H=n.get(P),X=n.get(v);P.addEventListener("dispose",_);let Z=P.textures,ut=P.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=v.version,o.memory.textures++),ut){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let st=0;st<v.mipmaps.length;st++)H.__webglFramebuffer[J][st]=r.createFramebuffer()}else H.__webglFramebuffer[J]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[J]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(dt)for(let J=0,st=Z.length;J<st;J++){let gt=n.get(Z[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let st=Z[J];H.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let gt=s.convert(st.format,st.colorSpace),Ot=s.convert(st.type),vt=y(st.internalFormat,gt,Ot,st.normalized,st.colorSpace,P.isXRRenderTarget===!0),xt=Kt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,H.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)Et(H.__webglFramebuffer[J][st],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,st);else Et(H.__webglFramebuffer[J],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(v)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,st=Z.length;J<st;J++){let gt=Z[J],Ot=n.get(gt),vt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ot.__webglTexture),Vt(vt,gt),Et(H.__webglFramebuffer,P,gt,r.COLOR_ATTACHMENT0+J,vt,0),g(gt)&&S(vt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,X.__webglTexture),Vt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)Et(H.__webglFramebuffer[st],P,v,r.COLOR_ATTACHMENT0,J,st);else Et(H.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,J,0);g(v)&&S(J),e.unbindTexture()}P.depthBuffer&&it(P)}function ht(P){let v=P.textures;for(let H=0,X=v.length;H<X;H++){let Z=v[H];if(g(Z)){let ut=b(P),dt=n.get(Z).__webglTexture;e.bindTexture(ut,dt),S(ut),e.unbindTexture()}}}let pt=[],Wt=[];function Ht(P){if(P.samples>0){if($t(P)===!1){let v=P.textures,H=P.width,X=P.height,Z=r.COLOR_BUFFER_BIT,ut=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(P),J=v.length>1;if(J)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let st=P.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ot=n.get(v[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,H,X,0,0,H,X,Z,r.NEAREST),c===!0&&(pt.length=0,Wt.length=0,pt.push(r.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(pt.push(ut),Wt.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ot=n.get(v[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Kt(P){return Math.min(i.maxSamples,P.samples)}function $t(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(P){let v=o.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function pe(P,v){let H=P.colorSpace,X=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==dn&&H!==Ii&&(ie.getTransfer(H)===_e?(X!==wn||Z!==_n)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",H)),v}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pv(r,t){function e(n,i=Ii){let s,o=ie.getTransfer(i);if(n===_n)return r.UNSIGNED_BYTE;if(n===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return r.BYTE;if(n===Vh)return r.SHORT;if(n===br)return r.UNSIGNED_SHORT;if(n===yc)return r.INT;if(n===Kn)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===Xh)return r.ALPHA;if(n===qh)return r.RGB;if(n===wn)return r.RGBA;if(n===ei)return r.DEPTH_COMPONENT;if(n===Ki)return r.DEPTH_STENCIL;if(n===Sc)return r.RED;if(n===bc)return r.RED_INTEGER;if(n===Zi)return r.RG;if(n===Ec)return r.RG_INTEGER;if(n===Tc)return r.RGBA_INTEGER;if(n===No||n===Uo||n===Fo||n===Oo)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ac||n===Rc||n===Cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Bo||n===Uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ic||n===Pc)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dc)return s.COMPRESSED_R11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return s.COMPRESSED_RG11_EAC;if(n===Uc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===Zc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===$c||n===jc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Jc)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===tl||n===zo||n===el)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ho(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends Wn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new vu,g={},S=e.getContextAttributes(),b=null,y=null,M=[],E=[],A=new ct,_=null,T=null,I=new Ye;I.viewport=new Me;let L=new Ye;L.viewport=new Me;let C=[I,L],N=new uc,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ar,M[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ar,M[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ar,M[Y]=Q),Q.getHandSpace()};function O(Y){let Q=E.indexOf(Y.inputSource);if(Q===-1)return;let ft=M[Q];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<M.length;Y++){let Q=E[Y];Q!==null&&(E[Y]=null,M[Y].disconnect(Q))}D=null,B=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(b),f=null,d=null,u=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,zt=null,Et=null;S.depth&&(Et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=S.stencil?Ki:ei,zt=S.stencil?Er:Kn);let Gt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:wn,type:_n,depthTexture:new Wi(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Y){for(let Q=0;Q<Y.removed.length;Q++){let ft=Y.removed[Q],zt=E.indexOf(ft);zt>=0&&(E[zt]=null,M[zt].disconnect(ft))}for(let Q=0;Q<Y.added.length;Q++){let ft=Y.added[Q],zt=E.indexOf(ft);if(zt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=E.length){E.push(ft),zt=Gt;break}else if(E[Gt]===null){E[Gt]=ft,zt=Gt;break}if(zt===-1)break}let Et=M[zt];Et&&Et.connect(ft)}}let W=new R,$=new R;function et(Y,Q,ft){W.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);let zt=W.distanceTo($),Et=Q.projectionMatrix.elements,Gt=ft.projectionMatrix.elements,de=Et[14]/(Et[10]-1),it=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],lt=(Et[9]-1)/Et[5],ht=(Et[8]-1)/Et[0],pt=(Gt[8]+1)/Gt[0],Wt=de*ht,Ht=de*pt,Kt=zt/(-ht+pt),$t=Kt*-ht;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(Kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let U=de+Kt,pe=it+Kt,oe=Wt-$t,P=Ht+(zt-$t),v=at*it/pe*U,H=lt*it/pe*U;Y.projectionMatrix.makePerspective(oe,P,v,H,U,pe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ft=Y.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),N.near=L.near=I.near=Q,N.far=L.far=I.far=ft,(D!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,B=N.far),N.layers.mask=Y.layers.mask|6,I.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let zt=Y.parent,Et=N.cameras;j(N,zt);for(let Gt=0;Gt<Et.length;Gt++)j(Et[Gt],zt);Et.length===2?et(N,I,L):N.projectionMatrix.copy(I.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),tt(Y,N,zt)};function tt(Y,Q,ft){ft===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ds*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Y){return g[Y]};let Rt=null;function Vt(Y,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;ft.length!==N.cameras.length&&(N.cameras.length=0,zt=!0);for(let it=0;it<ft.length;it++){let at=ft[it],lt=null;if(f!==null)lt=f.getViewport(at);else{let pt=u.getViewSubImage(d,at);lt=pt.viewport,it===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let ht=C[it];ht===void 0&&(ht=new Ye,ht.layers.enable(it),ht.viewport=new Me,C[it]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),it===0&&(N.matrix.copy(ht.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),zt===!0&&N.cameras.push(ht)}let Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let it=u.getDepthInformation(ft[0]);it&&it.isValid&&it.texture&&p.init(it,i.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<ft.length;it++){let at=ft[it].camera;if(at){let lt=g[at];lt||(lt=new ho,g[at]=lt);let ht=u.getCameraImage(at);lt.sourceTexture=ht}}}}for(let ft=0;ft<M.length;ft++){let zt=E[ft],Et=M[ft];zt!==null&&Et!==void 0&&Et.update(zt,Q,l||o)}Rt&&Rt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let qt=new yp;qt.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){Rt=Y},this.dispose=function(){}}},xv=new Ct,Tp=new Jt;Tp.set(-1,0,0,0,1,0,0,0,1);function _v(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,jh(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,S,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,S,b):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$e&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$e&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let S=t.get(g),b=S.envMap,y=S.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,S,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let S=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yv(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let E=M.program;n.uniformBlockBinding(y,E)}function l(y,M){let E=i[y.id];E===void 0&&(p(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",S));let A=M.program;n.updateUBOMapping(y,A);let _=t.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function h(y){let M=u();y.__bindingPointIndex=M;let E=r.createBuffer(),A=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],E=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let _=0,T=E.length;_<T;_++){let I=E[_];if(Array.isArray(I))for(let L=0,C=I.length;L<C;L++)f(I[L],_,L,A);else f(I,_,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,E,A){if(x(y,M,E,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let L=0;L<T.length;L++){let C=T[L],N=g(C);m(C,y.__data,I),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function m(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function x(y,M,E,A){let _=y.value,T=M+"_"+E;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let I=A[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function p(y){let M=y.uniforms,E=0,A=16;for(let T=0,I=M.length;T<I;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,N=L.length;C<N;C++){let D=L[C],B=Array.isArray(D.value)?D.value:[D.value];for(let O=0,k=B.length;O<k;O++){let K=B[O],W=g(K),$=E%A,et=$%W.boundary,j=$+et;E+=et,j!==0&&A-j<W.storage&&(E+=A-j),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}let _=E%A;return _>0&&(E+=A-_),y.__size=E,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){let M=y.target;M.removeEventListener("dispose",S);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function b(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:b}}var vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function Mv(){return ai===null&&(ai=new hr(vv,16,16,Zi,Zn),ai.name="DFG_LUT",ai.minFilter=ze,ai.magFilter=ze,ai.wrapS=In,ai.wrapT=In,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var ul=class{constructor(t={}){let{canvas:e=kf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,p=new Set([Tc,Ec,bc]),g=new Set([_n,Kn,br,Er,vc,Mc]),S=new Uint32Array(4),b=new Int32Array(4),y=new R,M=null,E=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,C=null,N=null,D=null,B=null;this._outputColorSpace=xe;let O=0,k=0,K=null,W=-1,$=null,et=new Me,j=new Me,tt=null,Rt=new Mt(0),Vt=0,qt=e.width,Y=e.height,Q=1,ft=null,zt=null,Et=new Me(0,0,qt,Y),Gt=new Me(0,0,qt,Y),de=!1,it=new ur,at=!1,lt=!1,ht=new Ct,pt=new R,Wt=new Me,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function $t(){return K===null?Q:1}let U=n;function pe(w,F){return e.getContext(w,F)}let oe,P,v,H,X,Z,ut,dt,J,st,gt,Ot,vt,xt,Bt,Xt,Qt,z,_t,nt,yt,Tt,ot;try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",On,!1),U===null){let F="webgl2";if(U=pe(F,w),U===null)throw pe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(w){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Yt("WebGLRenderer: "+w.message),w}function kt(){oe=new R_(U),oe.init(),yt=new pv(U,oe),P=new __(U,oe,t,yt),v=new dv(U,oe),P.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),N=U.createFramebuffer(),D=U.createFramebuffer(),B=U.createFramebuffer(),H=new P_(U),X=new jy,Z=new fv(U,oe,v,X,P,yt,H),ut=new A_(I),dt=new D0(U),Tt=new g_(U,dt),J=new C_(U,dt,H,Tt),st=new D_(U,J,dt,Tt,H),z=new L_(U,P,Z),Bt=new y_(X),gt=new $y(I,ut,oe,P,Tt,Bt),Ot=new _v(I,X),vt=new tv,xt=new ov(oe),Qt=new m_(I,ut,v,st,m,c),Xt=new uv(I,st,P),ot=new yv(U,H,P,v),_t=new x_(U,oe,H),nt=new I_(U,oe,H),H.programs=gt.programs,I.capabilities=P,I.extensions=oe,I.properties=X,I.renderLists=vt,I.shadowMap=Xt,I.state=v,I.info=H}x!==_n&&(T=new U_(x,e.width,e.height,a,i,s));let Dt=new Mu(I,U);this.xr=Dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(qt,Y,!1))},this.getSize=function(w){return w.set(qt,Y)},this.setSize=function(w,F,q=!0){if(Dt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=w,Y=F,e.width=Math.floor(w*Q),e.height=Math.floor(F*Q),q===!0&&(e.style.width=w+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(qt*Q,Y*Q).floor()},this.setDrawingBufferSize=function(w,F,q){qt=w,Y=F,Q=q,e.width=Math.floor(w*q),e.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===_n){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(et)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,F,q,V){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,F,q,V),v.viewport(et.copy(Et).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(Gt)},this.setScissor=function(w,F,q,V){w.isVector4?Gt.set(w.x,w.y,w.z,w.w):Gt.set(w,F,q,V),v.scissor(j.copy(Gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){v.setScissorTest(de=w)},this.setOpaqueSort=function(w){ft=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,q=!0){let V=0;if(w){let G=!1;if(K!==null){let bt=K.texture.format;G=p.has(bt)}if(G){let bt=K.texture.type,At=g.has(bt),St=Qt.getClearColor(),Pt=Qt.getClearAlpha(),Nt=St.r,te=St.g,ae=St.b;At?(S[0]=Nt,S[1]=te,S[2]=ae,S[3]=Pt,U.clearBufferuiv(U.COLOR,0,S)):(b[0]=Nt,b[1]=te,b[2]=ae,b[3]=Pt,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),C=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Qt.dispose(),vt.dispose(),xt.dispose(),X.dispose(),ut.dispose(),st.dispose(),Tt.dispose(),ot.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",sd),Dt.removeEventListener("sessionend",rd),es.stop()};function Te(w){w.preventDefault(),Qr("WebGLRenderer: Context Lost."),L=!0}function me(){Qr("WebGLRenderer: Context Restored."),L=!1;let w=H.autoReset,F=Xt.enabled,q=Xt.autoUpdate,V=Xt.needsUpdate,G=Xt.type;kt(),H.autoReset=w,Xt.enabled=F,Xt.autoUpdate=q,Xt.needsUpdate=V,Xt.type=G}function On(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $n(w){let F=w.target;F.removeEventListener("dispose",$n),Zp(F)}function Zp(w){Jp(w),X.remove(w)}function Jp(w){let F=X.get(w).programs;F!==void 0&&(F.forEach(function(q){gt.releaseProgram(q)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,V,G,bt){F===null&&(F=Ht);let At=G.isMesh&&G.matrixWorld.determinantAffine()<0,St=Qp(w,F,q,V,G);v.setMaterial(V,At);let Pt=q.index,Nt=1;if(V.wireframe===!0){if(Pt=J.getWireframeAttribute(q),Pt===void 0)return;Nt=2}let te=q.drawRange,ae=q.attributes.position,Lt=te.start*Nt,ge=(te.start+te.count)*Nt;bt!==null&&(Lt=Math.max(Lt,bt.start*Nt),ge=Math.min(ge,(bt.start+bt.count)*Nt)),Pt!==null?(Lt=Math.max(Lt,0),ge=Math.min(ge,Pt.count)):ae!=null&&(Lt=Math.max(Lt,0),ge=Math.min(ge,ae.count));let Xe=ge-Lt;if(Xe<0||Xe===1/0)return;Tt.setup(G,V,St,q,Pt);let Re,Ee=_t;if(Pt!==null&&(Re=dt.get(Pt),Ee=nt,Ee.setIndex(Re)),G.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*$t()),Ee.setMode(U.LINES)):Ee.setMode(U.TRIANGLES);else if(G.isLine){let nn=V.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*$t()),G.isLineSegments?Ee.setMode(U.LINES):G.isLineLoop?Ee.setMode(U.LINE_LOOP):Ee.setMode(U.LINE_STRIP)}else G.isPoints?Ee.setMode(U.POINTS):G.isSprite&&Ee.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,wt=G._multiDrawCounts,hn=G._multiDrawCount,ue=Pt?dt.get(Pt).bytesPerElement:1,Rn=X.get(V).currentProgram.getUniforms();for(let jn=0;jn<hn;jn++)Rn.setValue(U,"_gl_DrawID",jn),Ee.render(nn[jn]/ue,wt[jn])}else if(G.isInstancedMesh)Ee.renderInstances(Lt,Xe,G.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,nn);Ee.renderInstances(Lt,Xe,wt)}else Ee.render(Lt,Xe)};function id(w,F,q,V){C!==null&&w.isNodeMaterial&&C.setObject(V,w),at===!0&&Bt.setState(w,q,!1),w.transparent===!0&&w.side===De&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,na(w,F,V),w.side=ri,w.needsUpdate=!0,na(w,F,V),w.side=De):na(w,F,V)}this.compile=function(w,F,q=null){q===null&&(q=w),C!==null&&C.renderStart(w,F,q),E=xt.get(q),E.init(F),_.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,lt),at===!0&&Bt.setGlobalState(this.clippingPlanes,F),C!==null&&Xt.render(E.state.shadowsArray,q,F);let V=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){let St=bt[At];id(St,q,F,G),V.add(St)}else id(bt,q,F,G),V.add(bt)}),E=_.pop(),C!==null&&C.renderEnd(),V},this.compileAsync=function(w,F,q=null){let V=this.compile(w,F,q);return new Promise(G=>{function bt(){if(V.forEach(function(At){let Pt=X.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(At)}),V.size===0){G(w);return}setTimeout(bt,10)}oe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Hl=null;function $p(w){Hl&&Hl(w)}function sd(){es.stop()}function rd(){es.start()}let es=new yp;es.setAnimationLoop($p),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){Hl=w,Dt.setAnimationLoop(w),w===null?es.stop():es.start()},Dt.addEventListener("sessionstart",sd),Dt.addEventListener("sessionend",rd),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(w,F);let q=Dt.enabled===!0&&Dt.isPresenting===!0,V=T!==null&&(K===null||q)&&T.begin(I,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,F,K),E=xt.get(w,_.length),E.init(F),E.state.textureUnits=Z.getTextureUnits(),_.push(E),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),it.setFromProjectionMatrix(ht,Gn,F.reversedDepth),lt=this.localClippingEnabled,at=Bt.init(this.clippingPlanes,lt),M=vt.get(w,A.length),M.init(),A.push(M),Dt.enabled===!0&&Dt.isPresenting===!0){let At=I.xr.getDepthSensingMesh();At!==null&&Vl(At,F,-1/0,I.sortObjects)}Vl(w,F,0,I.sortObjects),M.finish(),C!==null&&C.updateLights(E.state.lightsArray),I.sortObjects===!0&&M.sort(ft,zt),Kt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Kt&&Qt.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Bt.beginShadows();let G=E.state.shadowsArray;if(Xt.render(G,w,F),at===!0&&Bt.endShadows(),(V&&T.hasRenderPass())===!1){let At=M.opaque,St=M.transmissive;if(E.setupLights(),F.isArrayCamera){let Pt=F.cameras;if(St.length>0)for(let Nt=0,te=Pt.length;Nt<te;Nt++){let ae=Pt[Nt];ad(At,St,w,ae)}Kt&&Qt.render(w);for(let Nt=0,te=Pt.length;Nt<te;Nt++){let ae=Pt[Nt];od(M,w,ae,ae.viewport)}}else St.length>0&&ad(At,St,w,F),Kt&&Qt.render(w),od(M,w,F)}K!==null&&k===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),V&&T.end(I),w.isScene===!0&&w.onAfterRender(I,w,F),Tt.resetDefaultState(),W=-1,$=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),at===!0&&Bt.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,C!==null&&C.renderEnd()};function Vl(w,F,q,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(it)){V&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);let At=st.update(w),St=w.material;St.visible&&M.push(w,At,St,q,Wt.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(it))){let At=st.update(w),St=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Wt.copy(At.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){let Pt=At.groups;for(let Nt=0,te=Pt.length;Nt<te;Nt++){let ae=Pt[Nt],Lt=St[ae.materialIndex];Lt&&Lt.visible&&M.push(w,At,Lt,q,Wt.z,ae,F)}}else St.visible&&M.push(w,At,St,q,Wt.z,null,F)}}let bt=w.children;for(let At=0,St=bt.length;At<St;At++)Vl(bt[At],F,q,V)}function od(w,F,q,V){let{opaque:G,transmissive:bt,transparent:At}=w;E.setupLightsView(q),at===!0&&Bt.setGlobalState(I.clippingPlanes,q),V&&v.viewport(et.copy(V)),G.length>0&&ea(G,F,q),bt.length>0&&ea(bt,F,q),At.length>0&&ea(At,F,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ad(w,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Lt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new fn(1,1,{generateMipmaps:!0,type:Lt?Zn:_n,minFilter:Yn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let bt=E.state.transmissionRenderTarget[V.id],At=V.viewport||et;bt.setSize(At.z*I.transmissionResolutionScale,At.w*I.transmissionResolutionScale);let St=I.getRenderTarget(),Pt=I.getActiveCubeFace(),Nt=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(Rt),Vt=I.getClearAlpha(),Vt<1&&I.setClearColor(16777215,.5),I.clear(),Kt&&Qt.render(q);let te=I.toneMapping;I.toneMapping=qn;let ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),at===!0&&Bt.setGlobalState(I.clippingPlanes,V),ea(w,q,V),Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ge=0,Xe=F.length;ge<Xe;ge++){let Re=F[ge],{object:Ee,geometry:nn,material:wt,group:hn}=Re;if(wt.side===De&&Ee.layers.test(V.layers)){let ue=wt.side;wt.side=$e,wt.needsUpdate=!0,cd(Ee,q,V,nn,wt,hn),wt.side=ue,wt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt))}I.setRenderTarget(St,Pt,Nt),I.setClearColor(Rt,Vt),ae!==void 0&&(V.viewport=ae),I.toneMapping=te}function ea(w,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,bt=w.length;G<bt;G++){let At=w[G],{object:St,geometry:Pt,group:Nt}=At,te=At.material;te.allowOverride===!0&&V!==null&&(te=V),St.layers.test(q.layers)&&cd(St,F,q,Pt,te,Nt)}}function cd(w,F,q,V,G,bt){C!==null&&G.isNodeMaterial&&C.setObject(w,G),w.onBeforeRender(I,F,q,V,G,bt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(I,F,q,V,w,bt),G.transparent===!0&&G.side===De&&G.forceSinglePass===!1?(G.side=$e,G.needsUpdate=!0,I.renderBufferDirect(q,F,V,G,w,bt),G.side=ri,G.needsUpdate=!0,I.renderBufferDirect(q,F,V,G,w,bt),G.side=De):I.renderBufferDirect(q,F,V,G,w,bt),w.onAfterRender(I,F,q,V,G,bt)}function na(w,F,q){F.isScene!==!0&&(F=Ht);let V=X.get(w),G=E.state.lights,bt=E.state.shadowsArray,At=G.state.version,St=gt.getParameters(w,G.state,bt,F,q,E.state.lightProbeGridArray),Pt=gt.getProgramCacheKey(St),Nt=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=ut.get(w.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",$n),Nt=new Map,V.programs=Nt);let ae=Nt.get(Pt);if(ae!==void 0){if(V.currentProgram===ae&&V.lightsStateVersion===At)return hd(w,St),ae}else St.uniforms=gt.getUniforms(w),C!==null&&w.isNodeMaterial&&C.build(w,q,St),w.onBeforeCompile(St,I),ae=gt.acquireProgram(St,Pt),Nt.set(Pt,ae),V.uniforms=St.uniforms;let Lt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=Bt.uniform),hd(w,St),V.needsLights=em(w),V.lightsStateVersion=At,V.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.sunLights.value=G.state.sun,Lt.sunLightShadows.value=G.state.sunShadow,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.sunShadowMatrix.value=G.state.sunShadowMatrix,Lt.sunShadowCascade.value=G.state.sunShadowCascade,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ae,V.uniformsList=null,ae}function ld(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function hd(w,F){let q=X.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function jp(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=w.length;q<V;q++){let G=w[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Qp(w,F,q,V,G){F.isScene!==!0&&(F=Ht),Z.resetTextureUnits();let bt=F.fog,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,St=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ie.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=ut.get(V.envMap||At,Pt),te=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ae=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!q.morphAttributes.position,ge=!!q.morphAttributes.normal,Xe=!!q.morphAttributes.color,Re=qn;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=I.toneMapping);let Ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=Ee!==void 0?Ee.length:0,wt=X.get(V),hn=E.state.lights;if(at===!0&&(lt===!0||w!==$)){let we=w===$&&V.id===W;Bt.setState(V,w,we)}let ue=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==hn.state.version||wt.outputColorSpace!==St||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==Nt||V.fog===!0&&wt.fog!==bt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Bt.numPlanes||wt.numIntersection!==Bt.numIntersection)||wt.vertexAlphas!==te||wt.vertexTangents!==ae||wt.morphTargets!==Lt||wt.morphNormals!==ge||wt.morphColors!==Xe||wt.toneMapping!==Re||wt.morphTargetsCount!==nn||!!wt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,wt.__version=V.version);let Rn=wt.currentProgram;ue===!0&&(Rn=na(V,F,G),C&&V.isNodeMaterial&&C.onUpdateProgram(V,Rn,wt));let jn=!1,Di=!1,Ns=!1,Se=Rn.getUniforms(),Oe=wt.uniforms;if(v.useProgram(Rn.program)&&(jn=!0,Di=!0,Ns=!0),V.id!==W&&(W=V.id,Di=!0),wt.needsLights){let we=jp(E.state.lightProbeGridArray,G);wt.lightProbeGrid!==we&&(wt.lightProbeGrid=we,Di=!0)}if(jn||$!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Se.setValue(U,"projectionMatrix",w.projectionMatrix),Se.setValue(U,"viewMatrix",w.matrixWorldInverse);let Ui=Se.map.cameraPosition;Ui!==void 0&&Ui.setValue(U,pt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,Di=!0,Ns=!0)}if(wt.needsLights&&(hn.state.sunShadowMap.length>0&&Se.setValue(U,"sunShadowMap",hn.state.sunShadowMap,Z),hn.state.directionalShadowMap.length>0&&Se.setValue(U,"directionalShadowMap",hn.state.directionalShadowMap,Z),hn.state.spotShadowMap.length>0&&Se.setValue(U,"spotShadowMap",hn.state.spotShadowMap,Z),hn.state.pointShadowMap.length>0&&Se.setValue(U,"pointShadowMap",hn.state.pointShadowMap,Z)),G.isSkinnedMesh){Se.setOptional(U,G,"bindMatrix"),Se.setOptional(U,G,"bindMatrixInverse");let we=G.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Se.setValue(U,"boneTexture",we.boneTexture,Z))}G.isBatchedMesh&&(Se.setOptional(U,G,"batchingTexture"),Se.setValue(U,"batchingTexture",G._matricesTexture,Z),Se.setOptional(U,G,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",G._indirectTexture,Z),Se.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",G._colorsTexture,Z));let Ni=q.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&z.update(G,q,Rn),(Di||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,Se.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Oe.envMapIntensity.value=F.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Mv()),Di){if(Se.setValue(U,"toneMappingExposure",I.toneMappingExposure),wt.needsLights&&tm(Oe,Ns),bt&&V.fog===!0&&Ot.refreshFogUniforms(Oe,bt),Ot.refreshMaterialUniforms(Oe,V,Q,Y,E.state.transmissionRenderTarget[w.id]),wt.needsLights&&wt.lightProbeGrid){let we=wt.lightProbeGrid;Oe.probesSH.value=we.texture,Oe.probesMin.value.copy(we.boundingBox.min),Oe.probesMax.value.copy(we.boundingBox.max),Oe.probesResolution.value.copy(we.resolution)}Cr.upload(U,ld(wt),Oe,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cr.upload(U,ld(wt),Oe,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(U,"center",G.center),Se.setValue(U,"modelViewMatrix",G.modelViewMatrix),Se.setValue(U,"normalMatrix",G.normalMatrix),Se.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let we=V.uniformsGroups;for(let Ui=0,Us=we.length;Ui<Us;Ui++){let dd=we[Ui];ot.update(dd,Rn),ot.bind(dd,Rn)}}return Rn}function tm(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function em(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,F,q){let V=X.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=F,X.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let q=X.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){K=w,O=F,k=q;let V=null,G=!1,bt=!1;if(w){let St=X.get(w);if(St.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,St.__webglFramebuffer),et.copy(w.viewport),j.copy(w.scissor),tt=w.scissorTest,v.viewport(et),v.scissor(j),v.setScissorTest(tt),W=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(St.__hasExternalTextures)Z.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let te=w.depthTexture;if(St.__boundDepthTexture!==te){if(te!==null&&X.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);let Nt=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?V=Nt[F][q]:V=Nt[F],G=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?V=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[q]:V=Nt,et.copy(w.viewport),j.copy(w.scissor),tt=w.scissorTest}else et.copy(Et).multiplyScalar(Q).floor(),j.copy(Gt).multiplyScalar(Q).floor(),tt=de;if(q!==0&&(V=N),v.bindFramebuffer(U.FRAMEBUFFER,V)&&v.drawBuffers(w,V),v.viewport(et),v.scissor(j),v.setScissorTest(tt),G){let St=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,q)}else if(bt){let St=F;for(let Pt=0;Pt<w.textures.length;Pt++){let Nt=X.get(w.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,q,St)}}else if(w!==null&&q!==0){let St=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,q)}W=-1};function ud(w){let F=X.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=P.textureFormatReadable(w.format),F.__typeReadable=P.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,q,V,G,bt,At,St=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){v.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Nt=w.textures[St],te=Nt.format,ae=Nt.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Lt=ud(Nt);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&q>=0&&q<=w.height-G&&U.readPixels(F,q,V,G,yt.convert(te),yt.convert(ae),bt)}finally{let Nt=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,V,G,bt,At,St=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(F>=0&&F<=w.width-V&&q>=0&&q<=w.height-G){v.bindFramebuffer(U.FRAMEBUFFER,Pt);let Nt=w.textures[St],te=Nt.format,ae=Nt.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Lt=ud(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(F,q,V,G,yt.convert(te),yt.convert(ae),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Xe=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Xe);let Re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vf(U,Re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ge),U.deleteSync(Re),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,q=0){let V=Math.pow(2,-q),G=Math.floor(w.image.width*V),bt=Math.floor(w.image.height*V),At=F!==null?F.x:0,St=F!==null?F.y:0;Z.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,At,St,G,bt),v.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,V=null,G=0,bt=0){let At,St,Pt,Nt,te,ae,Lt,ge,Xe,Re=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(q!==null)At=q.max.x-q.min.x,St=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,te=q.min.y,ae=q.isBox3?q.min.z:0;else{let Oe=Math.pow(2,-G);At=Math.floor(Re.width*Oe),St=Math.floor(Re.height*Oe),w.isDataArrayTexture?Pt=Re.depth:w.isData3DTexture?Pt=Math.floor(Re.depth*Oe):Pt=1,Nt=0,te=0,ae=0}V!==null?(Lt=V.x,ge=V.y,Xe=V.z):(Lt=0,ge=0,Xe=0);let Ee=yt.convert(F.format),nn=yt.convert(F.type),wt;F.isData3DTexture?(Z.setTexture3D(F,0),wt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),wt=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),wt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=v.getParameter(U.UNPACK_ROW_LENGTH),ue=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=v.getParameter(U.UNPACK_SKIP_PIXELS),jn=v.getParameter(U.UNPACK_SKIP_ROWS),Di=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),v.pixelStorei(U.UNPACK_SKIP_ROWS,te),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);let Ns=w.isDataArrayTexture||w.isData3DTexture,Se=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Oe=X.get(w),Ni=X.get(F),we=X.get(Oe.__renderTarget),Ui=X.get(Ni.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,we.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Us=0;Us<Pt;Us++)Ns&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(w).__webglTexture,G,ae+Us),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,bt,Xe+Us)),U.blitFramebuffer(Nt,te,At,St,Lt,ge,At,St,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||X.has(w)){let Oe=X.get(w),Ni=X.get(F);v.bindFramebuffer(U.READ_FRAMEBUFFER,D),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let we=0;we<Pt;we++)Ns?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,G,ae+we):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Oe.__webglTexture,G),Se?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ni.__webglTexture,bt,Xe+we):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ni.__webglTexture,bt),G!==0?U.blitFramebuffer(Nt,te,At,St,Lt,ge,At,St,U.COLOR_BUFFER_BIT,U.NEAREST):Se?U.copyTexSubImage3D(wt,bt,Lt,ge,Xe+we,Nt,te,At,St):U.copyTexSubImage2D(wt,bt,Lt,ge,Nt,te,At,St);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Se?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(wt,bt,Lt,ge,Xe,At,St,Pt,Ee,nn,Re.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,bt,Lt,ge,Xe,At,St,Pt,Ee,Re.data):U.texSubImage3D(wt,bt,Lt,ge,Xe,At,St,Pt,Ee,nn,Re):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,Lt,ge,At,St,Ee,nn,Re.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,Lt,ge,Re.width,Re.height,Ee,Re.data):U.texSubImage2D(U.TEXTURE_2D,bt,Lt,ge,At,St,Ee,nn,Re);v.pixelStorei(U.UNPACK_ROW_LENGTH,hn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),v.pixelStorei(U.UNPACK_SKIP_ROWS,jn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Di),bt===0&&F.generateMipmaps&&U.generateMipmap(wt),v.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){O=0,k=0,K=null,v.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var wp="0.3.0 (BV-002)",pl="beaver-valley:save:v1",ce={size:220,playRadius:60,waterY:0,lodgeSite:{x:-15,z:6},spawn:{x:-8,z:17}},tn={steps:12,woodPerStep:2},Pr={high:{treeDetail:2,treeKeep:1,pr:2,shadow:2048,shadowDist:34,grass:1,terrainSeg:300,aa:!0,particles:1,flowers:1},medium:{treeDetail:2,treeKeep:.85,pr:2,shadow:1536,shadowDist:30,grass:.6,terrainSeg:240,aa:!0,particles:.75,flowers:.75},low:{treeDetail:2,treeKeep:.7,pr:1.5,shadow:1024,shadowDist:26,grass:.35,terrainSeg:200,aa:!1,particles:.5,flowers:.5}};var le=(r,t,e)=>Math.min(e,Math.max(t,r)),Ue=(r,t,e)=>r+(t-r)*e,he=(r,t,e)=>{let n=le((e-r)/(t-r),0,1);return n*n*(3-2*n)},Ji=(r,t,e,n)=>Ue(r,t,1-Math.exp(-e*n)),gl=(r,t)=>{let e=(t-r)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function ln(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ml(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function li(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n,o=i*i*(3-2*i),a=s*s*(3-2*s),c=ml(e,n),l=ml(e+1,n),h=ml(e,n+1),u=ml(e+1,n+1);return Ue(Ue(c,l,o),Ue(h,u,o),a)}function Fe(r,t,e=4){let n=0,i=.5,s=1;for(let o=0;o<e;o++)n+=i*(li(r*s+o*17.3,t*s-o*9.1)*2-1),i*=.5,s*=2.03;return n}function rt(r,t,e){return new Mt().setRGB(r,t,e,xe)}function Jn(r){let t=0,e=0;for(let u of r)t+=u.attributes.position.count,e+=u.index?u.index.count:u.attributes.position.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Uint32Array(e),c=0,l=0;for(let u of r){let d=u.attributes.position.count;if(n.set(u.attributes.position.array,c*3),u.attributes.normal&&i.set(u.attributes.normal.array,c*3),u.attributes.color?s.set(u.attributes.color.array,c*3):s.fill(1,c*3,(c+d)*3),u.attributes.uv&&o.set(u.attributes.uv.array,c*2),u.index)for(let f=0;f<u.index.count;f++)a[l++]=u.index.array[f]+c;else for(let f=0;f<d;f++)a[l++]=f+c;c+=d}let h=new jt;return h.setAttribute("position",new Zt(n,3)),h.setAttribute("normal",new Zt(i,3)),h.setAttribute("color",new Zt(s,3)),h.setAttribute("uv",new Zt(o,2)),h.setIndex(new Zt(a,1)),h}function hi(r,t,e=0,n=Math.random){let i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++){let a=1+(n()-.5)*e;s[o*3]=t.r*a,s[o*3+1]=t.g*a,s[o*3+2]=t.b*a}return r.setAttribute("color",new Zt(s,3)),r}function xl(r,t,e,n=0){let i=r.attributes.position,s=new R;for(let o=0;o<i.count;o++){s.fromBufferAttribute(i,o);let a=Fe(s.x*e+n,s.y*e+s.z*e*.7-n,3);s.multiplyScalar(1+a*t),i.setXYZ(o,s.x,s.y,s.z)}return r.computeVertexNormals(),r}function yn(r){return 16*Math.sin(r*.032+.5)+5*Math.sin(r*.085+2)+2}function Sv(r,t){let e=Math.hypot(r,t),n=1.3+Fe(r*.018,t*.018,4)*2.4+Fe(r*.07+40,t*.07,3)*.35;n+=Math.pow(he(38,96,e),1.15)*36,n+=he(55,100,e)*Fe(r*.05,t*.05+11,4)*9;let i=ce.lodgeSite,s=Math.hypot(r-i.x,t-i.z);n=Ue(n,1.45,1-he(5,13,s));let o=Math.abs(r-yn(t));n+=15*he(-65,-73,t)*(1-he(12,34,o));let a=(1-he(1.4,9.5,o))*he(-72,-66,t),c=-1.35+Fe(r*.2,t*.2,2)*.25;return n=Ue(n,Math.min(n,c+(1-a)*2.6),Math.pow(a,.85)),n}var _l=class{constructor(t){this.seg=t,this.size=ce.size,this.half=this.size/2,this.cell=this.size/t;let e=t+1;this.grid=new Float32Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++)this.grid[n*e+i]=Sv(-this.half+i*this.cell,-this.half+n*this.cell)}heightAt(t,e){let n=this.seg+1,i=le((t+this.half)/this.cell,0,this.seg-.001),s=le((e+this.half)/this.cell,0,this.seg-.001),o=Math.floor(i),a=Math.floor(s),c=i-o,l=s-a,h=this.grid,u=h[a*n+o],d=h[a*n+o+1],f=h[(a+1)*n+o],m=h[(a+1)*n+o+1];return Ue(Ue(u,d,c),Ue(f,m,c),l)}slopeAt(t,e){let i=this.heightAt(t+.7,e)-this.heightAt(t-.7,e),s=this.heightAt(t,e+.7)-this.heightAt(t,e-.7);return Math.hypot(i,s)/(2*.7)}normalAt(t,e,n=new R){let i=this.cell,s=this.heightAt(t+i,e)-this.heightAt(t-i,e),o=this.heightAt(t,e+i)-this.heightAt(t,e-i);return n.set(-s,2*i,-o).normalize()}depthAt(t,e){return ce.waterY-this.heightAt(t,e)}buildMesh(t,e,n=[]){let i=this.seg,s=i+1,o=new Float32Array(s*s*3),a=new Float32Array(s*s*3),c=new Float32Array(s*s*3),l=new Float32Array(s*s*2),h=new Uint32Array(i*i*6),u=new Mt,d=new Float32Array(s*s).fill(1);for(let T of n){let I=Math.max(0,Math.floor((T.x-T.r+this.half)/this.cell)),L=Math.min(i,Math.ceil((T.x+T.r+this.half)/this.cell)),C=Math.max(0,Math.floor((T.z-T.r+this.half)/this.cell)),N=Math.min(i,Math.ceil((T.z+T.r+this.half)/this.cell));for(let D=C;D<=N;D++)for(let B=I;B<=L;B++){let O=-this.half+B*this.cell-T.x,k=-this.half+D*this.cell-T.z,K=Math.exp(-(O*O+k*k)/(T.r*T.r*.5));d[D*s+B]*=1-T.k*K}}let f=rt(.36,.76,.15),m=rt(.2,.58,.13),x=rt(.62,.78,.28),p=rt(.46,.36,.23),g=rt(.78,.68,.46),S=rt(.56,.52,.47),b=rt(.26,.47,.22),y=rt(.36,.33,.27);for(let T=0;T<s;T++)for(let I=0;I<s;I++){let L=T*s+I,C=-this.half+I*this.cell,N=-this.half+T*this.cell,D=this.grid[L];o[L*3]=C,o[L*3+1]=D,o[L*3+2]=N;let B=this.grid[T*s+Math.max(0,I-1)],O=this.grid[T*s+Math.min(i,I+1)],k=this.grid[Math.max(0,T-1)*s+I],K=this.grid[Math.min(i,T+1)*s+I],W=B-O,$=k-K,et=2*this.cell,j=Math.hypot(W,et,$);a[L*3]=W/j,a[L*3+1]=et/j,a[L*3+2]=$/j,l[L*2]=C/5,l[L*2+1]=N/5;let tt=Math.hypot(W,$)/et,Rt=Fe(C*.045,N*.045+7,3)*.5+.5,Vt=li(C*.16,N*.16);u.copy(m).lerp(f,he(.25,.75,Rt)),u.lerp(x,he(.62,.9,Vt)*.35*(1-he(.8,1.6,D)));let qt=Math.hypot(C,N);u.lerp(b,he(30,62,qt)*.8),u.lerp(g,he(.55,.15,D)*.8),u.lerp(p,he(.2,-.25,D)*.9),u.lerp(y,he(-.2,-1,D)),u.lerp(S,he(.45,.85,tt)*.6);let Y=d[L]*(.92+.16*li(C*.5,N*.5));c[L*3]=u.r*Y,c[L*3+1]=u.g*Y,c[L*3+2]=u.b*Y}let M=0;for(let T=0;T<i;T++)for(let I=0;I<i;I++){let L=T*s+I,C=L+1,N=L+s,D=N+1;h[M++]=L,h[M++]=N,h[M++]=C,h[M++]=C,h[M++]=N,h[M++]=D}let E=new jt;E.setAttribute("position",new Zt(o,3)),E.setAttribute("normal",new Zt(a,3)),E.setAttribute("color",new Zt(c,3)),E.setAttribute("uv",new Zt(l,2)),E.setIndex(new Zt(h,1)),E.computeBoundingSphere();let A=new ee({vertexColors:!0,map:t,normalMap:e,normalScale:new ct(.8,.8),roughness:.96,metalness:0}),_=new It(E,A);return _.receiveShadow=!0,_}};var Ve={top:rt(.3,.55,.92),horizon:rt(.99,.9,.74),fog:rt(.9,.88,.78),sunColor:rt(1,.95,.84),sunDir:new R(.55,.52,.65).normalize()},bv=`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,Ev=`
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
}`;function Tv(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Xn(r);return n.colorSpace=xe,n}var $i={top:rt(.3,.55,.92),horizon:rt(.99,.9,.74),fog:rt(.9,.88,.78),sun:rt(1,.95,.84),hemiSky:rt(.72,.86,1),hemiGround:rt(.55,.47,.32),cloud:rt(1,.98,.95),water:rt(.5,.76,.92)},ji={top:rt(.34,.36,.68),horizon:rt(1,.56,.3),fog:rt(.95,.66,.5),sun:rt(1,.62,.36),hemiSky:rt(.78,.66,.78),hemiGround:rt(.5,.36,.28),cloud:rt(1,.72,.6),water:rt(.9,.55,.45)},Pi={top:rt(.025,.04,.12),horizon:rt(.09,.13,.27),fog:rt(.06,.09,.19),sun:rt(.5,.62,1),hemiSky:rt(.22,.3,.6),hemiGround:rt(.08,.08,.13),cloud:rt(.18,.22,.38),water:rt(.08,.13,.27)};function Ap(r,t){let e=new It(new an(400,32,16),new He({vertexShader:bv,fragmentShader:Ev,side:$e,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Ve.top},uHorizon:{value:Ve.horizon},uFog:{value:Ve.fog},uSun:{value:Ve.sunColor},uSunDir:{value:Ve.sunDir}}}));e.frustumCulled=!1,e.renderOrder=-10,r.add(e),r.fog=new no(Ve.fog,.0105);let n=new wo(rt(.72,.86,1),rt(.55,.47,.32),2.5);r.add(n);let i=new Ts(Ve.sunColor,2.6);i.castShadow=!0;let s=t.shadowDist;i.shadow.mapSize.set(t.shadow,t.shadow),Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:1,far:160}),i.shadow.bias=-4e-4,i.shadow.normalBias=.06,i.shadow.radius=3,r.add(i),r.add(i.target);let o=Tv(),a=[];for(let M=0;M<14;M++){let E=new ps({map:o,transparent:!0,depthWrite:!1,fog:!1,opacity:.85,toneMapped:!1,color:rt(1,.98,.95)}),A=new cr(E),_=M/14*Math.PI*2+Math.random()*.4,T=140+Math.random()*120;A.position.set(Math.cos(_)*T,55+Math.random()*40,Math.sin(_)*T);let I=60+Math.random()*70;A.scale.set(I,I*.34,1),A.userData.speed=.6+Math.random()*.8,a.push(A),r.add(A)}let c=[],l=(()=>{let M=7;return()=>(M=M*16807%2147483647)/2147483647})();for(let M=0;M<520;M++){let E=l()*6.283,A=Math.asin(.08+l()*.92);c.push(Math.cos(E)*Math.cos(A)*380,Math.sin(A)*380,Math.sin(E)*Math.cos(A)*380)}let h=new jt;h.setAttribute("position",new Ft(c,3));let u=new Si(h,new Gi({size:2.2,sizeAttenuation:!1,color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));u.frustumCulled=!1,u.renderOrder=-9,r.add(u);let d=document.createElement("canvas");d.width=d.height=128;let f=d.getContext("2d"),m=f.createRadialGradient(64,64,8,64,64,62);m.addColorStop(0,"rgba(255,255,240,1)"),m.addColorStop(.35,"rgba(235,240,255,0.95)"),m.addColorStop(.42,"rgba(200,215,255,0.25)"),m.addColorStop(1,"rgba(180,200,255,0)"),f.fillStyle=m,f.fillRect(0,0,128,128);let x=new cr(new ps({map:new Xn(d),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,opacity:0}));x.scale.set(46,46,1),x.renderOrder=-8,r.add(x);let p=new R(.5,.5,.6),g=new Mt,S=new R,b=(M,E,A,_,T,I)=>(M.copy(E).lerp(A,T),I>0&&M.lerp(_,I),M),y={sun:i,hemi:n,dome:e,night:0,hour:9,setTime(M){this.hour=M;let E=(M-6)/12*Math.PI,A=Math.sin(E);Ve.sunDir.set(Math.cos(E)*.9,A,.5).normalize();let _=he(-.1,.3,A),T=Math.exp(-Math.pow(A/.22,2));this.night=1-_,b(Ve.top,Pi.top,$i.top,ji.top,_,T*.55),b(Ve.horizon,Pi.horizon,$i.horizon,ji.horizon,_,T*.9),b(Ve.fog,Pi.fog,$i.fog,ji.fog,_,T*.75),r.fog.color.copy(Ve.fog),r.fog.density=Ue(.0135,.0105,_),b(Ve.sunColor,Pi.sun,$i.sun,ji.sun,he(-.05,.25,A),T*.85),b(n.color,Pi.hemiSky,$i.hemiSky,ji.hemiSky,_,T*.5),b(n.groundColor,Pi.hemiGround,$i.hemiGround,ji.hemiGround,_,T*.5),n.intensity=Ue(1.35,2.5,_),A>=0?(p.copy(Ve.sunDir),i.color.copy(Ve.sunColor),i.intensity=2.6*he(0,.22,A)+.02):(p.copy(Ve.sunDir).multiplyScalar(-1),p.y=Math.max(p.y,.25),p.normalize(),i.color.copy(Pi.sun),i.intensity=.75*he(0,.25,-A)+.02),u.material.opacity=Math.pow(this.night,1.5),S.copy(Ve.sunDir).multiplyScalar(-1),x.userData.dir=S.clone(),x.material.opacity=this.night*(S.y>.05?1:0);for(let I of a)I.material.color.copy(g.copy(Pi.cloud).lerp($i.cloud,_).lerp(ji.cloud,T*.6));this.waterHorizon=b(this._wh||(this._wh=new Mt),Pi.water,$i.water,ji.water,_,T*.5)},update(M,E){i.target.position.copy(E),i.position.copy(E).addScaledVector(p,90),u.position.copy(E),x.userData.dir&&x.position.copy(E).addScaledVector(x.userData.dir,340),e.position.copy(E);for(let A of a)A.position.x+=A.userData.speed*M,A.position.x-E.x>260&&(A.position.x-=520)}};return y.setTime(9),y}var wv=`
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
}`,Av=`
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
}`;function Rp(r){let o=[],a=[],c=[];for(let d=0;d<=230;d++){let f=-115+230*d/230,m=yn(f);for(let x=0;x<=56;x++){let p=m-20+40*x/56;o.push(p,ce.waterY,f),a.push(r.depthAt(p,f))}}for(let d=0;d<230;d++)for(let f=0;f<56;f++){let m=d*57+f,x=m+1,p=m+56+1,g=p+1;c.push(m,p,x,x,p,g)}let l=new jt;l.setAttribute("position",new Ft(o,3)),l.setAttribute("aDepth",new Ft(a,1)),l.setIndex(c);let h=new He({vertexShader:wv,fragmentShader:Av,transparent:!0,depthWrite:!1,fog:!0,uniforms:wr.merge([mt.fog,{uTime:{value:0},uSunDir:{value:Ve.sunDir},uShallow:{value:rt(.22,.72,.7)},uDeep:{value:rt(.05,.3,.5)},uSkyTop:{value:Ve.top},uSkyHor:{value:rt(.5,.76,.92)},uSun:{value:Ve.sunColor}}])}),u=new It(l,h);return u.frustumCulled=!1,u.renderOrder=2,{mesh:u,update(d){h.uniforms.uTime.value=d}}}function yl(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,o=0,a=Object.keys(r.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,b=a.length;S<b;S++){let y=a[S],M=r.attributes[y];c[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let E=r.morphAttributes[y];E&&(l[y]||(l[y]=[]),E.forEach((A,_)=>{let T=new A.array.constructor(A.count*A.itemSize);l[y][_]=new A.constructor(T,A.itemSize,A.normalized)}))}let f=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),p=f*x;for(let S=0;S<s;S++){let b=n?n.getX(S):S,y="";for(let M=0,E=a.length;M<E;M++){let A=a[M],_=r.getAttribute(A),T=_.itemSize;for(let I=0;I<T;I++)y+=`${Math.trunc(_[u[I]](b)*x+p)},`}if(y in e)h.push(e[y]);else{for(let M=0,E=a.length;M<E;M++){let A=a[M],_=r.getAttribute(A),T=r.morphAttributes[A],I=_.itemSize,L=c[A],C=l[A];for(let N=0;N<I;N++){let D=u[N],B=d[N];if(L[B](o,_[D](b)),T)for(let O=0,k=T.length;O<k;O++)C[O][B](o,T[O][D](b))}}e[y]=o,h.push(o),o++}}let g=r.clone();for(let S in r.attributes){let b=c[S];if(g.setAttribute(S,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),S in l)for(let y=0;y<l[S].length;y++){let M=l[S][y];g.morphAttributes[S][y]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return g.setIndex(h),g}function Su(r,t){if(t===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Tr||t===ko){let e=r.getIndex();if(e===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Tr)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var vl={value:0},bu=2;function Yo(r,t,e,n,i=1.2){let s=r.length,o=[],a=[],c=[],l=[],h=[],u=0;for(let f=0;f<s;f++){f&&(u+=r[f].distanceTo(r[f-1]));let m=r[f],x=t[f];for(let p=0;p<=e;p++){let g=p/e*Math.PI*2,S=1+(p%e===0?0:(n()-.5)*.18),b=Math.cos(g),y=Math.sin(g);o.push(m.x+b*x*S,m.y,m.z+y*x*S),a.push(b,.15,y),c.push(p/e*2,u*i);let M=.78+.22*he(0,1.2,m.y);l.push(M,M,M)}}for(let f=0;f<s-1;f++)for(let m=0;m<e;m++){let x=f*(e+1)+m,p=x+1,g=x+e+1,S=g+1;h.push(x,p,g,p,S,g)}let d=new jt;return d.setAttribute("position",new Ft(o,3)),d.setAttribute("normal",new Ft(a,3)),d.setAttribute("uv",new Ft(c,2)),d.setAttribute("color",new Ft(l,3)),d.setIndex(h),d.computeVertexNormals(),d}function Eu(r,t=2){let e=new Ei(1,t);return e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=yl(e,1e-4),e.scale(r[0],r[1],r[2]),e}function Sl(r,t,e,n,i,s,o=1){r.computeVertexNormals();let a=r.attributes.position,c=r.attributes.normal,l=new Float32Array(a.count*3),h=new Mt;for(let u=0;u<a.count;u++){let d=le((a.getY(u)-n)/i*.5+.5,0,1),f=le(c.getY(u)*.5+.5,0,1);h.copy(t).lerp(e,le(d*.6+f*.5,0,1));let m=.94+s()*.12,x=.62+.38*le(a.getY(u)/o,0,1);l[u*3]=h.r*m*x,l[u*3+1]=h.g*m*x,l[u*3+2]=h.b*m*x}return r.setAttribute("color",new Zt(l,3)),r}function Ko(r,t,e,n,i=1,s=1,o=1,a=0,c=0){let l=new Ct().compose(new R(t,e,n),new ve().setFromEuler(new Ln(a,0,c)),new R(i,s,o));return r.applyMatrix4(l),r}var Rv=[rt(.18,.4,.17),rt(.22,.45,.14),rt(.3,.46,.14)],Cv=[rt(.5,.8,.28),rt(.58,.82,.3),rt(.68,.82,.28)];function Iv(r){let t=ln(r),e=3+t()*1.2,n=(t()-.5)*.7,i=(t()-.5)*.7,s=[],o=[],a=7;for(let x=0;x<a;x++){let p=x/(a-1);s.push(new R(Math.sin(p*2)*n*p,p*e,Math.sin(p*2.4)*i*p)),o.push((.4-.2*p)*(x===0?1.55:x===1?1.15:1))}let c=[Yo(s,o,8,t)],l=s[a-1],h=[],u=5+Math.floor(t()*3),d=Rv[Math.floor(t()*3)],f=Cv[Math.floor(t()*3)],m=1.55+t()*.5;for(let x=0;x<u;x++){let p=x/u*Math.PI*2+t(),g=x===0?0:m*(.45+t()*.5),S=l.x+Math.cos(p)*g,b=l.z+Math.sin(p)*g,y=l.y+(x===0?1.55:.2+t()*1),M=(x===0?1.45:1+t()*.5)*(.9+t()*.3),E=Eu([M,M*.88,M],bu);if(xl(E,.16,1.4,t()*50),Ko(E,S,y,b),Sl(E,d,f,y,M,t,l.y+3.2),h.push(E),x>0&&t()<.8){let A=new R(l.x,l.y-.4-t()*.5,l.z),_=new R(S*.8+l.x*.2,y-.4,b*.8+l.z*.2),T=[A,A.clone().lerp(_,.5).add(new R(0,.1,0)),_];c.push(Yo(T,[.11,.08,.05],5,t))}}return{trunk:Jn(c),foliage:Jn(h),height:e+3.4,trunkR:.5,canopyR:m+.8,shape:{type:"oak",H:e,lean:n,lean2:i}}}function Pv(r){let t=ln(r),e=1.4+t()*.6,n=[],i=[];for(let h=0;h<5;h++){let u=h/4;n.push(new R(0,u*(e+3.4),0)),i.push((.3-.18*u)*(h===0?1.4:1))}let s=[Yo(n,i,7,t)],o=[],a=5+Math.floor(t()*2),c=rt(.1+t()*.04,.3+t()*.06,.2),l=rt(.3+t()*.08,.58,.32);for(let h=0;h<a;h++){let u=h/(a-1),d=(2.05-1.5*u)*(.92+t()*.16),f=1.9-.5*u,m=e+u*4.4,x=new ni(d,f,9,2,!0);x.deleteAttribute("uv");let p=x.attributes.position;for(let g=0;g<p.count;g++){let S=p.getY(g);if(S<-f*.2){let b=Math.atan2(p.getZ(g),p.getX(g));p.setY(g,S-.18*(.5+.5*Math.sin(b*3+h))-t()*.08)}p.setX(g,p.getX(g)*(1+(t()-.5)*.06)),p.setZ(g,p.getZ(g)*(1+(t()-.5)*.06))}x=yl(x,1e-4),Ko(x,0,m+f*.5,0,1,1,1,0,0),x.applyMatrix4(new Ct().makeRotationY(t()*6.28)),Sl(x,c,l,m+f*.5,f*.6,t,e+6.5),o.push(x)}return{trunk:Jn(s),foliage:Jn(o),height:e+6.4,trunkR:.4,canopyR:2.1,shape:{type:"pine",H:e+3.4,lean:0,lean2:0}}}function Lv(r){let t=ln(r),e=3.6+t()*1.4,n=(t()-.5)*.6,i=(t()-.5)*.6,s=[],o=[];for(let x=0;x<8;x++){let p=x/7;s.push(new R(Math.sin(p*2.4)*n*p,p*e,Math.sin(p*2)*i*p)),o.push((.2-.1*p)*(x===0?1.4:1))}let a=Yo(s,o,7,t,.6),c=a.attributes.color,l=a.attributes.uv;for(let x=0;x<c.count;x++){let p=li(l.getX(x)*6+r,l.getY(x)*5)>.72?.35:1;c.setXYZ(x,.92*p,.9*p,.84*p)}let h=s[7],u=[],d=rt(.3,.52,.14),f=rt(.62+t()*.12,.84,.28),m=4+Math.floor(t()*3);for(let x=0;x<m;x++){let p=x/m*Math.PI*2+t(),g=x===0?0:.5+t()*.6,S=h.x+Math.cos(p)*g,b=h.z+Math.sin(p)*g,y=h.y-.9+x*.35+t()*.4,M=.7+t()*.4,E=Eu([M,M*1.25,M],bu);xl(E,.13,1.7,t()*50),Ko(E,S,y,b),Sl(E,d,f,y,M*1.2,t,h.y+1.6),u.push(E)}return{trunk:a,foliage:Jn(u),height:e+2,trunkR:.3,canopyR:1.6,birch:!0,shape:{type:"birch",H:e,lean:n,lean2:i}}}function Dv(){let r=ln(77),t=[new R(0,0,0),new R(0,.18,0),new R(0,.38,0)],e=Yo(t,[.5,.4,.37],9,r,1.2),n=new bi(.37,9);n.rotateX(-Math.PI/2),n.translate(0,.38,0);let i=new Float32Array(n.attributes.position.count*3).fill(0);for(let o=0;o<i.length;o+=3)i[o]=.95,i[o+1]=.78,i[o+2]=.52;return n.setAttribute("color",new Zt(i,3)),Jn([e,n])}function Nv(r){let t=ln(r),e=rt(.16,.38,.16),n=rt(.52+t()*.2,.78,.3),i=[],s=3+Math.floor(t()*2);for(let o=0;o<s;o++){let a=.5+t()*.35,c=Eu([a,a*.78,a],1);xl(c,.18,2,t()*20);let l=(t()-.5)*.9,h=(t()-.5)*.9,u=a*.55;if(Ko(c,l,u,h),Sl(c,e,n,u,a,t,1.2),i.push(c),t()<.35)for(let d=0;d<3;d++){let f=new Ei(.06,0);f.deleteAttribute("uv");let m=t()*6.28;Ko(f,l+Math.cos(m)*a*.9,u+t()*a*.4,h+Math.sin(m)*a*.9),hi(f,rt(.9,.18,.22)),i.push(f)}}return Jn(i)}function Uv(r){let t=ln(r),e=new Ei(1,1);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=yl(e,1e-4);let n=e.attributes.position,i=new R;for(let l=0;l<n.count;l++){i.fromBufferAttribute(n,l);let h=.78+li(i.x*2.1+r,i.y*2.1+i.z*1.3)*.5;i.multiplyScalar(h),i.y*=.72,n.setXYZ(l,i.x,i.y,i.z)}e=e.toNonIndexed(),e.computeVertexNormals();let s=e.attributes.position,o=e.attributes.normal,a=new Float32Array(s.count*2),c=new Float32Array(s.count*3);for(let l=0;l<s.count;l+=3){let h=Math.abs(o.getX(l)),u=Math.abs(o.getY(l)),d=Math.abs(o.getZ(l));for(let f=0;f<3;f++){let m=s.getX(l+f),x=s.getY(l+f),p=s.getZ(l+f),g,S;u>=h&&u>=d?(g=m,S=p):h>=d?(g=p,S=x):(g=m,S=x),a[(l+f)*2]=g*.6,a[(l+f)*2+1]=S*.6;let b=he(.55,.9,o.getY(l+f))*(.5+.5*li(m*3+r,p*3)),y=rt(.62,.6,.58).lerp(rt(.36,.55,.22),b*.85),M=.9+t()*.15;c[(l+f)*3]=y.r*M,c[(l+f)*3+1]=y.g*M,c[(l+f)*3+2]=y.b*M}}return e.setAttribute("uv",new Zt(a,2)),e.setAttribute("color",new Zt(c,3)),e}function Cp(){let r=[0,.34,.68],t=[.045,.036,.022],e=[],n=[],i=[],s=[],o=rt(.2,.42,.14),a=rt(.62,.86,.3),c=new Mt;for(let u=0;u<3;u++)for(let d of[-1,1])e.push(d*t[u],r[u],r[u]**2*.05),i.push(0,1,0),c.copy(o).lerp(a,r[u]/.9),n.push(c.r,c.g,c.b);e.push(0,1,.12),i.push(0,1,0),c.copy(a),n.push(c.r,c.g,c.b),s.push(0,1,2,1,3,2,2,3,4,3,5,4,4,5,6);let l=e.length/3;for(let u=0;u<l;u++)e.push(e[u*3],e[u*3+1],e[u*3+2]),i.push(0,1,0),n.push(n[u*3],n[u*3+1],n[u*3+2]);s.push(l+0,l+2,l+1,l+1,l+2,l+3,l+2,l+4,l+3,l+3,l+4,l+5,l+4,l+6,l+5);let h=new jt;return h.setAttribute("position",new Ft(e,3)),h.setAttribute("normal",new Ft(i,3)),h.setAttribute("color",new Ft(n,3)),h.setIndex(s),h}function Fv(){let r=new Ne(.008,.012,.32,4,1);r.translate(0,.16,0),hi(r,rt(.3,.55,.2));let t=[];for(let n=0;n<5;n++){let i=n/5*Math.PI*2,s=new an(.045,6,4);s.scale(1,.35,1.5),s.rotateY(-i),s.translate(Math.cos(i)*.055,.33,Math.sin(i)*.055),hi(s,rt(1,1,1)),t.push(s)}let e=new an(.035,6,4);return e.translate(0,.335,0),hi(e,rt(1,.82,.18)),t.push(e),{stem:Jn([r]),head:Jn(t)}}function Ov(){let r=new Ne(.03,.04,.12,6);r.translate(0,.06,0),hi(r,rt(.96,.92,.82));let t=new an(.1,10,6,0,Math.PI*2,0,Math.PI/2);t.scale(1,.75,1),t.translate(0,.11,0),hi(t,rt(.88,.2,.18));let e=[r,t];for(let n=0;n<4;n++){let i=n*1.7,s=.055,o=new an(.014,5,4);o.translate(Math.cos(i)*s,.17-n%2*.015,Math.sin(i)*s),hi(o,rt(1,1,.95)),e.push(o)}return Jn(e)}function Bv(){let r=new bi(.42,14,.5,Math.PI*2-.5);return r.rotateX(-Math.PI/2),hi(r,rt(.28,.62,.26),.2),r}var Ml=class{constructor(t,e,n,i){this.scene=t,this.terrain=e,this.tier=n,this.tex=i,bu=n.treeDetail,this.trees=[],this.obstacles=[],this.rocks=[],this.ao=[],this.group=new fe,t.add(this.group),this.active=[],this.placements=this.placeAll()}placeAll(){let t=this.terrain,e=ln(20261019),n=ce.lodgeSite,i=[],s=[],o=(d,f,m)=>{for(let x of s){let p=x.x-d,g=x.z-f,S=x.r+m;if(p*p+g*g<S*S)return!1}return!0},a=(d,f)=>{let m=t.heightAt(d,f);return!(m<.75||Math.abs(d-yn(f))<11&&m<1||t.slopeAt(d,f)>.85||Math.hypot(d-n.x,f-n.z)<8.5||Math.hypot(d-ce.spawn.x,f-ce.spawn.z)<3)},c=(d,f,m)=>{let x=m==="pine"?1.8:2.4;return!a(d,f)||!o(d,f,x)?!1:(s.push({x:d,z:f,r:x}),i.push({x:d,z:f,kind:m,variant:Math.floor(e()*4),scale:.85+e()*.5,rot:e()*6.283,tint:e()}),!0)},l=[[-32,-4,10,"oak"],[-28,26,9,"oak"],[-6,-16,9,"birch"],[-40,14,8,"oak"],[-8,34,7,"birch"],[-24,-22,8,"pine"],[30,-8,11,"oak"],[28,22,10,"birch"],[12,44,9,"oak"]];for(let[d,f,m,x]of l)for(let p=0,g=0;p<60&&g<11;p++){let S=e()*6.283,b=Math.sqrt(e())*m,y=e()<.7?x:e()<.5?"oak":"birch";c(d+Math.cos(S)*b,f+Math.sin(S)*b,y)&&g++}for(let d=0;d<2600;d++){let f=(e()-.5)*190,m=(e()-.5)*190,x=Math.hypot(f,m),p=Fe(f*.03+5,m*.03-3,3)*.5+.5,g=he(.35,.65,p)*.9+he(48,70,x)*.9;if(e()>g*this.tier.treeKeep)continue;let S=t.heightAt(f,m),b=x>50||S>5?"pine":e()<.2?"oak":e()<.3?"birch":"pine";Math.abs(f-yn(m))<20&&e()<.6&&(b="birch"),c(f,m,b)}for(let d of i)d.choppable=Math.hypot(d.x,d.z)<54&&d.kind!=="pine"||Math.hypot(d.x,d.z)<54&&d.kind==="pine";let h=[];for(let d=0;d<700&&h.length<110;d++){let f=(e()-.5)*170,m=(e()-.5)*170,x=t.heightAt(f,m),g=Math.abs(f-yn(m))<13&&x>-.6,S=t.slopeAt(f,m);if(!(g||S>.35?e()<.5:e()<.06)||Math.hypot(f-n.x,m-n.z)<7||x>14)continue;let b=.45+Math.pow(e(),2)*1.6;o(f,m,b*.9)&&(s.push({x:f,z:m,r:b*.9}),h.push({x:f,z:m,s:b,variant:Math.floor(e()*5),rot:e()*6.283}))}let u=[];for(let d=0;d<1400&&u.length<260;d++){let f=(e()-.5)*150,m=(e()-.5)*150;if(!a(f,m))continue;let x=Fe(f*.05-9,m*.05+4,3)*.5+.5;e()>.15+x*.6||o(f,m,.6)&&(s.push({x:f,z:m,r:.6}),u.push({x:f,z:m,variant:Math.floor(e()*4),scale:.8+e()*.6,rot:e()*6.283}))}return{trees:i,rocks:h,bushes:u,taken:s}}get aoPoints(){let t=[];for(let e of this.placements.trees)t.push({x:e.x,z:e.z,r:2.6*e.scale,k:.38});for(let e of this.placements.rocks)t.push({x:e.x,z:e.z,r:1.2*e.s+.5,k:.4});for(let e of this.placements.bushes)t.push({x:e.x,z:e.z,r:1.1,k:.28});return t}build(){let t=this.terrain,e=this.placements,n=this.tex,i=vl,s=(C,N=1)=>(C.onBeforeCompile=D=>{D.uniforms.uTime=i,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #else
            vec3 iw = vec3(0.0);
          #endif
          float hh = max(transformed.y, 0.0);
          float ph = iw.x * 0.31 + iw.z * 0.23;
          transformed.x += (sin(uTime * 1.3 + ph) * 0.038 * hh + sin(uTime * 3.1 + ph * 1.9 + transformed.y) * 0.016) * ${N.toFixed(2)};
          transformed.z += cos(uTime * 1.05 + ph * 0.8) * 0.03 * hh * ${N.toFixed(2)};`)},C);this.injectWind=s;let o=s(new ee({vertexColors:!0,roughness:.82,metalness:0})),a=new ee({vertexColors:!0,map:n.barkC,normalMap:n.barkN,roughness:.92}),c=new ee({vertexColors:!0,roughness:.8}),l=new ee({vertexColors:!0,map:n.rockC,roughness:.95,flatShading:!0});this.mats={foliageMat:o,trunkMat:a,rockMat:l};let h={oak:[],pine:[],birch:[]};for(let C=0;C<4;C++)h.oak.push(Iv(100+C*31)),h.pine.push(Pv(200+C*17)),h.birch.push(Lv(300+C*13));this.kinds=h;let u=C=>C.kind+C.variant+":"+Math.floor((C.x+110)/40)+":"+Math.floor((C.z+110)/40),d={},f={};for(let C of e.trees){let N=u(C);d[N]=(d[N]||0)+1,f[N]=C}let m={};for(let C of Object.keys(d)){let N=d[C],D=h[f[C].kind][f[C].variant],B=new Pe(D.trunk,D.birch?c:a,N),O=new Pe(D.foliage,o,N);for(let k of[B,O])k.castShadow=!0,k.receiveShadow=!0,k.count=0,this.group.add(k);O.frustumCulled=!0,B.frustumCulled=!0,m[C]={tm:B,fm:O,def:D}}this.meshes=m;let x=new Ct,p=new ve,g=new R,S=new R,b=new R(0,1,0),y=new Mt;e.trees.forEach((C,N)=>{let D=u(C),B=m[D];C.id=N,C.key=D,C.idx=B.tm.count++,B.fm.count=B.tm.count,C.y=t.heightAt(C.x,C.z)-.05,C.hp=3,C.alive=!0,C.state="stand",C.trunkR=B.def.trunkR*C.scale,C.height=B.def.height*C.scale,this.writeTree(C),y.setHSL(0,0,1);let O=(C.tint-.5)*.1;y.setRGB(1,1,1).offsetHSL(O,0,(C.tint-.5)*.12),B.fm.setColorAt(C.idx,y),this.trees.push(C),this.obstacles.push({x:C.x,z:C.z,r:C.trunkR*.95,tree:C})});for(let C in m){let N=m[C];N.tm.instanceMatrix.needsUpdate=!0,N.fm.instanceMatrix.needsUpdate=!0,N.fm.instanceColor&&(N.fm.instanceColor.needsUpdate=!0),N.tm.computeBoundingSphere(),N.fm.computeBoundingSphere()}let M=Dv();this.stumps=new Pe(M,a,e.trees.length),this.stumps.count=0,this.stumps.castShadow=!0,this.stumps.receiveShadow=!0,this.stumps.frustumCulled=!1,this.group.add(this.stumps);let E=[0,1,2,3,4].map(C=>Uv(500+C*7)),A=[0,0,0,0,0];e.rocks.forEach(C=>A[C.variant]++);let _=E.map((C,N)=>{let D=new Pe(C,l,Math.max(1,A[N]));return D.count=0,D.castShadow=!0,D.receiveShadow=!0,this.group.add(D),D});e.rocks.forEach(C=>{let N=_[C.variant],D=t.heightAt(C.x,C.z);g.set(C.x,D+C.s*.12,C.z),p.setFromAxisAngle(b,C.rot),S.set(C.s*1.15,C.s,C.s*1),x.compose(g,p,S),N.setMatrixAt(N.count++,x),this.obstacles.push({x:C.x,z:C.z,r:C.s*.85}),this.rocks.push(C)}),_.forEach(C=>{C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere()});let T=[0,1,2,3].map(C=>Nv(700+C*5)),I=[0,0,0,0];e.bushes.forEach(C=>I[C.variant]++);let L=T.map((C,N)=>{let D=new Pe(C,o,Math.max(1,I[N]));return D.count=0,D.castShadow=!0,D.receiveShadow=!0,this.group.add(D),D});e.bushes.forEach(C=>{let N=L[C.variant];g.set(C.x,t.heightAt(C.x,C.z)-.05,C.z),p.setFromAxisAngle(b,C.rot),S.setScalar(C.scale),x.compose(g,p,S),N.setMatrixAt(N.count++,x)}),L.forEach(C=>{C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere()}),this.buildGrass(ln(99)),this.buildSmall(ln(4242))}writeTree(t,e=null,n=0,i=1,s=0,o=0){let a=this.meshes[t.key],c=this._m4||(this._m4=new Ct),l=this._q||(this._q=new ve),h=this._q2||(this._q2=new ve),u=this._p||(this._p=new R),d=this._s||(this._s=new R);l.setFromAxisAngle(this._up||(this._up=new R(0,1,0)),t.rot),e&&(h.setFromAxisAngle(e,n),l.premultiply(h)),u.set(t.x+s,t.y,t.z+o),d.setScalar(t.scale*i),c.compose(u,l,d),a.tm.setMatrixAt(t.idx,c),a.fm.setMatrixAt(t.idx,c),a.tm.instanceMatrix.needsUpdate=!0,a.fm.instanceMatrix.needsUpdate=!0}hideTree(t){let e=this.meshes[t.key],n=this._zero||(this._zero=new Ct().makeScale(0,0,0));e.tm.setMatrixAt(t.idx,n),e.fm.setMatrixAt(t.idx,n),e.tm.instanceMatrix.needsUpdate=!0,e.fm.instanceMatrix.needsUpdate=!0}addStump(t){let e=new Ct,n=new ve().setFromAxisAngle(new R(0,1,0),t.rot);e.compose(new R(t.x,t.y+.02,t.z),n,new R().setScalar(t.scale*.9+.2)),this.stumps.setMatrixAt(this.stumps.count++,e),this.stumps.instanceMatrix.needsUpdate=!0}removeObstacleOf(t){let e=this.obstacles.findIndex(n=>n.tree===t);e>=0&&this.obstacles.splice(e,1)}applyChopped(t){let e=this.trees[t];!e||!e.alive||(e.alive=!1,e.state="gone",this.hideTree(e),this.addStump(e),this.removeObstacleOf(e))}nearestChoppable(t,e,n){let i=null,s=n*n;for(let o of this.trees){if(!o.alive||!o.choppable||o.state!=="stand")continue;let a=o.x-t,c=o.z-e,l=a*a+c*c-0,h=(n+o.trunkR)*(n+o.trunkR);l<h&&l<s+4&&(!i||l<s)&&(i=o,s=l)}return i}trunkAt(t){let e=this.kinds[t.kind][t.variant].shape,n=1/t.scale,i=le(n/e.H,0,1),o=(e.type==="oak"?.4-.2*i:e.type==="pine"?.3-.18*i:.2-.1*i)*t.scale*1.03,a=0,c=0;e.type==="oak"?(a=Math.sin(i*2)*e.lean,c=Math.sin(i*2.4)*e.lean2):e.type==="birch"&&(a=Math.sin(i*2.4)*e.lean,c=Math.sin(i*2)*e.lean2);let l=Math.cos(t.rot),h=Math.sin(t.rot),u=t.x+(a*l+c*h)*t.scale,d=t.z+(-a*h+c*l)*t.scale;return{R:o,cx:u,cz:d}}updateBite(t,e,n){let{R:i,cx:s,cz:o}=this.trunkAt(t),a=[1.5,2.4,3.3][Math.min(t.bite-1,2)],c=.34+.09*t.bite,l=Math.atan2(e-s,n-o),h=new Ne(i,i*1.02,c,16,1,!0,l-a/2,a);if(t.biteMesh)t.biteMesh.geometry.dispose(),t.biteMesh.geometry=h;else{let u=new ee({color:rt(.96,.8,.55),roughness:.75,side:De,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});t.biteMesh=new It(h,u),t.biteMesh.castShadow=!1,this.group.add(t.biteMesh)}t.biteMesh.position.set(s,t.y+1,o)}hit(t,e,n){t.bite=(t.bite||0)+1,this.updateBite(t,e,n),t.hp--,t.shake=.5,t.fallDir=new R(t.x-e,0,t.z-n).normalize(),this.active.includes(t)||this.active.push(t),t.hp<=0&&(t.state="falling",t.fallT=0,this.removeObstacleOf(t),t.biteMesh&&(t.biteMesh.visible=!1))}update(t,e,n){vl.value=e;for(let i=this.active.length-1;i>=0;i--){let s=this.active[i];if(s.state==="stand"){if(s.shake-=t*1.6,s.shake<=0){this.writeTree(s),this.active.splice(i,1);continue}let o=Math.sin(e*48)*.035*s.shake,a=new R(s.fallDir.z,0,-s.fallDir.x);this.writeTree(s,a,o)}else if(s.state==="falling"){s.fallT+=t;let o=1.5,a=Math.min(1,s.fallT/o),c=Math.PI*.5*(a*a);a>=1&&(c=Math.PI*.5-.06*Math.max(0,Math.sin((s.fallT-o)*18))*Math.exp(-(s.fallT-o)*5));let l=new R(s.fallDir.z,0,-s.fallDir.x);if(this.writeTree(s,l,c),!s.thud&&a>=1&&(s.thud=!0,n?.onThud?.(s)),s.fallT>o+.9){let h=Math.max(0,1-(s.fallT-o-.9)/.35);this.writeTree(s,l,Math.PI*.5,h),h<=0&&(s.biteMesh&&(this.group.remove(s.biteMesh),s.biteMesh.geometry.dispose(),s.biteMesh=null),s.state="gone",s.alive=!1,this.hideTree(s),this.addStump(s),this.active.splice(i,1),n?.onGone?.(s))}}}}buildGrass(t){let e=this.terrain,n=this.tier,i=Cp(),s=new Dn({vertexColors:!0});this.grassUniforms={uTime:vl,uDensity:{value:1},uFade:{value:44}},s.onBeforeCompile=p=>{p.uniforms.uTime=this.grassUniforms.uTime,p.uniforms.uDensity=this.grassUniforms.uDensity,p.uniforms.uFade=this.grassUniforms.uFade,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uDensity; uniform float uFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float hsh = fract(sin(dot(iw.xz, vec2(12.9898, 78.233))) * 43758.5453);
        float keep = step(hsh, uDensity);
        float dcam = distance(cameraPosition, iw);
        keep *= 1.0 - smoothstep(uFade, uFade + 12.0, dcam);
        transformed *= keep;
        float bend = transformed.y * transformed.y;
        transformed.x += (sin(uTime * 1.9 + iw.x * 0.45 + iw.z * 0.3) * 0.12 + sin(uTime * 5.0 + iw.x * 2.0) * 0.025) * bend;
        transformed.z += cos(uTime * 1.5 + iw.z * 0.4) * 0.07 * bend;`)},this.grassMat=s;let o=66,a=16,c=n.grass*6.5;this.grassMeshes=[];let l=new Ct,h=new ve,u=new R,d=new R,f=new R(0,1,0),m=new Mt,x=ce.lodgeSite;for(let p=-o;p<o;p+=a)for(let g=-o;g<o;g+=a){let S=Math.floor(a*a*c),b=[];for(let M=0;M<S;M++){let E=p+t()*a,A=g+t()*a,_=e.heightAt(E,A);if(_<.42||e.slopeAt(E,A)>.6||Math.hypot(E,A)>62)continue;let L=Fe(E*.03+5,A*.03-3,3)*.5+.5;t()>1-.35*he(.55,.8,L)-0||Math.hypot(E-x.x,A-x.z)<2.9||b.push([E,_,A,L])}if(!b.length)continue;let y=new Pe(i,s,b.length);b.forEach((M,E)=>{let A=.45+t()*.55+Fe(M[0]*.1,M[2]*.1,2)*.3;u.set(M[0],M[1]-.03,M[2]),h.setFromAxisAngle(f,t()*6.283),d.set(.9+t()*.8,Math.max(.25,A),1),l.compose(u,h,d),y.setMatrixAt(E,l);let _=Fe(M[0]*.05,M[2]*.05,2)*.5+.5;m.setRGB(.75+_*.3+t()*.15,.85+_*.15+t()*.12,.6+t()*.2),y.setColorAt(E,m)}),y.receiveShadow=!0,y.castShadow=!1,y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),this.group.add(y),this.grassMeshes.push(y)}}buildSmall(t){let e=this.terrain,n=this.tier,i=new Ct,s=new ve,o=new R,a=new R,c=new R(0,1,0),l=new Mt,h=(O,k)=>e.heightAt(O,k)>.6&&e.slopeAt(O,k)<.4&&Math.hypot(O,k)<58,{stem:u,head:d}=Fv(),f=Math.floor(900*n.flowers),m=[];for(let O=0;O<f*6&&m.length<f;O++){let k=(t()-.5)*120,K=(t()-.5)*120;h(k,K)&&(li(k*.12,K*.12)<.5&&t()<.8||Math.hypot(k-ce.lodgeSite.x,K-ce.lodgeSite.z)<3.3||m.push([k,K]))}let x=new Pe(u,new Dn({vertexColors:!0}),m.length),p=new Pe(d,new Dn({vertexColors:!0}),m.length),g=[rt(1,1,1),rt(1,.55,.7),rt(1,.85,.25),rt(.7,.6,1),rt(1,.5,.35)];m.forEach(([O,k],K)=>{let W=.9+t()*.9;o.set(O,e.heightAt(O,k)-.02,k),s.setFromAxisAngle(c,t()*6.28),a.setScalar(W),i.compose(o,s,a),x.setMatrixAt(K,i),p.setMatrixAt(K,i),p.setColorAt(K,l.copy(g[Math.floor(t()*g.length)]))}),[x,p].forEach(O=>{O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,O.frustumCulled=!1,this.group.add(O)}),this.flowerMats=[x.material,p.material];let S=new Pe(Ov(),new Dn({vertexColors:!0}),70),b=0;for(let O of this.placements.trees){if(b>=70)break;if(t()>.3)continue;let k=t()*6.28,K=.9+t()*.7;for(let W=0;W<1+Math.floor(t()*3)&&b<70;W++){let $=O.x+Math.cos(k+W*.7)*(K+W*.15),et=O.z+Math.sin(k+W*.7)*(K+W*.15);e.heightAt($,et)<.7||(o.set($,e.heightAt($,et)-.01,et),s.setFromAxisAngle(c,t()*6.28),a.setScalar(.8+t()*.9),i.compose(o,s,a),S.setMatrixAt(b++,i))}}S.count=b,S.instanceMatrix.needsUpdate=!0,S.castShadow=!0,S.receiveShadow=!0,S.frustumCulled=!1,this.group.add(S);let y=Cp(),M=new Dn({vertexColors:!0});M.onBeforeCompile=O=>{O.uniforms.uTime=vl,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 iw = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float bend = transformed.y * transformed.y;
        transformed.x += sin(uTime * 1.6 + iw.x * 0.5 + iw.z * 0.4) * 0.10 * bend;
        transformed.z += cos(uTime * 1.3 + iw.z * 0.6) * 0.06 * bend;`)};let E=[];for(let O=0;O<6e3*Math.max(.3,n.grass)&&E.length<1600*Math.max(.4,n.grass);O++){let k=(t()-.5)*124,K=yn(k)+(t()-.5)*30,W=e.heightAt(K,k);W<-.35||W>.55||li(K*.2,k*.2)<.45||E.push([K,W,k])}let A=new Pe(y,M,E.length),_=new uo(.035,.2,3,6);_.translate(0,1.55,0),hi(_,rt(.42,.24,.12));let T=new Pe(_,new Dn({vertexColors:!0}),Math.max(1,Math.floor(E.length/5))),I=0;E.forEach((O,k)=>{let K=1.2+t()*1.1;o.set(O[0],O[1]-.02,O[2]),s.setFromAxisAngle(c,t()*6.28),a.set(1.6+t(),K,1),i.compose(o,s,a),A.setMatrixAt(k,i),A.setColorAt(k,l.setRGB(.55+t()*.3,.75+t()*.2,.4+t()*.15)),k%5===0&&I<T.instanceMatrix.count&&(a.set(1,1,1),o.y=O[1]-.02+0,a.setScalar(K/1.6*1),i.compose(o,s,a),T.setMatrixAt(I++,i))}),T.count=I,[A,T].forEach(O=>{O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,O.frustumCulled=!1,this.group.add(O)}),this.reedMat=M;let L=Bv(),C=[];for(let O=0;O<3e3&&C.length<90;O++){let k=(t()-.5)*100,K=yn(k)+(t()-.5)*16,W=e.depthAt(K,k);W<.25||W>.9||C.push([K,k])}let N=new Pe(L,new Dn({vertexColors:!0,side:De}),C.length),D=new Pe(new ni(.1,.16,7).translate(0,.09,0),new Dn({color:rt(1,.65,.78)}),Math.ceil(C.length/3)),B=0;C.forEach(([O,k],K)=>{o.set(O,ce.waterY+.03,k),s.setFromAxisAngle(c,t()*6.28),a.setScalar(.7+t()*.8),i.compose(o,s,a),N.setMatrixAt(K,i),N.setColorAt(K,l.setRGB(.8+t()*.3,.9+t()*.2,.7+t()*.2)),K%3===0&&(o.y+=.01,i.compose(o,s,a),D.setMatrixAt(B++,i))}),D.count=B,[N,D].forEach(O=>{O.instanceMatrix.needsUpdate=!0,O.frustumCulled=!1,this.group.add(O)})}setGrassDensity(t){this.grassUniforms&&(this.grassUniforms.uDensity.value=t)}setGrassFade(t){this.grassUniforms&&(this.grassUniforms.uFade.value=t)}};var bl=class{constructor(t,e,n){this.scene=t,this.terrain=e,this.items=[],this.nextId=1;let i=new ee({map:n.barkC,normalMap:n.barkN,roughness:.9}),s=new ee({color:rt(.92,.74,.46),roughness:.8});this.mats=[i,s,s],this.geo=new Ne(.13,.145,1.05,10,1,!1),this.geo.rotateZ(Math.PI/2),this.group=new fe,t.add(this.group)}makeMesh(t,e){let n=new fe;return(t===1?[[0,.13,0]]:t===2?[[0,.13,-.15],[.05,.13,.15]]:[[0,.13,-.15],[.03,.13,.15],[.02,.36,0]]).forEach(([s,o,a],c)=>{let l=new It(this.geo,this.mats);l.position.set(s,o,a),l.rotation.y=(e()-.5)*.35,l.scale.set(.85+e()*.3,1,1),l.castShadow=!0,l.receiveShadow=!0,n.add(l)}),n}spawn(t,e,n,{key:i=null,pop:s=null}={}){let o=ln((Math.floor(t*31)^Math.floor(e*57))+7),a=this.makeMesh(n,o),c=this.terrain.heightAt(t,e);a.position.set(t,c+.02,e),a.rotation.y=o()*6.28,this.group.add(a);let l={id:this.nextId++,key:i,x:t,z:e,y:c,wood:n,mesh:a,state:"ground",t:0,vy:0,bob:o()*6};return s&&(l.state="pop",l.px=s.x,l.pz=s.z,l.vy=5.5,l.sx=s.sx,l.sz=s.sz,l.py=s.y,a.position.set(s.x,s.y,s.z)),this.items.push(l),l}nearest(t,e,n){let i=null,s=n*n;for(let o of this.items){if(o.state!=="ground")continue;let a=o.x-t,c=o.z-e,l=a*a+c*c;l<s&&(s=l,i=o)}return i}throwLog(t,e,n=0,i){let s=this.makeMesh(1,Math.random);s.position.copy(t),s.visible=!1,this.group.add(s),this.items.push({id:this.nextId++,key:null,state:"throw",t:-n,from:t.clone(),to:e.clone(),mesh:s,wood:0,onLand:i})}remove(t){this.group.remove(t.mesh);let e=this.items.indexOf(t);e>=0&&this.items.splice(e,1)}update(t,e,n){for(let i of this.items)if(i.state==="pop"){i.vy-=16*t;let s=i.mesh;s.position.x+=i.sx*t,s.position.z+=i.sz*t,s.position.y+=i.vy*t,s.rotation.x+=t*5,s.rotation.z+=t*3;let o=this.terrain.heightAt(s.position.x,s.position.z)+.02;s.position.y<=o&&i.vy<0&&(Math.abs(i.vy)>2.2?(i.vy=-i.vy*.32,s.rotation.x*=.3,s.rotation.z*=.3,n?.onBounce?.(i)):(i.state="ground",i.x=s.position.x,i.z=s.position.z,i.y=o,s.position.y=o,s.rotation.x=0,s.rotation.z=0))}else if(i.state==="fly"){i.t+=t/.28;let s=Math.min(1,i.t),o=s*s;i.mesh.position.lerpVectors(i.from,i.to,o),i.mesh.position.y+=Math.sin(s*Math.PI)*.6,i.mesh.scale.setScalar(1-.75*o),s>=1&&(i.state="done",n?.onCollected?.(i),this.remove(i))}else if(i.state==="throw"){if(i.t+=t/.6,i.t<0)continue;let s=Math.min(1,i.t);i.mesh.visible=!0,i.mesh.position.lerpVectors(i.from,i.to,s),i.mesh.position.y+=Math.sin(s*Math.PI)*1.5,i.mesh.rotation.x+=t*9,i.mesh.rotation.z+=t*5,s>=1&&(i.onLand&&i.onLand(i),this.remove(i))}else i.state==="ground"&&(i.mesh.position.y=i.y+.02)}};var Ge=2.35,Nn=1.65,ui=2.78,Li=1.55,Ke=.14,Lr=2.75,Tu=.42;function zv(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.fillStyle="#c28a52",t.fillRect(0,0,128,128);for(let n=0;n<90;n++){let i=Math.random()*128,s=.06+Math.random()*.14;t.strokeStyle=`rgba(${Math.random()<.5?"70,40,15":"230,190,130"},${s})`,t.lineWidth=.6+Math.random()*1.8,t.beginPath(),t.moveTo(0,i),t.bezierCurveTo(40,i+(Math.random()-.5)*6,90,i+(Math.random()-.5)*6,128,i+(Math.random()-.5)*4),t.stroke()}t.strokeStyle="rgba(60,30,10,0.35)",t.lineWidth=2,t.strokeRect(1,1,126,126);let e=new Xn(r);return e.colorSpace=xe,e.wrapS=e.wrapT=Sn,e.anisotropy=4,e}function Ip(r,t){return r.onBeforeCompile=e=>{e.uniforms.uCut=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCut; varying float vLy;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vLy > uCut) discard;`)},r}var El=class{constructor(t,e,n){this.scene=t,this.terrain=e,this.x=ce.lodgeSite.x,this.z=ce.lodgeSite.z,this.y=e.heightAt(this.x,this.z),this.group=new fe,this.group.position.set(this.x,this.y,this.z),t.add(this.group),this.steps=0,this.anim=[],this.pops=[];let i=ln(77),s=new ee({map:zv(),roughness:.85}),o=new ee({map:s.map,color:rt(.62,.42,.26),roughness:.9}),a=new ee({map:n.rockC,color:rt(.78,.76,.72),roughness:.95,flatShading:!0});this.timber=[],this.stones=[];let c=(j,tt,Rt,Vt,qt,Y,Q,ft=0,zt=1)=>this.timber.push({step:j,x:tt,y:Rt,z:Vt,sx:qt,sy:Y,sz:Q,rotY:ft,shade:zt});for(let j=0;j<7;j++)c(2,Ge+.95,Ke*.5+.02,(j-3)*.27,1.9,.09,.25,0,.95+i()*.15);for(let j=0;j<8;j++){let tt=j/8*Math.PI*2+.2;Math.abs(Math.atan2(Math.sin(tt),Math.cos(tt)))<Tu+.1||c(3,Math.cos(tt)*(Ge+.06),Ke+Nn/2,Math.sin(tt)*(Ge+.06),.17,Nn+.1,.17,Math.PI/2-tt,.75)}for(let j of[-1,1]){let tt=j*(Tu+.02);c(3,Math.cos(tt)*(Ge+.08),Ke+Nn/2+.05,Math.sin(tt)*(Ge+.08),.2,Nn+.2,.2,Math.PI/2-tt,.7)}let l=30;for(let j=0;j<l;j++){let tt=j/l*Math.PI*2;if(Math.abs(Math.atan2(Math.sin(tt),Math.cos(tt)))<Tu)continue;let Rt=Nn-.04+(i()-.5)*.08;c(j%2===0?4:5,Math.cos(tt)*Ge,Ke+Rt/2,Math.sin(tt)*Ge,.265,Rt,.075,Math.PI/2-tt,.9+i()*.2)}for(let j of[-1,1])c(11,Ge+1.82,Ke+.45,j*.9,.12,.9,.12,0,.8),c(11,Ge+.95,Ke+.78,j*.9,1.9,.08,.08,0,.9),c(11,Ge+.95,Ke+.45,j*.9,1.9,.06,.06,0,.9);c(11,Ge+2,.04,0,.28,.08,1.2,0,.9);for(let j=0;j<26;j++){let tt=j/26*Math.PI*2+i()*.1;if(Math.abs(Math.atan2(Math.sin(tt),Math.cos(tt)))<.36)continue;let Rt=.26+i()*.2,Vt=Ge+.22+i()*.12;this.stones.push({step:1,x:Math.cos(tt)*Vt,y:Rt*.35,z:Math.sin(tt)*Vt,s:Rt,rot:i()*6.28,sy:.55+i()*.3})}for(let j of[-1,1])for(let tt=0;tt<3;tt++)this.stones.push({step:1,x:Ge+.5+tt*.7,y:.12,z:j*(1.3+i()*.2),s:.22+i()*.12,rot:i()*6.28,sy:.6});this.timberMesh=new Pe(new mn(1,1,1),s,this.timber.length),this.timberMesh.castShadow=!0,this.timberMesh.receiveShadow=!0,this.timberMesh.frustumCulled=!1;let h=new Mt;this.timber.forEach((j,tt)=>{j.q=new ve().setFromAxisAngle(new R(0,1,0),j.rotY),this.timberMesh.setColorAt(tt,h.setScalar(j.shade)),this.setTimber(tt,0)}),this.group.add(this.timberMesh),this.stoneMesh=new Pe(new Ei(1,1),a,this.stones.length),this.stoneMesh.castShadow=!0,this.stoneMesh.receiveShadow=!0,this.stoneMesh.frustumCulled=!1,this.stones.forEach((j,tt)=>{j.q=new ve().setFromAxisAngle(new R(0,1,0),j.rot),this.stoneMesh.setColorAt(tt,h.setScalar(.85+i()*.3)),this.setStone(tt,0)}),this.group.add(this.stoneMesh);let u=new It(new Ne(Ge+.05,Ge+.12,Ke,32),o);u.position.y=Ke/2,u.receiveShadow=!0,u.castShadow=!0,u.userData.step=2,this.group.add(u),this.ribs=new fe;let d=new ee({map:s.map,color:rt(.7,.48,.3),roughness:.85}),f=[];for(let j=0;j<=20;j++){let tt=j/20*Math.PI;f.push(new R(Math.cos(tt)*(ui+.03),Math.sin(tt)*(Li+.03),0))}let m=new bo(new pr(f),28,.065,6,!1);for(let j=0;j<6;j++){let tt=new It(m,d);tt.rotation.y=j/6*Math.PI,tt.castShadow=!0,this.ribs.add(tt)}let x=new It(new xr(ui+.03,.09,8,48),d);x.rotation.x=Math.PI/2,x.castShadow=!0,this.ribs.add(x),this.ribs.position.y=Ke+Nn,this.ribs.userData.step=6,this.group.add(this.ribs),this.cutWood={value:-1},this.cutMoss={value:-1};let p=Ip(new ee({map:s.map,color:rt(.55,.36,.22),roughness:.9,side:De}),this.cutWood),g=new It(new an(1,36,14,0,Math.PI*2,0,Math.PI/2),p);g.scale.set(ui-.02,Li,ui-.02),g.position.y=Ke+Nn,g.castShadow=!0,g.receiveShadow=!0,this.group.add(g);let S=new an(1,48,22,0,Math.PI*2,0,Math.PI/2);{let j=S.attributes.position,tt=new Float32Array(j.count*3),Rt=new Mt,Vt=rt(.26,.46,.14),qt=rt(.52,.72,.24),Y=rt(.4,.55,.2);for(let Q=0;Q<j.count;Q++){let ft=j.getX(Q),zt=j.getY(Q),Et=j.getZ(Q),Gt=Fe(ft*3.2+4,Et*3.2-zt*2,3)*.5+.5,de=Fe(ft*9,Et*9+zt*5,2)*.5+.5;Rt.copy(Vt).lerp(qt,Gt).lerp(Y,de*.4);let it=.82+.3*zt;tt[Q*3]=Rt.r*it,tt[Q*3+1]=Rt.g*it,tt[Q*3+2]=Rt.b*it;let at=1+(de-.5)*.045+(Gt-.5)*.03;j.setXYZ(Q,ft*at,zt*at,Et*at)}S.setAttribute("color",new Zt(tt,3)),S.computeVertexNormals()}let b=new It(S,Ip(new ee({vertexColors:!0,roughness:1,side:De}),this.cutMoss));b.scale.set(ui+.1,Li+.1,ui+.1),b.position.y=Ke+Nn-.02,b.castShadow=!0,b.receiveShadow=!0,this.group.add(b),this.tufts=new fe;let y=new an(1,8,6),M=new ee({color:rt(.42,.66,.2),roughness:1});for(let j=0;j<26;j++){let tt=i()*Math.PI*2,Rt=.1+i()*.75,Vt=Math.sqrt(1-Rt*Rt)*(Li+.1),qt=new It(y,M),Y=.14+i()*.16;qt.scale.set(Y,Y*.6,Y),qt.position.set(Math.cos(tt)*Rt*(ui+.08),Ke+Nn+Vt-.02,Math.sin(tt)*Rt*(ui+.08)),qt.castShadow=!0,this.tufts.add(qt)}let E=[rt(1,.6,.75),rt(1,.9,.35),rt(1,1,1),rt(.75,.65,1)];for(let j=0;j<14;j++){let tt=i()*Math.PI*2,Rt=.12+i()*.7,Vt=Math.sqrt(1-Rt*Rt)*(Li+.1)+.1,qt=new It(new an(.06,6,5),new ee({color:E[j%4],roughness:.7}));qt.position.set(Math.cos(tt)*Rt*(ui+.1),Ke+Nn+Vt,Math.sin(tt)*Rt*(ui+.1)),this.tufts.add(qt)}this.tufts.userData.step=10,this.group.add(this.tufts),this.glassMat=new ee({color:rt(1,.78,.4),emissive:rt(1,.65,.25),emissiveIntensity:.6,roughness:.3}),this.windows=new fe;for(let j of[1.15,-1.15,Math.PI]){let tt=new fe,Rt=new It(new xr(.31,.055,8,22),d);Rt.castShadow=!0;let Vt=new It(new bi(.29,22),this.glassMat),qt=new It(new mn(.58,.035,.03),d),Y=new It(new mn(.035,.58,.03),d);Vt.position.z=-.01,qt.position.z=Y.position.z=.012,tt.add(Vt,Rt,qt,Y),tt.position.set(Math.cos(j)*(Ge+.06),Ke+1.02,Math.sin(j)*(Ge+.06)),tt.rotation.y=Math.PI/2-j,this.windows.add(tt)}this.windows.userData.step=10,this.group.add(this.windows);let A=new _s,_=.46,T=1.05;A.moveTo(-_,0),A.lineTo(-_,T),A.absarc(0,T,_,Math.PI,0,!0),A.lineTo(_,0),A.lineTo(-_,0),this.door=new fe;let I=new It(new gr(A,{depth:.07,bevelEnabled:!1}),new ee({map:s.map,color:rt(.7,.44,.24),roughness:.8}));I.castShadow=!0;let L=new _s;L.moveTo(-.58,0),L.lineTo(-.58,1.1),L.absarc(0,1.1,.58,Math.PI,0,!0),L.lineTo(.58,0),L.lineTo(_,0),L.lineTo(_,T),L.absarc(0,T,_,0,Math.PI,!1),L.lineTo(-_,0),L.lineTo(-.58,0);let C=new It(new gr(L,{depth:.1,bevelEnabled:!1}),d);C.castShadow=!0;let N=new It(new an(.045,8,6),new ee({color:rt(.8,.65,.3),metalness:.7,roughness:.35}));N.position.set(.26,.62,.1);let D=new It(new mn(.8,.05,.02),d);D.position.set(0,.35,.075);let B=D.clone();B.position.y=.85,this.door.add(I,C,N,D,B),this.door.position.set(Ge-.02,Ke,0),this.door.rotation.y=Math.PI/2,this.door.userData.step=11,this.group.add(this.door),this.hole=new It(new bi(.44,16),new ke({color:rt(.06,.04,.03)})),this.hole.position.set(Ge-.05,Ke+.5,0),this.hole.rotation.y=Math.PI/2,this.hole.scale.y=1.2,this.group.add(this.hole),this.lantern=new fe;let O=new It(new Ne(.035,.045,1.3,6),d);O.position.y=.65;let k=new It(new mn(.16,.2,.16),this.glassMat);k.position.y=1.38;let K=new It(new ni(.13,.12,4),o);K.position.y=1.54,K.rotation.y=Math.PI/4,this.lantern.add(O,k,K),this.lantern.position.set(Ge+1.85,Ke,-.9),this.lantern.userData.step=11,this.group.add(this.lantern),this.light=new Es(rt(1,.7,.38),0,10,1.5),this.light.position.set(Ge+1.8,1.7,-.5),this.group.add(this.light),this.chimney=new fe;let W=new It(new Ne(.27,.32,1.5,9),a);W.position.y=.75,W.castShadow=!0,W.receiveShadow=!0;let $=new It(new Ne(.34,.3,.14,9),a);$.position.y=1.55,$.castShadow=!0,this.chimney.add(W,$),this.chimney.position.set(-1.05,Ke+Nn+.85,-1.15),this.chimney.userData.step=12,this.group.add(this.chimney);let et=new vs(Lr*1.12,Lr*1.12+.18,48);et.rotateX(-Math.PI/2),this.marker=new It(et,new ke({color:rt(1,.86,.4),transparent:!0,opacity:.7,depthWrite:!1})),this.marker.position.y=.06,this.marker.renderOrder=3,this.group.add(this.marker),this.stakes=new fe;for(let j=0;j<10;j++){let tt=j/10*Math.PI*2,Rt=new It(new Ne(.04,.06,.8,5),new ee({color:rt(.62,.45,.25),roughness:.9}));Rt.position.set(Math.cos(tt)*Lr*1.12,.3,Math.sin(tt)*Lr*1.12),Rt.rotation.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3),Rt.castShadow=!0,this.stakes.add(Rt)}this.group.add(this.stakes),this.setStepsInstant(0)}setTimber(t,e){let n=this.timber[t],i=this._m||(this._m=new Ct),s=this._p||(this._p=new R),o=this._s||(this._s=new R);if(e<=0){i.makeScale(0,0,0),this.timberMesh.setMatrixAt(t,i);return}let a=e<1?1+.2*Math.sin(e*Math.PI)*(1-e)*2-(1-e)*(1-e):1;s.set(n.x,n.y+(1-e)*.8,n.z),o.set(n.sx*Math.min(1,a),n.sy*a,n.sz*Math.min(1,a)),i.compose(s,n.q,o),this.timberMesh.setMatrixAt(t,i)}setStone(t,e){let n=this.stones[t],i=this._m||(this._m=new Ct),s=this._p||(this._p=new R),o=this._s||(this._s=new R);if(e<=0){i.makeScale(0,0,0),this.stoneMesh.setMatrixAt(t,i);return}let a=e<1?1+.25*Math.sin(e*Math.PI)*(1-e)*2-(1-e)*(1-e):1;s.set(n.x,n.y+(1-e)*.6,n.z),o.set(n.s*a,n.s*n.sy*a,n.s*a),i.compose(s,n.q,o),this.stoneMesh.setMatrixAt(t,i)}get done(){return this.steps>=tn.steps}get obstacleRadius(){return this.steps>0?Lr*1.05:0}get doorWorld(){return new R(this.x+Lr+1.2,this.y,this.z)}get chimneyWorld(){return new R(this.x-1.05,this.y+Ke+Nn+2.75,this.z-1.15)}cutsFor(t){return{wood:t>=8?Li+.3:t===7?Li*.5:-1,moss:t>=10?Li+.4:t===9?Li*.55:-1}}setStepsInstant(t){this.steps=t,this.anim.length=0,this.pops.length=0,this.timber.forEach((n,i)=>this.setTimber(i,n.step<=t?1:0)),this.timberMesh.instanceMatrix.needsUpdate=!0,this.stones.forEach((n,i)=>this.setStone(i,n.step<=t?1:0)),this.stoneMesh.instanceMatrix.needsUpdate=!0,this.group.children.forEach(n=>{n.userData.step!==void 0&&(n.visible=n.userData.step<=t,n.scale.setScalar(1))}),this.hole.visible=t>=11;let e=this.cutsFor(t);this.cutWood.value=e.wood,this.cutMoss.value=e.moss,this.stakes.visible=t<tn.steps,this.marker.visible=t<tn.steps,this.cutTargets=null,this.finishT=void 0,this.light.intensity=t>=12?5:0}addStep(){if(this.steps>=tn.steps)return this.steps;let t=++this.steps;return this.timber.forEach((e,n)=>{e.step===t&&this.anim.push({kind:"t",i:n,t:-(Math.random()*.5)})}),this.stones.forEach((e,n)=>{e.step===t&&this.anim.push({kind:"s",i:n,t:-(Math.random()*.5)})}),this.group.children.forEach(e=>{e.userData.step===t&&(e.visible=!0,e.scale.setScalar(.001),this.pops.push({o:e,t:-.15}))}),t===11&&(this.hole.visible=!0),this.cutTargets=this.cutsFor(t),t>=tn.steps&&(this.stakes.visible=!1,this.marker.visible=!1,this.finishT=0),t}update(t,e){if(this.anim.length){for(let i=this.anim.length-1;i>=0;i--){let s=this.anim[i];s.t+=t/.4;let o=le(s.t,0,1);s.kind==="t"?this.setTimber(s.i,s.t<0?0:o):this.setStone(s.i,s.t<0?0:o),s.t>=1&&this.anim.splice(i,1)}this.timberMesh.instanceMatrix.needsUpdate=!0,this.stoneMesh.instanceMatrix.needsUpdate=!0}for(let i=this.pops.length-1;i>=0;i--){let s=this.pops[i];s.t+=t/.5;let o=le(s.t,0,1),a=o<=0?.001:1+Math.sin(o*Math.PI)*.22*(1-o)*2-Math.pow(1-o,3);s.o.scale.setScalar(Math.max(.001,a)),s.t>=1&&(s.o.scale.setScalar(1),this.pops.splice(i,1))}if(this.cutTargets){let i=this.cutTargets,s=1-Math.exp(-3.5*t);this.cutWood.value+=(i.wood-this.cutWood.value)*s,this.cutMoss.value+=(i.moss-this.cutMoss.value)*s,Math.abs(i.wood-this.cutWood.value)<.01&&Math.abs(i.moss-this.cutMoss.value)<.01&&(this.cutWood.value=i.wood,this.cutMoss.value=i.moss,this.cutTargets=null)}let n=this.nightK||0;this.finishT!==void 0&&(this.finishT+=t,this.finishT>3&&(this.finishT=void 0)),this.glassMat.emissiveIntensity=this.steps>=10?.5+1.9*n:.2,this.done&&(this.light.intensity=4+14*n+Math.sin(e*7)*(.5+.8*n)+Math.sin(e*11.3)*(.3+.6*n)),this.marker.material.opacity=.45+.3*Math.sin(e*3),this.marker.scale.setScalar(1+.012*Math.sin(e*3))}};function Pp(){let i=new Float32Array(14661),s=new Float32Array(4887*3),o=[],a=new Mt,c=rt(.22,.38,.2),l=rt(.5,.46,.44),h=rt(.96,.97,1),u=rt(.16,.27,.17);for(let m=0;m<=26;m++){let x=m/26,p=96+234*Math.pow(x,1.35);for(let g=0;g<=180;g++){let S=g/180*Math.PI*2,b=Math.cos(S)*p,y=Math.sin(S)*p,M=1-Math.abs(Fe(b*.006+3,y*.006-2,4)),E=Fe(b*.0025-7,y*.0025+9,3)*.5+.5,A=36+12*he(96,150,p)+(60+110*E)*Math.pow(M,2.2)*he(100,190,p)*(1-.55*he(240,330,p));A+=Fe(b*.03,y*.03,3)*6;let _=(m*181+g)*3;i[_]=b,i[_+1]=A,i[_+2]=y;let T=he(78,112,A+Fe(b*.02,y*.02,2)*14),I=he(46,72,A);a.copy(u).lerp(c,he(36,55,A)*(.6+.4*Fe(b*.01,y*.01,2))).lerp(l,I).lerp(h,T),s[_]=a.r,s[_+1]=a.g,s[_+2]=a.b}}for(let m=0;m<26;m++)for(let x=0;x<180;x++){let p=m*181+x,g=p+1,S=p+180+1,b=S+1;o.push(p,g,S,g,b,S)}let d=new jt;d.setAttribute("position",new Zt(i,3)),d.setAttribute("color",new Zt(s,3)),d.setIndex(o),d.computeVertexNormals();let f=new It(d,new ee({vertexColors:!0,roughness:1,flatShading:!1}));return f.frustumCulled=!1,f.position.y=-3,f}var kv=`
varying vec2 vUv; varying vec3 vW;
#include <fog_pars_vertex>
void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition;
#include <fog_vertex>
}`,Hv=`
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
}`;function Lp(r){let o=[],a=[],c=[];for(let f=0;f<=26;f++){let m=-64.5+-12.5*f/26,x=yn(m);for(let p=0;p<=8;p++){let g=x-3.3+6.6*p/8;o.push(g,Math.max(r.heightAt(g,m)+.15,.02),m),a.push(p/8,f/26)}}for(let f=0;f<26;f++)for(let m=0;m<8;m++){let x=f*9+m,p=x+1,g=x+8+1,S=g+1;c.push(x,p,g,p,S,g)}let l=new jt;l.setAttribute("position",new Ft(o,3)),l.setAttribute("uv",new Ft(a,2)),l.setIndex(c);let h=new He({vertexShader:kv,fragmentShader:Hv,transparent:!0,depthWrite:!1,side:De,fog:!0,uniforms:wr.merge([mt.fog,{uTime:{value:0},uLight:{value:new Mt(1,1,1)}}])}),u=new It(l,h);u.renderOrder=2,u.frustumCulled=!1;let d=yn(-64.5);return{mesh:u,base:new R(d,.2,-64.5-.5),update(f,m){h.uniforms.uTime.value=f,h.uniforms.uLight.value.setScalar(.25+.75*(1-m))}}}var Zo=40,Qi=36,Tl=class{constructor(t,e,n,i){this.terrain=e,this.x=i.x+3.9,this.z=i.z+3.4,this.y=e.heightAt(this.x,this.z);let s=new Ne(.12,.13,1.15,9,1,!1).rotateZ(Math.PI/2),o=new ee({map:n.barkC,normalMap:n.barkN,roughness:.9}),a=new ee({color:new Mt().setRGB(.83,.55,.22,xe),roughness:.8});this.mesh=new Pe(s,[o,a,a],Qi),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,t.add(this.mesh),this.slots=[];let c=0,l=8;for(;this.slots.length<Qi;){for(let h=0;h<l&&this.slots.length<Qi;h++)this.slots.push({x:0,y:.13+c*.215,z:(h-(l-1)/2)*.27,rot:(Math.random()-.5)*.06});c++,l--}this.shown=0,this.anim=new Array(Qi).fill(1),this.count=0,this._m=new Ct,this._q=new ve,this._p=new R,this._s=new R;for(let h=0;h<Qi;h++)this.write(h,0);this.mesh.count=Qi}write(t,e){let n=this.slots[t];this._q.setFromAxisAngle(new R(0,1,0),n.rot),this._p.set(this.x+n.x,this.y+n.y+(1-e)*.8,this.z+n.z),this._s.setScalar(Math.max(1e-4,e)),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(t,this._m)}set(t,e){let n=Math.min(Qi,t);for(let i=0;i<Qi;i++)i<n?i>=this.shown&&(this.anim[i]=e?1:-(i-this.shown)*.18):this.anim[i]=0,e&&this.write(i,i<n?1:0);this.shown=n,this.count=t,this.mesh.instanceMatrix.needsUpdate=!0}update(t){let e=!1;for(let n=0;n<this.shown;n++)if(this.anim[n]<1){this.anim[n]+=t/.35;let i=le(this.anim[n],0,1);this.write(n,i<0?0:i),e=!0}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}};function Dp(r){let t=new Map,e=new Map,n=r.clone();return Np(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Np(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Np(r.children[n],t.children[n],e)}var wl=class extends si{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Lu(e)}),this.register(function(e){return new Du(e)}),this.register(function(e){return new Vu(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new Uu(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new Ou(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new Pu(e)}),this.register(function(e){return new zu(e)}),this.register(function(e){return new Nu(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new ku(e)}),this.register(function(e){return new Cu(e)}),this.register(function(e){return new Al(e,re.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Al(e,re.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Xu(e)})}load(t,e,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(t);o=Ci.resolveURL(l,this.path)}else o=Ci.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new _r(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===zp){try{o[re.KHR_BINARY_GLTF]=new qu(t)}catch(u){i&&i(u);return}s=JSON.parse(o[re.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Qu(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case re.KHR_MATERIALS_UNLIT:o[u]=new Iu;break;case re.KHR_DRACO_MESH_COMPRESSION:o[u]=new Yu(s,this.dracoLoader);break;case re.KHR_TEXTURE_TRANSFORM:o[u]=new Ku;break;case re.KHR_MESH_QUANTIZATION:o[u]=new Zu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function Vv(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function We(r,t,e){let n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cu=class{constructor(t){this.parser=t,this.name=re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new Mt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ts(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Es(h),l.distance=u;break;case"spot":l=new Ro(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},Iu=class{constructor(){this.name=re.KHR_MATERIALS_UNLIT}getMaterialType(){return ke}extendParams(t,e,n){let i=[];t.color=new Mt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],dn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,xe))}return Promise.all(i)}},Pu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Lu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ct(s,s)}return Promise.all(i)}},Du=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_DISPERSION}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Nu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Uu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SHEEN}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],dn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,xe)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Fu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Ou=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_VOLUME}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(s[0],s[1],s[2],dn),Promise.all(i)}},Bu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IOR}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},zu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SPECULAR}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(s[0],s[1],s[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,xe)),Promise.all(i)}},ku=class{constructor(t){this.parser=t,this.name=re.EXT_MATERIALS_BUMP}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},Hu=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return We(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){let n=We(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Vu=class{constructor(t){this.parser=t,this.name=re.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}},Gu=class{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},Wu=class{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},Al=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Xu=class{constructor(t){this.name=re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let x=new Ct,p=new R,g=new ve,S=new R(1,1,1),b=new Pe(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,x.compose(p,g,S));let y=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];b.instanceColor=new Mi(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let A=b.geometry;y=new jt,y.name=A.name;for(let _ in A.attributes)y.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)y.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&y.setIndex(A.index),y.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)y.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(y.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(y.boundingSphere=A.boundingSphere.clone()),y.drawRange.start=A.drawRange.start,y.drawRange.count=A.drawRange.count,y.userData=Object.assign({},A.userData),b.geometry=y}let E=c[M];y.setAttribute(M,new Mi(E.array,E.itemSize,E.normalized))}Ce.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},zp="glTF",Jo=12,Up={JSON:1313821514,BIN:5130562},qu=class{constructor(t){this.name=re.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Jo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==zp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Jo,s=new DataView(t,Jo),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Up.JSON){let l=new Uint8Array(t,Jo+o,a);this.content=n.decode(l)}else if(c===Up.BIN){let l=Jo+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=$u[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=$u[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=Dr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],p=c[m];p!==void 0&&(x.normalized=p)}u(f)},a,l,dn,d)})})}},Ku=class{constructor(){this.name=re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},Zu=class{constructor(){this.name=re.KHR_MESH_QUANTIZATION}},Rl=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,x=m-l,p=-2*f+3*d,g=f-d,S=1-p,b=g-d+u;for(let y=0;y!==a;y++){let M=o[x+y+a],E=o[x+y+c]*h,A=o[m+y+a],_=o[m+y]*h;s[y]=S*M+b*E+p*A+g*_}return s}},Gv=new ve,Ju=class extends Rl{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return Gv.fromArray(s).normalize().toArray(s),s}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fp={9728:Be,9729:ze,9984:_c,9985:Sr,9986:Cs,9987:Yn},Op={33071:In,33648:nr,10497:Sn},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},Au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ee({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),r.DefaultMaterial}function Ls(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function di(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qv(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Yv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kv(r){let t,e=r.extensions&&r.extensions[re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ru(e.attributes):t=r.indices+":"+Ru(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Ru(r.targets[n]);return t}function Ru(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function ju(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Jv=new Ct,Qu=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Vv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Ss(this.options.manager):this.textureLoader=new Co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ls(s,a,i),di(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[re.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Ci.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=wu[i.type],a=Dr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Zt(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=wu[i.type],l=Dr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,p;if(f&&f!==u){let g=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=e.cache.get(S);b||(x=new l(a,g*f,i.count*f/h),b=new fs(x,f/h),e.cache.add(S,b)),p=new Vi(b,c,d%f/h,m)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),p=new Zt(x,c,m);if(i.sparse!==void 0){let g=wu.SCALAR,S=Dr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new S(o[1],b,i.sparse.count*g),E=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new Zt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,_=M.length;A<_;A++){let T=M[A];if(p.setX(T,E[A*c]),c>=2&&p.setY(T,E[A*c+1]),c>=3&&p.setZ(T,E[A*c+2]),c>=4&&p.setW(T,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){let i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Fp[d.magFilter]||ze,h.minFilter=Fp[d.minFilter]||Yn,h.wrapS=Op[d.wrapS]||Sn,h.wrapT=Op[d.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Be&&h.minFilter!==ze,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(x){let p=new Je(x);p.needsUpdate=!0,d(p)}),e.load(Ci.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),di(u,o),u.userData.mimeType=o.mimeType||Zv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[re.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[re.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Gi,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new dr,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ee}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],o,a={},c=s.extensions||{},l=[];if(c[re.KHR_MATERIALS_UNLIT]){let u=i[re.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new Mt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],dn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,xe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=De);let h=s.alphaMode||Au.OPAQUE;if(h===Au.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Au.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ke&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ke&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ke){let u=s.emissiveFactor;a.emissive=new Mt().setRGB(u[0],u[1],u[2],dn)}return s.emissiveTexture!==void 0&&o!==ke&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,xe)),Promise.all(l).then(function(){let u=new o(a);return s.name&&(u.name=s.name),di(u,s),e.associations.set(u,{materials:t}),s.extensions&&Ls(i,u,s),u})}createUniqueName(t){let e=be.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Bp(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=Kv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[re.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Bp(new jt,l,e),l.mode===Un.TRIANGLE_STRIP?d=d.then(f=>Su(f,ko)):l.mode===Un.TRIANGLE_FAN&&(d=d.then(f=>Su(f,Tr))),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Xv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],p=o[f],g,S=l[f];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0){let b=s.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&y?new gs(x,S):new It(x,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Un.LINES)g=new ao(x,S);else if(p.mode===Un.LINE_STRIP)g=new xs(x,S);else if(p.mode===Un.LINE_LOOP)g=new co(x,S);else if(p.mode===Un.POINTS)g=new Si(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Yv(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),di(g,s),p.extensions&&Ls(i,g,p),e.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Ls(i,u[0],s),u[0];let d=new fe;s.extensions&&Ls(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ye(Go.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new qi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),di(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ct;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new oo(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],x=f.target,p=x.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,S=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let b=0,y=d.length;b<y;b++){let M=d[b],E=f[b],A=m[b],_=x[b],T=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let I=n._createAnimationTracks(M,E,A,_,T);if(I)for(let L=0;L<I.length;L++)g.push(I[L])}let S=new Ms(s,void 0,g);return di(S,i),S})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Jv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new lr:l.length>1?h=new fe:l.length===1?h=l[0]:h=new Ce,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),di(h,s),s.extensions&&Ls(n,h,s),s.matrix!==void 0){let u=new Ct;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new fe;n.name&&(s.name=i.createUniqueName(n.name)),di(s,n),n.extensions&&Ls(e,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?s.add(Dp(d)):s.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof on||d instanceof Je)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let o=[],a=t.name?t.name:t.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ts[s.path]===ts.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(a);let h;switch(ts[s.path]){case ts.weights:h=wi;break;case ts.rotation:h=Ai;break;case ts.translation:case ts.scale:h=Xi;break;default:n.itemSize===1?h=wi:h=Xi;break}let u=i.interpolation!==void 0?Wv[i.interpolation]:us,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let x=new h(c[f]+"."+ts[s.path],e.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=ju(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Ai?Ju:Rl;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $v(r,t,e){let n=t.attributes,i=new bn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let h=ju(Dr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new R,c=new R;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=ju(Dr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Bp(r,t,e){let n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=$u[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){let o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return ie.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`),di(r,t),$v(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?qv(r,t.targets,e):r})}var Il=12,Cl=class{constructor(){this.root=new fe,this.pivot=new fe,this.root.add(this.pivot),this.actions={},this.current=null,this.onStep=null,this.scale=1.05,this.carry=0,this._tmp=new R}async load(t,e){let n=await new wl().loadAsync(t);this.model=n.scene,this.model.scale.setScalar(this.scale),this.pivot.add(this.model);let i=new ke({color:rt(.24,.11,.04),side:$e});i.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * 0.006;`)};let s=[];this.model.traverse(o=>{o.isSkinnedMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,s.push(o))});for(let o of s){let a=new gs(o.geometry,i);a.bind(o.skeleton,o.bindMatrix),a.frustumCulled=!1,o.parent.add(a),a.position.copy(o.position),a.quaternion.copy(o.quaternion),a.scale.copy(o.scale)}this.mixer=new Io(this.model);for(let o of n.animations){let a=this.mixer.clipAction(o);a.enabled=!0,this.actions[o.name]=a}this.buildPack(e),this.play("Idle",0)}buildPack(t){this.hips=this.model.getObjectByName("Spine"),this.model.updateMatrixWorld(!0);let e=new Ct().copy(this.model.matrixWorld).invert();this.hipsRestInv=new Ct().multiplyMatrices(e,this.hips.matrixWorld).invert(),this.pack=new fe,this.pack.matrixAutoUpdate=!1,this.model.add(this.pack),this.packRest=new Ct;let n=new Ne(.072,.08,.84,9,1,!1).rotateZ(Math.PI/2),i=new ee({map:t.barkC,normalMap:t.barkN,roughness:.9}),s=new ee({color:rt(.92,.74,.46),roughness:.8});this.logMeshes=[];let o=[.5,.65,.8,.95],a=[-.58,-.74,-.9],c=0;for(let h of a)for(let u of o){let d=new It(n,[i,s,s]);d.position.set((Math.random()-.5)*.03,u,h+(Math.random()-.5)*.015),d.rotation.y=(Math.random()-.5)*.1,d.scale.set(.9+Math.random()*.2,1,1),d.castShadow=!0,d.visible=!1,d.userData.order=c++,this.pack.add(d),this.logMeshes.push(d)}let l=new ee({map:null,color:rt(.36,.2,.1),roughness:.7});this.straps=[];for(let h of[-.2,.2]){let u=new It(new mn(.05,.6,.5),l);u.position.set(h,.72,-.72),u.visible=!1,u.castShadow=!0,this.pack.add(u),this.straps.push(u)}this.setCarry(0),this.updatePack()}setCarry(t){this.carry=Math.min(t,Il),this.logMeshes.forEach((e,n)=>{e.visible=n<this.carry}),this.straps.forEach(e=>{e.visible=this.carry>0})}updatePack(){if(!this.hips)return;this.model.updateMatrixWorld(!0);let t=this._inv||(this._inv=new Ct);t.copy(this.model.matrixWorld).invert();let e=this._b||(this._b=new Ct);e.multiplyMatrices(t,this.hips.matrixWorld).multiply(this.hipsRestInv).multiply(this.packRest),this.pack.matrix.copy(e),this.pack.matrixWorldNeedsUpdate=!0}packWorld(t=this._tmp){return t.set(0,.72,-.7).applyMatrix4(this.pack.matrix).applyMatrix4(this.model.matrixWorld),t}play(t,e=.22,{once:n=!1,speed:i=1,syncPhase:s=!1}={}){let o=this.actions[t];if(o){if(this.current===o&&!n){o.timeScale=i;return}o.reset(),o.setLoop(n?nl:il,n?1:1/0),o.clampWhenFinished=n,o.timeScale=i,s&&this.current&&(o.time=this.current.time/this.current.getClip().duration*o.getClip().duration),o.setEffectiveWeight(1),this.current&&e>0?o.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),o.play(),this.currentName=t,this.current=o}}get clipName(){return this.currentName}get clipTime(){return this.current?this.current.time:0}update(t){if(!this.mixer)return;let e=this.current?this.current.time/this.current.getClip().duration:0;if(this.mixer.update(t),this.updatePack(),(this.currentName==="Walk"||this.currentName==="Run")&&this.onStep){let n=this.current.time/this.current.getClip().duration,i=Math.floor(e*2),s=Math.floor(n*2);i!==s&&this.onStep(this.currentName)}}};var jv=`
attribute float aSize; attribute vec4 aColor; attribute float aShape;
uniform float uScale;
varying vec4 vColor; varying float vShape;
void main(){
  vColor = aColor; vShape = aShape;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = max(1.0, aSize * uScale / -mv.z);
}`,Qv=`
varying vec4 vColor; varying float vShape;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float a;
  if (vShape > 0.5) { a = step(max(abs(c.x), abs(c.y)), 0.38); }
  else { a = smoothstep(0.5, 0.18, length(c)); }
  if (a * vColor.a < 0.02) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <colorspace_fragment>
}`,Pl=class{constructor(t,e=700,n=1){this.max=e,this.amountScale=n,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.col=new Float32Array(e*4),this.shape=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.fade=new Float32Array(e),this.base=new Float32Array(e),this.cursor=0;let i=new jt;i.setAttribute("position",new Zt(this.pos,3).setUsage(Vo)),i.setAttribute("aSize",new Zt(this.size,1).setUsage(Vo)),i.setAttribute("aColor",new Zt(this.col,4).setUsage(Vo)),i.setAttribute("aShape",new Zt(this.shape,1)),this.geo=i,this.mat=new He({vertexShader:jv,fragmentShader:Qv,transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}}}),this.points=new Si(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}setScale(t,e){this.mat.uniforms.uScale.value=t*.5/Math.tan(Go.degToRad(e)*.5)}emit(t){let e=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.vel[e*3]=t.vx||0,this.vel[e*3+1]=t.vy||0,this.vel[e*3+2]=t.vz||0,this.life[e]=this.maxLife[e]=t.life||1,this.base[e]=t.size||.1,this.size[e]=this.base[e],this.col[e*4]=t.r??1,this.col[e*4+1]=t.g??1,this.col[e*4+2]=t.b??1,this.col[e*4+3]=t.a??1,this.shape[e]=t.shape||0,this.grav[e]=t.grav??6,this.drag[e]=t.drag??.5,this.fade[e]=t.fade??1}burst(t,e,n=1,i=1){t=Math.max(1,Math.round(t*this.amountScale));for(let s=0;s<t;s++){let o=Math.random()*6.283,a=(.3+Math.random())*n;this.emit({...e,vx:Math.cos(o)*a+(e.vx||0),vz:Math.sin(o)*a+(e.vz||0),vy:(.4+Math.random())*i+(e.vy||0),life:(e.life||1)*(.7+Math.random()*.6),size:(e.size||.1)*(.7+Math.random()*.6)})}}update(t){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.col[n*4+3]=0,this.size[n]=0;continue}this.life[n]-=t;let i=Math.exp(-this.drag[n]*t);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]=this.vel[n*3+1]*i-this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let s=Math.max(0,this.life[n]/this.maxLife[n]);this.col[n*4+3]=Math.min(1,s*3)*(this.fade[n],1),this.size[n]=this.base[n]*(this.fade[n]===2?1.6-s*.9:.4+s*.6)}let e=this.geo.attributes;e.position.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aColor.needsUpdate=!0}};var Ll=class{constructor(t,e){this.cam=t,this.terrain=e,this.yaw=.6,this.pitch=.42,this.dist=8.5,this.minD=4,this.maxD=15,this.focus=new R,this.look=new R,this.shakeAmp=0,this.cine=null,this.portrait=!1,this._v=new R}shake(t){this.shakeAmp=Math.max(this.shakeAmp,t)}playCine(t,e,n){this.cine={t:0,dur:t,fn:e,done:n}}snap(t){this.focus.copy(t),this.look.copy(t),this.applyPos(1)}applyPos(t){let e=Math.cos(this.pitch),n=Math.sin(this.pitch),i=this._v.set(Math.sin(this.yaw)*e,n,Math.cos(this.yaw)*e).multiplyScalar(this.dist).add(this.look),s=this.terrain.heightAt(i.x,i.z)+.9;i.y<s&&(i.y=s),this.cam.position.copy(i),this.shakeAmp>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shakeAmp,this.cam.position.y+=(Math.random()-.5)*this.shakeAmp,this.cam.position.z+=(Math.random()-.5)*this.shakeAmp,this.shakeAmp*=Math.exp(-7*t)),this.cam.lookAt(this.look.x,this.look.y,this.look.z)}update(t,e,n,i=!0){if(this.cine){let l=this.cine;l.t+=t;let h=le(l.t/l.dur,0,1);if(l.fn(h,this),this.applyPos(t),h>=1){let u=l.done;this.cine=null,u&&u()}return}let[s,o,a]=n;i&&(this.yaw-=s*.0058,this.pitch=le(this.pitch+o*.0046,.12,1.25),this.dist=le(this.dist+a*.7,this.minD,this.maxD));let c=this._t||(this._t=new R);c.set(e.x,e.y+1.05,e.z),this.focus.x=Ji(this.focus.x,c.x,9,t),this.focus.y=Ji(this.focus.y,c.y,7,t),this.focus.z=Ji(this.focus.z,c.z,9,t),this.look.copy(this.focus),this.applyPos(t)}};var Dl=class{constructor(t,e){this.canvas=t,this.joyEl=e,this.keys=new Set,this.move={x:0,y:0},this.actionEdge=!1,this.actionHeld=!1,this.camDX=0,this.camDY=0,this.zoom=0,this.enabled=!1,this.isTouch=!1,this.pointers=new Map,this.joyId=null,this.joyOrigin={x:0,y:0},this.joyVec={x:0,y:0},this.onPause=null,this.onAnyInput=null,this.uiAction=!1;let n=i=>{this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault()};addEventListener("keydown",i=>{if(i.repeat){n(i);return}if(this.keys.add(i.code),n(i),!this.enabled){i.code==="Escape"&&this.onPause&&this.onPause();return}(i.code==="KeyE"||i.code==="Space"||i.code==="Enter")&&(this.actionEdge=!0,this.actionHeld=!0),(i.code==="Escape"||i.code==="KeyP")&&this.onPause&&this.onPause(),this.onAnyInput&&this.onAnyInput("key")}),addEventListener("keyup",i=>{this.keys.delete(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter")&&(this.actionHeld=this.uiAction)}),addEventListener("blur",()=>{this.keys.clear(),this.actionHeld=!1,this.uiAction=!1,this.joyId=null,this.joyVec={x:0,y:0},this.pointers.clear(),this.showJoy(!1)}),t.style.touchAction="none",t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>this.down(i)),addEventListener("pointermove",i=>this.moveEv(i),{passive:!0}),addEventListener("pointerup",i=>this.up(i)),addEventListener("pointercancel",i=>this.up(i)),t.addEventListener("wheel",i=>{this.enabled&&(i.preventDefault(),this.zoom+=Math.sign(i.deltaY)*(i.ctrlKey?.4:1))},{passive:!1}),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("dblclick",i=>i.preventDefault())}showJoy(t,e,n){this.joyEl&&(this.joyEl.classList.toggle("on",t),t&&(this.joyEl.style.left=e+"px",this.joyEl.style.top=n+"px"))}down(t){if(!this.enabled)return;(t.pointerType==="touch"||t.pointerType==="pen")&&(this.isTouch=!0),this.onAnyInput&&this.onAnyInput(t.pointerType),this.canvas.setPointerCapture?.(t.pointerId);let e=t.clientX<innerWidth*.5;t.pointerType==="touch"&&e&&this.joyId===null?(this.joyId=t.pointerId,this.joyOrigin={x:t.clientX,y:t.clientY},this.joyVec={x:0,y:0},this.showJoy(!0,t.clientX,t.clientY),this.setKnob(0,0)):this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,btn:t.button})}setKnob(t,e){let n=this.joyEl&&this.joyEl.firstElementChild;n&&(n.style.transform=`translate(${t}px,${e}px)`)}moveEv(t){if(t.pointerId===this.joyId){let o=t.clientX-this.joyOrigin.x,a=t.clientY-this.joyOrigin.y,c=Math.hypot(o,a);c>56&&(o=o/c*56,a=a/c*56),this.setKnob(o,a);let l=o/56,h=a/56;Math.hypot(l,h)<.12&&(l=h=0),this.joyVec={x:l,y:-h};return}let e=this.pointers.get(t.pointerId);if(!e)return;let n=t.clientX-e.x,i=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,this.pointers.size>=2){let s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.lastPinch&&(this.zoom-=(o-this.lastPinch)*.03),this.lastPinch=o}else this.camDX+=n,this.camDY+=i}up(t){t.pointerId===this.joyId&&(this.joyId=null,this.joyVec={x:0,y:0},this.showJoy(!1)),this.pointers.delete(t.pointerId),this.pointers.size<2&&(this.lastPinch=0)}setUiAction(t){this.uiAction=t,this.actionHeld=t,t&&(this.actionEdge=!0)}get run(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.joyVec.x,this.joyVec.y)>.82}poll(){if(!this.enabled){this.move.x=this.move.y=0;return}let t=0,e=0,n=this.keys;if((n.has("KeyW")||n.has("ArrowUp"))&&(e+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(e-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(t+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(t-=1),t||e){let s=Math.hypot(t,e);t/=s,e/=s}t+=this.joyVec.x,e+=this.joyVec.y;let i=Math.hypot(t,e);i>1&&(t/=i,e/=i),this.move.x=t,this.move.y=e,n.has("KeyQ")&&(this.camDX-=7),n.has("KeyR")&&(this.camDX+=7)}consumeAction(){let t=this.actionEdge;return this.actionEdge=!1,t}consumeCam(){let t=[this.camDX,this.camDY,this.zoom];return this.camDX=this.camDY=this.zoom=0,t}};var Nl=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1,this.musicOn=!0}unlock(){if(this.ready){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.enabled?.9:0,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;this.noiseBuf=i,this.wind=this.loopNoise(420,"lowpass",.05,.6),this.water=this.loopNoise(1500,"bandpass",0,.7),this.water2=this.loopNoise(500,"lowpass",0,.5),this.delay=e.createDelay(1),this.delay.delayTime.value=.36;let o=e.createGain();o.gain.value=.36;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2200,this.delay.connect(a),a.connect(o),o.connect(this.delay),this.musicBus=e.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this.delay.connect(this.musicBus),this.ready=!0,this.nextNote=e.currentTime+1.5,this.nextBird=e.currentTime+3}loopNoise(t,e,n,i){let s=this.ctx,o=s.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let a=s.createBiquadFilter();a.type=e,a.frequency.value=t,a.Q.value=i;let c=s.createGain();return c.gain.value=n,o.connect(a),a.connect(c),c.connect(this.master),o.start(),{g:c,f:a}}setEnabled(t){this.enabled=t,this.ready&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}ambient(t,e,n){if(!this.ready)return;let i=this.ctx.currentTime;if(this.water.g.gain.setTargetAtTime(.018+e*.09,i,.3),this.water2.g.gain.setTargetAtTime(.01+e*.07,i,.3),this.wind.g.gain.setTargetAtTime(.025+n*.03,i,.5),this.wind.f.frequency.setTargetAtTime(320+n*280,i,.5),i>this.nextBird&&(this.bird(),this.nextBird=i+2.5+Math.random()*6),this.musicOn&&i>this.nextNote){let s=[261.63,293.66,329.63,392,440,523.25,587.33],o=s[Math.floor(Math.random()*s.length)]*(Math.random()<.25?.5:1);this.pluck(o,i,.5),this.nextNote=i+1.1+Math.random()*2.2,Math.random()<.3&&this.pluck(o*1.5,i+.28,.35)}}pluck(t,e,n=.5){let i=this.ctx,s=i.createOscillator(),o=i.createOscillator(),a=i.createGain();s.type="sine",o.type="triangle",s.frequency.value=t,o.frequency.value=t*2,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(n*.5,e+.012),a.gain.exponentialRampToValueAtTime(5e-4,e+1.8),s.connect(a),o.connect(a),a.connect(this.musicBus),a.connect(this.delay),s.start(e),o.start(e),s.stop(e+2),o.stop(e+2)}bird(){let t=this.ctx,e=t.currentTime,n=2+Math.floor(Math.random()*3),i=2400+Math.random()*1600;for(let s=0;s<n;s++){let o=t.createOscillator(),a=t.createGain(),c=e+s*.11;o.type="sine",o.frequency.setValueAtTime(i,c),o.frequency.exponentialRampToValueAtTime(i*(1.3+Math.random()*.4),c+.07),a.gain.setValueAtTime(0,c),a.gain.linearRampToValueAtTime(.05,c+.01),a.gain.exponentialRampToValueAtTime(5e-4,c+.1),o.connect(a),a.connect(this.sfx),o.start(c),o.stop(c+.12)}}tone(t,e,{type:n="sine",vol:i=.3,slide:s=0,delay:o=0}={}){if(!this.ready)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator(),h=a.createGain();l.type=n,l.frequency.setValueAtTime(t,c),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t*s),c+e),h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(i,c+.01),h.gain.exponentialRampToValueAtTime(5e-4,c+e),l.connect(h),h.connect(this.sfx),l.start(c),l.stop(c+e+.02)}noise(t,{freq:e=1200,type:n="bandpass",q:i=1,vol:s=.3,delay:o=0,sweep:a=0}={}){if(!this.ready)return;let c=this.ctx,l=c.currentTime+o,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(e,l),u.Q.value=i,a&&u.frequency.exponentialRampToValueAtTime(Math.max(60,e*a),l+t);let d=c.createGain();d.gain.setValueAtTime(0,l),d.gain.linearRampToValueAtTime(s,l+.008),d.gain.exponentialRampToValueAtTime(5e-4,l+t),h.connect(u),u.connect(d),d.connect(this.sfx),h.start(l,Math.random()),h.stop(l+t+.02)}step(t){t?this.noise(.18,{freq:900,q:.8,vol:.12,sweep:.5}):this.noise(.07,{freq:2200+Math.random()*600,type:"highpass",vol:.05})}splash(){this.noise(.5,{freq:1800,q:.7,vol:.28,sweep:.3}),this.tone(300,.2,{slide:.4,vol:.08})}gnaw(){for(let t=0;t<3;t++)this.noise(.07,{freq:900+t*150,q:2,vol:.28,delay:t*.09});this.tone(180,.1,{type:"triangle",vol:.12})}hit(){this.noise(.1,{freq:700,q:1.5,vol:.3}),this.tone(130,.14,{type:"triangle",vol:.22,slide:.6})}treeFall(){this.tone(220,.9,{type:"sawtooth",vol:.06,slide:.45}),this.noise(1.2,{freq:1600,q:.5,vol:.12,sweep:.4,delay:.1})}thud(){this.tone(70,.5,{vol:.55,slide:.5}),this.noise(.5,{freq:300,type:"lowpass",vol:.4})}pickup(){this.tone(520,.12,{vol:.22}),this.tone(780,.18,{vol:.2,delay:.08})}bounce(){this.tone(160,.08,{type:"triangle",vol:.12,slide:.7})}build(){this.tone(240,.12,{type:"triangle",vol:.3,slide:.55}),this.noise(.08,{freq:2500,type:"highpass",vol:.12})}pop(){this.tone(400,.09,{vol:.12,slide:1.8})}click(){this.tone(660,.05,{vol:.12})}fanfare(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>{this.tone(t,.55,{type:"triangle",vol:.3,delay:e*.13}),this.tone(t*2,.4,{vol:.08,delay:e*.13})}),this.tone(1318.5,1.2,{vol:.18,delay:.6})}};var Ae=r=>document.getElementById(r),Nr={log:'<svg viewBox="0 0 48 48"><ellipse cx="14" cy="24" rx="9" ry="12" fill="#e9bd7d" stroke="#5b341a" stroke-width="3"/><path d="M14 12h22c3 0 5 5 5 12s-2 12-5 12H14" fill="#a8683a" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/></svg>',tooth:'<svg viewBox="0 0 48 48"><path d="M10 8h28l-3 22a6 6 0 0 1-6 5H19a6 6 0 0 1-6-5z" fill="#fff6d8" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><path d="M24 10v24" stroke="#5b341a" stroke-width="3"/></svg>',build:'<svg viewBox="0 0 48 48"><path d="M6 38 24 10l18 28z" fill="#a8683a" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/><path d="M19 38v-9a5 5 0 0 1 10 0v9" fill="#3b2412" stroke="#5b341a" stroke-width="3"/></svg>',moon:'<svg viewBox="0 0 48 48"><path d="M30 6a18 18 0 1 0 12 30A15 15 0 0 1 30 6z" fill="#ffe9a0" stroke="#5b341a" stroke-width="3" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 48 48"><rect x="10" y="21" width="28" height="20" rx="4" fill="#d6b27a" stroke="#5b341a" stroke-width="3"/><path d="M16 21v-5a8 8 0 0 1 16 0v5" fill="none" stroke="#5b341a" stroke-width="3"/></svg>'},Ul=class{constructor(){this.el={hud:Ae("hud"),wood:Ae("woodCount"),badge:Ae("woodBadge"),qList:Ae("questList"),qBar:Ae("questBar").firstElementChild,hint:Ae("hint"),toast:Ae("toast"),act:Ae("actBtn"),actIcon:Ae("actIcon"),actLabel:Ae("actLabel"),banner:Ae("banner"),bT:Ae("bannerTitle"),bS:Ae("bannerSub")},this.hintTimer=0}setTouch(t){document.body.classList.toggle("touch",t)}showHUD(t){this.el.hud.classList.toggle("hidden",!t)}setWood(t,e=!0){this.el.wood.textContent=t,e&&(this.el.badge.classList.remove("pop"),this.el.badge.offsetWidth,this.el.badge.classList.add("pop"))}fade(t,e){let n=Ae("fade");e&&(Ae("fadeText").textContent=e),n.classList.toggle("on",t)}setClock(t,e){let n=Ae("clock");n.textContent=(e?"\u263E ":"\u2600 ")+t}setStock(t,e){Ae("stockBadge").classList.toggle("hidden",!e),Ae("stockCount").textContent=t}setQuest(t,e){let n=JSON.stringify(t);n!==this._qKey&&(this._qKey=n,this.el.qList.replaceChildren(...t.map(i=>{let s=document.createElement("li");return s.className=(i.done?"done ":"")+(i.soft?"soft":""),s.textContent=i.t,s}))),this.el.qBar.style.width=Math.round(Math.max(0,Math.min(1,e))*100)+"%"}setAction(t,e){let n=this.el.act;t===this._kind&&e===this._label||(this._kind=t,this._label=e,n.classList.toggle("off",!t||t==="locked"),n.classList.toggle("ready",!!t&&t!=="locked"),this.el.actIcon.innerHTML=t==="log"?Nr.log:t==="tree"?Nr.tooth:t==="build"?Nr.build:t==="locked"?Nr.lock:t==="sleep"?Nr.moon:Nr.log,this.el.actLabel.textContent=e||"")}hint(t,e=3){this.el.hint.textContent=t,this.el.hint.classList.add("on"),clearTimeout(this._h),this._h=setTimeout(()=>this.el.hint.classList.remove("on"),e*1e3)}toast(t){let e=this.el.toast;e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}banner(t,e){let n=this.el.banner;this.el.bT.textContent=t,this.el.bS.textContent=e||"",n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}show(t,e=!0){Ae(t).classList.toggle("hidden",!e)}setLoad(t,e){Ae("loadBar").firstElementChild.style.width=Math.round(t*100)+"%",e&&(Ae("loadText").textContent=e)}ready(t){Ae("loadWrap").classList.add("hidden");let e=Ae("playBtn");e.disabled=!1,e.textContent=t?"DEVAM ET":"OYNA",Ae("contBtn").classList.toggle("hidden",!t)}setVersion(t){Ae("verLabel").textContent=t,Ae("verLabel2").textContent=t}};function td(r="auto"){let t=new URLSearchParams(location.search).get("q");if(t&&Pr[t])return t;if(r&&Pr[r])return r;let e=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<1100,n=navigator.deviceMemory||(e?4:8),i=navigator.hardwareConcurrency||4;return e?n<=2||n<=3&&i<=4?"low":"medium":i>=6?"high":"medium"}var Fl=class{constructor(t){this.scale=1,this.acc=0,this.n=0,this.slow=0,this.fast=0,this.enabled=!0,this.onChange=t,this.warm=90}frame(t){if(!this.enabled||this.warm-- >0||(this.acc+=t,this.n++,this.acc<1.2))return;let e=this.acc/this.n;this.acc=0,this.n=0,e>1/42?(this.slow++,this.fast=0):e<1/57?(this.fast++,this.slow=0):this.slow=this.fast=0,this.slow>=1?(this.set(this.scale-.12),this.slow=0):this.fast>=4&&this.scale<1&&(this.set(this.scale+.06),this.fast=0)}set(t){t=le(t,.7,1),Math.abs(t-this.scale)>.001&&(this.scale=t,this.onChange(t))}};var $o=70,Ds=2,tM=36,Ol=class{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.t=0;let n=$o*2*Ds,i=this.base=document.createElement("canvas");i.width=i.height=n;let s=i.getContext("2d"),o=s.createImageData(n,n);for(let a=0;a<n;a++)for(let c=0;c<n;c++){let l=c/Ds-$o,h=a/Ds-$o,u=e.heightAt(l,h),d,f,m;if(u<0){let p=le(-u/1.6,0,1);d=110-70*p,f=190-70*p,m=215-40*p}else{let p=le(u/14,0,1),g=le(1+(e.heightAt(l-1.2,h-1.2)-e.heightAt(l+1.2,h+1.2))*.22,.6,1.35);d=(122+70*p)*g,f=(176+20*p-30*p*p)*g,m=(84+55*p)*g,u<.35&&(d=224,f=208,m=150)}let x=(a*n+c)*4;o.data[x]=le(d,0,255),o.data[x+1]=le(f,0,255),o.data[x+2]=le(m,0,255),o.data[x+3]=255}s.putImageData(o,0,0)}draw(t,e,n,i,s){if(this.t+=t,this.t<.08)return;this.t=0;let o=this.ctx,a=this.canvas.width,c=a/2,l=c/tM;o.clearRect(0,0,a,a),o.save(),o.beginPath(),o.arc(c,c,c-1,0,Math.PI*2),o.clip(),o.fillStyle="#6fa152",o.fillRect(0,0,a,a),o.save(),o.translate(c,c),o.scale(l/Ds,l/Ds),o.translate(-(e.x+$o)*Ds,-(e.z+$o)*Ds),o.imageSmoothingEnabled=!0,o.drawImage(this.base,0,0),o.restore();let h=ce.lodgeSite,u=(h.x-e.x)*l,d=(h.z-e.z)*l,f=Math.hypot(u,d),m=c-14,x=f>m;x&&(u*=m/f,d*=m/f);let p=1+Math.sin(s*4)*.18;o.translate(c+u,c+d),i?(o.fillStyle="#7a4a22",o.beginPath(),o.moveTo(0,-9),o.lineTo(10,3),o.lineTo(-10,3),o.closePath(),o.fill(),o.fillRect(-7,3,14,7)):(o.fillStyle="rgba(255,214,90,.35)",o.beginPath(),o.arc(0,0,13*p,0,7),o.fill(),o.fillStyle="#ffcf4a",o.strokeStyle="#5b341a",o.lineWidth=3,o.beginPath(),o.arc(0,0,x?6:8,0,7),o.fill(),o.stroke()),o.setTransform(1,0,0,1,0,0),o.translate(c,c),o.rotate(Math.PI-n),o.fillStyle="#fff",o.strokeStyle="#5b341a",o.lineWidth=3,o.lineJoin="round",o.beginPath(),o.moveTo(0,-12),o.lineTo(8,9),o.lineTo(0,4),o.lineTo(-8,9),o.closePath(),o.stroke(),o.fill(),o.restore()}};var kp=1;function jo(){return{v:kp,ts:0,wood:0,spent:0,lodge:0,chopped:[],taken:[],drops:[],pos:null,playMs:0,intro:!1,settings:{sound:!0,quality:"auto"},install:null}}function Hp(r){let t={...jo(),...r};return t.settings={...jo().settings,...r.settings||{}},t.v=kp,t}function Vp(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}var eM=r=>btoa(unescape(encodeURIComponent(r))),nM=r=>decodeURIComponent(escape(atob(r)));function Gp(){try{let r=localStorage.getItem(pl);if(!r)return jo();let t=JSON.parse(r);return!t||typeof t!="object"||typeof t.v!="number"?jo():Hp(t)}catch{return jo()}}function Bl(r){try{return r.ts=Date.now(),localStorage.setItem(pl,JSON.stringify(r)),!0}catch{return!1}}function ed(){try{localStorage.removeItem(pl)}catch{}}function nd(r){let t=JSON.stringify(r);return"BV1."+eM(t)+"."+Vp(t)}function Wp(r){try{let[t,e,n]=r.trim().split(".");if(t!=="BV1"||!e)return null;let i=nM(e);if(Vp(i)!==n)return null;let s=JSON.parse(i);return typeof s.v!="number"?null:Hp(s)}catch{return null}}async function Xp(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}var Qo=r=>document.getElementById(r),Fn={deferred:null,standalone(){return matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1},init(){addEventListener("beforeinstallprompt",r=>{r.preventDefault(),Fn.deferred=r}),addEventListener("appinstalled",()=>{Fn.deferred=null}),"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}},iM='<svg viewBox="0 0 24 24"><path d="M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" fill="none" stroke="#2a7de1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',sM='<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#5b341a" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="#5b341a" stroke-width="2" stroke-linecap="round"/></svg>';function qp({welcome:r,getSaveCode:t,onClose:e}){let n=Qo("installBody"),i=Qo("instDo"),s=Qo("instSkip"),o=Fn.isIOS();s.textContent=r?"\u{1F3AE} Y\xDCKLEMEDEN OYNA":"Kapat",i.classList.remove("hidden"),Fn.standalone()?(n.innerHTML="<p>Oyun zaten uygulama olarak a\xE7\u0131k. \u{1F389}</p>",i.classList.add("hidden")):o?(n.innerHTML=`<p>iPhone / iPad'de Safari ile ekle:</p><div class="step">`+iM+`<span>Alttaki (iPad'de \xFCstteki) <b>Payla\u015F</b> d\xFC\u011Fmesine dokun</span></div><div class="step">`+sM+`<span><b>Ana Ekrana Ekle</b>'yi se\xE7, sonra <b>Ekle</b></span></div><p class="small"><b>\xD6nemli:</b> iOS'ta y\xFCklenen uygulama taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \xD6nce kay\u0131t kodunu kopyala; yeni uygulamada Men\xFC \u2192 Kay\u0131t yede\u011Fi \u2192 <b>Koddan y\xFCkle</b> de.</p>`,i.textContent="\u{1F4CB} KAYIT KODUNU KOPYALA"):Fn.deferred?(n.innerHTML="<p>Tek dokunu\u015Fla ana ekrana ekle; \xE7evrimd\u0131\u015F\u0131 da oynayabilirsin.</p>",i.textContent="\u{1F4F2} OYUNU Y\xDCKLE"):(n.innerHTML="<p>Taray\u0131c\u0131 men\xFCs\xFCnden (\u22EE veya \u22EF) <b>Ana ekrana ekle</b> / <b>Uygulamay\u0131 y\xFCkle</b> / <b>Masa\xFCst\xFCne ekle</b> se\xE7ene\u011Fini kullan.</p>",i.classList.add("hidden")),Qo("install").classList.remove("hidden");let a=c=>{Qo("install").classList.add("hidden"),i.onclick=s.onclick=null,e&&e(c)};i.onclick=async()=>{if(o){let c=t();try{await navigator.clipboard.writeText(c),i.textContent="\u2714 KOPYALANDI"}catch{i.textContent="Kodu men\xFCden kopyala"}return}if(Fn.deferred){Fn.deferred.prompt();try{await Fn.deferred.userChoice}catch{}Fn.deferred=null,a("done")}},s.onclick=()=>a("skip")}function Yp(r,t){return t&&!Fn.standalone()&&!r}var Ie=r=>document.getElementById(r),Ze=(r,t,e)=>{let n=rt(r,t,e);return{r:n.r,g:n.g,b:n.b}},rM=3.4,oM=6.6,aM=2.5,zl=tn.steps*tn.woodPerStep;function ta(r,t){return new Promise((e,n)=>new Ss().load(r,i=>{i.wrapS=i.wrapT=Sn,t&&(i.colorSpace=xe),e(i)},void 0,n))}function Kp(r,t){let e=r.image,n=document.createElement("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0);let s=i.getImageData(0,0,n.width,n.height),o=s.data,a=0,c=o.length/4;for(let u=0;u<o.length;u+=4)a+=.3*o[u]+.59*o[u+1]+.11*o[u+2];let l=a/c;for(let u=0;u<o.length;u+=4){let d=(.3*o[u]+.59*o[u+1]+.11*o[u+2])/l*215;o[u]=o[u+1]=o[u+2]=Math.min(255,d)}i.putImageData(s,0,0);let h=new Xn(n);return h.wrapS=h.wrapT=Sn,h.colorSpace=xe,h.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),h}var kl=class{constructor(t){this.canvas=t,this.ui=new Ul,this.save=Gp(),this.debug=new URLSearchParams(location.search).has("debug"),this.tierName=td(this.save.settings.quality),this.tier=Pr[this.tierName],this.time=0,this.state="loading",this.act=null,this.target=null,this.player={pos:new R,vel:new R,yaw:-2.58,swim:!1,wade:!1,speed:0},this.stepAcc=0,this.rippleT=0,this.saveT=0,this.puffT=0,this.leafT=0,this.confetti=0,this.wood=0,this.spent=0,this.stock=0,this.clock=8.5,this.clockT=0,this.sleep=null,this.noAdapt=new URLSearchParams(location.search).has("noadapt")}async init(){let t=this.ui,e=this.tier;t.setVersion("v"+wp);let n=this.renderer=new ul({canvas:this.canvas,antialias:e.aa,powerPreference:"high-performance",stencil:!1});n.toneMapping=Lo,n.toneMappingExposure=1.02,n.shadowMap.enabled=!0,n.shadowMap.type=ws,this.scene=new io,this.camera=new Ye(52,1,.2,520),this.renderScale=1;let i=()=>new Promise(d=>setTimeout(d,0));t.setLoad(.05,"Dokular y\xFCkleniyor\u2026"),await i();let[s,o,a,c,l]=await Promise.all([ta("tex/grass_c.jpg",!0),ta("tex/grass_n.jpg",!1),ta("tex/bark_c.jpg",!0),ta("tex/bark_n.jpg",!1),ta("tex/rock_c.jpg",!0)]),h=Math.min(8,n.capabilities.getMaxAnisotropy());[o,a,c,l].forEach(d=>d.anisotropy=h),this.tex={barkC:a,barkN:c,rockC:Kp(l,n)};let u=Kp(s,n);t.setLoad(.15,"Vadi \u015Fekilleniyor\u2026"),await i(),this.terrain=new _l(e.terrainSeg),this.minimap=new Ol(Ie("minimap"),this.terrain),this.siteFound=!1,this.veg=new Ml(this.scene,this.terrain,e,this.tex),t.setLoad(.35,"Arazi boyan\u0131yor\u2026"),await i(),this.terrainMesh=this.terrain.buildMesh(u,o,this.veg.aoPoints),this.scene.add(this.terrainMesh),this.sky=Ap(this.scene,e),this.water=Rp(this.terrain),this.scene.add(this.water.mesh),this.mountains=Pp(),this.scene.add(this.mountains),this.waterfall=Lp(this.terrain),this.scene.add(this.waterfall.mesh),t.setLoad(.5,"A\u011Fa\xE7lar dikiliyor\u2026"),await i(),this.veg.build(),this.grassBuilt=e.grass,t.setLoad(.75,"Yuva alan\u0131 haz\u0131rlan\u0131yor\u2026"),await i(),this.logs=new bl(this.scene,this.terrain,this.tex),this.lodge=new El(this.scene,this.terrain,this.tex,this.veg.mats.trunkMat),this.stockpile=new Tl(this.scene,this.terrain,this.tex,this.lodge),this.veg.obstacles.push({x:this.stockpile.x,z:this.stockpile.z,r:1.1,pile:!0}),this.particles=new Pl(this.scene,900,e.particles),this.buildMarkers(),this.buildButterflies(),this.spawnWorldLogs(),t.setLoad(.88,"Badi uyan\u0131yor\u2026"),await i(),this.badi=new Cl,await this.badi.load("models/badi.glb",this.tex),this.scene.add(this.badi.root),this.badi.onStep=d=>this.onStep(d),this.fcam=new Ll(this.camera,this.terrain),this.input=new Dl(this.canvas,Ie("joy")),this.audio=new Nl,this.audio.enabled=this.save.settings.sound,this.adapt=new Fl(d=>{this.renderScale=d,this.resize(),this.veg.setGrassFade(Ue(30,44,(d-.5)/.5))}),this.noAdapt&&(this.adapt.enabled=!1),this.applySave(),this.bindUI(),this.resize(),new ResizeObserver(()=>this.resize()).observe(this.canvas),addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),200)),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.persist(),this.state==="play"&&this.pause(!0))}),addEventListener("pagehide",()=>this.persist()),Fn.init(),this.placePlayerVisual(),this.fcam.yaw=.35,this.fcam.pitch=.3,this.fcam.dist=7.5,this.fcam.snap(new R(this.player.pos.x,this.player.pos.y+1.05,this.player.pos.z)),this.state="title",this.ui.ready(this.hasProgress()),t.setLoad(1,"Haz\u0131r"),this.last=performance.now(),n.setAnimationLoop(()=>this.frame()),this.debug&&(window.__bv=this)}nightTint(t){let e=1-.8*this.sky.night;return{r:t.r*e,g:t.g*e,b:t.b*e}}setWood(t,e=!0){this.wood=t,this.ui.setWood(t,e),this.badi.setCarry(t)}hasProgress(){return this.save.wood>0||this.save.lodge>0||this.save.spent>0||(this.save.chopped||[]).length>0||this.save.intro}buildMarkers(){let t=new It(new ni(.22,.45,4).rotateX(Math.PI),new ke({color:rt(1,.86,.3),fog:!1}));t.visible=!1,t.renderOrder=6,t.material.depthTest=!1,this.scene.add(t),this.arrow=t;let e=document.createElement("canvas");e.width=4,e.height=64;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.7,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,1)"),n.fillStyle=i,n.fillRect(0,0,4,64);let s=new Xn(e),o=new It(new Ne(.5,.9,26,16,1,!0),new ke({color:rt(1,.85,.4),alphaMap:s,transparent:!0,opacity:.4,depthWrite:!1,blending:Po,side:De,fog:!1}));o.position.set(this.lodge.x,this.lodge.y+13,this.lodge.z),o.renderOrder=4,this.scene.add(o),this.beam=o,this.ripples=[];let a=new vs(.82,1,28);a.rotateX(-Math.PI/2);for(let c=0;c<10;c++){let l=new It(a,new ke({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,l.renderOrder=3,this.scene.add(l),this.ripples.push({m:l,t:1})}this.rippleI=0}ripple(t,e,n=1){let i=this.ripples[this.rippleI++%this.ripples.length];i.t=0,i.size=n,i.m.position.set(t,ce.waterY+.04,e),i.m.visible=!0}buildButterflies(){let t=new jt;t.setAttribute("position",new Ft([0,0,0,.16,.05,-.08,.14,0,.12,0,0,0,.14,0,.12,.08,-.02,.2],3)),t.computeVertexNormals(),this.bflies=[];let e=[[1,.6,.2],[.95,.85,.2],[.6,.75,1],[1,.55,.75],[1,1,1]],n=this.tierName==="low"?5:12;for(let i=0;i<n;i++){let s=new ke({color:rt(...e[i%e.length]),side:De}),o=new fe,a=new It(t,s),c=new It(t,s);c.scale.x=-1,o.add(a,c),o.userData={l:a,r:c,tgt:new R,ph:Math.random()*10},o.position.set(ce.spawn.x+(Math.random()-.5)*30,1.5,ce.spawn.z+(Math.random()-.5)*30),this.scene.add(o),this.bflies.push(o)}}spawnWorldLogs(){let t=ln(8080),e=this.terrain,n=ce.lodgeSite,i=new Set(this.save.taken||[]);this.worldLogKeys=[];let s=0;for(let o=0;o<400&&s<16;o++){let a=t()*6.283,c=8+t()*26,l=ce.spawn.x+Math.cos(a)*c,h=ce.spawn.z+Math.sin(a)*c*.8-4;if(e.heightAt(l,h)<.9||e.slopeAt(l,h)>.5||Math.hypot(l,h)>52||Math.hypot(l-n.x,h-n.z)<5.5||this.veg.obstacles.some(f=>(f.x-l)**2+(f.z-h)**2<(f.r+.9)**2))continue;let d="w"+s;s++,!i.has(d)&&this.logs.spawn(l,h,1+Math.floor(t()*2),{key:d})}}applySave(){let t=this.save;this.wood=t.wood|0,this.spent=t.spent|0,this.stock=t.stock|0,this.clock=typeof t.clock=="number"?t.clock:8.5;for(let n of t.chopped||[])this.veg.applyChopped(n);for(let n of t.drops||[])this.logs.spawn(n.x,n.z,n.wood,{key:"drop"});this.lodge.setStepsInstant(le(t.lodge|0,0,tn.steps)),this.stockpile.set(this.stock,!0),this.badi.setCarry(this.wood),this.sky.setTime(this.clock);let e=this.player;t.pos?(e.pos.set(t.pos.x,0,t.pos.z),e.yaw=t.pos.yaw):e.pos.set(ce.spawn.x,0,ce.spawn.z),e.pos.y=this.terrain.heightAt(e.pos.x,e.pos.z),this.audio.enabled=t.settings.sound,this.ui.setWood(this.wood,!1),this.ui.setStock(this.stock,this.lodge.done),this.refreshQuest(!0)}persist(){if(!this.logs||!this.badi)return;let t=this.save;t.wood=this.wood,t.spent=this.spent,t.lodge=this.lodge.steps,t.stock=this.stock,t.clock=+this.clock.toFixed(3),t.chopped=this.veg.trees.filter(e=>!e.alive||e.state==="falling").map(e=>e.id),t.taken=[...new Set([...t.taken||[]])],t.drops=this.logs.items.filter(e=>e.key==="drop"&&e.state==="ground").map(e=>({x:+e.x.toFixed(2),z:+e.z.toFixed(2),wood:e.wood})),t.pos={x:+this.player.pos.x.toFixed(2),z:+this.player.pos.z.toFixed(2),yaw:+this.player.yaw.toFixed(2)},t.settings.sound=this.audio.enabled,t.playMs=(t.playMs||0)+0,Bl(t)}bindUI(){let t=this.ui,e=this.input;t.setTouch(navigator.maxTouchPoints>0&&matchMedia("(pointer:coarse)").matches),e.onAnyInput=o=>{o==="touch"&&t.setTouch(!0)},e.onPause=()=>this.pause(this.state==="play"),Ie("playBtn").onclick=()=>this.startGame(!1),Ie("contBtn").onclick=()=>{confirm("Kay\u0131tl\u0131 oyun silinip yeni oyun ba\u015Flayacak. Emin misin?")&&(ed(),location.reload())},Ie("tutOk").onclick=()=>{t.show("tutorial",!1),this.save.intro=!0,this.beginPlay()},Ie("menuBtn").style.pointerEvents="auto",Ie("menuBtn").onclick=()=>this.pause(!0),Ie("mResume").onclick=()=>this.pause(!1);let n=Ie("actBtn");n.addEventListener("pointerdown",o=>{o.preventDefault(),this.audio.unlock(),e.setUiAction(!0)});let i=()=>e.setUiAction(!1);n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i);let s=()=>{Ie("mSound").textContent="Ses: "+(this.audio.enabled?"a\xE7\u0131k":"kapal\u0131"),Ie("mMusic").textContent="M\xFCzik: "+(this.audio.musicOn?"a\xE7\u0131k":"kapal\u0131"),Ie("mQuality").textContent="Grafik: "+({auto:"otomatik",high:"y\xFCksek",medium:"orta",low:"d\xFC\u015F\xFCk"}[this.save.settings.quality]||"otomatik")};this.refreshMenu=s,Ie("mSound").onclick=()=>{this.audio.unlock(),this.audio.setEnabled(!this.audio.enabled),this.save.settings.sound=this.audio.enabled,s()},Ie("mMusic").onclick=()=>{this.audio.musicOn=!this.audio.musicOn,s()},Ie("mQuality").onclick=()=>{let o=["auto","high","medium","low"],a=this.save.settings.quality,c=o[(o.indexOf(a)+1)%o.length];this.save.settings.quality=c,this.applyTier(td(c)),s()},Ie("mCopy").onclick=async()=>{this.persist();let o=nd(this.save);Ie("saveCode").value=o;try{await navigator.clipboard.writeText(o),Ie("saveMsg").textContent="Kod kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r."}catch{Ie("saveMsg").textContent="Kodu elle kopyala."}},Ie("mImport").onclick=()=>{let o=Wp(Ie("saveCode").value);if(!o){Ie("saveMsg").textContent="Kod ge\xE7ersiz.";return}Bl(o),Ie("saveMsg").textContent="Y\xFCklendi, yeniden ba\u015Fl\u0131yor\u2026",setTimeout(()=>location.reload(),600)},Ie("mReset").onclick=()=>{confirm("T\xFCm ilerleme silinecek. Emin misin?")&&(ed(),location.reload())},Ie("mInstall").onclick=()=>this.openInstallDialog(!1),s(),addEventListener("pointerdown",()=>this.audio.unlock(),{once:!1,passive:!0})}openInstallDialog(t,e){qp({welcome:t,getSaveCode:()=>(this.persist(),nd(this.save)),onClose:n=>{t&&(this.save.install=n,Bl(this.save)),e&&e()}})}applyTier(t){this.tierName=t,this.tier=Pr[t];let e=this.tier;this.sky.sun.shadow.mapSize.set(e.shadow,e.shadow),this.sky.sun.shadow.map&&(this.sky.sun.shadow.map.dispose(),this.sky.sun.shadow.map=null);let n=e.shadowDist;Object.assign(this.sky.sun.shadow.camera,{left:-n,right:n,top:n,bottom:-n}),this.sky.sun.shadow.camera.updateProjectionMatrix(),this.veg.setGrassDensity(le(e.grass/this.grassBuilt,.05,1)),this.particles.amountScale=e.particles,this.resize()}startGame(){this.audio.unlock(),Xp(),this.ui.show("title",!1);let t=this.player,e=new R(t.pos.x,t.pos.y+1.05,t.pos.z),n=()=>{this.save.intro?this.beginPlay():(this.ui.show("tutorial",!0),this.state="tutorial")},i=()=>{let s=this.fcam,o=s.yaw+.9,a=this.yawBehind(),c=.95,l=.42,h=26,u=this.defaultDist();this.state="intro",s.playCine(3.2,(d,f)=>{let m=d*d*(3-2*d);f.yaw=Ue(o,a,m),f.pitch=Ue(c,l,m),f.dist=Ue(h,u,m),f.look.set(t.pos.x,t.pos.y+1.05,t.pos.z),f.focus.copy(f.look)},n)};Yp(this.save.install,this.input.isTouch||navigator.maxTouchPoints>0)?(this.state="install",this.openInstallDialog(!0,i)):i()}defaultDist(){return this.camera.aspect<.8?11.5:8.8}yawBehind(){return this.player.yaw+Math.PI}beginPlay(){this.state="play",this.input.enabled=!0,this.ui.showHUD(!0),this.fcam.yaw=this.yawBehind(),this.fcam.dist=this.defaultDist(),this.fcam.pitch=.42,this.fcam.snap(new R(this.player.pos.x,this.player.pos.y+1.05,this.player.pos.z)),!this.lodge.done&&this.wood===0&&this.spent===0&&this.ui.hint("A\u011Fa\xE7lara ve yerdeki odunlara yakla\u015F!",5),this.persist()}pause(t){t&&this.state!=="play"||!t&&this.state!=="paused"||(this.state=t?"paused":"play",this.input.enabled=!t,this.ui.show("menu",t),t&&(this.refreshMenu(),this.persist()),this.audio.click())}resize(){let t=this.canvas,e=t.clientWidth||innerWidth,n=t.clientHeight||innerHeight,i=Math.min(devicePixelRatio||1,this.tier.pr)*this.renderScale;this.renderer.setPixelRatio(i),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.fov=e/n<.8?64:52,this.camera.updateProjectionMatrix(),this.particles&&this.particles.setScale(n*i/i,this.camera.fov),this.fcam&&this.state==="play"&&!this.fcam.cine&&(this.fcam.dist=le(this.fcam.dist,this.fcam.minD,this.fcam.maxD))}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.adapt.frame(e),this.step(e),this.renderer.render(this.scene,this.camera),this.frames=(this.frames||0)+1}step(t){if(this.state==="paused"||this.state==="loading")return;this.time+=t;let e=this.player;this.state==="play"?this.updatePlay(t):this.state==="title"||this.state==="install"?this.fcam.update(t,e.pos,[-t*17,0,0]):(this.state==="intro"||this.state==="tutorial")&&this.fcam.update(t,e.pos,[0,0,0],!1),this.badi.update(t),this.updateWorld(t)}updateWorld(t){let e=this.player;if(this.water.update(this.time),this.waterfall.update(this.time,this.sky.night),this.state==="play"&&!this.sleep&&(this.clock=(this.clock+t*24/480)%24),this.clockT-=t,this.clockT<=0){this.clockT=.15,this.sky.setTime(this.clock),this.water.mesh.material.uniforms.uSkyHor.value.copy(this.sky.waterHorizon),this.lodge.nightK=this.sky.night,this.particles.mat.uniforms.uScale.value=this.particles.mat.uniforms.uScale.value;let i=Math.floor(this.clock),s=Math.floor((this.clock-i)*60/10)*10;this.ui.setClock(String(i).padStart(2,"0")+":"+String(s).padStart(2,"0"),this.sky.night>.5)}this.sky.update(t,this.fcam.focus),this.stockpile.update(t),this.veg.update(t,this.time,{onThud:i=>this.onThud(i),onGone:()=>this.persist()});for(let i of this.logs.items)i.state==="fly"&&i.to.copy(this.badi.packWorld(this._pw||(this._pw=new R)));this.logs.update(t,this.time,{onCollected:i=>this.onCollected(i),onBounce:()=>this.audio.bounce()}),this.lodge.update(t,this.time),this.particles.update(t);for(let i of this.ripples)if(i.t<1){i.t+=t/1.1;let s=(.3+i.t*1.8)*(i.size||1);i.m.scale.set(s,1,s),i.m.material.opacity=.55*(1-i.t),i.t>=1&&(i.m.visible=!1)}this.updateButterflies(t),this.updateAmbientFx(t);let n=this.lodge.steps<tn.steps&&this.state!=="title";this.beam.visible=n,n&&(this.beam.material.opacity=(this.wood>=2?.5:.22)+Math.sin(this.time*2.5)*.06),this.audio.ambient(t,this.riverProximity(),.5+.5*Math.sin(this.time*.3)),this.state==="play"&&(!this.siteFound&&Math.hypot(e.pos.x-ce.lodgeSite.x,e.pos.z-ce.lodgeSite.z)<14&&(this.siteFound=!0,this.refreshQuest()),this.minimap.draw(t,e.pos,e.yaw,this.lodge.done,this.time))}riverProximity(){let t=this.player.pos,e=Math.abs(t.x-yn(t.z));return le(1-e/28,0,1)}updateButterflies(t){let e=this.player.pos,n=this.terrain;for(let i of this.bflies){let s=i.userData;if(s.ph+=t,i.position.distanceTo(s.tgt)<.6||s.tgt.lengthSq()===0){let u=Math.random()*6.28,d=3+Math.random()*16,f=e.x+Math.cos(u)*d,m=e.z+Math.sin(u)*d;s.tgt.set(f,Math.max(n.heightAt(f,m),.3)+.8+Math.random()*1.2,m)}let o=s.tgt.x-i.position.x,a=s.tgt.y-i.position.y,c=s.tgt.z-i.position.z,l=Math.hypot(o,a,c)||1;i.position.x+=o/l*1.4*t+Math.sin(s.ph*3)*.01,i.position.z+=c/l*1.4*t,i.position.y+=a/l*1*t+Math.sin(s.ph*7)*.012,i.rotation.y=Math.atan2(o,c)+Math.PI/2;let h=Math.sin(s.ph*22)*.9;s.l.rotation.z=h,s.r.rotation.z=-h}}updateAmbientFx(t){let e=this.player.pos,n=this.particles;if(this.leafT-=t,this.leafT<=0){this.leafT=.35;for(let i=0;i<2;i++){let s=Math.random()*6.28,o=2+Math.random()*14,a=Math.random()<.5?Ze(.95,.9,.55):Ze(.7,.85,.35);n.emit({x:e.x+Math.cos(s)*o,y:e.y+.8+Math.random()*3,z:e.z+Math.sin(s)*o,vx:.3,vy:.05,vz:.1,life:5,size:Math.random()<.5?.06:.1,shape:Math.random()<.5?1:0,...a,a:.9,grav:-.02+Math.random()*.15,drag:.4})}}{let i=this.waterfall.base;Math.hypot(e.x-i.x,e.z-i.z)<85&&Math.random()<t*9&&n.emit({x:i.x+(Math.random()-.5)*5,y:i.y+.3,z:i.z+.6+Math.random()*1.5,vx:(Math.random()-.5)*.4,vy:.9,vz:.5,life:2.4,size:1.3,...this.nightTint({r:.9,g:.95,b:1}),a:.28,grav:-.2,drag:.7,fade:2})}if(this.sky.night>.35&&Math.random()<t*14){let i=Math.random()*6.28,s=2+Math.random()*12,o=Ze(.75,1,.35);n.emit({x:e.x+Math.cos(i)*s,y:e.y+.5+Math.random()*1.8,z:e.z+Math.sin(i)*s,vx:(Math.random()-.5)*.4,vy:.1,vz:(Math.random()-.5)*.4,life:4,size:.13,...o,a:1,grav:-.02,drag:.6})}if(this.lodge.done&&(this.puffT-=t,this.puffT<=0)){this.puffT=.4;let i=this.lodge,s=i.chimneyWorld;n.emit({x:s.x+(Math.random()-.5)*.25,y:s.y,z:s.z+(Math.random()-.5)*.25,vx:.4,vy:.9,vz:.1,life:3.2,size:.55,...this.nightTint(Ze(.9,.9,.92)),a:.45,grav:-.15,drag:.5,fade:2})}if(this.confetti>0){this.confetti-=t;let i=this.lodge,s=[Ze(1,.4,.4),Ze(1,.85,.3),Ze(.5,.9,.5),Ze(.45,.7,1),Ze(1,.55,.85)];for(let o=0;o<4;o++){let a=s[Math.floor(Math.random()*s.length)],c=Math.random()*6.28;n.emit({x:i.x+Math.cos(c)*3.5,y:i.y+5+Math.random()*2,z:i.z+Math.sin(c)*3.5,vx:(Math.random()-.5)*1.5,vy:1+Math.random()*3,vz:(Math.random()-.5)*1.5,life:3.2,size:.14,shape:1,...a,a:1,grav:1.8,drag:.8})}}}placePlayerVisual(){let t=this.player,e=this.badi;e.root.position.copy(t.pos),e.root.rotation.y=t.yaw}collide(t,e){let i=this.veg.obstacles;for(let a=0;a<i.length;a++){let c=i[a],l=t-c.x,h=e-c.z,u=c.r+.42;if(l*l+h*h<u*u){let d=Math.sqrt(l*l+h*h)||.001;t=c.x+l/d*u,e=c.z+h/d*u}}let s=this.lodge.obstacleRadius;if(s>0){let a=t-this.lodge.x,c=e-this.lodge.z,l=s+.42,h=Math.hypot(a,c);h<l&&(t=this.lodge.x+a/h*l,e=this.lodge.z+c/h*l)}let o=Math.hypot(t,e);return o>ce.playRadius&&(t*=ce.playRadius/o,e*=ce.playRadius/o),[t,e]}updatePlay(t){let e=this.input,n=this.player,i=this.terrain,s=this.fcam;e.poll();let o=e.consumeCam(),a=e.consumeAction(),c=e.move.x,l=e.move.y,h=Math.min(1,Math.hypot(c,l));this.act&&h>.55&&!["cheer","sleep","deposit"].includes(this.act.type)&&this.cancelAct(),this.act&&(c=l=0,h=0);let d=Math.sin(s.yaw),f=Math.cos(s.yaw),m=-d*l+f*c,x=-f*l+-d*c,p=i.depthAt(n.pos.x,n.pos.z),g=n.swim,S=n.wade;n.swim=p>.8,n.wade=p>.18;let b=e.run&&!n.swim,y=n.swim?aM:b?oM:rM;n.wade&&!n.swim&&(y*=.82),y*=1-.015*Math.min(this.wood,Il);let M=h>.1?h:0,E=(M?m/(Math.hypot(m,x)||1):0)*y*(b?1:Math.min(1,M/.82)),A=(M?x/(Math.hypot(m,x)||1):0)*y*(b?1:Math.min(1,M/.82));if(n.vel.x=Ji(n.vel.x,E,M?9:13,t),n.vel.z=Ji(n.vel.z,A,M?9:13,t),n.speed=Math.hypot(n.vel.x,n.vel.z),n.speed>.01){let I=n.pos.y,L=n.pos.x+n.vel.x*t,C=n.pos.z+n.vel.z*t;[L,C]=this.collide(L,C);let N=(D,B)=>i.slopeAt(D,B)>.95&&i.heightAt(D,B)>I+.02;N(L,C)&&(N(L,n.pos.z)?N(n.pos.x,C)?(L=n.pos.x,C=n.pos.z,n.vel.set(0,0,0)):L=n.pos.x:C=n.pos.z),n.pos.x=L,n.pos.z=C}let _=i.heightAt(n.pos.x,n.pos.z),T=n.swim?ce.waterY-.52+Math.sin(this.time*3)*.03:_;if(n.pos.y=Ji(n.pos.y,T,16,t),n.pos.y<_&&!n.swim&&(n.pos.y=_),this.act&&this.act.face){let I=this.act.face.x-n.pos.x,L=this.act.face.z-n.pos.z;n.yaw+=gl(n.yaw,Math.atan2(I,L))*Math.min(1,t*12)}else n.speed>.25&&(n.yaw+=gl(n.yaw,Math.atan2(n.vel.x,n.vel.z))*Math.min(1,t*11));if((n.wade&&!S||n.swim&&!g)&&(this.audio.splash(),this.splash(n.pos.x,n.pos.z,1.4)),n.wade&&n.speed>.5?(this.rippleT-=t,this.rippleT<=0&&(this.rippleT=n.swim?.35:.22,this.ripple(n.pos.x,n.pos.z,n.swim?1.5:.9),Math.random()<.5&&this.splash(n.pos.x,n.pos.z,.4))):n.swim&&this.rippleT<=0&&(this.rippleT=.9,this.ripple(n.pos.x,n.pos.z,1.2)),this.act?this.updateAct(t):this.updateTarget(a),this.act||(n.swim?this.badi.play("Swim",.25,{speed:n.speed>.3?1.1:.55}):n.speed>.35?n.speed>4.6?this.badi.play("Run",.18,{speed:n.speed/6.2,syncPhase:this.badi.clipName==="Walk"}):this.badi.play("Walk",.18,{speed:Math.max(.6,n.speed/3.2),syncPhase:this.badi.clipName==="Run"}):this.badi.play("Idle",.25)),b&&n.speed>5&&!n.wade&&(this.dustT=(this.dustT||0)-t,this.dustT<=0)){this.dustT=.12;let I=Ze(.78,.7,.5);this.particles.emit({x:n.pos.x-n.vel.x*.05,y:n.pos.y+.08,z:n.pos.z-n.vel.z*.05,vx:-n.vel.x*.1+(Math.random()-.5)*.4,vy:.5,vz:-n.vel.z*.1+(Math.random()-.5)*.4,life:.7,size:.35,...I,a:.35,grav:-.2,drag:2,fade:2})}this.placePlayerVisual(),this.badi.pivot.rotation.z=n.swim?Math.sin(this.time*4)*.04:0,s.update(t,n.pos,o,!this.act||this.act.type!=="cheer"),this.saveT+=t,this.saveT>12&&(this.saveT=0,this.persist())}splash(t,e,n=1){let i=Ze(.85,.95,1);this.particles.burst(10*n,{x:t,y:ce.waterY+.1,z:e,size:.14,...i,a:.85,grav:9,drag:.6},1.6*n,2.2*n)}onStep(t){let e=this.player;this.audio.step(e.wade),!e.wade&&t==="Run"&&(this.camShakeStep=0)}updateTarget(t){let e=this.player.pos,n=this.ui,i=this.lodge,s=null,o=1e9,a=(d,f)=>{d<o&&(o=d,s=f)},c=this.logs.nearest(e.x,e.z,2);c&&a(Math.hypot(c.x-e.x,c.z-e.z)/2,{type:"log",item:c,x:c.x,z:c.z,y:c.y+1.2});let l=this.veg.nearestChoppable(e.x,e.z,2.1);if(l&&a((Math.hypot(l.x-e.x,l.z-e.z)-l.trunkR)/2.1,{type:"tree",tree:l,x:l.x,z:l.z,y:l.y+3*l.scale}),i.done){let d=this.stockpile,f=Math.hypot(d.x-e.x,d.z-e.z);this.wood>0&&f<3.4&&a(f/3.4*.9,{type:"pile",x:d.x,z:d.z,y:d.y+2.2});let m=i.doorWorld,x=Math.hypot(m.x-e.x,m.z-e.z);x<2.6&&a(x/2.6*1.05,{type:"door",x:m.x,z:m.z,y:i.y+2.3})}else{let d=Math.hypot(i.x-e.x,i.z-e.z);d<5&&a(d/5*1.15,{type:"site",x:i.x,z:i.z,y:i.y+3.6})}if(this.target=s,!s){n.setAction(null,""),this.arrow.visible=!1;return}let h=this.arrow;h.visible=!0,h.position.set(s.x,s.y+Math.sin(this.time*4)*.12,s.z),h.rotation.y=this.time*2;let u=null;if(s.type==="log"?this.wood+s.item.wood>Il?(n.setAction("locked","S\u0131rt dolu"),u="S\u0131rt\u0131n dolu! Odunlar\u0131 yuvaya g\xF6t\xFCr."):n.setAction("log","Topla"):s.type==="tree"?n.setAction("tree","Kemir"):s.type==="site"?this.wood>=tn.woodPerStep?n.setAction("build","\u0130n\u015Fa et"):(n.setAction("locked","Odun laz\u0131m"),u="Yuva i\xE7in en az "+tn.woodPerStep+" odun gerekli"):s.type==="pile"?n.setAction("log","Depola"):n.setAction("sleep",this.sky.night>.5||this.clock>=18?"Uyu":"Dinlen"),!!t){if(this.audio.unlock(),u){n.hint(u,2.5);return}s.type==="log"?this.startGather(s.item):s.type==="tree"?this.startGnaw(s.tree):s.type==="site"?this.startBuild():s.type==="pile"?this.startDeposit():this.startSleep()}}cancelAct(){this.act=null}standPoint(t,e,n){let i=this.player.pos,s=i.x-t,o=i.z-e,a=Math.hypot(s,o)||1;return{x:t+s/a*n,z:e+o/a*n}}startGather(t){this.act={type:"gather",t:0,item:t,flew:!1,face:{x:t.x,z:t.z},walk:this.standPoint(t.x,t.z,.85)},this.badi.play("Gather",.15,{once:!0,speed:1.15}),this.arrow.visible=!1,this.ui.setAction(null,"")}startGnaw(t){let e=this.veg.trunkAt(t);this.act={type:"gnaw",t:0,tree:t,hits:0,next:.6,end:0,face:{x:e.cx,z:e.cz},walk:this.standPoint(e.cx,e.cz,e.R+.47)},this.badi.play("Gnaw",.3),this.arrow.visible=!1,this.ui.setAction(null,"")}startBuild(){this.act={type:"build",t:0,knock:0,done:!1,face:{x:this.lodge.x,z:this.lodge.z}},this.badi.play("Build",.25),this.arrow.visible=!1,this.ui.setAction(null,"")}startDeposit(){let t=this.stockpile,e=this.wood;this.act={type:"deposit",t:0,n:e,thrown:0,done:!1,face:{x:t.x,z:t.z},walk:this.standPoint(t.x,t.z,2.1)},this.badi.play("Build",.25),this.arrow.visible=!1,this.ui.setAction(null,"")}startSleep(){let t=this.lodge;this.act={type:"sleep",t:0,phase:0,face:{x:t.x,z:t.z},entry:{x:t.x+2.7,z:t.z}},this.badi.play("Walk",.2,{speed:.9}),this.arrow.visible=!1,this.ui.setAction(null,"")}updateAct(t){let e=this.act,n=this.player.pos;if(e.t+=t,e.walk&&e.t<.6){let i=1-Math.exp(-11*t);n.x+=(e.walk.x-n.x)*i,n.z+=(e.walk.z-n.z)*i}if(e.type==="gather"){if(!e.flew&&e.t>=.5){let i=e.item;i.state==="ground"&&(i.state="fly",i.t=0,i.from=i.mesh.position.clone(),i.to=this.badi.packWorld(new R),this.audio.pickup()),e.flew=!0}e.t>=1&&(this.act=null)}else if(e.type==="gnaw"){let i=e.tree;if(e.hits<3&&e.t>=e.next){e.hits++,e.next+=.9,this.veg.hit(i,n.x,n.z),this.audio.gnaw(),this.audio.hit();let s=Ze(.93,.76,.5),o=new R(n.x-i.x,0,n.z-i.z).normalize(),a=.33*i.scale;this.particles.burst(16,{x:i.x+o.x*a,y:i.y+1,z:i.z+o.z*a,vx:o.x*1.8,vz:o.z*1.8,size:.09,shape:1,...s,a:1,grav:9,drag:.8},1.6,2.2);let c=Ze(.5,.75,.3);this.particles.burst(4,{x:i.x,y:i.y+3.5*i.scale,z:i.z,size:.12,shape:1,...c,a:1,grav:1.5,drag:1},1.4,.4),this.fcam.shake(.05),e.hits>=3&&(e.end=e.t+1.8,this.audio.treeFall(),this.save.chopped.includes(i.id)||this.save.chopped.push(i.id))}if(e.chew=(e.chew||0)+t,e.chew>.25&&e.hits<3){e.chew=0;let s=new R(n.x-i.x,0,n.z-i.z).normalize(),o=.33*i.scale,a=Ze(.93,.76,.5);this.particles.burst(2,{x:i.x+s.x*o,y:i.y+.98,z:i.z+s.z*o,vx:s.x,vz:s.z,size:.06,shape:1,...a,a:1,grav:7,drag:.8},.9,1.2),this.audio.noise(.05,{freq:1800,q:2,vol:.12})}e.hits>=3&&e.t>=e.end&&(this.act=null,this.persist())}else if(e.type==="build"){let i=this.lodge;if(e.knock<2&&e.t>=.3+e.knock*.4){e.knock++;let s=this.badi.packWorld(new R),o=new R(i.x+(Math.random()-.5)*2.4,i.y+.9+Math.random()*.8,i.z+(Math.random()-.5)*2.4);this.badi.setCarry(this.wood-e.knock),this.logs.throwLog(s,o,0,a=>{this.audio.build(),this.dustAt(a.to.x,a.to.y,a.to.z)})}if(!e.done&&e.t>=1.1){e.done=!0,this.setWood(this.wood-tn.woodPerStep),this.spent+=tn.woodPerStep;let s=this.lodge.addStep(this.time);this.audio.pop(),this.fcam.shake(.04);let o=Ze(.8,.55,.3),a=s/tn.steps*Math.PI/2;if(this.particles.burst(18,{x:i.x,y:i.y+Math.sin(a)*2.2,z:i.z,size:.12,shape:1,...o,a:1,grav:6,drag:.8},3,2.5),this.refreshQuest(),this.ui.toast("Yuva "+s+" / "+tn.steps),this.persist(),s>=tn.steps){this.celebrate();return}}e.t>=1.5&&(this.act=null,this.input.actionHeld&&this.wood>=tn.woodPerStep&&Math.hypot(n.x-i.x,n.z-i.z)<5.4&&!i.done&&this.startBuild())}else if(e.type==="deposit"){let i=this.stockpile,s=Math.min(e.n,6);for(;e.thrown<s&&e.t>=.25+e.thrown*.13;){let o=this.badi.packWorld(new R),a=new R(i.x+(Math.random()-.5)*.8,i.y+.7,i.z+(Math.random()-.5)*.8);e.thrown++,this.badi.setCarry(Math.max(0,this.wood-Math.ceil(e.thrown*e.n/s))),this.logs.throwLog(o,a,0,()=>this.audio.bounce())}!e.done&&e.t>=.25+s*.13+.5&&(e.done=!0,this.stock+=e.n,this.setWood(0,!1),this.stockpile.set(this.stock,!1),this.ui.setStock(this.stock,!0),this.audio.pop(),this.ui.toast("Depoya +"+e.n+" odun"),this.refreshQuest(),this.persist()),e.t>=.25+s*.13+.9&&(this.act=null)}else e.type==="sleep"?this.updateSleep(e,t):e.type==="cheer"&&e.t>=3.2&&(this.act=null)}updateSleep(t,e){let n=this.player.pos,i=this.lodge,s=this.ui;if(t.phase===0){let o=t.entry.x-n.x,a=t.entry.z-n.z,c=Math.hypot(o,a);if(c>.12){let l=Math.min(c/e,2.4);n.x+=o/c*l*e,n.z+=a/c*l*e,this.player.yaw+=gl(this.player.yaw,Math.atan2(o,a))*Math.min(1,e*10)}(c<=.2||t.t>3)&&(t.phase=1,t.t=0,this.badi.root.visible=!1,this.sleep=!0,s.fade(!0,"Zzz\u2026"),this.audio.pop())}else if(t.phase===1){if(t.t>=.9){t.phase=2,t.t=0;let o=this.clock;t.from=o,t.to=o>=6&&o<18.5?19:o>=18.5?24+6.5:6.5,t.morning=!(o>=6&&o<18.5)}}else if(t.phase===2){let o=Math.min(1,t.t/2.4),a=o*o*(3-2*o);if(this.clock=(t.from+(t.to-t.from)*a)%24,this.sky.setTime(this.clock),this.clockT=0,o>=1){t.phase=3,t.t=0,s.fade(!1);let c=i.doorWorld;n.x=c.x,n.z=c.z,n.y=this.terrain.heightAt(n.x,n.z),this.player.yaw=Math.PI/2,this.badi.root.visible=!0,this.badi.play("Idle",0),this.sleep=!1,this.fcam.yaw=this.yawBehind(),this.fcam.snap(new R(n.x,n.y+1.05,n.z))}}else t.phase===3&&(t.t>.3&&!t.said&&(t.said=!0,s.banner(t.morning?"G\xDCNAYDIN!":"AK\u015EAM OLDU",t.morning?"Badi dinlendi.":"G\xFCn batarken Badi yuvas\u0131nda dinlendi."),this.persist()),t.t>1.2&&(this.act=null))}dustAt(t,e,n){let i=Ze(.7,.6,.42);this.particles.burst(6,{x:t,y:e,z:n,size:.4,...i,a:.4,grav:-.3,drag:2,fade:2},.8,.4)}onCollected(t){this.setWood(this.wood+t.wood),this.ui.toast("+"+t.wood+" odun"),t.key&&t.key!=="drop"&&this.save.taken.push(t.key);let e=Ze(1,.9,.5),n=this.player.pos;this.particles.burst(8,{x:n.x,y:n.y+1,z:n.z,size:.12,...e,a:1,grav:-.5,drag:2},.8,.8),this.refreshQuest(),this.persist()}onThud(t){this.audio.thud(),this.fcam.shake(.14);let e=t.fallDir,n=t.height,i=t.x+e.x*n*.55,s=t.z+e.z*n*.55,o=Ze(.7,.6,.4);this.particles.burst(20,{x:i,y:this.terrain.heightAt(i,s)+.2,z:s,size:.6,...o,a:.5,grav:-.3,drag:2,fade:2},2.4,.6);let a=[Ze(.5,.78,.3),Ze(.78,.85,.3)];for(let l=0;l<2;l++)this.particles.burst(14,{x:t.x+e.x*n*.8,y:t.y+1.2,z:t.z+e.z*n*.8,size:.14,shape:1,...a[l],a:1,grav:2.5,drag:1},3.5,2.2);let c=[[.5,2],[.82,1]];for(let[l,h]of c){let u=t.x+e.x*n*l+(Math.random()-.5)*1.2,d=t.z+e.z*n*l+(Math.random()-.5)*1.2;this.logs.spawn(u,d,h,{key:"drop",pop:{x:t.x+e.x*n*l*.6,y:t.y+.8,z:t.z+e.z*n*l*.6,sx:(u-(t.x+e.x*n*l*.6))*1.6,sz:(d-(t.z+e.z*n*l*.6))*1.6}})}this.persist()}celebrate(){let t=this.lodge;this.act={type:"cheer",t:0,face:{x:t.x,z:t.z}},this.badi.play("Cheer",.2),this.confetti=3.2,this.audio.fanfare(),this.ui.setStock(this.stock,!0),this.ui.banner("YUVA TAMAM!","Badi art\u0131k kendi evinde \u{1F389}"),this.ui.setAction(null,""),this.arrow.visible=!1;let e=this.fcam,n=e.yaw,i=e.dist,s=e.pitch,o=this.player.pos;e.playCine(5,(a,c)=>{let l=a*a*(3-2*a);c.yaw=n+l*1.9,c.pitch=Ue(s,.28,Math.sin(l*Math.PI)*.8+l*.1),c.dist=Ue(i,13.5,Math.sin(Math.min(1,a*1.2)*Math.PI/2));let h=Ue(o.x,t.x,.55),u=Ue(o.z,t.z,.55);c.look.set(h,t.y+1.4,u),c.focus.copy(c.look)},()=>{e.dist=le(e.dist,e.minD,e.maxD),e.focus.copy(e.look)}),this.refreshQuest(),this.persist()}simulate(t,e=1/30){let n=Math.round(t/e);for(let i=0;i<n;i++)this.step(e)}manualRender(){this.renderer.setAnimationLoop(null),this.renderer.render(this.scene,this.camera)}refreshQuest(t){let e=this.ui;if(this.lodge.done){e.setQuest([{t:"\u0130lk yuvay\u0131 in\u015Fa et",done:!0},{t:`Depoya odun biriktir: ${Math.min(this.stock,Zo)}/${Zo}`,done:this.stock>=Zo},{t:"Baraj\u0131 in\u015Fa et (yak\u0131nda)",done:!1,soft:!0}],this.stock/Zo);return}let n=this.spent+this.wood,i=this.siteFound||this.lodge.steps>0;e.setQuest([{t:`Odun topla: ${Math.min(n,zl)}/${zl}`,done:n>=zl},{t:"Parlayan yuva alan\u0131n\u0131 bul",done:i},{t:"\u0130lk yuvay\u0131 in\u015Fa et",done:!1}],n/zl)}};var cM=new kl(document.getElementById("c"));cM.init().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Y\xFCklenemedi: "+(r&&r.message?r.message:r))});})();
