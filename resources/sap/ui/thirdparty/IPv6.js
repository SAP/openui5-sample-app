/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function(e,i){"use strict";if(typeof module==="object"&&module.exports){module.exports=i()}else if(typeof define==="function"&&define.amd){define(i)}else{e.IPv6=i(e)}})(this,function(e){"use strict";var i=e&&e.IPv6;function f(e){var i=e.toLowerCase();var f=i.split(":");var r=f.length;var t=8;if(f[0]===""&&f[1]===""&&f[2]===""){f.shift();f.shift()}else if(f[0]===""&&f[1]===""){f.shift()}else if(f[r-1]===""&&f[r-2]===""){f.pop()}r=f.length;if(f[r-1].indexOf(".")!==-1){t=7}var s;for(s=0;s<r;s++){if(f[s]===""){break}}if(s<t){f.splice(s,1,"0000");while(f.length<t){f.splice(s,0,"0000")}}var l;for(var n=0;n<t;n++){l=f[n].split("");for(var o=0;o<3;o++){if(l[0]==="0"&&l.length>1){l.splice(0,1)}else{break}}f[n]=l.join("")}var a=-1;var v=0;var u=0;var c=-1;var h=false;for(n=0;n<t;n++){if(h){if(f[n]==="0"){u+=1}else{h=false;if(u>v){a=c;v=u}}}else{if(f[n]==="0"){h=true;c=n;u=1}}}if(u>v){a=c;v=u}if(v>1){f.splice(a,v,"")}r=f.length;var p="";if(f[0]===""){p=":"}for(n=0;n<r;n++){p+=f[n];if(n===r-1){break}p+=":"}if(f[r-1]===""){p+=":"}return p}function r(){if(e.IPv6===this){e.IPv6=i}return this}return{best:f,noConflict:r}});
//# sourceMappingURL=IPv6.js.map