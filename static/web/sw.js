if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-404b27ce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6C0KqX3DS8RnbUpS-Et4j/_buildManifest.js",revision:"56ffcd8b5bcda5f386cdc49fcbce2816"},{url:"/_next/static/6C0KqX3DS8RnbUpS-Et4j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1027.6ff58c73d32252d3.js",revision:"6ff58c73d32252d3"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/108.1167392b63feba04.js",revision:"1167392b63feba04"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/1189.11bd4390e96fb8ce.js",revision:"11bd4390e96fb8ce"},{url:"/_next/static/chunks/1390.26e23517cb1e5bd1.js",revision:"26e23517cb1e5bd1"},{url:"/_next/static/chunks/1446.729b459281b981b9.js",revision:"729b459281b981b9"},{url:"/_next/static/chunks/1483.cb14b23fbe608c06.js",revision:"cb14b23fbe608c06"},{url:"/_next/static/chunks/1639.a69f56d8e2858f44.js",revision:"a69f56d8e2858f44"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1680.d8ee397f0e194af8.js",revision:"d8ee397f0e194af8"},{url:"/_next/static/chunks/1706.cc34054ebca747bc.js",revision:"cc34054ebca747bc"},{url:"/_next/static/chunks/177.32fd73f7cb9e86f7.js",revision:"32fd73f7cb9e86f7"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1825.397259b245d1fbc7.js",revision:"397259b245d1fbc7"},{url:"/_next/static/chunks/1827.b365335f7642b9f0.js",revision:"b365335f7642b9f0"},{url:"/_next/static/chunks/1873.ad239337a916524b.js",revision:"ad239337a916524b"},{url:"/_next/static/chunks/1901.3583c142888e3100.js",revision:"3583c142888e3100"},{url:"/_next/static/chunks/1920.69952d11b23d14f9.js",revision:"69952d11b23d14f9"},{url:"/_next/static/chunks/1933.ec0e591b7b44dc81.js",revision:"ec0e591b7b44dc81"},{url:"/_next/static/chunks/1941-a11a67f10ea109c9.js",revision:"a11a67f10ea109c9"},{url:"/_next/static/chunks/2016-c26fd7a832fc691c.js",revision:"c26fd7a832fc691c"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2043-086aabecf18c12d7.js",revision:"086aabecf18c12d7"},{url:"/_next/static/chunks/2064.48eeca8a9bd40aea.js",revision:"48eeca8a9bd40aea"},{url:"/_next/static/chunks/2087.a29fade92a1d8e83.js",revision:"a29fade92a1d8e83"},{url:"/_next/static/chunks/2119.56737871073263a3.js",revision:"56737871073263a3"},{url:"/_next/static/chunks/2136.d79aae5ef8b027c6.js",revision:"d79aae5ef8b027c6"},{url:"/_next/static/chunks/2200.984fffa57a9d939c.js",revision:"984fffa57a9d939c"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2281.06539453e58fc4d6.js",revision:"06539453e58fc4d6"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2386.4ea76c10cc41063a.js",revision:"4ea76c10cc41063a"},{url:"/_next/static/chunks/2391.21f547b8f9847885.js",revision:"21f547b8f9847885"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/247-7a796e2fc791358c.js",revision:"7a796e2fc791358c"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2552-8dc10ba201256c68.js",revision:"8dc10ba201256c68"},{url:"/_next/static/chunks/2554.005d88575221227f.js",revision:"005d88575221227f"},{url:"/_next/static/chunks/2601.8c838faccbc6be92.js",revision:"8c838faccbc6be92"},{url:"/_next/static/chunks/2602.3b2af210da49468a.js",revision:"3b2af210da49468a"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2741.8231008443fa6edf.js",revision:"8231008443fa6edf"},{url:"/_next/static/chunks/2785.91714c716dbbe631.js",revision:"91714c716dbbe631"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/310.95258934d617ae2c.js",revision:"95258934d617ae2c"},{url:"/_next/static/chunks/3109-9bcae529e12170ff.js",revision:"9bcae529e12170ff"},{url:"/_next/static/chunks/3153.02bc1a9f6aa99694.js",revision:"02bc1a9f6aa99694"},{url:"/_next/static/chunks/3203.cbe74052c374223c.js",revision:"cbe74052c374223c"},{url:"/_next/static/chunks/3221.40e3dd7084079922.js",revision:"40e3dd7084079922"},{url:"/_next/static/chunks/3236.8291fb954b2f2a97.js",revision:"8291fb954b2f2a97"},{url:"/_next/static/chunks/3243-4c07320f9cda5ae2.js",revision:"4c07320f9cda5ae2"},{url:"/_next/static/chunks/3274.6c13c86880b3203a.js",revision:"6c13c86880b3203a"},{url:"/_next/static/chunks/3283.0c55fd8a1a0f7c80.js",revision:"0c55fd8a1a0f7c80"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/3430.66d6de28e16fb449.js",revision:"66d6de28e16fb449"},{url:"/_next/static/chunks/3439.23dadf52c93ac021.js",revision:"23dadf52c93ac021"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.b3d99b2815ff8ca5.js",revision:"b3d99b2815ff8ca5"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3520-d410d843bc663851.js",revision:"d410d843bc663851"},{url:"/_next/static/chunks/3594.9e1a7395d1fc565d.js",revision:"9e1a7395d1fc565d"},{url:"/_next/static/chunks/370.0a341b2da3b6a0db.js",revision:"0a341b2da3b6a0db"},{url:"/_next/static/chunks/3745-e958c59ec4b27eb5.js",revision:"e958c59ec4b27eb5"},{url:"/_next/static/chunks/3747.36e9ea225d543396.js",revision:"36e9ea225d543396"},{url:"/_next/static/chunks/3801.45b6d75d858684ca.js",revision:"45b6d75d858684ca"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/389-5f61ccc92ceabbae.js",revision:"5f61ccc92ceabbae"},{url:"/_next/static/chunks/3908-3456978157c9c8e8.js",revision:"3456978157c9c8e8"},{url:"/_next/static/chunks/3909-4be9f179c5de3457.js",revision:"4be9f179c5de3457"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/40.69df45cdc393ad19.js",revision:"69df45cdc393ad19"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4118.3202918e95dcb817.js",revision:"3202918e95dcb817"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/416.d24189b45a3a80ac.js",revision:"d24189b45a3a80ac"},{url:"/_next/static/chunks/4163.0e0c9ed3e1aa5112.js",revision:"0e0c9ed3e1aa5112"},{url:"/_next/static/chunks/4205.4d0a43a935dc3099.js",revision:"4d0a43a935dc3099"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/422.5c61663cffb31d91.js",revision:"5c61663cffb31d91"},{url:"/_next/static/chunks/4262.007de8e037824de7.js",revision:"007de8e037824de7"},{url:"/_next/static/chunks/4293.7b5c769ac9f34b69.js",revision:"7b5c769ac9f34b69"},{url:"/_next/static/chunks/4323.9603162e5cba433d.js",revision:"9603162e5cba433d"},{url:"/_next/static/chunks/4324.50c9cde0cfeb4ce8.js",revision:"50c9cde0cfeb4ce8"},{url:"/_next/static/chunks/4354.3ff4c2469555cf14.js",revision:"3ff4c2469555cf14"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/4511.949892f0fb796cb1.js",revision:"949892f0fb796cb1"},{url:"/_next/static/chunks/4657-254cbfb1075b56b5.js",revision:"254cbfb1075b56b5"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4804.aca550fe022aac23.js",revision:"aca550fe022aac23"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4879.2d2fd34b79f431f5.js",revision:"2d2fd34b79f431f5"},{url:"/_next/static/chunks/4940.162580f1c107dfde.js",revision:"162580f1c107dfde"},{url:"/_next/static/chunks/4943.651adb0c50bdf2ea.js",revision:"651adb0c50bdf2ea"},{url:"/_next/static/chunks/4970-2a375f4833d56cca.js",revision:"2a375f4833d56cca"},{url:"/_next/static/chunks/4992-6afd062e2da95c32.js",revision:"6afd062e2da95c32"},{url:"/_next/static/chunks/4997.81fc08868e749c91.js",revision:"81fc08868e749c91"},{url:"/_next/static/chunks/4ad82c5e-6b51d8499a192743.js",revision:"6b51d8499a192743"},{url:"/_next/static/chunks/5062.b8e0a7af076d0316.js",revision:"b8e0a7af076d0316"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/5148.fc0454269c1a212a.js",revision:"fc0454269c1a212a"},{url:"/_next/static/chunks/520.9ac879d0b9da7d2b.js",revision:"9ac879d0b9da7d2b"},{url:"/_next/static/chunks/5231.9777939b102ccddc.js",revision:"9777939b102ccddc"},{url:"/_next/static/chunks/5244-4f9e15ba4f9d481a.js",revision:"4f9e15ba4f9d481a"},{url:"/_next/static/chunks/5275.6b69dd5f059f2faa.js",revision:"6b69dd5f059f2faa"},{url:"/_next/static/chunks/5295.b1a4f303b934e12a.js",revision:"b1a4f303b934e12a"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/548-b975367e7f77cd99.js",revision:"b975367e7f77cd99"},{url:"/_next/static/chunks/5509.d77e7fe16c15548d.js",revision:"d77e7fe16c15548d"},{url:"/_next/static/chunks/5584.f2636c43774cfa50.js",revision:"f2636c43774cfa50"},{url:"/_next/static/chunks/5627.5b9c434fcc90668e.js",revision:"5b9c434fcc90668e"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/5683.66759b33e8ac8a8e.js",revision:"66759b33e8ac8a8e"},{url:"/_next/static/chunks/5686.aaaedff9ad117c2a.js",revision:"aaaedff9ad117c2a"},{url:"/_next/static/chunks/5727-d6ec2a7bac99071c.js",revision:"d6ec2a7bac99071c"},{url:"/_next/static/chunks/5753.e3f8077ac4a7ad1b.js",revision:"e3f8077ac4a7ad1b"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5861.fb1a6df662ad7209.js",revision:"fb1a6df662ad7209"},{url:"/_next/static/chunks/5879.e0ef43b09c377987.js",revision:"e0ef43b09c377987"},{url:"/_next/static/chunks/5888-2178093f9dc5d64a.js",revision:"2178093f9dc5d64a"},{url:"/_next/static/chunks/5889.d56da509c410435f.js",revision:"d56da509c410435f"},{url:"/_next/static/chunks/5903.1b43828ffd32b1d4.js",revision:"1b43828ffd32b1d4"},{url:"/_next/static/chunks/598.6e8666c2017510f3.js",revision:"6e8666c2017510f3"},{url:"/_next/static/chunks/6037.7d34f31df4828b36.js",revision:"7d34f31df4828b36"},{url:"/_next/static/chunks/6062.8312a369a57e3fc3.js",revision:"8312a369a57e3fc3"},{url:"/_next/static/chunks/6073.e5520c30da1cdb5b.js",revision:"e5520c30da1cdb5b"},{url:"/_next/static/chunks/6092.d604d5262c942c63.js",revision:"d604d5262c942c63"},{url:"/_next/static/chunks/6113-1679e429fef4225c.js",revision:"1679e429fef4225c"},{url:"/_next/static/chunks/6121.180a26197797b621.js",revision:"180a26197797b621"},{url:"/_next/static/chunks/6169.e5a3f406ceb58c7a.js",revision:"e5a3f406ceb58c7a"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/6227.9e2cab893e0401ea.js",revision:"9e2cab893e0401ea"},{url:"/_next/static/chunks/6356-0d32c2c07406de50.js",revision:"0d32c2c07406de50"},{url:"/_next/static/chunks/6362.e9aa70da99223a2a.js",revision:"e9aa70da99223a2a"},{url:"/_next/static/chunks/6370.84971e9658646392.js",revision:"84971e9658646392"},{url:"/_next/static/chunks/6386.af6ba566a04dba03.js",revision:"af6ba566a04dba03"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6471.8d3d51f0a565139c.js",revision:"8d3d51f0a565139c"},{url:"/_next/static/chunks/6482.cda3a34de7e47aeb.js",revision:"cda3a34de7e47aeb"},{url:"/_next/static/chunks/6527.51ed6e2107b66d5c.js",revision:"51ed6e2107b66d5c"},{url:"/_next/static/chunks/6598.a96d67875e973e89.js",revision:"a96d67875e973e89"},{url:"/_next/static/chunks/6627-f11d8b21aa727192.js",revision:"f11d8b21aa727192"},{url:"/_next/static/chunks/6632-24a2bb9822000d3b.js",revision:"24a2bb9822000d3b"},{url:"/_next/static/chunks/6646.c2da52b1cb73c28b.js",revision:"c2da52b1cb73c28b"},{url:"/_next/static/chunks/6655-d4982cb034811c89.js",revision:"d4982cb034811c89"},{url:"/_next/static/chunks/6665.3b98dde37384ff53.js",revision:"3b98dde37384ff53"},{url:"/_next/static/chunks/6679.9bb5320070650fa0.js",revision:"9bb5320070650fa0"},{url:"/_next/static/chunks/6692.e42dfb241035b482.js",revision:"e42dfb241035b482"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.84304dd7b14dbeb2.js",revision:"84304dd7b14dbeb2"},{url:"/_next/static/chunks/6782-822c994474296f16.js",revision:"822c994474296f16"},{url:"/_next/static/chunks/6880-dee4c4ed599c925a.js",revision:"dee4c4ed599c925a"},{url:"/_next/static/chunks/6896-1b58c0f41be2a26a.js",revision:"1b58c0f41be2a26a"},{url:"/_next/static/chunks/6919-a4900fdfd366e53d.js",revision:"a4900fdfd366e53d"},{url:"/_next/static/chunks/6956-f1dcd07b24e0aa80.js",revision:"f1dcd07b24e0aa80"},{url:"/_next/static/chunks/6985.eb79d5fb196608e0.js",revision:"eb79d5fb196608e0"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.5485d8645b90f0e1.js",revision:"5485d8645b90f0e1"},{url:"/_next/static/chunks/7023.e35aefaf0f207d57.js",revision:"e35aefaf0f207d57"},{url:"/_next/static/chunks/7037.7bad4cc46eb16f45.js",revision:"7bad4cc46eb16f45"},{url:"/_next/static/chunks/7085.e6449c4e6421941a.js",revision:"e6449c4e6421941a"},{url:"/_next/static/chunks/7122-0f5c94dc81f8bbfc.js",revision:"0f5c94dc81f8bbfc"},{url:"/_next/static/chunks/7158.75e2a10a602b0e73.js",revision:"75e2a10a602b0e73"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7254.c6c21bcbd302c0c7.js",revision:"c6c21bcbd302c0c7"},{url:"/_next/static/chunks/7268.227e212422d7c874.js",revision:"227e212422d7c874"},{url:"/_next/static/chunks/7309.0f5c5212db47ceea.js",revision:"0f5c5212db47ceea"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7330.8a5c72ac5713b643.js",revision:"8a5c72ac5713b643"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.20336fca6f462b00.js",revision:"20336fca6f462b00"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7489.201fbae634ef9e07.js",revision:"201fbae634ef9e07"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/7544-3640aaffad6fa2f0.js",revision:"3640aaffad6fa2f0"},{url:"/_next/static/chunks/7573-61d83f17d08c2217.js",revision:"61d83f17d08c2217"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.a8c9805be41684e2.js",revision:"a8c9805be41684e2"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7663.86973451931fd69d.js",revision:"86973451931fd69d"},{url:"/_next/static/chunks/7674-842152a1aa9e8117.js",revision:"842152a1aa9e8117"},{url:"/_next/static/chunks/7679.2b15ccd7957e7b89.js",revision:"2b15ccd7957e7b89"},{url:"/_next/static/chunks/7719.e56b432e64f8bffd.js",revision:"e56b432e64f8bffd"},{url:"/_next/static/chunks/7736-5cb520ff32724a9a.js",revision:"5cb520ff32724a9a"},{url:"/_next/static/chunks/7741.7030bf5313e605c6.js",revision:"7030bf5313e605c6"},{url:"/_next/static/chunks/7762.97de838d8f13b395.js",revision:"97de838d8f13b395"},{url:"/_next/static/chunks/779-4c766c6b7c490c0d.js",revision:"4c766c6b7c490c0d"},{url:"/_next/static/chunks/784.9b31d5097d13fe5e.js",revision:"9b31d5097d13fe5e"},{url:"/_next/static/chunks/7917.5c7bddf6daba650e.js",revision:"5c7bddf6daba650e"},{url:"/_next/static/chunks/7988.264688b19c03433e.js",revision:"264688b19c03433e"},{url:"/_next/static/chunks/8007.6987b3bff73d0ba1.js",revision:"6987b3bff73d0ba1"},{url:"/_next/static/chunks/8018.da0e88bf7a1593d2.js",revision:"da0e88bf7a1593d2"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8072.42a98db944388924.js",revision:"42a98db944388924"},{url:"/_next/static/chunks/8142.ae9991011f01f5e0.js",revision:"ae9991011f01f5e0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8217.bbafe00cdd24ce55.js",revision:"bbafe00cdd24ce55"},{url:"/_next/static/chunks/8283.56888ee351ada4c6.js",revision:"56888ee351ada4c6"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8417.67edb2137fce2005.js",revision:"67edb2137fce2005"},{url:"/_next/static/chunks/8468.9aa93610d4b2f568.js",revision:"9aa93610d4b2f568"},{url:"/_next/static/chunks/8499.db4403036482eaed.js",revision:"db4403036482eaed"},{url:"/_next/static/chunks/8520.a388ed488a3c1323.js",revision:"a388ed488a3c1323"},{url:"/_next/static/chunks/8543.54d6c5f6fdebed04.js",revision:"54d6c5f6fdebed04"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/8684-02a115a8b2bcc950.js",revision:"02a115a8b2bcc950"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/874.0cdf0a4c8bab5373.js",revision:"0cdf0a4c8bab5373"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8810-4693de32f0435780.js",revision:"4693de32f0435780"},{url:"/_next/static/chunks/8813.02694305feb42871.js",revision:"02694305feb42871"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8905-16663d408b5aa2e1.js",revision:"16663d408b5aa2e1"},{url:"/_next/static/chunks/8915.47932f86417996a7.js",revision:"47932f86417996a7"},{url:"/_next/static/chunks/8943.134e87976832fa3b.js",revision:"134e87976832fa3b"},{url:"/_next/static/chunks/9043.c18a10f0cde793a7.js",revision:"c18a10f0cde793a7"},{url:"/_next/static/chunks/9062-b6d9b795e08b84c9.js",revision:"b6d9b795e08b84c9"},{url:"/_next/static/chunks/9069.bdb9527c998b5088.js",revision:"bdb9527c998b5088"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/912.51c1ea0865aea686.js",revision:"51c1ea0865aea686"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.c8b958eb1c154d33.js",revision:"c8b958eb1c154d33"},{url:"/_next/static/chunks/9178-b386332cddf22f6a.js",revision:"b386332cddf22f6a"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/9265.d5d0f02539e34b20.js",revision:"d5d0f02539e34b20"},{url:"/_next/static/chunks/9296.553274ed12ae2963.js",revision:"553274ed12ae2963"},{url:"/_next/static/chunks/9349.e6c166b4c6b3bce8.js",revision:"e6c166b4c6b3bce8"},{url:"/_next/static/chunks/9362.5dfe73d2cff267d4.js",revision:"5dfe73d2cff267d4"},{url:"/_next/static/chunks/9454.21f99f7eb9503c64.js",revision:"21f99f7eb9503c64"},{url:"/_next/static/chunks/9468-d8a19e5547552c1d.js",revision:"d8a19e5547552c1d"},{url:"/_next/static/chunks/9505-d80adca1f6fb1dbe.js",revision:"d80adca1f6fb1dbe"},{url:"/_next/static/chunks/9556.f882851e2fbcdaca.js",revision:"f882851e2fbcdaca"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9622.93854d43fce85fca.js",revision:"93854d43fce85fca"},{url:"/_next/static/chunks/9693.2b67b135d1232170.js",revision:"2b67b135d1232170"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.f87962a71d4ea1e0.js",revision:"f87962a71d4ea1e0"},{url:"/_next/static/chunks/9831-2aceb2c5f3f15ac5.js",revision:"2aceb2c5f3f15ac5"},{url:"/_next/static/chunks/989.af6f2fd472c763f3.js",revision:"af6f2fd472c763f3"},{url:"/_next/static/chunks/9972.2718a68ae9d750c6.js",revision:"2718a68ae9d750c6"},{url:"/_next/static/chunks/cff3e69d-920d199a4cb08a5f.js",revision:"920d199a4cb08a5f"},{url:"/_next/static/chunks/d6e1aeb5-286b2049d5ea26a0.js",revision:"286b2049d5ea26a0"},{url:"/_next/static/chunks/ee8b1517-12cd580df18b670d.js",revision:"12cd580df18b670d"},{url:"/_next/static/chunks/framework-56eb74ff06128874.js",revision:"56eb74ff06128874"},{url:"/_next/static/chunks/main-26fe95ff136da4e5.js",revision:"26fe95ff136da4e5"},{url:"/_next/static/chunks/pages/_app-7f6c21093f4eec0b.js",revision:"7f6c21093f4eec0b"},{url:"/_next/static/chunks/pages/_error-eb74a452056fea13.js",revision:"eb74a452056fea13"},{url:"/_next/static/chunks/pages/embed/chat/readonly-0dbdfa4e287be044.js",revision:"0dbdfa4e287be044"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-3a84819e972db1d1.js",revision:"3a84819e972db1d1"},{url:"/_next/static/chunks/pages/embed/video-7fb14b4163b0f7c0.js",revision:"7fb14b4163b0f7c0"},{url:"/_next/static/chunks/pages/index-3ced2abf15b570c1.js",revision:"3ced2abf15b570c1"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0a067c4e52d16cda.js",revision:"0a067c4e52d16cda"},{url:"/_next/static/css/0c70d116e6bcd329.css",revision:"0c70d116e6bcd329"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/6dddd42a88f781e5.css",revision:"6dddd42a88f781e5"},{url:"/_next/static/css/78e800e944ea1a4d.css",revision:"78e800e944ea1a4d"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/824f1411c5054506.css",revision:"824f1411c5054506"},{url:"/_next/static/css/87f18c887be77d05.css",revision:"87f18c887be77d05"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/a4eece00d7cccf69.css",revision:"a4eece00d7cccf69"},{url:"/_next/static/css/b609c15b57b73659.css",revision:"b609c15b57b73659"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.3b0fe0aa.woff",revision:"3b0fe0aa"},{url:"/_next/static/media/inter-cyrillic-300-normal.786612d8.woff2",revision:"786612d8"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-600-normal.20e88899.woff",revision:"20e88899"},{url:"/_next/static/media/inter-cyrillic-600-normal.ac257677.woff2",revision:"ac257677"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.69e88d04.woff",revision:"69e88d04"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.f894e1d8.woff2",revision:"f894e1d8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.21482aa8.woff2",revision:"21482aa8"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.684dbb71.woff",revision:"684dbb71"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-300-normal.386712e0.woff",revision:"386712e0"},{url:"/_next/static/media/inter-greek-300-normal.8e40d33d.woff2",revision:"8e40d33d"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-600-normal.7a9219c1.woff2",revision:"7a9219c1"},{url:"/_next/static/media/inter-greek-600-normal.a3d58a50.woff",revision:"a3d58a50"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-300-normal.25ff86b8.woff",revision:"25ff86b8"},{url:"/_next/static/media/inter-greek-ext-300-normal.2768fbb6.woff2",revision:"2768fbb6"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-600-normal.2c1e268c.woff",revision:"2c1e268c"},{url:"/_next/static/media/inter-greek-ext-600-normal.533d789c.woff2",revision:"533d789c"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-300-normal.1e64cb66.woff2",revision:"1e64cb66"},{url:"/_next/static/media/inter-latin-300-normal.80c26b3a.woff",revision:"80c26b3a"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-600-normal.34227eb1.woff2",revision:"34227eb1"},{url:"/_next/static/media/inter-latin-600-normal.edaa5f1b.woff",revision:"edaa5f1b"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-300-normal.5212580c.woff",revision:"5212580c"},{url:"/_next/static/media/inter-latin-ext-300-normal.dcb1958c.woff2",revision:"dcb1958c"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-600-normal.03b16c21.woff2",revision:"03b16c21"},{url:"/_next/static/media/inter-latin-ext-600-normal.5f656274.woff",revision:"5f656274"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-300-normal.09dd64fe.woff2",revision:"09dd64fe"},{url:"/_next/static/media/inter-vietnamese-300-normal.edc506b7.woff",revision:"edc506b7"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-600-normal.672f1e0b.woff",revision:"672f1e0b"},{url:"/_next/static/media/inter-vietnamese-600-normal.e7c6af30.woff2",revision:"e7c6af30"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-400-normal.cbe785df.woff",revision:"cbe785df"},{url:"/_next/static/media/poppins-latin-600-normal.c070cf14.woff",revision:"c070cf14"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.56cb5e9c.woff2",revision:"56cb5e9c"},{url:"/_next/static/media/poppins-latin-ext-400-normal.fbcaaafb.woff",revision:"fbcaaafb"},{url:"/_next/static/media/poppins-latin-ext-600-normal.33e72839.woff",revision:"33e72839"},{url:"/_next/static/media/poppins-latin-ext-600-normal.dd51f42e.woff2",revision:"dd51f42e"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute((e=>e.pathname.startsWith("/admin/")),new e.NetworkOnly({fetchOptions:{credentials:"same-origin"},plugins:[]}),"GET"),e.registerRoute((e=>e.pathname.startsWith("/api/")),new e.NetworkOnly,"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
