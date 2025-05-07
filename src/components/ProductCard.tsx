
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { formatIndianRupees } from "@/utils/formatCurrency";
import { ShoppingCart, BadgeIndianRupee } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <Card className="product-card">
      {product.featured && (
        <span className="product-badge">Featured</span>
      )}
      
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
              </div>
              {!product.inStock && (
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">
                  Out of Stock
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center">
              <BadgeIndianRupee className="h-4 w-4 text-accent mr-1" />
              <span className="font-bold">{formatIndianRupees(product.price)}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between gap-4">
          <Button
            variant="outline"
            className="w-full"
            asChild
          >
            <Link to={`/product/${product.id}`}>Details</Link>
          </Button>
          
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
