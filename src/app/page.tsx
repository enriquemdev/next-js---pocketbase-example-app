import { ProductCard } from "@/components/products/ProductCard";
import { pb } from "@/lib/pocketbase";

const HomePage = async () => {
  const records = await pb.collection("productos").getFullList({
    sort: "-created",
  });

  console.log(records);

  return (
    <div className="grid grid-cols-3 gap-3">
      {records.map((product) => (
        <ProductCard></ProductCard>
      ))}
    </div>
  );
};

export default HomePage;
