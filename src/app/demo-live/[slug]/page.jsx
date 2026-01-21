import { getTemplateBySlug } from "@/app/admin/dashboard/template/actions";
import { notFound } from "next/navigation";

export default async function LiveDemoPage({ params }) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template || !template.demoContent) {
    return notFound();
  }

  // Use a client-side approach or iframe to render raw HTML correctly
  // iframe srcdoc is the best way to handle full HTML docs from DB
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        srcDoc={template.demoContent}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title={template.title}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
