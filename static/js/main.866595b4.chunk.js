(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},129:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(95),s=a.n(c),i=(a(103),a(16)),l=a.n(i),o=a(29),u=a(6),h=a(7),m=a(9),d=a(8),p=a(10);a(105),a(106),a(107);var f=function(e){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("a",{className:"brand",href:"/"},"Image Clicker"),n.a.createElement("span",{className:"Correct!"===e.resultText?"result-correct":"Incorrect."===e.resultText?"result-incorrect":"result"},e.resultText),n.a.createElement("span",{className:"topScore"},"Score: ",n.a.createElement("span",{className:"score"},e.score),"\xa0\xa0\xa0//\xa0 Top Score: ",n.a.createElement("span",{className:"score"},e.topScore),"\xa0\xa0\xa0\xa0"))};a(108);var g=function(e){return n.a.createElement("div",{className:"imgWrapper"},n.a.createElement("img",{src:e.src,onClick:function(){return e.click(e.id)},key:e.id,id:e.id}))};a(109);var v=function(e){return n.a.createElement("div",{className:"Board"},n.a.createElement("div",{className:"imageRow"},e.data.slice(0,e.data.length/3).map((function(t){return n.a.createElement(g,{src:t.largeImageURL,id:t.id,click:e.click})}))),n.a.createElement("div",{className:"imageRow"},e.data.slice(e.data.length/3,2*e.data.length/3).map((function(t){return n.a.createElement(g,{src:t.largeImageURL,id:t.id,click:e.click})}))),n.a.createElement("div",{className:"imageRow bottom"},e.data.slice(2*e.data.length/3,e.data.length).map((function(t){return n.a.createElement(g,{src:t.largeImageURL,id:t.id,click:e.click})}))))},b=a(96),y=a(97),E=a.n(y),k=(a(126),function(e){return E.a.get("https://pixabay.com/api/?key=".concat("14410776-c69a6ea84b5c2dc56d5dda714","&q=").concat(e.replace(" ","+")))}),S=(a(129),a(130),function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={queryString:"",error:""},a.handleClick=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:12,""===a.state.queryString){e.next=10;break}return t.preventDefault(),e.next=5,a.props.enter(a.state.queryString,r);case 5:n=e.sent,console.log("newarr",n),!0===a.props.harder&&a.props.reset({dataArray:n,clickedElements:[],score:0,topScore:n.length-3,resultText:"Click an image...",win:!1}),e.next=11;break;case 10:a.setState({queryString:"",error:"Enter a search term!"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){var t=e.target,r=t.name,n=t.value;a.setState(Object(b.a)({},r,n))},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Search"},this.props.harder?n.a.createElement("div",null):n.a.createElement("h1",null,"Image Clicker"),n.a.createElement("input",{name:"queryString",value:this.state.queryString,placeholder:"Search something...",onChange:this.handleInputChange}),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(t){return e.handleClick(t,e.props.numImages)},style:{margin:"20px 0 20px 0"}},"Enter"),n.a.createElement("p",{className:this.props.harder?"error-harder":"error"},this.state.error))}}]),t}(n.a.Component));a(267);var j=function(e){return console.log("num Win",e.numImages),n.a.createElement("div",{className:"Win"},n.a.createElement("h1",null,"You win!"),n.a.createElement("p",null,"Continue? Enter a new search term for an even tougher challenge..."),n.a.createElement(S,{harder:!0,enter:e.enter,numImages:e.numImages,reset:e.reset}))},O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={dataArray:a.props.data,clickedElements:[],score:0,topScore:0,resultText:"Click an image...",win:!1},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataArray:this.props.data})}},{key:"shuffleArray",value:function(e){for(var t=e.slice(),a=t.length-1;a>0;a--){var r=Math.floor(Math.random()*a),n=t[a];t[a]=t[r],t[r]=n}return t}},{key:"handleClick",value:function(e){if(this.state.clickedElements.includes(e))this.setState({score:0,clickedElements:[],dataArray:this.shuffleArray(this.state.dataArray),resultText:"Incorrect."});else{var t=this.state.clickedElements.slice();t.push(e),this.setState({score:this.state.score+1,clickedElements:t,dataArray:this.shuffleArray(this.state.dataArray),resultText:"Correct!"}),this.state.score+1>this.state.topScore&&this.setState({topScore:this.state.score+1}),this.state.score+1>=this.state.dataArray.length&&this.setState({win:!0})}}},{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},n.a.createElement(f,{score:this.state.score,topScore:this.state.topScore,resultText:this.state.resultText},"NAVBAR"),this.state.win?n.a.createElement(j,{enter:this.props.enter,numImages:this.state.dataArray.length+3,reset:this.setState.bind(this)}):n.a.createElement(v,{data:this.state.dataArray,click:this.handleClick.bind(this)},"BOARD"))}}]),t}(n.a.Component),w=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",fontFamily:"'Comfortaa', cursive"}},n.a.createElement(S,{enter:this.props.enter,numImages:3}))}}]),t}(n.a.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={array:[]},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Something went wrong. ):"))}}]),t}(n.a.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={gameStart:!1,ApiResponse:""},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"beginGame",value:function(){this.setState({gameStart:!0})}},{key:"stopGame",value:function(){this.setState({gameStart:!1})}},{key:"handleSearch",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r,n,c,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:12,e.next=3,k(t);case 3:if((r=e.sent).data.hits.length<a)for(n=0;n<a;n++)r.data.hits.push({id:Math.random(),largeImageURL:"https://picsum.photos/200?random=".concat(n+1)});return c=r.data.hits.slice(0,a),console.log(c),this.setState({ApiResponse:c}),this.beginGame(),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){switch(this.state.gameStart){case!0:return n.a.createElement(O,{enter:this.handleSearch.bind(this),exit:this.stopGame.bind(this),data:this.state.ApiResponse});case!1:return n.a.createElement(w,{enter:this.handleSearch.bind(this),search:this.handleSearch});default:return n.a.createElement(x,null)}}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(268)}},[[98,1,2]]]);
//# sourceMappingURL=main.866595b4.chunk.js.map