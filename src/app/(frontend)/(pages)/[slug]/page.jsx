import { notFound } from "next/navigation";
import { getCustomPageBySlug } from "../../../admin/dashboard/custom-page/actions";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getCustomPageBySlug(slug);

  if (!page) return {};

  return {
    title: page.title,
  };
}

export default async function DynamicCustomPage({ params }) {
  const { slug } = await params;
  const page = await getCustomPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      {page.cssFile && (
        <link
          rel="stylesheet"
          href={
            page.cssFile.startsWith("/")
              ? page.cssFile
              : `/uploads/css/${page.cssFile}`
          }
        />
      )}
      <div
        className="custom-page-content"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
      {/* {page.content} */}
    </>
  );
}
