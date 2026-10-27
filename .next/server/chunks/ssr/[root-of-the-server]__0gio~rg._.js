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
${n}`,await h(l),!0}async function j(a){if(!a)return!1;let b=a.replace(/^\/+|\/+$/g,""),c=await g(),d=f(b);return!!d.test(c)&&(c=c.replace(d,"\n"),await h(c),!0)}a.s(["addOrUpdateUrlInSitemap",0,i,"getOrInitSitemapContent",0,g,"removeUrlFromSitemap",0,j,"saveSitemapContent",0,h])},908127,a=>{"use strict";var b=a.i(814195),c=a.i(141693);a.s([],500644),a.i(500644),a.s(["00b0cc91666e7bde67b413d15d77f99bfd46f5f369",()=>c.getCssFiles,"403adb4587b33f6336f398b6b4bbf52fcb2414b18b",()=>b.deleteSeoData,"40449f3066d6f499d5c5b1c0fbf8187b0e76f43d43",()=>c.getCssContent,"4046c54b2162f9a0006721ec1fa5583c7d1b338565",()=>b.createSeoData,"405f8d4cdaaa5619d958d017d27fb036b35e1e759a",()=>c.bulkUploadPages,"407f7e9e657ca9534b9ccd5ad945a37dd2ac91540a",()=>c.deleteCustomPage,"408596293f813cd73167c170d08f80072d05d8951d",()=>c.createCustomPage,"40c5597815ec3c7d9f91c5f196534866cca21cbeed",()=>c.updateCustomPage,"40d2f66b5799e7b9594234a1c27124c8470b1f5fdc",()=>c.getCustomPageBySlug,"40d9cd8013932355acd2dbcb1952d1af2eaf7e58a8",()=>c.deleteCssFile,"600c9944983bd992b60361bd4f40193edffaef2264",()=>b.getSeoData,"602dca9715f54b92f9865debcc4eb328cb1fa93c16",()=>b.updateSeoData,"605c970e0fa20a0105287f4e3966049c417680ceb5",()=>c.getCustomPages,"6089af1e18a505bdcf70fdf29d2fca3838c3288067",()=>c.saveCssFile,"7fa80220960cccc7db68676726732effe60d0a98dd",()=>b.getSeoDataByPageUrl],908127)},506728,a=>{a.v(a=>Promise.resolve().then(()=>a(118558)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gio~rg._.js.map