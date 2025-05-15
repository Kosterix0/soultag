import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connect();
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
