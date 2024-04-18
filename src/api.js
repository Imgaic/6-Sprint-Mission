export async function getItems({ order, page = "1" }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${order}&page=${page}`
  );
  const body = await response.json();
  return body;
}
