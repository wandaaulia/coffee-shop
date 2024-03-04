import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextApiResponse) {
  const allData = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
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
