"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[945,796],{901:function(e,a,t){t.r(a),t.d(a,{default:function(){return I}});var l=t(5458),n=t(2193),s=t.n(n),r=t(5808),i=t.n(r),d="WOOItemDetailTemplate-module--tableRow--d28f2",c=t(255),h=t(7640),o=t(6870),u=t(2389),m=t(4810),b=t(6784),j=t(6188),x=t(5942),v=t(9878);const g=e=>{if(!e)return;const a=e.lastIndexOf("/");return e.substring(a+1)};var p=t(3306),f=t(4791),A=t(4848);const N=e=>{var a,t,n,r,N,I,$,O,y,k;let{wooItemId:D}=e;const{t:C,i18n:w}=(0,u.Bd)(),T=new x.QueryClient,B=(0,v.N)(T).getOne(D),H=(0,v.N)(T).getAttachments(D),_=e=>{const a=H.data.results.filter((a=>{var t,l;return e?(null==a||null===(t=a.labels)||void 0===t?void 0:t.length)>0:!(null!=a&&a.labels)||0===(null==a||null===(l=a.labels)||void 0===l?void 0:l.length)}));let t=[],n=[],s=[];a.map((e=>{e.labels.length>1?(t.push(e),s.push.apply(s,(0,l.A)(e.labels))):(n.push(e),s.push(e.labels[0]))}));const r=[];t.map((e=>{e.labels.map(((a,t)=>{r.push({...e,labels:[e.labels[t]]})}))}));const i=[].concat(r,n),d=(0,l.A)(new Set(s)).map((e=>{const a=i.filter((a=>a.labels.includes(e)));return{attachments:(0,l.A)(a),label:e}}));return e?d:i},S=e=>{switch(i()(e)){case"Informatieverzoek":return C("Information request");case"Convenant":return C("Convenant");case"Besluit":return C("Decision");case"Inventarisatielijst":return C("Inventory list");default:return C(i()(e))}},U=e=>{const a=e.replace(/_/g," "),t=i()(a);switch(t){case"Bevindingen":return C("Findings");case"Conclusies":return C("Conclusions");case"Functiebenaming":return C("Job title");case"Gedraging":return C("Behavior");case"Onderdeel taak":return C("Part of task");case"Oordeel":return C("Judgement");case"Opdrachtgever":return C("Client");case"Organisatieonderdeel":return C("Organizational unit");default:return C(t)}};return(0,A.jsx)(h.YW,{children:(0,A.jsxs)(h.TK,{className:"WOOItemDetailTemplate-module--container--ccf27",children:[(0,A.jsx)("div",{role:"navigation",children:(0,A.jsxs)(h.N_,{className:"WOOItemDetailTemplate-module--backLink--e33aa",href:"/",onClick:e=>{e.preventDefault(),(0,m.oo)("/")},tabIndex:0,"aria-label":C("Back to homepage"),children:[(0,A.jsx)(b.g,{icon:j.CeG})," ",(0,A.jsx)("span",{children:C("Back to homepage")})]})}),B.isSuccess&&B.data&&(0,A.jsxs)("div",{className:"WOOItemDetailTemplate-module--content--29ced",role:"region","aria-label":C("Details"),children:[(0,A.jsx)(h._,{id:"mainContent",tabIndex:0,"aria-label":`${C("Title of woo request")}, ${""!==B.data.title?B.data.title:C("No title available")}`,children:""!==B.data.title?(0,f.n)((0,f.n)(B.data.title)):C("No title available")}),(0,A.jsx)(p.ax,{ariaLabels:{scrollLeftButton:C("Scroll table to the left"),scrollRightButton:C("Scroll table to the right")},children:(0,A.jsx)(h.XI,{className:"WOOItemDetailTemplate-module--table--d7844",children:(0,A.jsxs)(h.BF,{className:"WOOItemDetailTemplate-module--tableBody--9d96b",children:[B.data.id&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Feature")}, ${null!==(a=B.data.reference)&&void 0!==a?a:B.data.id}`,children:[(0,A.jsx)(h.nA,{children:C("Feature")}),(0,A.jsx)(h.nA,{children:null!==(t=B.data.reference)&&void 0!==t?t:B.data.id})]}),B.data.category&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Category")}, ${null!==(n=B.data.category)&&void 0!==n?n:"-"}`,children:[(0,A.jsx)(h.nA,{children:C("Category")}),(0,A.jsx)(h.nA,{children:null!==(r=B.data.category)&&void 0!==r?r:"-"})]}),B.data.summary&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Summary")}, ${B.data.summary}`,children:[(0,A.jsx)(h.nA,{children:C("Summary")}),(0,A.jsx)(h.nA,{children:(0,f.n)((0,f.n)(B.data.summary))})]}),B.data.description&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Description")}, ${B.data.description}`,children:[(0,A.jsx)(h.nA,{children:C("Description")}),(0,A.jsx)(h.nA,{children:(0,f.n)((0,f.n)(B.data.description))})]}),(null===(N=B.data.metadata)||void 0===N||null===(I=N.verzoek)||void 0===I?void 0:I.termijnoverschrijding)&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Exceeding the term")}, ${null===($=B.data.metadata)||void 0===$||null===(O=$.verzoek)||void 0===O?void 0:O.termijnoverschrijding}`,children:[(0,A.jsx)(h.nA,{children:C("Exceeding the term")}),(0,A.jsx)(h.nA,{children:null===(y=B.data.metadata)||void 0===y||null===(k=y.verzoek)||void 0===k?void 0:k.termijnoverschrijding})]}),B.data.published&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${C("Publication date")}, ${B.data.published?(0,o.L)(w.language,B.data.published):"-"}`,children:[(0,A.jsx)(h.nA,{children:C("Publication date")}),(0,A.jsx)(h.nA,{children:B.data.published?(0,o.L)(w.language,B.data.published):"-"})]}),B.data.data&&Object.entries(B.data.data).map((e=>{let[a,t]=e;if(t){let e;if("string"==typeof t){var l;e=function(e){const a=new Date(e);return!isNaN(a.getTime())}(t)?null!==(l=(0,o.L)(w.language,t))&&void 0!==l?l:"-":t}else e=String(t);return(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":`${U(a)}, ${e}`,children:[(0,A.jsx)(h.nA,{children:U(a)}),(0,A.jsx)(h.nA,{children:e})]},a)}})),!s()(B.data.themes)&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-labelledby":"themesName themesData",children:[(0,A.jsx)(h.nA,{id:"themesName",children:C("Themes")}),(0,A.jsx)(h.nA,{id:"themesData",children:B.data.themes.map(((e,a)=>{var t;return(0,A.jsx)("span",{children:e.title?e.title+(a!==(null===(t=B.data.themes)||void 0===t?void 0:t.length)-1?", ":""):e},a)}))})]}),H.isSuccess&&_(!0).length>0&&_(!0).map(((e,a)=>{var t,l;return(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-label":1===e.attachments.length?`${S(e.label)}, ${null!==(t=e.attachments[0].title)&&void 0!==t?t:g(e.attachments[0].accessUrl)}`:`${S(e.label)}, ${C("There are")} ${e.attachments.length} ${C("Attachments")} ${C("With the label")} ${S(e.label)}, ${C("These are")} ${e.attachments.map((e=>{var a;return null!==(a=e.title)&&void 0!==a?a:g(e.accessUrl)})).join(", ")}`,children:[(0,A.jsx)(h.nA,{children:S(e.label)}),e.attachments.length>1&&(0,A.jsx)(h.nA,{children:(0,A.jsx)(h.Xy,{id:"labelAttachmentsData",children:e.attachments.map(((e,a)=>{var t;return(0,A.jsx)(h.Er,{children:(0,A.jsx)(h.N_,{href:e.accessUrl,target:"blank",children:`${null!==(t=e.title)&&void 0!==t?t:g(e.accessUrl)}`})},a)}))})}),1===e.attachments.length&&(0,A.jsx)(h.nA,{children:(0,A.jsx)(h.N_,{href:e.attachments[0].accessUrl,target:"blank",children:`${null!==(l=e.attachments[0].title)&&void 0!==l?l:g(e.attachments[0].accessUrl)}`})})]},a)})),H.isSuccess&&!s()(_(!1))&&(0,A.jsxs)(h.Hj,{className:d,tabIndex:0,"aria-labelledby":"attachmentsName attachmentsData",children:[(0,A.jsx)(h.nA,{id:"attachmentsName",children:C("Attachments")}),(0,A.jsx)(h.nA,{children:(0,A.jsx)(h.Xy,{id:"attachmentsData",children:_(!1).sort(((e,a)=>e.title.localeCompare(a.title,w.language,{numeric:!0}))).map(((e,a)=>{var t,l;return e.title&&(0,A.jsx)(h.Er,{children:(0,A.jsx)(h.N_,{href:0!==(null===(t=e.accessUrl)||void 0===t?void 0:t.length)?e.accessUrl:"#",target:0!==(null===(l=e.accessUrl)||void 0===l?void 0:l.length)?"blank":"",children:e.title})},a)}))})})]})]})})})]}),B.isLoading&&(0,A.jsx)(c.A,{height:"200px"})]})})};var I=e=>(0,A.jsx)(N,{wooItemId:e.params.id})},3811:function(e,a,t){t.r(a);var l=t(901);a.default=l.default}}]);
//# sourceMappingURL=component---src-pages-[id]-index-tsx-bd62f542f5ae62ed6f56.js.map