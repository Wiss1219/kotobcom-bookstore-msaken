import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!orderNumber) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-2xl font-bold">Order Not Found</h1>
            <p className="text-muted-foreground">
              We couldn't find your order information.
            </p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Animation */}
          <div className={`transition-all duration-1000 ${isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="w-24 h-24 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
            
            <h1 className="text-3xl font-bold text-success mb-2">Order Confirmed!</h1>
            <p className="text-lg font-arabic text-success">تم تأكيد طلبك!</p>
          </div>

          {/* Order Details */}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-center">Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Your order number is:</p>
                <p className="text-2xl font-bold text-primary tracking-wider">{orderNumber}</p>
                <p className="text-sm text-muted-foreground font-arabic">رقم طلبك</p>
              </div>

              <div className="border rounded-lg p-4 bg-muted/30">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  What happens next?
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Order Confirmation</p>
                      <p className="text-muted-foreground">You'll receive a WhatsApp message confirming your order</p>
                      <p className="text-muted-foreground font-arabic text-xs">ستتلقى رسالة واتساب تؤكد طلبك</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-muted-foreground">We'll prepare your books for shipment</p>
                      <p className="text-muted-foreground font-arabic text-xs">سنحضر كتبك للشحن</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-muted-foreground">Your order will be delivered to your address</p>
                      <p className="text-muted-foreground font-arabic text-xs">سيتم توصيل طلبك إلى عنوانك</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <p className="font-semibold text-blue-800 dark:text-blue-200">Delivery Information</p>
                </div>
                <div className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <p>• Cash on Delivery (COD) - Pay when you receive your order</p>
                  <p>• Free delivery across Tunisia</p>
                  <p>• Estimated delivery: 2-5 business days</p>
                  <p className="font-arabic">• الدفع عند الاستلام - شحن مجاني في جميع أنحاء تونس</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Save your order number to track your order status
                </p>
                <p className="text-sm font-arabic text-muted-foreground">
                  احفظ رقم طلبك لتتبع حالة الطلب
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/order-tracking" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Track Order
              </Link>
            </Button>
            
            <Button asChild>
              <Link to="/shop" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-muted-foreground">
                Contact us if you have any questions about your order
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+21629381882">Call: +216 29 381 882</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/21629381882" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <p className="text-sm font-arabic text-muted-foreground">
                اتصل بنا إذا كان لديك أي أسئلة حول طلبك
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;