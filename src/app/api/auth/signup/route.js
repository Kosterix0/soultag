import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  const { name, email, password } = await request.json();
  await connect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ email: "Email not available" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hash,
  });

  try {
    await newUser.save();
    return NextResponse.json(
      { message: "User is registered" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving user:", error.message);
    return NextResponse.json({ general: error.message }, { status: 500 });
  }
}
