(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[6],{152:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(172),i=Object(a.a)((function(e){return e.articles.sections.list}),(function(e){return null===e||void 0===e?void 0:e.slice(0,7)})),c=Object(a.a)((function(e){return e.articles.most_popular}),(function(e){var t;return null===e||void 0===e||null===(t=e.list)||void 0===t?void 0:t.filter((function(e){return e.media.length}))}))},153:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(0),i=n(182),c=n(10),r=function(){return new URLSearchParams(Object(c.g)().search)};function s(e){var t=Object(a.useRef)(null);return Object(i.isEqual)(t.current,e)||(t.current=e),t.current}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(292),i=n(57),c=n(293),r=n(286),s=n(141),o=n(30),l=n(33),j=n(287),d=n(291),b=n(169),u=n.n(b),h=n(152),m=n(4),O=Object(s.a)({nav:{margin:"2rem -1rem 0",padding:".5rem 0"},link:{fontSize:".8rem",letterSpacing:".05rem",textDecoration:"none",textTransform:"uppercase",padding:"0.5rem 1rem",color:"inherit"},loader:{display:"inline-block !important",width:120}});function x(){var e=O(),t=Object(l.c)(h.b);return Object(m.jsx)("nav",{className:e.nav,children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.b,{className:e.link,to:o.a.home,children:"Home"}),Object(m.jsx)(i.b,{className:e.link,to:o.a.articles("all"),children:"All"}),t.map((function(t){return Object(m.jsx)(i.b,{className:e.link,to:o.a.articles(t.section),children:t.display_name},t.section)})),Object(m.jsx)(d.a,{component:i.b,to:o.a.categories,children:Object(m.jsx)(u.a,{})})]}):Object(m.jsxs)(r.a,{container:!0,spacing:3,children:[Object(m.jsx)(r.a,{item:!0,xs:2,children:Object(m.jsx)(j.a,{height:"20"})}),Object(m.jsx)(r.a,{item:!0,xs:2,children:Object(m.jsx)(j.a,{height:"20"})}),Object(m.jsx)(r.a,{item:!0,xs:2,children:Object(m.jsx)(j.a,{height:"20"})})]})})}var p=n(171),f=n(280),v=n(10),g=Object(s.a)({search:{padding:"5px 20px",borderRadius:"30px",border:"none",borderBottom:"1px solid #ccc"}}),N=function(){var e=g(),t=Object(v.f)(),n=Object(p.a)({initialValues:{search:""},onSubmit:function(e){var n=e.search;t.push("/search".concat(n?"?query=".concat(n):""))}}),a=n.handleSubmit,i=n.handleChange;return Object(m.jsx)("form",{onSubmit:a,children:Object(m.jsx)(f.a,{name:"search",variant:"standard",inputProps:{className:e.search},placeholder:"Search...",onChange:i})})},y=Object(s.a)({root:{padding:"30px 0"},logo:{fontSize:"2rem",textDecoration:"none",color:"inherit"}});function w(){var e=y();return Object(m.jsxs)("header",{className:e.root,children:[Object(m.jsxs)(a.a,{children:[Object(m.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(m.jsx)(r.a,{item:!0,children:Object(m.jsx)(i.b,{to:o.a.home,className:e.logo,children:"NewsPaper"})}),Object(m.jsx)(r.a,{item:!0,children:Object(m.jsx)(N,{})})]}),Object(m.jsx)(x,{})]}),Object(m.jsx)(c.a,{})]})}var B=n(294),k=n(290);function S(){return Object(m.jsx)(B.a,{py:4,mt:4,backgroundColor:"#f8f9fa",component:"footer",children:Object(m.jsx)(a.a,{children:Object(m.jsx)(k.a,{align:"center",variant:"body2",children:"Copyright \xa92021 All rights reserved"})})})}function C(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsx)("main",{children:Object(m.jsx)(a.a,{children:t})}),Object(m.jsx)(S,{})]})}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(57),i=n(288),c=n(286),r=n(290),s=n(162),o=n.n(s),l=n(141),j=n(30),d=n(4),b=Object(l.a)({articleItem:{"& + $articleItem":{marginTop:30},"& $sectionLink":{marginLeft:10}},imageWrap:{position:"relative",width:190,height:"100%",overflow:"hidden","& img":{position:"absolute",top:0,left:0}},sectionLink:{marginLeft:10}});function u(e){var t=e.title,n=e.description,s=e.image,l=e.published_date,u=e.section,h=b();return Object(d.jsx)("div",{className:h.articleItem,children:Object(d.jsxs)(c.a,{container:!0,spacing:2,children:[Object(d.jsxs)(c.a,{item:!0,xs:8,md:!0,children:[Object(d.jsx)(r.a,{variant:"h6",gutterBottom:!0,children:t}),Object(d.jsx)(r.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:n}),Object(d.jsxs)(r.a,{variant:"body2",color:"text.secondary",children:[Object(d.jsx)("small",{children:Object(d.jsx)(o.a,{format:"MMMM D, Y",children:l})}),u&&Object(d.jsx)(i.a,{clickable:!0,color:"secondary",size:"small",variant:"outlined",label:u,className:h.sectionLink,component:a.b,to:j.a.articles(u.toLowerCase())})]})]}),Object(d.jsx)(c.a,{item:!0,xs:4,md:"auto",children:Object(d.jsx)("div",{className:h.imageWrap,children:Object(d.jsx)("img",{src:s,alt:t})})})]})})}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(290),i=n(141),c=n(4),r=Object(i.a)({headerWrap:{marginBottom:30},pageHeader:{textDecoration:"underline",textTransform:"capitalize"}});function s(e){var t=e.title,n=r();return Object(c.jsx)("div",{className:n.headerWrap,children:Object(c.jsx)(a.a,{className:n.pageHeader,variant:"h5",component:"h2",children:t})})}},166:function(e,t,n){"use strict";var a=n(58),i=n(0),c=n(10),r=n(282),s=n(276),o=n(153),l=n(141),j=n(4),d=Object(l.a)({paginationWrap:{display:"flex",justifyContent:"center",marginTop:20}}),b=function(e){var t=e.count,n=void 0===t?0:t,l=e.pathname,b=d(),u=Object(o.b)(),h=Object(c.f)(),m=Object(i.useState)(1),O=Object(a.a)(m,2),x=O[0],p=O[1];return Object(i.useEffect)((function(){var e=u.get("page");e&&p(+e)}),[u]),n>0&&Object(j.jsx)("div",{className:b.paginationWrap,children:Object(j.jsx)(s.a,{spacing:2,children:Object(j.jsx)(r.a,{count:n,page:x,shape:"rounded",hideNextButton:!0,hidePrevButton:!0,onChange:function(e,t){u.set("page",t),h.push({pathname:l,search:u.toString()}),p(t)}})})})};t.a=Object(i.memo)(b)},184:function(e,t,n){"use strict";var a=n(58),i=n(0),c=n(141),r=n(33),s=n(23),o=n(164),l=n(294),j=n(286),d=n(276),b=n(287),u=n(4);function h(){return Object(u.jsx)(l.a,{mb:2,children:Object(u.jsxs)(j.a,{container:!0,spacing:3,children:[Object(u.jsx)(j.a,{item:!0,xs:8,md:!0,children:Object(u.jsxs)(d.a,{spacing:1,children:[Object(u.jsx)(b.a,{variant:"text"}),Object(u.jsx)(b.a,{variant:"text",height:20}),Object(u.jsx)(b.a,{variant:"text",width:200})]})}),Object(u.jsx)(j.a,{item:!0,xs:4,md:"auto",children:Object(u.jsx)(b.a,{variant:"rectangular",width:190,height:107})})]})})}var m=function(e){var t=e.list,n=e.fetching;return t&&!n?t.map((function(e,t){var n,a;return Object(u.jsx)(o.a,{title:e.title,section:e.section,description:e.abstract,published_date:e.published_date,image:null===(n=e.multimedia)||void 0===n||null===(a=n[3])||void 0===a?void 0:a.url},t)})):[1,2,3].map((function(e){return Object(u.jsx)(h,{},e)}))},O=Object(i.memo)(m),x=n(165),p=n(153),f=n(30),v=n(166),g=Object(c.a)({wrap:{padding:"30px 0"}}),N=function(e){var t=e.type,n=e.pagination,c=void 0===n||n,o=Object(p.b)(),l=g(),j=Object(r.b)(),d=Object(i.useState)(0),b=Object(a.a)(d,2),h=b[0],m=b[1],N=Object(p.a)({offset:o.get("page"),limit:c?20:5}),y=Object(r.c)((function(e){var n=e.articles;return{fetching:e.common.fetching,articles:n.articles[t]}})),w=y.articles,B=y.fetching;return Object(i.useEffect)((function(){return m(Math.round((null===w||void 0===w?void 0:w.count)/20))}),[null===w||void 0===w?void 0:w.count]),Object(i.useEffect)((function(){return j(Object(s.b)({type:t,config:{params:N}})),function(){j(Object(s.a)())}}),[j,t,N]),Object(u.jsxs)("div",{className:l.wrap,children:[Object(u.jsx)(x.a,{title:t}),Object(u.jsx)(O,{fetching:B,list:null===w||void 0===w?void 0:w.list}),c&&Object(u.jsx)(v.a,{count:h,queryPage:N.offset,pathname:f.a.articles(t)})]})};t.a=Object(i.memo)(N)},241:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var a=n(286),i=n(155),c=n(145),r=n(0),s=n(281),o=n(275),l=n(183),j=n(204),d=n(205),b=n(33),u=n(276),h=n(291),m=n(287),O=n(243),x=n.n(O),p=n(244),f=n.n(p),v=(n(240),n(23)),g=n(152),N=(n(241),n(141)),y=Object(N.a)({image:{width:"100%",height:"auto"},slideContent:{padding:40,height:"100%",backgroundColor:"#f3f3f3"},imageWrap:{display:"flex"},caption:{fontSize:14,color:"#808080"},buttonWrap:{position:"absolute",top:0,left:"50%",width:"90vw",height:"100%",transform:"translateX(-50%)","& $sliderButton":{position:"absolute",top:"50%",transform:"translateY(-50%)"},"& $sliderButtonPrev":{left:-30},"& $sliderButtonNext":{right:-30}},sliderButton:{},sliderButtonPrev:{},sliderButtonNext:{},homeSliderContainer:{position:"relative"}}),w=n(162),B=n.n(w),k=n(294),S=n(290),C=n(4),W=function(e){var t,n,i,c,r,s,o=e.media,l=e.section,j=e.title,d=e.abstract,b=e.byline,u=e.url,h=e.published_date,m=y();return Object(C.jsxs)(a.a,{container:!0,children:[Object(C.jsx)(a.a,{item:!0,xs:6,children:Object(C.jsx)("div",{className:m.imageWrap,children:Object(C.jsx)("img",{className:m.image,src:null===(t=o["media-metadata"])||void 0===t||null===(n=t[2])||void 0===n?void 0:n.url,height:null===(i=o["media-metadata"])||void 0===i||null===(c=i[2])||void 0===c?void 0:c.height,width:null===(r=o["media-metadata"])||void 0===r||null===(s=r[2])||void 0===s?void 0:s.width,alt:o.caption})})}),Object(C.jsx)(a.a,{item:!0,xs:6,children:Object(C.jsxs)("div",{className:m.slideContent,children:[Object(C.jsx)(S.a,{gutterBottom:!0,component:"span",className:m.caption,children:l}),Object(C.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:j}),Object(C.jsxs)(S.a,{gutterBottom:!0,variant:"body2",children:[d," ",Object(C.jsx)("a",{href:u,rel:"noreferrer",target:"_blank",children:"read more"})]}),Object(C.jsxs)(k.a,{mt:2,children:[Object(C.jsx)(S.a,{variant:"body1",children:b}),Object(C.jsx)(S.a,{variant:"body2",component:B.a,format:"MMM D",children:h})]})]})})]})},E=Object(r.memo)(W);function P(){var e=y(),t=Object(r.useRef)(null),n=Object(r.useRef)(null),i=Object(b.b)(),l=Object(b.c)(g.a);return Object(r.useEffect)((function(){return i(Object(v.g)()),function(){i(Object(v.f)())}}),[i]),Object(C.jsxs)("div",{className:e.homeSliderContainer,children:[l?Object(C.jsx)(s.a,{loop:!0,spaceBetween:0,slidesPerView:1,navigation:{prevEl:t.current,nextEl:n.current},onBeforeInit:function(e){e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=n.current},pagination:{clickable:!0},children:l.map((function(e){return Object(C.jsx)(o.a,{children:Object(C.jsx)(E,{media:e.media[0],section:e.section,title:e.title,abstract:e.abstract,byline:e.byline,url:e.url,published_date:e.published_date},e.id)},e.id)}))}):Object(C.jsxs)(a.a,{container:!0,spacing:2,children:[Object(C.jsx)(a.a,{xs:6,item:!0,children:Object(C.jsx)(m.a,{variant:"rectangular",height:360})}),Object(C.jsx)(a.a,{xs:6,item:!0,children:Object(C.jsxs)(u.a,{spacing:2,children:[Object(C.jsx)(m.a,{variant:"text"}),Object(C.jsx)(m.a,{variant:"text"}),Object(C.jsx)(m.a,{variant:"rectangular",height:70})]})})]}),Object(C.jsxs)("div",{className:e.buttonWrap,children:[Object(C.jsx)(h.a,{className:Object(c.a)(e.sliderButton,e.sliderButtonPrev),ref:t,children:Object(C.jsx)(x.a,{})}),Object(C.jsx)(h.a,{className:Object(c.a)(e.sliderButton,e.sliderButtonNext),ref:n,children:Object(C.jsx)(f.a,{})})]})]})}l.a.use([j.a,d.a]);var _=n(184);function M(){return Object(C.jsxs)(i.a,{children:[Object(C.jsx)(P,{}),Object(C.jsx)("div",{children:Object(C.jsxs)(a.a,{container:!0,spacing:4,children:[Object(C.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(C.jsx)(_.a,{pagination:!1,type:"books"})}),Object(C.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(C.jsx)(_.a,{pagination:!1,type:"science"})})]})})]})}}}]);
//# sourceMappingURL=6.49403f92.chunk.js.map