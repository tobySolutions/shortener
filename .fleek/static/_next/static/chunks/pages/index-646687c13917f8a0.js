(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(34412)}])},34412:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),a=n(67294),s=n(4266),l=n(92321),o=n(81134),i=n(82002),c=n(32589),d=n(7583),u=JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"shortCode","type":"string"},{"indexed":false,"internalType":"string","name":"longUrl","type":"string"}],"name":"URLShortened","type":"event"},{"inputs":[{"internalType":"string","name":"shortCode","type":"string"}],"name":"getURL","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"shortCode","type":"string"},{"internalType":"string","name":"longUrl","type":"string"}],"name":"setURL","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');function g(){let[e,t]=(0,a.useState)(""),[n,g]=(0,a.useState)(""),[p,x]=(0,a.useState)(""),[h,y]=(0,a.useState)(""),[f,m]=(0,a.useState)(""),{address:w,isConnected:b}=(0,l.m)(),{data:k}=(0,o.p)(),N=(0,i.x)(),[j,v]=(0,a.useState)(null);async function S(){if(x(""),!b){alert("Please connect your wallet first.");return}if(421614!==N){alert("Please switch to the Sepolia testnet in your wallet.");return}if(!e||!n){alert("Please enter both a short code and a long URL.");return}if(!j){alert("No signer available. Please ensure your wallet is connected.");return}try{x("Transaction pending...");let t=new d.CH("0x2729D62B3cde6fd2263dF5e3c6509F87C6C05892",u.M,j);console.log("Sending transaction to set URL:",{shortCode:e,longUrl:n});let r=await t.setURL(e,n);x("Transaction sent. Hash: ".concat(r.hash)),await r.wait();let a="".concat(window.location.origin,"/").concat(e);y(a),x("Transaction successful!"),console.log("Shortened URL: ".concat(a))}catch(e){console.error("Error during shortenURL:",e),x("Error occurred during transaction.")}}return(0,a.useEffect)(()=>{window.ethereum&&b&&k?new s.Q(window.ethereum).getSigner().then(v).catch(console.error):v(null)},[b,k]),(0,a.useEffect)(()=>{b&&421614!==N?x("Please switch to the Sepolia testnet in your wallet."):x("")},[b,N]),(0,r.jsx)("div",{className:"min-h-screen bg-gray-dark-1 flex items-center justify-center px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"w-full max-w-md space-y-8 bg-gray-dark-2 p-10 rounded-xl shadow-2xl border border-gray-dark-4",children:[(0,r.jsx)("h1",{className:"text-3xl text-center font-extrabold text-yellow-dark-9",children:"Web3 URL Shortener"}),(0,r.jsx)("div",{className:"flex sm:flex-row justify-center items-center gap-4",children:(0,r.jsx)(c.NL,{})}),(0,r.jsxs)("div",{className:"mt-8 space-y-6",children:[b&&(0,r.jsxs)("p",{className:"text-center text-sm text-gray-dark-11",children:["Connected: ",null==w?void 0:w.slice(0,6),"...",null==w?void 0:w.slice(-4)]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"shortCode",className:"sr-only",children:"Short code"}),(0,r.jsx)("input",{id:"shortCode",type:"text",placeholder:"Short code (e.g. abc123)",value:e,onChange:e=>t(e.target.value),className:"w-full text-black px-3 py-2 bg-gray-dark-3 border border-gray-dark-6 rounded-md placeholder-gray-dark-8 text-gray-dark-12 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:border-transparent"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"longUrl",className:"sr-only",children:"Long URL"}),(0,r.jsx)("input",{id:"longUrl",type:"text",placeholder:"Long URL (e.g. https://example.com)",value:n,onChange:e=>g(e.target.value),className:"w-full px-3 text-black py-2 bg-gray-dark-3 border border-gray-dark-6 rounded-md placeholder-gray-dark-8 text-gray-dark-12 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:border-transparent"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:S,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium ".concat(b&&!p.includes("Transaction pending")?"bg-yellow-600 text-gray-dark-1 hover:bg-yellow-dark-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-dark-9":"bg-yellow-900 text-gray-dark-8 cursor-not-allowed"),disabled:!b||p.includes("Transaction pending"),children:p.includes("Transaction pending")?"Processing...":"Shorten"})})]}),p&&(0,r.jsx)("div",{className:"mt-4 text-center",children:(0,r.jsx)("p",{className:"font-medium break-words ".concat(p.includes("Error")?"text-red-dark-11":"text-yellow-dark-11"),children:p})}),h&&(0,r.jsxs)("div",{className:"mt-4 text-center",children:[(0,r.jsxs)("p",{className:"font-medium text-yellow-dark-9",children:["Shortened URL:"," ",(0,r.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"underline",children:h}),(0,r.jsx)("button",{onClick:()=>{h&&(navigator.clipboard.writeText(h),m("Copied!"),setTimeout(()=>m(""),2e3))},className:"ml-2 text-sm text-yellow-400 hover:text-yellow-dark-10 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:ring-offset-2 rounded",children:"Copy"})]}),f&&(0,r.jsx)("p",{className:"text-yellow-dark-11 mt-2",children:f})]})]})})}}},function(e){e.O(0,[4884,2888,9774,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);