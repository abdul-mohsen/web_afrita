import { InvoivePreview } from "@/components";
import Skeleton from "@/components/Skeleton";

export default function Orders({ params }) {
	const { id } = params;
	return (
		<section id="orders" className="h-full">
			<h1 className="mx-auto my-4">الطلبات</h1>
			<Skeleton />
			<InvoivePreview />
		</section>
	);
}
