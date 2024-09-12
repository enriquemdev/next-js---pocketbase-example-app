import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export const ProductCard = () => {
  return (
    <Card>
      <Image
        src={
          "https://i5.walmartimages.com/seo/DELL-Optiplex-7040-Desktop-Computer-PC-Intel-Quad-Core-i5-2TB-HDD-8GB-DDR3-RAM-Windows-10-Pro-DVD-WIFI-19in-Monitor-USB-Keyboard-Mouse-Used-Like-New_41224d19-23ba-45c6-9a5d-5686b9504186.b5b1c711738ae62d5a719260b2c74e8b.jpeg"
        }
        width={300}
        height={300}
        alt={"Product Image"}
        className="rounded-t-lg"
      ></Image>
      <CardHeader>
        <h1>Nombre Producto</h1>
      </CardHeader>
      <CardContent>
        <p>Descripcion</p>
        <Button>Comprar</Button>
      </CardContent>
    </Card>
  );
};
