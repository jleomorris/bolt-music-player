(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{20:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),i=c(12),o=c.n(i),s=c(6),l=c.n(s),u=c(8),d=c(4),b=c(7),j=(c(20),c.p+"static/media/pexels-photo-3391932.fb2d21db.jpg"),p=c(5),h=c(3),f=function(e){var t=e.currentSong,c=e.isPlaying,a=e.setIsPlaying,r=e.audioRef,i=e.songInfo,o=e.setSongInfo,s=e.songs,b=e.setCurrentSong,j=e.setSongs,f=e.isDarkModeActive,m=function(e){var t=s.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));j(t)},v=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(u.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.findIndex((function(e){return e.id===t.id})),"forward"!==n){e.next=5;break}return e.next=4,b(s[(a+1)%s.length]);case 4:m(s[(a+1)%s.length]);case 5:if("back"!==n){e.next=15;break}if((a-1)%s.length!==-1){e.next=12;break}return e.next=9,b(s[s.length-1]);case 9:return m(s[s.length-1]),c&&r.current.play(),e.abrupt("return");case 12:return e.next=14,b(s[(a-1)%s.length]);case 14:m(s[(a-1)%s.length]);case 15:c&&r.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player-container",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:v(i.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(n.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){r.current.currentTime=e.target.value,o(Object(d.a)(Object(d.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("div",{style:O,className:"animate-track"})]}),Object(n.jsx)("p",{children:i.duration?v(i.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(p.a,{className:"skip-back ".concat(f?"":"icon-dark"),size:"2x",icon:h.a,onClick:function(){return g("back")}}),Object(n.jsx)(p.a,{className:"play ".concat(f?"":"icon-dark"),size:"2x",icon:c?h.g:h.h,onClick:function(){c?r.current.pause():r.current.play(),a(!c)}}),Object(n.jsx)(p.a,{className:"skip-forward ".concat(f?"":"icon-dark"),size:"2x",icon:h.b,onClick:function(){return g("forward")}})]})]})},m=function(e){var t=e.currentSong,c=e.isPlaying,a=e.isDarkModeActive;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{alt:t.name,className:"".concat(c?"rotate":""),src:t.cover}),Object(n.jsx)("h2",{className:"".concat(a?"dark-icon-font":""),children:t.name}),Object(n.jsx)("h3",{className:"".concat(a?"dark-icon-font":""),children:t.artist})]})},v=c(13),g=function(e){var t=e.song,c=e.songs,a=e.currentSong,r=e.setCurrentSong,i=e.id,o=e.audioRef,s=e.isPlaying,b=e.setIsPlaying,j=e.setSongs,f=e.isDarkModeActive,m=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:n=c.map((function(e){return e.id===i?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),j(n),i===a.id&&s?(o.current.pause(),b(!1)):(a.id,o.current.play(),b(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"library-song ".concat(t.active?"grayscale-off":""),onClick:m,children:[Object(n.jsxs)("div",{className:"song-cover-container",children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),i===a.id&&s&&Object(n.jsx)(p.a,{icon:h.g}),i===a.id&&!s&&Object(n.jsx)(p.a,{icon:v.a})]}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{className:"".concat(f?"dark-icon-font":""),children:t.name}),Object(n.jsx)("h4",{className:"".concat(f?"dark-icon-font":""),children:t.artist})]})]})},O=function(e){var t=e.songs,c=e.currentSong,a=e.setCurrentSong,r=e.audioRef,i=e.isPlaying,o=e.setIsPlaying,s=e.setSongs,l=e.isLibraryActive,u=e.isDarkModeActive;return Object(n.jsxs)("div",{className:"library ".concat(l?"active-library":""," ").concat(u?"dark":""),children:[Object(n.jsx)("h2",{className:"".concat(u?"dark-icon-font":""),children:"Library"}),Object(n.jsxs)("div",{className:"sort-by-container",children:[Object(n.jsx)("h3",{className:"sort-by",children:"Sort by"}),Object(n.jsx)("hr",{})]}),Object(n.jsxs)("div",{className:"sort-by-button-container",children:[Object(n.jsx)("button",{onClick:function(){var e=t.map((function(e){return e})).sort((function(e,t){return e.artist>t.artist?1:-1}));s(e)},children:"Artist"}),Object(n.jsx)("button",{onClick:function(){var e=t.map((function(e){return e})).sort((function(e,t){return e.name>t.name?1:-1}));s(e)},children:"Title"})]}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(g,{song:e,songs:t,setCurrentSong:a,id:e.id,audioRef:r,isPlaying:i,setIsPlaying:o,setSongs:s,isDarkModeActive:u,currentSong:c},e.id)}))})]})},x=function(e){var t=e.isLibraryActive,c=e.setIsLibraryActive,a=e.isDarkModeActive,r=e.setIsDarkModeActive;return Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{className:"nav-icon ".concat(a?"nav-icon-dark":""," ").concat(t?"active-nav-icon":""),children:[Object(n.jsx)("h1",{children:"Bolt"}),Object(n.jsx)(p.a,{icon:h.c})]}),Object(n.jsxs)("div",{className:"nav-buttons",children:[Object(n.jsxs)("button",{className:"".concat(a?"dark-button":"light-button"),onClick:function(){return c(!t)},children:["Library",Object(n.jsx)(p.a,{icon:t?h.d:h.e})]}),Object(n.jsxs)("button",{className:"".concat(a?"dark-button":"light-button"),onClick:function(){return r(!a)},children:["Dark mode",Object(n.jsx)(p.a,{icon:a?h.f:h.i})]})]})]})},k=c(28);var y=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(k.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(k.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(k.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(k.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(k.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(k.a)(),active:!1},{name:"Mirage",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, j'san",id:Object(k.a)(),active:!1,color:["#554f80","#E0938E"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10136"},{name:"Faces",cover:"https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",artist:"Knowmadic",id:Object(k.a)(),active:!1,color:["#C5F6D4","#F7FDCF"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8554"}]};var S=function(){var e=Object(a.useState)(y()),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(c[0]),o=Object(b.a)(i,2),s=o[0],p=o[1],h=Object(a.useState)(!1),v=Object(b.a)(h,2),g=v[0],k=v[1],S=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),N=Object(b.a)(S,2),A=N[0],C=N[1],w=Object(a.useState)(!1),M=Object(b.a)(w,2),D=M[0],P=M[1],I=Object(a.useState)(!0),F=Object(b.a)(I,2),L=F[0],T=F[1],E=Object(a.useRef)(null);Object(a.useEffect)((function(){P(!0)}),[]);var R=function(e){var t=e.target.currentTime,c=e.target.duration,n=Math.round(t),a=Math.round(c),r=Math.round(n/a*100);C(Object(d.a)(Object(d.a)({},A),{},{currentTime:t,duration:c,animationPercentage:r}))},B=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.findIndex((function(e){return e.id===s.id})),e.next=3,p(c[(t+1)%c.length]);case 3:g&&E.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(D?"library-active":""," "),children:[Object(n.jsx)("img",{src:j,alt:"background",className:"background-image ".concat(L?"":"invert")}),Object(n.jsx)(x,{isLibraryActive:D,setIsLibraryActive:P,isDarkModeActive:L,setIsDarkModeActive:T}),Object(n.jsx)(m,{currentSong:s,isPlaying:g,isDarkModeActive:L}),Object(n.jsx)(f,{isPlaying:g,isDarkModeActive:L,setIsPlaying:k,currentSong:s,audioRef:E,songInfo:A,setSongInfo:C,songs:c,setCurrentSong:p,setSongs:r}),Object(n.jsx)(O,{audioRef:E,isPlaying:g,setIsPlaying:k,songs:c,currentSong:s,setCurrentSong:p,setSongs:r,isLibraryActive:D,isDarkModeActive:L}),Object(n.jsx)("audio",{onTimeUpdate:R,onLoadedMetadata:R,ref:E,src:s.audio,onEnded:B})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),N()}},[[26,1,2]]]);
//# sourceMappingURL=main.3adca029.chunk.js.map