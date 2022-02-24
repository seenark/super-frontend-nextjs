"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{9742:function(e,r,t){t.d(r,{h:function(){return h}});var n=t(4051),u=t.n(n),a=t(7294),c=t(6076),s=t(6237),o=t(9416),l=t(8912),i=t(320);function f(e,r,t,n,u,a,c){try{var s=e[a](c),o=s.value}catch(l){return void t(l)}s.done?r(o):Promise.resolve(o).then(n,u)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,u){var a=e.apply(r,t);function c(e){f(a,n,u,c,s,"next",e)}function s(e){f(a,n,u,c,s,"throw",e)}c(void 0)}))}}function h(){var e=(0,i.K)().signer,r=(0,a.useCallback)((function(){return function(){var r=p(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return",Promise.reject("no account"));case 2:return t=l._.exchange,n=new c.CH(t.address,t.abi,e),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()()}),[e]),t=(0,a.useCallback)((function(e,t){return function(){var n=p(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:return a=n.sent,n.next=6,a.sellFutureContract(e,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[r]),n=(0,a.useCallback)((function(e,t){return function(){var n=p(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:return a=n.sent,n.next=6,a.buyFutureContract(e,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[r]),f=(0,a.useCallback)((function(e,t){return function(){var n=p(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:return a=n.sent,n.next=6,a.cancelSell(e,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[r]),h=(0,a.useCallback)((function(e){return function(){var t=p(u().mark((function t(){var n,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:return n=t.sent,t.next=5,n.fetchOpenTradeBySellId(e);case 5:return a=t.sent,c={sellId:a.sellId.toNumber(),seller:a.seller,futureTokenId:a.futureTokenId.toNumber(),amount:a.amount.toNumber(),status:s.F(a.status)},t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[r]),d=(0,a.useCallback)((function(){return function(){var e=p(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r();case 3:return t=e.sent,e.next=6,t.fetchAllOpenTrade();case 6:return n=e.sent,e.abrupt("return",n.map((function(e){return{sellId:e.sellId.toNumber(),amount:e.amount.toNumber(),futureTokenId:e.futureTokenId.toNumber(),seller:e.seller,status:s.F(e.status)}})));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),v=(0,a.useCallback)((function(e,t){return function(){var n=p(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:return a=n.sent,n.next=6,a.redeemFromToken(e,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[r]),m=(0,a.useCallback)((function(e,t){return function(){var n=p(u().mark((function n(){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:return a=n.sent,n.next=6,a.redeemFromFutureContract(e,t);case 6:return c=n.sent,n.next=9,c.wait();case 9:return n.abrupt("return",c.hash);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[r]),x=(0,a.useCallback)((function(e){return function(){var t=p(u().mark((function t(){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r();case 3:return n=t.sent,t.next=6,n.fetchAllRedeemedFutureContractByFutureTokenId(e);case 6:return a=t.sent,t.abrupt("return",a.map((function(e){return{customer:e.customer,tokenId:e.futureTokenId.toNumber(),amount:e.amount.toNumber()}})));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()()}),[r]),b=(0,a.useCallback)((function(e){return p(u().mark((function t(){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r();case 3:n=t.sent,a=n.filters.OpenTradeCreated(),n.on(a,(function(r,t,n,u,a){console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ status",a),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ amount",u),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ futureTokenId",n),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ seller",t),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ sellId",r),e()})),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[r]),k=(0,a.useCallback)((function(){var e=l._.exchange;return p(u().mark((function r(){var t,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=new o.D("rinkeby","NSrFQNQqovk-vshBkby78flaBhwVZ0En"),n=new c.CH(e.address,e.abi,t),console.log("address",n.address),a=n.filters.OpenTradeCreated(),n.on(a,(function(e,r,t,n,u){console.log("created from alchemy"),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ status",u),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ amount",n),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ futureTokenId",t),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ seller",r),console.log("\ud83d\ude80 ~ file: useExchange.ts ~ line 189 ~ contract.on ~ sellId",e)}));case 5:case"end":return r.stop()}}),r)})))()}),[]);return{getExchangeContract:r,onSell:t,onBuy:n,getOpenTrade:h,getAllOpenTrades:d,cancelSell:f,redeemFromToken:v,getUsedFutureToken:x,redeemFromFutureContract:m,onOpenTradeCreated:b,onOpenTradeCreated2:k}}}}]);