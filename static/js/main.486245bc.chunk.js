(this.webpackJsonpgallerygram=this.webpackJsonpgallerygram||[]).push([[0],{15:function(e,t,a){e.exports=a(30)},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=(a(20),a(2)),o=function(){return c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"GalleryGram"),c.a.createElement("h2",null,"Memories"))},u=a(8),s=a.n(u),m=a(14),f=a(5);a(31),a(22);f.initializeApp({apiKey:"AIzaSyBiPLUCb7OWx-Vtgu97BLvf9pGU-r6qq5k",authDomain:"gallery-store-c165f.firebaseapp.com",projectId:"gallery-store-c165f",storageBucket:"gallery-store-c165f.appspot.com",messagingSenderId:"508525758387",appId:"1:508525758387:web:68276645f2a003f029adc6",measurementId:"G-W67HCQD434"});var d=f.storage(),p=f.firestore(),g=f.firestore.FieldValue.serverTimestamp,v=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),u=o[0],f=o[1],v=Object(n.useState)(null),b=Object(i.a)(v,2),E=b[0],y=b[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){f(e)}),Object(m.a)(s.a.mark((function e(){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,c=g(),a.add({url:n,createdAt:c}),y(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:c,url:E,error:u}},b=a(3),E=(a(26),function(e){var t=e.file,a=e.setFile,r=v(t),l=r.url,i=r.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),console.log(i,l),c.a.createElement(b.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})}),y=(a(27),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),u=o[0],s=o[1],m=["image/png","image/jpeg"];return c.a.createElement("form",null,c.a.createElement("label",null,c.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(r(t),s("")):(r(null),s("Please Select an image file (png or jpg)"))}}),c.a.createElement("span",null,"+")),c.a.createElement("div",{className:"output"},u&&c.a.createElement("div",{className:"error"},u),a&&c.a.createElement("div",null,a.name),a&&c.a.createElement(E,{file:a,setFile:r})))}),j=a(9),O=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:c}},h=(a(28),function(e){var t=e.setSelectedImg,a=c.a.useState([]),n=Object(i.a)(a,2),r=(n[0],n[1],O("images").docs);return c.a.createElement("div",{className:"img-grid"},r&&r.map((function(e){return c.a.createElement(b.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1}},c.a.createElement(b.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1},onClick:function(){return t(e.url)}}),c.a.createElement(b.a.a,{className:"remove-image",href:"",style:{display:"inline"},onClick:function(t){t.preventDefault(),function(e){d.refFromURL(e.url).delete().then((function(){p.collection("images").doc(e.id).delete().then((function(){alert("Image successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))})).catch((function(e){}))}(e)}},"\xd7"))})))}),S=(a(29),function(e){var t=e.docs,a=e.selectedImg,n=e.setSelectedImg;e.modalOpen,e.modalClose;var r=function(e){return t.findIndex((function(t){return t.url===e}))}(a);return c.a.createElement(b.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&n(null)},initial:{opacity:0},animate:{opacity:1}},c.a.createElement("img",{className:"mySlides",src:a,alt:"enlarged pic",initial:{y:"100vh"},animate:{y:"100vh"}}),c.a.createElement("a",{className:"".concat(r-1?"block":"none"," ").concat(0===r?"":"prev"),onClick:function(e){n(r-1>-1?t[r-1].url:null)}},"\u276e"),c.a.createElement("a",{className:"".concat(r+1?"block":"none"," ").concat(r===t.length-1?"":"next"),onClick:function(e){r+1<t.length?n(t[r+1].url):n(null)}},"\u276f"))});var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),s=u[0],m=u[1];Object(n.useEffect)((function(){a&&(null===a||void 0===a?void 0:a.length)>1?d():f()}),[a]);var f=function(){return m(!1)},d=function(){return m(!0)},p=O("images").docs;return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement(y,null),c.a.createElement(h,{setSelectedImg:r}),s&&c.a.createElement(S,{close:f,modalOpen:s,selectedImg:a,setSelectedImg:r,docs:p}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.486245bc.chunk.js.map