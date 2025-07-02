import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <span className="text-primary-foreground font-bold text-lg">ك</span>
          </div>
          <span className="font-bold text-xl font-arabic">Kotobcom</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/shop" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Search className="w-4 h-4" />
            <span>Shop</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Contact className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Language Switcher & Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="ghost" size="sm">EN</Button>
            <Button variant="ghost" size="sm">FR</Button>
            <Button variant="ghost" size="sm" className="font-arabic">ع</Button>
          </div>
          
          <Button variant="outline" size="sm" className="relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="sr-only">Shopping cart</span>
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;