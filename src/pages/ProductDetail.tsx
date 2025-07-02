import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  title: string;
  title_ar?: string;
  title_fr?: string;
  description?: string;
  description_ar?: string;
  description_fr?: string;
  price: number;
  category: string;
  stock_quantity: number;
  image_url?: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'general': return 'General Books';
      case 'religious': return 'Religious Books';
      case 'mushafs': return 'Mushafs';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'religious': return 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300';
      case 'mushafs': return 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
      default: return 'bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-32"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
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
      <main className="container px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/shop" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {product.image_url ? (
                <img 
                  src={product.image_url} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-muted-foreground">No Image Available</div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge className={getCategoryColor(product.category)} variant="secondary">
                {getCategoryLabel(product.category)}
              </Badge>
              
              <h1 className="text-3xl font-bold">{product.title}</h1>
              
              {product.title_ar && (
                <h2 className="text-xl font-arabic text-muted-foreground">{product.title_ar}</h2>
              )}
              
              <p className="text-3xl font-bold text-primary">${product.price}</p>
              
              <p className="text-sm text-muted-foreground">
                {product.stock_quantity > 0 
                  ? `${product.stock_quantity} in stock` 
                  : 'Out of stock'
                }
              </p>
            </div>

            {product.description && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
                {product.description_ar && (
                  <p className="text-muted-foreground font-arabic text-right">{product.description_ar}</p>
                )}
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <Card className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                      disabled={quantity >= product.stock_quantity}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total:</p>
                    <p className="text-2xl font-bold text-primary">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    disabled={product.stock_quantity === 0}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cash on Delivery Info */}
            <Card className="p-4 bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div>
                  <p className="font-medium">Cash on Delivery Available</p>
                  <p className="text-sm text-muted-foreground">Free delivery across Tunisia</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;