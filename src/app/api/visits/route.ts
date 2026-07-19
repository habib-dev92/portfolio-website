import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Visit } from "@/models/Visit";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const record = await Visit.findOne();
    return NextResponse.json({ count: record?.count || 0 }, {
      headers: {
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Fetch visits error:", error);
    return NextResponse.json({ error: "Failed to fetch visits" }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectDB();
    const record = await Visit.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
    return NextResponse.json({ count: record.count }, {
      headers: {
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Visit counter error:", error);
    return NextResponse.json({ error: "Failed to update visits" }, { status: 500 });
  }
}
