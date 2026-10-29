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
${n}`,await h(l),!0}async function j(a){if(!a)return!1;let b=a.replace(/^\/+|\/+$/g,""),c=await g(),d=f(b);return!!d.test(c)&&(c=c.replace(d,"\n"),await h(c),!0)}a.s(["addOrUpdateUrlInSitemap",0,i,"getOrInitSitemapContent",0,g,"removeUrlFromSitemap",0,j,"saveSitemapContent",0,h])},672532,a=>{"use strict";var b=a.i(141693);a.s([],116741),a.i(116741),a.s(["0002244c28180a44aa69953684c5fb8bd8e5d8aed1",()=>b.getCssFiles,"40539cbd0f46dac46252d0fda1a9fe118fb97d86fc",()=>b.deleteCssFile,"407e68bc6dfb03d5339d627f1fb91acc90179c38fe",()=>b.deleteCustomPage,"408f2c40f609d016fbd56e1ecfaaf03960bb159794",()=>b.bulkUploadPages,"40d1c3cc619e4dd4cbd8dd859d48aee37bb7404806",()=>b.getCssContent,"608ac5f41115a2d5ae9d4f2fc51b201443cc41eca1",()=>b.getCustomPages,"60c88f90d34bdc6a83b7a627104569c31ddd814354",()=>b.saveCssFile],672532)},506728,a=>{a.v(a=>Promise.resolve().then(()=>a(118558)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0m5r37u._.js.map