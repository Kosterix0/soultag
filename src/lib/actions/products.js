const URL = process.env.BASE_URL;

export async function getProducts() {
  try {
    const res = await fetch(`${URL}}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error };
  }
}
