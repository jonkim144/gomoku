(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/board.a7ebdc24.svg"},function(e,t,n){e.exports=n.p+"static/media/black-piece.029d504d.svg"},function(e,t,n){e.exports=n.p+"static/media/white-piece.513de868.svg"},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(17),n(1)),s=n(2),u=n(4),l=n(3),p=n(5),h=(n(19),n(8)),d=n.n(h),v=n(9),f=n.n(v),m=n(10),g=n.n(m),M=Object.freeze({EMPTY:0,BLACK:1,WHITE:2}),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.x,a=e.y,r=e.ghost;return t===M.EMPTY?null:o.a.createElement("img",{alt:"piece",src:M.BLACK===t?f.a:g.a,style:{position:"absolute",left:8+46.15*n,top:8+46.15*a,userSelect:"none",opacity:r?.75:1},draggable:!1,width:40,height:40})}}]),t}(o.a.PureComponent),y=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleMouseDown=function(e){var t=Math.round(Math.max(0,(e.pageX-e.currentTarget.offsetLeft-27)/46.15)),a=Math.round(Math.max(0,(e.pageY-e.currentTarget.offsetTop-27)/46.15));n.placePieceAt(t,a)},n.handleMouseMove=function(e){var t=Math.round(Math.max(0,(e.pageX-e.currentTarget.x-27)/46.15)),a=Math.round(Math.max(0,(e.pageY-e.currentTarget.y-27)/46.15));n.setState({hoverX:t,hoverY:a})},n.placePieceAt=function(e,t){var a=e+15*t;n.state.pieces[a]===M.EMPTY&&n.setState(function(e){var t=e.pieces,n=e.pieceToMove,o=t.slice();return o[a]=n,{pieces:o,pieceToMove:M.BLACK===n?M.WHITE:M.BLACK}})};for(var a=[];a.length<225;)a.push(M.EMPTY);return n.state={pieces:a,pieceToMove:M.BLACK,hoverX:54.15,hoverY:54.15},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.pieceToMove,a=e.hoverX,r=e.hoverY,c=e.pieces;return o.a.createElement("div",{style:t.styles.container},o.a.createElement("div",{style:{position:"relative"},onMouseDown:this.handleMouseDown},o.a.createElement("img",{src:d.a,alt:"board",width:700,height:700,style:{userSelect:"none"},draggable:!1,onMouseMove:this.handleMouseMove}),c.map(function(e,t){return o.a.createElement(b,{key:t,type:e,x:t%15,y:Math.floor(t/15)})}),c[a+15*r]===M.EMPTY&&o.a.createElement(b,{ghost:!0,type:n,x:a,y:r})))}}]),t}(o.a.PureComponent);y.styles={container:{display:"flex",alignItems:"center",justifyContent:"center"}};var w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Gomoku"),o.a.createElement(y,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.76c9cfac.chunk.js.map