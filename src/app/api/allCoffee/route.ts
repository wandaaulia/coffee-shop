export async function GET() {
  const allData = "https://fake-coffee-api.vercel.app/api?limit=6";
  try {
    const result = await fetch(allData);
    const dataJson = await result.json();
    return Response.json({ data: dataJson }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "failed to fetch data" }, { status: 500 });
  }
}
