
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { formatIndianRupees } from "@/utils/formatCurrency";
import { BadgeIndianRupee, CheckCircle, ChevronLeft, CreditCard } from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // Check if cart is empty, redirect to cart page if it is
  if (cartItems.length === 0) {
    navigate("/cart");
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/checkout-success");
      toast.success("Order placed successfully!");
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="bg-card rounded-lg border shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" required placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-card rounded-lg border shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required placeholder="123 Main Street" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required placeholder="Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" required placeholder="Maharashtra" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zip">PIN Code</Label>
                      <Input id="zip" required placeholder="400001" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="India" readOnly />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-card rounded-lg border shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 border p-4 rounded-md">
                    <RadioGroupItem value="card" id="payment-card" />
                    <Label htmlFor="payment-card" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>Credit / Debit Card</span>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-4 rounded-md">
                    <RadioGroupItem value="upi" id="payment-upi" />
                    <Label htmlFor="payment-upi" className="flex-1 cursor-pointer">UPI Payment</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-4 rounded-md">
                    <RadioGroupItem value="netbanking" id="payment-netbanking" />
                    <Label htmlFor="payment-netbanking" className="flex-1 cursor-pointer">Net Banking</Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" required placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" required placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" required placeholder="John Doe" />
                    </div>
                  </div>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input id="upiId" required placeholder="yourname@upi" />
                    </div>
                  </div>
                )}
                
                {paymentMethod === "netbanking" && (
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bankName">Select Bank</Label>
                      <select
                        id="bankName"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" type="button" asChild>
                  <Link to="/cart" className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Return to Cart
                  </Link>
                </Button>
                <Button type="submit" className="flex gap-2" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Place Order
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="max-h-80 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 py-2 border-b last:border-b-0"
                    >
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium line-clamp-1">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-sm">
                            {formatIndianRupees(item.product.price)} x {item.quantity}
                          </span>
                          <span className="font-medium">
                            {formatIndianRupees(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
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
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="flex items-center">
                    <BadgeIndianRupee className="h-4 w-4 mr-1" />
                    {formatIndianRupees(cartTotal)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-card rounded-lg border shadow-sm p-6">
              <h3 className="font-semibold mb-2">Shipping</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All vehicles include free delivery within metropolitan cities.
                Additional charges may apply for remote locations.
              </p>
              
              <h3 className="font-semibold mt-4 mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                All transactions are secure and encrypted. Your payment information
                is never stored on our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
