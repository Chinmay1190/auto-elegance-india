
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";
import { ProductCategory } from "@/types";

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  
  let filteredProducts = products;
  let pageTitle = "All Products";
  
  if (category && ["superbike", "luxury-car", "sports-car"].includes(category)) {
    filteredProducts = products.filter(
      (product) => product.category === category as ProductCategory
    );
    
    pageTitle = category === "superbike"
      ? "Superbikes"
      : category === "luxury-car"
        ? "Luxury Cars"
        : "Sports Cars";
  }
  
  return (
    <Layout>
      <div className="bg-muted/50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">{pageTitle}</h1>
          
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            {category === "superbike"
              ? "High-performance motorcycles engineered for speed, precision, and adrenaline-pumping experiences."
              : category === "luxury-car"
                ? "Experience unparalleled comfort and prestige with our collection of premium luxury vehicles."
                : category === "sports-car"
                  ? "Unleash the raw power and performance of the world's most thrilling sports cars."
                  : "Explore our complete inventory of premium vehicles for the discerning automotive enthusiast."}
          </p>
        </div>
      </div>
      
      <ProductGrid 
        products={filteredProducts}
        category={category as ProductCategory}
      />
    </Layout>
  );
};

export default ProductsPage;
