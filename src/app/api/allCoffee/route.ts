import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextApiResponse) {
  const allData = "https://fake-coffee-api.vercel.app/api?limit=6";
  try {
    const result = await fetch(allData);
    const dataJson = await result.json();
    return NextResponse.json({ data: dataJson }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "failed to fetch data" },
      { status: 500 }
    );
  }
}
