(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[5],{147:function(e,t,n){"use strict";var a=n(51),i=n(0),c=n(128),r=n(29),s=n(23),o=n(52),l=n(219),j=n(218),d=n(224),u=n(143),b=n.n(u),m=n(42),h=n(4),O=Object(c.a)({articleItem:{"& + $articleItem":{marginTop:20},"& $sectionLink":{marginLeft:10}},imageWrap:{position:"relative",width:190,overflow:"hidden","&::after":{content:"''",display:"block",paddingBottom:"56.25%"},"& img":{position:"absolute",top:0,left:0}},sectionLink:{marginLeft:10}});function p(e){var t=e.title,n=e.description,a=e.image,i=e.published_date,c=e.section,r=O();return Object(h.jsx)("div",{className:r.articleItem,children:Object(h.jsxs)(j.a,{container:!0,spacing:2,children:[Object(h.jsxs)(j.a,{item:!0,xs:8,md:!0,children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:t}),Object(h.jsx)(d.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:n}),Object(h.jsxs)(d.a,{variant:"body2",color:"text.secondary",children:[Object(h.jsx)("small",{children:Object(h.jsx)(b.a,{format:"MMMM D, Y",children:i})}),c&&Object(h.jsx)(l.a,{clickable:!0,color:"secondary",size:"small",variant:"outlined",label:c,className:r.sectionLink,component:o.b,to:m.a.articles(c.toLowerCase())})]})]}),Object(h.jsx)(j.a,{item:!0,xs:4,md:"auto",children:Object(h.jsx)("div",{className:r.imageWrap,children:Object(h.jsx)("img",{src:a,alt:t})})})]})})}var x=n(223),v=n(211),f=n(220);function g(){return Object(h.jsx)(x.a,{mb:2,children:Object(h.jsxs)(j.a,{container:!0,spacing:3,children:[Object(h.jsx)(j.a,{item:!0,xs:8,md:!0,children:Object(h.jsxs)(v.a,{spacing:1,children:[Object(h.jsx)(f.a,{variant:"text"}),Object(h.jsx)(f.a,{variant:"text",height:20}),Object(h.jsx)(f.a,{variant:"text",width:200})]})}),Object(h.jsx)(j.a,{item:!0,xs:4,md:"auto",children:Object(h.jsx)(f.a,{variant:"rectangular",width:190,height:107})})]})})}var N=function(e){var t=e.list,n=e.fetching;return t&&!n?t.map((function(e,t){var n,a;return Object(h.jsx)(p,{title:e.title,section:e.section,description:e.abstract,published_date:e.published_date,image:null===(n=e.multimedia)||void 0===n||null===(a=n[3])||void 0===a?void 0:a.url},t)})):[1,2,3].map((function(e){return Object(h.jsx)(g,{},e)}))},y=Object(i.memo)(N),w=Object(c.a)({headerWrap:{marginBottom:30},pageHeader:{textDecoration:"underline",textTransform:"capitalize"}});function B(e){var t=e.title,n=w();return Object(h.jsx)("div",{className:n.headerWrap,children:Object(h.jsx)(d.a,{className:n.pageHeader,variant:"h5",component:"h2",children:t})})}var k=n(142),S=n(9),C=function(){return new URLSearchParams(Object(S.g)().search)};var E=n(215),W=Object(c.a)({paginationWrap:{display:"flex",justifyContent:"center",marginTop:20}}),_=function(e){var t=e.count,n=void 0===t?0:t,c=e.pathname,r=W(),s=C(),o=Object(S.f)(),l=Object(i.useState)(1),j=Object(a.a)(l,2),d=j[0],u=j[1];return Object(i.useEffect)((function(){var e=s.get("page");e&&u(+e)}),[s]),n>0&&Object(h.jsx)("div",{className:r.paginationWrap,children:Object(h.jsx)(v.a,{spacing:2,children:Object(h.jsx)(E.a,{count:n,page:d,shape:"rounded",hideNextButton:!0,hidePrevButton:!0,onChange:function(e,t){s.set("page",t),o.push({pathname:c,search:s.toString()}),u(t)}})})})},M=Object(i.memo)(_),P=Object(c.a)({wrap:{padding:"30px 0"}}),L=function(e){var t=e.type,n=e.pagination,c=void 0===n||n,o=C(),l=P(),j=Object(r.b)(),d=Object(i.useState)(0),u=Object(a.a)(d,2),b=u[0],O=u[1],p=function(e){var t=Object(i.useRef)(null);return Object(k.isEqual)(t.current,e)||(t.current=e),t.current}({offset:o.get("page"),limit:c?20:10}),x=Object(r.c)((function(e){var n=e.articles;return{fetching:e.common.fetching,articles:n.articles[t]}})),v=x.articles,f=x.fetching;return Object(i.useEffect)((function(){return O(Math.round((null===v||void 0===v?void 0:v.count)/20))}),[null===v||void 0===v?void 0:v.count]),Object(i.useEffect)((function(){return j(Object(s.b)({type:t,config:{params:p}})),function(){return j(Object(s.a)())}}),[j,t,p]),Object(h.jsxs)("div",{className:l.wrap,children:[Object(h.jsx)(B,{title:t}),Object(h.jsx)(y,{fetching:f,list:null===v||void 0===v?void 0:v.list}),c&&Object(h.jsx)(M,{count:b,queryPage:p.offset,pathname:m.a.articles(t)})]})};t.a=Object(i.memo)(L)},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(222),i=n(52),c=n(226),r=n(218),s=n(128),o=n(42),l=n(51),j=n(29),d=n(0),u=n(142),b=n(4),m=Object(s.a)({nav:{margin:"2rem -1rem 0",padding:".5rem 0"},link:{fontSize:".8rem",letterSpacing:".05rem",textDecoration:"none",textTransform:"uppercase",padding:"0.5rem 1rem",color:"inherit"}});function h(){var e=m(),t=Object(d.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(j.c)((function(e){return e.articles.sections.list}));return Object(d.useEffect)((function(){var e,t=null===(e=Object(u.cloneDeep)(r))||void 0===e?void 0:e.slice(0,7);c(t)}),[r]),Object(b.jsxs)("nav",{className:e.nav,children:[Object(b.jsx)(i.b,{className:e.link,to:o.a.home,children:"Home"}),Object(b.jsx)(i.b,{className:e.link,to:o.a.articles("all"),children:"All"}),null===a||void 0===a?void 0:a.map((function(t){return Object(b.jsx)(i.b,{className:e.link,to:o.a.articles(t.section),children:t.display_name},t.section)}))]})}var O=Object(s.a)((function(e){return{root:{padding:"30px 0"},logo:{fontSize:"2rem",textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.main}}}}));function p(){var e=O();return Object(b.jsxs)("header",{className:e.root,children:[Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(b.jsx)(r.a,{item:!0,children:Object(b.jsx)(i.b,{to:o.a.home,className:e.logo,children:"NewsPaper"})}),Object(b.jsx)(r.a,{item:!0,children:"Some content"})]}),Object(b.jsx)(h,{})]}),Object(b.jsx)(c.a,{})]})}var x=n(223),v=n(224);function f(){return Object(b.jsx)(x.a,{py:4,mt:4,backgroundColor:"#f8f9fa",component:"footer",children:Object(b.jsx)(a.a,{children:Object(b.jsx)(v.a,{align:"center",variant:"body2",children:"Copyright \xa92021 All rights reserved"})})})}function g(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("main",{children:Object(b.jsx)(a.a,{children:t})}),Object(b.jsx)(f,{})]})}},188:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(218),i=n(148),c=n(132),r=n(0),s=n(214),o=n(209),l=n(149),j=n(157),d=n(158),u=n(29),b=n(143),m=n.n(b),h=n(223),O=n(225),p=n(224),x=n(191),v=n.n(x),f=n(192),g=n.n(f),N=(n(187),n(23)),y=(n(188),n(128)),w=Object(y.a)((function(e){return{image:{width:"100%",height:"auto"},slideContent:{padding:40,height:"100%",backgroundColor:e.palette.background.light},imageWrap:{display:"flex"},caption:{fontSize:14,color:"#808080"},buttonWrap:{position:"absolute",top:0,left:"50%",width:"90vw",height:"100%",transform:"translateX(-50%)","& $sliderButton":{position:"absolute",top:"50%",transform:"translateY(-50%)"},"& $sliderButtonPrev":{left:-30},"& $sliderButtonNext":{right:-30}},sliderButton:{},sliderButtonPrev:{},sliderButtonNext:{},homeSliderContainer:{position:"relative"}}})),B=n(4);function k(){var e=w(),t=Object(r.useRef)(null),n=Object(r.useRef)(null),i=Object(u.b)(),l=Object(u.c)((function(e){return{most_popular:e.articles.most_popular}})).most_popular;return Object(r.useEffect)((function(){return i(Object(N.g)()),function(){return i(Object(N.f)())}}),[i]),Object(B.jsxs)("div",{className:e.homeSliderContainer,children:[l.list&&Object(B.jsx)(s.a,{spaceBetween:0,slidesPerView:1,navigation:{prevEl:t.current,nextEl:n.current},onBeforeInit:function(e){e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=n.current},pagination:{clickable:!0},children:l.list.filter((function(e){return e.media.length})).map((function(t){var n,i,c,r,s,l,j,d,u,b;return Object(B.jsx)(o.a,{children:Object(B.jsxs)(a.a,{container:!0,children:[Object(B.jsx)(a.a,{item:!0,xs:6,children:Object(B.jsx)("div",{className:e.imageWrap,children:Object(B.jsx)("img",{className:e.image,src:null===(n=t.media[0])||void 0===n||null===(i=n["media-metadata"])||void 0===i||null===(c=i[2])||void 0===c?void 0:c.url,height:null===(r=t.media[0])||void 0===r||null===(s=r["media-metadata"])||void 0===s||null===(l=s[2])||void 0===l?void 0:l.height,width:null===(j=t.media[0])||void 0===j||null===(d=j["media-metadata"])||void 0===d||null===(u=d[2])||void 0===u?void 0:u.width,alt:null===t||void 0===t||null===(b=t.media[0])||void 0===b?void 0:b.caption})})}),Object(B.jsx)(a.a,{item:!0,xs:6,children:Object(B.jsxs)("div",{className:e.slideContent,children:[Object(B.jsx)(p.a,{gutterBottom:!0,component:"span",className:e.caption,children:t.section}),Object(B.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(B.jsxs)(p.a,{gutterBottom:!0,variant:"body2",children:[t.abstract," ",Object(B.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:"read more"})]}),Object(B.jsxs)(h.a,{mt:2,children:[Object(B.jsx)(p.a,{variant:"body1",children:t.byline}),Object(B.jsx)(p.a,{variant:"body2",component:m.a,format:"MMM D",children:t.published_date})]})]})})]})},t.id)}))}),Object(B.jsxs)("div",{className:e.buttonWrap,children:[Object(B.jsx)(O.a,{className:Object(c.a)(e.sliderButton,e.sliderButtonPrev),ref:t,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(O.a,{className:Object(c.a)(e.sliderButton,e.sliderButtonNext),ref:n,children:Object(B.jsx)(g.a,{})})]})]})}l.a.use([j.a,d.a]);var S=n(147);function C(){return Object(B.jsxs)(i.a,{children:[Object(B.jsx)(k,{}),Object(B.jsx)("div",{children:Object(B.jsxs)(a.a,{container:!0,spacing:4,children:[Object(B.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(S.a,{pagination:!1,type:"books"})}),Object(B.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(S.a,{pagination:!1,type:"science"})})]})})]})}}}]);
//# sourceMappingURL=5.362484be.chunk.js.map