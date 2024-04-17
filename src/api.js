export async function getItems(order) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${order}`
  );
  const body = await response.json();
  return body;
}
