(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{6237:function(r,e,t){"use strict";t.d(e,{s:function(){return c},F:function(){return s}});var n=t(7218),u=t(6441),a=t(9251);function c(r){const e=(0,a.Y0)(r);if(e.length>31)throw new Error("bytes32 string must be less than 32 bytes");return(0,u.Dv)((0,u.zo)([e,n.R]).slice(0,32))}function s(r){const e=(0,u.lE)(r);if(32!==e.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==e[31])throw new Error("invalid bytes32 string - no null terminator");let t=31;for(;0===e[t-1];)t--;return(0,a.ZN)(e.slice(0,t))}},3819:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/redeemed",function(){return t(8956)}])},9742:function(r,e,t){"use strict";t.d(e,{h:function(){return p}});var n=t(4051),u=t.n(n),a=t(7294),c=t(6076),s=t(6237),o=t(9874),i=t(8301);function f(r,e,t,n,u,a,c){try{var s=r[a](c),o=s.value}catch(i){return void t(i)}s.done?e(o):Promise.resolve(o).then(n,u)}function l(r){return function(){var e=this,t=arguments;return new Promise((function(n,u){var a=r.apply(e,t);function c(r){f(a,n,u,c,s,"next",r)}function s(r){f(a,n,u,c,s,"throw",r)}c(void 0)}))}}function p(){var r=(0,i.K)().signer,e=(0,a.useCallback)((function(){return function(){var e=l(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",Promise.reject("no account"));case 2:return t=o._.exchange,n=new c.CH(t.address,t.abi,r),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),t=(0,a.useCallback)((function(r,t){return function(){var n=l(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:return a=n.sent,n.next=6,a.sell(r,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),n=(0,a.useCallback)((function(r,t){return function(){var n=l(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:return a=n.sent,n.next=6,a.buy(r,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),f=(0,a.useCallback)((function(r){return function(){var t=l(u().mark((function t(){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:return n=t.sent,t.next=6,n.cancelSell(r);case 6:return a=t.sent,t.next=9,a.wait();case 9:return t.abrupt("return",a.hash);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),p=(0,a.useCallback)((function(r){return function(){var t=l(u().mark((function t(){var n,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return n=t.sent,t.next=5,n.openForTrades(r);case 5:return a=t.sent,c={sellId:a.sellId.toNumber(),seller:a.seller,futureTokenId:a.futureTokenId.toNumber(),amount:a.amount.toNumber(),status:s.F(a.status)},t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),v=(0,a.useCallback)((function(){return function(){var r=l(u().mark((function r(){var t,n,a,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e();case 3:return t=r.sent,r.next=6,t.getAllSellIdOpenForTrades();case 6:return n=r.sent,a=n.map((function(r){return p(r.toNumber())})),r.next=10,Promise.all(a);case 10:return c=r.sent,r.abrupt("return",c);case 14:return r.prev=14,r.t0=r.catch(0),r.abrupt("return",Promise.reject(r.t0));case 17:case"end":return r.stop()}}),r,null,[[0,14]])})));return function(){return r.apply(this,arguments)}}()()}),[e,p]),h=(0,a.useCallback)((function(r,t){return function(){var n=l(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:return a=n.sent,n.next=6,a.redeemFromToken(r,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),d=(0,a.useCallback)((function(r,t){return function(){var n=l(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:return a=n.sent,n.next=6,a.redeemFromNFT(r,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),m=(0,a.useCallback)((function(){return function(){var r=l(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e();case 3:return t=r.sent,r.next=6,t.getUsedNFTs();case 6:return n=r.sent,r.abrupt("return",n.map((function(r){return{customer:r.customer,tokenId:r.tokenId.toNumber(),amount:r.amount.toNumber()}})));case 10:return r.prev=10,r.t0=r.catch(0),r.abrupt("return",Promise.reject(r.t0));case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}()()}),[e]);return{getExchangeContract:e,onSell:t,onBuy:n,getOpenTrade:p,getAllOpenTrades:v,cancelSell:f,redeemFromToken:h,getUsedFutureToken:m,redeemFromFutureContract:d}}},8956:function(r,e,t){"use strict";t.r(e);var n=t(4051),u=t.n(n),a=t(5893),c=t(7294),s=t(9742);function o(r,e,t,n,u,a,c){try{var s=r[a](c),o=s.value}catch(i){return void t(i)}s.done?e(o):Promise.resolve(o).then(n,u)}e.default=function(r){var e=(0,s.h)().getUsedFutureToken,t=(0,c.useState)(),n=t[0],i=t[1];return(0,c.useEffect)((function(){(function(){var r,t=(r=u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:t=r.sent,i(t);case 4:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,u){var a=r.apply(e,t);function c(r){o(a,n,u,c,s,"next",r)}function s(r){o(a,n,u,c,s,"throw",r)}c(void 0)}))});return function(){return t.apply(this,arguments)}})()()}),[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-[40px]",children:"Redeemed"}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{children:"List"}),null===n||void 0===n?void 0:n.map((function(r,e){return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:["ID: ",r.tokenId]}),(0,a.jsxs)("div",{children:["customer: ",r.customer]}),(0,a.jsxs)("div",{children:["amount: ",r.amount]}),(0,a.jsx)("hr",{})]},e)}))]})}}},function(r){r.O(0,[774,888,179],(function(){return e=3819,r(r.s=e);var e}));var e=r.O();_N_E=e}]);