"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{64283:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(87357),i=n(27948),s=n(85893),o=function(e){var t=e.children;return(0,s.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,s.jsx)(i.Z,{children:t})})}},21489:function(e,t,n){n.d(t,{hu:function(){return Z},gO:function(){return k},tF:function(){return y}});var r=n(59499),i=n(85169),s=n(61782),o=n(87357),a=n(34386),l=n(2734),c=n(98396),d=n(77931),x=n(53219),h=n(15861),u=n(18972),p=n(59334),m=n(67294),f=n(45555),j=n(53770),g=n(85893);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,Z=function(e){var t=j.ei[e];return{market:t,network:j.m5[t.chainId]}},F=function(e){var t=["Kovan","Rinkeby","Ropsten","Mumbai","Fuji","Testnet"],n=e.split(" "),r=n.filter((function(e){return t.indexOf(e)>-1}));return{name:n.filter((function(e){return!r.includes(e)})).join(" "),testChainName:r[0]}},k=function(e){var t=e.size,n=e.logo,r=e.testChainName;return(0,g.jsxs)(o.Z,{sx:{mr:2,width:t,height:t,position:"relative"},children:[(0,g.jsx)("img",{src:n,alt:"",width:"100%",height:"100%"}),r&&(0,g.jsx)(a.Z,{title:r,arrow:!0,children:(0,g.jsx)(o.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:r.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(b||(b={}));var y=function(){var e=(0,f.f)(),t=e.currentMarket,n=e.setCurrentMarket,r=(0,m.useState)(b.V3)[0],a=(0,l.Z)(),w=(0,c.Z)(a.breakpoints.up("lg")),y=(0,c.Z)(a.breakpoints.down("xsm"));return(0,g.jsxs)(d.Z,{select:!0,"aria-label":"select market","data-cy":"marketSelector",value:t,onChange:function(e){return n(e.target.value)},sx:{mr:2,"& .MuiOutlinedInput-notchedOutline":{border:"none"}},SelectProps:{native:!1,className:"MarketSwitcher__select",IconComponent:function(e){return(0,g.jsx)(x.Z,v(v({fontSize:"medium"},e),{},{children:(0,g.jsx)(s.Z,{})}))},renderValue:function(e){var t=Z(e),n=t.market,r=t.network;return(0,g.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,g.jsx)(k,{size:w?32:28,logo:r.networkLogoPath,testChainName:F(n.marketTitle).testChainName}),(0,g.jsx)(o.Z,{sx:{mr:1,display:"inline-flex",alignItems:"flex-start"},children:(0,g.jsxs)(h.Z,{variant:w?"display1":"h1",sx:{fontSize:y?"1.55rem":void 0,color:"common.white",mr:1},children:[F(n.marketTitle).name," ",n.isFork?"Fork":"",w&&" Market"]})})]})},sx:{"&.MarketSwitcher__select .MuiSelect-outlined":{p:0,backgroundColor:"transparent !important"},".MuiSelect-icon":{color:"#F1F1F3"}},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},PaperProps:{style:{minWidth:240},variant:"outlined",elevation:0}}},children:[(0,g.jsx)(o.Z,{children:(0,g.jsx)(h.Z,{variant:"subheader2",color:"text.secondary",sx:{px:4,py:2},children:(0,g.jsx)(i.cC,{id:"{0}",values:{0:j.p8||j.aV?"Select Testnet Market":"Select Market"}})})}),j.z2.map((function(e){var t=Z(e),n=t.market,i=t.network,s=F(n.marketTitle);return(n.v3&&r===b.V3||!n.v3&&r===b.V2)&&(0,g.jsxs)(u.Z,{"data-cy":"marketSelector_".concat(e),value:e,sx:{".MuiListItemIcon-root":{minWidth:"unset"}},children:[(0,g.jsx)(k,{size:32,logo:i.networkLogoPath,testChainName:s.testChainName}),(0,g.jsxs)(p.Z,{sx:{mr:0},children:[s.name," ",n.isFork?"Fork":""]}),(0,g.jsx)(p.Z,{sx:{textAlign:"right"},children:(0,g.jsx)(h.Z,{color:"text.muted",variant:"description",children:s.testChainName})})]},e)}))]})}},3971:function(e,t,n){n.d(t,{V:function(){return c}});var r=n(2734),i=n(98396),s=n(87357),o=n(15861),a=n(21489),l=n(85893),c=function(e){var t=e.pageTitle,n=e.withMarketSwitcher,c=(0,r.Z)(),d=(0,i.Z)(c.breakpoints.up("lg")),x=(0,i.Z)(c.breakpoints.down("xsm"));return(0,l.jsxs)(s.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:t?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[t&&(x||!n)&&(0,l.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,l.jsx)(o.Z,{variant:x?"h2":d?"display1":"h1",sx:{color:n?"text.muted":"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:t})}),(0,l.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",mb:t?0:4},children:n&&(0,l.jsx)(a.tF,{})})]})}},33329:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(87357),i=n(27948),s=n(3971),o=n(85893),a=function(e){var t=e.pageTitle,n=e.titleComponent,a=e.withMarketSwitcher,l=e.bridge,c=e.children;return(0,o.jsx)(r.Z,{sx:{bgcolor:"background.default",pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,o.jsx)(i.Z,{sx:{pb:0},children:(0,o.jsxs)(r.Z,{sx:{px:{xs:4,xsm:6}},children:[!n&&(0,o.jsx)(s.V,{pageTitle:t,withMarketSwitcher:a,bridge:l}),n&&n,(0,o.jsx)(r.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:c})]})})})}},36920:function(e,t,n){n.d(t,{x:function(){return b}});var r,i=n(96183),s=n(15629),o=n(85169),a=n(83321),l=n(87357),c=n(21737),d=n(15861),x=n(50122),h=n(72005),u=n(68611),p=n(37096),m=n(77044),f=n(83929),j=n(30950),g=n(85893),w=function(e){var t=e.walletName,n=e.walletType,r=(0,h.Z)().connectWallet;return(0,g.jsx)(a.Z,{variant:"outlined",sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",mb:"8px"},size:"large",onClick:function(){return r(n)},endIcon:function(e){switch(e){case u.S.INJECTED:return(0,g.jsx)("img",{src:"/icons/wallets/browserWallet.svg",width:"24px",height:"24px",alt:"browser wallet icon"});case u.S.WALLET_CONNECT:return(0,g.jsx)("img",{src:"/icons/wallets/walletConnect.svg",width:"24px",height:"24px",alt:"browser wallet icon"});case u.S.WALLET_LINK:return(0,g.jsx)("img",{src:"/icons/wallets/coinbase.svg",width:"24px",height:"24px",alt:"browser wallet icon"});case u.S.TORUS:return(0,g.jsx)("img",{src:"/icons/wallets/torus.svg",width:"24px",height:"24px",alt:"browser wallet icon"});case u.S.FRAME:return(0,g.jsx)("img",{src:"/icons/wallets/frame.svg",width:"24px",height:"24px",alt:"browser wallet icon"});default:return null}}(n),children:t})};!function(e){e[e.UNSUPORTED_CHAIN=0]="UNSUPORTED_CHAIN",e[e.USER_REJECTED_REQUEST=1]="USER_REJECTED_REQUEST",e[e.UNDETERMINED_ERROR=2]="UNDETERMINED_ERROR",e[e.NO_WALLET_DETECTED=3]="NO_WALLET_DETECTED"}(r||(r={}));var v=function(){var e=(0,h.Z)().error,t=void 0;e&&(t=e instanceof m.UnsupportedChainIdError?r.UNSUPORTED_CHAIN:e instanceof f.ab?r.USER_REJECTED_REQUEST:e instanceof j.A5?r.NO_WALLET_DETECTED:r.UNDETERMINED_ERROR);return(0,g.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,g.jsx)(p.E,{title:"Connect a wallet"}),e&&(0,g.jsx)(c.Z,{severity:"error",sx:{mb:"24px"},children:function(){switch(t){case r.UNSUPORTED_CHAIN:return(0,g.jsx)(o.cC,{id:"Network not supported for this wallet"});case r.USER_REJECTED_REQUEST:return(0,g.jsx)(o.cC,{id:"Rejected connection request"});case r.NO_WALLET_DETECTED:return(0,g.jsx)(o.cC,{id:"Wallet not detected. Connect or install wallet and retry"});default:return console.log("Uncatched error: ",e),(0,g.jsx)(o.cC,{id:"Error connecting. Try refreshing the page."})}}()}),(0,g.jsx)(w,{walletName:"Browser wallet",walletType:u.S.INJECTED},"browser_wallet"),(0,g.jsx)(w,{walletName:"WalletConnect",walletType:u.S.WALLET_CONNECT},"walletconnect_wallet"),(0,g.jsx)(w,{walletName:"Coinbase",walletType:u.S.WALLET_LINK},"walletlink_wallet"),(0,g.jsx)(w,{walletName:"Torus",walletType:u.S.TORUS},"torus_wallet"),(0,g.jsx)(w,{walletName:"Frame",walletType:u.S.FRAME},"frame_wallet"),(0,g.jsx)(d.Z,{variant:"description",sx:{mt:"22px",mb:"30px",alignSelf:"center"},children:(0,g.jsx)(o.cC,{id:"Need help connecting a wallet? <0>Read our FAQ</0>",components:{0:(0,g.jsx)(x.Z,{href:"https://docs.aave.com/faq/troubleshooting",target:"_blank"})}})}),(0,g.jsx)(d.Z,{variant:"helperText",children:(0,g.jsx)(o.cC,{id:"Wallets are provided by External Providers and by selecting you agree to Terms of those Providers. Your access to the wallet might be reliant on the External Provider being operational."})})]})},b=function(){var e=(0,i.qr)(),t=e.isWalletModalOpen,n=e.setWalletModalOpen;return(0,g.jsx)(s.P,{open:t,setOpen:n,children:(0,g.jsx)(v,{})})}},59809:function(e,t,n){n.d(t,{Z:function(){return Te}});var r,i=n(2734),s=n(98396),o=n(87357),a=n(67294),l=n(85169),c=n(38264),d=n(15861),x=n(83321),h=n(53219),u=n(11163),p=n(63327),m=n(53770),f=n(38577),j="/mahalendLogo.svg",g=n(69065),w=n(67720),v=n(78462),b=n(70891),Z=n(48885),F=n(59334),k=n(94471),y=n(9014),E=n(80943);function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}var S,T=function(e){return a.createElement("svg",C({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M16.238 4.137a14.845 14.845 0 0 0-3.664-1.136.056.056 0 0 0-.059.028c-.158.281-.334.648-.456.937a13.703 13.703 0 0 0-4.115 0 9.483 9.483 0 0 0-.464-.937A.058.058 0 0 0 7.422 3c-1.286.221-2.516.61-3.664 1.136a.052.052 0 0 0-.024.021C1.4 7.644.76 11.045 1.074 14.403a.062.062 0 0 0 .024.042 14.926 14.926 0 0 0 4.494 2.273.058.058 0 0 0 .064-.021c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.831 9.831 0 0 1-1.404-.668.058.058 0 0 1-.006-.096 7.67 7.67 0 0 0 .279-.219.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .06.008 7.7 7.7 0 0 0 .279.219.058.058 0 0 1-.005.096 9.228 9.228 0 0 1-1.405.668.057.057 0 0 0-.03.08c.27.524.578 1.022.918 1.495.014.02.04.029.063.021a14.877 14.877 0 0 0 4.502-2.272.058.058 0 0 0 .023-.041c.376-3.883-.628-7.255-2.66-10.245a.046.046 0 0 0-.024-.022Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814S6.114 8.73 7.015 8.73c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"})))};function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var _,N,R=function(e){return a.createElement("svg",O({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e),S||(S=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 18 10c0-4.42-3.58-8-8-8Z"})))},I=n(85893),D=[{link:f.Z6.dashboard,title:k.ag._("Dashboard"),dataCy:"menuDashboard"},{link:f.Z6.markets,title:k.ag._("Markets")},{link:"https://arth.loans/#/loan/ETH",title:"Mint ARTH",showLinkArrow:!0},{link:"https://arth.loans/#/farming",title:"Farming",showLinkArrow:!0},{link:f.Z6.faucet,title:k.ag._("Faucet"),isVisible:function(){return m.p8}}],M=[{link:"https://docs.mahalend.com/overview/faq",title:k.ag._("FAQ"),icon:(0,I.jsx)(y.Z,{})},{link:"https://docs.mahalend.com/developers/",title:k.ag._("Developers"),icon:(0,I.jsx)(E.Z,{})},{link:"https://discord.gg/mahadao",title:k.ag._("Discord"),icon:(0,I.jsx)(T,{})},{link:"https://github.com/mahalend",title:k.ag._("Github"),icon:(0,I.jsx)(R,{})}],L=[].concat(M,[]),A=([].concat(D,M,[]),n(77533)),P=function(e){var t=e.open,n=e.setOpen,r=e.children,i=e.headerHeight;return(0,I.jsx)(A.ZP,{anchor:"top",open:t,onClose:function(){return n(!1)},hideBackdrop:!0,sx:{top:"".concat(i,"px")},PaperProps:{sx:{background:"linear-gradient(180deg, #48423E 0%, #373030 100%)",backdropFilter:"blur(20px)",boxShadow:"none",borderRadius:"unset",width:"100%",top:"".concat(i,"px"),pt:6,pb:15,minHeight:"100vh"}},children:r})},W=n(94323),U=n(58057),V=n(67307),z={en:k.ag._("English"),es:k.ag._("Spanish"),fr:k.ag._("French"),el:k.ag._("Greek")},B=function(e){var t=e.component,n=void 0===t?b.ZP:t,r=e.onClick,i=(0,l.mV)().i18n;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(o.Z,{component:n,sx:{color:{xs:"#F1F1F3",md:"text.primary"},mb:"4px"},onClick:r,children:[(0,I.jsx)(Z.Z,{sx:{minWidth:"unset !important",mr:2,color:{xs:"#F1F1F3",md:"primary.light"}},children:(0,I.jsx)(h.Z,{fontSize:"small",children:(0,I.jsx)(W.Z,{})})}),(0,I.jsx)(F.Z,{disableTypography:!0,children:(0,I.jsx)(d.Z,{variant:"subheader2",children:(0,I.jsx)(l.cC,{id:"Select language"})})})]}),Object.keys(z).map((function(e){return(0,I.jsxs)(o.Z,{component:n,onClick:function(){return(0,V.zl)(e)},sx:{color:{xs:"#F1F1F3",md:"text.primary"},".MuiListItemIcon-root":{minWidth:"unset"},".MuiMenuItemIcon-root":{minWidth:"unset"}},children:[(0,I.jsx)(Z.Z,{sx:{mr:3,borderRadius:"2px",overflow:"hidden",width:20,height:14},children:(0,I.jsx)("img",{src:"/icons/flags/".concat(e,".svg"),width:"100%",height:"100%",alt:"".concat(e," icon")})}),(0,I.jsx)(F.Z,{children:i._(z[e])}),e===i.locale&&(0,I.jsx)(Z.Z,{sx:{m:0},children:(0,I.jsx)(h.Z,{fontSize:"small",sx:{color:{xs:"#F1F1F3",md:"text.primary"}},children:(0,I.jsx)(U.Z,{})})})]},e)}))]})},H=n(5506),G=n(93946),Q=function(e){var t=e.setOpen;return(0,I.jsx)(G.Z,{onClick:function(){return t(!1)},sx:{p:0,mr:{xs:-2,xsm:1}},children:(0,I.jsx)(h.Z,{sx:{color:"#F1F1F3",fontSize:"32px"},children:(0,I.jsx)(H.Z,{})})})},J=n(45555),q=function(e){var t=e.setOpen,n=(0,l.mV)().i18n,r=(0,J.f)().currentMarketData,o=(0,i.Z)().breakpoints,a=(0,s.Z)(o.down("md"));return(0,I.jsx)(v.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",md:"center"},flexDirection:{xs:"column",md:"row"}},disablePadding:!0,children:D.filter((function(e){return!e.isVisible||e.isVisible(r)})).map((function(e,r){return(0,I.jsx)(b.ZP,{sx:{width:{xs:"100%",md:"unset"},mr:{xs:0,md:2}},"data-cy":e.dataCy,disablePadding:!0,children:a?(0,I.jsx)(d.Z,{component:f.rU,href:e.link,variant:"h2",color:"#F1F1F3",sx:{width:"100%",p:4},onClick:function(){return t?t(!1):void 0},children:n._(e.title)}):(0,I.jsx)(x.Z,{component:f.rU,href:e.link,sx:function(e){return{color:"#F1F1F3",p:"6px 8px",position:"relative",".active&:after, &:hover&:after":{transform:"scaleX(1)",transformOrigin:"bottom left"},"&:after":{content:"''",position:"absolute",width:"100%",transform:"scaleX(0)",height:"2px",bottom:"-6px",left:"0",background:e.palette.gradients.aaveGradient,transformOrigin:"bottom right",transition:"transform 0.25s ease-out"}}},children:n._(e.title)})},r)}))})};function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}var Y=function(e){return a.createElement("svg",X({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),_||(_=a.createElement("rect",{width:1.5,height:9.768,rx:.75,transform:"scale(1 -1) rotate(-45 -14.46 -18.01)",fill:"#FF7F57"})),N||(N=a.createElement("path",{d:"M15.983 15.016v-6h-6",stroke:"#FF7F57",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))},K=function(e){var t=e.children,n=e.title;return(0,I.jsxs)(o.Z,{sx:{mb:6,"&:last-of-type":{mb:0,".MuiDivider-root":{display:"none"}}},children:[(0,I.jsxs)(o.Z,{sx:{px:2},children:[(0,I.jsx)(d.Z,{variant:"subheader2",sx:{color:"#A5A8B6",px:4,py:2},children:n}),t]}),(0,I.jsx)(w.Z,{sx:{borderColor:"#F2F3F729",mt:6}})]})},$=function(e){var t=e.open,n=e.setOpen,r=e.headerHeight,i=(0,l.mV)().i18n,s=(0,a.useState)(!1),c=s[0],d=s[1];return(0,a.useEffect)((function(){return d(!1)}),[t]),(0,I.jsxs)(I.Fragment,{children:[t?(0,I.jsx)(Q,{setOpen:n}):(0,I.jsx)(x.Z,{variant:"surface",sx:{p:"7px 8px",minWidth:"unset",ml:2},onClick:function(){return n(!0)},children:(0,I.jsx)(h.Z,{sx:{color:"#F1F1F3"},fontSize:"small",children:(0,I.jsx)(g.Z,{})})}),(0,I.jsx)(P,{open:t,setOpen:n,headerHeight:r,children:c?(0,I.jsx)(v.Z,{sx:{px:2},children:(0,I.jsx)(B,{onClick:function(){return d(!1)}})}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(K,{title:(0,I.jsx)(l.cC,{id:"Menu"}),children:(0,I.jsx)(q,{setOpen:n})}),(0,I.jsx)(K,{title:(0,I.jsx)(l.cC,{id:"Links"}),children:(0,I.jsx)(v.Z,{children:L.map((function(e,t){return(0,I.jsxs)(b.ZP,{component:f.rU,href:e.link,sx:{color:"#F1F1F3"},children:[(0,I.jsx)(Z.Z,{sx:{minWidth:"unset",mr:3},children:(0,I.jsx)(h.Z,{sx:{fontSize:"20px",color:"#F1F1F3"},children:e.icon})}),(0,I.jsx)(F.Z,{children:i._(e.title)}),(0,I.jsx)(o.Z,{ml:1,width:24,height:24,children:(0,I.jsx)(Y,{})})]},t)}))})})]})})]})},ee=n(50029),te=n(87794),ne=n.n(te),re=n(52758),ie=n(69977),se=n(84563),oe=n(74685),ae=n(13342),le=n(88078),ce=n(38333),de=n(84118),xe=n(18972),he=n(11288),ue=n.n(he),pe=n(97527),me=n.n(pe),fe=n(36920),je=n(96183),ge=n(75331),we=n(38197),ve=n(29251),be=(0,m.VH)(ge.a_.mainnet),Ze=function(e){var t=(0,a.useState)(void 0),n=t[0],r=t[1],i=(0,a.useState)(void 0),s=i[0],o=i[1],l=function(){var e=(0,ee.Z)(ne().mark((function e(t){var n;return ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be.lookupAddress(t);case 3:n=e.sent,r(n||void 0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("ENS name lookup error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var t=(0,ee.Z)(ne().mark((function t(n){var r,i;return ne().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=we.keccak256(ve.Y0(null===n||void 0===n?void 0:n.replace(".eth",""))),t.next=4,fetch("https://metadata.ens.domains/mainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/".concat(r,"/"));case 4:return t.next=6,t.sent.json();case 6:i=t.sent,o(i&&i.background_image?i.background_image:ue()(e)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("ENS avatar lookup error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){e?(o(ue()(e)),l(e)):r(void 0)}),[e]),(0,a.useEffect)((function(){n&&c(n)}),[n]),{name:n,avatar:s}},Fe=n(72005),ke=function(e,t,n){return"".concat(e.substr(0,t),"...").concat(e.substr(e.length-n,e.length))};function ye(e){var t=e.open,n=e.setOpen,r=e.headerHeight,c=(0,Fe.Z)(),u=c.disconnectWallet,p=c.currentAccount,j=c.connected,g=c.chainId,k=c.loading,y=(0,je.qr)().setWalletModalOpen,E=(0,i.Z)().breakpoints,C=(0,s.Z)(E.down("xsm")),S=(0,s.Z)(E.down("md")),T=Ze(p),O=T.name,_=T.avatar,N=O?O.length>18?ke(O,12,3):O:void 0,R=(0,a.useState)(!1),D=R[0],M=R[1],L=(0,a.useState)(null),A=L[0],W=L[1];(0,a.useEffect)((function(){_&&M(!1)}),[_]);var U=(0,m.Mo)(g),V="";V=null!==U&&void 0!==U&&U.isFork?"#ff4a8d":null!==U&&void 0!==U&&U.isTestnet?"#7157ff":"#65c970";var z=function(){n(!1)},B=function(){j&&(u(),z(),localStorage.removeItem("mockWalletAddress"))},H=function(){var e=(0,ee.Z)(ne().mark((function e(){return ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.clipboard.writeText(p),z();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=C&&(m.p8||m.aV),J=(0,I.jsx)(o.Z,{sx:{width:22,height:22,borderRadius:"50%",border:"1px solid #FAFBFC1F",img:{width:"100%",height:"100%",borderRadius:"50%"}},children:(0,I.jsx)("img",{src:D?ue()(""!==p?p:"default"):_,alt:"",onError:function(){return M(!0)}})}),q=(0,I.jsx)(I.Fragment,{});q=p?G?(0,I.jsx)(o.Z,{sx:{margin:"1px 0"},children:J}):(0,I.jsx)(I.Fragment,{children:null!==N&&void 0!==N?N:ke(p,4,4)}):(0,I.jsx)(l.cC,{id:"Connect wallet"});var X=function(e){var t=e.component,n=void 0===t?b.ZP:t;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d.Z,{variant:"subheader2",sx:{display:{xs:"block",md:"none"},color:"#A5A8B6",px:4,py:2},children:(0,I.jsx)(l.cC,{id:"Account"})}),(0,I.jsx)(o.Z,{component:n,disabled:!0,children:(0,I.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(o.Z,{sx:{width:40,height:40,borderRadius:"50%",border:"1px solid #FAFBFC1F",mr:3,img:{width:"100%",height:"100%",borderRadius:"50%"}},children:(0,I.jsx)("img",{src:D?ue()(""!==p?p:"default"):_,alt:"",onError:function(){return M(!0)}})}),(0,I.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[N&&(0,I.jsx)(d.Z,{variant:"h4",color:{xs:"#F1F1F3",md:"text.primary"},children:N}),(0,I.jsx)(d.Z,{variant:N?"caption":"h4",color:N?{xs:"#A5A8B6",md:"text.secondary"}:{xs:"#F1F1F3",md:"text.primary"},children:ke(p,N?12:7,4)})]})]})}),(0,I.jsx)(w.Z,{sx:{my:{xs:7,md:0},borderColor:{xs:"#FFFFFF1F",md:"divider"}}}),(0,I.jsx)(o.Z,{component:n,disabled:!0,children:(0,I.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,I.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1},children:(0,I.jsx)(d.Z,{variant:"caption",color:{xs:"#FFFFFFB2",md:"text.secondary"},children:(0,I.jsx)(l.cC,{id:"Network"})})}),(0,I.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(o.Z,{sx:{bgcolor:V,width:6,height:6,mr:2,boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",borderRadius:"50%"}}),(0,I.jsx)(d.Z,{color:{xs:"#F1F1F3",md:"text.primary"},variant:"subheader1",children:U.name})]})]})}),(0,I.jsx)(w.Z,{sx:{my:{xs:7,md:0},borderColor:{xs:"#FFFFFF1F",md:"divider"}}}),(0,I.jsxs)(o.Z,{component:n,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:H,children:[(0,I.jsx)(Z.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,I.jsx)(h.Z,{fontSize:"small",children:(0,I.jsx)(re.Z,{})})}),(0,I.jsx)(F.Z,{children:(0,I.jsx)(l.cC,{id:"Copy address"})})]}),(null===U||void 0===U?void 0:U.explorerLinkBuilder)&&(0,I.jsx)(f.rU,{href:U.explorerLinkBuilder({address:p}),children:(0,I.jsxs)(o.Z,{component:n,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:z,children:[(0,I.jsx)(Z.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,I.jsx)(h.Z,{fontSize:"small",children:(0,I.jsx)(se.Z,{})})}),(0,I.jsx)(F.Z,{children:(0,I.jsx)(l.cC,{id:"View on Explorer"})})]})}),(0,I.jsxs)(o.Z,{component:n,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:B,children:[(0,I.jsx)(Z.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,I.jsx)(h.Z,{fontSize:"small",children:(0,I.jsx)(ie.Z,{})})}),(0,I.jsx)(F.Z,{children:(0,I.jsx)(l.cC,{id:"Disconnect Wallet"})})]})]})};return(0,I.jsxs)(I.Fragment,{children:[S&&j&&t?(0,I.jsx)(Q,{setOpen:n}):k?(0,I.jsx)(le.Z,{height:36,width:126,sx:{background:"#FFFFFF20"}}):(0,I.jsx)(x.Z,{variant:j?"surface":"gradient","aria-label":"wallet",id:"wallet-button","aria-controls":t?"wallet-button":void 0,"aria-expanded":t?"true":void 0,"aria-haspopup":"true",onClick:function(e){j?(n(!0),W(e.currentTarget)):y(me())},sx:{p:j?"6px 16px":void 0,minWidth:G?"unset":void 0},startIcon:j&&!G&&J,endIcon:j&&!G&&(0,I.jsx)(h.Z,{sx:{display:{xs:"none",md:"block"}},children:t?(0,I.jsx)(oe.Z,{}):(0,I.jsx)(ae.Z,{})}),children:q}),S?(0,I.jsx)(P,{open:t,setOpen:n,headerHeight:r,children:(0,I.jsx)(v.Z,{sx:{px:2,".MuiListItem-root.Mui-disabled":{opacity:1}},children:(0,I.jsx)(X,{})})}):(0,I.jsx)(ce.Z,{id:"wallet-menu",MenuListProps:{"aria-labelledby":"wallet-button"},anchorEl:A,open:t,onClose:z,keepMounted:!0,children:(0,I.jsx)(de.Z,{disablePadding:!0,sx:{".MuiMenuItem-root.Mui-disabled":{opacity:1}},children:(0,I.jsx)(X,{component:xe.Z})})}),(0,I.jsx)(fe.x,{})]})}var Ee=n(70256);function Ce(){var e=(0,i.Z)().breakpoints,t=(0,s.Z)(e.down("md")),n=(0,s.Z)(e.down("sm")),r=(0,u.useRouter)(),g=(0,Fe.Z)(),w=g.currentAccount,v=g.chainId,b=(0,a.useState)(!1),Z=b[0],F=b[1],k=(0,a.useState)(!1),y=k[0],E=k[1];(0,a.useEffect)((function(){Z&&!t&&F(!1),y&&E(!1)}),[t]);var C="";C=window.location.pathname,(0,a.useEffect)((function(){Ee.Z.track("ScreenView:".concat(window.location.pathname),{networkId:v})}),[C]),(0,a.useEffect)((function(){w&&(Ee.Z.identify(w),Ee.Z.people.set({walletId:w}))}),[w]);var S=(0,I.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"start",gap:1},children:[(0,I.jsx)(d.Z,{variant:"subheader1",children:(0,I.jsx)(l.cC,{id:"Testnet mode is ON"})}),(0,I.jsxs)(d.Z,{variant:"description",children:[(0,I.jsx)(l.cC,{id:"MahaLend is running in testnet mode. Learn how it works in"})," ",(0,I.jsx)(f.rU,{href:"https://docs.google.com/document/d/1GxF398y4iSq6iMBk-ZxDkLI5FDbCx83OToF2QoYUeJw/edit?pli=1# ?",style:{fontSize:"14px",fontWeight:400,textDecoration:"underline"},children:"FAQ."})]}),(0,I.jsx)(x.Z,{variant:"outlined",sx:{mt:"12px"},onClick:function(){localStorage.setItem("testnetsEnabled","false"),r.reload()},children:(0,I.jsx)(l.cC,{id:"Disable testnet"})})]});return(0,I.jsxs)(o.Z,{component:"header",sx:function(e){return{height:75,position:"sticky",top:0,transition:e.transitions.create("top"),zIndex:e.zIndex.appBar,bgcolor:"background.header",padding:{xs:Z||y?"8px 20px":"8px 8px 8px 20px",xsm:"8px 20px"},display:"flex",alignItems:"center",flexDirection:"space-between",boxShadow:"inset 0px -1px 0px rgba(242, 243, 247, 0.16)"}},children:[(0,I.jsx)(o.Z,{component:f.rU,href:"/","aria-label":"Go to homepage",sx:{lineHeight:0,mr:3,transition:"0.3s ease all","&:hover":{opacity:.7}},onClick:function(){return F(!1)},children:(0,I.jsx)("img",{src:j,alt:"An SVG of an eye",height:36})}),(0,I.jsx)(o.Z,{sx:{mr:n?1:3},children:m.p8&&(0,I.jsx)(p.a,{tooltipContent:S,offset:[0,-4],withoutHover:!0,children:(0,I.jsxs)(x.Z,{variant:"surface",size:"small",color:"primary",sx:{backgroundColor:"#B6509E","&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(182, 80, 158, 0.7)"}},children:["TESTNET",(0,I.jsx)(h.Z,{sx:{marginLeft:"2px",fontSize:"16px"},children:(0,I.jsx)(c.Z,{})})]})})}),(0,I.jsx)(o.Z,{sx:{flexGrow:1}}),!Z&&(0,I.jsx)(ye,{open:y,setOpen:E,headerHeight:75}),!y&&(0,I.jsx)(o.Z,{sx:{display:{xs:"flex",md:"none"}},children:(0,I.jsx)($,{open:Z,setOpen:F,headerHeight:75})})]})}var Se=function(){var e=(0,l.mV)().i18n,t=(0,J.f)().currentMarketData,n="https://test.mahalend.com",r=encodeURI("I am participating in the @mahalend testnet campaign on the Goerli testnet to lend/borrow $ARTH");return(0,I.jsxs)("div",{className:"SidebarContainer",id:"sidebar_container",children:[(0,I.jsx)("div",{className:"TopSideBar",children:D.filter((function(e){return!e.isVisible||e.isVisible(t)})).map((function(t,n){return(0,I.jsx)("div",{children:(0,I.jsxs)(x.Z,{component:f.rU,href:t.link,sx:function(){return{color:"#FFFFFF",width:"100%",justifyContent:"flex-start",borderRadius:"2px",p:"8px 16px",fontWeight:"600",mb:"8px",position:"relative",".active&:after, &:hover&:after":{color:"white",transform:"scaleX(1)",transformOrigin:"bottom left"},"&:after":{color:"white",content:"''",position:"absolute",width:"100%",transform:"scaleX(0)",height:"100%",borderRadius:"2px",top:"0px",left:"0",background:"#FFFFFF16",transformOrigin:"bottom right",transition:"transform 0.25s ease-out"}}},children:[e._(t.title),t.showLinkArrow&&(0,I.jsx)(o.Z,{ml:1,width:24,height:24,children:(0,I.jsx)(Y,{})})]})},n)}))}),(0,I.jsxs)("div",{className:"BottomSideBar",children:[(0,I.jsx)("a",{className:"StyledLinkHref",href:"https://twitter.com/intent/tweet?text=".concat(r,"&url=").concat(n),target:"_blank",rel:"noreferrer",children:(0,I.jsxs)(o.Z,{alignItems:"center",display:"flex",children:[(0,I.jsx)("p",{children:"Twitter Share"}),(0,I.jsx)(Y,{})]})}),(0,I.jsx)("a",{className:"StyledLinkHref",href:"https://telegram.me/share/url?url=".concat(n,"&text=").concat(r),target:"_blank",rel:"noreferrer",children:(0,I.jsxs)(o.Z,{alignItems:"center",display:"flex",children:[(0,I.jsx)("p",{children:"Tele Share"}),(0,I.jsx)(Y,{})]})}),(0,I.jsx)("a",{className:"StyledLinkHref",href:"https://defillama.com/protocol/mahalend",target:"_blank",rel:"noreferrer",children:(0,I.jsxs)(o.Z,{alignItems:"center",display:"flex",children:[(0,I.jsx)("p",{children:"TVL"}),(0,I.jsx)(Y,{})]})}),(0,I.jsx)("a",{className:"StyledLinkHref",href:"https://docs.mahalend.com/",target:"_blank",rel:"noreferrer",children:(0,I.jsxs)(o.Z,{alignItems:"center",display:"flex",children:[(0,I.jsx)("p",{children:"Documentation"}),(0,I.jsx)(Y,{})]})})]})]})};function Te(e){var t=e.children,n=(0,i.Z)().breakpoints,r=(0,s.Z)(n.up("lg"));return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(o.Z,{py:2,textAlign:"center",bgcolor:"rgb(66, 59, 56)",color:"rgb(252, 180, 0)",children:["MahaLend is currently in Alpha. Expect bug fixes and improvements."," ",(0,I.jsx)("a",{href:"https://docs.google.com/document/d/1GxF398y4iSq6iMBk-ZxDkLI5FDbCx83OToF2QoYUeJw/edit?pli=1# ?",style:{color:"rgb(252, 180, 0) !important"},children:"Read more"})]}),(0,I.jsx)(Ce,{}),(0,I.jsxs)(o.Z,{component:"main",sx:{display:"flex",flexDirection:"row",flex:1},children:[(0,I.jsx)(o.Z,{children:(0,I.jsx)(Se,{})}),(0,I.jsx)(o.Z,{flex:1,style:r?{marginLeft:"232px"}:{maxWidth:"100vw"},children:t})]})]})}}}]);