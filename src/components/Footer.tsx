
import { Link } from "react-router-dom";
import { Car, Instagram, Facebook, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">
                <span className="text-primary">Auto</span>
                <span className="gold-gradient">Elegance</span>
                <span className="text-primary">India</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium automobiles for the discerning buyer. Experience luxury and performance like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/products/superbike" className="text-sm text-muted-foreground hover:text-primary">Superbikes</Link>
              </li>
              <li>
                <Link to="/products/luxury-car" className="text-sm text-muted-foreground hover:text-primary">Luxury Cars</Link>
              </li>
              <li>
                <Link to="/products/sports-car" className="text-sm text-muted-foreground hover:text-primary">Sports Cars</Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary">Cart</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary">Return Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@autoeleganceindia.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="text-sm text-muted-foreground mt-2">
                123 Luxury Avenue, <br />
                Mumbai, Maharashtra 400001, <br />
                India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Auto Elegance India. All rights reserved.</p>
          <p className="mt-2">
            Prices are subject to change. Images are for representation purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
