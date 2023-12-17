import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { product_named, product_number, purchase_price, selling_price, total_quantity, brunch_quantity, product_rack, product_column, notifi_quantity, minimum_quantity } = await request.json();
    await connectMongoDB();
    await Product.create({ product_named, product_number, purchase_price, selling_price, total_quantity, brunch_quantity, product_rack, product_column, notifi_quantity, minimum_quantity });
    return NextResponse.json({message: "Product Created"}, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({ products })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message: "Product Deleted"}, {status: 200});
}