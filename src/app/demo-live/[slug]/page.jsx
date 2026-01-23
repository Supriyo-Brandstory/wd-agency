import { getTemplateBySlug } from "@/app/admin/dashboard/template/actions";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template || !template.isVisible) {
    return {
      title: "Live Preview",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${template.title} - Live Preview`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LiveDemoPage({ params }) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template || !template.demoFolder || !template.isVisible) {
    return notFound();
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src={`${template.demoFolder}/index.html`}
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
