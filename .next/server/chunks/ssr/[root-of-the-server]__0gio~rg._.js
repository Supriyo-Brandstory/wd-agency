module.exports=[522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},839983,a=>{"use strict";var b=a.i(522734),c=a.i(814747),d=a.i(271518);function e(){let a=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return a?a.trim().replace(/\/+$/,""):"https://websitedevelopmentagency.ae"}function f(a){let b=a.replace(/^\/+|\/+$/g,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return RegExp(`[ \\t]*<url>(?:(?!<\\/url>)[\\s\\S])*?<loc>[^<]*?\\/${b}\\/?<\\/loc>(?:(?!<\\/url>)[\\s\\S])*?<\\/url>\\s*`,"i")}async function g(){let a=await d.default.sitemap.findFirst({orderBy:{updatedAt:"desc"}});if(a&&a.content&&a.content.trim())return a.content.trim();let f=c.default.join(process.cwd(),"public/sitemap.xml.bak"),g=c.default.join(process.cwd(),"public/sitemap.xml"),h="";if(b.default.existsSync(f))h=b.default.readFileSync(f,"utf8").trim();else if(b.default.existsSync(g))h=b.default.readFileSync(g,"utf8").trim();else{let a;a=e(),h=`<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${a}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`}return a?await d.default.sitemap.update({where:{id:a.id},data:{content:h}}):await d.default.sitemap.create({data:{content:h}}),h}async function h(b){let c=b.trim(),e=await d.default.sitemap.findFirst();e?await d.default.sitemap.update({where:{id:e.id},data:{content:c}}):await d.default.sitemap.create({data:{content:c}});try{let{revalidatePath:b}=await a.A(506728);b("/sitemap.xml")}catch(a){}return c}async function i(a,b=null){if(!a)return!1;let c=e(),d=a.replace(/^\/+|\/+$/g,""),j=`${c}/${d}`,k=new Date().toISOString(),l=await g();if(b){let a=b.replace(/^\/+|\/+$/g,"");if(a&&a!==d){let b=f(a);l=l.replace(b,"\n")}}let m=f(d),n=`  <url>
    <loc>${j}</loc>
    <lastmod>${k}</lastmod>
    <priority>0.80</priority>
  </url>
`;return l=m.test(l)?l.replace(m,n):l.includes("</urlset>")?l.replace("</urlset>",`${n}</urlset>`):`${l}
${n}`,await h(l),!0}async function j(a){if(!a)return!1;let b=a.replace(/^\/+|\/+$/g,""),c=await g(),d=f(b);return!!d.test(c)&&(c=c.replace(d,"\n"),await h(c),!0)}a.s(["addOrUpdateUrlInSitemap",0,i,"getOrInitSitemapContent",0,g,"removeUrlFromSitemap",0,j,"saveSitemapContent",0,h])},908127,a=>{"use strict";var b=a.i(814195),c=a.i(141693);a.s([],500644),a.i(500644),a.s(["0045089c8858903439023b2943f5736cbaa40ee311",()=>c.getCustomPages,"006ec76d8640782c430d2f08f59348be1935a2b72a",()=>b.getSeoData,"00dc2b82d800c619011a6c6ac1cb76bf3c5b5957af",()=>c.getCssFiles,"406526421b83d94c2963522d3fb6146422f4ddfa4f",()=>c.deleteCssFile,"40737e8d995f5bc1ade1bca5dedae2e2d074076a8c",()=>c.createCustomPage,"4089633bde2abcfea5ea346df2029c9a25f949cad3",()=>c.getCssContent,"408afdcc2e29523cf5185d8d8e9863221cb0413f03",()=>b.deleteSeoData,"40919b75c6b2f1c6921d72ecd4929e661f2ef0f377",()=>c.updateCustomPage,"40a14e2dab62ca16dcb3c9d12824559a1914ed0a9f",()=>c.deleteCustomPage,"40c259ec8bc1069d10d3e226d2d09f4dfbd41212f6",()=>c.getCustomPageBySlug,"40d6839363102de6fab0f8b6f689051bd93d73d508",()=>b.createSeoData,"40e83d0642dd22f23de3f7909e510e0a2cbbeb4f2f",()=>c.bulkUploadPages,"6078db147795648ec543675656b5df4a2b9e1f6168",()=>b.updateSeoData,"60a27f8473c2f685221fbff67b71522710c8ef7ed0",()=>c.saveCssFile,"7fc375eb39c0af9c1071dc45548ddb6c292bce8cd5",()=>b.getSeoDataByPageUrl],908127)},506728,a=>{a.v(a=>Promise.resolve().then(()=>a(118558)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gio~rg._.js.map