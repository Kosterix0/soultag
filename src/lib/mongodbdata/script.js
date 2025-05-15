const { connect } = require("../mongodb");
const Product = require("../../models/Product");

async function seedDatabase() {
  try {
    await connect();

    const products = [
      {
        name: "Jeans Soultag",
        price: 59.99,
        imageUrl: "/jeans.png",
        description: "Comfortable and durable jeans perfect for everyday wear.",
      },
      {
        name: "Jacket Soultag",
        price: 119.99,
        imageUrl: "/jacket.png",
        description: "Warm and stylish jacket for cold days.",
      },
      {
        name: "Jumper Soultag",
        price: 79.99,
        imageUrl: "/jumper.png",
        description: "Cozy jumper made from high-quality materials.",
      },
      {
        name: "Sweatpants Soultag",
        price: 49.99,
        imageUrl: "/sweatpants.png",
        description:
          "Casual sweatpants ideal for training or relaxing at home.",
      },
      {
        name: "Socks Soultag",
        price: 9.99,
        imageUrl: "/socks.png",
        description: "Soft and breathable socks for everyday use.",
      },
    ];
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seedDatabase();
