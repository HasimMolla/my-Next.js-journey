import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type PropTypes = { product: Product };
const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-0 rounded-xl">
      <CardHeader className=" flex justify-center items-center">
        <Image
          width={150}
          height={150}
          src={product.image}
          alt={product.name}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
        <CardDescription className="mt-2">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <span>From </span>
          <span className="font-bold ml-1">₹{product.price}</span>
        </div>
        <div>
          <Button className="rounded-full bg-orange-200 hover:bg-orange-300  text-orange-500 shadow hover:shadow-md transition-all duration-150 ease-linear outline-none focus:outline-none">Choose</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
