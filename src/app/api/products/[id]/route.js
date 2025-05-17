import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  try {
    await connect();
    const { id } = params;
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
