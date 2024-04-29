import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);

  const url = pathname;

  // Split the URL by '/' to get the parts
  const parts = url.split("/");

  // Get the last part of the URL, which should be '1'
  const id = parts[parts.length - 1];

  let getID = Number(id);

  try {
    const data = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getID}`;
    const result = await fetch(data);
    const dataJSON = await result.json();
    return Response.json({ data: dataJSON }, { status: 200 });
  } catch (err) {
    return Response.json(
      {
        error: "failed to fetch data",
      },
      { status: 500 }
    );
  }
}
