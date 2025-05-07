
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const CheckoutSuccessPage = () => {
  // Generate a random order number
  const orderNumber = `AEI-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
        <p className="text-xl mb-8">
          Thank you for your purchase with Auto Elegance India
        </p>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">Order Number:</span>
                <span>{orderNumber}</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">Payment Method:</span>
                <span>Credit Card</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Status:</span>
                <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-semibold dark:bg-green-900 dark:text-green-100">
                  Processing
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <h2 className="text-lg font-semibold mb-2">What Happens Next?</h2>
          <ol className="text-left space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="font-semibold">1.</span> Our team will verify your order details and contact you within 24 hours.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">2.</span> We'll arrange delivery or pickup of your vehicle at a time convenient for you.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">3.</span> You'll receive an email with your detailed invoice and purchase documentation.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">4.</span> Our customer service team will follow up to ensure your complete satisfaction.
            </li>
          </ol>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Back to Homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products/all">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccessPage;
