"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-59a8e3"],{53924:(e,t,r)=>{r.d(t,{D:()=>b,C:()=>Z});var n=r(48055),i=r(79804),o=r(22326),a=r(42483),l=r(73290),s=r(97011);function c(e){return e.path?.startsWith("/apps/")??!1}var d=r(41436);function u({renderTooltip:e,author:t,children:r}){return!1===e?(0,n.jsx)(n.Fragment,{children:r}):(0,n.jsx)(d.u,{text:`commits by ${t.login}`,direction:"se",children:r})}try{u.displayName||(u.displayName="AuthorTooltip")}catch{}var h=r(9996),f=r.n(h),p=r(58081);let x={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!1,avatarSize:void 0},m=(0,p.createContext)(x);function g({authorSettings:e,children:t}){let r=f()(x,e??{});return(0,n.jsx)(m.Provider,{value:r,children:t})}function y(){return(0,p.useContext)(m)||x}try{m.displayName||(m.displayName="AuthorSettingsContext")}catch{}try{g.displayName||(g.displayName="AuthorSettingsProvider")}catch{}function b({author:e,repo:t,sx:r={}}){let d=y();if(!e)return null;let h=(0,n.jsx)(i.O,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:d.avatarSize,square:c(e)});return(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...r},"data-testid":"author-avatar",children:[e.path?(0,n.jsx)(l.Z,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,o.zP)({owner:e.login}):void 0,children:h}):h,e.login?(0,n.jsx)(u,{author:e,renderTooltip:d.includeTooltip,children:(0,n.jsx)(l.Z,{muted:!0,href:(0,o.OI)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,o.zP)({owner:e.login}),sx:{fontWeight:d.fontWeight,whiteSpace:"nowrap",color:d.fontColor,"&:hover":{color:d.fontColor,textDecoration:"underline"}},children:e.login})}):(0,n.jsx)(s.Z,{sx:{fontWeight:d.fontWeight,whiteSpace:"nowrap",color:d.fontColor},children:e.displayName})]})}try{b.displayName||(b.displayName="AuthorAvatar")}catch{}var v=r(14786),j=r(79902),C=r(59148);function w({authors:e,repo:t}){let r=e.length,[i,o]=(0,p.useState)(!1),a=(0,p.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{as:"button","aria-label":`Show ${r} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{o(!0)},sx:{mx:1},ref:a,muted:!0,children:[r," ","people"]}),i&&(0,n.jsx)(C.V,{title:`${r} authors`,onClose:()=>{o(!1),setTimeout(()=>a.current?.focus(),25)},width:"medium",height:r>=12?"small":"auto",renderBody:()=>(0,n.jsx)(v.S,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,r)=>(0,n.jsx)(N,{author:e,repo:t},`${e.login}_${r}`))})})]})}function N({author:e,repo:t}){return(0,n.jsxs)(v.S.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,o.OI)({repo:t,author:e.login??""}),children:[(0,n.jsx)(i.O,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:c(e)}),(0,n.jsx)(j.Z,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{w.displayName||(w.displayName="AuthorsDialog")}catch{}try{N.displayName||(N.displayName="AuthorRow")}catch{}var S=r(90836);function k({authors:e}){let t=y();return(0,n.jsx)(S.Z,{children:e.slice(0,5).map((e,r)=>(0,n.jsx)(i.O,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,o.zP)({owner:e.login??""}),square:c(e),size:t.avatarSize},`${e.login}_${r}`))})}try{k.displayName||(k.displayName="CommitAuthorStack")}catch{}function E({author:e,repo:t,sx:r={}}){let i=y();return e?(0,n.jsx)(a.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...r},"data-testid":"author-link",children:e.login?(0,n.jsx)(u,{author:e,renderTooltip:i.includeTooltip,children:(0,n.jsx)(l.Z,{muted:!0,href:(0,o.OI)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,o.zP)({owner:e.login}),sx:{fontWeight:i.fontWeight,whiteSpace:"nowrap",color:i.fontColor,"&:hover":{color:i.fontColor,textDecoration:"underline"}},children:e.login})}):(0,n.jsx)(s.Z,{sx:{fontWeight:i.fontWeight,whiteSpace:"nowrap",color:i.fontColor},children:e.displayName})}):null}try{E.displayName||(E.displayName="AuthorLink")}catch{}function I({author:e,repo:t}){return(0,n.jsx)(b,{author:e,repo:t})}function D({author:e,committer:t,repo:r}){let i=[e];return t&&i.push(t),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{authors:i}),(0,n.jsx)(E,{author:e,repo:r,sx:{pl:1}})]})}function T({authors:e,repo:t}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{authors:e}),e.map((r,i)=>(0,n.jsxs)(p.Fragment,{children:[(0,n.jsx)(E,{author:r,repo:t,sx:{pl:1}}),i!==e.length-1&&(0,n.jsx)("span",{className:"pl-1",children:"and"})]},`${r.login}_${i}`))]})}function L({authors:e,repo:t}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{authors:e}),(0,n.jsx)(w,{authors:e,repo:t})]})}function Z({authors:e,committer:t,committerAttribution:r,repo:i,children:o,includeVerbs:l=!0,authorSettings:s}){let c=1===e.length&&!r,d=1===e.length&&r,u=2===e.length&&!r,h=l?"pl-1":"";return(0,n.jsx)(a.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},children:(0,n.jsxs)(g,{authorSettings:s,children:[c&&(0,n.jsx)(I,{author:e[0],repo:i}),d&&(0,n.jsx)(D,{author:e[0],committer:t,repo:i}),u&&(0,n.jsx)(T,{authors:e,repo:i}),!c&&!d&&!u&&(0,n.jsx)(L,{authors:e,repo:i}),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pl-1",children:l?"authored and":"and"}),(0,n.jsx)(E,{author:t,repo:i,sx:{pl:1}}),(0,n.jsx)("span",{className:h,children:l&&"committed"})]}):(0,n.jsx)("span",{className:h,children:l&&"committed"}),o]})})}try{I.displayName||(I.displayName="SingleAuthor")}catch{}try{D.displayName||(D.displayName="AuthorAndCommitter")}catch{}try{T.displayName||(T.displayName="TwoAuthors")}catch{}try{L.displayName||(L.displayName="MultipleAuthors")}catch{}try{Z.displayName||(Z.displayName="CommitAttribution")}catch{}},20756:(e,t,r)=>{r.d(t,{AF:()=>b,vC:()=>C,fQ:()=>S});var n=r(48055),i=r(85529),o=r(98833),a=r(97011),l=r(88216),s=r(65379),c=r(50919),d=r(58081),u=r(42483),h=r(74121),f=r(59148),p=r(79804),x=r(73290);function m({checkRun:e}){let{icon:t,iconColor:r}=function(e){switch(e){case"check":return{icon:i.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:i.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:i.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:i.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:i.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:i.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:i.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:i.AlertIcon,iconColor:"danger.fg"};default:return{icon:i.XIcon,iconColor:"danger.fg"}}}(e.icon),l="in_progress"===e.state;return(0,n.jsxs)(u.Z,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,n.jsxs)(u.Z,{sx:{alignSelf:"center",display:"flex"},children:[l?(0,n.jsx)(u.Z,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,n.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,n.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,n.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,n.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,n.jsx)(o.Z,{icon:t,sx:{color:r,margin:"0px 7px",alignSelf:"center"}}),(0,n.jsx)(s.Z,{"aria-label":e.avatarDescription,direction:"e",children:(0,n.jsx)(x.Z,{href:e.avatarUrl,sx:{mr:2},"aria-label":"Avatar",children:(0,n.jsx)(p.O,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,n.jsxs)(a.Z,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,n.jsxs)(a.Z,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,n.jsx)(a.Z,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,n.jsxs)(a.Z,{children:[" ","- ",e.pending?(0,n.jsx)(a.Z,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,n.jsx)(x.Z,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{m.displayName||(m.displayName="CheckRunItem")}catch{}function g({checkRuns:e}){return(0,n.jsx)(u.Z,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,n.jsx)(m,{checkRun:e},t))})}try{g.displayName||(g.displayName="ChecksStatusBadgeFooter")}catch{}function y({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,n.jsx)(a.Z,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,n.jsx)(a.Z,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,n.jsx)(a.Z,{sx:{color:"var(--fgColor-attention, var(--color-attention-fg))",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,n.jsx)(a.Z,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{y.displayName||(y.displayName="HeaderState")}catch{}function b(e){let{combinedStatus:t,isOpen:r,onDismiss:i}=e,o=t?(0,n.jsx)(y,{checksHeaderState:t.checksHeaderState}):"Loading...";return r?(0,n.jsx)(f.V,{onClose:i,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:o,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,n.jsx)(f.V.Body,{sx:{padding:0},children:t?(0,n.jsx)(g,{checkRuns:t.checkRuns}):(0,n.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,n.jsx)(h.Z,{size:"medium"})})})}):null}try{b.displayName||(b.displayName="CheckStatusDialog")}catch{}let v={success:{circled:i.CheckCircleIcon,filled:i.CheckCircleFillIcon,default:i.CheckIcon,color:"var(--bgColor-success-emphasis, var(--color-success-emphasis))"},pending:{circled:i.CircleIcon,filled:i.DotFillIcon,default:i.DotFillIcon,color:"var(--bgColor-attention-emphasis, var(--color-scale-yellow-4))"},error:{circled:i.XCircleIcon,filled:i.XCircleFillIcon,default:i.XIcon,color:"var(--bgColor-danger-emphasis, var(--color-scale-red-4))"}};function j({descriptionText:e,icon:t,iconColor:r}){return(0,n.jsxs)("span",{"data-testid":"checks-status-badge-icon-only",children:[(0,n.jsx)(o.Z,{icon:t,"aria-label":"See all checks",sx:{color:r}}),e&&(0,n.jsxs)(a.Z,{children:[" ",e]})]})}function C(e){let{statusRollup:t,combinedStatus:r,variant:i="default",disablePopover:o,buttonSx:a,size:u="medium",descriptionText:h="",onWillOpenPopup:f}=e,[p,x]=(0,d.useState)(!1),m=(0,d.useId)(),g=(0,d.useRef)(null),y=v[t],{icon:C,iconColor:w}={icon:y?.[i]||v.error[i],iconColor:y?.color||v.error.color};return o?(0,n.jsx)(j,{descriptionText:h,icon:C,iconColor:w}):(0,n.jsxs)(n.Fragment,{children:[h?(0,n.jsx)(l.r,{"data-testid":"checks-status-badge-button",leadingVisual:C,variant:"invisible",size:u,"aria-label":r?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:w},...a},ref:g,onClick:()=>{f?.(),x(!0)},children:h}):(0,n.jsx)(s.Z,{id:m,"aria-label":r?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,n.jsx)(c.h,{"data-testid":"checks-status-badge-icon",icon:C,variant:"invisible",size:u,"aria-labelledby":m,sx:{py:0,px:0,svg:{color:w},":hover:not([disabled])":{bg:"pageHeaderBg"},...a},ref:g,onClick:()=>{f?.(),x(!0)}})}),p&&(0,n.jsx)(b,{combinedStatus:r,isOpen:p,onDismiss:()=>{x(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{j.displayName||(j.displayName="IconOnlyStatus")}catch{}try{C.displayName||(C.displayName="ChecksStatusBadge")}catch{}var w=r(22326),N=r(87623);function S(e,t){let[r,n]=(0,d.useState)(),[i,o]=(0,d.useState)();return[r,(0,d.useCallback)(async()=>{if(i!==e&&(o(e),n(void 0),e)){let r=(0,w.S$)(t,e),i=await (0,N.v)(r);n(await i.json())}},[e,i,t])]}},51927:(e,t,r)=>{r.d(t,{$1:()=>s,Aq:()=>l,L4:()=>n,YZ:()=>o,aF:()=>SymbolChangedEvent,cw:()=>i,d0:()=>a});let OpenCopilotChatEvent=class OpenCopilotChatEvent extends Event{constructor(e){super("open-copilot-chat",{bubbles:!1,cancelable:!0}),this.payload=e}};let AddCopilotChatReferenceEvent=class AddCopilotChatReferenceEvent extends Event{constructor(e,t=!1,r){super("add-copilot-chat-reference",{bubbles:!1,cancelable:!0}),this.reference=e,this.openPanel=t,this.id=r}};let SymbolChangedEvent=class SymbolChangedEvent extends Event{constructor(e){super("symbol-changed",{bubbles:!1,cancelable:!0}),this.context=e}};function n(e){window.dispatchEvent(new OpenCopilotChatEvent(e))}function i(e,t=!1,r){window.dispatchEvent(new AddCopilotChatReferenceEvent(e,t,r))}function o(e){return window.addEventListener("open-copilot-chat",e),()=>{window.removeEventListener("open-copilot-chat",e)}}function a(e){return window.addEventListener("add-copilot-chat-reference",e),()=>{window.removeEventListener("add-copilot-chat-reference",e)}}function l(e){return window.addEventListener("search-copilot-chat",e),()=>{window.removeEventListener("search-copilot-chat",e)}}function s(e){return window.addEventListener("symbol-changed",e),()=>{window.removeEventListener("symbol-changed",e)}}},85355:(e,t,r)=>{r.d(t,{A9:()=>n,cR:()=>o,uF:()=>i});let n={explain:"explain",conversation:"conversation",suggest:"suggest",askDocs:"ask-docs",discussFileDiff:"discuss-file-diff",explainFileDiff:"explain-file-diff",reviewPr:"review-pull-request"},i=["exception","filtered","contentTooLarge","rateLimit","agentUnauthorized","networkError","multipleAgentsAttempt"],o=["bing-search","codesearch","pathsearch","show-symbol-definition","getissue","getprcommits"]},46455:(e,t,r)=>{function n(e){return`line-${e}`}function i(e,t,r){return`${e}${"left"===t?"L":"R"}${r}`}function o(e){return"DELETION"===e?"left":"right"}function a(e,t=!1,r=!1){if(r)return"var(--bgColor-attention-muted, var(--color-attention-subtle))";switch(e){case"ADDITION":return t?"var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg))":"var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg))";case"DELETION":return t?"var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg))":"var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg))";case"HUNK":case"EMPTY":return t?"var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg))":"var(--bgColor-accent-muted, var(--color-accent-subtle))";default:return}}function l(e){let t=0;if(e)for(let r of e)t=Math.max(t,r?.left??0,r?.right??0);return Math.max(8*t.toString().length+20,40).toString()}r.d(t,{Gi:()=>l,Jn:()=>o,_N:()=>i,dF:()=>a,x1:()=>n})},6975:(e,t,r)=>{r.d(t,{Yj:()=>c,G7:()=>u,Sv:()=>f,Gt:()=>g,Cp:()=>x,fx:()=>m,iZ:()=>y,wj:()=>b,pE:()=>v,_2:()=>C});var n=r(48055),i=r(86010),o=r(75299),a=r(46455);let l=e=>{let{dragging:t,isHighlighted:r,isLeftColumn:l,colSpan:s,line:c,lineAnchor:d}=e,u=c.html,h="";return["ADDITION","DELETION"].includes(c.type)&&["+","-"].includes(u[0])&&(h=u[0],u=u.slice(1)),(0,n.jsx)("td",{className:(0,i.W)("diff-text-cell",{"border-left color-border-accent-emphasis":t&&r,"border-right":l&&"HUNK"!==c.type}),colSpan:s,id:d?(0,a.x1)(d):void 0,style:{backgroundColor:(0,a.dF)(c.type,!1,r)},children:(0,n.jsxs)("code",{"data-code-marker":h,className:(0,i.W)("diff-text syntax-highlighted-line",{addition:"ADDITION"===c.type,deletion:"DELETION"===c.type}),children:[e.lineChild,(0,n.jsx)(o.sF,{className:(0,i.W)("diff-text-inner",{"color-fg-muted":"HUNK"===c.type}),html:u,style:{marginLeft:"CONTEXT"===c.type?"-7px":void 0}})]})})};try{l.displayName||(l.displayName="DiffText")}catch{}let s=({ariaLabel:e,children:t,hasExpanderButton:r,lineType:o,colSpan:l,interactiveProps:s,isHighlighted:c,...d})=>{let u=(0,n.jsx)("code",{className:"pr-2",children:t});return s&&(u=(0,n.jsx)("button",{className:"diff-line-number-button",...s,"aria-label":e,children:u})),(0,n.jsx)("td",{"aria-label":s?void 0:e,"data-line-number":!0,className:(0,i.W)("diff-line-number",{"has-expander":r,clickable:!!s}),colSpan:l||1,style:{backgroundColor:(0,a.dF)(o,!0,c)},...d,children:u})};try{s.displayName||(s.displayName="LineNumber")}catch{}let c=({dragging:e,isHighlighted:t,isLeftColumn:r,isSplit:i,lineAnchor:o,line:a,lineChild:c,onLineNumberClick:d})=>{let u="CONTEXT"===a.type||"INJECTED_CONTEXT"===a.type,h="ADDITION"!==a.type,f=h||!i,p="DELETION"!==a.type,x=p&&!u||!i,m=i&&u?r?a.left:a.right:a.left;return(0,n.jsxs)(n.Fragment,{children:[f&&(0,n.jsx)(s,{ariaLabel:`Line ${h?a.left?.toString():a.right?.toString()}`,lineType:a.type,interactiveProps:d?{onClick:d}:null,isHighlighted:t,children:h&&m}),x&&(0,n.jsx)(s,{ariaLabel:`Line ${p?a.right?.toString():a.left?.toString()}`,lineType:a.type,interactiveProps:d?{onClick:d}:null,isHighlighted:t,children:p&&a.right}),(0,n.jsx)(l,{dragging:e,isHighlighted:t,isLeftColumn:r,line:a,lineAnchor:o,lineChild:c})]})};try{c.displayName||(c.displayName="DiffLinePart")}catch{}var d=r(42483);function u(){return(0,n.jsx)(d.Z,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,n.jsxs)("defs",{children:[(0,n.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,n.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,n.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,n.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,n.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,n.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,n.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,n.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}try{u.displayName||(u.displayName="DiffPlaceholder")}catch{}let h={addition:"diffstat.additionBg",deletion:"danger.emphasis",neutral:"neutral.bg"};function f({squares:e}){return(0,n.jsx)(d.Z,{sx:{display:"flex"},children:e.map((e,t)=>(0,n.jsx)(d.Z,{"data-testid":`${e} diffstat`,sx:{backgroundColor:h[e],width:"8px",height:"8px",marginLeft:"1px",outlineOffset:"-1px",borderStyle:"solid",borderColor:"border.subtle",borderWidth:"1px"}},t))})}try{f.displayName||(f.displayName="DiffSquares")}catch{}var p=r(85529);function x({currentLine:e,hunkButton:t,isLeftColumn:r,isSplit:i}){return i&&!r?null:(0,n.jsxs)(n.Fragment,{children:[t?(0,n.jsx)(s,{colSpan:i?1:2,hasExpanderButton:!0,lineType:e.type,children:t}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{lineType:e.type,children:(0,n.jsx)(p.KebabHorizontalIcon,{})}),!i&&(0,n.jsx)(s,{lineType:e.type,children:(0,n.jsx)(p.KebabHorizontalIcon,{})})]}),(0,n.jsx)(l,{isHighlighted:!1,isLeftColumn:!0,colSpan:i?3:void 0,line:e})]})}try{x.displayName||(x.displayName="HunkHeaderDiffLine")}catch{}function m(){return(0,n.jsx)("div",{className:"hunk-kebab-icon pr-2 pb-1",children:(0,n.jsx)(p.KebabHorizontalIcon,{})})}try{m.displayName||(m.displayName="HunkKebabIcon")}catch{}function g({isLeftColumn:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{lineType:"EMPTY"}),(0,n.jsx)("td",{className:(0,i.W)("empty-diff-line",{"border-right":e}),colSpan:1})]})}try{g.displayName||(g.displayName="EmptyDiffLine")}catch{}function y(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("thead",{hidden:!0,children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"Original file line number"}),(0,n.jsx)("th",{scope:"col",children:"Original file line"}),(0,n.jsx)("th",{scope:"col",children:"Diff line number"}),(0,n.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,n.jsxs)("colgroup",{children:[(0,n.jsx)("col",{width:e.lineWidth}),(0,n.jsx)("col",{}),(0,n.jsx)("col",{width:e.lineWidth}),(0,n.jsx)("col",{})]}),(0,n.jsx)("tbody",{children:e.children})]})}try{y.displayName||(y.displayName="SplitDiffTable")}catch{}function b(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("thead",{hidden:!0,children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"Original file line number"}),(0,n.jsx)("th",{scope:"col",children:"Diff line number"}),(0,n.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,n.jsxs)("colgroup",{children:[(0,n.jsx)("col",{width:e.lineWidth}),(0,n.jsx)("col",{width:e.lineWidth}),(0,n.jsx)("col",{width:"100%"})]}),(0,n.jsx)("tbody",{children:e.children})]})}try{b.displayName||(b.displayName="UnifiedDiffTable")}catch{}function v(e,t){let r,n,i;let o=e.slice(1).search(/\S/)||0;return e.includes("	")&&(r=e.split(RegExp("	")).length-1),{getPaddingLeft:function(){return n||(n=r?`${t*r*7}px`:o<1?"0px":`${7*o}px`)},getTextIndent:function(){return i||(i=r?`-${t*r*7+t}px`:o<1?"0px":`-${7*o+.5}px`)}}}function j(e){return"LEFT"===e?"-":"RIGHT"===e?"+":""}function C({startDiffSide:e,endDiffSide:t,originalStartLine:r,originalEndLine:n}){return e&&t&&"number"==typeof r&&"number"==typeof n?0===r&&1===n&&e===t?"-1 to +1":e===t&&r===n?`${j(e)}${r}`:`${j(e)}${r} to ${j(t)}${n}`:""}},91534:(e,t,r)=>{r.d(t,{Z:()=>n});let n=(e,t)=>{let r=new URL(e,window.location.origin),n=new URL(t,window.location.origin);return n.href.includes("#")&&r.host===n.host&&r.pathname===n.pathname&&r.search===n.search}},90044:(e,t,r)=>{r.d(t,{F:()=>i});var n=r(24533);function i(e,t){let{csrf_tokens:r}=(0,n.T)();return r?.[e]?.[t]}},29065:(e,t,r)=>{r.d(t,{a:()=>i});var n=r(58081);function i({focusRowRef:e,mouseRowRef:t}){let[r,i]=n.useState(!1);return n.useEffect(()=>{if(e.current&&t.current){let r=()=>{let t=e.current?.querySelector(".PRIVATE_TreeView-item-content-text");t?.scrollWidth!==t?.offsetWidth&&i(!0)};e.current.onfocus=()=>{r()},e.current.onblur=()=>{i(!1)},t.current.onmouseenter=()=>{r()},t.current.onmouseleave=()=>{i(!1)}}},[e,t]),r}},19343:(e,t,r)=>{r.d(t,{V:()=>i});var n=r(58081);function i(e){(0,n.useEffect)(()=>{if(!e)return;let t=document.querySelector(".footer");if(t)return t.hidden=!0,()=>{t.hidden=!1}},[e])}},85193:(e,t,r)=>{r.d(t,{l:()=>h,s:()=>u});var n=r(58081),i=r(89250),o=r(12599),a=r(79655),l=r(91534),s=r(40940),c=r(10394),d=r(42439);let u=()=>{let{routes:e,history:t}=n.useContext(s.I),a=(0,i.s0)();return n.useCallback((n,i)=>{let s=(0,o.i3)(n).pathname;if((0,o.fp)(e,s))(0,l.Z)(location.href,n.toString())||(0,c.LD)("react"),(0,d.X)(()=>{a(n,i);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)});else{let e=t.createHref(n);(async()=>{let{softNavigate:t}=await Promise.all([r.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),r.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(r.bind(r,12272));t(e)})()}},[t,a,e])},h=()=>{let[e]=(0,a.lr)(),t=u(),{pathname:r}=(0,i.TH)(),o=n.useCallback((n,i)=>{t({pathname:r,search:(0,a.fW)("function"==typeof n?n(e):n).toString()},i)},[e,t,r]);return[e,o]}},34603:(e,t,r)=>{r.d(t,{A:()=>a,F:()=>s});var n=r(58081),i=r(78720);let o=e=>e;function a(e){let t=n.useRef({}),r=n.useRef({}),a=(e,r)=>{t.current[e](r)},l=n.useRef(a);l.current=a;let s=n.useRef(new ResizeObserver(e=>{for(let t of e){let e=t.target,r="data-key",n=e.getAttribute(r);if(null===n)throw Error(`Value not found, for '${r}' attribute`);l.current(n,e)}}));n.useEffect(()=>{let e=s.current;return()=>{e.disconnect()}},[]);let{size:c,keyExtractor:d=o}=e,u=n.useMemo(()=>{let e=e=>t=>{r.current[e]&&s.current.unobserve(r.current[e]),t&&(l.current(e,t),s.current.observe(t)),r.current[e]=t},t={};for(let r=0;r<c;r++){let n=d(r);t[n]=e(n)}return t},[c,d]),h=(0,i.o)(e),f=h.virtualItems.map(e=>(t.current[e.key]=e.measureRef,{...e,measureRef:u[e.key]}));return{...h,virtualItems:f}}var l=r(63451);function s({additionalScrollOffset:e=0,scrollToFn:t,horizontal:r,parentRef:o,useVirtualImpl:a=i.o,...s}){let c=(0,n.useRef)(window),d=(0,n.useCallback)(()=>{let e=o.current?.getBoundingClientRect(),t=e?.top??0,n=e?.left??0;return r?-1*n:-1*t},[r,o]),u=(0,n.useCallback)(t=>{let n=t+((o.current?.getBoundingClientRect().top??0)+window.scrollY)+e;c.current?.scroll({top:r?0:n,left:r?n:0})},[e,r,o]);return a({...s,horizontal:r,parentRef:o,scrollToFn:t||u,onScrollElement:c,scrollOffsetFn:d,useObserver:()=>(function(e){let[t,r]=(0,n.useState)({height:0,width:0}),i=e.current;return(0,l.b)(()=>{if(!i)return;let e=()=>{let e={height:i.innerHeight,width:i.innerWidth};r(t=>t.height!==e.height||t.width!==e.width?e:t)};return e(),i.addEventListener("resize",e),()=>{i.removeEventListener("resize",e)}},[i]),t})(c)})}},52674:(e,t,r)=>{r.d(t,{H:()=>l,d:()=>a});var n=r(48055),i=r(58081);let o=i.createContext({});function a({repository:e,children:t}){return(0,n.jsxs)(o.Provider,{value:e,children:[" ",t," "]})}function l(){return i.useContext(o)}try{o.displayName||(o.displayName="CurrentRepositoryContext")}catch{}try{a.displayName||(a.displayName="CurrentRepositoryProvider")}catch{}},37589:(e,t,r)=>{r.d(t,{M:()=>a,x:()=>l});var n=r(48055),i=r(58081);let o=i.createContext(void 0);function a({user:e,children:t}){return(0,n.jsxs)(o.Provider,{value:e,children:[" ",t," "]})}function l(){return i.useContext(o)}try{o.displayName||(o.displayName="CurrentUserContext")}catch{}try{a.displayName||(a.displayName="CurrentUserProvider")}catch{}},77461:(e,t,r)=>{r.d(t,{r:()=>c});var n=r(48055),i=r(58081),o=r(12599),a=r(79655),l=r(40940),s=r(71207);let c=i.forwardRef(({to:e,reloadDocument:t,...r},c)=>{let{routes:d}=i.useContext(l.I),u=(0,o.i3)(e,s.ssrSafeLocation.pathname).pathname;return t=t??!(0,o.fp)(d,u),(0,n.jsx)(a.rU,{to:e,...r,reloadDocument:t,ref:c})});c.displayName="Link"},51952:(e,t,r)=>{r.d(t,{ZV:()=>u,_G:()=>n,eI:()=>c,xp:()=>d});var n,i=r(48055),o=r(46263),a=r(58081);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(n||(n={}));let l=[1440,1350,1280,1012,768,544,1],s=a.createContext({screenSize:1});function c(){return a.useContext(s)}function d({children:e,initialValue:t}){let r=(0,a.useSyncExternalStore)(()=>()=>{},()=>t??u(window.innerWidth),()=>t??1),n=(0,a.useRef)(r),[l,c]=(0,a.useState)(r),d=(0,a.useCallback)(()=>{let e=u(window.innerWidth);n.current!==e&&(n.current=e,c(e))},[]);(0,a.useEffect)(()=>{let e=new ResizeObserver((0,o.D)(d));return e.observe(document.documentElement),()=>e.disconnect()},[d]);let h=(0,a.useMemo)(()=>({screenSize:l}),[l]);return(0,i.jsx)(s.Provider,{value:h,children:e})}function u(e){for(let t of l)if(e>=t)return t;return 1}try{s.displayName||(s.displayName="ScreenContext")}catch{}try{d.displayName||(d.displayName="ScreenSizeProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-59a8e3-fb168049dcf5.js.map