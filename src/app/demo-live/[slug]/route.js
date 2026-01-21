import db from "../../../../prisma/db";

export async function GET(request, { params }) {
    const { slug } = await params;

    try {
        const template = await db.template.findUnique({
            where: { slug },
            select: { demoContent: true }
        });

        if (!template || !template.demoContent) {
            return new Response("Demo not found", { status: 404 });
        }

        return new Response(template.demoContent, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
