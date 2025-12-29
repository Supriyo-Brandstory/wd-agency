import { cookies } from "next/headers";
import * as jose from "jose";

export async function verifyAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
        throw new Error("Unauthorized: No token provided");
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
        const { payload } = await jose.jwtVerify(token, secret);
        return payload;
    } catch (err) {
        throw new Error("Unauthorized: Invalid token");
    }
}
