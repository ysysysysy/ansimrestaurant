(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(30),o=a.n(s),r=(a(42),a(43),a(19),a(20),a(0));var i=function(e){return Object(n.useEffect)((function(){var t=new kakao.maps.InfoWindow({zIndex:1}),a=document.getElementById("map"),n={center:new kakao.maps.LatLng(37.60450771132806,126.92827091218756),level:7},s="https://cdn-icons-png.flaticon.com/512/443/443025.png",o=new kakao.maps.Size(34,39),r={offset:new kakao.maps.Point(27,69)},i=new kakao.maps.Map(a,n);o=new kakao.maps.Size(34,39);c.a.Fragment,void 0===e.state.pinfo||e.state.pinfo.map((function(e){console.log(e.ppname),function(e){var a=new kakao.maps.MarkerImage("https://cdn-icons-png.flaticon.com/512/727/727606.png",o,r),n=new kakao.maps.Marker({map:i,position:new kakao.maps.LatLng(e.lat,e.lon),image:a,title:e.ppname});kakao.maps.event.addListener(n,"click",(function(){t.setContent('<div style="padding:5px;font-size:12px;width:300px;">'+e.ppname+"("+e.isfree+")<br/>"+e.ppaddress1+e.ppaddress2+"<br/>"+e.tel+"<br/>\uc6b4\uc601\uc694\uc77c: "+e.opdays+"<br/></div>"),t.open(i,n)}))}(e)})),void 0===e.state.info||e.state.info.map((function(e){new kakao.maps.LatLng(e.lat,e.lon);function a(e){var a=new kakao.maps.LatLng(e.lat,e.lon),n=new kakao.maps.Marker({map:i,position:a,title:e.workplacename});kakao.maps.event.addListener(n,"click",(function(){t.setContent('<div style="padding:5px;font-size:12px;width:300px;">'+e.workplacename+"<br/>"+e.address1+"<br/>"+e.tel+"</div>"),t.open(i,n)}))}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){!function(e,t){var a=new kakao.maps.MarkerImage(s,o,r),n=new kakao.maps.Marker({map:i,position:e,image:a}),c=t,l=!0;new kakao.maps.InfoWindow({content:c,removable:l}).open(i,n),i.setCenter(e)}(new kakao.maps.LatLng(t.coords.latitude,t.coords.longitude),'<div style="padding:5px;width:100px;">\ud604\uc7ac\uc704\uce58</div>'),a(e)})):a(e)}))})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:["\ub9c8\ucee4 \uc885\ub958 3\uac00\uc9c0",Object(r.jsx)("br",{}),"1. \ud604\uc7ac \uc790\uc2e0\uc758 \uc704\uce58: \ube68\uac04 \ub9c8\ucee4 \uc0ac\uc6a9",Object(r.jsx)("br",{}),"2. \uc548\uc2ec\uc2dd\ub2f9\uc758 \uc704\uce58: \ud30c\ub780\uc0c9 \ub9c8\ucee4 \uc0ac\uc6a9 ",Object(r.jsx)("br",{}),"3. \uacf5\uc601\uc8fc\ucc28\uc7a5\uc758 \uc704\uce58:\ub178\ub780 \ub9c8\ucee4 \uc0ac\uc6a9"]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{id:"map",style:{width:"100%",height:"550px"}})]})},l=a(8),d=a(31),j=a(32),b=a(9),p=a(37),h=a(36),u=(a(21),a(45),a(11));var m=function(e){return Object(r.jsxs)("div",{id:"List",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("table",{className:"result",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"\uc548\uc2ec\uc2dd\ub2f9SEQ"}),Object(r.jsx)("th",{className:"name",children:"\uc2dd\ub2f9\uba85"}),Object(r.jsx)("th",{className:"address1",children:"\uc8fc\uc18c"}),Object(r.jsx)("th",{className:"address2",children:"\uc8fc\uc18c \uc0c1\uc138"}),Object(r.jsx)("th",{className:"number",children:"\uc804\ud654\ubc88\ud638"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(c.a.Fragment,{children:void 0===e.state.info?Object(r.jsx)("br",{}):e.state.info.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"id",children:e.ansimseq},e.ansimseq),Object(r.jsx)("td",{className:"name",children:Object(r.jsx)(u.b,{to:{pathname:"/infopage/".concat(e.workplacename,"/").concat(e.address1,"/").concat(e.address2,"/").concat(e.tel,"/").concat(e.lat,"/").concat(e.lon)},children:e.workplacename})}),Object(r.jsx)("td",{className:"address1",children:e.address1}),Object(r.jsx)("td",{className:"address2",children:e.address2}),Object(r.jsx)("td",{className:"number",children:e.tel})]})}))})})]})]})},x=a.p+"static/media/logo.695b22dc.svg";var O=function(){return Object(r.jsxs)("div",{id:"content",style:{height:"200px",marginTop:"10px"},children:[Object(r.jsx)("img",{src:x,id:"logo",alt:"logo",style:{height:"100px"}}),Object(r.jsx)("span",{id:"logoword",children:" \uc548\uc2ec\uc2dd\ub2f9"})," \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003",Object(r.jsx)("span",{style:{fontSize:"15px"},children:"\uc74c\uc2dd \ub35c\uc5b4\uba39\uae30/ \uc704\uc0dd\uc801\uc778 \uc218\uc800 \uad00\ub9ac/ \uc885\uc0ac\uc790 \ub9c8\uc2a4\ud06c \ucc29\uc6a9/\uc190\uc53b\uae30 \uc2dc\uc124 \ub610\ub294 \uc190\uc18c\ub3c5 \uc7a5\uce58(\uc6a9\ud488) \ube44\uce58"}),Object(r.jsx)("hr",{})]})},k=a(18),f=a.n(k);var g=function(){return Object(r.jsxs)("div",{className:"footer",style:{backgroundColor:"ghostwhite"},children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{children:[" Icons made by ",Object(r.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://www.freepik.com/vectors/food",children:"Food vector created by pch.vector - www.freepik.com"})]}),Object(r.jsxs)("div",{children:["Icons made by ",Object(r.jsx)("a",{href:"https://icon54.com/",title:"Pixel perfect",children:"Pixel perfect"})," from ",Object(r.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={loc:!1,parameters:{options:"",wardname:"",range:.1}},n.setCd=n.setCd.bind(Object(b.a)(n)),n.setLoc=n.setLoc.bind(Object(b.a)(n)),n.getData=n.getData.bind(Object(b.a)(n)),n.latitude=0,n.longitude=0,n.categoryOnClick=n.categoryOnClick.bind(Object(b.a)(n)),n.event=!1,n.urls=["https://cors-anywhere.herokuapp.com/http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi","https://cors-anywhere.herokuapp.com/http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/publicpapi"],n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState((function(e){return{parameters:Object(l.a)(Object(l.a)({},e.parameters),{},{lat:t.coords.latitude,lon:t.coords.longitude,range:.05})}}))})),this.setOptions("g")}},{key:"getData",value:function(){var e=this;this.isEvent()&&(this.getdata=f.a.get(this.urls[0],{params:this.state.parameters}).then((function(t){return e.setState({info:t.data})})).catch((function(e){return console.log(e)})),this.getdata=f.a.get(this.urls[1],{params:this.state.parameters}).then((function(t){return e.setState({pinfo:t.data})})).catch((function(e){return console.log(e)})),this.setEvent())}},{key:"setOptions",value:function(e){var t=this;void 0===this.state.parameters.options?this.setState((function(t){return{parameters:Object(l.a)(Object(l.a)({},t.parameters),{},{options:e})}})):this.setState((function(a){return{parameters:Object(l.a)(Object(l.a)({},a.parameters),{},{options:t.state.parameters.options+e})}}))}},{key:"setCd",value:function(e){void 0===this.state.parameters.categorydetail&&this.setOptions("d"),this.setState((function(t){return{parameters:Object(l.a)(Object(l.a)({},t.parameters),{},{categorydetail:e})}}))}},{key:"setLoc",value:function(){this.setState((function(e){return{loc:!e.loc}}))}},{key:"isEvent",value:function(){return this.event}},{key:"setEvent",value:function(){this.event=!this.event}},{key:"categoryOnClick",value:function(e){this.setCd(e),this.setEvent()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{id:"button",children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"50px"},children:"\uc6d0\ud558\ub294 \uce74\ud14c\uace0\ub9ac \ubc84\ud2bc\uc744 \ub354\ube14 \ud074\ub9ad\ud558\uc2dc\uba74 \ud574\ub2f9 \uce74\ud14c\uace0\ub9ac\uc5d0 \ub300\ud55c \uacb0\uacfc\uac00 \ub098\uc635\ub2c8\ub2e4."}),Object(r.jsxs)("div",{id:"button1",children:[Object(r.jsx)("button",{id:"\ud55c\uc2dd",style:{marginTop:"-200px"},value:"\ud55c\uc2dd",onClick:function(){return e.categoryOnClick("\ud55c\uc2dd")},children:"\ud55c\uc2dd"}),Object(r.jsx)("button",{id:"\uc911\uc2dd",style:{marginTop:"-200px"},value:"\uc911\uc2dd",onClick:function(){return e.categoryOnClick("\uc911\uc2dd")},children:"\uc911\uc2dd"}),Object(r.jsx)("button",{id:"\uc77c\uc2dd",style:{marginTop:"-200px"},value:"\uc77c\uc2dd",onClick:function(){return e.categoryOnClick("\uc77c\uc2dd")},children:"\uc77c\uc2dd"}),Object(r.jsx)("button",{id:"\uc11c\uc591\uc2dd",style:{marginTop:"-200px"},value:"\uc11c\uc591\uc2dd",onClick:function(){return e.categoryOnClick("\uc11c\uc591\uc2dd")},children:"\uc11c\uc591\uc2dd"})]}),Object(r.jsxs)("div",{id:"button2",children:[Object(r.jsx)("button",{id:"\uae30\ud0c0\uc678\uad6d\uc2dd",value:"\uae30\ud0c0\uc678\uad6d\uc2dd",onClick:function(){return e.categoryOnClick("\uae30\ud0c0\uc678\uad6d\uc2dd")},children:" \uae30\ud0c0\uc678\uad6d\uc2dd"}),Object(r.jsx)("button",{id:"\uae30\ud0c0_\uc74c\uc2dd\uc810\uc5c5",value:"\uae30\ud0c0 \uc74c\uc2dd\uc810\uc5c5",onClick:function(){return e.categoryOnClick("\uae30\ud0c0 \uc74c\uc2dd\uc810\uc5c5")},children:"\uae30\ud0c0 \uc74c\uc2dd\uc810\uc5c5"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("button",{className:"choice",onClick:function(){return e.setLoc()},style:{width:"300px",height:"50px",backgroundColor:"black",color:"white",fontSize:"20px",borderRadius:"20px",marginLeft:"-20px"},children:this.state.loc?"\ubaa9\ub85d\uc73c\ub85c \ub098\ud0c0\ub0b4\uae30":"\uc9c0\ub3c4\ub85c \ub098\ud0c0\ub0b4\uae30"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{id:"test",children:[this.getData(),this.state.loc?Object(r.jsx)(i,{state:this.state}):Object(r.jsx)(m,{state:this.state})]}),Object(r.jsx)(g,{})]})}}]),a}(n.Component),w=a(13),y=(a(73),function(e){var t=e.open,a=e.close,n=e.header;return Object(r.jsx)("div",{className:t?"openModal modal":"modal",children:t?Object(r.jsxs)("section",{children:[Object(r.jsxs)("header",{children:[n,Object(r.jsx)("button",{className:"close",onClick:a,children:" \xd7 "})]}),Object(r.jsxs)("main",{children:["\uc0ac\uc6a9\ud558\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \uc2dc\uc5d0\ub294 IP\uc5d0 \ub530\ub978  ",Object(r.jsx)("br",{}),"\uc8fc\uc18c \uc704\uce58 \uc0ac\uc6a9 \ub3d9\uc758\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4. ",Object(r.jsx)("br",{}),"(\ub098\uac00\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \uc2dc\uc5d0\ub294",Object(r.jsx)("br",{})," \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4.)"]}),Object(r.jsxs)("footer",{children:[Object(r.jsx)(u.b,{to:"/main",children:Object(r.jsx)("button",{className:"agree",children:" \uc0ac\uc6a9\ud558\uae30 "})})," \xa0 | ",Object(r.jsx)("button",{className:"close",onClick:a,children:" \ub098\uac00\uae30 "})]})]}):null})});var C=function(){var e=Object(n.useState)(!1),t=Object(w.a)(e,2),a=t[0],s=t[1];return Object(r.jsxs)("div",{className:"Home",children:[Object(r.jsxs)("div",{className:"Homelogo",children:[Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)("img",{src:x,className:"Home_logo",alt:"logo"}),Object(r.jsx)("h1",{id:"title",children:" \uc548\uc2ec\uc2dd\ub2f9"})]}),Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("button",{className:"button_agree",onClick:function(){s(!0),console.log("\uc11c\ube44\uc2a4 \uc0ac\uc6a9")},children:"\uc785\xa0\xa0\xa0\xa0\xa0\xa0\uc7a5"}),Object(r.jsx)(y,{open:a,close:function(){s(!1),console.log("\uc11c\ube44\uc2a4 \uc0ac\uc6a9\uc548\ud568")},header:"\uc548\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ub0b4"})]})]})};var L=a(35),N=function(e){var t=e.match,a=e.history,c=window.location.href,s=function(e){var t=Object(n.useState)(e?"loading":"idle"),a=Object(w.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){if(e){var t=document.querySelector('script[src="'.concat(e,'"]'));if(t)s(t.getAttribute("data-status"));else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var a=function(e){t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",a),t.addEventListener("error",a)}var n=function(e){s("load"===e.type?"ready":"error")};return t.addEventListener("load",n),t.addEventListener("error",n),function(){t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}s("idle")}),[e]),c}("https://developers.kakao.com/sdk/js/kakao.js");Object(n.useEffect)((function(){"ready"===s&&window.Kakao&&(window.Kakao.isInitialized()||window.Kakao.init("d6fc8ac74d2f83232da81a00ebbd2804"))}),[s]);return Object(n.useEffect)((function(){var e=document.getElementById("map"),a={center:new kakao.maps.LatLng(37.60450771132806,126.92827091218756),level:4},n=new kakao.maps.Map(e,a),c=new kakao.maps.LatLng(t.params.lat,t.params.lon),s=new kakao.maps.Size(24,35),o=new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",s);console.log(t.params.workplacename,t.params.address1);new kakao.maps.Marker({map:n,position:new kakao.maps.LatLng(t.params.lat,t.params.lon),title:t.params.workplacename,image:o});n.setCenter(c)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsxs)("div",{id:"content",children:[Object(r.jsx)("div",{id:"map",style:{width:"300px",height:"300px",position:"relative",left:"800px"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{id:"Info",children:["\uc2dd\ub2f9 \uc774\ub984: ",t.params.workplace,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\uc2dd\ub2f9 \uc8fc\uc18c:",t.params.address1," ",t.params.address2,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\uc2dd\ub2f9 \uc804\ud654\ubc88\ud638: ",t.params.tel]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"return",onClick:function(){a.goBack()},style:{backgroundColor:"black",color:"white",border:"solid",borderRadius:"20px",width:"200px",height:"50px"},children:"\ub9ac\uc2a4\ud2b8\ub85c \ub3cc\uc544\uac00\uae30"}),Object(r.jsx)("button",{className:"copy",onClick:function(){var e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=t.params.tel,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},style:{backgroundColor:"black",color:"white",border:"solid",borderRadius:"20px",width:"200px",height:"50px"},children:"\uc804\ud654\ubc88\ud638 \ubcf5\uc0ac\ud558\uae30"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{id:"shareBtn",onClick:function(){window.Kakao.Link.sendScrap({requestUrl:window.document.URL})},style:{backgroundColor:"black",color:"white",border:"solid",borderRadius:"20px",width:"200px",height:"50px"},children:"\uce74\uce74\uc624\ud1a1 \uacf5\uc720\ud558\uae30 "}),Object(r.jsx)(L.CopyToClipboard,{text:c,children:Object(r.jsx)("button",{style:{backgroundColor:"black",color:"white",border:"solid",borderRadius:"20px",width:"200px",height:"50px"},children:"\uc0ac\uc774\ud2b8 \uc8fc\uc18c \ubcf5\uc0ac\ud558\uae30"})})]}),Object(r.jsx)(g,{})]})},E=a(2),S=function(){return Object(r.jsx)(u.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(E.c,{children:[Object(r.jsx)(E.a,{exact:!0,path:"/",component:C}),Object(r.jsx)(E.a,{path:"/loc",component:i}),Object(r.jsx)(E.a,{path:"/main",component:v}),Object(r.jsx)(E.a,{path:"/list",component:m}),Object(r.jsx)(E.a,{exact:!0,path:"/infopage/:workplace/:address1/:address2/:tel/:lat/:lon",component:N})]})})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root")),I()}},[[77,1,2]]]);
//# sourceMappingURL=main.a6cdc899.chunk.js.map