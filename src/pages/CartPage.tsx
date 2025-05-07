
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { useCart } from "@/context/CartContext";
import { formatIndianRupees } from "@/utils/formatCurrency";
import { ShoppingCart, BadgeIndianRupee, Trash2, X, ChevronLeft, ChevronRight } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      toast.error("Invalid coupon code. Please try again.");
    }
  };
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-6">
            <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any vehicles to your cart yet.
            </p>
            <Button size="lg" asChild>
              <Link to="/products/all">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Image</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.product.id}>
                      <TableCell>
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-medium hover:text-primary"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.product.brand}
                        </p>
                      </TableCell>
                      <TableCell>
                        {formatIndianRupees(item.product.price)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center border rounded-md">
                          <button
                            type="button"
                            className="px-2 py-1 border-r"
                            onClick={() =>
                              handleQuantityChange(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            <ChevronLeft className="h-3 w-3" />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            type="button"
                            className="px-2 py-1 border-l"
                            onClick={() =>
                              handleQuantityChange(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            disabled={item.quantity >= 10}
                          >
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {formatIndianRupees(
                          item.product.price * item.quantity
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={4} className="text-right">
                      Total
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {formatIndianRupees(cartTotal)}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" asChild>
                <Link to="/products/all" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              <Button variant="destructive" onClick={clearCart} className="flex items-center gap-2">
                <X className="h-4 w-4" /> Clear Cart
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>{formatIndianRupees(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Included</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="flex items-center">
                    <BadgeIndianRupee className="h-4 w-4 mr-1" />
                    {formatIndianRupees(cartTotal)}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={handleApplyCoupon}>Apply</Button>
                </div>
                
                <Button asChild className="w-full" size="lg">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
                
                <div className="mt-4 text-xs text-muted-foreground text-center">
                  By proceeding to checkout, you agree to our
                  <Link to="#" className="underline mx-1">
                    Terms of Service
                  </Link>
                  and
                  <Link to="#" className="underline mx-1">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-card rounded-lg border shadow-sm p-6">
              <h3 className="font-semibold mb-2">We Accept</h3>
              <div className="flex flex-wrap gap-2">
                <div className="border rounded px-2 py-1 text-xs">Visa</div>
                <div className="border rounded px-2 py-1 text-xs">Mastercard</div>
                <div className="border rounded px-2 py-1 text-xs">American Express</div>
                <div className="border rounded px-2 py-1 text-xs">UPI</div>
                <div className="border rounded px-2 py-1 text-xs">Net Banking</div>
              </div>
              
              <h3 className="font-semibold mt-4 mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Call us at +91 98765 43210 or email 
                <a href="mailto:support@autoeleganceindia.com" className="text-primary ml-1">
                  support@autoeleganceindia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
