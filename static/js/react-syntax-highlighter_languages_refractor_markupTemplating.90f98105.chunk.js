"use strict";(self.webpackChunkfr_components=self.webpackChunkfr_components||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=c.length;-1!==t.code.indexOf(o=n(a,u));)++u;return c[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(u){for(var i=0;i<u.length&&!(o>=r.length);i++){var s=u[i];if("string"===typeof s||s.content&&"string"===typeof s.content){var p=r[o],l=t.tokenStack[p],f="string"===typeof s?s:s.content,g=n(a,p),k=f.indexOf(g);if(k>-1){++o;var m=f.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=f.substring(k+g.length),y=[];m&&y.push.apply(y,c([m])),y.push(h),d&&y.push.apply(y,c([d])),"string"===typeof s?u.splice.apply(u,[i,1].concat(y)):s.content=y}}else s.content&&c(s.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.90f98105.chunk.js.map