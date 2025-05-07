
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductCategory } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ProductGridProps {
  products: Product[];
  title?: string;
  category?: ProductCategory;
}

const ProductGrid = ({ products, title, category }: ProductGridProps) => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  
  // Filter products by search term
  const filteredProducts = products.filter((product) => {
    const searchLower = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  });
  
  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "featured":
        // Featured items first, then by name
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  
  return (
    <section className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-2/3">
          <Label htmlFor="search" className="mb-2">Search Products</Label>
          <Input
            id="search"
            placeholder="Search by name, brand, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-1/3">
          <Label htmlFor="sort" className="mb-2">Sort By</Label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger id="sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {sortedProducts.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold">No products found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
