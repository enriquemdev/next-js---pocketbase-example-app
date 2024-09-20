import { ProductCard } from "@/components/products/ProductCard";
import { pb } from "@/lib/pocketbase";

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  const records = await pb.collection("productos").getFullList({
    sort: "-created",
    cache: "no-cache"
  });

  console.log(records);

  return (
    <div className="grid grid-cols-3 gap-3">
      {records.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default HomePage;
