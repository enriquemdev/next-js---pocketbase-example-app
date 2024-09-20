import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { file_url } from "@/lib/pocketbase"

export default function ProductDetailView({product}: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">New Arrival</Badge>
          </div>
          <img
            src={
                `${file_url}productos/${product.id}/${product.imagejjn}` || ''
              }
            alt="Ethereal Glow Lamp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.nombre}</h1>
            <p className="text-gray-600 mb-6">
              {product.descripcion}
            </p>
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-purple-600">${product.precio}</div>
              <Badge variant="outline" className="ml-4 text-green-600 border-green-600">In Stock</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Free shipping on orders over $200
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}