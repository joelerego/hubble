(this.webpackJsonphubble=this.webpackJsonphubble||[]).push([[12],{234:function(e,t,n){"use strict";n.r(t);var a=n(161);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var r=n(43),s=n(0),c=n.n(s),l=n(138),d=n(1),u=n(66),p=n(65),b=n(45),m=n(67);var h=n(34),f=n(2),g=(n(44),n(3),n(4)),y=n(160),x=n(5),v=n(17),w=n(18),O=n(13),j=n(11),E=s.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,i=e.collapsedHeight,r=void 0===i?"0px":i,c=e.component,l=void 0===c?"div":c,u=e.disableStrictModeCompat,p=void 0!==u&&u,b=e.in,m=e.onEnter,x=e.onEntered,E=e.onEntering,H=e.onExit,q=e.onExited,C=e.onExiting,R=e.style,N=e.timeout,k=void 0===N?v.b.standard:N,I=e.TransitionComponent,P=void 0===I?y.a:I,T=Object(f.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),S=Object(O.a)(),B=s.useRef(),D=s.useRef(null),F=s.useRef(),W="number"===typeof r?"".concat(r,"px"):r;s.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var L=S.unstable_strictMode&&!p,A=s.useRef(null),M=Object(j.a)(t,L?A:void 0),$=function(e){return function(t,n){if(e){var a=L?[A.current,t]:[t,n],o=Object(h.a)(a,2),i=o[0],r=o[1];void 0===r?e(i):e(i,r)}}},Y=$((function(e,t){e.style.height=W,m&&m(e,t)})),z=$((function(e,t){var n=D.current?D.current.clientHeight:0,a=Object(w.a)({style:R,timeout:k},{mode:"enter"}).duration;if("auto"===k){var o=S.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),F.current=o}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),E&&E(e,t)})),V=$((function(e,t){e.style.height="auto",x&&x(e,t)})),_=$((function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),H&&H(e)})),G=$(q),J=$((function(e){var t=D.current?D.current.clientHeight:0,n=Object(w.a)({style:R,timeout:k},{mode:"exit"}).duration;if("auto"===k){var a=S.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),F.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=W,C&&C(e)}));return s.createElement(P,Object(d.a)({in:b,onEnter:Y,onEntered:V,onEntering:z,onExit:_,onExited:G,onExiting:J,addEndListener:function(e,t){var n=L?e:t;"auto"===k&&(B.current=setTimeout(n,F.current||0))},nodeRef:L?A:void 0,timeout:"auto"===k?null:k},T),(function(e,t){return s.createElement(l,Object(d.a)({className:Object(g.a)(a.container,o,{entered:a.entered,exited:!b&&"0px"===W&&a.hidden}[e]),style:Object(d.a)({minHeight:W},R),ref:M},t),s.createElement("div",{className:a.wrapper,ref:D},s.createElement("div",{className:a.wrapperInner},n)))}))}));E.muiSupportAuto=!0;var H=Object(x.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(E),q=n(104);var C=s.createContext({}),R=n(175),N=s.forwardRef((function(e,t){var n,a=e.children,o=e.classes,i=e.className,r=e.defaultExpanded,c=void 0!==r&&r,l=e.disabled,y=void 0!==l&&l,x=e.expanded,v=e.onChange,w=e.square,O=void 0!==w&&w,j=e.TransitionComponent,E=void 0===j?H:j,N=e.TransitionProps,k=Object(f.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),I=Object(R.a)({controlled:x,default:c,name:"ExpansionPanel",state:"expanded"}),P=Object(h.a)(I,2),T=P[0],S=P[1],B=s.useCallback((function(e){S(!T),v&&v(e,!T)}),[T,v,S]),D=s.Children.toArray(a),F=(n=D,Object(u.a)(n)||Object(p.a)(n)||Object(b.a)(n)||Object(m.a)()),W=F[0],L=F.slice(1),A=s.useMemo((function(){return{expanded:T,disabled:y,toggle:B}}),[T,y,B]);return s.createElement(q.a,Object(d.a)({className:Object(g.a)(o.root,i,T&&o.expanded,y&&o.disabled,!O&&o.rounded),ref:t,square:O},k),s.createElement(C.Provider,{value:A},W),s.createElement(E,Object(d.a)({in:T,timeout:"auto"},N),s.createElement("div",{"aria-labelledby":W.props.id,id:W.props["aria-controls"],role:"region"},L)))})),k=Object(x.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(N),I=s.forwardRef((function(e,t){var n=e.classes,a=e.className,o=Object(f.a)(e,["classes","className"]);return s.createElement("div",Object(d.a)({className:Object(g.a)(n.root,a),ref:t},o))})),P=Object(x.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(I),T=n(60),S=n(148),B=s.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,i=e.expandIcon,r=e.IconButtonProps,c=e.onBlur,l=e.onClick,u=e.onFocusVisible,p=Object(f.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),b=s.useState(!1),m=b[0],h=b[1],y=s.useContext(C),x=y.disabled,v=void 0!==x&&x,w=y.expanded,O=y.toggle;return s.createElement(T.a,Object(d.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":w,className:Object(g.a)(a.root,o,v&&a.disabled,w&&a.expanded,m&&a.focused),onFocusVisible:function(e){h(!0),u&&u(e)},onBlur:function(e){h(!1),c&&c(e)},onClick:function(e){O&&O(e),l&&l(e)},ref:t},p),s.createElement("div",{className:Object(g.a)(a.content,w&&a.expanded)},n),i&&s.createElement(S.a,Object(d.a)({className:Object(g.a)(a.expandIcon,w&&a.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},r),i))})),D=Object(x.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(B),F=n(151),W=n(227),L=n(149),A=n(54),M=[{id:1,title:"Starting with Hubble",questions:[{id:1,question:"How do I get started with Hubble?",answer:"You can begin using Hubble today. You can request for a demo or create a free account to experience Hubble. When you first sign up, you will be take through a brief tutorial which will allow you to explore our platform. Our trial provides access to our features and functionality so you can ensure that Hubble works for your business."},{id:2,question:"How do Hubble's pricing plans work?",answer:"Hubble's pricing plans charge on a per-transaction basis, percentage of revenue, and a base monthly fee. A per-transaction fee will be assessed against successful payments, refunds, voids, authorizations, and declines. Hubble does not charge for transactions that failed due to a gateway connection issue."},{id:3,question:"Is there a setup fee to use Hubble?",answer:"Hubble does not charge a setup fee. You may sign up and use Hubble for free at any time. We only charge our fees once you sign up for a Hubble subscription and are ready to start collecting money."},{id:4,question:"Can I customize the Hosted Payment Pages?",answer:"Hosted payment pages provide merchants with an easy, PCI-compliant approach to get up and running with minimal effort. The look and feel can be customized with your logo and custom background color. Beyond the basic required fields such as name, email address and billing information, you may update your hosted pages to request a variety of additional data from your users including company name, VAT number, GST number, and coupon codes among others."},{id:5,question:"Does Hubble require a long-term contract?",answer:"Hubble is a month-to-month service so there are no long-term commitments, and you can cancel at anytime."}]},{id:2,title:"Handling Subscriptions",questions:[{id:1,question:"Can I create subscriptions without billing information?",answer:"Hubble is designed to handle paid subscriptions, so an account must have billing information before a subscription (fully discounted, or free subscriptions) may be created. However, you can create subscription plans that do not require billing information at sign-up, if there is a free trial. Subscriptions can also be created without billing information if the collection method is manual."},{id:2,question:"What happens to subscribers that subscribe to a plan if I change the price or delete the plan?",answer:"Hubble supports price grandfathering. When a subscription plan changes, your existing subscribers will remain grandfathered in at the terms they agreed to. New subscribers will be subscribed with the updated pricing terms. Price grandfathering does not apply to changes in bill cycle (that is, monthly to yearly), however, so changes to billing frequency should be made with a new subscription plan."},{id:3,question:"How does billing work in shorter months, such as February?",answer:"Customers are always charged on the closest corresponding date of the following month. For example, a customer who would normally be billed on the 31st of a month will either be billed on the 30th of a 30-day month, or on the 28th of February."},{id:4,question:"Does Hubble support one-time transactions as well?",answer:"Yes. You can submit one-time charges for immediate collection. Charges can be submitted at any time, which will be rolled up and collected when a subscription renews."},{id:5,question:"Can I accept check payments?",answer:"Yes. You can use the Manual Payments feature to log check payments in Hubble."}]}],$=Object(l.a)((function(e){var t;return Object(a.a)({root:{width:"100%"},header:Object(a.a)({background:"linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",color:e.palette.primary.contrastText,height:300,padding:32,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",justifyContent:"center"},e.breakpoints.down("sm"),{padding:24}),title:{fontSize:24,marginTop:8,marginLeft:"auto",marginRight:"auto",maxWidth:512},subtitle:{marginTop:40,fontSize:20},searchPaper:(t={display:"flex",alignItems:"center",height:48,width:"100%",marginTop:16,borderRadius:24},Object(a.a)(t,e.breakpoints.up("md"),{maxWidth:512}),Object(a.a)(t,"paddingLeft",16),Object(a.a)(t,"paddingRight",16),t),searchIcon:{marginRight:8},search:{},groups:{},group:Object(a.a)({width:"100%",marginLeft:"auto",marginRight:"auto",marginTop:40},e.breakpoints.up("lg"),{maxWidth:"70%"}),groupTitle:{fontSize:20,marginBottom:16,color:"#5F6368"},panel:{margin:0,borderWidth:"1px 1px 0 1px",borderStyle:"solid",borderColor:e.palette.divider,"&:first-child":{borderRadius:"16px 16px 0 0"},"&:last-child":{borderRadius:"0 0 16px 16px",borderWidth:"0 1px 1px 1px"}},question:{display:"flex",alignItems:"center",color:"#5F6368"},questionText:{color:"#5F6368"},questionIcon:{color:"#5F6368",marginRight:8}},e.breakpoints.down("sm"),{header:{height:300},subtitle:{marginTop:80}})}));t.default=function(e){var t=Object(s.useState)(M),n=Object(r.a)(t,1)[0],a=Object(s.useState)(!1),o=Object(r.a)(a,2),l=o[0],d=o[1],u=Object(s.useState)(""),p=Object(r.a)(u,2),b=p[0],m=p[1],h=$(),f=function(e,t){var n=e;if(t.length>0){n=[];for(var a=e.length,o=0;o<a;o++){var r=e[o],s=r.questions.filter((function(e){var n=e.question.toLowerCase(),a=e.answer.toLowerCase(),o=t.toLowerCase();return n.indexOf(o)>=0||a.indexOf(o)>=0}));s.length>0&&n.push(i(i({},r),{},{questions:s}))}}return n}(n,b);return Object(s.useEffect)((function(){document.title="FAQs | Hubble Subscriptions"}),[]),c.a.createElement("div",{className:h.root},c.a.createElement("div",{className:h.header},c.a.createElement(A.a,{color:"inherit",className:h.subtitle},"We are here to help you"),c.a.createElement(A.a,{variant:"subtitle1",color:"inherit",className:h.title},"Frequently Asked Questions"),c.a.createElement(q.a,{className:h.searchPaper,elevation:0},c.a.createElement(F.a,{color:"action",className:h.searchIcon},"search"),c.a.createElement(W.a,{placeholder:"Search...",className:h.search,disableUnderline:!0,fullWidth:!0,value:b,onChange:function(e){m(e.target.value)}}))),c.a.createElement(L.a,{className:h.groups},f.map((function(e,t){return c.a.createElement("div",{className:h.group},c.a.createElement(A.a,{className:h.groupTitle},e.title),e.questions.map((function(t){return c.a.createElement(k,{className:h.panel,key:t.id,expanded:l.faqId===t.id&&l.groupId===e.id,onChange:(n={faqId:t.id,groupId:e.id},function(e,t){d(!!t&&n)}),elevation:1},c.a.createElement(D,{expandIcon:c.a.createElement(F.a,null,"expand_more")},c.a.createElement("div",{className:h.question},c.a.createElement(F.a,{className:h.questionIcon,color:"action"},"help_outline"),c.a.createElement(A.a,{className:h.questionText},t.question))),c.a.createElement(P,null,c.a.createElement(A.a,{className:""},t.answer)));var n})))}))))}}}]);
//# sourceMappingURL=12.bdeb1996.chunk.js.map