(window["webpackJsonp8-tiles"]=window["webpackJsonp8-tiles"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=(n(14),n(15),n(1)),l=n(2),u=n(7),c=n(5),p=n(8);function h(t){for(var e=0,n=0;n<t.length-1;++n)for(var r=n+1;r<t.length;++r)t[n]>t[r]&&0!==t[n]&&0!==t[r]&&e++;return e}function f(){for(var t,e=[0,1,2,3,4,5,6,7,8],n=[],r=e.length;r;)(t=Math.floor(Math.random()*e.length))in e&&(n.push(e[t]),delete e[t],r--);return n}var v=n(6),m=function(t){return(t+1>>>1)-1},_=function(t){return 1+(t<<1)},y=function(t){return t+1<<1},d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t,e){return t>e};Object(s.a)(this,t),this._heap=[],this._comparator=e}return Object(l.a)(t,[{key:"size",value:function(){return this._heap.length}},{key:"isEmpty",value:function(){return 0===this.size()}},{key:"peek",value:function(){return this._heap[0]}},{key:"push",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(function(e){t._heap.push(e),t._siftUp()}),this.size()}},{key:"pop",value:function(){var t=this.peek(),e=this.size()-1;return e>0&&this._swap(0,e),this._heap.pop(),this._siftDown(),t}},{key:"replace",value:function(t){var e=this.peek();return this._heap[0]=t,this._siftDown(),e}},{key:"_greater",value:function(t,e){return this._comparator(this._heap[t],this._heap[e])}},{key:"_swap",value:function(t,e){var n=[this._heap[e],this._heap[t]];this._heap[t]=n[0],this._heap[e]=n[1]}},{key:"_siftUp",value:function(){for(var t=this.size()-1;t>0&&this._greater(t,m(t));)this._swap(t,m(t)),t=m(t)}},{key:"_siftDown",value:function(){for(var t=0;_(t)<this.size()&&this._greater(_(t),t)||y(t)<this.size()&&this._greater(y(t),t);){var e=y(t)<this.size()&&this._greater(y(t),_(t))?y(t):_(t);this._swap(t,e),t=e}}}]),t}(),g=function(){function t(e){Object(s.a)(this,t),this.arr=e,this.empty_pos=this.calc_empty(),this.priority=this.hamming(),this.parent=-1}return Object(l.a)(t,[{key:"hamming",value:function(){for(var t=0,e=0;e<8;e++)this.arr[e]!==e+1&&t++;return t}},{key:"calc_empty",value:function(){for(var t,e=0;e<this.arr.length;e++)0===this.arr[e]&&(t=e);return t}}]),t}(),w=new g([1,2,3,4,5,6,7,8,0]);function k(t,e){for(var n=0;n<t.arr.length;n++)if(t.arr[n]!==e.arr[n])return!1;return!0}function E(t){var e=[];if(t.empty_pos>2){var n=t.arr.slice();n[t.empty_pos]=n[t.empty_pos-3],n[t.empty_pos-3]=0;var r=new g(n);r.parent=t,e.push(r)}if(t.empty_pos<6){var a=t.arr.slice();a[t.empty_pos]=a[t.empty_pos+3],a[t.empty_pos+3]=0;var i=new g(a);i.parent=t,e.push(i)}if(0!==t.empty_pos&&3!==t.empty_pos&&6!==t.empty_pos){var o=t.arr.slice();o[t.empty_pos]=o[t.empty_pos-1],o[t.empty_pos-1]=0;var s=new g(o);s.parent=t,e.push(s)}if(2!==t.empty_pos&&5!==t.empty_pos&&8!==t.empty_pos){var l=t.arr.slice();l[t.empty_pos]=l[t.empty_pos+1],l[t.empty_pos+1]=0;var u=new g(l);u.parent=t,e.push(u)}return e}function b(t,e){return t.hamming()<e.hamming()}function j(t){for(var e=0,n=0,r=[[],[],[]],a=0;a<9;a++)r[Math.floor(a/3)].push(t[a]),0===t[a]&&(e=Math.floor(a/3),n=a%3);return{grid:r,empty_i:e,empty_j:n}}function S(t){var e,n;n=(e=[]).concat.apply(e,Object(v.a)(t));for(var r=[],a=function(t){var e=[],n=new d(b);for(n.push(t);!n.isEmpty();){var r=n.peek();if(e.push(r),k(r,w))return r;var a=E(r);n.pop();var i=!0,o=!1,s=void 0;try{for(var l,u=a[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var c=l.value,p=!0,h=!0,f=!1,v=void 0;try{for(var m,_=e[Symbol.iterator]();!(h=(m=_.next()).done);h=!0){k(m.value,c)&&(p=!1)}}catch(y){f=!0,v=y}finally{try{h||null==_.return||_.return()}finally{if(f)throw v}}p&&n.push(c)}}catch(y){o=!0,s=y}finally{try{i||null==u.return||u.return()}finally{if(o)throw s}}}}(new g(n));-1!==a.parent;)r.push(j(a.arr)),a=a.parent;return r.push(j(a.arr)),r.reverse(),r}function O(t){return 0!==t.value?a.a.createElement("span",{className:"tile"},t.value):a.a.createElement("span",{className:"empty"},".")}var C=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).startClock=function(){n.interval=setInterval(n.increment,1e3)},n.stopClock=function(){window.clearInterval(n.interval)},n.increment=function(){n.setState(function(t){return{time:t.time+1}})},n.started_solving=function(){n.setState({could_be_won:!1,solving:!0})},n.solve=function(){var t=S(n.state.grid),e=0;t.length>1&&!n.state.solving&&(n.started_solving(),n.timer=setInterval(function(){e<t.length?(n.setState(t[e]),e++):n.stop_solve()},300),n.reset())},n.stop_solve=function(){clearInterval(n.timer),n.reset(),n.setState({solving:!1})},n.handleChange=function(t){var e=n.state.grid,r=n.state.empty_i,a=n.state.empty_j,i=t.keyCode,o=40===i&&0!==r,s=38===i&&2!==r,l=39===i&&0!==a,u=37===i&&2!==a;if(o||s||l||u){var c,p;o&&(c=r-1,p=a),s&&(c=r+1,p=a),l&&(c=r,p=a-1),u&&(c=r,p=a+1);var h=e[r][a];e[r][a]=e[c][p],e[c][p]=h,n.setState({grid:e,empty_i:c,empty_j:p})}},n.shuffleBoard=function(){n.startClock();var t,e,r,a,i=function(){var t=[],e=[[],[],[]];do{t=f()}while(h(t)%2!==0);for(var n=0;n<t.length;++n)e[Math.floor(n/3)].push(t[n]);return e}();for(t=0;t<=2;t++)for(e=0;e<=2;e++)0===i[t][e]&&(r=t,a=e,e=2,t=2);n.setState({grid:i,empty_i:r,empty_j:a,could_be_won:!0})},n.reset=function(){n.stopClock(),n.setState({grid:[[1,2,3],[4,5,6],[7,8,0]],could_be_won:!1,empty_i:2,empty_j:2,time:0})},n.state={empty_i:2,empty_j:2,grid:[[1,2,3],[4,5,6],[7,8,0]],could_be_won:!1,time:0,solving:!1},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this,e=function(t){for(var e=[[1,2,3],[4,5,6],[7,8,0]],n=0;n<3;n++)for(var r=0;r<3;r++)if(t[n][r]!==e[n][r])return!1;return!0}(this.state.grid);return e&&this.state.could_be_won?(this.stopClock(),a.a.createElement("div",null,a.a.createElement("h1",null,"You won in ",Math.floor(this.state.time/60),":",this.state.time%60," Reload to play again"))):a.a.createElement("div",null,a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"board",onKeyDown:this.handleChange,tabIndex:"0"},this.state.grid.map(function(e,n){return a.a.createElement("div",{key:n},e.map(function(e,r){return a.a.createElement(O,{value:t.state.grid[n][r],key:r})}))})),a.a.createElement("div",{className:"clock"},a.a.createElement("h3",null,Math.floor(this.state.time/60)," : ",this.state.time%60))),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:e?this.shuffleBoard:this.reset},e?"START":"RESET"),a.a.createElement("button",{onClick:this.state.solving?this.stop_solve:this.solve},this.state.solving?"STOP":"SOLVE")))}}]),e}(a.a.Component);var z=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"8-TILES"),a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ae761cd8.chunk.js.map