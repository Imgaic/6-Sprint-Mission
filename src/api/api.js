const BASE_URL = "https://panda-market-api.vercel.app";

const getProductList = async ({
  order = "recent",
  page = "1",
  pageSize = "10",
}) => {
  let response;
  try {
    const url =
      BASE_URL + `/products?orderBy=${order}&page=${page}&pageSize=${pageSize}`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }

  const body = await response.json();
  return body.list;
};

const getProduct = async (productId) => {
  let response;
  try {
    const url = BASE_URL + `/products/${productId}`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }

  const body = await response.json();
  return body;
};

const getComments = async ({ productId, limit }) => {
  let response;
  try {
    const url = BASE_URL + `/products/${productId}/comments/?limit=${limit}`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }

  const body = await response.json();
  return body.list;
};

const postComment = async ({ productId, content }) => {
  if (!content) return;

  let response;
  try {
    const url = BASE_URL + `/products/${productId}/comments/`;
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: content }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

export { getProductList, getProduct, getComments, postComment };
