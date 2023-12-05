import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        product_named: String,
        product_number: String,
        purchase_price: Number,
        selling_price: Number,
        total_quantity: Number,
        branch_quantity: Number,
        product_rack: String,
        product_column: String,
        notifi_quantity: Boolean,
        minimum_quantity: Number,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Products || mongoose.model("Product", productSchema);

export default Product;