
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Car } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <Car className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. The vehicle might have been moved or no longer exists.
        </p>
        <Button asChild>
          <Link to="/">Back to Homepage</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
