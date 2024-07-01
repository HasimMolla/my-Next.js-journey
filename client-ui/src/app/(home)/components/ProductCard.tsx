
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart } from "lucide-react";
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
        <Dialog>
          <DialogTrigger className="rounded-full bg-orange-200 px-4 py-1 hover:bg-orange-300  text-orange-500 shadow hover:shadow-md transition-all duration-150 ease-linear outline-none focus:outline-none">
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-white p-0">
            <div className="flex justify-between ">
              <div className="bg-white w-1/3 p-6 flex items-center justify-center">
                <Image
                  width={450}
                  height={450}
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="bg-background w-2/3 p-6 h-full ">
                <DialogTitle className="text-xl font-bold">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="mt-1">
                  {product.description}
                </DialogDescription>
                <div>
                  <h4 className="mt-4">Choose the size</h4>
                </div>
                <RadioGroup
                  defaultValue="small"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="small"
                      id="small"
                      className="peer sr-only"
                      aria-label="Small"
                    />
                    <Label
                      htmlFor="small"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Small
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="medium"
                      id="medium"
                      className="peer sr-only"
                      aria-label="Medium"
                    />
                    <Label
                      htmlFor="medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Medium
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="large"
                      id="large"
                      className="peer sr-only"
                      aria-label="Large"
                    />
                    <Label
                      htmlFor="large"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Large
                    </Label>
                  </div>
                </RadioGroup>
                <div>
                  <h4 className="mt-4">Choose the crust</h4>
                </div>
                <RadioGroup
                  defaultValue="thin"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="thin"
                      id="thin"
                      className="peer sr-only"
                      aria-label="Thin"
                    />
                    <Label
                      htmlFor="thin"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Thin
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="thick"
                      id="thick"
                      className="peer sr-only"
                      aria-label="Thick"
                    />
                    <Label
                      htmlFor="thick"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Thick
                    </Label>
                  </div>
                </RadioGroup>
                <div>
                  <h4 className="mt-4">Extra toppings</h4>
                </div>
                <div className="flex items-center justify-between mt-10">
                  <div className="font-bold">₹{product.price}</div>
                  <Button>
                    <ShoppingCart />
                    <span className="ml-2">Add to cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
