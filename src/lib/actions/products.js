const URL = process.env.BASE_URL || "http://localhost:3000";

export async function getProducts() {
  const res = await fetch(`${URL}/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return error;
  }
  const data = await res.json();
  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${URL}/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return error;
  }
  const data = await res.json();
  return data;
}
