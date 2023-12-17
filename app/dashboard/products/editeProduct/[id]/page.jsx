import { EditeProductForm } from "@/components"

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async  function  EditeProduct({ params }) {

  const { id } = params;
  const  { product }  = await getProductById(id) || {};

  return (
    <EditeProductForm id={id} 
      product_named={product?.product_named || ''}
      product_number={product?.product_number  || ''}
      purchase_price={product?.purchase_price  || ''}
      selling_price={product?.selling_price  || ''}
      total_quantity={product?.total_quantity  || ''}
      brunch_quantity={product?.brunch_quantity  || ''}
      product_rack={product?.product_rack  || ''}
      product_column={product?.product_column  || ''}
    />
  )
}

