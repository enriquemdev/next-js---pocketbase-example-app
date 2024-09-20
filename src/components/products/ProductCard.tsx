import { Card, CardHeader, CardContent } from "../ui/card";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { file_url } from "@/lib/pocketbase";
import Link from "next/link";
import { pb } from "@/lib/pocketbase";

type Props = {
  params: {
    product_id: string
  }
}

export const ProductCard = async ({params}: Props) => {
  const product = await pb.collection("productos").getOne(params.product_id, {
    expand: "relField1,relField2.subRelField",
  });

  return (
    <Card>
      <Image
        src={`${file_url}productos/${product.id}/${product.imagen}` || ""}
        width={300}
        height={300}
        alt={"Product Image"}
        className="rounded-t-lg"
      ></Image>
      <CardHeader>
        <h1>{product.nombre}</h1>
      </CardHeader>
      <CardContent>
        <p>{product.descripcion}</p>
        <Link href={`/products/${product.id}`} className={buttonVariants({})}>
          Comprar ${product.precio}
        </Link>
      </CardContent>
    </Card>
  );
};
