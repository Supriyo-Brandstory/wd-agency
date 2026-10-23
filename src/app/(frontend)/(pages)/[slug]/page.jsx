import { notFound } from "next/navigation";
import { getCustomPageBySlug } from "../../../admin/dashboard/custom-page/actions";
import { getSeoDataByPageUrl } from "../../../admin/dashboard/seo/actions";
import CustomPageRenderer from "./CustomPageRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getCustomPageBySlug(slug);

  if (!page) return {};

  let seoData = null;
  try {
    seoData = await getSeoDataByPageUrl(`/${slug}`);
  } catch (e) {
    // ignore
  }

  return {
    title: seoData?.title?.trim() || page.title,
    description: seoData?.description?.trim() || undefined,
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
      <CustomPageRenderer content={page.content} />
    </>
  );
}
