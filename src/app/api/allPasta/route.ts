export async function GET() {
  const allData = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
  try {
    const result = await fetch(allData);
    const dataJson = await result.json();
    return Response.json({ data: dataJson }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "failed to fetch data" }, { status: 500 });
  }
}
