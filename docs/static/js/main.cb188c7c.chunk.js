(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/Pixelit_svg.f3bf0b34.svg"},35:function(e,t,n){e.exports=n.p+"static/media/upload.e86a473b.svg"},36:function(e,t,n){e.exports=n.p+"static/media/upload-icon.7c4eb3b9.svg"},38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(29),o=n.n(i),c=(n(43),n(10)),u=n(5),l=n(4),s=n(31),d=n.n(s);function h(){var e=Object(u.a)(["\n    font-size: 32px;\n    color: ",";\n    width: 100%;\n    margin-top: 5px;\n    padding-left: 2rem;\n\n    img {\n        height: 25px;\n    }\n"]);return h=function(){return e},e}var f=function(e){return a.a.createElement(p,null,a.a.createElement("img",{src:d.a,alt:"Pixel It!"}))},p=l.b.div(h(),function(e){return e.theme.logoColor});function g(){var e=Object(u.a)(["\nmargin: 25px 0;\nwidth: 60%;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\nalign-items: baseline;\n\nlabel, button {\n    position: relative;\n    font-size: 1.15em;  \n    background-color: ",";\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    box-shadow: rgba(0,0,0,0.2) -1px 22px 20px 2px;\n    border: none;\n    margin: 0;\n    height: 5.5rem;\n    width: 14rem;\n\n    &:hover !&[disabled] {\n        background-color: rgba(7,7,7,0.2);\n    }\n    &:focus {\n        outline: none;\n    }\n    &[disabled] {\n        color: rgba(255,255,255,.2);\n        box-shadow: rgba(0,0,0,.6) 2px 2px 6px;\n    }\n}\n\n#photo-input {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n}\n"]);return g=function(){return e},e}var m=l.b.div(g(),function(e){return e.theme.buttonColor}),b=n(35),E=n.n(b),v=function(e){var t=e.handlePhotoUpload,n=e.setShowToaster,i=e.hideUploaderButton,o=Object(r.useRef)(null);Object(r.useEffect)(function(){if(i&&o){var e=o.current,t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});e.dispatchEvent(t)}},[o]);return a.a.createElement("input",{style:{visibility:i?"hidden":"visible"},className:"user-file",ref:o,id:"photo-input",type:"file",accept:"image/jpeg",onInput:function(e){var r=e.target,a=r.files,i=r.accept,o=a.length>0&&a[0],c=function(e,t){var n=e.type,r=e.size;return n&&n!==t?{isValid:!1,message:"Please select only files of type ".concat(t)}:r&&r>2097152?{isValid:!1,message:"please upload a file below 2 MB"}:{isValid:!0,message:""}}(o,i),u=c.isValid,l=c.message;u?o&&t(o):(n(l),e.target.value=null)}})};function O(){var e=Object(u.a)(["\n\tmargin-top: 1rem;\n\tcolor: white;\n\tfont-size: 0.85rem;\n\tmargin-left: 1.5rem;\n"]);return O=function(){return e},e}function w(){var e=Object(u.a)(["\n\tborder: 2px solid ",";\n\tborder-radius: 8px;\n    height: 70%;\n    width: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 6rem;\n\n\timg {\n\t\twidth: 88px;\n\t\theight: calc(50% - 2rem);\n    \tmargin-top: 2rem;\n}\n\t}\n"]);return w=function(){return e},e}function x(){var e=Object(u.a)(["\n\tmargin: 0;\n\tflex: 1;\n\talign-items: center;\n\t#photo-input {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\tposition: absolute;\n\t}\n"]);return x=function(){return e},e}var j=function(e){var t=e.name;return e.hideUploaderButton?a.a.createElement(v,e):a.a.createElement(y,null,a.a.createElement(D,null,a.a.createElement("img",{src:E.a,alt:"Upload"}),a.a.createElement("label",{htmlFor:"file"},"Upload",a.a.createElement(v,e)),t&&a.a.createElement(M,null,t)))},y=Object(l.b)(m)(x()),D=l.b.div(w(),function(e){return e.theme.borderColor}),M=l.b.span(O()),S=function(e){return e.uploadedPhoto},U=function(e){return S(e).name},I=function(e){return S(e).file},T=function(e){return S(e).hideUploaderButton},P={handlePhotoUpload:function(e){return{type:"MODULES/IMAGE_VIEW/PHOTO_UPLOADED",payload:e}},setShowToaster:function(e){return{type:"MODULES/PHOTO_VIEWER/SHOW_TOASTER",payload:e}}},L=Object(c.a)(function(e){return{name:U(e),hideUploaderButton:T(e)}},P)(j),_=n(14);function A(){var e=Object(u.a)(["\nbutton {\n\theight: 4rem;\n}"]);return A=function(){return e},e}function R(){var e=Object(u.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tvisibility: ","\n"]);return R=function(){return e},e}var z=function(e){var t=e.isHidden,n=e.pixelizerClicked;return a.a.createElement(k,{isHidden:t},a.a.createElement(C,null,a.a.createElement("button",{disabled:!1,className:"pixelizer",onClick:n},"Pixel it!")))},k=l.b.div(R(),function(e){return e.isHidden?"hidden":"visible"}),C=Object(l.b)(m)(A()),H="MODULES/PIXELIZER/PIXELIZER_ACTIVATED",V=function(e){return{type:"MODULES/PIXELIZER/UPDATE_RENDER_TYPE",payload:e}},W={pixelizerClicked:function(e){return{type:H}}},B=Object(c.a)(function(e){return{}},W)(z);function G(){var e=Object(u.a)(["\n    height: 100%;\n"]);return G=function(){return e},e}function X(){var e=Object(u.a)([""]);return X=function(){return e},e}var N=function(e){var t=e.src;return a.a.createElement(F,{id:"photo-input"},a.a.createElement(q,{src:t}))},F=l.b.div.attrs(function(e){return{id:e.id,style:{height:"".concat(e.theme.imageMeasures.height,"px"),width:"".concat(e.theme.sliderPosition,"px"),transition:e.theme.transition,position:"absolute",top:0,left:0,overflow:"hidden",zIndex:1}}})(X()),q=l.b.img(G());function Q(){var e=Object(u.a)(["\n    top: unset;\n    bottom: 0;\n"]);return Q=function(){return e},e}function Z(){var e=Object(u.a)(["\n    width: ","px;\n    background-color: white;\n    height: ",";\n    left: ","px;\n    position: absolute;\n    top: 0;\n"]);return Z=function(){return e},e}function J(){var e=Object(u.a)(["\n    height: ","px;\n    width: 100%;\n    border: ","px solid white;\n    position: absolute;\n    top: ","; /* offset between two elements*/\n    left: 0;\n    transform: rotate(45deg);\n"]);return J=function(){return e},e}function Y(){var e=Object(u.a)([""]);return Y=function(){return e},e}var $=Math.sqrt(2*Math.pow(20,2)),K=function(e){var t=e.onMouseDown,n=e.forwardRef;return a.a.createElement(ee,{draggable:!0,onDragStart:function(e){return e.preventDefault()},onMouseDown:t,ref:n},a.a.createElement(ne,null),a.a.createElement(te,null),a.a.createElement(re,null))},ee=l.b.span.attrs(function(e){return{style:{height:"".concat(e.theme.imageMeasures.height,"px"),width:"".concat(20,"px"),position:"absolute",top:0,left:"".concat(e.theme.sliderPosition-10,"px"),cursor:" col-resize",zIndex:2}}})(Y()),te=l.b.span(J(),20,1,function(e){return"".concat((e.theme.imageMeasures.height-$)/2+$/2-10,"px")}),ne=l.b.div(Z(),1,function(e){return"".concat((e.theme.imageMeasures.height-$)/2,"px")},9.5),re=Object(l.b)(ne)(Q()),ae={DEFAULT:"PHOTO_VIEW",PIXELED:"PIXELED"},ie=n(24),oe=n(25),ce=25,ue=function(){function e(t,n,r,a){Object(ie.a)(this,e),this.height=t,this.width=t,this.color=a,this.x=n,this.y=r}return Object(oe.a)(e,[{key:"draw",value:function(e){e.beginPath(),e.fillStyle=this.color,e.fillRect(this.x,this.y,this.width,this.height),e.stroke()}}]),e}(),le=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(ie.a)(this,e),this.getImagePixelizedArray=function(){var e,n,r=[];for(e=0;e<t.width;e+=t.pixelSize){var a=[];for(n=0;n<t.height;n+=t.pixelSize){var i=t.calculatePixel(e,n);a.push(i)}r.push(a)}return r},this.calculatePixel=function(e,n){var r,a,i={red:0,green:0,blue:0,alpha:0};for(r=0;r<t.pixelSize;++r)for(a=0;a<t.pixelSize;++a)i.red+=t.imageData.data[4*(t.width*n+e)],i.green+=t.imageData.data[4*(t.width*n+e)+1],i.blue+=t.imageData.data[4*(t.width*n+e)+2],i.alpha+=t.imageData.data[4*(t.width*n+e)+3];return i.red=i.red/Math.pow(t.pixelSize,2),i.green=i.green/Math.pow(t.pixelSize,2),i.blue=i.blue/Math.pow(t.pixelSize,2),i.alpha=i.alpha/Math.pow(t.pixelSize,2),i="rgba(".concat(i.red,",").concat(i.green,",").concat(i.blue,",").concat(i.alpha,")"),new ue(t.pixelSize,e,n,i)},this.drawPixeledImagefromArray=function(e,n){e.clearRect(0,0,t.width,t.height),n.forEach(function(t){t.forEach(function(t){t.draw(e)})})},this.bitmapImg=n,this.width=a,this.height=r,this.pixelSize=ce,n&&r&&a&&i&&createImageBitmap(n,{resizeHeight:r,resizeWidth:a,resizeQuality:"high"}).then(function(e){t.imageData=i.getImageData(0,0,e.width,e.height)})}return Object(oe.a)(e,[{key:"renderPixeledImage",value:function(e,t,n,r){var a=t.pixelSize;if(a&&a!==this.pixelSize&&(this.pixelSize=a),this.imageData){var i=this.getImagePixelizedArray();this.drawPixeledImagefromArray(e,i,n,r)}}}]),e}(),se=null,de=null,he=null,fe={imageMeasures:{height:0,width:0},transition:null,backgroundGradientLight:"#603675",backgroundGradientDark:"#0C070F",logoColor:"#A14ACB",buttonColor:"#5f1782",borderColor:"#280a37"},pe=n(36),ge=n.n(pe);function me(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center; \n    height: 25px;\n    font-size: 15px;\n    img {\n        height: 20px;\n    }\n    &:first-child {\n        padding-right: 25px;\n        border-right: 1px solid ",";\n        span {\n            opacity: 0.32;\n        }\n    }\n    &:not(:first-child) {\n        padding-left: 25px;\n        span {\n            margin-left: 10px;\n        }\n    }\n    ","\n"]);return me=function(){return e},e}function be(){var e=Object(u.a)(["\n    width: 100%;\n    color: white;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n"]);return be=function(){return e},e}var Ee=function(e){var t=e.name,n=e.handleUploadRequest;return a.a.createElement(ve,null,a.a.createElement(Oe,null,a.a.createElement("span",null,t)),a.a.createElement(Oe,{onClick:n},a.a.createElement("img",{src:ge.a,alt:"Upload"}),a.a.createElement("span",null,"Upload")))},ve=l.b.div(be()),Oe=l.b.div(me(),function(e){return e.theme.logoColor},function(e){return e.onClick?"cursor: pointer;":""});function we(){var e=Object(u.a)(["\n\tcolor:white;\n\tfont-size:24px;\n"]);return we=function(){return e},e}function xe(){var e=Object(u.a)(["\n    width: ",";\n    height: ",";\n\tposition: relative;\n"]);return xe=function(){return e},e}function je(){var e=Object(u.a)(["\n\tflex: 1;\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tvisibility: ",";\n\tcanvas {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t}\n"]);return je=function(){return e},e}function ye(){var e=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nflex: 1;\nwidth: 70%;\n"]);return ye=function(){return e},e}var De=function(e){var t=e.file,n=e.name,i=e.showSlider,o=e.renderConfig,c=e.handleUploadRequest,u=Object(r.useRef)(null),l=Object(r.useRef)(null),s=Object(r.useState)(null),d=Object(_.a)(s,2),h=d[0],f=d[1],p=Object(r.useState)(null),g=Object(_.a)(p,2),m=g[0],b=g[1],E=Object(r.useState)(!1),v=Object(_.a)(E,2),O=v[0],w=v[1],x=Object(r.useState)(0),j=Object(_.a)(x,2),y=j[0],D=j[1],M=Object(r.useState)(!1),S=Object(_.a)(M,2),U=S[0],I=S[1],T=Object(r.useState)(null),P=Object(_.a)(T,2),L=P[0],A=P[1];Object(r.useEffect)(function(){var e,t=u.current;f(t),de=e=t,se=e.getContext("2d")},[u]),Object(r.useEffect)(function(){fe.imageMeasures.width=fe.imageMeasures.height=null,R()},[t]),Object(r.useEffect)(function(){R()},[o,h]),Object(r.useEffect)(function(){fe.sliderPosition=y},[y]),Object(r.useEffect)(function(){return function(){window.clearTimeout(L)}},[L]);var R=function(){t&&h&&(w(!0),createImageBitmap(t).then(function(e){var t=h.parentElement,n=function(e,t,n){var r=e.width,a=e.height,i=a>=r,o=parseInt(n/r*a),c=parseInt(t/a*r),u={height:t,width:c},l={height:o,width:n};return i&&c>n?l:!i&&o>t?u:i&&u||l}(e,t.offsetHeight,t.offsetWidth);fe.imageMeasures=n,function(e,t,n){var r=n.renderType,a=n.renderParams,i=e.height,o=e.width;switch(r){case ae.PIXELED:he&&he.renderPixeledImage(se,a);break;case ae.DEFAULT:default:de.height=i,de.width=o,se.clearRect(0,0,de.width,de.height),se.drawImage(t,0,0,o,i),he=new le(t,i,o,se)}}(n,e,o),z()}))},z=function(){var e=new FileReader;e.readAsDataURL(t),e.onload=function(e){e.target.result!==m&&(b(e.target.result),D(0)),w(!1)}},k=function(e,t,n){return e<t?t:e>n?n:e},C=function(e){fe.transition="width ".concat(100,"ms"),A(window.setTimeout(function(){fe.transition=null,A(null)},100))},H=function(e){e.preventDefault(),U&&I(!1)},V=function(e,t){U&&function(e,t){var n=e.pageX-h.getBoundingClientRect().left,r=k(n,0,fe.imageMeasures.width);D(r),t&&C(t)}(e,t)};return a.a.createElement(Me,null,a.a.createElement(Ee,{name:n,handleUploadRequest:c}),O&&a.a.createElement(Ie,null,"loading..."),a.a.createElement(Se,{showContent:!O,onMouseUp:H,onMouseEnter:function(e){1!==e.buttons&&H(e)},onMouseMove:function(e){return V(e,!0)}},a.a.createElement(Ue,null,i&&a.a.createElement(K,{onMouseDown:function(e){U||I(!0)},forwardRef:l}),a.a.createElement(N,{src:m}),a.a.createElement("canvas",{ref:u,id:"pixelized-output"}))),a.a.createElement(B,{isHidden:!t}))},Me=l.b.div(ye()),Se=l.b.div(je(),function(e){return e.showContent?"visible":"hidden"}),Ue=l.b.div(xe(),function(e){var t=e.theme;return t.imageMeasures.width?"".concat(t.imageMeasures.width,"px"):"100%"},function(e){var t=e.theme;return t.imageMeasures.height?"".concat(t.imageMeasures.height,"px"):"100%"}),Ie=l.b.div(we()),Te=function(e){return function(e){return e.renderConfig}(e)},Pe=function(e){return Te(e).renderType!==ae.DEFAULT},Le={handleUploadRequest:function(){return{type:"MODULES/IMAGE_VIEW/HANDLE_UPLOAD_REQUEST"}}},_e=Object(c.a)(function(e){return{name:U(e),file:I(e),renderConfig:Te(e),showSlider:Pe(e)}},Le)(De);function Ae(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,0.5);\n"]);return Ae=function(){return e},e}var Re=function(e){var t=e.message,n=e.dismissToaster;return Object(r.useEffect)(function(){window.alert(t),n()},[t]),a.a.createElement(ze,null)},ze=l.b.div(Ae());function ke(){var e=Object(u.a)(["\n    background: ",";\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return ke=function(){return e},e}var Ce=function(e){var t=e.showToaster,n=e.toasterMessage,r=e.dismissToaster,i=e.displayViewer,o=e.displayUploader;return a.a.createElement(l.a,{theme:fe},a.a.createElement(He,null,a.a.createElement(f,null),i&&a.a.createElement(_e,null),o&&a.a.createElement(L,null),t&&a.a.createElement(Re,{message:n,dismissToaster:r})))},He=l.b.div(ke(),function(e){var t=e.theme;return"transparent linear-gradient(201deg, ".concat(t.backgroundGradientLight," 0%, ").concat(t.backgroundGradientDark," 100%) 0% 0% no-repeat padding-box")}),Ve=function(e){return e.app},We=function(e){return Ve(e).showToaster},Be=function(e){return Ve(e).toasterMessage},Ge=function(e){return Ve(e).displayUploader},Xe=function(e){return null!==I(e)||T(e)},Ne={dismissToaster:function(){return{type:"MODULES/PHOTO_VIEWER/TOASTER_DISMISSED"}}},Fe=Object(c.a)(function(e){return{showToaster:We(e),toasterMessage:Be(e),displayViewer:Xe(e),displayUploader:Ge(e)}},Ne)(Ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=n(7),Qe=n(37),Ze=n(8),Je={file:null,name:"",hideUploaderButton:!1},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODULES/IMAGE_VIEW/PHOTO_UPLOADED":return Object(Ze.a)({},e,{file:t.payload,name:t.payload.name||Je.name});case"MODULES/IMAGE_VIEW/HANDLE_UPLOAD_REQUEST":return Object(Ze.a)({},e,{hideUploaderButton:!0});default:return e}},$e={showToaster:!1,toasterMessage:"",displayUploader:!0},Ke={renderType:ae.DEFAULT,renderParams:{}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODULES/IMAGE_VIEW/PHOTO_UPLOADED":return Ke;case"MODULES/PIXELIZER/UPDATE_RENDER_TYPE":return Object(Ze.a)({},e,{renderType:t.payload});default:return e}},tt=Object(qe.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODULES/PHOTO_VIEWER/SHOW_TOASTER":var n=t.payload;return Object(Ze.a)({},e,{showToaster:!0,toasterMessage:n});case"MODULES/PHOTO_VIEWER/TOASTER_DISMISSED":return Object(Ze.a)({},e,{showToaster:!1,toasterMessage:""});case"MODULES/IMAGE_VIEW/PHOTO_UPLOADED":return Object(Ze.a)({},e,{displayUploader:!1});case"MODULES/IMAGE_VIEW/HANDLE_UPLOAD_REQUEST":return Object(Ze.a)({},e,{displayUploader:!0});default:return e}},uploadedPhoto:Ye,renderConfig:et}),nt=n(11),rt=n.n(nt),at=n(12),it=rt.a.mark(ct),ot=rt.a.mark(ut);function ct(e){var t,n;return rt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.c)(Te);case 2:if(t=e.sent,(n=t.renderType)!==ae.DEFAULT){e.next=9;break}return e.next=7,Object(at.b)(V(ae.PIXELED));case 7:e.next=11;break;case 9:return e.next=11,Object(at.b)(V(n));case 11:case"end":return e.stop()}},it,this)}function ut(){return rt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.a)([Object(at.d)(H,ct)]);case 2:case"end":return e.stop()}},ot,this)}var lt=rt.a.mark(st);function st(){return rt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.a)([ut()]);case 2:case"end":return e.stop()}},lt,this)}var dt=Object(Qe.a)(),ht=[dt],ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d,pt=Object(qe.e)(tt,ft(qe.a.apply(void 0,ht)));dt.run(st);var gt=pt,mt=n(18);o.a.render(a.a.createElement(mt.a,{store:gt},a.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.cb188c7c.chunk.js.map