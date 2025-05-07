
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { formatIndianRupees } from "@/utils/formatCurrency";
import { Car, BadgeIndianRupee } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);
  
  const categories = [
    {
      name: "Superbikes",
      path: "/products/superbike",
      description: "High-performance motorcycles with advanced technology",
      image: "/placeholder.svg",
    },
    {
      name: "Luxury Cars",
      path: "/products/luxury-car",
      description: "Premium vehicles with the finest comfort and craftsmanship",
      image: "/placeholder.svg",
    },
    {
      name: "Sports Cars",
      path: "/products/sports-car",
      description: "Performance-oriented vehicles engineered for speed",
      image: "/placeholder.svg",
    },
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4" variant="outline">
              Premium Collection
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Experience Luxury &<br />
              <span className="gold-gradient">Performance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              India's premier destination for superbikes, luxury and sports cars.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/products/luxury-car">Explore Luxury Cars</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products/superbike">View Superbikes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group block"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Browse {category.name}
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products/all">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Luxury Brands */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Ferrari", "Lamborghini", "Rolls-Royce", "Ducati", "Bentley", "BMW"].map((brand) => (
              <div key={brand} className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Car className="h-10 w-10 text-primary" />
                </div>
                <span className="font-medium text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Price Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Best Price Guarantee</h2>
                <p className="text-muted-foreground mb-6">
                  We're so confident in our competitive pricing that if you find a lower price for the same vehicle elsewhere, we'll match it—and even give you an additional discount.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <BadgeIndianRupee className="h-10 w-10 text-accent" />
                    <div>
                      <h4 className="font-semibold">Transparent Pricing</h4>
                      <p className="text-sm text-muted-foreground">No hidden fees or charges</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeIndianRupee className="h-10 w-10 text-accent" />
                    <div>
                      <h4 className="font-semibold">Financing Available</h4>
                      <p className="text-sm text-muted-foreground">Customized payment plans</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "BMW M 1000 RR",
                    price: 4200000,
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Rolls-Royce Phantom",
                    price: 95000000,
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Ferrari SF90 Stradale",
                    price: 75000000,
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Ducati Panigale V4",
                    price: 2200000,
                    image: "/placeholder.svg",
                  },
                ].map((item) => (
                  <div key={item.name} className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="aspect-square mb-2 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-sm line-clamp-1">{item.name}</h5>
                    <p className="text-sm text-accent font-bold">
                      {formatIndianRupees(item.price)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Browse our exclusive collection of premium vehicles and find your perfect match today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products/luxury-car">Browse Luxury Cars</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/products/superbike">Explore Superbikes</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
