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
${n}`,await h(l),!0}async function j(a){if(!a)return!1;let b=a.replace(/^\/+|\/+$/g,""),c=await g(),d=f(b);return!!d.test(c)&&(c=c.replace(d,"\n"),await h(c),!0)}a.s(["addOrUpdateUrlInSitemap",0,i,"getOrInitSitemapContent",0,g,"removeUrlFromSitemap",0,j,"saveSitemapContent",0,h])},908127,a=>{"use strict";var b=a.i(814195),c=a.i(141693);a.s([],500644),a.i(500644),a.s(["00ebca1945d46539b8c8447e7077822d2aaa401039",()=>b.getSeoData,"00f150d975d5bf0bb36185fcf0359f8247a3425eb1",()=>c.getCustomPages,"00f74f1862ea41e5a5da2445154ec79d715b5c56c5",()=>c.getCssFiles,"4003b2af28156fb3dcf7387e4a6d39e195cc78714a",()=>c.bulkUploadPages,"400881207aeffc837b39cb130a8bb443cb31e1da06",()=>b.deleteSeoData,"402f69a2c0a9677ad378774992b6c9f977ff604905",()=>c.deleteCssFile,"40413fc3f1c9639fb1b98e5a27d69b937cc77ac060",()=>c.deleteCustomPage,"404583c3fea201fb093397245567898971cd5f5cbe",()=>b.createSeoData,"4060c185151cbfd8f6fd3a82fc8bb744f384979130",()=>c.getCustomPageBySlug,"4061ccd81209774d5cb708b934331bd76a06d491ea",()=>c.getCssContent,"40ef9e1f69c10704aedbfabac0aa85ed804d182dc1",()=>c.updateCustomPage,"40f46a4a4ab22b3d021b3e336081e85792090009d2",()=>c.createCustomPage,"600fa0e29aeccf6e3a37bf9a993ab45575bd02fecd",()=>c.saveCssFile,"60a915b504f10d3b99f5d1349c90f0df26ba5d88f8",()=>b.updateSeoData,"7f136b36fe1b61254dd1e4b7b01f3e7966909c6229",()=>b.getSeoDataByPageUrl],908127)},506728,a=>{a.v(a=>Promise.resolve().then(()=>a(118558)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gio~rg._.js.map