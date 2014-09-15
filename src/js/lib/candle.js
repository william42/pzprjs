/*! @license candle.js v0.2.5 (c) 2011-2014 sabo2, MIT license
 *   https://bitbucket.org/sabo2/candle */
!function(){if(!window.Candle){var a=document,b=2*Math.PI,c=[],d=[],e=function(){for(var a=[],b=256;512>b;b++)a[b-256]=b.toString(16).substr(1);return a}(),f={version:"0.2.5",wrapper:{},addWrapper:function(a,b){a=a.replace(/\s+/g,"");var c=a.indexOf(":"),d="";c>=0&&(d=a.substr(c+1),a=a.substr(0,c));var e=function(){this.initialize&&this.initialize.apply(this,arguments)};if(d&&this.wrapper[d]){var f=this.wrapper[d];for(var g in f.prototype)e.prototype[g]=f.prototype[g]}for(var g in b)e.prototype[g]=b[g];e.prototype.constructor=e;var h={body:e,name:a,base:d};this.wrapper[h.name]=h.body},_order:[],enable:{},addTypes:function(a){this._order.push(a),this.enable[a]=!0,this.current||(this.current=a)},TypeList:function(a){for(var b=0;b<f._order.length;b++)this[f._order[b]]=f._order[b]===a},current:"",select:function(a){return this.enable[a]?(this.current=a,!0):!1},ME:null,initME:function(){var b=a.createElement("div");b.style.display="inline",b.style.position="absolute",b.style.left="-9000px",b.innerHTML="",a.body.appendChild(b),this.ME=b},color:c,parse:function(a){if(!c[a])if("rgb("===a.substr(0,4)){var b=a.match(/\d+/g);c[a]=["#",e[b[0]],e[b[1]],e[b[2]]].join("")}else c[a]=a;return c[a]},parsecolorrev:function(a){if(a.match(/\#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/)){var b=parseInt(RegExp.$1,16).toString(),c=parseInt(RegExp.$2,16).toString(),d=parseInt(RegExp.$3,16).toString();return["rgb(",b,",",c,",",d,")"].join("")}return a},getRectSize:function(a){return{width:a.offsetWidth||a.clientWidth,height:a.offsetHeight||a.clientHeight}},_counter:-1,getcanvasid:function(){return this._counter++,"_candle_"+this._counter},initAllElements:function(){for(var b=a.getElementsByTagName("candle"),c=0;c<b.length;c++)this.start(b[c])},start:function(a,b,c){c=c||function(){},this.ME||this.initME(),"string"==typeof a&&(a=document.getElementById(a));var d;if(a.candleEnable)d=el.parentNode.getContext("2d");else{var e=b;if(this.enable[e]||(e=this.current),!this.enable[e])return;d=new this.wrapper[e](a)}c(d)},onload:function(){this.createCSS(),this.initAllElements()},sheet:null,createCSS:function(){if(!this.sheet){var b=a.getElementsByTagName("head")[0];if(b){var c=a.createElement("style");c.setAttribute("type","text/css"),b.appendChild(c)}else a.write("<style></style>");this.sheet=a.styleSheets[a.styleSheets.length-1];for(var e=0;e<d.length;e++)this.addCSS(d[e][0],d[e][1]);d=[]}},addCSS:function(a,b){if(this.sheet){var c=this.sheet;c.insertRule?c.insertRule(a+"{"+b+"}",c.cssRules.length):c.addRule&&c.addRule(a,b,-1)}else d.push(a,b)}};window.addEventListener?window.addEventListener("load",function(){f.onload()},!1):window.attachEvent&&window.attachEvent("onload",function(){f.onload()}),a.createElement("candle"),f.createCSS(),window.Candle=f,f.addWrapper("wrapperbase",{initialize:function(a){this.fillStyle="black",this.strokeStyle="black",this.lineWidth=1,this.font="14px system",this.textAlign="center",this.textBaseline="middle",this.canvas=a,this.canvasid=f.getcanvasid(),this.child=null,this.currentLayerId="_empty",this.isedgearray={_empty:!1},this.isedge=!1,this.setParent(),this.initElement(),this.initFunction(),this.initLayer();var b=this;this.canvas.getContext=function(){return b},this.canvas.candleEnable=!0},setParent:function(){this.canvas.style.overflow="hidden"},initElement:function(){},initFunction:function(){this.canvas.toDataURL=function(){return null},this.canvas.toBlob=function(){return null}},initLayer:function(){this.setLayer()},setLayer:function(a){this.currentLayerId=a?a:"_empty",this.setLayerEdge(),this.setEdgeStyle()},setLayerEdge:function(){this.isedge=void 0!==this.isedgearray[this.currentLayerId]?this.isedgearray[this.currentLayerId]:this.isedgearray._empty},setEdgeStyle:function(){},setRendering:function(a){this.isedge=this.isedgearray[this.currentLayerId]="crispEdges"===a,this.setEdgeStyle()},fillRectCenter:function(a,b,c,d){this.fillRect(a-c,b-d,2*c,2*d)},strokeRectCenter:function(a,b,c,d){this.strokeRect(a-c,b-d,2*c,2*d)},shapeRectCenter:function(a,b,c,d){this.shapeRect(a-c,b-d,2*c,2*d)},vshow:function(){},vhide:function(){},vdel:function(){}}),f.addWrapper("vector:wrapperbase",{initialize:function(a){this.vid="",this.elements={},this.lastElement=null,this.zidx=1,this.zidx_array={},this.target=null,this.cpath=[],this.lastpath="",f.wrapper.wrapperbase.prototype.initialize.call(this,a)},initLayer:function(){this.setLayer();var a=f.getRectSize(this.canvas);this.rect(0,0,a.width,a.height),this.addVectorElement(!1,!1)},clear:function(){this.resetElement()},resetElement:function(){this.vid="",this.elements={},this.lastElement=null,this.zidx=1,this.zidx_array={},this.setLayer()},setLayer:function(b){if(this.vid="",b){var c=[this.canvasid,"layer",b].join("_"),d=a.getElementById(c);d||(d=this.createLayer(c)),this.zidx_array[b]||(this.zidx++,this.zidx_array[b]=d.style.zIndex=this.zidx),this.target=d}else this.target=this.child;f.wrapper.wrapperbase.prototype.setLayer.call(this,b)},createLayer:function(){return null},setUnselectable:function(){},changeSize:function(a,b){this.canvas.style.width=a+"px",this.canvas.style.height=b+"px",this.changeChildSize(this.canvas.firstChild,a,b)},changeChildSize:function(){},beginPath:function(){this.cpath=[],this.lastpath=""},closePath:function(){this.cpath.push(this.PATH_CLOSE),this.lastpath=this.PATH_CLOSE},moveTo:function(a,b){this.cpath.push(this.PATH_MOVE,a,b),this.lastpath=this.PATH_MOVE},lineTo:function(a,b){this.lastpath!==this.PATH_LINE&&this.cpath.push(this.PATH_LINE),this.cpath.push(a,b),this.lastpath=this.PATH_LINE},rect:function(a,b,c,d){this.cpath.push(this.PATH_MOVE,a,b,this.PATH_LINE,a+c,b,a+c,b+d,a,b+d,this.PATH_CLOSE),this.lastpath=this.PATH_CLOSE},arc:function(a,c,d,e,f,g){var h,i,j,k;f-e>=b?(h=a+d,i=c,j=a+d,k=c):(h=a+d*Math.cos(e),i=c+d*Math.sin(e),j=a+d*Math.cos(f),k=c+d*Math.sin(f)),f-e>=b&&(i+=.125);var l=e>f^Math.abs(f-e)>Math.PI,m=g^l?1:0,n=0==m^l?1:0;this.cpath.push(this.PATH_MOVE,h,i,this.PATH_ARCTO,d,d,0,m,n,j,k),this.lastpath=this.PATH_ARCTO},fill:function(){this.addVectorElement(!0,!1)},stroke:function(){this.addVectorElement(!1,!0)},shape:function(){this.addVectorElement(!0,!0)},fillRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!0,!1),this.cpath=e},strokeRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!1,!0),this.cpath=e},shapeRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!0,!0),this.cpath=e},fillText:function(){},drawImage:function(){},translate:function(){},setLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;c>e;e+=2)d[e>>1]=[a[e],a[e+1]];this.setLinePath_com.call(this,d),a[b-1]&&this.cpath.push(this.PATH_CLOSE)},setOffsetLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;c-2>e;e+=2)d[e>>1]=[a[e+2]+a[0],a[e+3]+a[1]];this.setLinePath_com.call(this,d),a[b-1]&&this.cpath.push(this.PATH_CLOSE)},setLinePath_com:function(a){this.cpath=[];for(var b=0,c=a.length;c>b;b++)this.cpath.push(0===b?this.PATH_MOVE:this.PATH_LINE),this.cpath.push(a[b][0],a[b][1])},setDashSize:function(){},strokeLine:function(a,b,c,d){var e=this.cpath;this.cpath=[this.PATH_MOVE,a,b,this.PATH_LINE,c,d],this.addVectorElement(!1,!0),this.cpath=e},strokeDashedLine:function(a,b,c,d,e){var f=this.cpath;this.cpath=[this.PATH_MOVE,a,b,this.PATH_LINE,c,d],this.addVectorElement(!1,!0),this.setDashSize(e),this.cpath=f},strokeCross:function(a,b,c){var d=this.cpath;this.cpath=[this.PATH_MOVE,a-c,b-c,this.PATH_LINE,a+c,b+c,this.PATH_MOVE,a-c,b+c,this.PATH_LINE,a+c,b-c],this.addVectorElement(!1,!0),this.cpath=d},fillCircle:function(a,c,d){var e=this.cpath;this.cpath=[],this.arc(a,c,d,0,b,!1),this.cpath.push(this.PATH_CLOSE),this.addVectorElement(!0,!1),this.cpath=e},strokeCircle:function(a,c,d){var e=this.cpath;this.cpath=[],this.arc(a,c,d,0,b,!1),this.cpath.push(this.PATH_CLOSE),this.addVectorElement(!1,!0),this.cpath=e},shapeCircle:function(a,c,d){var e=this.cpath;this.cpath=[],this.arc(a,c,d,0,b,!1),this.cpath.push(this.PATH_CLOSE),this.addVectorElement(!0,!0),this.cpath=e},addVectorElement:function(){},vshow:function(a){"string"==typeof a&&(a=[a]);for(var b=0,c=a.length;c>b;b++)this.elements[a[b]]&&this.show(a[b])},vhide:function(a){"string"==typeof a&&(a=[a]);for(var b=0,c=a.length;c>b;b++)this.elements[a[b]]&&this.hide(a[b])},vdel:function(a){"string"==typeof a&&(a=[a]);for(var b=0;b<a.length;b++)this.elements[a[b]]&&(this.target.removeChild(this.elements[a[b]]),delete this.elements[a[b]])},show:function(){},hide:function(){}}),function(){var b=f.SVGNS="http://www.w3.org/2000/svg",c=f.XLINKNS="http://www.w3.org/1999/xlink";if(document.createElementNS&&document.createElementNS(b,"svg").suspendRedraw){var d,e=" M",g=" L",h=" A",i=" z",j="fill",k="stroke",l="stroke-width",m="shape-rendering",n="none",o={left:"start",center:"middle",right:"end"},p=navigator.userAgent;d=p.match(/Chrome/)?{"candle-top":-.52,top:-.58,hanging:-.45,middle:-.25,alphabetic:0,bottom:.08}:p.match(/AppleWebKit/)?{"candle-top":-.6,top:-.82,hanging:-.82,middle:-.25,alphabetic:0,bottom:.18}:p.match(/Trident/)?{"candle-top":-.5,top:-.72,hanging:-.72,middle:-.25,alphabetic:0,bottom:.25}:p.match(/Win/)?{"candle-top":-.65,top:-.8,hanging:-.8,middle:-.3,alphabetic:0,bottom:.2}:{"candle-top":-.5,top:-.6,hanging:-.6,middle:-.25,alphabetic:0,bottom:.08},f.addTypes("svg"),f.addWrapper("svg:vector",{initialize:function(a){this.use=new f.TypeList("svg"),this.PATH_MOVE=e,this.PATH_LINE=g,this.PATH_CLOSE=i,this.PATH_ARCTO=h,f.wrapper.vector.prototype.initialize.call(this,a)},initElement:function(){var d=f.getRectSize(this.canvas),e=this.child=a.createElementNS(b,"svg");e.setAttribute("xmlns",b),e.setAttribute("xmlns:xlink",c),e.setAttribute("id",this.canvasid),e.setAttribute("font-size","10"),e.setAttribute("font-family","sans-serif"),e.setAttribute("width",d.width),e.setAttribute("height",d.height),e.setAttribute("viewBox",[0,0,d.width,d.height].join(" ")),this.canvas.appendChild(e)},initFunction:function(){function a(a){return a.outerHTML||(new XMLSerializer).serializeToString(a)}var b=this.child;this.canvas.toDataURL=function(){return"data:image/svg+xml;base64,"+window.btoa(a(b))},this.canvas.toBlob=function(c){var d=new Blob([a(b)],{type:"image/svg+xml"});return c&&c(d),d}},clear:function(){for(var a=this.canvas.firstChild,b=a.firstChild;b;)a.removeChild(b),b=a.firstChild;this.resetElement()},setLayerEdge:function(){},createLayer:function(c){var d=a.createElementNS(b,"g");return d.setAttribute("id",c),this.child.appendChild(d),d},setRendering:function(a){this.target.setAttribute(m,a)},setUnselectable:function(a){a=void 0===a?!0:!!a,this.canvas.style.MozUserSelect=a?"none":"text",this.canvas.style.WebkitUserSelect=a?"none":"text",this.canvas.style.userSelect=a?"none":"text"},changeChildSize:function(a,b,c){a.setAttribute("width",b),a.setAttribute("height",c);var d=a.getAttribute("viewBox").split(/ /);a.setAttribute("viewBox",[d[0],d[1],b,c].join(" "))},getDefsElement:function(){var a=document.querySelector("defs");return a||(a=document.createElementNS(b,"defs"),this.child.insertBefore(a,this.child.firstChild||null)),a},getImageElement:function(d){for(var e=this.getDefsElement(),f=null,g=e.querySelectorAll("image"),h=0;h<g.length;h++)if(g[h].getAttributeNS(c,"href")===d.src){f=g[h];break}return f||(f=a.createElementNS(b,"image"),f.setAttribute("id",[this.canvasid,"img",g.length].join("_")),f.setAttribute("width",d.width),f.setAttribute("height",d.height),f.setAttributeNS(c,"xlink:href",d.src),e.appendChild(f)),f},getImageSymbol:function(a,d,e,f,g){for(var h=this.getDefsElement(),i=[d,e,f,g].join(" "),j=null,k=h.querySelectorAll("symbol"),l=0;l<k.length;l++)if(k[l].getAttribute("viewBox")===i){j=k[l];break}if(!j){j=document.createElementNS(b,"symbol"),j.setAttribute("id",[this.canvasid,"symimg",k.length].join("_")),j.setAttribute("viewBox",i);var m=document.createElementNS(b,"use");m.setAttributeNS(c,"xlink:href","#"+this.getImageElement(a).getAttribute("id")),j.appendChild(m),h.appendChild(j)}return j},fillText:function(c,e,g){var h=!!this.vid&&!!this.elements[this.vid],i=f.ME;i.style.font=this.font,i.innerHTML=c;var k=g-i.offsetHeight*d[this.textBaseline.toLowerCase()],l=h?this.elements[this.vid]:a.createElementNS(b,"text");if(l.setAttribute("x",e),l.setAttribute("y",k),l.setAttribute(j,this.fillStyle),l.setAttribute("text-anchor",o[this.textAlign.toLowerCase()]),this.font.match(/(.+\s)?([0-9]+)px (.+)$/)){var m=RegExp.$1,n=RegExp.$2,p=RegExp.$3;l.setAttribute("font-size",n),p.match(/^sans\-serif$/i)?l.removeAttribute("font-family"):l.setAttribute("font-family",p),m.match(/(italic|oblique)/)?l.setAttribute("font-style",RegExp.$1):l.removeAttribute("font-style"),m.match(/(bold|bolder|lighter|[1-9]00)/)?l.setAttribute("font-weight",RegExp.$1):l.removeAttribute("font-weight")}else l.setAttribute("font",this.font);l.textContent!==c&&(l.textContent=c),h||(this.target.appendChild(l),this.lastElement=l),!h&&this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},drawImage:function(d,e,f,g,h,i,j,k,l){var m=!!this.vid&&!!this.elements[this.vid];void 0===g&&(g=d.width,h=d.height),void 0===i&&(i=e,e=0,j=f,f=0,k=g,l=h);var n=this.getImageSymbol(d,e,f,g,h).getAttribute("id"),o=m?this.elements[this.vid]:a.createElementNS(b,"use");o.setAttribute("x",i),o.setAttribute("y",j),o.setAttribute("width",k),o.setAttribute("height",l),o.setAttributeNS(c,"xlink:href","#"+n),m||(this.target.appendChild(o),this.lastElement=o),!m&&this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},translate:function(a,b){var c=this.child.getAttribute("viewBox").split(/ /);c[0]=-a,c[1]=-b,this.child.setAttribute("viewBox",c.join(" "))},setDashSize:function(a){this.lastElement&&this.lastElement.setAttribute("stroke-dasharray",a.join(" "))},addVectorElement:function(c,d){var e=this.cpath.join(" "),f=a.createElementNS(b,"path");f.setAttribute("d",e),f.setAttribute(j,c?this.fillStyle:n),f.setAttribute(k,d?this.strokeStyle:n),d&&f.setAttribute(l,this.lineWidth),this.target.appendChild(f),this.lastElement=f,this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},show:function(a){this.elements[a].removeAttribute("display")},hide:function(a){this.elements[a].setAttribute("display","none")}})}}(),function(){if(document.createElement("canvas").getContext){if(window.CanvasRenderingContext2D){var c=CanvasRenderingContext2D.prototype;c.setLineDash||("mozDash"in c?c.setLineDash=function(a){this.mozDash=a}:"webkitLineDash"in c&&(c.setLineDash=function(a){this.webkitLineDash=a}))}var d=0,e=navigator.userAgent;d=e.match(/Chrome|Trident/)?-.5:e.match(/AppleWebKit/)?-.6:e.match(/Win/)?-.65:-.5,f.addTypes("canvas"),f.addWrapper("canvas:wrapperbase",{initialize:function(a){this.context=null,this.use=new f.TypeList("canvas"),this.x0=0,this.y0=0,f.wrapper.wrapperbase.prototype.initialize.call(this,a)},initElement:function(){var b=f.getRectSize(this.canvas),c=this.child=a.createElement("canvas");c.id=this.canvasid,c.width=b.width,c.height=b.height,c.style.width=b.width+"px",c.style.height=b.height+"px",this.canvas.appendChild(c),this.context=c.getContext("2d")},initFunction:function(){var a=this.child;this.canvas.toDataURL=function(b){return a.toDataURL(b||void 0)},this.canvas.toBlob=function(b,c){try{return a.toBlob(b,c)}catch(d){}a.toDataURL(c||void 0).match(/data:(.*);base64,(.*)/);for(var e=window.atob(RegExp.$2),f=e.length,g=new Uint8Array(f),h=0;f>h;h++)g[h]=e.charCodeAt(h);var i=new Blob([g.buffer],{type:RegExp.$1});return b&&b(i),i},a.toBlob=a.toBlob||a.msToBlob},clear:function(){this.setProperties(),this.context.setTransform(1,0,0,1,0,0),this.context.translate(this.x0,this.y0);var a=f.getRectSize(this.canvas);this.context.clearRect(0,0,a.width,a.height)},setEdgeStyle:function(){var a=this.canvas.style;"imageRendering"in a&&(a.imageRendering="",this.isedge&&(a.imageRendering="pixelated",a.imageRendering||(a.imageRendering="-webkit-optimize-contrast"),a.imageRendering||(a.imageRendering="-moz-crisp-edges"),a.imageRendering||(a.imageRendering="-o-crisp-edges")))},setUnselectable:function(a){a=void 0===a?!0:!!a;var b=this.canvas.style;b.MozUserSelect=b.WebkitUserSelect=b.userSelect=a?"none":"text"},changeSize:function(a,b){var c=this.canvas;c.style.width=a+"px",c.style.height=b+"px";var d=this.child,e=parseInt(d.style.left),f=parseInt(d.style.top);a+=0>e?-e:0,b+=0>f?-f:0,d.style.width=a+"px",d.style.height=b+"px",d.width=a,d.height=b},setProperties:function(){var a=this.context;a.fillStyle=this.fillStyle,a.strokeStyle=this.strokeStyle,a.lineWidth=this.lineWidth,a.font=this.font,a.textAlign=this.textAlign,a.textBaseline=this.textBaseline},beginPath:function(){this.context.beginPath()},closePath:function(){this.context.closePath()},moveTo:function(a,b){this.context.moveTo(a,b)},lineTo:function(a,b){this.context.lineTo(a,b)},rect:function(a,b,c,d){this.context.rect(a,b,c,d)},arc:function(a,b,c,d,e,f){this.context.arc(a,b,c,d,e,f)},fill:function(){this.setProperties(),this.context.fill()},stroke:function(){this.setProperties(),this.context.stroke()},shape:function(){this.setProperties(),this.context.fill(),this.context.stroke()},fillRect:function(a,b,c,d){this.setProperties(),this.context.fillRect(a,b,c,d)},strokeRect:function(a,b,c,d){this.setProperties(),this.context.strokeRect(a,b,c,d)},shapeRect:function(a,b,c,d){this.setProperties(),this.context.fillRect(a,b,c,d),this.context.strokeRect(a,b,c,d)},fillText:function(a,b,c){if(this.setProperties(),"candle-top"===this.textBaseline){var e=f.ME;e.style.font=this.font,e.innerHTML=a,c-=e.offsetHeight*d,this.context.textBaseline="alphabetic"}this.context.fillText(a,b,c)},drawImage:function(){this.context.drawImage.apply(this.context,arguments)},translate:function(a,b){this.x0=a,this.y0=b,this.context.translate(a,b)},setLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;c>e;e+=2)d[e>>1]=[a[e],a[e+1]];this.setLinePath_com.call(this,d),a[b-1]&&this.context.closePath()},setOffsetLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2)-2,d=[],e=0;c>e;e+=2)d[e>>1]=[a[e+2]+a[0],a[e+3]+a[1]];this.context.beginPath(),this.setLinePath_com.call(this,d),a[b-1]&&this.context.closePath()},setLinePath_com:function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];0===b?this.context.moveTo(d[0],d[1]):this.context.lineTo(d[0],d[1])}},setDashSize:function(){},strokeLine:function(a,b,c,d){var e=this.context;this.setProperties(),e.beginPath(),e.moveTo(a,b),e.lineTo(c,d),e.stroke()},strokeDashedLine:function(a,b,c,d,e){{var f=this;this.context}this.strokeDashedLine=this.context.setLineDash?function(a,b,c,d,e){var g=f.context;f.setProperties(),g.beginPath(),g.moveTo(a,b),g.lineTo(c,d),g.setLineDash(e),g.stroke(),g.setLineDash([])}:function(a,b,c,d,e){e.length%2===1&&(e=e.concat(e));var g=Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)),h=0,i=0,j=(d-b)/(c-a),k=j*j+1,l=f.context;for(f.setProperties(),l.beginPath(),l.moveTo(a,b);g>h;){var m=Math.sqrt(h*h/k),n=a+m,o=b+j*m;0===(1&i)?l.moveTo(n,o):l.lineTo(n,o),h+=e[i],i++,i>=e.length&&(i=0)}l.stroke()},this.strokeDashedLine(a,b,c,d,e)},strokeCross:function(a,b,c){var d=this.context;this.setProperties(),d.beginPath(),d.moveTo(a-c,b-c),d.lineTo(a+c,b+c),d.moveTo(a-c,b+c),d.lineTo(a+c,b-c),d.stroke()},fillCircle:function(a,c,d){var e=this.context;this.setProperties(),e.beginPath(),e.arc(a,c,d,0,b,!1),e.fill()},strokeCircle:function(a,c,d){var e=this.context;this.setProperties(),e.beginPath(),e.arc(a,c,d,0,b,!1),e.stroke()},shapeCircle:function(a,c,d){var e=this.context;this.setProperties(),e.beginPath(),e.arc(a,c,d,0,b,!1),e.fill(),e.stroke()}})}}(),function(){try{document.namespaces.add("v","urn:schemas-microsoft-com:vml")}catch(c){return}var d="<v:shape",e="<v:group",g="<v:image",h="<v:textpath",i="<v:polyline",j='<v:path textpathok="t" />',k="",l=">",m=" />",n="</v:group>",o="</v:polyline>",p=' path="',q=' points="',r=' style="',s=' string="',t=' coordsize="100,100"',u=' fillcolor="',v=' strokecolor="',w=' strokeweight="',x='"',y=' stroked="f" filled="t"',z=' on="t" xscale="t"',A="font:",B="v-text-align:",C=";",D=" m",E=" l",F=" x",G=" ?",H=" ns",I=" nf",J={left:0,center:.5,right:1},K={"candle-top":-.25,top:-.4,hanging:-.4,middle:0,alphabetic:.22,bottom:.4},L=10,M=L/2,N="behavior: url(#default#VML);",O=N+" position:absolute; width:10px; height:10px;";f.addCSS("v\\:shape",O),f.addCSS("v\\:group",O),f.addCSS("v\\:polyline",O),f.addCSS("v\\:image",O),f.addCSS("v\\:path",N),f.addCSS("v\\:textpath",N),f.addCSS("v\\:stroke",N),f.addTypes("vml"),f.addWrapper("vml:vector",{initialize:function(a){this.use=new f.TypeList("vml"),this.PATH_MOVE=D,this.PATH_LINE=E,this.PATH_CLOSE=F,this.PATH_ARCTO=G,f.wrapper.vector.prototype.initialize.call(this,a)},setParent:function(){var a=this.canvas;return a.style.overflow="hidden",a.style.display="block",a.style.position="relative",a},initElement:function(){var b=f.getRectSize(this.canvas),c=this.child=a.createElement("div");c.id=this.canvasid,c.style.position="absolute",c.style.left="-2px",c.style.top="-2px",c.style.width=b.width+"px",c.style.height=b.height+"px",this.canvas.appendChild(c)},clear:function(){for(var a=this.canvas.firstChild,b=a.firstChild;b;)a.removeChild(b),b=a.firstChild;this.resetElement()},createLayer:function(b){var c=a.createElement("div");return c.id=b,c.unselectable=k?"on":"",c.style.position="absolute",c.style.left="0px",c.style.top="0px",this.child.appendChild(c),c},setUnselectable:function(a){a=void 0===a?!0:!!a,k=a?' unselectable="on"':"",this.canvas.unselectable=a?"on":"",this.child.unselectable=a?"on":""},changeChildSize:function(a,b,c){a.style.width=b+"px",a.style.height=c+"px"},moveTo:function(a,b){this.cpath.push(this.PATH_MOVE,this.ePos(a,!0),this.ePos(b,!0)),this.lastpath=this.PATH_MOVE},lineTo:function(a,b){this.lastpath!==this.PATH_LINE&&this.cpath.push(this.PATH_LINE),this.cpath.push(this.ePos(a,!0),this.ePos(b,!0)),this.lastpath=this.PATH_LINE},rect:function(a,b,c,d){a=this.ePos(a,!0),b=this.ePos(b,!0),c=this.eLen(c),d=this.eLen(d),this.cpath.push(this.PATH_MOVE,a,b,this.PATH_LINE,a+c,b,a+c,b+d,a,b+d,this.PATH_CLOSE),this.lastpath=this.PATH_CLOSE},arc:function(a,c,d,e,f,g){var h,i,j,k;f-e>=b?(h=a+d,i=c,j=a+d,k=c):(h=a+d*Math.cos(e),i=c+d*Math.sin(e),j=a+d*Math.cos(f),k=c+d*Math.sin(f)),a=a*L-M|0,c=c*L-M|0,d=d*L|0,h=h*L-M|0,i=i*L-M|0,j=j*L-M|0,k=k*L-M|0;var l=g?"at":"wa";f-e>=b&&(h+=1),this.cpath.push(l,a-d,c-d,a+d,c+d,h,i,j,k),this.lastpath=l},fillText:function(a,b,c){var d=!!this.vid&&!!this.elements[this.vid],g=f.ME;b=b*L-M|0,c=c*L-M|0,g.style.font=this.font,g.innerHTML=a;var k=c-(g.offsetHeight*K[this.textBaseline.toLowerCase()]*L-M)|0,p=g.offsetWidth*L-M|0,v=b-p*J[this.textAlign.toLowerCase()]|0;if(d){var w=this.elements[this.vid];w.fillcolor=f.parse(this.fillStyle),w.lastChild.style.font=this.font,w.lastChild.string=a}else{var D=[e,t,l,i,q,[v,k,v+p,k].join(","),x,y,u,f.parse(this.fillStyle),x,l,j,h,z,s,a,x,r,A,this.font,C,B,this.textAlign,C,x,m,o,n];this.target.insertAdjacentHTML("BeforeEnd",D.join("")),this.lastElement=this.target.lastChild}!d&&this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},drawImage:function(a,b,c,d,e,f,h,i,j){void 0===d&&(d=a.width,e=a.height),void 0===f&&(f=b,b=0,h=c,c=0,i=d,j=e);var k,l=!!this.vid&&!!this.elements[this.vid];if(l)k=this.elements[this.vid],k.src=a.src;else{var n=[g,' src="',a.src,x,t,m];this.target.insertAdjacentHTML("BeforeEnd",n.join("")),this.lastElement=this.target.lastChild,k=this.lastElement}k.style.left=f,k.style.top=h,k.style.width=i,k.style.height=j,k.cropleft=b/a.width,k.croptop=c/a.height,k.cropright=1-(b+d)/a.width,k.cropbottom=1-(c+e)/a.height,!l&&this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},translate:function(a,b){var c=this.canvas.firstChild;c.style.position="absolute",c.style.left=a+"px",c.style.top=b+"px"},setLinePath_com:function(a){this.cpath=[];for(var b=0,c=a.length;c>b;b++)this.cpath.push(0===b?this.PATH_MOVE:this.PATH_LINE),this.cpath.push(this.ePos(a[b][0],!0),this.ePos(a[b][1],!0))},setDashSize:function(b){if(this.lastElement){var c=a.createElement("v:stroke");c.dashstyle=b[0]<=2?"ShortDash":b[0]<=5?"Dash":"LongDash",this.lastElement.appendChild(c)}},strokeLine:function(a,b,c,d){a=this.ePos(a,!0),b=this.ePos(b,!0),c=this.ePos(c,!0),d=this.ePos(d,!0),f.wrapper.vector.prototype.strokeLine.call(this,a,b,c,d)},strokeDashedLine:function(a,b,c,d,e){a=this.ePos(a,!0),b=this.ePos(b,!0),c=this.ePos(c,!0),d=this.ePos(d,!0),f.wrapper.vector.prototype.strokeDashedLine.call(this,a,b,c,d,e)},strokeCross:function(a,b,c){a=this.ePos(a,!0),b=this.ePos(b,!0),c=this.eLen(c),f.wrapper.vector.prototype.strokeCross.call(this,a,b,c)},ePos:function(a,b){return a=b?a+(a>0?.5:-.5)-(this.lineWidth%2===1?.5:0)|0:a+(a>0?.5:-.5)|0,a*L-M|0},eLen:function(a){return a*L|0},addVectorElement:function(a,b){var c=this.cpath.join(" ");c=[c,a?"":I,b?"":H].join("");var e=[d,k,t,p,c,x];a&&e.push(u,f.parse(this.fillStyle),x),b&&e.push(v,f.parse(this.strokeStyle),x,w,this.lineWidth,"px",x),e.push(m),this.target.insertAdjacentHTML("BeforeEnd",e.join("")),this.lastElement=this.target.lastChild,this.vid&&(this.elements[this.vid]=this.lastElement,this.vid="")},show:function(a){this.elements[a].style.display="inline"},hide:function(a){this.elements[a].style.display="none"}})}()}}();