import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { file_url } from "@/lib/pocketbase";

export const ProductCard = ({product}: any) => {
  return (
    <Card>
      <Image
        src={
          `${file_url}productos/${product.id}/${product.imagen}`
        }
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
        <Button>Comprar ${product.precio}</Button>
      </CardContent>
    </Card>
  );
};
