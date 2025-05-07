
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { cartCount } = useCart();
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">
              <span className="text-primary">Auto</span>
              <span className="gold-gradient">Elegance</span>
              <span className="text-primary">India</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/products/superbike"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Superbikes
          </Link>
          <Link
            to="/products/luxury-car"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Luxury Cars
          </Link>
          <Link
            to="/products/sports-car"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sports Cars
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2 text-center">
                {cartCount === 0 ? (
                  <p className="text-sm text-muted-foreground">Your cart is empty</p>
                ) : (
                  <p className="text-sm">
                    {cartCount} {cartCount === 1 ? "item" : "items"} in cart
                  </p>
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/cart" className="w-full cursor-pointer justify-center">
                  <Button className="w-full">View Cart</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Separator orientation="vertical" className="h-6" />
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products/superbike">Superbikes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products/luxury-car">Luxury Cars</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products/sports-car">Sports Cars</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
