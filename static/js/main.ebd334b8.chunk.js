(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),s=n.n(r),i=(n(24),n(3)),o=n(9),u=n(8),j=n.n(u);var l=function(e,t){var n=Object(c.useState)(!1),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(!1),l=Object(i.a)(u,2),b=l[0],d=l[1],O=Object(c.useState)([]),f=Object(i.a)(O,2),h=f[0],g=f[1],v=Object(c.useState)(!1),m=Object(i.a)(v,2),p=m[0],x=m[1];return Object(c.useEffect)((function(){g([])}),[t]),Object(c.useEffect)((function(){var n;if(t)return s(!0),d(!1),j()({method:"GET",url:"https://openlibrary.org/search.json",params:{q:t,page:e},cancelToken:new j.a.CancelToken((function(e){return n=e}))}).then((function(e){g((function(t){return Object(o.a)(new Set([].concat(Object(o.a)(t),Object(o.a)(e.data.docs.map((function(e){return e.title}))))))})),s(!1),x(e.data.docs.length>0)})).catch((function(e){j.a.isCancel(e)||d(!0)})),function(){return n()};s(!1)}),[e,t]),{documents:h,hasMoreDocs:p,error:b,isLoading:r}},b=n.p+"static/media/logo.6ce24c58.svg",d=(n(43),n(1));var O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),s=Object(i.a)(r,2),o=s[0],u=s[1],j=l(o,n),O=j.hasMoreDocs,f=j.isLoading,h=j.error,g=j.documents,v=Object(c.useRef)(),m=Object(c.useCallback)((function(e){f||(v.current&&v.current.disconnect(),v.current=new IntersectionObserver((function(e){e[0].isIntersecting&&O&&u((function(e){return e+1}))})),e&&v.current.observe(e))}),[f,O]);return Object(d.jsxs)("div",{className:"center",children:[Object(d.jsx)("h2",{className:"heading",children:" Keep Searching... "}),Object(d.jsx)("input",{className:"search-box",type:"search",value:n,onChange:function(e){a(e.target.value),u(1)}}),Object(d.jsx)("div",{className:g.length>0?"list-view":"list-view-none",children:g.map((function(e,t){return g.length===t+1?Object(d.jsxs)("div",{ref:m,children:[" ",e," "]},e):Object(d.jsxs)("div",{className:"document",children:[" ",e," "]},e)}))}),Object(d.jsx)("div",{children:f&&Object(d.jsx)("img",{src:b,className:"App-logo",alt:"Loading..."})}),Object(d.jsx)("div",{children:h&&"Something went wrong... Please try again!"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.ebd334b8.chunk.js.map