(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/Loading.05c337a9.gif"},23:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),c=a.n(o),i=(a(32),a(6)),s=a(7),l=a(10),u=a(8),p=a(11),h=(a(34),a(12)),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(h.Link,{className:"navbar-brand",to:"/"},"NewsInfo"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/business"},"Business")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/general"},"General")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/sports"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.Link,{className:"nav-link",to:"/technology"},"Technology")))))))}}]),t}(n.Component),f=a(15),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageUrl,o=e.newsUrl,c=e.author,i=e.date;return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IUOeKn57mlLy9WBBOmXcERYfudAhda2HjA&usqp=CAU",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-body-secondary"},"By ",c||"unkown author"," on ",new Date(i).toGMTString()," ")),r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-dark"},"Read More"))))}}]),t}(n.Component),d=a(21),y=a.n(d),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:y.a,alt:"Loading"}))}}]),t}(n.Component),b=a(9),E=a.n(b);function w(){w=function(){return t};var e,t={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,a){return e[t]=a}}function u(e,t,a,n){var o=t&&t.prototype instanceof y?t:y,c=Object.create(o.prototype),i=new R(n||[]);return r(c,"_invoke",{value:O(e,a,i)}),c}function p(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var h="suspendedStart",m="suspendedYield",f="executing",g="completed",d={};function y(){}function v(){}function b(){}var E={};l(E,c,function(){return this});var k=Object.getPrototypeOf,x=k&&k(k(_([])));x&&x!==a&&n.call(x,c)&&(E=x);var N=b.prototype=y.prototype=Object.create(E);function L(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){function a(r,o,c,i){var s=p(e[r],e,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(u).then(function(e){l.value=e,c(l)},function(e){return a("throw",e,c,i)})}i(s.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t(function(t,r){a(e,n,t,r)})}return o=o?o.then(r,r):r()}})}function O(t,a,n){var r=h;return function(o,c){if(r===f)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw c;return{value:e,done:!0}}for(n.method=o,n.arg=c;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=p(t,a,n);if("normal"===l.type){if(r=n.done?g:m,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=g,n.method="throw",n.arg=l.arg)}}}function S(t,a){var n=a.method,r=t.iterator[n];if(r===e)return a.delegate=null,"throw"===n&&t.iterator.return&&(a.method="return",a.arg=e,S(t,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=p(r,t.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,d;var c=o.arg;return c?c.done?(a[t.resultName]=c.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,d):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,d)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function _(t){if(t||""===t){var a=t[c];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function a(){for(;++r<t.length;)if(n.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=b,r(N,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,s,"GeneratorFunction")),e.prototype=Object.create(N),e},t.awrap=function(e){return{__await:e}},L(j.prototype),l(j.prototype,i,function(){return this}),t.AsyncIterator=j,t.async=function(e,a,n,r,o){void 0===o&&(o=Promise);var c=new j(u(e,a,n,r),o);return t.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},L(N),l(N,s,"Generator"),l(N,c,function(){return this}),l(N,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(n,r){return i.type="throw",i.arg=t,a.next=n,r&&(a.method="next",a.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),C(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;C(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:_(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}var k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).PropTypes={country:E.a.string,pageSize:E.a.number,category:E.a.string},e.handlePreviousClick=Object(f.a)(w().mark(function t(){var a,n,r;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=dc6436da9b9d40738c4f68271bf2c4fe&page=").concat(e.state.page-1,"&pagesize=").concat(e.props.pageSize),e.setState({Loading:!0}),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,e.setState({Loading:!1}),e.setState({articles:r.articles}),e.setState({page:e.state.page-1});case 11:case"end":return t.stop()}},t)})),e.handleNextClick=Object(f.a)(w().mark(function t(){var a,n,r;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.page+1>Math.ceil(e.state.totalResults/e.props.pageSize)){t.next=12;break}return a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=dc6436da9b9d40738c4f68271bf2c4fe&page=").concat(e.state.page+1,"&pagesize=").concat(e.props.pageSize),e.setState({Loading:!0}),t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:r=t.sent,e.setState({Loading:!1}),e.setState({articles:r.articles}),e.setState({page:e.state.page+1});case 12:case"end":return t.stop()}},t)})),console.log("i am a constructor"),e.state={articles:[],page:1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(w().mark(function e(){var t,a,n;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=dc6436da9b9d40738c4f68271bf2c4fe&pagesize=").concat(this.props.pageSize),this.setState({Loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),this.setState({articles:n.articles,totalResults:n.totalResults,Loading:!1});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h2",{className:"text-center"},"NewsInfo --- Top HeadLines"),this.state.Loading&&r.a.createElement(v,null),r.a.createElement("div",{className:"row"},!this.state.Loading&&this.state.articles.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(g,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt}))})),r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("button",{disabled:this.state.page<=1,type:"button",className:"btn btn-dark",onClick:this.handlePreviousClick}," \u2190 previous"),r.a.createElement("button",{disabled:this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize),type:"button",className:"btn btn-dark",onClick:this.handleNextClick},"next \u2192")))}}]),t}(n.Component);k.defaultProps={country:"in",pageSize:9,category:"general"};var x=k,N=a(22),L=a(0),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{forceRefresh:!0},r.a.createElement(m,null),r.a.createElement(L.Switch,null,r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/"},r.a.createElement(x,{key:"general",pageSize:9,country:"in",category:"general"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/business"},r.a.createElement(x,{key:"business",pageSize:9,country:"in",category:"business"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/entertainment"},r.a.createElement(x,{key:"entertainment",pageSize:9,country:"in",category:"entertainment"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/general"},r.a.createElement(x,{key:"general",pageSize:9,country:"in",category:"general"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/health"},r.a.createElement(x,{key:"health",pageSize:9,country:"in",category:"health"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/science"},r.a.createElement(x,{key:"science",pageSize:9,country:"in",category:"science"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/sports"},r.a.createElement(x,{key:"sports",pageSize:9,country:"in",category:"sports"})),r.a.createElement(L.Route,{exact:!0,strict:!0,path:"/technology"},r.a.createElement(x,{key:"technology",pageSize:9,country:"in",category:"technology"})))))}}]),t}(n.Component),O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,44)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),O()}},[[23,3,2]]]);
//# sourceMappingURL=main.9ba7536b.chunk.js.map