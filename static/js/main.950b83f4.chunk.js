(this["webpackJsonpreda-waseem-project-five"]=this["webpackJsonpreda-waseem-project-five"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/iphoneVectorMain.c3dc5e21.png"},18:function(e,a,t){e.exports=t(28)},23:function(e,a,t){},24:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),o=t.n(c),s=(t(23),t(1)),l=t(2),i=t(4),u=t(3),m=(t(24),t(8)),p=t.n(m);t(25);p.a.initializeApp({apiKey:"AIzaSyBuAvHVa1GLPTJqANtRFZsk5casPB6GMvY",authDomain:"music-app-project-five.firebaseapp.com",databaseURL:"https://music-app-project-five.firebaseio.com",projectId:"music-app-project-five",storageBucket:"music-app-project-five.appspot.com",messagingSenderId:"1053875605858",appId:"1:1053875605858:web:4c937357c1c5bdd7fc9c3b"});var f=p.a,d=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"jason wrapper"},r.a.createElement("h1",null,"\u201cIS THIS THE REAL LIFE?",r.a.createElement("div",{className:"title"},'IS THIS JUST FANTASY?"')),r.a.createElement("h2",null,"Ever curious to learn about other people's favourite songs? Now's your chance! Share your favourite song below and scroll down to see it posted along with other entries!"),r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"bounce far fa-caret-square-down"}))))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer wrapper"},r.a.createElement("p",null,"Created by ",r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.redawaseem.com"},"Reda Waseem"))," at ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://junocollege.com/"},"Juno College")))))}}]),t}(n.Component),v=t(16),E=t.n(v),b=t(17),w=t.n(b),y=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({userInput:a.target.value})},e.scrollToMyRef=function(){window.scrollTo(0,e.myRef.current.offsetTop)},e.handleClick=function(a){(a.preventDefault(),""!==e.state.userInput)?(f.database().ref().push(e.state.userInput),e.setState({userInput:""}),e.scrollToMyRef()):w()("Wait a sec! We wanna dance too! Please write your answer to the question in the box!")},e.handleRemove=function(e){f.database().ref().child(e).remove()},e.state={userInput:"",datas:[]},e.myRef=r.a.createRef(),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(a){var t=[],n=a.val();for(var r in n)t.push({key:r,jam:n[r]});e.setState({datas:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("section",{className:"entries"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"submit",action:""},r.a.createElement("label",{htmlFor:"newEntry"}),r.a.createElement("textarea",{placeholder:"Write your favourite song here...",id:"newJam",onChange:this.handleChange,value:this.state.userInput}),r.a.createElement("button",{className:"jam",onClick:this.handleClick},"LET'S JAM!")),r.a.createElement("ul",{ref:this.myRef,className:"listOfEntries"},this.state.datas.map((function(a){return r.a.createElement("li",{className:"listStyle",key:a.key},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bottom"},r.a.createElement("img",{className:"iphone",src:E.a,alt:"iphone"})),r.a.createElement("div",{className:"top"},r.a.createElement("div",{onClick:function(){return e.handleRemove(a.key)}},r.a.createElement("i",{class:"fas fa-trash"}),r.a.createElement("span",{className:"remove"}," Click to Remove")),r.a.createElement("p",{className:"userAnswer"},a.jam))))}))))),r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.950b83f4.chunk.js.map