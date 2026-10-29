module.exports=[463021,(a,b,c)=>{b.exports=a.x("@prisma/client-2c3a283f134fdcb6",()=>require("@prisma/client-2c3a283f134fdcb6"))},271518,a=>{"use strict";let b;b=new(a.i(463021)).PrismaClient,a.s(["default",0,b])},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},839983,a=>{"use strict";var b=a.i(522734),c=a.i(814747),d=a.i(271518);function e(){let a=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return a?a.trim().replace(/\/+$/,""):"https://websitedevelopmentagency.ae"}function f(a){let b=a.replace(/^\/+|\/+$/g,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return RegExp(`[ \\t]*<url>(?:(?!<\\/url>)[\\s\\S])*?<loc>[^<]*?\\/${b}\\/?<\\/loc>(?:(?!<\\/url>)[\\s\\S])*?<\\/url>\\s*`,"i")}async function g(){let a=await d.default.sitemap.findFirst({orderBy:{updatedAt:"desc"}});if(a&&a.content&&a.content.trim())return a.content.trim();let f=c.default.join(process.cwd(),"public/sitemap.xml.bak"),g=c.default.join(process.cwd(),"public/sitemap.xml"),h="";if(b.default.existsSync(f))h=b.default.readFileSync(f,"utf8").trim();else if(b.default.existsSync(g))h=b.default.readFileSync(g,"utf8").trim();else{let a;a=e(),h=`<?xml version="1.0" encoding="UTF-8"?>
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
${n}`,await h(l),!0}async function j(a){if(!a)return!1;let b=a.replace(/^\/+|\/+$/g,""),c=await g(),d=f(b);return!!d.test(c)&&(c=c.replace(d,"\n"),await h(c),!0)}a.s(["addOrUpdateUrlInSitemap",0,i,"getOrInitSitemapContent",0,g,"removeUrlFromSitemap",0,j,"saveSitemapContent",0,h])},672532,a=>{"use strict";var b=a.i(141693);a.s([],116741),a.i(116741),a.s(["007e89815dfef3345e74bc4d6457e71e97485593f4",()=>b.getCssFiles,"4022f762e642219a201696e81a6efd1bd7b0cfcebe",()=>b.getCssContent,"40493fd51d54dce0c02cd7ffa1c0beaebd56e17d11",()=>b.bulkUploadPages,"408772036d5be68e2dd497e6329533a8edaacc18e8",()=>b.deleteCustomPage,"40c4c6431d31d4d078e8c24df624ab7d3b468b78e7",()=>b.deleteCssFile,"6063d3afd1c8596a0dcda3626694099719fa296b58",()=>b.saveCssFile,"60e67682d3a84736cb2c050b2a6d589cb0e0d9018e",()=>b.getCustomPages],672532)},506728,a=>{a.v(a=>Promise.resolve().then(()=>a(118558)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0m5r37u._.js.map