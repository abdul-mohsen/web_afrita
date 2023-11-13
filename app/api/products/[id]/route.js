import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { 
        
        newProduct_named :  product_named ,
        newProduct_number :  product_number, 
        newPurchase_price :  purchase_price, 
        newSelling_price :  selling_price, 
        newTotal_quantity :  total_quantity, 
        newBranch_quantity :  branch_quantity, 
        newProduct_rack :  product_rack, 
        newProduct_column :  product_column, 
        newNotifi_quantity :  notifi_quantity, 
        newMinimum_quantity :  minimum_quantity


    } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(
        id,
        {
            product_named,
            product_number,
            purchase_price,
            selling_price,
            total_quantity,
            branch_quantity,
            product_rack,
            product_column,
            notifi_quantity,
            minimum_quantity
    });
    return NextResponse.json({ message: "Product updated" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 })
}