import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-lg">ك</span>
              </div>
              <span className="font-bold text-xl font-arabic">Kotobcom</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted bookstore in Msaken, Tunisia. Quality books delivered to your doorstep.
            </p>
            <p className="text-sm font-arabic text-muted-foreground">
              مكتبتكم الموثوقة في مساكن، تونس
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-primary transition-colors">All Books</a></li>
              <li><a href="/shop?category=mushafs" className="hover:text-primary transition-colors">Mushafs</a></li>
              <li><a href="/track" className="hover:text-primary transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li>Cash on Delivery</li>
              <li>Free Shipping</li>
              <li>WhatsApp: +216 29 381 882</li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-semibold">Location</h3>
            <Card className="p-4 bg-background/50">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Msaken, Tunisia</p>
                <p className="text-xs text-muted-foreground">Serving all of Tunisia</p>
                <p className="text-xs font-arabic">مساكن، تونس</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Kotobcom. All rights reserved. | Built with love in Tunisia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;