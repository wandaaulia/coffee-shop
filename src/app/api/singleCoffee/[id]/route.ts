import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);

  const url = pathname;

  // Split the URL by '/' to get the parts
  const parts = url.split("/");

  // Get the last part of the URL, which should be '1'
  const id = parts[parts.length - 1];

  let getID = Number(id);

  try {
    const allData = `https://fake-coffee-api.vercel.app/api/${getID}`;
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
