
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatIndianRupees } from "@/utils/formatCurrency";
import { ShoppingCart, BadgeIndianRupee, Star, ChevronLeft } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // If product not found, navigate to 404
  useEffect(() => {
    if (!product) {
      navigate("/404", { replace: true });
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  // Get related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to={`/products/${product.category}`} className="flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to {product.category === "superbike" ? "Superbikes" : 
                product.category === "luxury-car" ? "Luxury Cars" : "Sports Cars"}
            </Link>
          </Button>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg border bg-background">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                {product.featured && (
                  <Badge variant="secondary" className="mb-2">
                    Featured
                  </Badge>
                )}
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl text-muted-foreground">{product.brand}</p>
              </div>
              
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted"
                      }`}
                    />
                  ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} out of 5
                </span>
              </div>
              
              <div className="flex items-center">
                <BadgeIndianRupee className="h-6 w-6 text-accent mr-1" />
                <span className="text-3xl font-bold">
                  {formatIndianRupees(product.price)}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  Including all taxes
                </span>
              </div>
              
              <p className="text-base">{product.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Key Specifications:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="font-medium capitalize">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="text-sm mb-2">Availability:</p>
                <div
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    product.inStock
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-24">
                  <label htmlFor="quantity" className="text-sm font-medium block mb-1">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    disabled={!product.inStock}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <Button
                    className="w-full h-full"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-6 border rounded-b-md">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Product Details</h3>
                <p>
                  {product.description} The {product.name} is designed to provide an exceptional
                  driving experience with top-tier performance and luxurious comfort.
                </p>
                <p>
                  With its powerful {product.specifications.engine} engine,
                  the {product.name} delivers {product.specifications.power} of raw
                  power and {product.specifications.torque} of torque for an
                  exhilarating ride every time.
                </p>
                <p>
                  Each unit undergoes rigorous quality control and testing to
                  ensure that you receive a vehicle that meets the highest standards
                  of excellence.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="p-6 border rounded-b-md">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <span className="font-medium capitalize">{key}: </span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-6 border rounded-b-md">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shipping Information</h3>
                <p>
                  We offer nationwide shipping across India for all our vehicles.
                  Delivery time may vary based on your location and vehicle availability.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Processing Time: 3-5 business days</li>
                  <li>Shipping Time: 7-14 business days</li>
                  <li>Free delivery within metropolitan cities</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6">Return Policy</h3>
                <p>
                  All vehicles purchased from Auto Elegance India are subject to
                  our quality assurance policy. Please contact our customer service
                  department within 7 days of delivery if you have any concerns or
                  issues with your purchase.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
