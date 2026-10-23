import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public/downloads/sample-custom-page-template.zip"
  );

  if (!fs.existsSync(filePath)) {
    return new Response("Sample file not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="sample-custom-page-template.zip"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
